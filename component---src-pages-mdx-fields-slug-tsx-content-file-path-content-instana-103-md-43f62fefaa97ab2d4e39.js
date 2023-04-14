"use strict";(self.webpackChunkvad_var_site=self.webpackChunkvad_var_site||[]).push([[466],{9185:function(e,t,n){n.r(t),n.d(t,{Head:function(){return f},default:function(){return E}});var a=n(1151),l=n(7294);function r(e){const t=Object.assign({h1:"h1",h2:"h2",a:"a",p:"p",img:"img",ol:"ol",li:"li",code:"code",strong:"strong",em:"em"},(0,a.ah)(),e.components),{SubHeader:n}=t;return n||function(e,t){throw new Error("Expected "+(t?"component":"object")+" `"+e+"` to be defined: you likely forgot to import, pass, or provide it.")}("SubHeader",!0),l.createElement(l.Fragment,null,l.createElement(t.h1,{id:"103-load-testing-and-chaos"},"103: Load Testing and Chaos"),"\n",l.createElement(n,{timeToComplete:e.pageContext.frontmatter.timeToComplete,updated:e.pageContext.frontmatter.updated}),"\n",l.createElement(t.h2,{id:"analyzing-a-load-test-using-instana"},l.createElement(t.a,{href:"#analyzing-a-load-test-using-instana"},"Analyzing A Load Test Using Instana")),"\n",l.createElement(t.p,null,"The application perspective provides you with an overview dashboard that gives you a useful first impression of the load test scenario."),"\n",l.createElement(t.img,{src:"/1681500964640.70581103117/application-perspective.png",alt:""}),"\n",l.createElement(t.p,null,"Instana will give you live insights about your entire platform allowing you to instantly understand the consequences of your load test."),"\n",l.createElement(t.p,null,"We will be conducting a small test on the robot shop platform provided by (",l.createElement(t.a,{href:"https://github.com/instana/robot-shop/tree/master/load-gen"},"Instana"),").:"),"\n",l.createElement(t.ol,null,"\n",l.createElement(t.li,null,"\n",l.createElement(t.p,null,"Run the load generation script provided by Instana"),"\n",l.createElement(t.p,null,"In a terminal run this command ",l.createElement(t.code,null,"./load-gen.sh")," under your version of robot-shop in the ",l.createElement(t.code,null,"load-gen")," folder."),"\n",l.createElement(t.p,null,"The script output should look like the following image:"),"\n",l.createElement(t.img,{src:"/1681500964656.7071103120/load-gen-script.png",alt:""}),"\n"),"\n",l.createElement(t.li,null,"\n",l.createElement(t.p,null,"In your application perspective for robot shop, you should see the number of calls have increased and the errorneous calls have also increased."),"\n",l.createElement(t.img,{src:"/1681500964648.70631103119/erroneous-calls.png",alt:""}),"\n"),"\n",l.createElement(t.li,null,"\n",l.createElement(t.p,null,"CPU Utilization and Context Switches during the load test"),"\n",l.createElement(t.img,{src:"/1681500964644.7061103118/cpu-usage.png",alt:""}),"\n",l.createElement(t.p,null,"When the memory is completely consumed, the system starts trying to deal with the situation."),"\n",l.createElement(t.p,null,"The CPU consumption rises and the ",l.createElement(t.strong,null,"context switching")," becomes more of an issue, until it completely gets out of control. At this point it is pretty clear what the root cause for the behavior of the Application is – there are not sufficient hardware resources to handle the load. This makes sense keeping in mind that our huge technology stack is running on a small machine."),"\n"),"\n",l.createElement(t.li,null,"\n",l.createElement(t.p,null,"View all api traces"),"\n",l.createElement(t.p,null,"Let’s explore an api trace by selecting it from the ",l.createElement(t.em,null,"Top Traces")," list to see details about those requests.\nWith a single click on the link, we slice through the tracing data to get only the relevant traces. We can derive from the overview, which service is involved and the latency for each of the erroneous calls."),"\n",l.createElement(t.img,{src:"/1681500964660.70731103121/trace-calls.png",alt:""}),"\n",l.createElement(t.p,null,"A load test, as realistic as it might be, is only worth as much as you can get out of its analysis. Since Instana makes this process even easier, it is a perfect match for load testing"),"\n"),"\n"))}var o=function(e){void 0===e&&(e={});const{wrapper:t}=Object.assign({},(0,a.ah)(),e.components);return t?l.createElement(t,e,l.createElement(r,e)):r(e)};var i=n(7315),s=n(2125),c=n(403),u=n(4690),m=n(4184),h=n.n(m);const p={table:c.y6,a:c.IW,blockquote:c.R4,SubHeader:c.bU,img:c.fb,code:c.dn,QuizAlert:c.SA},d=l.memo((function(e){let{children:t}=e;return l.createElement(a.Zo,{components:{...p}},t)})),g=e=>{const{data:{mdx:{tableOfContents:{items:t},frontmatter:{toc:n=!0}}},children:a}=e,r=(0,l.useRef)(null),{0:o,1:c}=(0,l.useState)("");(0,l.useEffect)((()=>{if(!r.current)return;const e=r.current.querySelectorAll("h2,h3,h4,h5"),t=new IntersectionObserver((e=>{e.forEach((e=>{e.isIntersecting&&c(e.target.id)}))}),{rootMargin:"0px 0px -95% 0px",threshold:0});return e.forEach((e=>{t.observe(e)})),()=>t.disconnect()}),[]);const u=(null===n||n)&&t;return l.createElement(l.Fragment,null,l.createElement("article",{className:h()(i.Y,!u&&i.e),ref:r},l.createElement(d,null,a)),u&&l.createElement(s.Z,{itemsList:t,maxDepth:1,currSection:o}))},f=e=>{const{location:{pathname:t},data:{mdx:{frontmatter:{title:n},tableOfContents:{items:a}}}}=e;return l.createElement(u.Z,{pathname:t,title:n||a[0].title||void 0})};function E(e){return l.createElement(g,e,l.createElement(o,e))}}}]);
//# sourceMappingURL=component---src-pages-mdx-fields-slug-tsx-content-file-path-content-instana-103-md-43f62fefaa97ab2d4e39.js.map