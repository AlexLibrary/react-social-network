(this["webpackJsonpreact-dmitry"]=this["webpackJsonpreact-dmitry"]||[]).push([[7],{241:function(e,t,n){"use strict";n.d(t,"a",(function(){return o}));var r=n(60);function o(e,t){return function(e){if(Array.isArray(e))return e}(e)||function(e,t){if("undefined"!==typeof Symbol&&Symbol.iterator in Object(e)){var n=[],r=!0,o=!1,a=void 0;try{for(var u,s=e[Symbol.iterator]();!(r=(u=s.next()).done)&&(n.push(u.value),!t||n.length!==t);r=!0);}catch(l){o=!0,a=l}finally{try{r||null==s.return||s.return()}finally{if(o)throw a}}return n}}(e,t)||Object(r.a)(e,t)||function(){throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}()}},255:function(e,t,n){e.exports={users:"style_users__2RLBG",users_wrapper:"style_users_wrapper__3i35y",users_face:"style_users_face__Yzuvr",users_about:"style_users_about__2xhjP",users_about_lacation:"style_users_about_lacation__3ypKR"}},301:function(e,t,n){e.exports={numbers:"style_numbers__26e5a",number:"style_number__3JIkz",number_active:"style_number_active__30ydR"}},305:function(e,t,n){"use strict";n.r(t);var r=n(31),o=n(32),a=n(34),u=n(33),s=n(0),l=n.n(s),i=n(25),c=n(81),f=n(255),p=n.n(f),g=n(241),m=n(301),h=n.n(m),y=function(e){var t=e.totalItemsCount,n=e.pageSize,r=e.switchToAnotherPage,o=e.currentPage,a=e.portionSize,u=Object(s.useState)(1),i=Object(g.a)(u,2),c=i[0],f=i[1],p=Math.ceil(t/n),m=Math.ceil(p/a),y=(c-1)*a+1,b=c*a,d=function(e){return l.a.createElement("span",{key:e,onClick:function(){return r(e)},className:o===e?"".concat(h.a.number," ").concat(h.a.number_active):h.a.number},e)};return l.a.createElement("div",{className:h.a.numbers},c>1&&l.a.createElement("button",{onClick:function(){f(c-1)}},"<"),function(){for(var e=[],t=1;t<=p;t++)t>=y&&t<=b&&e.push(d(t));return e}(),m>c&&l.a.createElement("button",{onClick:function(){f(c+1)}},">"))},b=n(18),d=function(e){var t=e.user,n=e.followingInProgress,r=e.unfollow,o=e.follow;return l.a.createElement("div",{className:p.a.users_wrapper},l.a.createElement("div",{className:p.a.users_face},l.a.createElement(b.b,{to:"/profile/".concat(t.id)},l.a.createElement("img",{src:null===t.photos.small?"https://placem.at/people?w=90&h=90&random=".concat(t.id):t.photos.small,alt:""})),t.followed?l.a.createElement("button",{disabled:n.some((function(e){return e===t.id})),onClick:function(){r(t.id)}},"unfollow"):l.a.createElement("button",{disabled:n.some((function(e){return e===t.id})),onClick:function(){o(t.id)}},"follow")),l.a.createElement("div",{className:p.a.users_about},l.a.createElement("div",null,t.name),l.a.createElement("div",null,t.status),l.a.createElement("div",{className:p.a.users_about_lacation},"user.location.country",",","user.location.city")))},v=function(e){return l.a.createElement("div",{className:p.a.users},l.a.createElement(y,{totalItemsCount:e.totalUsersCount,pageSize:e.pageSize,switchToAnotherPage:e.switchToAnotherPage,currentPage:e.currentPage,portionSize:3}),e.users.map((function(t){return l.a.createElement(d,{key:t.id,user:t,followingInProgress:e.followingInProgress,unfollow:e.unfollow,follow:e.follow})})),l.a.createElement(y,{totalItemsCount:e.totalUsersCount,pageSize:e.pageSize,switchToAnotherPage:e.switchToAnotherPage,currentPage:e.currentPage,portionSize:3}))},w=n(36),_=n(20);function P(e,t){return e===t}function E(e,t,n){if(null===t||null===n||t.length!==n.length)return!1;for(var r=t.length,o=0;o<r;o++)if(!e(t[o],n[o]))return!1;return!0}function S(e){var t=Array.isArray(e[0])?e[0]:e;if(!t.every((function(e){return"function"===typeof e}))){var n=t.map((function(e){return typeof e})).join(", ");throw new Error("Selector creators expect all input-selectors to be functions, instead received the following types: ["+n+"]")}return t}var z=function(e){for(var t=arguments.length,n=Array(t>1?t-1:0),r=1;r<t;r++)n[r-1]=arguments[r];return function(){for(var t=arguments.length,r=Array(t),o=0;o<t;o++)r[o]=arguments[o];var a=0,u=r.pop(),s=S(r),l=e.apply(void 0,[function(){return a++,u.apply(null,arguments)}].concat(n)),i=e((function(){for(var e=[],t=s.length,n=0;n<t;n++)e.push(s[n].apply(null,arguments));return l.apply(null,e)}));return i.resultFunc=u,i.dependencies=s,i.recomputations=function(){return a},i.resetRecomputations=function(){return a=0},i}}((function(e){var t=arguments.length>1&&void 0!==arguments[1]?arguments[1]:P,n=null,r=null;return function(){return E(t,n,arguments)||(r=e.apply(null,arguments)),n=arguments,r}}));var C=z([function(e){return e.usersPage.users}],(function(e){return e.filter((function(e){return!0}))})),A=function(e){return e.usersPage.pageSize},I=function(e){return e.usersPage.totalUsersCount},j=function(e){return e.usersPage.currentPage},k=function(e){return e.usersPage.isFetching},O=function(e){return e.usersPage.followingInProgress},T=function(e){Object(a.a)(n,e);var t=Object(u.a)(n);function n(){var e;Object(r.a)(this,n);for(var o=arguments.length,a=new Array(o),u=0;u<o;u++)a[u]=arguments[u];return(e=t.call.apply(t,[this].concat(a))).switchToAnotherPage=function(t){var n=e.props;(0,n.requestUsers)(t,n.pageSize)},e}return Object(o.a)(n,[{key:"componentDidMount",value:function(){var e=this.props;(0,e.requestUsers)(e.currentPage,e.pageSize)}},{key:"render",value:function(){return l.a.createElement(l.a.Fragment,null,this.props.isFetching?l.a.createElement(w.a,null):null,l.a.createElement(v,{totalUsersCount:this.props.totalUsersCount,pageSize:this.props.pageSize,currentPage:this.props.currentPage,users:this.props.users,unfollow:this.props.unfollow,follow:this.props.follow,switchToAnotherPage:this.switchToAnotherPage,followingInProgress:this.props.followingInProgress}))}}]),n}(l.a.Component);t.default=Object(_.d)(Object(i.b)((function(e){return{users:C(e),pageSize:A(e),totalUsersCount:I(e),currentPage:j(e),isFetching:k(e),followingInProgress:O(e)}}),{follow:c.b,unfollow:c.f,setCurrentPage:c.d,toggleFollowingInProgress:c.e,requestUsers:c.c}))(T)}}]);
//# sourceMappingURL=7.535b551b.chunk.js.map