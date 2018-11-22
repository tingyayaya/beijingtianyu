(function(){

    if (!window.sty) {  
            window.sty = {};  
    }; 

    window.sty = {
      payurl: 'http://vip5.chenksoft.com:8080/ckpay/',
      baseUrl: 'http://hzpan2015.oicp.net:88/ckapi/api/3/',
      /*获取的url参数*/ 
      GetQueryString : function (name) {  
        var reg = new RegExp("(^|&)" + name + "=([^&]*)(&|$)", "i");  
        var search = decodeURI(window.location.search);
        var r = search.substr(1).match(reg);  
        if (r != null)  
            return unescape(r[2]);  
        return null;  
      },
      GetUrlHash : function (){
            return location.hash;
      },
      checkType : function (str, type) {
        switch (type) {
          case 'email':
              return /^[\w-]+(\.[\w-]+)*@[\w-]+(\.[\w-]+)+$/.test(str);
          case 'card':
              return /^(^[1-9]\d{7}((0\d)|(1[0-2]))(([0|1|2]\d)|3[0-1])\d{3}$)|(^[1-9]\d{5}[1-9]\d{3}((0\d)|(1[0-2]))(([0|1|2]\d)|3[0-1])((\d{4})|\d{3}[Xx])$)$/.test(str);
          case 'phone':
              return /^1[3|4|5|7|8][0-9]{9}$/.test(str);
          case 'tel':
              return /^(0\d{2,3}-\d{7,8})(-\d{1,4})?$/.test(str);
          case 'number':
              return /^[0-9]$/.test(str);
          case 'english':
              return /^[a-zA-Z]+$/.test(str);
          case 'chinese':
              return /^[\u4E00-\u9FA5]+$/.test(str);
          case 'lower':
              return /^[a-z]+$/.test(str);
          case 'upper':
              return /^[A-Z]+$/.test(str);
          default :
              return true;
          }
      }
    }
})();

