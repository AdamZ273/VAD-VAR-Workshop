"use strict";(self.webpackChunkvad_var_site=self.webpackChunkvad_var_site||[]).push([[3718],{737:function(e,t,n){n.r(t),n.d(t,{Head:function(){return p},default:function(){return k}});var a=n(1151),l=n(7294);function r(e){const t=Object.assign({section:"section",h1:"h1",h3:"h3",a:"a",ul:"ul",li:"li",strong:"strong",h2:"h2",p:"p",ol:"ol",img:"img",code:"code",blockquote:"blockquote"},(0,a.ah)(),e.components),{QuizAlert:n}=t;return n||function(e,t){throw new Error("Expected "+(t?"component":"object")+" `"+e+"` to be defined: you likely forgot to import, pass, or provide it.")}("QuizAlert",!0),l.createElement(l.Fragment,null,l.createElement(n,{text:"Heads Up! Quiz material will be flagged like this!"}),"\n",l.createElement(t.section,{className:"heading","data-heading-rank":"1","aria-labelledby":"track-an-ai-model"},l.createElement(t.h1,{id:"track-an-ai-model"},"Track an AI model"),"\n",l.createElement(t.section,{className:"heading","data-heading-rank":"3","aria-labelledby":"track-an-ai-model-1"},l.createElement(t.h3,{id:"track-an-ai-model-1"},l.createElement(t.a,{href:"#track-an-ai-model-1"},"Track an AI model")),"\n",l.createElement(t.ul,null,"\n",l.createElement(t.li,null,"To learn how to track a ",l.createElement(t.strong,null,"generative")," AI model, continue to ",l.createElement(t.a,{href:"#track-a-generative-ai-model"},"Track a ",l.createElement(t.strong,null,"generative")," AI model")),"\n",l.createElement(t.li,null,"To learn how to track a ",l.createElement(t.strong,null,"predictive")," AI model, continue to ",l.createElement(t.a,{href:"#track-a-predictive-ai-model"},"Track a ",l.createElement(t.strong,null,"predictive")," AI model")),"\n"),"\n"),l.createElement(t.section,{className:"heading","data-heading-rank":"2","aria-labelledby":"track-a-generative-ai-model"},l.createElement(t.h2,{id:"track-a-generative-ai-model"},l.createElement(t.a,{href:"#track-a-generative-ai-model"},"Track a ",l.createElement(t.strong,null,"generative")," AI model")),"\n",l.createElement(t.p,null,"In this lab, you will configure model tracking for governing a ",l.createElement(t.strong,null,"generative")," AI model trained to summarize insurance claims."),"\n",l.createElement(t.section,{className:"heading","data-heading-rank":"3","aria-labelledby":"configure-model-tracking"},l.createElement(t.h3,{id:"configure-model-tracking"},l.createElement(t.a,{href:"#configure-model-tracking"},"Configure model tracking")),"\n",l.createElement(t.ol,null,"\n",l.createElement(t.li,null,"In the IBM watsonx platform, click on the ",l.createElement(t.strong,null,"Navigation Menu")," in the upper left to expand it. Locate the ",l.createElement(t.strong,null,"Projects")," section of the menu, expanding it if necessary, and click on ",l.createElement(t.strong,null,"View all projects"),"."),"\n"),"\n",l.createElement(t.img,{src:"https://raw.githubusercontent.com/ibm-build-lab/VAD-VAR-Workshop/main/content//Watsonx/WatsonxGov/images/104/navigation-menu-projects.png",alt:""}),"\n",l.createElement(t.ol,{start:"2"},"\n",l.createElement(t.li,null,"Select your ",l.createElement(t.strong,null,"generative")," AI project that you created in ",l.createElement(t.strong,null,"lab 103")," (ex. ",l.createElement(t.code,null,"<your initials or unique string> - Auto claim summary"),")."),"\n"),"\n",l.createElement(t.img,{src:"https://raw.githubusercontent.com/ibm-build-lab/VAD-VAR-Workshop/main/content//Watsonx/WatsonxGov/images/104/generative-project-select.png",alt:""}),"\n",l.createElement(t.ol,{start:"3"},"\n",l.createElement(t.li,null,"Click on the ",l.createElement(t.strong,null,"Assets")," tab of the project. From the list of assets, locate the ",l.createElement(t.strong,null,"Insurance claim summarization")," entry and click on the three dots to the right to expand the context menu. Click on ",l.createElement(t.strong,null,"Go to AI factsheet")," from the menu."),"\n"),"\n",l.createElement(t.img,{src:"https://raw.githubusercontent.com/ibm-build-lab/VAD-VAR-Workshop/main/content//Watsonx/WatsonxGov/images/104/view-ai-factsheet.png",alt:""}),"\n",l.createElement(t.ol,{start:"4"},"\n",l.createElement(t.li,null,"In the ",l.createElement(t.strong,null,"Governance")," section of the ",l.createElement(t.strong,null,"AI Factsheet"),", click on the ",l.createElement(t.strong,null,"Track in AI use case")," button."),"\n"),"\n",l.createElement(t.img,{src:"https://raw.githubusercontent.com/ibm-build-lab/VAD-VAR-Workshop/main/content//Watsonx/WatsonxGov/images/104/generative-track-in-ai-use-case.png",alt:""}),"\n",l.createElement(t.ol,{start:"5"},"\n",l.createElement(t.li,null,"Click the radio button to the left of the AI use case you created in ",l.createElement(t.strong,null,"lab 102")," (ex. ",l.createElement(t.code,null,"<your initials or unique string> - Claim summarization"),"). Click ",l.createElement(t.strong,null,"Next"),"."),"\n"),"\n",l.createElement(t.img,{src:"https://raw.githubusercontent.com/ibm-build-lab/VAD-VAR-Workshop/main/content//Watsonx/WatsonxGov/images/104/select-generative-ai-use-case.png",alt:""}),"\n",l.createElement(t.ol,{start:"6"},"\n",l.createElement(t.li,null,"\n",l.createElement(t.p,null,"When asked to ",l.createElement(t.strong,null,"Define approach"),", leave ",l.createElement(t.strong,null,"Default approach")," selected and click ",l.createElement(t.strong,null,"Next"),". When asked to assign a model version, leave ",l.createElement(t.strong,null,"Experimental")," selected and click ",l.createElement(t.strong,null,"Next"),". Note that you can manually assign a version number here, or choose a more production-ready version number depending on the state of the model. Click ",l.createElement(t.strong,null,"Track asset")," to start tracking the model."),"\n"),"\n",l.createElement(t.li,null,"\n",l.createElement(t.p,null,"Note that the ",l.createElement(t.strong,null,"Governance")," section of the ",l.createElement(t.strong,null,"AI Factsheet")," now contains information on the associated AI use case, approach used, model version, and lifecycle phase (",l.createElement(t.strong,null,"Develop"),")."),"\n"),"\n"),"\n",l.createElement(t.p,null,"You have successfully configured model tracking for a ",l.createElement(t.strong,null,"generative")," AI model."),"\n"),l.createElement(t.section,{className:"heading","data-heading-rank":"3","aria-labelledby":"view-the-updated-ai-use-case-with-the-tracked-model"},l.createElement(t.h3,{id:"view-the-updated-ai-use-case-with-the-tracked-model"},l.createElement(t.a,{href:"#view-the-updated-ai-use-case-with-the-tracked-model"},"View the updated AI use case with the tracked model")),"\n",l.createElement(t.ol,null,"\n",l.createElement(t.li,null,"In the upper right corner of the ",l.createElement(t.strong,null,"Governance")," section of the ",l.createElement(t.strong,null,"AI Factsheet"),", click the ",l.createElement(t.strong,null,"View details")," arrow to take you to your associated AI use case."),"\n"),"\n",l.createElement(t.img,{src:"https://raw.githubusercontent.com/ibm-build-lab/VAD-VAR-Workshop/main/content//Watsonx/WatsonxGov/images/104/view-details.png",alt:""}),"\n",l.createElement(t.ol,{start:"2"},"\n",l.createElement(t.li,null,"Click on the ",l.createElement(t.strong,null,"Lifecycle")," tab, then scroll down to the map of models contained in the ",l.createElement(t.strong,null,"Default approach")," section. Note that there are four lifecycle sections listed (",l.createElement(t.strong,null,"Develop"),", ",l.createElement(t.strong,null,"Test"),", ",l.createElement(t.strong,null,"Validate"),", and ",l.createElement(t.strong,null,"Operate"),"). The tracked model has not yet been promoted to a deployment space, so it is listed in the ",l.createElement(t.strong,null,"Develop")," section of the lifecycle."),"\n"),"\n",l.createElement(t.img,{src:"https://raw.githubusercontent.com/ibm-build-lab/VAD-VAR-Workshop/main/content//Watsonx/WatsonxGov/images/104/generative-lifecycle-visualization.png",alt:""}),"\n",l.createElement(t.blockquote,null,"\n",l.createElement(t.p,null,l.createElement(t.strong,null,"Note:")," the ",l.createElement(t.strong,null,"Lifecycle")," tab of the ",l.createElement(t.strong,null,"AI use case")," is useful for stakeholders and business users to get a quick overview of all the models attempting to address a particular issue, with the ability to drill down for more information as necessary, all without needing access to the project where the developers and data engineers are working."),"\n"),"\n",l.createElement(t.p,null,"You have successfully enabled model tracking, and can now observe the changes as the model goes through the lifecycle."),"\n"),l.createElement(t.section,{className:"heading","data-heading-rank":"3","aria-labelledby":"congratulations-youve-reached-the-end-of-lab-104-for-tracking-a-generative-ai-model"},l.createElement(t.h3,{id:"congratulations-youve-reached-the-end-of-lab-104-for-tracking-a-generative-ai-model"},l.createElement(t.a,{href:"#congratulations-youve-reached-the-end-of-lab-104-for-tracking-a-generative-ai-model"},"Congratulations, you've reached the end of lab 104 for tracking a ",l.createElement(t.strong,null,"generative")," AI model.")),"\n",l.createElement(t.p,null,"Click, ",l.createElement(t.strong,null,l.createElement(t.a,{href:"/watsonx/watsonxgov/105"},"lab 105"))," to start next lab."),"\n")),l.createElement(t.section,{className:"heading","data-heading-rank":"2","aria-labelledby":"track-a-predictive-ai-model"},l.createElement(t.h2,{id:"track-a-predictive-ai-model"},l.createElement(t.a,{href:"#track-a-predictive-ai-model"},"Track a ",l.createElement(t.strong,null,"predictive")," AI model")),"\n",l.createElement(t.p,null,"In this lab, you will configure model tracking for governing a ",l.createElement(t.strong,null,"predictive")," AI model trained to assess the risk associated with auto insurance policies."),"\n",l.createElement(t.section,{className:"heading","data-heading-rank":"3","aria-labelledby":"configure-model-tracking-1"},l.createElement(t.h3,{id:"configure-model-tracking-1"},l.createElement(t.a,{href:"#configure-model-tracking-1"},"Configure model tracking")),"\n",l.createElement(t.ol,null,"\n",l.createElement(t.li,null,"In the IBM watsonx platform, click on the ",l.createElement(t.strong,null,"Navigation Menu")," in the upper left to expand it. Locate the ",l.createElement(t.strong,null,"Projects")," section of the menu, expanding it if necessary, and click on ",l.createElement(t.strong,null,"View all projects"),"."),"\n"),"\n",l.createElement(t.img,{src:"https://raw.githubusercontent.com/ibm-build-lab/VAD-VAR-Workshop/main/content//Watsonx/WatsonxGov/images/104/navigation-menu-projects.png",alt:""}),"\n",l.createElement(t.ol,{start:"2"},"\n",l.createElement(t.li,null,"Select your ",l.createElement(t.strong,null,"predictive")," AI project that you created in ",l.createElement(t.strong,null,"lab 103")," (ex. ",l.createElement(t.code,null,"<your initials or unique string> - Auto policy risk"),")."),"\n"),"\n",l.createElement(t.img,{src:"https://raw.githubusercontent.com/ibm-build-lab/VAD-VAR-Workshop/main/content//Watsonx/WatsonxGov/images/104/predictive-project-select.png",alt:""}),"\n",l.createElement(t.ol,{start:"3"},"\n",l.createElement(t.li,null,"Click on the ",l.createElement(t.strong,null,"Assets")," tab of the project. From the list of assets, locate and click on the ",l.createElement(t.strong,null,"AutoAI policy risk - P4 Ridge - Model")," entry to open the model information screen."),"\n"),"\n",l.createElement(t.img,{src:"https://raw.githubusercontent.com/ibm-build-lab/VAD-VAR-Workshop/main/content//Watsonx/WatsonxGov/images/104/view-model-info.png",alt:""}),"\n",l.createElement(t.ol,{start:"4"},"\n",l.createElement(t.li,null,"In the ",l.createElement(t.strong,null,"Governance")," section, click on the ",l.createElement(t.strong,null,"Track in AI use case")," button."),"\n"),"\n",l.createElement(t.img,{src:"https://raw.githubusercontent.com/ibm-build-lab/VAD-VAR-Workshop/main/content//Watsonx/WatsonxGov/images/104/track-this-model.png",alt:""}),"\n",l.createElement(t.ol,{start:"5"},"\n",l.createElement(t.li,null,"Click the radio button to the left of the AI use case you created in ",l.createElement(t.strong,null,"lab 102")," (ex. ",l.createElement(t.code,null,"<your initials or unique string> - Auto policy risk"),"). Click ",l.createElement(t.strong,null,"Next"),"."),"\n"),"\n",l.createElement(t.img,{src:"https://raw.githubusercontent.com/ibm-build-lab/VAD-VAR-Workshop/main/content//Watsonx/WatsonxGov/images/104/select-predictive-ai-use-case.png",alt:""}),"\n",l.createElement(t.ol,{start:"6"},"\n",l.createElement(t.li,null,"When asked to ",l.createElement(t.strong,null,"Define approach"),", leave ",l.createElement(t.strong,null,"Default approach")," selected and click ",l.createElement(t.strong,null,"Next"),". When asked to assign a model version, leave ",l.createElement(t.strong,null,"Experimental")," selected and click ",l.createElement(t.strong,null,"Next"),". Note that you can manually assign a version number here, or choose a more production-ready version number depending on the state of the model. Click ",l.createElement(t.strong,null,"Track asset")," to start tracking the model."),"\n"),"\n",l.createElement(t.p,null,"You have successfully configured model tracking for a ",l.createElement(t.strong,null,"predictive")," AI model."),"\n"),l.createElement(t.section,{className:"heading","data-heading-rank":"3","aria-labelledby":"view-the-updated-ai-use-case-with-the-tracked-model-1"},l.createElement(t.h3,{id:"view-the-updated-ai-use-case-with-the-tracked-model-1"},l.createElement(t.a,{href:"#view-the-updated-ai-use-case-with-the-tracked-model-1"},"View the updated AI use case with the tracked model")),"\n",l.createElement(t.ol,null,"\n",l.createElement(t.li,null,"In the upper right corner of the ",l.createElement(t.strong,null,"Governance")," section, click the ",l.createElement(t.strong,null,"View details")," arrow to take you to your associated AI use case."),"\n"),"\n",l.createElement(t.img,{src:"https://raw.githubusercontent.com/ibm-build-lab/VAD-VAR-Workshop/main/content//Watsonx/WatsonxGov/images/104/open-in-ai-use-case.png",alt:""}),"\n",l.createElement(t.ol,{start:"2"},"\n",l.createElement(t.li,null,"Click on the ",l.createElement(t.strong,null,"Lifecycle")," tab, then scroll down to the map of models contained in the ",l.createElement(t.strong,null,"Default approach")," section. Note that there are four lifecycle sections listed (",l.createElement(t.strong,null,"Develop"),", ",l.createElement(t.strong,null,"Test"),", ",l.createElement(t.strong,null,"Validate"),", and ",l.createElement(t.strong,null,"Operate"),"). The tracked model has not yet been promoted to a deployment space, so it is listed in the ",l.createElement(t.strong,null,"Develop")," section of the lifecycle."),"\n"),"\n",l.createElement(n,{text:"There is a quiz question on the model lifecycle."}),"\n",l.createElement(t.img,{src:"https://raw.githubusercontent.com/ibm-build-lab/VAD-VAR-Workshop/main/content//Watsonx/WatsonxGov/images/104/predictive-lifecycle-visualization.png",alt:""}),"\n",l.createElement(t.blockquote,null,"\n",l.createElement(t.p,null,l.createElement(t.strong,null,"Note:")," the ",l.createElement(t.strong,null,"Lifecycle")," tab of the ",l.createElement(t.strong,null,"AI use case")," is useful for stakeholders and business users to get a quick overview of all the models attempting to address a particular issue, with the ability to drill down for more information as necessary, all without needing access to the project where the developers and data engineers are working."),"\n"),"\n",l.createElement(t.p,null,"You have successfully enabled model tracking, and can now observe the changes as the model goes through the lifecycle."),"\n"),l.createElement(t.section,{className:"heading","data-heading-rank":"3","aria-labelledby":"congratulations-youve-reached-the-end-of-lab-104-for-tracking-a-predictive-ai-model"},l.createElement(t.h3,{id:"congratulations-youve-reached-the-end-of-lab-104-for-tracking-a-predictive-ai-model"},l.createElement(t.a,{href:"#congratulations-youve-reached-the-end-of-lab-104-for-tracking-a-predictive-ai-model"},"Congratulations, you've reached the end of lab 104 for tracking a ",l.createElement(t.strong,null,"predictive")," AI model.")),"\n",l.createElement(t.p,null,"Click, ",l.createElement(t.strong,null,l.createElement(t.a,{href:"/watsonx/watsonxgov/105"},"lab 105"))," to start next lab.")))))}var o=function(e){void 0===e&&(e={});const{wrapper:t}=Object.assign({},(0,a.ah)(),e.components);return t?l.createElement(t,e,l.createElement(r,e)):r(e)};var c=n(4184),i=n.n(c),s=n(4690),m=n(1140),u=n(8623),d=n(8531),h=n(3383),g=n(7315);const E=e=>{const{data:{mdx:{tableOfContents:{items:t},frontmatter:{toc:n=!0,title:a,timeToComplete:r,updated:o}}},children:c}=e,s=(0,l.useRef)(null),{0:E}=(0,l.useState)(""),p=(null===n||n)&&t;return l.createElement(l.Fragment,null,l.createElement(m.Z,{timeToComplete:r,updated:o},t[0].title||a||""),l.createElement(d.Z,{className:g.YS},l.createElement("article",{className:i()(g.Y2,!p&&g.ey),ref:s},l.createElement(u.Z,{components:{h1:()=>null}},c)),p&&l.createElement(h.Z,{itemsList:t,maxDepth:2,currSection:E})))},p=e=>{const{location:{pathname:t},data:{mdx:{frontmatter:{title:n},tableOfContents:{items:a}}}}=e;return l.createElement(s.Z,{pathname:t,title:n||a[0].title||void 0})};function k(e){return l.createElement(E,e,l.createElement(o,e))}}}]);
//# sourceMappingURL=component---src-pages-mdx-fields-slug-tsx-content-file-path-content-watsonx-watsonx-gov-104-md-aae372ff4fee3c9a30c0.js.map