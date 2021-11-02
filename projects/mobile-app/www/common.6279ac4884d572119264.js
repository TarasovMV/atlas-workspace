"use strict";(self.webpackChunkionic_workspace=self.webpackChunkionic_workspace||[]).push([[8592],{8225:(f,p,a)=>{a.d(p,{c:()=>l});var o=a(3150),_=a(2954),c=a(9461);const l=(r,i)=>{let e,t;const n=(u,h,m)=>{if("undefined"==typeof document)return;const g=document.elementFromPoint(u,h);g&&i(g)?g!==e&&(d(),s(g,m)):d()},s=(u,h)=>{e=u,t||(t=e);const m=e;(0,o.c)(()=>m.classList.add("ion-activated")),h()},d=(u=!1)=>{if(!e)return;const h=e;(0,o.c)(()=>h.classList.remove("ion-activated")),u&&t!==e&&e.click(),e=void 0};return(0,c.createGesture)({el:r,gestureName:"buttonActiveDrag",threshold:0,onStart:u=>n(u.currentX,u.currentY,_.a),onMove:u=>n(u.currentX,u.currentY,_.b),onEnd:()=>{d(!0),(0,_.h)(),t=void 0}})}},7330:(f,p,a)=>{a.d(p,{a:()=>c,d:()=>l});var o=a(8239),_=a(2377);const c=function(){var r=(0,o.Z)(function*(i,e,t,n,s){if(i)return i.attachViewToDom(e,t,s,n);if("string"!=typeof t&&!(t instanceof HTMLElement))throw new Error("framework delegate is missing");const d="string"==typeof t?e.ownerDocument&&e.ownerDocument.createElement(t):t;return n&&n.forEach(u=>d.classList.add(u)),s&&Object.assign(d,s),e.appendChild(d),yield new Promise(u=>(0,_.c)(d,u)),d});return function(e,t,n,s,d){return r.apply(this,arguments)}}(),l=(r,i)=>{if(i){if(r)return r.removeViewFromDom(i.parentElement,i);i.remove()}return Promise.resolve()}},2954:(f,p,a)=>{a.d(p,{a:()=>c,b:()=>l,c:()=>_,d:()=>i,h:()=>r});const o={getEngine(){const e=window;return e.TapticEngine||e.Capacitor&&e.Capacitor.isPluginAvailable("Haptics")&&e.Capacitor.Plugins.Haptics},available(){return!!this.getEngine()},isCordova:()=>!!window.TapticEngine,isCapacitor:()=>!!window.Capacitor,impact(e){const t=this.getEngine();if(!t)return;const n=this.isCapacitor()?e.style.toUpperCase():e.style;t.impact({style:n})},notification(e){const t=this.getEngine();if(!t)return;const n=this.isCapacitor()?e.style.toUpperCase():e.style;t.notification({style:n})},selection(){this.impact({style:"light"})},selectionStart(){const e=this.getEngine();!e||(this.isCapacitor()?e.selectionStart():e.gestureSelectionStart())},selectionChanged(){const e=this.getEngine();!e||(this.isCapacitor()?e.selectionChanged():e.gestureSelectionChanged())},selectionEnd(){const e=this.getEngine();!e||(this.isCapacitor()?e.selectionEnd():e.gestureSelectionEnd())}},_=()=>{o.selection()},c=()=>{o.selectionStart()},l=()=>{o.selectionChanged()},r=()=>{o.selectionEnd()},i=e=>{o.impact(e)}},6575:(f,p,a)=>{a.d(p,{s:()=>o});const o=t=>{try{if(t instanceof class{constructor(n){this.value=n}})return t.value;if(!l()||"string"!=typeof t||""===t)return t;const n=document.createDocumentFragment(),s=document.createElement("div");n.appendChild(s),s.innerHTML=t,i.forEach(m=>{const g=n.querySelectorAll(m);for(let v=g.length-1;v>=0;v--){const C=g[v];C.parentNode?C.parentNode.removeChild(C):n.removeChild(C);const w=c(C);for(let E=0;E<w.length;E++)_(w[E])}});const d=c(n);for(let m=0;m<d.length;m++)_(d[m]);const u=document.createElement("div");u.appendChild(n);const h=u.querySelector("div");return null!==h?h.innerHTML:u.innerHTML}catch(n){return console.error(n),""}},_=t=>{if(t.nodeType&&1!==t.nodeType)return;for(let s=t.attributes.length-1;s>=0;s--){const d=t.attributes.item(s),u=d.name;if(!r.includes(u.toLowerCase())){t.removeAttribute(u);continue}const h=d.value;null!=h&&h.toLowerCase().includes("javascript:")&&t.removeAttribute(u)}const n=c(t);for(let s=0;s<n.length;s++)_(n[s])},c=t=>null!=t.children?t.children:t.childNodes,l=()=>{const t=window,n=t&&t.Ionic&&t.Ionic.config;return!n||(n.get?n.get("sanitizerEnabled",!0):!0===n.sanitizerEnabled||void 0===n.sanitizerEnabled)},r=["class","id","href","src","name","slot"],i=["script","style","iframe","meta","link","object","embed"]},408:(f,p,a)=>{a.d(p,{S:()=>_});const _={bubbles:{dur:1e3,circles:9,fn:(c,l,r)=>{const i=c*l/r-c+"ms",e=2*Math.PI*l/r;return{r:5,style:{top:9*Math.sin(e)+"px",left:9*Math.cos(e)+"px","animation-delay":i}}}},circles:{dur:1e3,circles:8,fn:(c,l,r)=>{const i=l/r,e=c*i-c+"ms",t=2*Math.PI*i;return{r:5,style:{top:9*Math.sin(t)+"px",left:9*Math.cos(t)+"px","animation-delay":e}}}},circular:{dur:1400,elmDuration:!0,circles:1,fn:()=>({r:20,cx:48,cy:48,fill:"none",viewBox:"24 24 48 48",transform:"translate(0,0)",style:{}})},crescent:{dur:750,circles:1,fn:()=>({r:26,style:{}})},dots:{dur:750,circles:3,fn:(c,l)=>({r:6,style:{left:9-9*l+"px","animation-delay":-110*l+"ms"}})},lines:{dur:1e3,lines:12,fn:(c,l,r)=>({y1:17,y2:29,style:{transform:`rotate(${30*l+(l<6?180:-180)}deg)`,"animation-delay":c*l/r-c+"ms"}})},"lines-small":{dur:1e3,lines:12,fn:(c,l,r)=>({y1:12,y2:20,style:{transform:`rotate(${30*l+(l<6?180:-180)}deg)`,"animation-delay":c*l/r-c+"ms"}})}}},1269:(f,p,a)=>{a.d(p,{c:()=>c,g:()=>r,h:()=>_,o:()=>e});var o=a(8239);const _=(t,n)=>null!==n.closest(t),c=(t,n)=>"string"==typeof t&&t.length>0?Object.assign({"ion-color":!0,[`ion-color-${t}`]:!0},n):n,r=t=>{const n={};return(t=>void 0!==t?(Array.isArray(t)?t:t.split(" ")).filter(s=>null!=s).map(s=>s.trim()).filter(s=>""!==s):[])(t).forEach(s=>n[s]=!0),n},i=/^[a-z][a-z0-9+\-.]*:/,e=function(){var t=(0,o.Z)(function*(n,s,d,u){if(null!=n&&"#"!==n[0]&&!i.test(n)){const h=document.querySelector("ion-router");if(h)return null!=s&&s.preventDefault(),h.push(n,d,u)}return!1});return function(s,d,u,h){return t.apply(this,arguments)}}()},393:(f,p,a)=>{a.d(p,{W:()=>l});var o=a(8186),_=a(5189);const c=["*"];let l=(()=>{class r{constructor(e){this.switcher=e,this.selected=!1}onClick(e){this.switcher.onOptionSelect(this,e)}ngOnInit(){}}return r.\u0275fac=function(e){return new(e||r)(o.Y36((0,o.Gpc)(()=>_.O)))},r.\u0275cmp=o.Xpm({type:r,selectors:[["app-tabs-switcher-option"]],hostBindings:function(e,t){1&e&&o.NdJ("click",function(s){return t.onClick(s)})},inputs:{value:"value"},ngContentSelectors:c,decls:2,vars:2,consts:[[1,"wrapper"]],template:function(e,t){1&e&&(o.F$t(),o.TgZ(0,"div",0),o.Hsn(1),o.qZA()),2&e&&o.ekj("wrapper__selected",t.selected)},styles:[".wrapper[_ngcontent-%COMP%]{display:flex;background:#1C1F2B;width:48vw;height:9.8522167488vh;padding:0 3.7333333333vw;align-items:center;justify-content:center;font-size:1.9704433498vh;color:#606580;border:solid .1231527094vh transparent;transition:.2s;box-sizing:border-box}.wrapper__selected[_ngcontent-%COMP%]{background:rgba(28,118,254,.2);color:#fff;font-weight:bold;border-color:#1c76fe;border-radius:.2463054187vh;transition:.3s}"]}),r})()},5189:(f,p,a)=>{a.d(p,{O:()=>r});var o=a(8186),_=a(665),c=a(393);const l=["*"];let r=(()=>{class i{constructor(){}ngAfterContentInit(){this.writeValue(this.value)}writeValue(t){this.value=t,this.selectedHandler()}registerOnChange(t){this.onChange=t}registerOnTouched(t){this.onTouched=t}onOptionSelect(t,n){this.emitSelection(t.value)}emitSelection(t){!this.onChange||(this.writeValue(t),this.onChange(t))}selectedHandler(){var t;if(!(null===(t=this.options)||void 0===t?void 0:t.length))return;this.options.forEach(s=>s.selected=!1);const n=this.options.find(s=>s.value===this.value);!n||(n.selected=!0)}}return i.\u0275fac=function(t){return new(t||i)},i.\u0275cmp=o.Xpm({type:i,selectors:[["app-tabs-switcher"]],contentQueries:function(t,n,s){if(1&t&&o.Suo(s,c.W,4),2&t){let d;o.iGM(d=o.CRH())&&(n.options=d)}},features:[o._Bn([{provide:_.JU,useExisting:(0,o.Gpc)(()=>i),multi:!0}])],ngContentSelectors:l,decls:2,vars:0,consts:[[1,"wrapper"]],template:function(t,n){1&t&&(o.F$t(),o.TgZ(0,"div",0),o.Hsn(1),o.qZA())},styles:[".wrapper[_ngcontent-%COMP%]{display:flex;width:max-content}.wrapper[_ngcontent-%COMP%]    >*{margin-right:2.1333333333vw}.wrapper[_ngcontent-%COMP%]    >*:first-child{margin-left:var(--margin-side)}.wrapper[_ngcontent-%COMP%]    >*:last-child{margin-right:var(--margin-side)}"]}),i})()},7658:(f,p,a)=>{a.d(p,{V:()=>l});var o=a(8186),_=a(8583);const c=["*"];let l=(()=>{class r{constructor(e){this.type=e}ngOnInit(){}}return r.\u0275fac=function(e){return new(e||r)(o.$8M("type"))},r.\u0275cmp=o.Xpm({type:r,selectors:[["app-tabs-text-block"]],ngContentSelectors:c,decls:3,vars:1,consts:[[1,"wrapper",3,"ngClass"],[1,"textarea"]],template:function(e,t){1&e&&(o.F$t(),o.TgZ(0,"div",0),o.TgZ(1,"div",1),o.Hsn(2),o.qZA(),o.qZA()),2&e&&o.Q6J("ngClass","wrapper__"+t.type)},directives:[_.mk],styles:[".wrapper[_ngcontent-%COMP%]{width:100%;min-height:1vh;background:#1C1F2B;padding:3.2vw;border-radius:.2463054187vh}.wrapper[_ngcontent-%COMP%]   .textarea[_ngcontent-%COMP%]{border-left:solid .5333333333vw;color:#d7e2f2;font-size:1.9704433498vh;font-weight:700;padding:0 4.8vw;line-height:2.5862068966vh}.wrapper__default[_ngcontent-%COMP%]   .textarea[_ngcontent-%COMP%]{border-color:#8c99b2}.wrapper__restrictions[_ngcontent-%COMP%]   .textarea[_ngcontent-%COMP%]{border-color:#f7931e}.wrapper__potential[_ngcontent-%COMP%]   .textarea[_ngcontent-%COMP%]{border-color:#00a73d}.wrapper__activity[_ngcontent-%COMP%]   .textarea[_ngcontent-%COMP%]{border-color:#1c76fe}"]}),r})()},7583:(f,p,a)=>{a.d(p,{m:()=>l});var o=a(8583),_=a(3083),c=a(8186);let l=(()=>{class r{}return r.\u0275fac=function(e){return new(e||r)},r.\u0275mod=c.oAB({type:r}),r.\u0275inj=c.cJS({imports:[[o.ez,_.Pc]]}),r})()}}]);