webpackJsonp([1],{"0Dll":function(t,e){},"6A3X":function(t,e){},"7zck":function(t,e){},"9BHd":function(t,e){},"9Vkb":function(t,e){},GEWI:function(t,e){},NHnr:function(t,e,n){"use strict";Object.defineProperty(e,"__esModule",{value:!0});var a=n("7+uW"),l=n("3EgV"),i=n.n(l),o=n("Rf8U"),r=n.n(o),s=n("mtWM"),u=n.n(s),d=(n("7zck"),n("6A3X"),n("9JMe")),c=n("vRvF"),v=n.n(c),p=n("NYxO"),m=(n("sax8"),{namespaced:!0,state:{drawer:!0,drawerclipped:!0,fixed:!1,config:{},miniVariant:!1,rightDrawer:!1,loggedin:!1,username:null,userkey:null},getters:{},mutations:{loginUser:function(t,e){var n=e.user,a=e.key;t.username=n,t.userkey=a,t.loggedin=!0},setConfig:function(t,e){t.config=e},logoutUser:function(t){t.username=null,t.userkey=null,t.loggedin=!1},toggleNavDrawerMini:function(t){t.miniVariant=!t.miniVariant},setNavDrawerMini:function(t){t.drawerclipped||(t.miniVariant=!0)},toggleNavDrawerClipped:function(t){t.drawerclipped=!t.drawerclipped},setNavDrawerMaxi:function(t){t.miniVariant=!1},toggleRightDrawer:function(t){t.rightDrawer=!t.rightDrawer},toggleDrawer:function(t){t.drawer=!t.drawer}},actions:{toggleAppMode:function(t){var e=t.commit;e("toggleDrawer"),e("toggleRightDrawer")}}}),g={namespaced:!0,state:{loginDialog:{status:!1},logoutDialog:{status:!1},editDialog:{status:!1,model:null},importDialog:{status:!1}},mutations:{openDialog:function(t,e){t[e].status=!0},closeDialog:function(t,e){t[e].status=!1},openEditDialog:function(t,e){t.editDialog.model=e,t.editDialog.status=!0},switchDialog:function(t,e){t[e].status=!t[e]},setDialog:function(t,e){var n=e.name,a=e.obj;this._vm.$info("store dialogs setDialog",n,a),t[n]=a}},getters:{}},f={namespaced:!0,state:{entries:[],valid:[],required:["entryType","title","year","authors","editors"]},mutations:{setEntry:function(t,e){var n=e.no,a=e.obj;t.entries[n]=a},changeEntry:function(t,e){for(var n=e.idx,a=e.obj,l=0;l<t.entries.length;l++)n===t.entries[l].idx&&(t.entries[l]=a)},deleteEntry:function(t,e){for(var n=e.idx,a=null,l=0;l<t.entries.length;l++)n===t.entries[l].idx&&(a=l);null!==a&&t.entries.splice(a,1)}},getters:{getEntry:function(t){return function(e){return t.entries[e]}},isValid:function(t){return function(e){for(var n=null,a=0;a<t.entries.length;a++)e===t.entries[a].idx&&(n=a);for(var l=[],i=0;i<t.required.length;i++)console.log(n,l),t.entries[n][t.required[i]]||l.push(t.required[i]);return t.entries[n].tags.length<1&&l.push("tags"),l}}}},h=n("mvHQ"),b=n.n(h),_=n("fZjL"),D=n.n(_),y=n("//Fk"),x=n.n(y),k=n("woOf"),E=n.n(k),w={WKS:{BASEURL:"https://wksgoose.eos.arz.oeaw.ac.at/api/v1/",ENDPOINTS:{BASE:"/"},TIMEOUT:15e3,PARAMS:{_format:"json"},HEADERS:{}},ADLIB:{BASEURL:"http://kgunivie.w07adlibdb1.arz.oeaw.ac.at",ENDPOINTS:{BASE:"/wwwopac.ashx"},TIMEOUT:15e3,PARAMS:{output:"json",action:"search",limit:"1000"},HEADERS:{}},VIAF:{BASEURL:"https://www.viaf.org/viaf/",ENDPOINTS:{BASE:"",SEARCH:"search"},TIMEOUT:5e3,PARAMS:{httpAccept:"application/json"},HEADERS:{}},VOCABS:{BASEURL:"https://vocabs.acdh.oeaw.ac.at/rest/v1/",ENDPOINTS:{ARCHE_CATEGORY:"arche_category/search/",ARCHE_LIFECYCLE_STATUS:"arche_lifecycle_status/search/"},TIMEOUT:5e3,PARAMS:{},HEADERS:{}}},S={collect_collect:{"edit.date":"editdate","edit.time":"edittime","edit.name":"editname",title:"name_0",description:"description_0","current_owner.lref":"collector_people"}},A={};A=function(t){var e={};t&&E()(w,t);for(var n=D()(w),a=n.length-1;a+1;){var l=D()(w[n[a]].ENDPOINTS),i=l.length-1;for(e[n[a]]={};i+1;)e[n[a]][l[i]]=u.a.create({baseURL:w[n[a]].BASEURL+w[n[a]].ENDPOINTS[l[i]],timeout:w[n[a]].TIMEOUT,params:w[n[a]].PARAMS,headers:w[n[a]].HEADERS}),i-=1;a-=1}return e}();var O={data:function(){return{APIS:A}},methods:{getAdlibRecordByID:function(t,e){var n=this;return this.$info("Helpers","getAdlibRecordByID",t,e),t&&e?A.ADLIB.BASE.get("",{params:{database:t,search:"priref="+e}}).then(function(t){return n.$log("response",t.data),x.a.resolve(t.data)},function(t){return n.$log("errortree, request failed",t),x.a.reject(t)}):x.a.reject("no ID was given")},getAdlibRecordsByQuery:function(t,e){var n=this;return this.$info("Helpers","getAdlibRecordByQuery",t,e),t&&e?A.ADLIB.BASE.get("",{params:{database:t,search:e}}).then(function(t){return n.$log("response",t.data),x.a.resolve(t.data)},function(t){return n.$log("errortree, request failed",t),x.a.reject(t)}):x.a.reject("no ID was given")},getViafByID:function(t){var e=this;return this.$info("Helpers","getViafByID(id)",t),t?A.VIAF.BASE.get(t+"/").then(function(t){return e.$log("response",t.data),x.a.resolve(t.data)},function(t){return e.$log("errortree, request failed",t),x.a.reject(t)}):(this.$log("errortree, no id"),x.a.reject("no ID was given"))},getVocabsPromise:function(t,e){var n=e.toUpperCase();return this.$info("Helpers","getVocabsPromise(id, type)",t,n),A.VOCABS[n].get("",{params:{query:t+"*"}})},getVocabsByID:function(t,e){var n=this,a=e.toUpperCase();return this.$info("Helpers","getVocabsByID(id, type)",t,a),t&&a&&A.VOCABS[a]?A.VOCABS[a].get("",{params:{query:t+"*"}}).then(function(t){return n.$log("response",t),x.a.resolve(t.data)},function(t){return n.$log("errortree, request failed",t),x.a.reject(t)}):x.a.reject("failed to recieve vocabs")},splitToGetMultipleCalls:function(t,e){if(this.$info("Helpers","splitToGetMultipleCalls(id, type)",t,e),-1===e.indexOf("Or"))return this.getMultipleApiCallsByTypeAndID(t,e);for(var n=e.split("Or"),a=[],l=0;l<n.length;l+=1)a.push(this.getMultipleApiCallsByTypeAndID(t,n[l]).catch(this.useNull));return x.a.all(a).then(function(t){for(var e=[],n=0;n<t.length;n+=1)if(null!==t[n])for(var a=t[n],l=0;l<a.length;l+=1)e.push(a[l]);return x.a.resolve(e)}).catch(function(t){x.a.reject("Could not receive data",t)})},typeicon:function(t){if(t)switch(t.toUpperCase()){case"X":return"highlight_off";case"check":return"check_circle";case"KEYBOARD":return"keyboard";case"https://vocabs.acdh.oeaw.ac.at/schema#Resource":return"developer_board";case"PERSONS":case"persons":case"https://vocabs.acdh.oeaw.ac.at/schema#Persons":return"person";case"PLACES":case"https://vocabs.acdh.oeaw.ac.at/schema#Place":return"place";case"ORGANISATIONS":case"https://vocabs.acdh.oeaw.ac.at/schema#Organisation":return"device_hub";case"ARCHE_CATEGORY":return"folder_open";case"ARCHE_LIFECYCLE_STATUS":return"donut_large";default:return"folder"}return"folder"},stringToBlob:function(t){return new Blob([t],{type:"text/ttl;"})},dateToString:function(t){var e=t.getFullYear()-2e3,n=void 0;n=t.getMonth()<10?"0".toString()+(t.getMonth()+1):t.getMonth()+1;return(t.getDate()<10?"0".toString()+t.getDate():t.getDate())+"/"+n+"/"+e+" "+t.getHours()+":"+t.getMinutes()+":"+t.getSeconds()},mapRecord:function(t,e,n){var a={},l=S[t+"_"+e],i=D()(l);console.log(l,i,n);for(var o=0;o<i.length;o++)n[i[o]]&&1===l[i[o]].split("_").length?a[l[i[o]]]=n[i[o]]:n[i[o]]&&"0"===l[i[o]].split("_")[1]?a[l[i[o]].split("_")[0]]=n[i[o]][0]:n[i[o]]&&l[i[o]].split("_")[1]&&"0"!==l[i[o]].split("_")[1]&&(a[l[i[o]].split("_")[0]]=l[i[o]].split("_")[1]+"_"+n[i[o]]);return a}},created:function(){this.$info("Helpers","created")}};var C=[function(t){var e=void 0;try{e=window.localStorage}catch(e){t.commit("n3/updateStorageStatus",!1)}e&&t.subscribe(function(n,a){if(["n3/stopProcessing","JSONschema/setEntry","JSONschema/setSchema"].indexOf(n.type)>-1){var l=function(t){for(var e={},n=D()(t),a=0;a<n.length;a+=1){e[n[a]]={};for(var l=t[n[a]],i=l.p||[],o=0;o<i.length;o+=1)e[n[a]][i[o]]=l[i[o]]}return e}(a),i=JSON.parse(window.localStorage.getItem(R)||"{}"),o=Date.now();i[$]={pState:l,date:o,dateString:O.methods.dateToString(new Date(o))};try{e.setItem(R,b()(i)),t.commit("n3/updateStorageStatus",!0)}catch(e){(function(t){var e=!1;if(t)if(t.code)switch(t.code){case 22:e=!0;break;case 1014:"NS_ERROR_DOM_QUOTA_REACHED"===t.name&&(e=!0)}else-2147024882===t.number&&(e=!0);return e})(e)&&t.commit("n3/updateStorageStatus",!1),t.commit("n3/updateStorageStatus",!1)}}})}];a.default.use(p.a),a.default.use(r.a,u.a);var T=new p.a.Store({modules:{app:m,dialogs:g,entries:f},plugins:C,strict:!1}),R="MetaDataEditor",$="SESSION_"+Date.now().valueOf().toString(36),j=n("/ocq"),I=n("Dd8w"),B=n.n(I),N={data:function(){return{}},name:"FundamentNav",methods:B()({},Object(p.d)("JSONschema",["constructJSONschema"]),Object(p.d)("dialogs",["openDialog"]),Object(p.b)("app",["toggleAppMode"]),Object(p.d)("app",["setConfig","toggleNavDrawerMini","setNavDrawerMini","setNavDrawerMaxi","toggleNavDrawerClipped","toggleRightDrawer","toggleDrawer","toggleNavbar"])),computed:B()({},Object(p.e)("app",["username"])),created:function(){}},M={render:function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",[n("transition",{attrs:{duration:200,name:"slideLeft",mode:"out-in"}},[t.$store.state.app.drawer?n("v-navigation-drawer",{class:t.$store.state.app.config.color,attrs:{"mini-variant":t.$store.state.app.miniVariant,"enable-resize-watcher":"",dark:"",app:""}},[n("v-container",{attrs:{"fill-height":""},on:{mouseover:function(e){e.stopPropagation(),t.setNavDrawerMaxi()},mouseleave:function(e){e.stopPropagation(),t.setNavDrawerMini()}}},[n("v-layout",{attrs:{column:"","justify-space-between":""}},[n("v-list",[n("v-list-tile",[t.username?n("div",[t._v(t._s(t.username))]):t._e()])],1),t._v(" "),n("v-list",[t._l(t.$store.state.app.config.menu,function(e,a){return n("v-list-tile",{key:a,attrs:{value:"true",to:e.startpage}},[n("v-btn",{attrs:{icon:""}},[n("v-icon",{domProps:{innerHTML:t._s(e.icon)}})],1),t._v(" "),n("v-list-tile-content",[n("v-list-tile-title",{staticClass:"toolbarcaption"},[t._v(t._s(e.caption))])],1)],1)}),t._v(" "),t.$store.state.app.loggedin?t._e():n("v-list-tile",{attrs:{value:"true"},on:{click:function(e){e.stopPropagation(),t.openDialog("loginDialog")}}},[n("v-btn",{attrs:{icon:""}},[n("v-icon",[t._v("input")])],1),t._v(" "),n("v-list-tile-content",[n("v-list-tile-title",{staticClass:"toolbarcaption"},[t._v("LOGIN")])],1)],1),t._v(" "),t.$store.state.app.loggedin?n("v-list-tile",{attrs:{value:"true"},on:{click:function(e){e.stopPropagation(),t.openDialog("logoutDialog")}}},[n("v-btn",{attrs:{icon:""}},[n("v-icon",[t._v("power_settings_new")])],1),t._v(" "),n("v-list-tile-content",[n("v-list-tile-title",{staticClass:"toolbarcaption"},[t._v("LOGOUT")])],1)],1):t._e()],2),t._v(" "),n("v-list",[n("v-list-tile",[n("router-link",{attrs:{to:{name:"start"}}},[n("div",{staticClass:"logo"},[n("img",{attrs:{src:"",alt:""}})]),t._v("Database\n              ")])],1)],1)],1)],1)],1):t._e()],1),t._v(" "),n("transition",{attrs:{duration:200,name:"slideRight",mode:"out-in"}},[t.$store.state.app.drawer?t._e():n("v-toolbar",{staticClass:"border-bottom",attrs:{app:"",height:"90"}},[n("v-container",{attrs:{row:""}},[n("v-layout",{staticClass:"compensation",attrs:{row:""}},[n("v-flex",{attrs:{xs3:""}},[n("v-layout",{attrs:{column:"","justify-center":"","fill-height":""}},[n("v-toolbar-title",[n("router-link",{attrs:{to:{name:"start"}}},[n("div",{staticClass:"logo"},[n("h5",{staticStyle:{"font-weight":"200",padding:"0px",margin:"0px","letter-spacing":"3px!important","line-height":"25px"}},[t._v("VC")]),t._v(" "),n("h5",{staticStyle:{"font-weight":"800",padding:"0px",margin:"0px","letter-spacing":"2px!important","line-height":"25px"}},[t._v("HC")])]),t._v("Database\n                ")])],1)],1)],1),t._v(" "),n("v-flex",[n("v-tabs",{attrs:{"icons-and-text":"",color:"grey lighten-4"}},[n("v-tabs-slider",{attrs:{color:"teal lighten-3"}}),t._v(" "),t._l(t.$store.state.app.config.menu,function(e,a){return n("v-tab",{key:a,attrs:{to:e.startpage}},[t._v("\n                "+t._s(e.caption)+"\n                "),n("v-icon",[t._v(t._s(e.icon))])],1)})],2)],1),t._v(" "),n("v-spacer")],1)],1),t._v(" "),n("v-btn",{attrs:{icon:""},on:{click:function(e){e.stopPropagation(),t.rightDrawer=!t.rightDrawer}}},[n("v-icon",[t._v("menu")])],1)],1)],1),t._v(" "),n("v-navigation-drawer",{attrs:{right:!0,"enable-resize-watcher":"",app:""},model:{value:t.$store.state.app.rightDrawer,callback:function(e){t.$set(t.$store.state.app,"rightDrawer",e)},expression:"$store.state.app.rightDrawer"}},[n("router-view",{attrs:{name:"rightdrawertop"}}),t._v(" "),n("router-view",{attrs:{name:"rightdrawerbottom"}})],1)],1)},staticRenderFns:[]};var P=n("VU/8")(N,M,!1,function(t){n("0Dll")},"data-v-2bb201c9",null).exports,F={render:function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",{staticClass:"main-footer mt-5"},[n("v-container",{attrs:{"grid-list-md":""}},[n("v-layout",{attrs:{row:"",wrap:"","justify-space-between":""}},[n("v-flex",{staticClass:"footer-sep mt-3",attrs:{xs12:""}},[n("v-icon",[t._v("message")]),t._v("CONTACT\n      ")],1),t._v(" "),n("v-flex",{staticClass:"mr-4",attrs:{xs12:"",sm2:"",md2:""}},[n("a",{attrs:{href:"https://www.oeaw.ac.at/acdh/acdh-home/",target:"_blank",rel:"noopener","aria-label":"ACDH"}},[n("img",{attrs:{src:"/DESIR_logo_01.png",alt:"DESIR",title:"DESIR Logo"}})])]),t._v(" "),n("v-flex",{attrs:{xs12:"",sm3:""}},[n("p",[t._v("\n          DARIAH Code Sprint\n          "),n("br")]),t._v(" "),n("p",[t._v("31 Jul-2 Aug 2018 Berlin (Germany)")])]),t._v(" "),n("v-spacer"),t._v(" "),n("v-flex",{attrs:{xs12:"",sm3:""}})],1)],1)],1)},staticRenderFns:[]};var L=n("VU/8")({data:function(){return{}},name:"FundamentFooter"},F,!1,function(t){n("ng0Y")},null,null).exports,V={mixins:[O],data:function(){return{username:"",userkey:""}},computed:B()({},Object(p.e)("dialogs",["loginDialog"])),methods:B()({},Object(p.d)("app",["loginUser"]),Object(p.d)("dialogs",["closeDialog"]),{discard:function(){this.closeDialog("loginDialog")},login:function(){this.loginUser({user:this.username,key:this.userkey}),this.closeDialog("loginDialog")}})},U={render:function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("v-dialog",{attrs:{id:"askForStore","max-width":"500px"},model:{value:t.loginDialog.status,callback:function(e){t.$set(t.loginDialog,"status",e)},expression:"loginDialog.status"}},[n("v-card",[n("v-card-title",[t._v("\n      BibSonomy Login\n    ")]),t._v(" "),n("v-card-text",[n("v-text-field",{attrs:{type:"text",label:"Username"},model:{value:t.username,callback:function(e){t.username=e},expression:"username"}}),t._v(" "),n("v-text-field",{attrs:{type:"text",label:"API Key"},model:{value:t.userkey,callback:function(e){t.userkey=e},expression:"userkey"}})],1),t._v(" "),n("v-card-actions",[n("v-btn",{attrs:{large:"",color:"primary"},on:{click:t.login}},[t._v("\n      LOGIN\n    ")]),t._v(" "),n("v-btn",{attrs:{large:"",color:"secondary"},on:{click:t.discard}},[t._v("\n      CANCEL\n    ")])],1)],1)],1)},staticRenderFns:[]};var H=n("VU/8")(V,U,!1,function(t){n("GEWI")},null,null).exports,z={data:function(){return{}},mixins:[O],computed:B()({},Object(p.e)("dialogs",["logoutDialog"])),methods:B()({},Object(p.d)("app",["logoutUser"]),Object(p.d)("dialogs",["closeDialog"]),{discard:function(){this.closeDialog("logoutDialog")},logout:function(){this.logoutUser(),this.closeDialog("logoutDialog")}})},q={render:function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("v-dialog",{attrs:{id:"askForStore","max-width":"500px"},model:{value:t.logoutDialog.status,callback:function(e){t.$set(t.logoutDialog,"status",e)},expression:"logoutDialog.status"}},[n("v-card",[n("v-card-title",[t._v("\n      VCHC DATABASE LOGIN\n    ")]),t._v(" "),n("v-card-text",[t._v("\n      Do you really want to logout?\n    ")]),t._v(" "),n("v-card-actions",[n("v-btn",{attrs:{large:"",color:"primary"},on:{click:t.logout}},[t._v("\n      LOGOUT\n    ")]),t._v(" "),n("v-btn",{attrs:{large:"",color:"secondary"},on:{click:t.discard}},[t._v("\n      CANCEL\n    ")])],1)],1)],1)},staticRenderFns:[]};var J=n("VU/8")(z,q,!1,function(t){n("iv/2")},null,null).exports,G=n("bOdI"),W=n.n(G),Y=n("KvPw"),X=n.n(Y),Q=(n("9BHd"),{render:function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("transition",{attrs:{appear:"",duration:250,name:"fadeLeft"}},[n("v-card",{staticClass:"border-top mb-3"},[t.src?n("v-card-media",{attrs:{src:t.src,height:"200px"}}):t._e(),t._v(" "),n("v-card-title",{attrs:{"primary-title":""}},[n("div",[n("h3",{staticClass:"headline mb-0",domProps:{textContent:t._s(t.caption)}}),t._v(" "),t._t("default")],2)]),t._v(" "),t.link?n("v-card-actions",[n("v-btn",{staticClass:"primary",attrs:{flat:"",to:t.link}},[t._v("More")])],1):t._e()],1)],1)},staticRenderFns:[]});var K,Z=n("VU/8")({data:function(){return{}},props:["src","caption","link"],name:"FundamentJumbo"},Q,!1,function(t){n("S39o")},"data-v-b701fa9c",null).exports,tt=(K={mixins:[O],components:{vueDropzone:X.a,fundamentcard:Z},data:function(){return{text:null,dropzoneOptions:{url:"/extract",thumbnailWidth:150,maxFilesize:50,headers:{}},testdata:[{entryType:"article",address:null,booktitle:"• Archives Portal Europe network of excellence, D6.1 First Analysis report: Applying Web 2.0 solutions in archival applications",chapter:null,doi:null,edition:null,institution:null,journal:null,number:null,pages:null,publisher:null,series:null,title:null,volume:null,day:null,month:null,year:"January 9th 2018",authors:"",editors:"",tags:null},{entryType:"misc",address:null,booktitle:null,chapter:null,doi:null,edition:null,institution:null,journal:null,number:null,pages:null,publisher:null,series:null,title:"• Archives Portal Europe network of excellence D6.6 Second analysis report: Applying Web 2.0 solutions in archival applications",volume:null,day:null,month:null,year:"2014. January 9th 2018",authors:"",editors:"",tags:null},{entryType:"article",address:null,booktitle:null,chapter:null,doi:"doi:10.1080/23257962.2013.830066",edition:null,institution:null,journal:"Archives and Records",number:"2",pages:"235--282",publisher:null,series:null,title:"Developing Descriptive Standards: A Renewed Call to Action",volume:"34",day:null,month:null,year:"2013",authors:"• Bunn",editors:"",tags:null},{entryType:"misc",address:null,booktitle:null,chapter:null,doi:null,edition:null,institution:null,journal:null,number:null,pages:null,publisher:null,series:null,title:"Proposals for evolution of EAD",volume:null,day:null,month:null,year:"January 9th 2018",authors:"• Ead and Eac-Cpf Working Groups and Afnor null",editors:"",tags:null},{entryType:"article",address:null,booktitle:"Conseil international des Archives",chapter:null,doi:null,edition:null,institution:"• Experts group on archival description (ICA",journal:null,number:null,pages:null,publisher:null,series:null,title:"Records in Contexts, a Conceptual Model for Archival Description. Consultation Draft v0.1",volume:null,day:null,month:null,year:"September 2016. January 9th 2018",authors:"",editors:"",tags:null},{entryType:"article",address:null,booktitle:null,chapter:null,doi:"doi:10.1007/s10502-014-9225-1",edition:null,institution:null,journal:"Archival Science",number:"3",pages:"295--313",publisher:null,series:null,title:"An XML Schema for Enhancing the Semantic Interoperability of Archival Description",volume:"15",day:null,month:null,year:"September 1, 2015",authors:"• Gartner and Richard null",editors:"",tags:null},{entryType:"article",address:null,booktitle:null,chapter:null,doi:null,edition:null,institution:"• Library of Congress",journal:"Development of the Encoded Archival Description DTD",number:null,pages:null,publisher:null,series:null,title:null,volume:null,day:null,month:null,year:"2013. January 9th 2018",authors:"",editors:"",tags:null},{entryType:"misc",address:"Amsterdam, The Netherlands",booktitle:null,chapter:null,doi:null,edition:null,institution:null,journal:null,number:null,pages:null,publisher:null,series:null,title:'Internationalization and Localization of XML: Introducing "ITS',volume:null,day:null,month:null,year:"2006. May 2006. January 9th 2018",authors:"• Lieske and null Christian and Sebastian Rahtz and Sasaki Felix",editors:"",tags:null},{entryType:"misc",address:"Dublin, Ireland",booktitle:null,chapter:null,doi:null,edition:null,institution:null,journal:null,number:null,pages:null,publisher:null,series:null,title:"Building infrastructures for archives in a digital world",volume:null,day:null,month:null,year:"Jun 2013. 2014",authors:"• Medves and null Maud and Laurent Romary",editors:"",tags:null},{entryType:"article",address:"Evanston, IL",booktitle:"ODD: One Document Does it All. Workshop at the Text Encoding Initiative Conference and Members Meeting",chapter:null,doi:null,edition:null,institution:null,journal:null,number:null,pages:null,publisher:null,series:null,title:"Advanced Topics in ODD",volume:null,day:null,month:null,year:"2014. Oct 22-24",authors:"• Rahtz and Sebastian null and Lou Burnard",editors:"",tags:null},{entryType:"misc",address:"Bryant, Mike",booktitle:null,chapter:null,doi:null,edition:null,institution:null,journal:null,number:null,pages:null,publisher:null,series:null,title:null,volume:null,day:null,month:null,year:null,authors:"• Riondet and null Charles and null Romary and Van Laurent and null Nispen and null Annelies and Kepa Rodriguez and null Joseba",editors:"",tags:null},{entryType:"misc",address:null,booktitle:null,chapter:null,doi:null,edition:null,institution:null,journal:null,number:null,pages:null,publisher:null,series:null,title:"Ongoing maintenance and customization of archival standards using ODD (EAC-CPF revision proposal). EAC-CPF revision proposal",volume:null,day:null,month:null,year:"2017",authors:"• Romary and null Laurent and Charles Riondet",editors:"",tags:null},{entryType:"misc",address:null,booktitle:null,chapter:null,doi:null,edition:null,institution:null,journal:null,number:null,pages:null,publisher:null,series:null,title:null,volume:null,day:null,month:null,year:null,authors:"• Romary and null Laurent and null Banski and null Piotr and Jack Bowers and null Emiliano and null Ďurčo and null Matej",editors:"",tags:null},{entryType:"article",address:null,booktitle:null,chapter:null,doi:"doi:10.1080/13614570109516972",edition:null,institution:null,journal:"New Review of Information Networking",number:"1",pages:"117--148",publisher:null,series:null,title:"Rethinking Balancing Flexibility and Interoperability",volume:"7",day:null,month:null,year:"2001",authors:"• Shaw and Elizabeth null",editors:"",tags:null},{entryType:"article",address:null,booktitle:null,chapter:null,doi:null,edition:null,institution:null,journal:"Literate Programming in XML",number:null,pages:null,publisher:null,series:null,title:null,volume:null,day:null,month:null,year:"2002. January 9th 2018",authors:"• Walsh and Norman null",editors:"",tags:null}]}},computed:{},methods:B()({},Object(p.d)("entries",["setEntry"]),{results:function(t,e){for(var n=0;n<e.length;n++)e[n].idx=n,e[n].tags=[],this.setEntry({no:n,obj:e[n]});console.log(t,e),this.$router.push({name:"entries",params:{lang:"en"}})},loadTestdata:function(){for(var t=0;t<this.testdata.length;t++)this.testdata[t].idx=t,this.testdata[t].tags=[],this.setEntry({no:t,obj:this.testdata[t]});this.$router.push({name:"entries",params:{lang:"en"}})},submitText:function(t){t.preventDefault();var e=this,n=new FormData;n.append("text",this.text),this.axios.post(this.dropzoneOptions.url,n).then(function(t){e.results(e.text,t.data)})}})},W()(K,"computed",{}),W()(K,"created",function(){}),K),et={render:function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",{},[n("v-container",{attrs:{"grid-list-md":""}},[n("fundamentcard",{attrs:{caption:"Load test data"}},[n("v-btn",{on:{click:t.loadTestdata}},[t._v("testdata")])],1),t._v(" "),n("fundamentcard",{attrs:{caption:"Load file from disk (PDF/TXT)"}},[n("vue-dropzone",{ref:"myVueDropzone",attrs:{id:"file",options:t.dropzoneOptions},on:{"vdropzone-success":t.results}})],1),t._v(" "),n("fundamentcard",{attrs:{caption:"Paste text"}},[n("v-textarea",{attrs:{name:"textinput",label:"Your text","prepend-icon":"comment",color:"deep-purple","auto-grow":""},model:{value:t.text,callback:function(e){t.text=e},expression:"text"}}),t._v(" "),n("v-btn",{on:{click:t.submitText}},[t._v("Submit Text")])],1)],1)],1)},staticRenderFns:[]};var nt=n("VU/8")(tt,et,!1,function(t){n("grF2")},"data-v-488a36b9",null).exports,at={mixins:[O],data:function(){return{dropzoneOptions:{url:"/extract",thumbnailWidth:150,maxFilesize:10.5,headers:{"My-Awesome-Header":"header value"}},model:{}}},components:{fundamentcard:Z,importpdf:nt},computed:B()({},Object(p.e)("dialogs",["importDialog"])),methods:B()({},Object(p.d)("dialogs",["closeDialog"]),{discard:function(){this.closeDialog("importDialog")},submit:function(){this.closeDialog("importDialog")},onFileChange:function(t){this.$info("Load","onFileChange(e)",t);var e=t.target.files||t.dataTransfer.files;e.length&&this.loadTtl(e[0])}})},lt={render:function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("v-dialog",{attrs:{id:"askForStore",fullscreen:"","hide-overlay":"",transition:"dialog-bottom-transition",scrollable:""},model:{value:t.importDialog.status,callback:function(e){t.$set(t.importDialog,"status",e)},expression:"importDialog.status"}},[n("v-card",[n("v-toolbar",{attrs:{card:"",dark:"",color:"primary"}},[n("v-btn",{attrs:{icon:"",dark:""},nativeOn:{click:function(e){return t.discard(e)}}},[n("v-icon",[t._v("close")])],1),t._v(" "),n("v-toolbar-title",[t._v("Upload PDF for Extraction")]),t._v(" "),n("v-spacer"),t._v(" "),n("v-toolbar-items",[n("v-btn",{attrs:{dark:"",flat:""},nativeOn:{click:function(e){return t.submit(e)}}},[t._v("Save")])],1),t._v(" "),n("v-menu",{attrs:{bottom:"",right:"","offset-y":""}})],1),t._v(" "),n("v-card-text",[n("importpdf")],1),t._v(" "),n("v-card-actions")],1)],1)},staticRenderFns:[]};var it=n("VU/8")(at,lt,!1,function(t){n("rucs")},null,null).exports,ot={mixins:[O],data:function(){return{}},components:{fundamentcard:Z},computed:B()({},Object(p.c)("entries",["getEntry"]),Object(p.e)("dialogs",["editDialog"])),methods:B()({},Object(p.d)("dialogs",["closeDialog"]),Object(p.d)("entries",["changeEntry"]),{close:function(){this.closeDialog("editDialog")}}),watch:{},created:function(){}},rt={render:function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("v-dialog",{attrs:{id:"askForStore",fullscreen:"","hide-overlay":"",transition:"dialog-bottom-transition",scrollable:""},model:{value:t.editDialog.status,callback:function(e){t.$set(t.editDialog,"status",e)},expression:"editDialog.status"}},[n("v-card",[n("v-toolbar",{attrs:{card:"",dark:"",color:"primary"}},[n("v-btn",{attrs:{icon:"",dark:""},nativeOn:{click:function(e){return t.close(e)}}},[n("v-icon",[t._v("close")])],1),t._v(" "),n("v-toolbar-title",[t._v("Edit imported Entry No "+t._s(t.editDialog.model.idx))]),t._v(" "),n("v-spacer"),t._v(" "),n("v-menu",{attrs:{bottom:"",right:"","offset-y":""}})],1),t._v(" "),t.editDialog.model.idx?n("v-card-text",[n("v-form",{ref:"form",attrs:{"lazy-validation":""}},[n("v-text-field",{attrs:{label:"Entry Type",required:"",rules:[function(t){return!!t||"Item is required"}]},model:{value:t.editDialog.model.entryType,callback:function(e){t.$set(t.editDialog.model,"entryType",e)},expression:"editDialog.model.entryType"}}),t._v(" "),n("v-text-field",{attrs:{label:"Adress"},model:{value:t.editDialog.model.address,callback:function(e){t.$set(t.editDialog.model,"address",e)},expression:"editDialog.model.address"}}),t._v(" "),n("v-text-field",{attrs:{label:"Booktitle"},model:{value:t.editDialog.model.booktitle,callback:function(e){t.$set(t.editDialog.model,"booktitle",e)},expression:"editDialog.model.booktitle"}}),t._v(" "),n("v-text-field",{attrs:{label:"Chapter"},model:{value:t.editDialog.model.chapter,callback:function(e){t.$set(t.editDialog.model,"chapter",e)},expression:"editDialog.model.chapter"}}),t._v(" "),n("v-text-field",{attrs:{label:"DOI"},model:{value:t.editDialog.model.doi,callback:function(e){t.$set(t.editDialog.model,"doi",e)},expression:"editDialog.model.doi"}}),t._v(" "),n("v-text-field",{attrs:{label:"Edition"},model:{value:t.editDialog.model.edition,callback:function(e){t.$set(t.editDialog.model,"edition",e)},expression:"editDialog.model.edition"}}),t._v(" "),n("v-text-field",{attrs:{label:"Institution"},model:{value:t.editDialog.model.institution,callback:function(e){t.$set(t.editDialog.model,"institution",e)},expression:"editDialog.model.institution"}}),t._v(" "),n("v-text-field",{attrs:{label:"Journal"},model:{value:t.editDialog.model.journal,callback:function(e){t.$set(t.editDialog.model,"journal",e)},expression:"editDialog.model.journal"}}),t._v(" "),n("v-text-field",{attrs:{label:"Number"},model:{value:t.editDialog.model.number,callback:function(e){t.$set(t.editDialog.model,"number",e)},expression:"editDialog.model.number"}}),t._v(" "),n("v-text-field",{attrs:{label:"Pages"},model:{value:t.editDialog.model.pages,callback:function(e){t.$set(t.editDialog.model,"pages",e)},expression:"editDialog.model.pages"}}),t._v(" "),n("v-text-field",{attrs:{label:"Publisher"},model:{value:t.editDialog.model.publisher,callback:function(e){t.$set(t.editDialog.model,"publisher",e)},expression:"editDialog.model.publisher"}}),t._v(" "),n("v-text-field",{attrs:{label:"Series"},model:{value:t.editDialog.model.series,callback:function(e){t.$set(t.editDialog.model,"series",e)},expression:"editDialog.model.series"}}),t._v(" "),n("v-text-field",{attrs:{label:"Title",required:"",rules:[function(t){return!!t||"Item is required"}]},model:{value:t.editDialog.model.title,callback:function(e){t.$set(t.editDialog.model,"title",e)},expression:"editDialog.model.title"}}),t._v(" "),n("v-text-field",{attrs:{label:"Volume"},model:{value:t.editDialog.model.volume,callback:function(e){t.$set(t.editDialog.model,"volume",e)},expression:"editDialog.model.volume"}}),t._v(" "),n("v-text-field",{attrs:{label:"Day"},model:{value:t.editDialog.model.day,callback:function(e){t.$set(t.editDialog.model,"day",e)},expression:"editDialog.model.day"}}),t._v(" "),n("v-text-field",{attrs:{label:"month"},model:{value:t.editDialog.model.month,callback:function(e){t.$set(t.editDialog.model,"month",e)},expression:"editDialog.model.month"}}),t._v(" "),n("v-text-field",{attrs:{label:"Year",required:"",rules:[function(t){return!!t||"Item is required"}]},model:{value:t.editDialog.model.year,callback:function(e){t.$set(t.editDialog.model,"year",e)},expression:"editDialog.model.year"}}),t._v(" "),n("v-text-field",{attrs:{label:"Authors",required:"",rules:[function(t){return!!t||"Item is required"}]},model:{value:t.editDialog.model.authors,callback:function(e){t.$set(t.editDialog.model,"authors",e)},expression:"editDialog.model.authors"}}),t._v(" "),n("v-text-field",{attrs:{label:"Editors",required:"",rules:[function(t){return!!t||"Item is required"}]},model:{value:t.editDialog.model.editors,callback:function(e){t.$set(t.editDialog.model,"editors",e)},expression:"editDialog.model.editors"}}),t._v(" "),n("v-combobox",{attrs:{items:t.editDialog.model.tags,chips:"",label:"Tags",multiple:"",rules:[function(t){return!!t||"Item is required"}]},model:{value:t.editDialog.model.tags,callback:function(e){t.$set(t.editDialog.model,"tags",e)},expression:"editDialog.model.tags"}})],1)],1):t._e(),t._v(" "),n("v-card-actions")],1)],1)},staticRenderFns:[]};var st={components:{logindialog:H,logoutdialog:J,importdialog:it,editdialog:n("VU/8")(ot,rt,!1,function(t){n("9Vkb")},null,null).exports}},ut={render:function(){var t=this.$createElement,e=this._self._c||t;return e("div",[e("logindialog"),this._v(" "),e("logoutdialog"),this._v(" "),e("importdialog"),this._v(" "),e("editdialog")],1)},staticRenderFns:[]};var dt={data:function(){return{}},name:"App",components:{fundamentnav:P,fundamentfooter:L,dialogs:n("VU/8")(st,ut,!1,function(t){n("bvMD")},null,null).exports},methods:B()({},Object(p.d)("app",["setConfig"])),created:function(){var t=this;u.a.get("/nav.json").then(function(e){return t.setConfig(e.data)}).catch(function(e){return t.$log(e)})}},ct={render:function(){var t=this.$createElement,e=this._self._c||t;return e("v-app",[e("fundamentnav"),this._v(" "),e("v-content",[e("router-view",{attrs:{name:"Content"}}),this._v(" "),e("fundamentfooter")],1),this._v(" "),e("dialogs")],1)},staticRenderFns:[]},vt=n("VU/8")(dt,ct,!1,null,null,null).exports,pt={render:function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("v-parallax",{staticClass:"mt-4 mb-3 border-top",attrs:{src:t.src,height:"250"}},[n("v-layout",{attrs:{column:"","align-center":"","justify-center":""}},[n("h1",[t._v(t._s(t.caption))]),t._v(" "),n("p",[t._v(t._s(t.subtitle))])])],1)},staticRenderFns:[]};var mt={render:function(){var t=this.$createElement,e=this._self._c||t;return e("v-flex",{attrs:{xs12:""}},[e("div",{staticClass:"text-xs-center pb-2 mb-1 sec"},[e("v-icon",[this._v(this._s(this.icon))]),this._v("\n    "+this._s(this.caption)+"\n  ")],1)])},staticRenderFns:[]};var gt={components:{fundamentjumbo:n("VU/8")({data:function(){return{}},props:["src","caption","subtitle"],name:"FundamentJumbo"},pt,!1,function(t){n("aUQX")},"data-v-43a3b338",null).exports,fundamentcard:Z,fundamentsectiondiv:n("VU/8")({data:function(){return{}},props:["icon","caption"],name:"FundamentSectionDiv"},mt,!1,function(t){n("d7+r")},"data-v-229a18fd",null).exports},name:"start",data:function(){return{}},methods:{importPage:function(){this.$router.push({name:"import",params:{lang:"en"}})}}},ft={render:function(){var t=this.$createElement,e=this._self._c||t;return e("div",{},[e("fundamentjumbo",{attrs:{src:"/intro_bg.jpg",caption:"DESIR Codesprint - GROBID/Bibsonomy/ORCID WebApp",subtitle:""}}),this._v(" "),e("v-container",{attrs:{"grid-list-md":""}},[e("v-layout",{attrs:{"justify-space-around":"",row:"",wrap:""}},[e("v-flex",{attrs:{xs12:"",sm12:""}},[e("fundamentcard",{attrs:{caption:"Bibliography Extractor for BibSonomy"}},[e("p",{staticClass:"card-text"},[this._v("Extraction bibliographic information from files and text and upload to your BibSonomy. Powered by GROBID.")]),this._v(" "),e("p",{staticClass:"card-text"},[e("v-btn",{attrs:{color:"primary"},on:{click:this.importPage}},[this._v("Start extracting now!")])],1)])],1),this._v(" "),e("fundamentsectiondiv",{attrs:{icon:"device_hub",caption:"Bibsonomy"}})],1)],1)],1)},staticRenderFns:[]};var ht=n("VU/8")(gt,ft,!1,function(t){n("c+tA")},"data-v-734fccb4",null).exports,bt={mixins:[O],components:{},data:function(){return{snackbar:!1,snackText:"",timeout:5e3,view:{},data:[],headers:[{text:"booktitle",value:"booktitle"},{text:"entryType",value:"entryType"},{text:"year",value:"year"},{text:"status",value:""},{text:"edit",value:""}]}},methods:B()({},Object(p.d)("entries",["changeEntry","deleteEntry"]),Object(p.d)("dialogs",["openEditDialog"]),{submitAll:function(){for(var t=this,e=[],n=0;n<this.entries.length;n++)e.push(this.entries[n]);if(!e.length)return this.snackbar=!0,void(this.snackText="No entries to submit!");console.log("store items: "+e);var a={headers:{user:this.username,key:this.userkey}};u.a.post("/store",e,a).then(function(e){t.snackbar=!0,t.snackText="Submission successful"}).catch(function(e){t.snackbar=!0,t.snackText=e.message})},itemDelete:function(t){console.log("delete item: "+t),this.deleteEntry({idx:t})}}),computed:B()({},Object(p.e)("entries",["entries"]),Object(p.e)("app",["username","userkey"]),Object(p.c)("entries",["isValid"])),created:function(){console.log(this.$store.state.entries.entries)}},_t={render:function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",{},[n("v-container",{attrs:{"grid-list-md":""}},[n("h3",[t._v("Extracted Entries")]),t._v(" "),n("v-data-table",{staticClass:"elevation-1",attrs:{headers:t.headers,items:t.$store.state.entries.entries},scopedSlots:t._u([{key:"items",fn:function(e){return[n("td",[t._v(t._s(e.item.title))]),t._v(" "),n("td",[t._v(t._s(e.item.entryType))]),t._v(" "),n("td",[t._v(t._s(e.item.year))]),t._v(" "),n("td",[n("v-alert",{attrs:{value:0==t.isValid(e.item.idx).length,type:"success"}},[t._v("Item ready to submit.")]),t._v(" "),n("v-alert",{attrs:{value:t.isValid(e.item.idx).length>0,type:"warning"}},[t._v("Item missing "+t._s(t.isValid(e.item.idx))+".")])],1),t._v(" "),n("td",[n("v-btn",{attrs:{text:"",icon:""},on:{click:function(n){t.openEditDialog(e.item)}}},[n("v-icon",[t._v("edit")])],1)],1),t._v(" "),n("td",[n("v-btn",{attrs:{text:"",icon:"",color:"red"},on:{click:function(n){t.itemDelete(e.item.idx)}}},[n("v-icon",[t._v("delete")])],1)],1)]}}])}),t._v(" "),t.$store.state.entries.entries.length?n("v-btn",{on:{click:t.submitAll}},[t._v("Submit to BibSonomy")]):t._e()],1),t._v(" "),n("v-snackbar",{attrs:{timeout:t.timeout},model:{value:t.snackbar,callback:function(e){t.snackbar=e},expression:"snackbar"}},[t._v("\n    "+t._s(t.snackText)+"\n    "),n("v-btn",{attrs:{color:"red",text:""},on:{click:function(e){t.snackbar=!1}}},[t._v("Close")])],1)],1)},staticRenderFns:[]};var Dt=n("VU/8")(bt,_t,!1,function(t){n("dLRl")},"data-v-0b790794",null).exports;a.default.use(j.a);var yt=new j.a({routes:[{path:"/",name:"root",redirect:function(t){return"en"!==t.params.lang?"/en":t.fullPath}},{path:"/:lang",components:{default:vt},children:[{path:"start",name:"start",components:{Content:ht}},{path:"import",name:"import",components:{Content:nt}},{path:"entries",name:"entries",components:{Content:Dt}},{path:"",redirect:{name:"start"}}]}],scrollBehavior:function(){return{x:0,y:0}}});n("gPEe");a.default.use(v.a,{dev:!1,shortname:!0,levels:["log","warn","debug","error","dir","info"]}),a.default.use(r.a,u.a),a.default.use(i.a,{theme:{primary:"#0059c7",accent:"#2c76be",secondary:"#2c76be",info:"#B2DFDB"}}),Object(d.sync)(T,yt),a.default.config.productionTip=!1,new a.default({store:T,router:yt}).$mount("#app")},S39o:function(t,e){},aUQX:function(t,e){},bvMD:function(t,e){},"c+tA":function(t,e){},"d7+r":function(t,e){},dLRl:function(t,e){},gPEe:function(t,e){},grF2:function(t,e){},"iv/2":function(t,e){},ng0Y:function(t,e){},rucs:function(t,e){}},["NHnr"]);
//# sourceMappingURL=app.325f93c1b8aaa07d9d5c.js.map