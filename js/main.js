//字体
(function (doc, win) {
      var docEl = doc.documentElement,
        resizeEvt = 'orientationchange' in window ? 'orientationchange' : 'resize',
        recalc = function () {
          var clientWidth = docEl.clientWidth;
          if (!clientWidth) return;
          var frst = 20 * (clientWidth / 320);
          docEl.style.fontSize = frst*31.25+'%';
          //console.log(frst*31.25+'%');
        };

      if (!doc.addEventListener) return;
      win.addEventListener(resizeEvt, recalc, false);
      doc.addEventListener('DOMContentLoaded', recalc, false);
})(document, window);


//vue-axios
var baseURL = 'http://tydcxt.com:8080/ckapi/api/8/'

sessionStorage.openId = 'ojNqat4-n8y3qlfvjBw-VUEnj6pM'


window.onload= function(){
  
 
  // $('.select-bar ul li').click(function(){

  //     var index_ = $(this).index();
  
  //     if($('.select-bar-hide').eq(index_).hasClass('select-show')){
  //         $('.select-bar-hide').eq(index_).slideUp();
  //         $('.select-bar-hide').eq(index_).removeClass('select-show');

  //     }else{
  //       $('.select-bar-hide').slideUp();
  //       $('.select-bar-hide').eq(index_).slideDown();
  //       $('.select-bar-hide').removeClass('select-show');
  //       $('.select-bar-hide').eq(index_).addClass('select-show');
  //     }
      
  //     if($('.select-bar-hide').hasClass('select-show')){
  //       $('body').css({'height':'100%','overflow':'hidden'});
  //     }else{
  //       $('body').css({'height':'','overflow':''});
  //     }
  // })
  
  // $('.select-bar-hide ul li').click(function(){
  //    $('.select-bar-hide').slideUp();
  // })

}