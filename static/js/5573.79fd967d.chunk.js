"use strict";(self.webpackChunkfaceswap=self.webpackChunkfaceswap||[]).push([[5573],{5573:(e,t,a)=>{a.r(t),a.d(t,{PickFace:()=>d});var n=a(9950),r=a(66086),o=a(46569),s=a(81374),i=a(42935),c=a(36275),l=a(67385),h=a(44414);const d=e=>{let{isActive:t,onChange:a}=e;const[d,g]=(0,n.useState)();return(0,n.useEffect)((()=>{!t&&g(null)}),[t]),(0,h.jsx)(r.o,{children:(0,h.jsx)(c.Ay,{onDrop:async e=>{let t=e[0];t=await new Promise(((e,a)=>{const n=new Image;let r;n.onload=function(){t.width=n.width,t.height=n.height,e(t)},r=URL.createObjectURL(t),n.src=r}));const n=await(0,l.Sk)(t),r={title:"Custom",width:t.width,height:t.height,_width:t.width,_height:t.height,file:t,base64:n};g(r),r&&a(r)},accept:{"image/jpeg":[],"image/png":[]},multiple:!1,children:e=>{let{getRootProps:a,getInputProps:n}=e;return(0,h.jsx)("div",{...a({className:"dropzone",onDrop:e=>e.stopPropagation()}),children:(0,h.jsxs)(r.o,{borderRadius:8,minH:40,children:[(0,h.jsx)("input",{...n()}),d&&(0,h.jsx)(r.o,{children:(0,h.jsx)(o._,{style:{width:100,height:175},backgroundColor:t?"blue.400":"transparent",p:t?1:0,borderRadius:"xl",objectFit:"cover",m:2,src:"".concat(d.base64),alt:"art"})}),!d&&(0,h.jsx)(s.$,{size:"sm",colorScheme:"white",variant:"ghost",borderRadius:"full",_hover:{backgroundColor:"back"},leftIcon:(0,h.jsx)(i.vzv,{color:"gray",size:40})})]})})}})})}},67385:(e,t,a)=>{a.d(t,{RZ:()=>r,Sk:()=>o,hs:()=>s,nJ:()=>i,yy:()=>n});const n=e=>new Promise((t=>setTimeout(t,e))),r=e=>{let{min:t,max:a}=e;return Math.floor(Math.random()*(a-t+1))+t},o=e=>new Promise(((t,a)=>{const n=new FileReader;n.onloadend=()=>t(n.result),n.readAsDataURL(e)})),s=async e=>{const t=await fetch(e),a=await t.blob();return new Promise(((e,t)=>{const n=new FileReader;n.readAsDataURL(a),n.onloadend=()=>{const t=n.result;e(t)},n.onerror=t}))},i=async e=>{let{imageSrc:t,rate:a,iw:n,ih:r}=e,o=0,s=0,i=0,l=0;r>n||r===n&&a>1?(o=0,s=r/2-n/(2*a),i=n,l=n/a,s<0&&(o=n/2-r*a/2,s=0,i=r*a,l=r)):(o=n/2-r*a/2,s=0,i=r*a,l=r,o<0&&(o=0,s=r/2-n/(2*a),i=n,l=n/a));const h=await(d=t,new Promise(((e,t)=>{const a=new Image;a.addEventListener("load",(()=>e(a))),a.addEventListener("error",(e=>t(e))),a.setAttribute("crossOrigin","anonymous"),a.src=d})));var d;const g=document.createElement("canvas"),u=g.getContext("2d");g.width=i,g.height=l,u.drawImage(h,o,s,i,l,0,0,i,l);const w=g.toDataURL("image/jpeg",1);return{file:c(w,"img.png"),base64:w}},c=(e,t)=>{for(var a=e.split(","),n=a[0].match(/:(.*?);/)[1],r=atob(a[1]),o=r.length,s=new Uint8Array(o);o--;)s[o]=r.charCodeAt(o);return new File([s],t,{type:n})}}}]);