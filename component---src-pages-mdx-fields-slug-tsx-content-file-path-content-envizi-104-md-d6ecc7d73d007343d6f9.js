"use strict";(self.webpackChunkvad_var_site=self.webpackChunkvad_var_site||[]).push([[8179],{3691:function(e,t,n){n.r(t),n.d(t,{Head:function(){return f},default:function(){return g}});var a=n(1151),l=n(7294);function r(e){const t=Object.assign({section:"section",h1:"h1",p:"p",h2:"h2",a:"a",img:"img",ul:"ul",li:"li",h3:"h3",strong:"strong",h4:"h4"},(0,a.ah)(),e.components);return l.createElement(t.section,{className:"heading","data-heading-rank":"1","aria-labelledby":"envizi-data-management-and-integration"},l.createElement(t.h1,{id:"envizi-data-management-and-integration"},"Envizi data management and integration"),"\n",l.createElement(t.p,null,"The Envizi Technical Sales Intermediate badge demo displays the power of Envizi for identifying opportunities to ESG improvements, track ESG progress year over year, and perform ESG reporting in accordance with numerious ESG frameworks."),"\n",l.createElement(t.p,null,"Streamlined reporting and accelerated decarbonization depends on a comprehensive set of relevant ESG data.  The first step in crafting an Envizi solution is to build that data foundation.  This lab discusses the data management architecture within Envizi, and current and future options for loading data in an automated fashion."),"\n",l.createElement(t.section,{className:"heading","data-heading-rank":"2","aria-labelledby":"envizi-data-model"},l.createElement(t.h2,{id:"envizi-data-model"},l.createElement(t.a,{href:"#envizi-data-model"},"Envizi Data model")),"\n",l.createElement(t.p,null,"The following is a quick explanation of the four key components of the Envizi data management system."),"\n",l.createElement(t.img,{src:"/1685938898768.3918787602/data-model-summary.png",alt:""}),"\n",l.createElement(t.p,null,"Flexible\nHierarchical in nature\nConfigured to meet client requirements"),"\n",l.createElement(t.p,null,"Each customer data model is mapped out during the onboarding process through customer consultation to determine the data types that would need to be captured and account styles needed to capture specific fields that might be either:"),"\n",l.createElement(t.ul,null,"\n",l.createElement(t.li,null,"Account styles mapped from supplier files that would be used in automated data collection"),"\n",l.createElement(t.li,null,"fields needed to satisfy reporting requirements."),"\n"),"\n",l.createElement(t.section,{className:"heading","data-heading-rank":"3","aria-labelledby":"data-types"},l.createElement(t.h3,{id:"data-types"},l.createElement(t.a,{href:"#data-types"},"Data Types")),"\n",l.createElement(t.p,null,"Data Types are the foundational building block of Envizi's data model."),"\n",l.createElement(t.p,null,"Configurable, but managed by envizi's product team."),"\n",l.createElement(t.p,null,"Define:"),"\n",l.createElement(t.ul,null,"\n",l.createElement(t.li,null,"Data category to be managed (e.g. Water, Natural Gas, Electricity)"),"\n",l.createElement(t.li,null,"Primary unit of measure (cost and consumption) to be recorded against the data type"),"\n",l.createElement(t.li,null,"Emissions scope (1, 2, or 3) and emissions factor assignment process for the data type if applicable."),"\n"),"\n",l.createElement(t.p,null,'Social metrics or building information data types may have "No Scope".'),"\n",l.createElement(t.p,null,"Scope and data category play a part in how the emissions factor is applied for that data in the platform."),"\n",l.createElement(t.p,null,"Envizi has an existing library of 4,000+ data types. The library is constantly expanding when necessary to meet client data collection needs."),"\n",l.createElement(t.img,{src:"/1685938898772.3918787604/data-types-example.png",alt:""}),"\n"),l.createElement(t.section,{className:"heading","data-heading-rank":"3","aria-labelledby":"account-styles"},l.createElement(t.h3,{id:"account-styles"},l.createElement(t.a,{href:"#account-styles"},"Account Styles")),"\n",l.createElement(t.p,null,"Data schema configured on top of a Data Type\nConfigured ",l.createElement(t.strong,null,"per customer")," to provide flexibility to meet different data capture requirements"),"\n",l.createElement(t.ul,null,"\n",l.createElement(t.li,null,"Defines the specific data fields to be captured, split in to primary and secondary fields."),"\n",l.createElement(t.li,null,"Can allow for drop-downs to be added to support things like multi-unit data capture, currency pick-lists, etc."),"\n",l.createElement(t.li,null,"Supports rules to:","\n",l.createElement(t.ul,null,"\n",l.createElement(t.li,null,"Make certain fields mandatory"),"\n",l.createElement(t.li,null,"Provide default values"),"\n",l.createElement(t.li,null,"Perform simple math on input to derive a field value based on other captured data."),"\n"),"\n"),"\n"),"\n",l.createElement(t.img,{src:"/1685938898760.3916787599/account-styles.png",alt:""}),"\n"),l.createElement(t.section,{className:"heading","data-heading-rank":"3","aria-labelledby":"accounts"},l.createElement(t.h3,{id:"accounts"},l.createElement(t.a,{href:"#accounts"},"Accounts")),"\n",l.createElement(t.p,null,"Accounts are the end point for data storage within Envizi.  Data captured via UI or connectors is associated with an Account."),"\n",l.createElement(t.ul,null,"\n",l.createElement(t.li,null,"Unique by name and ID"),"\n",l.createElement(t.li,null,"Configured at a location level"),"\n",l.createElement(t.li,null,"Configured with a specific data type and account style."),"\n",l.createElement(t.li,null,"When creating a new account, first choose the data type, then the account style."),"\n",l.createElement(t.li,null,"Serves as the end point for data storage when data is injested either by manual capture or automation via Connectors."),"\n",l.createElement(t.li,null,"Use as reporting entity that rolls up through grouping hierarchy."),"\n"),"\n",l.createElement(t.img,{src:"/1685938898756.3916787598/account-example.png",alt:""}),"\n")),l.createElement(t.section,{className:"heading","data-heading-rank":"2","aria-labelledby":"connectors"},l.createElement(t.h2,{id:"connectors"},l.createElement(t.a,{href:"#connectors"},"Connectors")),"\n",l.createElement(t.p,null,"There are several ways to capture data in Envizi."),"\n",l.createElement(t.ul,null,"\n",l.createElement(t.li,null,"UI: is an option for entering smaller amounts of data in a one-off manner."),"\n",l.createElement(t.li,null,"Bulk loading from a template"),"\n"),"\n",l.createElement(t.section,{className:"heading","data-heading-rank":"3","aria-labelledby":"current-process"},l.createElement(t.h3,{id:"current-process"},l.createElement(t.a,{href:"#current-process"},"Current Process")),"\n",l.createElement(t.ul,null,"\n",l.createElement(t.li,null,"Custom, per source system, per customer"),"\n",l.createElement(t.li,null,"Highly specific"),"\n",l.createElement(t.li,null,"Match the incoming data file based on name, format, headings, etc."),"\n",l.createElement(t.li,null,"Uses an S3 cloud storage bucket as the landing zone for files that should be consumed by the connector"),"\n",l.createElement(t.li,null,"Scalability is lacking with this approach"),"\n"),"\n",l.createElement(t.img,{src:"/1685938898760.3916787600/connector-current-final.png",alt:""}),"\n"),l.createElement(t.section,{className:"heading","data-heading-rank":"3","aria-labelledby":"coming-soon---end-of-q2"},l.createElement(t.h3,{id:"coming-soon---end-of-q2"},l.createElement(t.a,{href:"#coming-soon---end-of-q2"},"Coming Soon - End of Q2")),"\n",l.createElement(t.p,null,"Universal account connector - will require a standard template which varies by account style."),"\n",l.createElement(t.p,null,"A data loading template (Account Style Extract Report can be downloaded from the UI for any Account Style). This will allow partners much more flexibility in how they want to get data into Envizi."),"\n",l.createElement(t.img,{src:"/1685938898764.3918787601/connector-future.png",alt:""}),"\n",l.createElement(t.section,{className:"heading","data-heading-rank":"4","aria-labelledby":"option-a"},l.createElement(t.h4,{id:"option-a"},l.createElement(t.a,{href:"#option-a"},"Option A")),"\n",l.createElement(t.p,null,"Source files are transformed by external systems or processes to match Envizi’s universal file format (varies by Account Style) and loaded directly via the Universal Account Connector."),"\n"),l.createElement(t.section,{className:"heading","data-heading-rank":"4","aria-labelledby":"option-b"},l.createElement(t.h4,{id:"option-b"},l.createElement(t.a,{href:"#option-b"},"Option B")),"\n",l.createElement(t.p,null,"Source files are transformed by a managed service using instances of App Connect to match Envizi’s universal file format (varies by Account Style) and loaded via the Universal Account Connector."),"\n",l.createElement(t.ul,null,"\n",l.createElement(t.li,null,"App Connect transformation flows and monitoring services delivered by IBM Integration Services"),"\n",l.createElement(t.li,null,"Set pricing based on number of data types in source file"),"\n",l.createElement(t.li,null,"Custom integrations priced on request e.g. API interfaces"),"\n"),"\n")),l.createElement(t.section,{className:"heading","data-heading-rank":"3","aria-labelledby":"upcoming"},l.createElement(t.h3,{id:"upcoming"},l.createElement(t.a,{href:"#upcoming"},"Upcoming")),"\n",l.createElement(t.ul,null,"\n",l.createElement(t.li,null,"May 24th: Tag Management"),"\n",l.createElement(t.li,null,"May 30th: PowerReport (pitching, pricing, scoping)"),"\n"),"\n"),l.createElement(t.section,{className:"heading","data-heading-rank":"3","aria-labelledby":"better-together-turbonomic-and-envizi"},l.createElement(t.h3,{id:"better-together-turbonomic-and-envizi"},l.createElement(t.a,{href:"#better-together-turbonomic-and-envizi"},"Better Together: Turbonomic and Envizi")),"\n",l.createElement(t.img,{src:"/1685938898772.3918787605/turbo-envizi-arch.png",alt:""}),"\n",l.createElement(t.p,null,"Continue to ",l.createElement(t.a,{href:"/envizi/105"},"lab 105")))))}var i=function(e){void 0===e&&(e={});const{wrapper:t}=Object.assign({},(0,a.ah)(),e.components);return t?l.createElement(t,e,l.createElement(r,e)):r(e)},o=n(4184),c=n.n(o),s=n(4690),m=n(1140),d=n(2565),u=n(8531),p=n(3383),h=n(7315);const E=e=>{const{data:{mdx:{tableOfContents:{items:t},frontmatter:{toc:n=!0,title:a,timeToComplete:r,updated:i}}},children:o}=e,s=(0,l.useRef)(null),{0:E}=(0,l.useState)(""),f=(null===n||n)&&t;return l.createElement(l.Fragment,null,l.createElement(m.Z,{timeToComplete:r,updated:i},t[0].title||a||""),l.createElement(u.Z,{className:h.YS},l.createElement("article",{className:c()(h.Y2,!f&&h.ey),ref:s},l.createElement(d.Z,{components:{h1:()=>null}},o)),f&&l.createElement(p.Z,{itemsList:t,maxDepth:2,currSection:E})))},f=e=>{const{location:{pathname:t},data:{mdx:{frontmatter:{title:n},tableOfContents:{items:a}}}}=e;return l.createElement(s.Z,{pathname:t,title:n||a[0].title||void 0})};function g(e){return l.createElement(E,e,l.createElement(i,e))}},2565:function(e,t,n){n.d(t,{Z:function(){return o}});var a=n(7294),l=n(1151),r=n(5045);const i={table:r.y6,a:r.IW,blockquote:r.R4,SubHeader:r.bU,img:r.fb,code:r.dn,QuizAlert:r.SA,CopyText:r.O5};var o=(0,a.memo)((function(e){let{children:t,components:n={}}=e;return a.createElement(l.Zo,{components:{...i,...n}},t)}))},4690:function(e,t,n){var a=n(7294),l=n(1072),r=n(2401);t.Z=e=>{const{title:t,description:n,pathname:i,children:o}=e,{description:c,title:s,origin:m}=(0,r.Z)(),{i18n:{language:d}}=(0,l.$G)(),u={title:t||s,description:n||c,url:""+m+(i||"")};return a.createElement(a.Fragment,null,a.createElement("html",{lang:d}),a.createElement("link",{rel:"icon",href:"data:image/svg+xml,<svg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 100 100'><text y='0.9em' font-size='90'>🦺</text></svg>"}),a.createElement("title",null,u.title),a.createElement("link",{rel:"canonical",href:u.url}),a.createElement("meta",{name:"description",content:u.description}),a.createElement("meta",{property:"og:title",content:u.title}),a.createElement("meta",{property:"og:url",content:u.url}),a.createElement("meta",{property:"og:type",content:"website"}),a.createElement("meta",{property:"og:description",content:u.description}),a.createElement("meta",{name:"twitter:card",content:"summary"}),a.createElement("meta",{name:"twitter:title",content:u.title}),a.createElement("meta",{name:"twitter:url",content:u.url}),a.createElement("meta",{name:"twitter:description",content:u.description}),a.createElement("meta",{name:"twitter:site",content:"https://www.ibm.com"}),a.createElement("meta",{name:"twitter:creator",content:"@IBM"}),o)}},3383:function(e,t,n){n.d(t,{Z:function(){return s}});var a=n(7294),l=n(7500),r=n(4184),i=n.n(r),o=n(6488);const c=function(e,t,n){return void 0===t&&(t=[]),void 0===n&&(n=0),e.forEach((e=>{const{title:a,url:l,items:r}=e;t.splice(t.length,0,{depth:n,title:a,url:l}),r&&r.length>0&&c(r,t,n+1)})),t};var s=e=>{const{itemsList:t}=e,n=(0,a.useMemo)((()=>c(t[0].items||[])),[t]),r=(0,o.Z)("h1[id],h2[id]",{threshold:[0,1],rootMargin:"-48px 0px -90% 0px"});return n.length<1?null:a.createElement("nav",{className:"TableOfContents-module--toc--54d35"},a.createElement("div",{className:"TableOfContents-module--tocStack--90609"},a.createElement("h6",{className:"TableOfContents-module--tocHeader--05956"},a.createElement(l.rU,{to:"#",replace:!0},"On this page")),n.map(((e,t)=>{let{title:n,url:l}=e;return a.createElement("a",{className:i()("TableOfContents-module--link--b292b",r===l.substring(1)&&"TableOfContents-module--activeItem--3869f"),key:t,href:l},n)}))))}},7315:function(e,t,n){n.d(t,{Y2:function(){return a},YS:function(){return r},ey:function(){return l}});var a="{mdx-fields__slug}-module--article--e3d5a",l="{mdx-fields__slug}-module--noToc--82387",r="{mdx-fields__slug}-module--wrapper--58e72"},1151:function(e,t,n){n.d(t,{Zo:function(){return o},ah:function(){return r}});var a=n(7294);const l=a.createContext({});function r(e){const t=a.useContext(l);return a.useMemo((()=>"function"==typeof e?e(t):{...t,...e}),[t,e])}const i={};function o({components:e,children:t,disableParentContext:n}){let o;return o=n?"function"==typeof e?e({}):e||i:r(e),a.createElement(l.Provider,{value:o},t)}}}]);
//# sourceMappingURL=component---src-pages-mdx-fields-slug-tsx-content-file-path-content-envizi-104-md-d6ecc7d73d007343d6f9.js.map