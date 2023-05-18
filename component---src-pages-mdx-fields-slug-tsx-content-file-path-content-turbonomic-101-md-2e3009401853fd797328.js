"use strict";(self.webpackChunkvad_var_site=self.webpackChunkvad_var_site||[]).push([[9973],{1451:function(e,n,t){t.r(n),t.d(n,{Head:function(){return p},default:function(){return g}});var a=t(1151),o=t(7294);function i(e){const n=Object.assign({section:"section",h1:"h1",h2:"h2",a:"a",p:"p",strong:"strong",h3:"h3",ul:"ul",li:"li",h4:"h4",img:"img"},(0,a.ah)(),e.components);return o.createElement(o.Fragment,null,o.createElement(n.section,{className:"heading","data-heading-rank":"1","aria-labelledby":"101-turbonomic-overview-and-lab-environment"},o.createElement(n.h1,{id:"101-turbonomic-overview-and-lab-environment"},"101: Turbonomic Overview and lab environment"),"\n",o.createElement(n.section,{className:"heading","data-heading-rank":"2","aria-labelledby":"goal"},o.createElement(n.h2,{id:"goal"},o.createElement(n.a,{href:"#goal"},"Goal")),"\n",o.createElement(n.p,null,"In this proof of technology session, you will go through a series of labs to explore Turbonomic and its components and walk through scenarios of which this APM tool can add benefit."),"\n")),o.createElement(n.section,{className:"heading","data-heading-rank":"1","aria-labelledby":"introduction"},o.createElement(n.h1,{id:"introduction"},"Introduction"),"\n",o.createElement(n.p,null,"Application Resource Management is a top-down, application-driven approach that continuously analyzes applications' resource needs and generates fully automatable actions to ensure applications always get what they need to perform. It runs 24/7/365 and scales with the largest, most complex environments."),"\n",o.createElement(n.p,null,"To perform Application Resource Management, Turbonomic represents your environment holistically as a supply chain of resource buyers and sellers, all working together to meet application demand. By empowering buyers (VMs, instances, containers, and services) with a budget to seek the resources that applications need to perform, and sellers to price their available resources (CPU, memory, storage, network) based on utilization in real-time, Turbonomic keeps your environment within the desired state — operating conditions that achieve the following conflicting goals at the same time:"),"\n",o.createElement(n.p,null,o.createElement(n.strong,null,"Assured application performance")," - Prevent bottlenecks, upsize containers/VMs, prioritize workload, and reduce storage latency."),"\n",o.createElement(n.p,null,o.createElement(n.strong,null,"Efficient use of resources")," - Consolidate workloads to reduce infrastructure usage to the minimum, downsize containers, prevent sprawl, and use the most economical cloud offerings."),"\n",o.createElement(n.section,{className:"heading","data-heading-rank":"2","aria-labelledby":"turbonomic-actions-overview"},o.createElement(n.h2,{id:"turbonomic-actions-overview"},o.createElement(n.a,{href:"#turbonomic-actions-overview"},"Turbonomic Actions Overview")),"\n",o.createElement(n.p,null,"After you deploy your targets, Turbonomic starts to perform market analysis as part of its Application Resource Management process. This holistic analysis identifies problems in your environment and the actions you can take to resolve and avoid these problems. Turbonomic then generates a set of actions for that particular analysis and displays it in the Pending Actions charts for you to investigate."),"\n",o.createElement(n.section,{className:"heading","data-heading-rank":"3","aria-labelledby":"types-of-actions-in-turbonomic"},o.createElement(n.h3,{id:"types-of-actions-in-turbonomic"},o.createElement(n.a,{href:"#types-of-actions-in-turbonomic"},"Types of Actions in Turbonomic")),"\n",o.createElement(n.ul,null,"\n",o.createElement(n.li,null,"\n",o.createElement(n.p,null,o.createElement(n.strong,null,"Placement")," — These actions determine the best provider for an entity. These include initial placement for a new entity and move actions that change it to use a different provider. For example, moving a VM assigns it to a different host. Moving a VM’s storage means the VM will use a different datastore."),"\n"),"\n",o.createElement(n.li,null,"\n",o.createElement(n.p,null,o.createElement(n.strong,null,"Scaling")," — Resize allocation of resources, based on consumption.\nResize up, shown as a required investment.\nResize down, shown as savings.\nDiscount Optimization — Increase discount coverage and reduce costs by scaling VMs to instance types that are charged discounted rates."),"\n"),"\n",o.createElement(n.li,null,"\n",o.createElement(n.p,null,o.createElement(n.strong,null,"Configuration")," — These are reconfigure and resize actions. Reconfigure actions can add necessary network access or reconfigure storage. Resize actions allocate more or less resource capacity on an entity, which can include adding or reducing VCPUs or VMem on a VM, adding or reducing capacity on a datastore, and adding or reducing volumes in a disk array."),"\n"),"\n",o.createElement(n.li,null,"\n",o.createElement(n.p,null,o.createElement(n.strong,null,"Start/Buy")," — Start a new instance to add capacity to the environment, shown as a required investment. For cloud environments, purchase discounts to reduce costs."),"\n"),"\n",o.createElement(n.li,null,"\n",o.createElement(n.p,null,o.createElement(n.strong,null,"Stop/Suspend")," — Suspend an instance to increase efficient use of resources, shown as savings."),"\n"),"\n",o.createElement(n.li,null,"\n",o.createElement(n.p,null,o.createElement(n.strong,null,"Delete")," — Delete actions affect storage. For example, Turbonomic might recommend that you delete wasted files to free up storage space or delete unused storage in your cloud environment to reduce storage costs."),"\n"),"\n"),"\n"),o.createElement(n.section,{className:"heading","data-heading-rank":"3","aria-labelledby":"action-modes"},o.createElement(n.h3,{id:"action-modes"},o.createElement(n.a,{href:"#action-modes"},"Action Modes")),"\n",o.createElement(n.p,null,"Action modes specify the degree of automation for the generated actions. For example, in some environments you might not want to automate resize down of VMs because that is a disruptive action. You would use action modes in a policy to set that business rule. We will explore this further in ",o.createElement(n.strong,null,"Policies")," lab."),"\n",o.createElement(n.p,null,"Turbonomic supports the following action modes:"),"\n",o.createElement(n.p,null,o.createElement(n.strong,null,"Recommend")," — Recommend the action so a user can execute it via the given hypervisor or by other means."),"\n",o.createElement(n.p,null,o.createElement(n.strong,null,"Manual")," — Recommend the action and provide the option to execute that action through the Turbonomic user interface."),"\n",o.createElement(n.p,null,o.createElement(n.strong,null,"Automatic")," — Execute the action automatically. This automation is defined in Policies. We will explore this further in the ",o.createElement(n.strong,null,"Policies")," lab"),"\n")),o.createElement(n.section,{className:"heading","data-heading-rank":"2","aria-labelledby":"what-are-policies-in-turbonomic"},o.createElement(n.h2,{id:"what-are-policies-in-turbonomic"},o.createElement(n.a,{href:"#what-are-policies-in-turbonomic"},"What are policies in Turbonomic?")),"\n",o.createElement(n.p,null,"Policies set business rules to control how Turbonomic analyzes resource allocation, how it displays resource status, and how it recommends or executes actions. Turbonomic includes two fundamental types of policies:"),"\n",o.createElement(n.section,{className:"heading","data-heading-rank":"4","aria-labelledby":"placement-policies"},o.createElement(n.h4,{id:"placement-policies"},o.createElement(n.a,{href:"#placement-policies"},"Placement Policies")),"\n",o.createElement(n.p,null,"To optimize your environment, Turbonomic recommends actions to place workloads such as applications, containers, or VMs on their providers. Turbonomic can recommend these actions or execute them automatically."),"\n"),o.createElement(n.section,{className:"heading","data-heading-rank":"4","aria-labelledby":"automation-policies"},o.createElement(n.h4,{id:"automation-policies"},o.createElement(n.a,{href:"#automation-policies"},"Automation Policies")),"\n",o.createElement(n.p,null,"As Turbonomic gathers metrics, it compares the metric values against specified constraint and capacity settings to determine whether a metric exhibits a problem, and what actions to recommend or execute to avoid a problem. Turbonomic uses Automation Policies to guide its analysis and resulting actions."),"\n")),o.createElement(n.section,{className:"heading","data-heading-rank":"2","aria-labelledby":"what-is-a-target-in-instana"},o.createElement(n.h2,{id:"what-is-a-target-in-instana"},o.createElement(n.a,{href:"#what-is-a-target-in-instana"},"What is a target in Instana?")),"\n",o.createElement(n.p,null,"A target is a service that performs management in your virtual environment. Turbonomic uses targets to monitor workload and to execute actions in your environment. Turbonomic communicates with the target via the management protocol that it exposes — The REST API, SMI-S, XML, or some other management transport. Turbonomic uses this communication to discover the managed entities, monitor resource utilization, and execute actions."),"\n",o.createElement(n.p,null,"Turbonomic must be on a network that has access to the specific services you want to set up as targets."),"\n")),o.createElement(n.section,{className:"heading","data-heading-rank":"1","aria-labelledby":"lab-environment"},o.createElement(n.h1,{id:"lab-environment"},"Lab Environment"),"\n",o.createElement(n.p,null,"To go through your lab sessions you need to first access your environment. Most of the labs will use the Turbonomic UI. Below is the list of the instances you will use during this proof of technology session."),"\n",o.createElement(n.p,null,o.createElement(n.strong,null,"Bastion VM")," - This is your main desktop. You will run the labs in this VM. It can be accessed using the link provided by your proctor. The link should automatically log you in the system (no user and password required)."),"\n",o.createElement(n.p,null,o.createElement(n.strong,null,"Turbonomic")," - Which will be accessible through web browser on your bastion VM."),"\n",o.createElement(n.p,null,o.createElement(n.strong,null,"Instana")," - This will also be accessible through a bastion VM."),"\n",o.createElement(n.p,null,o.createElement(n.strong,null,"Credentials file"),' - The file including all credentials you need to go through this workshop is named "Turbo-PoT-Credentials.html" and is preset as a browser window on your bastion VM. To access it go to you bastion VM desktop and open FireFox window from activities on top left of the screen. The file should pop open.'),"\n",o.createElement(n.section,{className:"heading","data-heading-rank":"2","aria-labelledby":"access-bastion-vm"},o.createElement(n.h2,{id:"access-bastion-vm"},o.createElement(n.a,{href:"#access-bastion-vm"},"Access bastion VM")),"\n",o.createElement(n.p,null,"Use the link provided by your proctor. Once you click on it, it should open below page in your browser. Click on the ",o.createElement(n.strong,null,"Remote Desktop")," item from the list and it will open up your bastion VM desktop."),"\n",o.createElement(n.img,{src:"/1684418652799.27441089921/bastion.png",alt:""}),"\n",o.createElement(n.p,null,"By default all the pages you will need for this session will be pre-populated for you, if not navigate to the top left corner click on ",o.createElement(n.strong,null,"Activities")," and select ",o.createElement(n.strong,null,"FireFox"),". All the pages you need is in this browser and will open up as new tabs."),"\n",o.createElement(n.img,{src:"/1684418652807.27441089922/bastion1.png",alt:""}),"\n"),o.createElement(n.section,{className:"heading","data-heading-rank":"2","aria-labelledby":"access-your-turbonomic-environment"},o.createElement(n.h2,{id:"access-your-turbonomic-environment"},o.createElement(n.a,{href:"#access-your-turbonomic-environment"},"Access your Turbonomic environment")),"\n",o.createElement(n.p,null,"The Turbonomic instance is pre-populated in Firefox on your bastion VM. If you can not find it, refer to the Turbo-PoT-Credentials file to get your Turbonomic URL and open it on your bastion VM browser."),"\n",o.createElement(n.img,{src:"/1684418652815.27471089923/desktop.png",alt:""}),"\n",o.createElement(n.section,{className:"heading","data-heading-rank":"3","aria-labelledby":"turbonomic-credentials"},o.createElement(n.h3,{id:"turbonomic-credentials"},o.createElement(n.a,{href:"#turbonomic-credentials"},"Turbonomic Credentials")),"\n",o.createElement(n.p,null,"Username: administrator"),"\n",o.createElement(n.p,null,"Password: Refer to ",o.createElement(n.strong,null,"Turbo-PoT-Credentials")," on you bastion VM"),"\n",o.createElement(n.p,null,"Please note, your Turbonomic tab on the browser may have a warning message as shown below. This is not an issue, just click on ",o.createElement(n.strong,null,"Advanced...")," and then click on ",o.createElement(n.strong,null,"Accept the Risk and Continue"),"."),"\n",o.createElement(n.img,{src:"/1684418652819.27471089924/desktop2.png",alt:""}),"\n"),o.createElement(n.section,{className:"heading","data-heading-rank":"3","aria-labelledby":"access-your-instana-environment"},o.createElement(n.h3,{id:"access-your-instana-environment"},o.createElement(n.a,{href:"#access-your-instana-environment"},"Access your Instana environment")),"\n",o.createElement(n.p,null,"Instana UI is also pre-populated in Firefox on your bastion VM. You won't spend much time in the Instana instance as it is pre-setup for you. You will access it only once to create an API key."),"\n",o.createElement(n.section,{className:"heading","data-heading-rank":"4","aria-labelledby":"instana-credentials"},o.createElement(n.h4,{id:"instana-credentials"},o.createElement(n.a,{href:"#instana-credentials"},"Instana Credentials")),"\n",o.createElement(n.p,null,"Endpoint IP address: 10.0.0.2"),"\n",o.createElement(n.p,null,"Username: ",o.createElement(n.a,{href:"mailto:admin@instana.local"},"admin@instana.local")),"\n",o.createElement(n.p,null,'Password: Refer to "Turbo-PoT-Credentials" on you bastion VM'))))))}var r=function(e){void 0===e&&(e={});const{wrapper:n}=Object.assign({},(0,a.ah)(),e.components);return n?o.createElement(n,e,o.createElement(i,e)):i(e)},s=t(7315),l=t(3383),c=t(4690),m=t(8059),u=t(1140),d=t(8531);const h=e=>{const{data:{mdx:{tableOfContents:{items:n},frontmatter:{toc:t=!0,title:a,timeToComplete:i,updated:r}}},children:c}=e,h=(0,o.useRef)(null),{0:p,1:g}=(0,o.useState)("");(0,o.useEffect)((()=>{if(!h.current)return;const e=h.current.querySelectorAll("h2,h3,h4,h5"),n=new IntersectionObserver((e=>{e.forEach((e=>{e.isIntersecting&&g(e.target.id)}))}),{rootMargin:"0px 0px -95% 0px",threshold:0});return e.forEach((e=>{n.observe(e)})),()=>n.disconnect()}),[]);const b=(null===t||t)&&n;return o.createElement(o.Fragment,null,o.createElement(u.Z,{timeToComplete:i,updated:r},n[0].title||a||""),o.createElement(d.Z,{className:s.I},o.createElement("article",{className:s.Y,ref:h},o.createElement(m.Z,{components:{h1:()=>null}},c)),b&&o.createElement(l.Z,{itemsList:n,maxDepth:2,currSection:p})))},p=e=>{const{location:{pathname:n},data:{mdx:{frontmatter:{title:t},tableOfContents:{items:a}}}}=e;return o.createElement(c.Z,{pathname:n,title:t||a[0].title||void 0})};function g(e){return o.createElement(h,e,o.createElement(r,e))}}}]);
//# sourceMappingURL=component---src-pages-mdx-fields-slug-tsx-content-file-path-content-turbonomic-101-md-2e3009401853fd797328.js.map