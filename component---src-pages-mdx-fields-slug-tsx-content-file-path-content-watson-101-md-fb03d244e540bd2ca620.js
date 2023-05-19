"use strict";(self.webpackChunkvad_var_site=self.webpackChunkvad_var_site||[]).push([[22],{7660:function(e,t,n){n.r(t),n.d(t,{Head:function(){return E},default:function(){return f}});var l=n(1151),a=n(7294);function r(e){const t=Object.assign({section:"section",h1:"h1",h2:"h2",a:"a",p:"p",table:"table",thead:"thead",tr:"tr",th:"th",tbody:"tbody",td:"td",strong:"strong",ul:"ul",li:"li",h3:"h3",img:"img",ol:"ol",blockquote:"blockquote"},(0,l.ah)(),e.components);return a.createElement(t.section,{className:"heading","data-heading-rank":"1","aria-labelledby":"101-ibm-watson-assistant-hands-on-lab"},a.createElement(t.h1,{id:"101-ibm-watson-assistant-hands-on-lab"},"101: IBM Watson Assistant Hands-on Lab"),"\n",a.createElement(t.section,{className:"heading","data-heading-rank":"2","aria-labelledby":"in-this-section"},a.createElement(t.h2,{id:"in-this-section"},a.createElement(t.a,{href:"#in-this-section"},"In this section")),"\n",a.createElement(t.p,null,"Explore what a virtual assistant built with Watson Assistant looks like from various persona\nperspectives."),"\n"),a.createElement(t.section,{className:"heading","data-heading-rank":"2","aria-labelledby":"end-users-perspective"},a.createElement(t.h2,{id:"end-users-perspective"},a.createElement(t.a,{href:"#end-users-perspective"},"End user's perspective")),"\n",a.createElement(t.p,null,"Imagine you are an end user, and explore this virtual assistant build with Watson Assistant:"),"\n",a.createElement(t.p,null,a.createElement(t.a,{href:"http://lendyr.com/"},"Lendyr.com")),"\n",a.createElement(t.p,null,"Try running through some of these conversations with the assistant:"),"\n",a.createElement(t.table,null,a.createElement(t.thead,null,a.createElement(t.tr,null,a.createElement(t.th,null,"Conversation #1"),a.createElement(t.th,null,"Conversation #2"),a.createElement(t.th,null,"Conversation #3"),a.createElement(t.th,null,"Conversation #4"))),a.createElement(t.tbody,null,a.createElement(t.tr,null,a.createElement(t.td,null,a.createElement(t.strong,null,"Send:")," I want to apply for a student loan",a.createElement("br"),a.createElement(t.strong,null,"Send:")," What's the limit on loan amount?",a.createElement("br"),a.createElement(t.strong,null,"Send:")," I'm coming from high school"),a.createElement(t.td,null,a.createElement(t.strong,null,"Send:")," Hey, I want to use the mortgage calculator",a.createElement("br"),a.createElement(t.strong,null,"Send:")," 400,000",a.createElement("br"),a.createElement(t.strong,null,"Send:")," actually make it $300,000"),a.createElement(t.td,null,a.createElement(t.strong,null,"Send:")," hey I want to send a million dollars to myself",a.createElement("br"),a.createElement(t.strong,null,"Send:")," tomorrow",a.createElement("br"),a.createElement(t.strong,null,"Send:")," ugh just let me talk to a real person!!!!!"),a.createElement(t.td,null,a.createElement(t.strong,null,"Send:")," loan application")))),"\n",a.createElement(t.p,null,"Take note of the features and functionality you see in the assistant:"),"\n",a.createElement(t.ul,null,"\n",a.createElement(t.li,null,"Asking questions as an end user"),"\n",a.createElement(t.li,null,"Identifying the question that the end user is asking, or the action they want to take"),"\n",a.createElement(t.li,null,"Allowing the end user to interrupt the conversation"),"\n",a.createElement(t.li,null,'Doing something different if the end user answers "yes" versus answering "no"'),"\n",a.createElement(t.li,null,"Starting over when something goes wrong"),"\n",a.createElement(t.li,null,"A panel where the end user has the conversation with the assistant"),"\n",a.createElement(t.li,null,"Synonyms and context (loan coming from high school = will be an undergraduate\nstudent)"),"\n"),"\n"),a.createElement(t.section,{className:"heading","data-heading-rank":"2","aria-labelledby":"setting-up-watson-assistant"},a.createElement(t.h2,{id:"setting-up-watson-assistant"},a.createElement(t.a,{href:"#setting-up-watson-assistant"},"Setting up Watson Assistant")),"\n",a.createElement(t.section,{className:"heading","data-heading-rank":"3","aria-labelledby":"option-1-ibm-technology-zone"},a.createElement(t.h3,{id:"option-1-ibm-technology-zone"},a.createElement(t.a,{href:"#option-1-ibm-technology-zone"},"Option 1: IBM Technology Zone")),"\n",a.createElement(t.p,null,"If you are a business partner with access to TechZone, create a sandbox environment using the ",a.createElement(t.a,{href:"https://techzone.ibm.com/collection/watson-enterprise"},"Watson Enterprise collection"),"."),"\n"),a.createElement(t.section,{className:"heading","data-heading-rank":"3","aria-labelledby":"option-2-ibm-cloud"},a.createElement(t.h3,{id:"option-2-ibm-cloud"},a.createElement(t.a,{href:"#option-2-ibm-cloud"},"Option 2: IBM Cloud")),"\n",a.createElement(t.p,null,"Starting by navigating to ",a.createElement(t.a,{href:"https://cloud.ibm.com"},"IBM Cloud")),"\n",a.createElement(t.img,{src:"/1684512676908.34551089138/image-003.png",alt:""}),"\n",a.createElement(t.p,null,"If you already have a Trial, Plus, or Enterprise instance of Watson Assistant, open it up and\ncreate a new assistant. If you don’t have an instance of Watson Assistant, follow these\ninstructions to create a free Trial instance."),"\n",a.createElement(t.p,null,'To create a free Trial instance, Search for "Watson Assistant" in the top search bar and click\n',a.createElement(t.strong,null,"Watson Assistant")," under ",a.createElement(t.strong,null,"Catalog Results"),"."),"\n",a.createElement(t.img,{src:"/1684512676908.34551089139/image-004.jpg",alt:""}),"\n",a.createElement(t.p,null,"Now we can create our assistant by:"),"\n",a.createElement(t.ol,null,"\n",a.createElement(t.li,null,"Select the region that's closest to your location."),"\n",a.createElement(t.li,null,"Select the ",a.createElement(t.strong,null,"Trial")," pricing plan. (This is the trial version of the Plus pricing plan.)"),"\n",a.createElement(t.li,null,"Agree to the ",a.createElement(t.strong,null,"Terms and Conditions"),"."),"\n",a.createElement(t.li,null,"Click on the ",a.createElement(t.strong,null,"Create")," button in the lower-right area of the page."),"\n"),"\n",a.createElement(t.img,{src:"/1684512676908.34551089140/image-005.jpg",alt:""}),"\n",a.createElement(t.p,null,"Now let's validate the creation of our new assistant:"),"\n",a.createElement(t.ol,null,"\n",a.createElement(t.li,null,"Click the ",a.createElement(t.strong,null,"Resource list")," icon on the left-side navigation."),"\n",a.createElement(t.li,null,"Expand the ",a.createElement(t.strong,null,"AI/Machine Learning")," section"),"\n",a.createElement(t.li,null,"You should now be able to see your newly created Watson Assistant"),"\n"),"\n",a.createElement(t.img,{src:"/1684512676908.34551089141/image-006.jpg",alt:""}),"\n",a.createElement(t.img,{src:"/1684512676908.34551089142/image-007.png",alt:""}),"\n",a.createElement(t.blockquote,null,"\n",a.createElement(t.p,null,"Note: The service you create may have a suffix, like “Watson Assistant-hu.” These names are\nidentifiers for you to distinguish between the multiple services you may create. You can change\nthem if you like."),"\n"),"\n",a.createElement(t.p,null,"To launch Watson Assistant, click on the new service you created. From here, clicking the ",a.createElement(t.strong,null,"Launch Watson Assistant")," button will launch to the Watson Assistant homepage."),"\n",a.createElement(t.img,{src:"/1684512676908.34551089143/image-008.jpg",alt:""}),"\n",a.createElement(t.ol,null,"\n",a.createElement(t.li,null,"Input a name you like into the ",a.createElement(t.strong,null,"Assistant name")," field."),"\n",a.createElement(t.li,null,"Provide a short description in the ",a.createElement(t.strong,null,"Description field")," (this is optional)."),"\n",a.createElement(t.li,null,"Click the ",a.createElement(t.strong,null,"Next")," button in the top-right corner of the page."),"\n"),"\n",a.createElement(t.img,{src:"/1684512676908.34551089145/image-010.jpg",alt:""}),"\n",a.createElement(t.p,null,"On the following screen, make these selections:"),"\n",a.createElement(t.ol,null,"\n",a.createElement(t.li,null,"Select ",a.createElement(t.strong,null,"Web")," as this assistant will be accessed via a web browser."),"\n",a.createElement(t.li,null,"Select ",a.createElement(t.strong,null,"Banking and financial services")," as the industry."),"\n",a.createElement(t.li,null,"Select ",a.createElement(t.strong,null,"Developer")," as our builder persona."),"\n",a.createElement(t.li,null,"Select ",a.createElement(t.strong,null,"I want to provide confident answers to common questions")," as the main purpose of the assistant."),"\n",a.createElement(t.li,null,"Now click the ",a.createElement(t.strong,null,"Next")," button on the top-right"),"\n"),"\n",a.createElement(t.img,{src:"/1684512676908.34551089146/image-013.jpg",alt:""}),"\n",a.createElement(t.p,null,"The next screen will now allow you to customize the look and feel of your assistant. Customize now or feel free to just click the ",a.createElement(t.strong,null,"Next")," button again in the top-right."),"\n",a.createElement(t.img,{src:"/1684512676908.34551089147/image-014.jpg",alt:""}),"\n",a.createElement(t.p,null,"This screen allows you to preview the web chat of the assistant. Feel free to click the ",a.createElement(t.strong,null,"Create")," button in the top-right."),"\n",a.createElement(t.img,{src:"/1684512676908.34551089148/image-015.jpg",alt:""}),"\n",a.createElement(t.p,null,"Finally, as shown on the image below, you will see the Home page of your new assistant."),"\n",a.createElement(t.img,{src:"/1684512676912.34551089149/image-016.png",alt:""}),"\n")),a.createElement(t.section,{className:"heading","data-heading-rank":"2","aria-labelledby":"builders-perspective"},a.createElement(t.h2,{id:"builders-perspective"},a.createElement(t.a,{href:"#builders-perspective"},"Builder's perspective")),"\n",a.createElement(t.p,null,"Let's explore the persona of the Builder."),"\n",a.createElement(t.p,null,"To explore this perspective, you will create a copy of the Lendyr demo assistant in the new assistant that's been created."),"\n",a.createElement(t.p,null,"From the Home page, click on the ",a.createElement(t.strong,null,"Actions")," tab on the left-side. This is where content is written that the virtual assistant will be trained to answer."),"\n",a.createElement(t.img,{src:"/1684512676912.34551089151/image-018.jpg",alt:""}),"\n",a.createElement(t.blockquote,null,"\n",a.createElement(t.p,null,"Actions are a representation of the tasks you want your assistant to help your customers with.\nEach action contains a series of steps that represent individual exchanges with a customer.\nActions allow you to build an Assistant that can easily converse with a customer with ",a.createElement(t.strong,null,"no\ncoding")," knowledge needed!"),"\n"),"\n",a.createElement(t.p,null,"Now click the ",a.createElement(t.strong,null,"Global settings")," cog icon in the top-right. We will add some predefined actions by:"),"\n",a.createElement(t.ol,null,"\n",a.createElement(t.li,null,"Clicking the ",a.createElement(t.strong,null,"Upload/Download")," tab."),"\n",a.createElement(t.li,null,"Down ",a.createElement(t.a,{href:"https://raw.githubusercontent.com/CloudPak-Outcomes/Watson-Asst-Lab/main/action-skills/LendyrActions_v17_Live_lastchecked03Jan2023.json"},"this json file"),"."),"\n",a.createElement(t.li,null,"Then proceed to upload it into the web page by selecting the file or dropping it in."),"\n",a.createElement(t.li,null,"Then click the ",a.createElement(t.strong,null,"Upload")," button."),"\n",a.createElement(t.li,null,"If a modal displays click ",a.createElement(t.strong,null,"Upload and replace"),"."),"\n"),"\n",a.createElement(t.img,{src:"/1684512676912.34551089152/image-021.png",alt:""}),"\n",a.createElement(t.img,{src:"/1684512676912.34551089153/image-022.png",alt:""}),"\n",a.createElement(t.p,null,"A toast notification should now display confirming your upload. Finally, close the global settings window."),"\n",a.createElement(t.img,{src:"/1684512676912.34551089154/image-023.jpg",alt:""}),"\n",a.createElement(t.p,null,"Your assistant is now a copy of the Lendyr.com assistant!"),"\n"),a.createElement(t.section,{className:"heading","data-heading-rank":"2","aria-labelledby":"developers-perspective"},a.createElement(t.h2,{id:"developers-perspective"},a.createElement(t.a,{href:"#developers-perspective"},"Developer's perspective")),"\n",a.createElement(t.p,null,"Developers can work in the Actions page too, but they often focus on more technical features. From the ",a.createElement(t.strong,null,"Home")," page, open the left menu and click ",a.createElement(t.strong,null,"Integrations")," on the bottom-left."),"\n",a.createElement(t.img,{src:"/1684512676912.34551089157/image-026.jpg",alt:""}),"\n",a.createElement(t.p,null,"Watson Assistant Integrations add various channels, extensions, and third-party integrations to easily configure and deploy your assistant. Spend a few minutes exploring the Integrations page."),"\n",a.createElement(t.p,null,"Earlier, we noted that developers spend more time on technical features than on the Actions page, where builders create new conversational flows. Why is that? Since Watson Assistant is purposefully designed to make it easy for non-technical builders to author conversational flows, developers can focus in on the parts of a virtual assistant that require their technical expertise, like integrations with other applications."),"\n"),a.createElement(t.section,{className:"heading","data-heading-rank":"2","aria-labelledby":"product-managers-perspective"},a.createElement(t.h2,{id:"product-managers-perspective"},a.createElement(t.a,{href:"#product-managers-perspective"},"Product manager's perspective")),"\n",a.createElement(t.p,null,"Finally, let's explore the perspective of a product manager."),"\n",a.createElement(t.p,null,"Product managers can work in the Actions and Integrations pages, but they typically focus on overall success, continuous improvement, and expansion. Using the left menu explore the ",a.createElement(t.strong,null,"Publish"),", ",a.createElement(t.strong,null,"Environments"),", and ",a.createElement(t.strong,null,"Analyze")," pages."),"\n",a.createElement(t.img,{src:"/1684512676912.34551089159/image-028.jpg",alt:""})))}var o=function(e){void 0===e&&(e={});const{wrapper:t}=Object.assign({},(0,l.ah)(),e.components);return t?a.createElement(t,e,a.createElement(r,e)):r(e)},s=n(4184),i=n.n(s),c=n(4690),m=n(1140),u=n(2565),h=n(8531),d=n(3383),p=n(7315);const g=e=>{const{data:{mdx:{tableOfContents:{items:t},frontmatter:{toc:n=!0,title:l,timeToComplete:r,updated:o}}},children:s}=e,c=(0,a.useRef)(null),{0:g}=(0,a.useState)(""),E=(null===n||n)&&t;return a.createElement(a.Fragment,null,a.createElement(m.Z,{timeToComplete:r,updated:o},t[0].title||l||""),a.createElement(h.Z,{className:p.YS},a.createElement("article",{className:i()(p.Y2,!E&&p.ey),ref:c},a.createElement(u.Z,{components:{h1:()=>null}},s)),E&&a.createElement(d.Z,{itemsList:t,maxDepth:2,currSection:g})))},E=e=>{const{location:{pathname:t},data:{mdx:{frontmatter:{title:n},tableOfContents:{items:l}}}}=e;return a.createElement(c.Z,{pathname:t,title:n||l[0].title||void 0})};function f(e){return a.createElement(g,e,a.createElement(o,e))}},2565:function(e,t,n){n.d(t,{Z:function(){return s}});var l=n(7294),a=n(1151),r=n(987);const o={table:r.y6,a:r.IW,blockquote:r.R4,SubHeader:r.bU,img:r.fb,code:r.dn,QuizAlert:r.SA};var s=(0,l.memo)((function(e){let{children:t,components:n={}}=e;return l.createElement(a.Zo,{components:{...o,...n}},t)}))},4690:function(e,t,n){var l=n(7294),a=n(1072),r=n(2401);t.Z=e=>{const{title:t,description:n,pathname:o,children:s}=e,{description:i,title:c,origin:m}=(0,r.Z)(),{i18n:{language:u}}=(0,a.$G)(),h={title:t||c,description:n||i,url:""+m+(o||"")};return l.createElement(l.Fragment,null,l.createElement("html",{lang:u}),l.createElement("link",{rel:"icon",href:"data:image/svg+xml,<svg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 100 100'><text y='0.9em' font-size='90'>🦺</text></svg>"}),l.createElement("title",null,h.title),l.createElement("link",{rel:"canonical",href:h.url}),l.createElement("meta",{name:"description",content:h.description}),l.createElement("meta",{property:"og:title",content:h.title}),l.createElement("meta",{property:"og:url",content:h.url}),l.createElement("meta",{property:"og:type",content:"website"}),l.createElement("meta",{property:"og:description",content:h.description}),l.createElement("meta",{name:"twitter:card",content:"summary"}),l.createElement("meta",{name:"twitter:title",content:h.title}),l.createElement("meta",{name:"twitter:url",content:h.url}),l.createElement("meta",{name:"twitter:description",content:h.description}),l.createElement("meta",{name:"twitter:site",content:"https://www.ibm.com"}),l.createElement("meta",{name:"twitter:creator",content:"@IBM"}),s)}},3383:function(e,t,n){n.d(t,{Z:function(){return c}});var l=n(7294),a=n(7500),r=n(4184),o=n.n(r),s=n(6488);const i=function(e,t,n){return void 0===t&&(t=[]),void 0===n&&(n=0),e.forEach((e=>{const{title:l,url:a,items:r}=e;t.splice(t.length,0,{depth:n,title:l,url:a}),r&&r.length>0&&i(r,t,n+1)})),t};var c=e=>{const{itemsList:t}=e,n=(0,l.useMemo)((()=>i(t[0].items||[])),[t]),r=(0,s.Z)("h1[id],h2[id]",{threshold:[0,1],rootMargin:"-48px 0px -90% 0px"});return n.length<1?null:l.createElement("nav",{className:"TableOfContents-module--toc--54d35"},l.createElement("div",{className:"TableOfContents-module--tocStack--90609"},l.createElement("h6",{className:"TableOfContents-module--tocHeader--05956"},l.createElement(a.rU,{to:"#",replace:!0},"On this page")),n.map(((e,t)=>{let{title:n,url:a}=e;return l.createElement("a",{className:o()("TableOfContents-module--link--b292b",r===a.substring(1)&&"TableOfContents-module--activeItem--3869f"),key:t,href:a},n)}))))}},7315:function(e,t,n){n.d(t,{Y2:function(){return l},YS:function(){return r},ey:function(){return a}});var l="{mdx-fields__slug}-module--article--e3d5a",a="{mdx-fields__slug}-module--noToc--82387",r="{mdx-fields__slug}-module--wrapper--58e72"},1151:function(e,t,n){n.d(t,{Zo:function(){return s},ah:function(){return r}});var l=n(7294);const a=l.createContext({});function r(e){const t=l.useContext(a);return l.useMemo((()=>"function"==typeof e?e(t):{...t,...e}),[t,e])}const o={};function s({components:e,children:t,disableParentContext:n}){let s;return s=n?"function"==typeof e?e({}):e||o:r(e),l.createElement(a.Provider,{value:s},t)}}}]);
//# sourceMappingURL=component---src-pages-mdx-fields-slug-tsx-content-file-path-content-watson-101-md-fb03d244e540bd2ca620.js.map