/*! For license information please see 70bb52c7f4786efd4761a95cb1be279009390ddc-0a64d533a5b21dc7c5f5.js.LICENSE.txt */
"use strict";(self.webpackChunkvad_var_site=self.webpackChunkvad_var_site||[]).push([[8373],{1309:function(e,t){var r="function"==typeof Symbol&&Symbol.for,o=r?Symbol.for("react.element"):60103,n=r?Symbol.for("react.portal"):60106,a=r?Symbol.for("react.fragment"):60107,c=r?Symbol.for("react.strict_mode"):60108,s=r?Symbol.for("react.profiler"):60114,i=r?Symbol.for("react.provider"):60109,l=r?Symbol.for("react.context"):60110,u=r?Symbol.for("react.async_mode"):60111,f=r?Symbol.for("react.concurrent_mode"):60111,p=r?Symbol.for("react.forward_ref"):60112,d=r?Symbol.for("react.suspense"):60113,m=r?Symbol.for("react.suspense_list"):60120,y=r?Symbol.for("react.memo"):60115,h=r?Symbol.for("react.lazy"):60116,b=r?Symbol.for("react.block"):60121,v=r?Symbol.for("react.fundamental"):60117,S=r?Symbol.for("react.responder"):60118,g=r?Symbol.for("react.scope"):60119;function $(e){if("object"==typeof e&&null!==e){var t=e.$$typeof;switch(t){case o:switch(e=e.type){case u:case f:case a:case s:case c:case d:return e;default:switch(e=e&&e.$$typeof){case l:case p:case h:case y:case i:return e;default:return t}}case n:return t}}}function C(e){return $(e)===f}t.isValidElementType=function(e){return"string"==typeof e||"function"==typeof e||e===a||e===f||e===s||e===c||e===d||e===m||"object"==typeof e&&null!==e&&(e.$$typeof===h||e.$$typeof===y||e.$$typeof===i||e.$$typeof===l||e.$$typeof===p||e.$$typeof===v||e.$$typeof===S||e.$$typeof===g||e.$$typeof===b)}},971:function(e,t,r){e.exports=r(1309)},8623:function(e,t,r){r.d(t,{Z:function(){return T}});var o=r(7294),n=r(1151),a=r(3366),c=r(7462),s=r(7326),i=r(4578),l=r(971),u=r(8679),f=r.n(u);function p(e,t){if(!e){var r=new Error("loadable: "+t);throw r.framesToPop=1,r.name="Invariant Violation",r}}var d=o.createContext();var m={initialChunks:{}},y="PENDING",h="REJECTED";var b=function(e){return e};function v(e){var t=e.defaultResolveComponent,r=void 0===t?b:t,n=e.render,u=e.onLoad;function v(e,t){void 0===t&&(t={});var b=function(e){return"function"==typeof e?{requireAsync:e,resolve:function(){},chunkName:function(){}}:e}(e),v={};function S(e){return t.cacheKey?t.cacheKey(e):b.resolve?b.resolve(e):"static"}function g(e,o,n){var a=t.resolveComponent?t.resolveComponent(e,o):r(e);if(t.resolveComponent&&!(0,l.isValidElementType)(a))throw new Error("resolveComponent returned something that is not a React component!");return f()(n,a,{preload:!0}),a}var $,C,k=function(e){var t=S(e),r=v[t];return r&&r.status!==h||((r=b.requireAsync(e)).status=y,v[t]=r,r.then((function(){r.status="RESOLVED"}),(function(t){console.error("loadable-components: failed to asynchronously load component",{fileName:b.resolve(e),chunkName:b.chunkName(e),error:t?t.message:t}),r.status=h}))),r},_=function(e){function r(r){var o;return(o=e.call(this,r)||this).state={result:null,error:null,loading:!0,cacheKey:S(r)},p(!r.__chunkExtractor||b.requireSync,"SSR requires `@loadable/babel-plugin`, please install it"),r.__chunkExtractor?(!1===t.ssr||(b.requireAsync(r).catch((function(){return null})),o.loadSync(),r.__chunkExtractor.addChunk(b.chunkName(r))),(0,s.Z)(o)):(!1!==t.ssr&&(b.isReady&&b.isReady(r)||b.chunkName&&m.initialChunks[b.chunkName(r)])&&o.loadSync(),o)}(0,i.Z)(r,e),r.getDerivedStateFromProps=function(e,t){var r=S(e);return(0,c.Z)({},t,{cacheKey:r,loading:t.loading||t.cacheKey!==r})};var o=r.prototype;return o.componentDidMount=function(){this.mounted=!0;var e=this.getCache();e&&e.status===h&&this.setCache(),this.state.loading&&this.loadAsync()},o.componentDidUpdate=function(e,t){t.cacheKey!==this.state.cacheKey&&this.loadAsync()},o.componentWillUnmount=function(){this.mounted=!1},o.safeSetState=function(e,t){this.mounted&&this.setState(e,t)},o.getCacheKey=function(){return S(this.props)},o.getCache=function(){return v[this.getCacheKey()]},o.setCache=function(e){void 0===e&&(e=void 0),v[this.getCacheKey()]=e},o.triggerOnLoad=function(){var e=this;u&&setTimeout((function(){u(e.state.result,e.props)}))},o.loadSync=function(){if(this.state.loading)try{var e=g(b.requireSync(this.props),this.props,E);this.state.result=e,this.state.loading=!1}catch(t){console.error("loadable-components: failed to synchronously load component, which expected to be available",{fileName:b.resolve(this.props),chunkName:b.chunkName(this.props),error:t?t.message:t}),this.state.error=t}},o.loadAsync=function(){var e=this,t=this.resolveAsync();return t.then((function(t){var r=g(t,e.props,E);e.safeSetState({result:r,loading:!1},(function(){return e.triggerOnLoad()}))})).catch((function(t){return e.safeSetState({error:t,loading:!1})})),t},o.resolveAsync=function(){var e=this.props,t=(e.__chunkExtractor,e.forwardedRef,(0,a.Z)(e,["__chunkExtractor","forwardedRef"]));return k(t)},o.render=function(){var e=this.props,r=e.forwardedRef,o=e.fallback,s=(e.__chunkExtractor,(0,a.Z)(e,["forwardedRef","fallback","__chunkExtractor"])),i=this.state,l=i.error,u=i.loading,f=i.result;if(t.suspense&&(this.getCache()||this.loadAsync()).status===y)throw this.loadAsync();if(l)throw l;var p=o||t.fallback||null;return u?p:n({fallback:p,result:f,options:t,props:(0,c.Z)({},s,{ref:r})})},r}(o.Component),x=(C=function(e){return o.createElement(d.Consumer,null,(function(t){return o.createElement($,Object.assign({__chunkExtractor:t},e))}))},($=_).displayName&&(C.displayName=$.displayName+"WithChunkExtractor"),C),E=o.forwardRef((function(e,t){return o.createElement(x,Object.assign({forwardedRef:t},e))}));return E.displayName="Loadable",E.preload=function(e){E.load(e)},E.load=function(e){return k(e)},E}return{loadable:v,lazy:function(e,t){return v(e,(0,c.Z)({},t,{suspense:!0}))}}}var S=v({defaultResolveComponent:function(e){return e.__esModule?e.default:e.default||e},render:function(e){var t=e.result,r=e.props;return o.createElement(t,r)}}),g=S.loadable,$=S.lazy,C=v({onLoad:function(e,t){e&&t.forwardedRef&&("function"==typeof t.forwardedRef?t.forwardedRef(e):t.forwardedRef.current=e)},render:function(e){var t=e.result,r=e.props;return r.children?r.children(t):null}}),k=C.loadable,_=C.lazy;var x=g;x.lib=k,$.lib=_;var E=x;const w=e=>E((()=>Promise.all([r.e(532),r.e(6465),r.e(0)]).then(r.bind(r,9783)).then((t=>t[e])))),N={table:w("TableWrapper"),a:w("SmartLink"),blockquote:w("BlockQuote"),SubHeader:w("SubHeader"),img:w("ImageWrapper"),code:w("CodeBlock"),QuizAlert:w("QuizAlert"),Danger:w("Danger"),Warning:w("Warning"),TokenizationApplet:w("TokenizationApplet"),CopyText:w("CopyText")};var T=e=>{let{children:t,components:r={}}=e;return o.createElement(n.Zo,{components:{...N,...r}},t)}},3383:function(e,t,r){r.d(t,{Z:function(){return l}});var o=r(7294),n=r(7500),a=r(4184),c=r.n(a),s=r(6488);const i=function(e,t,r){return void 0===t&&(t=[]),void 0===r&&(r=0),e.forEach((e=>{const{title:o,url:n,items:a}=e;t.splice(t.length,0,{depth:r,title:o,url:n}),a&&a.length>0&&i(a,t,r+1)})),t};var l=e=>{const{itemsList:t}=e,r=(0,o.useMemo)((()=>i(t[0].items||[])),[t]),a=(0,s.Z)("h1[id],h2[id]",{threshold:[0,1],rootMargin:"-48px 0px -90% 0px"});return r.length<1?null:o.createElement("nav",{className:"TableOfContents-module--toc--54d35"},o.createElement("div",{className:"TableOfContents-module--tocStack--90609"},o.createElement("h6",{className:"TableOfContents-module--tocHeader--05956"},o.createElement(n.rU,{to:"#",replace:!0},"On this page")),r.map(((e,t)=>{let{title:r,url:n}=e;return o.createElement("a",{className:c()("TableOfContents-module--link--b292b",a===n.substring(1)&&"TableOfContents-module--activeItem--3869f"),key:t,href:n},r)}))))}},8679:function(e,t,r){var o=r(7109),n={childContextTypes:!0,contextType:!0,contextTypes:!0,defaultProps:!0,displayName:!0,getDefaultProps:!0,getDerivedStateFromError:!0,getDerivedStateFromProps:!0,mixins:!0,propTypes:!0,type:!0},a={name:!0,length:!0,prototype:!0,caller:!0,callee:!0,arguments:!0,arity:!0},c={$$typeof:!0,compare:!0,defaultProps:!0,displayName:!0,propTypes:!0,type:!0},s={};function i(e){return o.isMemo(e)?c:s[e.$$typeof]||n}s[o.ForwardRef]={$$typeof:!0,render:!0,defaultProps:!0,displayName:!0,propTypes:!0},s[o.Memo]=c;var l=Object.defineProperty,u=Object.getOwnPropertyNames,f=Object.getOwnPropertySymbols,p=Object.getOwnPropertyDescriptor,d=Object.getPrototypeOf,m=Object.prototype;e.exports=function e(t,r,o){if("string"!=typeof r){if(m){var n=d(r);n&&n!==m&&e(t,n,o)}var c=u(r);f&&(c=c.concat(f(r)));for(var s=i(t),y=i(r),h=0;h<c.length;++h){var b=c[h];if(!(a[b]||o&&o[b]||y&&y[b]||s&&s[b])){var v=p(r,b);try{l(t,b,v)}catch(S){}}}}return t}},6103:function(e,t){var r="function"==typeof Symbol&&Symbol.for,o=r?Symbol.for("react.element"):60103,n=r?Symbol.for("react.portal"):60106,a=r?Symbol.for("react.fragment"):60107,c=r?Symbol.for("react.strict_mode"):60108,s=r?Symbol.for("react.profiler"):60114,i=r?Symbol.for("react.provider"):60109,l=r?Symbol.for("react.context"):60110,u=r?Symbol.for("react.async_mode"):60111,f=r?Symbol.for("react.concurrent_mode"):60111,p=r?Symbol.for("react.forward_ref"):60112,d=r?Symbol.for("react.suspense"):60113,m=r?Symbol.for("react.suspense_list"):60120,y=r?Symbol.for("react.memo"):60115,h=r?Symbol.for("react.lazy"):60116,b=r?Symbol.for("react.block"):60121,v=r?Symbol.for("react.fundamental"):60117,S=r?Symbol.for("react.responder"):60118,g=r?Symbol.for("react.scope"):60119;function $(e){if("object"==typeof e&&null!==e){var t=e.$$typeof;switch(t){case o:switch(e=e.type){case u:case f:case a:case s:case c:case d:return e;default:switch(e=e&&e.$$typeof){case l:case p:case h:case y:case i:return e;default:return t}}case n:return t}}}function C(e){return $(e)===f}t.AsyncMode=u,t.ConcurrentMode=f,t.ContextConsumer=l,t.ContextProvider=i,t.Element=o,t.ForwardRef=p,t.Fragment=a,t.Lazy=h,t.Memo=y,t.Portal=n,t.Profiler=s,t.StrictMode=c,t.Suspense=d,t.isAsyncMode=function(e){return C(e)||$(e)===u},t.isConcurrentMode=C,t.isContextConsumer=function(e){return $(e)===l},t.isContextProvider=function(e){return $(e)===i},t.isElement=function(e){return"object"==typeof e&&null!==e&&e.$$typeof===o},t.isForwardRef=function(e){return $(e)===p},t.isFragment=function(e){return $(e)===a},t.isLazy=function(e){return $(e)===h},t.isMemo=function(e){return $(e)===y},t.isPortal=function(e){return $(e)===n},t.isProfiler=function(e){return $(e)===s},t.isStrictMode=function(e){return $(e)===c},t.isSuspense=function(e){return $(e)===d},t.isValidElementType=function(e){return"string"==typeof e||"function"==typeof e||e===a||e===f||e===s||e===c||e===d||e===m||"object"==typeof e&&null!==e&&(e.$$typeof===h||e.$$typeof===y||e.$$typeof===i||e.$$typeof===l||e.$$typeof===p||e.$$typeof===v||e.$$typeof===S||e.$$typeof===g||e.$$typeof===b)},t.typeOf=$},7109:function(e,t,r){e.exports=r(6103)},7315:function(e,t,r){r.d(t,{Y2:function(){return o},YS:function(){return a},ey:function(){return n}});var o="{mdx-fields__slug}-module--article--e3d5a",n="{mdx-fields__slug}-module--noToc--82387",a="{mdx-fields__slug}-module--wrapper--58e72"},1151:function(e,t,r){r.d(t,{Zo:function(){return s},ah:function(){return a}});var o=r(7294);const n=o.createContext({});function a(e){const t=o.useContext(n);return o.useMemo((()=>"function"==typeof e?e(t):{...t,...e}),[t,e])}const c={};function s({components:e,children:t,disableParentContext:r}){let s;return s=r?"function"==typeof e?e({}):e||c:a(e),o.createElement(n.Provider,{value:s},t)}}}]);
//# sourceMappingURL=70bb52c7f4786efd4761a95cb1be279009390ddc-0a64d533a5b21dc7c5f5.js.map