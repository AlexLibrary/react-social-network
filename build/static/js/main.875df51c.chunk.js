(this["webpackJsonpreact-dmitry"]=this["webpackJsonpreact-dmitry"]||[]).push([[0],{123:function(e,t,n){e.exports=n.p+"static/media/preloaderAnimation.f4e1fcb2.svg"},150:function(e,t,n){e.exports=n(293)},155:function(e,t,n){},234:function(e,t,n){},239:function(e,t,n){},240:function(e,t,n){},241:function(e,t,n){},242:function(e,t,n){},243:function(e,t,n){},281:function(e,t,n){},282:function(e,t,n){},283:function(e,t,n){},284:function(e,t,n){},285:function(e,t,n){},286:function(e,t,n){},287:function(e,t,n){},288:function(e,t,n){},289:function(e,t,n){},290:function(e,t,n){},291:function(e,t,n){},292:function(e,t,n){},293:function(e,t,n){"use strict";n.r(t);var a=n(0),r=n.n(a),c=n(58),o=n.n(c),s=(n(155),n(7)),i=n(118),u=n(10),l=n.n(u),m=n(16),f=n(40),p=n(9),d=n(119),g=n.n(d).a.create({baseURL:"https://social-network.samuraijs.com/api/1.0/",withCredentials:!0,headers:{"API-KEY":"981ab4ac-b16c-4610-9fb4-e41305b3c995"}}),h=function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:1,t=arguments.length>1&&void 0!==arguments[1]?arguments[1]:10;return g.get("users?page=".concat(e,"&count=").concat(t))},E=function(e){return console.warn("Obsolete method. Please profileAPI object!"),b.getProfile(e)},v=function(e){return g.delete("follow/".concat(e))},_=function(e){return g.post("follow/".concat(e))},b={getProfile:function(e){return g.get("profile/".concat(e))},getStatus:function(e){return g.get("profile/status/".concat(e))},updateStatus:function(e){return g.put("profile/status",{status:e})}},P=function(){return g.get("auth/me")},O=function(e,t,n,a){return g.post("auth/login",{email:e,password:t,rememberMe:n,captcha:a})},w=function(){return g.delete("auth/login")},S={posts:[{id:0,message:"it's my first most",likes:511},{id:1,message:"how are you",likes:200},{id:2,message:"hi, how are you",likes:101}],profile:void 0,status:""},j=function(e){return{type:"SET_STATUS",status:e}},I=function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:S,t=arguments.length>1?arguments[1]:void 0;switch(t.type){case"ADD_POST":var n={id:e.posts.length,message:t.newPost,likes:0};return Object(p.a)({},e,{posts:[].concat(Object(f.a)(e.posts),[n])});case"SET_USER_PROFILE":return Object(p.a)({},e,{profile:t.profile});case"SET_STATUS":return Object(p.a)({},e,{status:t.status});case"DELETE_POST":return Object(p.a)({},e,{posts:e.posts.filter((function(e){return e.id!==t.postId}))});default:return e}},y={friends:[{id:0,name:"Dimych"},{id:1,name:"Sveta"},{id:2,name:"Andrey"},{id:3,name:"Alexandra"},{id:4,name:"Viktor"},{id:5,name:"Valera"}],input:{messages:[{id:0,message:"hi"},{id:1,message:"how are you"},{id:2,message:"yo"},{id:3,message:"yo"},{id:4,message:"yo"},{id:5,message:"how are you"},{id:6,message:"yo"}]}},N=function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:y,t=arguments.length>1?arguments[1]:void 0;switch(t.type){case"SEND_MESSAGE":return Object(p.a)({},e,{input:Object(p.a)({},e.input,{messages:[].concat(Object(f.a)(e.input.messages),[{id:e.input.messages.length,message:t.newMessage}])})});default:return e}},A={},k=function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:A;arguments.length>1&&arguments[1];return e},U={users:[],pageSize:100,totalUsersCount:0,currentPage:1,isFetching:!1,followingInProgress:[]},C=function(e){return{type:"FOLLOW",id:e}},T=function(e){return{type:"UNFOLLOW",id:e}},F=function(e){return{type:"SET_CURRENT_PAGE",currentPage:e}},x=function(e){return{type:"TOGGLE_IS_FETCHING",isFetching:e}},L=function(e,t){return{type:"TOGGLE_FOLLOWING_IN_PROGRESS",isFollowing:e,userId:t}},D=function(){var e=Object(m.a)(l.a.mark((function e(t,n,a,r){var c,o;return l.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return t(L(!0,n)),e.next=3,a(n);case 3:c=e.sent,o=c.data,console.log("---data(".concat(a.name,")"),o),0===o.resultCode&&t(r(n)),t(L(!1,n));case 8:case"end":return e.stop()}}),e)})));return function(t,n,a,r){return e.apply(this,arguments)}}(),M=function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:U,t=arguments.length>1?arguments[1]:void 0;switch(t.type){case"SET_USERS":return Object(p.a)({},e,{users:t.users});case"FOLLOW":return Object(p.a)({},e,{users:e.users.map((function(e){return e.id===t.id?Object(p.a)({},e,{followed:!0}):e}))});case"UNFOLLOW":return Object(p.a)({},e,{users:e.users.map((function(e){return e.id===t.id?Object(p.a)({},e,{followed:!1}):e}))});case"SET_CURRENT_PAGE":return Object(p.a)({},e,{currentPage:t.currentPage});case"SET_TOTAL_USERS_COUNT":return Object(p.a)({},e,{totalUsersCount:t.count});case"TOGGLE_IS_FETCHING":return Object(p.a)({},e,{isFetching:t.isFetching});case"TOGGLE_FOLLOWING_IN_PROGRESS":return Object(p.a)({},e,{followingInProgress:t.isFollowing?[].concat(Object(f.a)(e.followingInProgress),[t.userId]):e.followingInProgress.filter((function(e){return e!==t.userId}))});default:return e}},z=n(33),G={userId:null,email:null,login:null,isAuth:!1},R=function(e,t,n,a){return{type:"authPart/SET_AUTH_USER_DATA",payload:{userId:e,email:t,login:n,isAuth:a}}},W=function(){return function(){var e=Object(m.a)(l.a.mark((function e(t){var n,a,r,c,o,s;return l.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,P();case 2:n=e.sent,a=n.data,console.log("---data(authAPI.me)",a),0===a.resultCode&&(r=a.data,c=r.id,o=r.email,s=r.login,t(R(c,o,s,!0)));case 6:case"end":return e.stop()}}),e)})));return function(t){return e.apply(this,arguments)}}()},H=function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:G,t=arguments.length>1?arguments[1]:void 0;switch(t.type){case"authPart/SET_AUTH_USER_DATA":return Object(p.a)({},e,{},t.payload);default:return e}},V={initialized:!1},q=function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:V,t=arguments.length>1?arguments[1]:void 0;switch(t.type){case"INITIALIZED_SUCCESS":return Object(p.a)({},e,{initialized:!0});default:return e}},J=n(117),B=Object(s.c)({profile:I,dialogPage:N,sidebar:k,usersPage:M,authPart:H,form:J.a,app:q}),Z=Object(s.e)(B,Object(s.a)(i.a)),K=Z;window.store=Z;var Y,$=n(21),Q=n(22),X=n(24),ee=n(23),te=(n(234),n(11)),ne="Header",ae=function(e){return r.a.createElement("div",{className:"".concat(ne)},r.a.createElement("img",{src:"./bg-header.jpg",alt:""}),r.a.createElement("div",{className:"container"},r.a.createElement("div",{className:"".concat(ne,"__login")},e.isAuth?r.a.createElement("div",null,e.login,r.a.createElement("button",{onClick:e.logout},"LOGOUT")):r.a.createElement(te.b,{to:"/login"},"Login"))))},re=n(8),ce=function(e){Object(X.a)(n,e);var t=Object(ee.a)(n);function n(){return Object($.a)(this,n),t.apply(this,arguments)}return Object(Q.a)(n,[{key:"render",value:function(){return r.a.createElement(ae,this.props)}}]),n}(r.a.Component),oe=Object(re.b)((function(e){return{isAuth:e.authPart.isAuth,login:e.authPart.login}}),{logout:function(){return function(){var e=Object(m.a)(l.a.mark((function e(t){var n,a;return l.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,w();case 2:n=e.sent,a=n.data,console.log("---data(authAPI.logout)",a),0===a.resultCode&&t(R(null,null,null,!1));case 6:case"end":return e.stop()}}),e)})));return function(t){return e.apply(this,arguments)}}()}})(ce),se=(n(239),n(240),function(){return r.a.createElement("nav",{className:"".concat("Page_Sidebar_Menu")},r.a.createElement(te.b,{to:"/profile"},"Profile"),r.a.createElement(te.b,{to:"/dialogs"},"Dialogs"),r.a.createElement(te.b,{to:"/users"},"Users"),r.a.createElement(te.b,{to:"/news"},"News"),r.a.createElement(te.b,{to:"/music"},"Music"),r.a.createElement(te.b,{to:"/settings"},"Settings"))}),ie=function(){return r.a.createElement("div",{className:"".concat("Page_Sidebar")},r.a.createElement(se,null))},ue=n(30),le=(n(241),n(115)),me=n(116),fe=n(84),pe=(n(242),function(e){var t=e.input,n=e.meta,a=n.touched,c=n.error,o=Object(fe.a)(e,["input","meta"]),s=a&&c;return r.a.createElement("div",{className:s?"".concat("reduxFormFields"," error"):"".concat("reduxFormFields")},r.a.createElement("div",null,r.a.createElement("textarea",Object.assign({},t,o))),s&&r.a.createElement("span",null,c))}),de=function(e){var t=e.input,n=e.meta,a=n.touched,c=n.error,o=Object(fe.a)(e,["input","meta"]),s=a&&c;return r.a.createElement("div",{className:s?"".concat("reduxFormFields"," error"):"".concat("reduxFormFields")},r.a.createElement("div",null,r.a.createElement("input",Object.assign({},t,o))),s&&r.a.createElement("span",null,c))},ge=function(e,t,n){var a=arguments.length>3&&void 0!==arguments[3]?arguments[3]:[],c=arguments.length>4&&void 0!==arguments[4]?arguments[4]:{},o=arguments.length>5&&void 0!==arguments[5]?arguments[5]:"";return r.a.createElement("div",null,r.a.createElement(le.a,Object.assign({name:e,component:t,placeholder:n,validate:a},c))," ",o)},he=function(e){if(!e)return"Field is required"},Ee=(Y=10,function(e){if(e&&e.length>Y)return"Max length > ".concat(Y)}),ve=(n(243),Object(me.a)({form:"dialogs-add-message"})((function(e){return r.a.createElement("form",{className:"".concat("Page_Items_Dialogs_Form"),onSubmit:e.handleSubmit},r.a.createElement("div",null,r.a.createElement(le.a,{name:"textarea",component:pe,placeholder:"Write a post...",validate:[he,Ee]})),r.a.createElement("div",null,r.a.createElement("button",null,"Send")))}))),_e=function(e){var t=e.dialogPage.friends.map((function(e){return r.a.createElement(te.b,{to:"/dialogs/".concat(e.id),key:e.id},e.name)})),n=e.dialogPage.input.messages.map((function(e){return r.a.createElement("div",{key:e.id},e.message)}));return r.a.createElement("div",{className:"".concat("Page_Items_Dialogs")},r.a.createElement("h1",null,"Dialogs"),r.a.createElement("div",{className:"".concat("Page_Items_Dialogs","__wrapper")},r.a.createElement("div",{className:"".concat("Page_Items_Dialogs","__wrapper__friends")},t),r.a.createElement("div",{className:"".concat("Page_Items_Dialogs","__wrapper__messages")},n,r.a.createElement(ve,{onSubmit:function(t){e.sendMessage(t.textarea)}}))))},be=function(e){return{isAuth:e.authPart.isAuth}},Pe=Object(s.d)(Object(re.b)((function(e){return{dialogPage:e.dialogPage}}),(function(e){return{sendMessage:function(t){e(function(e){return{type:"SEND_MESSAGE",newMessage:e}}(t))}}})),(function(e){var t=function(t){Object(X.a)(a,t);var n=Object(ee.a)(a);function a(){return Object($.a)(this,a),n.apply(this,arguments)}return Object(Q.a)(a,[{key:"render",value:function(){return this.props.isAuth?r.a.createElement(e,this.props):r.a.createElement(ue.a,{to:"/login"})}}]),a}(r.a.Component);return Object(re.b)(be)(t)}))(_e),Oe=(n(281),n(282),function(e){var t=function(){return e.posts.map((function(t){return r.a.createElement("div",{className:"".concat("Page_Items_Profile_Posts","__items"),key:t.id},r.a.createElement("img",{src:e.profile.photos.small?e.profile.photos.small:"https://placem.at/people?w=70&h=70&random=1",alt:""}),t.message,r.a.createElement("div",{className:"".concat("Page_Items_Profile_Posts","__likes")},"likes: ",t.likes))}))};return r.a.createElement("div",{className:"".concat("Page_Items_Profile_Posts")},r.a.createElement("h2",null,"My posts"),r.a.createElement(t,null))}),we=Object(re.b)((function(e){return{posts:e.profile.posts,profile:e.profile.profile}}),(function(e){return{}}))(Oe),Se=(n(283),Object(me.a)({form:"profileAddPostForm"})((function(e){return r.a.createElement("form",{className:"".concat("Page_Items_Profile_AddPost"),onSubmit:e.handleSubmit},r.a.createElement("div",null,r.a.createElement(le.a,{name:"textarea",component:pe,placeholder:"Write a post...",validate:[he,Ee]})),r.a.createElement("div",null,r.a.createElement("button",null,"Send")))}))),je=function(e){return r.a.createElement(Se,{onSubmit:function(t){e.addPost(t.textarea)}})},Ie=Object(re.b)((function(e){return{inputValue:e.profile.inputValue}}),(function(e){return{addPost:function(t){e(function(e){return{type:"ADD_POST",newPost:e}}(t))}}}))(je),ye=(n(284),n(83)),Ne=function(e){var t=Object(a.useState)(!1),n=Object(ye.a)(t,2),c=n[0],o=n[1],s=Object(a.useState)(e.status),i=Object(ye.a)(s,2),u=i[0],l=i[1];Object(a.useEffect)((function(){l(e.status)}),[e.status]);return r.a.createElement("div",{className:"".concat("Page_Items_Profile_About_Status")},r.a.createElement("span",null,"Status:"),!c&&r.a.createElement("div",{className:"".concat("Page_Items_Profile_About_Status","__output"),onClick:function(){o(!0)}},r.a.createElement("span",null,e.status||"------")),c&&r.a.createElement("div",{className:"".concat("Page_Items_Profile_About_Status","__input")},r.a.createElement("input",{autoFocus:!0,value:u,onBlur:function(){o(!1),e.updateStatus(u)},onChange:function(e){l(e.target.value)}})))},Ae=function(e){return r.a.createElement("div",{className:"".concat("Page_Items_Profile_About")},r.a.createElement("div",null,r.a.createElement("img",{src:e.profile.photos.large?e.profile.photos.large:"https://placem.at/people?w=300&h=300&random=1",alt:"largePhoto"})),r.a.createElement("div",null,r.a.createElement(Ne,{status:e.status,updateStatus:e.updateStatus})),r.a.createElement("div",null,r.a.createElement("h1",null,"".concat(e.profile.fullName)),r.a.createElement("h2",null,"\u041e\u0431\u043e \u043c\u043d\u0435"),"".concat(e.profile.aboutMe),r.a.createElement("h2",null,"\u041a\u043e\u043d\u0442\u0430\u043a\u0442\u044b"),r.a.createElement("pre",null,r.a.createElement("div",null,"facebook:    ".concat(e.profile.contacts.facebook)),r.a.createElement("div",null,"website:     ".concat(e.profile.contacts.website)),r.a.createElement("div",null,"vk:          ".concat(e.profile.contacts.vk)),r.a.createElement("div",null,"twitter:     ".concat(e.profile.contacts.twitter)),r.a.createElement("div",null,"instagram:   ".concat(e.profile.contacts.instagram)),r.a.createElement("div",null,"youtube:     ".concat(e.profile.contacts.youtube)),r.a.createElement("div",null,"github:      ".concat(e.profile.contacts.github)),r.a.createElement("div",null,"mainLink:    ".concat(e.profile.contacts.mainLink))),e.profile.lookingForAJob?r.a.createElement("div",null,r.a.createElement("h2",null,"\u0418\u0449\u0443 \u0440\u0430\u0431\u043e\u0442\u0443")," ",e.profile.lookingForAJobDescription):void 0))},ke=n(123),Ue=n.n(ke),Ce=(n(285),function(){return r.a.createElement("div",{className:"".concat("Preloader")},r.a.createElement("img",{src:Ue.a,alt:"loading..."}))}),Te=function(e){return e.profile?r.a.createElement("div",{className:"".concat("Page_Items_Profile")},r.a.createElement("h1",null,"Id_",e.profile.userId),r.a.createElement(Ae,{profile:e.profile,status:e.status,updateStatus:e.updateStatus}),r.a.createElement(we,null),r.a.createElement(Ie,null)):r.a.createElement(Ce,null)},Fe=function(e){Object(X.a)(n,e);var t=Object(ee.a)(n);function n(){return Object($.a)(this,n),t.apply(this,arguments)}return Object(Q.a)(n,[{key:"componentDidMount",value:function(){var e=this.props.match.params.userId;e||(e=this.props.userId)||this.props.history.push("/login"),this.props.getUserProfile(e),this.props.getStatus(e)}},{key:"render",value:function(){return r.a.createElement(r.a.Fragment,null,r.a.createElement(Te,this.props))}}]),n}(r.a.Component),xe=Object(s.d)(Object(re.b)((function(e){return{profile:e.profile.profile,status:e.profile.status,userId:e.authPart.userId,isAuth:e.authPart.isAuth}}),{getUserProfile:function(e){return function(){var t=Object(m.a)(l.a.mark((function t(n){var a,r;return l.a.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return t.next=2,E(e);case 2:a=t.sent,r=a.data,console.log("---data(usersAPI.getProfile)",r),n({type:"SET_USER_PROFILE",profile:r});case 6:case"end":return t.stop()}}),t)})));return function(e){return t.apply(this,arguments)}}()},getStatus:function(e){return function(){var t=Object(m.a)(l.a.mark((function t(n){var a,r;return l.a.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return t.next=2,b.getStatus(e);case 2:a=t.sent,r=a.data,console.log("---data(profileAPI.getStatus)",r),n(j(r));case 6:case"end":return t.stop()}}),t)})));return function(e){return t.apply(this,arguments)}}()},updateStatus:function(e){return function(){var t=Object(m.a)(l.a.mark((function t(n){var a,r;return l.a.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return t.next=2,b.updateStatus(e);case 2:a=t.sent,r=a.data,console.log("---data(profileAPI.updateStatus)",r),0===r.resultCode&&n(j(e));case 6:case"end":return t.stop()}}),t)})));return function(e){return t.apply(this,arguments)}}()}}),ue.f)(Fe),Le=(n(286),function(e){return r.a.createElement("div",{className:"".concat("Page_Items_Users")},r.a.createElement("div",{className:"".concat("Page_Items_Users","__lists")},function(){for(var t=[],n=Math.ceil(e.totalUsersCount/e.pageSize),a=function(n){t.push(r.a.createElement("span",{key:n,onClick:function(){return e.handleClick(n)},className:e.currentPage===n?"".concat("Page_Items_Users","__lists__item active"):"".concat("Page_Items_Users","__lists__item")},n))},c=1;c<=n;c++)a(c);return t}()),e.users.map((function(t){return r.a.createElement("div",{key:t.id},r.a.createElement("div",{className:"".concat("Page_Items_Users","__wrapper")},r.a.createElement("div",{className:"".concat("Page_Items_Users","__face")},r.a.createElement(te.b,{to:"/profile/".concat(t.id)},r.a.createElement("img",{src:null===t.photos.small?"https://placem.at/people?w=90&h=90&random=".concat(t.id):t.photos.small,alt:""})),t.followed?r.a.createElement("button",{disabled:e.followingInProgress.some((function(e){return e===t.id})),onClick:function(){e.unfollow(t.id)}},"unfollow"):r.a.createElement("button",{disabled:e.followingInProgress.some((function(e){return e===t.id})),onClick:function(){e.follow(t.id)}},"follow")),r.a.createElement("div",{className:"".concat("Page_Items_Users","__about")},r.a.createElement("div",{className:"".concat("Page_Items_Users","__about__fullname")},t.name),r.a.createElement("div",{className:"".concat("Page_Items_Users","__about__status")},t.status),r.a.createElement("div",{className:"".concat("Page_Items_Users","__about__lacation")},"user.location.country",",","user.location.city"))))})))}),De=n(124),Me=Object(De.a)([function(e){return e.usersPage.users}],(function(e){return e.filter((function(e){return!0}))})),ze=function(e){return e.usersPage.pageSize},Ge=function(e){return e.usersPage.totalUsersCount},Re=function(e){return e.usersPage.currentPage},We=function(e){return e.usersPage.isFetching},He=function(e){return e.usersPage.followingInProgress},Ve=function(e){Object(X.a)(n,e);var t=Object(ee.a)(n);function n(){var e;Object($.a)(this,n);for(var a=arguments.length,r=new Array(a),c=0;c<a;c++)r[c]=arguments[c];return(e=t.call.apply(t,[this].concat(r))).handleClick=function(t){e.props.requestUsers(t,e.props.pageSize)},e}return Object(Q.a)(n,[{key:"componentDidMount",value:function(){this.props.requestUsers(this.props.currentPage,this.props.pageSize)}},{key:"render",value:function(){return r.a.createElement(r.a.Fragment,null,this.props.isFetching?r.a.createElement(Ce,null):null,r.a.createElement(Le,{totalUsersCount:this.props.totalUsersCount,pageSize:this.props.pageSize,currentPage:this.props.currentPage,users:this.props.users,unfollow:this.props.unfollow,follow:this.props.follow,handleClick:this.handleClick,followingInProgress:this.props.followingInProgress}))}}]),n}(r.a.Component),qe=Object(s.d)(Object(re.b)((function(e){return{users:Me(e),pageSize:ze(e),totalUsersCount:Ge(e),currentPage:Re(e),isFetching:We(e),followingInProgress:He(e)}}),{follow:function(e){return function(){var t=Object(m.a)(l.a.mark((function t(n){return l.a.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:D(n,e,_,C);case 1:case"end":return t.stop()}}),t)})));return function(e){return t.apply(this,arguments)}}()},unfollow:function(e){return function(){var t=Object(m.a)(l.a.mark((function t(n){return l.a.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:D(n,e,v,T);case 1:case"end":return t.stop()}}),t)})));return function(e){return t.apply(this,arguments)}}()},setCurrentPage:F,toggleFollowingInProgress:L,requestUsers:function(e,t){return function(){var n=Object(m.a)(l.a.mark((function n(a){var r,c;return l.a.wrap((function(n){for(;;)switch(n.prev=n.next){case 0:return a(x(!0)),a(F(e)),n.next=4,h(e,t);case 4:r=n.sent,c=r.data,console.log("---data(usersAPI.getUsers)",c),a(x(!1)),a({type:"SET_USERS",users:c.items}),a({type:"SET_TOTAL_USERS_COUNT",count:c.totalCount});case 10:case"end":return n.stop()}}),n)})));return function(e){return n.apply(this,arguments)}}()}}))(Ve),Je=(n(287),Object(me.a)({form:"login"})((function(e){var t=e.handleSubmit,n=e.error;return r.a.createElement("form",{onSubmit:t},ge("email",de,"email...",[he]),ge("password",de,"Password...",[he],{type:"password"}),ge("rememberMe",de,null,null,{type:"checkbox"},"remember me"),r.a.createElement("div",{className:"".concat("Page_Items_Login","__summaryError")},n&&n),r.a.createElement("div",null,r.a.createElement("button",null,"Login")))}))),Be=Object(re.b)((function(e){return{isAuth:e.authPart.isAuth}}),{login:function(e,t){var n=arguments.length>2&&void 0!==arguments[2]?arguments[2]:void 0,a=arguments.length>3&&void 0!==arguments[3]?arguments[3]:void 0;return function(){var r=Object(m.a)(l.a.mark((function r(c){var o,s,i;return l.a.wrap((function(r){for(;;)switch(r.prev=r.next){case 0:return r.next=2,O(e,t,n,a);case 2:o=r.sent,s=o.data,console.log("---data(authAPI.login)",s),0===s.resultCode?c(W()):(i=s.messages.length>0?s.messages[0]:"Some error",c(Object(z.a)("login",{_error:i})));case 6:case"end":return r.stop()}}),r)})));return function(e){return r.apply(this,arguments)}}()}})((function(e){return e.isAuth?r.a.createElement(ue.a,{to:"/profile"}):r.a.createElement("div",{className:"".concat("Page_Items_Login")},r.a.createElement("h1",null,"LOGIN"),r.a.createElement(Je,{onSubmit:function(t){e.login(t.email,t.password)}}))})),Ze=(n(288),function(){return r.a.createElement("div",{className:"".concat("Page_Items")},r.a.createElement(ue.b,{path:"/dialogs",render:function(){return r.a.createElement(Pe,null)}}),r.a.createElement(ue.b,{path:"/profile/:userId?",render:function(){return r.a.createElement(xe,null)}}),r.a.createElement(ue.b,{path:"/users",render:function(){return r.a.createElement(qe,null)}}),r.a.createElement(ue.b,{path:"/login",render:function(){return r.a.createElement(Be,null)}}))}),Ke=(n(289),function(){return r.a.createElement("div",{className:"".concat("Page")},r.a.createElement(ie,null),r.a.createElement(Ze,null))}),Ye=(n(290),n(291),r.a.createElement("svg",{className:"svg_git"},r.a.createElement("symbol",{id:"git",viewBox:"0 0 31.457 31.457"},r.a.createElement("g",null,r.a.createElement("path",{d:"M17.199,0c-0.664,0-1.233,0.252-1.705,0.757C15.024,1.261,14.79,1.87,14.79,2.581c0,0.688,0.236,1.285,0.705,1.79 c0.471,0.504,1.039,0.757,1.705,0.757c0.642,0,1.199-0.252,1.67-0.757c0.47-0.505,0.705-1.102,0.705-1.79 c0-0.711-0.235-1.319-0.705-1.824C18.398,0.252,17.841,0,17.199,0z"}),r.a.createElement("path",{d:"M27.322,19.79c-1.01,0-1.508-0.769-1.508-2.306v-6.07h3.176V7.619H25.81c-0.012-0.5-0.04-1.651-0.06-2.191h-3.709v2.191 h-2.049v3.794h2.049v5.897c0,1.928,0.242,3.34,0.727,4.233c0.643,1.194,1.77,1.79,3.443,1.79c1.193,0,2.244-0.229,3.031-0.688 v-3.441C28.615,19.596,28.033,19.79,27.322,19.79z"}),r.a.createElement("path",{d:"M15.005,7.674c-1.348,0.526-2.603,0.793-3.681,0.793c-0.962-0.551-1.96-0.826-3.084-0.826 c-1.561,0-2.901,0.516-4.026,1.548c-1.17,1.102-1.757,2.479-1.757,4.13c0,1.102,0.318,2.133,0.963,3.097 c0.573,0.895,1.173,1.469,1.958,1.721v0.069c-0.785,0.321-1.134,1.124-1.134,2.41c0,0.987,0.349,1.721,1.134,2.202v0.07 c-2.17,0.709-3.163,2.029-3.163,3.957c0,1.676,0.729,2.902,2.153,3.682c1.123,0.619,2.567,0.93,4.311,0.93 c4.244,0,6.371-1.777,6.371-5.335c0-2.226-1.638-3.591-4.919-4.097c-0.759-0.114-1.329-0.389-1.72-0.825 c-0.299-0.3-0.445-0.597-0.445-0.896c0-0.85,0.458-1.343,1.377-1.479c1.398-0.207,2.539-0.854,3.425-1.944 c0.882-1.09,1.324-2.37,1.324-3.838c0-0.458-0.139-0.952-0.321-1.479c0.541-0.126,0.931-0.24,1.234-0.347v12.102h4.155V6.953 h-4.155V7.674z M8.619,24.814c1.928,0,2.891,0.586,2.891,1.754c0,1.24-0.883,1.859-2.65,1.859c-2.019,0-3.027-0.597-3.027-1.789 C5.831,25.423,6.761,24.814,8.619,24.814z M8.378,15.729c-1.445,0-2.168-0.792-2.168-2.375c0-1.698,0.723-2.547,2.168-2.547 c0.689,0,1.229,0.264,1.617,0.792c0.321,0.481,0.481,1.055,0.481,1.721C10.477,14.926,9.778,15.729,8.378,15.729z"}))),r.a.createElement("use",{xlinkHref:"#git"}))),$e=function(){return r.a.createElement("div",{className:"".concat("FooterAnotation")},r.a.createElement("a",{href:"https://github.com/AlexLibrary",target:"blank"},Ye))},Qe=function(){return r.a.createElement("div",{className:"".concat("Footer")},r.a.createElement("div",{className:"container"},r.a.createElement($e,null)))},Xe=(n(292),function(e){Object(X.a)(n,e);var t=Object(ee.a)(n);function n(){return Object($.a)(this,n),t.apply(this,arguments)}return Object(Q.a)(n,[{key:"componentDidMount",value:function(){this.props.initializeApp()}},{key:"render",value:function(){return this.props.initialized?r.a.createElement("div",{className:"".concat("App")},r.a.createElement(oe,null),r.a.createElement(Ke,null),r.a.createElement(Qe,null)):r.a.createElement(Ce,null)}}]),n}(r.a.Component)),et=Object(re.b)((function(e){return{initialized:e.app.initialized}}),{initializeApp:function(){return function(e){var t=e(W());Promise.all([t]).then((function(){e({type:"INITIALIZED_SUCCESS"})}))}}})(Xe);Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));o.a.render(r.a.createElement(te.a,null,r.a.createElement(re.a,{store:K},r.a.createElement(et,null))),document.querySelector(".root")),"serviceWorker"in navigator&&navigator.serviceWorker.ready.then((function(e){e.unregister()})).catch((function(e){console.error(e.message)}))}},[[150,1,2]]]);
//# sourceMappingURL=main.875df51c.chunk.js.map