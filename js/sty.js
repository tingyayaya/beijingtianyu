(function(){

    if (!window.sty) {  
            window.sty = {};  
    }; 

    window.sty = {
      
      /*获取的url参数*/ 
      GetQueryString : function (name) {  
            var reg = new RegExp("(^|&)" + name + "=([^&]*)(&|$)", "i");  
            var r = window.location.search.substr(1).match(reg);  
            if (r != null)  
                return unescape(r[2]);  
            return null;  
      },
      GetUrlHash : function (){
            return location.hash;
      },
      Toast : function(content){
          var content2= ' <div class="toast-in">'+content+'</div>';
          $('body').append(content2);

          $('.toast-in').css({
            'left':($(window).width() - $(".toast-in").innerWidth())/2
          });

          var t = setTimeout(function(){
                  $('.toast-in').remove();
          },2000);
      },
    }
})();

