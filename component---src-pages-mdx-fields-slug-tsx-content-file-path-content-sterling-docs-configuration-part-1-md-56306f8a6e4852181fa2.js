"use strict";(self.webpackChunkvad_var_site=self.webpackChunkvad_var_site||[]).push([[5795],{739:function(e,t,n){n.r(t),n.d(t,{Head:function(){return d},default:function(){return h}});var l=n(1151),r=n(7294);function a(e){const t=Object.assign({section:"section",h1:"h1",p:"p",strong:"strong",h2:"h2",a:"a",ol:"ol",li:"li",img:"img",blockquote:"blockquote"},(0,l.ah)(),e.components),{QuizAlert:n}=t;return n||function(e,t){throw new Error("Expected "+(t?"component":"object")+" `"+e+"` to be defined: you likely forgot to import, pass, or provide it.")}("QuizAlert",!0),r.createElement(t.section,{className:"heading","data-heading-rank":"1","aria-labelledby":"b2bi-configuration-part-1"},r.createElement(t.h1,{id:"b2bi-configuration-part-1"},"B2Bi Configuration Part 1"),"\n",r.createElement(t.p,null,"In this chapter, learn how to configure a Secure File Transfer Protocol (SFTP) adapter using the containerized B2Bi deployment."),"\n",r.createElement(t.p,null,":red_circle: ",r.createElement(t.strong,null,"PLEASE NOTE THAT THIS FIRST LAB WILL BE LEAD AND COMPLETED BY THE INSTRUCTOR ONLY")," :red_circle:"),"\n",r.createElement(t.p,null,"This will be a group exercise to complete B2Bi Configuration Part 1 since there is only 1 SSH Host identity and 1 SFTP Server adapter needed for the full workshop. However, you may follow along with the steps shown as they are performed by the workshop leader. When repeating this setup for a client demonstration on your own, complete both B2Bi Configuration Part 1 ",r.createElement(t.strong,null,"and")," B2Bi Configuration Part 2."),"\n",r.createElement(t.section,{className:"heading","data-heading-rank":"2","aria-labelledby":"open-the-b2bi-dashboard"},r.createElement(t.h2,{id:"open-the-b2bi-dashboard"},r.createElement(t.a,{href:"#open-the-b2bi-dashboard"},"Open the B2Bi dashboard")),"\n",r.createElement(t.p,null,"The B2Bi dashboard runs as an application on Red Hat OpenShift. These steps will guide you in the OpenShift console to find and launch the B2Bi dashboard from the OpenShift Route."),"\n",r.createElement(t.ol,null,"\n",r.createElement(t.li,null,"\n",r.createElement(t.p,null,"In the OpenShift web console, click ",r.createElement(t.strong,null,"Routes")," under the ",r.createElement(t.strong,null,"Network")," section in left-hand panel."),"\n",r.createElement(t.img,{src:"/1684433760581.3711088986/OSOverviewToRoutes.png",alt:"image"}),"\n"),"\n",r.createElement(t.li,null,"\n",r.createElement(t.p,null,"Click the ",r.createElement(t.strong,null,"All Projects")," pull-down menu and click the ",r.createElement(t.strong,null,"b2bi")," project."),"\n",r.createElement(t.img,{src:"/1684433760585.3711088990/OSRoutesMenu.png",alt:"image"}),"\n",r.createElement(n,{text:"Several BP quiz questions will come from the OpenShift web console. When taking the BP quiz make sure the environment is still active and keep this demonstration script open."}),"\n"),"\n",r.createElement(t.li,null,"\n",r.createElement(t.p,null,"Notice all the routes that are currently defined in the b2bi Project, there are 15 of them"),"\n",r.createElement(t.img,{src:"/1684433760577.3711088979/OSB2BiAllRoutes.png",alt:"image"}),"\n"),"\n",r.createElement(t.li,null,"\n",r.createElement(t.p,null,"To start the setup of the SFTP adapter, launch the IBM Sterling B2Bi dashboard by clicking on the route for the ",r.createElement(t.strong,null,"sterling-fg-b2bi-asi-internal-route-dashboard")," route in the ",r.createElement(t.strong,null,"Location")," column. Do not click the Route name, rather click the Route link in the ",r.createElement(t.strong,null,"Location")," column of the table."),"\n",r.createElement(t.img,{src:"/1684433760577.3711088980/OSB2BiDashboardRoute.png",alt:"image"}),"\n",r.createElement(t.blockquote,null,"\n",r.createElement(t.p,null,"As this is a new install, in this demonstration simple adminstrative user ids and passwords will be used. To keep things simple in this demonstration, all passwords will be set to ",r.createElement(t.strong,null,"password#"),". Not secure, but this will be a short lived demonstration environment."),"\n"),"\n"),"\n",r.createElement(t.li,null,"\n",r.createElement(t.p,null,"Enter ",r.createElement(t.strong,null,"admin")," in the ",r.createElement(t.strong,null,"User ID")," field and ",r.createElement(t.strong,null,"password#")," in the ",r.createElement(t.strong,null,"Password")," field, and then click ",r.createElement(t.strong,null,"Sign In"),"."),"\n",r.createElement(t.img,{src:"/1684433760469.36961088790/B2BiAdminLogin.png",alt:"image"}),"\n"),"\n"),"\n"),r.createElement(t.section,{className:"heading","data-heading-rank":"2","aria-labelledby":"create-a-ssh-host-identity-key"},r.createElement(t.h2,{id:"create-a-ssh-host-identity-key"},r.createElement(t.a,{href:"#create-a-ssh-host-identity-key"},"Create a SSH Host Identity key")),"\n",r.createElement(t.p,null,"First, a ",r.createElement(t.strong,null,"SSH Host Identity")," needs to be created. The Host Identity Key is a Private/Public key pair used to identify the Application SFTP Server to remote clients. Note, for this demonstration, default values will be used where possible, but production deployments may use other values depending on client requirements."),"\n",r.createElement(n,{text:"Several BP quiz questions will come from the B2Bi dashboard. When taking the BP quiz make sure the environment is still active and keep this demonstration script open."}),"\n",r.createElement(t.ol,null,"\n",r.createElement(t.li,null,"\n",r.createElement(t.p,null,"Click the ",r.createElement(t.strong,null,"Deployment")," menu item in left-hand menu bar."),"\n",r.createElement(t.img,{src:"/1684433760473.36961088800/B2BiMainMenuToDeployment.png",alt:"image"}),"\n"),"\n",r.createElement(t.li,null,"\n",r.createElement(t.p,null,"Click the ",r.createElement(t.strong,null,"SSH Host Identity Key")," menu item in the left-hand menu bar."),"\n",r.createElement(t.img,{src:"/1684433760473.36961088797/B2BiMainMenuDeploymentToHIK.png",alt:"image"}),"\n"),"\n",r.createElement(t.li,null,"\n",r.createElement(t.p,null,"Click the ",r.createElement(t.strong,null,"Go!")," button in the ",r.createElement(t.strong,null,"Create: New Host Identity Key")," box."),"\n",r.createElement(t.img,{src:"/1684433760469.36961088791/B2BiHIK-CreatePage.png",alt:"image"}),"\n"),"\n",r.createElement(t.li,null,"\n",r.createElement(t.p,null,"Enter ",r.createElement(t.strong,null,"demo")," in the ",r.createElement(t.strong,null,"Host Name:"),' field of the "New Host Identity Key" form and then click the ',r.createElement(t.strong,null,"Next")," button."),"\n",r.createElement(t.img,{src:"/1684433760473.36961088793/B2BiHIK-HostName.png",alt:"image"}),"\n"),"\n",r.createElement(t.li,null,"\n",r.createElement(t.p,null,"Click ",r.createElement(t.strong,null,"Finish"),"."),"\n",r.createElement(t.img,{src:"/1684433760469.36961088792/B2BiHIK-Finish.png",alt:"image"}),"\n"),"\n",r.createElement(t.li,null,"\n",r.createElement(t.p,null,"Click ",r.createElement(t.strong,null,"OK")),"\n",r.createElement(t.img,{src:"/1684433760473.36961088794/B2BiHIKCreated.png",alt:"image"}),"\n"),"\n",r.createElement(t.li,null,"\n",r.createElement(t.p,null,"Wait until the completed message is received and the click the ",r.createElement(t.strong,null,"Return")," button."),"\n",r.createElement(t.img,{src:"/1684433760473.36961088795/B2BiHIKCreatedCompleted.png",alt:"image"}),"\n"),"\n"),"\n"),r.createElement(t.section,{className:"heading","data-heading-rank":"2","aria-labelledby":"create-a-sftp-adapter"},r.createElement(t.h2,{id:"create-a-sftp-adapter"},r.createElement(t.a,{href:"#create-a-sftp-adapter"},"Create a SFTP adapter")),"\n",r.createElement(t.p,null,"Next, an SFTP adapter must be created which will utilize the OpenShift service port for B2Bi."),"\n",r.createElement(t.ol,null,"\n",r.createElement(t.li,null,"\n",r.createElement(t.p,null,"Click the ",r.createElement(t.strong,null,"Services")," menu item under ",r.createElement(t.strong,null,"Deployment")," in the left-hand menu bar."),"\n",r.createElement(t.img,{src:"/1684433760473.36961088798/B2BiMainMenuDeploymentToServices.png",alt:"image"}),"\n"),"\n",r.createElement(t.li,null,"\n",r.createElement(t.p,null,"Click the ",r.createElement(t.strong,null,"Configuration")," menu item under ",r.createElement(t.strong,null,"Services"),"."),"\n",r.createElement(t.img,{src:"/1684433760473.36961088799/B2BiMainMenuServicesToConfiguration.png",alt:"image"}),"\n"),"\n",r.createElement(t.li,null,"\n",r.createElement(t.p,null,"Enter ",r.createElement(t.strong,null,"sftp")," in the ",r.createElement(t.strong,null,"Service Name")," field and click the ",r.createElement(t.strong,null,"Go!")," button in the ",r.createElement(t.strong,null,"Search")," box."),"\n",r.createElement(t.img,{src:"/1684433760481.36991088815/B2BiServicesConfiguratonForm.png",alt:"image"}),"\n"),"\n",r.createElement(t.li,null,"\n",r.createElement(t.p,null,"Locate the ",r.createElement(t.strong,null,"SFTP Server Adapter")," entry in the table and click the ",r.createElement(t.strong,null,"edit")," button."),"\n",r.createElement(t.img,{src:"/1684433760481.36991088814/B2BiServicesConfigurationSearchResults.png",alt:"image"}),"\n"),"\n",r.createElement(t.li,null,"\n",r.createElement(t.p,null,"Review the default settings and click ",r.createElement(t.strong,null,"Next"),"."),"\n",r.createElement(t.img,{src:"/1684433760477.36991088803/B2BiSFTPAdapterName1.png",alt:"image"}),"\n"),"\n",r.createElement(t.li,null,"\n",r.createElement(t.p,null,"Review the settings on the ",r.createElement(t.strong,null,"SFTP Server Adapter: Configuration")," form."),"\n",r.createElement(t.img,{src:"/1684433760477.36991088808/B2BiSFTPDefaultSettings1.png",alt:"image"}),"\n",r.createElement(t.p,null,"The default ",r.createElement(t.strong,null,"SFTP Server Listen Port")," must be changed to the B2Bi service port configured in OpenShift."),"\n"),"\n",r.createElement(t.li,null,"\n",r.createElement(t.p,null,"Switch back to the OpenShift web console browser window or tab and click ",r.createElement(t.strong,null,"Services")," under the ",r.createElement(t.strong,null,"Networking")," in the left-hand menu bar."),"\n",r.createElement(t.img,{src:"/1684433760593.3711089004/OpenShiftRoutesPageToServices.png",alt:"image"}),"\n"),"\n",r.createElement(t.li,null,"\n",r.createElement(t.p,null,"Find and click the ",r.createElement(t.strong,null,"sterling-fg-b2bi-asi-backend-svc")," link."),"\n",r.createElement(t.img,{src:"/1684433760585.3711088991/OSServicesASI.png",alt:"image"}),"\n"),"\n",r.createElement(t.li,null,"\n",r.createElement(t.p,null,"Locate and copy the ",r.createElement(t.strong,null,"Node Port")," number for ",r.createElement(t.strong,null,"adapters-1")," in the ",r.createElement(t.strong,null,"Service port mapping")," table."),"\n",r.createElement(t.img,{src:"/1684433760585.3711088992/OSServicesASIOverview-NodePort.png",alt:"image"}),"\n"),"\n",r.createElement(t.li,null,"\n",r.createElement(t.p,null,"Record the ",r.createElement(t.strong,null,"Node Port")," number, it will be used several times during this demonstration."),"\n"),"\n",r.createElement(t.li,null,"\n",r.createElement(t.p,null,"Switch back to the ",r.createElement(t.strong,null,"B2Bi Dashboard")," browser window or tab."),"\n",r.createElement(t.img,{src:"/1684433760477.36991088808/B2BiSFTPDefaultSettings1.png",alt:"image"}),"\n"),"\n",r.createElement(t.li,null,"\n",r.createElement(t.p,null,"Enter or copy the recorded ",r.createElement(t.strong,null,"Service Port")," number into the ",r.createElement(t.strong,null,"SFTP Server Listen Port")," entry field and click ",r.createElement(t.strong,null,"Next"),"."),"\n",r.createElement(t.img,{src:"/1684433760477.36991088809/B2BiSFTPDefaultSettings2.png",alt:"image"}),"\n"),"\n",r.createElement(t.li,null,"\n",r.createElement(t.p,null,"Review the default settings on the ",r.createElement(t.strong,null,"SFTP Server Adapter: Configuration: Document Storage")," page and click ",r.createElement(t.strong,null,"Next"),"."),"\n",r.createElement(t.img,{src:"/1684433760481.36991088813/B2BiSFTPStroage.png",alt:"image"}),"\n"),"\n",r.createElement(t.li,null,"\n",r.createElement(t.p,null,"Review the default settings on the ",r.createElement(t.strong,null,"SFTP Server Adapter: Add Policies")," page and click ",r.createElement(t.strong,null,"Next"),"."),"\n",r.createElement(t.img,{src:"/1684433760473.36961088801/B2BiSFPPolicies.png",alt:"image"}),"\n"),"\n",r.createElement(t.li,null,"\n",r.createElement(t.p,null,"Review the default settings on the ",r.createElement(t.strong,null,"SFTP Server Adapter: Configuration")," page and click ",r.createElement(t.strong,null,"Next"),"."),"\n",r.createElement(t.img,{src:"/1684433760477.36991088806/B2BiSFTPConfigPage.png",alt:"image"}),"\n"),"\n",r.createElement(t.li,null,"\n",r.createElement(t.p,null,"Review the default settings on the ",r.createElement(t.strong,null,"SFTP Server Adapter: Extractability")," page and click ",r.createElement(t.strong,null,"Next"),"."),"\n",r.createElement(t.img,{src:"/1684433760477.36991088810/B2BiSFTPExtractability.png",alt:"image"}),"\n"),"\n",r.createElement(t.li,null,"\n",r.createElement(t.p,null,"Review the ",r.createElement(t.strong,null,"SFTP Server Adapter: Confirmation")," page and click ",r.createElement(t.strong,null,"Finish"),"."),"\n",r.createElement(t.img,{src:"/1684433760477.36991088811/B2BiSFTPFinish.png",alt:"image"}),"\n"),"\n",r.createElement(t.li,null,"\n",r.createElement(t.p,null,"Click ",r.createElement(t.strong,null,"Return")," after the new SFTP adapter has been created."),"\n",r.createElement(t.img,{src:"/1684433760477.36991088807/B2BiSFTPConfirmation.png",alt:"image"}),"\n"),"\n",r.createElement(t.li,null,"\n",r.createElement(t.p,null,"Click the ",r.createElement(t.strong,null,"checkbox")," next to the ",r.createElement(t.strong,null,"SFTP Server Adapter")," to start the adapter."),"\n",r.createElement(t.img,{src:"/1684433760481.36991088812/B2BiSFTPStartAdapter.png",alt:"image"}),"\n"),"\n",r.createElement(t.li,null,"\n",r.createElement(t.p,null,"Click the ",r.createElement(t.img,{src:"/1684433760505.371088854/BangIcon.png",alt:"image"})," icon next to the ",r.createElement(t.strong,null,"SFTP Server Adapter"),"."),"\n",r.createElement(t.img,{src:"/1684433760473.36961088802/B2BiSFTPAdapterEnabled.png",alt:"image"}),"\n"),"\n",r.createElement(t.li,null,"\n",r.createElement(t.p,null,"Verify the ",r.createElement(t.strong,null,"SFTP Server Adapter")," is ",r.createElement(t.strong,null,"Running"),"."),"\n",r.createElement(t.img,{src:"/1684433760477.36991088804/B2BiSFTPAdapterStatus.png",alt:"image"}),"\n"),"\n",r.createElement(t.li,null,"\n",r.createElement(t.p,null,"Close the ",r.createElement(t.strong,null,"Adapter Information")," pop-up window."),"\n",r.createElement(t.img,{src:"/1684433760477.36991088805/B2BiSFTPAdapterStatus2.png",alt:"image"}),"\n"),"\n",r.createElement(t.li,null,"\n",r.createElement(t.p,null,"Click the ",r.createElement(t.strong,null,"Logout")," link to log out of the ",r.createElement(t.strong,null,"B2Bi dashboard"),"."),"\n",r.createElement(t.img,{src:"/1684433760473.36961088796/B2BiLogout.png",alt:"image"}),"\n"),"\n"),"\n",r.createElement(t.p,null,"Now that the SFTP adapter is running, it time to move to the next step in the configuration of B2Bi.")))}var i=function(e){void 0===e&&(e={});const{wrapper:t}=Object.assign({},(0,l.ah)(),e.components);return t?r.createElement(t,e,r.createElement(a,e)):a(e)};var c=n(7315),o=n(3383),m=n(4690),s=n(8059),u=n(1140),g=n(8531);const E=e=>{const{data:{mdx:{tableOfContents:{items:t},frontmatter:{toc:n=!0,title:l,timeToComplete:a,updated:i}}},children:m}=e,E=(0,r.useRef)(null),{0:d,1:h}=(0,r.useState)("");(0,r.useEffect)((()=>{if(!E.current)return;const e=E.current.querySelectorAll("h2,h3,h4,h5"),t=new IntersectionObserver((e=>{e.forEach((e=>{e.isIntersecting&&h(e.target.id)}))}),{rootMargin:"0px 0px -95% 0px",threshold:0});return e.forEach((e=>{t.observe(e)})),()=>t.disconnect()}),[]);const p=(null===n||n)&&t;return r.createElement(r.Fragment,null,r.createElement(u.Z,{timeToComplete:a,updated:i},t[0].title||l||""),r.createElement(g.Z,{className:c.I},r.createElement("article",{className:c.Y,ref:E},r.createElement(s.Z,{components:{h1:()=>null}},m)),p&&r.createElement(o.Z,{itemsList:t,maxDepth:2,currSection:d})))},d=e=>{const{location:{pathname:t},data:{mdx:{frontmatter:{title:n},tableOfContents:{items:l}}}}=e;return r.createElement(m.Z,{pathname:t,title:n||l[0].title||void 0})};function h(e){return r.createElement(E,e,r.createElement(i,e))}}}]);
//# sourceMappingURL=component---src-pages-mdx-fields-slug-tsx-content-file-path-content-sterling-docs-configuration-part-1-md-56306f8a6e4852181fa2.js.map