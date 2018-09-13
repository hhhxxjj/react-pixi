(window.webpackJsonp=window.webpackJsonp||[]).push([[3],{"./src/components/BitmapText.mdx":function(e,t,n){"use strict";n.r(t);var o=n("./node_modules/react/index.js"),a=n.n(o),r=n("./node_modules/@mdx-js/tag/dist/index.js"),s=n("./node_modules/docz/dist/index.m.js"),p=n("./src/stage/index.js"),i=n("./node_modules/pixi.js/lib/index.js"),l=n("./src/index.js");function c(e){return(c="function"===typeof Symbol&&"symbol"===typeof Symbol.iterator?function(e){return typeof e}:function(e){return e&&"function"===typeof Symbol&&e.constructor===Symbol&&e!==Symbol.prototype?"symbol":typeof e})(e)}function m(e,t){for(var n=0;n<t.length;n++){var o=t[n];o.enumerable=o.enumerable||!1,o.configurable=!0,"value"in o&&(o.writable=!0),Object.defineProperty(e,o.key,o)}}function d(e){return(d=Object.setPrototypeOf?Object.getPrototypeOf:function(e){return e.__proto__||Object.getPrototypeOf(e)})(e)}function u(e,t){return(u=Object.setPrototypeOf||function(e,t){return e.__proto__=t,e})(e,t)}function f(e){if(void 0===e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return e}function y(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}var x=function(e){function t(){var e,n,o,a;!function(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}(this,t);for(var r=arguments.length,s=new Array(r),p=0;p<r;p++)s[p]=arguments[p];return o=this,y(f(f(n=!(a=(e=d(t)).call.apply(e,[this].concat(s)))||"object"!==c(a)&&"function"!==typeof a?f(o):a)),"displayName","BitmapText"),y(f(f(n)),"loader",null),y(f(f(n)),"state",{loaded:!1}),n}var n,o,r;return function(e,t){if("function"!==typeof t&&null!==t)throw new TypeError("Super expression must either be null or a function");e.prototype=Object.create(t&&t.prototype,{constructor:{value:e,writable:!0,configurable:!0}}),t&&u(e,t)}(t,a.a.PureComponent),n=t,(o=[{key:"componentDidMount",value:function(){var e=this;this.loader=new i.loaders.Loader,this.loader.add("desyrel","https://s3-us-west-2.amazonaws.com/s.cdpn.io/693612/bitmapfont.xml").load(function(){e.setState({loaded:!0})})}},{key:"componentWillUnmount",value:function(){this.loader&&this.loader.destroy()}},{key:"componentDidCatch",value:function(e,t){console.log({err:e,info:t})}},{key:"render",value:function(){var e=this.state.loaded,t=this.props,n=t.x,o=void 0===n?0:n,r=t.y,s=void 0===r?0:r;return e?a.a.createElement(l.a,this.props):a.a.createElement(l.i,{anchor:.5,x:o,y:s,text:"\u231b Loading font...",style:{fontFamily:"Arial",fontSize:15}})}}])&&m(n.prototype,o),r&&m(n,r),t}();function h(e,t){if(null==e)return{};var n,o,a=function(e,t){if(null==e)return{};var n,o,a={},r=Object.keys(e);for(o=0;o<r.length;o++)n=r[o],t.indexOf(n)>=0||(a[n]=e[n]);return a}(e,t);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);for(o=0;o<r.length;o++)n=r[o],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(a[n]=e[n])}return a}t.default=function(e){var t=e.components,n=h(e,["components"]);return a.a.createElement(r.MDXTag,{name:"wrapper",components:t},a.a.createElement(r.MDXTag,{name:"h1",components:t,props:{id:"bitmaptext"}},"BitmapText"),a.a.createElement(r.MDXTag,{name:"h2",components:t,props:{id:"props"}},"Props"),a.a.createElement(r.MDXTag,{name:"p",components:t},a.a.createElement(r.MDXTag,{name:"a",components:t,parentName:"p",props:{href:"http://pixijs.download/dev/docs/PIXI.extras.BitmapText.html"}},"http://pixijs.download/dev/docs/PIXI.extras.BitmapText.html")),a.a.createElement(r.MDXTag,{name:"h2",components:t,props:{id:"usage"}},"Usage"),a.a.createElement(s.Playground,{__position:0,__code:"<Stage width={500} height={300} options={{ backgroundColor: 0xeef1f5 }}>\n  <BitmapText\n    anchor={0.5}\n    x={250}\n    y={150}\n    text=\"Hello World!\"\n    style={{ font: '50px Desyrel' }}\n  />\n</Stage>",__scope:{props:n,Stage:p.a,BitmapText:x}},a.a.createElement(p.a,{width:500,height:300,options:{backgroundColor:15659509}},a.a.createElement(x,{anchor:.5,x:250,y:150,text:"Hello World!",style:{font:"50px Desyrel"}}))),a.a.createElement(r.MDXTag,{name:"h2",components:t,props:{id:"example"}},"Example"),a.a.createElement(r.MDXTag,{name:"p",components:t},"Make sure to load the bitmap font data before mounting."),a.a.createElement(r.MDXTag,{name:"p",components:t},"See ",a.a.createElement(r.MDXTag,{name:"a",components:t,parentName:"p",props:{href:"https://pixijs.io/examples/#/demos/text-demo.js"}},"https://pixijs.io/examples/#/demos/text-demo.js")),a.a.createElement(r.MDXTag,{name:"pre",components:t},a.a.createElement(r.MDXTag,{name:"code",components:t,parentName:"pre",props:{className:"language-js"}},"import { render } from 'react-dom'\nimport { Stage, BitmapText } from '@inlet/react-pixi'\n\nPIXI.loader\n  .add('desyrel', './assets/desyrel.xml')\n  .load(onAssetsLoaded)\n\nconst App = () => (\n  <Stage>\n    <BitmapText text=\"Hello World\" style={{ font: '35px Desyrel' }}>\n  </Stage>\n)\n\nfunction onAssetsLoaded() {\n  render(<App />, document.getElementById('root'))\n}\n")))}}}]);