(function(){

    if (!window.toast) {  
        window.toast = {};  
    }; 
    
    window.toast = {
      checkId: function(obj){
        var args = [...arguments];
        var flag = this.checkPhone(args[0])&this.checkIdCard(args[1]);
        return flag;
      },
      checkAddress: function(key){
        var val = document.getElementById(key).value;
        if(val=='undefined'||val==''){
          this.toastTop('请填写您的地址');
          return false;
        }else{
          return true;
        }
      },
      checkName: function(name){
         var checkName = document.getElementById(name);
         if(checkName.value=='undefined'||checkName.value==''){
            this.toastTop('请填写您的姓名');
            return false
         }else{
            return true;
         }
      },
      checkPhone: function(value){
        if(/^1[3|4|5|6|7|8|9][0-9]{9}$/.test(value)){
          return true;
        }else{
          return false
        }
      },
      checkIdCard: function(value){
        if(/^(^[1-9]\d{7}((0\d)|(1[0-2]))(([0|1|2]\d)|3[0-1])\d{3}$)|(^[1-9]\d{5}[1-9]\d{3}((0\d)|(1[0-2]))(([0|1|2]\d)|3[0-1])((\d{4})|\d{3}[Xx])$)$/.test(value)){
          return true;
        }else{
          return false
        }
      },
      checkdate: function(key){
         var checkName = document.getElementById(key);
         if(checkName.value=='undefined'||checkName.value==''){
            this.toastTop('请选择日期');
            return false
         }else{
            return true;
         }
      },
      checkPassWord: function(password){
         var obj = document.getElementById(password);
         if(obj.value=='undefined'||obj.value==''){
            this.toastTop('请输入密码');
            return false
         }else{
            return true;
         }
      },
      checkCode: function(code){
         var obj = document.getElementById(code);
         if(obj.value=='undefined'||obj.value==''){
            this.toastTop('请输入验证码');
            return false
         }else{
            return true;
         }
      },
      getCode: function(miao){
          var codeD = document.getElementById('getCode');
          var n = 59;
          if(miao>0){
        	  n=miao;
          }
          codeD.innerHTML = n+' 秒';

          var timer0 = setInterval(function(){
            n--;
            codeD.removeEventListener('click',this.getCode);
            codeD.innerHTML = n+' 秒';
            if(n==0){
              codeD.innerHTML = '重新发送';
              codeD.addEventListener('click',this.getCode);
              clearInterval(timer0);
            }
          },1000);
      },
      toastCenter: function(key,link){
        var div = document.createElement('div');
        div.setAttribute('id', 'toast');
        div.innerHTML = key;
        this.fadeIn(div);
        var self = this;
        // var timer0 = setInterval(function(){
        //      self.fadeout(div);
        //      clearInterval(timer0);
        //      //console.log(link)
        //      if(link){
        //       window.location.href = link;
        //      }
        // },2500);
      },
      toastTop: function(key){
        var div = document.createElement('div');
        div.setAttribute('id', 'toast');
        div.innerHTML = key;
        this.fadeIn(div);
        var self = this;
        var timer0 = setInterval(function(){
             self.fadeout(div);
             clearInterval(timer0);
        },2500);
       
      },
      toastTopSuccess: function(key){
        var div = document.createElement('div');
        div.setAttribute('id', 'toast-success');
        div.innerHTML = key;
        this.fadeIn(div);
        var self = this;
        var timer0 = setInterval(function(){
             self.fadeout(div);
             clearInterval(timer0);
        },2500);
      },
      fadeIn: function(obj){
        var num = 0;
        var count = 15;
        var timer0 = setInterval(function(){
             num++;
             var a = 1-num/count;
             obj.style.opacity = 1-Math.pow(a, 2);
             if(num>=10){
               document.body.appendChild(obj);
               clearInterval(timer0);
             }
        },30);
      },
      fadeout: function(obj){
        var num = 10;
        var count = 15;
        var timer0 = setInterval(function(){
             num--;
             var a = 1-num/count;
             obj.style.opacity = 1-Math.pow(a, 2);
             if(num<=0){
               document.body.removeChild(obj);
               clearInterval(timer0);
             }
        },30);
      }
    }   
})();

