"use strict";(self.webpackChunkvad_var_site=self.webpackChunkvad_var_site||[]).push([[8175],{1264:function(e,t,n){n.r(t),n.d(t,{Head:function(){return E},default:function(){return y}});var l=n(1151),a=n(7294);function i(e){const t=Object.assign({section:"section",h1:"h1",h2:"h2",a:"a",p:"p",ul:"ul",li:"li",strong:"strong",ol:"ol",img:"img",h3:"h3",em:"em",h4:"h4"},(0,l.ah)(),e.components);return a.createElement(t.section,{className:"heading","data-heading-rank":"1","aria-labelledby":"104-turbonomic-actions-and-policies"},a.createElement(t.h1,{id:"104-turbonomic-actions-and-policies"},"104: Turbonomic Actions and Policies"),"\n",a.createElement(t.section,{className:"heading","data-heading-rank":"2","aria-labelledby":"goal"},a.createElement(t.h2,{id:"goal"},a.createElement(t.a,{href:"#goal"},"Goal")),"\n",a.createElement(t.p,null,"In this lab you will:"),"\n",a.createElement(t.ul,null,"\n",a.createElement(t.li,null,"Explore different action types"),"\n",a.createElement(t.li,null,"Explore existing policies"),"\n",a.createElement(t.li,null,"Create an Automation Policy"),"\n",a.createElement(t.li,null,"Schedule an automation policy"),"\n"),"\n",a.createElement(t.p,null,a.createElement(t.strong,null,"Please note that your number and types of actions may vary on your environment")),"\n"),a.createElement(t.section,{className:"heading","data-heading-rank":"2","aria-labelledby":"explore-different-action-types"},a.createElement(t.h2,{id:"explore-different-action-types"},a.createElement(t.a,{href:"#explore-different-action-types"},"Explore different action types")),"\n",a.createElement(t.ol,null,"\n",a.createElement(t.li,null,"Navigate to the main dashboard by clicking on the ",a.createElement(t.strong,null,"On")," button from the navigator. Then select ",a.createElement(t.strong,null,"Show All")," from the ",a.createElement(t.strong,null,"Pending Actions")," section"),"\n"),"\n",a.createElement(t.img,{src:"/1684781134573.88621090036/pendingactions.png",alt:""}),"\n",a.createElement(t.ol,{start:"2"},"\n",a.createElement(t.li,null,"On this page you will see all pending actions - including on-prem and cloud. If you look at the list on the left you will see actions are categorized by their type. Spend a few minutes exploring actions by going to the on-prem or cloud tabs."),"\n"),"\n",a.createElement(t.img,{src:"/1684781134549.88621090024/actionpage.png",alt:""}),"\n",a.createElement(t.ol,{start:"3"},"\n",a.createElement(t.li,null,"While exploring actions, you will notice that each action type has multiple entities that it affects. For example, the type ",a.createElement(t.strong,null,"Scale")," - which is basically a resize action for cloud entities - affects VMs, databases, VM storage and volumes. Let's take a closer look at some of these actions."),"\n"),"\n",a.createElement(t.p,null,"Navigate to ",a.createElement(t.strong,null,"Volumes")," under ",a.createElement(t.strong,null,"Scale")," action type."),"\n",a.createElement(t.img,{src:"/1684781134581.88621090041/scalevolume.png",alt:""}),"\n",a.createElement(t.p,null,"Select the ",a.createElement(t.strong,null,"Azure")," tab. Then click on ",a.createElement(t.strong,null,"Details")," for an action that is market ",a.createElement(t.strong,null,"Performance")," and reduces your cost. You may need to scroll to the right to locate the button."),"\n",a.createElement(t.img,{src:"/1684781134589.88621090047/volumedetail.png",alt:""}),"\n",a.createElement(t.p,null,"This page displays all the detail about this action including why it was generated, what is the impact if taken, costs or cost savings associated with taking this action, and important information about if it will cause downtime if taken and whether or not it is reversible. Let's take a closer look at the information specified in this action detail."),"\n",a.createElement(t.ol,null,"\n",a.createElement(t.li,null,"\n",a.createElement(t.p,null,"This section informs you of the action, the entity it affects, the location in which the entity exists, and the reason. In this picture, we have a scaling volume action for the entity named ",a.createElement(t.strong,null,"ptericdisks3_datadisk_2")," in the deployment named ",a.createElement(t.strong,null,"EA - Development")," and the reason is IOPS Congestion."),"\n"),"\n",a.createElement(t.li,null,"\n",a.createElement(t.p,null,"The action essentials section gives a quick view into what you need to know about taking this action."),"\n",a.createElement(t.ul,null,"\n",a.createElement(t.li,null,"The action can be accepted and executed immediately means there are currently no restrictions that will prevent you from taking it right now. We will explore what this means further when we discuss action modes."),"\n",a.createElement(t.li,null,"Whether or not there is downtime associated with taking this action. In our example, this change requires a period of downtime so when considering taking it one must plan ahead and inform the users of this volume of planned downtime."),"\n",a.createElement(t.li,null,"Whether or not this action is reversible."),"\n"),"\n"),"\n",a.createElement(t.li,null,"\n",a.createElement(t.p,null,"In this section you will learn why this action is generated. Typically Turbonomic observes the entity over a period of time and captures the 95th percentile for it. Considering the example shown in the picture below, Turbonomic tells us that the IOPS utilization is about 100% 95% of the time during a 30-day observation period. This means there is an IOPS congestion on this volume so a scaling action is generated for this entity to move it to a more suitable volume."),"\n"),"\n",a.createElement(t.li,null,"\n",a.createElement(t.p,null,"The IOPS 95th percentile graph."),"\n"),"\n",a.createElement(t.li,null,"\n",a.createElement(t.p,null,"IOPS daily average graph."),"\n"),"\n",a.createElement(t.li,null,"\n",a.createElement(t.p,null,"The dotted line represents the projected 95th percentile after taking this action."),"\n"),"\n",a.createElement(t.li,null,"\n",a.createElement(t.p,null,"Detailed comparison between the current state of the resources and the projected result after taking the action."),"\n"),"\n",a.createElement(t.li,null,"\n",a.createElement(t.p,null,"Detailed cost savings comparison if you take this action. Notice how scaling to a different volume will result in higher IOPS, lower utilization, and it even saves money. So why wouldn't you take it?"),"\n"),"\n"),"\n",a.createElement(t.img,{src:"/1684781134541.88621090022/actiondetail1.png",alt:""}),"\n",a.createElement(t.img,{src:"/1684781134545.88621090023/actiondetail2.png",alt:""}),"\n",a.createElement(t.section,{className:"heading","data-heading-rank":"3","aria-labelledby":"optimize-on-prem-resources"},a.createElement(t.h3,{id:"optimize-on-prem-resources"},a.createElement(t.a,{href:"#optimize-on-prem-resources"},"Optimize on-prem resources")),"\n",a.createElement(t.p,null,"In this section, you will take actions that will optimize your on-prem resources while assuring performance. Taking such actions will result in resources being released by entities or VMs that are not utilizing what they have over the observation period (by default 30 days) so that they can be allocated to workloads that need these resources."),"\n",a.createElement(t.ol,null,"\n",a.createElement(t.li,null,"\n",a.createElement(t.p,null,"Navigate to ",a.createElement(t.strong,null,"On-Prem")," tab from your actions page. Then under ",a.createElement(t.strong,null,"resize")," select ",a.createElement(t.strong,null,"Virtual Machines"),"."),"\n"),"\n",a.createElement(t.li,null,"\n",a.createElement(t.p,null,"Scroll down the list and select an action to downsize virtual memory that has ",a.createElement(t.strong,null,"Efficiency")," as its action category. Click on its ",a.createElement(t.strong,null,"Details"),"."),"\n"),"\n"),"\n",a.createElement(t.img,{src:"/1684781134565.88621090034/optimize1.png",alt:""}),"\n",a.createElement(t.ol,{start:"3"},"\n",a.createElement(t.li,null,"Check the details, you will notice that this VM's virtual memory utilization was under 1% for 95% of the time over 30 days. This means this VM has overallocated memory which it does not consume. So you can safely reduce the memory capacity while still providing optimal performance. Notice the projected results of taking the action, it will bump up the utilization from 1% to 2% which is perfectly acceptable."),"\n"),"\n",a.createElement(t.p,null,"Once you approve of all details and ensure this action is safe, click on ",a.createElement(t.strong,null,"Execute Action")," button at the bottom of the details page. Once you execute this action, Turbonomic will use API calls to adjust the virtual memory of this VM for you. So you won't need to log into your vCenter environment. If the action is executed successfully, you will see a green checkmark next to that action."),"\n",a.createElement(t.img,{src:"/1684781134569.88621090035/optimize2.png",alt:""}),"\n")),a.createElement(t.section,{className:"heading","data-heading-rank":"2","aria-labelledby":"turbonomic-policies"},a.createElement(t.h2,{id:"turbonomic-policies"},a.createElement(t.a,{href:"#turbonomic-policies"},"Turbonomic Policies")),"\n",a.createElement(t.p,null,"You’ve learned how to take actions manually. But what if we wanted to automate this? Once we validate that it is safe and good to take a certain action and we trust it, we can allow the entities to act on their own decisions."),"\n",a.createElement(t.section,{className:"heading","data-heading-rank":"3","aria-labelledby":"explore-existing-policies"},a.createElement(t.h3,{id:"explore-existing-policies"},a.createElement(t.a,{href:"#explore-existing-policies"},"Explore existing policies")),"\n",a.createElement(t.p,null,a.createElement(t.em,null,"As a reminder, please ensure that you are logged in with an ",a.createElement(t.strong,null,"Administrator")," user. If you are not logged in as an administrator user, you will not have the necessary permissions to run through the labs")),"\n",a.createElement(t.ol,null,"\n",a.createElement(t.li,null,"Navigate to ",a.createElement(t.strong,null,"Settings"),", then ",a.createElement(t.strong,null,"Policies"),". On this page, you will see a list of all existing policies."),"\n"),"\n",a.createElement(t.img,{src:"/1684781134573.88621090037/policy1.png",alt:""}),"\n",a.createElement(t.ol,{start:"2"},"\n",a.createElement(t.li,null,"From the list to the left, select ",a.createElement(t.strong,null,"Defaults"),". This will show a list of all system default policies."),"\n"),"\n",a.createElement(t.p,null,a.createElement(t.em,null,a.createElement(t.strong,null,"Tip"),": These default policies remain effective unless the user creates a policy affecting the same resources but with different criteria. User-defined policy overrides the default policy.")),"\n",a.createElement(t.img,{src:"/1684781134557.88621090029/defaultpolicy.png",alt:""}),"\n",a.createElement(t.ol,{start:"3"},"\n",a.createElement(t.li,null,"Scroll down in the default policy list and click on ",a.createElement(t.strong,null,"Storage Defaults"),". Now notice that this policy sets the ",a.createElement(t.strong,null,"Resize")," action acceptance is set to recommend. This will result in all resize actions generated for storage being set to recommend only and being unable to execute within Turbonomic."),"\n"),"\n",a.createElement(t.img,{src:"/1684781134585.88621090044/storage1.png",alt:""}),"\n",a.createElement(t.ol,{start:"4"},"\n",a.createElement(t.li,null,"Respectively, for the action that you explored for a cloud VM where you could manually accept and execute it within Turbonomic, there is a default policy set that defines that:"),"\n"),"\n",a.createElement(t.p,null,"Navigate to the ",a.createElement(t.strong,null,"Virtual Machine Defaults")," policy from the default policies list. You can see that all cloud scaling actions are set to ",a.createElement(t.strong,null,"Manual")," which allows them to be accepted and executed (assuming there are no prerequisites for them)."),"\n",a.createElement(t.img,{src:"/1684781134585.88621090046/vm1.png",alt:""}),"\n"),a.createElement(t.section,{className:"heading","data-heading-rank":"3","aria-labelledby":"create-an-automation-policy"},a.createElement(t.h3,{id:"create-an-automation-policy"},a.createElement(t.a,{href:"#create-an-automation-policy"},"Create an Automation Policy")),"\n",a.createElement(t.p,null,"You will create an automation policy to define how you'd like Turbonomic to treat actions as they appear. Keep in mind, user-defined policies will override system default policies that affect the same entity."),"\n",a.createElement(t.section,{className:"heading","data-heading-rank":"4","aria-labelledby":"add-response-time-service-level-objective-slo-constraints"},a.createElement(t.h4,{id:"add-response-time-service-level-objective-slo-constraints"},a.createElement(t.a,{href:"#add-response-time-service-level-objective-slo-constraints"},"Add response time service level objective (SLO) constraints")),"\n",a.createElement(t.ol,null,"\n",a.createElement(t.li,null,"Navigate to ",a.createElement(t.strong,null,"Policies")," from ",a.createElement(t.strong,null,"Settings"),". Then click on ",a.createElement(t.strong,null,"New Automation Policy")," on the top right side of the window."),"\n"),"\n",a.createElement(t.img,{src:"/1684781134553.88621090026/auto1.png",alt:""}),"\n",a.createElement(t.ol,{start:"2"},"\n",a.createElement(t.li,null,"Click on ",a.createElement(t.strong,null,"Business Application"),". Once you do the Policy Editor window will appear."),"\n"),"\n",a.createElement(t.img,{src:"/1684781134557.88621090028/businessapplication.png",alt:""}),"\n",a.createElement(t.ol,{start:"3"},"\n",a.createElement(t.li,null,"In the Policy editor, give your policy a unique name like response_time_YourInitials. Then under ",a.createElement(t.strong,null,"Scope")," click on ",a.createElement(t.strong,null,"Select group of business applications"),". This will specify which group of business applications will be affected by this policy."),"\n"),"\n",a.createElement(t.img,{src:"/1684781134573.88621090038/policyname.png",alt:""}),"\n",a.createElement(t.ol,{start:"4"},"\n",a.createElement(t.li,null,"Once you click on ",a.createElement(t.strong,null,"Select group of business applications"),", the ",a.createElement(t.strong,null,"Select Group of Business Apps")," Editor window will appear."),"\n"),"\n",a.createElement(t.img,{src:"/1684781134553.88621090027/businessappeditor.png",alt:""}),"\n",a.createElement(t.ol,{start:"5"},"\n",a.createElement(t.li,null,"Click on ",a.createElement(t.strong,null,"New Group")," button. The ",a.createElement(t.strong,null,"Add members to a new group")," editor window will appear."),"\n"),"\n",a.createElement(t.img,{src:"/1684781134561.88621090032/newgroupbtn.png",alt:""}),"\n",a.createElement(t.ol,{start:"6"},"\n",a.createElement(t.li,null,"(1) Name your group ",a.createElement(t.strong,null,"Instana Services"),". Change the type to (2) ",a.createElement(t.strong,null,"Static")," in the ",a.createElement(t.strong,null,"Type")," dropdown menu. (3) Select ",a.createElement(t.strong,null,"RobotShop")," and (4) ",a.createElement(t.strong,null,"Quote of the Day"),". Then (5) click on the ",a.createElement(t.strong,null,"Save Group")," button"),"\n"),"\n",a.createElement(t.img,{src:"/1684781134561.88621090031/groupeditor.png",alt:""}),"\n",a.createElement(t.ol,{start:"7"},"\n",a.createElement(t.li,null,"Select the ",a.createElement(t.strong,null,"Instana Services")," group and click on the ",a.createElement(t.strong,null,"Select")," button."),"\n"),"\n",a.createElement(t.img,{src:"/1684781134581.88621090042/selectgroup.png",alt:""}),"\n",a.createElement(t.ol,{start:"8"},"\n",a.createElement(t.li,null,"In your policy editor, add the ",a.createElement(t.strong,null,"Enable Response Time SLO")," and ",a.createElement(t.strong,null,"Response Time SLO (ms)")," constraints and then click on ",a.createElement(t.strong,null,"Save Policy"),". You may recieve a message saying it may take 10 minutes for the policy to become effective, click ",a.createElement(t.strong,null,"Yes")," to proceed."),"\n"),"\n",a.createElement(t.img,{src:"/1684781134573.88621090039/savepolicy.png",alt:""}),"\n",a.createElement(t.ol,{start:"9"},"\n",a.createElement(t.li,null,"To check if your policy is created try searching for your policy's name in the list. you can make changes and edit it as necessary from here as well."),"\n"),"\n",a.createElement(t.img,{src:"/1684781134585.88621090045/verifypolicy.png",alt:""}),"\n")),a.createElement(t.section,{className:"heading","data-heading-rank":"3","aria-labelledby":"schedule-a-policy"},a.createElement(t.h3,{id:"schedule-a-policy"},a.createElement(t.a,{href:"#schedule-a-policy"},"Schedule a Policy")),"\n",a.createElement(t.p,null,"You can set a schedule for an automation policy, which sets a window of time when the policy takes effect. In addition, a scheduled policy can include scheduled actions. When the policy is in effect, Turbonomic recommends or automatically executes those actions as they are generated. Some of those actions could be disruptive so you may want to defer their execution to a non-critical time window. In this case, you will need to set an action execution schedule within the scheduled policy."),"\n",a.createElement(t.ol,null,"\n",a.createElement(t.li,null,"\n",a.createElement(t.p,null,"Click on the automation policy, response_time_YourInitials, we just created."),"\n"),"\n",a.createElement(t.li,null,"\n",a.createElement(t.p,null,"Expand ",a.createElement(t.strong,null,"Policy Schedule")," and click on ",a.createElement(t.strong,null,"Attach Schedule"),". Then click on ",a.createElement(t.strong,null,"New Schedule")),"\n"),"\n"),"\n",a.createElement(t.img,{src:"/1684781134549.88621090025/attachschedule.png",alt:""}),"\n",a.createElement(t.img,{src:"/1684781134565.88621090033/newschedule.png",alt:""}),"\n",a.createElement(t.ol,{start:"3"},"\n",a.createElement(t.li,null,"\n",a.createElement(t.p,null,"This section will define when your policy is in effect."),"\n",a.createElement(t.p,null,"A. Give your policy schedule a name like policy_schedule_YourInitials."),"\n",a.createElement(t.p,null,"B. Select ",a.createElement(t.strong,null,"Weekly")," under Recurrence."),"\n",a.createElement(t.p,null,"C. Set to repeat every week only on ",a.createElement(t.strong,null,"Saturdays")," and ",a.createElement(t.strong,null,"Sundays"),"."),"\n",a.createElement(t.p,null,"D. Select today's date as the start date and ",a.createElement(t.strong,null,"None")," as the end date."),"\n",a.createElement(t.p,null,"E. Set 12:00 as the start time and 12 for the duration hours. Please Note if you are completing this lab afternoon local time, you may want to adjust this time from 12:00 to a few hours after your current time. The reason is that the system will not allow you to create a policy in the past."),"\n",a.createElement(t.p,null,"F. Select your time zone."),"\n",a.createElement(t.p,null,"G. Check the Summary and click on ",a.createElement(t.strong,null,"Submit"),"."),"\n"),"\n"),"\n",a.createElement(t.img,{src:"/1684781134561.88621090030/editschedule.png",alt:""}),"\n",a.createElement(t.ol,{start:"4"},"\n",a.createElement(t.li,null,"Select your newly created schedule and click ",a.createElement(t.strong,null,"Set")),"\n"),"\n",a.createElement(t.img,{src:"/1684781134581.88621090043/setschedule.png",alt:""}),"\n",a.createElement(t.ol,{start:"5"},"\n",a.createElement(t.li,null,"Now you should be back on the ",a.createElement(t.strong,null,"Configure Business Applications Policy")," page. Check all the information and ensure its accuracy. Once done, click on ",a.createElement(t.strong,null,"Save Policy"),"."),"\n"),"\n",a.createElement(t.img,{src:"/1684781134577.88621090040/savepolicy2.png",alt:""}))))}var o=function(e){void 0===e&&(e={});const{wrapper:t}=Object.assign({},(0,l.ah)(),e.components);return t?a.createElement(t,e,a.createElement(i,e)):i(e)},r=n(4184),c=n.n(r),s=n(4690),m=n(1140),u=n(2565),h=n(8531),d=n(3383),p=n(7315);const g=e=>{const{data:{mdx:{tableOfContents:{items:t},frontmatter:{toc:n=!0,title:l,timeToComplete:i,updated:o}}},children:r}=e,s=(0,a.useRef)(null),{0:g}=(0,a.useState)(""),E=(null===n||n)&&t;return a.createElement(a.Fragment,null,a.createElement(m.Z,{timeToComplete:i,updated:o},t[0].title||l||""),a.createElement(h.Z,{className:p.YS},a.createElement("article",{className:c()(p.Y2,!E&&p.ey),ref:s},a.createElement(u.Z,{components:{h1:()=>null}},r)),E&&a.createElement(d.Z,{itemsList:t,maxDepth:2,currSection:g})))},E=e=>{const{location:{pathname:t},data:{mdx:{frontmatter:{title:n},tableOfContents:{items:l}}}}=e;return a.createElement(s.Z,{pathname:t,title:n||l[0].title||void 0})};function y(e){return a.createElement(g,e,a.createElement(o,e))}},2565:function(e,t,n){n.d(t,{Z:function(){return r}});var l=n(7294),a=n(1151),i=n(987);const o={table:i.y6,a:i.IW,blockquote:i.R4,SubHeader:i.bU,img:i.fb,code:i.dn,QuizAlert:i.SA};var r=(0,l.memo)((function(e){let{children:t,components:n={}}=e;return l.createElement(a.Zo,{components:{...o,...n}},t)}))},4690:function(e,t,n){var l=n(7294),a=n(1072),i=n(2401);t.Z=e=>{const{title:t,description:n,pathname:o,children:r}=e,{description:c,title:s,origin:m}=(0,i.Z)(),{i18n:{language:u}}=(0,a.$G)(),h={title:t||s,description:n||c,url:""+m+(o||"")};return l.createElement(l.Fragment,null,l.createElement("html",{lang:u}),l.createElement("link",{rel:"icon",href:"data:image/svg+xml,<svg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 100 100'><text y='0.9em' font-size='90'>🦺</text></svg>"}),l.createElement("title",null,h.title),l.createElement("link",{rel:"canonical",href:h.url}),l.createElement("meta",{name:"description",content:h.description}),l.createElement("meta",{property:"og:title",content:h.title}),l.createElement("meta",{property:"og:url",content:h.url}),l.createElement("meta",{property:"og:type",content:"website"}),l.createElement("meta",{property:"og:description",content:h.description}),l.createElement("meta",{name:"twitter:card",content:"summary"}),l.createElement("meta",{name:"twitter:title",content:h.title}),l.createElement("meta",{name:"twitter:url",content:h.url}),l.createElement("meta",{name:"twitter:description",content:h.description}),l.createElement("meta",{name:"twitter:site",content:"https://www.ibm.com"}),l.createElement("meta",{name:"twitter:creator",content:"@IBM"}),r)}},3383:function(e,t,n){n.d(t,{Z:function(){return s}});var l=n(7294),a=n(7500),i=n(4184),o=n.n(i),r=n(6488);const c=function(e,t,n){return void 0===t&&(t=[]),void 0===n&&(n=0),e.forEach((e=>{const{title:l,url:a,items:i}=e;t.splice(t.length,0,{depth:n,title:l,url:a}),i&&i.length>0&&c(i,t,n+1)})),t};var s=e=>{const{itemsList:t}=e,n=(0,l.useMemo)((()=>c(t[0].items||[])),[t]),i=(0,r.Z)("h1[id],h2[id]",{threshold:[0,1],rootMargin:"-48px 0px -90% 0px"});return n.length<1?null:l.createElement("nav",{className:"TableOfContents-module--toc--54d35"},l.createElement("div",{className:"TableOfContents-module--tocStack--90609"},l.createElement("h6",{className:"TableOfContents-module--tocHeader--05956"},l.createElement(a.rU,{to:"#",replace:!0},"On this page")),n.map(((e,t)=>{let{title:n,url:a}=e;return l.createElement("a",{className:o()("TableOfContents-module--link--b292b",i===a.substring(1)&&"TableOfContents-module--activeItem--3869f"),key:t,href:a},n)}))))}},7315:function(e,t,n){n.d(t,{Y2:function(){return l},YS:function(){return i},ey:function(){return a}});var l="{mdx-fields__slug}-module--article--e3d5a",a="{mdx-fields__slug}-module--noToc--82387",i="{mdx-fields__slug}-module--wrapper--58e72"},1151:function(e,t,n){n.d(t,{Zo:function(){return r},ah:function(){return i}});var l=n(7294);const a=l.createContext({});function i(e){const t=l.useContext(a);return l.useMemo((()=>"function"==typeof e?e(t):{...t,...e}),[t,e])}const o={};function r({components:e,children:t,disableParentContext:n}){let r;return r=n?"function"==typeof e?e({}):e||o:i(e),l.createElement(a.Provider,{value:r},t)}}}]);
//# sourceMappingURL=component---src-pages-mdx-fields-slug-tsx-content-file-path-content-turbonomic-104-md-616018fd2cd2574b18a4.js.map