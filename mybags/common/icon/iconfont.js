(function(window){var svgSprite='<svg><symbol id="icon-xialasanjiao" viewBox="0 0 1024 1024"><path d="M679.763 383.447l-167.763 290.572-167.763-290.572z"  ></path></symbol><symbol id="icon-xialasanjiao1" viewBox="0 0 1024 1024"><path d="M512 632l-192-240 384 0L512 632z"  ></path></symbol><symbol id="icon-shouji" viewBox="0 0 1024 1024"><path d="M511.224242 876.993939l0-33.09899-0.129293 0L511.224242 876.993939 511.224242 876.993939zM742.917172 49.131313 279.531313 49.131313C242.941414 49.131313 213.333333 78.739394 213.333333 115.329293l0 794.375758c0 36.589899 29.608081 66.19798 66.19798 66.19798l463.385859 0c36.589899 0 66.19798-29.608081 66.19798-66.19798L809.115152 115.329293C809.115152 78.739394 779.507071 49.131313 742.917172 49.131313L742.917172 49.131313zM511.224242 910.092929c-36.460606 0-66.19798-29.737374-66.19798-66.19798s29.737374-66.19798 66.19798-66.19798 66.19798 29.737374 66.19798 66.19798S547.684848 910.092929 511.224242 910.092929L511.224242 910.092929zM709.818182 711.111111 312.630303 711.111111 312.630303 148.428283 709.818182 148.428283 709.818182 711.111111 709.818182 711.111111z"  ></path></symbol><symbol id="icon-shouji1" viewBox="0 0 1030 1024"><path d="M735.418182 46.545455H295.563636C223.418182 46.545455 162.909091 104.727273 162.909091 179.2v665.6c0 72.145455 58.181818 132.654545 132.654545 132.654545h439.854546c72.145455 0 132.654545-58.181818 132.654545-132.654545V179.2c0-74.472727-60.509091-132.654545-132.654545-132.654545z m86.109091 798.254545c0 46.545455-39.563636 86.109091-86.109091 86.109091H295.563636c-46.545455 0-86.109091-39.563636-86.109091-86.109091V179.2c0-46.545455 39.563636-86.109091 86.109091-86.109091h439.854546c46.545455 0 86.109091 39.563636 86.109091 86.109091v665.6z"  ></path><path d="M251.345455 844.8h528.290909V162.909091H251.345455v681.890909z m46.545454-635.345455h435.2v588.8H297.890909V209.454545z"  ></path><path d="M514.327273 886.690909m-30.254546 0a30.254545 30.254545 0 1 0 60.509091 0 30.254545 30.254545 0 1 0-60.509091 0Z"  ></path></symbol><symbol id="icon-shanglasanjiaofuhao" viewBox="0 0 1024 1024"><path d="M512 435.2l-127.93344 158.72h255.86688z"  ></path></symbol></svg>';var script=function(){var scripts=document.getElementsByTagName("script");return scripts[scripts.length-1]}();var shouldInjectCss=script.getAttribute("data-injectcss");var ready=function(fn){if(document.addEventListener){if(~["complete","loaded","interactive"].indexOf(document.readyState)){setTimeout(fn,0)}else{var loadFn=function(){document.removeEventListener("DOMContentLoaded",loadFn,false);fn()};document.addEventListener("DOMContentLoaded",loadFn,false)}}else if(document.attachEvent){IEContentLoaded(window,fn)}function IEContentLoaded(w,fn){var d=w.document,done=false,init=function(){if(!done){done=true;fn()}};var polling=function(){try{d.documentElement.doScroll("left")}catch(e){setTimeout(polling,50);return}init()};polling();d.onreadystatechange=function(){if(d.readyState=="complete"){d.onreadystatechange=null;init()}}}};var before=function(el,target){target.parentNode.insertBefore(el,target)};var prepend=function(el,target){if(target.firstChild){before(el,target.firstChild)}else{target.appendChild(el)}};function appendSvg(){var div,svg;div=document.createElement("div");div.innerHTML=svgSprite;svgSprite=null;svg=div.getElementsByTagName("svg")[0];if(svg){svg.setAttribute("aria-hidden","true");svg.style.position="absolute";svg.style.width=0;svg.style.height=0;svg.style.overflow="hidden";prepend(svg,document.body)}}if(shouldInjectCss&&!window.__iconfont__svg__cssinject__){window.__iconfont__svg__cssinject__=true;try{document.write("<style>.svgfont {display: inline-block;width: 1em;height: 1em;fill: currentColor;vertical-align: -0.1em;font-size:16px;}</style>")}catch(e){console&&console.log(e)}}ready(appendSvg)})(window)