window.onload = function(){
  
  // if(!sessionStorage.openId){
  //       /*登录跳转授权*/
  //       window.location.href = 'https://open.weixin.qq.com/connect/oauth2/authorize?appid=wx50e81fa4e8b451bd&redirect_uri=http://tydcscxt.com/beijing-tianyu-ailiwu/html/personalCenter.html&response_type=code&scope=snsapi_userinfo#wechat_redirect';
  // }
   
  
  if(!sessionStorage.bindID){
        //dentifyUser();
  }

  function dentifyUser(){
      var mydata = {
          'Openid':sessionStorage.openId
      }

      $.ajax({
        type:'get',
        url:'http://182.92.188.214:8080/ckapi/api/8/Foun_bdkh_copy.jsp',
        data:mydata,
        success:function(data){
          console.log(data);
          if(data.data.length==0){
            $('.bindSign').html('未认证');
            $('.ziliao-box').on('click',function(){
              window.location.href = 'bindPhone.html';
            })
            $('.person-list li').on('click',function(){
              window.location.href = 'bindPhone.html';
            })
          }
        }
      })
  } 

}