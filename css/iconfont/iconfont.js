(function(window){var svgSprite='<svg><symbol id="icon-wancheng" viewBox="0 0 1024 1024"><path d="M512.186242 6.139837c-278.100856 0-504.362043 226.261187-504.362043 504.362043S234.085386 1014.863922 512.186242 1014.863922s504.362043-226.261187 504.362043-504.362043S790.287097 6.139837 512.186242 6.139837zM794.409998 413.799444 466.418872 750.040465c-7.838525 8.023744-18.590404 12.579503-29.816073 12.642948l-0.227174 0c-11.141758 0-21.834284-4.433986-29.715789-12.314467L230.289943 574.038962c-16.420995-16.396435-16.420995-43.013653 0-59.430554 16.416901-16.420995 43.013653-16.420995 59.430554 0l146.32767 146.281621 298.275337-305.866223c16.253172-16.58063 42.891879-16.891715 59.430554-0.655939C810.356179 370.600573 810.646797 397.21779 794.409998 413.799444z" fill="#1296db" ></path></symbol><symbol id="icon-home" viewBox="0 0 1024 1024"><path d="M736.189673 898.909091H889.6V430.012509L512.581818 140.218182l-377.018182 289.794327V898.909091h152.246691C294.733964 781.106036 392.459636 687.709091 512 687.709091s217.2672 93.396945 224.189673 211.2z m-45.071128 0c-9.017018-91.298909-86.029964-162.618182-179.700363-162.618182S340.734836 807.610182 331.717818 898.909091h359.400727zM512 79.127273l430.545455 330.685672V944.872727H81.454545V409.812945L512 79.127273z"  ></path></symbol><symbol id="icon-contact" viewBox="0 0 1024 1024"><path d="M874.141475 781.963636v-50.171345h49.961891c27.577018 0 49.929309-22.475636 49.929309-50.170182V205.067636c0-27.731782-22.353455-50.170182-49.929309-50.170181h-674.362182c-27.581673 0-49.929309 22.4384-49.929309 50.170181v37.611055h-49.966546v-37.611055a100.061091 100.061091 0 0 1 29.16771-70.848A100.204218 100.204218 0 0 1 249.773766 104.727273H924.067293a100.203055 100.203055 0 0 1 70.764218 29.493527A100.0576 100.0576 0 0 1 1024.000384 205.0688v476.516073a100.077382 100.077382 0 0 1-29.168873 70.852654 100.207709 100.207709 0 0 1-70.764218 29.488873h-49.925818V781.963636zM62.14322 304.364218C52.119657 314.429673 46.510929 328.064 46.545839 342.377891v476.517236c-0.0384 14.331345 5.565673 27.966836 15.58109 38.033455A53.629673 53.629673 0 0 0 99.934639 872.727273l673.952581-0.034909a53.625018 53.625018 0 0 0 37.861237-15.781237A53.531927 53.531927 0 0 0 827.345839 819.013818V342.377891c0.034909-14.312727-5.573818-27.947055-15.589237-38.009018-10.031709-10.074764-23.653236-15.753309-37.756509-15.787055H99.95442a53.6064 53.6064 0 0 0-37.8112 15.7824zM99.891584 242.036364h674.108509a100.166982 100.166982 0 0 1 70.737455 29.488872A100.077382 100.077382 0 0 1 873.891293 342.379055v476.516072a100.077382 100.077382 0 0 1-29.152582 70.852655 100.177455 100.177455 0 0 1-70.738618 29.488873L99.859002 919.272727a100.175127 100.175127 0 0 1-70.729309-29.515636A100.084364 100.084364 0 0 1 0.000384 818.895127V342.376727a100.080873 100.080873 0 0 1 29.156073-70.852654A100.153018 100.153018 0 0 1 99.89042 242.036364zM91.927657 474.570473v-46.545455h540.005236v46.545455H91.927657z m0 176.502691v-46.545455h540.005236v46.545455H91.927657z"  ></path></symbol><symbol id="icon-home-full" viewBox="0 0 1024 1024"><path d="M736.581818 944.872727v-32.581818c0-124.033164-100.548655-224.581818-224.581818-224.581818s-224.581818 100.548655-224.581818 224.581818v32.581818H81.454545V409.812945L512 79.127273l430.545455 330.685672V944.872727H736.581818z"  ></path></symbol><symbol id="icon-contact-full" viewBox="0 0 1024 1024"><path d="M874.141475 781.963636v-50.171345h49.961891c27.577018 0 49.929309-22.475636 49.929309-50.170182V205.067636c0-27.731782-22.353455-50.170182-49.929309-50.170181h-674.362182c-27.581673 0-49.929309 22.4384-49.929309 50.170181v37.611055h-49.966546v-37.611055a100.061091 100.061091 0 0 1 29.16771-70.848A100.204218 100.204218 0 0 1 249.773766 104.727273H924.067293a100.203055 100.203055 0 0 1 70.764218 29.493527A100.0576 100.0576 0 0 1 1024.000384 205.0688v476.516073a100.077382 100.077382 0 0 1-29.168873 70.852654 100.207709 100.207709 0 0 1-70.764218 29.488873h-49.925818V781.963636zM99.89042 242.036364h674.109673a100.166982 100.166982 0 0 1 70.737455 29.488872A100.077382 100.077382 0 0 1 873.891293 342.379055v476.516072a100.077382 100.077382 0 0 1-29.152582 70.852655 100.177455 100.177455 0 0 1-70.738618 29.488873L99.859002 919.272727a100.175127 100.175127 0 0 1-70.729309-29.515636A100.084364 100.084364 0 0 1 0.000384 818.895127V342.376727a100.080873 100.080873 0 0 1 29.156073-70.852654A100.153018 100.153018 0 0 1 99.89042 242.036364zM91.927657 474.570473h540.005236v-46.545455H91.927657v46.545455z m0 176.502691h540.005236v-46.545455H91.927657v46.545455z"  ></path></symbol><symbol id="icon-mine" viewBox="0 0 1051 1024"><path d="M525.476638 524.367825c71.396872 0.003742 137.374402-38.08382 173.074709-99.917954 35.697812-61.834134 35.697812-138.014246 0-199.84838-35.700307-61.829145-101.677837-99.916706-173.074709-99.912965-110.364999 0.003742-199.828424 89.473403-199.828424 199.839649 0 110.36001 89.463425 199.830918 199.828424 199.83965zM75.837116 949.022246c56.329978-187.575347 236.308268-324.736468 449.639522-324.736468 213.325018 0 393.303308 137.161121 449.634534 324.736468h-54.405457C866.125642 789.450368 709.799133 674.243508 525.476638 674.243508c-184.327484 0-340.65524 115.20686-395.235313 274.776244h-54.405457z m449.639522-374.699186c-137.968097 0-249.801121-111.831776-249.80112-249.794885 0-137.964356 111.833023-249.801121 249.80112-249.80112 137.961861 0 249.794884 111.836765 249.794885 249.80112 0 137.963108-111.833023 249.794884-249.794885 249.794885z"  ></path></symbol><symbol id="icon-mine-full" viewBox="0 0 1051 1024"><path d="M75.837116 949.020999c56.329978-187.5741 236.308268-324.736468 449.639522-324.736468 213.325018 0 393.303308 137.162368 449.634534 324.736468h-899.274056z m449.639522-374.697939c-137.968097 0-249.801121-111.831776-249.80112-249.794885 0-137.964356 111.833023-249.801121 249.80112-249.80112 137.961861 0 249.794884 111.836765 249.794885 249.80112 0 137.963108-111.833023 249.794884-249.794885 249.794885z"  ></path></symbol></svg>';var script=function(){var scripts=document.getElementsByTagName("script");return scripts[scripts.length-1]}();var shouldInjectCss=script.getAttribute("data-injectcss");var ready=function(fn){if(document.addEventListener){if(~["complete","loaded","interactive"].indexOf(document.readyState)){setTimeout(fn,0)}else{var loadFn=function(){document.removeEventListener("DOMContentLoaded",loadFn,false);fn()};document.addEventListener("DOMContentLoaded",loadFn,false)}}else if(document.attachEvent){IEContentLoaded(window,fn)}function IEContentLoaded(w,fn){var d=w.document,done=false,init=function(){if(!done){done=true;fn()}};var polling=function(){try{d.documentElement.doScroll("left")}catch(e){setTimeout(polling,50);return}init()};polling();d.onreadystatechange=function(){if(d.readyState=="complete"){d.onreadystatechange=null;init()}}}};var before=function(el,target){target.parentNode.insertBefore(el,target)};var prepend=function(el,target){if(target.firstChild){before(el,target.firstChild)}else{target.appendChild(el)}};function appendSvg(){var div,svg;div=document.createElement("div");div.innerHTML=svgSprite;svgSprite=null;svg=div.getElementsByTagName("svg")[0];if(svg){svg.setAttribute("aria-hidden","true");svg.style.position="absolute";svg.style.width=0;svg.style.height=0;svg.style.overflow="hidden";prepend(svg,document.body)}}if(shouldInjectCss&&!window.__iconfont__svg__cssinject__){window.__iconfont__svg__cssinject__=true;try{document.write("<style>.svgfont {display: inline-block;width: 1em;height: 1em;fill: currentColor;vertical-align: -0.1em;font-size:16px;}</style>")}catch(e){console&&console.log(e)}}ready(appendSvg)})(window)