(this["webpackJsonpreact-social-network"]=this["webpackJsonpreact-social-network"]||[]).push([[8],{323:function(e,a,t){"use strict";t.d(a,"c",(function(){return m})),t.d(a,"b",(function(){return d})),t.d(a,"a",(function(){return p})),t.d(a,"d",(function(){return g}));var r=t(349),n=t(0),c=t.n(n),l=t(326),i=t.n(l),s=t(176),o=t(517),u=t(519),m=function(e){var a=e.input,t=e.meta,n=t.touched,l=t.error,s=Object(r.a)(e,["input","meta"]),u=n&&l;return c.a.createElement("div",{className:u?"".concat(i.a.reduxFormFields," ").concat(i.a.error):i.a.reduxFormFields},c.a.createElement("div",{className:"reduxInputField"},c.a.createElement("label",{htmlFor:a.name},s.label&&c.a.createElement("span",null,"".concat(s.label,":"))),c.a.createElement(o.a.TextArea,Object.assign({},a,s))),u&&c.a.createElement("span",{className:i.a.errorSpan},l))},d=function(e){var a=e.input,t=e.meta,n=t.touched,l=t.error,s=Object(r.a)(e,["input","meta"]),u=n&&l;return c.a.createElement("div",{className:u?"".concat(i.a.reduxFormFields," ").concat(i.a.error):i.a.reduxFormFields},c.a.createElement("div",{className:"reduxInputField"},c.a.createElement("label",{htmlFor:a.name},s.label&&c.a.createElement("span",null,"".concat(s.label,":"))),c.a.createElement(o.a,Object.assign({},a,s,{autoComplete:"off"}))),u&&c.a.createElement("span",{className:i.a.errorSpan},l))},p=function(e){var a=e.input,t=e.meta,n=t.touched,l=t.error,s=Object(r.a)(e,["input","meta"]),o=n&&l;return c.a.createElement("div",null,c.a.createElement("div",{className:"reduxCheckboxField"},c.a.createElement(u.a,Object.assign({},s,a),s.label)),o&&c.a.createElement("span",{className:o?i.a.error:""},l))},g=function(e,a,t){var r=arguments.length>3&&void 0!==arguments[3]?arguments[3]:[],n=arguments.length>4&&void 0!==arguments[4]?arguments[4]:{},l=arguments.length>5&&void 0!==arguments[5]?arguments[5]:"",i=arguments.length>6&&void 0!==arguments[6]?arguments[6]:"";return c.a.createElement("div",{className:i},c.a.createElement(s.a,Object.assign({name:e,component:a,label:t,validate:r},n))," ",l)}},325:function(e,a,t){"use strict";t.d(a,"b",(function(){return n})),t.d(a,"a",(function(){return c}));var r,n=function(e){if(!e)return"Field is required"},c=(r=10,function(e){if(e&&e.length>r)return"Max length > ".concat(r)})},326:function(e,a,t){e.exports={reduxFormFields:"style_reduxFormFields__3ce72",error:"style_error__3ESqE",errorSpan:"style_errorSpan__g816S"}},373:function(e,a,t){e.exports={dialogs:"Dialogs_dialogs__1NvvX",dialogs_wrapper:"Dialogs_dialogs_wrapper__18nUO",dialogs_wrapper_friends:"Dialogs_dialogs_wrapper_friends__WB9Fw",a_active:"Dialogs_a_active__1WYT5",dialogs_wrapper_messages:"Dialogs_dialogs_wrapper_messages__3kgvT"}},413:function(e,a,t){e.exports={form:"Form_form__4Wexm"}},518:function(e,a,t){"use strict";t.r(a);var r=t(0),n=t.n(r),c=t(18),l=t(373),i=t.n(l),s=t(176),o=t(177),u=t(323),m=t(325),d=t(413),p=t.n(d),g=t(319),f=Object(o.a)({form:"dialogs-add-message"})((function(e){return n.a.createElement("form",{className:p.a.form,onSubmit:e.handleSubmit},n.a.createElement("div",null,n.a.createElement(s.a,{name:"textarea",component:u.c,placeholder:"Write a message...",validate:[m.b,m.a]})),n.a.createElement("div",null,n.a.createElement(g.a,{type:"primary"},"Send")))})),_=function(e){var a=e.dialogPage.friends.map((function(e){return n.a.createElement(c.c,{activeClassName:i.a.a_active,to:"/dialogs/".concat(e.id),key:e.id},e.name)})),t=e.dialogPage.messages.map((function(e){return n.a.createElement("div",{key:e.id},e.message)}));return n.a.createElement("div",{className:i.a.dialogs},n.a.createElement("h1",null,"Dialogs"),n.a.createElement("div",{className:i.a.dialogs_wrapper},n.a.createElement("div",{className:i.a.dialogs_wrapper_friends},a),n.a.createElement("div",{className:i.a.dialogs_wrapper_messages},t,n.a.createElement(f,{onSubmit:function(a){e.sendMessage(a.textarea)}}))))},v=t(110),b=t(24),E=t(45),h=t(46),F=t(50),x=t(49),O=t(22),j=function(e){return{isAuth:e.authPart.isAuth}},N=t(26);a.default=Object(N.d)(Object(b.b)((function(e){return{dialogPage:e.dialogPage}}),(function(e){return{sendMessage:function(a){e(Object(v.b)(a))}}})),(function(e){var a=function(a){Object(F.a)(r,a);var t=Object(x.a)(r);function r(){return Object(E.a)(this,r),t.apply(this,arguments)}return Object(h.a)(r,[{key:"render",value:function(){return this.props.isAuth?n.a.createElement(e,this.props):n.a.createElement(O.a,{to:"/login"})}}]),r}(n.a.Component);return Object(b.b)(j)(a)}))(_)}}]);
//# sourceMappingURL=8.de69b9c8.chunk.js.map