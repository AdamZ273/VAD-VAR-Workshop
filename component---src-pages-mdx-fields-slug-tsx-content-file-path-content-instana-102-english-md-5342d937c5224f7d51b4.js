"use strict";(self.webpackChunkvad_var_site=self.webpackChunkvad_var_site||[]).push([[320],{7723:function(e,t,n){n.r(t),n.d(t,{Head:function(){return E},default:function(){return f}});var l=n(1151),a=n(7294);function r(e){const t=Object.assign({h1:"h1",h2:"h2",a:"a",ol:"ol",li:"li",p:"p",strong:"strong",img:"img",br:"br",em:"em"},(0,l.ah)(),e.components),{SubHeader:n}=t;return n||function(e,t){throw new Error("Expected "+(t?"component":"object")+" `"+e+"` to be defined: you likely forgot to import, pass, or provide it.")}("SubHeader",!0),a.createElement(a.Fragment,null,a.createElement(t.h1,{id:"102-monitor-calls--application-tracing"},"102: Monitor Calls + Application Tracing"),"\n",a.createElement(n,{timeToComplete:e.pageContext.frontmatter.timeToComplete,updated:e.pageContext.frontmatter.updated}),"\n",a.createElement(t.h2,{id:"navigate-to-robotshops-dependencies"},a.createElement(t.a,{href:"#navigate-to-robotshops-dependencies"},"Navigate to RobotShop’s dependencies")),"\n",a.createElement(t.ol,null,"\n",a.createElement(t.li,null,"\n",a.createElement(t.p,null,"Starting by navigating to the ",a.createElement(t.a,{href:"https://play-with.instana.io/"},"Instana playground")),"\n",a.createElement(t.p,null,"We’re going to use Instana to view all the dependencies within the RobotShop application."),"\n",a.createElement(t.p,null,"Instana automatically discovers the relationships between the services and correlates them into a dynamic graph."),"\n"),"\n",a.createElement(t.li,null,"\n",a.createElement(t.p,null,"From the sidebar menu, click the ",a.createElement(t.strong,null,"Applications")," icon (1) and choose ",a.createElement(t.strong,null,"RobotShop")," (2)."),"\n",a.createElement(t.img,{src:"/1682713734341.8211589028/applications-robotshop.png",alt:""}),"\n"),"\n",a.createElement(t.li,null,"\n",a.createElement(t.p,null,"Click on the ",a.createElement(t.strong,null,"Dependencies")," tab."),"\n",a.createElement(t.img,{src:"/1682713734349.8211589031/dependencies.png",alt:""}),"\n",a.createElement(t.p,null,"We can see each moving dot represents a call requests. The requests are moving through the application in real time. Instana is able to do this because it tracks every request that flows through the application."),"\n",a.createElement(t.p,null,"We can tell there are some problems with the application because several services are highlighted in yellow and red."),"\n"),"\n",a.createElement(t.li,null,"\n",a.createElement(t.p,null,"Hover the cursor over a few of the icons to show info on what technology they are built on."),"\n",a.createElement(t.p,null,"For example, we can see that the ",a.createElement(t.strong,null,"catalogue")," database is built on MongoDB."),"\n",a.createElement(t.img,{src:"/1682713734345.8211589030/dependencies-hover.png",alt:""}),"\n",a.createElement(t.p,null,"🟢 There are quiz questions related to the ",a.createElement(t.strong,null,"Dependencies")," graph."),"\n"),"\n"),"\n",a.createElement(t.h2,{id:"automatically-assess-events-and-alerts"},a.createElement(t.a,{href:"#automatically-assess-events-and-alerts"},"Automatically assess events and alerts")),"\n",a.createElement(t.p,null,"Since you wouldn’t normally be looking at the dashboard when something like this happens, let’s see the SRE/IT operator’s point of view when an incident occurs."),"\n",a.createElement(t.p,null,"We’ve just gotten an alert from Instana that there has been a sudden increase in erroneous calls on our ",a.createElement(t.strong,null,"discount")," service, which is part of the robot shop application."),"\n",a.createElement(t.p,null,"Although I don’t have it connected right now, the alert would show up via one of the configurable alert channels, like PagerDuty, Microsoft Teams, Slack, and many others (",a.createElement(t.a,{href:"https://www.instana.com/docs/events_alerts/alert-channels"},"full list"),")."),"\n",a.createElement(t.ol,null,"\n",a.createElement(t.li,null,"\n",a.createElement(t.p,null,"Click the ",a.createElement(t.strong,null,"Events")," icon (triangle) on the left sidebar menu."),"\n",a.createElement(t.img,{src:"/1682713734369.8211589036/sidebar_menu.png",alt:""}),"\n",a.createElement(t.p,null,"Instana automatically groups related events and issues into incidents."),"\n",a.createElement(t.p,null,"It determines what events and/or issues are related using the dynamic dependency graph that we just looked at."),"\n",a.createElement(t.p,null,"Instana also continuously assesses the groups of events and issues to determine which ones are impacting end users or posing an imminent risk of impacting end users."),"\n",a.createElement(t.p,null,"Those are the ones that Instana will alert on, so as a SRE/IT operator, you will not be interrupted constantly for things that are not very important."),"\n",a.createElement(t.p,null,"Let’s go into the details for this incident."),"\n"),"\n"),"\n",a.createElement(t.h2,{id:"inspecting-auto-correlated-incident-details"},a.createElement(t.a,{href:"#inspecting-auto-correlated-incident-details"},"Inspecting auto-correlated incident details")),"\n",a.createElement(t.p,null,"Instana recognized that the sudden increase of erroneous calls was something important to alert on, so we did not have to do any configuration or set thresholds in order to get this alert.",a.createElement(t.br),"\n","Let’s click the incident on the ",a.createElement(t.strong,null,"discount")," service for more details."),"\n",a.createElement(t.ol,null,"\n",a.createElement(t.li,null,"\n",a.createElement(t.p,null,"Click the incident called ",a.createElement(t.strong,null,"Sudden increase in the number of erroneous calls")," on the ",a.createElement(t.strong,null,"discount")," service."),"\n",a.createElement(t.img,{src:"/1682713734357.8211589033/event_page.png",alt:""}),"\n"),"\n"),"\n",a.createElement(t.p,null,"We can now see a timeline of the incident, the event that triggered Instana to create the incident, and all of the related events."),"\n",a.createElement(t.ol,{start:"2"},"\n",a.createElement(t.li,null,"\n",a.createElement(t.p,null,"Hover the cursor over to show ",a.createElement(t.strong,null,"Incident Timeline"),", ",a.createElement(t.strong,null,"Triggering Event"),", and ",a.createElement(t.strong,null,"Related Events"),"."),"\n",a.createElement(t.img,{src:"/1682713734365.8211589035/incident_details_screen.png",alt:""}),"\n",a.createElement(t.p,null,"🟢 There is a quiz question related to the ",a.createElement(t.strong,null,"Related Eevents")," widget."),"\n"),"\n"),"\n",a.createElement(t.h2,{id:"debugging-the-incident-by-inspecting-calls"},a.createElement(t.a,{href:"#debugging-the-incident-by-inspecting-calls"},"Debugging the incident by inspecting calls")),"\n",a.createElement(t.p,null,"By inspecting the related events, it looks like the abnormal termination of the MySQL database caused the problem."),"\n",a.createElement(t.p,null,"We can go into more detail about each call that failed to connect to the database."),"\n",a.createElement(t.ol,null,"\n",a.createElement(t.li,null,"\n",a.createElement(t.p,null,"Under ",a.createElement(t.strong,null,"Related Events"),", click the event that says ",a.createElement(t.strong,null,"Sudden increase in the number of erroneous calls")," (1). Then, click ",a.createElement(t.strong,null,"Analyze Calls")," (2)."),"\n",a.createElement(t.img,{src:"/1682713734361.8211589034/events.png",alt:""}),"\n"),"\n",a.createElement(t.li,null,"\n",a.createElement(t.p,null,"Click the first endpoint (1) groups list. Then, click the first call (2) in the call list."),"\n",a.createElement(t.p,null,"All the calls are grouped by endpoint. There is only one endpoint showing, but if there were more you’d see a list here."),"\n",a.createElement(t.p,null,"Endpoints are automatically discovered and mapped by Instana. We can go into the details for each erroneous call to MySQL via this endpoint (CONNECT)."),"\n",a.createElement(t.p,null,"Going into the actual trace for a request that resulted in an error will help us confirm that ",a.createElement(t.strong,null,"MySQL")," is really the source of the incident."),"\n",a.createElement(t.img,{src:"/1682713734357.8211589032/endpoint_connect.png",alt:""}),"\n"),"\n"),"\n",a.createElement(t.h2,{id:"drilling-down-with-end-to-end-traces"},a.createElement(t.a,{href:"#drilling-down-with-end-to-end-traces"},"Drilling down with end-to-end traces")),"\n",a.createElement(t.p,null,"Now that we’ve clicked on an individual call, in this case the first call in the list, we can view the call in the context of the end-to-end trace."),"\n",a.createElement(t.ol,null,"\n",a.createElement(t.li,null,"\n",a.createElement(t.p,null,"Highlight the middle dashboard area showing elements of the first call on the list. You will need to scroll down to the timeline view, and then change focus to the right column."),"\n",a.createElement(t.img,{src:"/1682713734345.8211589029/call_timeline.png",alt:""}),"\n",a.createElement(t.p,null,"🟢 There is a quiz question related to ",a.createElement(t.strong,null,"Unbounded Analytics")," page."),"\n",a.createElement(t.p,null,"We can see where the request began and each call that was made along the way."),"\n",a.createElement(t.p,null,"The ",a.createElement(t.strong,null,"Timeline")," view gives a quick overview of the time spent on each span, as well as key performance indicators, such as the number of erroneous calls in this trace, the number of warning logs, and the total latency."),"\n",a.createElement(t.p,null,"Everything is presented in an easy-to-navigate visual dashboard, so we can drill into increasingly detailed information to pinpoint the problem, without using multiple tools or navigating back and forth to lots of dashboards."),"\n"),"\n",a.createElement(t.li,null,"\n",a.createElement(t.p,null,"In the call stack [move to right column], we can click each span to see more information, including the complete stack trace."),"\n",a.createElement(t.p,null,"We can see the source, in this case the ",a.createElement(t.em,null,"discount")," service, and [scroll down] the destination, which in this case is ",a.createElement(t.em,null,"CONNECT")," of MySQL."),"\n",a.createElement(t.p,null,"It’s useful to have this context because we can easily see how the calls go from one service to another, just by clicking them. We can also see how the error (",a.createElement(t.strong,null,"red triangle"),") propagated up the call stack, in this case beginning with the MySQL database."),"\n"),"\n"))}var o=function(e){void 0===e&&(e={});const{wrapper:t}=Object.assign({},(0,l.ah)(),e.components);return t?a.createElement(t,e,a.createElement(r,e)):r(e)};var i=n(7315),s=n(2125),c=n(403),h=n(4690),u=n(4184),m=n.n(u);const d={table:c.y6,a:c.IW,blockquote:c.R4,SubHeader:c.bU,img:c.fb,code:c.dn,QuizAlert:c.SA},p=a.memo((function(e){let{children:t}=e;return a.createElement(l.Zo,{components:{...d}},t)})),g=e=>{const{data:{mdx:{tableOfContents:{items:t},frontmatter:{toc:n=!0}}},children:l}=e,r=(0,a.useRef)(null),{0:o,1:c}=(0,a.useState)("");(0,a.useEffect)((()=>{if(!r.current)return;const e=r.current.querySelectorAll("h2,h3,h4,h5"),t=new IntersectionObserver((e=>{e.forEach((e=>{e.isIntersecting&&c(e.target.id)}))}),{rootMargin:"0px 0px -95% 0px",threshold:0});return e.forEach((e=>{t.observe(e)})),()=>t.disconnect()}),[]);const h=(null===n||n)&&t;return a.createElement(a.Fragment,null,a.createElement("article",{className:m()(i.Y,!h&&i.e),ref:r},a.createElement(p,null,l)),h&&a.createElement(s.Z,{itemsList:t,maxDepth:1,currSection:o}))},E=e=>{const{location:{pathname:t},data:{mdx:{frontmatter:{title:n},tableOfContents:{items:l}}}}=e;return a.createElement(h.Z,{pathname:t,title:n||l[0].title||void 0})};function f(e){return a.createElement(g,e,a.createElement(o,e))}}}]);
//# sourceMappingURL=component---src-pages-mdx-fields-slug-tsx-content-file-path-content-instana-102-english-md-5342d937c5224f7d51b4.js.map