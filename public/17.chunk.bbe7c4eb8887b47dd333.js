(window.webpackJsonp=window.webpackJsonp||[]).push([[17],{"+SZM":function(t,e,s){"use strict";var a={components:{logo:s("lrC8").a},methods:{logout:function(){this.$inertia.post(route("logout"))}}},r=s("KHd+"),i=Object(r.a)(a,(function(){var t=this.$createElement,e=this._self._c||t;return e("div",{staticClass:"bg-white fixed flex border-b border-grey-lighter pin-t pin-x z-100 h-16 items-center shadow"},[e("nav",{staticClass:"flex justify-between flex-wrap bg-white pl-4 py-3 pr-0 h-16 max-w-5xl w-full mx-auto"},[e("logo"),this._v(" "),e("div",{staticClass:"flex-1 items-left flex-no-shrink text-white m-1"},[e("span",{staticClass:"text-2xl tracking-tight text-grey-darkest font-thin"},[this._v(" "+this._s(this.$page.app.name)+" ")])]),this._v(" "),e("div",{staticClass:"flex-1 text-right p-2"},[e("inertia-link",{staticClass:"btn btn-link nav-link",attrs:{href:this.route("logout"),method:"post"}},[this._v("Log out")])],1)],1)])}),[],!1,null,null,null).exports,n={props:["alert"],data:function(){return{isVisible:!0}},methods:{closeAlert:function(){this.isVisible=!1}},computed:{alertClass:function(){return"success"==this.alert.type?"bg-green":"bg-red-500"}}},l={components:{alert:Object(r.a)(n,(function(){var t=this,e=t.$createElement,s=t._self._c||e;return t.isVisible?s("div",{staticClass:"rounded mb-8 mt-8 p-8 text-white text-lg",class:t.alertClass},[t._v("\n    "+t._s(t.alert.message)+"\n    "),s("button",{staticClass:"float-right",attrs:{type:"button","aria-label":"Close"},on:{click:t.closeAlert}},[s("span",{staticClass:"text-lg text-white",attrs:{"aria-hidden":"true"}},[t._v("×")])])]):t._e()}),[],!1,null,null,null).exports},data:function(){return{alerts:[]}},created:function(){var t=this;[{type:"success",message:this.$page.flash.success},{type:"error",message:this.$page.flash.error}].filter((function(t){return t.message})).forEach((function(e){return t.alerts.push(e)})),Object.keys(this.$page.errors).forEach((function(e){t.alerts.push({type:"error",message:t.$page.errors[e].join("\n")})})),window.events.$on("notify",(function(e){t.alerts.push(e)}))}},o={data:function(){return{menuItems:[{name:"Home",route:"home",icon:"fas fa-tachometer-alt fa-fw",active:route().current("home")},{name:"Sessions",route:"session.index",icon:"fas fa-stopwatch fa-fw",active:route().current("session.*")},{name:"Tasks",route:"task.index",icon:"fas fa-check-square fa-fw",active:route().current("task.*")},{name:"Sprints",route:"sprint.index",icon:"fas fa-calendar-times fa-fw",active:route().current("sprint.*")},{name:"Projects",route:"project.index",icon:"fas fa-briefcase fa-fw"},{name:"Invoices",route:"invoice.index",icon:"fas fa-file-invoice-dollar fa-fw",active:route().current("invoice.*")},{name:"Clients",route:"client.index",icon:"fas fa-users fa-fw",active:route().current("client.*")}]}}},c={components:{headerNav:i,messages:Object(r.a)(l,(function(){var t=this.$createElement,e=this._self._c||t;return e("div",{attrs:{id:"notificaton"}},this._l(this.alerts,(function(t,s){return e("alert",{key:s,attrs:{alert:t}})})),1)}),[],!1,null,null,null).exports,sidebar:Object(r.a)(o,(function(){var t=this,e=t.$createElement,s=t._self._c||e;return s("div",{staticClass:"block z-90 bg-white w-full border-b -mb-16 lg:-mb-0 lg:static lg:bg-transparent lg:border-b-0 lg:pt-0 md:w-full lg:w-1/4 lg:border-0 xl:w-1/5 sm:flex md:flex md:relative sm:relative",attrs:{id:"sidebar"}},[s("div",{staticClass:"lg:block lg:relative lg:sticky"},[s("nav",{staticClass:"px-6 pb-6 pt-24 overflow-y-auto text-base lg:text-lg lg:pl-0 lg:pr-8 sticky?lg:h-(screen-16) leading-loose"},t._l(t.menuItems,(function(e){return s("ul",{staticClass:"list-reset"},[s("li",{staticClass:"lg:mb-2 hover:bg-blue-light px-4 py-1 rounded",class:e.active?"bg-grey-light":""},[s("inertia-link",{staticClass:"no-underline text-grey-darkest",attrs:{href:t.route(e.route)}},[s("i",{staticClass:"text-grey parent-hover:text-white",class:e.icon}),t._v(" "),s("span",{staticClass:"ml-3 parent-hover:text-white"},[t._v(" "+t._s(e.name)+" ")])])],1)])})),0)])])}),[],!1,null,null,null).exports},computed:{hasTitleOrToolbar:function(){return!(!this.$slots.footer&&!this.$slots["top-right-toolbar"])}}},u=Object(r.a)(c,(function(){var t=this,e=t.$createElement,s=t._self._c||e;return s("div",[s("header-nav"),t._v(" "),s("div",{staticClass:"w-full max-w-5xl mx-auto px-8"},[s("div",{staticClass:"lg:flex -mx-6"},[s("sidebar"),t._v(" "),s("div",{staticClass:"min-h-screen w-full lg:static lg:max-h-full lg:overflow-visible",attrs:{id:"content-wrapper"}},[s("main",{staticClass:"lg:sticky w-full py-24",attrs:{role:"main"}},[t._t("breadcrumbs"),t._v(" "),s("messages"),t._v(" "),t.hasTitleOrToolbar?s("div",{staticClass:"flex justify-content-between flex-wrap flex-md-nowrap align-items-center pt-3 pb-2 mb-3"},[s("div",{staticClass:"flex-1"},[s("h1",{staticClass:"h2 font-normal"},[t._t("title")],2)]),t._v(" "),s("div",{staticClass:"btn-toolbar mb-2 mb-md-0 flex-1 text-right"},[t._t("top-right-toolbar")],2)]):t._e(),t._v(" "),t._t("default")],2)])],1)])],1)}),[],!1,null,null,null);e.a=u.exports},"/39/":function(t,e,s){"use strict";var a={props:["breadcrumbs"],methods:{isLast:function(t){return t+1==this.breadcrumbs.length}}},r=s("KHd+"),i=Object(r.a)(a,(function(){var t=this,e=t.$createElement,s=t._self._c||e;return s("nav",{staticClass:"font-sans w-full pb-4"},[s("ol",{staticClass:"list-reset flex text-grey-dark"},t._l(t.breadcrumbs,(function(e,a){return s("li",{},[!t.isLast(a)&&e.url?s("inertia-link",{staticClass:"text-grey text-light no-underline",attrs:{href:e.url}},[t._v("\n                "+t._s(e.title)+"\n            ")]):t._e(),t._v(" "),t.isLast(a)?s("span",[t._v(" "+t._s(e.title)+" ")]):s("span",{staticClass:"mx-4 text-gray-300"},[t._v(" > ")])],1)})),0)])}),[],!1,null,null,null);e.a=i.exports},"KHd+":function(t,e,s){"use strict";function a(t,e,s,a,r,i,n,l){var o,c="function"==typeof t?t.options:t;if(e&&(c.render=e,c.staticRenderFns=s,c._compiled=!0),a&&(c.functional=!0),i&&(c._scopeId="data-v-"+i),n?(o=function(t){(t=t||this.$vnode&&this.$vnode.ssrContext||this.parent&&this.parent.$vnode&&this.parent.$vnode.ssrContext)||"undefined"==typeof __VUE_SSR_CONTEXT__||(t=__VUE_SSR_CONTEXT__),r&&r.call(this,t),t&&t._registeredComponents&&t._registeredComponents.add(n)},c._ssrRegister=o):r&&(o=l?function(){r.call(this,this.$root.$options.shadowRoot)}:r),o)if(c.functional){c._injectStyles=o;var u=c.render;c.render=function(t,e){return o.call(e),u(t,e)}}else{var d=c.beforeCreate;c.beforeCreate=d?[].concat(d,o):[o]}return{exports:t,options:c}}s.d(e,"a",(function(){return a}))},PdyV:function(t,e,s){"use strict";s.r(e);var a=s("/39/"),r=s("+SZM"),i={props:["sprint","totalDurationForHumans","tasks"],components:{breadcrumbs:a.a,layout:r.a}},n=s("KHd+"),l=Object(n.a)(i,(function(){var t=this,e=t.$createElement,s=t._self._c||e;return s("layout",[s("template",{slot:"breadcrumbs"},[s("breadcrumbs",{attrs:{breadcrumbs:[{title:"Home",url:t.route("home")},{title:"Sprints",url:t.route("sprint.index")},{title:t.sprint.name}]}})],1),t._v(" "),s("template",{slot:"title"},[t._v(" "+t._s(t.sprint.name)+" ")]),t._v(" "),s("div",{staticClass:"card"},[s("div",[s("h2",{staticClass:"text-grey-darker"},[t._v(" "+t._s(t.sprint.name)+" ")])]),t._v(" "),s("div",{staticClass:"mt-2"},[s("span",[s("inertia-link",{staticClass:"no-underline text-xl text-grey-dark",attrs:{href:t.route("sprint.show",t.sprint)}},[t._v("\n                    "+t._s(t.sprint.project.name)+"\n                ")])],1)]),t._v(" "),s("div",{staticClass:"mt-2"},[s("div",{staticClass:"font-mono text-lg"},[t._v(" "+t._s(t.totalDurationForHumans)+" ")]),t._v(" "),s("div",{staticClass:"mt-1 text-grey"},[t._v(" Total time ")])])]),t._v(" "),s("div",{staticClass:"rounded p-2 bg-white shadow mb-8 mt-4"},[s("div",{staticClass:"p-2"},[s("h3",{staticClass:"text-grey-darker"},[t._v(" Sprint Sessions ")])]),t._v(" "),s("table",{staticClass:"table rounded p-4 bg-white"},[s("tr",[s("th",{staticClass:"text-grey"},[t._v(" Project ")]),t._v(" "),s("th",{staticClass:"text-grey"},[t._v(" Task ")]),t._v(" "),s("th",{staticClass:"text-grey"},[t._v(" Total Time ")])]),t._v(" "),t._l(t.tasks,(function(e){return s("tr",[s("td",{staticClass:"p-2 text-grey-dark"},[e.project?s("span",[t._v(" "+t._s(e.project.name)+" ")]):t._e()]),t._v(" "),s("td",{staticClass:"p-2 text-grey-dark"},[t._v(" "+t._s(e.name)+" ")]),t._v(" "),s("td",{staticClass:"p-2 text-grey-dark"},[t._v(" "+t._s(e.totalDurationInSprintForHumans)+" ")])])}))],2)])],2)}),[],!1,null,null,null);e.default=l.exports},lrC8:function(t,e,s){"use strict";var a=s("KHd+"),r=Object(a.a)({},(function(){var t=this,e=t.$createElement,s=t._self._c||e;return s("svg",{attrs:{"xmlns:dc":"http://purl.org/dc/elements/1.1/","xmlns:cc":"http://creativecommons.org/ns#","xmlns:rdf":"http://www.w3.org/1999/02/22-rdf-syntax-ns#","xmlns:svg":"http://www.w3.org/2000/svg",xmlns:"http://www.w3.org/2000/svg",viewBox:"646.6659545898438 382.7467041015625 413.33343505859375 434.50665283203125",height:"40",width:"40","xml:space":"preserve",id:"svg2",version:"1.1"}},[s("metadata",{attrs:{id:"metadata8"}},[s("rdf:rdf",[s("cc:work",{attrs:{"rdf:about":""}},[s("dc:format",[t._v("image/svg+xml")]),t._v(" "),s("dc:type",{attrs:{"rdf:resource":"http://purl.org/dc/dcmitype/StillImage"}})],1)],1)],1),t._v(" "),s("defs",{attrs:{id:"defs6"}},[s("clipPath",{attrs:{id:"clipPath18",clipPathUnits:"userSpaceOnUse"}},[s("path",{attrs:{id:"path16",d:"M 0,900 H 1280 V 0 H 0 Z"}})])]),t._v(" "),s("g",{attrs:{transform:"matrix(1.3333333,0,0,-1.3333333,0,1200)",id:"g10"}},[s("g",{attrs:{id:"g12"}},[s("g",{attrs:{"clip-path":"url(#clipPath18)",id:"g14"}},[s("g",{attrs:{transform:"translate(557.0405,439.9961)",id:"g24"}},[s("path",{staticStyle:{fill:"#391905","fill-opacity":"1","fill-rule":"nonzero",stroke:"none"},attrs:{id:"path26",d:"m 0,0 c -10.402,4.953 -45.118,5.656 -46.306,5.679 -0.077,0.097 -0.157,0.19 -0.234,0.288 4.548,1.608 12.3,3.776 21.038,3.776 9.786,0 18.398,-2.677 25.633,-7.962 z M -72.041,10.88 C -43.41,-35.367 15.325,-20.771 15.325,-20.771 L 17.17,4.316 C -21.535,35.54 -72.041,10.88 -72.041,10.88"}})]),t._v(" "),s("g",{attrs:{transform:"translate(769.2656,445.6748)",id:"g28"}},[s("path",{staticStyle:{fill:"#391905","fill-opacity":"1","fill-rule":"nonzero",stroke:"none"},attrs:{id:"path30",d:"m 0,0 c -1.188,-0.022 -35.904,-0.726 -46.307,-5.679 l -0.131,1.782 c 7.235,5.285 15.848,7.961 25.634,7.961 8.738,0 16.49,-2.168 21.037,-3.776 C 0.156,0.19 0.077,0.098 0,0 m -63.477,-1.362 1.846,-25.088 c 0,0 58.735,-14.596 87.365,31.651 0,0 -50.505,24.66 -89.211,-6.563"}})]),t._v(" "),s("g",{attrs:{transform:"translate(655.3555,379.248)",id:"g32"}},[s("path",{staticStyle:{fill:"#391905","fill-opacity":"1","fill-rule":"nonzero",stroke:"none"},attrs:{id:"path34",d:"m 0,0 c -2.313,0 -4.187,-1.875 -4.187,-4.187 0,-2.313 1.874,-4.188 4.187,-4.188 2.313,0 4.188,1.875 4.188,4.188 C 4.188,-1.875 2.313,0 0,0"}})]),t._v(" "),s("g",{attrs:{transform:"translate(624.6445,379.248)",id:"g36"}},[s("path",{staticStyle:{fill:"#391905","fill-opacity":"1","fill-rule":"nonzero",stroke:"none"},attrs:{id:"path38",d:"m 0,0 c -2.313,0 -4.188,-1.875 -4.188,-4.187 0,-2.313 1.875,-4.188 4.188,-4.188 2.313,0 4.187,1.875 4.187,4.188 C 4.187,-1.875 2.313,0 0,0"}})]),t._v(" "),s("g",{attrs:{transform:"translate(669.5391,430.625)",id:"g40"}},[s("path",{staticStyle:{fill:"#391905","fill-opacity":"1","fill-rule":"nonzero",stroke:"none"},attrs:{id:"path42",d:"m 0,0 c -5.087,0 -9.211,4.124 -9.211,9.211 0,5.087 4.124,9.211 9.211,9.211 5.087,0 9.211,-4.124 9.211,-9.211 C 9.211,4.124 5.087,0 0,0 m 7.105,-57.658 c 0,-10.794 -8.75,-19.544 -19.543,-19.544 H -46.64 c -10.794,0 -19.543,8.75 -19.543,19.544 0,10.794 8.749,19.543 19.543,19.543 h 34.202 c 10.793,0 19.543,-8.749 19.543,-19.543 M -22.908,-94.651 H -36.17 c -9.172,0 -16.865,6.319 -18.971,14.841 2.641,-1.016 5.506,-1.58 8.501,-1.58 h 34.202 c 2.995,0 5.859,0.564 8.5,1.58 -2.105,-8.522 -9.798,-14.841 -18.97,-14.841 m -36.17,113.073 c 5.087,0 9.211,-4.124 9.211,-9.211 0,-5.087 -4.124,-9.211 -9.211,-9.211 -5.087,0 -9.211,4.124 -9.211,9.211 0,5.087 4.124,9.211 9.211,9.211 M 50.157,151.747 C 32.144,167.577 25.593,182.315 25.593,182.315 4.305,149.018 45.79,124.454 55.616,97.161 58.548,89.016 57.883,81.309 55.507,74.504 51.345,62.584 35.712,59.516 27.69,69.265 c -0.174,0.213 -0.328,0.413 -0.46,0.603 -4.912,7.096 0,20.742 0,20.742 C 7.034,88.973 -3.884,67.138 -3.884,67.138 c -4.912,5.459 -3.82,17.468 -3.82,17.468 -15.83,-2.73 -21.835,-14.738 -21.835,-14.738 0,0 -6.004,12.008 -21.835,14.738 0,0 1.092,-12.009 -3.821,-17.468 0,0 -10.917,21.835 -31.114,23.472 0,0 4.913,-13.646 0,-20.742 -0.131,-0.19 -0.285,-0.39 -0.46,-0.603 -8.021,-9.749 -23.654,-6.681 -27.816,5.239 -2.376,6.805 -3.041,14.512 -0.109,22.657 9.826,27.293 51.311,51.857 30.023,85.154 0,0 -6.551,-14.738 -24.564,-30.568 -18.014,-15.83 -46.945,-39.302 -43.123,-81.879 2.53,-28.196 20.617,-46.813 32.55,-56.175 -2.16,-10.757 -2.947,-23.403 -1.436,-38.26 0,0 9.825,9.28 17.467,12.009 0,0 -21.834,-26.202 -18.013,-57.862 0,0 10.371,10.372 15.83,13.647 0,0 -12.555,-30.023 12.009,-50.219 0,0 2.183,24.017 8.188,27.839 0,0 -0.546,-28.385 14.738,-42.033 0,0 1.638,12.556 7.096,16.922 0,0 4.367,-19.104 12.555,-26.201 0,0 1.638,10.917 10.372,16.922 0,0 1.091,-19.651 11.463,-30.022 10.371,10.371 11.463,30.022 11.463,30.022 8.734,-6.005 10.372,-16.922 10.372,-16.922 8.187,7.097 12.555,26.201 12.555,26.201 5.458,-4.366 7.095,-16.922 7.095,-16.922 15.284,13.648 14.739,42.033 14.739,42.033 6.004,-3.822 8.188,-27.839 8.188,-27.839 24.564,20.196 12.009,50.219 12.009,50.219 5.459,-3.275 15.83,-13.647 15.83,-13.647 3.821,31.66 -18.014,57.862 -18.014,57.862 7.643,-2.729 17.468,-12.009 17.468,-12.009 1.511,14.857 0.725,27.503 -1.436,38.26 11.932,9.362 30.02,27.979 32.55,56.175 3.822,42.577 -25.109,66.049 -43.123,81.879"}})])])])])],1)}),[],!1,null,null,null);e.a=r.exports}}]);
//# sourceMappingURL=17.chunk.bbe7c4eb8887b47dd333.js.map