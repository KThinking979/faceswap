"use strict";(self.webpackChunkfaceswap=self.webpackChunkfaceswap||[]).push([[4950],{21432:(e,s,t)=>{t.d(s,{g:()=>a});const a=(0,t(24451).j)((()=>Promise.all([t.e(9187),t.e(1873)]).then(t.bind(t,91873))),(e=>e.AspectRatio))},94950:(e,s,t)=>{t.r(s),t.d(s,{IllusionArtisticPage:()=>R});var a=t(9950),i=t(76455),n=t(63247),l=t(81389),o=t(25168),r=t(94745),d=t(62666),c=t(34418),h=t(31317),p=t(93159),u=t(26171),x=t(81374),f=t(66086),b=t(46569),m=t(45236),w=t(44456),g=t(13564),S=t(33246),j=t(28555),C=t(10305),y=t(21432),_=t(3289),I=t(22863),P=t(66067),v=t(97961),N=t(68412),k=t(43124),A=t(36742),W=t(26451),z=t(44414);let B=window.innerWidth>500?500:window.innerWidth;window.innerHeight;const R=()=>{const{t:e}=(0,A.B)(),s=(0,g.Zp)(),{user:R,configs:E,listAIStyleAll:L}=(0,a.useContext)(m.rf),[O,F]=(0,a.useState)(!1),[V,T]=(0,a.useState)(!1),[M,U]=(0,a.useState)(!1),[Q,J]=(0,a.useState)(!1),[X,Z]=(0,a.useState)(E&&E.feeBasic?E.feeBasic:1),[$,q]=(0,a.useState)([]),[G,K]=(0,a.useState)([]),[Y,ee]=(0,a.useState)([]),[se,te]=(0,a.useState)(),[ae,ie]=(0,a.useState)(E&&E.modelsHidden?E.modelsHidden[0]:null),[ne,le]=(0,a.useState)(""),[oe,re]=(0,a.useState)(""),[de,ce]=(0,a.useState)(),[he,pe]=(0,a.useState)(),[ue,xe]=(0,a.useState)(30),[fe,be]=(0,a.useState)(6),[me,we]=(0,a.useState)(-1),[ge,Se]=(0,a.useState)(!0),[je,Ce]=(0,a.useState)(),[ye,_e]=(0,a.useState)(40),[Ie,Pe]=(0,a.useState)();(0,a.useEffect)((()=>{ve()}),[]);const ve=async()=>{if(R&&E){if(L&&L.listAIStyleIllusion){const e=L.listAIStyleIllusion.filter(((e,s)=>s<6));K(L.listAIStyleIllusion),ee(L.listAIStyleIllusion),te(e[1]),q(e)}E&&(E.listRatios&&ce(E.listRatios[0]),E.samples&&pe(E.samples[0]))}else s(N.W.DASHBOARD)};(0,a.useEffect)((()=>{ue&&de&&he&&ae&&Ne()}),[ue,de,he,ae,ge]);const Ne=()=>{if(E){let e=E.feeBasic;switch(ue){case 15:e=de._step15;break;case 30:e=de._step30;break;case 60:e=de._step60;break;case 90:e=de._step90;break;case 120:e=de._step120;break;case 150:e=de._step150}ae.isNov&&ge&&(e+=E.feeHD),e*=he.samples,Z(e)}};return(0,z.jsxs)(n.az,{children:[(0,z.jsxs)(i.mg,{children:[(0,z.jsx)("title",{children:"Image Artistic"}),(0,z.jsx)("meta",{name:"description",content:"FaceSwap"})]}),(0,z.jsx)(l.B,{h:"100vh",w:B,py:20,px:2,children:(0,z.jsxs)(l.B,{spacing:4,pb:40,children:[(0,z.jsx)(j.X,{type:w.Wk.ILLUSION,styleShows:$,stylesSearch:Y,styles:G,style:se,modelDefault:ae?ae.title:"",onChangeModel:e=>{ie(e)},onPressItem:e=>{const s=$.find((s=>s.title===e.title));$[1]=s?G[1]:e,te(e)},onPressSearch:e=>{const s=G.filter((s=>s.title.toLowerCase().includes(e.toLowerCase())));ee(s)}}),(0,z.jsxs)(l.B,{display:se&&"None"===se.title?"block":"none",children:[(0,z.jsx)(C.l,{title:e(W.P.dashboard.prompt_idea),placeholder:e(W.P.dashboard.des_prompt_idea),isRandom:!0,isShowSearch:!0,isShow:!0,value:ne,onChange:e=>{le(e)}}),(0,z.jsx)(C.l,{title:e(W.P.dashboard.negative),placeholder:e(W.P.dashboard.des_negative),value:oe,onChange:e=>{re(e)}})]}),(0,z.jsx)(v.M,{title:e(W.P.dashboard.upload_image),placeholder:e(W.P.dashboard.des_upload),isShow:!0,value:ne,aspectRatio:de,onChange:e=>{Ce(e)}}),(0,z.jsx)(y.g,{title:e(W.P.dashboard.aspect_ratio),value:de,isHD:ge,onChangeHD:()=>{Se(!ge)},onChange:e=>{ce(e)}}),(0,z.jsx)(_.V,{title:e(W.P.dashboard.image_number),value:he,onChange:e=>{pe(e)}}),(0,z.jsx)(l.B,{display:G.length?"flex":"none",children:(0,z.jsx)(o.n,{allowMultiple:!0,allowToggle:!0,children:(0,z.jsxs)(r.A,{borderWidth:0,borderEndWidth:0,borderColor:"transparent",children:[(0,z.jsx)(d.J,{padding:0,py:2,children:(0,z.jsxs)(c.z,{w:"100%",justifyContent:"space-between",mb:4,children:[(0,z.jsx)(h.E,{color:"white",fontSize:16,fontWeight:"700",children:e(W.P.dashboard.advanced_setting)}),(0,z.jsx)(p.Q,{color:"white"})]})}),(0,z.jsx)(u.v,{pb:4,borderWidth:0,padding:0,children:(0,z.jsxs)(l.B,{spacing:6,children:[(0,z.jsx)(I.R,{title:"".concat(e(W.P.dashboard.step),":"),description:e(W.P.dashboard.des_step),min:30,max:150,step:30,value:ue,onChange:e=>{xe(e)}}),(0,z.jsx)(I.R,{title:"".concat(e(W.P.dashboard.scale),":"),description:e(W.P.dashboard.des_scale),min:0,max:30,step:2,value:fe,onChange:e=>{be(e)}}),(0,z.jsx)(P.T,{title:"".concat(e(W.P.dashboard.seed),":"),description:e(W.P.dashboard.des_seed),value:me,onChange:e=>{we(parseInt(e))}})]})})]})})})]})}),(0,z.jsx)(l.B,{spacing:4,flex:1,justifyContent:"center",pos:"fixed",bottom:0,w:"full",zIndex:999,backgroundColor:"black",children:(0,z.jsx)(x.$,{maxWidth:"500px",py:4,mx:2,my:4,colorScheme:"blue",borderRadius:"full",isDisabled:!je||!(""!==ne||se&&"None"!==se.title),onClick:async()=>{if(R)if(R&&parseFloat(R.coins)>=X){let e=512,s=512,t=1;de&&(ae.isNov?(e=ge?de._w:de.w,s=ge?de._h:de.h,t=2):(e=de._w,s=de._h));let a=await D({file:je.file,width:512,height:512});const i=await H(a);let n={model:ae.name,type:w.Wk.ILLUSION,isFree:!1,isText:!1,isCreate:!0,image:je.file,base64:i,strength:ye/100,prompt:"None"!==se.title?ne:"",negative:oe,style:se,width:e,height:s,size:t,samples:he.samples,steps:ue,scale:fe,seed:me,isHD:ge,isControl:!0,controlNets:E.isIllusionV3?se.controlNetsV3:se.controlNets,feeCoin:X,base:{}};Pe(n),J(!0)}else T(!0)},children:(0,z.jsxs)(c.z,{children:[(0,z.jsx)(h.E,{color:"white",fontSize:16,fontWeight:"700",children:e(W.P.dashboard.create)}),(0,z.jsxs)(c.z,{spacing:1,children:[(0,z.jsx)(h.E,{color:"white",fontSize:16,children:(new Intl.NumberFormat).format(X)}),(0,z.jsx)(f.o,{children:(0,z.jsx)(b._,{boxSize:"16px",src:t(42975),alt:"card"})})]})]})})}),(0,z.jsx)(k.s,{isOpen:V,onClose:()=>T(!V),onPressPay:()=>{T(!1),U(!0)},onPressAds:()=>{T(!1),(async()=>{if(!R)return;let e=512,s=512,t=1;de&&(ae.isNov?(e=de.w,s=de.h,t=2):(e=de._w,s=de._h));let a=await D({file:je.file,width:512,height:512});const i=await H(a);let n={model:ae.name,type:w.Wk.ILLUSION,isFree:!0,isText:!1,isCreate:!0,image:je.file,base64:i,strength:ye/100,prompt:"None"!==se.title?ne:"",negative:oe,style:se,size:t,width:e,height:s,samples:1,steps:30,scale:fe,seed:me,isHD:ge,isControl:!0,controlNets:E.isIllusionV3?se.controlNetsV3:se.controlNets,feeCoin:X,base:{}};Pe(n),J(!0)})()}}),(0,z.jsx)(S.QV,{isOpen:M,onClose:()=>{U(!1)}}),Ie&&(0,z.jsx)(S.R0,{isOpen:Q,dataAI:Ie,onClose:()=>{J(!1)}}),(0,z.jsx)(S.aj,{isOpen:O})]})};function D(e){throw new Error("Function not implemented.")}function H(e){throw new Error("Function not implemented.")}}}]);