"use strict";(self.webpackChunkvad_var_site=self.webpackChunkvad_var_site||[]).push([[8602],{6135:function(e,t,n){n.r(t),n.d(t,{Head:function(){return y},default:function(){return f}});var a=n(1151),l=n(7294);function r(e){const t=Object.assign({section:"section",h1:"h1",h2:"h2",a:"a",p:"p",strong:"strong",h3:"h3",ol:"ol",li:"li",img:"img",ul:"ul",blockquote:"blockquote"},(0,a.ah)(),e.components);return l.createElement(t.section,{className:"heading","data-heading-rank":"1","aria-labelledby":"104-analytics"},l.createElement(t.h1,{id:"104-analytics"},"104: Analytics"),"\n",l.createElement(t.section,{className:"heading","data-heading-rank":"2","aria-labelledby":"in-this-lesson"},l.createElement(t.h2,{id:"in-this-lesson"},l.createElement(t.a,{href:"#in-this-lesson"},"In this lesson")),"\n",l.createElement(t.p,null,"Learn about Watson Assistant’s analytics, a powerful capability that takes the guesswork out of\nimproving your assistant’s performance."),"\n"),l.createElement(t.section,{className:"heading","data-heading-rank":"2","aria-labelledby":"prerequisites"},l.createElement(t.h2,{id:"prerequisites"},l.createElement(t.a,{href:"#prerequisites"},"Prerequisites")),"\n",l.createElement(t.p,null,"Complete this section with the assistant you used in the 103 section ",l.createElement(t.strong,null,"or")," your own assistant. If you\nwant to use your own assistant, you must ",l.createElement(t.a,{href:"https://cloud.ibm.com/docs/watson-assistant?topic=watson-assistant-admin-backup-restore#backup-restore-import"},"upload")," the following ",l.createElement(t.a,{href:"https://raw.githubusercontent.com/CloudPak-Outcomes/Watson-Asst-Lab/main/action-skills/begin-104-action-skill.json"},"Action skill")," which reflects the\nskill after completing section 103."),"\n"),l.createElement(t.section,{className:"heading","data-heading-rank":"2","aria-labelledby":"introducing-analytics"},l.createElement(t.h2,{id:"introducing-analytics"},l.createElement(t.a,{href:"#introducing-analytics"},"Introducing Analytics")),"\n",l.createElement(t.p,null,"Welcome back to the Watson Assistant hands-on lab! In this section, you will play the role of a\nbuilder or a product manager for a virtual assistant, exploring its Analyze page."),"\n",l.createElement(t.section,{className:"heading","data-heading-rank":"3","aria-labelledby":"landing-on-the-analytics-page"},l.createElement(t.h3,{id:"landing-on-the-analytics-page"},l.createElement(t.a,{href:"#landing-on-the-analytics-page"},"Landing on the Analytics page")),"\n",l.createElement(t.p,null,"Unless you thoroughly tested or experimented with your assistant as you completed previous sections of this lab, your assistant will not have a lot of data to populate its analytics. To see them:"),"\n",l.createElement(t.ol,null,"\n",l.createElement(t.li,null,"Click the ",l.createElement(t.strong,null,"Analyze")," option in the left-hand menu."),"\n",l.createElement(t.li,null,"Once there ensure you looking at the ",l.createElement(t.strong,null,"Draft")," environment."),"\n"),"\n",l.createElement(t.img,{src:"/1685726879469.2911104885/image-000.jpg",alt:""}),"\n",l.createElement(t.p,null,"The Analyze page displays high-level metrics on the performance of your assistant. These metrics and their underlying data are populated in real time. Take a moment to look around – you will see metrics such as number of unique users, conversations, and requests handled by the assistant in the specified date range."),"\n"),l.createElement(t.section,{className:"heading","data-heading-rank":"3","aria-labelledby":"adding-data-to-the-analyze-page-via-lendyr"},l.createElement(t.h3,{id:"adding-data-to-the-analyze-page-via-lendyr"},l.createElement(t.a,{href:"#adding-data-to-the-analyze-page-via-lendyr"},"Adding data to the Analyze page via Lendyr")),"\n",l.createElement(t.p,null,"Open your assistant on the Lendyr using the link you created in the previous section to embed your assistant. Try out a few different conversations. To engage in an additional separate conversation with your assistant there should be a ",l.createElement(t.strong,null,"Restart")," button in upper-left menu."),"\n",l.createElement(t.img,{src:"/1685726879469.2911104886/image-001.jpg",alt:""}),"\n",l.createElement(t.img,{src:"/1685726879469.2911104887/image-002.jpg",alt:""}),"\n",l.createElement(t.p,null,"After this return to the ",l.createElement(t.strong,null,"Analyze")," page. Click the ",l.createElement(t.strong,null,"Refresh")," button in the top-right corner to pull in the latest data from the conversation you just had with the assistant."),"\n",l.createElement(t.img,{src:"/1685726879469.2911104888/image-003.jpg",alt:""}),"\n",l.createElement(t.p,null,"When the page refreshes, you should now see a slightly higher request and conversation count."),"\n"),l.createElement(t.section,{className:"heading","data-heading-rank":"3","aria-labelledby":"adding-data-to-the-analyze-page-via-preview"},l.createElement(t.h3,{id:"adding-data-to-the-analyze-page-via-preview"},l.createElement(t.a,{href:"#adding-data-to-the-analyze-page-via-preview"},"Adding data to the Analyze page via Preview")),"\n",l.createElement(t.p,null,"Imagine you are a builder who has finished writing a set of actions that address a new use case."),"\n",l.createElement(t.p,null,"You need a way to share your assistant with a testing or quality assurance (QA) team, so they can go test the updated actions before you deploy them to a live or production environment. In order to do so:"),"\n",l.createElement(t.ol,null,"\n",l.createElement(t.li,null,"Go the the ",l.createElement(t.strong,null,"Preview")," page for your assistant."),"\n",l.createElement(t.li,null,"Then click the ",l.createElement(t.strong,null,"Copy link to share")," button."),"\n",l.createElement(t.li,null,"Open this link in a new tab.","\n",l.createElement(t.ul,null,"\n",l.createElement(t.li,null,"As a builder or product manager, you can copy this shared link and send it to a testing team. The testing team can then use this shared link to access and test the assistant."),"\n"),"\n"),"\n"),"\n",l.createElement(t.img,{src:"/1685726879469.2911104889/image-004.jpg",alt:""}),"\n",l.createElement(t.p,null,"Once the testers access the system, you will be able to see the testing team’s conversation data appear in the Analyze page. Since you opened a new tab, imagine you are one of the testers. Go ahead and have a conversation with the assistant. Then, return to the Analyze page in your assistant, then refresh it again to pull in the data from your latest conversation."),"\n",l.createElement(t.blockquote,null,"\n",l.createElement(t.p,null,"Note that conversations with the assistant via a Preview link generate data in the Draft environment. You can change the Analyze page to filter between Draft and Live environment data. The Draft environment data comes from the Preview page, and the Live environment data comes from the assistant in front of real end users."),"\n"))))}var i=function(e){void 0===e&&(e={});const{wrapper:t}=Object.assign({},(0,a.ah)(),e.components);return t?l.createElement(t,e,l.createElement(r,e)):r(e)},o=n(4184),s=n.n(o),c=n(4690),m=n(1140),u=n(2565),d=n(8531),h=n(3383),p=n(7315);const g=e=>{const{data:{mdx:{tableOfContents:{items:t},frontmatter:{toc:n=!0,title:a,timeToComplete:r,updated:i}}},children:o}=e,c=(0,l.useRef)(null),{0:g}=(0,l.useState)(""),y=(null===n||n)&&t;return l.createElement(l.Fragment,null,l.createElement(m.Z,{timeToComplete:r,updated:i},t[0].title||a||""),l.createElement(d.Z,{className:p.YS},l.createElement("article",{className:s()(p.Y2,!y&&p.ey),ref:c},l.createElement(u.Z,{components:{h1:()=>null}},o)),y&&l.createElement(h.Z,{itemsList:t,maxDepth:2,currSection:g})))},y=e=>{const{location:{pathname:t},data:{mdx:{frontmatter:{title:n},tableOfContents:{items:a}}}}=e;return l.createElement(c.Z,{pathname:t,title:n||a[0].title||void 0})};function f(e){return l.createElement(g,e,l.createElement(i,e))}},2565:function(e,t,n){n.d(t,{Z:function(){return o}});var a=n(7294),l=n(1151),r=n(5045);const i={table:r.y6,a:r.IW,blockquote:r.R4,SubHeader:r.bU,img:r.fb,code:r.dn,QuizAlert:r.SA,CopyText:r.O5};var o=(0,a.memo)((function(e){let{children:t,components:n={}}=e;return a.createElement(l.Zo,{components:{...i,...n}},t)}))},4690:function(e,t,n){var a=n(7294),l=n(1072),r=n(2401);t.Z=e=>{const{title:t,description:n,pathname:i,children:o}=e,{description:s,title:c,origin:m}=(0,r.Z)(),{i18n:{language:u}}=(0,l.$G)(),d={title:t||c,description:n||s,url:""+m+(i||"")};return a.createElement(a.Fragment,null,a.createElement("html",{lang:u}),a.createElement("link",{rel:"icon",href:"data:image/svg+xml,<svg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 100 100'><text y='0.9em' font-size='90'>🦺</text></svg>"}),a.createElement("title",null,d.title),a.createElement("link",{rel:"canonical",href:d.url}),a.createElement("meta",{name:"description",content:d.description}),a.createElement("meta",{property:"og:title",content:d.title}),a.createElement("meta",{property:"og:url",content:d.url}),a.createElement("meta",{property:"og:type",content:"website"}),a.createElement("meta",{property:"og:description",content:d.description}),a.createElement("meta",{name:"twitter:card",content:"summary"}),a.createElement("meta",{name:"twitter:title",content:d.title}),a.createElement("meta",{name:"twitter:url",content:d.url}),a.createElement("meta",{name:"twitter:description",content:d.description}),a.createElement("meta",{name:"twitter:site",content:"https://www.ibm.com"}),a.createElement("meta",{name:"twitter:creator",content:"@IBM"}),o)}},3383:function(e,t,n){n.d(t,{Z:function(){return c}});var a=n(7294),l=n(7500),r=n(4184),i=n.n(r),o=n(6488);const s=function(e,t,n){return void 0===t&&(t=[]),void 0===n&&(n=0),e.forEach((e=>{const{title:a,url:l,items:r}=e;t.splice(t.length,0,{depth:n,title:a,url:l}),r&&r.length>0&&s(r,t,n+1)})),t};var c=e=>{const{itemsList:t}=e,n=(0,a.useMemo)((()=>s(t[0].items||[])),[t]),r=(0,o.Z)("h1[id],h2[id]",{threshold:[0,1],rootMargin:"-48px 0px -90% 0px"});return n.length<1?null:a.createElement("nav",{className:"TableOfContents-module--toc--54d35"},a.createElement("div",{className:"TableOfContents-module--tocStack--90609"},a.createElement("h6",{className:"TableOfContents-module--tocHeader--05956"},a.createElement(l.rU,{to:"#",replace:!0},"On this page")),n.map(((e,t)=>{let{title:n,url:l}=e;return a.createElement("a",{className:i()("TableOfContents-module--link--b292b",r===l.substring(1)&&"TableOfContents-module--activeItem--3869f"),key:t,href:l},n)}))))}},7315:function(e,t,n){n.d(t,{Y2:function(){return a},YS:function(){return r},ey:function(){return l}});var a="{mdx-fields__slug}-module--article--e3d5a",l="{mdx-fields__slug}-module--noToc--82387",r="{mdx-fields__slug}-module--wrapper--58e72"},1151:function(e,t,n){n.d(t,{Zo:function(){return o},ah:function(){return r}});var a=n(7294);const l=a.createContext({});function r(e){const t=a.useContext(l);return a.useMemo((()=>"function"==typeof e?e(t):{...t,...e}),[t,e])}const i={};function o({components:e,children:t,disableParentContext:n}){let o;return o=n?"function"==typeof e?e({}):e||i:r(e),a.createElement(l.Provider,{value:o},t)}}}]);
//# sourceMappingURL=component---src-pages-mdx-fields-slug-tsx-content-file-path-content-watson-104-md-b756794f1b413bfd53d2.js.map