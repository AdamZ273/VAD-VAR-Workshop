"use strict";(self.webpackChunkvad_var_site=self.webpackChunkvad_var_site||[]).push([[6538],{8300:function(e,t,n){n.r(t),n.d(t,{Head:function(){return E},default:function(){return f}});var a=n(1151),l=n(7294);function r(e){const t=Object.assign({section:"section",h1:"h1",h2:"h2",a:"a",h3:"h3",p:"p",strong:"strong",code:"code",img:"img",em:"em",ol:"ol",li:"li"},(0,a.ah)(),e.components);return l.createElement(t.section,{className:"heading","data-heading-rank":"1","aria-labelledby":"102-configuration-of-datastage-flow-and-databand-setup"},l.createElement(t.h1,{id:"102-configuration-of-datastage-flow-and-databand-setup"},"102: Configuration of DataStage flow and Databand setup"),"\n",l.createElement(t.section,{className:"heading","data-heading-rank":"2","aria-labelledby":"initial-set-up"},l.createElement(t.h2,{id:"initial-set-up"},l.createElement(t.a,{href:"#initial-set-up"},"Initial set-up")),"\n",l.createElement(t.section,{className:"heading","data-heading-rank":"3","aria-labelledby":"register-for-the-business-partner-databand-demo-environment"},l.createElement(t.h3,{id:"register-for-the-business-partner-databand-demo-environment"},l.createElement(t.a,{href:"#register-for-the-business-partner-databand-demo-environment"},"Register for the Business Partner Databand demo environment")),"\n",l.createElement(t.p,null,l.createElement(t.strong,null,"Note: If you have previously registered with the Business Partner Databand demo environment, you to not need to repeat this step.")," Open a session in your preferred web browser at ",l.createElement(t.a,{href:"https://ibm-bp-demo.databand.ai/"},"https://ibm-bp-demo.databand.ai/")," and click on ",l.createElement(t.strong,null,"Registration"),". Complete the form and click on ",l.createElement(t.strong,null,"Register"),". Provide the e-mail address you used to register in the workshop slack so the workshop team can activate your registration."),"\n"),l.createElement(t.section,{className:"heading","data-heading-rank":"3","aria-labelledby":"create-an-object-storage-service-instance-in-your-ibm-cloud-account"},l.createElement(t.h3,{id:"create-an-object-storage-service-instance-in-your-ibm-cloud-account"},l.createElement(t.a,{href:"#create-an-object-storage-service-instance-in-your-ibm-cloud-account"},"Create an Object Storage service instance in your IBM Cloud account")),"\n",l.createElement(t.p,null,"Follow the ",l.createElement(t.a,{href:"https://cloud.ibm.com/docs/cloud-object-storage?topic=cloud-object-storage-provision#provision-instance"},"service creation instructions")," to configure a ",l.createElement(t.code,null,"lite")," plan instance of IBM Cloud Object storage. If you get a message that ",l.createElement(t.code,null,"lite")," plan instance already exists in the account, you do not need to add another one."),"\n"),l.createElement(t.section,{className:"heading","data-heading-rank":"3","aria-labelledby":"register-access-to-cloud-pak-for-data-as-a-service-in-the-dallas-region"},l.createElement(t.h3,{id:"register-access-to-cloud-pak-for-data-as-a-service-in-the-dallas-region"},l.createElement(t.a,{href:"#register-access-to-cloud-pak-for-data-as-a-service-in-the-dallas-region"},"Register access to Cloud Pak for Data as-a-service in the Dallas region")),"\n",l.createElement(t.p,null,"If you have not previsously registered for an IBM Cloud Pak for Data as a Service account in the ",l.createElement(t.strong,null,"Dallas")," region, ",l.createElement(t.a,{href:"https://dataplatform.cloud.ibm.com/registration/stepone?context=cpdaas&apps=all"},"click this link")," to sign up for one in the ",l.createElement(t.strong,null,"Dallas")," region."),"\n",l.createElement(t.p,null,"After agreeing to terms use the ",l.createElement(t.strong,null,"Log in with your IBMid")," button to complete the registration."),"\n"),l.createElement(t.section,{className:"heading","data-heading-rank":"3","aria-labelledby":"download-the-datastage-flow-source-file"},l.createElement(t.h3,{id:"download-the-datastage-flow-source-file"},l.createElement(t.a,{href:"#download-the-datastage-flow-source-file"},"Download the DataStage flow source file")),"\n",l.createElement(t.p,null,"Download this ",l.createElement(t.a,{href:"https://ibm.seismic.com/Link/Content/DCPVPTFPjbR3B8THb9T8289XBM7j"},"zip file")," and save it for use in Section 1 where you will create a new DataStage flow."),"\n")),l.createElement(t.section,{className:"heading","data-heading-rank":"2","aria-labelledby":"set-up-the-data-integration-flowjob"},l.createElement(t.h2,{id:"set-up-the-data-integration-flowjob"},l.createElement(t.a,{href:"#set-up-the-data-integration-flowjob"},"Set up the Data Integration Flow/Job")),"\n",l.createElement(t.p,null,l.createElement(t.img,{src:"/1686172306263.2461105886/ds-flow.png",alt:"datastage flow"}),"\n",l.createElement(t.strong,null,"Figure A – This labs Data Integration flow")),"\n",l.createElement(t.p,null,l.createElement(t.em,null,"This Next-Gen DataStage flow integrates data from a Db2 Warehouse on Cloud, Postgres Database, and MongoDB instance. This data is transformed via joining tables, filtering the records by State, calculating a level of debt, and ultimately assigning each individual mortgage applicant an appropriate mortgage rate.")),"\n",l.createElement(t.p,null,"To begin, perform the following steps:"),"\n",l.createElement(t.ol,null,"\n",l.createElement(t.li,null,"\n",l.createElement(t.p,null,"If you have not already done so, ",l.createElement(t.a,{href:"https://dataplatform.cloud.ibm.com/"},"Log in to IBM Cloud Pak for Data"),". You will use your personal Cloud Pak for Data as a Service account in the Dallas region to do this lab."),"\n",l.createElement(t.img,{src:"/1686172306223.24631105876/cpd-login.png",alt:"cpd login"}),"\n"),"\n",l.createElement(t.li,null,"\n",l.createElement(t.p,null,"From the Cloud Pak for Data home screen, click ",l.createElement(t.strong,null,"Work with data")," to create a new project."),"\n",l.createElement(t.img,{src:"/1686172306311.2461105897/work-with-data.png",alt:"work with data"}),"\n"),"\n",l.createElement(t.li,null,"\n",l.createElement(t.p,null,"Click the ",l.createElement(t.strong,null,"Create and empty project")," tile."),"\n",l.createElement(t.img,{src:"/1686172306235.24631105880/create-project.png",alt:"create project"}),"\n"),"\n",l.createElement(t.li,null,"\n",l.createElement(t.p,null,"Name the project ",l.createElement(t.strong,null,"Databand_<YOUR_INITIALS>_vest")," like the example shown. Keep the settings as is (you can optionally add a description), and select a object storage instance to use for the project. Then click ",l.createElement(t.strong,null,"Create"),"."),"\n",l.createElement(t.p,null,l.createElement(t.img,{src:"/1686172306279.2461105892/project-settings.png",alt:"project settings"}),"\n",l.createElement(t.strong,null,"Important:")," If you did not provision a Cloud Object Storage Instance in the prerequisites, there will be a link in this page to add one that will take you to the catalog page. Create an instance using the ",l.createElement(t.code,null,"lite")," plan and then refresh the project settings page."),"\n"),"\n",l.createElement(t.li,null,"\n",l.createElement(t.p,null,"Once this project is created, select the ",l.createElement(t.strong,null,"Assets")," tab in the project overview screen and click the blue ",l.createElement(t.strong,null,"New asset")," icon."),"\n",l.createElement(t.img,{src:"/1686172306275.2461105890/new-asset.png",alt:"new asset"}),"\n"),"\n",l.createElement(t.li,null,"\n",l.createElement(t.p,null,"Scroll down to the ",l.createElement(t.strong,null,"Graphical builders")," section, and click on the ",l.createElement(t.strong,null,"DataStage")," tile."),"\n",l.createElement(t.img,{src:"/1686172306263.2461105885/datastage-tile.png",alt:"datastage tile"}),"\n"),"\n",l.createElement(t.li,null,"\n",l.createElement(t.p,null,"Select the ",l.createElement(t.strong,null,"Local file")," tab on the left-hand menu. Either drag and drop, or click ",l.createElement(t.strong,null,"Browse")," and upload the ",l.createElement(t.strong,null,'"Multicloud Data Integration.zip"')," file that you downloaded as a prerequisite to this lab."),"\n",l.createElement(t.img,{src:"/1686172306299.2461105895/upload-file.png",alt:"upload file"}),"\n"),"\n",l.createElement(t.li,null,"\n",l.createElement(t.p,null,"Leave all the settings as-is, and press the blue ",l.createElement(t.strong,null,"Create")," button. Wait a few moments for the import process to complete."),"\n",l.createElement(t.img,{src:"/1686172306231.24631105879/create-flow.png",alt:"create flow"}),"\n",l.createElement(t.p,null,"After this import process completes, you will see three ",l.createElement(t.strong,null,"Data Fabric Trial")," connections, and a single ",l.createElement(t.strong,null,"Multicloud Data Integration")," Parallel Job."),"\n",l.createElement(t.img,{src:"/1686172306267.2461105888/flow-imported.png",alt:"flow imported"}),"\n"),"\n"),"\n"),l.createElement(t.section,{className:"heading","data-heading-rank":"2","aria-labelledby":"sync-datastage-with-databand"},l.createElement(t.h2,{id:"sync-datastage-with-databand"},l.createElement(t.a,{href:"#sync-datastage-with-databand"},"Sync DataStage with Databand")),"\n",l.createElement(t.ol,null,"\n",l.createElement(t.li,null,"\n",l.createElement(t.p,null,"Close the import screen by clicking the x in the top right corner. Open the DataStage flow titled ",l.createElement(t.strong,null,"Multicloud Data Integration")," by clicking on it."),"\n",l.createElement(t.p,null,l.createElement(t.img,{src:"/1686172306279.2461105891/open-flow.png",alt:"open flow"}),"\nYour DataStage flow should look like the one in Figure A (shown below)."),"\n",l.createElement(t.p,null,l.createElement(t.img,{src:"/1686172306263.2461105886/ds-flow.png",alt:"open flow"}),"\nAt this point, your DataStage environment is ready to be integrated with Databand. Open a new web browser tab and go to your ",l.createElement(t.a,{href:"https://cloud.ibm.com/"},"IBM cloud console"),"."),"\n"),"\n",l.createElement(t.li,null,"\n",l.createElement(t.p,null,"After logging in to IBM Cloud, make sure you are in your own account by verifying your account is selected at the top."),"\n",l.createElement(t.img,{src:"/1686172306211.24631105873/check-account.png",alt:"check account"}),"\n"),"\n",l.createElement(t.li,null,"\n",l.createElement(t.p,null,"Create an API key for your cloud account by clicking the ",l.createElement(t.strong,null,"Manage")," dropdown on the top menu bar and selecting ",l.createElement(t.strong,null,"Access (IAM)"),". This API key will be used later to sync your DataStage job with Databand."),"\n",l.createElement(t.img,{src:"/1686172306275.2461105889/ibmc-iam.png",alt:"ibmcloud iam"}),"\n"),"\n",l.createElement(t.li,null,"\n",l.createElement(t.p,null,"On the IAM screen, select the ",l.createElement(t.strong,null,"API keys")," tab on the left-hand menu."),"\n"),"\n",l.createElement(t.li,null,"\n",l.createElement(t.p,null,"Click the blue Create button."),"\n",l.createElement(t.img,{src:"/1686172306227.24631105877/create-apikey.png",alt:"create apikey"}),"\n"),"\n",l.createElement(t.li,null,"\n",l.createElement(t.p,null,"Name your API key ",l.createElement(t.strong,null,"Databand_<YOUR_INITIALS>"),", optionally add a description, and click the blue ",l.createElement(t.strong,null,"Create")," button."),"\n",l.createElement(t.p,null,l.createElement(t.img,{src:"/1686172306231.24631105878/create-apikey2.png",alt:"create apikey"}),"\nYour API Key will be generated. Save this key in a safe place, as you will need it to create your DataStage Syncer in Databand."),"\n",l.createElement(t.p,null,l.createElement(t.strong,null,"IMPORTANT")," – You will not be able to see the API key again. If you exited the screen before saving this key, or forget it, simply delete the key you created and make a new one by repeating Steps 4-6 above."),"\n",l.createElement(t.img,{src:"/1686172306215.24631105875/copy-apikey.png",alt:"copy apikey"}),"\n"),"\n"),"\n"),l.createElement(t.section,{className:"heading","data-heading-rank":"2","aria-labelledby":"getting-started-with-databand"},l.createElement(t.h2,{id:"getting-started-with-databand"},l.createElement(t.a,{href:"#getting-started-with-databand"},"Getting Started with Databand")),"\n",l.createElement(t.ol,null,"\n",l.createElement(t.li,null,"\n",l.createElement(t.p,null,"Open a new browser with the ",l.createElement(t.a,{href:"https://ibm-bp-demo.databand.ai/app/dashboard"},"Databand environment"),". Log in using the credentials you were given after signup."),"\n",l.createElement(t.img,{src:"/1686172306239.24631105881/databand-dashboard.png",alt:"databand dashboard"}),"\n",l.createElement(t.p,null,'We will now create our DataStage Syncer within Databand. A syncer will "sync” or integrate your DataStage environment with your Databand environment.'),"\n"),"\n",l.createElement(t.li,null,"\n",l.createElement(t.p,null,"Select the ",l.createElement(t.strong,null,"Integrations")," tab on the left-hand menu."),"\n"),"\n",l.createElement(t.li,null,"\n",l.createElement(t.p,null,"Click the purple ",l.createElement(t.strong,null,"Add Integration")," button in the top right corner."),"\n",l.createElement(t.img,{src:"/1686172306207.24631105872/add-integration.png",alt:"add integration"}),"\n"),"\n",l.createElement(t.li,null,"\n",l.createElement(t.p,null,"Select the ",l.createElement(t.strong,null,"DataStage")," tile under integration type"),"\n",l.createElement(t.img,{src:"/1686172306247.24631105882/datastage-integration.png",alt:"datastage integration"}),"\n"),"\n",l.createElement(t.li,null,"\n",l.createElement(t.p,null,"Select ",l.createElement(t.strong,null,"Cloud user")," and click ",l.createElement(t.strong,null,"Confirm"),"."),"\n",l.createElement(t.img,{src:"/1686172306211.24631105874/cloud-integration.png",alt:"cloud integration"}),"\n"),"\n",l.createElement(t.li,null,"\n",l.createElement(t.p,null,"Create a unique syncer name (for example, ",l.createElement(t.strong,null,"<YOUR_INITIALS>_datastage_syncer"),") and paste the API key that you saved into the ",l.createElement(t.strong,null,"API key")," field. Then click ",l.createElement(t.strong,null,"Next")),"\n",l.createElement(t.img,{src:"/1686172306259.2461105884/datastage-syncer.png",alt:"datastage syncer"}),"\n"),"\n",l.createElement(t.li,null,"\n",l.createElement(t.p,null,"Select the ",l.createElement(t.strong,null,"<Databand_yourinitials>")," project that you created at the beginning of this lab. Then click ",l.createElement(t.strong,null,"Save"),"."),"\n",l.createElement(t.img,{src:"/1686172306247.24631105883/datastage-project.png",alt:"datastage project"}),"\n"),"\n"),"\n",l.createElement(t.p,null,"Before continuing, it’s important to rename the source for the DataStage project. By default, the source name is the name of the account that owns that DataStage project. This is not very helpful since most people don’t know their account ID off the top of their head."),"\n",l.createElement(t.ol,null,"\n",l.createElement(t.li,null,"\n",l.createElement(t.p,null,"Find your DataStage syncer. Select the ",l.createElement(t.strong,null,"Integrations")," tab in the left-hand menu"),"\n"),"\n",l.createElement(t.li,null,"\n",l.createElement(t.p,null,"Start typing the beginning of your unique syncer name in the ",l.createElement(t.strong,null,"Search")," bar."),"\n"),"\n",l.createElement(t.li,null,"\n",l.createElement(t.p,null,"Click ",l.createElement(t.strong,null,"Edit")," under the ",l.createElement(t.strong,null,"Actions")," column on the right side of your DataStage syncer."),"\n",l.createElement(t.p,null,l.createElement(t.img,{src:"/1686172306263.2461105887/edit-syncer.png",alt:"edit-syncer"}),"\nThis will open the edit pane for your DataStage integration."),"\n"),"\n",l.createElement(t.li,null,"\n",l.createElement(t.p,null,"Click ",l.createElement(t.strong,null,"Next")," to view your available projects."),"\n",l.createElement(t.img,{src:"/1686172306303.2461105896/view-projects.png",alt:"view projects"}),"\n"),"\n",l.createElement(t.li,null,"\n",l.createElement(t.p,null,"If your Databand project is not already selected, select the ",l.createElement(t.strong,null,"checkbox")," to the left of the Databand project source you want to edit."),"\n"),"\n",l.createElement(t.li,null,"\n",l.createElement(t.p,null,"Click the ",l.createElement(t.strong,null,"pencil")," icon to the right of your Databand project to rename it."),"\n",l.createElement(t.img,{src:"/1686172306287.2461105893/rename-source.png",alt:"rename source"}),"\n"),"\n",l.createElement(t.li,null,"\n",l.createElement(t.p,null,"Change the ",l.createElement(t.strong,null,"source")," name to something unique that will help you identify the source later (for example, Alyssa B’s Account)."),"\n"),"\n",l.createElement(t.li,null,"\n",l.createElement(t.p,null,"Click ",l.createElement(t.strong,null,"Save"),"."),"\n",l.createElement(t.img,{src:"/1686172306295.2461105894/save-name.png",alt:"save name"}),"\n"),"\n"),"\n",l.createElement(t.p,null,"We have successfully synced our Cloud Pak for Data as a Service project with the Multicloud Data Integration flow, with Databand, and changed the project source name to a unique identifier."),"\n",l.createElement(t.p,null,"Continue on to the ",l.createElement(t.a,{href:"/databand/102"},"next lab")," to start using Databand to observe the DataStage flow.")))}var o=function(e){void 0===e&&(e={});const{wrapper:t}=Object.assign({},(0,a.ah)(),e.components);return t?l.createElement(t,e,l.createElement(r,e)):r(e)},c=n(4184),i=n.n(c),s=n(4690),u=n(1140),m=n(2565),d=n(8531),g=n(3383),h=n(7315);const p=e=>{const{data:{mdx:{tableOfContents:{items:t},frontmatter:{toc:n=!0,title:a,timeToComplete:r,updated:o}}},children:c}=e,s=(0,l.useRef)(null),{0:p}=(0,l.useState)(""),E=(null===n||n)&&t;return l.createElement(l.Fragment,null,l.createElement(u.Z,{timeToComplete:r,updated:o},t[0].title||a||""),l.createElement(d.Z,{className:h.YS},l.createElement("article",{className:i()(h.Y2,!E&&h.ey),ref:s},l.createElement(m.Z,{components:{h1:()=>null}},c)),E&&l.createElement(g.Z,{itemsList:t,maxDepth:2,currSection:p})))},E=e=>{const{location:{pathname:t},data:{mdx:{frontmatter:{title:n},tableOfContents:{items:a}}}}=e;return l.createElement(s.Z,{pathname:t,title:n||a[0].title||void 0})};function f(e){return l.createElement(p,e,l.createElement(o,e))}},2565:function(e,t,n){n.d(t,{Z:function(){return c}});var a=n(7294),l=n(1151),r=n(7563);const o={table:r.y6,a:r.IW,blockquote:r.R4,SubHeader:r.bU,img:r.fb,code:r.dn,QuizAlert:r.SA,Danger:r.b0,Warning:r.v3,CopyText:r.O5};var c=(0,a.memo)((function(e){let{children:t,components:n={}}=e;return a.createElement(l.Zo,{components:{...o,...n}},t)}))},3383:function(e,t,n){n.d(t,{Z:function(){return s}});var a=n(7294),l=n(7500),r=n(4184),o=n.n(r),c=n(6488);const i=function(e,t,n){return void 0===t&&(t=[]),void 0===n&&(n=0),e.forEach((e=>{const{title:a,url:l,items:r}=e;t.splice(t.length,0,{depth:n,title:a,url:l}),r&&r.length>0&&i(r,t,n+1)})),t};var s=e=>{const{itemsList:t}=e,n=(0,a.useMemo)((()=>i(t[0].items||[])),[t]),r=(0,c.Z)("h1[id],h2[id]",{threshold:[0,1],rootMargin:"-48px 0px -90% 0px"});return n.length<1?null:a.createElement("nav",{className:"TableOfContents-module--toc--54d35"},a.createElement("div",{className:"TableOfContents-module--tocStack--90609"},a.createElement("h6",{className:"TableOfContents-module--tocHeader--05956"},a.createElement(l.rU,{to:"#",replace:!0},"On this page")),n.map(((e,t)=>{let{title:n,url:l}=e;return a.createElement("a",{className:o()("TableOfContents-module--link--b292b",r===l.substring(1)&&"TableOfContents-module--activeItem--3869f"),key:t,href:l},n)}))))}},7315:function(e,t,n){n.d(t,{Y2:function(){return a},YS:function(){return r},ey:function(){return l}});var a="{mdx-fields__slug}-module--article--e3d5a",l="{mdx-fields__slug}-module--noToc--82387",r="{mdx-fields__slug}-module--wrapper--58e72"},1151:function(e,t,n){n.d(t,{Zo:function(){return c},ah:function(){return r}});var a=n(7294);const l=a.createContext({});function r(e){const t=a.useContext(l);return a.useMemo((()=>"function"==typeof e?e(t):{...t,...e}),[t,e])}const o={};function c({components:e,children:t,disableParentContext:n}){let c;return c=n?"function"==typeof e?e({}):e||o:r(e),a.createElement(l.Provider,{value:c},t)}}}]);
//# sourceMappingURL=component---src-pages-mdx-fields-slug-tsx-content-file-path-content-databand-102-md-8dccb4c237c6a1aa6135.js.map