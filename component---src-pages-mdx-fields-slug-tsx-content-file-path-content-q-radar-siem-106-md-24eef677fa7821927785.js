"use strict";(self.webpackChunkvad_var_site=self.webpackChunkvad_var_site||[]).push([[348],{7804:function(e,t,n){n.r(t),n.d(t,{Head:function(){return p},default:function(){return f}});var l=n(1151),a=n(7294);function r(e){const t=Object.assign({section:"section",h1:"h1",h2:"h2",a:"a",p:"p",strong:"strong",em:"em",blockquote:"blockquote",h3:"h3",ol:"ol",li:"li",pre:"pre",code:"code",span:"span",img:"img",ul:"ul"},(0,l.ah)(),e.components);return a.createElement(t.section,{className:"heading","data-heading-rank":"1","aria-labelledby":"developing-anomaly-detection-rules"},a.createElement(t.h1,{id:"developing-anomaly-detection-rules"},"Developing Anomaly Detection Rules"),"\n",a.createElement(t.section,{className:"heading","data-heading-rank":"2","aria-labelledby":"introduction"},a.createElement(t.h2,{id:"introduction"},a.createElement(t.a,{href:"#introduction"},"Introduction")),"\n",a.createElement(t.p,null,"Anomaly detection provides the capability to alert operators to threats that are undocumented and therefore cannot be detected by methods that monitor for well defined indicators. Such threats can be detected by monitoring for an unusual volume of activities. IBM QRadar SIEM allows you to create anomaly detection rules to monitor for deviations from the ",a.createElement(t.strong,null,"baseline")," of expected activities."),"\n",a.createElement(t.p,null,"In these exercises, you will develop an anomaly detection rule of type ",a.createElement(t.em,null,"Anomaly"),". It tests for the deviation of the number of events matching a grouped search from the weighted moving average. The rule triggers in the exercise when the sample data spikes above the deviation percentage configured in the anomaly rule."),"\n"),a.createElement(t.section,{className:"heading","data-heading-rank":"2","aria-labelledby":"preparing-for-the-anomaly-rule"},a.createElement(t.h2,{id:"preparing-for-the-anomaly-rule"},a.createElement(t.a,{href:"#preparing-for-the-anomaly-rule"},"Preparing for the Anomaly Rule")),"\n",a.createElement(t.p,null,"For each anomaly detection rule, a grouped search provides the time series data the Anomaly Detection Engine (ADE) will use to detect any statistical deviations. In this exercise, you create a grouped search. To confirm that your search works as intended, you feed sample data to QRadar SIEM. After QRadar SIEM has discovered the log source type of the sample data, it automatically creates a log source."),"\n",a.createElement(t.blockquote,null,"\n",a.createElement(t.p,null,"If you are using the WireGuard VPN configured in ",a.createElement(t.strong,null,"101: QRadar Demo Setup")," to access the demo environment then you can perform the following activities from your workstation. If you have not configured VPN access you can perform the activities from the jump server."),"\n"),"\n",a.createElement(t.section,{className:"heading","data-heading-rank":"3","aria-labelledby":"feeding-sample-data-to-qradar-siem"},a.createElement(t.h3,{id:"feeding-sample-data-to-qradar-siem"},a.createElement(t.a,{href:"#feeding-sample-data-to-qradar-siem"},"Feeding sample data to QRadar SIEM")),"\n",a.createElement(t.p,null,"QRadar SIEM needs to process sample data to create the example used in this lab guide. Perform the following steps to start the applicable script:"),"\n",a.createElement(t.ol,null,"\n",a.createElement(t.li,null,"Log into the QRadar server:"),"\n"),"\n",a.createElement(t.pre,null,a.createElement(t.code,{className:"hljs language-bash"},"ssh root@172.16.60.10\n")),"\n",a.createElement(t.p,null,"The password is: ",a.createElement(t.code,null,"Q1d3m0")),"\n",a.createElement(t.ol,{start:"2"},"\n",a.createElement(t.li,null,"Feed the prepared syslog message to QRadar:"),"\n"),"\n",a.createElement(t.pre,null,a.createElement(t.code,{className:"hljs language-bash"},a.createElement(t.span,{className:"hljs-built_in"},"cd")," /labfiles/extended/labfiles\n")),"\n",a.createElement(t.pre,null,a.createElement(t.code,{className:"hljs language-bash"},a.createElement(t.span,{className:"hljs-built_in"},"chmod")," +x ./sendSpike.sh\n\n")),"\n",a.createElement(t.pre,null,a.createElement(t.code,{className:"hljs language-bash"},"./sendSpike.sh\n")),"\n",a.createElement(t.blockquote,null,"\n",a.createElement(t.p,null,"The /labfiles/extended/labfiles directory was uploaded to the QRadar server in the ",a.createElement(t.strong,null,"103: Advanced Lab Setup")," exercises."),"\n"),"\n",a.createElement(t.img,{src:"/1686836029792.2852518528/image6.jpg",alt:""}),"\n",a.createElement(t.p,null,"After around 25 syslog messages, QRadar discovers that they originate from a system running Linux. QRadar automatically creates a log source of the ",a.createElement(t.em,null,"Linux OS")," log source type while you perform the next task."),"\n"),a.createElement(t.section,{className:"heading","data-heading-rank":"3","aria-labelledby":"creating-a-grouped-search"},a.createElement(t.h3,{id:"creating-a-grouped-search"},a.createElement(t.a,{href:"#creating-a-grouped-search"},"Creating a grouped search")),"\n",a.createElement(t.p,null,"Anomaly detection rules test the results of a grouped event or flow search."),"\n",a.createElement(t.ol,null,"\n",a.createElement(t.li,null,"Return to the QRadar console:"),"\n"),"\n",a.createElement(t.ul,null,"\n",a.createElement(t.li,null,"Open your browser to: ",a.createElement(t.a,{href:"https://172.16.60.10"},"https://172.16.60.10"),"."),"\n",a.createElement(t.li,null,"Login as admin with the password Q1d3m0.Demo."),"\n"),"\n",a.createElement(t.img,{src:"/1686836029792.2852518530/image8.jpg",alt:""}),"\n",a.createElement(t.ol,null,"\n",a.createElement(t.li,null,"\n",a.createElement(t.p,null,"Navigate to the ",a.createElement(t.strong,null,"Log Activity")," tab."),"\n"),"\n",a.createElement(t.li,null,"\n",a.createElement(t.p,null,"Locate the ",a.createElement(t.strong,null,"Search")," drop-down list on the left in the toolbar."),"\n"),"\n",a.createElement(t.li,null,"\n",a.createElement(t.p,null,"From the ",a.createElement(t.strong,null,"Search")," drop-down list, select ",a.createElement(t.strong,null,"New Search"),"."),"\n"),"\n"),"\n",a.createElement(t.img,{src:"/1686836029796.2854518531/image9.jpg",alt:""}),"\n",a.createElement(t.p,null,"As a result, the Log Activity tab displays the form to create a new search."),"\n",a.createElement(t.ol,null,"\n",a.createElement(t.li,null,"\n",a.createElement(t.p,null,"Scroll down."),"\n"),"\n",a.createElement(t.li,null,"\n",a.createElement(t.p,null,"In the ",a.createElement(t.strong,null,"Time Range")," section, select ",a.createElement(t.strong,null,"Recent")," and ",a.createElement(t.strong,null,"Last Hour"),"."),"\n"),"\n"),"\n",a.createElement(t.img,{src:"/1686836029780.2847518502/image10.jpg",alt:""}),"\n",a.createElement(t.p,null,"This time frame is not relevant for the anomaly rule. However, if you select a very short time frame for ",a.createElement(t.strong,null,"Recent")," or select ",a.createElement(t.strong,null,"Last Interval (auto refresh)"),", you might miss the visual confirmation that your search works as intended because the search result is empty if the script feeding sample data has already terminated a while ago."),"\n",a.createElement(t.p,null,"Do not select ",a.createElement(t.strong,null,"Real Time (streaming)")," because it does not allow grouping."),"\n",a.createElement(t.ol,null,"\n",a.createElement(t.li,null,"\n",a.createElement(t.p,null,"Scroll down to the ",a.createElement(t.strong,null,"Column Definition")," section and perform the following steps:"),"\n",a.createElement(t.p,null,"a. From the ",a.createElement(t.strong,null,"Columns")," list, remove the following two properties:"),"\n",a.createElement(t.ul,null,"\n",a.createElement(t.li,null,"Source IP"),"\n",a.createElement(t.li,null,"Username"),"\n"),"\n",a.createElement(t.p,null,"b. From the ",a.createElement(t.strong,null,"Available Columns")," list, add the same properties to the ",a.createElement(t.strong,null,"Group By")," list."),"\n",a.createElement(t.img,{src:"/1686836029780.2847518503/image11.jpg",alt:""}),"\n"),"\n",a.createElement(t.li,null,"\n",a.createElement(t.p,null,"Scroll down to the ",a.createElement(t.strong,null,"Search Parameters")," section and perform the following steps:"),"\n"),"\n"),"\n",a.createElement(t.p,null,"a. For ",a.createElement(t.strong,null,"Parameter"),", select ",a.createElement(t.strong,null,"Category [Indexed]"),".\nb. For ",a.createElement(t.strong,null,"Parameter Type"),", select ",a.createElement(t.strong,null,"Is"),".\nc. For ",a.createElement(t.strong,null,"Operator"),", select ",a.createElement(t.strong,null,"Equal to"),".\nd. For ",a.createElement(t.strong,null,"High Level Category"),", select ",a.createElement(t.strong,null,"Authentication"),".\ne. For ",a.createElement(t.strong,null,"Low Level Category"),", select ",a.createElement(t.strong,null,"Privilege Escalation Succeeded"),".Click ",a.createElement(t.strong,null,"Add Filter"),"."),"\n",a.createElement(t.img,{src:"/1686836029780.2847518504/image12.png",alt:""}),"\n",a.createElement(t.ol,null,"\n",a.createElement(t.li,null,"To run the new search, click on the ",a.createElement(t.strong,null,"Search")," button."),"\n"),"\n",a.createElement(t.p,null,"As a result, the Log Activity tab displays the search result."),"\n",a.createElement(t.img,{src:"/1686836029780.2847518505/image13.jpg",alt:""}),"\n",a.createElement(t.ol,null,"\n",a.createElement(t.li,null,"To save the new search, click ",a.createElement(t.strong,null,"Save Criteria")," in the toolbar."),"\n"),"\n",a.createElement(t.img,{src:"/1686836029780.2847518506/image14.jpg",alt:""}),"\n",a.createElement(t.p,null,"As a result, the Save Criteria window opens."),"\n",a.createElement(t.ol,null,"\n",a.createElement(t.li,null,"In the Save Criteria window, perform the following steps:"),"\n"),"\n",a.createElement(t.p,null,"a. For ",a.createElement(t.strong,null,"Search Name"),", enter ",a.createElement(t.strong,null,"Exercise: PrivEsc by Source IP and Username")),"\n",a.createElement(t.p,null,"Best practice is to enter names that describe what a search does. However, for this lab, you can enter a shorter search name because the name is not used anywhere."),"\n",a.createElement(t.p,null,"b. Not required for this exercise but useful in case you need to locate your search easily, select ",a.createElement(t.strong,null,"Include in my Quick Searches"),"."),"\n",a.createElement(t.img,{src:"/1686836029784.285518507/image15.jpg",alt:""}),"\n",a.createElement(t.p,null,"c. To save the search criteria, click ",a.createElement(t.strong,null,"OK"),"."),"\n",a.createElement(t.p,null,"As a result, the Save Criteria window closes, and the Search Saved window opens."),"\n",a.createElement(t.p,null,"d. Click ",a.createElement(t.strong,null,"OK"),"."),"\n",a.createElement(t.p,null,"As a result, the Search Saved window closes."),"\n")),a.createElement(t.section,{className:"heading","data-heading-rank":"2","aria-labelledby":"creating-an-anomaly-rule"},a.createElement(t.h2,{id:"creating-an-anomaly-rule"},a.createElement(t.a,{href:"#creating-an-anomaly-rule"},"Creating an anomaly rule")),"\n",a.createElement(t.p,null,"In this exercise, you create the anomaly rule and configure its tests and rule response."),"\n",a.createElement(t.section,{className:"heading","data-heading-rank":"3","aria-labelledby":"stopping-to-feed-sample-data"},a.createElement(t.h3,{id:"stopping-to-feed-sample-data"},a.createElement(t.a,{href:"#stopping-to-feed-sample-data"},"Stopping to feed sample data")),"\n",a.createElement(t.p,null,"After creating an anomaly rule in this exercise, you will verify it in the next exercise. The verification needs to start from a clean slate. Therefore, stop feeding sample data to QRadar SIEM because the tests of the new anomaly rule immediately match sample data once the rule is created. To terminate the script, that feeds sample data, perform the following steps:"),"\n",a.createElement(t.ol,null,"\n",a.createElement(t.li,null,"\n",a.createElement(t.p,null,"Bring the terminal window to the front."),"\n",a.createElement(t.p,null,"The terminal window displays the output of script that feeds sample data to QRadar SIEM."),"\n"),"\n",a.createElement(t.li,null,"\n",a.createElement(t.p,null,"Confirm that the script has finished. If it has not, type ",a.createElement(t.strong,null,"control-c")," (or ",a.createElement(t.strong,null,"Ctrl-c")," depending on your keyboard)"),"\n"),"\n",a.createElement(t.li,null,"\n",a.createElement(t.p,null,"Do not close the terminal window."),"\n"),"\n"),"\n"),a.createElement(t.section,{className:"heading","data-heading-rank":"3","aria-labelledby":"starting-the-rule-wizard"},a.createElement(t.h3,{id:"starting-the-rule-wizard"},a.createElement(t.a,{href:"#starting-the-rule-wizard"},"Starting the Rule Wizard")),"\n",a.createElement(t.p,null,"To start creating an anomaly rules, that uses the grouped search from the previous exercise, perform the following steps:"),"\n",a.createElement(t.ol,null,"\n",a.createElement(t.li,null,"\n",a.createElement(t.p,null,"Bring the browser to the front."),"\n"),"\n",a.createElement(t.li,null,"\n",a.createElement(t.p,null,"In the Log Activity tab, from the ",a.createElement(t.strong,null,"Rules")," drop-down list on the toolbar, select ",a.createElement(t.strong,null,"Add Anomaly Rule...")),"\n"),"\n"),"\n",a.createElement(t.img,{src:"/1686836029784.285518508/image16.jpg",alt:""}),"\n",a.createElement(t.p,null,"As a result, QRadar opens the Rule Wizard while staying on the Log Activity tab."),"\n",a.createElement(t.blockquote,null,"\n",a.createElement(t.p,null,"If ",a.createElement(t.strong,null,"Add Anomaly Rule")," is greyed out it is because you have not selected a query."),"\n"),"\n",a.createElement(t.ol,{start:"3"},"\n",a.createElement(t.li,null,"\n",a.createElement(t.p,null,"At the Rule Wizard welcome page, read the introductory text and select ",a.createElement(t.strong,null,"Skip this page when running this rules wizard"),"."),"\n"),"\n",a.createElement(t.li,null,"\n",a.createElement(t.p,null,"To navigate to the Rule Test Stack Editor, click ",a.createElement(t.strong,null,"Next")," twice."),"\n"),"\n"),"\n",a.createElement(t.img,{src:"/1686836029784.285518509/image17.jpg",alt:""}),"\n",a.createElement(t.blockquote,null,"\n",a.createElement(t.p,null,"If you are not able to click the ",a.createElement(t.strong,null,"Next")," link to advance to the next page in the wizard, try using the Firefox browser. This may be broken in Chrome."),"\n"),"\n"),a.createElement(t.section,{className:"heading","data-heading-rank":"3","aria-labelledby":"task-3-configuring-test-parameters"},a.createElement(t.h3,{id:"task-3-configuring-test-parameters"},a.createElement(t.a,{href:"#task-3-configuring-test-parameters"},"Task 3 Configuring test parameters")),"\n",a.createElement(t.p,null,"The Rule Test Stack Editor has already automatically added the test that is essential for an anomaly rule. To configure the test parameters, perform the following steps:"),"\n",a.createElement(t.ol,null,"\n",a.createElement(t.li,null,"\n",a.createElement(t.p,null,"To open a window to select the property for which you want to compute interval averages, click the [this accumulated property] parameter."),"\n"),"\n",a.createElement(t.li,null,"\n",a.createElement(t.p,null,"In the window, select the ",a.createElement(t.strong,null,"Event Count (Sum)")," accumulated property."),"\n"),"\n"),"\n",a.createElement(t.img,{src:"/1686836029784.285518510/image18.jpg",alt:""}),"\n",a.createElement(t.ol,{start:"3"},"\n",a.createElement(t.li,null,"To add the accumulated property to the test, click ",a.createElement(t.strong,null,"Submit"),"."),"\n"),"\n",a.createElement(t.p,null,"The window closes."),"\n",a.createElement(t.ol,{start:"4"},"\n",a.createElement(t.li,null,"\n",a.createElement(t.p,null,"The second parameter is [1 min]. It configures the interval length. Leave the parameter unchanged."),"\n"),"\n",a.createElement(t.li,null,"\n",a.createElement(t.p,null,"The third parameter is [40]%. It configures above which deviation of the current interval from the weighted moving average of the previous intervals the test evaluates to true. Leave the parameter unchanged."),"\n"),"\n",a.createElement(t.li,null,"\n",a.createElement(t.p,null,"The last parameter of the test configures, for which time range the Anomaly Detection Engine computes the weighted moving average in intervals."),"\n"),"\n"),"\n",a.createElement(t.p,null,"The Rule Test Stack Editor has automatically selected [24 hours] for the last parameter. To open a window to select another time frame, click the parameter."),"\n",a.createElement(t.ol,{start:"7"},"\n",a.createElement(t.li,null,"In the window, select the ",a.createElement(t.strong,null,"5 mins")," time frame."),"\n"),"\n",a.createElement(t.img,{src:"/1686836029784.285518511/image19.jpg",alt:""}),"\n",a.createElement(t.ol,{start:"8"},"\n",a.createElement(t.li,null,"To update the parameter, click ",a.createElement(t.strong,null,"Submit"),"."),"\n"),"\n",a.createElement(t.p,null,"The window closes."),"\n",a.createElement(t.ol,{start:"9"},"\n",a.createElement(t.li,null,"Verify that your Rule Test Stack Editor looks like the following screen capture."),"\n"),"\n",a.createElement(t.img,{src:"/1686836029784.285518513/image20.jpg",alt:""}),"\n",a.createElement(t.a,{href:"/1686836029784.285518514/image21.jpg"}),"\n",a.createElement(t.p,null,a.createElement(t.strong,null,"Hint:")," In real-world IT environments, probably an unusual number of privilege escalations occur at certain times legitimately, for example when automated operational processes run. Therefore, add time tests to only run an anomaly detection rule at times when a deviation from a weighted moving average indicates a concern."),"\n"),a.createElement(t.section,{className:"heading","data-heading-rank":"3","aria-labelledby":"providing-a-minimum-value-for-each-interval"},a.createElement(t.h3,{id:"providing-a-minimum-value-for-each-interval"},a.createElement(t.a,{href:"#providing-a-minimum-value-for-each-interval"},"Providing a minimum value for each interval")),"\n",a.createElement(t.p,null,"Typically statistical tests lead only to helpful results when a minimum of relevant events or flows arrives per interval. For anomaly detection rules in your environment, the minimums are probably in the hundreds or thousands. This example needs to work with a relatively small number of sample events. Therefore, perform the following steps to require a minimum of 8 events per interval:"),"\n",a.createElement(t.ol,null,"\n",a.createElement(t.li,null,"Click the green ",a.createElement(t.strong,null,"plus (+)")," icon next to the following test:"),"\n"),"\n",a.createElement(t.p,null,a.createElement(t.em,null,"when the tested interval value is greater than or equal 0")),"\n",a.createElement(t.ol,{start:"2"},"\n",a.createElement(t.li,null,"\n",a.createElement(t.p,null,"To open a window to enter a number as the minimum, click the [0] parameter."),"\n"),"\n",a.createElement(t.li,null,"\n",a.createElement(t.p,null,"In the window, for ",a.createElement(t.strong,null,"Provide A Minimum Value For Each Interval"),", replace the ",a.createElement(t.strong,null,"0")," by ",a.createElement(t.strong,null,"8")),"\n"),"\n"),"\n",a.createElement(t.img,{src:"/1686836029784.285518515/image22.jpg",alt:""}),"\n",a.createElement(t.ol,{start:"4"},"\n",a.createElement(t.li,null,"To configure the minimum test, click ",a.createElement(t.strong,null,"Submit"),"."),"\n"),"\n",a.createElement(t.p,null,"The window closes."),"\n"),a.createElement(t.section,{className:"heading","data-heading-rank":"3","aria-labelledby":"configuring-the-anomaly-rule"},a.createElement(t.h3,{id:"configuring-the-anomaly-rule"},a.createElement(t.a,{href:"#configuring-the-anomaly-rule"},"Configuring the Anomaly Rule")),"\n",a.createElement(t.p,null,"Typically statistical tests lead only to helpful results when a minimum of relevant events or flows arrives per interval. For anomaly detection rules in your environment, the minimums are probably in the hundreds or thousands. This example needs to work with a relatively small number of sample events. Therefore, perform the following steps to require a minimum of 8 events per interval:"),"\n",a.createElement(t.ol,null,"\n",a.createElement(t.li,null,"\n",a.createElement(t.p,null,"Scroll down to see all related fields for this task more clearly."),"\n"),"\n",a.createElement(t.li,null,"\n",a.createElement(t.p,null,"For the rule name in the ",a.createElement(t.strong,null,"Apply")," field, enter the following name:"),"\n"),"\n"),"\n",a.createElement(t.pre,null,a.createElement(t.code,{className:"hljs language-bash"},"Exercise-Authentication: Unusual Privilege Escalations\n")),"\n",a.createElement(t.blockquote,null,"\n",a.createElement(t.p,null,a.createElement(t.strong,null,"Note:")," This exercise uses the prefix Exercise- to distinguish the predefined rules from your own development."),"\n"),"\n",a.createElement(t.ol,{start:"3"},"\n",a.createElement(t.li,null,"\n",a.createElement(t.p,null,"To assign the custom rule to the ",a.createElement(t.strong,null,"Exercise")," group, scroll down in the list of groups and select ",a.createElement(t.strong,null,"Exercise"),"."),"\n"),"\n",a.createElement(t.li,null,"\n",a.createElement(t.p,null,"To document the custom rule in the ",a.createElement(t.strong,null,"Notes")," field, enter the following text:"),"\n"),"\n"),"\n",a.createElement(t.pre,null,a.createElement(t.code,{className:"hljs language-bash"},"This rule triggers when privilege escalations deviate considerably from their weighted moving average.\n")),"\n",a.createElement(t.ol,{start:"5"},"\n",a.createElement(t.li,null,"\n",a.createElement(t.p,null,"To confirm the input, press ",a.createElement(t.strong,null,"Enter"),"."),"\n"),"\n",a.createElement(t.li,null,"\n",a.createElement(t.p,null,"Verify that your Rule Wizard looks like the following screen capture."),"\n"),"\n"),"\n",a.createElement(t.img,{src:"/1686836029788.285518517/image24.jpg",alt:""}),"\n",a.createElement(t.a,{href:"/1686836029788.285518518/image25.png"}),"\n",a.createElement(t.blockquote,null,"\n",a.createElement(t.p,null,a.createElement(t.strong,null,"Note:")," When you need to locate all anomaly detection rules and custom rules that you have developed, navigate to ",a.createElement(t.strong,null,"Rules")," on the ",a.createElement(t.strong,null,"Offenses")," tab, select ",a.createElement(t.strong,null,"Rules")," in the ",a.createElement(t.strong,null,"Display")," drop-down list, and then select ",a.createElement(t.strong,null,"Exercise")," in the ",a.createElement(t.strong,null,"Group")," drop-down list."),"\n"),"\n"),a.createElement(t.section,{className:"heading","data-heading-rank":"3","aria-labelledby":"observing-rule-responses"},a.createElement(t.h3,{id:"observing-rule-responses"},a.createElement(t.a,{href:"#observing-rule-responses"},"Observing rule responses")),"\n",a.createElement(t.p,null,"To have an offense created for the unusual privilege escalations that the anomaly detection rule tests for, perform the following steps:"),"\n",a.createElement(t.ol,null,"\n",a.createElement(t.li,null,"\n",a.createElement(t.p,null,"To navigate to the Rule Response, click ",a.createElement(t.strong,null,"Next"),"."),"\n"),"\n",a.createElement(t.li,null,"\n",a.createElement(t.p,null,"The Rule Wizard has already prepared the Rule Response. For this example, do not make any changes."),"\n"),"\n",a.createElement(t.li,null,"\n",a.createElement(t.p,null,"To observe that the offense can only be indexed on Event Name, open the ",a.createElement(t.strong,null,"Index offense based on")," drop-down list."),"\n"),"\n"),"\n",a.createElement(t.img,{src:"/1686836029788.285518519/image26.jpg",alt:""}),"\n",a.createElement(t.ol,{start:"4"},"\n",a.createElement(t.li,null,"Scroll down to the ",a.createElement(t.strong,null,"Enable Rule")," section. Do not change anything. Read the important hint next to the checkbox."),"\n"),"\n",a.createElement(t.img,{src:"/1686836029788.285518520/image27.jpg",alt:""}),"\n",a.createElement(t.ol,{start:"5"},"\n",a.createElement(t.li,null,"\n",a.createElement(t.p,null,"To navigate to the Rule Summary, click ",a.createElement(t.strong,null,"Next"),"."),"\n"),"\n",a.createElement(t.li,null,"\n",a.createElement(t.p,null,"To create the rule, click ",a.createElement(t.strong,null,"Finish"),"."),"\n"),"\n"),"\n",a.createElement(t.p,null,"The Rule Wizard closes."),"\n")),a.createElement(t.section,{className:"heading","data-heading-rank":"2","aria-labelledby":"verifying-the-anomaly-rule"},a.createElement(t.h2,{id:"verifying-the-anomaly-rule"},a.createElement(t.a,{href:"#verifying-the-anomaly-rule"},"Verifying the Anomaly Rule")),"\n",a.createElement(t.p,null,"In this exercise, you verify whether your development creates an offense."),"\n",a.createElement(t.section,{className:"heading","data-heading-rank":"3","aria-labelledby":"feeding-sample-data-to-qradar-siem-1"},a.createElement(t.h3,{id:"feeding-sample-data-to-qradar-siem-1"},a.createElement(t.a,{href:"#feeding-sample-data-to-qradar-siem-1"},"Feeding sample data to QRadar SIEM")),"\n",a.createElement(t.p,null,"To execute the script, that feeds sample data, perform the following steps:"),"\n",a.createElement(t.ol,null,"\n",a.createElement(t.li,null,"Bring the terminal window to the front."),"\n"),"\n",a.createElement(t.p,null,"The terminal window still displays the output from running the script previously."),"\n",a.createElement(t.ol,{start:"2"},"\n",a.createElement(t.li,null,"To feed repeatedly the prepared syslog message to QRadar, run the following command:"),"\n"),"\n",a.createElement(t.pre,null,a.createElement(t.code,{className:"hljs language-bash"},"./sendSpike.sh\n")),"\n",a.createElement(t.img,{src:"/1686836029788.285518521/image28.jpg",alt:""}),"\n",a.createElement(t.ol,{start:"3"},"\n",a.createElement(t.li,null,"Leave script to run and switch back to the browser. Do not close the terminal window."),"\n"),"\n"),a.createElement(t.section,{className:"heading","data-heading-rank":"3","aria-labelledby":"observing-the-offense"},a.createElement(t.h3,{id:"observing-the-offense"},a.createElement(t.a,{href:"#observing-the-offense"},"Observing the offense")),"\n",a.createElement(t.p,null,"The script feeds events to QRadar SIEM, that match your anomaly rule. For the first five minutes, the rate of events increases to a spike. After the spike, the rate decreases mirroring the rate of the increase in the first five minutes."),"\n",a.createElement(t.p,null,"The average of the interval with the spike deviates by a higher percentage than configured in the anomaly rule from the weighted moving average. Therefore, QRadar SIEM creates an offense after the script has run for about six minutes. To observe the offense, perform the following steps:"),"\n",a.createElement(t.ol,null,"\n",a.createElement(t.li,null,"\n",a.createElement(t.p,null,"Navigate to the ",a.createElement(t.strong,null,"Offenses")," tab."),"\n"),"\n",a.createElement(t.li,null,"\n",a.createElement(t.p,null,"To refresh the listed offenses, double-click the ",a.createElement(t.strong,null,"Offenses")," tab. The double-click refreshes and resets the tab to its default settings."),"\n"),"\n"),"\n",a.createElement(t.blockquote,null,"\n",a.createElement(t.p,null,a.createElement(t.strong,null,"Note:")," In this case, you can accomplish the same goal, if you click the ",a.createElement(t.strong,null,"double arrow")," icon in the upper-right corner of the QRadar SIEM user interface. However it is disabled for this simulation."),"\n"),"\n",a.createElement(t.ol,{start:"3"},"\n",a.createElement(t.li,null,"When the new offense appears, double-click it."),"\n"),"\n",a.createElement(t.img,{src:"/1686836029788.285518522/image29.png",alt:""}),"\n",a.createElement(t.p,null,"The Offense Summary opens."),"\n",a.createElement(t.img,{src:"/1686836029792.2852518524/image30.jpg",alt:""}),"\n",a.createElement(t.ol,{start:"4"},"\n",a.createElement(t.li,null,"\n",a.createElement(t.p,null,"Optionally, click ",a.createElement(t.strong,null,"Anomaly")," in the toolbar."),"\n",a.createElement(t.p,null,"A separate window opens with the results of the search that your anomaly rule uses."),"\n"),"\n",a.createElement(t.li,null,"\n",a.createElement(t.p,null,"Review the search result and close the browser window to get back to the main window of the QRadar console."),"\n"),"\n",a.createElement(t.li,null,"\n",a.createElement(t.p,null,"In the ",a.createElement(t.strong,null,"Event/Flow count")," field, click ",a.createElement(t.strong,null,"5 events"),". The number of events can differ."),"\n",a.createElement(t.p,null,"A separate window opens with the events that the anomaly rule dispatched as Rule Response."),"\n"),"\n",a.createElement(t.li,null,"\n",a.createElement(t.p,null,"To open the Event Details, scroll down and double-click on the event."),"\n"),"\n",a.createElement(t.li,null,"\n",a.createElement(t.p,null,"Observe the ",a.createElement(t.strong,null,"Anomaly Detection Information")," section. It only appears for events that anomaly detection rules dispatch as a Rule Response."),"\n"),"\n"),"\n",a.createElement(t.img,{src:"/1686836029792.2852518525/image31.jpg",alt:""}),"\n")),a.createElement(t.section,{className:"heading","data-heading-rank":"2","aria-labelledby":"summary"},a.createElement(t.h2,{id:"summary"},a.createElement(t.a,{href:"#summary"},"Summary")),"\n",a.createElement(t.p,null,"You have successfully completed this lab by creating and verifing an anomaly rule in QRadar.")))}var o=function(e){void 0===e&&(e={});const{wrapper:t}=Object.assign({},(0,l.ah)(),e.components);return t?a.createElement(t,e,a.createElement(r,e)):r(e)},i=n(4184),s=n.n(i),c=n(4690),m=n(1140),u=n(2565),h=n(8531),d=n(3383),g=n(7315);const E=e=>{const{data:{mdx:{tableOfContents:{items:t},frontmatter:{toc:n=!0,title:l,timeToComplete:r,updated:o}}},children:i}=e,c=(0,a.useRef)(null),{0:E}=(0,a.useState)(""),p=(null===n||n)&&t;return a.createElement(a.Fragment,null,a.createElement(m.Z,{timeToComplete:r,updated:o},t[0].title||l||""),a.createElement(h.Z,{className:g.YS},a.createElement("article",{className:s()(g.Y2,!p&&g.ey),ref:c},a.createElement(u.Z,{components:{h1:()=>null}},i)),p&&a.createElement(d.Z,{itemsList:t,maxDepth:2,currSection:E})))},p=e=>{const{location:{pathname:t},data:{mdx:{frontmatter:{title:n},tableOfContents:{items:l}}}}=e;return a.createElement(c.Z,{pathname:t,title:n||l[0].title||void 0})};function f(e){return a.createElement(E,e,a.createElement(o,e))}},2565:function(e,t,n){n.d(t,{Z:function(){return i}});var l=n(7294),a=n(1151),r=n(7563);const o={table:r.y6,a:r.IW,blockquote:r.R4,SubHeader:r.bU,img:r.fb,code:r.dn,QuizAlert:r.SA,Danger:r.b0,Warning:r.v3,CopyText:r.O5};var i=(0,l.memo)((function(e){let{children:t,components:n={}}=e;return l.createElement(a.Zo,{components:{...o,...n}},t)}))},3383:function(e,t,n){n.d(t,{Z:function(){return c}});var l=n(7294),a=n(7500),r=n(4184),o=n.n(r),i=n(6488);const s=function(e,t,n){return void 0===t&&(t=[]),void 0===n&&(n=0),e.forEach((e=>{const{title:l,url:a,items:r}=e;t.splice(t.length,0,{depth:n,title:l,url:a}),r&&r.length>0&&s(r,t,n+1)})),t};var c=e=>{const{itemsList:t}=e,n=(0,l.useMemo)((()=>s(t[0].items||[])),[t]),r=(0,i.Z)("h1[id],h2[id]",{threshold:[0,1],rootMargin:"-48px 0px -90% 0px"});return n.length<1?null:l.createElement("nav",{className:"TableOfContents-module--toc--54d35"},l.createElement("div",{className:"TableOfContents-module--tocStack--90609"},l.createElement("h6",{className:"TableOfContents-module--tocHeader--05956"},l.createElement(a.rU,{to:"#",replace:!0},"On this page")),n.map(((e,t)=>{let{title:n,url:a}=e;return l.createElement("a",{className:o()("TableOfContents-module--link--b292b",r===a.substring(1)&&"TableOfContents-module--activeItem--3869f"),key:t,href:a},n)}))))}},7315:function(e,t,n){n.d(t,{Y2:function(){return l},YS:function(){return r},ey:function(){return a}});var l="{mdx-fields__slug}-module--article--e3d5a",a="{mdx-fields__slug}-module--noToc--82387",r="{mdx-fields__slug}-module--wrapper--58e72"},1151:function(e,t,n){n.d(t,{Zo:function(){return i},ah:function(){return r}});var l=n(7294);const a=l.createContext({});function r(e){const t=l.useContext(a);return l.useMemo((()=>"function"==typeof e?e(t):{...t,...e}),[t,e])}const o={};function i({components:e,children:t,disableParentContext:n}){let i;return i=n?"function"==typeof e?e({}):e||o:r(e),l.createElement(a.Provider,{value:i},t)}}}]);
//# sourceMappingURL=component---src-pages-mdx-fields-slug-tsx-content-file-path-content-q-radar-siem-106-md-24eef677fa7821927785.js.map