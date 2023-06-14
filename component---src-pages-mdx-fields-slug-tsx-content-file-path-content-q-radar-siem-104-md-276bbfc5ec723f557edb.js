"use strict";(self.webpackChunkvad_var_site=self.webpackChunkvad_var_site||[]).push([[8173],{5463:function(e,t,n){n.r(t),n.d(t,{Head:function(){return E},default:function(){return f}});var l=n(1151),a=n(7294);function o(e){const t=Object.assign({section:"section",h1:"h1",h2:"h2",a:"a",p:"p",h3:"h3",blockquote:"blockquote",strong:"strong",ol:"ol",li:"li",pre:"pre",code:"code",span:"span",img:"img",table:"table",thead:"thead",tr:"tr",th:"th",tbody:"tbody",td:"td",ul:"ul"},(0,l.ah)(),e.components);return a.createElement(t.section,{className:"heading","data-heading-rank":"1","aria-labelledby":"log-sources"},a.createElement(t.h1,{id:"log-sources"},"Log Sources"),"\n",a.createElement(t.section,{className:"heading","data-heading-rank":"2","aria-labelledby":"introduction"},a.createElement(t.h2,{id:"introduction"},a.createElement(t.a,{href:"#introduction"},"Introduction")),"\n",a.createElement(t.p,null,"The core functions of IBM QRadar SIEM are managing network security by monitoring flows and events."),"\n",a.createElement(t.p,null,"A significant difference between event and flow data is that an event, which typically is a log of a specific action such as a user login, or a VPN connection, occurs at a specific time and the event is logged at that time. A flow is a record of network activity that can last for seconds, minutes, hours, or days, depending on the activity within the session. For example, a web request might download multiple files such as images, ads, video, and last for 5 to 10 seconds, or a user who watches a Netflix movie might be in a network session that lasts up to a few hours. The flow is a record of network activity between two hosts."),"\n",a.createElement(t.section,{className:"heading","data-heading-rank":"3","aria-labelledby":"events"},a.createElement(t.h3,{id:"events"},a.createElement(t.a,{href:"#events"},"Events")),"\n",a.createElement(t.p,null,"QRadar accepts event logs from log sources that are on your network. A log source is a data source such as a firewall or intrusion protection system (IPS) that creates an event log."),"\n",a.createElement(t.p,null,"QRadar accepts events from log sources by using protocols such as syslog, syslog-tcp, and SNMP. QRadar can also set up outbound connections to retrieve events by using protocols such as SCP, SFTP, FTP, JDBC, Check Point OPSEC, and SMB/CIFS."),"\n",a.createElement(t.p,null,'If QRadar has never received events from a log source, the new events are listed with a Low Level Category of "Unknown" in the Log Activity tab. QRadar can autodiscover many log sources, and after a certain amount of time (or processed log events), QRadar will properly assign the correct log source. Sometimes, however, QRadar cannot figure out the proper log source behind the collected data, and those events show a Low Level Category of "Stored".'),"\n",a.createElement(t.p,null,"In this lab, you configure QRadar to recognize an unknown event. You extract additional properties from the raw event payload. You use the Log Source Management (LSM) app to configure and manage single and bulk log sources. You also test a new log source."),"\n")),a.createElement(t.section,{className:"heading","data-heading-rank":"2","aria-labelledby":"analyzing-an-unknown-event"},a.createElement(t.h2,{id:"analyzing-an-unknown-event"},a.createElement(t.a,{href:"#analyzing-an-unknown-event"},"Analyzing an Unknown Event")),"\n",a.createElement(t.p,null,"In this exercise, you will analyze an event received from an unknown log source. When processed by the event pipeline, this type of event is labeled as KNOWN. When events are detected for the wrong log source type, they are assigned the STORED low level category. After they are analyzed, you might decide what new log sources you need to create."),"\n",a.createElement(t.p,null,"To simulate sending the log sources to QRadar, you log in to the QRadar Console by using the SSH terminal and running a script."),"\n",a.createElement(t.blockquote,null,"\n",a.createElement(t.p,null,"If you are using the Wireguard VPN configured in ",a.createElement(t.strong,null,"101: QRadar Demo Setup")," to access the demo environment then you can perform the following activities from your workstation. If you have not configured VPN access you can perform the activities from the jump server."),"\n"),"\n",a.createElement(t.ol,null,"\n",a.createElement(t.li,null,"Open the browser and access the Console at the following URL:"),"\n"),"\n",a.createElement(t.pre,null,a.createElement(t.code,{className:"hljs language-bash"},"https://172.16.60.10\n")),"\n",a.createElement(t.ol,{start:"2"},"\n",a.createElement(t.li,null,"\n",a.createElement(t.p,null,'Log in by using the admin account and password "Q1d3m0.Demo".'),"\n"),"\n",a.createElement(t.li,null,"\n",a.createElement(t.p,null,"To load default search filters, double-click the ",a.createElement(t.strong,null,"Log Activity")," tab."),"\n"),"\n"),"\n",a.createElement(t.blockquote,null,"\n",a.createElement(t.p,null,"These exercises classic QRadar UI and not the New QRadar UI."),"\n",a.createElement(t.p,null,"If you need to return to the classic UI, go to the URL: ",a.createElement(t.a,{href:"https://172.16.60.10"},"https://172.16.60.10"),"."),"\n"),"\n",a.createElement(t.ol,null,"\n",a.createElement(t.li,null,"Do NOT close the browser. While your browser is waiting to display real-time events, open the SSH terminal and log in to QRadar as root by using the following command:"),"\n"),"\n",a.createElement(t.pre,null,a.createElement(t.code,{className:"hljs language-bash"},"ssh root@172.16.60.10\n")),"\n",a.createElement(t.ol,null,"\n",a.createElement(t.li,null,"\n",a.createElement(t.p,null,'At the password prompt, type "Q1d3m0".'),"\n"),"\n",a.createElement(t.li,null,"\n",a.createElement(t.p,null,"To generate events, type the following commands:"),"\n"),"\n"),"\n",a.createElement(t.pre,null,a.createElement(t.code,{className:"hljs language-bash"},a.createElement(t.span,{className:"hljs-built_in"},"cd")," /labfiles/extended/labfiles/logsources\n")),"\n",a.createElement(t.pre,null,a.createElement(t.code,{className:"hljs language-bash"},"/opt/qradar/bin/logrun.pl -f checkpoint1.syslog 1\n")),"\n",a.createElement(t.blockquote,null,"\n",a.createElement(t.p,null,"The /labfiles/extended/labfiles directory was uploaded to the QRadar server in the ",a.createElement(t.strong,null,"103: Advanced Lab Setup")," exercises."),"\n"),"\n",a.createElement(t.ol,null,"\n",a.createElement(t.li,null,"Go back to the browser window."),"\n"),"\n",a.createElement(t.blockquote,null,"\n",a.createElement(t.p,null,a.createElement(t.strong,null,"Note:"),' The Console detected three events with the STORED Low Level Category. Because we use the localhost context for these events (127.0.0.1), the Event Name can vary. In the screen captures below you see an Event Name of "Search Results Message", but it can also be "Anomaly Detection Engine" or others.'),"\n"),"\n",a.createElement(t.ol,null,"\n",a.createElement(t.li,null,"\n",a.createElement(t.p,null,"To open any of the events, click the ",a.createElement(t.strong,null,"pause")," icon in the upper-right part of the Console. This action pauses the real-time event capturing."),"\n"),"\n",a.createElement(t.li,null,"\n",a.createElement(t.p,null,"To review the event details, double-click any of the three events."),"\n"),"\n"),"\n",a.createElement(t.img,{src:"/1686700856097.4639791585/image6.jpeg",alt:""}),"\n",a.createElement(t.ol,null,"\n",a.createElement(t.li,null,"On the Event details page, scroll down to the Payload Information section and click ",a.createElement(t.strong,null,"Wrap Text"),"."),"\n"),"\n",a.createElement(t.img,{src:"/1686700856101.464791596/image7.jpeg",alt:""}),"\n",a.createElement(t.ol,null,"\n",a.createElement(t.li,null,"Analyze the raw payload and note that the source and destination IP addresses are not parsed correctly by comparing the addresses with the ones listed in the Source and Destination Information section."),"\n"),"\n",a.createElement(t.p,null,"At this point, you conclude that QRadar did not correctly process this event. You can determine the source of the generated log and create a proper log source. Also, on many occasions, if QRadar receives enough log events to process, it can autodiscover the log source and decide on the log source that best matches the events."),"\n"),a.createElement(t.section,{className:"heading","data-heading-rank":"2","aria-labelledby":"viewing-autodiscovered-log-sources"},a.createElement(t.h2,{id:"viewing-autodiscovered-log-sources"},a.createElement(t.a,{href:"#viewing-autodiscovered-log-sources"},"Viewing Autodiscovered Log Sources")),"\n",a.createElement(t.p,null,"QRadar autodiscovers many log sources after it receives several logs of a specific type. You don't need to configure the log source for QRadar to recognize the events from that log source. In this exercise, you analyze an autodiscovered log source."),"\n",a.createElement(t.ol,null,"\n",a.createElement(t.li,null,"\n",a.createElement(t.p,null,"Start with the Console. To load default search filters, double-click the ",a.createElement(t.strong,null,"Log Activity")," tab."),"\n"),"\n",a.createElement(t.li,null,"\n",a.createElement(t.p,null,"Then, in the QRadar SSH terminal, run the following script from the /labfiles/extended/labfiles/logsources directory:"),"\n"),"\n"),"\n",a.createElement(t.pre,null,a.createElement(t.code,{className:"hljs language-bash"},"/opt/qradar/bin/logrun.pl -f checkpoint.syslog 10\n")),"\n",a.createElement(t.ol,{start:"3"},"\n",a.createElement(t.li,null,"\n",a.createElement(t.p,null,"Go back to the browser window and observe the events that are displayed in the Console."),"\n"),"\n",a.createElement(t.li,null,"\n",a.createElement(t.p,null,"After about 30 seconds, you notice that the Event Name column starts to show Firewall Permit, the LogSource is named Check Point, and Low Level Category is updated to Firewall Permit."),"\n"),"\n"),"\n",a.createElement(t.img,{src:"/1686700856105.464791606/image8.jpeg",alt:""}),"\n",a.createElement(t.ol,{start:"5"},"\n",a.createElement(t.li,null,"\n",a.createElement(t.p,null,"To pause the real-time events, in the upper-right part of the Console, click the ",a.createElement(t.strong,null,"pause")," icon."),"\n"),"\n",a.createElement(t.li,null,"\n",a.createElement(t.p,null,"Double-click any ",a.createElement(t.strong,null,"Firewall Permit")," event, and note that the parsed Source IP and Destination IP match the IP addresses in the raw payload."),"\n"),"\n"),"\n",a.createElement(t.img,{src:"/1686700856113.464791617/image9.jpeg",alt:""}),"\n",a.createElement(t.p,null,"You learned that QRadar can autodiscover some logs after it receives some events. However, not all logs are autodiscovered, and for these, you must create log sources manually by using the Log Source Management app. If you do not want to lose some of the information in the early events while you wait for QRadar to parse them, you can also use this method for the autodiscovered log sources."),"\n"),a.createElement(t.section,{className:"heading","data-heading-rank":"2","aria-labelledby":"use-log-source-management-app-to-configure-a-log-source"},a.createElement(t.h2,{id:"use-log-source-management-app-to-configure-a-log-source"},a.createElement(t.a,{href:"#use-log-source-management-app-to-configure-a-log-source"},"Use Log Source Management App to Configure a Log Source")),"\n",a.createElement(t.p,null,"In this exercise, you configure a Symantec Endpoint Protection log source and analyze the events from this log source. To configure a log source, you must use the Log Source Management (LSM) app."),"\n",a.createElement(t.ol,null,"\n",a.createElement(t.li,null,"\n",a.createElement(t.p,null,"From the browser, go to the Admin Console."),"\n"),"\n",a.createElement(t.li,null,"\n",a.createElement(t.p,null,"In the Admin Console, scroll to the Apps section and click ",a.createElement(t.strong,null,"QRadar Log Source Management"),"."),"\n"),"\n",a.createElement(t.li,null,"\n",a.createElement(t.p,null,"In the LSM app, click ",a.createElement(t.strong,null,"Log Sources.")),"\n"),"\n",a.createElement(t.li,null,"\n",a.createElement(t.p,null,"In the LSM app dashboard, in the upper-right part of the window, click ",a.createElement(t.strong,null,"New Log Source"),"."),"\n"),"\n"),"\n",a.createElement(t.img,{src:"/1686700856085.4639791532/image12.png",alt:""}),"\n",a.createElement(t.ol,{start:"5"},"\n",a.createElement(t.li,null,"Click ",a.createElement(t.strong,null,"Single Log Source"),"."),"\n"),"\n",a.createElement(t.img,{src:"/1686700856085.4639791536/image13.jpeg",alt:""}),"\n",a.createElement(t.blockquote,null,"\n",a.createElement(t.p,null,"Stop and browse through the long list of available log sources. This shows you all the log sources QRadar can integrate with out of the box."),"\n"),"\n",a.createElement(t.ol,{start:"6"},"\n",a.createElement(t.li,null,"In the Select a Log Source Type step, in the ",a.createElement(t.strong,null,"Look up Log Source Type"),' field, type "Symantec".'),"\n"),"\n",a.createElement(t.img,{src:"/1686700856085.4639791537/image14.png",alt:""}),"\n",a.createElement(t.ol,{start:"7"},"\n",a.createElement(t.li,null,"\n",a.createElement(t.p,null,"From the list, select ",a.createElement(t.strong,null,"Symantec Endpoint Protection"),"."),"\n"),"\n",a.createElement(t.li,null,"\n",a.createElement(t.p,null,"Click ",a.createElement(t.strong,null,"Step 2: Select Protocol Type"),"."),"\n"),"\n",a.createElement(t.li,null,"\n",a.createElement(t.p,null,"In the Select Protocol Type step, confirm that ",a.createElement(t.strong,null,"Syslog")," is highlighted."),"\n"),"\n"),"\n",a.createElement(t.img,{src:"/1686700856085.4639791538/image15.png",alt:""}),"\n",a.createElement(t.ol,{start:"10"},"\n",a.createElement(t.li,null,"\n",a.createElement(t.p,null,"Click ",a.createElement(t.strong,null,"Step 3: Configure Log Source Parameters"),"."),"\n"),"\n",a.createElement(t.li,null,"\n",a.createElement(t.p,null,"In the Configure Log Source Parameters step, complete the parameters by using the following table."),"\n",a.createElement(t.table,null,a.createElement(t.thead,null,a.createElement(t.tr,null,a.createElement(t.th,null,a.createElement(t.strong,null,"Parameter")),a.createElement(t.th,null,a.createElement(t.strong,null,"Value")))),a.createElement(t.tbody,null,a.createElement(t.tr,null,a.createElement(t.td,null,"Name"),a.createElement(t.td,null,"Endpoint Protection")),a.createElement(t.tr,null,a.createElement(t.td,null,"Description"),a.createElement(t.td,null,"Symantec Endpoint Protection")),a.createElement(t.tr,null,a.createElement(t.td,null,"Coalescing Events"),a.createElement(t.td,null,"OFF (disabled)")))),"\n"),"\n",a.createElement(t.li,null,"\n",a.createElement(t.p,null,"Click ",a.createElement(t.strong,null,"Step 4: Configure Protocol Parameters"),"."),"\n"),"\n",a.createElement(t.li,null,"\n",a.createElement(t.p,null,"In the ",a.createElement(t.strong,null,"Log Source Identifier")," field, type ",a.createElement(t.code,null,"172.16.60.10")),"\n"),"\n",a.createElement(t.li,null,"\n",a.createElement(t.p,null,"Click ",a.createElement(t.strong,null,"Finish"),"."),"\n"),"\n",a.createElement(t.li,null,"\n",a.createElement(t.p,null,"Close the ",a.createElement(t.strong,null,"Log Source Management")," app."),"\n"),"\n",a.createElement(t.li,null,"\n",a.createElement(t.p,null,'In the Admin Console, you see the message that "There are undeployed changes." Click ',a.createElement(t.strong,null,"Deploy Changes"),"."),"\n"),"\n"),"\n",a.createElement(t.blockquote,null,"\n",a.createElement(t.p,null,a.createElement(t.strong,null,"Hint:")," Deploying changes in the lab environment can take ~ 1-2 minutes."),"\n"),"\n",a.createElement(t.p,null,"You manually created a new log source that uses the syslog protocol. After you create a new log source, you must deploy changes to the Console."),"\n"),a.createElement(t.section,{className:"heading","data-heading-rank":"2","aria-labelledby":"summary"},a.createElement(t.h2,{id:"summary"},a.createElement(t.a,{href:"#summary"},"Summary")),"\n",a.createElement(t.p,null,"This has been a very quick introduction to QRadar log sources. You have seen"),"\n",a.createElement(t.ul,null,"\n",a.createElement(t.li,null,"How to view QRadar's raw log stream"),"\n",a.createElement(t.li,null,"How to analyze an event that does from an unrecognized source"),"\n",a.createElement(t.li,null,"How to configure a log source"),"\n"),"\n",a.createElement(t.p,null,"To view applications that provide log sources for QRadar visit the X-Force App Exchange at: ",a.createElement(t.a,{href:"https://exchange.xforce.ibmcloud.com/hub?br=QRadar&con=CO31&ippc=64&ippr=64"},"https://exchange.xforce.ibmcloud.com/hub?br=QRadar&con=CO31&ippc=64&ippr=64"),".")))}var r=function(e){void 0===e&&(e={});const{wrapper:t}=Object.assign({},(0,l.ah)(),e.components);return t?a.createElement(t,e,a.createElement(o,e)):o(e)},c=n(4184),s=n.n(c),i=n(4690),u=n(1140),m=n(2565),d=n(8531),h=n(3383),g=n(7315);const p=e=>{const{data:{mdx:{tableOfContents:{items:t},frontmatter:{toc:n=!0,title:l,timeToComplete:o,updated:r}}},children:c}=e,i=(0,a.useRef)(null),{0:p}=(0,a.useState)(""),E=(null===n||n)&&t;return a.createElement(a.Fragment,null,a.createElement(u.Z,{timeToComplete:o,updated:r},t[0].title||l||""),a.createElement(d.Z,{className:g.YS},a.createElement("article",{className:s()(g.Y2,!E&&g.ey),ref:i},a.createElement(m.Z,{components:{h1:()=>null}},c)),E&&a.createElement(h.Z,{itemsList:t,maxDepth:2,currSection:p})))},E=e=>{const{location:{pathname:t},data:{mdx:{frontmatter:{title:n},tableOfContents:{items:l}}}}=e;return a.createElement(i.Z,{pathname:t,title:n||l[0].title||void 0})};function f(e){return a.createElement(p,e,a.createElement(r,e))}},2565:function(e,t,n){n.d(t,{Z:function(){return c}});var l=n(7294),a=n(1151),o=n(7563);const r={table:o.y6,a:o.IW,blockquote:o.R4,SubHeader:o.bU,img:o.fb,code:o.dn,QuizAlert:o.SA,Danger:o.b0,Warning:o.v3,CopyText:o.O5};var c=(0,l.memo)((function(e){let{children:t,components:n={}}=e;return l.createElement(a.Zo,{components:{...r,...n}},t)}))},3383:function(e,t,n){n.d(t,{Z:function(){return i}});var l=n(7294),a=n(7500),o=n(4184),r=n.n(o),c=n(6488);const s=function(e,t,n){return void 0===t&&(t=[]),void 0===n&&(n=0),e.forEach((e=>{const{title:l,url:a,items:o}=e;t.splice(t.length,0,{depth:n,title:l,url:a}),o&&o.length>0&&s(o,t,n+1)})),t};var i=e=>{const{itemsList:t}=e,n=(0,l.useMemo)((()=>s(t[0].items||[])),[t]),o=(0,c.Z)("h1[id],h2[id]",{threshold:[0,1],rootMargin:"-48px 0px -90% 0px"});return n.length<1?null:l.createElement("nav",{className:"TableOfContents-module--toc--54d35"},l.createElement("div",{className:"TableOfContents-module--tocStack--90609"},l.createElement("h6",{className:"TableOfContents-module--tocHeader--05956"},l.createElement(a.rU,{to:"#",replace:!0},"On this page")),n.map(((e,t)=>{let{title:n,url:a}=e;return l.createElement("a",{className:r()("TableOfContents-module--link--b292b",o===a.substring(1)&&"TableOfContents-module--activeItem--3869f"),key:t,href:a},n)}))))}},7315:function(e,t,n){n.d(t,{Y2:function(){return l},YS:function(){return o},ey:function(){return a}});var l="{mdx-fields__slug}-module--article--e3d5a",a="{mdx-fields__slug}-module--noToc--82387",o="{mdx-fields__slug}-module--wrapper--58e72"},1151:function(e,t,n){n.d(t,{Zo:function(){return c},ah:function(){return o}});var l=n(7294);const a=l.createContext({});function o(e){const t=l.useContext(a);return l.useMemo((()=>"function"==typeof e?e(t):{...t,...e}),[t,e])}const r={};function c({components:e,children:t,disableParentContext:n}){let c;return c=n?"function"==typeof e?e({}):e||r:o(e),l.createElement(a.Provider,{value:c},t)}}}]);
//# sourceMappingURL=component---src-pages-mdx-fields-slug-tsx-content-file-path-content-q-radar-siem-104-md-276bbfc5ec723f557edb.js.map