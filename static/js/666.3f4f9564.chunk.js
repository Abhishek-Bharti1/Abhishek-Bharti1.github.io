"use strict";(self.webpackChunkabhishek_bharti=self.webpackChunkabhishek_bharti||[]).push([[666],{6666:(e,n,t)=>{t.r(n),t.d(n,{default:()=>he});var i=t(168),s=t(2791),r=t(1560),o=t(184);const a=()=>(0,o.jsx)(r.E,{src:"./images/experience.png"});var l=t(9457),c=t(2478),d=t(1917),u=t(6762),h=t(824),x=t(9589),m=t(884),p=t(56),f=Object.defineProperty,g=(e,n,t)=>(((e,n,t)=>{n in e?f(e,n,{enumerable:!0,configurable:!0,writable:!0,value:t}):e[n]=t})(e,"symbol"!==typeof n?n+"":n,t),t);function b(e){return e.sort(((e,n)=>{const t=e.compareDocumentPosition(n);if(t&Node.DOCUMENT_POSITION_FOLLOWING||t&Node.DOCUMENT_POSITION_CONTAINED_BY)return-1;if(t&Node.DOCUMENT_POSITION_PRECEDING||t&Node.DOCUMENT_POSITION_CONTAINS)return 1;if(t&Node.DOCUMENT_POSITION_DISCONNECTED||t&Node.DOCUMENT_POSITION_IMPLEMENTATION_SPECIFIC)throw Error("Cannot sort the given nodes.");return 0}))}function y(e,n,t){let i=e+1;return t&&i>=n&&(i=0),i}function v(e,n,t){let i=e-1;return t&&i<0&&(i=n),i}var N="undefined"!==typeof window?s.useLayoutEffect:s.useEffect,j=e=>e,I=class{constructor(){var e=this;g(this,"descendants",new Map),g(this,"register",(e=>{var n;if(null!=e)return"object"==typeof(n=e)&&"nodeType"in n&&n.nodeType===Node.ELEMENT_NODE?this.registerNode(e):n=>{this.registerNode(n,e)}})),g(this,"unregister",(e=>{this.descendants.delete(e);const n=b(Array.from(this.descendants.keys()));this.assignIndex(n)})),g(this,"destroy",(()=>{this.descendants.clear()})),g(this,"assignIndex",(e=>{this.descendants.forEach((n=>{const t=e.indexOf(n.node);n.index=t,n.node.dataset.index=n.index.toString()}))})),g(this,"count",(()=>this.descendants.size)),g(this,"enabledCount",(()=>this.enabledValues().length)),g(this,"values",(()=>Array.from(this.descendants.values()).sort(((e,n)=>e.index-n.index)))),g(this,"enabledValues",(()=>this.values().filter((e=>!e.disabled)))),g(this,"item",(e=>{if(0!==this.count())return this.values()[e]})),g(this,"enabledItem",(e=>{if(0!==this.enabledCount())return this.enabledValues()[e]})),g(this,"first",(()=>this.item(0))),g(this,"firstEnabled",(()=>this.enabledItem(0))),g(this,"last",(()=>this.item(this.descendants.size-1))),g(this,"lastEnabled",(()=>{const e=this.enabledValues().length-1;return this.enabledItem(e)})),g(this,"indexOf",(e=>{var n,t;return e&&null!=(t=null==(n=this.descendants.get(e))?void 0:n.index)?t:-1})),g(this,"enabledIndexOf",(e=>null==e?-1:this.enabledValues().findIndex((n=>n.node.isSameNode(e))))),g(this,"next",(function(n){let t=!(arguments.length>1&&void 0!==arguments[1])||arguments[1];const i=y(n,e.count(),t);return e.item(i)})),g(this,"nextEnabled",(function(n){let t=!(arguments.length>1&&void 0!==arguments[1])||arguments[1];const i=e.item(n);if(!i)return;const s=y(e.enabledIndexOf(i.node),e.enabledCount(),t);return e.enabledItem(s)})),g(this,"prev",(function(n){let t=!(arguments.length>1&&void 0!==arguments[1])||arguments[1];const i=v(n,e.count()-1,t);return e.item(i)})),g(this,"prevEnabled",(function(n){let t=!(arguments.length>1&&void 0!==arguments[1])||arguments[1];const i=e.item(n);if(!i)return;const s=v(e.enabledIndexOf(i.node),e.enabledCount()-1,t);return e.enabledItem(s)})),g(this,"registerNode",((e,n)=>{if(!e||this.descendants.has(e))return;const t=b(Array.from(this.descendants.keys()).concat(e));(null==n?void 0:n.disabled)&&(n.disabled=!!n.disabled);const i={node:e,index:-1,...n};this.descendants.set(e,i),this.assignIndex(t)}))}},w=t(9886),C=t(4591);var[E,O]=(0,w.k)({name:"DescendantsProvider",errorMessage:"useDescendantsContext must be used within DescendantsProvider"});var[k,_]=(0,w.k)({name:"AccordionStylesContext",hookName:"useAccordionStyles",providerName:"<Accordion />"}),[A,D]=(0,w.k)({name:"AccordionItemContext",hookName:"useAccordionItemContext",providerName:"<AccordionItem />"}),[T,S,M,P]=[j(E),()=>j(O()),()=>function(){const e=(0,s.useRef)(new I);return N((()=>()=>e.current.destroy())),e.current}(),e=>function(e){const n=O(),[t,i]=(0,s.useState)(-1),r=(0,s.useRef)(null);N((()=>()=>{r.current&&n.unregister(r.current)}),[]),N((()=>{if(!r.current)return;const e=Number(r.current.dataset.index);t==e||Number.isNaN(e)||i(e)}));const o=j(e?n.register(e):n.register);return{descendants:n,index:t,enabledIndex:n.enabledIndexOf(r.current),register:(0,C.lq)(o,r)}}(e)],W=t(6367);var H=t(6992);function F(e){const{onChange:n,defaultIndex:t,index:i,allowMultiple:r,allowToggle:o,...a}=e;!function(e){const n=e.index||e.defaultIndex,t=null!=n&&!Array.isArray(n)&&e.allowMultiple;(0,H.ZK)({condition:!!t,message:"If 'allowMultiple' is passed, then 'index' or 'defaultIndex' must be an array. You passed: ".concat(typeof n,",")})}(e),function(e){(0,H.ZK)({condition:!(!e.allowMultiple||!e.allowToggle),message:"If 'allowMultiple' is passed, 'allowToggle' will be ignored. Either remove 'allowToggle' or 'allowMultiple' depending on whether you want multiple accordions visible or not"})}(e);const l=M(),[c,d]=(0,s.useState)(-1);(0,s.useEffect)((()=>()=>{d(-1)}),[]);const[u,h]=function(e){const{value:n,defaultValue:t,onChange:i,shouldUpdate:r=((e,n)=>e!==n)}=e,o=(0,W.W)(i),a=(0,W.W)(r),[l,c]=(0,s.useState)(t),d=void 0!==n,u=d?n:l,h=(0,W.W)((e=>{const n="function"===typeof e?e(u):e;a(u,n)&&(d||c(n),o(n))}),[d,o,u,a]);return[u,h]}({value:i,defaultValue:()=>r?null!=t?t:[]:null!=t?t:-1,onChange:n});return{index:u,setIndex:h,htmlProps:a,getAccordionItemProps:e=>{let n=!1;null!==e&&(n=Array.isArray(u)?u.includes(e):u===e);return{isOpen:n,onChange:n=>{if(null!==e)if(r&&Array.isArray(u)){const t=n?u.concat(e):u.filter((n=>n!==e));h(t)}else n?h(e):o&&h(-1)}}},focusedIndex:c,setFocusedIndex:d,descendants:l}}var[U,K]=(0,w.k)({name:"AccordionContext",hookName:"useAccordionContext",providerName:"Accordion"});function L(e){const{isDisabled:n,isFocusable:t,id:i,...r}=e,{getAccordionItemProps:o,setFocusedIndex:a}=K(),l=(0,s.useRef)(null),c=(0,s.useId)(),d=null!=i?i:c,u="accordion-button-".concat(d),h="accordion-panel-".concat(d);!function(e){(0,H.ZK)({condition:!(!e.isFocusable||e.isDisabled),message:"Using only 'isFocusable', this prop is reserved for situations where you pass 'isDisabled' but you still want the element to receive focus (A11y). Either remove it or pass 'isDisabled' as well.\n    "})}(e);const{register:x,index:m,descendants:p}=P({disabled:n&&!t}),{isOpen:f,onChange:g}=o(-1===m?null:m);!function(e){(0,H.ZK)({condition:e.isOpen&&!!e.isDisabled,message:"Cannot open a disabled accordion item"})}({isOpen:f,isDisabled:n});const b=(0,s.useCallback)((()=>{null==g||g(!f),a(m)}),[m,a,f,g]),y=(0,s.useCallback)((e=>{const n={ArrowDown:()=>{const e=p.nextEnabled(m);null==e||e.node.focus()},ArrowUp:()=>{const e=p.prevEnabled(m);null==e||e.node.focus()},Home:()=>{const e=p.firstEnabled();null==e||e.node.focus()},End:()=>{const e=p.lastEnabled();null==e||e.node.focus()}}[e.key];n&&(e.preventDefault(),n(e))}),[p,m]),v=(0,s.useCallback)((()=>{a(m)}),[a,m]),N=(0,s.useCallback)((function(){let e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{},t=arguments.length>1&&void 0!==arguments[1]?arguments[1]:null;return{...e,type:"button",ref:(0,C.lq)(x,l,t),id:u,disabled:!!n,"aria-expanded":!!f,"aria-controls":h,onClick:(0,H.v0)(e.onClick,b),onFocus:(0,H.v0)(e.onFocus,v),onKeyDown:(0,H.v0)(e.onKeyDown,y)}}),[u,n,f,b,v,y,h,x]),j=(0,s.useCallback)((function(){return{...arguments.length>0&&void 0!==arguments[0]?arguments[0]:{},ref:arguments.length>1&&void 0!==arguments[1]?arguments[1]:null,role:"region",id:h,"aria-labelledby":u,hidden:!f}}),[u,f,h]);return{isOpen:f,isDisabled:n,isFocusable:t,onOpen:()=>{null==g||g(!0)},onClose:()=>{null==g||g(!1)},getButtonProps:N,getPanelProps:j,htmlProps:r}}var B=t(5597),G=t(2481),z=t(2996),R=t(5113),V=(0,B.G)((function(e,n){let{children:t,reduceMotion:i,...r}=e;const a=(0,G.jC)("Accordion",r),l=(0,z.Lr)(r),{htmlProps:c,descendants:d,...u}=F(l),h=(0,s.useMemo)((()=>({...u,reduceMotion:!!i})),[u,i]);return(0,o.jsx)(T,{value:d,children:(0,o.jsx)(U,{value:h,children:(0,o.jsx)(k,{value:a,children:(0,o.jsx)(R.m.div,{ref:n,...c,className:(0,H.cx)("chakra-accordion",r.className),__css:a.root,children:t})})})})}));V.displayName="Accordion";var Z=(0,B.G)((function(e,n){const{children:t,className:i}=e,{htmlProps:r,...a}=L(e),l={..._().container,overflowAnchor:"none"},c=(0,s.useMemo)((()=>a),[a]);return(0,o.jsx)(A,{value:c,children:(0,o.jsx)(R.m.div,{ref:n,...r,className:(0,H.cx)("chakra-accordion__item",i),__css:l,children:"function"===typeof t?t({isExpanded:!!a.isOpen,isDisabled:!!a.isDisabled}):t})})}));Z.displayName="AccordionItem";var q=(0,B.G)((function(e,n){const{getButtonProps:t}=D(),i=t(e,n),s={display:"flex",alignItems:"center",width:"100%",outline:0,..._().button};return(0,o.jsx)(R.m.button,{...i,className:(0,H.cx)("chakra-accordion__button",e.className),__css:s})}));q.displayName="AccordionButton";var X=t(9640);function Y(e){const{isOpen:n,isDisabled:t}=D(),{reduceMotion:i}=K(),s=(0,H.cx)("chakra-accordion__icon",e.className),r={opacity:t?.4:1,transform:n?"rotate(-180deg)":void 0,transition:i?void 0:"transform 0.2s",transformOrigin:"center",..._().icon};return(0,o.jsx)(X.J,{viewBox:"0 0 24 24","aria-hidden":!0,className:s,__css:r,...e,children:(0,o.jsx)("path",{fill:"currentColor",d:"M16.59 8.59L12 13.17 7.41 8.59 6 10l6 6 6-6z"})})}Y.displayName="AccordionIcon";var Q={ease:[.25,.1,.25,1],easeIn:[.4,0,1,1],easeOut:[0,0,.2,1],easeInOut:[.4,0,.2,1]};var J=(e,n)=>({...e,delay:"number"===typeof n?n:null==n?void 0:n.enter}),$=(e,n)=>({...e,delay:"number"===typeof n?n:null==n?void 0:n.exit}),ee=t(4549),ne=t(6931),te={exit:{height:{duration:.2,ease:Q.ease},opacity:{duration:.3,ease:Q.ease}},enter:{height:{duration:.3,ease:Q.ease},opacity:{duration:.4,ease:Q.ease}}},ie={exit:e=>{let{animateOpacity:n,startingHeight:t,transition:i,transitionEnd:s,delay:r}=e;var o,a;return{...n&&{opacity:(a=t,null!=a&&parseInt(a.toString(),10)>0?1:0)},height:t,transitionEnd:null==s?void 0:s.exit,transition:null!=(o=null==i?void 0:i.exit)?o:$(te.exit,r)}},enter:e=>{let{animateOpacity:n,endingHeight:t,transition:i,transitionEnd:s,delay:r}=e;var o;return{...n&&{opacity:1},height:t,transitionEnd:null==s?void 0:s.enter,transition:null!=(o=null==i?void 0:i.enter)?o:J(te.enter,r)}}},se=(0,s.forwardRef)(((e,n)=>{const{in:t,unmountOnExit:i,animateOpacity:r=!0,startingHeight:a=0,endingHeight:l="auto",style:c,className:d,transition:u,transitionEnd:h,...x}=e,[m,p]=(0,s.useState)(!1);(0,s.useEffect)((()=>{const e=setTimeout((()=>{p(!0)}));return()=>clearTimeout(e)}),[]),(0,H.ZK)({condition:Number(a)>0&&!!i,message:"startingHeight and unmountOnExit are mutually exclusive. You can't use them together"});const f=parseFloat(a.toString())>0,g={startingHeight:a,endingHeight:l,animateOpacity:r,transition:m?u:{enter:{duration:0}},transitionEnd:{enter:null==h?void 0:h.enter,exit:i?null==h?void 0:h.exit:{...null==h?void 0:h.exit,display:f?"block":"none"}}},b=!i||t,y=t||i?"enter":"exit";return(0,o.jsx)(ee.M,{initial:!1,custom:g,children:b&&(0,o.jsx)(ne.E.div,{ref:n,...x,className:(0,H.cx)("chakra-collapse",d),style:{overflow:"hidden",display:"block",...c},custom:g,variants:ie,initial:!!i&&"exit",animate:y,exit:"exit"})})}));se.displayName="Collapse";var re=(0,B.G)((function(e,n){const{className:t,motionProps:i,...s}=e,{reduceMotion:r}=K(),{getPanelProps:a,isOpen:l}=D(),c=a(s,n),d=(0,H.cx)("chakra-accordion__panel",t),u=_();r||delete c.hidden;const h=(0,o.jsx)(R.m.div,{...c,__css:u.panel,className:d});return r?h:(0,o.jsx)(se,{in:l,...i,children:h})}));re.displayName="AccordionPanel";const oe=e=>{let{experience:n,theme:t,index:i,totalCards:s}=e;return console.log("experience1234567",n),(0,o.jsxs)(u.U,{padding:"1rem",flexDir:{base:"column",sm:"row"},justifyContent:"space-between",border:"1px solid ".concat(n.color),borderRadius:"20",children:[(0,o.jsx)(h.xu,{display:"flex",justifyContent:"center",alignItems:"center",width:{base:"40%",sm:"5%"},marginBottom:{base:"20px",sm:"0px"},children:(0,o.jsx)(r.E,{width:"100px",borderRadius:"50%",src:"./images/".concat(n.logo_path)})}),(0,o.jsxs)(d.g,{width:"93%",justifyContent:"space-between",textAlign:"left",children:[(0,o.jsxs)(u.U,{flexDirection:{base:"column",sm:"row"},width:"100%",justifyContent:"space-between",children:[(0,o.jsxs)(d.g,{width:{base:"100%",sm:"50%"},alignItems:{base:"center",sm:"flex-start"},children:[(0,o.jsx)(x.X,{sx:{fontWeight:700,color:"#001c55",fontSize:"16px",lineHeight:"20px"},children:n.title}),(0,o.jsx)(m.x,{sx:{fontWeight:400,color:"#001c55",fontSize:"14px",lineHeight:"20px"},children:n.company})]}),(0,o.jsxs)(d.g,{width:{base:"100%",sm:"50%"},alignItems:{base:"center",sm:"flex-end"},children:[(0,o.jsxs)(m.x,{sx:{fontWeight:400,color:"#001c55",fontSize:"14px",lineHeight:"15px"},children:[" ",n.duration," "]}),(0,o.jsxs)(m.x,{sx:{fontWeight:400,color:"#001c55",fontSize:"14px",lineHeight:"15px"},children:[" ",n.location," "]})]})]}),(0,o.jsx)(m.x,{sx:{fontWeight:400,color:"#001c55",fontSize:"14px",lineHeight:"20px",marginTop:"10px"},textAlign:{base:"center",sm:"left"},children:n.description})]})]})},ae=e=>{let{experience:n,theme:t}=e;return console.log("experience",n.sections[0]),(0,o.jsx)(p.K,{margin:"50px",id:"experience",w:{base:"90%",sm:"100%"},children:(0,o.jsx)(V,{allowToggle:!0,children:n.sections.map(((e,n)=>(0,o.jsx)(Z,{children:n=>{let{isExpanded:i}=n;return(0,o.jsxs)(o.Fragment,{children:[(0,o.jsx)("h2",{children:(0,o.jsxs)(q,{className:"accord-panel",_hover:{color:t.secondaryText},border:"1px solid",padding:"1rem",borderColor:t.headerColor,borderRadius:"5px",marginBottom:"3px",children:[(0,o.jsx)(h.xu,{flex:"1",textAlign:"left",backgroundColor:t.body,fontFamily:"Google Sans Regular",color:t.text,children:e.title}),(0,o.jsx)(Y,{})]})}),(0,o.jsx)(re,{padding:"1rem",display:"flex",flexDirection:"column",gap:"1rem",margin:"auto",id:"accordianpannel",backgroundColor:t.body,children:e.experiences.map(((n,i)=>(0,o.jsx)(oe,{index:i,totalCards:e.experiences.length,experience:n,theme:t},i)))})]})}},e.title)))})})};var le,ce=t(2554),de=t(8045);const ue=(0,ce.F4)(le||(le=(0,i.Z)(["\nfrom {\n  opacity: 0;\n  transform: translateY(50px);\n}\n\nto {\n  opacity: 1;\n  transform: translateY(0px);\n}\n"]))),he=()=>{const e=c.y;return(0,o.jsxs)(d.g,{w:{base:"100%",sm:"90%",md:"800px",lg:"1000px",xl:"1100px","2xl":"1350px"},gap:"3rem",margin:"auto",children:[(0,o.jsx)(de.ZP,{duration:2e3,keyframes:ue,children:(0,o.jsx)(d.g,{children:(0,o.jsxs)(u.U,{flexDir:{base:"column",sm:"row"},gap:"40px",mt:{base:"50px",sm:"100px"},children:[(0,o.jsx)(h.xu,{width:{base:"90%",sm:"50%"},children:(0,o.jsx)(h.xu,{children:(0,o.jsx)(a,{})})}),(0,o.jsxs)(d.g,{width:{base:"90%",sm:"50%"},children:[(0,o.jsx)(x.X,{style:{color:e.text},children:l.b8.title}),(0,o.jsx)(x.X,{style:{color:e.text},children:l.b8.subtitle}),(0,o.jsx)(m.x,{sx:{color:e.secondaryText},children:l.b8.description})]})]})})}),(0,o.jsx)(ae,{experience:l.b8,theme:e})]})}},2625:(e,n,t)=>{t.d(n,{XQ:()=>s});var i=t(6992);Object.freeze(["base","sm","md","lg","xl","2xl"]);function s(e,n){return Array.isArray(e)?e.map((e=>null===e?null:n(e))):(0,i.Kn)(e)?Object.keys(e).reduce(((t,i)=>(t[i]=n(e[i]),t)),{}):null!=e?n(e):null}},6762:(e,n,t)=>{t.d(n,{U:()=>o});var i=t(56),s=t(5597),r=t(184),o=(0,s.G)(((e,n)=>(0,r.jsx)(i.K,{align:"center",...e,direction:"row",ref:n})));o.displayName="HStack"},9589:(e,n,t)=>{t.d(n,{X:()=>c});var i=t(5597),s=t(2481),r=t(2996),o=t(5113),a=t(6992),l=t(184),c=(0,i.G)((function(e,n){const t=(0,s.mq)("Heading",e),{className:i,...c}=(0,r.Lr)(e);return(0,l.jsx)(o.m.h2,{ref:n,className:(0,a.cx)("chakra-heading",e.className),...c,__css:t})}));c.displayName="Heading"},1917:(e,n,t)=>{t.d(n,{g:()=>o});var i=t(56),s=t(5597),r=t(184),o=(0,s.G)(((e,n)=>(0,r.jsx)(i.K,{align:"center",...e,direction:"column",ref:n})));o.displayName="VStack"},56:(e,n,t)=>{t.d(n,{K:()=>c});var i=t(5113),s=t(184),r=e=>(0,s.jsx)(i.m.div,{className:"chakra-stack__item",...e,__css:{display:"inline-block",flex:"0 0 auto",minWidth:0,...e.__css}});r.displayName="StackItem";var o=t(2625);var a=t(2791);var l=t(6992),c=(0,t(5597).G)(((e,n)=>{const{isInline:t,direction:c,align:d,justify:u,spacing:h="0.5rem",wrap:x,children:m,divider:p,className:f,shouldWrapChildren:g,...b}=e,y=t?"row":null!=c?c:"column",v=(0,a.useMemo)((()=>function(e){const{spacing:n,direction:t}=e,i={column:{my:n,mx:0,borderLeftWidth:0,borderBottomWidth:"1px"},"column-reverse":{my:n,mx:0,borderLeftWidth:0,borderBottomWidth:"1px"},row:{mx:n,my:0,borderLeftWidth:"1px",borderBottomWidth:0},"row-reverse":{mx:n,my:0,borderLeftWidth:"1px",borderBottomWidth:0}};return{"&":(0,o.XQ)(t,(e=>i[e]))}}({spacing:h,direction:y})),[h,y]),N=!!p,j=!g&&!N,I=(0,a.useMemo)((()=>{const e=function(e){return a.Children.toArray(e).filter((e=>(0,a.isValidElement)(e)))}(m);return j?e:e.map(((n,t)=>{const i="undefined"!==typeof n.key?n.key:t,o=t+1===e.length,l=g?(0,s.jsx)(r,{children:n},i):n;if(!N)return l;const c=(0,a.cloneElement)(p,{__css:v}),d=o?null:c;return(0,s.jsxs)(a.Fragment,{children:[l,d]},i)}))}),[p,v,N,j,g,m]),w=(0,l.cx)("chakra-stack",f);return(0,s.jsx)(i.m.div,{ref:n,display:"flex",alignItems:d,justifyContent:u,flexDirection:y,flexWrap:x,gap:N?void 0:h,className:w,...b,children:I})}));c.displayName="Stack"},4591:(e,n,t)=>{t.d(n,{lq:()=>s,qq:()=>r});var i=t(2791);function s(){for(var e=arguments.length,n=new Array(e),t=0;t<e;t++)n[t]=arguments[t];return e=>{n.forEach((n=>{!function(e,n){if(null!=e)if("function"!==typeof e)try{e.current=n}catch(t){throw new Error("Cannot assign value '".concat(n,"' to ref '").concat(e,"'"))}else e(n)}(n,e)}))}}function r(){for(var e=arguments.length,n=new Array(e),t=0;t<e;t++)n[t]=arguments[t];return(0,i.useMemo)((()=>s(...n)),n)}}}]);
//# sourceMappingURL=666.3f4f9564.chunk.js.map