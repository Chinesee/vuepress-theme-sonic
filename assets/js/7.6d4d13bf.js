(window.webpackJsonp=window.webpackJsonp||[]).push([[7],{164:function(e,t,a){},189:function(e,t,a){"use strict";var o=a(164);a.n(o).a},193:function(e,t,a){"use strict";a.r(t);var o={name:"CodeGroup",data:()=>({codeTabs:[],activeCodeTabIndex:-1}),watch:{activeCodeTabIndex(e){this.codeTabs.forEach(e=>{e.elm.classList.remove("theme-code-block__active")}),this.codeTabs[e].elm.classList.add("theme-code-block__active")}},mounted(){this.codeTabs=(this.$slots.default||[]).filter(e=>Boolean(e.componentOptions)).map((e,t)=>(""===e.componentOptions.propsData.active&&(this.activeCodeTabIndex=t),{title:e.componentOptions.propsData.title,elm:e.elm})),-1===this.activeCodeTabIndex&&this.codeTabs.length>0&&(this.activeCodeTabIndex=0)},methods:{changeCodeTab(e){this.activeCodeTabIndex=e}}},c=(a(189),a(6)),s=Object(c.a)(o,(function(){var e=this,t=e.$createElement,a=e._self._c||t;return a("div",{staticClass:"theme-code-group"},[a("div",{staticClass:"theme-code-group__nav"},[a("ul",{staticClass:"theme-code-group__ul"},e._l(e.codeTabs,(function(t,o){return a("li",{key:t.title,staticClass:"theme-code-group__li"},[a("button",{staticClass:"theme-code-group__nav-tab",class:{"theme-code-group__nav-tab-active":o===e.activeCodeTabIndex},on:{click:function(t){return e.changeCodeTab(o)}}},[e._v("\n          "+e._s(t.title)+"\n        ")])])})),0)]),e._v(" "),e._t("default"),e._v(" "),e.codeTabs.length<1?a("pre",{staticClass:"pre-blank"},[e._v("// Make sure to add code blocks to your code group")]):e._e()],2)}),[],!1,null,"a73e16c2",null);t.default=s.exports}}]);