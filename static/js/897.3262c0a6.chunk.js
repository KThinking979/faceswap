"use strict";(self.webpackChunkfaceswap=self.webpackChunkfaceswap||[]).push([[897],{90897:(e,n,t)=>{t.r(n),t.d(n,{SlideAds:()=>m});var i=t(9950),s=t(29703),o=t(81389),r=t(31317),a=t(81374),d=t(20393),c=t(34418),l=t(6365),x=t(50327),u=t(70712),h=t(45236),f=t(36742),p=t(26451),b=t(44414);let g=1;const m=e=>{let{isOpen:n,isAds:t=!0,onPressPay:m,onPressAds:y,onClose:A}=e;const{t:j}=(0,f.B)(),{user:S,configs:w}=(0,i.useContext)(h.rf),{setUser:k}=(0,i.useContext)(h.D8),[v,E]=(0,i.useState)(S&&S.numAdsGen?S.numAdsGen:1);(0,i.useEffect)((()=>{C()}),[]);const C=async()=>{if(w&&S){const e=parseInt((new Date).toISOString().slice(0,10).replace("-","").replace("-",""));e>S.expDateAdsGen&&(E(1),k({...S,numAdsGen:1,expDateAdsGen:e}),(0,u.TK)({id:S.id,numAdsGen:1,expDateAdsGen:e}))}g=1},z=(0,i.useCallback)((e=>{g<w.countADS?P():g=1}),[]),P=async()=>{g++;const e=Object.keys(w.ADS).length,n=w.ADS.sort((()=>Math.random()-.5));let t=v<=e?n["".concat(v-1)]:n["".concat(v%e===0?e-1:v%e-1)];t||(t=w.ADS["".concat(e-1)]);window.Adsgram.init({blockId:t}).show().then((e=>{let n=v+1;(0,u.TK)({id:S.id,numAdsGen:n}),k({...S,numAdsGen:n}),E(n),y&&y()})).catch((e=>{z(e)}))};return(0,b.jsxs)(s.q,{direction:"bottom",in:n,style:{zIndex:1e3,height:"100%",flex:1,justifyContent:"space-between"},children:[(0,b.jsx)(o.B,{onClick:()=>A&&A(),h:"55%",opacity:.8,backgroundColor:"black"}),(0,b.jsxs)(o.B,{h:"45%",padding:2,spacing:4,backgroundColor:"gray.800",justifyContent:"center",children:[(0,b.jsxs)(o.B,{spacing:1,mb:4,children:[(0,b.jsx)(r.E,{textAlign:"center",fontWeight:"bold",fontSize:"16px",color:"white",children:j(p.P.dashboard.not_enough_coins)}),(0,b.jsx)(r.E,{textAlign:"center",fontSize:"14px",color:"gray.400",children:j(p.P.dashboard.please_buy_more_coin_to_create)})]}),(0,b.jsx)(a.$,{colorScheme:"green",borderRadius:"full",size:"md",onClick:()=>m&&m(),leftIcon:(0,b.jsx)(d.I,{as:l.jXZ,boxSize:6}),children:(0,b.jsx)(c.z,{children:(0,b.jsx)(r.E,{color:"white",fontSize:16,fontWeight:"700",children:j(p.P.account.buy_coins)})})}),(0,b.jsx)(r.E,{display:t?"block":"none",color:"white",fontSize:14,textAlign:"center",children:j(p.P.dashboard.or)}),(0,b.jsxs)(o.B,{display:t?"flex":"none",children:[(0,b.jsx)(a.$,{colorScheme:"red",size:"md",borderRadius:"full",onClick:P,leftIcon:(0,b.jsx)(d.I,{as:x.I1Q,boxSize:6}),isDisabled:!!(w&&w.limitAdsGen<=v),children:(0,b.jsx)(r.E,{color:"white",fontSize:16,fontWeight:"700",children:j(p.P.dashboard.watch_ads)})}),(0,b.jsx)(r.E,{textAlign:"center",fontSize:"14px",color:"gray.300",children:w&&w.limitAdsGen<=v?j(p.P.dashboard.available_tomorrow):j(p.P.dashboard.with_default_setting)})]})]})]})}},29703:(e,n,t)=>{t.d(n,{q:()=>x});var i=t(84850),s=t(97681),o=t(53291),r=t(61489),a=t(9950),d=t(44414),c={exit:{duration:.15,ease:i.xf.easeInOut},enter:{type:"spring",damping:25,stiffness:180}},l={exit:e=>{let{direction:n,transition:t,transitionEnd:s,delay:o}=e;var r;const{exit:a}=(0,i.Jv)({direction:n});return{...a,transition:null!=(r=null==t?void 0:t.exit)?r:i.yA.exit(c.exit,o),transitionEnd:null==s?void 0:s.exit}},enter:e=>{let{direction:n,transitionEnd:t,transition:s,delay:o}=e;var r;const{enter:a}=(0,i.Jv)({direction:n});return{...a,transition:null!=(r=null==s?void 0:s.enter)?r:i.yA.enter(c.enter,o),transitionEnd:null==t?void 0:t.enter}}},x=(0,a.forwardRef)((function(e,n){const{direction:t="right",style:a,unmountOnExit:c,in:x,className:u,transition:h,transitionEnd:f,delay:p,motionProps:b,...g}=e,m=(0,i.Jv)({direction:t}),y=Object.assign({position:"fixed"},m.position,a),A=!c||x&&c,j=x||c?"enter":"exit",S={transitionEnd:f,transition:h,direction:t,delay:p};return(0,d.jsx)(o.N,{custom:S,children:A&&(0,d.jsx)(r.P.div,{...g,ref:n,initial:"exit",className:(0,s.cx)("chakra-slide",u),animate:j,exit:"exit",custom:S,variants:l,style:y,...b})})}));x.displayName="Slide"}}]);