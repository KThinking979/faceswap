"use strict";(self.webpackChunkfaceswap=self.webpackChunkfaceswap||[]).push([[4916],{91940:(e,t,i)=>{i.d(t,{Kc:()=>s,MF:()=>a,ay:()=>c,nn:()=>o});var n=i(24451);const a=(0,n.j)((()=>i.e(465).then(i.bind(i,90465))),(e=>e.ImageFast)),o=(0,n.j)((()=>i.e(9606).then(i.bind(i,19606))),(e=>e.ImageSkeleton)),s=(0,n.j)((()=>i.e(2613).then(i.bind(i,92613))),(e=>e.ImageSkeletonShow)),c=(0,n.j)((()=>i.e(8977).then(i.bind(i,88977))),(e=>e.ImageSkeletonFace))},74916:(e,t,i)=>{i.r(t),i.d(t,{DashBoardPage:()=>P});var n=i(9950),a=i(76455),o=i(63247),s=i(81389),c=i(92481),l=i(20393),d=i(31317),r=i(34418),m=i(50327),h=i(21912),g=i(52423),p=i(6365),E=i(42935),A=i(47738),I=i(90917),S=i(45236),u=i(70712),j=i(66256),w=i(91940),_=i(44456),C=i(13564),x=i(68412),f=i(29949),T=i(36742),W=i(26451),y=i(28555),F=i(44414);let L=window.innerWidth>500?500:window.innerWidth;window.innerHeight;const O=[{mode:_.g.TEXT_ARTISTIC,path:x.W.TEXT_ARTISTIC,title:"Text Artistic",icon:m.P9_,emoji:""},{mode:_.g.IMAGE_ARTISTIC,path:x.W.IMAGE_ARTISTIC,title:"Image Artistic",icon:h.hjn,emoji:""},{mode:_.g.SD3_SUPPER,path:x.W.SD3_SUPPER,title:"SD3 Supper",icon:g.$iZ,emoji:""},{mode:_.g.ILLUSION_FACE,path:x.W.ILLUSION_FACE,title:"Illusion",icon:A.HY1,emoji:""},{mode:_.g.FACE_SWAP,path:x.W.FACE_SWAP,title:"FaceSwap",icon:p.yOh,emoji:""},{mode:_.g.UPSCALE,path:x.W.UPSCALE,title:"Upscale",icon:f.Uf2,emoji:""},{mode:_.g.FACE_STICKER,path:x.W.FACE_STICKER,title:"Face Sticker",icon:E.jg2,emoji:""},{mode:_.g.TEXT_ANIME,path:x.W.TEXT_ANIME,title:"Text Anime",icon:I.ZQS,emoji:""},{mode:_.g.IMAGE_ANIME,path:x.W.IMAGE_ANIME,title:"Image Anime",icon:A.a6J,emoji:""},{mode:_.g.VIDEO_ANIME,path:x.W.VIDEO_ANIME,title:"Video Anime",icon:m.Am_,emoji:""}],b=[{mode:_.g.TRENDING,path:x.W.DASHBOARD,title:"Hot Trending",icon:A.HY1,emoji:""},{mode:_.g.FACE_SWAP,path:x.W.FACE_SWAP,title:"Face Swap",icon:p.yOh,emoji:""},{mode:_.g.ILLUSION_FACE,path:x.W.ILLUSION_FACE,title:"Illusion Face",icon:A.HY1,emoji:""},{mode:_.g.LIVE_FACE,path:x.W.LIVE_FACE,title:"Live Face",icon:p.yOh,emoji:""},{mode:_.g.POSING,path:x.W.POSING,title:"Posing Animation",icon:p.yOh,emoji:""},{mode:_.g.VIDEO_FACE_SWAP,path:x.W.VIDEO_FACE_SWAP,title:"Video Faceswap",icon:p.yOh,emoji:""}],P=()=>{const e=(0,C.Zp)(),{t:t,i18n:i}=(0,T.B)(),{user:m,configs:h}=(0,n.useContext)(S.rf),{setUser:g,setConfigs:p,setListAIStyleAll:E}=(0,n.useContext)(S.D8),[A,I]=(0,n.useState)(!0),[_,f]=(0,n.useState)(!1),[P,D]=(0,n.useState)([]),[M,k]=(0,n.useState)(!0),[N,R]=(0,n.useState)();(0,n.useEffect)((()=>{window.scrollTo(0,0),U()}),[]);const U=async()=>{I(!0),await H({textKey:"",idLast:N}),await v(),I(!1)},v=async()=>{try{var e;let t=h;h||(t=await(0,u.Y_)(),p(t));const n=await(0,u.Vo)();E(n);const a=null===(e=window.Telegram)||void 0===e?void 0:e.WebApp;if(a&&!m){a.ready();const e=a.initDataUnsafe.user;if(e){let n={id:e.id,username:"".concat(e.last_name," ").concat(e.first_name),coins:t.initCoin?t.initCoin:0,language:"en",dir:i.dir()};const a=await(0,u.wz)(n.id);a?n={...a,dir:i.dir(),username:"".concat(e.last_name," ").concat(e.first_name)}:await(0,u.kg)(n),i.changeLanguage(n.language),g(n)}}if(t.isTest){let e={id:"7287936269",username:"Kai Test",coins:100,language:"en",dir:i.dir()};const t=await(0,u.wz)(e.id);t?e={...t,dir:i.dir()}:await(0,u.kg)(e),g(e)}}catch(t){}},H=async e=>{let{textKey:t,idLast:i}=e;if(!_&&M){f(!0);let e=await(0,u.xD)({idLast:i});if(e&&e.length){D([...P,...e]);const t=e[e.length-1];R(t.id)}else k(!1);f(!1)}},V=(0,n.useCallback)((async()=>{const{scrollTop:e,scrollHeight:t,clientHeight:i}=document.documentElement;e+i>=t-.5&&await H({textKey:"",idLast:N})}),[P,N,_,M]);(0,n.useEffect)((()=>(window.addEventListener("scroll",V),()=>window.removeEventListener("scroll",V))),[V]);const B=(0,n.useCallback)((async t=>{const i=x.W["".concat(t.type)];e(i)}),[]);return(0,F.jsxs)(o.az,{children:[(0,F.jsxs)(a.mg,{children:[(0,F.jsx)("title",{children:"Dashboard"}),(0,F.jsx)("meta",{name:"description",content:"FaceSwap"})]}),(0,F.jsxs)(s.B,{h:"100vh",w:L,py:20,px:2,spacing:10,children:[(0,F.jsx)(s.B,{borderRadius:8,py:2,spacing:5,children:(0,F.jsx)(c.x,{templateColumns:"repeat(3, 1fr)",gap:5,children:O.map((e=>{const t=!!(h&&h.MODES&&h.MODES.find((t=>t===e.mode)));return(0,F.jsxs)(s.B,{display:t?"flex":"none",flex:1,alignItems:"center",justifyContent:"center",borderColor:"#818cf8",borderWidth:2,borderRadius:8,bg:"transparent",minW:20,minH:20,spacing:2,_active:{bg:"blue.500"},onClick:()=>B(e),children:[(0,F.jsx)(l.I,{color:"white",as:e.icon,boxSize:8}),(0,F.jsx)(d.E,{textAlign:"center",color:"white",fontSize:14,children:e.title})]},e.mode)}))})}),(0,F.jsxs)(s.B,{spacing:4,padding:0,pb:40,onScroll:V,children:[b.map((e=>{const t=!!(h&&h.MODES&&h.MODES.find((t=>t===e.mode)));return(0,F.jsx)(s.B,{display:t?"flex":"none",children:(0,F.jsx)(y.O,{mode:e.mode,title:e.title,onPressItem:e=>B(e)})})})),(0,F.jsx)(r.z,{mt:2,spacing:2,display:A?"none":"flex",children:(0,F.jsx)(d.E,{color:"white",fontSize:16,fontWeight:"700",children:"\ud83c\udfa8 ".concat(t(W.P.dashboard.artistic_key))})}),(0,F.jsx)(j.A,{columnsCount:2,gutter:"16px",children:P.map(((t,i)=>{const{id:n,uri:a}=t;return(0,F.jsx)(w.MF,{uri:a,onPress:()=>{e(x.W.TEXT_ARTISTIC,{state:{dataAI:t}})}},i)}))})]})]})]})}}}]);