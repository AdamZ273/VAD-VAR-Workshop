"use strict";(self.webpackChunkvad_var_site=self.webpackChunkvad_var_site||[]).push([[2333],{1222:function(e,t,n){n.r(t),n.d(t,{Head:function(){return g},default:function(){return f}});var a=n(1151),l=n(7294);function r(e){const t=Object.assign({section:"section",h1:"h1",h2:"h2",a:"a",p:"p",ol:"ol",li:"li",strong:"strong",img:"img",code:"code",blockquote:"blockquote",em:"em",h3:"h3"},(0,a.ah)(),e.components),{QuizAlert:n}=t;return n||function(e,t){throw new Error("Expected "+(t?"component":"object")+" `"+e+"` to be defined: you likely forgot to import, pass, or provide it.")}("QuizAlert",!0),l.createElement(t.section,{className:"heading","data-heading-rank":"1","aria-labelledby":"101-introduction-data-sources-and-automatic-investigation"},l.createElement(t.h1,{id:"101-introduction-data-sources-and-automatic-investigation"},"101: Introduction, data sources, and automatic investigation"),"\n",l.createElement(n,{text:"Heads Up! Quiz material will be flagged like this!"}),"\n",l.createElement(t.section,{className:"heading","data-heading-rank":"2","aria-labelledby":"create-a-case"},l.createElement(t.h2,{id:"create-a-case"},l.createElement(t.a,{href:"#create-a-case"},"Create a case")),"\n",l.createElement(t.p,null,"First, let's log in to the system and create a case that can be used for the lab. Each person must create their own case and remember the Case ID to be used in future steps."),"\n",l.createElement(t.ol,null,"\n",l.createElement(t.li,null,"\n",l.createElement(t.p,null,"If not already, access the XDR Connect using the following SaaS URL: ",l.createElement(t.a,{href:"https://ibm.biz/QR-XDR-4-CTP"},"https://ibm.biz/QR-XDR-4-CTP")),"\n"),"\n",l.createElement(t.li,null,"\n",l.createElement(t.p,null,"Choose ",l.createElement(t.strong,null,"Enterprise SAML")," as the authentication method."),"\n",l.createElement(t.img,{src:"/1684526025379.74151088753/login.png",alt:""}),"\n"),"\n",l.createElement(t.li,null,"\n",l.createElement(t.p,null,"Choose the ",l.createElement(t.strong,null,"Sign in with IBMid")," link."),"\n",l.createElement(t.img,{src:"/1684526025379.74151088754/login2.png",alt:""}),"\n"),"\n",l.createElement(t.li,null,"\n",l.createElement(t.p,null,"After you enter your IBMid login credentials, to start the demonstration, select the 30X_XDR account from the top right menu."),"\n"),"\n",l.createElement(t.li,null,"\n",l.createElement(t.p,null,"From the My applications menu, click ",l.createElement(t.strong,null,"Case Management"),"."),"\n"),"\n",l.createElement(t.li,null,"\n",l.createElement(t.p,null,"Click Create case."),"\n",l.createElement(t.img,{src:"/1684526025375.74151088748/createCase.png",alt:""}),"\n"),"\n",l.createElement(t.li,null,"\n",l.createElement(t.p,null,"For the case name type any word. It will be overridden by a stock value using a playbook."),"\n"),"\n",l.createElement(t.li,null,"\n",l.createElement(t.p,null,"Click ",l.createElement(t.strong,null,"Next"),"."),"\n",l.createElement(t.img,{src:"/1684526025375.74151088749/createCase2.png",alt:""}),"\n"),"\n",l.createElement(t.li,null,"\n",l.createElement(t.p,null,"Click Create Incident."),"\n",l.createElement(t.p,null,l.createElement(t.strong,null,"Note"),": In the background the playbook workflow overwrites the case name into the name used for the demo. It also adds two artifacts and assign the case to the Tier1 Analysts."),"\n",l.createElement(t.p,null,"Upon creation you will land on the overview page of your newly created case. Using the URL you can determine your case ID that will be needed in future lab steps."),"\n",l.createElement(t.img,{src:"/1684526025383.74151088756/newCaseOverview.png",alt:""}),"\n",l.createElement(t.p,null,"An example URL is with case ID '18001' is ",l.createElement(t.code,null,"https://deployment-9pnitj.test.cloudpak.security.ibm.com/app/respond/#cases/18001")),"\n",l.createElement(t.p,null,"You may also find the case ID on the 'Details' tab of the newly created Case."),"\n",l.createElement(t.img,{src:"/1684526025383.74151088755/newCaseDetails.png",alt:""}),"\n",l.createElement(t.p,null,l.createElement(t.strong,null,"Important"),": Remember your case number (case ID) because this system is shared with other sales engineers who might run the demo at the same time. All demos are using the same case name, however every user creates/opens unique case ID."),"\n"),"\n"),"\n",l.createElement("br"),"\n",l.createElement("br"),"\n"),l.createElement(t.section,{className:"heading","data-heading-rank":"2","aria-labelledby":"data-sources-and-case-artifacts"},l.createElement(t.h2,{id:"data-sources-and-case-artifacts"},l.createElement(t.a,{href:"#data-sources-and-case-artifacts"},"Data sources and case artifacts")),"\n",l.createElement(t.p,null,"Now that we have created a case, lets explore the data sources that feed QRadar XDR and use the information from these data sources."),"\n",l.createElement(t.ol,null,"\n",l.createElement(t.li,null,"\n",l.createElement(t.p,null,"Start from the ",l.createElement(t.strong,null,"Homepage"),"."),"\n",l.createElement(t.img,{src:"/1684526025379.74151088752/home.png",alt:""}),"\n",l.createElement(t.blockquote,null,"\n",l.createElement(t.p,null,"Today you will see a demonstration of the QRadar XDR platform, delivered on Cloud Pak for Security. The XDRC solution is scalable and open to integration with any security and cloud vendor such as Splunk, Microsoft Sentinel, CrowdStrike, AWS CloudWatch and so on."),"\n"),"\n",l.createElement(t.blockquote,null,"\n",l.createElement(t.p,null,"Using XDRC, you can connect multiple sources of security data, correlate alerts, and run a case investigation on numerous data sources all from a single console. Also, XDRC can help facilitate automatic investigations of potential incidents (in the form of cases) and enrich discovered indicators of compromise using the threat intelligence from X-Force Threat Intelligence, or various third-party threat feeds such as Virus Total, Alien Vault, and so on."),"\n"),"\n",l.createElement(t.blockquote,null,"\n",l.createElement(t.p,null,"In addition, you can perform threat hunting on the data from numerous security solutions, all from a single console, eliminating the traditional methods of investigation across multiple solutions that analysts do today. Let’s review data sources that are connected to the platform."),"\n"),"\n"),"\n",l.createElement(t.li,null,"\n",l.createElement(t.p,null,"From the main menu, click ",l.createElement(t.strong,null,"Connections > Data sources"),"."),"\n",l.createElement(t.img,{src:"/1684526025375.74151088750/dataSources.png",alt:""}),"\n",l.createElement(t.blockquote,null,"\n",l.createElement(t.p,null,"To see connected data sources you must go to the main menu and open Connections > Data Sources."),"\n"),"\n"),"\n",l.createElement(t.li,null,"\n",l.createElement(t.p,null,"If not already opened, click the ",l.createElement(t.strong,null,"Data Sources")," tab."),"\n",l.createElement(n,{text:"Quiz material"}),"\n",l.createElement(t.img,{src:"/1684526025375.74151088751/dataSources2.png",alt:""}),"\n",l.createElement(t.blockquote,null,"\n",l.createElement(t.p,null,"This page shows the connected data sources used for this demo. We see IBM and other vendors used in an integrated way. You are analysing data from the third party EDR, CrowdStrike, but you can also integrate with IBM’s EDR solution (ReaQta). In the demo, the network data is generated from QRadar NDR and the SIEM data is generated from Splunk. Obviously QRadar SIEM is another option but we wanted to emphasise that you can integrate easily with other vendors. Additional data sources can be easily added."),"\n"),"\n",l.createElement(t.blockquote,null,"\n",l.createElement(t.p,null,"Let's now review the open cases related to our demo use case."),"\n"),"\n"),"\n",l.createElement(t.li,null,"\n",l.createElement(t.p,null,"From the main menu, click ",l.createElement(t.strong,null,"Case Management > Cases"),"."),"\n",l.createElement(t.img,{src:"/1684526025371.74151088746/cases.png",alt:""}),"\n",l.createElement(t.blockquote,null,"\n",l.createElement(t.p,null,"To see the open cases, from the main menu, you must navigate to the Case Management tool."),"\n"),"\n"),"\n",l.createElement(t.li,null,"\n",l.createElement(t.p,null,"The Cases main page is shown."),"\n",l.createElement(t.img,{src:"/1684526025375.74151088747/cases2.png",alt:""}),"\n",l.createElement(t.blockquote,null,"\n",l.createElement(t.p,null,"This page shows all the open cases that an analyst has permissions for. The default filters show open/active cases, but you can also modify filters and review even the closed cases.\n",l.createElement("br"),l.createElement("br"),"The open cases can be created manually or automatically by integrating with other solutions such as SIEM. Although our platform works with QRadar SIEM, it is an open platform and can integrate with any SIEM and security solution that can send potential incidents to the XDR SOAR (Case management) and analysis can be orchestrated by the XDRC solution.\n",l.createElement("br"),l.createElement("br"),"Let’s now review the case SIEM Alert: Abnormal network traffic detected (your case number most likely is different) that is coming from a SIEM, and it is automatically assigned the ownership to the Tier 1 Analysts group."),"\n"),"\n"),"\n",l.createElement(t.li,null,"\n",l.createElement(t.p,null,"Click the ",l.createElement(t.em,null,"SIEM Alert: Abnormal network traffic detected")," case."),"\n",l.createElement(t.p,null,l.createElement(t.strong,null,"Important:")," There might be multiple cases with the same name, due to shared demo environment. Ensure that you open and use the case with case ID that you have created at the beginning of the demo."),"\n"),"\n",l.createElement(t.li,null,"\n",l.createElement(t.p,null,"Review the case overview page of the ",l.createElement(t.em,null,"SIEM Alert – Abnormal network traffic detected")," case."),"\n",l.createElement(n,{text:"Quiz material"}),"\n",l.createElement(t.img,{src:"/1684526025363.74171088740/caseOverview.png",alt:""}),"\n",l.createElement(t.blockquote,null,"\n",l.createElement(t.p,null,"The case overview tab shows the basic information sent from the SIEM tool into the XDR SOAR Case.\n",l.createElement("br"),l.createElement("br"),"The description of the case says that abnormal network traffic is detected. We see that the initial severity of the case is Low. It is assigned to Tier 1 Analysts and is in the Engage phase of the case task progression. The open case might trigger one or more playbooks. A playbook describes specific steps and tasks that must be performed to analyze, close, or escalate the case successfully. Right now, three playbooks are associated with this case.\n",l.createElement("br"),l.createElement("br"),"Also, at the moment, we see that the task list contains three tasks. One is completed and two still need an owner (unassigned). The completed task is the automatically investigated threat. A task might be added or removed, manually or automatically, using the playbooks.\n",l.createElement("br"),l.createElement("br"),"At the bottom of the page, you can see different MITRE ATT&CK Tactics that were discovered during the Automatic investigation."),"\n"),"\n",l.createElement(t.p,null,"Let’s review the tasks related to this case and the running playbooks."),"\n"),"\n",l.createElement(t.li,null,"\n",l.createElement(t.p,null,"Click the ",l.createElement(t.strong,null,"Tasks")," tab."),"\n",l.createElement(t.img,{src:"/1684526025363.74171088741/caseTasks.png",alt:""}),"\n",l.createElement(t.blockquote,null,"\n",l.createElement(t.p,null,"Looking at the task list, you see that the automated threat investigation is already preformed for the analyst.\n",l.createElement("br"),l.createElement("br"),"The next step to perform on this case is the initial triage which guides you and helps to better understand the scope and severity of the threat.\n",l.createElement("br"),l.createElement("br"),"Before you review the findings for the automatic threat investigation, let’s look at the initial set of artifacts which triggered the case."),"\n"),"\n"),"\n",l.createElement(t.li,null,"\n",l.createElement(t.p,null,"Click the ",l.createElement(t.strong,null,"Artifacts")," tab."),"\n",l.createElement(t.img,{src:"/1684526025363.74171088738/caseArtifacts.png",alt:""}),"\n",l.createElement(t.blockquote,null,"\n",l.createElement(t.p,null,"The SIEM tool escalated two case artifacts as part of this alert – destination IP address and a source IP address. The configured threat intel feeds have flagged the destination IP address so this ",l.createElement(t.em,null,"may")," indicate malicious activity."),"\n"),"\n",l.createElement(t.p,null,"Let’s open the flagged artifact."),"\n"),"\n",l.createElement(t.li,null,"\n",l.createElement(t.p,null,"Click the ",l.createElement(t.strong,null,"199.36.158.100")," artifact."),"\n",l.createElement(t.blockquote,null,"\n",l.createElement(t.p,null,"On this page, you see the detailed report based on Threat Intelligence sources connected to XDRC. Besides IBM X-Force Threat Intelligence, VirusTotal (and SANS Internet Storm Center) threat intelligence is connected and reporting the risk by lookup from the XDR Connect.\n",l.createElement("br"),"The XDRC SaaS offering comes with IBM X-Force Threat Intelligence included in the product's license. You can also integrate with other third-party threat intelligence solutions, available at no charge."),"\n"),"\n",l.createElement(t.p,null,l.createElement(t.strong,null,"Important:")," X-Force report is based on real-time data, so the risk score on the IoC (IP address) can change. At time of writing of this lab, X-Force no longer considers 199.36.158.100 as a risky IoC. We can see in the ",l.createElement(t.a,{href:"https://exchange.xforce.ibmcloud.com/ip/199.36.158.100"},"X-Force timeline diagram")," for the IoC that status changed on Oct 20, 2022 after a security analyst review."),"\n",l.createElement(t.img,{src:"/1684526025351.74171088726/XForceExchangeTimeline.png",alt:""}),"\n",l.createElement(t.p,null,"So, X-Force Exchange no longer shows up as a hit, but you can explore hits from other Threat intelligence platforms, like Cisco Threat Grid or VirusTotal by clicking those tabs."),"\n"),"\n",l.createElement(t.li,null,"\n",l.createElement(t.p,null,"Click on a few of the Threat Intelligence hits to see the information that is automatically pulled in."),"\n",l.createElement(t.img,{src:"/1684526025359.74171088736/caseArtifactVirusTotal.png",alt:""}),"\n",l.createElement(t.p,null,l.createElement(t.strong,null,"Note:")," All of this information could be viewed in the individual sites of each threat intelligence platform, but QRadar XDR gives all the information on one pane of glass."),"\n",l.createElement(t.blockquote,null,"\n",l.createElement(t.p,null,"Although this artifact is flagged as malicious, from a case investigation standpoint, the two captured artifacts do not have much context on their own. To perform a more detailed triage of the threat, go back to the case and review the results of the automatic investigation."),"\n"),"\n"),"\n",l.createElement(t.li,null,"\n",l.createElement(t.p,null,"Click the ",l.createElement(t.em,null,"SIEM Alert: Abnormal network traffic detected")," bread crumb link."),"\n",l.createElement(t.img,{src:"/1684526025363.74171088739/caseBreadcrumb.png",alt:""}),"\n",l.createElement(t.blockquote,null,"\n",l.createElement(t.p,null,"Let’s look at the threat timeline."),"\n"),"\n"),"\n"),"\n",l.createElement("br"),"\n",l.createElement("br"),"\n"),l.createElement(t.section,{className:"heading","data-heading-rank":"2","aria-labelledby":"threat-timeline-and-attack-graph"},l.createElement(t.h2,{id:"threat-timeline-and-attack-graph"},l.createElement(t.a,{href:"#threat-timeline-and-attack-graph"},"Threat timeline and attack graph")),"\n",l.createElement(t.ol,null,"\n",l.createElement(t.li,null,"\n",l.createElement(t.p,null,"Click the ",l.createElement(t.strong,null,"Threat Timeline")," tab."),"\n",l.createElement(t.img,{src:"/1684526025367.74151088742/caseThreatTimeline.png",alt:""}),"\n",l.createElement(t.blockquote,null,"\n",l.createElement(t.p,null,"The platform’s automatic threat investigation capability mines your collected data sources for any information related to the initial case artifacts. For this case, the artifacts are two IP addresses that SIEM has added as a part of the initial case creation process.\n",l.createElement("br"),l.createElement("br"),"After querying the data sources, TI correlates that information with the MITRE ATT&CK database of known tactics, techniques, and procedures (TTPs), and builds the incident timeline and visual attack graph."),"\n"),"\n",l.createElement(t.p,null,"Let’s first analyze the timeline."),"\n"),"\n",l.createElement(t.li,null,"\n",l.createElement(t.p,null,"Focus on the timeline section of the analysed incident and click the ",l.createElement(t.strong,null,"Download from Suspicious TLD")," finding.j"),"\n",l.createElement(t.img,{src:"/1684526025367.74151088743/caseThreatTimeline2.png",alt:""}),"\n",l.createElement(t.blockquote,null,"\n",l.createElement(t.p,null,"You can start with the timeline analysis of the incident beginning with the Download from Suspicious top-level domain (TLD)."),"\n"),"\n",l.createElement(t.p,null,l.createElement(t.strong,null,"Hint:")," At this point, feel free to explore each of the eight findings associated with the attack and bring your own personal approach to the demo. Here is one way to summarize the attack and highlight some findings that are good ones to drill into during a demo."),"\n"),"\n",l.createElement(t.li,null,"\n",l.createElement(t.p,null,"Review the information from this section of the automated analysis."),"\n",l.createElement(t.img,{src:"/1684526025371.74151088745/caseThreatTimelineSuspiciousTLD.png",alt:""}),"\n",l.createElement(t.blockquote,null,"\n",l.createElement(t.p,null,"By opening this timeline item, you see that the investigation artifact shows that user Dan connected from the local IP address 172.20.13.104 to the remote IP address 199.36.158.100 which hosts the website zoommeetinactivation.web.app. The investigation artifact shows related MITRE Techniques. The medium confidence is associated with the malicious file that was executed by user Dan to exploit the client machine. Overall, there is high confidence that a Phishing attack was performed on the user Dan’s account.\n",l.createElement("br"),l.createElement("br"),"You can also see that the information came from the connected EDR data source, in this case, CrowdStrike, as we openly integrate with third parties. However, this can easily be our IBM ReaQta EDR solution.\n",l.createElement("br"),l.createElement("br"),"Threat Investigator was able to enrich our initial SIEM alert with endpoint data to give us a clearer picture.\n",l.createElement("br"),l.createElement("br"),"Also, you can click the destination IP address and URL and see the Threat Intelligence Insights information related to those artifacts that were coming from X-Force, and other connected threat intelligence sources, such as VirusTotal."),"\n"),"\n"),"\n",l.createElement(t.li,null,"\n",l.createElement(t.p,null,"Click the IP address ",l.createElement(t.strong,null,"199.36.158.100"),"."),"\n",l.createElement(t.img,{src:"/1684526025371.74151088744/caseThreatTimelineSuspiciousTLD-TII.png",alt:""}),"\n",l.createElement(t.blockquote,null,"\n",l.createElement(t.p,null,"Note, as previously mentioned X-Force Threat Intelligence no longer classifies this IP as a threat. If you scroll down, you will see if any other connected threat intelligence sources have reported on the IP. In this case, Virus Total has strong confidence that the IP is detected in 100s of malicious URLs."),"\n"),"\n"),"\n",l.createElement(t.li,null,"\n",l.createElement(t.p,null,l.createElement(t.strong,null,"Scroll")," through the rest of the timeline."),"\n",l.createElement(t.blockquote,null,"\n",l.createElement(t.p,null,"Each of the items on the timeline adds additional investigation data creating a more holistic view of the incident. However, to easily follow the sequence of attack, you can move to the Attack Graph visual."),"\n"),"\n"),"\n",l.createElement(t.li,null,"\n",l.createElement(t.p,null,"Click the ",l.createElement(t.strong,null,"Attack Graph")," tab."),"\n",l.createElement(n,{text:"Quiz material"}),"\n",l.createElement(t.img,{src:"/1684526025351.74171088727/caseAG.png",alt:""}),"\n",l.createElement(t.blockquote,null,"\n",l.createElement(t.p,null,"The Attack Graph is a visual representation of the attack and helps the analyst better understand behaviour of the attacker as they traverse the network, including affected hosts."),"\n"),"\n",l.createElement(t.blockquote,null,"\n",l.createElement(t.p,null,"The graph outlines different stages of attack progression on the y-axis (Initial infection, Propagation, and Impact) and how the attack progress across different IP addresses presented on the x-axis."),"\n"),"\n"),"\n",l.createElement(t.li,null,"\n",l.createElement(t.p,null,"Click Initial access - Phishing (T1566)."),"\n",l.createElement(t.blockquote,null,"\n",l.createElement(t.p,null,"You can see that the Initial Access phase includes two IP addresses: Dan’s internal IP and the remote malicious IP."),"\n"),"\n",l.createElement(t.blockquote,null,"\n",l.createElement(t.p,null,"The details of this phase on the graph matches the Download from Suspicious TLD timeline artifact that we have already discussed."),"\n"),"\n",l.createElement(t.blockquote,null,"\n",l.createElement(t.p,null,"Let’s now review the rest of the attack on the graph."),"\n"),"\n"),"\n",l.createElement(t.li,null,"\n",l.createElement(t.p,null,"Click Execution - Malicious File (T1204.002)."),"\n",l.createElement(t.img,{src:"/1684526025351.74171088728/caseAG1.png",alt:""}),"\n",l.createElement(t.blockquote,null,"\n",l.createElement(t.p,null,"Now you realize, after Dan clicked on the URL, he probably downloaded a Microsoft Word document, and opened it. That action was picked up from our connected data sources and identified as a Command Interpreters Spawned From Word alert.\n",l.createElement("br"),l.createElement("br"),"Now you know that there was a malicious document that was executed as part of the original email."),"\n"),"\n"),"\n",l.createElement(t.li,null,"\n",l.createElement(t.p,null,"Click Defense Evasion - Parent PID Spoofing (T1134.004)."),"\n",l.createElement(t.img,{src:"/1684526025355.74171088729/caseAG2.png",alt:""}),"\n",l.createElement(t.blockquote,null,"\n",l.createElement(t.p,null,"You see that the attack continued at Dan’s endpoint and some malicious scripts were executed, which are indicators of privilege escalation and malicious persistence mechanisms that further evade the defenses."),"\n"),"\n"),"\n",l.createElement(t.li,null,"\n",l.createElement(t.p,null,"Click Discovery – Remote System Discovery."),"\n",l.createElement(t.img,{src:"/1684526025355.74171088730/caseAG3.png",alt:""}),"\n",l.createElement(t.blockquote,null,"\n",l.createElement(t.p,null,"The attacker then started network enumeration of the internal network to discover additional targets and initiate lateral movement."),"\n"),"\n"),"\n",l.createElement(t.li,null,"\n",l.createElement(t.p,null,"Click Lateral Movement – Windows Remote Management."),"\n",l.createElement(t.img,{src:"/1684526025355.74171088731/caseAG4.png",alt:""}),"\n",l.createElement(t.blockquote,null,"\n",l.createElement(t.p,null,"You see that lateral movement was performed using the Windows Remote PowerShell session to the database.example.com system."),"\n"),"\n"),"\n",l.createElement(t.li,null,"\n",l.createElement(t.p,null,"Click Collection.\n",l.createElement(t.img,{src:"/1684526025355.74171088732/caseAG5.png",alt:""})),"\n",l.createElement(t.blockquote,null,"\n",l.createElement(t.p,null,"The next timeline item shows that the SIEM system (in this case Splunk, although QRadar can do the same) has detected abnormal queries to the cloud datastore at database.example.com."),"\n"),"\n"),"\n",l.createElement(t.li,null,"\n",l.createElement(t.p,null,"Click Exfiltration."),"\n",l.createElement(t.img,{src:"/1684526025355.74171088733/caseAG6.png",alt:""}),"\n",l.createElement(t.blockquote,null,"\n",l.createElement(t.p,null,"In the last stage of the attack, the Impact phase, we see that communication happen between the database and C2 IP address. The SIEM system reported data transfer between the internal system, database.example.com, and the remote IP address, 128.210.157.251."),"\n"),"\n"),"\n",l.createElement(t.li,null,"\n",l.createElement(t.p,null,"Click the Malicious IP address 128.210.157.251 to open Threat Intelligence Insights for this IP."),"\n",l.createElement(n,{text:"Quiz material"}),"\n",l.createElement(t.img,{src:"/1684526025359.74171088734/caseAG7.png",alt:""}),"\n",l.createElement(t.blockquote,null,"\n",l.createElement(t.p,null,"You see that X-Force Threat Intelligence labels this destination IP to be part of a Botnet Command & Control server (C2) with the risk score of 7.1 points out of 10, or 71%."),"\n"),"\n"),"\n",l.createElement(t.li,null,"\n",l.createElement(t.p,null,"Scroll to the bottom of the IP report and note the other threat intelligence reports."),"\n",l.createElement(t.img,{src:"/1684526025359.74171088735/caseAG9.png",alt:""}),"\n",l.createElement(t.blockquote,null,"\n",l.createElement(t.p,null,"Note the other threat intelligence sources connected to the platform provided additional reports.\n",l.createElement("br"),l.createElement("br"),"After exploring this attack graph, it’s clear that one of our users, Dan, was the victim of a phishing attack that resulted in data exfiltration to a known C2 server.\n",l.createElement("br"),l.createElement("br"),"Automatically piecing this together, a complete attack story across multiple domains (network and endpoint in this case) is one of the many outcomes a SOC analyst can derive from XDR Connect while mitigating an attack.\n",l.createElement("br"),l.createElement("br"),"It is worth investigating further to see if some other IP addresses on the internal network also communicated to this C2 server IP."),"\n"),"\n"),"\n"),"\n",l.createElement(t.section,{className:"heading","data-heading-rank":"3","aria-labelledby":"congratulations-youve-reached-the-end-of-lab-101"},l.createElement(t.h3,{id:"congratulations-youve-reached-the-end-of-lab-101"},l.createElement(t.a,{href:"#congratulations-youve-reached-the-end-of-lab-101"},"Congratulations, you've reached the end of lab 101")),"\n",l.createElement(t.p,null,"Leave your browser window open, Lab 102 starts from this screen."))))}var o=function(e){void 0===e&&(e={});const{wrapper:t}=Object.assign({},(0,a.ah)(),e.components);return t?l.createElement(t,e,l.createElement(r,e)):r(e)};var i=n(4184),c=n.n(i),s=n(4690),m=n(1140),u=n(2565),h=n(8531),d=n(3383),p=n(7315);const E=e=>{const{data:{mdx:{tableOfContents:{items:t},frontmatter:{toc:n=!0,title:a,timeToComplete:r,updated:o}}},children:i}=e,s=(0,l.useRef)(null),{0:E}=(0,l.useState)(""),g=(null===n||n)&&t;return l.createElement(l.Fragment,null,l.createElement(m.Z,{timeToComplete:r,updated:o},t[0].title||a||""),l.createElement(h.Z,{className:p.YS},l.createElement("article",{className:c()(p.Y2,!g&&p.ey),ref:s},l.createElement(u.Z,{components:{h1:()=>null}},i)),g&&l.createElement(d.Z,{itemsList:t,maxDepth:2,currSection:E})))},g=e=>{const{location:{pathname:t},data:{mdx:{frontmatter:{title:n},tableOfContents:{items:a}}}}=e;return l.createElement(s.Z,{pathname:t,title:n||a[0].title||void 0})};function f(e){return l.createElement(E,e,l.createElement(o,e))}},2565:function(e,t,n){n.d(t,{Z:function(){return i}});var a=n(7294),l=n(1151),r=n(987);const o={table:r.y6,a:r.IW,blockquote:r.R4,SubHeader:r.bU,img:r.fb,code:r.dn,QuizAlert:r.SA};var i=(0,a.memo)((function(e){let{children:t,components:n={}}=e;return a.createElement(l.Zo,{components:{...o,...n}},t)}))},4690:function(e,t,n){var a=n(7294),l=n(1072),r=n(2401);t.Z=e=>{const{title:t,description:n,pathname:o,children:i}=e,{description:c,title:s,origin:m}=(0,r.Z)(),{i18n:{language:u}}=(0,l.$G)(),h={title:t||s,description:n||c,url:""+m+(o||"")};return a.createElement(a.Fragment,null,a.createElement("html",{lang:u}),a.createElement("link",{rel:"icon",href:"data:image/svg+xml,<svg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 100 100'><text y='0.9em' font-size='90'>🦺</text></svg>"}),a.createElement("title",null,h.title),a.createElement("link",{rel:"canonical",href:h.url}),a.createElement("meta",{name:"description",content:h.description}),a.createElement("meta",{property:"og:title",content:h.title}),a.createElement("meta",{property:"og:url",content:h.url}),a.createElement("meta",{property:"og:type",content:"website"}),a.createElement("meta",{property:"og:description",content:h.description}),a.createElement("meta",{name:"twitter:card",content:"summary"}),a.createElement("meta",{name:"twitter:title",content:h.title}),a.createElement("meta",{name:"twitter:url",content:h.url}),a.createElement("meta",{name:"twitter:description",content:h.description}),a.createElement("meta",{name:"twitter:site",content:"https://www.ibm.com"}),a.createElement("meta",{name:"twitter:creator",content:"@IBM"}),i)}},3383:function(e,t,n){n.d(t,{Z:function(){return s}});var a=n(7294),l=n(7500),r=n(4184),o=n.n(r),i=n(6488);const c=function(e,t,n){return void 0===t&&(t=[]),void 0===n&&(n=0),e.forEach((e=>{const{title:a,url:l,items:r}=e;t.splice(t.length,0,{depth:n,title:a,url:l}),r&&r.length>0&&c(r,t,n+1)})),t};var s=e=>{const{itemsList:t}=e,n=(0,a.useMemo)((()=>c(t[0].items||[])),[t]),r=(0,i.Z)("h1[id],h2[id]",{threshold:[0,1],rootMargin:"-48px 0px -90% 0px"});return n.length<1?null:a.createElement("nav",{className:"TableOfContents-module--toc--54d35"},a.createElement("div",{className:"TableOfContents-module--tocStack--90609"},a.createElement("h6",{className:"TableOfContents-module--tocHeader--05956"},a.createElement(l.rU,{to:"#",replace:!0},"On this page")),n.map(((e,t)=>{let{title:n,url:l}=e;return a.createElement("a",{className:o()("TableOfContents-module--link--b292b",r===l.substring(1)&&"TableOfContents-module--activeItem--3869f"),key:t,href:l},n)}))))}},7315:function(e,t,n){n.d(t,{Y2:function(){return a},YS:function(){return r},ey:function(){return l}});var a="{mdx-fields__slug}-module--article--e3d5a",l="{mdx-fields__slug}-module--noToc--82387",r="{mdx-fields__slug}-module--wrapper--58e72"},1151:function(e,t,n){n.d(t,{Zo:function(){return i},ah:function(){return r}});var a=n(7294);const l=a.createContext({});function r(e){const t=a.useContext(l);return a.useMemo((()=>"function"==typeof e?e(t):{...t,...e}),[t,e])}const o={};function i({components:e,children:t,disableParentContext:n}){let i;return i=n?"function"==typeof e?e({}):e||o:r(e),a.createElement(l.Provider,{value:i},t)}}}]);
//# sourceMappingURL=component---src-pages-mdx-fields-slug-tsx-content-file-path-content-q-radar-101-md-7617da092f96afdb8d16.js.map