"use strict";(self.webpackChunkvad_var_site=self.webpackChunkvad_var_site||[]).push([[1174],{3581:function(e,t,n){n.r(t),n.d(t,{Head:function(){return f},default:function(){return E}});var l=n(1151),r=n(7294);function a(e){const t=Object.assign({section:"section",h1:"h1",p:"p",a:"a",strong:"strong",h2:"h2",ol:"ol",li:"li",img:"img",blockquote:"blockquote",ul:"ul"},(0,l.ah)(),e.components),{QuizAlert:n}=t;return n||function(e,t){throw new Error("Expected "+(t?"component":"object")+" `"+e+"` to be defined: you likely forgot to import, pass, or provide it.")}("QuizAlert",!0),r.createElement(t.section,{className:"heading","data-heading-rank":"1","aria-labelledby":"client-demonstration"},r.createElement(t.h1,{id:"client-demonstration"},"Client Demonstration"),"\n",r.createElement(t.p,null,"It is now time for the partners to transfer files between each other using the newly created B2Bi SFTP adapter, but first one last setup step to make the demonstration more visually exciting."),"\n",r.createElement(t.p,null,"In this demonstration, the FileZilla application will be used. FileZilla is a free and open-source, cross-platform FTP application, consisting of FileZilla Client and FileZilla Server. Clients are available for Windows, Linux, and macOS. Learn more about FileZilla ",r.createElement(t.a,{href:"https://filezilla-project.org/"},"here"),"."),"\n",r.createElement(t.p,null,"If users do not already have FileZilla installed, do so now. IBM employees can download FileZilla from the Mac@IBM store. For Business Partners and IBMers on Microsoft Windows, the download links are available at the link above."),"\n",r.createElement(t.p,null,"If users are unable to use FileZilla, it is recommended to use the IBM Sterling File Gateway clients for both users in the scenario that follows. To avoid having to log in and out between user actions, it is recommended to use two different browsers (e.g. Chrome and Firefox) for each user or private/incognito windows for each user when accessing the IBM Sterling File Gateways."),"\n",r.createElement(t.p,null,"When doing a client demonstration, it is recommended to split the FileZilla and browser windows on the same screen to avoid switching back and forth during the demonstration."),"\n",r.createElement(t.p,null,"For this scenario, ",r.createElement(t.strong,null,"partner1")," will use the IBM Sterling File Gateway clients, and ",r.createElement(t.strong,null,"partner2")," will use FileZilla."),"\n",r.createElement(t.p,null,"As an introduction, watch this brief video of the steps to be performed."),"\n",r.createElement(t.section,{className:"heading","data-heading-rank":"2","aria-labelledby":"configure-filezilla-for-partner2"},r.createElement(t.h2,{id:"configure-filezilla-for-partner2"},r.createElement(t.a,{href:"#configure-filezilla-for-partner2"},"Configure FileZilla for partner2")),"\n",r.createElement(t.p,null,"To configure FileZilla for ",r.createElement(t.strong,null,"partner2")," both the File Gateway route address and port number will be needed."),"\n",r.createElement(t.ol,null,"\n",r.createElement(t.li,null,"\n",r.createElement(t.p,null,"Return to the OpenShift web console and click on the ",r.createElement(t.strong,null,"sterling-fg-b2bi-asi-internal-route")," route on the ",r.createElement(t.strong,null,"Routes")," page."),"\n",r.createElement(t.img,{src:"/1686836029992.2969518809/OS_InternalRoute1.png",alt:"image"}),"\n"),"\n",r.createElement(t.li,null,"\n",r.createElement(t.p,null,"Select the ",r.createElement(t.strong,null,"Host")," field, right click, and click ",r.createElement(t.strong,null,"Copy"),"."),"\n",r.createElement(t.p,null,"Note, the example below was captured using Firefox on MacOS. Others browser menus options may be labeled differently."),"\n",r.createElement(t.img,{src:"/1686836029992.2969518810/OS_InternalRoute2.png",alt:"image"}),"\n"),"\n",r.createElement(t.li,null,"\n",r.createElement(t.p,null,"Open the FileZilla application on local computer."),"\n",r.createElement(t.img,{src:"/1686836029932.2932518745/FileZilla.png",alt:"image"}),"\n"),"\n",r.createElement(t.li,null,"\n",r.createElement(t.p,null,"Click the ",r.createElement(t.strong,null,"FileZilla Site Manager")," ",r.createElement(t.img,{src:"/1686836029928.293518735/FZSiteManagerIcon.png",alt:"image"})," icon."),"\n",r.createElement(t.img,{src:"/1686836029932.2932518746/FileZillaSiteManager.png",alt:"image"}),"\n"),"\n",r.createElement(t.li,null,"\n",r.createElement(t.p,null,"Click the ",r.createElement(t.strong,null,"New site")," button."),"\n",r.createElement(t.img,{src:"/1686836029928.293518737/FZ_NewSiteButton.png",alt:"image"}),"\n"),"\n",r.createElement(t.li,null,"\n",r.createElement(t.p,null,"Enter ",r.createElement(t.strong,null,"B2BGateway")," for the ",r.createElement(t.strong,null,"New Site")," name and press enter."),"\n",r.createElement(t.img,{src:"/1686836029928.293518738/FZ_NewSiteName.png",alt:"image"}),"\n"),"\n",r.createElement(t.li,null,"\n",r.createElement(t.p,null,"Select ",r.createElement(t.strong,null,"SFTP - Secure File Transfer Protocol")," on the ",r.createElement(t.strong,null,"Protocol")," pull-down menu."),"\n",r.createElement(t.img,{src:"/1686836029928.293518741/FZ_NewSiteProtocol.png",alt:"image"}),"\n"),"\n",r.createElement(t.li,null,"\n",r.createElement(t.p,null,"Paste the ",r.createElement(t.strong,null,"hostname")," copied from the OpenShift Route in step 2 into the ",r.createElement(t.strong,null,"Host")," field."),"\n",r.createElement(t.img,{src:"/1686836029928.293518739/FZ_NewSitePasteHost.png",alt:"image"}),"\n"),"\n",r.createElement(t.li,null,"\n",r.createElement(t.p,null,"Enter the ",r.createElement(t.strong,null,"port number")," of the ",r.createElement(t.strong,null,"sterling-fg-b2bi-asi-backend-svc")," service in the ",r.createElement(t.strong,null,"Port")," field."),"\n",r.createElement(t.img,{src:"/1686836029928.293518740/FZ_NewSitePort.png",alt:"image"}),"\n",r.createElement(t.blockquote,null,"\n",r.createElement(t.p,null,'"Don\'t remember the port number?" The port number can be found in the details of the ',r.createElement(t.strong,null,"sterling-fg-b2bi-asi-backend-svc")," service (under Networking -> Services) in the OpenShift web console - use ",r.createElement(t.strong,null,"adapters-1's")," ",r.createElement(t.strong,null,"Node port"),"."),"\n"),"\n"),"\n",r.createElement(t.li,null,"\n",r.createElement(t.p,null,"Enter ",r.createElement(t.strong,null,"bb-partner2")," in the ",r.createElement(t.strong,null,"User")," field and ",r.createElement(t.strong,null,"password")," in the ",r.createElement(t.strong,null,"Password")," field and click the ",r.createElement(t.strong,null,"Connect")," button."),"\n",r.createElement(t.img,{src:"/1686836029900.2915518659/BB_FZ_NewSiteUserPassword.png",alt:"image"}),"\n",r.createElement(t.blockquote,null,"\n",r.createElement(t.p,null,"If you have told FileZilla not to save passwords, you will see a warning about the login process being changed from 'Normal' to 'Ask for password'. This is ok and you will just be prompted for the password for ",r.createElement(t.strong,null,"bb-partner2")," when connecting to the SFTP server."),"\n"),"\n"),"\n",r.createElement(t.li,null,"\n",r.createElement(t.p,null,"Check the ",r.createElement(t.strong,null,"Always trust this host, add this key to cache")," checkbox and click ",r.createElement(t.strong,null,"OK")," on the ",r.createElement(t.strong,null,"Unknown host key")," pop-up window."),"\n",r.createElement(t.img,{src:"/1686836029932.2932518743/FZ_UKnknownHostKey.png",alt:"image"}),"\n"),"\n",r.createElement(t.li,null,"\n",r.createElement(t.p,null,"Notice the connection is established and the ",r.createElement(t.strong,null,"Remote site")," shows no files."),"\n",r.createElement(t.img,{src:"/1686836029928.293518736/FZ_Connected.png",alt:"image"}),"\n"),"\n",r.createElement(t.li,null,"\n",r.createElement(t.p,null,"At this time, it is recommended to have both FileZilla and the OpenShift web console both visible at the same time (either split on a single screen or using multiple monitors)."),"\n",r.createElement(t.img,{src:"/1686836029992.2969518808/OS_FZ_splitScreen.png",alt:"image"}),"\n"),"\n",r.createElement(t.li,null,"\n",r.createElement(t.p,null,"Create or download the 2 sample files that will be transferred between partner1 and partner2. Since the templates created earlier allow for any file names to be transferred it does not matter what files are used. It is suggested to use small files so the transfers happen quickly. Feel free to download these two sample invoice files. In most browsers, select the link names below, right click on the links, and click ",r.createElement(t.strong,null,"Save link as")," to the local Downloads directory."),"\n",r.createElement(t.ul,null,"\n",r.createElement(t.li,null,"\n",r.createElement(t.p,null,r.createElement(t.a,{href:"https://raw.githubusercontent.com/IBM/SalesEnablement-SterlingDataExchange-L3/main/tools/SampleInvoice1.xml"},"SampleInvoice1.xml")),"\n"),"\n",r.createElement(t.li,null,"\n",r.createElement(t.p,null,r.createElement(t.a,{href:"https://raw.githubusercontent.com/IBM/SalesEnablement-SterlingDataExchange-L3/main/tools/SampleInvoice2.xml"},"SampleInvoice2.xml")),"\n"),"\n"),"\n"),"\n"),"\n"),r.createElement(t.section,{className:"heading","data-heading-rank":"2","aria-labelledby":"transfer-a-file-from-partner1-to-partner2-using-the-ibm-sterling-my-file-gateway-20"},r.createElement(t.h2,{id:"transfer-a-file-from-partner1-to-partner2-using-the-ibm-sterling-my-file-gateway-20"},r.createElement(t.a,{href:"#transfer-a-file-from-partner1-to-partner2-using-the-ibm-sterling-my-file-gateway-20"},"Transfer a file from partner1 to partner2 using the IBM Sterling My File Gateway 2.0")),"\n",r.createElement(t.ol,null,"\n",r.createElement(t.li,null,"\n",r.createElement(t.p,null,"In the OpenShift web console click the link to open the link to the ",r.createElement(t.strong,null,"sterling-fg-b2bi-asi-internal-route-myfg")," route."),"\n",r.createElement(t.img,{src:"/1686836029992.2969518811/OS_Route-MyFG.png",alt:"image"}),"\n"),"\n",r.createElement(t.li,null,"\n",r.createElement(t.p,null,"Enter ",r.createElement(t.strong,null,"bb-partner1")," in the ",r.createElement(t.strong,null,"User name")," field, ",r.createElement(t.strong,null,"password")," in the ",r.createElement(t.strong,null,"Password")," field, and then click ",r.createElement(t.strong,null,"Log in"),"."),"\n",r.createElement(t.img,{src:"/1686836029904.2917518665/BB_MyFG_login.png",alt:"image"}),"\n"),"\n",r.createElement(t.li,null,"\n",r.createElement(t.p,null,"Click the hamburger menu icon ",r.createElement(t.img,{src:"/1686836029972.2957518783/MyFG_HamburgerIcon.png",alt:"image"})," at top left and click ",r.createElement(t.strong,null,"Uploads"),"."),"\n",r.createElement(t.img,{src:"/1686836029976.296518787/MyFG_UploadsMenu.png",alt:"image"}),"\n"),"\n",r.createElement(t.li,null,"\n",r.createElement(t.p,null,"Click the ",r.createElement(t.strong,null,"/")," directory in left-hand panel."),"\n",r.createElement(t.img,{src:"/1686836029972.2957518779/MyFG_DirectorySelect.png",alt:"image"}),"\n"),"\n",r.createElement(t.li,null,"\n",r.createElement(t.p,null,"Click the ",r.createElement(t.strong,null,"select")," link in the ",r.createElement(t.strong,null,"Upload to /")," panel."),"\n",r.createElement(t.img,{src:"/1686836029976.296518786/MyFG_UploadPanel.png",alt:"image"}),"\n"),"\n",r.createElement(t.li,null,"\n",r.createElement(t.p,null,"Click the ",r.createElement(t.strong,null,"SampleInvoice1.xml")," file in the ",r.createElement(t.strong,null,"Downloads")," directory and click ",r.createElement(t.strong,null,"Open"),"."),"\n",r.createElement(t.blockquote,null,"\n",r.createElement(t.p,null,"Navigate to the directory where the sample invoice files were downloaded or pick another file to transfer. Do not transfer any file with confidential or personal information. The image above was captured using Firefox on MacOS, other browsers and operating system combinations may look different."),"\n"),"\n",r.createElement(t.img,{src:"/1686836029976.296518784/MyFG_UploadFileDialog.png",alt:"image"}),"\n"),"\n",r.createElement(t.li,null,"\n",r.createElement(t.p,null,"Verify in the ",r.createElement(t.strong,null,"myFileGateway")," application that the file transferred successfully."),"\n",r.createElement(t.img,{src:"/1686836029904.2917518664/BB_MyFG_UploadFileTransferSuccess.png",alt:"image"}),"\n"),"\n",r.createElement(t.li,null,"\n",r.createElement(t.p,null,"Verify in ",r.createElement(t.strong,null,"FileZilla")," that ",r.createElement(t.strong,null,"bb-partner2")," received the file."),"\n",r.createElement(t.img,{src:"/1686836029900.2915518661/BB_FZ_UploadFileTransferSuccess.png",alt:"image"}),"\n",r.createElement(t.blockquote,null,"\n",r.createElement(t.p,null,"The file size shown in ",r.createElement(t.strong,null,"IBM Sterling My File Gateway 2.0")," is in kilobytes (KB) and in ",r.createElement(t.strong,null,"FileZilla")," the file size is displayed in bytes, but they are the same and the file transfer was successful."),"\n"),"\n",r.createElement(t.p,null,"It is important to realize the file has been transferred to the ",r.createElement(t.strong,null,"B2Bi Gateway")," repository. In a production environment, ",r.createElement(t.strong,null,"bb-partner2")," would need to download the file. FileZilla is showing the contents of the data store on the gateway that ",r.createElement(t.strong,null,"bb-partner2")," has permissions to see."),"\n"),"\n"),"\n"),r.createElement(t.section,{className:"heading","data-heading-rank":"2","aria-labelledby":"view-the-details-of-the-file-transfer-in-ibm-sterling-my-file-gateway-20"},r.createElement(t.h2,{id:"view-the-details-of-the-file-transfer-in-ibm-sterling-my-file-gateway-20"},r.createElement(t.a,{href:"#view-the-details-of-the-file-transfer-in-ibm-sterling-my-file-gateway-20"},"View the details of the file transfer in ",r.createElement(t.strong,null,"IBM Sterling My File Gateway 2.0"))),"\n",r.createElement(t.ol,null,"\n",r.createElement(t.li,null,"\n",r.createElement(t.p,null,"Click ",r.createElement(t.strong,null,"File activity")," under the hamburger menu icon ",r.createElement(t.img,{src:"/1686836029972.2957518783/MyFG_HamburgerIcon.png",alt:"image"}),"."),"\n",r.createElement(t.img,{src:"/1686836029972.2957518782/MyFG_FileActivityMenu.png",alt:"image"}),"\n"),"\n",r.createElement(t.li,null,"\n",r.createElement(t.p,null,"Click the link for the recently uploaded file: ",r.createElement(t.strong,null,"SampleInvoice1.xml"),"."),"\n",r.createElement(t.img,{src:"/1686836029900.2915518662/BB_MyFG_FileActivity.png",alt:"image"}),"\n"),"\n",r.createElement(t.li,null,"\n",r.createElement(t.p,null,"Review the events that occurred during the file transfer."),"\n",r.createElement(t.img,{src:"/1686836029904.2917518663/BB_MyFG_FileActivityDetails.png",alt:"image"}),"\n",r.createElement(t.p,null,"Notice events ",r.createElement(t.strong,null,"FG_0503")," and ",r.createElement(t.strong,null,"FG_0504")," show the ",r.createElement(t.strong,null,"BB Passthrough")," channel template was used to properly route the transferred file to ",r.createElement(t.strong,null,"bb-partner2"),"."),"\n"),"\n"),"\n",r.createElement(n,{text:"There is a quiz question related to the events of a successful file transfer. A screen capture of all the events and event numbers will help answer the question."}),"\n",r.createElement(t.p,null,"For additional demonstrations, consider the following:"),"\n",r.createElement(t.ul,null,"\n",r.createElement(t.li,null,"Transfer a file from ",r.createElement(t.strong,null,"bb-partner2")," to ",r.createElement(t.strong,null,"bb-partner1"),"."),"\n",r.createElement(t.li,null,"Verify the file transfers using the ",r.createElement(t.strong,null,"IBM Sterling File Gateway")," application."),"\n",r.createElement(t.li,null,"Transfer a file using the older version of ",r.createElement(t.strong,null,"IBM Sterling My File Gateway")," using the ",r.createElement(t.strong,null,"sterling-fg-b2bi-asi-internal-route-myfilegateway")," route found in the OpenShift web console."),"\n")))}var i=function(e){void 0===e&&(e={});const{wrapper:t}=Object.assign({},(0,l.ah)(),e.components);return t?r.createElement(t,e,r.createElement(a,e)):a(e)};var o=n(4184),s=n.n(o),c=n(4690),m=n(1140),u=n(2565),g=n(8531),h=n(3383),d=n(7315);const p=e=>{const{data:{mdx:{tableOfContents:{items:t},frontmatter:{toc:n=!0,title:l,timeToComplete:a,updated:i}}},children:o}=e,c=(0,r.useRef)(null),{0:p}=(0,r.useState)(""),f=(null===n||n)&&t;return r.createElement(r.Fragment,null,r.createElement(m.Z,{timeToComplete:a,updated:i},t[0].title||l||""),r.createElement(g.Z,{className:d.YS},r.createElement("article",{className:s()(d.Y2,!f&&d.ey),ref:c},r.createElement(u.Z,{components:{h1:()=>null}},o)),f&&r.createElement(h.Z,{itemsList:t,maxDepth:2,currSection:p})))},f=e=>{const{location:{pathname:t},data:{mdx:{frontmatter:{title:n},tableOfContents:{items:l}}}}=e;return r.createElement(c.Z,{pathname:t,title:n||l[0].title||void 0})};function E(e){return r.createElement(p,e,r.createElement(i,e))}},2565:function(e,t,n){n.d(t,{Z:function(){return o}});var l=n(7294),r=n(1151),a=n(7563);const i={table:a.y6,a:a.IW,blockquote:a.R4,SubHeader:a.bU,img:a.fb,code:a.dn,QuizAlert:a.SA,Danger:a.b0,Warning:a.v3,CopyText:a.O5};var o=(0,l.memo)((function(e){let{children:t,components:n={}}=e;return l.createElement(r.Zo,{components:{...i,...n}},t)}))},3383:function(e,t,n){n.d(t,{Z:function(){return c}});var l=n(7294),r=n(7500),a=n(4184),i=n.n(a),o=n(6488);const s=function(e,t,n){return void 0===t&&(t=[]),void 0===n&&(n=0),e.forEach((e=>{const{title:l,url:r,items:a}=e;t.splice(t.length,0,{depth:n,title:l,url:r}),a&&a.length>0&&s(a,t,n+1)})),t};var c=e=>{const{itemsList:t}=e,n=(0,l.useMemo)((()=>s(t[0].items||[])),[t]),a=(0,o.Z)("h1[id],h2[id]",{threshold:[0,1],rootMargin:"-48px 0px -90% 0px"});return n.length<1?null:l.createElement("nav",{className:"TableOfContents-module--toc--54d35"},l.createElement("div",{className:"TableOfContents-module--tocStack--90609"},l.createElement("h6",{className:"TableOfContents-module--tocHeader--05956"},l.createElement(r.rU,{to:"#",replace:!0},"On this page")),n.map(((e,t)=>{let{title:n,url:r}=e;return l.createElement("a",{className:i()("TableOfContents-module--link--b292b",a===r.substring(1)&&"TableOfContents-module--activeItem--3869f"),key:t,href:r},n)}))))}},7315:function(e,t,n){n.d(t,{Y2:function(){return l},YS:function(){return a},ey:function(){return r}});var l="{mdx-fields__slug}-module--article--e3d5a",r="{mdx-fields__slug}-module--noToc--82387",a="{mdx-fields__slug}-module--wrapper--58e72"},1151:function(e,t,n){n.d(t,{Zo:function(){return o},ah:function(){return a}});var l=n(7294);const r=l.createContext({});function a(e){const t=l.useContext(r);return l.useMemo((()=>"function"==typeof e?e(t):{...t,...e}),[t,e])}const i={};function o({components:e,children:t,disableParentContext:n}){let o;return o=n?"function"==typeof e?e({}):e||i:a(e),l.createElement(r.Provider,{value:o},t)}}}]);
//# sourceMappingURL=component---src-pages-mdx-fields-slug-tsx-content-file-path-content-sterling-client-demonstration-md-eeba698f0ba1c1e585be.js.map