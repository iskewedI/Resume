(this.webpackJsonpresume=this.webpackJsonpresume||[]).push([[0],{152:function(e,t,n){},154:function(e,t,n){"use strict";n.r(t);var i=n(0),a=n.n(i),r=n(23),c=n.n(r),s=n(40),o=n(56),l=n(92),d=n(55),j=n(3),u=function(){return Object(j.jsx)(o.a,{collapseOnSelect:!0,expand:"lg",bg:"dark",variant:"dark",children:Object(j.jsxs)(l.a,{children:[Object(j.jsx)(o.a.Brand,{as:s.b,to:"/",children:"Resume"}),Object(j.jsx)(o.a.Toggle,{"aria-controls":"responsive-navbar-nav"}),Object(j.jsxs)(o.a.Collapse,{id:"responsive-navbar-nav",children:[Object(j.jsx)(d.a,{className:"me-auto",children:Object(j.jsx)(d.a.Link,{as:s.b,to:"/Experience",children:"Experience"})}),Object(j.jsx)(d.a,{children:Object(j.jsx)(d.a.Link,{as:s.b,to:"/Contact",children:"Contact"})})]})]})})},p=n(184),b=n(179),h=n(93),x=n.n(h),m=n(94),O=n.n(m),f=n(24),g=n.n(f),v=n(38),y=n(11),w=n(187),C=n(182),I=n(185),S=n(183),N=n(186),k=n(181),M=n.p+"static/media/HorizontalArrow.4a437ba8.svg",L=function(e){var t=e.direction,n=e.handleClick,i=e.className,a="left"===t?"rotate(180deg)":"";return Object(j.jsx)("img",{src:M,style:{transform:a},alt:"",className:i,onClick:n})},T=function(e,t,n){return"left"===t?e-1>-1?e-1:n.length-1:e+1<n.length?e+1:0},D=Object(b.a)({arrow:{height:"50px",position:"absolute",top:0,bottom:0,margin:"auto"},arrowLeft:{left:0},arrowRight:{right:0},arrowsContainer:{width:"100%",height:"100%",position:"absolute",display:"flex",justifyContent:"space-between",alignItems:"center",zIndex:100},arrowContainer:{width:"30%",height:"100%",position:"relative",opacity:".6",transition:"opacity .15s linear","&:hover":{opacity:"1"}},container:{height:"200px",position:"relative",filter:"grayscale(.75)","&:hover":{filter:"grayscale(0)"},transition:".35s filter ease"},sliderItem:{position:"absolute",opacity:0,width:"100%",height:"100%",transition:"1s ease"},sliderItemActive:{opacity:1}}),R=function(e){var t=e.images,n=void 0===t?[]:t,a=e.commonClasses,r=e.tooltip,c=Object(i.useState)(0),s=Object(y.a)(c,2),o=s[0],l=s[1],d=D(),u=function(e){var t=T(o,e,n);l(t)};return Object(j.jsxs)("div",{className:d.container,children:[n.length>1&&Object(j.jsxs)("div",{className:d.arrowsContainer,children:[Object(j.jsx)("div",{className:d.arrowContainer,onClick:function(){return u("left")},children:Object(j.jsx)(L,{direction:"left",className:"".concat(d.arrow," ").concat(d.arrowLeft)})}),Object(j.jsx)("div",{className:d.arrowContainer,onClick:function(){return u("right")},children:Object(j.jsx)(L,{direction:"right",className:"".concat(d.arrow," ").concat(d.arrowRight)})})]}),Object(j.jsx)("section",{children:n.map((function(e,t){return Object(j.jsx)(k.a,{className:"".concat(a," ").concat(d.sliderItem," ").concat(t===o?d.sliderItemActive:""),image:e,title:r},"CardMedia-".concat(r))}))})]})},E=Object(b.a)({root:{width:"100%",maxWidth:345,display:"flex",flexDirection:"column",justifyContent:"space-between"},actions:{justifyContent:"center"}}),A=function(e){var t=e.images,n=void 0===t?[]:t,i=e.tooltip,a=e.name,r=e.description,c=e.siteWeb,s=e.siteCode,o=E();return Object(j.jsxs)(w.a,{className:o.root,children:[Object(j.jsxs)(C.a,{children:[Object(j.jsx)(R,{images:n,tooltip:i}),Object(j.jsxs)(S.a,{onClick:function(){return setTimeout((function(){return window.open((t=s,(e=c)&&e!==window.location.href?e:t||void 0),"_blank");var e,t}),300)},children:[Object(j.jsx)(p.a,{gutterBottom:!0,variant:"h5",component:"h2",children:a}),Object(j.jsx)(p.a,{variant:"body2",color:"textSecondary",component:"p",children:r})]})]}),Object(j.jsx)(I.a,{className:o.actions,children:Object(j.jsx)(N.a,{size:"small",color:"primary",href:s,target:"_blank",children:"See code"})})]})},P=n(8),W=n.p+"static/media/Loading.d0c13b3e.svg",z=function(){return Object(j.jsx)("img",{src:W,alt:""})},B=function(e,t){return function(n){var a=Object(i.useState)(!1),r=Object(y.a)(a,2),c=r[0],s=r[1];return Object(j.jsxs)(j.Fragment,{children:[!c&&Object(j.jsx)(z,{message:t}),Object(j.jsx)(e,Object(P.a)(Object(P.a)({},n),{},{isLoaded:c,setLoaded:function(e){return s(e)}}))]})}},F=n(39),H=n.n(F);H.a.defaults.baseURL="https://iskewed-portfolio.herokuapp.com/api/v1",H.a.interceptors.response.use(null,(function(e){return e.response&&e.response.status>=400&&e.response.status<500||console.error(e),Promise.reject(e)}));var _={get:H.a.get,post:H.a.post,put:H.a.put,patch:H.a.patch,delete:H.a.delete},G=function(){return _.get("/projects")},J=Object(b.a)({container:{display:"flex",gap:"2rem",placeContent:"center",flexWrap:"wrap",padding:"1rem"}}),q=B((function(e){var t=e.isLoaded,n=e.setLoaded,a=Object(i.useState)([]),r=Object(y.a)(a,2),c=r[0],s=r[1],o=Object(i.useState)(!1),l=Object(y.a)(o,2),d=l[0],u=l[1],p=J();return Object(i.useEffect)((function(){t||d||function(){var e=Object(v.a)(g.a.mark((function e(){var t;return g.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.prev=0,e.next=3,G();case 3:t=e.sent,s(t.data),n(!0),e.next=12;break;case 8:e.prev=8,e.t0=e.catch(0),console.error(e.t0),u(!0);case 12:case"end":return e.stop()}}),e,null,[[0,8]])})));return function(){return e.apply(this,arguments)}}()()}),[t,n,c,s]),Object(j.jsx)("div",{className:p.container,children:c&&c.map((function(e){var t=e.images,n=e.tooltip,i=e.name,a=e.description,r=e.siteCode,c=e.siteWeb;return Object(j.jsx)(A,{images:t,tooltip:n,name:i,description:a,siteCode:r,siteWeb:c},"Project-".concat(i))}))})}),"Loading projects..."),U=Object(b.a)({header:{color:"#8a8b96",textTransform:"uppercase",fontWeight:400}}),V=function(){var e=U();return Object(j.jsxs)("div",{style:{textAlign:"center"},children:[Object(j.jsx)(O.a,{left:!0,children:Object(j.jsx)(p.a,{className:e.header,variant:"h1",children:"Projects"})}),Object(j.jsx)(x.a,{bottom:!0,children:Object(j.jsx)(q,{})})]})},X=function(){return Object(j.jsx)(V,{})},Y=n(18),Z=n.p+"static/media/Gear.1b95bc66.svg",K=function(e){var t=e.logoWidth,n=void 0===t?64:t,i=e.style;return Object(j.jsxs)("div",{style:i,children:[Object(j.jsx)("img",{width:n,src:Z,alt:""}),Object(j.jsx)("h5",{style:{padding:3,color:"#8a8b96",opacity:".5"},children:"Work In progress..."})]})},Q=n.p+"static/media/Me.29db38b6.png",$=Object(b.a)({container:{textAlign:"center"},image:{maxHeight:"600px",borderRadius:"2%",width:"100%"}}),ee=function(e){var t=e.styles,n=void 0===t?{}:t,i=$();return Object(j.jsx)("img",{className:i.image,style:n,src:Q,alt:"Profile Image",draggable:!1})},te=n(100),ne=n(98),ie=n.n(ne),ae=Object(b.a)({text:{color:function(e){return e?"white":"#d6d3d3"}}}),re=function(e){var t=e.text,n=e.selected,i=e.handleDragStart,a=e.handleDragEnd,r=ae(n);return Object(j.jsx)(ie.a,{onStart:i,onStop:a,position:{x:0,y:0},children:Object(j.jsx)("p",{className:"".concat(r.text," unselectable-text"),children:t})})},ce=0,se=1,oe=Object(b.a)({container:{textAlign:function(e){return e.columnPosition===ce?"left":"right"},alignSelf:"center",opacity:"100% !important",zIndex:100,color:"white",margin:"0 10px"},title:{textShadow:"-3px 4px 9px black"},valuesContainer:{textShadow:"-3px 4px 9px #2d2d2d"}}),le=function(e){var t=e.title,n=e.values,a=void 0===n?[]:n,r=e.columnPosition,c=void 0===r?ce:r,s=e.handleInspectionChange,o=Object(i.useState)(null),l=Object(y.a)(o,2),d=l[0],u=l[1],p=oe({columnPosition:c});return Object(j.jsxs)("div",{className:p.container,children:[Object(j.jsx)("h3",{className:"".concat(p.title," unselectable-text"),children:t}),Object(j.jsx)("div",{className:p.valuesContainer,children:a.map((function(e,t){var n=e.title,i=e.descriptionComponent;return Object(j.jsx)(re,{text:n,selected:t===d,handleDragStart:function(){return function(e,t,n){s({title:t,children:n}),u(e)}(t,n,i)},handleDragEnd:function(){return function(e,t){s({title:e,children:t})}(n,i)}},"Value-".concat(n))}))})]})},de=n(99),je=n.n(de),ue=Object(b.a)({container:{border:function(e){return"1px solid ".concat(e?"red":"grey")},margin:"2rem",zIndex:101,display:"grid",gridTemplateColumns:"1fr",gridTemplateRows:".10fr .10fr .80fr",maxHeight:"600px",overflow:"hidden"},title:{color:"#7daab1d4"},clearButton:{color:"#a5a0a2",opacity:".6","&:hover":{color:"red",opacity:"1"},transition:"opacity .7s ease"}}),pe=function(e){var t=e.isReceiving,n=e.title,i=e.children,a=e.handleMouseEnter,r=e.handleMouseLeave,c=e.handleClear,s=ue(t);return Object(j.jsxs)("div",{className:s.container,onMouseEnter:a,onMouseLeave:r,children:[i&&Object(j.jsx)(N.a,{onClick:function(){c()},children:Object(j.jsx)(je.a,{className:s.clearButton})}),n&&Object(j.jsx)("h3",{className:s.title,children:n}),i]})},be=Object(b.a)({gridContainer:{display:"grid",gridTemplateColumns:"repeat(3, 1fr)",gap:"5rem",margin:"2rem"},inspectionableContainer:{display:"inline-block",cursor:"pointer",transition:"opacity .5s",position:"relative",margin:"2rem",boxShadow:"-3px 4px 11px 3px #171717",gridColumn:"2"},childrenContainer:{opacity:function(e){return e?"25%":"100%"},filter:function(e){return e?"blur(2px)":""}},properties:{display:"grid",position:"absolute",width:"100%",height:"100%",gridTemplateRows:"repeat(3, 1fr)",gridTemplateColumns:"repeat(2, 1fr)",gridAutoFlow:"column"}}),he=function(e){var t=e.properties,n=void 0===t?[{title:"",values:[{title:"",descriptionComponent:null}]}]:t,a=e.children,r=Object(i.useState)(!1),c=Object(y.a)(r,2),s=c[0],o=c[1],l=Object(i.useState)({isInDrag:!1,dragIndex:null}),d=Object(y.a)(l,2),u=d[0],p=d[1],b=Object(i.useState)({selectingOption:!1,slots:[{empty:!0,title:null,children:null},{empty:!0,title:null,children:null}]}),h=Object(y.a)(b,2),x=h[0],m=h[1],O=function(){x.selectingOption||x.slots.find((function(e){return!e.empty}))||o((function(e){return!e}))},f=function(e){var t=e.title,n=e.children;m((function(e){var i=e.slots;return u.isInDrag&&(i[u.dragIndex]={title:t,empty:!1,children:n}),{selectingOption:!0,slots:i}}))},g=function(e){m((function(t){var n=t.slots;n[e]={empty:!0,title:null,children:null};var i=n.every((function(e){return e.empty}));return i&&(o(!1),p({isInDrag:!1,dragIndex:null})),Object(P.a)(Object(P.a)({},t),{},{selectingOption:!i,slots:n})}))},v=be(s);return Object(j.jsxs)("div",{className:v.gridContainer,children:[(x.selectingOption||!x.slots[0].empty)&&Object(j.jsx)(pe,Object(P.a)(Object(P.a)({isReceiving:!1},x.slots[0]),{},{handleMouseEnter:function(){return p({isInDrag:!0,dragIndex:0})},handleMouseLeave:function(){return p({isInDrag:!1,dragIndex:null})},handleClear:function(){return g(0)}})),Object(j.jsxs)("div",{className:v.inspectionableContainer,onMouseEnter:O,onMouseLeave:O,children:[Object(j.jsx)(te.a,{in:s,timeout:2500,children:Object(j.jsx)("div",{className:v.properties,children:n.map((function(e,t){return Object(j.jsx)(le,Object(P.a)(Object(P.a)({},e),{},{columnPosition:(n=t,n<3?ce:se),handleInspectionChange:f}),"Property-".concat(t));var n}))})}),Object(j.jsx)("div",{className:v.childrenContainer,children:a})]}),(x.selectingOption||!x.slots[1].empty)&&Object(j.jsx)(pe,Object(P.a)(Object(P.a)({isReceiving:!1},x.slots[1]),{},{handleMouseEnter:function(){return p({isInDrag:!0,dragIndex:1})},handleMouseLeave:function(){return p({isInDrag:!1,dragIndex:null})},handleClear:function(){return g(1)}}))]})},xe=n(41),me=n(103),Oe=n.p+"static/media/Moon_Texture.a2edaf85.jpg",fe=n.p+"static/media/Normal_Texture.fd91a2fa.png",ge=function(e){var t=e.position,n=Object(i.useRef)(),a=Object(xe.c)(me.a,[Oe,fe]),r=Object(y.a)(a,2),c=r[0],s=r[1];return Object(xe.b)((function(){return n.current.rotation.y+=.002})),Object(j.jsxs)("mesh",{ref:n,scale:3,position:t,children:[Object(j.jsx)("sphereGeometry",{args:[3,32,32],rotateZ:20}),Object(j.jsx)("meshStandardMaterial",{map:c,normalMap:s})]})},ve=function(e){var t=e.color,n=void 0===t?"#66ffff":t,a=Object(i.useRef)();return Object(xe.b)((function(){return a.current.rotation.z+=.5})),Object(j.jsxs)("mesh",{ref:a,scale:.2,position:[0,0,0],children:[Object(j.jsx)("torusGeometry",{args:[15,1.5,10,100,5]}),Object(j.jsx)("meshBasicMaterial",{color:n,attach:"material"})]})},ye=function(e){var t=e.list,n=e.classes,a=Object(i.useState)(0),r=Object(y.a)(a,2),c=r[0],s=r[1],o=Object(i.useState)(!0),l=Object(y.a)(o,2),d=l[0],u=l[1],b=Object(i.useMemo)((function(){return function(e){var n=e.deltaX,i=e.deltaY,a=n||i;if(!(!a||n<-100||n>100)){var r=T(c,a<0?"left":"right",t);u(!1),setTimeout((function(){return u(!0)}),200),s(r)}}}),[c,u,t]);return Object(j.jsx)("div",{children:Object(j.jsx)(p.a,{variant:"h2",className:n,onScroll:function(e){return d&&b(e)},onWheel:function(e){return d&&b(e)},children:t[c]})})},we=Object(b.a)({container:{textAlign:"center"},presentationTitle:{color:"#8a8b96","@media (max-width:1024px)":{fontSize:"3rem"}},presentationDescription:{color:"#8a8b96","@media (max-width:1024px)":{fontSize:"1.5rem"}}}),Ce=["FullStack Developer","Astronomy & Space lover","Musical Artist","Stock Investor"],Ie=function(){var e=we();return Object(j.jsxs)("div",{className:e.container,children:[window.matchMedia("(min-width: 768px)").matches&&Object(j.jsx)(K,{style:{position:"absolute",marginTop:"10px"}}),Object(j.jsx)(p.a,{variant:"h1",className:e.presentationTitle,children:"Joaqu\xedn Tornello"}),Object(j.jsx)(ye,{classes:e.presentationDescription,list:Ce}),Object(j.jsx)(he,{properties:[{title:"TOP Interests",values:[{title:"Future Tech",descriptionComponent:Object(j.jsx)("div",{style:{color:"#afafaf"},children:"Future tech is incredible man!"})},{title:"Space Exploration/Investigation",descriptionComponent:Object(j.jsxs)("div",{style:{color:"#afafaf",maxHeight:"500px"},children:[Object(j.jsx)("div",{style:{padding:"1rem"},children:Object(j.jsx)("h5",{style:{fontStyle:"italic",textDecoration:""},children:"I dream with humans travelling all across the galaxies, evolving into an interstellar species."})}),Object(j.jsx)(xe.a,{children:Object(j.jsxs)(i.Suspense,{fallback:Object(j.jsx)(ve,{}),children:[Object(j.jsx)("pointLight",{position:[10,10,10]}),Object(j.jsx)(ge,{position:[0,5,-25]})]})})]})},{title:"AI & Machine Learning",descriptionComponent:Object(j.jsx)("div",{style:{color:"#afafaf"},children:"AI and Machine Learning is incredible man!"})}]},{title:"Hobbies",values:[{title:"Training",descriptionComponent:Object(j.jsx)("div",{style:{color:"#afafaf"},children:"Training is incredible man!"})},{title:"Music",descriptionComponent:Object(j.jsx)("div",{style:{color:"#afafaf"},children:"Music is incredible man!"})}]}],children:Object(j.jsx)(ee,{})}),!window.matchMedia("(min-width: 768px)").matches&&Object(j.jsx)(K,{style:{marginBottom:"30px"}})]})},Se=function(){return Object(j.jsxs)("div",{style:{backgroundColor:"#333"},children:[Object(j.jsx)(u,{}),Object(j.jsxs)(Y.d,{children:[Object(j.jsx)(Y.b,{path:"/Experience",children:Object(j.jsx)(X,{})}),Object(j.jsx)(Y.b,{path:"/Resume",children:Object(j.jsx)(Ie,{})}),Object(j.jsx)(Y.a,{to:"/Resume"})]})]})};n(151),n(152);c.a.render(Object(j.jsx)(a.a.StrictMode,{children:Object(j.jsx)(s.a,{children:Object(j.jsx)(Se,{})})}),document.getElementById("root"))}},[[154,1,2]]]);
//# sourceMappingURL=main.9c447ea0.chunk.js.map