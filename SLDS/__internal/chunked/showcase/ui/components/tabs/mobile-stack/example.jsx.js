var SLDS="object"==typeof SLDS?SLDS:{};SLDS["__internal/chunked/showcase/ui/components/tabs/mobile-stack/example.jsx.js"]=function(e){function t(t){for(var a,i,c=t[0],s=t[1],o=t[2],m=0,d=[];m<c.length;m++)i=c[m],Object.prototype.hasOwnProperty.call(l,i)&&l[i]&&d.push(l[i][0]),l[i]=0;for(a in s)Object.prototype.hasOwnProperty.call(s,a)&&(e[a]=s[a]);for(u&&u(t);d.length;)d.shift()();return r.push.apply(r,o||[]),n()}function n(){for(var e,t=0;t<r.length;t++){for(var n=r[t],a=!0,c=1;c<n.length;c++){var s=n[c];0!==l[s]&&(a=!1)}a&&(r.splice(t--,1),e=i(i.s=n[0]))}return e}var a={},l={144:0,6:0,13:0,14:0,22:0,24:0,26:0,36:0,37:0,56:0,72:0,73:0,79:0,80:0,93:0,94:0,96:0,97:0,98:0,103:0,104:0,112:0,117:0,118:0,122:0,124:0,127:0,131:0,133:0,135:0,136:0,137:0,140:0,142:0,145:0,146:0,147:0,150:0,154:0,157:0},r=[];function i(t){if(a[t])return a[t].exports;var n=a[t]={i:t,l:!1,exports:{}};return e[t].call(n.exports,n,n.exports,i),n.l=!0,n.exports}i.m=e,i.c=a,i.d=function(e,t,n){i.o(e,t)||Object.defineProperty(e,t,{enumerable:!0,get:n})},i.r=function(e){"undefined"!=typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(e,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(e,"__esModule",{value:!0})},i.t=function(e,t){if(1&t&&(e=i(e)),8&t)return e;if(4&t&&"object"==typeof e&&e&&e.__esModule)return e;var n=Object.create(null);if(i.r(n),Object.defineProperty(n,"default",{enumerable:!0,value:e}),2&t&&"string"!=typeof e)for(var a in e)i.d(n,a,function(t){return e[t]}.bind(null,a));return n},i.n=function(e){var t=e&&e.__esModule?function(){return e.default}:function(){return e};return i.d(t,"a",t),t},i.o=function(e,t){return Object.prototype.hasOwnProperty.call(e,t)},i.p="/assets/scripts/bundle/";var c=this.webpackJsonpSLDS___internal_chunked_showcase=this.webpackJsonpSLDS___internal_chunked_showcase||[],s=c.push.bind(c);c.push=t,c=c.slice();for(var o=0;o<c.length;o++)t(c[o]);var u=s;return r.push([261,0]),n()}({0:function(e,t){e.exports=React},16:function(e,t){e.exports=ReactDOM},261:function(e,t,n){"use strict";n.r(t),n.d(t,"states",(function(){return C})),n.d(t,"examples",(function(){return R}));var a=n(0),l=n.n(a),r=n(1),i=n.n(r),c=n(2),s=n.n(c),o=n(8),u=n(69),m=n(11);function d(e){return(d="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(e){return typeof e}:function(e){return e&&"function"==typeof Symbol&&e.constructor===Symbol&&e!==Symbol.prototype?"symbol":typeof e})(e)}function f(e,t){for(var n=0;n<t.length;n++){var a=t[n];a.enumerable=a.enumerable||!1,a.configurable=!0,"value"in a&&(a.writable=!0),Object.defineProperty(e,a.key,a)}}function p(e,t){return(p=Object.setPrototypeOf||function(e,t){return e.__proto__=t,e})(e,t)}function b(e,t){return!t||"object"!==d(t)&&"function"!=typeof t?h(e):t}function h(e){if(void 0===e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return e}function y(){if("undefined"==typeof Reflect||!Reflect.construct)return!1;if(Reflect.construct.sham)return!1;if("function"==typeof Proxy)return!0;try{return Date.prototype.toString.call(Reflect.construct(Date,[],(function(){}))),!0}catch(e){return!1}}function E(e){return(E=Object.setPrototypeOf?Object.getPrototypeOf:function(e){return e.__proto__||Object.getPrototypeOf(e)})(e)}var v=function(e){return l.a.createElement("div",{className:"slds-tabs-mobile__group"},e.children)};v.propTypes={children:i.a.node};var P=function(e){return l.a.createElement("div",{className:"slds-tabs-mobile__container"},e.children)};P.propTypes={children:i.a.node};var _=function(e){return l.a.createElement("ul",{className:s()("slds-tabs-mobile",{"slds-hidden":e.isHidden})},e.children)};_.propTypes={children:i.a.node,isHidden:i.a.bool};var I=function(e){return l.a.createElement("li",{className:s()("slds-tabs-mobile__item")},e.children)};I.propTypes={children:i.a.node};var S=function(e){return l.a.createElement(m.Button,{isFullWidth:!0,onClick:e.onClick},l.a.createElement("span",{className:"slds-truncate",title:e.summary},e.summary),l.a.createElement(o.a,{className:"slds-icon slds-icon_x-small slds-icon-text-default",sprite:"utility",symbol:"chevronright"}))};S.propTypes={onClick:i.a.func,summary:i.a.string};var O=function(e){return l.a.createElement(u.b,{title:e.title,isAnimated:!0,docked:"left",invoke:"drill-in",isInvokedByTab:!0,isVisible:e.isVisible||!1,handleVisibility:e.hidePanel,hasCenterTitle:!0},e.children||"A panel body accepts any layout or component")};O.propTypes={hidePanel:i.a.func,isVisible:i.a.bool,title:i.a.string,children:i.a.node};var w=function(e){return l.a.createElement(P,null,l.a.createElement(_,{isHidden:!0},l.a.createElement(I,null,l.a.createElement(S,{summary:"Item One"})),l.a.createElement(I,null,l.a.createElement(S,{summary:"Item Two"})),l.a.createElement(I,null,l.a.createElement(S,{summary:"Item Three"}))),l.a.createElement(O,{title:"Item 1 Panel",isVisible:!0},l.a.createElement(_,null,l.a.createElement(I,null,l.a.createElement(S,{summary:"Nested Item One"})),l.a.createElement(I,null,l.a.createElement(S,{summary:"Nested Item Two"})),l.a.createElement(I,null,l.a.createElement(S,{summary:"Nested Item Three"}))),l.a.createElement("div",null," Any content can be here "),l.a.createElement(_,null,l.a.createElement(I,null,l.a.createElement(S,{summary:"Nested Item Four"})),l.a.createElement(I,null,l.a.createElement(S,{summary:"Nested Item Five"})))),l.a.createElement(O,{title:"Item 2 Panel"}),l.a.createElement(O,{title:"Item 3 Panel"}),l.a.createElement(O,{title:"Nested Item 1 Panel"}),l.a.createElement(O,{title:"Nested Item 2 Panel"}),l.a.createElement(O,{title:"Nested Item 3 Panel"}),l.a.createElement(O,{title:"Nested Item 4 Panel"}),l.a.createElement(O,{title:"Nested Item 5 Panel"}))},k=function(e){!function(e,t){if("function"!=typeof t&&null!==t)throw new TypeError("Super expression must either be null or a function");e.prototype=Object.create(t&&t.prototype,{constructor:{value:e,writable:!0,configurable:!0}}),t&&p(e,t)}(c,e);var t,n,a,r,i=(t=c,function(){var e,n=E(t);if(y()){var a=E(this).constructor;e=Reflect.construct(n,arguments,a)}else e=n.apply(this,arguments);return b(this,e)});function c(e){var t;return function(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}(this,c),(t=i.call(this,e)).hidePanel=t.hidePanel.bind(h(t)),t.state={visiblePanelIdx:-1},t}return n=c,(a=[{key:"componentDidMount",value:function(){void 0!==this.props.visiblePanelIdx&&-1===this.state.visiblePanelIdx&&this.setState({visiblePanelIdx:this.props.visiblePanelIdx})}},{key:"showPanel",value:function(e){this.props.isStatic||this.setState({visiblePanelIdx:e})}},{key:"hidePanel",value:function(){this.props.isStatic||this.setState({visiblePanelIdx:-1})}},{key:"render",value:function(){var e=this.state.visiblePanelIdx;return l.a.createElement(P,null,l.a.createElement(_,{isHidden:-1!==e},l.a.createElement(I,null,l.a.createElement(S,{summary:"Item One",onClick:this.showPanel.bind(this,0)})),l.a.createElement(I,null,l.a.createElement(S,{summary:"Item Two",onClick:this.showPanel.bind(this,1)})),l.a.createElement(I,null,l.a.createElement(S,{summary:"Item Three",onClick:this.showPanel.bind(this,2)}))),l.a.createElement(O,{title:"Item 1 Panel",isVisible:0===e,hidePanel:this.hidePanel}),l.a.createElement(O,{title:"Item 2 Panel",isVisible:1===e,hidePanel:this.hidePanel}),l.a.createElement(O,{title:"Item 3 Panel",isVisible:2===e,hidePanel:this.hidePanel}))}}])&&f(n.prototype,a),r&&f(n,r),c}(a.Component);k.propTypes={visiblePanelIdx:i.a.number,isStatic:i.a.bool};var x=k,T=function(e){return l.a.createElement("ul",{className:s()("slds-tabs_mobile")},e.children)},N=function(e){return l.a.createElement("li",{className:s()("slds-tabs_mobile__item")},e.children)},g=function(e){return l.a.createElement("div",{className:s()("slds-tabs_mobile__title",e.className)},e.children)},j=function(e){return l.a.createElement("button",{className:"slds-tabs_mobile__title-action slds-button slds-button_reset"},l.a.createElement("span",{className:"slds-truncate",title:e.summary},e.summary),l.a.createElement(o.a,{className:"slds-icon slds-icon_x-small slds-icon-text-default",sprite:"utility",symbol:"chevronright"}))},D=function(e){return l.a.createElement(T,null,l.a.createElement(N,null,l.a.createElement(g,null,l.a.createElement(j,{summary:"Item One"}))),l.a.createElement(N,null,l.a.createElement(g,null,l.a.createElement(j,{summary:"Item Two"}))),l.a.createElement(N,null,l.a.createElement(g,null,l.a.createElement(j,{summary:"Item Three"}))))},L=function(e){return l.a.createElement("div",null,l.a.createElement(T,null,l.a.createElement(N,null,l.a.createElement(g,null,l.a.createElement(j,{summary:"List 1 Item One"}))),l.a.createElement(N,null,l.a.createElement(g,null,l.a.createElement(j,{summary:"List 1 Item Two"})))),l.a.createElement(T,null,l.a.createElement(N,null,l.a.createElement(g,null,l.a.createElement(j,{summary:"List 2 Item One"}))),l.a.createElement(N,null,l.a.createElement(g,null,l.a.createElement(j,{summary:"List 2 Item Two with A Really Long Name"}))),l.a.createElement(N,null,l.a.createElement(g,null,l.a.createElement(j,{summary:"List 2 Item Three"})))))},C=(t.default=l.a.createElement(x,null),[{id:"drilled-in",label:"Drilled In",element:l.a.createElement(x,{visiblePanelIdx:0,isStatic:!0})}]),R=[{id:"adjacent",label:"Adjacent Stacked Drill Ins",element:l.a.createElement(v,null,l.a.createElement(x,{isStatic:!0}),l.a.createElement(x,{isStatic:!0}))},{id:"nested",label:"Nested Stacked Drill Ins",element:l.a.createElement(w,null)},{id:"deprecated-tab-stack",label:"Deprecated Stacked Tabs",element:l.a.createElement(D,null)},{id:"deprecated-adjacent-tab-stack",label:"Deprecated Adjacent Tab Stack",element:l.a.createElement(L,null)}]}});