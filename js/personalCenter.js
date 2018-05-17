$(document).ready(function(){
  /*http://tydcscxt.com/beijing-tianyu-ailiwu/html/personalCenter.html*/
  
  if(!sessionStorage.openId){
     //getOpenid();
  }

  function getOpenid(){
     var code = sty.GetQueryString("code");
  
      if(code){
            var appid = 'wx50e81fa4e8b451bd';
            var secret = 'c1a9364e5d9aaed4560d3018e14a5716'
            $.ajax({
                async: false,
                url: "../getopenid.php", //这是我的服务端处理文件php的
                type: "GET",
                //下面几行是jsoup，如果去掉下面几行的注释，后端对应的返回结果也要去掉注释
                // dataType: 'jsonp',
                //jsonp: 'callback', //jsonp的值自定义,如果使用jsoncallback,那么服务器端,要返回一个jsoncallback的值对应的对象.
                // jsonpCallback:'callback',
                data: {code:code}, //传递本页面获取的code到后台，以便后台获取openid
                timeout: 5000,
                success: function (result) {
                    console.log(result);
                    sessionStorage.accessToken = result.access_token;
                    sessionStorage.openId = result.openid;
                },
                error: function (jqXHR, textStatus, errorThrown) {
                    console.log(textStatus);
                }
            });
      }
  }
  


  function userInfo(){
        var mydata = {
            type:'userInfo',
            access_token:sessionStorage.accessToken,
            openid:sessionStorage.openId
        }
        mydata = JSON.stringify(mydata);
        $.ajax({
            async: false,
            url: "../weixin.php", //这是我的服务端处理文件php的
            type: "GET",
            data: {data:mydata}, 
            timeout: 5000,
            success: function (result) {
                console.log(result);
                $('.header-icon').attr('src',result.headimgurl);
                $('.person-name').html(result.nickname);
            },
            error: function (jqXHR, textStatus, errorThrown) {
                console.log(textStatus);
            }
        });
  }

  //userInfo()
  
})