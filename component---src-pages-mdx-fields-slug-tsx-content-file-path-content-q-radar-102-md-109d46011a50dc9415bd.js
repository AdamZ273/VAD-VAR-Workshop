"use strict";(self.webpackChunkvad_var_site=self.webpackChunkvad_var_site||[]).push([[541],{9382:function(e,t,n){n.r(t),n.d(t,{Head:function(){return E},default:function(){return g}});var l=n(1151),a=n(7294);function r(e){const t=Object.assign({h1:"h1",h2:"h2",a:"a",p:"p",ul:"ul",li:"li",strong:"strong",ol:"ol",img:"img",blockquote:"blockquote",em:"em"},(0,l.ah)(),e.components),{SubHeader:n,QuizAlert:r}=t;return r||c("QuizAlert",!0),n||c("SubHeader",!0),a.createElement(a.Fragment,null,a.createElement(t.h1,{id:"102-data-explorer-threat-hunting-and-case-management"},"102: Data explorer, threat hunting and case management"),"\n",a.createElement(n,{timeToComplete:e.pageContext.frontmatter.timeToComplete,updated:e.pageContext.frontmatter.updated}),"\n",a.createElement(r,{text:"Heads Up! Quiz material will be flagged like this!"}),"\n",a.createElement(t.h2,{id:"prerequisite"},a.createElement(t.a,{href:"#prerequisite"},"Prerequisite")),"\n",a.createElement(t.p,null,"This lab starts from the end of 101. If you have closed your browser, navigate back to the threat intelligence pop up for IP 128.210.157.251 by taking the following steps:"),"\n",a.createElement(t.ul,null,"\n",a.createElement(t.li,null,"From the homepage left navigation menu, expand ",a.createElement(t.strong,null,"Case Management")," and click ",a.createElement(t.strong,null,"Cases")),"\n",a.createElement(t.li,null,"Click on the case you created (matching Case ID) at the beginning of Lab 101"),"\n",a.createElement(t.li,null,"Click the ",a.createElement(t.strong,null,"Attack Graph")," tab"),"\n",a.createElement(t.li,null,"Click on the ",a.createElement(t.strong,null,"Exfiltration - Transfer Data to Cloud..")," artifact"),"\n",a.createElement(t.li,null,"Click the Click the Malicious IP address ",a.createElement(t.strong,null,"128.210.157.251")),"\n"),"\n",a.createElement(t.h2,{id:"data-sources-and-case-artifacts"},a.createElement(t.a,{href:"#data-sources-and-case-artifacts"},"Data sources and case artifacts")),"\n",a.createElement(t.ol,null,"\n",a.createElement(t.li,null,"\n",a.createElement(t.p,null,"At the bottom of the IP report, click ",a.createElement(t.strong,null,"Query in Data Explorer"),".\n",a.createElement(t.img,{src:"/1681489089571.47271112284/queryInDataExplorer.png",alt:""})),"\n",a.createElement(r,{text:"Quiz material"}),"\n",a.createElement(t.blockquote,null,"\n",a.createElement(t.p,null,"Before taking response actions to mitigate the threat, let’s perform some additional threat hunting by searching our connected data sources for some of the IOCs uncovered as part of our initial investigation."),"\n"),"\n",a.createElement(t.p,null,a.createElement(t.strong,null,"Note"),": Data soruces allows an SOC analyst to search multiple sources of data at rest. This is a key differentiator from other solutions that require data ingestion before searching."),"\n",a.createElement(t.p,null,"We will add the following as case artifacts:"),"\n",a.createElement(t.ul,null,"\n",a.createElement(t.li,null,"\n",a.createElement(t.p,null,"Domain name: database.example.com"),"\n"),"\n",a.createElement(t.li,null,"\n",a.createElement(t.p,null,"IP address with bad IP reputation 128.210.157.251 (the 199.36.158.100 is already an artifact)"),"\n"),"\n",a.createElement(t.li,null,"\n",a.createElement(t.p,null,"User account: dan"),"\n"),"\n"),"\n"),"\n",a.createElement(t.li,null,"\n",a.createElement(t.p,null,"In the Data Explorer, at the Search Results page, review the results of the query."),"\n",a.createElement(t.blockquote,null,"\n",a.createElement(t.p,null,"The query for that IP address returns two results from the QRadar NDR data source."),"\n"),"\n",a.createElement(t.blockquote,null,"\n",a.createElement(t.p,null,"From the query results, you see that the C2 Server has only communicated with the two IP addresses discovered by Threat Investigator."),"\n"),"\n"),"\n",a.createElement(t.li,null,"\n",a.createElement(t.p,null,"To open the log details of the second log result that has database.example.com domain, click ",a.createElement(t.strong,null,"Expand"),"."),"\n",a.createElement(t.img,{src:"/1681489089567.47271112278/dataExplorer.png",alt:""}),"\n"),"\n",a.createElement(t.li,null,"\n",a.createElement(t.p,null,"To add the domain to the artifact, right-click domain ",a.createElement(t.strong,null,"database.example.com > Add artifact to case"),"."),"\n",a.createElement(t.img,{src:"/1681489089567.47271112279/dataExplorer2.png",alt:""}),"\n",a.createElement(t.blockquote,null,"\n",a.createElement(t.p,null,"Let’s add this domain to our list of artifacts so we can isolate this database."),"\n"),"\n"),"\n",a.createElement(t.li,null,"\n",a.createElement(t.p,null,'At the "Add artifact to case" window, type appropriate ',a.createElement(t.strong,null,"Description"),", select the appropriate ",a.createElement(t.strong,null,"case number")," (the one you created at the beginning of Lab 101)."),"\n",a.createElement(t.img,{src:"/1681489089563.47271112271/addArtifact.png",alt:""}),"\n",a.createElement(t.p,null,a.createElement(t.strong,null,"Hint"),": When adding the artifact, it is a good practice to describe why artifact is added to the case and ensure that you are using right case number."),"\n"),"\n",a.createElement(t.li,null,"\n",a.createElement(t.p,null,"Click ",a.createElement(t.strong,null,"Add artifact"),"."),"\n",a.createElement(t.blockquote,null,"\n",a.createElement(t.p,null,'Repeat steps 4 and 5 to add additional artifacts "user_id dan" and malicious Command and Control (C2) IP addresses "128.210.157.251".'),"\n"),"\n"),"\n",a.createElement(t.li,null,"\n",a.createElement(t.p,null,"Add user ",a.createElement(t.strong,null,"user_id dan")," and malicious ",a.createElement(t.strong,null,"IP 128.210.157.251")," as the artifacts to the case."),"\n",a.createElement(t.blockquote,null,"\n",a.createElement(t.p,null,"After we add those artifacts to the case, let’s navigate back to the open case."),"\n"),"\n",a.createElement(t.p,null,a.createElement(t.strong,null,"Hint"),": You can easily launch to the open case after the artifacts have been added by using the pop-up link that appears the bottom of the page. However, the link disappears quickly."),"\n"),"\n"),"\n",a.createElement(t.h2,{id:"case-management"},a.createElement(t.a,{href:"#case-management"},"Case management")),"\n",a.createElement(t.ol,null,"\n",a.createElement(t.li,null,"\n",a.createElement(t.p,null,"From the main menu, go to ",a.createElement(t.strong,null,"Case Management > Cases")," if you're not already .\nYou should confirm that the artifacts collected during the investigation are now part of the case."),"\n"),"\n",a.createElement(t.li,null,"\n",a.createElement(t.p,null,"Open your case number."),"\n"),"\n",a.createElement(t.li,null,"\n",a.createElement(t.p,null,"Click the ",a.createElement(t.strong,null,"Artifacts")," tab."),"\n",a.createElement(t.img,{src:"/1681489089563.47271112272/caseArtifacts.png",alt:""}),"\n",a.createElement(t.blockquote,null,"\n",a.createElement(t.p,null,"Now that we have a better understanding of the malicious activity that has occurred, you can continue the incident response process and complete the next step in our playbook."),"\n"),"\n",a.createElement(t.blockquote,null,"\n",a.createElement(t.p,null,"Let’s go back to the tasks list."),"\n"),"\n"),"\n",a.createElement(t.li,null,"\n",a.createElement(t.p,null,"Click the ",a.createElement(t.strong,null,"Tasks")," tab."),"\n",a.createElement(t.blockquote,null,"\n",a.createElement(t.p,null,"From the tasks list, let’s open and execute the next task ",a.createElement(t.em,null,"Initial triage"),"."),"\n"),"\n"),"\n",a.createElement(t.li,null,"\n",a.createElement(t.p,null,"To open the task, click ",a.createElement(t.strong,null,"Initial triage"),"."),"\n",a.createElement(t.img,{src:"/1681489089563.47271112274/caseTasks.png",alt:""}),"\n"),"\n",a.createElement(t.li,null,"\n",a.createElement(t.p,null,"To update the task, click ",a.createElement(t.strong,null,"Edit"),"."),"\n",a.createElement(t.blockquote,null,"\n",a.createElement(t.p,null,"This task asks you to complete an initial triage of the threat and disclose whether this is a confirmed incident or a false positive. Let’s confirm this incident, which is the default setting."),"\n"),"\n"),"\n",a.createElement(t.li,null,"\n",a.createElement(t.p,null,"To confirm the incident, at the Incident Disposition field select ",a.createElement(t.strong,null,"Confirmed"),"."),"\n",a.createElement(t.p,null,a.createElement(t.strong,null,"NOTE"),': This should be the default value, but if we were not certain of the attack we could disposition as "Unconfirmed", but given the data we should leave it as "Confirmed".'),"\n",a.createElement(t.img,{src:"/1681489089571.47271112288/triageTaskEdit.png",alt:""}),"\n",a.createElement(t.blockquote,null,"\n",a.createElement(t.p,null,"And then we can close this task."),"\n"),"\n"),"\n",a.createElement(t.li,null,"\n",a.createElement(t.p,null,"Click ",a.createElement(t.strong,null,"Save"),"."),"\n"),"\n",a.createElement(t.li,null,"\n",a.createElement(t.p,null,"Click ",a.createElement(t.strong,null,"Complete and Close"),"."),"\n"),"\n",a.createElement(t.li,null,"\n",a.createElement(t.p,null,"In the tasks list, note the newly created tasks."),"\n",a.createElement(t.blockquote,null,"\n",a.createElement(t.p,null,"Completing the previous task generates a new task, asking you to take response actions."),"\n"),"\n",a.createElement(t.blockquote,null,"\n",a.createElement(t.p,null,"The workflow of the incident response and tasks is driven by the playbooks that are associated with this case. Also, notice how the severity has been automatically set to ",a.createElement(t.strong,null,"High")," and the ",a.createElement(t.strong,null,"Tier 2")," Analyst team has been added as the case owner."),"\n"),"\n",a.createElement(t.blockquote,null,"\n",a.createElement(t.p,null,"Now, you can open the ",a.createElement(t.em,null,"Take Appropriate Response Actions")," task."),"\n"),"\n"),"\n",a.createElement(t.li,null,"\n",a.createElement(t.p,null,"Click the ",a.createElement(t.strong,null,"Take appropriate response actions")," task."),"\n",a.createElement(t.img,{src:"/1681489089567.47271112275/caseTasks2.png",alt:""}),"\n",a.createElement(t.blockquote,null,"\n",a.createElement(t.p,null,"You can see that the next step is to Take Response Actions to mitigate the threat"),"\n"),"\n"),"\n",a.createElement(t.li,null,"\n",a.createElement(t.p,null,"To update the task, click ",a.createElement(t.strong,null,"Edit"),"."),"\n",a.createElement(t.img,{src:"/1681489089571.47271112285/responseTaskEdit.png",alt:""}),"\n"),"\n",a.createElement(t.li,null,"\n",a.createElement(t.p,null,"In the ",a.createElement(t.strong,null,"How to respond?")," field select appropriate options:"),"\n"),"\n"),"\n",a.createElement(t.ul,null,"\n",a.createElement(t.li,null,"\n",a.createElement(t.p,null,a.createElement(t.strong,null,"Isolate machine")," (database.example.com and 172.20.13.104 are compromised)"),"\n"),"\n",a.createElement(t.li,null,"\n",a.createElement(t.p,null,a.createElement(t.strong,null,"Deactivate user")," (Dan is compromised)."),"\n"),"\n",a.createElement(t.li,null,"\n",a.createElement(t.p,null,a.createElement(t.strong,null,"Blocklist IP address")," (The IP with bad reputation should be blocked: 128.210.157.251 and 199.36.158.100)."),"\n",a.createElement(t.img,{src:"/1681489089571.47271112283/howToRespond.png",alt:""}),"\n",a.createElement(t.blockquote,null,"\n",a.createElement(t.p,null,"Using the How to respond field, you can select the response actions that should be taken, and then SOAR will reach out to the integrated tools to orchestrate and execute the response action, and, in this scenario, to post the results back to the case as a note."),"\n"),"\n",a.createElement(t.blockquote,null,"\n",a.createElement(t.p,null,"You will want to execute the following responses:"),"\n"),"\n",a.createElement(t.blockquote,null,"\n",a.createElement(t.p,null,"• Isolate machine; because the database.example.com and 172.20.13.104 (Dan’s PC) are compromised."),"\n"),"\n",a.createElement(t.blockquote,null,"\n",a.createElement(t.p,null,"• Deactivate user; because the account Dan is compromised."),"\n"),"\n",a.createElement(t.blockquote,null,"\n",a.createElement(t.p,null,"• Blocklist IP address; because the IP addresses with bad reputation should be blocked: 128.210.157.251 and 199.36.158.100."),"\n"),"\n"),"\n"),"\n",a.createElement(t.ol,{start:"14"},"\n",a.createElement(t.li,null,"\n",a.createElement(t.p,null,"Click ",a.createElement(t.strong,null,"Save"),"."),"\n",a.createElement(t.img,{src:"/1681489089571.47271112286/responseTaskSave.png",alt:""}),"\n"),"\n",a.createElement(t.li,null,"\n",a.createElement(t.p,null,"Review the pop-up message on the page and click ",a.createElement(t.strong,null,"Close"),"."),"\n",a.createElement(t.img,{src:"/1681489089571.47271112287/tasksWereUpdated.png",alt:""}),"\n",a.createElement(t.blockquote,null,"\n",a.createElement(t.p,null,"Note that based on the inputs you select, the system will respond accordingly and add additional tasks. Here, we see that we have taken containment actions at the:"),"\n"),"\n",a.createElement(t.blockquote,null,"\n",a.createElement(t.p,null,"Device layer via our integrated EDR, so the affected machines are isolated using the EDR."),"\n"),"\n",a.createElement(t.blockquote,null,"\n",a.createElement(t.p,null,"Identity layer via our integrated IAM, so the compromised user is isolated."),"\n"),"\n",a.createElement(t.blockquote,null,"\n",a.createElement(t.p,null,"Network layer via our integrated NDR, so you can block access to the external IP addresses with bad reputation."),"\n"),"\n",a.createElement(t.blockquote,null,"\n",a.createElement(t.p,null,"The ability to take response actions cross-product is another XDR feature which can be used to help enforce a Zero Trust strategy."),"\n"),"\n"),"\n",a.createElement(t.li,null,"\n",a.createElement(t.p,null,"To close the task, click ",a.createElement(t.strong,null,"Complete and Close"),"."),"\n"),"\n",a.createElement(t.li,null,"\n",a.createElement(t.p,null,"In the task list, note the new tasks that are autocompleted."),"\n",a.createElement(t.img,{src:"/1681489089567.47271112276/caseTasks3.png",alt:""}),"\n",a.createElement(t.blockquote,null,"\n",a.createElement(t.p,null,"Note that the newly injected tasks are configured to auto-respond. Thus, the SOAR platform can automatically remediate some actions, such as isolating the host by integrating with EDR tools, block-listing the malicious IP addresses in NDR tools. and deactivating compromised accounts in IAM tools. Every task that you perform (user and machine) as part of the response strategy is documented, tracked, and available for reporting."),"\n"),"\n",a.createElement(t.blockquote,null,"\n",a.createElement(t.p,null,"Before moving on to the post-Incident phase to wrap up this case, you can navigate to the Notes section and review the output from our automations."),"\n"),"\n"),"\n",a.createElement(t.li,null,"\n",a.createElement(t.p,null,"Click the ",a.createElement(t.strong,null,"Notes")," tab."),"\n",a.createElement(t.img,{src:"/1681489089563.47271112273/caseNotes.png",alt:""}),"\n",a.createElement(t.blockquote,null,"\n",a.createElement(t.p,null,"Here, you see that our automation was completed successfully, and you are able to see the users and IP addresses you have taken action on."),"\n"),"\n",a.createElement(t.blockquote,null,"\n",a.createElement(t.p,null,"You can now focus on completing the final step in the task list."),"\n"),"\n"),"\n",a.createElement(t.li,null,"\n",a.createElement(t.p,null,"Click the ",a.createElement(t.strong,null,"Task")," tab."),"\n",a.createElement(t.blockquote,null,"\n",a.createElement(t.p,null,"To recap, you have effectively detected a threat to the environment, performed analysis with the help of automated threat investigation and federated searches. As a result, you determined it to be a phishing attack, and then you took response actions to contain and mitigate the threat."),"\n"),"\n",a.createElement(t.blockquote,null,"\n",a.createElement(t.p,null,"Now, as part of the post-incident review, you can generate a case report."),"\n"),"\n"),"\n",a.createElement(t.li,null,"\n",a.createElement(t.p,null,"At the lower right side of the page, click ",a.createElement(t.strong,null,"Generate Case Report"),"."),"\n",a.createElement(t.img,{src:"/1681489089567.47271112280/generateCaseReport.png",alt:""}),"\n"),"\n",a.createElement(t.li,null,"\n",a.createElement(t.p,null,"At the Select a Template window click ",a.createElement(t.strong,null,"Customize"),"."),"\n",a.createElement(t.img,{src:"/1681489089567.47271112281/generateCaseReport2.png",alt:""}),"\n",a.createElement(t.blockquote,null,"\n",a.createElement(t.p,null,"By default, there are several templates that come with the product, or you can create your own custom templates and save them for future use."),"\n"),"\n"),"\n",a.createElement(t.li,null,"\n",a.createElement(t.p,null,"Review the page and click ",a.createElement(t.strong,null,"Back to Case"),"."),"\n",a.createElement(t.img,{src:"/1681489089567.47271112282/generateCaseReport3.png",alt:""}),"\n",a.createElement(t.blockquote,null,"\n",a.createElement(t.p,null,"The report is very customizable and provides a lot of data. You can also export the report to a pdf."),"\n"),"\n",a.createElement(t.blockquote,null,"\n",a.createElement(t.p,null,"Let's go back to the case and close it."),"\n"),"\n",a.createElement(t.p,null,a.createElement(t.strong,null,"Note"),": At this point, feel free to select different sections to show off the granularity of data in the report, as well as the flexibility of views by selecting and dragging different views as necessary"),"\n"),"\n",a.createElement(t.li,null,"\n",a.createElement(t.p,null,"After generating the report, mark the ",a.createElement(t.strong,null,"Generated incident report")," task as completed and also the ",a.createElement(t.strong,null,"Investigate Exposure of Personal Information/Data")," task. That automatically closes the case."),"\n",a.createElement(t.img,{src:"/1681489089567.47271112277/caseTasks4.png",alt:""}),"\n",a.createElement(t.blockquote,null,"\n",a.createElement(t.p,null,"After generating the report, you have completed the last task on the list, which automatically closes the case."),"\n"),"\n",a.createElement(t.blockquote,null,"\n",a.createElement(t.p,null,"We are able to show the whole incident response lifecycle on the QRadar XDR platform."),"\n"),"\n",a.createElement(t.blockquote,null,"\n",a.createElement(t.p,null,"The case data can be preserved and available to reference in the future from within the platform."),"\n"),"\n"),"\n"),"\n",a.createElement(t.h2,{id:"summary"},a.createElement(t.a,{href:"#summary"},"Summary")),"\n",a.createElement(t.blockquote,null,"\n",a.createElement(t.p,null,"During today’s demonstration, we have covered how the XDR platform can augment the traditional SOC processes and enhance the overall analyst experience through accelerated incident response with simple automation, process standardization, and integration to your existing security tools. Your SOC analysts can work more efficiently by leveraging an open security platform to connect the pieces together using the attack timeline and enrich the data using X-Force threat Intelligence and other third-party threat intelligence, such as VirusTotal. Then the platform orchestrates cross-domain incident response and enables federated threat hunting still leveraging X-Force and other vendors threat intelligence. With the XDR platform, your analysts can achieve faster time-to-value with out of the box capabilities and content to address your most critical use cases."),"\n"))}var o=function(e){void 0===e&&(e={});const{wrapper:t}=Object.assign({},(0,l.ah)(),e.components);return t?a.createElement(t,e,a.createElement(r,e)):r(e)};function c(e,t){throw new Error("Expected "+(t?"component":"object")+" `"+e+"` to be defined: you likely forgot to import, pass, or provide it.")}var s=n(7315),i=n(2125),u=n(5592),m=n(4690);const h={table:u.y6,a:u.IW,blockquote:u.R4,SubHeader:u.bU,img:u.fb,code:u.dn,QuizAlert:u.SA},d=a.memo((function(e){let{children:t}=e;return a.createElement(l.Zo,{components:{...h}},t)})),p=e=>{const{data:{mdx:{tableOfContents:{items:t},frontmatter:{toc:n=!0}}},children:l}=e,r=(0,a.useRef)(null),{0:o,1:c}=(0,a.useState)("");return(0,a.useEffect)((()=>{if(!r.current)return;const e=r.current.querySelectorAll("h2,h3,h4,h5"),t=new IntersectionObserver((e=>{e.forEach((e=>{e.isIntersecting&&c(e.target.id)}))}),{rootMargin:"0px 0px -95% 0px",threshold:0});return e.forEach((e=>{t.observe(e)})),()=>t.disconnect()}),[]),a.createElement(a.Fragment,null,a.createElement("article",{className:s.Y,ref:r},a.createElement(d,null,l)),(null===n||n)&&t&&a.createElement(i.Z,{itemsList:t,maxDepth:1,currSection:o}))},E=e=>{const{location:{pathname:t},data:{mdx:{frontmatter:{title:n},tableOfContents:{items:l}}}}=e;return a.createElement(m.Z,{pathname:t,title:n||l[0].title||void 0})};function g(e){return a.createElement(p,e,a.createElement(o,e))}}}]);
//# sourceMappingURL=component---src-pages-mdx-fields-slug-tsx-content-file-path-content-q-radar-102-md-109d46011a50dc9415bd.js.map