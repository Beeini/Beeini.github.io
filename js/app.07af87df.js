(function(){"use strict";var t={55:function(t,o,e){var n=e(144),r=function(){var t=this,o=t.$createElement,e=t._self._c||o;return e("div",{attrs:{id:"app"}},[e("TodoHeader"),e("TodoInput",{on:{addTodo:t.addTodo}}),e("TodoList",{attrs:{propsdata:t.todoItems},on:{removeTodo:t.removeTodo}}),e("TodoFooter",{on:{removeAll:t.clearAll}})],1)},a=[],s=function(){var t=this,o=t.$createElement;t._self._c;return t._m(0)},l=[function(){var t=this,o=t.$createElement,e=t._self._c||o;return e("header",[e("h1",[t._v(" Soccer practice ⚽")])])}],i={},c=i,d=e(1),u=(0,d.Z)(c,s,l,!1,null,null,null),f=u.exports,m=function(){var t=this,o=t.$createElement,e=t._self._c||o;return e("div",{staticClass:"inputBox shadow"},[e("input",{directives:[{name:"model",rawName:"v-model",value:t.newTodoItem,expression:"newTodoItem"}],attrs:{type:"text"},domProps:{value:t.newTodoItem},on:{keyup:function(o){return!o.type.indexOf("key")&&t._k(o.keyCode,"enter",13,o.key,"Enter")?null:t.addTodo.apply(null,arguments)},input:function(o){o.target.composing||(t.newTodoItem=o.target.value)}}}),e("span",{staticClass:"addContainer",on:{click:t.addTodo}},[e("i",{staticClass:"addBtn fas fa-plus"})]),t.showModal?e("ModalWrap",{on:{close:function(o){t.showModal=!1}}},[e("h3",{attrs:{slot:"header"},slot:"header"},[t._v("경고")]),e("span",{attrs:{slot:"footer"},on:{click:function(o){t.showModal=!1}},slot:"footer"},[t._v(" 할일을 입력하세요 "),e("i",{staticClass:"closeModalBtn fas fa-times"})])]):t._e()],1)},p=[],h=function(){var t=this,o=t.$createElement,e=t._self._c||o;return e("transition",{attrs:{name:"modal"}},[e("div",{staticClass:"modal-mask"},[e("div",{staticClass:"modal-wrapper"},[e("div",{staticClass:"modal-container"},[e("div",{staticClass:"modal-header"},[t._t("header",(function(){return[t._v(" default header ")]}))],2),e("div",{staticClass:"modal-body"},[t._t("body",(function(){return[t._v(" default body ")]}))],2),e("div",{staticClass:"modal-footer"},[t._t("footer",(function(){return[t._v(" default footer "),e("button",{staticClass:"modal-default-button",on:{click:function(o){return t.$emit("close")}}},[t._v(" OK ")])]}))],2)])])])])},v=[],T={},_=T,w=(0,d.Z)(_,h,v,!1,null,"35009b13",null),C=w.exports,g={data(){return{newTodoItem:"",showModal:!1}},methods:{addTodo(){if(""!==this.newTodoItem){let t=this.newTodoItem&&this.newTodoItem.trim();this.$emit("addTodo",t),this.clearInput()}else this.showModal=!this.showModal},clearInput(){this.newTodoItem=""}},components:{ModalWrap:C}},y=g,I=(0,d.Z)(y,m,p,!1,null,"08a2703f",null),b=I.exports,k=function(){var t=this,o=t.$createElement,e=t._self._c||o;return e("section",[e("transition-group",{attrs:{name:"list",tag:"ul"}},t._l(t.propsdata,(function(o,n){return e("li",{key:o,staticClass:"shadow"},[e("i",{staticClass:"checkBtn fas fa-check"}),t._v(" "+t._s(o)+" "),e("span",{staticClass:"removeBtn",attrs:{type:"button"},on:{click:function(e){return t.removeTodo(o,n)}}},[e("i",{staticClass:"far fa-trash-alt"})])])})),0)],1)},x=[],O={props:["propsdata"],methods:{removeTodo(t,o){this.$emit("removeTodo",t,o)}}},$=O,E=(0,d.Z)($,k,x,!1,null,"1e62f66d",null),M=E.exports,A=function(){var t=this,o=t.$createElement,e=t._self._c||o;return e("div",{staticClass:"clearAllContainer"},[e("span",{staticClass:"clearAllBtn",on:{click:t.clearTodo}},[t._v("Clear All")])])},Z=[],S={methods:{clearTodo(){this.$emit("removeAll")}}},j=S,B=(0,d.Z)(j,A,Z,!1,null,"34d58902",null),F=B.exports,P={name:"App",data(){return{todoItems:[]}},methods:{addTodo(t){localStorage.setItem(t,t),this.todoItems.push(t)},clearAll(){localStorage.clear(),this.todoItems=[]},removeTodo(t,o){localStorage.removeItem(t),this.todoItems.splice(o,1)}},created(){if(localStorage.length>0)for(let t=0;t<localStorage.length;t++)this.todoItems.push(localStorage.key(t))},components:{TodoHeader:f,TodoInput:b,TodoList:M,TodoFooter:F}},H=P,L=(0,d.Z)(H,r,a,!1,null,null,null),W=L.exports;n.Z.config.productionTip=!1,new n.Z({render:t=>t(W)}).$mount("#app")}},o={};function e(n){var r=o[n];if(void 0!==r)return r.exports;var a=o[n]={exports:{}};return t[n](a,a.exports,e),a.exports}e.m=t,function(){var t=[];e.O=function(o,n,r,a){if(!n){var s=1/0;for(d=0;d<t.length;d++){n=t[d][0],r=t[d][1],a=t[d][2];for(var l=!0,i=0;i<n.length;i++)(!1&a||s>=a)&&Object.keys(e.O).every((function(t){return e.O[t](n[i])}))?n.splice(i--,1):(l=!1,a<s&&(s=a));if(l){t.splice(d--,1);var c=r();void 0!==c&&(o=c)}}return o}a=a||0;for(var d=t.length;d>0&&t[d-1][2]>a;d--)t[d]=t[d-1];t[d]=[n,r,a]}}(),function(){e.d=function(t,o){for(var n in o)e.o(o,n)&&!e.o(t,n)&&Object.defineProperty(t,n,{enumerable:!0,get:o[n]})}}(),function(){e.g=function(){if("object"===typeof globalThis)return globalThis;try{return this||new Function("return this")()}catch(t){if("object"===typeof window)return window}}()}(),function(){e.o=function(t,o){return Object.prototype.hasOwnProperty.call(t,o)}}(),function(){var t={143:0};e.O.j=function(o){return 0===t[o]};var o=function(o,n){var r,a,s=n[0],l=n[1],i=n[2],c=0;if(s.some((function(o){return 0!==t[o]}))){for(r in l)e.o(l,r)&&(e.m[r]=l[r]);if(i)var d=i(e)}for(o&&o(n);c<s.length;c++)a=s[c],e.o(t,a)&&t[a]&&t[a][0](),t[a]=0;return e.O(d)},n=self["webpackChunksoccer"]=self["webpackChunksoccer"]||[];n.forEach(o.bind(null,0)),n.push=o.bind(null,n.push.bind(n))}();var n=e.O(void 0,[998],(function(){return e(55)}));n=e.O(n)})();
//# sourceMappingURL=app.07af87df.js.map