"use strict";(self.webpackChunkionic_workspace=self.webpackChunkionic_workspace||[]).push([[8348],{8348:(M,d,o)=>{o.r(d),o.d(d,{TabsPageModule:()=>T});var r=o(1140),v=o(2334),l=o(89),h=o(2429),s=o(5199),t=o(8769),u=o(2911);function p(n,i){if(1&n&&(t.TgZ(0,"div",9),t._uU(1),t.qZA()),2&n){const e=t.oxw().$implicit;t.xp6(1),t.hij(" ",e.name," ")}}const f=function(){return{height:"3.4vh",width:"auto"}};function b(n,i){if(1&n){const e=t.EpF();t.TgZ(0,"div",5),t.NdJ("click",function(){const g=t.CHM(e).$implicit;return t.oxw().selectTab(g)}),t.ALo(1,"async"),t.TgZ(2,"div",6),t.ALo(3,"async"),t.qZA(),t._UZ(4,"svg-icon",7),t.YNc(5,p,2,1,"div",8),t.ALo(6,"async"),t.qZA()}if(2&n){const e=i.$implicit,a=t.oxw();t.ekj("tab-icon_active",e.route===t.lcZ(1,7,a.currentTab$)),t.xp6(2),t.ekj("ripple",t.lcZ(3,9,e.ripple$)),t.xp6(2),t.MGl("src","assets/icons/tabs/",e.route,".svg"),t.Q6J("svgStyle",t.DdM(13,f)),t.xp6(1),t.Q6J("ngIf",e.route===t.lcZ(6,11,a.currentTab$))}}const m=[{path:"",component:(()=>{class n{constructor(e){this.navCtrl=e,this.currentTab$=new s.X("potential"),this.tabs=[{route:"potential",name:"\u041f\u043e\u0442\u0435\u043d\u0446\u0438\u0430\u043b",ripple$:new s.X(!1)},{route:"restrictions",name:"\u041e\u0433\u0440\u0430\u043d\u0438\u0447\u0435\u043d\u0438\u044f",ripple$:new s.X(!1)},{route:"activity",name:"\u041c\u0435\u0440\u043e\u043f\u0440\u0438\u044f\u0442\u0438\u044f",ripple$:new s.X(!1)},{route:"ideas",name:"\u0418\u0434\u0435\u0438",ripple$:new s.X(!1)}],this.tabsRouting={potential:"tabs/potential",restrictions:"tabs/restrictions",activity:"tabs/activity",ideas:"tabs/ideas"}}ngOnInit(){}selectTab(e){var a;e.ripple$.next(!0),setTimeout(()=>{var c;return null===(c=e.ripple$)||void 0===c?void 0:c.next(!1)},500),this.navCtrl.navigateRoot(null!==(a=this.tabsRouting[e.route])&&void 0!==a?a:this.tabsRouting[this.currentTab$.value]).then()}routing(e){this.currentTab$.next(e.route)}tabTrack(e,a){return a.route}}return n.\u0275fac=function(e){return new(e||n)(t.Y36(l.SH))},n.\u0275cmp=t.Xpm({type:n,selectors:[["app-tabs"]],decls:7,vars:2,consts:[[1,"container"],[1,"header"],[1,"page-wrapper",3,"activate"],[1,"footer"],["class","tab-icon ion-activatable ripple-parent",3,"tab-icon_active","click",4,"ngFor","ngForOf","ngForTrackBy"],[1,"tab-icon","ion-activatable","ripple-parent",3,"click"],[2,"position","absolute"],[3,"src","svgStyle"],["class","tabs-name",4,"ngIf"],[1,"tabs-name"]],template:function(e,a){1&e&&(t.TgZ(0,"div",0),t.TgZ(1,"div",1),t.TgZ(2,"span"),t._uU(3,"\u041a\u0413\u041f\u041d"),t.qZA(),t.qZA(),t.TgZ(4,"ion-router-outlet",2),t.NdJ("activate",function(g){return a.routing(g)}),t.qZA(),t.TgZ(5,"div",3),t.YNc(6,b,7,14,"div",4),t.qZA(),t.qZA()),2&e&&(t.xp6(6),t.Q6J("ngForOf",a.tabs)("ngForTrackBy",a.tabTrack))},directives:[l.jP,r.sg,u.bk,r.O5],pipes:[r.Ov],styles:['*[_ngcontent-%COMP%]{box-sizing:border-box}.container[_ngcontent-%COMP%]{display:flex;flex-flow:column;justify-content:flex-end;height:100%;background:#12151E}.container[_ngcontent-%COMP%]   .header[_ngcontent-%COMP%]{display:flex;height:15vh;min-height:15vh;width:100%;background:#12151E;color:#d7e2f2;padding:0 8vw}.container[_ngcontent-%COMP%]   .header[_ngcontent-%COMP%]   span[_ngcontent-%COMP%]{font-family:"SegoeUI_Bold";font-size:2.9556650246vh;margin-top:8.0049261084vh}.container[_ngcontent-%COMP%]   .page-wrapper[_ngcontent-%COMP%]{position:relative;width:100%;flex-grow:1}.container[_ngcontent-%COMP%]   .footer[_ngcontent-%COMP%]{width:100%;display:flex;background:#1C1F2B;box-shadow:0 0 5vh #0009;z-index:999;padding-top:1.8vh;padding-bottom:1.8vh;padding-bottom:max(env(safe-area-inset-bottom),1.8vh);overflow:hidden}.container[_ngcontent-%COMP%]   .footer[_ngcontent-%COMP%]   .tab-icon[_ngcontent-%COMP%]{flex:1;display:flex;flex-direction:column;align-items:center;color:#606580;font-size:2.9556650246vh;height:5vh;justify-content:center}.container[_ngcontent-%COMP%]   .footer[_ngcontent-%COMP%]   .tab-icon[_ngcontent-%COMP%]   .tabs-name[_ngcontent-%COMP%]{width:100%;font-size:1.2315270936vh;display:flex;justify-content:center;align-items:center;margin-top:-.5vh;animation:tabs-name .3s ease;animation-iteration-count:1}.container[_ngcontent-%COMP%]   .footer[_ngcontent-%COMP%]   .tab-icon_active[_ngcontent-%COMP%]{color:#1c76fe;transition:.3s}.container[_ngcontent-%COMP%]   .footer[_ngcontent-%COMP%]   .tab-icon_active[_ngcontent-%COMP%]   svg-icon[_ngcontent-%COMP%]{transform:scale(1.1);transition:.3s}.ripple[_ngcontent-%COMP%]{position:absolute;background:rgba(96,101,128,.1);animation:ripple .4s ease;animation-iteration-count:1;border-radius:50%;z-index:-1}@keyframes ripple{0%{width:0;height:0}99%{width:33vw;height:32vw;background:rgba(96,101,128,.2)}to{width:33vw;height:32vw;background:transparent}}@keyframes tabs-name{0%{transform:scale(0)}to{transform:scale(1)}}']}),n})(),children:[{path:"potential",loadChildren:()=>o.e(1380).then(o.bind(o,1380)).then(n=>n.TabsPotentialPageModule)},{path:"restrictions",loadChildren:()=>Promise.all([o.e(8592),o.e(5397)]).then(o.bind(o,5397)).then(n=>n.TabsRestrictionsPageModule)},{path:"activity",loadChildren:()=>Promise.all([o.e(8592),o.e(9868)]).then(o.bind(o,9868)).then(n=>n.TabsActivityPageModule)},{path:"ideas",loadChildren:()=>Promise.all([o.e(8592),o.e(2987)]).then(o.bind(o,2987)).then(n=>n.TabsIdeasPageModule)},{path:"**",redirectTo:"potential",pathMatch:"full"}]}];let P=(()=>{class n{}return n.\u0275fac=function(e){return new(e||n)},n.\u0275mod=t.oAB({type:n}),n.\u0275inj=t.cJS({imports:[[h.Bz.forChild(m)],h.Bz]}),n})(),T=(()=>{class n{}return n.\u0275fac=function(e){return new(e||n)},n.\u0275mod=t.oAB({type:n}),n.\u0275inj=t.cJS({imports:[[r.ez,v.u5,l.Pc,P,u._J]]}),n})()}}]);