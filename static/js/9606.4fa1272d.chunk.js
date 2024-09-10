"use strict";(self.webpackChunkfaceswap=self.webpackChunkfaceswap||[]).push([[9606],{19606:(e,r,n)=>{n.r(r),n.d(r,{ImageSkeleton:()=>u});var t=n(9950),a=n(66086),o=n(46569),s=n(31317),i=n(63247),c=n(13088),l=n(54924),d=n(44414);const u=e=>{let{key:r,uri:n,isActive:u,title:f,onPress:m}=e;const[p,b]=(0,t.useState)(!1);return(0,d.jsxs)(a.o,{pos:"relative",onClick:()=>m&&m(),flexDirection:"column",children:[""!==n&&(0,d.jsx)(o._,{backgroundColor:u?"blue.400":"transparent",p:u?1:0,display:p?"inline-block":"none",w:"100%",borderRadius:"xl",src:n,alt:"art",onLoad:e=>{b(!0)}}),f&&p&&(0,d.jsx)(s.E,{mt:1,textAlign:"center",color:"white",fontSize:14,children:f}),(0,d.jsxs)(i.az,{w:"100%",boxShadow:"lg",display:p&&""!==n?"none":"inline-block",children:[(0,d.jsx)(c.Q,{size:"10"}),(0,d.jsx)(l.r,{mt:"2",noOfLines:4,spacing:"2",skeletonHeight:"2"})]})]},r)}},6787:(e,r,n)=>{n.d(r,{E:()=>k});var t=n(9950);var a=n(97681),o=n(26306),s=n(82867),i=n(88283),c=n(58039),l=n(66296),d=n(34336),u=n(44414),f=(0,o.B)("div",{baseStyle:{boxShadow:"none",backgroundClip:"padding-box",cursor:"default",color:"transparent",pointerEvents:"none",userSelect:"none","&::before, &::after, *":{visibility:"hidden"}}}),m=(0,s.Vg)("skeleton-start-color"),p=(0,s.Vg)("skeleton-end-color"),b=(0,i.i7)({from:{opacity:0},to:{opacity:1}}),h=(0,i.i7)({from:{borderColor:m.reference,background:m.reference},to:{borderColor:p.reference,background:p.reference}}),k=(0,c.R)(((e,r)=>{const n={...e,fadeDuration:"number"===typeof e.fadeDuration?e.fadeDuration:.4,speed:"number"===typeof e.speed?e.speed:.8},i=(0,l.Vl)("Skeleton",n),c=function(){const e=(0,t.useRef)(!0);return(0,t.useEffect)((()=>{e.current=!1}),[]),e.current}(),{startColor:k="",endColor:v="",isLoaded:y,fadeDuration:g,speed:x,className:S,fitContent:C,...j}=(0,s.MN)(n),[w,E]=(0,d.rd)("colors",[k,v]),_=function(e){const r=(0,t.useRef)();return(0,t.useEffect)((()=>{r.current=e}),[e]),r.current}(y),L=(0,a.cx)("chakra-skeleton",S),A={...w&&{[m.variable]:w},...E&&{[p.variable]:E}};if(y){const e=c||_?"none":"".concat(b," ").concat(g,"s");return(0,u.jsx)(o.B.div,{ref:r,className:L,__css:{animation:e},...j})}return(0,u.jsx)(f,{ref:r,className:L,...j,__css:{width:C?"fit-content":void 0,...i,...A,_dark:{...i._dark,...A},animation:"".concat(x,"s linear infinite alternate ").concat(h)}})}));k.displayName="Skeleton"},54924:(e,r,n)=>{n.d(r,{r:()=>p});var t=n(6787),a=n(69587);var o=n(40779),s=n(9950);var i=n(26396),c=n(97681);function l(e){var r,n;const t=(0,c.Gv)(e)?e:{fallback:null!=e?e:"base"},a=(0,i.D)().__breakpoints.details.map((e=>{let{minMaxQuery:r,breakpoint:n}=e;return{breakpoint:n,query:r.replace("@media screen and ","")}})),l=a.map((e=>e.breakpoint===t.fallback)),d=function(e){let r=arguments.length>1&&void 0!==arguments[1]?arguments[1]:{};const{ssr:n=!0,fallback:t}=r,{getWindow:a}=(0,o.O)(),i=Array.isArray(e)?e:[e];let c=Array.isArray(t)?t:[t];c=c.filter((e=>null!=e));const[l,d]=(0,s.useState)((()=>i.map(((e,r)=>({media:e,matches:n?!!c[r]:a().matchMedia(e).matches})))));return(0,s.useEffect)((()=>{const e=a();d(i.map((r=>({media:r,matches:e.matchMedia(r).matches}))));const r=i.map((r=>e.matchMedia(r))),n=e=>{d((r=>r.slice().map((r=>r.media===e.media?{...r,matches:e.matches}:r))))};return r.forEach((e=>{"function"===typeof e.addListener?e.addListener(n):e.addEventListener("change",n)})),()=>{r.forEach((e=>{"function"===typeof e.removeListener?e.removeListener(n):e.removeEventListener("change",n)}))}}),[a]),l.map((e=>e.matches))}(a.map((e=>e.query)),{fallback:l,ssr:t.ssr});return null!=(n=null==(r=a[d.findIndex((e=>1==e))])?void 0:r.breakpoint)?n:t.fallback}function d(e,r){var n;const t=l((0,c.Gv)(r)?r:{fallback:null!=r?r:"base"}),o=(0,i.D)();if(!t)return;const s=Array.from((null==(n=o.__breakpoints)?void 0:n.keys)||[]);return function(e,r){let n=arguments.length>2&&void 0!==arguments[2]?arguments[2]:a.fi,t=Object.keys(e).indexOf(r);if(-1!==t)return e[r];let o=n.indexOf(r);for(;o>=0;){const r=n[o];if(e.hasOwnProperty(r)){t=o;break}o-=1}if(-1!==t)return e[n[t]]}(Array.isArray(e)?Object.fromEntries(Object.entries((0,a.a1)(e,s)).map((e=>{let[r,n]=e;return[r,n]}))):e,t,s)}var u=n(26306),f=n(44414);var m=3,p=e=>{const{noOfLines:r=m,spacing:n="0.5rem",skeletonHeight:a="0.5rem",className:o,startColor:s,endColor:i,isLoaded:l,fadeDuration:p,speed:b,variant:h,size:k,colorScheme:v,children:y,...g}=e,x=d("number"===typeof r?[r]:r)||m,S=Array(x).fill(1).map(((e,r)=>r+1));const C=e=>x>1&&e===S.length?"80%":"100%",j=(0,c.cx)("chakra-skeleton__group",o);return(0,f.jsx)(u.B.div,{className:j,...g,children:S.map(((e,r)=>{if(l&&r>0)return null;const o=l?null:{mb:e===S.length?"0":n,width:C(e),height:a};return(0,f.jsx)(t.E,{startColor:s,endColor:i,isLoaded:l,fadeDuration:p,speed:b,variant:h,size:k,colorScheme:v,...o,children:0===r?y:void 0},S.length.toString()+e)}))})};p.displayName="SkeletonText"},13088:(e,r,n)=>{n.d(r,{Q:()=>o});var t=n(6787),a=n(44414),o=e=>{let{size:r="2rem",...n}=e;return(0,a.jsx)(t.E,{borderRadius:"full",boxSize:r,...n})};o.displayName="SkeletonCircle"}}]);