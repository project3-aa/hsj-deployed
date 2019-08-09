(window.webpackJsonp=window.webpackJsonp||[]).push([[0],{183:function(e,t,a){e.exports=a(463)},188:function(e,t,a){},189:function(e,t,a){},207:function(e,t,a){},254:function(e,t,a){},262:function(e,t,a){},263:function(e,t,a){},264:function(e,t,a){},265:function(e,t,a){},266:function(e,t,a){},463:function(e,t,a){"use strict";a.r(t);var n=a(0),r=a.n(n),i=a(47),l=a.n(i),s=(a(188),a(3)),o=a(4),c=a(6),u=a(5),p=a(7),m=(a(189),a(36)),d=a(8),h=a.n(d),E=function e(){var t=this;Object(s.a)(this,e),this.signup=function(e,a){return t.service.post("/signup",{username:e,password:a}).then(function(e){return e.data})},this.login=function(e,a){return t.service.post("/login",{username:e,password:a}).then(function(e){return e.data})},this.currentUser=function(){return t.service.get("/getcurrentuser").then(function(e){return e.data})},this.logout=function(){return t.service.post("/logout",{}).then(function(e){return e.data})};var a=h.a.create({baseURL:"".concat(Object({NODE_ENV:"production",PUBLIC_URL:""}).REACT_APP_BASE,"/auth"),withCredentials:!0});this.service=a},g=a(9),f=(a(207),a(10)),v=(a(79),a(23));a.e(8).then(a.t.bind(null,464,7));var b=function(e){function t(e){var a;return Object(s.a)(this,t),(a=Object(c.a)(this,Object(u.a)(t).call(this,e))).handleChange=function(e){a.setState(Object(g.a)({},e.target.name,e.target.value))},a.tryToLogin=function(e){e.preventDefault();var t=a.state.usernameInput,n=a.state.passwordInput;a.service.login(t,n).then(function(){a.props.getUser(function(){a.props.history.push("/userHomepage")})})},a.state={usernameInput:"",passwordInput:""},a.service=new E,a}return Object(p.a)(t,e),Object(o.a)(t,[{key:"render",value:function(){return r.a.createElement("div",null,r.a.createElement(v.Button,{href:"#loginModal",className:"loginBtn modal-trigger"},"Log In"),r.a.createElement(v.Modal,{id:"loginModal"},r.a.createElement("h5",null,"Login"),r.a.createElement("form",{onSubmit:this.tryToLogin},r.a.createElement("div",{className:"login-input-field input-field col s6"},r.a.createElement("i",{className:"material-icons prefix"},"account_circle"),r.a.createElement("input",{id:"loginIcon",type:"text",className:"validate",autoComplete:"username",value:this.state.usernameInput,name:"usernameInput",onChange:this.handleChange}),r.a.createElement("label",{htmlFor:"loginIcon"},"First Name")),r.a.createElement("div",{className:"login-input-field input-field col s6"},r.a.createElement("i",{className:"material-icons prefix"},"lock"),r.a.createElement("input",{id:"icon_lock",type:"password",className:"validate",autoComplete:"current-password",value:this.state.passwordInput,name:"passwordInput",onChange:this.handleChange}),r.a.createElement("label",{htmlFor:"icon_lock"},"Password")),r.a.createElement("button",{type:"submit",className:"accountLogin btn #5CA4A9 modal-close"},"Login"))))}}]),t}(n.Component),y=(a(254),function(e){function t(e){var a;return Object(s.a)(this,t),(a=Object(c.a)(this,Object(u.a)(t).call(this,e))).handleChange=function(e){a.setState(Object(g.a)({},e.target.name,e.target.value))},a.tryToSignUp=function(e){e.preventDefault();var t=a.state.usernameInput,n=a.state.passwordInput;a.service.signup(t,n).then(function(){a.props.getUser()})},a.state={usernameInput:"",passwordInput:""},a.service=new E,a}return Object(p.a)(t,e),Object(o.a)(t,[{key:"render",value:function(){return r.a.createElement("div",null,r.a.createElement(v.Button,{href:"#modal2",className:"signUpBtn modal-trigger"},"Sign Up"),r.a.createElement(v.Modal,{id:"modal2"},r.a.createElement("h5",null,"Sign Up For An Account"),r.a.createElement("form",{onSubmit:this.tryToSignUp},r.a.createElement("div",{className:"input-field col s6"},r.a.createElement("i",{className:"material-icons prefix"},"account_circle"),r.a.createElement("input",{id:"signupIcon",type:"text",className:"validate",autoComplete:"username",value:this.state.usernameInput,name:"usernameInput",onChange:this.handleChange}),r.a.createElement("label",{htmlFor:"signupIcon"},"Username")),r.a.createElement("div",{className:"input-field col s6"},r.a.createElement("i",{className:"material-icons prefix"},"lock"),r.a.createElement("input",{id:"signupLock",type:"password",className:"validate",autoComplete:"new-password",value:this.state.passwordInput,name:"passwordInput",onChange:this.handleChange}),r.a.createElement("label",{htmlFor:"signupIcon"},"Password")),r.a.createElement("div",{className:"input-field col s6"},r.a.createElement("i",{className:"material-icons prefix"},"lock"),r.a.createElement("input",{id:"signupLock2",type:"password",autoComplete:"new-password",className:"validate"}),r.a.createElement("label",{htmlFor:"signupLock2"},"Password Repeat")),r.a.createElement("button",{className:"accountSignupBtn btn #5CA4A9 modal-close"},"Signup"))))}}]),t}(n.Component)),w=function(e){function t(e){var a;return Object(s.a)(this,t),(a=Object(c.a)(this,Object(u.a)(t).call(this,e))).doTheLogout=function(){a.props.pleaseLogOut().then(function(){a.props.getUser(),a.props.history.push("/")})},a.toggleForm=function(e){var t;"signup"===e?t="signupShowing":"login"===e&&(t="loginShowing"),a.setState(Object(g.a)({},t,!a.state[t]))},a.state={signupShowing:!1,loginShowing:!1},a}return Object(p.a)(t,e),Object(o.a)(t,[{key:"render",value:function(){return r.a.createElement("div",{className:"HomePage"},r.a.createElement("nav",{className:"transparent"},r.a.createElement("div",{className:"nav-wrapper"},r.a.createElement(f.b,{to:"/"},r.a.createElement("img",{src:"/images/hsjLogo.png",alt:"HSJLOGO",className:"brand-logo center"})),r.a.createElement("ul",{id:"nav-mobile",className:"right hide-on-med-and-down"},r.a.createElement("li",null,r.a.createElement(f.b,{to:"/userHomepage",className:"userHomePage"},"User Homepage")),this.state.signupShowing&&r.a.createElement(y,{getUser:this.getCurrentlyLoggedInUser,toggleForm:this.toggleForm}),r.a.createElement("li",null,r.a.createElement(b,Object.assign({},this.props,{getUser:this.props.getUser}))),r.a.createElement("li",null,r.a.createElement(y,Object.assign({},this.props,{getUser:this.props.getUser}))),r.a.createElement("button",{className:"btn",onClick:this.doTheLogout},"Log Out ")))))}}]),t}(n.Component),C=(a(257),a(180));a.e(3).then(a.t.bind(null,465,7));var O=function(e){function t(e){var a;return Object(s.a)(this,t),(a=Object(c.a)(this,Object(u.a)(t).call(this,e))).state={},a}return Object(p.a)(t,e),Object(o.a)(t,[{key:"render",value:function(){return r.a.createElement("div",null,r.a.createElement("header",{id:"navOverlay",className:"navHeader"},r.a.createElement("div",{className:"typewriter navOneLiner"},r.a.createElement("h3",null,"Be a travler, ",r.a.createElement("br",null),"not a tourist."))),r.a.createElement("div",{id:"mid-body",className:"flex-container"},r.a.createElement("span",null,r.a.createElement("em",null,"Travel"),r.a.createElement("br",null),"Reimagined"),r.a.createElement("span",null,r.a.createElement("em",null,"Jump"),r.a.createElement("br",null),"Where To?"),r.a.createElement("span",null,r.a.createElement("em",null,"Skip"),r.a.createElement("br",null),"To Cities"),r.a.createElement("span",null,r.a.createElement("em",null,"Hops"),r.a.createElement("br",null),"Where to go?")),r.a.createElement(C.Carousel,{autoPlay:!0,infiniteLoop:!0,width:"800px",showStatus:!1,className:"carousel"},r.a.createElement("div",null,r.a.createElement("img",{src:"/images/japan.png",alt:"image1"})),r.a.createElement("div",null,r.a.createElement("img",{src:"/images/tower.png",alt:"image2"})),r.a.createElement("div",null,r.a.createElement("img",{src:"/images/venice.png",alt:"image3"}))),r.a.createElement("div",{id:"mid-body",className:"flex-container"},r.a.createElement("span",null,r.a.createElement("em",null,"Travel"),r.a.createElement("br",null),"Reimagined"),r.a.createElement("span",null,r.a.createElement("em",null,"Jump"),r.a.createElement("br",null),"Where To?"),r.a.createElement("span",null,r.a.createElement("em",null,"Skip"),r.a.createElement("br",null),"To Cities"),r.a.createElement("span",null,r.a.createElement("em",null,"Hops"),r.a.createElement("br",null),"Where to go?")))}}]),t}(n.Component);a.e(4).then(a.t.bind(null,466,7));var k=function(e){function t(e){var a;return Object(s.a)(this,t),(a=Object(c.a)(this,Object(u.a)(t).call(this,e))).showAllUserJumps=function(){return a.state.userJumps.map(function(e){return r.a.createElement("div",{key:e._id,class:"card eachUserCard"},r.a.createElement("img",{src:e.image,className:"card-img-top",alt:"..."}),r.a.createElement("div",{className:"card-body"},r.a.createElement("h5",{className:"card-title"},e.start," ",r.a.createElement("i",{id:"plane",className:"material-icons prefix cardPlane"},"airplanemode_active")," ",e.end),r.a.createElement("p",null,e.duration," Days"),r.a.createElement("p",{className:"card-text"},e.description)),r.a.createElement("div",{className:"card-action"},r.a.createElement(f.b,{to:"/viewJump/".concat(e._id),className:"homelink"},"View this Jump")))})},a.state={userJumps:[]},a}return Object(p.a)(t,e),Object(o.a)(t,[{key:"getAllUserJumps",value:function(e){var t=this;h.a.get("".concat(Object({NODE_ENV:"production",PUBLIC_URL:""}).REACT_APP_BASE,"/jump/userJumps/").concat(e)).then(function(e){t.setState({userJumps:e.data})}).catch(function(e){console.log(e)})}},{key:"componentDidMount",value:function(){this.getAllUserJumps(this.props.theUser._id)}},{key:"getTotalUserSkips",value:function(){var e=0;return this.state.userJumps.forEach(function(t){return e+=t.skip.length}),e}},{key:"getTotalUserJumps",value:function(){return this.state.userJumps.length}},{key:"render",value:function(){return console.log(this.state),r.a.createElement("div",{className:"userHome"},r.a.createElement("div",{className:"userLinks"},r.a.createElement(f.b,{to:"/createJump"},"CREATE A NEW JUMP"),r.a.createElement(f.b,{to:"/allJumps"},"ALL JUMPS")),r.a.createElement("hr",null),r.a.createElement("p",null,"Travler ",this.props.theUser.username),r.a.createElement("div",{className:"lifeTime"},r.a.createElement("p",null," ",this.getTotalUserJumps()," lifetime Jumps"),r.a.createElement("hr",null),r.a.createElement("p",null," ",this.getTotalUserSkips()," lifetime skips")),r.a.createElement("div",{className:"allUserCards"},this.showAllUserJumps()))}}]),t}(n.Component);a.e(6).then(a.t.bind(null,467,7));var S=function(e){function t(e){var a;return Object(s.a)(this,t),(a=Object(c.a)(this,Object(u.a)(t).call(this,e))).state={},a}return Object(p.a)(t,e),Object(o.a)(t,[{key:"render",value:function(){return r.a.createElement("div",null,r.a.createElement("h1",null,"WELCOME TO ALL USER JUMPS!!!"))}}]),t}(n.Component),j=(a(262),function(e){function t(e){var a;return Object(s.a)(this,t),(a=Object(c.a)(this,Object(u.a)(t).call(this,e))).handleFormSubmit=function(e){e.preventDefault(),h.a.post("".concat(Object({NODE_ENV:"production",PUBLIC_URL:""}).REACT_APP_BASE,"/hop/newHop"),{poi:a.state.newHopAttraction,arrivedBy:a.state.newHopMot,description:a.state.newHopDescription,hopOwner:a.props.hopOwner},{withCredentials:!0}).then(function(){a.setState({newHopAttraction:"",newHopMot:"",newHopDescription:""}),a.props.showJumpAgain()}).catch(function(e){return console.log(e)})},a.handleChange=function(e){var t=e.target,n=t.name,r=t.value;a.setState(Object(g.a)({},n,r))},a.state={newPoi:"",newArrive:"",newDecription:""},a}return Object(p.a)(t,e),Object(o.a)(t,[{key:"render",value:function(){var e=this;return r.a.createElement("div",null,r.a.createElement("div",null,r.a.createElement(v.Button,{href:"#".concat(this.props.hopOwner),className:"modal-trigger"},"Create new Hop"),r.a.createElement(v.Modal,{id:this.props.hopOwner,className:"createHopModal"},r.a.createElement("div",{className:"createHopContent"},r.a.createElement("h3",null," Create Hop"),r.a.createElement("form",{onSubmit:this.handleFormSubmit},r.a.createElement("div",{className:"createHop-input-field input-field col s12"},r.a.createElement("input",{id:"poi",type:"text",className:"validate",name:"newHopAttraction",value:this.state.newHopAttraction,onChange:function(t){return e.handleChange(t)},required:!0}),r.a.createElement("label",{htmlFor:"poi"},"Point OF Interest")),r.a.createElement("div",{className:"createHop-input-field input-field col s12"},r.a.createElement("input",{id:"mot",type:"text",className:"validate",name:"newHopMot",value:this.state.newHopMot,onChange:function(t){return e.handleChange(t)},required:!0}),r.a.createElement("label",{htmlFor:"mot"},"Method OF Transportation")),r.a.createElement("div",{className:"createHop-input-field input-field col s12"},r.a.createElement("textarea",{id:"textarea2",className:"materialize-textarea",name:"newHopDescription",value:this.state.newHopDescription,onChange:function(t){return e.handleChange(t)},required:!0}),r.a.createElement("label",{htmlFor:"textarea2"},"Describe Your Adventure")),r.a.createElement("button",{className:"btn modal-close addHop"},"Add Hop"))))))}}]),t}(n.Component)),N=(a(263),function(e){function t(e){var a;return Object(s.a)(this,t),(a=Object(c.a)(this,Object(u.a)(t).call(this,e))).handleFormSubmit=function(e){e.preventDefault(),h.a.post("".concat(Object({NODE_ENV:"production",PUBLIC_URL:""}).REACT_APP_BASE,"/skip/newSkip"),{skipCity:a.state.newSkipCity,skipArrive:a.state.newSkipArrive,skipDuration:a.state.newSkipDuration,skipDescription:a.state.newSkipDescription,theJump:a.props.jumpOwner},{withCredentials:!0}).then(function(){a.props.showJumpAgain(),a.setState({newSkipCity:"",newSkipArrive:"",newSkipDuration:0,newSkipDescription:""})}).catch(function(e){return console.log(e)})},a.handleChange=function(e){var t=e.target,n=t.name,r=t.value;a.setState(Object(g.a)({},n,r))},a.state={newSkipCity:"",newSkipArrive:"",newSkipDuration:0,newDecription:""},a}return Object(p.a)(t,e),Object(o.a)(t,[{key:"render",value:function(){var e=this;return r.a.createElement("div",null,r.a.createElement("div",null,r.a.createElement(v.Button,{href:"#createSkip",className:"modal-trigger"},"Create new Skip"),r.a.createElement(v.Modal,{id:"createSkip"},r.a.createElement("div",{className:"createSkipContent"},r.a.createElement("h3",null,"Create Skip"),r.a.createElement("div",{className:"createSkip"},r.a.createElement("form",{onSubmit:this.handleFormSubmit},r.a.createElement("div",{className:"createSkip-input-field input-field col s12"},r.a.createElement("input",{id:"city",type:"text",className:"validate",name:"newSkipCity",value:this.state.newSkipCity,onChange:function(t){return e.handleChange(t)},required:!0}),r.a.createElement("label",{htmlFor:"city"},"City")),r.a.createElement(v.Select,{className:"arriveSelect",name:"newSkipArrive",onChange:this.handleChange,required:!0},r.a.createElement("option",{className:"arriveOption",value:"",active:!0},"Arrived By:"),r.a.createElement("option",{value:"Car"},"Car"),r.a.createElement("option",{value:"Train"},"Train"),r.a.createElement("option",{value:"Boat"},"Boat")),r.a.createElement("div",{className:"createSkip-input-field input-field col s12"},r.a.createElement("input",{id:"skipDuration",type:"number",className:"validate",name:"newSkipDuration",value:this.state.newSkipDuration,onChange:function(t){return e.handleChange(t)},required:!0}),r.a.createElement("label",{htmlFor:"skipduration"},"Duration")),r.a.createElement("div",{className:"createSkip-input-field input-field col s12"},r.a.createElement("textarea",{id:"textarea3",className:"materialize-textarea descriptionTextArea",name:"newSkipDescription",value:this.state.newSkipDescription,onChange:function(t){return e.handleChange(t)},required:!0}),r.a.createElement("label",{htmlFor:"textarea3"},"Describe Your Adventure")),r.a.createElement("button",{className:"addSkip btn modal-close"},"Add Skip")))))))}}]),t}(n.Component));a.e(7).then(a.t.bind(null,468,7));var I=function(e){function t(e){var a;return Object(s.a)(this,t),(a=Object(c.a)(this,Object(u.a)(t).call(this,e))).handleFormSubmit=function(e){e.preventDefault();var t=new FormData;t.append("theImageParameter",a.state.newImage),t.append("startCity",a.state.newStart),t.append("endCity",a.state.newEnd),t.append("jumpDuration",a.state.newDuration),t.append("jumpDescription",a.state.newDescription),console.log(a.state),h.a.post("".concat(Object({NODE_ENV:"production",PUBLIC_URL:""}).REACT_APP_BASE,"/jump/newJump"),t,{headers:{"Content-Type":"multipart/form-data"},withCredentials:!0}).then(function(e){a.props.history.push("/viewJump/"+e.data._id),a.setState({newStart:"",newEnd:"",newDuration:0,newDescription:""})}).catch(function(e){return console.log(e)})},a.handleChange=function(e){var t=e.target,n=t.name,r=t.value;a.setState(Object(g.a)({},n,r))},a.updateFileInState=function(e){a.setState({newImage:e.target.files[0]})},a.state={newStart:"",newEnd:"",newDuration:"",newDescription:"",createSkipVisible:!1,createHopVisible:!1,newImage:null},a}return Object(p.a)(t,e),Object(o.a)(t,[{key:"onClick",value:function(){this.setState({createSkipVisible:!this.state.createSkipVisible})}},{key:"onClick2",value:function(){this.setState({createHopVisible:!this.state.createHopVisible})}},{key:"render",value:function(){var e=this;return console.log(this.props),r.a.createElement("div",null,r.a.createElement("div",{className:"createJump"}),r.a.createElement("div",{className:"move"},r.a.createElement("form",{onSubmit:this.handleFormSubmit},r.a.createElement("div",{className:"input-field col s6"},r.a.createElement("i",{id:"plane",className:"material-icons prefix"},"airplanemode_active"),r.a.createElement("input",{id:"icon_plane",type:"text",className:"validate",name:"newStart",value:this.state.newStart,onChange:function(t){return e.handleChange(t)},required:!0}),r.a.createElement("label",{htmlFor:"icon_plane"},"Flew into")),r.a.createElement("div",{className:"input-field col s6"},r.a.createElement("i",{id:"plane",className:"material-icons prefix"},"airplanemode_active"),r.a.createElement("input",{id:"icon_plane2",type:"text",className:"validate",name:"newEnd",value:this.state.newEnd,onChange:function(t){return e.handleChange(t)},required:!0}),r.a.createElement("label",{htmlFor:"icon_plane2"},"Flew out of")),r.a.createElement("div",{className:"input-field col s12"},r.a.createElement("input",{id:"duration",type:"number",className:"validate",name:"newDuration",value:this.state.newDuration,onChange:function(t){return e.handleChange(t)},required:!0}),r.a.createElement("label",{htmlFor:"duration"},"Duration (in days)")),r.a.createElement("div",{className:"input-field col s12"},r.a.createElement("textarea",{id:"textarea1",className:"materialize-textarea",name:"newDescription",value:this.state.newDescription,onChange:function(t){return e.handleChange(t)},required:!0}),r.a.createElement("label",{htmlFor:"textarea1"},"Description")),r.a.createElement("div",{className:"input-field col s12"},r.a.createElement("legend",{style:{marginTop:"100px"}},"Choose a Picture"),r.a.createElement("input",{type:"file",onChange:this.updateFileInState})),r.a.createElement("button",{className:"btn waves-effect waves-dark"},"Create Jump"))),r.a.createElement("div",null,r.a.createElement("div",null,r.a.createElement("button",{className:"btn-floating btn-small  black"},r.a.createElement("i",{className:"material-icons",onClick:function(){return e.onClick()}},"add")),this.state.createSkipVisible?r.a.createElement(N,null):null)),r.a.createElement("div",null,r.a.createElement("div",null,r.a.createElement("button",{className:"btn-floating btn-small  green"},r.a.createElement("i",{className:"material-icons",onClick:function(){return e.onClick2()}},"add")),this.state.createHopVisible?r.a.createElement(j,null):null)))}}]),t}(n.Component);a.e(5).then(a.t.bind(null,469,7));var A=function(e){function t(e){var a;return Object(s.a)(this,t),(a=Object(c.a)(this,Object(u.a)(t).call(this,e))).state={jumps:[]},a}return Object(p.a)(t,e),Object(o.a)(t,[{key:"componentDidMount",value:function(){var e=this;h.a.get("".concat(Object({NODE_ENV:"production",PUBLIC_URL:""}).REACT_APP_BASE,"/jump/allJumps")).then(function(t){e.setState({jumps:t.data})}).catch(function(e){console.log(e)})}},{key:"render",value:function(){return console.log(this.state.jumps),r.a.createElement("div",null,this.state.jumps.map(function(e){return r.a.createElement("div",{class:"card allUserJumpsCard"},r.a.createElement("img",{src:e.image,class:"card-img-top",alt:"..."}),r.a.createElement("div",{class:"card-body"},r.a.createElement("h5",{class:"card-title"},e.start," ",r.a.createElement("i",{id:"plane",className:"material-icons prefix"},"airplanemode_active")," ",e.end),r.a.createElement("p",null,e.duration," Days"),r.a.createElement("p",{class:"card-text"},e.description)),r.a.createElement("div",{class:"card-action"},r.a.createElement(f.b,{key:e._id,to:"/viewJump/".concat(e._id),className:"homelink"},"View this Jump")))}))}}]),t}(n.Component),U=(a(264),function(e){function t(e){var a;return Object(s.a)(this,t),(a=Object(c.a)(this,Object(u.a)(t).call(this,e))).renderDeleteButton=function(){if(a.props.theUser&&a.props.jumpOwner===a.props.theUser._id)return r.a.createElement("button",{onClick:function(){a.deleteHop(a.props.theHopInfo._id)}},"Delete Hop")},a.renderEditButton=function(){if(a.props.theUser&&a.props.jumpOwner===a.props.theUser._id)return r.a.createElement("button",null,r.a.createElement(f.b,{to:{pathname:"/editHop/".concat(a.props.jumpOwner),state:{hopId:a.props.theHopInfo._id,POI:a.props.theHopInfo.poi,arrivedBy:a.props.theHopInfo.arrivedBy,description:a.props.theHopInfo.description}}},"Edit This Hop"))},a.state={theHop:[]},a}return Object(p.a)(t,e),Object(o.a)(t,[{key:"deleteHop",value:function(e){var t=this;h.a.post("".concat(Object({NODE_ENV:"production",PUBLIC_URL:""}).REACT_APP_BASE,"/hop/deleteHop/")+this.props.hopOwner+"/"+e).then(function(e){t.props.showJumpAgain()}).catch(function(e){console.log(e)})}},{key:"render",value:function(){return console.log("the props in the HOPS",this.props),r.a.createElement("div",null,r.a.createElement("ul",null,r.a.createElement("li",null,"POI: ",this.props.theHopInfo.poi),r.a.createElement("li",null,"Arrived by: ",this.props.theHopInfo.arrivedBy),r.a.createElement("li",null,"How it went: ",this.props.theHopInfo.description)),this.renderEditButton(),this.renderDeleteButton())}}]),t}(n.Component)),_=(a(265),function(e){function t(e){var a;return Object(s.a)(this,t),(a=Object(c.a)(this,Object(u.a)(t).call(this,e))).renderDeleteButton=function(){if(a.props.theUser&&a.props.jumpOwner===a.props.theUser._id)return r.a.createElement("button",{onClick:function(){a.deleteSkip(a.props.theSkipInfo._id)}},"Delete Skip")},a.renderEditButton=function(){if(a.props.theUser&&a.props.jumpOwner===a.props.theUser._id)return r.a.createElement("button",null,r.a.createElement(f.b,{to:{pathname:"/editSkip/".concat(a.props.theSkipInfo.jumpOwner),state:{skipId:a.props.theSkipInfo._id,city:a.props.theSkipInfo.city,arrivedBy:a.props.theSkipInfo.arrivedBy,duration:a.props.theSkipInfo.duration,description:a.props.theSkipInfo.description}}},"Edit This Skip"))},a.state={theSkip:a.props.theSkipInfo,editable:!1},a}return Object(p.a)(t,e),Object(o.a)(t,[{key:"renderHops",value:function(){var e=this;return this.props.theSkipInfo.hop?this.props.theSkipInfo.hop.map(function(t){return r.a.createElement(U,{key:t._id,theHopInfo:t,theUser:e.props.theUser,hopOwner:e.props.theSkipInfo._id,jumpOwner:e.props.jumpId,showJumpAgain:e.props.showJumpAgain})}):null}},{key:"renderHopAdd",value:function(){if(this.props.theSkipInfo&&this.props.theUser._id===this.props.jumpOwner)return r.a.createElement(j,{showJumpAgain:this.props.showJumpAgain,hopOwner:this.props.theSkipInfo._id})}},{key:"deleteSkip",value:function(e){var t=this;h.a.post("".concat(Object({NODE_ENV:"production",PUBLIC_URL:""}).REACT_APP_BASE,"/skip/deleteSkip/")+this.props.jumpId+"/"+e).then(function(){t.props.showJumpAgain()}).catch(function(e){console.log(e)})}},{key:"render",value:function(){return r.a.createElement("div",{className:"eachskip"},r.a.createElement("h5",null,this.props.theSkipInfo.city),r.a.createElement("h5",null,"Arrived by: ",this.props.theSkipInfo.arrivedBy),r.a.createElement("h5",null,"Days Spent: ",this.props.theSkipInfo.duration),r.a.createElement("h5",null,"How it went: ",this.props.theSkipInfo.description),this.renderEditButton(),this.renderHops(),this.renderHopAdd(),this.renderDeleteButton())}}]),t}(n.Component)),J=(a(266),function(e){function t(e){var a;return Object(s.a)(this,t),(a=Object(c.a)(this,Object(u.a)(t).call(this,e))).handleFormSubmit=function(e){e.preventDefault(),h.a.post("".concat(Object({NODE_ENV:"production",PUBLIC_URL:""}).REACT_APP_BASE,"/skip/updateSkip/")+a.props.location.state.skipId,{skipCity:a.state.city,skipArrive:a.state.arrive,skipDuration:a.state.duration,skipDescription:a.state.description},{withCredentials:!0}).then(function(){a.props.history.push("/viewJump/"+a.props.match.params.id)}).catch(function(e){return console.log(e)})},a.handleChange=function(e){a.setState(Object(g.a)({},e.target.name,e.target.value))},a.state={city:a.props.location.state.city,arrive:a.props.location.state.arrivedBy,duration:a.props.location.state.duration,description:a.props.location.state.description},a}return Object(p.a)(t,e),Object(o.a)(t,[{key:"render",value:function(){return console.log("PROPS IN THE SKIP",this.props),r.a.createElement("div",null,r.a.createElement("form",{onSubmit:this.handleFormSubmit},r.a.createElement("label",null,"City"),r.a.createElement("input",{type:"text",name:"city",value:this.state.city,onChange:this.handleChange}),r.a.createElement("label",null,"ArriveBy"),r.a.createElement("input",{type:"text",name:"arrive",value:this.state.arrive,onChange:this.handleChange}),r.a.createElement("label",null,"Duration"),r.a.createElement("input",{type:"number",name:"duration",value:this.state.duration,onChange:this.handleChange}),r.a.createElement("label",null,"Description"),r.a.createElement("input",{type:"text",name:"description",value:this.state.description,onChange:this.handleChange}),r.a.createElement("button",{className:"btn",type:"submit"},"Save Changes")))}}]),t}(n.Component)),D=function(e){function t(){return Object(s.a)(this,t),Object(c.a)(this,Object(u.a)(t).apply(this,arguments))}return Object(p.a)(t,e),Object(o.a)(t,[{key:"render",value:function(){var e=a(82),t=e.compose,n=e.withProps,i=e.lifecycle,l=a(268),s=l.withScriptjs,o=l.withGoogleMap,c=l.GoogleMap,u=l.DirectionsRenderer,p=t(n({googleMapURL:"https://maps.googleapis.com/maps/api/js?key=AIzaSyA2SqfKVOZHGnepyNleZCOow87eXk04HVs&v=3.exp&libraries=geometry,drawing,places&maptype=roadmap&style=feature:landscape.man_made%7Csaturation:-5&style=feature:landscape.natural%7Ccolor:0x00ff00%7Csaturation:-45%7Clightness:95&style=feature:landscape.natural%7Celement:labels.icon%7Ccolor:0xfef9fd&style=feature:landscape.natural.landcover%7Ccolor:0xef6b75%7Csaturation:60%7Clightness:80&style=feature:landscape.natural.terrain%7Csaturation:50%7Clightness:95&style=feature:road%7Ccolor:0x006cff%7Csaturation:100%7Clightness:70&style=feature:water%7Ccolor:0x00ace4%7Csaturation:100%7Clightness:55&size=480x360",loadingElement:r.a.createElement("div",{style:{height:"100%"}}),containerElement:r.a.createElement("div",{style:{height:"400px"}}),mapElement:r.a.createElement("div",{style:{height:"100%"}})}),s,o,i({componentDidMount:function(){var e=this;(new window.google.maps.DirectionsService).route({origin:this.props.waypoints[0]?this.props.waypoints[0].location:"Downtown Miami",destination:this.props.waypoints[0]?this.props.waypoints[this.props.waypoints.length-1].location:"Miami Airport",waypoints:this.props.waypoints[0]?this.props.waypoints:null,travelMode:window.google.maps.TravelMode.DRIVING},function(t,a){a===window.google.maps.DirectionsStatus.OK?e.setState({directions:t}):console.error("error fetching directions ".concat(t))})}}))(function(e){return r.a.createElement(c,{defaultZoom:7,defaultCenter:new window.google.maps.LatLng(25.761681,-80.191788)},e.directions&&r.a.createElement(u,{directions:e.directions}))});return r.a.createElement(p,{waypoints:this.props.renderSkips})}}]),t}(r.a.Component),L=function(e){function t(e){var a;return Object(s.a)(this,t),(a=Object(c.a)(this,Object(u.a)(t).call(this,e))).getSingleJumpInfo=function(){h.a.get("".concat(Object({NODE_ENV:"production",PUBLIC_URL:""}).REACT_APP_BASE,"/jump/details/")+a.props.match.params.id).then(function(e){a.setState({theJump:e.data}),a.skipsForGoogleMaps()}).catch(function(e){console.log(e)})},a.renderSkipAdd=function(){if(a.state.theJump&&a.props.theUser._id===a.state.theJump.ownerId)return r.a.createElement(N,{jumpOwner:a.state.theJump._id,showJumpAgain:a.getSingleJumpInfo})},a.state={theJump:null,skipCityArray:[]},a}return Object(p.a)(t,e),Object(o.a)(t,[{key:"componentDidMount",value:function(){this.getSingleJumpInfo()}},{key:"createTitle",value:function(){return Object.keys(this.state.theJump.skip).length>1?r.a.createElement("h1",null,"Jump Title: ",this.state.theJump.skip[0].city," ===>>>"," ",this.state.theJump.skip[this.state.theJump.skip.length-1].city):r.a.createElement("h1",null,"Let's add at least two skips! Your first and last skip will be where your trip really starts and ends."," ")}},{key:"renderSkips",value:function(){var e=this;return this.state.theJump.skip?this.state.theJump.skip.map(function(t){return r.a.createElement(_,Object.assign({},e.props,{key:t._id,theSkipInfo:t,theUser:e.props.theUser,jumpOwner:e.state.theJump.ownerId,jumpId:e.state.theJump._id,showJumpAgain:e.getSingleJumpInfo}))}):null}},{key:"skipsForGoogleMaps",value:function(){var e=this;return this.state.theJump.skip?this.state.theJump.skip.map(function(t){return e.state.skipCityArray.push({location:t.city}),e.setState(),{location:t.city}}):null}},{key:"renderSkipEdit",value:function(){return this.state.theJump.skip[0]&&this.props.theUser._id===this.state.theJump.ownerId?r.a.createElement(J,{jumpOwner:this.state.theJump._id}):null}},{key:"deleteJump",value:function(e){var t=this;h.a.post("".concat(Object({NODE_ENV:"production",PUBLIC_URL:""}).REACT_APP_BASE,"/jump/deleteJump/")+this.state.theJump._id).then(function(e){t.props.history.push("/userHomepage")}).catch(function(e){console.log(e)})}},{key:"renderDelete",value:function(){var e=this;if(this.props.theUser._id===this.state.theJump.ownerId)return r.a.createElement("button",{onClick:function(t){e.deleteJump()}},"Delete whole jump!")}},{key:"renderEdit",value:function(){if(this.props.theUser._id===this.state.theJump.ownerId)return r.a.createElement("button",null," ",r.a.createElement(f.b,{to:"/editJump/".concat(this.state.theJump._id)},"Edit This Jump"))}},{key:"render",value:function(){return this.state.theJump?(console.log("1Jump",this.state.theJump),r.a.createElement("div",null,r.a.createElement(D,{renderSkips:this.state.skipCityArray}),this.createTitle(),r.a.createElement("div",null,r.a.createElement("h5",null,"Flew out of: ",this.state.theJump.start),r.a.createElement("h5",null,"And returned to: ",this.state.theJump.end),r.a.createElement("h3",null,"It took ",this.state.theJump.duration," days total"),r.a.createElement("h3",null,this.state.theJump.description)),this.renderSkips(),r.a.createElement("div",null,this.renderSkipAdd()),this.renderEdit(),this.renderDelete())):null}}]),t}(n.Component),H=function(e){function t(e){var a;return Object(s.a)(this,t),(a=Object(c.a)(this,Object(u.a)(t).call(this,e))).handleFormSubmit=function(e){e.preventDefault(),h.a.post("".concat(Object({NODE_ENV:"production",PUBLIC_URL:""}).REACT_APP_BASE,"/jump/updateJump/").concat(a.props.match.params.id),{startCity:a.state.start,endCity:a.state.end,jumpDuration:a.state.duration,jumpDescription:a.state.description}).then(function(){a.props.history.push("/viewJump/"+a.props.match.params.id)}).catch(function(e){return console.log(e)})},a.handleChange=function(e){a.setState(Object(g.a)({},e.target.name,e.target.value))},a.state={start:"",end:"",duration:"",description:""},a}return Object(p.a)(t,e),Object(o.a)(t,[{key:"componentDidMount",value:function(){var e=this;h.a.get("".concat(Object({NODE_ENV:"production",PUBLIC_URL:""}).REACT_APP_BASE,"/jump/details/")+this.props.match.params.id).then(function(t){e.setState({start:t.data.start,end:t.data.end,duration:t.data.duration,description:t.data.description})}).catch(function(e){console.log(e)})}},{key:"render",value:function(){return r.a.createElement("div",null,r.a.createElement("form",{onSubmit:this.handleFormSubmit},r.a.createElement("label",null,"Start"),r.a.createElement("input",{type:"text",name:"start",value:this.state.start,onChange:this.handleChange}),r.a.createElement("label",null,"End"),r.a.createElement("input",{type:"text",name:"end",value:this.state.end,onChange:this.handleChange}),r.a.createElement("label",null,"duration"),r.a.createElement("input",{type:"number",name:"duration",value:this.state.duration,onChange:this.handleChange}),r.a.createElement("label",null," description"),r.a.createElement("input",{type:"text",name:"description",value:this.state.description,onChange:this.handleChange}),r.a.createElement("button",{className:"btn",type:"submit"},"Save Changes")))}}]),t}(n.Component),B=function(e){function t(e){var a;return Object(s.a)(this,t),(a=Object(c.a)(this,Object(u.a)(t).call(this,e))).handleFormSubmit=function(e){e.preventDefault(),h.a.post("".concat(Object({NODE_ENV:"production",PUBLIC_URL:""}).REACT_APP_BASE,"/hop/updateHop/")+a.props.location.state.hopId,{poi:a.state.poi,arrivedBy:a.state.arrivedBy,description:a.state.description},{withCredentials:!0}).then(function(){a.props.history.push("/viewJump/"+a.props.match.params.id)}).catch(function(e){return console.log(e)})},a.handleChange=function(e){a.setState(Object(g.a)({},e.target.name,e.target.value))},a.state={poi:a.props.location.state.POI,arrivedBy:a.props.location.state.arrivedBy,description:a.props.location.state.description},a}return Object(p.a)(t,e),Object(o.a)(t,[{key:"render",value:function(){var e=this;return console.log(this.state),r.a.createElement("div",null,r.a.createElement("form",{onSubmit:this.handleFormSubmit},r.a.createElement("label",null,"Point of Interest"),r.a.createElement("input",{type:"text",name:"poi",value:this.state.poi,onChange:function(t){e.handleChange(t)}}),r.a.createElement("label",null,"ArriveBy"),r.a.createElement("input",{type:"text",name:"arrivedBy",value:this.state.arrivedBy,onChange:function(t){e.handleChange(t)}}),r.a.createElement("label",null,"Description"),r.a.createElement("input",{type:"text",name:"description",value:this.state.description,onChange:function(t){e.handleChange(t)}}),r.a.createElement("button",{className:"btn",type:"submit"},"Save Changes")))}}]),t}(n.Component),P=function(e){function t(e){var a;return Object(s.a)(this,t),(a=Object(c.a)(this,Object(u.a)(t).call(this,e))).getCurrentlyLoggedInUser=function(e){a.service.currentUser().then(function(t){a.setState({currentlyLoggedIn:t},function(){e&&e()})}).catch(function(){a.setState({currentlyLoggedIn:null})})},a.state={currentlyLoggedIn:null,ready:!1},a.service=new E,a}return Object(p.a)(t,e),Object(o.a)(t,[{key:"componentDidMount",value:function(){this.getCurrentlyLoggedInUser()}},{key:"render",value:function(){var e=this;return r.a.createElement("div",{className:"App"},r.a.createElement(m.b,{path:"/",render:function(t){return r.a.createElement(w,Object.assign({},t,{theUser:e.state.currentlyLoggedIn,pleaseLogOut:function(){return e.service.logout()},getUser:e.getCurrentlyLoggedInUser}))}}),r.a.createElement(m.d,null,r.a.createElement(m.b,{exact:!0,path:"/",render:function(t){return r.a.createElement(O,Object.assign({},t,{theUser:e.state.currentlyLoggedIn}))}}),r.a.createElement(m.b,{exact:!0,path:"/userHomepage",render:function(t){return e.state.currentlyLoggedIn?r.a.createElement(k,Object.assign({},t,{theUser:e.state.currentlyLoggedIn,ready:e.state.ready})):r.a.createElement(m.a,{to:"/"})}}),r.a.createElement(m.b,{exact:!0,path:"/allUserJumps",render:function(t){return r.a.createElement(S,Object.assign({},t,{theUser:e.state.currentlyLoggedIn,ready:e.state.ready}))}}),r.a.createElement(m.b,{exact:!0,path:"/viewJump/:id",render:function(t){return r.a.createElement(L,Object.assign({},t,{theUser:e.state.currentlyLoggedIn,ready:e.state.ready}))}}),r.a.createElement(m.b,{exact:!0,path:"/createJump",render:function(t){return r.a.createElement(I,Object.assign({},t,{theUser:e.state.currentlyLoggedIn,ready:e.state.ready}))}}),r.a.createElement(m.b,{exact:!0,path:"/allJumps",render:function(t){return r.a.createElement(A,Object.assign({},t,{theUser:e.state.currentlyLoggedIn,ready:e.state.ready}))}}),r.a.createElement(m.b,{exact:!0,path:"/editJump/:id",render:function(t){return r.a.createElement(H,Object.assign({},t,{theUser:e.state.currentlyLoggedIn,ready:e.state.ready}))}}),r.a.createElement(m.b,{exact:!0,path:"/editSkip/:id",render:function(t){return r.a.createElement(J,Object.assign({},t,{theUser:e.state.currentlyLoggedIn,ready:e.state.ready}))}}),r.a.createElement(m.b,{exact:!0,path:"/editHop/:id",render:function(t){return r.a.createElement(B,Object.assign({},t,{theUser:e.state.currentlyLoggedIn,ready:e.state.ready}))}})))}}]),t}(n.Component);Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));l.a.render(r.a.createElement(f.a,null,r.a.createElement(P,null)),document.getElementById("root")),"serviceWorker"in navigator&&navigator.serviceWorker.ready.then(function(e){e.unregister()})}},[[183,1,2]]]);
//# sourceMappingURL=main.92935098.chunk.js.map