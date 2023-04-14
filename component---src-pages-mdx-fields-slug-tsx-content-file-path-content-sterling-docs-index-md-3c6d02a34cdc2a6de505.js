"use strict";(self.webpackChunkvad_var_site=self.webpackChunkvad_var_site||[]).push([[454],{4939:function(e,t,n){n.r(t),n.d(t,{Head:function(){return p},default:function(){return f}});var l=n(1151),r=n(7294);function i(e){const t=Object.assign({h1:"h1",p:"p",strong:"strong",h2:"h2",a:"a",ul:"ul",li:"li",img:"img"},(0,l.ah)(),e.components),{SubHeader:n,QuizAlert:i}=t;return i||a("QuizAlert",!0),n||a("SubHeader",!0),r.createElement(r.Fragment,null,r.createElement(t.h1,{id:"introduction"},"Introduction"),"\n",r.createElement(n,{timeToComplete:e.pageContext.frontmatter.timeToComplete,updated:e.pageContext.frontmatter.updated}),"\n",r.createElement(t.p,null,"Welcome to the IBM Sterling Data Exchange Level 3 demonstration workshop! The goal of this guide is to provide IBM and Business Partner technical sellers with the knowledge and tools to perform hands-on demonstrations of IBM Sterling B2B Integrator."),"\n",r.createElement(t.p,null,"In addition to completing all the steps in this demonstration guide, to obtain the associated IBM Sterling Data Exchange Level 3 badge:"),"\n",r.createElement(t.p,null,r.createElement(t.strong,null,"IBM Technical Sellers")," must develop and record a Stand & Deliver presentation. This video is intended to simulate delivery of a “live” demo in front of a client — on camera. IBMers will have flexibility in defining a hypothetical client, the pain points the client has, and the goals they aspire to achieve. The recording will then cover the seller’s hands-on demonstration and pitch to the client the value of the IBM solution using the environment and techniques of this lab. Specific criteria that must be demonstrated as part of the Stand & Deliver recordings is provided within the documentation that accompanies the Level 3 course in Your Learning."),"\n",r.createElement(t.p,null,r.createElement(t.strong,null,"Business Partners")," must pass an accreditation quiz after completing this demonstration guide. The quiz consists of multiple choice questions, with four possible responses (and only one correct answer) for each question. The quiz verifies use of the demonstration environment and not general knowledge of the offering.",r.createElement(t.strong,null,"Hint: keep the demonstration guide and the associated IBM Technology Zone (TechZone) environment active while completing the quiz.")),"\n",r.createElement(i,{text:"Topics that are important for the quiz are marked in a note like this"}),"\n",r.createElement(t.p,null,"Before jumping to the Demonstration Overview, please read the guidance below. ",r.createElement(t.strong,null,"Reading and understanding the information will save time while completing the steps in this guide.")),"\n",r.createElement(t.h2,{id:"recommended-browsers"},r.createElement(t.a,{href:"#recommended-browsers"},"Recommended browsers")),"\n",r.createElement(t.p,null,"It is recommended to use either Firefox or Safari web browsers. There has been at least one instance reported using the Chrome browser and some popup menus not being populated and some popup dialogs not appearing. No testing has been done using the Microsoft Edge browser."),"\n",r.createElement(t.h2,{id:"helpful-tips-for-using-this-demonstration-guide-and-environment"},r.createElement(t.a,{href:"#helpful-tips-for-using-this-demonstration-guide-and-environment"},"Helpful tips for using this demonstration guide and environment")),"\n",r.createElement(t.p,null,"Throughout the guide, images are used to help guide students through the demonstration."),"\n",r.createElement(t.p,null,"The following styles of highlighting are utilized in images:"),"\n",r.createElement(t.ul,null,"\n",r.createElement(t.li,null,"Action highlight box: Illustrates where to click, enter, or select an item:"),"\n"),"\n",r.createElement(t.img,{src:"/1681488583586.52121592669/ClickActionRectangle.png",alt:"image"}),"\n",r.createElement(t.ul,null,"\n",r.createElement(t.li,null,"\n",r.createElement(t.p,null,"Path/explore highlight box: Illustrates one of two things:"),"\n",r.createElement(t.ul,null,"\n",r.createElement(t.li,null,"the path to follow to get to a specific location in the user interface"),"\n",r.createElement(t.li,null,"areas to explore"),"\n"),"\n"),"\n"),"\n",r.createElement(t.img,{src:"/1681488583686.52611592818/PathExploreHighlight.png",alt:"image"}),"\n",r.createElement(t.ul,null,"\n",r.createElement(t.li,null,"Copy to clipboard box: The text is copied to the clipboard. Click the copy icon (highlighted below) and then paste using the operating system's paste function. For example, entering ++ctrl++",r.createElement(t.strong,null,"+v"),", ++cmd++",r.createElement(t.strong,null,"+v"),", or right-click and select paste."),"\n"),"\n",r.createElement(t.img,{src:"/1681488583694.52661592829/Usage-Clipboard.png",alt:"image"}),"\n",r.createElement(t.h2,{id:"acronyms"},r.createElement(t.a,{href:"#acronyms"},"Acronyms")),"\n",r.createElement(t.p,null,"The following acronyms are used throughout this demonstration guide:"),"\n",r.createElement(t.ul,null,"\n",r.createElement(t.li,null,"Applicability Statement 2 (AS2)"),"\n",r.createElement(t.li,null,"Application programming interfaces (APIs)"),"\n",r.createElement(t.li,null,"Artificial Intelligence (AI)"),"\n",r.createElement(t.li,null,"Business Partner (BP)"),"\n",r.createElement(t.li,null,"Electronic Data Interchange (EDI)"),"\n",r.createElement(t.li,null,"IBM Sterling Business to Business Integrator (B2Bi)"),"\n",r.createElement(t.li,null,"IBM Sterling Partner Engagement Manager (PEM)"),"\n",r.createElement(t.li,null,"IBM Technology Zone (ITZ)"),"\n",r.createElement(t.li,null,"Red Hat OpenShift on IBM Cloud (ROKS)"),"\n",r.createElement(t.li,null,"User Interface (UI)"),"\n",r.createElement(t.li,null,"Virtual Machine (VM)"),"\n",r.createElement(t.li,null,"Yet Another Markup Language (YAML)"),"\n"),"\n",r.createElement(t.p,null,"It is now time to proceed to the Demonstration Overview."))}var o=function(e){void 0===e&&(e={});const{wrapper:t}=Object.assign({},(0,l.ah)(),e.components);return t?r.createElement(t,e,r.createElement(i,e)):i(e)};function a(e,t){throw new Error("Expected "+(t?"component":"object")+" `"+e+"` to be defined: you likely forgot to import, pass, or provide it.")}var s=n(7315),c=n(2125),m=n(403),u=n(4690);const h={table:m.y6,a:m.IW,blockquote:m.R4,SubHeader:m.bU,img:m.fb,code:m.dn,QuizAlert:m.SA},d=r.memo((function(e){let{children:t}=e;return r.createElement(l.Zo,{components:{...h}},t)})),g=e=>{const{data:{mdx:{tableOfContents:{items:t},frontmatter:{toc:n=!0}}},children:l}=e,i=(0,r.useRef)(null),{0:o,1:a}=(0,r.useState)("");return(0,r.useEffect)((()=>{if(!i.current)return;const e=i.current.querySelectorAll("h2,h3,h4,h5"),t=new IntersectionObserver((e=>{e.forEach((e=>{e.isIntersecting&&a(e.target.id)}))}),{rootMargin:"0px 0px -95% 0px",threshold:0});return e.forEach((e=>{t.observe(e)})),()=>t.disconnect()}),[]),r.createElement(r.Fragment,null,r.createElement("article",{className:s.Y,ref:i},r.createElement(d,null,l)),(null===n||n)&&t&&r.createElement(c.Z,{itemsList:t,maxDepth:1,currSection:o}))},p=e=>{const{location:{pathname:t},data:{mdx:{frontmatter:{title:n},tableOfContents:{items:l}}}}=e;return r.createElement(u.Z,{pathname:t,title:n||l[0].title||void 0})};function f(e){return r.createElement(g,e,r.createElement(o,e))}}}]);
//# sourceMappingURL=component---src-pages-mdx-fields-slug-tsx-content-file-path-content-sterling-docs-index-md-3c6d02a34cdc2a6de505.js.map