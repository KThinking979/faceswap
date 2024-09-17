"use strict";(self.webpackChunkfaceswap=self.webpackChunkfaceswap||[]).push([[5978],{45978:(e,r,n)=>{n.r(r),n.d(r,{AccountPage:()=>T});var i=n(9950),s=n(76455),o=n(22099),t=n(63247),a=n(81389),c=n(97681),l=n(58039),d=n(26306),h=n(44414);(0,l.R)((function(e,r){const{spacing:n="0.5rem",spacingX:s,spacingY:o,children:t,justify:a,direction:l,align:g,className:u,shouldWrapChildren:m,...p}=e,f=(0,i.useMemo)((()=>m?i.Children.map(t,((e,r)=>(0,h.jsx)(x,{children:e},r))):t),[t,m]);return(0,h.jsx)(d.B.div,{ref:r,className:(0,c.cx)("chakra-wrap",u),...p,children:(0,h.jsx)(d.B.ul,{className:"chakra-wrap__list",__css:{display:"flex",flexWrap:"wrap",justifyContent:a,alignItems:g,flexDirection:l,listStyleType:"none",gap:n,columnGap:s,rowGap:o,padding:"0"},children:f})})})).displayName="Wrap";var x=(0,l.R)((function(e,r){const{className:n,...i}=e;return(0,h.jsx)(d.B.li,{ref:r,__css:{display:"flex",alignItems:"flex-start"},className:(0,c.cx)("chakra-wrap__listitem",n),...i})}));x.displayName="WrapItem";var g=n(80221),[u,m]=(0,g.q)({name:"AvatarStylesContext",hookName:"useAvatarStyles",providerName:"<Avatar/>"});function p(e){var r;const n=e.split(" "),i=null!=(r=n[0])?r:"",s=n.length>1?n[n.length-1]:"";return i&&s?"".concat(i.charAt(0)).concat(s.charAt(0)):i.charAt(0)}function f(e){const{name:r,getInitials:n,...i}=e,s=m();return(0,h.jsx)(d.B.div,{role:"img","aria-label":r,...i,__css:s.label,children:r?null==n?void 0:n(r):null})}f.displayName="AvatarName";var j=e=>(0,h.jsxs)(d.B.svg,{viewBox:"0 0 128 128",color:"#fff",width:"100%",height:"100%",className:"chakra-avatar__svg",...e,children:[(0,h.jsx)("path",{fill:"currentColor",d:"M103,102.1388 C93.094,111.92 79.3504,118 64.1638,118 C48.8056,118 34.9294,111.768 25,101.7892 L25,95.2 C25,86.8096 31.981,80 40.6,80 L87.4,80 C96.019,80 103,86.8096 103,95.2 L103,102.1388 Z"}),(0,h.jsx)("path",{fill:"currentColor",d:"M63.9961647,24 C51.2938136,24 41,34.2938136 41,46.9961647 C41,59.7061864 51.2938136,70 63.9961647,70 C76.6985159,70 87,59.7061864 87,46.9961647 C87,34.2938136 76.6985159,24 63.9961647,24"})]}),b=n(35812);function y(e){const{src:r,srcSet:n,onError:s,onLoad:o,getInitials:t,name:a,borderRadius:c,loading:l,iconLabel:x,icon:g=(0,h.jsx)(j,{}),ignoreFallback:u,referrerPolicy:m,crossOrigin:p}=e,y=(0,b.l)({src:r,onError:s,crossOrigin:p,ignoreFallback:u});return!r||!("loaded"===y)?a?(0,h.jsx)(f,{className:"chakra-avatar__initials",getInitials:t,name:a}):(0,i.cloneElement)(g,{role:"img","aria-label":x}):(0,h.jsx)(d.B.img,{src:r,srcSet:n,alt:a,onLoad:o,referrerPolicy:m,crossOrigin:null!=p?p:void 0,className:"chakra-avatar__img",loading:l,__css:{width:"100%",height:"100%",objectFit:"cover",borderRadius:c}})}y.displayName="AvatarImage";var w=n(66296),A=n(82867),v={display:"inline-flex",alignItems:"center",justifyContent:"center",textAlign:"center",textTransform:"uppercase",fontWeight:"medium",position:"relative",flexShrink:0},S=(0,l.R)(((e,r)=>{const n=(0,w.o5)("Avatar",e),[s,o]=(0,i.useState)(!1),{src:t,srcSet:a,name:l,showBorder:x,borderRadius:g="full",onError:m,onLoad:f,getInitials:b=p,icon:S=(0,h.jsx)(j,{}),iconLabel:C=" avatar",loading:_,children:k,borderColor:z,ignoreFallback:N,crossOrigin:B,referrerPolicy:W,...I}=(0,A.MN)(e),E={borderRadius:g,borderWidth:x?"2px":void 0,...v,...n.container};return z&&(E.borderColor=z),(0,h.jsx)(d.B.span,{ref:r,...I,className:(0,c.cx)("chakra-avatar",e.className),"data-loaded":(0,c.sE)(s),__css:E,children:(0,h.jsxs)(u,{value:n,children:[(0,h.jsx)(y,{src:t,srcSet:a,loading:_,onLoad:(0,c.Hj)(f,(()=>{o(!0)})),onError:m,getInitials:b,name:l,borderRadius:g,icon:S,iconLabel:C,ignoreFallback:N,crossOrigin:B,referrerPolicy:W}),k]})})}));S.displayName="Avatar";var C=n(31317),_=n(34418),k=n(66086),z=n(46569),N=n(81374),B=(0,l.R)((function(e,r){const{borderLeftWidth:n,borderBottomWidth:i,borderTopWidth:s,borderRightWidth:o,borderWidth:t,borderStyle:a,borderColor:l,...x}=(0,w.Vl)("Divider",e),{className:g,orientation:u="horizontal",__css:m,...p}=(0,A.MN)(e),f={vertical:{borderLeftWidth:n||o||t||"1px",height:"100%"},horizontal:{borderBottomWidth:i||s||t||"1px",width:"100%"}};return(0,h.jsx)(d.B.hr,{ref:r,"aria-orientation":u,...p,__css:{...x,border:"0",borderColor:l,borderStyle:a,...f[u],...m},className:(0,c.cx)("chakra-divider",g)})}));B.displayName="Divider";var W=n(45236),I=n(6365),E=n(50327),P=n(70712),R=n(13564),D=n(68412),L=n(44456),F=n(36742),M=n(26451);let O=window.innerWidth>500?500:window.innerWidth;window.innerHeight;const T=()=>{const e=(0,R.Zp)(),{t:r}=(0,F.B)(),c=(0,o.d)(),{user:l,configs:d,listAIStyleAll:g}=(0,i.useContext)(W.rf),{setUser:u,setConfigs:m}=i.useContext(W.D8),[p,f]=(0,i.useState)(l&&l.numAds?l.numAds:1),[j,b]=(0,i.useState)(1);(0,i.useEffect)((()=>{y()}),[]);const y=async()=>{if(l&&d){if(d&&l){const e=parseInt((new Date).toISOString().slice(0,10).replace("-","").replace("-",""));e>l.expDateAds?(b(d.coinAds),f(1),u({...l,numAds:1,expDateAds:e}),(0,P.TK)({id:l.id,numAds:1,expDateAds:e})):b(d.coinAds)}}else e(D.W.DASHBOARD)};let w=L.Yj.find((e=>l&&e.key===l.language));return w=w||L.Yj[0],(0,h.jsxs)(t.az,{children:[(0,h.jsxs)(s.mg,{children:[(0,h.jsx)("title",{children:r(M.P.account.account)}),(0,h.jsx)("meta",{name:"description",content:"FaceSwap"})]}),(0,h.jsxs)(a.B,{w:O,py:20,pb:40,px:2,spacing:8,children:[l&&(0,h.jsxs)(a.B,{borderRadius:8,p:2,spacing:4,alignItems:"center",children:[(0,h.jsx)(x,{children:(0,h.jsx)(S,{size:"xl",name:l.username,src:""})}),(0,h.jsx)(C.E,{fontSize:"16px",lineHeight:"20px",fontWeight:"bold",textAlign:"center",color:"white",children:l.username})]}),!l&&(0,h.jsxs)(a.B,{borderRadius:8,p:2,spacing:4,alignItems:"center",children:[(0,h.jsx)(x,{children:(0,h.jsx)(S,{size:"xl",name:"Anonymous",src:""})}),(0,h.jsx)(C.E,{fontSize:"16px",lineHeight:"20px",fontWeight:"bold",textAlign:"center",color:"white",children:"Anonymous"})]}),(0,h.jsxs)(a.B,{spacing:4,borderRadius:8,borderColor:"gray.800",borderWidth:2,px:2,py:4,children:[(0,h.jsx)(a.B,{spacing:4,children:(0,h.jsxs)(_.z,{spacing:2,justifyContent:"space-between",children:[(0,h.jsxs)(_.z,{children:[(0,h.jsx)(C.E,{color:"white",fontSize:14,fontWeight:"700",children:"".concat(r(M.P.account.coins),": ").concat(l&&l.coins?(new Intl.NumberFormat).format(l.coins):0)}),(0,h.jsx)(k.o,{children:(0,h.jsx)(z._,{boxSize:"18px",src:n(42975),alt:"card"})})]}),(0,h.jsx)(N.$,{size:"sm",py:4,colorScheme:"green",leftIcon:(0,h.jsx)(I.vsi,{color:"white",size:18}),onClick:async()=>{e(D.W.PAYMENT)},children:r(M.P.account.buy_coins)})]})}),(0,h.jsxs)(a.B,{spacing:4,children:[(0,h.jsx)(B,{colorScheme:"gray"}),(0,h.jsxs)(a.B,{spacing:2,children:[(0,h.jsx)(C.E,{color:"white",fontSize:14,fontWeight:"700",children:"".concat(r(M.P.account.images),": ").concat(l&&l.coins?(new Intl.NumberFormat).format(l.coins/(d&&d.feeBasic?d.feeBasic:.2)):0)}),(0,h.jsx)(C.E,{color:"gray.400",fontSize:12,children:r(M.P.account.desImages)})]})]}),(0,h.jsxs)(a.B,{spacing:4,children:[(0,h.jsx)(B,{colorScheme:"gray"}),(0,h.jsxs)(_.z,{spacing:2,justifyContent:"space-between",children:[(0,h.jsxs)(a.B,{spacing:2,children:[(0,h.jsx)(C.E,{color:"white",fontSize:14,fontWeight:"700",children:r(M.P.account.watch_to_earn)}),(0,h.jsx)(C.E,{color:"gray.400",fontSize:12,display:d&&d.limitAds<=p?"flex":"none",children:r(M.P.account.des_watch_coins)})]}),(0,h.jsx)(N.$,{size:"sm",py:4,colorScheme:"yellow",borderColor:"yellow.400",variant:"outline",borderRadius:"full",_hover:{backgroundColor:"back"},leftIcon:(0,h.jsx)(E.Am_,{color:"white",size:18}),onClick:async()=>{const e=Object.keys(d.ADS).length,r=p<=e?d.ADS["".concat(p)]:d.ADS["".concat(p%e===0?e:p%e)];window.Adsgram.init({blockId:r}).show().then((e=>{let r=p+1;const n=l.coins+j;(0,P.TK)({id:l.id,numAds:r,coins:n}),u({...l,numAds:r,coins:n}),f(r),c({title:"Added Coin",status:"success",position:"bottom",isClosable:!0,duration:2e3})})).catch((e=>{}))},isDisabled:!!(d&&d.limitAds<=p),children:(0,h.jsxs)(_.z,{children:[(0,h.jsx)(C.E,{fontSize:"14px",textAlign:"center",color:"white",children:"1"}),(0,h.jsx)(k.o,{children:(0,h.jsx)(z._,{boxSize:"18px",src:n(42975),alt:"card"})})]})})]})]}),(0,h.jsxs)(a.B,{spacing:4,children:[(0,h.jsx)(B,{colorScheme:"gray"}),(0,h.jsxs)(_.z,{spacing:2,justifyContent:"space-between",children:[(0,h.jsx)(C.E,{color:"white",fontSize:14,fontWeight:"700",children:"".concat(r(M.P.account.language),": ").concat(w&&w.title?w.title:"")}),(0,h.jsx)(N.$,{size:"sm",py:4,colorScheme:"gray",borderColor:"gray.400",variant:"outline",borderRadius:"md",_hover:{backgroundColor:"back"},leftIcon:(0,h.jsx)(E.Mxy,{color:"white",size:18}),onClick:()=>{e(D.W.LANGUAGE)},children:(0,h.jsx)(C.E,{fontSize:"14px",textAlign:"center",color:"white",children:r(M.P.account.change)})})]})]})]})]})]})}},22099:(e,r,n)=>{n.d(r,{d:()=>a});var i=n(86598),s=n(29791),o=n(34336),t=n(9950);function a(e){const{theme:r}=(0,o.UQ)(),n=(0,i.NU)();return(0,t.useMemo)((()=>(0,s.UP)(r.direction,{...n,...e})),[e,r.direction,n])}}}]);