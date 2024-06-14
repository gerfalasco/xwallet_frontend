"use strict";(self.webpackChunkCoreBancario=self.webpackChunkCoreBancario||[]).push([[697],{2664:(p,g,o)=>{o.d(g,{D:()=>t});var s=o(1135),c=o(4893);let t=(()=>{class r{constructor(){this._customerSource$=new s.X(null)}get customerSource$(){return this._customerSource$.asObservable()}get currentCustomer(){return this._customerSource$.value}changeData(u){this._customerSource$.next(u)}}return r.\u0275fac=function(u){return new(u||r)},r.\u0275prov=c.Yz7({token:r,factory:r.\u0275fac}),r})()},6697:(p,g,o)=>{o.r(g),o.d(g,{ModulosCbModule:()=>j});var s=o(9808),c=o(8753),t=o(4893);let r=(()=>{class e{}return e.\u0275fac=function(n){return new(n||e)},e.\u0275mod=t.oAB({type:e}),e.\u0275inj=t.cJS({imports:[[s.ez,c.Bz]]}),e})();var l=o(2664),u=o(2891);const C=function(){return["./cliente/consulta/"]};let M=(()=>{class e{constructor(n,a){this.authService=n,this.dataService=a}cerrarSesion(){this.authService.logout()}clearClient(){this.dataService.changeData(null)}}return e.\u0275fac=function(n){return new(n||e)(t.Y36(u.e),t.Y36(l.D))},e.\u0275cmp=t.Xpm({type:e,selectors:[["cb-header-menu"]],decls:8,vars:2,consts:[[1,"navbar"],[1,"btn-list"],["type","button",1,"btn","btn--only-icon"],[1,"fas","fa-search","input-icon","text-white",3,"routerLink","click"],["type","button",1,"btn","btn--danger",3,"click"]],template:function(n,a){1&n&&(t.TgZ(0,"div",0)(1,"ul",1)(2,"li")(3,"button",2)(4,"i",3),t.NdJ("click",function(){return a.clearClient()}),t.qZA()()(),t.TgZ(5,"li")(6,"button",4),t.NdJ("click",function(){return a.cerrarSesion()}),t._uU(7,"Cerrar Sesi\xf3n"),t.qZA()()()()),2&n&&(t.xp6(4),t.Q6J("routerLink",t.DdM(1,C)))},directives:[c.rH],styles:['@charset "UTF-8";.navbar[_ngcontent-%COMP%]{display:flex;justify-content:center}.btn-list[_ngcontent-%COMP%]{display:flex;list-style-type:none;padding:0}.btn-list[_ngcontent-%COMP%]   li[_ngcontent-%COMP%]{margin-right:10px}.btn[_ngcontent-%COMP%]{display:flex;gap:6px;flex-direction:row;white-space:nowrap;align-items:center;position:relative;box-sizing:border-box;font-weight:400;text-decoration:none;transition:background-color .15s linear;height:26px;font-size:16px;border:1px solid transparent;padding:4px 20px}.text-white[_ngcontent-%COMP%]{color:#fff!important}']}),e})();function h(e,i){if(1&e){const n=t.EpF();t.TgZ(0,"i",6),t.NdJ("click",function(){return t.CHM(n),t.oxw().statusSidebar()}),t.qZA()}}let b=(()=>{class e{constructor(){this.statusSidebarEmiter=new t.vpe,this.sidebarOpenMobile=!1,this.windowSize=window.innerWidth}onResize(){this.windowSize=window.innerWidth}ngOnInit(){}statusSidebar(){this.sidebarOpenMobile=!this.sidebarOpenMobile,this.statusSidebarEmiter.emit(this.sidebarOpenMobile)}}return e.\u0275fac=function(n){return new(n||e)},e.\u0275cmp=t.Xpm({type:e,selectors:[["cb-header"]],hostBindings:function(n,a){1&n&&t.NdJ("resize",function(m){return a.onResize(m)},!1,t.Jf7)},outputs:{statusSidebarEmiter:"statusSidebar"},decls:6,vars:1,consts:[[1,"header"],[1,"header__title"],["class","fas fa-bars hamburger-icon",3,"click",4,"ngIf"],[1,"header__icono","cb-icon","cb-icon--empresa"],[1,"header__toolbar"],[2,"margin-right","10px"],[1,"fas","fa-bars","hamburger-icon",3,"click"]],template:function(n,a){1&n&&(t.TgZ(0,"div",0)(1,"p",1),t.YNc(2,h,1,0,"i",2),t._UZ(3,"span",3),t.qZA(),t.TgZ(4,"div",4),t._UZ(5,"cb-header-menu",5),t.qZA()()),2&n&&(t.xp6(2),t.Q6J("ngIf",a.windowSize<=768))},directives:[s.O5,M],styles:['@charset "UTF-8";.header[_ngcontent-%COMP%]{display:grid;grid-template-columns:auto 1fr auto;align-items:center;background-image:linear-gradient(158deg,#5d44a6 9.46%,#5d4ebf 36.13%,#9b91d9 80%);color:#fff;height:40px}.header__icono[_ngcontent-%COMP%]{aspect-ratio:3/1;min-height:2em}.header__title[_ngcontent-%COMP%]{font-size:20px}.header__toolbar[_ngcontent-%COMP%]{display:flex;justify-content:flex-end;align-items:center}.usuario[_ngcontent-%COMP%]{display:flex;align-items:center;margin-left:20px}.usuario__icono[_ngcontent-%COMP%]{margin-right:10px}.usuario__nombre[_ngcontent-%COMP%]{display:flex;flex-direction:column;margin-right:4px}.usuario__nombre[_ngcontent-%COMP%]   h5[_ngcontent-%COMP%]{margin:0}.usuario__nombre[_ngcontent-%COMP%]   p[_ngcontent-%COMP%]{margin:0;font-size:12px}.icon[_ngcontent-%COMP%]{font-size:24px}.icon--user[_ngcontent-%COMP%]:before{content:"\\e900"}@media (max-width: 768px){.header__toolbar[_ngcontent-%COMP%]{justify-content:center}.usuario[_ngcontent-%COMP%]{margin-left:0;margin-top:10px}}.header__logo[_ngcontent-%COMP%]{grid-column:1;justify-self:center;margin-right:20px;transform:scale(1.5)}.hamburger-icon[_ngcontent-%COMP%]{display:block;cursor:pointer}.title[_ngcontent-%COMP%]{vertical-align:middle;font-weight:700}']}),e})();function f(e,i){1&e&&(t.TgZ(0,"span",5),t._uU(1,"Nydia"),t.qZA())}const y=function(e){return[e]};function O(e,i){if(1&e&&(t.TgZ(0,"div")(1,"ul")(2,"li")(3,"a",6),t._uU(4,"Datos Personales"),t.qZA()(),t.TgZ(5,"li")(6,"a",7),t._uU(7,"Cuenta"),t.qZA()(),t.TgZ(8,"li")(9,"a",8),t._uU(10,"Dep\xf3sitos"),t.qZA()(),t.TgZ(11,"li")(12,"a",9),t._uU(13,"Retiros"),t.qZA()(),t.TgZ(14,"li")(15,"a",10),t._uU(16,"Seguros"),t.qZA()()()()),2&e){const n=t.oxw();t.xp6(3),t.Q6J("routerLink",t.VKq(1,y,"./datos-personales/consulta/"+(null==n.currentCustomer?null:n.currentCustomer.customerName)))}}const N=function(e){return{"sidebar--hidden":e}};let x=(()=>{class e{constructor(n){this.dataService=n,this.sidebarHidden=!0,this.showUserData=!1,this.currentCustomer=null}showData(){this.showUserData=!0}hideData(){this.showUserData=!1}ngOnInit(){this.dataService.customerSource$.subscribe({next:n=>{this.currentCustomer!==this.dataService.currentCustomer&&(this.currentCustomer=this.dataService.currentCustomer)}})}}return e.\u0275fac=function(n){return new(n||e)(t.Y36(l.D))},e.\u0275cmp=t.Xpm({type:e,selectors:[["cb-sidebar-menu"]],decls:5,vars:5,consts:[[1,"sidebar",3,"ngClass","mouseenter","mouseleave"],[1,"profile"],[1,"fas","fa-user"],["style","margin-left: 10px;",4,"ngIf"],[4,"ngIf"],[2,"margin-left","10px"],[3,"routerLink"],["routerLink","/core-bancario/cuenta/consulta"],["routerLink","/core-bancario/deposito/consulta"],["routerLink","/core-bancario/retiro/consulta"],["routerLink","/seguros"]],template:function(n,a){1&n&&(t.TgZ(0,"div",0),t.NdJ("mouseenter",function(){return a.showData()})("mouseleave",function(){return a.hideData()}),t.TgZ(1,"div",1)(2,"i",2),t.YNc(3,f,2,0,"span",3),t.qZA()(),t.YNc(4,O,17,3,"div",4),t.qZA()),2&n&&(t.Q6J("ngClass",t.VKq(3,N,!a.showUserData)),t.xp6(3),t.Q6J("ngIf",a.showUserData),t.xp6(1),t.Q6J("ngIf",a.showUserData&&a.currentCustomer))},directives:[s.mk,s.O5,c.yS],styles:[".sidebar[_ngcontent-%COMP%]{height:100%;width:20%;position:fixed;top:40px;background-image:linear-gradient(158deg,#5d4ebf 10.46%,#9b91d9 93.13%,#B3ADD9 100%);color:#fff;margin:0;transition:width .3s;overflow:hidden;z-index:100000}.sidebar--hidden[_ngcontent-%COMP%]{width:48px}.profile[_ngcontent-%COMP%]{padding:10px;font-weight:700;color:#fff}.profile[_ngcontent-%COMP%]   i[_ngcontent-%COMP%]{margin-right:10px}.sidebar[_ngcontent-%COMP%]   ul[_ngcontent-%COMP%]{list-style-type:none;padding:0;margin:0}.sidebar[_ngcontent-%COMP%]   ul[_ngcontent-%COMP%]   li[_ngcontent-%COMP%]{padding:10px}.sidebar[_ngcontent-%COMP%]   ul[_ngcontent-%COMP%]   li[_ngcontent-%COMP%]   a[_ngcontent-%COMP%]{color:#fff;text-decoration:none}.sidebar[_ngcontent-%COMP%]   ul[_ngcontent-%COMP%]   li[_ngcontent-%COMP%]   a[_ngcontent-%COMP%]:hover{color:#fff}"]}),e})(),D=(()=>{class e{constructor(){}ngOnInit(){}}return e.\u0275fac=function(n){return new(n||e)},e.\u0275cmp=t.Xpm({type:e,selectors:[["cb-sidebar"]],decls:2,vars:0,consts:[[1,"sidebar__wraper"],[2,"height","auto !important"]],template:function(n,a){1&n&&(t.TgZ(0,"div",0),t._UZ(1,"cb-sidebar-menu",1),t.qZA())},directives:[x],styles:[".sidebar__wraper[_ngcontent-%COMP%]{z-index:9999;width:200px;display:flex;flex-direction:column;background-color:#fff;height:calc(100% - 21px)}.sidebar__wraper.open[_ngcontent-%COMP%]{animation:abrirMenu .3s ease alternate}.sidebar__wraper.close[_ngcontent-%COMP%]{animation:cerrarMenu .3s ease alternate;transform:translate(-340px)}"]}),e})(),v=(()=>{class e{constructor(){}ngOnInit(){}}return e.\u0275fac=function(n){return new(n||e)},e.\u0275cmp=t.Xpm({type:e,selectors:[["cb-footer"]],decls:1,vars:0,consts:[[1,"footer__icon","icon","icon--info",2,"cursor","pointer"]],template:function(n,a){1&n&&t._UZ(0,"span",0)},styles:["[_nghost-%COMP%]{background-color:#d0d0d1;display:flex;justify-content:end;align-items:center;height:21px}[_nghost-%COMP%]   .icon[_ngcontent-%COMP%]{display:inline-block;position:relative;vertical-align:middle;aspect-ratio:1/1;min-height:1em;background-color:currentcolor;mask-repeat:no-repeat;mask-size:contain}[_nghost-%COMP%]   .icon.icon--info[_ngcontent-%COMP%]{mask-image:url(data:image/svg+xml;base64,PD94bWwgdmVyc2lvbj0iMS4wIiBlbmNvZGluZz0idXRmLTgiPz4NCjwhLS0gR2VuZXJhdG9yOiBBZG9iZSBJbGx1c3RyYXRvciAyNy4zLjEsIFNWRyBFeHBvcnQgUGx1Zy1JbiAuIFNWRyBWZXJzaW9uOiA2LjAwIEJ1aWxkIDApICAtLT4NCjxzdmcgdmVyc2lvbj0iMS4xIiBpZD0iQ2FwYV8xIiB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHhtbG5zOnhsaW5rPSJodHRwOi8vd3d3LnczLm9yZy8xOTk5L3hsaW5rIiB4PSIwcHgiIHk9IjBweCINCgkgdmlld0JveD0iMCAwIDE4IDE4IiBzdHlsZT0iZW5hYmxlLWJhY2tncm91bmQ6bmV3IDAgMCAxOCAxODsiIHhtbDpzcGFjZT0icHJlc2VydmUiPg0KPHN0eWxlIHR5cGU9InRleHQvY3NzIj4NCgkuc3Qwe2ZpbGw6IzY1NjU2NDt9DQoJLnN0MXtmaWxsOm5vbmU7c3Ryb2tlOiM2NTY1NjQ7c3Ryb2tlLXdpZHRoOjI7c3Ryb2tlLW1pdGVybGltaXQ6MTA7fQ0KCS5zdDJ7ZmlsbDojNjU2NTY0O3N0cm9rZTojNjU2NTY0O3N0cm9rZS13aWR0aDowLjUwMjc7c3Ryb2tlLW1pdGVybGltaXQ6MTA7fQ0KCS5zdDN7ZmlsbDpub25lO3N0cm9rZTojNjU2NTY0O3N0cm9rZS13aWR0aDoxLjg1O3N0cm9rZS1taXRlcmxpbWl0OjEwO30NCgkuc3Q0e2ZpbGw6bm9uZTtzdHJva2U6IzY1NjU2NDtzdHJva2Utd2lkdGg6MS43NTtzdHJva2UtbWl0ZXJsaW1pdDoxMDt9DQoJLnN0NXtmaWxsOiM2NTY1NjQ7c3Ryb2tlOiM2NTY1NjQ7c3Ryb2tlLXdpZHRoOjAuNDQ7c3Ryb2tlLW1pdGVybGltaXQ6MTA7fQ0KCS5zdDZ7ZmlsbDojNjU2NTY0O3N0cm9rZTojNjU2NTY0O3N0cm9rZS13aWR0aDowLjQzNjg7c3Ryb2tlLW1pdGVybGltaXQ6MTA7fQ0KCS5zdDd7ZmlsbDpub25lO3N0cm9rZTojNjU2NTY0O3N0cm9rZS13aWR0aDoxLjY3Njg7c3Ryb2tlLW1pdGVybGltaXQ6MTA7fQ0KCS5zdDh7ZmlsbDojMDIwMjAzO30NCgkuc3Q5e2ZpbGw6IzY1NjU2NDtzdHJva2U6IzY1NjU2NDtzdHJva2Utd2lkdGg6MC4yO3N0cm9rZS1taXRlcmxpbWl0OjEwO30NCgkuc3QxMHtmaWxsOiM2NTY1NjQ7c3Ryb2tlOiM2NTY1NjQ7c3Ryb2tlLXdpZHRoOjAuNDU7c3Ryb2tlLW1pdGVybGltaXQ6MTA7fQ0KCS5zdDExe2ZpbGw6IzY1NjU2NDtzdHJva2U6IzY1NjU2NDtzdHJva2Utd2lkdGg6MC4yOTQ7c3Ryb2tlLW1pdGVybGltaXQ6MTA7fQ0KCS5zdDEye2ZpbGw6bm9uZTtzdHJva2U6IzY1NjU2NDtzdHJva2Utd2lkdGg6MS41OTE2O3N0cm9rZS1taXRlcmxpbWl0OjEwO30NCgkuc3QxM3tmaWxsOiM2NTY1NjQ7c3Ryb2tlOiM2NTY1NjQ7c3Ryb2tlLXdpZHRoOjAuNDtzdHJva2UtbWl0ZXJsaW1pdDoxMDt9DQo8L3N0eWxlPg0KPGc+DQoJPHBhdGggY2xhc3M9InN0MTEiIGQ9Ik05LDAuMjFDNC4xNSwwLjIxLDAuMjEsNC4xNSwwLjIxLDlTNC4xNSwxNy43OSw5LDE3Ljc5czguNzktMy45Myw4Ljc5LTguNzlDMTcuNzgsNC4xNSwxMy44NSwwLjIyLDksMC4yMXoNCgkJIE05LDE2LjMyYy00LjA0LDAtNy4zMi0zLjI4LTcuMzItNy4zMlM0Ljk2LDEuNjgsOSwxLjY4UzE2LjMyLDQuOTYsMTYuMzIsOUMxNi4zMiwxMy4wNCwxMy4wNCwxNi4zMiw5LDE2LjMyeiIvPg0KCTxjaXJjbGUgY2xhc3M9InN0MTEiIGN4PSI5IiBjeT0iNC45NyIgcj0iMS4xIi8+DQoJPGc+DQoJCQ0KCQkJPHJlY3QgeD0iOC4xMyIgeT0iNi43NyIgdHJhbnNmb3JtPSJtYXRyaXgoNi4xMjMyMzRlLTE3IC0xIDEgNi4xMjMyMzRlLTE3IDAuNjE1OCAxNy4zODQyKSIgY2xhc3M9InN0MCIgd2lkdGg9IjEuNzQiIGhlaWdodD0iMy4yNCIvPg0KCQkNCgkJCTxyZWN0IHg9IjguODgiIHk9IjguNTYiIHRyYW5zZm9ybT0ibWF0cml4KC0xIC0xLjIyNDY0N2UtMTYgMS4yMjQ2NDdlLTE2IC0xIDE5LjQ5NzIgMjIuOTQ0NSkiIGNsYXNzPSJzdDAiIHdpZHRoPSIxLjc0IiBoZWlnaHQ9IjUuODIiLz4NCgk8L2c+DQo8L2c+DQo8L3N2Zz4NCg==)}.footer__icon[_ngcontent-%COMP%]{margin-right:13px;color:#fff;width:11px}"]}),e})();const P=[{path:"",component:(()=>{class e{constructor(n){this.dataService=n,this.sidebarOpen=!1,this.sidebarOpenMobile=!1,this.sidebarHide=!1}ngOnInit(){this.sidebarHide=!!this.dataService.currentCustomer,console.log(this.sidebarHide)}toggleMenu(){this.sidebarOpen=!this.sidebarOpen}statusSidebar(n){this.sidebarOpenMobile=n}}return e.\u0275fac=function(n){return new(n||e)(t.Y36(l.D))},e.\u0275cmp=t.Xpm({type:e,selectors:[["app-layout"]],decls:6,vars:0,consts:[[1,"layout__header",3,"statusSidebar"],[1,"layout__footer"]],template:function(n,a){1&n&&(t.TgZ(0,"cb-header",0),t.NdJ("statusSidebar",function(m){return a.statusSidebar(m)}),t.qZA(),t.TgZ(1,"aside"),t._UZ(2,"cb-sidebar"),t.qZA(),t.TgZ(3,"main"),t._UZ(4,"router-outlet"),t.qZA(),t._UZ(5,"cb-footer",1))},directives:[b,D,c.lC,v],styles:['@charset "UTF-8";[_nghost-%COMP%]{display:grid;grid-template-columns:48px 1fr;grid-template-rows:auto 1fr auto;min-height:100vh;max-height:100vh;min-width:100vw;max-width:100vw}.layout__header[_ngcontent-%COMP%]{grid-column:1/4;grid-row:1/2}.layout__sidebar[_ngcontent-%COMP%]{grid-column:1/2;grid-row:2/4}.layout__content[_ngcontent-%COMP%]{grid-column:2/3;grid-row:2/3;overflow:auto}.layout__menu-phone[_ngcontent-%COMP%]{display:none}.overlay[_ngcontent-%COMP%]{display:none;position:fixed;inset:0;background:rgba(0,0,0,.6);z-index:1000}.layout__footer[_ngcontent-%COMP%]{grid-column:1/3;grid-row:3/4}@media (max-width: 768px){.layout__footer[_ngcontent-%COMP%], .layout__sidebar[_ngcontent-%COMP%]{display:none}.layout__content[_ngcontent-%COMP%]{grid-column:1/4}.layout__menu-phone[_ngcontent-%COMP%]{display:flex;grid-column:1/2;grid-row:2/4}.layout__menu-phone.open[_ngcontent-%COMP%] + .overlay[_ngcontent-%COMP%]{display:block}.overlay[_ngcontent-%COMP%]{display:none;position:fixed;inset:0;background:rgba(0,0,0,.6);z-index:1000}}@media (max-width: 768px) and (min-width: 769px){.hamburger-icon[_ngcontent-%COMP%]{display:none}}']}),e})(),children:[{path:"retiro",loadChildren:()=>o.e(402).then(o.bind(o,8402)).then(e=>e.RetiroModule)},{path:"cliente",loadChildren:()=>Promise.all([o.e(196),o.e(592),o.e(109)]).then(o.bind(o,1109)).then(e=>e.CustomerModule)},{path:"cuenta",loadChildren:()=>Promise.all([o.e(196),o.e(592),o.e(322)]).then(o.bind(o,3322)).then(e=>e.AccountModule)},{path:"deposito",loadChildren:()=>o.e(802).then(o.bind(o,4802)).then(e=>e.DepositoModule)},{path:"datos-personales",loadChildren:()=>Promise.all([o.e(196),o.e(592),o.e(641)]).then(o.bind(o,1641)).then(e=>e.DatosPersonalesModule)}]}];let j=(()=>{class e{}return e.\u0275fac=function(n){return new(n||e)},e.\u0275mod=t.oAB({type:e}),e.\u0275inj=t.cJS({providers:[l.D],imports:[[s.ez,r,c.Bz.forChild(P)]]}),e})()}}]);