(()=>{"use strict";var e={d:(t,s)=>{for(var o in s)e.o(s,o)&&!e.o(t,o)&&Object.defineProperty(t,o,{enumerable:!0,get:s[o]})}};e.g=function(){if("object"==typeof globalThis)return globalThis;try{return this||new Function("return this")()}catch(e){if("object"==typeof window)return window}}(),e.o=(e,t)=>Object.prototype.hasOwnProperty.call(e,t),(()=>{var t;e.g.importScripts&&(t=e.g.location+"");var s=e.g.document;if(!t&&s&&(s.currentScript&&(t=s.currentScript.src),!t)){var o=s.getElementsByTagName("script");if(o.length)for(var l=o.length-1;l>-1&&!t;)t=o[l--].src}if(!t)throw new Error("Automatic publicPath is not supported in this browser");t=t.replace(/#.*$/,"").replace(/\?.*$/,"").replace(/\/[^\/]+$/,"/"),e.p=t})(),e.d({},{x:()=>l}),e.p,e.p,e.p,e.p,e.p,e.p,e.p;let t=0,s=0;const o=new Audio;o.src="../assets/song-scroll.mp3";let l=(localStorage.getItem("isGameMuted"),!0);document.addEventListener("DOMContentLoaded",(()=>{const e=document.querySelector(".start__mute-i"),r=document.querySelector(".start__mute-i::after");l&&"block"===(null==r?void 0:r.style.display)&&(r.style.display="none"),l||"none"!==(null==r?void 0:r.style.display)||(r.style.display="block"),null==e||e.addEventListener("click",(()=>{l=!l,localStorage.setItem("isGameMuted",`${l}`),r&&(r.style.display=l?"block":"none"),console.log("clicked",l,localStorage.getItem("isGameMuted"))})),(()=>{const e=document.querySelector(".start__songs-list"),r=document.querySelectorAll(".start__song");0!==r.length&&(r[t].classList.add("start__song--selected"),null==e||e.addEventListener("wheel",(c=>{if(s+=1,s%15==0)if(c.deltaY>0){t<r.length-1&&(t++,l&&o.play()),r[t-1].classList.remove("start__song--selected"),r[t].classList.add("start__song--selected");const s=76;e.scrollTo({top:e.scrollTop+s,left:0,behavior:"smooth"})}else t>0&&(t--,l&&o.play()),r[t+1].classList.remove("start__song--selected"),r[t].classList.add("start__song--selected"),e.scrollTo({top:e.scrollTop+-76,left:0,behavior:"smooth"});else c.preventDefault()})))})()}))})();