(function(t){function e(e){for(var n,o,a=e[0],c=e[1],l=e[2],d=0,h=[];d<a.length;d++)o=a[d],Object.prototype.hasOwnProperty.call(s,o)&&s[o]&&h.push(s[o][0]),s[o]=0;for(n in c)Object.prototype.hasOwnProperty.call(c,n)&&(t[n]=c[n]);u&&u(e);while(h.length)h.shift()();return r.push.apply(r,l||[]),i()}function i(){for(var t,e=0;e<r.length;e++){for(var i=r[e],n=!0,a=1;a<i.length;a++){var c=i[a];0!==s[c]&&(n=!1)}n&&(r.splice(e--,1),t=o(o.s=i[0]))}return t}var n={},s={app:0},r=[];function o(e){if(n[e])return n[e].exports;var i=n[e]={i:e,l:!1,exports:{}};return t[e].call(i.exports,i,i.exports,o),i.l=!0,i.exports}o.m=t,o.c=n,o.d=function(t,e,i){o.o(t,e)||Object.defineProperty(t,e,{enumerable:!0,get:i})},o.r=function(t){"undefined"!==typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(t,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(t,"__esModule",{value:!0})},o.t=function(t,e){if(1&e&&(t=o(t)),8&e)return t;if(4&e&&"object"===typeof t&&t&&t.__esModule)return t;var i=Object.create(null);if(o.r(i),Object.defineProperty(i,"default",{enumerable:!0,value:t}),2&e&&"string"!=typeof t)for(var n in t)o.d(i,n,function(e){return t[e]}.bind(null,n));return i},o.n=function(t){var e=t&&t.__esModule?function(){return t["default"]}:function(){return t};return o.d(e,"a",e),e},o.o=function(t,e){return Object.prototype.hasOwnProperty.call(t,e)},o.p="/harpejjitabs/";var a=window["webpackJsonp"]=window["webpackJsonp"]||[],c=a.push.bind(a);a.push=e,a=a.slice();for(var l=0;l<a.length;l++)e(a[l]);var u=c;r.push([0,"chunk-vendors"]),i()})({0:function(t,e,i){t.exports=i("56d7")},"034f":function(t,e,i){"use strict";var n=i("85ec"),s=i.n(n);s.a},"205b":function(t,e,i){},"4f4f":function(t,e,i){"use strict";var n=i("ec0d"),s=i.n(n);s.a},"56d7":function(t,e,i){"use strict";i.r(e);i("e260"),i("e6cf"),i("cca6"),i("a79d");var n=i("2b0e"),s=function(){var t=this,e=t.$createElement,i=t._self._c||e;return i("div",{attrs:{id:"app"}},[i("Toolsbar"),i("div",{attrs:{id:"main"}},[i("Tablature",{staticClass:"tablature"})],1),i("Contextual"),t._m(0)],1)},r=[function(){var t=this,e=t.$createElement,i=t._self._c||e;return i("div",{attrs:{id:"hidden"}},[i("input",{attrs:{type:"file",name:"loadFile",id:"loadFile"}})])}],o=i("ade3"),a=function(){var t=this,e=t.$createElement,i=t._self._c||e;return i("div",[i("svg",{attrs:{width:t.svgWidth,height:t.svgHeight,id:"tablature"}},[i("rect",{staticStyle:{fill:"white"},attrs:{width:"100%",height:"100%"}}),i("g",{style:{transform:"translate("+t.xOffset+"px, "+t.yOffset+"px) scale("+t.scale+")"},attrs:{id:"workzone"}},[i("g",{attrs:{id:"workzoneContainer"}},[t._l(t.number_frets,(function(e,n){return i("line",{key:"frets"+e,staticStyle:{fill:"black","stroke-width":"1px",stroke:"black"},attrs:{x1:t.decX*t.string_spacing,y1:(n+t.decY)*t.frets_spacing+t.frets_spacing/2,x2:t.decX*t.string_spacing+t.frets_size,y2:(n+t.decY)*t.frets_spacing+t.frets_spacing/2}})})),t._l(t.number_string,(function(e,n){return i("line",{key:"strings"+e,staticStyle:{fill:"black","stroke-width":"1px",stroke:"#CCC"},attrs:{x1:(n+t.decX)*t.string_spacing+t.string_spacing,y1:t.decY*t.frets_spacing,x2:(n+t.decX)*t.string_spacing+t.string_spacing,y2:t.decY*t.frets_spacing+t.string_size}})})),t._l(t.number_frets_default,(function(e,n){return i("g",{key:e},t._l(t.number_string_default,(function(s,r){return i("g",{key:s+";"+e},[i("Key",{directives:[{name:"show",rawName:"v-show",value:t.isVisible(r,n),expression:"isVisible(posX, posY)"}],ref:"keys",refInFor:!0,attrs:{"pos-x":r*t.string_spacing+t.string_spacing,"pos-y":n*t.frets_spacing+t.frets_spacing/2,x:r,y:n}})],1)})),0)})),t.editingZone?t._e():i("Title",{ref:"title",attrs:{x:t.decX*t.string_spacing,y:t.decY*t.frets_spacing+t.string_size}})],2),t.editingZone?i("Resizer"):t._e()],1)])])},c=[],l=(i("d3b7"),i("ddb0"),i("5530")),u=i("b85c"),d=function(){var t=this,e=t.$createElement,i=t._self._c||e;return i("g",{attrs:{transform:"translate("+t.posX+", "+t.posY+")"},on:{click:t.toggleVisible}},[i("rect",{style:{stroke:"#666",strokeWidth:"1px",fill:t.keyColor},attrs:{width:"15",height:"25",transform:"translate(-7.5, 0)"}}),t.isDo?i("rect",{staticStyle:{fill:"transparent",stroke:"black"},attrs:{width:"10",height:"5",transform:"translate(-5, 7)"}}):t._e(),i("Finger",{ref:"finger",attrs:{isVisible:t.isVisible},on:{deleteFinger:function(e){t.isVisible=!1}}})],1)},h=[],f=function(){var t=this,e=t.$createElement,i=t._self._c||e;return i("transition",{attrs:{name:"fade"}},[t.isVisible?i("g",[i("circle",{attrs:{r:"12",cy:"20",fill:t.color},on:{click:function(e){return e.stopPropagation(),t.startEdit(e)}}}),i("text",{staticStyle:{fill:"white","font-size":"16px","font-family":"Helvetica, Arial, sans-serif"},attrs:{y:"20","text-anchor":"middle","dominant-baseline":"middle"},on:{click:function(e){return e.stopPropagation(),t.startEdit(e)}}},[t._v(t._s(t.value))]),i("transition",{attrs:{name:"fade"}},[t.editing?i("foreignObject",{ref:"fo",attrs:{height:"24",width:"24",x:"-12",y:8},on:{click:function(t){t.stopPropagation()}}},[i("input",{directives:[{name:"model",rawName:"v-model",value:t.value,expression:"value"}],ref:"textEdit",attrs:{type:"text"},domProps:{value:t.value},on:{blur:function(e){return e.preventDefault(),e.stopPropagation(),t.doneEdit(e)},keyup:function(e){return!e.type.indexOf("key")&&t._k(e.keyCode,"enter",13,e.key,"Enter")?null:t.doneEdit(e)},keydown:function(e){return!e.type.indexOf("key")&&t._k(e.keyCode,"delete",[8,46],e.key,["Backspace","Delete","Del"])?null:t.deleteDown(e)},input:function(e){e.target.composing||(t.value=e.target.value)}}})]):t._e()],1)],1):t._e()])},g=[],m={name:"Finger",props:["isVisible"],data:function(){return{value:"1",color:"#000000",editing:!1,animate:!0}},methods:{startEdit:function(){var t=this;this.editing=!0;var e=document.createElement("input");e.type="text",e.style.opacity="0",document.getElementById("hidden").appendChild(e),e.focus(),setTimeout((function(){var i=t.$refs.textEdit;i.focus(),i.select(),i.setSelectionRange(0,9999),document.getElementById("hidden").removeChild(e),t.$root.$emit("summonContextual",t)}),0)},doneEdit:function(){this.editing=!1},deleteDown:function(){""===this.value&&(this.editing=!1,this.$emit("deleteFinger"))},delete:function(){this.editing=!1,this.$emit("deleteFinger")},changeColor:function(t){this.color=t}},computed:{animationName:function(){return this.animate?"fade":"disable"}},watch:{editing:function(t){t||this.$root.$emit("unSummonContextual")}}},p=m,v=(i("c65f"),i("2877")),y=Object(v["a"])(p,f,g,!1,null,"1b820c65",null),x=y.exports,b={name:"Key",components:{Finger:x},props:["posX","posY","x","y"],data:function(){return{isVisible:!1}},methods:{toggleVisible:function(){this.$parent.editingZone||(this.isVisible=!this.isVisible,this.isVisible&&this.$refs.finger.startEdit())}},computed:{isBlack:function(){return this.y%2?w(Math.floor((this.x-1-(this.y-1)/2)/3),2):w(this.x-1-this.y/2,6)<=1},keyColor:function(){return this.isBlack?"#999":"#FFF"},isDo:function(){return this.y%2&&0===w(this.x-1-(this.y-1)/2,6)}}};function w(t,e){return(t%e+e)%e}var _=b,k=Object(v["a"])(_,d,h,!1,null,"fdb4d30c",null),$=k.exports,E=function(){var t=this,e=t.$createElement,i=t._self._c||e;return i("g",[i("rect",{ref:"grabZone",staticStyle:{fill:"rgba(46, 213, 115, 0.2)",cursor:"grab"},attrs:{x:t.x1*t.string_spacing,y:t.y1*t.frets_spacing+t.frets_spacing/2,width:(t.x2-t.x1)*t.string_spacing,height:(t.y2-t.y1)*t.frets_spacing},on:{mousedown:function(e){return e.stopPropagation(),t.startDragRect(e)},touchstart:function(e){return e.stopPropagation(),t.startDragRect(e)}}}),i("g",{attrs:{transform:"translate("+t.x1*t.string_spacing+", "+(t.y1*t.frets_spacing+t.frets_spacing/2)+")"}},[i("polygon",{directives:[{name:"show",rawName:"v-show",value:!0,expression:"true"}],staticClass:"resize tl",attrs:{points:"0,0 10,0 10,4, 4,4 4,10, 0,10",fill:"green"}}),i("circle",{attrs:{r:"30",opacity:"0",x:"x1",y:"y1",cursor:"nwse-resize"},on:{"!mousedown":function(e){return e.stopPropagation(),t.startDrag(e)},"!touchstart":function(e){return e.stopPropagation(),t.startDrag(e)}}})]),i("g",{attrs:{transform:"translate("+(t.x2*t.string_spacing-10)+", "+(t.y1*t.frets_spacing+t.frets_spacing/2)+")"}},[i("polygon",{directives:[{name:"show",rawName:"v-show",value:!0,expression:"true"}],staticClass:"resize tr",attrs:{points:"0,0 10,0 10,10, 6,10 6,4 0,4",fill:"green"}}),i("circle",{attrs:{r:"30",opacity:"0",x:"x2",y:"y1",cursor:"nesw-resize"},on:{"!mousedown":function(e){return e.stopPropagation(),t.startDrag(e)},"!touchstart":function(e){return e.stopPropagation(),t.startDrag(e)}}})]),i("g",{attrs:{transform:"translate("+t.x1*t.string_spacing+", "+(t.y2*t.frets_spacing+t.frets_spacing/2-10)+")"}},[i("polygon",{directives:[{name:"show",rawName:"v-show",value:!0,expression:"true"}],staticClass:"resize bl",attrs:{points:"0,0 4,0 4,6 10,6 10,10 0,10",fill:"green"}}),i("circle",{attrs:{r:"30",opacity:"0",x:"x1",y:"y2",cursor:"nesw-resize"},on:{"!mousedown":function(e){return e.stopPropagation(),t.startDrag(e)},"!touchstart":function(e){return e.stopPropagation(),t.startDrag(e)}}})]),i("g",{attrs:{transform:"translate("+(t.x2*t.string_spacing-10)+", "+(t.y2*t.frets_spacing+t.frets_spacing/2-10)+")"}},[i("polygon",{directives:[{name:"show",rawName:"v-show",value:!0,expression:"true"}],staticClass:"resize br",attrs:{points:"6,0 10,0 10,10 0,10 0,6 6,6",fill:"green"}}),i("circle",{attrs:{r:"30",opacity:"0",x:"x2",y:"y2",cursor:"nwse-resize"},on:{"!mousedown":function(e){return e.stopPropagation(),t.startDrag(e)},"!touchstart":function(e){return e.stopPropagation(),t.startDrag(e)}}})])])},C=[],z=i("2f62"),T={name:"Resizer",data:function(){return{x1:0,y1:0,x2:0,y2:0,xGrab:0,yGrab:0,widthGrab:0,heightGrab:0,dragged:null,pt:null,saved:{x1:0,y1:0,x2:0,y2:0}}},methods:{startDrag:function(t){console.log("startDrag"),this.dragged=t.target,window.addEventListener("mousemove",this.onMove,!1),window.addEventListener("mouseup",this.stopDrag,!1),window.addEventListener("touchmove",this.onMove,!1),window.addEventListener("touchend",this.stopDrag,!1),document.getElementById("app").style.cursor=this.dragged.getAttribute("cursor"),this.$refs.grabZone.style.cursor=this.dragged.getAttribute("cursor")},onMove:function(t){var e=this.cursorPoint(t);this.savePosition(),this[this.dragged.getAttribute("x")]=Math.floor(e.x/this.string_spacing),this[this.dragged.getAttribute("y")]=Math.floor((e.y-this.frets_spacing/2)/this.frets_spacing),this.notValidPosition()&&this.restorePosition(),t instanceof MouseEvent&&t.preventDefault()},stopDrag:function(){window.removeEventListener("mousemove",this.onMove,!1),window.removeEventListener("mouseup",this.stopDrag,!1),window.removeEventListener("touchmove",this.onMove,!1),window.removeEventListener("touchend",this.stopDrag,!1),this.dragged=null,this.$store.dispatch("changeZone",{x1:this.x1,x2:this.x2,y1:this.y1,y2:this.y2}),document.getElementById("app").style.cursor="",this.$refs.grabZone.style.cursor="grab"},cursorPoint:function(t){return void 0!==t.touches?(this.pt.x=t.touches[0].clientX,this.pt.y=t.touches[0].clientY):(this.pt.x=t.clientX,this.pt.y=t.clientY),this.pt.matrixTransform(this.workzone.getScreenCTM().inverse())},startDragRect:function(t){console.log("startDrag"),document.body.style.cursor="grabbing",this.$refs.grabZone.style.cursor="grabbing";var e=this.cursorPoint(t);this.xGrab=e.x-this.x1*this.string_spacing,this.yGrab=e.y-this.y1*this.frets_spacing,this.widthGrab=this.x2-this.x1,this.heightGrab=this.y2-this.y1,window.addEventListener("mousemove",this.onMoveRect,!1),window.addEventListener("mouseup",this.stopDragRect,!1),window.addEventListener("touchmove",this.onMoveRect,!1),window.addEventListener("touchend",this.stopDragRect,!1)},onMoveRect:function(t){this.savePosition();var e=this.cursorPoint(t);this.x1=Math.floor((e.x-this.xGrab)/this.string_spacing),this.y1=Math.floor((e.y-this.yGrab)/this.frets_spacing),this.x2=this.x1+this.widthGrab,this.y2=this.y1+this.heightGrab,this.notValidPosition()&&this.restorePosition(),t instanceof MouseEvent&&t.preventDefault()},stopDragRect:function(){console.log("stopDrag"),document.body.style.cursor="",this.$refs.grabZone.style.cursor="grab",window.removeEventListener("mousemove",this.onMoveRect,!1),window.removeEventListener("mouseup",this.stopDragRect,!1),window.removeEventListener("touchmove",this.onMoveRect,!1),window.removeEventListener("touchend",this.stopDragRect,!1),this.$store.dispatch("changeZone",{x1:this.x1,x2:this.x2,y1:this.y1,y2:this.y2})},startTouch:function(t){console.log("yo")},savePosition:function(){this.saved.x1=this.x1,this.saved.y1=this.y1,this.saved.x2=this.x2,this.saved.y2=this.y2},restorePosition:function(){this.x1=this.saved.x1,this.y1=this.saved.y1,this.x2=this.saved.x2,this.y2=this.saved.y2},notValidPosition:function(){return(this.x1>this.x2-2||this.y1>this.y2-1||this.x1<0||this.x2>this.number_string_default+1||this.y1<0||this.y2>this.number_frets_default)&&(console.log("invalid"),!0)},test:function(){console.log("test")}},mounted:function(){this.pt=document.getElementById("tablature").createSVGPoint(),this.x1=this.$store.state.zone.x1,this.y1=this.$store.state.zone.y1,this.x2=this.$store.state.zone.x2,this.y2=this.$store.state.zone.y2},computed:Object(l["a"])(Object(l["a"])({},Object(z["b"])(["frets_spacing","string_spacing","padding","marker_width","marker_height","text_height","number_string","number_frets","number_string_default","number_frets_default"])),{},{workzone:function(){return document.getElementById("workzone")}})},S=T,O=(i("4f4f"),Object(v["a"])(S,E,C,!1,null,"0afc7771",null)),D=O.exports,P=function(){var t=this,e=t.$createElement,i=t._self._c||e;return i("g",{attrs:{transform:"translate("+t.x+", "+t.y+")"}},[i("rect",{staticStyle:{fill:"transparent"},attrs:{width:this.$parent.frets_size,height:"30"},on:{click:function(e){return e.stopPropagation(),t.editTitle(e)}}}),i("transition",{attrs:{name:"fade"}},[t.editing?t._e():i("text",{staticStyle:{"font-family":"Helvetica, Arial, sans-serif"},attrs:{x:this.$parent.frets_size/2,y:"17","alignment-baseline":"middle","text-anchor":"middle",fill:t.color},on:{click:function(e){return e.stopPropagation(),t.editTitle(e)}}},[t._v(t._s(t.titleT))])]),i("transition",{attrs:{name:"fade"}},[t.editing?i("foreignObject",{attrs:{height:"30",width:this.$parent.frets_size},on:{click:function(t){t.stopPropagation()}}},[i("input",{directives:[{name:"model",rawName:"v-model",value:t.titleT,expression:"titleT"}],ref:"textEdit",attrs:{type:"text",id:"title",width:this.$parent.frets_size},domProps:{value:t.titleT},on:{blur:function(e){return e.preventDefault(),e.stopPropagation(),t.doneEdit(e)},keyup:function(e){return!e.type.indexOf("key")&&t._k(e.keyCode,"enter",13,e.key,"Enter")?null:t.doneEdit(e)},input:function(e){e.target.composing||(t.titleT=e.target.value)}}})]):t._e()],1)],1)},V=[],j={name:"Title",props:["x","y"],data:function(){return{titleT:"",editing:!1,color:"#000000"}},methods:{editTitle:function(){var t=this;this.editing=!0;var e=document.createElement("input");e.type="text",e.style.opacity="0",document.body.appendChild(e),e.focus(),setTimeout((function(){var i=t.$refs.textEdit;i.focus(),i.select(),i.setSelectionRange(0,9999),document.body.removeChild(e)}),0),this.$root.$emit("summonContextual",this)},doneEdit:function(){this.editing=!1,this.$store.dispatch("changeTitle",this.titleT),this.$root.$emit("unSummonContextual")},changeColor:function(t){this.color=t},delete:function(){this.titleT=""}},computed:Object(l["a"])({},Object(z["b"])(["string_spacing","frets_spacing","title"])),watch:{title:function(t){this.titleT=t}},mounted:function(){this.titleT=this.$store.state.title}},B=j,M=(i("e4da"),Object(v["a"])(B,P,V,!1,null,"08b89554",null)),R=M.exports,Z=i("3835");function L(t,e){var i=t.v;I[i](t,e)}var I={"1.0":function(t,e){e.editingZone=!1,e.$store.dispatch("changeTitle",t.t),e.$store.dispatch("changeZone",{x1:t.x1,y1:t.y1,x2:t.x2,y2:t.y2}),setTimeout((function(){var i,n=Object(u["a"])(e.$refs.keys.entries());try{for(n.s();!(i=n.n()).done;){var s=Object(Z["a"])(i.value,2),r=s[0],o=s[1];0!==t.k[r]&&(o.isVisible=!0,o.$refs.finger.value=t.k[r].v,o.$refs.finger.color=t.k[r].c,o.$refs.finger.editing=!1)}}catch(a){n.e(a)}finally{n.f()}}),0)},1.1:function(t,e){e.editingZone=!1,e.$store.dispatch("changeTitle",t.t.v),e.$refs.title.color=t.t.c,e.$store.dispatch("changeZone",{x1:t.x1,y1:t.y1,x2:t.x2,y2:t.y2}),setTimeout((function(){var i,n=Object(u["a"])(e.$refs.keys.entries());try{for(n.s();!(i=n.n()).done;){var s=Object(Z["a"])(i.value,2),r=s[0],o=s[1];0!==t.k[r]&&(o.isVisible=!0,o.$refs.finger.value=t.k[r].v,o.$refs.finger.color=t.k[r].c,o.$refs.finger.editing=!1)}}catch(a){n.e(a)}finally{n.f()}}),0)}},A={name:"Tablature",components:{Key:$,Resizer:D,Title:R},data:function(){return{editingZone:!1,scale:3,svgHeight:800,svgWidth:800,xOffset:0,yOffset:0}},methods:{calculateSize:function(){var t=document.getElementById("workzoneContainer"),e=t.getBoundingClientRect().width/this.scale,i=t.getBoundingClientRect().height/this.scale,n=i/e,s=document.getElementById("main"),r=s.clientWidth,o=Math.min(window.innerHeight-0,650),a=o/r;this.scale=n<a?r/e:o/i,this.svgHeight=i*this.scale,this.svgWidth=e*this.scale,this.xOffset=-this.decX*this.string_spacing*this.scale,this.yOffset=-this.decY*this.frets_spacing*this.scale,this.$root.$emit("isTooSmall",this.svgWidth>window.innerWidth-140)},isVisible:function(t,e){return t++,t>this.x1&&t<this.x2&&e>=this.y1&&e<this.y2||this.editingZone},editZone:function(){document.getElementById("workzone").classList.add("animate-workzone"),this.editingZone=!this.editingZone,setTimeout((function(){document.getElementById("workzone").classList.remove("animate-workzone")}),600)},save:function(){if(!this.editingZone){var t,e={v:"1.1",x1:this.x1,y1:this.y1,x2:this.x2,y2:this.y2,t:{v:this.$refs.title.title,c:this.$refs.title.color},k:[]},i=Object(u["a"])(this.$refs.keys);try{for(i.s();!(t=i.n()).done;){var n=t.value;n.isVisible?e.k.push({v:n.$refs.finger.value,c:n.$refs.finger.color}):e.k.push(0)}}catch(s){i.e(s)}finally{i.f()}F(JSON.stringify(e),"tablature_"+this.$store.state.title+".htab")}},loadData:function(t){L(t,this)}},computed:Object(l["a"])({number_frets:function(){return this.editingZone?this.number_frets_default:this.y2-this.y1},number_string:function(){return this.editingZone?this.number_string_default:this.x2-this.x1-1},decX:function(){return this.editingZone?0:this.x1},decY:function(){return this.editingZone?0:this.y1},string_size:function(){return this.frets_spacing*(this.number_frets+.5)},frets_size:function(){return this.string_spacing*(this.number_string+1)},x1:function(){return this.$store.state.zone.x1},y1:function(){return this.$store.state.zone.y1},x2:function(){return this.$store.state.zone.x2},y2:function(){return this.$store.state.zone.y2}},Object(z["b"])(["frets_spacing","string_spacing","padding","marker_width","marker_height","text_height","number_string_default","number_frets_default"])),mounted:function(){window.addEventListener("resize",this.calculateSize),this.calculateSize(),this.$root.$on("editZone",this.editZone),this.$root.$on("save",this.save),this.$root.$on("loadData",this.loadData),this.$root.$on("needResize",this.calculateSize)},beforeDestroy:function(){window.removeEventListener("resize",this.calculateSize)},watch:{editingZone:function(){var t=this;setTimeout((function(){return t.calculateSize()}),1)},x1:function(){this.calculateSize()},y1:function(){this.calculateSize()},x2:function(){this.calculateSize()},y2:function(){this.calculateSize()}}};function F(t,e){var i=document.createElement("a");i.setAttribute("href","data:text/plain;charset=utf-8,"+encodeURIComponent(t)),i.setAttribute("download",e),i.style.display="none",document.getElementById("hidden").appendChild(i),i.click(),document.getElementById("hidden").removeChild(i)}var G=A,H=(i("90e6"),Object(v["a"])(G,a,c,!1,null,"5459ce06",null)),N=H.exports,X=function(){var t=this,e=t.$createElement,i=t._self._c||e;return i("div",[i("md-drawer",{class:{smaller:t.isSmaller},attrs:{"md-active":t.menuVisible,"md-persistent":"mini"},on:{"update:mdActive":function(e){t.menuVisible=e},"update:md-active":function(e){t.menuVisible=e}}},[i("md-list",[i("md-list-item",{on:{click:t.toggleMenu}},[i("font-awesome-icon",{attrs:{icon:"bars"}}),i("span",{staticClass:"md-list-item-text"},[t._v("Harpejji Tabs")])],1),i("md-list-item",{on:{click:t.editZone}},[i("font-awesome-icon",{attrs:{icon:"expand"}}),i("span",{staticClass:"md-list-item-text"},[t._v("Reframe")])],1),i("md-list-item",{on:{click:t.downloadPNG}},[i("font-awesome-icon",{attrs:{icon:"file-image",size:"lg"}}),i("span",{staticClass:"md-list-item-text"},[t._v("Download png")])],1),i("md-list-item",{on:{click:t.downloadSVG}},[i("font-awesome-icon",{attrs:{icon:"file-code",size:"lg"}}),i("span",{staticClass:"md-list-item-text"},[t._v("Download SVG")])],1),i("md-list-item",{on:{click:t.save}},[i("font-awesome-icon",{attrs:{icon:"file-download",size:"lg"}}),i("span",{staticClass:"md-list-item-text"},[t._v("Export")])],1),i("md-list-item",{on:{click:t.load}},[i("font-awesome-icon",{attrs:{icon:"file-upload",size:"lg"}}),i("span",{staticClass:"md-list-item-text"},[t._v("Import")])],1)],1)],1)],1)},Y=[];i("3ca3"),i("2b3d");function W(t,e){et((function(){K(document.getElementById("tablature"),"tablature_"+t+".svg")}),e)}function U(t,e){et((function(e,i){q(e,i,(function(e){tt(e,"tablature_"+t+".png")}))}),e)}function J(t){t.setAttribute("xmlns","http://www.w3.org/2000/svg");var e=t.outerHTML,i='<?xml version="1.0" standalone="no"?>\r\n',n=new Blob([i,e],{type:"image/svg+xml"}),s=URL.createObjectURL(n);return console.log(s),s}function K(t,e){var i=J(t);tt(i,e)}function q(t,e,i){var n=J(t);Q(n,e,(function(t){i(t),URL.revokeObjectURL(n)}))}function Q(t,e,i){var n=document.createElement("img");document.getElementById("hidden").appendChild(n),n.onload=function(){var t=document.createElement("canvas"),s=window.devicePixelRatio||1;t.width=e.width*s,t.height=e.height*s,t.style.width=e.width+"px",t.style.height=e.height+"px",console.log(e);var r=t.getContext("2d");r.setTransform(s,0,0,s,0,0),r.imageSmoothingEnabled=!1,document.getElementById("hidden").appendChild(t),r.drawImage(n,0,0,1*e.width,1*e.height);var o=t.toDataURL("image/png");i(o),document.getElementById("hidden").removeChild(t),document.getElementById("hidden").removeChild(n)},n.src=t}function tt(t,e){var i=document.createElement("a");i.href=t,i.innerHTML="Download",document.getElementById("hidden").appendChild(i),i.download=e,i.click(),document.getElementById("hidden").removeChild(i)}function et(t,e){e.$root.$emit("stopEditing");var i=document.getElementById("workzone"),n=document.getElementById("tablature"),s="scale(1) translate("+-e.x1*e.string_spacing+"px, "+-e.y1*e.frets_spacing+"px)",r=i.style.transform;i.style.transform=s;var o={width:i.getBoundingClientRect().width,height:i.getBoundingClientRect().height},a={width:n.getAttribute("width"),height:n.getAttribute("height")};n.setAttribute("width",o.width),n.setAttribute("height",o.height),t(n,o),i.style.transform=r,n.setAttribute("width",a.width),n.setAttribute("height",a.height),console.log("yo2")}var it={name:"Toolsbar",data:function(){return{menuVisible:!1,isSmaller:!1}},methods:{toggleMenu:function(){this.menuVisible=!this.menuVisible},editZone:function(){this.$root.$emit("editZone"),this.menuVisible=!1},save:function(){this.$root.$emit("save")},load:function(){document.getElementById("loadFile").click()},readFile:function(t){var e=this,i=new FileReader;i.onload=function(){var n=JSON.parse(i.result);e.$root.$emit("loadData",n),t.target.value=""},i.readAsText(t.target.files[0])},downloadSVG:function(){var t=this;setTimeout((function(){W(t.$store.state.title||"untitled",t)}),200)},downloadPNG:function(){var t=this;setTimeout((function(){U(t.$store.state.title||"untitled",t)}),200)},changeIsTooSmall:function(t){this.isSmaller=t}},mounted:function(){this.$root.$on("isTooSmall",this.changeIsTooSmall)}},nt=it,st=(i("b1d3"),Object(v["a"])(nt,X,Y,!1,null,"a31deb06",null)),rt=st.exports,ot=function(){var t=this,e=t.$createElement,i=t._self._c||e;return i("transition",{attrs:{name:"fade"}},[i("div",{directives:[{name:"show",rawName:"v-show",value:t.isVisible,expression:"isVisible"}],staticClass:"contextual-container",style:{left:t.left+"px",top:t.top+"px"}},[i("div",{staticClass:"contextual"},[i("div",{staticClass:"bubble"},[i("div",{staticClass:"colors bubble-component"},[i("div",t._l(t.colors,(function(e){return i("div",{key:e,style:{backgroundColor:e},on:{click:function(i){return t.changeColor(e)}}})})),0),i("div",t._l(t.colors2,(function(e){return i("div",{key:e,style:{backgroundColor:e},on:{click:function(i){return t.changeColor(e)}}})})),0)]),i("div",{staticClass:"options bubble-component",on:{click:t.deleteCurrent}},[i("svg",{staticClass:"bi bi-trash",attrs:{width:"32px",height:"32px",viewBox:"0 0 16 16",fill:"currentColor",xmlns:"http://www.w3.org/2000/svg"}},[i("path",{attrs:{d:"M5.5 5.5A.5.5 0 0 1 6 6v6a.5.5 0 0 1-1 0V6a.5.5 0 0 1 .5-.5zm2.5 0a.5.5 0 0 1 .5.5v6a.5.5 0 0 1-1 0V6a.5.5 0 0 1 .5-.5zm3 .5a.5.5 0 0 0-1 0v6a.5.5 0 0 0 1 0V6z"}}),i("path",{attrs:{"fill-rule":"evenodd",d:"M14.5 3a1 1 0 0 1-1 1H13v9a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V4h-.5a1 1 0 0 1-1-1V2a1 1 0 0 1 1-1H6a1 1 0 0 1 1-1h2a1 1 0 0 1 1 1h3.5a1 1 0 0 1 1 1v1zM4.118 4L4 4.059V13a1 1 0 0 0 1 1h6a1 1 0 0 0 1-1V4.059L11.882 4H4.118zM2.5 3V2h11v1h-11z"}})])])]),i("div",{staticClass:"triangle",style:{left:this.x-this.left-7+"px"}})])])])},at=[],ct={name:"Contextual",data:function(){return{isVisible:!1,x:0,y:0,forceRecompute:0,current:null,colors:["#000000","#FF5722","#FFB300"],colors2:["#42b983","#b8a3ff","#3eddff"]}},methods:{summonContextual:function(t){var e=t.$el.getBoundingClientRect();this.x=e.left+e.width/2,this.y=e.top,this.isVisible=!0,this.current=t},unSummonContextual:function(){this.isVisible=!1},deleteCurrent:function(){this.current.delete()},changeColor:function(t){this.current.changeColor(t)}},computed:{left:function(){return console.log(this.x-80,0,window.innerWidth-160),lt(this.x-80,0,window.innerWidth-160)},top:function(){return this.y-55-10}},mounted:function(){this.$root.$on("summonContextual",this.summonContextual),this.$root.$on("unSummonContextual",this.unSummonContextual)}};function lt(t,e,i){return Math.max(Math.min(t,i),e)}var ut=ct,dt=(i("c207"),Object(v["a"])(ut,ot,at,!1,null,"66df7a6e",null)),ht=dt.exports,ft=function(){var t=this,e=t.$createElement,i=t._self._c||e;return i("svg",{attrs:{height:"1000",width:"600"}},[i("g",{attrs:{transform:"translate(30, 30) scale(2)"}},[t._l(t.dominantBaselineAttrs,(function(e,n){return i("g",{attrs:{transform:"translate(50, "+30*n+")"}},[i("text",{attrs:{x:"-20px","text-anchor":"end","font-size":"6px"}},[t._v(t._s(e))]),t._l(t.characters,(function(n,s){return i("g",{attrs:{transform:"translate("+30*s+")"}},[i("circle",{attrs:{r:"12",fill:"black"}}),i("text",{staticStyle:{fill:"white","font-size":"16px","font-family":"Helvetica, Arial, sans-serif"},attrs:{"text-anchor":"middle","dominant-baseline":e}},[t._v(t._s(n)+" ")])])}))],2)})),t._l(t.dominantBaselineAttrs,(function(e,n){return i("g",{staticStyle:{display:"none"},attrs:{transform:"translate(0, "+(300+30*n)+")"}},t._l(t.characters,(function(n,s){return i("g",{attrs:{transform:"translate("+30*s+")"}},[i("circle",{attrs:{r:"12",fill:"black"}}),i("text",{staticStyle:{fill:"white","font-size":"16px","font-family":"Helvetica, Arial, sans-serif"},attrs:{"text-anchor":"middle","alignment-baseline":e}},[t._v(t._s(n)+" ")])])})),0)}))],2)])},gt=[],mt={name:"Testing.vue",data:function(){return{characters:["g","A","2","a"],dominantBaselineAttrs:["auto","text-bottom","alphabetic","ideographic","middle","central","mathematical","hanging","text-top"],alignmentBaselineAttrs:["auto","baseline","before-edge","text-before-edge","middle","central","after-edge","text-after-edge","ideographic","alphabetic","hanging","mathematical","top","center","bottom"]}}},pt=mt,vt=Object(v["a"])(pt,ft,gt,!1,null,"560cd70f",null),yt=vt.exports,xt={name:"App",components:Object(o["a"])({Testing:yt,Contextual:ht,Tablature:N,Toolsbar:rt},"Testing",yt)},bt=xt,wt=(i("034f"),Object(v["a"])(bt,s,r,!1,null,null,null)),_t=wt.exports;n["default"].use(z["a"]);var kt=new z["a"].Store({state:{frets_spacing:60,string_spacing:30,padding:20,marker_width:15,marker_height:25,text_height:20,number_string_default:18,number_frets_default:6,zone:{x1:4,y1:1,x2:10,y2:4},title:"Am7b5"},getters:{},mutations:{changeZone:function(t,e){t.zone.x1=e.x1,t.zone.x2=e.x2,t.zone.y1=e.y1,t.zone.y2=e.y2},changeTitle:function(t,e){t.title=e}},actions:{changeZone:function(t,e){t.commit("changeZone",e)},changeTitle:function(t,e){t.commit("changeTitle",e)}}}),$t=i("9c30"),Et=(i("51de"),i("e094"),i("ecee")),Ct=i("c074"),zt=i("ad3d");n["default"].use($t["MdDrawer"]),n["default"].use($t["MdList"]),Et["c"].add(Ct["a"],Ct["b"],Ct["e"],Ct["c"],Ct["d"],Ct["f"]),n["default"].component("font-awesome-icon",zt["a"]),n["default"].config.productionTip=!1,new n["default"]({store:kt,render:function(t){return t(_t)}}).$mount("#app")},"85ec":function(t,e,i){},"8b25":function(t,e,i){},"90e6":function(t,e,i){"use strict";var n=i("205b"),s=i.n(n);s.a},a682:function(t,e,i){},b1d3:function(t,e,i){"use strict";var n=i("cc21"),s=i.n(n);s.a},b381:function(t,e,i){},c207:function(t,e,i){"use strict";var n=i("8b25"),s=i.n(n);s.a},c65f:function(t,e,i){"use strict";var n=i("a682"),s=i.n(n);s.a},cc21:function(t,e,i){},e4da:function(t,e,i){"use strict";var n=i("b381"),s=i.n(n);s.a},ec0d:function(t,e,i){}});
//# sourceMappingURL=app.06cf21af.js.map