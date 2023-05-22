"use strict";(self.webpackChunkvad_var_site=self.webpackChunkvad_var_site||[]).push([[9328],{7863:function(e,t,n){n.r(t),n.d(t,{Head:function(){return E},default:function(){return f}});var l=n(1151),a=n(7294);function r(e){const t=Object.assign({section:"section",h1:"h1",h2:"h2",a:"a",p:"p",img:"img",em:"em",strong:"strong",ol:"ol",li:"li",code:"code"},(0,l.ah)(),e.components);return a.createElement(t.section,{className:"heading","data-heading-rank":"1","aria-labelledby":"104-alerting-and-synthetics"},a.createElement(t.h1,{id:"104-alerting-and-synthetics"},"104: Alerting and Synthetics"),"\n",a.createElement(t.section,{className:"heading","data-heading-rank":"2","aria-labelledby":"alerting"},a.createElement(t.h2,{id:"alerting"},a.createElement(t.a,{href:"#alerting"},"Alerting")),"\n",a.createElement(t.p,null,"Instana currently supports 13 technologies for ",a.createElement(t.a,{href:"https://www.ibm.com/docs/en/instana-observability/current?topic=apis-alerting#alerting-integrations"},"alert channels"),"."),"\n",a.createElement(t.img,{src:"/1684787945894.753862486/supported-channels.png",alt:"Instana supported alert channels"}),"\n"),a.createElement(t.section,{className:"heading","data-heading-rank":"2","aria-labelledby":"adding-slack-as-an-alert-channel"},a.createElement(t.h2,{id:"adding-slack-as-an-alert-channel"},a.createElement(t.a,{href:"#adding-slack-as-an-alert-channel"},"Adding ",a.createElement(t.em,null,"Slack")," as an alert channel")),"\n",a.createElement(t.p,null,"In order to create alerts, we first need to create an alert channel. This is a simple process that involves adding an incoming webhook to ",a.createElement(t.em,null,"Slack")," for a specific ",a.createElement(t.em,null,"Slack")," channel. To avoid having each person create a new channel, we will just use an existing one for this lab."),"\n",a.createElement(t.p,null,"Everyone please join the ",a.createElement(t.strong,null,"#alert-lab")," channel in ",a.createElement(t.em,null,"Slack"),"."),"\n"),a.createElement(t.section,{className:"heading","data-heading-rank":"2","aria-labelledby":"sending-specific-events-to-the-channel"},a.createElement(t.h2,{id:"sending-specific-events-to-the-channel"},a.createElement(t.a,{href:"#sending-specific-events-to-the-channel"},"Sending specific events to the channel")),"\n",a.createElement(t.p,null,"Now that the channel has been created, we can proceed to decide which alerts we want to push to ",a.createElement(t.em,null,"Slack"),". For this demo we will push all robot-shop warning issues to the ",a.createElement(t.em,null,"Slack")," channel."),"\n",a.createElement(t.ol,null,"\n",a.createElement(t.li,null,"\n",a.createElement(t.p,null,"In the left-hand navigation sidebar, click on the ",a.createElement(t.strong,null,"Settings")," section."),"\n"),"\n",a.createElement(t.li,null,"\n",a.createElement(t.p,null,"In ",a.createElement(t.strong,null,"Settings")," page, on the left-hand navigation sidebar, click on the ",a.createElement(t.em,null,"Alerts")," section which is just above the Alert Channels. Then click on the ",a.createElement(t.strong,null,"New Alert")," field"),"\n"),"\n",a.createElement(t.li,null,"\n",a.createElement(t.p,null,"For the name use this pattern, ",a.createElement(t.code,null,"<your-name>-slack")),"\n"),"\n",a.createElement(t.li,null,"\n",a.createElement(t.p,null,"Under ",a.createElement(t.strong,null,"Events"),", choose on the ",a.createElement(t.strong,null,"Alert on Event Type(s)")," option, and then toggle all of the options. This will allow us to showcase how different events show up in ",a.createElement(t.em,null,"Slack"),"."),"\n",a.createElement(t.img,{src:"/1684787945890.753862483/create-alert.png",alt:"Create Slack alert"}),"\n"),"\n",a.createElement(t.li,null,"\n",a.createElement(t.p,null,"Under ",a.createElement(t.strong,null,"Scope"),", choose the ",a.createElement(t.strong,null,"Application Perspective")," option, and then select the ",a.createElement(t.strong,null,"Add Application Perspectives")," option. Then ",a.createElement(t.strong,null,"Select All")," of the options."),"\n",a.createElement(t.p,null,a.createElement(t.em,null,"Note: If you are using Instana to observe multiple applications, you can add alerts from multiple different applications at once, or you can create multiple alerts, one for each perspective.")),"\n",a.createElement(t.img,{src:"/1684787945886.7527862482/app-perspective.png",alt:"App perspective"}),"\n"),"\n",a.createElement(t.li,null,"\n",a.createElement(t.p,null,"Under Alert Channels, select ",a.createElement(t.strong,null,"lab-4"),", then click ",a.createElement(t.strong,null,"Create"),". This channel will allow Instana to post to the ",a.createElement(t.strong,null,"#alert-lab")," ",a.createElement(t.em,null,"Slack")," channel."),"\n"),"\n"),"\n",a.createElement(t.p,null,"That's it! Now as events are generated from Instana, they will be pushed to the ",a.createElement(t.em,null,"Slack")," channel. This powerful, flexible alerting method allows for need specific alerting, such as using different ",a.createElement(t.em,null,"Slack")," channels for alerts of different severity, or even paging out developers from PagerDuty for critical issues."),"\n"),a.createElement(t.section,{className:"heading","data-heading-rank":"2","aria-labelledby":"synthetics"},a.createElement(t.h2,{id:"synthetics"},a.createElement(t.a,{href:"#synthetics"},"Synthetics")),"\n",a.createElement(t.p,null,"Synthetics are brand new in Instana! They allow for simulated user experiences in your application, and monitoring for various performance characteristics."),"\n",a.createElement(t.p,null,a.createElement(t.em,null,"Note: Synthetics are only available in a SaaS instance, not on-prem.")),"\n",a.createElement(t.p,null,"For this section we will be creating synthetics to monitor our application. In order to create a synthetic test, you must first have a Point of Presence (PoP) installed and running. Multiple PoPs can be deployed to clusters in various geographic regions to simulate user experience for those regions. Instructions for deploying PoPs can be found ",a.createElement(t.a,{href:"https://www.ibm.com/docs/en/instana-observability/current?topic=beta-pop-deployment"},"here.")," This is out of scope for this lab, and we will be using an existing PoP already registered in the Instana dashboard."),"\n",a.createElement(t.ol,null,"\n",a.createElement(t.li,null,"\n",a.createElement(t.p,null,"In the Instana SaaS instance (",a.createElement(t.a,{href:"https://mintgreen-edge0vfurg.instana.io/#/home"},"https://mintgreen-edge0vfurg.instana.io/#/home"),") navigate to ",a.createElement(t.strong,null,"Synthetic Monitoring")," in the left-hand side navigation, and click on ",a.createElement(t.strong,null,"Create New Test"),"."),"\n",a.createElement(t.img,{src:"/1684787945898.753862488/synthetic-create.png",alt:"Synthetic create"}),"\n"),"\n",a.createElement(t.li,null,"\n",a.createElement(t.p,null,"To get familiar with the functionality, we will create a ping synthetic."),"\n",a.createElement(t.p,null,"Under ",a.createElement(t.strong,null,"Step 2: Request Details")," add ",a.createElement(t.a,{href:"https://web-np-robot-shop.apps.ocp-50ackdta3c-eaxi.cloud.techzone.ibm.com/"},"https://web-np-robot-shop.apps.ocp-50ackdta3c-eaxi.cloud.techzone.ibm.com/")," for the URL, and choose ",a.createElement(t.strong,null,"synthetic-dc")," as the Point of Presence. Click Next."),"\n",a.createElement(t.img,{src:"/1684787945890.753862484/dc-pop.png",alt:"Add DC PoP"}),"\n"),"\n",a.createElement(t.li,null,"\n",a.createElement(t.p,null,"For Frequency choose 1 Minute, and then click next."),"\n",a.createElement(t.img,{src:"/1684787945898.753862487/syn-timing.png",alt:"Synthetic timing"}),"\n"),"\n",a.createElement(t.li,null,"\n",a.createElement(t.p,null,"Name your synthetic using this pattern ",a.createElement(t.code,null,"<your name>-synthetic"),", and provide an optional description. Check ",a.createElement(t.strong,null,"All Services")," and then click the ",a.createElement(t.strong,null,"Create")," button."),"\n",a.createElement(t.img,{src:"/1684787945894.753862485/karsten-synthetic.png",alt:"create synthetic ping test"}),"\n"),"\n"),"\n",a.createElement(t.p,null,"You can now view your synthetic test analytics and metrics under the ",a.createElement(t.strong,null,"Tests")," list")))}var c=function(e){void 0===e&&(e={});const{wrapper:t}=Object.assign({},(0,l.ah)(),e.components);return t?a.createElement(t,e,a.createElement(r,e)):r(e)},i=n(4184),o=n.n(i),s=n(4690),m=n(1140),u=n(2565),h=n(8531),d=n(3383),p=n(7315);const g=e=>{const{data:{mdx:{tableOfContents:{items:t},frontmatter:{toc:n=!0,title:l,timeToComplete:r,updated:c}}},children:i}=e,s=(0,a.useRef)(null),{0:g}=(0,a.useState)(""),E=(null===n||n)&&t;return a.createElement(a.Fragment,null,a.createElement(m.Z,{timeToComplete:r,updated:c},t[0].title||l||""),a.createElement(h.Z,{className:p.YS},a.createElement("article",{className:o()(p.Y2,!E&&p.ey),ref:s},a.createElement(u.Z,{components:{h1:()=>null}},i)),E&&a.createElement(d.Z,{itemsList:t,maxDepth:2,currSection:g})))},E=e=>{const{location:{pathname:t},data:{mdx:{frontmatter:{title:n},tableOfContents:{items:l}}}}=e;return a.createElement(s.Z,{pathname:t,title:n||l[0].title||void 0})};function f(e){return a.createElement(g,e,a.createElement(c,e))}},2565:function(e,t,n){n.d(t,{Z:function(){return i}});var l=n(7294),a=n(1151),r=n(987);const c={table:r.y6,a:r.IW,blockquote:r.R4,SubHeader:r.bU,img:r.fb,code:r.dn,QuizAlert:r.SA};var i=(0,l.memo)((function(e){let{children:t,components:n={}}=e;return l.createElement(a.Zo,{components:{...c,...n}},t)}))},4690:function(e,t,n){var l=n(7294),a=n(1072),r=n(2401);t.Z=e=>{const{title:t,description:n,pathname:c,children:i}=e,{description:o,title:s,origin:m}=(0,r.Z)(),{i18n:{language:u}}=(0,a.$G)(),h={title:t||s,description:n||o,url:""+m+(c||"")};return l.createElement(l.Fragment,null,l.createElement("html",{lang:u}),l.createElement("link",{rel:"icon",href:"data:image/svg+xml,<svg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 100 100'><text y='0.9em' font-size='90'>🦺</text></svg>"}),l.createElement("title",null,h.title),l.createElement("link",{rel:"canonical",href:h.url}),l.createElement("meta",{name:"description",content:h.description}),l.createElement("meta",{property:"og:title",content:h.title}),l.createElement("meta",{property:"og:url",content:h.url}),l.createElement("meta",{property:"og:type",content:"website"}),l.createElement("meta",{property:"og:description",content:h.description}),l.createElement("meta",{name:"twitter:card",content:"summary"}),l.createElement("meta",{name:"twitter:title",content:h.title}),l.createElement("meta",{name:"twitter:url",content:h.url}),l.createElement("meta",{name:"twitter:description",content:h.description}),l.createElement("meta",{name:"twitter:site",content:"https://www.ibm.com"}),l.createElement("meta",{name:"twitter:creator",content:"@IBM"}),i)}},3383:function(e,t,n){n.d(t,{Z:function(){return s}});var l=n(7294),a=n(7500),r=n(4184),c=n.n(r),i=n(6488);const o=function(e,t,n){return void 0===t&&(t=[]),void 0===n&&(n=0),e.forEach((e=>{const{title:l,url:a,items:r}=e;t.splice(t.length,0,{depth:n,title:l,url:a}),r&&r.length>0&&o(r,t,n+1)})),t};var s=e=>{const{itemsList:t}=e,n=(0,l.useMemo)((()=>o(t[0].items||[])),[t]),r=(0,i.Z)("h1[id],h2[id]",{threshold:[0,1],rootMargin:"-48px 0px -90% 0px"});return n.length<1?null:l.createElement("nav",{className:"TableOfContents-module--toc--54d35"},l.createElement("div",{className:"TableOfContents-module--tocStack--90609"},l.createElement("h6",{className:"TableOfContents-module--tocHeader--05956"},l.createElement(a.rU,{to:"#",replace:!0},"On this page")),n.map(((e,t)=>{let{title:n,url:a}=e;return l.createElement("a",{className:c()("TableOfContents-module--link--b292b",r===a.substring(1)&&"TableOfContents-module--activeItem--3869f"),key:t,href:a},n)}))))}},7315:function(e,t,n){n.d(t,{Y2:function(){return l},YS:function(){return r},ey:function(){return a}});var l="{mdx-fields__slug}-module--article--e3d5a",a="{mdx-fields__slug}-module--noToc--82387",r="{mdx-fields__slug}-module--wrapper--58e72"},1151:function(e,t,n){n.d(t,{Zo:function(){return i},ah:function(){return r}});var l=n(7294);const a=l.createContext({});function r(e){const t=l.useContext(a);return l.useMemo((()=>"function"==typeof e?e(t):{...t,...e}),[t,e])}const c={};function i({components:e,children:t,disableParentContext:n}){let i;return i=n?"function"==typeof e?e({}):e||c:r(e),l.createElement(a.Provider,{value:i},t)}}}]);
//# sourceMappingURL=component---src-pages-mdx-fields-slug-tsx-content-file-path-content-instana-104-md-ec1a15ee7ec9b93467a1.js.map