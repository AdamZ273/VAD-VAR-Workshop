"use strict";(self.webpackChunkvad_var_site=self.webpackChunkvad_var_site||[]).push([[7343],{3327:function(e,t,n){n.r(t),n.d(t,{Head:function(){return E},default:function(){return f}});var a=n(1151),l=n(7294);function r(e){const t=Object.assign({section:"section",h1:"h1",h2:"h2",a:"a",ol:"ol",li:"li",p:"p",strong:"strong",img:"img",br:"br",em:"em"},(0,a.ah)(),e.components),{QuizAlert:n}=t;return n||function(e,t){throw new Error("Expected "+(t?"component":"object")+" `"+e+"` to be defined: you likely forgot to import, pass, or provide it.")}("QuizAlert",!0),l.createElement(t.section,{className:"heading","data-heading-rank":"1","aria-labelledby":"102-monitor-calls--application-tracing"},l.createElement(t.h1,{id:"102-monitor-calls--application-tracing"},"102: Monitor Calls + Application Tracing"),"\n",l.createElement(t.section,{className:"heading","data-heading-rank":"2","aria-labelledby":"navigate-to-robotshops-dependencies"},l.createElement(t.h2,{id:"navigate-to-robotshops-dependencies"},l.createElement(t.a,{href:"#navigate-to-robotshops-dependencies"},"Navigate to RobotShop’s dependencies")),"\n",l.createElement(t.ol,null,"\n",l.createElement(t.li,null,"\n",l.createElement(t.p,null,"Starting by navigating to the ",l.createElement(t.a,{href:"https://play-with.instana.io/"},"Instana playground")),"\n",l.createElement(t.p,null,"We’re going to use Instana to view all the dependencies within the RobotShop application."),"\n",l.createElement(t.p,null,"Instana automatically discovers the relationships between the services and correlates them into a dynamic graph."),"\n"),"\n",l.createElement(t.li,null,"\n",l.createElement(t.p,null,"From the sidebar menu, click the ",l.createElement(t.strong,null,"Applications")," icon (1) and choose ",l.createElement(t.strong,null,"robot-shop with frontend")," (2)."),"\n",l.createElement(t.img,{src:"/1686172306747.24541106075/applications-robotshop.png",alt:""}),"\n"),"\n",l.createElement(t.li,null,"\n",l.createElement(t.p,null,"Click on the ",l.createElement(t.strong,null,"Dependencies")," tab."),"\n",l.createElement(t.img,{src:"/1686172306759.24541106078/dependencies.png",alt:""}),"\n",l.createElement(t.p,null,"We can see each moving dot represents a call requests. The requests are moving through the application in real time. Instana is able to do this because it tracks every request that flows through the application."),"\n",l.createElement(t.p,null,"We can tell there are some problems with the application because several services are highlighted in yellow and red."),"\n"),"\n",l.createElement(t.li,null,"\n",l.createElement(t.p,null,"Hover the cursor over a few of the icons to show info on what technology they are built on."),"\n",l.createElement(t.p,null,"For example, we can see that the ",l.createElement(t.strong,null,"catalogue")," database is built on MongoDB."),"\n",l.createElement(t.img,{src:"/1686172306755.24541106077/dependencies-hover.png",alt:""}),"\n",l.createElement(n,{text:"There is a quiz question related to dependency graphs"}),"\n"),"\n"),"\n"),l.createElement(t.section,{className:"heading","data-heading-rank":"2","aria-labelledby":"automatically-assess-events-and-alerts"},l.createElement(t.h2,{id:"automatically-assess-events-and-alerts"},l.createElement(t.a,{href:"#automatically-assess-events-and-alerts"},"Automatically assess events and alerts")),"\n",l.createElement(t.p,null,"Since you wouldn’t normally be looking at the dashboard when something like this happens, let’s see the SRE/IT operator’s point of view when an incident occurs."),"\n",l.createElement(t.p,null,"We’ve just gotten an alert from Instana that there has been a sudden increase in erroneous calls on our ",l.createElement(t.strong,null,"discount")," service, which is part of the robot shop application."),"\n",l.createElement(t.p,null,"Although I don’t have it connected right now, the alert would show up via one of the configurable alert channels, like PagerDuty, Microsoft Teams, Slack, and many others (",l.createElement(t.a,{href:"https://www.instana.com/docs/events_alerts/alert-channels"},"full list"),")."),"\n",l.createElement(t.ol,null,"\n",l.createElement(t.li,null,"\n",l.createElement(t.p,null,"Click the ",l.createElement(t.strong,null,"Events")," icon (triangle) on the left sidebar menu."),"\n",l.createElement(t.img,{src:"/1686172306775.24541106083/sidebar_menu.png",alt:""}),"\n",l.createElement(t.p,null,"Instana automatically groups related events and issues into incidents."),"\n",l.createElement(t.p,null,"It determines what events and/or issues are related using the dynamic dependency graph that we just looked at."),"\n",l.createElement(t.p,null,"Instana also continuously assesses the groups of events and issues to determine which ones are impacting end users or posing an imminent risk of impacting end users."),"\n",l.createElement(t.p,null,"Those are the ones that Instana will alert on, so as a SRE/IT operator, you will not be interrupted constantly for things that are not very important."),"\n",l.createElement(t.p,null,"Let’s go into the details for this incident."),"\n"),"\n"),"\n"),l.createElement(t.section,{className:"heading","data-heading-rank":"2","aria-labelledby":"inspecting-auto-correlated-incident-details"},l.createElement(t.h2,{id:"inspecting-auto-correlated-incident-details"},l.createElement(t.a,{href:"#inspecting-auto-correlated-incident-details"},"Inspecting auto-correlated incident details")),"\n",l.createElement(t.p,null,"Instana recognized that the sudden increase of erroneous calls was something important to alert on, so we did not have to do any configuration or set thresholds in order to get this alert.",l.createElement(t.br),"\n","Let’s click the incident on the ",l.createElement(t.strong,null,"discount")," service for more details."),"\n",l.createElement(t.ol,null,"\n",l.createElement(t.li,null,"\n",l.createElement(t.p,null,"Click the incident called ",l.createElement(t.strong,null,"Sudden increase in the number of erroneous calls")," on the ",l.createElement(t.strong,null,"discount")," service."),"\n",l.createElement(t.img,{src:"/1686172306763.24541106080/event_page.png",alt:""}),"\n"),"\n"),"\n",l.createElement(t.p,null,"We can now see a timeline of the incident, the event that triggered Instana to create the incident, and all of the related events."),"\n",l.createElement(t.ol,{start:"2"},"\n",l.createElement(t.li,null,"\n",l.createElement(t.p,null,"Hover the cursor over to show ",l.createElement(t.strong,null,"Incident Timeline"),", ",l.createElement(t.strong,null,"Triggering Event"),", and ",l.createElement(t.strong,null,"Related Events"),"."),"\n",l.createElement(t.img,{src:"/1686172306775.24541106082/incident_details_screen.png",alt:""}),"\n"),"\n"),"\n",l.createElement(n,{text:"There is a quiz question related to the 'Related Events' widget"}),"\n"),l.createElement(t.section,{className:"heading","data-heading-rank":"2","aria-labelledby":"debugging-the-incident-by-inspecting-calls"},l.createElement(t.h2,{id:"debugging-the-incident-by-inspecting-calls"},l.createElement(t.a,{href:"#debugging-the-incident-by-inspecting-calls"},"Debugging the incident by inspecting calls")),"\n",l.createElement(t.p,null,"By inspecting the related events, it looks like the abnormal termination of the MySQL database caused the problem."),"\n",l.createElement(t.p,null,"We can go into more detail about each call that failed to connect to the database."),"\n",l.createElement(t.ol,null,"\n",l.createElement(t.li,null,"\n",l.createElement(t.p,null,"Under ",l.createElement(t.strong,null,"Related Events"),", click the event that says ",l.createElement(t.strong,null,"Sudden increase in the number of erroneous calls")," (1). Then, click ",l.createElement(t.strong,null,"Analyze Calls")," (2)."),"\n",l.createElement(t.img,{src:"/1686172306771.24541106081/events.png",alt:""}),"\n"),"\n",l.createElement(t.li,null,"\n",l.createElement(t.p,null,"Click the first endpoint (1) groups list. Then, click the first call (2) in the call list."),"\n",l.createElement(t.p,null,"All the calls are grouped by endpoint. There is only one endpoint showing, but if there were more you’d see a list here."),"\n",l.createElement(t.p,null,"Endpoints are automatically discovered and mapped by Instana. We can go into the details for each erroneous call to MySQL via this endpoint (CONNECT)."),"\n",l.createElement(t.p,null,"Going into the actual trace for a request that resulted in an error will help us confirm that ",l.createElement(t.strong,null,"MySQL")," is really the source of the incident."),"\n",l.createElement(t.img,{src:"/1686172306763.24541106079/endpoint_connect.png",alt:""}),"\n"),"\n"),"\n"),l.createElement(t.section,{className:"heading","data-heading-rank":"2","aria-labelledby":"drilling-down-with-end-to-end-traces"},l.createElement(t.h2,{id:"drilling-down-with-end-to-end-traces"},l.createElement(t.a,{href:"#drilling-down-with-end-to-end-traces"},"Drilling down with end-to-end traces")),"\n",l.createElement(t.p,null,"Now that we’ve clicked on an individual call, in this case the first call in the list, we can view the call in the context of the end-to-end trace."),"\n",l.createElement(t.ol,null,"\n",l.createElement(t.li,null,"\n",l.createElement(t.p,null,"Highlight the middle dashboard area showing elements of the first call on the list. You will need to scroll down to the timeline view, and then change focus to the right column."),"\n",l.createElement(t.img,{src:"/1686172306751.24541106076/call_timeline.png",alt:""}),"\n"),"\n"),"\n",l.createElement(n,{text:"There is a quiz question related to 'Unbounded Analytics' page"}),"\n",l.createElement(t.p,null,"We can see where the request began and each call that was made along the way."),"\n",l.createElement(t.p,null,"The ",l.createElement(t.strong,null,"Timeline")," view gives a quick overview of the time spent on each span, as well as key performance indicators, such as the number of erroneous calls in this trace, the number of warning logs, and the total latency."),"\n",l.createElement(t.p,null,"Everything is presented in an easy-to-navigate visual dashboard, so we can drill into increasingly detailed information to pinpoint the problem, without using multiple tools or navigating back and forth to lots of dashboards."),"\n",l.createElement(t.ol,{start:"2"},"\n",l.createElement(t.li,null,"\n",l.createElement(t.p,null,"In the call stack [move to right column], we can click each span to see more information, including the complete stack trace."),"\n",l.createElement(t.p,null,"We can see the source, in this case the ",l.createElement(t.em,null,"discount")," service, and [scroll down] the destination, which in this case is ",l.createElement(t.em,null,"CONNECT")," of MySQL."),"\n",l.createElement(t.p,null,"It’s useful to have this context because we can easily see how the calls go from one service to another, just by clicking them. We can also see how the error (",l.createElement(t.strong,null,"red triangle"),") propagated up the call stack, in this case beginning with the MySQL database."),"\n"),"\n")))}var i=function(e){void 0===e&&(e={});const{wrapper:t}=Object.assign({},(0,a.ah)(),e.components);return t?l.createElement(t,e,l.createElement(r,e)):r(e)};var o=n(4184),s=n.n(o),c=n(4690),d=n(1140),u=n(2565),h=n(8531),m=n(3383),p=n(7315);const g=e=>{const{data:{mdx:{tableOfContents:{items:t},frontmatter:{toc:n=!0,title:a,timeToComplete:r,updated:i}}},children:o}=e,c=(0,l.useRef)(null),{0:g}=(0,l.useState)(""),E=(null===n||n)&&t;return l.createElement(l.Fragment,null,l.createElement(d.Z,{timeToComplete:r,updated:i},t[0].title||a||""),l.createElement(h.Z,{className:p.YS},l.createElement("article",{className:s()(p.Y2,!E&&p.ey),ref:c},l.createElement(u.Z,{components:{h1:()=>null}},o)),E&&l.createElement(m.Z,{itemsList:t,maxDepth:2,currSection:g})))},E=e=>{const{location:{pathname:t},data:{mdx:{frontmatter:{title:n},tableOfContents:{items:a}}}}=e;return l.createElement(c.Z,{pathname:t,title:n||a[0].title||void 0})};function f(e){return l.createElement(g,e,l.createElement(i,e))}},2565:function(e,t,n){n.d(t,{Z:function(){return o}});var a=n(7294),l=n(1151),r=n(7563);const i={table:r.y6,a:r.IW,blockquote:r.R4,SubHeader:r.bU,img:r.fb,code:r.dn,QuizAlert:r.SA,Danger:r.b0,Warning:r.v3,CopyText:r.O5};var o=(0,a.memo)((function(e){let{children:t,components:n={}}=e;return a.createElement(l.Zo,{components:{...i,...n}},t)}))},3383:function(e,t,n){n.d(t,{Z:function(){return c}});var a=n(7294),l=n(7500),r=n(4184),i=n.n(r),o=n(6488);const s=function(e,t,n){return void 0===t&&(t=[]),void 0===n&&(n=0),e.forEach((e=>{const{title:a,url:l,items:r}=e;t.splice(t.length,0,{depth:n,title:a,url:l}),r&&r.length>0&&s(r,t,n+1)})),t};var c=e=>{const{itemsList:t}=e,n=(0,a.useMemo)((()=>s(t[0].items||[])),[t]),r=(0,o.Z)("h1[id],h2[id]",{threshold:[0,1],rootMargin:"-48px 0px -90% 0px"});return n.length<1?null:a.createElement("nav",{className:"TableOfContents-module--toc--54d35"},a.createElement("div",{className:"TableOfContents-module--tocStack--90609"},a.createElement("h6",{className:"TableOfContents-module--tocHeader--05956"},a.createElement(l.rU,{to:"#",replace:!0},"On this page")),n.map(((e,t)=>{let{title:n,url:l}=e;return a.createElement("a",{className:i()("TableOfContents-module--link--b292b",r===l.substring(1)&&"TableOfContents-module--activeItem--3869f"),key:t,href:l},n)}))))}},7315:function(e,t,n){n.d(t,{Y2:function(){return a},YS:function(){return r},ey:function(){return l}});var a="{mdx-fields__slug}-module--article--e3d5a",l="{mdx-fields__slug}-module--noToc--82387",r="{mdx-fields__slug}-module--wrapper--58e72"},1151:function(e,t,n){n.d(t,{Zo:function(){return o},ah:function(){return r}});var a=n(7294);const l=a.createContext({});function r(e){const t=a.useContext(l);return a.useMemo((()=>"function"==typeof e?e(t):{...t,...e}),[t,e])}const i={};function o({components:e,children:t,disableParentContext:n}){let o;return o=n?"function"==typeof e?e({}):e||i:r(e),a.createElement(l.Provider,{value:o},t)}}}]);
//# sourceMappingURL=component---src-pages-mdx-fields-slug-tsx-content-file-path-content-instana-102-md-d97899f0c113dd9bc0da.js.map