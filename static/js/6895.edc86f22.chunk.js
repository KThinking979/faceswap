"use strict";(self.webpackChunkfaceswap=self.webpackChunkfaceswap||[]).push([[6895,897],{91940:(e,t,s)=>{s.d(t,{Kc:()=>r,MF:()=>n,ay:()=>o,nn:()=>a});var i=s(24451);const n=(0,i.j)((()=>s.e(465).then(s.bind(s,90465))),(e=>e.ImageFast)),a=(0,i.j)((()=>s.e(9606).then(s.bind(s,19606))),(e=>e.ImageSkeleton)),r=(0,i.j)((()=>s.e(2613).then(s.bind(s,92613))),(e=>e.ImageSkeletonShow)),o=(0,i.j)((()=>s.e(8977).then(s.bind(s,88977))),(e=>e.ImageSkeletonFace))},90897:(e,t,s)=>{s.r(t),s.d(t,{SlideAds:()=>y});var i=s(9950),n=s(29703),a=s(81389),r=s(31317),o=s(81374),c=s(20393),d=s(34418),l=s(6365),h=s(50327),x=s(70712),u=s(45236),p=s(36742),w=s(26451),g=s(44414);const y=e=>{let{isOpen:t,isAds:s=!0,onPressPay:y,onPressAds:f,onClose:j}=e;const{t:m}=(0,p.B)(),{user:S,configs:v}=(0,i.useContext)(u.rf),{setUser:b}=(0,i.useContext)(u.D8),[A,k]=(0,i.useState)(S&&S.numAdsGen?S.numAdsGen:1);(0,i.useEffect)((()=>{C()}),[]);const C=async()=>{if(v&&S){const e=parseInt((new Date).toISOString().slice(0,10).replace("-","").replace("-",""));e>S.expDateAdsGen&&(k(1),b({...S,numAdsGen:1,expDateAdsGen:e}),(0,x.TK)({id:S.id,numAdsGen:1,expDateAdsGen:e}))}};return(0,g.jsxs)(n.q,{direction:"bottom",in:t,style:{zIndex:1e3,height:"100%",flex:1,justifyContent:"space-between"},children:[(0,g.jsx)(a.B,{onClick:()=>j&&j(),h:"55%",opacity:.8,backgroundColor:"black"}),(0,g.jsxs)(a.B,{h:"45%",padding:2,spacing:4,backgroundColor:"gray.800",justifyContent:"center",children:[(0,g.jsxs)(a.B,{spacing:1,mb:4,children:[(0,g.jsx)(r.E,{textAlign:"center",fontWeight:"bold",fontSize:"16px",color:"white",children:m(w.P.dashboard.not_enough_coins)}),(0,g.jsx)(r.E,{textAlign:"center",fontSize:"14px",color:"gray.400",children:m(w.P.dashboard.please_buy_more_coin_to_create)})]}),(0,g.jsx)(o.$,{colorScheme:"green",borderRadius:"full",size:"md",onClick:()=>y&&y(),leftIcon:(0,g.jsx)(c.I,{as:l.jXZ,boxSize:6}),children:(0,g.jsx)(d.z,{children:(0,g.jsx)(r.E,{color:"white",fontSize:16,fontWeight:"700",children:m(w.P.account.buy_coins)})})}),(0,g.jsx)(r.E,{display:s?"block":"none",color:"white",fontSize:14,textAlign:"center",children:m(w.P.dashboard.or)}),(0,g.jsxs)(a.B,{display:s?"flex":"none",children:[(0,g.jsx)(o.$,{colorScheme:"red",size:"md",borderRadius:"full",onClick:async()=>{const e=Object.keys(v.ADS).length,t=A<=e?v.ADS["".concat(A)]:v.ADS["".concat(A%e===0?e:A%e)];window.Adsgram.init({blockId:t}).show().then((e=>{let t=A+1;(0,x.TK)({id:S.id,numAdsGen:t}),b({...S,numAdsGen:t}),k(t),f&&f()})).catch((e=>{}))},leftIcon:(0,g.jsx)(c.I,{as:h.I1Q,boxSize:6}),isDisabled:!!(v&&v.limitAdsGen<=A),children:(0,g.jsx)(r.E,{color:"white",fontSize:16,fontWeight:"700",children:m(w.P.dashboard.watch_ads)})}),(0,g.jsx)(r.E,{textAlign:"center",fontSize:"14px",color:"gray.300",children:v&&v.limitAdsGen<=A?m(w.P.dashboard.available_tomorrow):m(w.P.dashboard.with_default_setting)})]})]})]})}},6895:(e,t,s)=>{s.r(t),s.d(t,{GenArtisticPage:()=>K});var i=s(9950),n=s(76455),a=s(22099),r=s(63247),o=s(81389),c=s(92481),d=s(34418),l=s(81374),h=s(20393),x=s(31317),u=s(45236),p=s(13564),w=s(33246),g=s(70712),y=s(44456),f=s(67385),j=s(67956),m=s(91940),S=s(69591),v=s(25495),b=s(90897),A=s(68412),k=s(44414);let C=window.innerWidth>500?500:window.innerWidth,I=!1;const K=()=>{const e=(0,p.Zp)(),t=(0,a.d)(),s=(0,p.zy)(),{user:K,configs:_}=(0,i.useContext)(u.rf),{setUser:E}=(0,i.useContext)(u.D8),[P,z]=(0,i.useState)(!1),[F,G]=(0,i.useState)(!1),[T,D]=(0,i.useState)(!1),[N,O]=(0,i.useState)(),[B,W]=(0,i.useState)(""),[R,Q]=(0,i.useState)(""),[U,H]=(0,i.useState)(""),[$,J]=(0,i.useState)(""),[V,Z]=(0,i.useState)("");(0,i.useEffect)((()=>{window.scrollTo(0,0);const e=s.state;K&&e&&e.dataAI&&q({isFree:e.dataAI.isFree})}),[]);const q=async t=>{let i,{isFree:n}=t;I=!1;let a=0;try{const t=s.state;if(K&&t&&t.dataAI){const e=t.dataAI,s=K;z(!0),G(!1),O(e),W(""),Q(""),H(""),J(""),Z("");const r=e.style?e.style.key:"";let o="".concat(r.replace("{prompt}",e.prompt));const c=e.style?e.style.negativeKey:"",d="".concat(e.negativeKey," ").concat(c);if((n||!n&&parseFloat(s.coins)>=parseFloat(e.feeCoin))&&e.type===y.Wk.GEN)for(let t=0;t<e.samples&&!I;t++){let s=e.seed;if(-1===e.seed&&(s=(0,f.RZ)({min:0,max:y.Vm})),e.type===y.Wk.GEN&&"ProGen"===e.model){const t={...e,stylePreset:e.style.stylePreset,seed:s,textKey:o,negativeKey:d,token:_.token,server:_.server};i=e.isText?await(0,g.F)(t):await(0,g.fO)(t),!i.error&&i.isSuccess||(await(0,f.yy)(1e3),i=e.isText?await(0,g.F)(t):await(0,g.fO)(t)),!i.error&&i.isSuccess||(await(0,f.yy)(1e3),i=e.isText?await(0,g.F)(t):await(0,g.fO)(t)),!i.error&&i.isSuccess||(await(0,f.yy)(1e3),i=e.isText?await(0,g.F)(t):await(0,g.fO)(t)),!i.error&&i.isSuccess||(await(0,f.yy)(1e3),i=e.isText?await(0,g.Ip)({...e,seed:s,steps:20*e.steps/30,width:e.width,height:e.height,model:"dreamshaper_8_93211.safetensors",textKey:o,negativeKey:d,isHD:!0,token:_.tokenNov,server:_.serverNov}):await(0,g.Ip)({...e,base64:"",seed:s,steps:20*e.steps/30,width:e.width,height:e.height,model:"dreamshaper_8_93211.safetensors",textKey:o,negativeKey:d,isHD:!0,token:_.tokenNov,server:_.serverNov})),!i.error&&i.isSuccess||(await(0,f.yy)(1e3),e.isText,i=await(0,g.Ip)({...e,seed:s,steps:20*e.steps/30,width:e.width,height:e.height,model:"dreamshaper_8_93211.safetensors",textKey:o,negativeKey:d,isHD:!0,token:_.tokenNov,server:_.serverNov}))}if(e.type===y.Wk.GEN&&"ProGen"!==e.model){const t={...e,seed:s,steps:20*e.steps/30,width:e.width,height:e.height,textKey:o,negativeKey:d,token:_.tokenNov,server:_.serverNov};i=e.isText?await(0,g.Ip)(t):await(0,g.EQ)(t),!i.error&&i.isSuccess||(await(0,f.yy)(1e3),i=e.isText?await(0,g.Ip)(t):await(0,g.EQ)(t)),!i.error&&i.isSuccess||(await(0,f.yy)(1e3),i=e.isText?await(0,g.Ip)(t):await(0,g.EQ)(t)),!i.error&&i.isSuccess||(await(0,f.yy)(1e3),i=e.isText?await(0,g.Ip)(t):await(0,g.EQ)(t))}if(i&&!i.error){if(0===t&&W(i.data),4===e.samples)switch(t){case 0:Q(i.data);break;case 1:H(i.data);break;case 2:J(i.data);break;case 3:Z(i.data)}i.isSuccess&&(a+=parseFloat(e.feeCoin)/e.samples)}}if(z(!1),n){const t=(new Date).toUTCString(),s="".concat(K.dateAds,"_").concat(e.mode,"_ADS_V1_").concat(t);(0,g.TK)({id:K.id,updatedAt:s})}else{const e=parseFloat(s.coins)-a,t=(new Date).toUTCString(),i="".concat(s.coins,"-").concat(a,"=").concat(e,"_Gen_V1_IOS_").concat(t);null===e&&void 0===e||(await(0,g.TK)({id:K.id,coins:e<0?0:e,updatedAt:i}),E({...K,coins:e<0?0:e}))}G(!0)}else e(-1)}catch(r){console.log("Error ",r),z(!1)}},M=(0,i.useCallback)((async()=>{K&&(parseFloat(K.coins)>=parseFloat(N.feeCoin)?q({isFree:!1}):D(!0))}),[K,N]),Y=(0,i.useCallback)((async()=>{if(K)try{z(!0);const e=(0,j.A)(),s=await(0,g.jH)({data:B,folder:"albums",name:e,isUrl:!!B.includes("http")}),i={id:e,type:N.type,isImage:!0,prompt:N.prompt,negative:N.negative,style:N.style.title,width:N.width,height:N.height,steps:N.steps,scale:N.scale,uri:s};await(0,g.Y4)({id:K.id,data:i}),t({title:"Saved",status:"success",position:"bottom",isClosable:!0,duration:2e3}),z(!1)}catch(e){z(!1)}}),[N,B]),X=C;return(0,k.jsxs)(r.az,{children:[(0,k.jsxs)(n.mg,{children:[(0,k.jsx)("title",{children:"Gen Artistic"}),(0,k.jsx)("meta",{name:"description",content:"FaceSwap"})]}),(0,k.jsxs)(o.B,{h:"100vh",w:C,pt:20,px:2,justifyContent:"space-between",children:[(0,k.jsxs)(o.B,{flex:1,children:[N&&1===N.samples&&(0,k.jsx)(o.B,{flex:1,justifyContent:"center",children:(0,k.jsx)(m.Kc,{uri:B,width:C,height:C/(N.width/N.height)},B)}),N&&4===N.samples&&!F&&(0,k.jsx)(o.B,{flex:1,justifyContent:"center",children:(0,k.jsxs)(c.x,{templateColumns:"repeat(2, 1fr)",gap:6,children:[(0,k.jsx)(m.Kc,{uri:R,width:X/2,height:X/(N.width/N.height)/2},1),(0,k.jsx)(m.Kc,{uri:U,width:X/2,height:X/(N.width/N.height)/2},2),(0,k.jsx)(m.Kc,{uri:$,width:X/2,height:X/(N.width/N.height)/2},3),(0,k.jsx)(m.Kc,{uri:V,width:X/2,height:X/(N.width/N.height)/2},4)]})}),N&&4===N.samples&&F&&(0,k.jsx)(o.B,{flex:1,justifyContent:"center",children:(0,k.jsxs)(d.z,{spacing:1,children:[(0,k.jsx)(o.B,{w:"10%",children:(0,k.jsxs)(c.x,{templateColumns:"repeat(1, 1fr)",gap:6,children:[(0,k.jsx)(m.Kc,{isActive:B===R,uri:R,width:.2*X/2,height:.2*X/(N.width/N.height)/2,onPress:()=>{W(R)}},1),(0,k.jsx)(m.Kc,{isActive:B===U,uri:U,width:.2*X/2,height:.2*X/(N.width/N.height)/2,onPress:()=>{W(U)}},2),(0,k.jsx)(m.Kc,{isActive:B===$,uri:$,width:.2*X/2,height:.2*X/(N.width/N.height)/2,onPress:()=>{W($)}},3),(0,k.jsx)(m.Kc,{isActive:B===V,uri:V,width:.2*X/2,height:.2*X/(N.width/N.height)/2,onPress:()=>{W(V)}},4)]})}),(0,k.jsx)(o.B,{w:"90%",children:(0,k.jsx)(m.Kc,{uri:B,width:.8*X,height:.8*X/(N.width/N.height)},B)})]})})]}),(0,k.jsx)(o.B,{spacing:4,justifyContent:"center",w:"full",backgroundColor:"black",maxW:"500px",children:(0,k.jsxs)(d.z,{spacing:2,children:[(0,k.jsx)(l.$,{py:4,my:4,colorScheme:"purple",borderRadius:"full",onClick:M,leftIcon:(0,k.jsx)(h.I,{as:S.aO_}),flex:1,children:(0,k.jsx)(d.z,{children:(0,k.jsx)(x.E,{color:"white",fontSize:16,fontWeight:"700",children:"Re-Create"})})}),(0,k.jsx)(l.$,{flex:1,py:4,mx:2,my:4,colorScheme:"blue",borderRadius:"full",onClick:Y,leftIcon:(0,k.jsx)(h.I,{as:v.gWm}),children:(0,k.jsx)(d.z,{children:(0,k.jsx)(x.E,{color:"white",fontSize:16,fontWeight:"700",children:"Save"})})})]})})]}),(0,k.jsx)(b.SlideAds,{isOpen:T,onClose:()=>D(!T),onPressPay:()=>{D(!1),e(A.W.PAYMENT)},onPressAds:()=>{D(!1),q({isFree:!0})}}),(0,k.jsx)(w.aj,{isOpen:P})]})}},29703:(e,t,s)=>{s.d(t,{q:()=>h});var i=s(84850),n=s(97681),a=s(53291),r=s(61489),o=s(9950),c=s(44414),d={exit:{duration:.15,ease:i.xf.easeInOut},enter:{type:"spring",damping:25,stiffness:180}},l={exit:e=>{let{direction:t,transition:s,transitionEnd:n,delay:a}=e;var r;const{exit:o}=(0,i.Jv)({direction:t});return{...o,transition:null!=(r=null==s?void 0:s.exit)?r:i.yA.exit(d.exit,a),transitionEnd:null==n?void 0:n.exit}},enter:e=>{let{direction:t,transitionEnd:s,transition:n,delay:a}=e;var r;const{enter:o}=(0,i.Jv)({direction:t});return{...o,transition:null!=(r=null==n?void 0:n.enter)?r:i.yA.enter(d.enter,a),transitionEnd:null==s?void 0:s.enter}}},h=(0,o.forwardRef)((function(e,t){const{direction:s="right",style:o,unmountOnExit:d,in:h,className:x,transition:u,transitionEnd:p,delay:w,motionProps:g,...y}=e,f=(0,i.Jv)({direction:s}),j=Object.assign({position:"fixed"},f.position,o),m=!d||h&&d,S=h||d?"enter":"exit",v={transitionEnd:p,transition:u,direction:s,delay:w};return(0,c.jsx)(a.N,{custom:v,children:m&&(0,c.jsx)(r.P.div,{...y,ref:t,initial:"exit",className:(0,n.cx)("chakra-slide",x),animate:S,exit:"exit",custom:v,variants:l,style:j,...g})})}));h.displayName="Slide"}}]);