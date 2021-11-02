"use strict";(self.webpackChunkionic_workspace=self.webpackChunkionic_workspace||[]).push([[5796],{5796:(P,a,i)=>{i.r(a),i.d(a,{AuthPageModule:()=>p});var g=i(8583),r=i(665),s=i(3083),h=i(8239),d=i(6751),n=i(8186),f=i(2287),l=i(2976);const v=["input"];let m=(()=>{class o{constructor(t,e){this.userService=t,this.navCtrl=e,this.codeInput=void 0,this.codeControl=new r.NI("",[r.kI.required,r.kI.minLength(5)]),this.isSwingAnimation$=new d.X(!1)}ngOnInit(){this.codeControl.valueChanges.subscribe(t=>{!this.codeControl.valid||this.auth(t).then()})}auth(t){var e=this;return(0,h.Z)(function*(){e.navCtrl.navigateRoot("tabs")})()}}return o.\u0275fac=function(t){return new(t||o)(n.Y36(f.K),n.Y36(s.SH))},o.\u0275cmp=n.Xpm({type:o,selectors:[["app-auth"]],viewQuery:function(t,e){if(1&t&&n.Gf(v,5),2&t){let u;n.iGM(u=n.CRH())&&(e.codeInput=u.first)}},decls:17,vars:5,consts:[[1,"container"],[1,"header"],[1,"title"],[1,"content"],[1,"enter-with-logo"],[1,"enter"],[1,"enter__title"],[1,"enter__code"],["type","tel","maxlength","5",3,"formControl"],["input",""],[1,"enter__subtitle"],[1,"logo-wrapper"],["src","assets/icons/gpn-logo.svg"]],template:function(t,e){1&t&&(n.TgZ(0,"div",0),n.TgZ(1,"div",1),n.TgZ(2,"div",2),n._uU(3," \u0412\u0445\u043e\u0434 \u0432 \u0441\u0438\u0441\u0442\u0435\u043c\u0443 "),n.qZA(),n.qZA(),n.TgZ(4,"div",3),n.TgZ(5,"div",4),n.TgZ(6,"div",5),n.ALo(7,"async"),n.TgZ(8,"div",6),n._uU(9," \u0412\u0432\u0435\u0434\u0438\u0442\u0435 \u043a\u043e\u0434 \u0434\u043e\u0441\u0442\u0443\u043f\u0430 "),n.qZA(),n.TgZ(10,"div",7),n._UZ(11,"input",8,9),n.qZA(),n.TgZ(13,"div",10),n._uU(14," \u0415\u0441\u043b\u0438 \u0443 \u0412\u0430\u0441 \u043d\u0435\u0442 \u043a\u043e\u0434\u0430, \u043e\u0431\u0440\u0430\u0442\u0438\u0442\u0435\u0441\u044c \u043a \u0440\u0443\u043a\u043e\u0432\u043e\u0434\u0438\u0442\u0435\u043b\u044e "),n.qZA(),n.qZA(),n.qZA(),n.TgZ(15,"div",11),n._UZ(16,"svg-icon",12),n.qZA(),n.qZA(),n.qZA()),2&t&&(n.xp6(6),n.ekj("swing",n.lcZ(7,3,e.isSwingAnimation$)),n.xp6(5),n.Q6J("formControl",e.codeControl))},directives:[r.Fj,r.nD,r.JJ,r.oH,l.bk],pipes:[g.Ov],styles:['*[_ngcontent-%COMP%]{box-sizing:border-box}.container[_ngcontent-%COMP%]{height:100%;width:100%;font-weight:500;background:#12151E;display:flex;flex-direction:column}.container[_ngcontent-%COMP%]   .gradient[_ngcontent-%COMP%]{margin-left:-21.3333333333vw;margin-top:-49.2610837438vh}.container[_ngcontent-%COMP%]   .header[_ngcontent-%COMP%]{z-index:999;height:15.5172413793vh;min-height:15.5172413793vh;max-height:15.5172413793vh;font-size:3.2019704433vh;font-weight:600;font-family:"SegoeUI_Bold";display:flex;flex-direction:column;justify-content:flex-end;padding:0 11.2vw}.container[_ngcontent-%COMP%]   .header[_ngcontent-%COMP%]   .title[_ngcontent-%COMP%]{display:flex;align-items:center;width:100%;height:11.6995073892vh;color:#d7e2f2}.container[_ngcontent-%COMP%]   .content[_ngcontent-%COMP%]{width:100%;height:100vh;position:relative;display:flex;flex-flow:column;justify-content:space-around;align-items:center;color:#d7e2f2;font-size:2.2167487685vh;overflow:hidden}.container[_ngcontent-%COMP%]   .content[_ngcontent-%COMP%]   .enter[_ngcontent-%COMP%]{z-index:99;width:100%;position:relative;display:flex;flex-direction:column;justify-content:center;align-items:center}.container[_ngcontent-%COMP%]   .content[_ngcontent-%COMP%]   .enter__code[_ngcontent-%COMP%]{z-index:999;height:9.7290640394vh;border-radius:.9852216749vh;font-weight:900;font-family:"SegoeUI_Bold"}.container[_ngcontent-%COMP%]   .content[_ngcontent-%COMP%]   .enter__title[_ngcontent-%COMP%]{margin-bottom:1.9704433498vh;font-weight:700;font-size:2.2167487685vh}.container[_ngcontent-%COMP%]   .content[_ngcontent-%COMP%]   .enter__subtitle[_ngcontent-%COMP%]{height:11.8226600985vh;width:66.6666666667vw;color:#d7e2f2;font-weight:300;font-size:1.724137931vh;display:flex;flex-direction:column;justify-content:center;align-items:center;text-align:center}.container[_ngcontent-%COMP%]   .content[_ngcontent-%COMP%]   .enter__subtitle[_ngcontent-%COMP%]   span[_ngcontent-%COMP%]{font-family:"SegoeUI_Bold";font-weight:700}.container[_ngcontent-%COMP%]   .content[_ngcontent-%COMP%]   .enter[_ngcontent-%COMP%]   input[_ngcontent-%COMP%]{z-index:99;height:9.7290640394vh;width:75vw;border-radius:.9852216749vh;font-size:9.6vw;color:#d7e2f2;padding:10.6666666667vw 0;letter-spacing:5.8666666667vw;background-color:#1c1f2b;outline:none;border:none;margin-bottom:5.1724137931vh;text-align:center;font-weight:bold}.swing[_ngcontent-%COMP%]{animation:swing .6s ease;animation-iteration-count:1}@keyframes swing{15%{transform:translate(9px)}30%{transform:translate(-9px)}40%{transform:translate(6px)}50%{transform:translate(-6px)}65%{transform:translate(3px)}to{transform:translate(0)}}.enter-with-logo[_ngcontent-%COMP%]{margin-bottom:4.9261083744vh;display:flex;flex-direction:column;justify-content:space-around;height:100%;align-items:center}.logo-wrapper[_ngcontent-%COMP%]{margin-left:-1.6vw;top:83vh;height:10vh;position:fixed;display:flex;width:33vw;justify-content:center;align-items:center}']}),o})();var C=i(1182);let p=(()=>{class o{}return o.\u0275fac=function(t){return new(t||o)},o.\u0275mod=n.oAB({type:o}),o.\u0275inj=n.cJS({imports:[[g.ez,r.u5,s.Pc,l._J,r.UX,[C.Bz.forChild([{path:"",component:m}])]]]}),o})()}}]);