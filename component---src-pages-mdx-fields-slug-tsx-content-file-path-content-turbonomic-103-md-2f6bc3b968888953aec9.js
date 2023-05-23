"use strict";(self.webpackChunkvad_var_site=self.webpackChunkvad_var_site||[]).push([[5240],{549:function(e,t,n){n.r(t),n.d(t,{Head:function(){return E},default:function(){return f}});var a=n(1151),l=n(7294);function r(e){const t=Object.assign({section:"section",h1:"h1",h2:"h2",a:"a",p:"p",ul:"ul",li:"li",em:"em",strong:"strong",h3:"h3",ol:"ol",img:"img"},(0,a.ah)(),e.components);return l.createElement(t.section,{className:"heading","data-heading-rank":"1","aria-labelledby":"103-connect-instana-to-turbonomic"},l.createElement(t.h1,{id:"103-connect-instana-to-turbonomic"},"103: Connect Instana to Turbonomic"),"\n",l.createElement(t.section,{className:"heading","data-heading-rank":"2","aria-labelledby":"goal"},l.createElement(t.h2,{id:"goal"},l.createElement(t.a,{href:"#goal"},"Goal")),"\n",l.createElement(t.p,null,"In this lab, you will add one target to your Turbonomic environment"),"\n",l.createElement(t.ul,null,"\n",l.createElement(t.li,null,"An application performance monitoring target - Instana"),"\n"),"\n",l.createElement(t.p,null,l.createElement(t.em,null,l.createElement(t.strong,null,"Note:")," We will later use the ",l.createElement(t.strong,null,"Quote of the Day")," and ",l.createElement(t.strong,null,"RobotShop")," applications in Instana, , in the ",l.createElement(t.strong,null,"Policies")," and ",l.createElement(t.strong,null,"Custom Dashboard")," labs.")),"\n"),l.createElement(t.section,{className:"heading","data-heading-rank":"2","aria-labelledby":"adding-the-instana-target"},l.createElement(t.h2,{id:"adding-the-instana-target"},l.createElement(t.a,{href:"#adding-the-instana-target"},"Adding the Instana target")),"\n",l.createElement(t.p,null,"Turbonomic supports the discovery of applications that are managed by APM tools - in this case, the Instana platform. Turbonomic includes the discovered information about these applications in its calculations for environmental health."),"\n",l.createElement(t.p,null,"We have already prepared an Instana server for your environment. This server is monitoring two applications: ",l.createElement(t.strong,null,"RobotShop")," and ",l.createElement(t.strong,null,"Quote of the Day"),". In this section, you will go through the steps to add this Instana instance to your Turbonomic environment."),"\n",l.createElement(t.section,{className:"heading","data-heading-rank":"3","aria-labelledby":"generate-instana-api-token"},l.createElement(t.h3,{id:"generate-instana-api-token"},l.createElement(t.a,{href:"#generate-instana-api-token"},"Generate Instana API Token")),"\n",l.createElement(t.ol,null,"\n",l.createElement(t.li,null,"\n",l.createElement(t.p,null,"To connect Instana to Turbonomic you will need API token from your Instana server so that Turbonomic can authenticate the connection. To generate this key navigate to your Bastion VM and click on the Instana tab."),"\n"),"\n",l.createElement(t.li,null,"\n",l.createElement(t.p,null,"This will take you to the Instana login page. Log in using your Instana credentials. Instana credentials are provided in the ",l.createElement(t.strong,null,"Turbo-PoT-Credentials")," tab."),"\n"),"\n"),"\n",l.createElement(t.img,{src:"/1684825881383.49121089074/instanatab.png",alt:""}),"\n",l.createElement(t.ol,{start:"3"},"\n",l.createElement(t.li,null,"Once you have logged in, click on the gear icon on the left menu to open settings."),"\n"),"\n",l.createElement(t.img,{src:"/1684825881371.49121089070/instana2.png",alt:""}),"\n",l.createElement(t.ol,{start:"4"},"\n",l.createElement(t.li,null,"In the settings page, under ",l.createElement(t.strong,null,"Team Settings")," click on ",l.createElement(t.strong,null,"API Tokens"),". Then click on ",l.createElement(t.strong,null,"Add New Token"),"."),"\n"),"\n",l.createElement(t.img,{src:"/1684825881375.49121089071/instana3.png",alt:""}),"\n",l.createElement(t.ol,{start:"5"},"\n",l.createElement(t.li,null,"Give your token a unique name like ",l.createElement(t.em,null,"api_YourInitials"),". Then scroll down and click on ",l.createElement(t.strong,null,"Save"),". You can leave all other settings as default."),"\n"),"\n",l.createElement(t.img,{src:"/1684825881375.49121089072/instana4.png",alt:""}),"\n",l.createElement(t.img,{src:"/1684825881379.49121089073/instana5.png",alt:""}),"\n",l.createElement(t.ol,{start:"6"},"\n",l.createElement(t.li,null,"Now click on the eye icon to reveal your API token and take note of it. You will need this key in the next section."),"\n"),"\n"),l.createElement(t.section,{className:"heading","data-heading-rank":"3","aria-labelledby":"add-instana-as-a-target"},l.createElement(t.h3,{id:"add-instana-as-a-target"},l.createElement(t.a,{href:"#add-instana-as-a-target"},"Add Instana as a target")),"\n",l.createElement(t.ol,null,"\n",l.createElement(t.li,null,"Navigate to your Turbonomic console on the Bastion VM, then click on ",l.createElement(t.strong,null,"Settings")," from the left navigator."),"\n"),"\n",l.createElement(t.img,{src:"/1684825881391.49151089078/turbo-main.png",alt:""}),"\n",l.createElement(t.p,null,l.createElement(t.em,null,l.createElement(t.strong,null,"Tip"),": If the ",l.createElement(t.strong,null,"Settings")," does not appear in the left navigator, try zooming out by pressing the Ctrl and minus (-) buttons")),"\n",l.createElement(t.ol,{start:"2"},"\n",l.createElement(t.li,null,"Select the ",l.createElement(t.strong,null,"Target Configuration")," option. This will open up the page containing all configured targets."),"\n"),"\n",l.createElement(t.img,{src:"/1684825881391.49151089077/target-settings.png",alt:""}),"\n",l.createElement(t.ol,{start:"3"},"\n",l.createElement(t.li,null,"Click on ",l.createElement(t.strong,null,"New Target"),". This will open up a page with a list of available target types for this environment."),"\n"),"\n",l.createElement(t.p,null,l.createElement(t.em,null,l.createElement(t.strong,null,"Tip"),": This is not an extensive list of available target types. To view the full list and supported versions visit the ",l.createElement(t.a,{href:"https://www.ibm.com/docs/en/tarm/8.8.0?topic=overview-turbonomic-targets"},"documentation site"),".")),"\n",l.createElement(t.img,{src:"/1684825881387.49151089076/target-page.png",alt:""}),"\n",l.createElement(t.ol,{start:"4"},"\n",l.createElement(t.li,null,"From the list select ",l.createElement(t.strong,null,"Applications and Databases"),". Then select ",l.createElement(t.strong,null,"Instana"),"."),"\n"),"\n",l.createElement(t.img,{src:"/1684825881363.4911089066/add-instana-1.png",alt:""}),"\n",l.createElement(t.img,{src:"/1684825881363.4911089067/add-instana-2.png",alt:""}),"\n",l.createElement(t.ol,{start:"5"},"\n",l.createElement(t.li,null,"To add Instana all you need is the hostname or IP address of your Instana server (10.0.0.2), and an API token generated from your Instana backend. Once you filled out this information click on ",l.createElement(t.strong,null,"Add")," at the bottom of the page. Since we don't have a proxy we can leave those parts empty."),"\n"),"\n",l.createElement(t.p,null,l.createElement(t.em,null,l.createElement(t.strong,null,"Note"),": If you see the hostname and/or IP address is prepopulated as administrator and a password in this step, clear both and type in your information.")),"\n",l.createElement(t.p,null,l.createElement(t.em,null,l.createElement(t.strong,null,"Tip"),": Keep in mind, the hostname or IP address must be visible to Turbonomic. If you have your Instana and Turbonomic instances installed in different networks or the communication between them is blocked by a firewall, the target configuration will fail.")),"\n",l.createElement(t.img,{src:"/1684825881367.4911089068/add-instana-3.png",alt:""}),"\n",l.createElement(t.ol,{start:"6"},"\n",l.createElement(t.li,null,"Your newly added Instana target will appear in your list of targets. Check the ",l.createElement(t.strong,null,"status")," and ",l.createElement(t.strong,null,"severity"),", it must show as ",l.createElement(t.strong,null,"Validated")," and ",l.createElement(t.strong,null,"Normal"),". Congratulations, you have successfully connected your Instana environment to Turbonomic."),"\n"),"\n",l.createElement(t.img,{src:"/1684825881395.49151089079/validated.png",alt:""}),"\n",l.createElement(t.p,null,"Now that you have added a new target, allow 15 minutes for Turbonomic to run discovery and add the data from Instana. To check this, look at your top business applications and look for two applications that will be added in from Instana: ",l.createElement(t.strong,null,"Quote of the Day"),", and ",l.createElement(t.strong,null,"RobotShop"),"."),"\n",l.createElement(t.img,{src:"/1684825881387.49151089075/listapps.png",alt:""}),"\n",l.createElement(t.img,{src:"/1684825881367.4911089069/apps.png",alt:""}))))}var o=function(e){void 0===e&&(e={});const{wrapper:t}=Object.assign({},(0,a.ah)(),e.components);return t?l.createElement(t,e,l.createElement(r,e)):r(e)},i=n(4184),c=n.n(i),s=n(4690),m=n(1140),u=n(2565),d=n(8531),g=n(3383),h=n(7315);const p=e=>{const{data:{mdx:{tableOfContents:{items:t},frontmatter:{toc:n=!0,title:a,timeToComplete:r,updated:o}}},children:i}=e,s=(0,l.useRef)(null),{0:p}=(0,l.useState)(""),E=(null===n||n)&&t;return l.createElement(l.Fragment,null,l.createElement(m.Z,{timeToComplete:r,updated:o},t[0].title||a||""),l.createElement(d.Z,{className:h.YS},l.createElement("article",{className:c()(h.Y2,!E&&h.ey),ref:s},l.createElement(u.Z,{components:{h1:()=>null}},i)),E&&l.createElement(g.Z,{itemsList:t,maxDepth:2,currSection:p})))},E=e=>{const{location:{pathname:t},data:{mdx:{frontmatter:{title:n},tableOfContents:{items:a}}}}=e;return l.createElement(s.Z,{pathname:t,title:n||a[0].title||void 0})};function f(e){return l.createElement(p,e,l.createElement(o,e))}},2565:function(e,t,n){n.d(t,{Z:function(){return i}});var a=n(7294),l=n(1151),r=n(987);const o={table:r.y6,a:r.IW,blockquote:r.R4,SubHeader:r.bU,img:r.fb,code:r.dn,QuizAlert:r.SA};var i=(0,a.memo)((function(e){let{children:t,components:n={}}=e;return a.createElement(l.Zo,{components:{...o,...n}},t)}))},4690:function(e,t,n){var a=n(7294),l=n(1072),r=n(2401);t.Z=e=>{const{title:t,description:n,pathname:o,children:i}=e,{description:c,title:s,origin:m}=(0,r.Z)(),{i18n:{language:u}}=(0,l.$G)(),d={title:t||s,description:n||c,url:""+m+(o||"")};return a.createElement(a.Fragment,null,a.createElement("html",{lang:u}),a.createElement("link",{rel:"icon",href:"data:image/svg+xml,<svg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 100 100'><text y='0.9em' font-size='90'>🦺</text></svg>"}),a.createElement("title",null,d.title),a.createElement("link",{rel:"canonical",href:d.url}),a.createElement("meta",{name:"description",content:d.description}),a.createElement("meta",{property:"og:title",content:d.title}),a.createElement("meta",{property:"og:url",content:d.url}),a.createElement("meta",{property:"og:type",content:"website"}),a.createElement("meta",{property:"og:description",content:d.description}),a.createElement("meta",{name:"twitter:card",content:"summary"}),a.createElement("meta",{name:"twitter:title",content:d.title}),a.createElement("meta",{name:"twitter:url",content:d.url}),a.createElement("meta",{name:"twitter:description",content:d.description}),a.createElement("meta",{name:"twitter:site",content:"https://www.ibm.com"}),a.createElement("meta",{name:"twitter:creator",content:"@IBM"}),i)}},3383:function(e,t,n){n.d(t,{Z:function(){return s}});var a=n(7294),l=n(7500),r=n(4184),o=n.n(r),i=n(6488);const c=function(e,t,n){return void 0===t&&(t=[]),void 0===n&&(n=0),e.forEach((e=>{const{title:a,url:l,items:r}=e;t.splice(t.length,0,{depth:n,title:a,url:l}),r&&r.length>0&&c(r,t,n+1)})),t};var s=e=>{const{itemsList:t}=e,n=(0,a.useMemo)((()=>c(t[0].items||[])),[t]),r=(0,i.Z)("h1[id],h2[id]",{threshold:[0,1],rootMargin:"-48px 0px -90% 0px"});return n.length<1?null:a.createElement("nav",{className:"TableOfContents-module--toc--54d35"},a.createElement("div",{className:"TableOfContents-module--tocStack--90609"},a.createElement("h6",{className:"TableOfContents-module--tocHeader--05956"},a.createElement(l.rU,{to:"#",replace:!0},"On this page")),n.map(((e,t)=>{let{title:n,url:l}=e;return a.createElement("a",{className:o()("TableOfContents-module--link--b292b",r===l.substring(1)&&"TableOfContents-module--activeItem--3869f"),key:t,href:l},n)}))))}},7315:function(e,t,n){n.d(t,{Y2:function(){return a},YS:function(){return r},ey:function(){return l}});var a="{mdx-fields__slug}-module--article--e3d5a",l="{mdx-fields__slug}-module--noToc--82387",r="{mdx-fields__slug}-module--wrapper--58e72"},1151:function(e,t,n){n.d(t,{Zo:function(){return i},ah:function(){return r}});var a=n(7294);const l=a.createContext({});function r(e){const t=a.useContext(l);return a.useMemo((()=>"function"==typeof e?e(t):{...t,...e}),[t,e])}const o={};function i({components:e,children:t,disableParentContext:n}){let i;return i=n?"function"==typeof e?e({}):e||o:r(e),a.createElement(l.Provider,{value:i},t)}}}]);
//# sourceMappingURL=component---src-pages-mdx-fields-slug-tsx-content-file-path-content-turbonomic-103-md-2f6bc3b968888953aec9.js.map