"use strict";(self.webpackChunkvad_var_site=self.webpackChunkvad_var_site||[]).push([[6852],{9505:function(e,t,n){n.r(t),n.d(t,{Head:function(){return E},default:function(){return b}});var a=n(1151),l=n(7294);function o(e){const t=Object.assign({section:"section",h1:"h1",h3:"h3",a:"a",p:"p",ul:"ul",li:"li",h2:"h2",blockquote:"blockquote",strong:"strong",code:"code",ol:"ol",img:"img",pre:"pre",span:"span",em:"em"},(0,a.ah)(),e.components),{QuizAlert:n}=t;return n||function(e,t){throw new Error("Expected "+(t?"component":"object")+" `"+e+"` to be defined: you likely forgot to import, pass, or provide it.")}("QuizAlert",!0),l.createElement(l.Fragment,null,l.createElement(n,{text:"Heads Up! Quiz material will be flagged like this!"}),"\n",l.createElement(t.section,{className:"heading","data-heading-rank":"1","aria-labelledby":"102-generating-code-using-ibm-watsonx-code-assistant-wca-for-red-hat-ansible-lightspeed"},l.createElement(t.h1,{id:"102-generating-code-using-ibm-watsonx-code-assistant-wca-for-red-hat-ansible-lightspeed"},"102: Generating Code using IBM watsonx Code Assistant (WCA) for Red Hat Ansible Lightspeed"),"\n",l.createElement(t.section,{className:"heading","data-heading-rank":"3","aria-labelledby":"goal"},l.createElement(t.h3,{id:"goal"},l.createElement(t.a,{href:"#goal"},"Goal")),"\n",l.createElement(t.p,null,"The goal of this lab is to experiment with three of the key capabilities of IBM watsonx Code Assistant (WCA) for Red Hat Ansible Lightspeed in Visual Studio (VS) Code:"),"\n",l.createElement(t.ul,null,"\n",l.createElement(t.li,null,"\n",l.createElement(t.p,null,"AI-generated code recommendations"),"\n"),"\n",l.createElement(t.li,null,"\n",l.createElement(t.p,null,"Content source matching and source attribution"),"\n"),"\n",l.createElement(t.li,null,"\n",l.createElement(t.p,null,"Post-processing of AI-generated code for adherence to best practices"),"\n"),"\n"),"\n"),l.createElement(t.section,{className:"heading","data-heading-rank":"2","aria-labelledby":"ai-generated-code-recommendations"},l.createElement(t.h2,{id:"ai-generated-code-recommendations"},l.createElement(t.a,{href:"#ai-generated-code-recommendations"},"AI-generated code recommendations")),"\n",l.createElement(t.blockquote,null,"\n",l.createElement(t.p,null,l.createElement(t.strong,null,"Ansible Tasks")," An Ansible Task is a statement in Ansible's automation script (the YAML-based Playbooks we have been working with) that declares a single action to be executed. This might be installing a package, copying a file, or shutting down a service on a remote machine. Each Task represents an idempotent operation (an action that can be repeated multiple times and deliver the same result every time) that aligns the remote managed node to the specified state, ensuring consistency across multiple executions."),"\n"),"\n",l.createElement(t.p,null,"The process of creating AI-generated code recommendations is as simple as modifying the natural language (plain English) Task descriptions of an action that is to be executed, which always start with ",l.createElement(t.code,null,"- name:")," and followed by some description of the task to be performed. Ansible Tasks are often preceded with some ",l.createElement(t.code,null,"#")," comments or documentation — particularly inside the Technical Preview assets. After the natural language description of the automation Task has been set, Generative AI handles the rest."),"\n",l.createElement(t.ol,null,"\n",l.createElement(t.li,null,"On the left sidebar in VS Code, click the ",l.createElement(t.strong,null,"Explorer")," icon (as shown in the screenshot below) to open the Explorer view to view your current working directory."),"\n"),"\n",l.createElement(t.img,{src:"https://raw.githubusercontent.com/ibm-build-lab/VAD-VAR-Workshop/main/content//Watsonx/CodeAssistant/images/vsc-explorer.png",alt:""}),"\n",l.createElement(t.ol,{start:"2"},"\n",l.createElement(t.li,null,"\n",l.createElement(t.p,null,"From the current working directory in the Explorer, navigate to and open the Ansible Playbook in the following directory: ",l.createElement(t.code,null,"lightspeed-demos-main/playbooks/infra/install_cockpit/demo_install_cockpit.yml")),"\n",l.createElement(t.p,null,"The Playbook code in ",l.createElement(t.code,null,"demo_install_cockpit.yml")," warrants some explanation before we move on with modifications:"),"\n",l.createElement(t.ul,null,"\n",l.createElement(t.li,null,"\n",l.createElement(t.p,null,l.createElement(t.strong,null,"Line 2")," essentially marks the beginning of the Playbook instructions, the purpose of which is to automate the process of installing and configuring ",l.createElement(t.a,{href:"https://www.redhat.com/en/blog/automate-rhel-web-console-deployments-cockpit-and-certificate-rhel-system-roles"},"Cockpit")," for Red Hat Ansible. Cockpit is an interactive server administration interface that provides a graphical overview of statistics and configurations for a system or systems within a network."),"\n"),"\n",l.createElement(t.li,null,"\n",l.createElement(t.p,null,l.createElement(t.strong,null,"Lines 3-4")," define variables that will remain static throughout the remainder of the Playbook. These variables will be referenced by the AI-generated code suggestions at a later stage. This is a key capability of the offering and one which you will go into much finer details on later."),"\n"),"\n",l.createElement(t.li,null,"\n",l.createElement(t.p,null,l.createElement(t.strong,null,"Lines 6-9")," are variables which have been commented out and therefore are invisible to the execution of the Ansible script and not examined by WCA for context when generating code recommendations. You will experiment with how removing the ",l.createElement(t.code,null,"#"),' comment blocks impacts the recommendations of task block code. "Uncommenting" these lines of code will make them viable for execution and these lines will afterwards be considered as valid Playbook "context" for AI code generation.'),"\n"),"\n"),"\n"),"\n",l.createElement(t.li,null,"\n",l.createElement(t.p,null,"Locate ",l.createElement(t.strong,null,"TASK 1")," on ",l.createElement(t.strong,null,"Line 15")," of the YAML file, which handles installation of Cockpit for Ansible."),"\n",l.createElement(t.pre,null,l.createElement(t.code,{className:"hljs language-yaml"},l.createElement(t.span,{className:"hljs-comment"},"# - name: Install cockpit package"),"\n")),"\n",l.createElement(t.p,null,"Pay attention to the indentation and characters used on ",l.createElement(t.strong,null,"Line 15"),", which in sequence from left to right are as follows:"),"\n",l.createElement(t.ul,null,"\n",l.createElement(t.li,null,"\n",l.createElement(t.p,null,"begins with a ",l.createElement(t.code,null,"TAB")," indentation"),"\n"),"\n",l.createElement(t.li,null,"\n",l.createElement(t.p,null,"a ",l.createElement(t.code,null,"#"),' character to "comment out" the line contents'),"\n"),"\n",l.createElement(t.li,null,"\n",l.createElement(t.p,null,"a whitespace ",l.createElement(t.code,null,"SPACE")," character"),"\n"),"\n",l.createElement(t.li,null,"\n",l.createElement(t.p,null,l.createElement(t.code,null,"- name:")," which signifies the start of a Task definition"),"\n"),"\n",l.createElement(t.li,null,"\n",l.createElement(t.p,null,"and finally the natural language description of the Task"),"\n"),"\n"),"\n"),"\n",l.createElement(t.li,null,"\n",l.createElement(t.p,null,"To generate code for the Task using WCA, first ",l.createElement(t.strong,null,"uncomment")," ",l.createElement(t.strong,null,"Task 1")," on ",l.createElement(t.strong,null,"Line 15")," (remove ",l.createElement(t.code,null,"#")," characters from the start of a line). Highlight the line of code you wish to uncomment and then press ",l.createElement(t.code,null,"CTRL")," + ",l.createElement(t.code,null,"/"),". ",l.createElement(t.em,null,"Tip: commented out lines of code in VS Code will appear as green text.")),"\n"),"\n"),"\n",l.createElement(t.blockquote,null,"\n",l.createElement(t.p,null,l.createElement(t.strong,null,"Indentation Levels and Whitespace")," Similarly to Python, Ansible and YAML Playbooks are very sensitive to whitespacing and indentation. Indentations (such as the ",l.createElement(t.code,null,"TAB")," in this example) denote different hierarchies and code nesting levels within the YAML structure. You can use whitespaces instead of ",l.createElement(t.code,null,"TAB")," if you prefer, but be sure to keep your indentations consistent: keep using TAB or whitespaces for indenting lines of code, but don't intermix the two."),"\n"),"\n",l.createElement(t.p,null,"Afterwards, Line 15 should look like the following — beginning with a single TAB indentation:"),"\n",l.createElement(t.pre,null,l.createElement(t.code,{className:"hljs language-yaml"},"  ",l.createElement(t.span,{className:"hljs-bullet"},"-")," ",l.createElement(t.span,{className:"hljs-attr"},"name:")," ",l.createElement(t.span,{className:"hljs-string"},"Install")," ",l.createElement(t.span,{className:"hljs-string"},"cockpit")," ",l.createElement(t.span,{className:"hljs-string"},"package"),"\n")),"\n",l.createElement(n,{text:"There are quiz questions related to generating code for Tasks using WCA"}),"\n",l.createElement(t.ol,{start:"5"},"\n",l.createElement(t.li,null,"\n",l.createElement(t.p,null,"Now you are ready to begin generating code. Place your cursor at the end of ",l.createElement(t.strong,null,"Line 15")," and hit ",l.createElement(t.code,null,"Return"),". Wait for WCA to engage and generate the suggested (in grey, italicized text) code blocks for executing the task."),"\n",l.createElement(t.p,null,"This temporary code suggestion is entirely generated by AI. As a user, you have the option to either accept the code recommendation as-given by pressing ",l.createElement(t.code,null,"TAB")," on your keyboard OR you can modify the recommended code by highlighting and replacing the italicized text."),"\n"),"\n",l.createElement(t.li,null,"\n",l.createElement(t.p,null,"Press ",l.createElement(t.code,null,"TAB")," to accept the suggested code and compare with the solution below:"),"\n",l.createElement(t.pre,null,l.createElement(t.code,{className:"hljs language-yaml"},l.createElement(t.span,{className:"hljs-comment"},"# TASK 1"),"\n",l.createElement(t.span,{className:"hljs-bullet"},"-")," ",l.createElement(t.span,{className:"hljs-attr"},"name:")," ",l.createElement(t.span,{className:"hljs-string"},"Install")," ",l.createElement(t.span,{className:"hljs-string"},"cockpit")," ",l.createElement(t.span,{className:"hljs-string"},"package"),"\n  ",l.createElement(t.span,{className:"hljs-attr"},"ansible.builtin.package:"),"\n    ",l.createElement(t.span,{className:"hljs-attr"},"name:")," ",l.createElement(t.span,{className:"hljs-string"},"cockpit"),"\n    ",l.createElement(t.span,{className:"hljs-attr"},"state:")," ",l.createElement(t.span,{className:"hljs-string"},"present"),"\n")),"\n",l.createElement(t.p,null,"The AI-generated code suggestion invoked the ",l.createElement(t.a,{href:"https://docs.ansible.com/ansible/latest/collections_guide/collections_using_playbooks.html"},"Fully Qualified Collection Name")," (FQCN) - ",l.createElement(t.code,null,"ansible.builtin.package"),". Making use of FQCNs where possible is a recommended best practice and is a prime example of the many ways in which the offering infuses post-processing capabilities within the AI-generated code produced by WCA."),"\n"),"\n",l.createElement(t.li,null,"\n",l.createElement(t.p,null,"Additional examples of infusing best-practices into AI-generated code recommendations can be found in the following ",l.createElement(t.strong,null,"Task 2 (Line 25)"),". Generate the task code block as you did previously, accept the AI-suggested code as given using ",l.createElement(t.code,null,"TAB"),", and once again compare your results with the solution below:"),"\n",l.createElement(t.pre,null,l.createElement(t.code,{className:"hljs language-yaml"},l.createElement(t.span,{className:"hljs-comment"},"# TASK 2"),"\n",l.createElement(t.span,{className:"hljs-bullet"},"-")," ",l.createElement(t.span,{className:"hljs-attr"},"name:")," ",l.createElement(t.span,{className:"hljs-string"},"Copy")," ",l.createElement(t.span,{className:"hljs-string"},"cockpit.conf.j2")," ",l.createElement(t.span,{className:"hljs-string"},"to")," ",l.createElement(t.span,{className:"hljs-string"},"/etc/cockpit"),"\n  ",l.createElement(t.span,{className:"hljs-attr"},"ansible.builtin.template:"),"\n    ",l.createElement(t.span,{className:"hljs-attr"},"src:")," ",l.createElement(t.span,{className:"hljs-string"},"cockpit.conf.j2"),"\n    ",l.createElement(t.span,{className:"hljs-attr"},"dest:")," ",l.createElement(t.span,{className:"hljs-string"},"/etc/cockpit/cockpit.conf"),"\n    ",l.createElement(t.span,{className:"hljs-attr"},"owner:")," ",l.createElement(t.span,{className:"hljs-string"},"root"),"\n    ",l.createElement(t.span,{className:"hljs-attr"},"group:")," ",l.createElement(t.span,{className:"hljs-string"},"root"),"\n    ",l.createElement(t.span,{className:"hljs-attr"},"mode:")," ",l.createElement(t.span,{className:"hljs-string"},"'0644'"),"\n")),"\n",l.createElement(t.p,null,"The AI-generated code recommendation will copy ",l.createElement(t.code,null,"cockpit.conf")," to the target host."),"\n",l.createElement(t.p,null,"Take note of the fact that the recommendation included the ",l.createElement(t.code,null,"mode:")," argument and set the Linux file permissions to ",l.createElement(t.code,null,"0644"),", neither of which were things explicitly requested in the Task ",l.createElement(t.code,null,"- name")," description, but are both additions which adhere to best practices around defining Ansible automaton tasks. Setting a file permission to ",l.createElement(t.code,null,"0644")," specifies read and write permissions for User and Group levels within the Linux operating system, and provides only read permissions to all others."),"\n",l.createElement(t.p,null,"These additional recommendations stem from a robust example of setting file permissions for the ",l.createElement(t.code,null,"ansible.builtin.template")," module, a recommended best practice from the Ansible Galaxy and Red Hat communities that Lightspeed carried into this AI-generated code recommendation as well."),"\n"),"\n"),"\n"),l.createElement(t.section,{className:"heading","data-heading-rank":"2","aria-labelledby":"content-source-matching"},l.createElement(t.h2,{id:"content-source-matching"},l.createElement(t.a,{href:"#content-source-matching"},"Content Source Matching")),"\n",l.createElement(t.p,null,"A powerful capability within WCA is ",l.createElement(t.strong,null,"Content Source Matching"),' (often referred to as "code explainability"), which attempts to match AI-generated code suggestions to the training data and sources that were utilized in generating the suggested Task code.'),"\n",l.createElement(t.p,null,"These code attribution suggestions are created using a ",l.createElement(t.strong,null,"k-NN")," (",l.createElement(t.a,{href:"https://www.ibm.com/topics/knn#:~:text=Next%20steps-,K%2DNearest%20Neighbors%20Algorithm,of%20an%20individual%20data%20point."},"K-Nearest Neighbors"),") algorithm that examines Ansible Galaxy and training data repositories in search of the nearest related content to the AI-generated code suggestions."),"\n",l.createElement(t.ol,null,"\n",l.createElement(t.li,null,"To enable ",l.createElement(t.strong,null,"Content Source Matching")," capabilities within WCA, navigate to the main menu bar (very top of your screen) for VS Code and go to ",l.createElement(t.strong,null,"View")," > ",l.createElement(t.strong,null,"Open View...")," as shown below."),"\n"),"\n",l.createElement(t.img,{src:"https://raw.githubusercontent.com/ibm-build-lab/VAD-VAR-Workshop/main/content//Watsonx/CodeAssistant/images/vsc-openview.png",alt:""}),"\n",l.createElement(t.ol,{start:"2"},"\n",l.createElement(t.li,null,"The console along the top of the VS Code interface is now activated and awaiting a prompt. Enter ",l.createElement(t.code,null,"view Lightspeed Training Matches")," and hit the ",l.createElement(t.code,null,"Return")," key to confirm the selection."),"\n"),"\n",l.createElement(t.img,{src:"https://raw.githubusercontent.com/ibm-build-lab/VAD-VAR-Workshop/main/content//Watsonx/CodeAssistant/images/vsc-view-lightspeed-training.png",alt:""}),"\n",l.createElement(t.p,null,"At this point, all future generative AI tasks (such as prompting WCA to generate the code for a Task) will now open a panel at the bottom of the VS Code interface displaying a variety of options: ",l.createElement(t.strong,null,"Problems"),", ",l.createElement(t.strong,null,"Output"),", ",l.createElement(t.strong,null,"Debug Console"),", ",l.createElement(t.strong,null,"Terminal"),", ",l.createElement(t.strong,null,"Ports"),", ",l.createElement(t.strong,null,"Comments"),", and most importantly ",l.createElement(t.strong,null,"Ansible:Lightspeed Training Matches"),"."),"\n",l.createElement(t.ol,{start:"3"},"\n",l.createElement(t.li,null,"\n",l.createElement(t.p,null,"Let's experiment with generating some lines of code and inspecting the ",l.createElement(t.strong,null,"Ansible:Lightspeed Training Matches")," tab to observe this code explainability feature in action. Open the Ansible Playbook in the following directory: ",l.createElement(t.code,null,"lightspeed-demos-main/playbooks/infra/install_pgsql_and_pgadmin/demo_install_pgsql.yml"),"."),"\n"),"\n",l.createElement(t.li,null,"\n",l.createElement(t.p,null,"Within your VS Code environment, attempt to generate code for the task on ",l.createElement(t.strong,null,"Line 7"),". The resulting code should look like the following:"),"\n"),"\n"),"\n",l.createElement(t.pre,null,l.createElement(t.code,{className:"hljs language-yaml"},l.createElement(t.span,{className:"hljs-bullet"},"-")," ",l.createElement(t.span,{className:"hljs-attr"},"name:")," ",l.createElement(t.span,{className:"hljs-string"},"Install")," ",l.createElement(t.span,{className:"hljs-string"},"postgresql-server"),"\n  ",l.createElement(t.span,{className:"hljs-attr"},"ansible.builtin.package:"),"\n    ",l.createElement(t.span,{className:"hljs-attr"},"name:")," ",l.createElement(t.span,{className:"hljs-string"},"postgresql-server"),"\n    ",l.createElement(t.span,{className:"hljs-attr"},"state:")," ",l.createElement(t.span,{className:"hljs-string"},"present"),"\n")),"\n",l.createElement(t.p,null,"Pay attention to the code attribution details associated with this recommendation, which will be appearing in the panel at the bottom of the VS Code interface once the code recommendation is finalized."),"\n",l.createElement(t.ol,{start:"5"},"\n",l.createElement(t.li,null,l.createElement(t.strong,null,"Accept")," the AI-generated code suggestions (using the ",l.createElement(t.code,null,"TAB")," key) in order to populate the content source matching tab with details about the code's origins."),"\n"),"\n",l.createElement(t.img,{src:"https://raw.githubusercontent.com/ibm-build-lab/VAD-VAR-Workshop/main/content//Watsonx/CodeAssistant/images/ansible-training-matches.png",alt:""}),"\n",l.createElement(t.p,null,"The three most likely content sources used in training the IBM watsonx Code Assistant for Red Hat Ansible Lightspeed model — which produced the AI-generated code recommendations — are listed within the ",l.createElement(t.strong,null,"Ansible: Lightspeed Training Matches")," tab."),"\n",l.createElement(t.p,null,"Clicking the arrow icon to the left of each attribution will expand further details about the source. Information about the ",l.createElement(t.strong,null,"URL"),", ",l.createElement(t.strong,null,"Path"),", ",l.createElement(t.strong,null,"Data Source"),", ",l.createElement(t.strong,null,"License"),", ",l.createElement(t.strong,null,"Ansible Type"),", and ",l.createElement(t.strong,null,"Score")," are displayed (where available) under each listing. Red Hat-certified and maintained collections, as well as contributors to open source projects on Ansible Galaxy, are the primary sources for Ansible Lightspeed model training and are the content sources you are most likely to see matched to AI-generated code recommendations."),"\n",l.createElement(t.p,null,"Drilling down into the ",l.createElement(t.strong,null,"URL")," field will redirect your web browser back to the precise collections and sources on Ansible Galaxy from which the code recommendations were derived. Here you can learn much richer details about the status of the project, any associated open source repositories involved (such as GitHub), contributions and activities ongoing with the code base, the author(s) involved, and many more intricacies."),"\n"),l.createElement(t.section,{className:"heading","data-heading-rank":"2","aria-labelledby":"post-processing-of-ai-generated-code"},l.createElement(t.h2,{id:"post-processing-of-ai-generated-code"},l.createElement(t.a,{href:"#post-processing-of-ai-generated-code"},"Post-processing of AI-generated code")),"\n",l.createElement(t.p,null,"Another element of code generation that WCA excels at is understanding ",l.createElement(t.strong,null,"context")," within the Playbook it is executing against. If a variable or attribute is defined earlier within that Playbook, it will be recalled and referenced — where it makes sense to do so — in the generation of subsequent lines of code."),"\n",l.createElement(t.p,null,"However, one way to make this feature quite obvious is to take a previously-generated block of Task code, update the value assigned to a named variable earlier in the Playbook, and then regenerate the Task code block. In theory, the newly-generated Task block will use the updated variable name (and differ from how the code block was originally generated)."),"\n",l.createElement(t.ol,null,"\n",l.createElement(t.li,null,"\n",l.createElement(t.p,null,"To see this in action, open the Ansible Playbook in the following directory: ",l.createElement(t.code,null,"lightspeed-demos-main/playbooks/cloud/aws/demo_provision_ec2_instance.yml"),". Examine ",l.createElement(t.strong,null,"Line 26")," and ",l.createElement(t.strong,null,"Line 33"),". ",l.createElement(t.strong,null,"Task 1")," (",l.createElement(t.strong,null,"Line 26"),") and ",l.createElement(t.strong,null,"Task 2")," (",l.createElement(t.strong,null,"Line 33"),") are responsible for gathering information about a network subnet that is to be provisioned and then creating a virtual private cloud (VPC) definition based on those details."),"\n"),"\n",l.createElement(t.li,null,"\n",l.createElement(t.p,null,"Generate an AI-suggested code block for ",l.createElement(t.strong,null,"Task 1")," (",l.createElement(t.strong,null,"Line 26"),") by un-commenting the line, placing the cursor at the end of the line, pressing ",l.createElement(t.code,null,"RETURN"),", and then confirming with ",l.createElement(t.code,null,"TAB"),". Afterwards, generate an AI-suggested code block for ",l.createElement(t.strong,null,"Task 2")," but do ",l.createElement(t.strong,null,"not")," press ",l.createElement(t.code,null,"TAB")," to confirm the code block."),"\n",l.createElement(t.p,null,"The first round of AI-generated code for ",l.createElement(t.strong,null,"Task 1")," produces a code block with a ",l.createElement(t.code,null,"register: subnet_info")," line — the result of which is to assign this VPC definition to a variable ",l.createElement(t.code,null,"subnet_info"),"."),"\n",l.createElement(t.p,null,"The AI-generated code that follows for ",l.createElement(t.strong,null,"Task 2")," recommends a code block with ",l.createElement(t.code,null,'vpc_subnet_id: "{ { subnet_info.subnets[0].subnet_id } }"')," as the value associated with the VPC's subnet ID. Critically, the variable ",l.createElement(t.code,null,"subnet_info")," that was generated in the previous Task is also referenced in the second Task. This demonstrates the contextual awareness of WCA in action."),"\n"),"\n"),"\n",l.createElement(t.img,{src:"https://raw.githubusercontent.com/ibm-build-lab/VAD-VAR-Workshop/main/content//Watsonx/CodeAssistant/images/task-variable-info.png",alt:""}),"\n",l.createElement(t.ol,{start:"3"},"\n",l.createElement(t.li,null,"Now change the name of the variable that was generated from ",l.createElement(t.strong,null,"Task 1")," from ",l.createElement(t.code,null,"subnet_info")," to ",l.createElement(t.code,null,"subnet_name"),". Observe how the ",l.createElement(t.strong,null,"Task 2")," block is altered after deleting the previously-generated ",l.createElement(t.strong,null,"Task 2")," content and re-generate the code block by pressing ",l.createElement(t.code,null,"RETURN")," at the end of the line for ",l.createElement(t.strong,null,"Task 2"),"."),"\n"),"\n",l.createElement(t.p,null,"You will immediately notice that the new block of task code references the variable ",l.createElement(t.code,null,"subnet_name")," that was modified just a moment ago. Once again, WCA has generated code suggestions that take into account the altered context and variables of the Playbook."),"\n",l.createElement(t.img,{src:"https://raw.githubusercontent.com/ibm-build-lab/VAD-VAR-Workshop/main/content//Watsonx/CodeAssistant/images/task-variable-name.png",alt:""}),"\n"),l.createElement(t.section,{className:"heading","data-heading-rank":"2","aria-labelledby":"ibm-watsonx-code-assistant-for-red-hat-ansible-lightspeed-l3-course-quiz"},l.createElement(t.h2,{id:"ibm-watsonx-code-assistant-for-red-hat-ansible-lightspeed-l3-course-quiz"},l.createElement(t.a,{href:"#ibm-watsonx-code-assistant-for-red-hat-ansible-lightspeed-l3-course-quiz"},"IBM watsonx Code Assistant for Red Hat Ansible Lightspeed L3 Course Quiz")),"\n",l.createElement(t.p,null,"Congratulations! You have completed the necessary labs needed to complete the IBM watsonx Code Assistant for Red Hat Ansible Lightspeed L3 course quiz. The quiz can be found ",l.createElement(t.a,{href:"https://learn.ibm.com/course/view.php?id=15649"},"here"),". ",l.createElement(t.strong,null,"Note:")," You do not need to watch the videos as the labs have covered all course content except for the quiz. You can click through the lessons and take the quiz."),"\n",l.createElement(t.section,{className:"heading","data-heading-rank":"3","aria-labelledby":"congratulations-you-have-reached-the-end-of-lab-102"},l.createElement(t.h3,{id:"congratulations-you-have-reached-the-end-of-lab-102"},l.createElement(t.a,{href:"#congratulations-you-have-reached-the-end-of-lab-102"},"Congratulations, you have reached the end of lab 102.")),"\n",l.createElement(t.p,null,"Click, ",l.createElement(t.a,{href:"/watsonx/codeassistant"},"IBM watsonx Code Assistant")," to go to the IBM watsonx Code Assistant home page.")))))}var s=function(e){void 0===e&&(e={});const{wrapper:t}=Object.assign({},(0,a.ah)(),e.components);return t?l.createElement(t,e,l.createElement(o,e)):o(e)};var r=n(4184),i=n.n(r),c=n(4690),m=n(1140),d=n(8623),h=n(8531),u=n(3383),g=n(7315);const p=e=>{const{data:{mdx:{tableOfContents:{items:t},frontmatter:{toc:n=!0,title:a,timeToComplete:o,updated:s}}},children:r}=e,c=(0,l.useRef)(null),{0:p}=(0,l.useState)(""),E=(null===n||n)&&t;return l.createElement(l.Fragment,null,l.createElement(m.Z,{timeToComplete:o,updated:s},t[0].title||a||""),l.createElement(h.Z,{className:g.YS},l.createElement("article",{className:i()(g.Y2,!E&&g.ey),ref:c},l.createElement(d.Z,{components:{h1:()=>null}},r)),E&&l.createElement(u.Z,{itemsList:t,maxDepth:2,currSection:p})))},E=e=>{const{location:{pathname:t},data:{mdx:{frontmatter:{title:n},tableOfContents:{items:a}}}}=e;return l.createElement(c.Z,{pathname:t,title:n||a[0].title||void 0})};function b(e){return l.createElement(p,e,l.createElement(s,e))}}}]);
//# sourceMappingURL=component---src-pages-mdx-fields-slug-tsx-content-file-path-content-watsonx-code-assistant-102-md-3521510190d540e5110e.js.map