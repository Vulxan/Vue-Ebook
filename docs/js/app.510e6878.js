(function(t){function e(e){for(var i,a,r=e[0],l=e[1],c=e[2],d=0,f=[];d<r.length;d++)a=r[d],s[a]&&f.push(s[a][0]),s[a]=0;for(i in l)Object.prototype.hasOwnProperty.call(l,i)&&(t[i]=l[i]);u&&u(e);while(f.length)f.shift()();return o.push.apply(o,c||[]),n()}function n(){for(var t,e=0;e<o.length;e++){for(var n=o[e],i=!0,r=1;r<n.length;r++){var l=n[r];0!==s[l]&&(i=!1)}i&&(o.splice(e--,1),t=a(a.s=n[0]))}return t}var i={},s={app:0},o=[];function a(e){if(i[e])return i[e].exports;var n=i[e]={i:e,l:!1,exports:{}};return t[e].call(n.exports,n,n.exports,a),n.l=!0,n.exports}a.m=t,a.c=i,a.d=function(t,e,n){a.o(t,e)||Object.defineProperty(t,e,{enumerable:!0,get:n})},a.r=function(t){"undefined"!==typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(t,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(t,"__esModule",{value:!0})},a.t=function(t,e){if(1&e&&(t=a(t)),8&e)return t;if(4&e&&"object"===typeof t&&t&&t.__esModule)return t;var n=Object.create(null);if(a.r(n),Object.defineProperty(n,"default",{enumerable:!0,value:t}),2&e&&"string"!=typeof t)for(var i in t)a.d(n,i,function(e){return t[e]}.bind(null,i));return n},a.n=function(t){var e=t&&t.__esModule?function(){return t["default"]}:function(){return t};return a.d(e,"a",e),e},a.o=function(t,e){return Object.prototype.hasOwnProperty.call(t,e)},a.p="/Vue-Ebook/";var r=window["webpackJsonp"]=window["webpackJsonp"]||[],l=r.push.bind(r);r.push=e,r=r.slice();for(var c=0;c<r.length;c++)e(r[c]);var u=l;o.push([0,"chunk-vendors"]),n()})({0:function(t,e,n){t.exports=n("56d7")},"0262":function(t,e,n){},"0af1":function(t,e,n){},2:function(t,e){},2461:function(t,e,n){"use strict";var i=n("b9bf"),s=n.n(i);s.a},"2f0f":function(t,e,n){"use strict";var i=n("69db"),s=n.n(i);s.a},3:function(t,e){},"3d0e":function(t,e,n){},"3db4":function(t,e,n){},"45c6":function(t,e,n){},"4a43":function(t,e,n){},"4c220":function(t,e,n){"use strict";var i=n("feec"),s=n.n(i);s.a},"56d7":function(t,e,n){"use strict";n.r(e);n("cadf"),n("551c"),n("097d");var i=n("2b0e"),s=function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",{attrs:{id:"app"}},[n("router-view")],1)},o=[],a={name:"App"};document.addEventListener("DOMContentLoaded",function(){var t=document.querySelector("html"),e=window.innerWidth/10;e=e>50?50:e,t.style.fontSize=e+"px"});var r=a,l=(n("7faf"),n("2877")),c=Object(l["a"])(r,s,o,!1,null,null,null);c.options.__file="App.vue";var u=c.exports,d=n("8c4f"),f=function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",{staticClass:"ebook"},[n("slide-down",[n("title-bar",{directives:[{name:"show",rawName:"v-show",value:t.isTitleAndMenuShow,expression:"isTitleAndMenuShow"}]})],1),n("div",{staticClass:"read-wrapper"},[n("div",{attrs:{id:"read"}}),n("div",{staticClass:"mask"},[n("div",{staticClass:"left",on:{click:t.prevPage}}),n("div",{staticClass:"center",on:{click:t.toggleTitleAndMenu}}),n("div",{staticClass:"right",on:{click:t.nextPage}})])]),n("slide-up",[n("menu-bar",{directives:[{name:"show",rawName:"v-show",value:t.isTitleAndMenuShow,expression:"isTitleAndMenuShow"}],ref:"menuBar",attrs:{isTitleAndMenuShow:t.isTitleAndMenuShow,fontSizeList:t.fontSizeList,fontSize:t.defaultFontSize,themesList:t.themesList,theme:t.defaultTheme,bookAvailable:t.bookAvailable},on:{setFontSize:t.setFontSize,setTheme:t.setTheme,onProgressChange:t.onProgressChange,showContent:t.showContent}})],1),n("slide-right",[n("table-content",{directives:[{name:"show",rawName:"v-show",value:t.isContentShow,expression:"isContentShow"}],attrs:{bookAvailable:t.bookAvailable,navigation:t.navigation},on:{jumpTo:t.jumpTo}})],1),n("fade",[n("div",{directives:[{name:"show",rawName:"v-show",value:t.isContentShow,expression:"isContentShow"}],staticClass:"table-content-mask",on:{click:t.hideAll}})]),t.isApexMaskShow?n("div",{staticClass:"apex-mask",on:{click:t.hideApexMask}},[t._m(0),t._m(1),t._m(2),n("slide-down",[t.isTipShow?n("div",{staticClass:"tip"},[n("span",{staticClass:"text",domProps:{textContent:t._s(t.tipText)}})]):t._e()])],1):t._e()],1)},h=[function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",{staticClass:"left"},[n("span",{staticClass:"desc"},[t._v("上一页")])])},function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",{staticClass:"center"},[n("span",{staticClass:"desc"},[t._v("显示/隐藏菜单栏")])])},function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",{staticClass:"right"},[n("span",{staticClass:"desc"},[t._v("下一页")])])}],p=(n("7f7f"),n("ac6a"),n("a211")),v=function(){var t=this,e=t.$createElement;t._self._c;return t._m(0)},m=[function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",{staticClass:"title-wrapper"},[n("div",{staticClass:"left"},[n("span",{staticClass:"icon icon-back"})]),n("div",{staticClass:"right"},[n("div",{staticClass:"icon-wrapper"},[n("span",{staticClass:"icon icon-cart"})]),n("div",{staticClass:"icon-wrapper"},[n("span",{staticClass:"icon icon-person"})]),n("div",{staticClass:"icon-wrapper"},[n("span",{staticClass:"icon icon-more"})])])])}],b={name:"TitleBar"},g=b,w=(n("86b9"),Object(l["a"])(g,v,m,!1,null,"5b2a4d33",null));w.options.__file="TitleBar.vue";var S=w.exports,C=function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",{staticClass:"menu-bar"},[n("div",{staticClass:"menu-wrapper"},[n("div",{staticClass:"icon-wrapper"},[n("span",{staticClass:"icon icon-menu",on:{click:function(e){t.showSetting(0)}}})]),n("div",{staticClass:"icon-wrapper"},[n("span",{staticClass:"icon icon-progress",on:{click:function(e){t.showSetting(1)}}})]),n("div",{staticClass:"icon-wrapper"},[n("span",{staticClass:"icon icon-bright",on:{click:function(e){t.showSetting(2)}}})]),n("div",{staticClass:"icon-wrapper"},[n("span",{staticClass:"icon icon-a",on:{click:function(e){t.showSetting(3)}}},[t._v("A")])])]),n("div",{staticClass:"setting-wrapper",class:{"setting-show":t.isSettingShow}},[3===t.showTag?n("div",{staticClass:"setting-font-size"},[n("div",{staticClass:"preview",style:{fontSize:t.fontSizeList[0].fontSize+"px"}},[t._v("A")]),n("div",{staticClass:"select"},t._l(t.fontSizeList,function(e,i){return n("div",{key:i,staticClass:"select-wrapper",on:{click:function(n){t.setFontSize(e.fontSize)}}},[n("div",{staticClass:"line"}),n("div",{staticClass:"point-wrapper"},[n("div",{directives:[{name:"show",rawName:"v-show",value:t.fontSize===e.fontSize,expression:"fontSize === item.fontSize"}],staticClass:"point"},[n("div",{staticClass:"small-point"})])]),n("div",{staticClass:"line"})])})),n("div",{staticClass:"preview",style:{fontSize:t.fontSizeList[t.fontSizeList.length-1].fontSize+"px"}},[t._v("A")])]):2===t.showTag?n("div",{staticClass:"setting-theme"},t._l(t.themesList,function(e,i){return n("div",{key:i,staticClass:"setting-theme-item",on:{click:function(e){t.setTheme(i)}}},[n("div",{staticClass:"preview",style:{background:e.style.body.background}}),n("div",{staticClass:"desc",class:{selected:i===t.theme},domProps:{textContent:t._s(e.name)}})])})):1===t.showTag?n("div",{staticClass:"setting-progress"},[n("div",{staticClass:"progress-wrapper"},[n("input",{directives:[{name:"model",rawName:"v-model",value:t.progress,expression:"progress"}],ref:"progress",staticClass:"progress",attrs:{type:"range",max:"100",min:"0",step:"1",disabled:!t.bookAvailable},domProps:{value:t.progress},on:{change:t.onProgressChange,input:t.onProgressInput,__r:function(e){t.progress=e.target.value}}})]),n("div",{staticClass:"text-wrapper"},[n("span",{domProps:{textContent:t._s(t.bookAvailable?t.progress+"%":"加载中...")}})])]):t._e()])])},_=[],k=(n("c5f6"),function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("transition",{attrs:{name:"slide-up"}},[t._t("default")],2)}),T=[],x={name:"SlideUp"},A=x,y=(n("6a25"),Object(l["a"])(A,k,T,!1,null,"74baf5d5",null));y.options.__file="SlideUp.vue";var z=y.exports,M={name:"MenuBar",data:function(){return{isSettingShow:!1,showTag:null,progress:0}},props:{isTitleAndMenuShow:Boolean,fontSizeList:Array,fontSize:Number,themesList:Array,theme:Number,bookAvailable:Boolean},components:{SlideUp:z},methods:{showSetting:function(t){this.showTag=t,this.showTag>0?this.isSettingShow=!0:(this.isSettingShow=!1,this.$emit("showContent"))},hideSetting:function(){this.isSettingShow=!1},setFontSize:function(t){this.$emit("setFontSize",t)},setTheme:function(t){this.$emit("setTheme",t)},onProgressChange:function(){this.$emit("onProgressChange",this.progress)},onProgressInput:function(){this.$refs.progress.style.backgroundSize="".concat(this.progress,"% 100%")},jumpTo:function(t){this.$emit("jumpTo",t)}}},j=M,P=(n("2461"),Object(l["a"])(j,C,_,!1,null,"5cd0ba6e",null));P.options.__file="MenuBar.vue";var E=P.exports,$=function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",{staticClass:"table-content"},[t.bookAvailable?n("div",{staticClass:"table-content-wrapper"},t._l(t.navigation.toc,function(e,i){return n("div",{key:i,staticClass:"table-content-item",on:{click:function(n){n.stopPropagation(),t.jumpTo(e.href)}}},[n("span",{staticClass:"text",domProps:{textContent:t._s(e.label)}})])})):n("div",{staticClass:"table-undone-wrapper"},[t._m(0)])])},F=[function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",{staticClass:"table-undone-item"},[n("span",{staticClass:"text"},[t._v("加载中...")])])}],O={name:"TableContent",props:{bookAvailable:Boolean,navigation:Object},methods:{jumpTo:function(t){this.$emit("jumpTo",t)}}},L=O,B=(n("2f0f"),Object(l["a"])(L,$,F,!1,null,"59370e2d",null));B.options.__file="TableContent.vue";var N=B.exports,D=function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("transition",{attrs:{name:"slide-down"}},[t._t("default")],2)},U=[],I={name:"SlideDown"},R=I,J=(n("fa60"),Object(l["a"])(R,D,U,!1,null,"8a2f29ea",null));J.options.__file="SlideDown.vue";var V=J.exports,W=function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("transition",{attrs:{name:"slide-right"}},[t._t("default")],2)},q=[],H={name:"SlideRight"},G=H,K=(n("91c3"),Object(l["a"])(G,W,q,!1,null,"1d1518d2",null));K.options.__file="SlideRight.vue";var Q=K.exports,X=function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("transition",{attrs:{name:"fade"}},[t._t("default")],2)},Y=[],Z={name:"Fade"},tt=Z,et=(n("bb8d"),Object(l["a"])(tt,X,Y,!1,null,"de3fb294",null));et.options.__file="Fade.vue";var nt=et.exports,it="/Vue-Ebook/epub/2018_Book_AgileProcessesInSoftwareEngine.epub",st={name:"Ebook",components:{TitleBar:S,MenuBar:E,TableContent:N,SlideDown:V,SlideUp:z,SlideRight:Q,Fade:nt},data:function(){return{isTitleAndMenuShow:!1,fontSizeList:[{fontSize:12},{fontSize:14},{fontSize:16},{fontSize:18},{fontSize:20},{fontSize:22},{fontSize:24}],defaultFontSize:16,themesList:[{name:"default",style:{body:{color:"#000",background:"#FFF"}}},{name:"eye",style:{body:{color:"#000",background:"#CEEABA"}}},{name:"night",style:{body:{color:"#FFF",background:"#000"}}},{name:"gold",style:{body:{color:"#000",background:"rgb(241, 236, 226)"}}}],defaultTheme:0,bookAvailable:!1,navigation:null,isContentShow:!1,isApexMaskShow:!0,isTipShow:!1}},computed:{tipText:function(){return this.bookAvailable?"加载完毕":"加载中"}},methods:{hideApexMask:function(){this.bookAvailable?this.isApexMaskShow=!1:this.isTipShow=!0},jumpTo:function(t){this.rendition.display(t),this.toggleTitleAndMenu(),this.isContentShow=!1},showContent:function(){this.isContentShow=!0},hideAll:function(){this.isContentShow=!1,this.toggleTitleAndMenu()},onProgressChange:function(t){var e=t/100,n=e>0?this.locations.cfiFromPercentage(e):0;this.rendition.display(n)},registerTheme:function(){var t=this;this.themesList.forEach(function(e){t.themes.register(e.name,e.style)})},setTheme:function(t){this.themes.select(this.themesList[t].name),this.defaultTheme=t},toggleTitleAndMenu:function(){this.isTitleAndMenuShow=!this.isTitleAndMenuShow,this.isTitleAndMenuShow||this.$refs.menuBar.hideSetting()},prevPage:function(){this.rendition&&this.rendition.prev()},nextPage:function(){this.rendition&&this.rendition.next()},setFontSize:function(t){this.defaultFontSize=t,this.themes&&this.themes.fontSize(t+"px")},showEpub:function(){var t=this;this.book=new p["a"](it),this.rendition=this.book.renderTo("read",{width:window.innerWidth,height:window.innerHeight}),this.rendition.display(),this.themes=this.rendition.themes,this.setFontSize(this.defaultFontSize),this.registerTheme(),this.setTheme(this.defaultTheme),this.book.ready.then(function(){return t.navigation=t.book.navigation,t.book.locations.generate()}).then(function(){t.locations=t.book.locations,t.bookAvailable=!0})}},mounted:function(){this.showEpub()}},ot=st,at=(n("4c220"),Object(l["a"])(ot,f,h,!1,null,"60c32c99",null));at.options.__file="Ebook.vue";var rt=at.exports;i["a"].use(d["a"]);var lt=new d["a"]({routes:[{path:"/",name:"home",component:rt}]}),ct=n("2f62");i["a"].use(ct["a"]);var ut=new ct["a"].Store({state:{},mutations:{},actions:{}});n("3d0e"),n("3db4");i["a"].config.productionTip=!1,new i["a"]({router:lt,store:ut,render:function(t){return t(u)}}).$mount("#app")},"69db":function(t,e,n){},"6a25":function(t,e,n){"use strict";var i=n("4a43"),s=n.n(i);s.a},"7faf":function(t,e,n){"use strict";var i=n("0af1"),s=n.n(i);s.a},"86b9":function(t,e,n){"use strict";var i=n("f185"),s=n.n(i);s.a},"91c3":function(t,e,n){"use strict";var i=n("a355"),s=n.n(i);s.a},a355:function(t,e,n){},b9bf:function(t,e,n){},bb8d:function(t,e,n){"use strict";var i=n("0262"),s=n.n(i);s.a},f185:function(t,e,n){},fa60:function(t,e,n){"use strict";var i=n("45c6"),s=n.n(i);s.a},feec:function(t,e,n){}});
//# sourceMappingURL=app.510e6878.js.map