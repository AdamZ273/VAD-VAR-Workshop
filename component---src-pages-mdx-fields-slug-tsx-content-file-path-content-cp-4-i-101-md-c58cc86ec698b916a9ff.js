"use strict";(self.webpackChunkvad_var_site=self.webpackChunkvad_var_site||[]).push([[2546],{5873:function(e,t,n){n.r(t),n.d(t,{Head:function(){return E},default:function(){return b}});var l=n(1151),a=n(7294);function r(e){const t=Object.assign({section:"section",h1:"h1",p:"p",em:"em",img:"img",ul:"ul",li:"li",strong:"strong",ol:"ol",a:"a",h2:"h2",blockquote:"blockquote",code:"code",pre:"pre"},(0,l.ah)(),e.components);return a.createElement(t.section,{className:"heading","data-heading-rank":"1","aria-labelledby":"101-create-deploy-and-test-a-new-api-using-the-api-connect-developer-toolkit"},a.createElement(t.h1,{id:"101-create-deploy-and-test-a-new-api-using-the-api-connect-developer-toolkit"},"101: Create, deploy and test a new API using the API Connect Developer Toolkit"),"\n",a.createElement(t.p,null,"In this lab you will create a new API using the OpenAPI definition of an existing RESTful web-service that gets realtime stock quotes. You will then test the deployed API by deploying the ",a.createElement(t.em,null,"IBM Trader Lite")," application which is a simple stock trading sample, written as a set of microservices. The app uses the API definition that you will create to get real-time stock quotes."),"\n",a.createElement(t.p,null,"The architecture of the app is shown below:"),"\n",a.createElement(t.img,{src:"https://raw.githubusercontent.com/ibm-build-lab/VAD-VAR-Workshop/main/content//CP4I/images/architecture.png",alt:""}),"\n",a.createElement(t.ul,null,"\n",a.createElement(t.li,null,a.createElement(t.strong,null,"Tradr")," is a Node.js UI for the portfolio service"),"\n",a.createElement(t.li,null,"The ",a.createElement(t.strong,null,"portfolio")," microservice sits at the center of the application. This microservice:","\n",a.createElement(t.ul,null,"\n",a.createElement(t.li,null,"persists trade data using JDBC to a MariaDB database"),"\n",a.createElement(t.li,null,"invokes the ",a.createElement(t.strong,null,"stock-quote")," service that invokes an API defined in API Connect in CP4I to get stock quotes"),"\n",a.createElement(t.li,null,"calls the ",a.createElement(t.strong,null,"trade-history")," service to store trade data in a PostgreSQL database that can be queried for reporting purposes."),"\n",a.createElement(t.li,null,"calls the ",a.createElement(t.strong,null,"trade-history")," service to get aggregated historical trade data."),"\n"),"\n"),"\n"),"\n",a.createElement(t.p,null,"This lab is broken up into the following steps:"),"\n",a.createElement(t.ol,null,"\n",a.createElement(t.li,null,"\n",a.createElement(t.p,null,a.createElement(t.a,{href:"#step-1-download-the-openapi-definition-file-for-the-external-stock-quote-service"},"Download the OpenAPI definition file for the external Stock Quote service")),"\n"),"\n",a.createElement(t.li,null,"\n",a.createElement(t.p,null,a.createElement(t.a,{href:"#step-2-import-the-openapi-definition-file-into-api-manager"},"Import the OpenAPI definition file into API Manager")),"\n"),"\n",a.createElement(t.li,null,"\n",a.createElement(t.p,null,a.createElement(t.a,{href:"#step-3-configure-the-api"},"Configure the API")),"\n"),"\n",a.createElement(t.li,null,"\n",a.createElement(t.p,null,a.createElement(t.a,{href:"#step-4-test-the-api"},"Test the API")),"\n"),"\n",a.createElement(t.li,null,"\n",a.createElement(t.p,null,a.createElement(t.a,{href:"#step-5-install-the-traderlite-app"},"Install the TraderLite app")),"\n"),"\n",a.createElement(t.li,null,"\n",a.createElement(t.p,null,a.createElement(t.a,{href:"#step-6-verify-that-the-trader-lite-app-is-calling-your-api-successfully"},"Verify that the Trader Lite app is calling your API successfully")),"\n"),"\n",a.createElement(t.li,null,"\n",a.createElement(t.p,null,a.createElement(t.a,{href:"#summary"},"Summary")),"\n"),"\n"),"\n",a.createElement(t.section,{className:"heading","data-heading-rank":"2","aria-labelledby":"step-1-download-the-openapi-definition-file-for-the-external-stock-quote-service"},a.createElement(t.h2,{id:"step-1-download-the-openapi-definition-file-for-the-external-stock-quote-service"},a.createElement(t.a,{href:"#step-1-download-the-openapi-definition-file-for-the-external-stock-quote-service"},"Step 1: Download the OpenAPI definition file for the external Stock Quote service")),"\n",a.createElement(t.blockquote,null,"\n",a.createElement(t.p,null,a.createElement(t.strong,null,"Note:")," You can click on any image in the instructions below to zoom in and see more details. When you do that just click on your browser's back button to return to the previous state."),"\n"),"\n",a.createElement(t.p,null,"1.1 In your browser right click on the following link, right click and select ",a.createElement(t.strong,null,"Save Link As ...")," from the context menu. Save the file ",a.createElement(t.em,null,"stock-quote-api.yaml")," to your local system."),"\n",a.createElement(t.p,null,a.createElement(t.a,{href:"https://raw.githubusercontent.com/IBMStockTraderLite/traderlite-cp4i/master/apic/stock-quote-api.yaml"},"stock-quote-api.yaml")),"\n"),a.createElement(t.section,{className:"heading","data-heading-rank":"2","aria-labelledby":"step-2-import-the-openapi-definition-file-into-api-manager"},a.createElement(t.h2,{id:"step-2-import-the-openapi-definition-file-into-api-manager"},a.createElement(t.a,{href:"#step-2-import-the-openapi-definition-file-into-api-manager"},"Step 2: Import the OpenAPI definition file into API Manager")),"\n",a.createElement(t.p,null,"2.1 Go to the CP4I Platform Navigator browser tab if you have one open, otherwise start a new tab and log in to the platform navigator homepage."),"\n",a.createElement(t.p,null,"2.2 Click on the link to the API Connect instance"),"\n",a.createElement(t.img,{src:"https://raw.githubusercontent.com/ibm-build-lab/VAD-VAR-Workshop/main/content//CP4I/images/nav-to-apic.png",alt:""}),"\n",a.createElement(t.p,null,"2.3 If prompted to select a user registry select the Common Services User Registry"),"\n",a.createElement(t.blockquote,null,"\n",a.createElement(t.p,null,a.createElement(t.strong,null,"Note:")," The API Connect application can take a long time to load when you use it for the first time."),"\n"),"\n",a.createElement(t.p,null,"2.5 Click on the ",a.createElement(t.strong,null,"Develop APIs and Products tile")),"\n",a.createElement(t.img,{src:"https://raw.githubusercontent.com/ibm-build-lab/VAD-VAR-Workshop/main/content//CP4I/images/api-manager.png",alt:""}),"\n",a.createElement(t.p,null,"2.6 Click ",a.createElement(t.strong,null,"Add")," and select ",a.createElement(t.strong,null,"API")," from the context menu"),"\n",a.createElement(t.img,{src:"https://raw.githubusercontent.com/ibm-build-lab/VAD-VAR-Workshop/main/content//CP4I/images/add-api.png",alt:""}),"\n",a.createElement(t.p,null,"2.7 On the next screen select ",a.createElement(t.strong,null,"Existing OpenAPI")," under ",a.createElement(t.strong,null,"Import")," and then click ",a.createElement(t.strong,null,"Next"),"."),"\n",a.createElement(t.img,{src:"https://raw.githubusercontent.com/ibm-build-lab/VAD-VAR-Workshop/main/content//CP4I/images/existing-api.png",alt:""}),"\n",a.createElement(t.p,null,"2.8 Now choose ",a.createElement(t.strong,null,"stock-quote-api.yaml")," from your local file system and click ",a.createElement(t.strong,null,"Next"),"."),"\n",a.createElement(t.img,{src:"https://raw.githubusercontent.com/ibm-build-lab/VAD-VAR-Workshop/main/content//CP4I/images/choose-file.png",alt:""}),"\n",a.createElement(t.p,null,"2.9 ",a.createElement(t.strong,null,"Do not")," select ",a.createElement(t.strong,null,"Activate API"),". Click ",a.createElement(t.strong,null,"Next")),"\n",a.createElement(t.p,null,"2.10 The API should be imported successfully as shown below. Click ",a.createElement(t.strong,null,"Edit API"),"."),"\n",a.createElement(t.img,{src:"https://raw.githubusercontent.com/ibm-build-lab/VAD-VAR-Workshop/main/content//CP4I/images/edit-api.png",alt:""}),"\n"),a.createElement(t.section,{className:"heading","data-heading-rank":"2","aria-labelledby":"step-3-configure-the-api"},a.createElement(t.h2,{id:"step-3-configure-the-api"},a.createElement(t.a,{href:"#step-3-configure-the-api"},"Step 3: Configure the API")),"\n",a.createElement(t.p,null,"After importing the existing API, the first step is to configure basic security before exposing it to other developers. By creating a client key you are able to identify the app using the services. Next, we will define the backend endpoints where the API is actually running. API Connect supports pointing to multiple backend endpoints to match your multiple build stage environments."),"\n",a.createElement(t.p,null,"3.1 In the left navigation select ",a.createElement(t.strong,null,"Host")," and replace the hard-coded endpoint address with ",a.createElement(t.code,null,"$(catalog.host)")," to indicate that you want calls to the external API to go through API Connect."),"\n",a.createElement(t.img,{src:"https://raw.githubusercontent.com/ibm-build-lab/VAD-VAR-Workshop/main/content//CP4I/images/catalog-host.png",alt:""}),"\n",a.createElement(t.p,null,"3.2 Click ",a.createElement(t.strong,null,"Save")),"\n",a.createElement(t.p,null,"3.3 In the Edit API screen click ",a.createElement(t.strong,null,"Security Schemes(0)")," in the left navigation."),"\n",a.createElement(t.p,null,"3.4 Click the ",a.createElement(t.strong,null,"Add")," button on the right."),"\n",a.createElement(t.img,{src:"https://raw.githubusercontent.com/ibm-build-lab/VAD-VAR-Workshop/main/content//CP4I/images/security-scheme.png",alt:""}),"\n",a.createElement(t.p,null,"3.5 In the ",a.createElement(t.strong,null,"Security Scheme Name(Key)")," field, type ",a.createElement(t.code,null,"client-id"),"."),"\n",a.createElement(t.p,null,"3.6 Under ",a.createElement(t.strong,null,"Security Definition Type"),", choose ",a.createElement(t.strong,null,"apiKey"),"."),"\n",a.createElement(t.p,null,"3.6 Under ",a.createElement(t.strong,null,"Key Type"),", choose ",a.createElement(t.strong,null,"client_id"),"."),"\n",a.createElement(t.p,null,"3.7 For ",a.createElement(t.strong,null,"Located In")," choose ",a.createElement(t.strong,null,"header"),"."),"\n",a.createElement(t.p,null,"3.8 Leave ",a.createElement(t.code,null,"X-IBM-Client-Id")," as the ",a.createElement(t.strong,null,"Variable Name"),". Your screen should now look like the image below."),"\n",a.createElement(t.img,{src:"https://raw.githubusercontent.com/ibm-build-lab/VAD-VAR-Workshop/main/content//CP4I/images/edit-api-complete.png",alt:""}),"\n",a.createElement(t.p,null,"3.9 Click the ",a.createElement(t.strong,null,"Create")," button and then click ",a.createElement(t.strong,null,"Save"),"."),"\n",a.createElement(t.p,null,"3.10 Next you'll require use of the Client Id to access your API. In the left navigation select ",a.createElement(t.strong,null,"Security(0)")," and then click on ",a.createElement(t.strong,null,"Create a Security Requirement")),"\n",a.createElement(t.img,{src:"https://raw.githubusercontent.com/ibm-build-lab/VAD-VAR-Workshop/main/content//CP4I/images/create-security-req.png",alt:""}),"\n",a.createElement(t.p,null,"3.11 Select the Security Scheme you just created and the click ",a.createElement(t.strong,null,"Create"),"."),"\n",a.createElement(t.img,{src:"https://raw.githubusercontent.com/ibm-build-lab/VAD-VAR-Workshop/main/content//CP4I/images/security-req.png",alt:""}),"\n",a.createElement(t.p,null,"3.12 Click ",a.createElement(t.strong,null,"Save")),"\n",a.createElement(t.p,null,"3.13 Next you'll define the endpoint for the external API. Select the ",a.createElement(t.strong,null,"Gateway")," tab, expand ",a.createElement(t.strong,null,"Properties")," in the left navigation."),"\n",a.createElement(t.p,null,"3.14 Click on the ",a.createElement(t.strong,null,"target-url")," property."),"\n",a.createElement(t.p,null,"3.15 Copy then paste the following URL into the ",a.createElement(t.strong,null,"Property Value")," field:"),"\n",a.createElement(t.pre,null,a.createElement(t.code,null,"  https://stocktrader.ibmc.buildlab.cloud\n")),"\n",a.createElement(t.img,{src:"https://raw.githubusercontent.com/ibm-build-lab/VAD-VAR-Workshop/main/content//CP4I/images/target-url.png",alt:""}),"\n",a.createElement(t.p,null,"3.16 Click ",a.createElement(t.strong,null,"Save")," to complete the configuration."),"\n"),a.createElement(t.section,{className:"heading","data-heading-rank":"2","aria-labelledby":"step-4-test-the-api"},a.createElement(t.h2,{id:"step-4-test-the-api"},a.createElement(t.a,{href:"#step-4-test-the-api"},"Step 4: Test the API")),"\n",a.createElement(t.p,null,"In the API designer, you have the ability to test the API immediately after creation."),"\n",a.createElement(t.p,null,"4.1 On the left Navigation, click ",a.createElement(t.strong,null,"Policies"),"."),"\n",a.createElement(t.p,null,"4.2 Click ",a.createElement(t.strong,null,"invoke")," in the flow designer. Note the window on the right with the configuration. The ",a.createElement(t.strong,null,"invoke")," node calls the ",a.createElement(t.strong,null,"target-url")," (ie the external service)."),"\n",a.createElement(t.img,{src:"https://raw.githubusercontent.com/ibm-build-lab/VAD-VAR-Workshop/main/content//CP4I/images/invoke.png",alt:""}),"\n",a.createElement(t.p,null,"4.3 Modify the ",a.createElement(t.strong,null,"URL")," field to include the request path passed in by the caller as well by appending ",a.createElement(t.code,null,"$(request.path)")," to the ",a.createElement(t.strong,null,"URL"),". When you're done the field should be set to:"),"\n",a.createElement(t.pre,null,a.createElement(t.code,null,"   $(target-url)$(request.path)\n")),"\n",a.createElement(t.img,{src:"https://raw.githubusercontent.com/ibm-build-lab/VAD-VAR-Workshop/main/content//CP4I/images/invoke-edited.png",alt:""}),"\n",a.createElement(t.p,null,"4.4 Click ",a.createElement(t.strong,null,"Save")),"\n",a.createElement(t.p,null,"4.5 Toggle the ",a.createElement(t.strong,null,"Offline")," switch and then click on the ",a.createElement(t.strong,null,"Test")," tab"),"\n",a.createElement(t.a,{href:"images/test-tab.png"},a.createElement(t.img,{src:"https://raw.githubusercontent.com/ibm-build-lab/VAD-VAR-Workshop/main/content//CP4I/images/test-tab.png",alt:""})),"\n",a.createElement(t.p,null,"4.6 The ",a.createElement(t.strong,null,"Request")," should be prefilled with the GET request to ",a.createElement(t.strong,null,"/stock-quote/djia"),"."),"\n",a.createElement(t.p,null,"4.7 Note that your ",a.createElement(t.strong,null,"client-id")," is prefilled for you."),"\n",a.createElement(t.p,null,"4.8 Click ",a.createElement(t.strong,null,"Send"),"."),"\n",a.createElement(t.img,{src:"https://raw.githubusercontent.com/ibm-build-lab/VAD-VAR-Workshop/main/content//CP4I/images/invoke-api.png",alt:""}),"\n",a.createElement(t.p,null,"4.9 If this is the first test of the API, you may see a certificate exception. Simply click on the link provided. This will open a new tab and allow you to click through to accept the self signed certificate. ",a.createElement(t.strong,null,"Note"),": Stop when you get a ",a.createElement(t.code,null,"401")," error code in the new tab. If you are not able to proceed, ensure you are using an incognito/private browser window"),"\n",a.createElement(t.img,{src:"https://raw.githubusercontent.com/ibm-build-lab/VAD-VAR-Workshop/main/content//CP4I/images/cert-exception.png",alt:""}),"\n",a.createElement(t.p,null,"4.10 Go back to the previous tab and click ",a.createElement(t.strong,null,"Send")," again."),"\n",a.createElement(t.p,null,"4.11 Now you should see a ",a.createElement(t.strong,null,"Response")," section with Status code ",a.createElement(t.code,null,"200 OK")," and the ",a.createElement(t.strong,null,"Body")," displaying the details of the simulated ",a.createElement(t.em,null,"Dow Jones Industrial Average"),"."),"\n",a.createElement(t.img,{src:"https://raw.githubusercontent.com/ibm-build-lab/VAD-VAR-Workshop/main/content//CP4I/images/response.png",alt:""}),"\n",a.createElement(t.p,null,"4.12 Next you'll get the ",a.createElement(t.em,null,"Client Id")," and ",a.createElement(t.em,null,"Gateway endpoint")," so you can test your API from the TraderLite app. Click on the ",a.createElement(t.strong,null,"Endpoint")," tab."),"\n",a.createElement(t.p,null,"4.13 Copy the value of the ",a.createElement(t.strong,null,"api-gateway-service")," URL and the ",a.createElement(t.strong,null,"Client-Id")," to a local text file so it can be used in the Stock Trader application later (",a.createElement(t.strong,null,"Note:")," this is a shortcut to the regular process of publishing the API and then subscribing to it as a consumer)."),"\n",a.createElement(t.img,{src:"https://raw.githubusercontent.com/ibm-build-lab/VAD-VAR-Workshop/main/content//CP4I/images/endpoint-client-id.png",alt:""}),"\n"),a.createElement(t.section,{className:"heading","data-heading-rank":"2","aria-labelledby":"step-5-install-the-traderlite-app"},a.createElement(t.h2,{id:"step-5-install-the-traderlite-app"},a.createElement(t.a,{href:"#step-5-install-the-traderlite-app"},"Step 5: Install the TraderLite app")),"\n",a.createElement(t.p,null,"5.1 In a separate browser tab go to the OpenShift console URL for the cluster assigned to you by the instructor."),"\n",a.createElement(t.p,null,"5.2 Click on ",a.createElement(t.strong,null,"Projects")," in the left navigation and then click on your ",a.createElement(t.strong,null,a.createElement(t.em,null,"studentnn"))," project in the list"),"\n",a.createElement(t.img,{src:"https://raw.githubusercontent.com/ibm-build-lab/VAD-VAR-Workshop/main/content//CP4I/images/select-traderlite-project.png",alt:""}),"\n",a.createElement(t.p,null,"5.3 Click on ",a.createElement(t.strong,null,"Installed Operators")," (in the ",a.createElement(t.strong,null,"Operators")," section) in the left navigation and then click on the ",a.createElement(t.strong,null,"TraderLite Operator")," in the list."),"\n",a.createElement(t.img,{src:"https://raw.githubusercontent.com/ibm-build-lab/VAD-VAR-Workshop/main/content//CP4I/images/select-traderlite-operator.png",alt:""}),"\n",a.createElement(t.p,null,"5.4 Click the ",a.createElement(t.strong,null,"Create Instance")," to start the installation of the TraderLite app."),"\n",a.createElement(t.img,{src:"https://raw.githubusercontent.com/ibm-build-lab/VAD-VAR-Workshop/main/content//CP4I/images/traderlite-create-instance.png",alt:""}),"\n",a.createElement(t.p,null,"5.5 Name the instance ",a.createElement(t.em,null,"traderlite")),"\n",a.createElement(t.p,null,"5.6 Scroll down the page to the ",a.createElement(t.strong,null,"Stock Quote Microservice")," and replace the ",a.createElement(t.strong,null,"API Connect URL")," and ",a.createElement(t.strong,null,"API Connect ClientId")," with the ",a.createElement(t.strong,null,"api-gateway-service")," URL and the ",a.createElement(t.strong,null,"Client-Id")," you saved in the previous section. Click ",a.createElement(t.strong,null,"Create")),"\n",a.createElement(t.img,{src:"https://raw.githubusercontent.com/ibm-build-lab/VAD-VAR-Workshop/main/content//CP4I/images/traderlite-create-values.png",alt:""}),"\n",a.createElement(t.p,null,"5.7 In the left navigation select ",a.createElement(t.strong,null,"Pods")," (in the ",a.createElement(t.strong,null,"Workloads")," section) and then wait for all the TraderLite pods to have a status of ",a.createElement(t.strong,null,"Running")," and be in the ",a.createElement(t.strong,null,"Ready")," state."),"\n",a.createElement(t.blockquote,null,"\n",a.createElement(t.p,null,a.createElement(t.em,null,"Note: You will know the traderlite-xxxxx pods are in a ready state when the ",a.createElement(t.code,null,"Ready")," column shows ",a.createElement(t.code,null,"1/1"),".")),"\n"),"\n",a.createElement(t.img,{src:"https://raw.githubusercontent.com/ibm-build-lab/VAD-VAR-Workshop/main/content//CP4I/images/traderlite-pods-ready.png",alt:""}),"\n"),a.createElement(t.section,{className:"heading","data-heading-rank":"2","aria-labelledby":"step-6-verify-that-the-trader-lite-app-is-calling-your-api-successfully"},a.createElement(t.h2,{id:"step-6-verify-that-the-trader-lite-app-is-calling-your-api-successfully"},a.createElement(t.a,{href:"#step-6-verify-that-the-trader-lite-app-is-calling-your-api-successfully"},"Step 6: Verify that the Trader Lite app is calling your API successfully")),"\n",a.createElement(t.p,null,"6.1 In your OpenShift console click on ",a.createElement(t.strong,null,"Routes")," (in the ",a.createElement(t.strong,null,"Networking")," section) in the left navigation and then click on the location url next to the url for the ",a.createElement(t.strong,null,"traderlite-tradr")," app (the UI for TraderLite)"),"\n",a.createElement(t.img,{src:"https://raw.githubusercontent.com/ibm-build-lab/VAD-VAR-Workshop/main/content//CP4I/images/traderlite-run-tradr.png",alt:""}),"\n",a.createElement(t.p,null,"6.2 Log in using the username ",a.createElement(t.code,null,"stock")," and the password ",a.createElement(t.code,null,"trader")),"\n",a.createElement(t.img,{src:"https://raw.githubusercontent.com/ibm-build-lab/VAD-VAR-Workshop/main/content//CP4I/images/stock-trader-login.png",alt:""}),"\n",a.createElement(t.p,null,"6.3 If the simulated DJIA summary has data then congratulations! It means that the API you created in API Connect is working!"),"\n",a.createElement(t.img,{src:"https://raw.githubusercontent.com/ibm-build-lab/VAD-VAR-Workshop/main/content//CP4I/images/djia-success.png",alt:""}),"\n"),a.createElement(t.section,{className:"heading","data-heading-rank":"2","aria-labelledby":"summary"},a.createElement(t.h2,{id:"summary"},a.createElement(t.a,{href:"#summary"},"Summary")),"\n",a.createElement(t.p,null,"Congratulations ! You successfully completed the following key steps in this lab:"),"\n",a.createElement(t.ul,null,"\n",a.createElement(t.li,null,"Created an API by importing an OpenAPI definition for an existing REST service."),"\n",a.createElement(t.li,null,"Configured a ClientID/API Key to set up a secure proxy to the existing API."),"\n",a.createElement(t.li,null,"Tested the API in the API Connect developer toolkit."),"\n",a.createElement(t.li,null,"Deployed the Trader Lite app and configured it to use the API you created."),"\n",a.createElement(t.li,null,"Tested the Trader Lite app to make sure it successfully uses your API."),"\n")))}var o=function(e){void 0===e&&(e={});const{wrapper:t}=Object.assign({},(0,l.ah)(),e.components);return t?a.createElement(t,e,a.createElement(r,e)):r(e)},i=n(4184),c=n.n(i),s=n(4690),u=n(1140),m=n(2565),h=n(8531),p=n(3383),d=n(7315);const g=e=>{const{data:{mdx:{tableOfContents:{items:t},frontmatter:{toc:n=!0,title:l,timeToComplete:r,updated:o}}},children:i}=e,s=(0,a.useRef)(null),{0:g}=(0,a.useState)(""),E=(null===n||n)&&t;return a.createElement(a.Fragment,null,a.createElement(u.Z,{timeToComplete:r,updated:o},t[0].title||l||""),a.createElement(h.Z,{className:d.YS},a.createElement("article",{className:c()(d.Y2,!E&&d.ey),ref:s},a.createElement(m.Z,{components:{h1:()=>null}},i)),E&&a.createElement(p.Z,{itemsList:t,maxDepth:2,currSection:g})))},E=e=>{const{location:{pathname:t},data:{mdx:{frontmatter:{title:n},tableOfContents:{items:l}}}}=e;return a.createElement(s.Z,{pathname:t,title:n||l[0].title||void 0})};function b(e){return a.createElement(g,e,a.createElement(o,e))}},2565:function(e,t,n){n.d(t,{Z:function(){return i}});var l=n(7294),a=n(1151),r=n(7563);const o={table:r.y6,a:r.IW,blockquote:r.R4,SubHeader:r.bU,img:r.fb,code:r.dn,QuizAlert:r.SA,Danger:r.b0,Warning:r.v3,CopyText:r.O5};var i=(0,l.memo)((function(e){let{children:t,components:n={}}=e;return l.createElement(a.Zo,{components:{...o,...n}},t)}))},3383:function(e,t,n){n.d(t,{Z:function(){return s}});var l=n(7294),a=n(7500),r=n(4184),o=n.n(r),i=n(6488);const c=function(e,t,n){return void 0===t&&(t=[]),void 0===n&&(n=0),e.forEach((e=>{const{title:l,url:a,items:r}=e;t.splice(t.length,0,{depth:n,title:l,url:a}),r&&r.length>0&&c(r,t,n+1)})),t};var s=e=>{const{itemsList:t}=e,n=(0,l.useMemo)((()=>c(t[0].items||[])),[t]),r=(0,i.Z)("h1[id],h2[id]",{threshold:[0,1],rootMargin:"-48px 0px -90% 0px"});return n.length<1?null:l.createElement("nav",{className:"TableOfContents-module--toc--54d35"},l.createElement("div",{className:"TableOfContents-module--tocStack--90609"},l.createElement("h6",{className:"TableOfContents-module--tocHeader--05956"},l.createElement(a.rU,{to:"#",replace:!0},"On this page")),n.map(((e,t)=>{let{title:n,url:a}=e;return l.createElement("a",{className:o()("TableOfContents-module--link--b292b",r===a.substring(1)&&"TableOfContents-module--activeItem--3869f"),key:t,href:a},n)}))))}},7315:function(e,t,n){n.d(t,{Y2:function(){return l},YS:function(){return r},ey:function(){return a}});var l="{mdx-fields__slug}-module--article--e3d5a",a="{mdx-fields__slug}-module--noToc--82387",r="{mdx-fields__slug}-module--wrapper--58e72"},1151:function(e,t,n){n.d(t,{Zo:function(){return i},ah:function(){return r}});var l=n(7294);const a=l.createContext({});function r(e){const t=l.useContext(a);return l.useMemo((()=>"function"==typeof e?e(t):{...t,...e}),[t,e])}const o={};function i({components:e,children:t,disableParentContext:n}){let i;return i=n?"function"==typeof e?e({}):e||o:r(e),l.createElement(a.Provider,{value:i},t)}}}]);
//# sourceMappingURL=component---src-pages-mdx-fields-slug-tsx-content-file-path-content-cp-4-i-101-md-c58cc86ec698b916a9ff.js.map