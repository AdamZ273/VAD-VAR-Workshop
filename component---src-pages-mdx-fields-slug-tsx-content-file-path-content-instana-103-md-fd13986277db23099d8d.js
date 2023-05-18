"use strict";(self.webpackChunkvad_var_site=self.webpackChunkvad_var_site||[]).push([[9466],{9185:function(e,t,n){n.r(t),n.d(t,{Head:function(){return f},default:function(){return E}});var a=n(1151),l=n(7294);function r(e){const t=Object.assign({section:"section",h1:"h1",h2:"h2",a:"a",p:"p",img:"img",ol:"ol",li:"li",code:"code",strong:"strong",em:"em"},(0,a.ah)(),e.components);return l.createElement(t.section,{className:"heading","data-heading-rank":"1","aria-labelledby":"103-load-testing-and-chaos"},l.createElement(t.h1,{id:"103-load-testing-and-chaos"},"103: Load Testing and Chaos"),"\n",l.createElement(t.section,{className:"heading","data-heading-rank":"2","aria-labelledby":"analyzing-a-load-test-using-instana"},l.createElement(t.h2,{id:"analyzing-a-load-test-using-instana"},l.createElement(t.a,{href:"#analyzing-a-load-test-using-instana"},"Analyzing A Load Test Using Instana")),"\n",l.createElement(t.p,null,"The application perspective provides you with an overview dashboard that gives you a useful first impression of the load test scenario."),"\n",l.createElement(t.img,{src:"/1684440648613.8713862448/application-perspective.png",alt:""}),"\n",l.createElement(t.p,null,"Instana will give you live insights about your entire platform allowing you to instantly understand the consequences of your load test."),"\n",l.createElement(t.p,null,"We will be conducting a small test on the robot shop platform provided by (",l.createElement(t.a,{href:"https://github.com/instana/robot-shop/tree/master/load-gen"},"Instana"),").:"),"\n",l.createElement(t.ol,null,"\n",l.createElement(t.li,null,"\n",l.createElement(t.p,null,"Run the load generation script provided by Instana"),"\n",l.createElement(t.p,null,"In a terminal run this command ",l.createElement(t.code,null,"./load-gen.sh")," under your version of robot-shop in the ",l.createElement(t.code,null,"load-gen")," folder."),"\n",l.createElement(t.p,null,"The script output should look like the following image:"),"\n",l.createElement(t.img,{src:"/1684440648625.8718862451/load-gen-script.png",alt:""}),"\n"),"\n",l.createElement(t.li,null,"\n",l.createElement(t.p,null,"In your application perspective for robot shop, you should see the number of calls have increased and the errorneous calls have also increased."),"\n",l.createElement(t.img,{src:"/1684440648617.8716862450/erroneous-calls.png",alt:""}),"\n"),"\n",l.createElement(t.li,null,"\n",l.createElement(t.p,null,"CPU Utilization and Context Switches during the load test"),"\n",l.createElement(t.img,{src:"/1684440648617.8716862449/cpu-usage.png",alt:""}),"\n",l.createElement(t.p,null,"When the memory is completely consumed, the system starts trying to deal with the situation."),"\n",l.createElement(t.p,null,"The CPU consumption rises and the ",l.createElement(t.strong,null,"context switching")," becomes more of an issue, until it completely gets out of control. At this point it is pretty clear what the root cause for the behavior of the Application is – there are not sufficient hardware resources to handle the load. This makes sense keeping in mind that our huge technology stack is running on a small machine."),"\n"),"\n",l.createElement(t.li,null,"\n",l.createElement(t.p,null,"View all api traces"),"\n",l.createElement(t.p,null,"Let’s explore an api trace by selecting it from the ",l.createElement(t.em,null,"Top Traces")," list to see details about those requests.\nWith a single click on the link, we slice through the tracing data to get only the relevant traces. We can derive from the overview, which service is involved and the latency for each of the erroneous calls."),"\n",l.createElement(t.img,{src:"/1684440648625.8718862452/trace-calls.png",alt:""}),"\n",l.createElement(t.p,null,"A load test, as realistic as it might be, is only worth as much as you can get out of its analysis. Since Instana makes this process even easier, it is a perfect match for load testing"),"\n"),"\n")))}var o=function(e){void 0===e&&(e={});const{wrapper:t}=Object.assign({},(0,a.ah)(),e.components);return t?l.createElement(t,e,l.createElement(r,e)):r(e)},i=n(7315),c=n(3383),s=n(4690),m=n(2565),u=n(1140),d=n(8531),h=n(4184),p=n.n(h);const g=e=>{const{data:{mdx:{tableOfContents:{items:t},frontmatter:{toc:n=!0,title:a,timeToComplete:r,updated:o}}},children:s}=e,h=(0,l.useRef)(null),{0:g}=(0,l.useState)(""),f=(null===n||n)&&t;return l.createElement(l.Fragment,null,l.createElement(u.Z,{timeToComplete:r,updated:o},t[0].title||a||""),l.createElement(d.Z,{className:i.YS},l.createElement("article",{className:p()(i.Y2,!f&&i.ey),ref:h},l.createElement(m.Z,{components:{h1:()=>null}},s)),f&&l.createElement(c.Z,{itemsList:t,maxDepth:2,currSection:g})))},f=e=>{const{location:{pathname:t},data:{mdx:{frontmatter:{title:n},tableOfContents:{items:a}}}}=e;return l.createElement(s.Z,{pathname:t,title:n||a[0].title||void 0})};function E(e){return l.createElement(g,e,l.createElement(o,e))}},2565:function(e,t,n){n.d(t,{Z:function(){return i}});var a=n(7294),l=n(1151),r=n(987);const o={table:r.y6,a:r.IW,blockquote:r.R4,SubHeader:r.bU,img:r.fb,code:r.dn,QuizAlert:r.SA};var i=a.memo((function(e){let{children:t,components:n={}}=e;return a.createElement(l.Zo,{components:{...o,...n}},t)}))},4690:function(e,t,n){var a=n(7294),l=n(1072),r=n(2401);t.Z=e=>{const{title:t,description:n,pathname:o,children:i}=e,{description:c,title:s,origin:m}=(0,r.Z)(),{i18n:{language:u}}=(0,l.$G)(),d={title:t||s,description:n||c,url:""+m+(o||"")};return a.createElement(a.Fragment,null,a.createElement("html",{lang:u}),a.createElement("link",{rel:"icon",href:"data:image/svg+xml,<svg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 100 100'><text y='0.9em' font-size='90'>🦺</text></svg>"}),a.createElement("title",null,d.title),a.createElement("link",{rel:"canonical",href:d.url}),a.createElement("meta",{name:"description",content:d.description}),a.createElement("meta",{property:"og:title",content:d.title}),a.createElement("meta",{property:"og:url",content:d.url}),a.createElement("meta",{property:"og:type",content:"website"}),a.createElement("meta",{property:"og:description",content:d.description}),a.createElement("meta",{name:"twitter:card",content:"summary"}),a.createElement("meta",{name:"twitter:title",content:d.title}),a.createElement("meta",{name:"twitter:url",content:d.url}),a.createElement("meta",{name:"twitter:description",content:d.description}),a.createElement("meta",{name:"twitter:site",content:"https://www.ibm.com"}),a.createElement("meta",{name:"twitter:creator",content:"@IBM"}),i)}},3383:function(e,t,n){n.d(t,{Z:function(){return s}});var a=n(7294),l=n(7500),r=n(4184),o=n.n(r),i=n(6488);const c=function(e,t,n){return void 0===t&&(t=[]),void 0===n&&(n=0),e.forEach((e=>{const{title:a,url:l,items:r}=e;t.splice(t.length,0,{depth:n,title:a,url:l}),r&&r.length>0&&c(r,t,n+1)})),t};var s=e=>{const{itemsList:t}=e,n=(0,a.useMemo)((()=>c(t[0].items||[])),[t]),r=(0,i.Z)("h1[id],h2[id]",{threshold:[0,1],rootMargin:"-48px 0px -90% 0px"});return n.length<1?null:a.createElement("nav",{className:"TableOfContents-module--toc--54d35"},a.createElement("div",{className:"TableOfContents-module--tocStack--90609"},a.createElement("h6",{className:"TableOfContents-module--tocHeader--05956"},a.createElement(l.rU,{to:"#",replace:!0},"On this page")),n.map(((e,t)=>{let{title:n,url:l}=e;return a.createElement("a",{className:o()("TableOfContents-module--link--b292b",r===l.substring(1)&&"TableOfContents-module--activeItem--3869f"),key:t,href:l},n)}))))}},7315:function(e,t,n){n.d(t,{Y2:function(){return a},YS:function(){return r},ey:function(){return l}});var a="{mdx-fields__slug}-module--article--e3d5a",l="{mdx-fields__slug}-module--noToc--82387",r="{mdx-fields__slug}-module--wrapper--58e72"},1151:function(e,t,n){n.d(t,{Zo:function(){return i},ah:function(){return r}});var a=n(7294);const l=a.createContext({});function r(e){const t=a.useContext(l);return a.useMemo((()=>"function"==typeof e?e(t):{...t,...e}),[t,e])}const o={};function i({components:e,children:t,disableParentContext:n}){let i;return i=n?"function"==typeof e?e({}):e||o:r(e),a.createElement(l.Provider,{value:i},t)}}}]);
//# sourceMappingURL=component---src-pages-mdx-fields-slug-tsx-content-file-path-content-instana-103-md-fd13986277db23099d8d.js.map