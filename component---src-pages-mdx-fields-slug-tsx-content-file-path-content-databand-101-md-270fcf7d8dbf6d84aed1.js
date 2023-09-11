"use strict";(self.webpackChunkvad_var_site=self.webpackChunkvad_var_site||[]).push([[2921],{8298:function(e,t,n){n.r(t),n.d(t,{Head:function(){return g},default:function(){return f}});var a=n(1151),l=n(7294);function i(e){const t=Object.assign({section:"section",h1:"h1",h2:"h2",a:"a",h3:"h3",p:"p",strong:"strong",ol:"ol",li:"li",img:"img",code:"code",blockquote:"blockquote"},(0,a.ah)(),e.components);return l.createElement(t.section,{className:"heading","data-heading-rank":"1","aria-labelledby":"101-demonstration-of-dataflow"},l.createElement(t.h1,{id:"101-demonstration-of-dataflow"},"101: Demonstration of Dataflow"),"\n",l.createElement(t.section,{className:"heading","data-heading-rank":"2","aria-labelledby":"initial-set-up"},l.createElement(t.h2,{id:"initial-set-up"},l.createElement(t.a,{href:"#initial-set-up"},"Initial set-up")),"\n",l.createElement(t.section,{className:"heading","data-heading-rank":"3","aria-labelledby":"register-for-the-business-partner-databand-demo-environment"},l.createElement(t.h3,{id:"register-for-the-business-partner-databand-demo-environment"},l.createElement(t.a,{href:"#register-for-the-business-partner-databand-demo-environment"},"Register for the Business Partner Databand demo environment")),"\n",l.createElement(t.p,null,"Open a session in your preferred web browser at ",l.createElement(t.a,{href:"https://ibm-bp-demo.databand.ai/"},"https://ibm-bp-demo.databand.ai/")," and click on ",l.createElement(t.strong,null,"Registration"),". Complete the form and click on ",l.createElement(t.strong,null,"Register"),". Provide the e-mail address you used to register in the workshop slack so the workshop team can activate your registration."),"\n")),l.createElement(t.section,{className:"heading","data-heading-rank":"2","aria-labelledby":"databand-overview"},l.createElement(t.h2,{id:"databand-overview"},l.createElement(t.a,{href:"#databand-overview"},"Databand Overview")),"\n",l.createElement(t.p,null,"Databand provides an overview of an organization's data pipelines that are running in multiple workflow environments. To help you understand the key features of Databand, this lab will walk through several parts of the user interface. Starting from the main dashboard, you will see how to view the overall health of the pipelines and see the top errors and failing pipelines. Then the lab continues through analyzing alerts, looking at pipeline and data quality issues. Then the tour continues over the Pipeline and Datasets panels showing how to use these to investigate issues and understand impacts of failures. The run metadata shown in the demonstration environment comes from pipeline runs in an Airflow cluster. Several of the examples you will observe are based on a hypothetical processing pipeline of live 311 (city customer service requests) data for New York City. The code for the pipelines is intentinoally configured to throw various types of errors at specific times to provide examples of typical failures in a production environment."),"\n",l.createElement(t.ol,null,"\n",l.createElement(t.li,null,"\n",l.createElement(t.p,null,"If you have not already done so, ",l.createElement(t.a,{href:"https://ibm-bp-demo.databand.ai/"},"Log in to the Business Partner Databand demo environment"),". This will bring you to the main Databand dashboard"),"\n",l.createElement(t.img,{src:"https://raw.githubusercontent.com/ibm-build-lab/VAD-VAR-Workshop/main/content//Databand/images/101/dbnd-dashboard.png",alt:"dbnd dashboard"}),"\n",l.createElement(t.p,null,"The dashboard shows an overview of pipeline runs that have been observed during a time window specified by the filter in the upper right. Other dashboard filters allow selection of specific sources (for example an Airflow cluster or DataStage instance) and the projects or specific pipelines of interest. Scroll down on the dashboard view to show the top errors and pipeline statistics. The pipeline statisitics include failures and errors, a count of runs, their average runtime and total pipeline runtime."),"\n"),"\n"),"\n"),l.createElement(t.section,{className:"heading","data-heading-rank":"2","aria-labelledby":"alerts"},l.createElement(t.h2,{id:"alerts"},l.createElement(t.a,{href:"#alerts"},"Alerts")),"\n",l.createElement(t.ol,null,"\n",l.createElement(t.li,null,"\n",l.createElement(t.p,null,"Alerts are one of the main features that data engineers will find valuable in Databand. Click on the left hand ",l.createElement(t.strong,null,"Alerts")," item to bring up the alerts display"),"\n",l.createElement(t.img,{src:"https://raw.githubusercontent.com/ibm-build-lab/VAD-VAR-Workshop/main/content//Databand/images/101/dbnd-alerts.png",alt:"dbnd alerts"}),"\n"),"\n",l.createElement(t.li,null,"\n",l.createElement(t.p,null,"Investigate a specific critical alert by setting up a filter. Click on the ",l.createElement(t.strong,null,"Filter")," button to bring up a list of filtering criteria."),"\n",l.createElement(t.img,{src:"https://raw.githubusercontent.com/ibm-build-lab/VAD-VAR-Workshop/main/content//Databand/images/101/dbnd-alert-panel.png",alt:"dbnd alert panel"}),"\n"),"\n",l.createElement(t.li,null,"\n",l.createElement(t.p,null,"Select a ",l.createElement(t.strong,null,"Severity")," type of ",l.createElement(t.strong,null,"Critical"),", then expand ",l.createElement(t.strong,null,"Assets"),", followed by ",l.createElement(t.strong,null,"Project")," and search for and select the ",l.createElement(t.strong,null,"Global Sales")," project."),"\n",l.createElement(t.img,{src:"https://raw.githubusercontent.com/ibm-build-lab/VAD-VAR-Workshop/main/content//Databand/images/101/dbnd-alert-filter.png",alt:"dbnd alert filter"}),"\n"),"\n",l.createElement(t.li,null,"\n",l.createElement(t.p,null,"Click on the ",l.createElement(t.strong,null,"Save")," button to apply the filter."),"\n",l.createElement(t.img,{src:"https://raw.githubusercontent.com/ibm-build-lab/VAD-VAR-Workshop/main/content//Databand/images/101/dbnd-filter-save.png",alt:"dbnd filter save"}),"\n"),"\n",l.createElement(t.li,null,"\n",l.createElement(t.p,null,"Click on the first critical alert ",l.createElement(t.strong,null,"Run failed: Global Sales DAG")),"\n",l.createElement(t.img,{src:"https://raw.githubusercontent.com/ibm-build-lab/VAD-VAR-Workshop/main/content//Databand/images/101/dbnd-fail-alert-select.png",alt:"dbnd fail alert select"}),"\n",l.createElement(t.img,{src:"https://raw.githubusercontent.com/ibm-build-lab/VAD-VAR-Workshop/main/content//Databand/images/101/dbnd-fail-alert.png",alt:"dbnd fail alert"}),"\n",l.createElement(t.p,null,"Look at the ",l.createElement(t.strong,null,"Failed task")," panel on the right. This panel zooms right in to the specific error message from the logs of the failing task of the pipeline. This accelerates detection of the root cause, an expired AWS token being used by the task in the pipeline."),"\n",l.createElement(t.p,null,"When an engineer is going to work on correcting this issue they can first ",l.createElement(t.strong,null,"Acknowledge")," the issue, then perform activities to address the root cause in the error. Then after resolving the problem, they mark the alert notification handled by clicking on the ",l.createElement(t.strong,null,"Resolve")," button."),"\n",l.createElement(t.p,null,"The Impact Analysis shows the affected datasets, affected pipelines and missing operations as a result of the issue from the alert. Select each tab to see a list of what is affected."),"\n"),"\n",l.createElement(t.li,null,"\n",l.createElement(t.p,null,"Click on the ",l.createElement(t.strong,null,"Lineage")," tab in the Alert view to open a flow-like view showing the failure in the pipeline and the affected datasets"),"\n",l.createElement(t.img,{src:"https://raw.githubusercontent.com/ibm-build-lab/VAD-VAR-Workshop/main/content//Databand/images/101/dbnd-alert-lineage-select.png",alt:"dbnd alert lineage select"}),"\n",l.createElement(t.img,{src:"https://raw.githubusercontent.com/ibm-build-lab/VAD-VAR-Workshop/main/content//Databand/images/101/dbnd-alert-lineage.png",alt:"dbnd alert lineage"}),"\n"),"\n",l.createElement(t.li,null,"\n",l.createElement(t.p,null,"A more detailed view of downstream pipelines, their tasks and datasets can be shown by clicking on the ",l.createElement(t.strong,null,"Downstream pipelines")," button. After switching to this view, may need to scale and drag the view to see the pipeline causing the alert, and then see all of the related pipelines that process the output from the alerting pipeline."),"\n",l.createElement(t.img,{src:"https://raw.githubusercontent.com/ibm-build-lab/VAD-VAR-Workshop/main/content//Databand/images/101/dbnd-lineage-downstream.png",alt:"dbnd lineage downstream"}),"\n",l.createElement(t.p,null,"This view shows that each of the downstream pipelines: ",l.createElement(t.code,null,"na_sales_processing"),", ",l.createElement(t.code,null,"eu_sales_processing"),", and ",l.createElement(t.code,null,"as_sales_processing")," will not be able to correctly process the latest data due to the failed task. Also in this ",l.createElement(t.strong,null,"Lineage")," view you can click on tasks and datasets and see how they are related to each other."),"\n"),"\n",l.createElement(t.li,null,"\n",l.createElement(t.p,null,"Switch to another alert by going back to the ",l.createElement(t.strong,null,"Alerts")," panel and setting a filter for ",l.createElement(t.strong,null,"Severity")," of ",l.createElement(t.strong,null,"Medium")," then expand ",l.createElement(t.strong,null,"Assets"),", followed by ",l.createElement(t.strong,null,"Project")," and search for and select the ",l.createElement(t.strong,null,"Service 311")," project."),"\n",l.createElement(t.img,{src:"https://raw.githubusercontent.com/ibm-build-lab/VAD-VAR-Workshop/main/content//Databand/images/101/dbnd-alert-filter-medium.png",alt:"dbnd alert filter medium"}),"\n"),"\n",l.createElement(t.li,null,"\n",l.createElement(t.p,null,"Click on the ",l.createElement(t.strong,null,"Save")," button to apply the filter."),"\n",l.createElement(t.img,{src:"https://raw.githubusercontent.com/ibm-build-lab/VAD-VAR-Workshop/main/content//Databand/images/101/dbnd-filter-save2.png",alt:"dbnd filter save2"}),"\n"),"\n",l.createElement(t.li,null,"\n",l.createElement(t.p,null,"Click on one of the items that has a trigger time close to 11:00 PM UTC (tip: hover over the trigger time to see the entry in UTC)"),"\n",l.createElement(t.img,{src:"https://raw.githubusercontent.com/ibm-build-lab/VAD-VAR-Workshop/main/content//Databand/images/101/dbnd-schema-alert-select.png",alt:"dbnd schema alert select"}),"\n",l.createElement(t.img,{src:"https://raw.githubusercontent.com/ibm-build-lab/VAD-VAR-Workshop/main/content//Databand/images/101/dbnd-schema-alert.png",alt:"dbnd schema alert"}),"\n",l.createElement(t.p,null,"Observe that this pipeline does not have any failed tasks. Databand has detected a change in the schema being handled in the pipeline and the specifics are displayed in the ",l.createElement(t.strong,null,"Impact Analysis"),". The analysis has different information than the previous alert which now includes the schema changes and the affected datasets and pipelines."),"\n"),"\n",l.createElement(t.li,null,"\n",l.createElement(t.p,null,"Click on ",l.createElement(t.strong,null,"Show details")," over one of the schema change messages to see the actual change. In this case, the ",l.createElement(t.code,null,"incident_address")," data is no longer appearing in the ",l.createElement(t.code,null,"NYC 311 API")," dataset as read by the pipeline in the ",l.createElement(t.code,null,"get_hourly_data")," task. This is an alteration of the schema from the previous pipeline run."),"\n",l.createElement(t.img,{src:"https://raw.githubusercontent.com/ibm-build-lab/VAD-VAR-Workshop/main/content//Databand/images/101/dbnd-schema-alert-detail.png",alt:"dbnd schema alert detail"}),"\n"),"\n",l.createElement(t.li,null,"\n",l.createElement(t.p,null,"Click on ",l.createElement(t.strong,null,"Lineage")," to investigate this issue. This view shows the flow of data from the source dataset ",l.createElement(t.code,null,"NYC 311 API")," to downstream datasets and tasks in the pipeline. Note again that technically there are no failures or errors thrown by the tasks in the pipeline."),"\n",l.createElement(t.img,{src:"https://raw.githubusercontent.com/ibm-build-lab/VAD-VAR-Workshop/main/content//Databand/images/101/dbnd-schema-alert-lineage.png",alt:"dbnd schema alert lineage"}),"\n"),"\n",l.createElement(t.li,null,"\n",l.createElement(t.p,null,"The ",l.createElement(t.strong,null,"Downstream pipelines")," view is a little less complicated than the previous example - making it straightforward to follow:"),"\n",l.createElement(t.img,{src:"https://raw.githubusercontent.com/ibm-build-lab/VAD-VAR-Workshop/main/content//Databand/images/101/dbnd-schema-lineage-downstream.png",alt:"dbnd schema lineage downstream"}),"\n",l.createElement(t.ol,null,"\n",l.createElement(t.li,null,"\n",l.createElement(t.p,null,"The NYC 311 API dataset read by ",l.createElement(t.code,null,"get_hourly_data")," now has a column removed"),"\n"),"\n",l.createElement(t.li,null,"\n",l.createElement(t.p,null,"When processed by the ",l.createElement(t.code,null,"service_311_get_data")," pipeline, this results in the column also being removed from the downstream datasets."),"\n"),"\n",l.createElement(t.li,null,"\n",l.createElement(t.p,null,"One of these datasets, ",l.createElement(t.code,null,"data-snowflake.ibm-bp-demo-af.raw_hourly_data")," is read by a task in another pipeline, ",l.createElement(t.code,null,"service_311_closed_requests")),"\n"),"\n"),"\n",l.createElement(t.p,null,"Unexpected schema changes can cause problems for downstream tasks like performing automatic updates to machine learning models. Data engineers being able to identify changes going on in the processing pipeline is very important to providing reliable data for use as inputs to ML and AI tasks."),"\n"),"\n",l.createElement(t.li,null,"\n",l.createElement(t.p,null,"To see an example for how to add an alert for data in a column where the values do not match what is expected, start by clicking on ",l.createElement(t.strong,null,"Alerts")," and the ",l.createElement(t.strong,null,"Add Alert")," button"),"\n",l.createElement(t.img,{src:"https://raw.githubusercontent.com/ibm-build-lab/VAD-VAR-Workshop/main/content//Databand/images/101/dbnd-add-alert.png",alt:"dbnd add alert"}),"\n"),"\n",l.createElement(t.li,null,"\n",l.createElement(t.p,null,"Locate the ",l.createElement(t.strong,null,"Data Quality - Pipelines")," tile and click ",l.createElement(t.strong,null,"Set up")),"\n",l.createElement(t.img,{src:"https://raw.githubusercontent.com/ibm-build-lab/VAD-VAR-Workshop/main/content//Databand/images/101/dbnd-alert-dataquality.png",alt:"dbnd alert dataquality"}),"\n"),"\n",l.createElement(t.li,null,"\n",l.createElement(t.p,null,"Choose by typing in the search options the ",l.createElement(t.code,null,"NYC 311 API")," dataset. Then, select from the validation column pull-down list the ",l.createElement(t.code,null,"borough")," column and click ",l.createElement(t.strong,null,"Apply"),". In New York City, there are 5 boroughs so to identify cases where there are unexpected values, we would set a validation condition where the ",l.createElement(t.code,null,"Unique count")," is greater than ",l.createElement(t.code,null,"5"),"."),"\n",l.createElement(t.img,{src:"https://raw.githubusercontent.com/ibm-build-lab/VAD-VAR-Workshop/main/content//Databand/images/101/dbnd-alert-defined.png",alt:"dbnd alert defined"}),"\n",l.createElement(t.p,null,"The alert defaults to a medium severity, but this can be changed to higher or lower levels and the name and description can be customized for the alert. In a later lab you will define some alerts so please cancel by clicking on the ",l.createElement(t.strong,null,"X")," in the upper right corner to return to the Alerts panel."),"\n",l.createElement(t.blockquote,null,"\n",l.createElement(t.p,null,"As a side note, inspection of the dataset will show cases where the ",l.createElement(t.code,null,"borough")," value in a row is ",l.createElement(t.code,null,"UNSPECIFIED"),", but it is a very rare occurrance compared to all of the other records sent to the 311 service."),"\n"),"\n"),"\n"),"\n"),l.createElement(t.section,{className:"heading","data-heading-rank":"2","aria-labelledby":"pipelines"},l.createElement(t.h2,{id:"pipelines"},l.createElement(t.a,{href:"#pipelines"},"Pipelines")),"\n",l.createElement(t.p,null,"Data engineers can use the pipelines view to see more information about pipeline execution for both successful and unsuccessful runs"),"\n",l.createElement(t.ol,null,"\n",l.createElement(t.li,null,"\n",l.createElement(t.p,null,"Click on ",l.createElement(t.strong,null,"Pipelines")," label on the left side to open the pipelines view."),"\n",l.createElement(t.img,{src:"https://raw.githubusercontent.com/ibm-build-lab/VAD-VAR-Workshop/main/content//Databand/images/101/dbnd-pipelines.png",alt:"dbnd pipelines"}),"\n",l.createElement(t.p,null,"This view shows the name of each pipeline, the associated project, run statistics, when the last run was completed and the source workflow engine for the pipeline. In the demonstration Databand instance, the majority of the pipeline runs are from the ",l.createElement(t.code,null,"ibm-bp-demo-af")," Airflow cluster."),"\n"),"\n",l.createElement(t.li,null,"\n",l.createElement(t.p,null,"Select the ",l.createElement(t.code,null,"service_311_get_data")," row from the pipelines view. This will show all runs which are scheduled at every hour to extract 311 data from the dataset corresponding to all entries in the previous hour."),"\n",l.createElement(t.img,{src:"https://raw.githubusercontent.com/ibm-build-lab/VAD-VAR-Workshop/main/content//Databand/images/101/dbnd-pipeline-select.png",alt:"dbnd pipeline select"}),"\n",l.createElement(t.img,{src:"https://raw.githubusercontent.com/ibm-build-lab/VAD-VAR-Workshop/main/content//Databand/images/101/dbnd-service311-pipeline.png",alt:"dbnd service311 pipeline"}),"\n"),"\n",l.createElement(t.li,null,"\n",l.createElement(t.p,null,"From this view, select the run (by clicking near the timestamp) of the critical alert with the ",l.createElement(t.strong,null,"Error Type")," that contains ",l.createElement(t.code,null,"<class 'requests.exceptions.HTTPError'>"),". This will open a side-by-side view of pipeline run details and a flow-based view of the DAG for the tasks in the pipeline."),"\n",l.createElement(t.img,{src:"https://raw.githubusercontent.com/ibm-build-lab/VAD-VAR-Workshop/main/content//Databand/images/101/dbnd-select-failed.png",alt:"dbnd select failed"}),"\n"),"\n",l.createElement(t.li,null,"\n",l.createElement(t.p,null,"Click on the failed ",l.createElement(t.code,null,"get_hourly_data")," task in either the details or flow view to open up more details on this failed task."),"\n",l.createElement(t.img,{src:"https://raw.githubusercontent.com/ibm-build-lab/VAD-VAR-Workshop/main/content//Databand/images/101/dbnd-failed-task-select.png",alt:"dbnd failed task select"}),"\n",l.createElement(t.img,{src:"https://raw.githubusercontent.com/ibm-build-lab/VAD-VAR-Workshop/main/content//Databand/images/101/dbnd-failed-task-error.png",alt:"dbnd failed task error"}),"\n",l.createElement(t.p,null,"The most relevant error information from the overall task logs is extracted and shown. This makes easy to determine that the task failure is related to the request to the source dataset. Other tabs next to ",l.createElement(t.strong,null,"Details")," allow the inspection of metrics, full log data, the source code for the tasks and other details. (This is a case where an intentional typo in the url is created by the code of the pipeline to simulate a real error.)"),"\n"),"\n",l.createElement(t.li,null,"\n",l.createElement(t.p,null,"Click on the ",l.createElement(t.strong,null,"Data Interactions")," tab to see a graph of the historical activity from runs as well as operations that failed as a result of the failure in the task. In the table below the history chart, issues with data operations are shown. Horizontally scrolling in this table will show the history trend of the operations from this task, including the current pipeline run gap from the failure."),"\n",l.createElement(t.img,{src:"https://raw.githubusercontent.com/ibm-build-lab/VAD-VAR-Workshop/main/content//Databand/images/101/dbnd-data-interactions.png",alt:"dbnd data interactions"}),"\n",l.createElement(t.img,{src:"https://raw.githubusercontent.com/ibm-build-lab/VAD-VAR-Workshop/main/content//Databand/images/101/dbnd-datainteraction-detail.png",alt:"dbnd data interaction detail"}),"\n"),"\n"),"\n",l.createElement(t.p,null,"For failing tasks in pipelines, similar information can be found by analysis starting from the ",l.createElement(t.strong,null,"Pipeline")," view or the ",l.createElement(t.strong,null,"Alerts")," view, but each view has different benefits as well. From the ",l.createElement(t.strong,null,"Pipelines")," view it is clearer to see the full range of data processing, both for successful and unsuccessful runs while the ",l.createElement(t.strong,null,"Alerts")," view has a focus on failures and issues. In a later lab there will be more coverage of pipelines so to finish this demonstration/lab, let's turn to ",l.createElement(t.strong,null,"Datasets")),"\n"),l.createElement(t.section,{className:"heading","data-heading-rank":"2","aria-labelledby":"datasets"},l.createElement(t.h2,{id:"datasets"},l.createElement(t.a,{href:"#datasets"},"Datasets")),"\n",l.createElement(t.p,null,"When workflows observed by Databand interact with datasets, they are automatically discovered and added to the UI. This allows data engineers to monitor datasets in motion. The ",l.createElement(t.strong,null,"Datasets")," page can be used to view historical operations for known datasets."),"\n",l.createElement(t.ol,null,"\n",l.createElement(t.li,null,"\n",l.createElement(t.p,null,"Click on ",l.createElement(t.strong,null,"Datasets")," label on the left side to open the datasets view."),"\n",l.createElement(t.img,{src:"https://raw.githubusercontent.com/ibm-build-lab/VAD-VAR-Workshop/main/content//Databand/images/101/dbnd-datasets.png",alt:"dbnd datasets"}),"\n"),"\n",l.createElement(t.li,null,"\n",l.createElement(t.p,null,"Select from the dataset list the ",l.createElement(t.code,null,"data-snowflake.ibm-bp-demo-af.raw_hourly_data")," entry."),"\n",l.createElement(t.img,{src:"https://raw.githubusercontent.com/ibm-build-lab/VAD-VAR-Workshop/main/content//Databand/images/101/dbnd-311hourly-data.png",alt:"dbnd 311hourly data"}),"\n"),"\n",l.createElement(t.li,null,"\n",l.createElement(t.p,null,"This will open a view with the number of rows read and written as well as the total data operations on a daily basis. On the right, any issues or failures from the pipelines interacting with the dataset are shown. Review the information displayed on this view. Then, click on a number next to the ",l.createElement(t.code,null,"service_311_get_data")," pipeline listed in the ",l.createElement(t.strong,null,"Issue Summary")," to open a view of just the pipeline runs with issues."),"\n",l.createElement(t.img,{src:"https://raw.githubusercontent.com/ibm-build-lab/VAD-VAR-Workshop/main/content//Databand/images/101/dbnd-dataset-issue-select.png",alt:"dbnd dataset issue select"}),"\n"),"\n",l.createElement(t.li,null,"\n",l.createElement(t.p,null,"In the ",l.createElement(t.strong,null,"History")," tab that is opened with the pipeline runs, you can narrow the list to read or writes and view details on the issues. Click on the record count in one of the rows to bring up a data preview (data preview is an optional feature that can be enabled in the Databand configuration)."),"\n",l.createElement(t.img,{src:"https://raw.githubusercontent.com/ibm-build-lab/VAD-VAR-Workshop/main/content//Databand/images/101/dbnd-dataset-issue-details.png",alt:"dbnd dataset issue details"}),"\n",l.createElement(t.img,{src:"https://raw.githubusercontent.com/ibm-build-lab/VAD-VAR-Workshop/main/content//Databand/images/101/dbnd-data-preview.png",alt:"dbnd data preview"}),"\n",l.createElement(t.p,null,"click on the ",l.createElement(t.strong,null,"X")," in the upper right corner to dismiss the preview."),"\n"),"\n",l.createElement(t.li,null,"\n",l.createElement(t.p,null,"Clicking on the number of columns in the ",l.createElement(t.strong,null,"Schema")," column brings up a display of the actual columns at the time of the run."),"\n",l.createElement(t.img,{src:"https://raw.githubusercontent.com/ibm-build-lab/VAD-VAR-Workshop/main/content//Databand/images/101/dbnd-data-columns.png",alt:"dbnd data columns"}),"\n",l.createElement(t.img,{src:"https://raw.githubusercontent.com/ibm-build-lab/VAD-VAR-Workshop/main/content//Databand/images/101/dbnd-data-column-detail.png",alt:"dbnd data column detail"}),"\n",l.createElement(t.p,null,"Compare the column list between one of the runs with a column removed vs. a column added to see that the ",l.createElement(t.code,null,"incident_address")," column is being removed from the data in the pipeline (it appears right after the ",l.createElement(t.code,null,"incident_zip")," column when present.)"),"\n"),"\n",l.createElement(t.li,null,"\n",l.createElement(t.p,null,"Click on the ",l.createElement(t.strong,null,"Operations")," tab to go to the operations view."),"\n",l.createElement(t.img,{src:"https://raw.githubusercontent.com/ibm-build-lab/VAD-VAR-Workshop/main/content//Databand/images/101/dbnd-data-operations.png",alt:"dbnd data operations"}),"\n"),"\n",l.createElement(t.li,null,"\n",l.createElement(t.p,null,"In the Operations view choose the ",l.createElement(t.code,null,"get_hourly_data")," task and the ",l.createElement(t.code,null,"Write")," operation item to see statistics by that task and operation to the Dataset."),"\n",l.createElement(t.img,{src:"https://raw.githubusercontent.com/ibm-build-lab/VAD-VAR-Workshop/main/content//Databand/images/101/dbnd-data-operation-select.png",alt:"dbnd data operation select"}),"\n"),"\n",l.createElement(t.li,null,"\n",l.createElement(t.p,null,"From the view of current and prior runs of the pipeline, hover the pointer over one of the metric points to see the details of the metric as well as the range used for potential anomaly detection."),"\n",l.createElement(t.img,{src:"https://raw.githubusercontent.com/ibm-build-lab/VAD-VAR-Workshop/main/content//Databand/images/101/dbnd-data-operation-count.png",alt:"dbnd data operation count"}),"\n"),"\n",l.createElement(t.li,null,"\n",l.createElement(t.p,null,"Select another column name, for example ",l.createElement(t.code,null,"borough")," to see the metrics for that column."),"\n",l.createElement(t.img,{src:"https://raw.githubusercontent.com/ibm-build-lab/VAD-VAR-Workshop/main/content//Databand/images/101/dbnd-data-select-borough.png",alt:"dbnd data select borough"}),"\n"),"\n",l.createElement(t.li,null,"\n",l.createElement(t.p,null,"Hover the pointer over the latest point in the ",l.createElement(t.strong,null,"Distinct count")," metric to see that in the dataset, the recent and prior run history shows that the data has entries from 5 (and only 5) boroughs."),"\n",l.createElement(t.img,{src:"https://raw.githubusercontent.com/ibm-build-lab/VAD-VAR-Workshop/main/content//Databand/images/101/dbnd-data-borough-count.png",alt:"dbnd data borough count"}),"\n"),"\n"),"\n",l.createElement(t.p,null,"This completes the overview and tour of Databand. If you are giving a customer demo, at this point you can start a discussion about how Databand's acceleration of understanding issues in pipeline execution and visibility to potential data quality issues can help data engineers to identify and fix problems in data processiong pipelines before they have a significant negative impact to the business."),"\n",l.createElement(t.p,null,"You may have noticed in the overview that there was not a lot time spent on the ",l.createElement(t.strong,null,"Integration")," panel - in the ",l.createElement(t.a,{href:"/databand/101"},"next lab")," you will get hands on and set up your own integration between an IBM DataStage flow and Databand.")))}var r=function(e){void 0===e&&(e={});const{wrapper:t}=Object.assign({},(0,a.ah)(),e.components);return t?l.createElement(t,e,l.createElement(i,e)):i(e)},o=n(4184),s=n.n(o),c=n(4690),d=n(1140),m=n(2565),h=n(8531),u=n(3383),p=n(7315);const b=e=>{const{data:{mdx:{tableOfContents:{items:t},frontmatter:{toc:n=!0,title:a,timeToComplete:i,updated:r}}},children:o}=e,c=(0,l.useRef)(null),{0:b}=(0,l.useState)(""),g=(null===n||n)&&t;return l.createElement(l.Fragment,null,l.createElement(d.Z,{timeToComplete:i,updated:r},t[0].title||a||""),l.createElement(h.Z,{className:p.YS},l.createElement("article",{className:s()(p.Y2,!g&&p.ey),ref:c},l.createElement(m.Z,{components:{h1:()=>null}},o)),g&&l.createElement(u.Z,{itemsList:t,maxDepth:2,currSection:b})))},g=e=>{const{location:{pathname:t},data:{mdx:{frontmatter:{title:n},tableOfContents:{items:a}}}}=e;return l.createElement(c.Z,{pathname:t,title:n||a[0].title||void 0})};function f(e){return l.createElement(b,e,l.createElement(r,e))}},2565:function(e,t,n){n.d(t,{Z:function(){return o}});var a=n(7294),l=n(1151),i=n(7563);const r={table:i.y6,a:i.IW,blockquote:i.R4,SubHeader:i.bU,img:i.fb,code:i.dn,QuizAlert:i.SA,Danger:i.b0,Warning:i.v3,CopyText:i.O5};var o=(0,a.memo)((function(e){let{children:t,components:n={}}=e;return a.createElement(l.Zo,{components:{...r,...n}},t)}))},3383:function(e,t,n){n.d(t,{Z:function(){return c}});var a=n(7294),l=n(7500),i=n(4184),r=n.n(i),o=n(6488);const s=function(e,t,n){return void 0===t&&(t=[]),void 0===n&&(n=0),e.forEach((e=>{const{title:a,url:l,items:i}=e;t.splice(t.length,0,{depth:n,title:a,url:l}),i&&i.length>0&&s(i,t,n+1)})),t};var c=e=>{const{itemsList:t}=e,n=(0,a.useMemo)((()=>s(t[0].items||[])),[t]),i=(0,o.Z)("h1[id],h2[id]",{threshold:[0,1],rootMargin:"-48px 0px -90% 0px"});return n.length<1?null:a.createElement("nav",{className:"TableOfContents-module--toc--54d35"},a.createElement("div",{className:"TableOfContents-module--tocStack--90609"},a.createElement("h6",{className:"TableOfContents-module--tocHeader--05956"},a.createElement(l.rU,{to:"#",replace:!0},"On this page")),n.map(((e,t)=>{let{title:n,url:l}=e;return a.createElement("a",{className:r()("TableOfContents-module--link--b292b",i===l.substring(1)&&"TableOfContents-module--activeItem--3869f"),key:t,href:l},n)}))))}},7315:function(e,t,n){n.d(t,{Y2:function(){return a},YS:function(){return i},ey:function(){return l}});var a="{mdx-fields__slug}-module--article--e3d5a",l="{mdx-fields__slug}-module--noToc--82387",i="{mdx-fields__slug}-module--wrapper--58e72"},1151:function(e,t,n){n.d(t,{Zo:function(){return o},ah:function(){return i}});var a=n(7294);const l=a.createContext({});function i(e){const t=a.useContext(l);return a.useMemo((()=>"function"==typeof e?e(t):{...t,...e}),[t,e])}const r={};function o({components:e,children:t,disableParentContext:n}){let o;return o=n?"function"==typeof e?e({}):e||r:i(e),a.createElement(l.Provider,{value:o},t)}}}]);
//# sourceMappingURL=component---src-pages-mdx-fields-slug-tsx-content-file-path-content-databand-101-md-270fcf7d8dbf6d84aed1.js.map