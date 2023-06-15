"use strict";(self.webpackChunkvad_var_site=self.webpackChunkvad_var_site||[]).push([[2725],{3218:function(e,t,n){n.r(t),n.d(t,{Head:function(){return E},default:function(){return f}});var a=n(1151),l=n(7294);function r(e){const t=Object.assign({section:"section",h1:"h1",h2:"h2",a:"a",ol:"ol",li:"li",p:"p",strong:"strong",img:"img",ul:"ul"},(0,a.ah)(),e.components);return l.createElement(t.section,{className:"heading","data-heading-rank":"1","aria-labelledby":"103--observing-jobs-configuring-alerts-and-external-notifications"},l.createElement(t.h1,{id:"103--observing-jobs-configuring-alerts-and-external-notifications"},"103:  Observing jobs, Configuring Alerts and External Notifications"),"\n",l.createElement(t.section,{className:"heading","data-heading-rank":"2","aria-labelledby":"observing-a-job-in-databand"},l.createElement(t.h2,{id:"observing-a-job-in-databand"},l.createElement(t.a,{href:"#observing-a-job-in-databand"},"Observing a job in Databand")),"\n",l.createElement(t.ol,null,"\n",l.createElement(t.li,null,"\n",l.createElement(t.p,null,"Return to the browser tab with CP4DaaS. Open the Multicloud Data Integration flow (if not there), and click the ",l.createElement(t.strong,null,"Run")," button at the top."),"\n",l.createElement(t.p,null,l.createElement(t.img,{src:"/1686796128415.0273795802/run-job.png",alt:"run job"}),"\nThe job may take a few minutes to run. Upon completion, you will see a green ",l.createElement(t.strong,null,"Run successful with warnings")," banner at the top. Once you see this, switch back to the Databand tab."),"\n"),"\n",l.createElement(t.li,null,"\n",l.createElement(t.p,null,"On the left-hand menu, select the ",l.createElement(t.strong,null,"Pipelines")," tab. You can identify your specific DataStage job / ETL (extract, transform, load) pipeline by looking at the ",l.createElement(t.strong,null,"Project")," column on this page, which displays the project name of your DataStage environment."),"\n"),"\n",l.createElement(t.li,null,"\n",l.createElement(t.p,null,"Click on the ",l.createElement(t.strong,null,"Name")," column of your specific project (for example, ",l.createElement(t.strong,null,"Databand_mk"),")"),"\n",l.createElement(t.p,null,l.createElement(t.img,{src:"/1686796128439.0298795809/select-job.png",alt:"select job"}),"\n",l.createElement(t.strong,null,"QUICK TIP:")," You can quickly search for your specific DataStage job by clicking the ",l.createElement(t.strong,null,"Project")," dropdown and typing in your CP4DaaS project name in the search bar.  See the screenshot below for an example of this search function."),"\n",l.createElement(t.img,{src:"/1686796128403.0261795799/project-search.png",alt:"project search"}),"\n"),"\n",l.createElement(t.li,null,"\n",l.createElement(t.p,null,"The new screen that pops up will be the Run list of each of the ETL pipeline (DataStage job) runs. This page displays the sequential list of runs for the DataStage job, the status of those runs, start and end time, alerts, errors, the number of successful/failed tasks, and the duration of those tasks."),"\n",l.createElement(t.p,null,"You only ran this DataStage job once, so only one run will show. However, as you continue to run jobs throughout this lab, you will see this page fill up with each sequential run."),"\n"),"\n",l.createElement(t.li,null,"\n",l.createElement(t.p,null,"On this same screen, click on the ",l.createElement(t.strong,null,"Run name")," for this specific job run."),"\n",l.createElement(t.img,{src:"/1686796128371.0232795790/click-run-name.png",alt:"click run name"}),"\n"),"\n",l.createElement(t.li,null,"\n",l.createElement(t.p,null,"Resize the window pane showing the pipeline so you can see the entire flow by dragging the arrow pointing left to the left-hand side of the screen."),"\n",l.createElement(t.p,null,l.createElement(t.img,{src:"/1686796128411.027795801/resize-dag.png",alt:"resize dag"}),"\nThe screen will look like the screenshot below. You may have to drag and zoom the screen to center the job."),"\n",l.createElement(t.p,null,l.createElement(t.img,{src:"/1686796128395.0254795797/job-flow.png",alt:"job flow"}),"\n",l.createElement(t.strong,null,"NOTE:")," For large, complex jobs you can use a navigator window in the bottom right to scroll over the job. This is the ",l.createElement(t.strong,null,"Toggle Minimap")," icon on the right."),"\n",l.createElement(t.img,{src:"/1686796128463.032795816/toggle-minimap.png",alt:"toggle-minimap"}),"\n",l.createElement(t.p,null,"Databand shows a graphical representation of the DataStage job. Note that each stage is green, which means it ran successfully. Each individual stage contains the name of that stage, and a timestamp of how long it took each stage to run. Additionally, the top of this view shows the total time it took this job to run."),"\n",l.createElement(t.p,null,l.createElement(t.strong,null,"NOTE:")," These stages can run in parallel, and thus, the sum total of the time of each individual stage shown is likely much larger than the total time to run the job."),"\n"),"\n",l.createElement(t.li,null,"\n",l.createElement(t.p,null,"Next, click on the ",l.createElement(t.strong,null,"MORTGAGE_APPLICANTS")," stage."),"\n"),"\n",l.createElement(t.li,null,"\n",l.createElement(t.p,null,"Select the ",l.createElement(t.strong,null,"Logs")," tab on the top menu. Resize the view like you did earlier to see more of the log for the selected stage."),"\n",l.createElement(t.img,{src:"/1686796128455.0312795815/stage-logs.png",alt:"stage logs"}),"\n",l.createElement(t.p,null,"This view will show us the logs associated with that specific stage. Feel free to click on other stages to view those logs as well."),"\n",l.createElement(t.p,null,"At this point, you have looked through some of the “step-through” functionality that Databand brings to observing our DataStage jobs. Switch back to the browser tab hosting your DataStage environment and run the job ",l.createElement(t.strong,null,"4 more times")," to generate more metrics and set some baselines for our Databand environment. This will make sense as we continue our lab and will simulate what a customer environment would look like where a job would run many times."),"\n"),"\n"),"\n"),l.createElement(t.section,{className:"heading","data-heading-rank":"2","aria-labelledby":"testing-job-alerts-in-databand"},l.createElement(t.h2,{id:"testing-job-alerts-in-databand"},l.createElement(t.a,{href:"#testing-job-alerts-in-databand"},"Testing job alerts in Databand")),"\n",l.createElement(t.ol,null,"\n",l.createElement(t.li,null,"\n",l.createElement(t.p,null,"After running the Multicloud Data Integration job four more times (you’ve now run this job a total of five times), go back to your Databand environment. Select the ",l.createElement(t.strong,null,"Pipelines")," tab on the left-hand menu, find your pipeline, drill into it, and take note of the ",l.createElement(t.strong,null,"Run list")," tab on the top menu."),"\n",l.createElement(t.img,{src:"/1686796128419.0278795803/run-list.png",alt:"run list"}),"\n"),"\n",l.createElement(t.li,null,"\n",l.createElement(t.p,null,"Select the ",l.createElement(t.strong,null,"Metrics")," tab on the top menu. The default metric shown is the ",l.createElement(t.strong,null,"Duration")," of each run."),"\n",l.createElement(t.p,null,l.createElement(t.img,{src:"/1686796128423.028795804/run-metrics.png",alt:"run metrics"}),"\n",l.createElement(t.strong,null,"NOTE:")," You can also observe other metrics of the DataStage job; for example, rows being written to and read from each stage. This is outside the scope of this lab."),"\n"),"\n",l.createElement(t.li,null,"\n",l.createElement(t.p,null,"Now it’s time to create your first alert. Click the purple ",l.createElement(t.strong,null,"Add Alert")," button in the top right corner of your screen."),"\n",l.createElement(t.p,null,l.createElement(t.img,{src:"/1686796128359.022795787/add-alert.png",alt:"add alert"}),"\nThe first step in creating a Databand alert is to create the “Alert definition”. This is the logic behind your alert. Look at all the alert possibilities you can create within Databand. You can create an alert based on run metrics for your DataStage job such as successful or failure, run duration, specific task durations, missing data operations, and schema changes."),"\n"),"\n",l.createElement(t.li,null,"\n",l.createElement(t.p,null,"Since these jobs take around 2 or 3 minutes to run, you will create an alert if your job takes greater than 4 minutes. To create this alert, click the ",l.createElement(t.strong,null,"Set up")," button in the ",l.createElement(t.strong,null,"Pipeline duration")," tile."),"\n",l.createElement(t.img,{src:"/1686796128403.0261795798/pipeline-duration.png",alt:"pipeline duration"}),"\n"),"\n",l.createElement(t.li,null,"\n",l.createElement(t.p,null,"Click on the ",l.createElement(t.strong,null,"Operator")," dropdown and select the ",l.createElement(t.strong,null,"greater than")," option. Note the other operators listed here, including ",l.createElement(t.strong,null,"Percentage deviation")," and ",l.createElement(t.strong,null,"Anomaly"),"."),"\n"),"\n",l.createElement(t.li,null,"\n",l.createElement(t.p,null,"Enter ",l.createElement(t.strong,null,"240")," in the ",l.createElement(t.strong,null,"Duration")," box, which accepts seconds as input, to designate the time of 4 minutes."),"\n",l.createElement(t.img,{src:"/1686796128395.0254795796/gt-4mins.png",alt:"gt 4mins"}),"\n"),"\n",l.createElement(t.li,null,"\n",l.createElement(t.p,null,"Scroll down to the ",l.createElement(t.strong,null,"Additional settings")," section and click on the ",l.createElement(t.strong,null,"Low")," box listed under the ",l.createElement(t.strong,null,"Alert severity")," section. This will alert the assigned individual group on how important this specific alert is. Since this alert will fire if a job is running slightly slower than normal, mark it as low severity."),"\n"),"\n",l.createElement(t.li,null,"\n",l.createElement(t.p,null,"Give this alert a name titled ",l.createElement(t.strong,null,"Slow running job <YOUR_INITIALS>")," (for example, Slow running job AB)."),"\n"),"\n",l.createElement(t.li,null,"\n",l.createElement(t.p,null,"Make sure the logic of your alert definition matches the screenshots above, then click ",l.createElement(t.strong,null,"Save alert"),"."),"\n",l.createElement(t.img,{src:"/1686796128423.028795805/save-duration-alert.png",alt:"save duration alert"}),"\n"),"\n",l.createElement(t.li,null,"\n",l.createElement(t.p,null,"The next screen allows you to assign this alert to a receiver, which is a user or group of users that will be notified of this alert through Slack, email, or PagerDuty (this part is covered in the next portion of the lab.) For now, keep the alert within Databand. Click the ",l.createElement(t.strong,null,"Done")," button."),"\n",l.createElement(t.img,{src:"/1686796128379.024795792/confirm-duration-alert.png",alt:"confirm duration alert"}),"\n"),"\n"),"\n",l.createElement(t.p,null,"Take note of how helpful such alerting can be for monitoring the success, failure, and overall performance of our DataStage jobs."),"\n"),l.createElement(t.section,{className:"heading","data-heading-rank":"2","aria-labelledby":"alerting-based-on-data-interactions"},l.createElement(t.h2,{id:"alerting-based-on-data-interactions"},l.createElement(t.a,{href:"#alerting-based-on-data-interactions"},"Alerting based on data interactions")),"\n",l.createElement(t.p,null,"For the final portion of this lab, you will view the data interactions of your job and create an alert based on those interactions. This is one of the key value-adds of integrating Databand with your DataStage environment, as you can now alert users in near-real-time on many custom failures, job changes, delays, and much more."),"\n",l.createElement(t.ol,null,"\n",l.createElement(t.li,null,"\n",l.createElement(t.p,null,"If you are not already at the Run list page, return to the Run list tab by selecting Run list in the top menu bar."),"\n"),"\n",l.createElement(t.li,null,"\n",l.createElement(t.p,null,"Click into the top (first) Run Name."),"\n",l.createElement(t.img,{src:"/1686796128443.03795810/select-run.png",alt:"select run"}),"\n"),"\n",l.createElement(t.li,null,"\n",l.createElement(t.p,null,"Select the ",l.createElement(t.strong,null,"Data Interactions")," tab in the top menu. Use the resizer to focus on the left-hand side of the screen."),"\n",l.createElement(t.p,null,l.createElement(t.img,{src:"/1686796128383.0244795793/data-interactions.png",alt:"data interactions"}),"\nYou can see the inputs and outputs (reads/writes) of the records and columns in each respective stage. You can see the source type, associated datasets, any issues that may have come up, information on the schema and records, and the associated stage. The total of these records is represented in the chart at the top of the screen. The chart at the top titled ",l.createElement(t.strong,null,"Runs record history (all tasks)")," as well as the column titled ",l.createElement(t.strong,null,"History Trend")," gives the user a view of the job’s historical performance."),"\n",l.createElement(t.p,null,l.createElement(t.img,{src:"/1686796128407.0266795800/record-history.png",alt:"record history"}),"\n",l.createElement(t.strong,null,"NOTE:")," You can also use the ",l.createElement(t.strong,null,"Data Interactions")," tab for each individual stage, such as in the screenshot below. By clicking on the specific transformation, you can see information such as the schema, the row count, and the historical trend of that row count."),"\n",l.createElement(t.img,{src:"/1686796128387.0247795795/filterstate-task.png",alt:"filterstate task"}),"\n"),"\n",l.createElement(t.li,null,"\n",l.createElement(t.p,null,"You will now create an alert around a schema change. Select the ",l.createElement(t.strong,null,"Alerts")," tab on the left-hand menu. This is where all Databand alerts are shown. Take a moment to look around this page to understand what information is shown to the user."),"\n"),"\n",l.createElement(t.li,null,"\n",l.createElement(t.p,null,"Click the purple ",l.createElement(t.strong,null,"Add Alert")," button in the top right corner. Here you can see (again) that you can create an alert on one pipeline (DataStage job), multiple pipelines, data quality and more."),"\n",l.createElement(t.img,{src:"/1686796128363.0225795788/add-alert2.png",alt:"add alert2"}),"\n"),"\n",l.createElement(t.li,null,"\n",l.createElement(t.p,null,"You are going to create an alert to monitor for a schema change and set the receiver to be Slack. Click ",l.createElement(t.strong,null,"Set up")," in the ",l.createElement(t.strong,null,"Schema change")," tile."),"\n",l.createElement(t.img,{src:"/1686796128435.0293795808/schema-change.png",alt:"schema change"}),"\n"),"\n",l.createElement(t.li,null,"\n",l.createElement(t.p,null,"First, you have to specify your pipeline from the project and create your alert definition. Select the ",l.createElement(t.strong,null,"Project")," asset type. Click on the ",l.createElement(t.strong,null,"Project")," dropdown, type in the project name you created or part of the name, and select the name of your project with the DataStage Flow"),"\n",l.createElement(t.img,{src:"/1686796128451.0308795814/source-project.png",alt:"source project"}),"\n"),"\n",l.createElement(t.li,null,"\n",l.createElement(t.p,null,"After selecting your project, select ",l.createElement(t.strong,null,"High")," as the severity in the ",l.createElement(t.strong,null,"Alert severity")," section."),"\n"),"\n",l.createElement(t.li,null,"\n",l.createElement(t.p,null,"Click ",l.createElement(t.strong,null,"Save alert"),"."),"\n",l.createElement(t.img,{src:"/1686796128427.0286795806/save-schema-alert.png",alt:"save schema alert"}),"\n",l.createElement(t.p,null,"For this alert, you will set the receiver of the alert to be Slack."),"\n"),"\n",l.createElement(t.li,null,"\n",l.createElement(t.p,null,"On the next page, expand the ",l.createElement(t.strong,null,"Recievers")," list by clicking on ",l.createElement(t.strong,null,"Show")),"\n"),"\n",l.createElement(t.li,null,"\n",l.createElement(t.p,null,"In the search list type ",l.createElement(t.strong,null,"vest")," to filter for the pre-configured workshop Slack receivers. Select the receiver with the name matching the day and month of the workshop"),"\n"),"\n",l.createElement(t.li,null,"\n",l.createElement(t.p,null,"Click on ",l.createElement(t.strong,null,"Done"),"."),"\n",l.createElement(t.img,{src:"/1686796128447.0305795812/slack-receiver.png",alt:"slack receiver"}),"\n"),"\n"),"\n"),l.createElement(t.section,{className:"heading","data-heading-rank":"2","aria-labelledby":"detecting-datastage-schema-changes"},l.createElement(t.h2,{id:"detecting-datastage-schema-changes"},l.createElement(t.a,{href:"#detecting-datastage-schema-changes"},"Detecting DataStage Schema Changes")),"\n",l.createElement(t.p,null,"Now, switch back to your Cloud Pak for Data DataStage environment where you will purposefully introduce a schema change. This schema change will trigger your schema alert we just created in Databand."),"\n",l.createElement(t.ol,null,"\n",l.createElement(t.li,null,"\n",l.createElement(t.p,null,"Double click on the Transformer stage to open its settings."),"\n",l.createElement(t.img,{src:"/1686796128371.0232795791/click-transformer.png",alt:"click transformer"}),"\n"),"\n",l.createElement(t.li,null,"\n",l.createElement(t.p,null,"Select the ",l.createElement(t.strong,null,"Output")," tab."),"\n"),"\n",l.createElement(t.li,null,"\n",l.createElement(t.p,null,"Click the ",l.createElement(t.strong,null,"Add column")," button on the right."),"\n"),"\n",l.createElement(t.li,null,"\n",l.createElement(t.p,null,"Name your new column ",l.createElement(t.strong,null,"RELIABILITY_SCORE"),". It will add the new column to the end of the ",l.createElement(t.strong,null,"Column name")," field."),"\n"),"\n",l.createElement(t.li,null,"\n",l.createElement(t.p,null,"Next, click the ",l.createElement(t.strong,null,"pencil")," icon in the ",l.createElement(t.strong,null,"Derivation")," column, then click the ",l.createElement(t.strong,null,"Calculator")," icon to edit the expression. In this field, use the sum of the ",l.createElement(t.strong,null,"YRS_AT_CURRENT_ADDRESS")," column and the ",l.createElement(t.strong,null,"YRS_WITH_CURRENT_EMPLOYER")," column."),"\n",l.createElement(t.img,{src:"/1686796128383.0244795794/edit-derivation.png",alt:"edit derivation"}),"\n"),"\n",l.createElement(t.li,null,"\n",l.createElement(t.p,null,"To create this expression, locate the two columns under the ",l.createElement(t.strong,null,"Input columns")," twistee. Double click ",l.createElement(t.strong,null,"YRS_AT_CURRENT_ADDRESS"),", insert a plus symbol (+) and then double click ",l.createElement(t.strong,null,"YRS_WITH_CURRENT_EMPLOYER"),". Notice how the expression is populated to the ",l.createElement(t.strong,null,"Expression Builder")," window on the right. Your expression should look like the screenshot."),"\n"),"\n",l.createElement(t.li,null,"\n",l.createElement(t.p,null,"Click ",l.createElement(t.strong,null,"Apply and return")," and then ",l.createElement(t.strong,null,"Save and return")," to save the changes you just made."),"\n",l.createElement(t.img,{src:"/1686796128367.0227795789/apply-derivation.png",alt:"apply derivation"}),"\n",l.createElement(t.p,null,"Run the job (click the run icon at the top) and wait for a few minutes until the job completes and the alert is triggered. When the alert is triggered, you will see a message in the ",l.createElement(t.strong,null,"#databand-alerts")," Slack channel in the workshop namespace similar to the screenshot below."),"\n"),"\n",l.createElement(t.li,null,"\n",l.createElement(t.p,null,"Click on the ",l.createElement(t.strong,null,"Schema changes in pipeline 'Multicloud Data Integration.DataStage.job'")," link in the Slack message. This alert description follows the High severity ",l.createElement(t.strong,null,"orange circle")," icon. This opens the following screen:"),"\n",l.createElement(t.img,{src:"/1686796128443.03795811/slack-alert.png",alt:"slack alert"}),"\n"),"\n"),"\n",l.createElement(t.p,null,"Clicking on the link take you to Databand, where you can see the impact analysis of this alert. Specifically, you can see what schema changes happened in the Datastage job, what datasets were affected, and the pipelines (DataStage Jobs) that were affected. You can also see all this information graphically in the ",l.createElement(t.strong,null,"Lineage")," tab."),"\n",l.createElement(t.img,{src:"/1686796128427.0286795807/schema-alert.png",alt:"schema alert"}),"\n",l.createElement(t.p,null,"This alert was generated in near-real time as the pipeline was run. This is another important benefit of using Databand for observability. Being able to identify issues as the pipeline runs helps improve data quality quicker, instead of retroactive inspections and potentially missing issues for days, weeks, and even months."),"\n"),l.createElement(t.section,{className:"heading","data-heading-rank":"2","aria-labelledby":"summary"},l.createElement(t.h2,{id:"summary"},l.createElement(t.a,{href:"#summary"},"Summary")),"\n",l.createElement(t.p,null,"Congratulations on completing this lab! You gained hands-on experience in the following integration areas:"),"\n",l.createElement(t.ul,null,"\n",l.createElement(t.li,null,"Syncing DataStage/CP4DaaS to Databand"),"\n",l.createElement(t.li,null,"Observing the graphical representation of the DataStage job within Databand and the relevant information around this"),"\n",l.createElement(t.li,null,"Viewing dataset metrics and historical trends"),"\n",l.createElement(t.li,null,"Editing DataStage job inputs and outputs"),"\n",l.createElement(t.li,null,"Creating and setting up alerts for DataStage jobs in Databand"),"\n"),"\n",l.createElement(t.p,null,"This concludes the DataStage and Databand Hands on Lab. Please reach out to the VEST team or your IBM Partner contact with any questions, comments, concerns, or customer situations you run into.")))}var o=function(e){void 0===e&&(e={});const{wrapper:t}=Object.assign({},(0,a.ah)(),e.components);return t?l.createElement(t,e,l.createElement(r,e)):r(e)},i=n(4184),s=n.n(i),c=n(4690),u=n(1140),m=n(2565),h=n(8531),g=n(3383),d=n(7315);const p=e=>{const{data:{mdx:{tableOfContents:{items:t},frontmatter:{toc:n=!0,title:a,timeToComplete:r,updated:o}}},children:i}=e,c=(0,l.useRef)(null),{0:p}=(0,l.useState)(""),E=(null===n||n)&&t;return l.createElement(l.Fragment,null,l.createElement(u.Z,{timeToComplete:r,updated:o},t[0].title||a||""),l.createElement(h.Z,{className:d.YS},l.createElement("article",{className:s()(d.Y2,!E&&d.ey),ref:c},l.createElement(m.Z,{components:{h1:()=>null}},i)),E&&l.createElement(g.Z,{itemsList:t,maxDepth:2,currSection:p})))},E=e=>{const{location:{pathname:t},data:{mdx:{frontmatter:{title:n},tableOfContents:{items:a}}}}=e;return l.createElement(c.Z,{pathname:t,title:n||a[0].title||void 0})};function f(e){return l.createElement(p,e,l.createElement(o,e))}},2565:function(e,t,n){n.d(t,{Z:function(){return i}});var a=n(7294),l=n(1151),r=n(7563);const o={table:r.y6,a:r.IW,blockquote:r.R4,SubHeader:r.bU,img:r.fb,code:r.dn,QuizAlert:r.SA,Danger:r.b0,Warning:r.v3,CopyText:r.O5};var i=(0,a.memo)((function(e){let{children:t,components:n={}}=e;return a.createElement(l.Zo,{components:{...o,...n}},t)}))},3383:function(e,t,n){n.d(t,{Z:function(){return c}});var a=n(7294),l=n(7500),r=n(4184),o=n.n(r),i=n(6488);const s=function(e,t,n){return void 0===t&&(t=[]),void 0===n&&(n=0),e.forEach((e=>{const{title:a,url:l,items:r}=e;t.splice(t.length,0,{depth:n,title:a,url:l}),r&&r.length>0&&s(r,t,n+1)})),t};var c=e=>{const{itemsList:t}=e,n=(0,a.useMemo)((()=>s(t[0].items||[])),[t]),r=(0,i.Z)("h1[id],h2[id]",{threshold:[0,1],rootMargin:"-48px 0px -90% 0px"});return n.length<1?null:a.createElement("nav",{className:"TableOfContents-module--toc--54d35"},a.createElement("div",{className:"TableOfContents-module--tocStack--90609"},a.createElement("h6",{className:"TableOfContents-module--tocHeader--05956"},a.createElement(l.rU,{to:"#",replace:!0},"On this page")),n.map(((e,t)=>{let{title:n,url:l}=e;return a.createElement("a",{className:o()("TableOfContents-module--link--b292b",r===l.substring(1)&&"TableOfContents-module--activeItem--3869f"),key:t,href:l},n)}))))}},7315:function(e,t,n){n.d(t,{Y2:function(){return a},YS:function(){return r},ey:function(){return l}});var a="{mdx-fields__slug}-module--article--e3d5a",l="{mdx-fields__slug}-module--noToc--82387",r="{mdx-fields__slug}-module--wrapper--58e72"},1151:function(e,t,n){n.d(t,{Zo:function(){return i},ah:function(){return r}});var a=n(7294);const l=a.createContext({});function r(e){const t=a.useContext(l);return a.useMemo((()=>"function"==typeof e?e(t):{...t,...e}),[t,e])}const o={};function i({components:e,children:t,disableParentContext:n}){let i;return i=n?"function"==typeof e?e({}):e||o:r(e),a.createElement(l.Provider,{value:i},t)}}}]);
//# sourceMappingURL=component---src-pages-mdx-fields-slug-tsx-content-file-path-content-databand-103-md-85d84bc64bde48a58b15.js.map