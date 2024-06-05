(window.webpackJsonp=window.webpackJsonp||[]).push([[31],{312:function(t,s,n){"use strict";n.r(s);var a=n(14),e=Object(a.a)({},(function(){var t=this,s=t._self._c;return s("ContentSlotsDistributor",{attrs:{"slot-key":t.$parent.slotKey}},[s("h1",{attrs:{id:"vue-实例的设计"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#vue-实例的设计"}},[t._v("#")]),t._v(" Vue 实例的设计")]),t._v(" "),s("p",[t._v("这里是对 "),s("code",[t._v("Vue")]),t._v(" 实例的整理，有利于我们直观地观察 "),s("code",[t._v("Vue")])]),t._v(" "),s("div",{staticClass:"language-js extra-class"},[s("pre",{pre:!0,attrs:{class:"language-js"}},[s("code",[s("span",{pre:!0,attrs:{class:"token comment"}},[t._v("// Vue.prototype._init")]),t._v("\nvm"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("_uid "),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v(" uid"),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("++")]),t._v("     "),s("span",{pre:!0,attrs:{class:"token comment"}},[t._v("// 每个Vue实例都拥有一个唯一的 id")]),t._v("\nvm"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("_isVue "),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token boolean"}},[t._v("true")]),t._v("    "),s("span",{pre:!0,attrs:{class:"token comment"}},[t._v("// 这个表示用于避免Vue实例对象被观测(observed)")]),t._v("\nvm"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("$options         "),s("span",{pre:!0,attrs:{class:"token comment"}},[t._v("// 当前 Vue 实例的初始化选项，注意：这是经过 mergeOptions() 后的")]),t._v("\nvm"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("_renderProxy "),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v(" vm    "),s("span",{pre:!0,attrs:{class:"token comment"}},[t._v("// 渲染函数作用域代理")]),t._v("\nvm"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("_self "),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v(" vm       "),s("span",{pre:!0,attrs:{class:"token comment"}},[t._v("// 实例本身")]),t._v("\n\n"),s("span",{pre:!0,attrs:{class:"token comment"}},[t._v("// initLifecycle(vm)    src/core/instance/lifecycle.js **************************************************")]),t._v("\nvm"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("$parent "),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v(" parent\nvm"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("$root "),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v(" parent "),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("?")]),t._v(" parent"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("$root "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),t._v(" vm\n\nvm"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("$children "),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("[")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("]")]),t._v("\nvm"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("$refs "),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),t._v("\n\nvm"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("_watcher "),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("null")]),t._v("\nvm"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("_inactive "),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("null")]),t._v("\nvm"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("_directInactive "),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token boolean"}},[t._v("false")]),t._v("\nvm"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("_isMounted "),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token boolean"}},[t._v("false")]),t._v("\nvm"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("_isDestroyed "),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token boolean"}},[t._v("false")]),t._v("\nvm"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("_isBeingDestroyed "),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token boolean"}},[t._v("false")]),t._v("\n\n"),s("span",{pre:!0,attrs:{class:"token comment"}},[t._v("// initEvents(vm)   src/core/instance/events.js **************************************************")]),t._v("\nvm"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("_events "),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v(" Object"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),s("span",{pre:!0,attrs:{class:"token function"}},[t._v("create")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),s("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("null")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v("\nvm"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("_hasHookEvent "),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token boolean"}},[t._v("false")]),t._v("\n\n"),s("span",{pre:!0,attrs:{class:"token comment"}},[t._v("// initRender(vm)   src/core/instance/render.js **************************************************")]),t._v("\nvm"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("_vnode "),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("null")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token comment"}},[t._v("// the root of the child tree")]),t._v("\nvm"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("_staticTrees "),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("null")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token comment"}},[t._v("// v-once cached trees")]),t._v("\n\nvm"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("$vnode\nvm"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("$slots\nvm"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("$scopedSlots\n\nvm"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("_c\nvm"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("$createElement\n\nvm"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("$attrs\nvm"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("$listeners\n\n"),s("span",{pre:!0,attrs:{class:"token comment"}},[t._v("// initState(vm)   src/core/instance/state.js **************************************************")]),t._v("\nvm"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("_watchers "),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("[")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("]")]),t._v("\nvm"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("_data\n\n"),s("span",{pre:!0,attrs:{class:"token comment"}},[t._v("// mountComponent()   src/core/instance/lifecycle.js")]),t._v("\nvm"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("$el\n\n"),s("span",{pre:!0,attrs:{class:"token comment"}},[t._v("// initComputed()   src/core/instance/state.js")]),t._v("\nvm"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("_computedWatchers "),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v(" Object"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),s("span",{pre:!0,attrs:{class:"token function"}},[t._v("create")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),s("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("null")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v("\n\n"),s("span",{pre:!0,attrs:{class:"token comment"}},[t._v("// initProps()    src/core/instance/state.js")]),t._v("\nvm"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("_props "),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),t._v("\n\n"),s("span",{pre:!0,attrs:{class:"token comment"}},[t._v("// initProvide()    src/core/instance/inject.js")]),t._v("\nvm"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("_provided\n")])])])])}),[],!1,null,null,null);s.default=e.exports}}]);