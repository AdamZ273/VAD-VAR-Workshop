"use strict";(self.webpackChunkvad_var_site=self.webpackChunkvad_var_site||[]).push([[4011],{2308:function(e,t,n){n.r(t),n.d(t,{Head:function(){return E},default:function(){return b}});var l=n(1151),a=n(7294);function o(e){const t=Object.assign({section:"section",h1:"h1",p:"p",h2:"h2",a:"a",ol:"ol",li:"li",strong:"strong",blockquote:"blockquote",ul:"ul",em:"em",img:"img",pre:"pre",code:"code",span:"span",h3:"h3"},(0,l.ah)(),e.components);return a.createElement(t.section,{className:"heading","data-heading-rank":"1","aria-labelledby":"working-with-ibm-cloud-cos"},a.createElement(t.h1,{id:"working-with-ibm-cloud-cos"},"Working with IBM Cloud COS"),"\n",a.createElement(t.p,null,"The TechZone watsonx.data environment comes pre-configured with presto engine, iceberg and hive catalog associated with MinIO object storage. In this lab, you are going to register IBM Cloud Object Storage (COS) to watsonx.data."),"\n",a.createElement(t.section,{className:"heading","data-heading-rank":"2","aria-labelledby":"register-ibm-cloud-object-storage"},a.createElement(t.h2,{id:"register-ibm-cloud-object-storage"},a.createElement(t.a,{href:"#register-ibm-cloud-object-storage"},"Register IBM Cloud Object Storage")),"\n",a.createElement(t.ol,null,"\n",a.createElement(t.li,null,"\n",a.createElement(t.p,null,"Select the ",a.createElement(t.strong,null,"Infrastructure manager")," icon from the left-side menu."),"\n"),"\n",a.createElement(t.li,null,"\n",a.createElement(t.p,null,"Click the ",a.createElement(t.strong,null,"Add component")," dropdown menu at the right-side of the screen. Select ",a.createElement(t.strong,null,"Add bucket"),"."),"\n"),"\n",a.createElement(t.li,null,"\n",a.createElement(t.p,null,"In the ",a.createElement(t.strong,null,"Add bucket")," pop-up window, select/enter the following pieces of information"),"\n"),"\n"),"\n",a.createElement(t.blockquote,null,"\n",a.createElement(t.p,null,a.createElement(t.strong,null,"Note:")," If you have an IBM Cloud account, you can create your own bucket and use it in this lab. You can use the following bucket but make sure, you prefix your schema with your initials."),"\n"),"\n",a.createElement(t.p,null,"Bucket definition section"),"\n",a.createElement(t.ul,null,"\n",a.createElement(t.li,null,a.createElement(t.strong,null,"Bucket type"),":  IBM Cloud Object Storage"),"\n",a.createElement(t.li,null,a.createElement(t.strong,null,"Bucket name"),":\tibm-vest-workshop-dallas-18-oct"),"\n",a.createElement(t.li,null,a.createElement(t.strong,null,"Display name"),": ibm-cos-vest"),"\n",a.createElement(t.li,null,a.createElement(t.strong,null,"Endpoint"),":\t    s3.us-south.cloud-object-storage.appdomain.cloud"),"\n",a.createElement(t.li,null,a.createElement(t.strong,null,"Access key"),":\t  **********"),"\n",a.createElement(t.li,null,a.createElement(t.strong,null,"Secret key"),":\t  **********"),"\n",a.createElement(t.li,null,a.createElement(t.strong,null,"Activation"),":   ",a.createElement(t.em,null,a.createElement(t.strong,null,"Activate now"))),"\n"),"\n",a.createElement(t.p,null,"Associated catalog definition"),"\n",a.createElement(t.ul,null,"\n",a.createElement(t.li,null,"\n",a.createElement(t.p,null,a.createElement(t.strong,null,"Catalog type"),":\tApache Iceberg"),"\n"),"\n",a.createElement(t.li,null,"\n",a.createElement(t.p,null,a.createElement(t.strong,null,"Catalog name"),":\ticeberg_ibm_cos(",a.createElement(t.em,null,a.createElement(t.strong,null,"prefix your initial")),")"),"\n",a.createElement(t.img,{src:"https://raw.githubusercontent.com/ibm-build-lab/VAD-VAR-Workshop/main/content//Watsonx/WatsonxData/images/109/cos-add.png",alt:""}),"\n",a.createElement(t.p,null,"The ",a.createElement(t.strong,null,"ibm-cos-vest")," bucket and ",a.createElement(t.strong,null,"iceberg_ibm_cos")," catalog have been added to watsonx.data and are now reflected in the topology view of the infrastructure components."),"\n"),"\n"),"\n",a.createElement(t.ol,{start:"4"},"\n",a.createElement(t.li,null,"\n",a.createElement(t.p,null,"The ",a.createElement(t.strong,null,"iceberg_ibm_cos")," catalog is automatically associated with the ",a.createElement(t.strong,null,"ibm-cos-vest bucket"),", but to be able to query data from this bucket, the ",a.createElement(t.strong,null,"iceberg_ibm_cos")," catalog must also be associated with the ",a.createElement(t.strong,null,"presto-01")," engine."),"\n"),"\n",a.createElement(t.li,null,"\n",a.createElement(t.p,null,"Hover your mouse pointer over the ",a.createElement(t.strong,null,"iceberg_ibm_cos")," catalog tile and the ",a.createElement(t.strong,null,"Manage associations")," icon will appear. Click the ",a.createElement(t.strong,null,"Manage associations")," icon."),"\n"),"\n",a.createElement(t.li,null,"\n",a.createElement(t.p,null,"In the ",a.createElement(t.strong,null,"Manage associations")," pop-up window, select the checkbox for the ",a.createElement(t.strong,null,"presto-01")," engine and then click ",a.createElement(t.strong,null,"Save and restart engine"),"."),"\n",a.createElement(t.p,null,"A line now connects ",a.createElement(t.strong,null,"presto-01")," with ",a.createElement(t.strong,null,"iceberg_ibm_cos"),", indicating that they’re associated."),"\n"),"\n"),"\n",a.createElement(t.img,{src:"https://raw.githubusercontent.com/ibm-build-lab/VAD-VAR-Workshop/main/content//Watsonx/WatsonxData/images/109/infra-cos.png",alt:""}),"\n"),a.createElement(t.section,{className:"heading","data-heading-rank":"2","aria-labelledby":"offloading-data-from-a-data-warehouse-to-associated-bucket"},a.createElement(t.h2,{id:"offloading-data-from-a-data-warehouse-to-associated-bucket"},a.createElement(t.a,{href:"#offloading-data-from-a-data-warehouse-to-associated-bucket"},"Offloading data from a Data Warehouse to Associated bucket")),"\n",a.createElement(t.p,null,"In this example scenario, you’re going to “move” the ",a.createElement(t.strong,null,"sls_product_line_lookup")," table from Db2 to watsonx.data’s IBM COS. It will be created as an Iceberg table, in a new schema you will create called ",a.createElement(t.strong,null,"wxgosalesdw_ibm"),", managed by the ",a.createElement(t.strong,null,"iceberg_ibm_cos")," catalog."),"\n",a.createElement(t.ol,null,"\n",a.createElement(t.li,null,"\n",a.createElement(t.p,null,"Select the ",a.createElement(t.strong,null,"Data manager")," icon from the left-side menu."),"\n"),"\n",a.createElement(t.li,null,"\n",a.createElement(t.p,null,"Go to the top of the navigation pane and click the ",a.createElement(t.strong,null,"Create")," dropdown menu. Select ",a.createElement(t.strong,null,"Create schema"),"."),"\n"),"\n",a.createElement(t.li,null,"\n",a.createElement(t.p,null,"In the ",a.createElement(t.strong,null,"Create schema")," pop-up window, select/enter the following information, and then click the ",a.createElement(t.strong,null,"Create")," button:"),"\n",a.createElement(t.ul,null,"\n",a.createElement(t.li,null,a.createElement(t.strong,null,"Catalog"),": iceberg_ibm_cos"),"\n",a.createElement(t.li,null,a.createElement(t.strong,null,"Name"),": wxgosalesdw_ibm(",a.createElement(t.em,null,a.createElement(t.strong,null,"add your initials as a prefix")),")"),"\n"),"\n"),"\n",a.createElement(t.li,null,"\n",a.createElement(t.p,null,"Expand the ",a.createElement(t.strong,null,"iceberg_ibm_cos")," catalog. The new schema should be listed."),"\n"),"\n",a.createElement(t.li,null,"\n",a.createElement(t.p,null,"Select the ",a.createElement(t.strong,null,"Query workspace")," icon from the left-side menu."),"\n"),"\n",a.createElement(t.li,null,"\n",a.createElement(t.p,null,"Copy and paste the following SQL into the ",a.createElement(t.strong,null,"SQL worksheet"),". Click ",a.createElement(t.strong,null,"Run on presto-01"),"."),"\n"),"\n"),"\n",a.createElement(t.p,null,"This will create a table called ",a.createElement(t.strong,null,"sls_product_line_lookup")," in ",a.createElement(t.strong,null,"iceberg_ibm_cos.wxgosalesdw_ibm(",a.createElement(t.em,null,"and your initials as a prefix"),")")),"\n",a.createElement(t.pre,null,a.createElement(t.code,{className:"hljs language-bash"},"create table iceberg_ibm_cos.wxgosalesdw_ibm.sls_product_line_lookup as ",a.createElement(t.span,{className:"hljs-keyword"},"select")," * from db2catalog.gosalesdw.sls_product_line_lookup;\n")),"\n",a.createElement(t.img,{src:"https://raw.githubusercontent.com/ibm-build-lab/VAD-VAR-Workshop/main/content//Watsonx/WatsonxData/images/109/table-added.png",alt:""}),"\n",a.createElement(t.ol,{start:"7"},"\n",a.createElement(t.li,null,"As a test, you can run a federated query that combines the new table in IBM COS with the existing tables in MinIO and  Db2 catalog."),"\n"),"\n",a.createElement(t.pre,null,a.createElement(t.code,{className:"hljs language-bash"},a.createElement(t.span,{className:"hljs-keyword"},"select")," pll.product_line_en as product, ",a.createElement(t.span,{className:"hljs-built_in"},"sum"),"(sf.quantity) as total\nfrom\n  db2catalog.gosalesdw.sls_product_dim as pd, \n  iceberg_ibm_cos.wxgosalesdw_ibm.sls_product_line_lookup as pll, \n  iceberg_data.wxgosalesdw.sls_sales_fact as sf\n",a.createElement(t.span,{className:"hljs-built_in"},"where"),"\n  pd.product_key = sf.product_key\n  and pll.product_line_code = pd.product_line_code\ngroup by pll.product_line_en \norder by product;\n")),"\n",a.createElement(t.img,{src:"https://raw.githubusercontent.com/ibm-build-lab/VAD-VAR-Workshop/main/content//Watsonx/WatsonxData/images/109/result.png",alt:""}),"\n",a.createElement(t.ol,{start:"8"},"\n",a.createElement(t.li,null,"Login to IBM Cloud and explore the data stored in the bucket."),"\n"),"\n",a.createElement(t.img,{src:"https://raw.githubusercontent.com/ibm-build-lab/VAD-VAR-Workshop/main/content//Watsonx/WatsonxData/images/109/ibm-cos.png",alt:""}),"\n",a.createElement(t.section,{className:"heading","data-heading-rank":"3","aria-labelledby":"congratulations-youve-completed-l3-lab-109"},a.createElement(t.h3,{id:"congratulations-youve-completed-l3-lab-109"},a.createElement(t.a,{href:"#congratulations-youve-completed-l3-lab-109"},"Congratulations, you've completed L3+ lab 109.")))))}var r=function(e){void 0===e&&(e={});const{wrapper:t}=Object.assign({},(0,l.ah)(),e.components);return t?a.createElement(t,e,a.createElement(o,e)):o(e)},c=n(4184),s=n.n(c),i=n(4690),u=n(1140),m=n(2565),d=n(8531),g=n(3383),p=n(7315);const h=e=>{const{data:{mdx:{tableOfContents:{items:t},frontmatter:{toc:n=!0,title:l,timeToComplete:o,updated:r}}},children:c}=e,i=(0,a.useRef)(null),{0:h}=(0,a.useState)(""),E=(null===n||n)&&t;return a.createElement(a.Fragment,null,a.createElement(u.Z,{timeToComplete:o,updated:r},t[0].title||l||""),a.createElement(d.Z,{className:p.YS},a.createElement("article",{className:s()(p.Y2,!E&&p.ey),ref:i},a.createElement(m.Z,{components:{h1:()=>null}},c)),E&&a.createElement(g.Z,{itemsList:t,maxDepth:2,currSection:h})))},E=e=>{const{location:{pathname:t},data:{mdx:{frontmatter:{title:n},tableOfContents:{items:l}}}}=e;return a.createElement(i.Z,{pathname:t,title:n||l[0].title||void 0})};function b(e){return a.createElement(h,e,a.createElement(r,e))}},2565:function(e,t,n){n.d(t,{Z:function(){return c}});var l=n(7294),a=n(1151),o=n(7563);const r={table:o.y6,a:o.IW,blockquote:o.R4,SubHeader:o.bU,img:o.fb,code:o.dn,QuizAlert:o.SA,Danger:o.b0,Warning:o.v3,CopyText:o.O5};var c=(0,l.memo)((function(e){let{children:t,components:n={}}=e;return l.createElement(a.Zo,{components:{...r,...n}},t)}))},3383:function(e,t,n){n.d(t,{Z:function(){return i}});var l=n(7294),a=n(7500),o=n(4184),r=n.n(o),c=n(6488);const s=function(e,t,n){return void 0===t&&(t=[]),void 0===n&&(n=0),e.forEach((e=>{const{title:l,url:a,items:o}=e;t.splice(t.length,0,{depth:n,title:l,url:a}),o&&o.length>0&&s(o,t,n+1)})),t};var i=e=>{const{itemsList:t}=e,n=(0,l.useMemo)((()=>s(t[0].items||[])),[t]),o=(0,c.Z)("h1[id],h2[id]",{threshold:[0,1],rootMargin:"-48px 0px -90% 0px"});return n.length<1?null:l.createElement("nav",{className:"TableOfContents-module--toc--54d35"},l.createElement("div",{className:"TableOfContents-module--tocStack--90609"},l.createElement("h6",{className:"TableOfContents-module--tocHeader--05956"},l.createElement(a.rU,{to:"#",replace:!0},"On this page")),n.map(((e,t)=>{let{title:n,url:a}=e;return l.createElement("a",{className:r()("TableOfContents-module--link--b292b",o===a.substring(1)&&"TableOfContents-module--activeItem--3869f"),key:t,href:a},n)}))))}},7315:function(e,t,n){n.d(t,{Y2:function(){return l},YS:function(){return o},ey:function(){return a}});var l="{mdx-fields__slug}-module--article--e3d5a",a="{mdx-fields__slug}-module--noToc--82387",o="{mdx-fields__slug}-module--wrapper--58e72"},1151:function(e,t,n){n.d(t,{Zo:function(){return c},ah:function(){return o}});var l=n(7294);const a=l.createContext({});function o(e){const t=l.useContext(a);return l.useMemo((()=>"function"==typeof e?e(t):{...t,...e}),[t,e])}const r={};function c({components:e,children:t,disableParentContext:n}){let c;return c=n?"function"==typeof e?e({}):e||r:o(e),l.createElement(a.Provider,{value:c},t)}}}]);
//# sourceMappingURL=component---src-pages-mdx-fields-slug-tsx-content-file-path-content-watsonx-watsonx-data-109-md-f7489d6a3ef5bcb4e797.js.map