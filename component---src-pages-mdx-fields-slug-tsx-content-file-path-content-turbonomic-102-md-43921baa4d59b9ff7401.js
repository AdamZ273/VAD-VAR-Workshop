"use strict";(self.webpackChunkvad_var_site=self.webpackChunkvad_var_site||[]).push([[4033],{9001:function(e,t,n){n.r(t),n.d(t,{Head:function(){return f},default:function(){return E}});var a=n(1151),l=n(7294);function r(e){const t=Object.assign({section:"section",h1:"h1",h2:"h2",a:"a",p:"p",em:"em",strong:"strong",ol:"ol",li:"li",img:"img"},(0,a.ah)(),e.components),{QuizAlert:n}=t;return n||function(e,t){throw new Error("Expected "+(t?"component":"object")+" `"+e+"` to be defined: you likely forgot to import, pass, or provide it.")}("QuizAlert",!0),l.createElement(l.Fragment,null,l.createElement(t.section,{className:"heading","data-heading-rank":"1","aria-labelledby":"102-explore-turbonomic-ui"},l.createElement(t.h1,{id:"102-explore-turbonomic-ui"},"102: Explore Turbonomic UI"),"\n",l.createElement(t.section,{className:"heading","data-heading-rank":"2","aria-labelledby":"goal"},l.createElement(t.h2,{id:"goal"},l.createElement(t.a,{href:"#goal"},"Goal")),"\n",l.createElement(t.p,null,"Welcome to Turbonomic! In this lab, you will explore the Turbonomic user interface and familiarize yourself with its different parts."),"\n",l.createElement(t.p,null,l.createElement(t.em,null,l.createElement(t.strong,null,"Note"),": You logged in with an admin user so you will be able to see the entire environment monitored by Turbonomic. Once you go through the ",l.createElement(t.strong,null,"Administration")," lab, you will learn that different access levels can be assigned to users and their dashboard will differ from what you see here.")),"\n",l.createElement(n,{text:"L3 Quiz Content denoted in green"}),"\n")),l.createElement(t.section,{className:"heading","data-heading-rank":"1","aria-labelledby":"main-dashboard"},l.createElement(t.h1,{id:"main-dashboard"},"Main Dashboard"),"\n",l.createElement(t.p,null,"Upon login, you will be presented with the main Turbonomic dashboard."),"\n",l.createElement(t.ol,null,"\n",l.createElement(t.li,null,"The three tabs at the top give you access to global (full-environment) views."),"\n",l.createElement(t.li,null,"The Supply Chain on the left show you the entities Turbonomic has discovered and their health."),"\n",l.createElement(t.li,null,"The pending actions shows you the actions you should take to optimize your environment and assure performance. We will explore this further in the ",l.createElement(t.strong,null,"Actions")," lab."),"\n",l.createElement(t.li,null,"These are Widgets. They are panels that contain information regarding your environment."),"\n",l.createElement(t.li,null,"On the far left is the Navigator – you can use this to access Turbonomic’s other features.","\n",l.createElement(n,{text:"Quiz Material"}),"\n"),"\n"),"\n",l.createElement(t.img,{src:"/1684787947030.7641089056/dashboard.png",alt:""}),"\n",l.createElement(t.p,null,"Click on ",l.createElement(t.strong,null,"On-Prem")," from the tabs above to view the health of your entire on-prem environment."),"\n",l.createElement(t.img,{src:"/1684787947038.7641089059/onprem.png",alt:""}),"\n",l.createElement(t.p,null,"Now click on the ",l.createElement(t.strong,null,"Cloud")," tab to narrow the focus on all of the cloud environments being monitored."),"\n",l.createElement(t.p,null,"Since cloud instances usually have dollar values associated with them, Turbonomic is able to provide you with a detailed report of what are the necessary investments you need to make to assure performance, and what would be total cost savings as a result of taking all actions."),"\n",l.createElement(t.p,null,"Keep in mind, the total dollar amount is IF you take ALL actions generated by Turbonomic for the cloud instances. As you can see in the example below, the cost savings is significant compared to the necessary investments. And this is while assuring application performance."),"\n",l.createElement(t.p,null,"Click on ",l.createElement(t.strong,null,"Show All")," under both ",l.createElement(t.strong,null,"Necessary Investments")," and ",l.createElement(t.strong,null,"Potential Savings")," to explore actions regarding each. We will go through actions thoroughly in the ",l.createElement(t.strong,null,"Actions")," lab."),"\n",l.createElement(t.img,{src:"/1684787947026.7641089055/cloud.png",alt:""}),"\n"),l.createElement(t.section,{className:"heading","data-heading-rank":"1","aria-labelledby":"supply-chain"},l.createElement(t.h1,{id:"supply-chain"},"Supply chain"),"\n",l.createElement(t.p,null,"Let's take a closer look at the ",l.createElement(t.strong,null,"Supply Chain"),". From the three tabs above, click on ",l.createElement(t.strong,null,"Applications")," to go back to the main dashboard. Business applications are comprised of multiple application components running on lots of different infrastructures. Each circle in the supply chain represents an entity. Each entity has a name, number and is surrounded by a circle of colors. Green is the desired state, Yellow represents efficiency actions, and Red shows that the resources are congested. See the example below."),"\n",l.createElement(n,{text:"Quiz Material"}),"\n",l.createElement(t.img,{src:"/1684787947046.76421089064/supply-chain1.png",alt:""}),"\n",l.createElement(t.p,null,"The direction of the arrows is also meaningful. They show the direction of the purchase's resources. Turbonomic sees the resources available as a marketplace. Every entity can sell resources and/or buy them. For example, a VM buys resources from the host it is residing on and then sells them to the application components running on it. In this scenario, a VM is both a consumer of resources (from the physical host) and a supplier of resources (for the application components). See the image below."),"\n",l.createElement(t.img,{src:"/1684787947022.7641089054/buysell.png",alt:""}),"\n",l.createElement(t.p,null,"Click on the Host entity in the supply chain. This will open up a page with information regarding all your hosts, policies applied to them, and a list of actions for them."),"\n",l.createElement(t.p,null,"Explore each tab. The pending actions section shows you the actions that Turbonomic recommends that you tackle to assure performance, save cost, etc. It analyzes your environment once you add it as a target and starts providing the actions. We will go deeper into actions in the ",l.createElement(t.strong,null,"Actions")," lab."),"\n",l.createElement(t.img,{src:"/1684787947030.7641089057/host1.png",alt:""}),"\n"),l.createElement(t.section,{className:"heading","data-heading-rank":"1","aria-labelledby":"navigator"},l.createElement(t.h1,{id:"navigator"},"Navigator"),"\n",l.createElement(t.p,null,"The Navigator will provide you with quick access to different parts of Turbonomic. This toolbar will remain constant as you explore different parts of the environment."),"\n",l.createElement(t.img,{src:"/1684787947034.7641089058/nav1.png",alt:""}),"\n",l.createElement(t.ol,null,"\n",l.createElement(t.li,null,"The ",l.createElement(t.strong,null,"ON")," Button will always bring you back to the main dashboard view. The main dashboard can be different depending on user access levels and customizations - you will learn more about this in the ",l.createElement(t.strong,null,"Custom Dashboard")," labs."),"\n"),"\n",l.createElement(n,{text:"Quiz Material"}),"\n",l.createElement(t.ol,{start:"2"},"\n",l.createElement(t.li,null,"Use the ",l.createElement(t.strong,null,"Search")," page to find the entities you are looking for. This page will provide a categorized view of your entities and also provide you filters to narrow down the entity you are looking for."),"\n"),"\n",l.createElement(t.img,{src:"/1684787947046.76421089062/search1.png",alt:""}),"\n",l.createElement(t.ol,{start:"3"},"\n",l.createElement(t.li,null,"\n",l.createElement(t.p,null,"Planning page in Turbonomic is used to run simulations for what-if scenarios that will help you gain insight into what are the results of certain changes before making them. A plan has no impact on real-time environments. You will learn more about this important feature in the ",l.createElement(t.strong,null,"Planning")," lab."),"\n"),"\n",l.createElement(t.li,null,"\n",l.createElement(t.p,null,"From the Workload Placement Page, you can set up reservations to save the resources you will need to deploy VMs at a future date. Turbonomic calculates optimal placement for these VMs and then reserves the host and storage resources that they need."),"\n"),"\n",l.createElement(t.li,null,"\n",l.createElement(t.p,null,"Dashboard tab will allow you to create custom dashboards to fit your needs. You will learn more about this in the ",l.createElement(t.strong,null,"Custom Dashboard")," lab."),"\n"),"\n",l.createElement(t.li,null,"\n",l.createElement(t.p,null,l.createElement(t.strong,null,"Reports")," tab will allow you to generate different reports of your environment and resources. By clicking on ",l.createElement(t.strong,null,"Reports")," a new window will open that contains a list of predefined reports under the ",l.createElement(t.strong,null,"General")," folder. Explore different reports.\n",l.createElement(t.img,{src:"/1684787947042.76421089061/report2.png",alt:""})),"\n"),"\n",l.createElement(t.li,null,"\n",l.createElement(t.p,null,"The ",l.createElement(t.strong,null,"Settings")," page includes important links including, Policies, License, User Management, Targets, etc. You will explore ",l.createElement(t.strong,null,"Targets"),", ",l.createElement(t.strong,null,"Policies")," and ",l.createElement(t.strong,null,"User Management")," extensively in their corresponding labs."),"\n"),"\n"),"\n",l.createElement(t.img,{src:"/1684787947046.76421089063/settings.png",alt:""})))}var o=function(e){void 0===e&&(e={});const{wrapper:t}=Object.assign({},(0,a.ah)(),e.components);return t?l.createElement(t,e,l.createElement(r,e)):r(e)};var i=n(4184),s=n.n(i),c=n(4690),m=n(1140),u=n(2565),h=n(8531),d=n(3383),p=n(7315);const g=e=>{const{data:{mdx:{tableOfContents:{items:t},frontmatter:{toc:n=!0,title:a,timeToComplete:r,updated:o}}},children:i}=e,c=(0,l.useRef)(null),{0:g}=(0,l.useState)(""),f=(null===n||n)&&t;return l.createElement(l.Fragment,null,l.createElement(m.Z,{timeToComplete:r,updated:o},t[0].title||a||""),l.createElement(h.Z,{className:p.YS},l.createElement("article",{className:s()(p.Y2,!f&&p.ey),ref:c},l.createElement(u.Z,{components:{h1:()=>null}},i)),f&&l.createElement(d.Z,{itemsList:t,maxDepth:2,currSection:g})))},f=e=>{const{location:{pathname:t},data:{mdx:{frontmatter:{title:n},tableOfContents:{items:a}}}}=e;return l.createElement(c.Z,{pathname:t,title:n||a[0].title||void 0})};function E(e){return l.createElement(g,e,l.createElement(o,e))}},2565:function(e,t,n){n.d(t,{Z:function(){return i}});var a=n(7294),l=n(1151),r=n(987);const o={table:r.y6,a:r.IW,blockquote:r.R4,SubHeader:r.bU,img:r.fb,code:r.dn,QuizAlert:r.SA};var i=(0,a.memo)((function(e){let{children:t,components:n={}}=e;return a.createElement(l.Zo,{components:{...o,...n}},t)}))},4690:function(e,t,n){var a=n(7294),l=n(1072),r=n(2401);t.Z=e=>{const{title:t,description:n,pathname:o,children:i}=e,{description:s,title:c,origin:m}=(0,r.Z)(),{i18n:{language:u}}=(0,l.$G)(),h={title:t||c,description:n||s,url:""+m+(o||"")};return a.createElement(a.Fragment,null,a.createElement("html",{lang:u}),a.createElement("link",{rel:"icon",href:"data:image/svg+xml,<svg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 100 100'><text y='0.9em' font-size='90'>🦺</text></svg>"}),a.createElement("title",null,h.title),a.createElement("link",{rel:"canonical",href:h.url}),a.createElement("meta",{name:"description",content:h.description}),a.createElement("meta",{property:"og:title",content:h.title}),a.createElement("meta",{property:"og:url",content:h.url}),a.createElement("meta",{property:"og:type",content:"website"}),a.createElement("meta",{property:"og:description",content:h.description}),a.createElement("meta",{name:"twitter:card",content:"summary"}),a.createElement("meta",{name:"twitter:title",content:h.title}),a.createElement("meta",{name:"twitter:url",content:h.url}),a.createElement("meta",{name:"twitter:description",content:h.description}),a.createElement("meta",{name:"twitter:site",content:"https://www.ibm.com"}),a.createElement("meta",{name:"twitter:creator",content:"@IBM"}),i)}},3383:function(e,t,n){n.d(t,{Z:function(){return c}});var a=n(7294),l=n(7500),r=n(4184),o=n.n(r),i=n(6488);const s=function(e,t,n){return void 0===t&&(t=[]),void 0===n&&(n=0),e.forEach((e=>{const{title:a,url:l,items:r}=e;t.splice(t.length,0,{depth:n,title:a,url:l}),r&&r.length>0&&s(r,t,n+1)})),t};var c=e=>{const{itemsList:t}=e,n=(0,a.useMemo)((()=>s(t[0].items||[])),[t]),r=(0,i.Z)("h1[id],h2[id]",{threshold:[0,1],rootMargin:"-48px 0px -90% 0px"});return n.length<1?null:a.createElement("nav",{className:"TableOfContents-module--toc--54d35"},a.createElement("div",{className:"TableOfContents-module--tocStack--90609"},a.createElement("h6",{className:"TableOfContents-module--tocHeader--05956"},a.createElement(l.rU,{to:"#",replace:!0},"On this page")),n.map(((e,t)=>{let{title:n,url:l}=e;return a.createElement("a",{className:o()("TableOfContents-module--link--b292b",r===l.substring(1)&&"TableOfContents-module--activeItem--3869f"),key:t,href:l},n)}))))}},7315:function(e,t,n){n.d(t,{Y2:function(){return a},YS:function(){return r},ey:function(){return l}});var a="{mdx-fields__slug}-module--article--e3d5a",l="{mdx-fields__slug}-module--noToc--82387",r="{mdx-fields__slug}-module--wrapper--58e72"},1151:function(e,t,n){n.d(t,{Zo:function(){return i},ah:function(){return r}});var a=n(7294);const l=a.createContext({});function r(e){const t=a.useContext(l);return a.useMemo((()=>"function"==typeof e?e(t):{...t,...e}),[t,e])}const o={};function i({components:e,children:t,disableParentContext:n}){let i;return i=n?"function"==typeof e?e({}):e||o:r(e),a.createElement(l.Provider,{value:i},t)}}}]);
//# sourceMappingURL=component---src-pages-mdx-fields-slug-tsx-content-file-path-content-turbonomic-102-md-43921baa4d59b9ff7401.js.map