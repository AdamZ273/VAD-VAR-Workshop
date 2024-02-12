"use strict";(self.webpackChunkvad_var_site=self.webpackChunkvad_var_site||[]).push([[8153],{5751:function(e,t,n){n.r(t),n.d(t,{Head:function(){return g},default:function(){return f}});var a=n(1151),l=n(7294);function o(e){const t=Object.assign({section:"section",h1:"h1",p:"p",h2:"h2",a:"a",blockquote:"blockquote",ul:"ul",li:"li",em:"em",pre:"pre",code:"code",h3:"h3",strong:"strong",ol:"ol",img:"img",span:"span"},(0,a.ah)(),e.components);return l.createElement(t.section,{className:"heading","data-heading-rank":"1","aria-labelledby":"203-langchain"},l.createElement(t.h1,{id:"203-langchain"},"203: LangChain"),"\n",l.createElement(t.p,null,"In this lab, you will review and run examples of LLM applications that use the LangChain\nframework. We will expand on the concepts that you learned in the previous labs."),"\n",l.createElement(t.section,{className:"heading","data-heading-rank":"2","aria-labelledby":"requirements"},l.createElement(t.h2,{id:"requirements"},l.createElement(t.a,{href:"#requirements"},"Requirements")),"\n",l.createElement(t.blockquote,null,"\n",l.createElement(t.p,null,"If you completed these steps in the previous labs (see lab Getting Started with Generative\nAI in watsonx.ai Lab), you don’t need to repeat them. You are however encouraged to read\nthrough this section as it contains important comments and hints that may help you debug your\nenvironment, script, or notebook faster if your code fails to execute correctly."),"\n"),"\n",l.createElement(t.ul,null,"\n",l.createElement(t.li,null,"To complete this lab you will need access to an instance of watsonx.ai"),"\n",l.createElement(t.li,null,"Some knowledge of Python"),"\n"),"\n"),l.createElement(t.section,{className:"heading","data-heading-rank":"2","aria-labelledby":"langchain-overview"},l.createElement(t.h2,{id:"langchain-overview"},l.createElement(t.a,{href:"#langchain-overview"},"LangChain Overview")),"\n",l.createElement(t.p,null,"As we discussed in previous labs, LLMs are not used as stand-alone components but rather included in applications. ",l.createElement(t.em,null,"LangChain")," is a popular open-source framework that's becoming a de facto standard for LLM application development. ",l.createElement(t.em,null,"LangChain")," simplifies the implementation of many tasks that are typical in LLM applications, such as:"),"\n",l.createElement(t.ul,null,"\n",l.createElement(t.li,null,"Using prompt templates"),"\n",l.createElement(t.li,null,"Parsing the output of LLMs"),"\n",l.createElement(t.li,null,"Creating a sequence of calls to LLMs"),"\n",l.createElement(t.li,null,"Maintaining session state between LLM calls (memory)"),"\n",l.createElement(t.li,null,"A systemic approach for implementation of RAG use cases"),"\n"),"\n",l.createElement(t.p,null,l.createElement(t.em,null,"LangChain")," does not add capabilities to LLMs, it's a complimentary framework that's used to build well-structured LLM applications in Python and JavaScript."),"\n",l.createElement(t.p,null,"Most of ",l.createElement(t.em,null,"LangChain's"),' capabilities are "vendor and LLM-neutral", meaning that the LangChain API works the ',l.createElement(t.em,null,"same way")," regardless of LLMs developed and hosted by different vendors. For example, this line of code creates a chain (contains a model and a prompt) for several types of LLMs that are supported by ",l.createElement(t.em,null,"LangChain"),":"),"\n",l.createElement(t.pre,null,l.createElement(t.code,null,"chain = LLMChain(llm=llm, prompt=prompt)\n")),"\n",l.createElement(t.p,null,"This is an important consideration for both development and education. There are many good community and free resources for ",l.createElement(t.em,null,"LangChain"),", such as courses, YouTube tutorials, and blog posts."),"\n",l.createElement(t.p,null,"We recommend the following resources for additional education:"),"\n",l.createElement(t.ul,null,"\n",l.createElement(t.li,null,l.createElement(t.a,{href:"https://learn.deeplearning.ai/langchain/lesson/1/introduction"},"Deep Learning AI Introduction to LangChain")," course"),"\n",l.createElement(t.li,null,"LangChain ",l.createElement(t.a,{href:"https://python.langchain.com/docs/get_started/introduction"},"documentation")),"\n",l.createElement(t.li,null,"LangChain ",l.createElement(t.a,{href:"https://python.langchain.com/docs/contributing"},"community")),"\n"),"\n",l.createElement(t.section,{className:"heading","data-heading-rank":"3","aria-labelledby":"support-of-langchain-in-watsonxai"},l.createElement(t.h3,{id:"support-of-langchain-in-watsonxai"},l.createElement(t.a,{href:"#support-of-langchain-in-watsonxai"},"Support of LangChain in watsonx.ai")),"\n",l.createElement(t.p,null,l.createElement(t.strong,null,"Watsonx.ai")," supports ",l.createElement(t.em,null,"LangChain")," through extensions in the WML (Watson Machine Learning) API. At the time of writing, the WML API supports the following LangChain APIs:"),"\n",l.createElement(t.ul,null,"\n",l.createElement(t.li,null,l.createElement(t.strong,null,"LLMChain"),": a chain that consists of a prompt and an LLM"),"\n",l.createElement(t.li,null,l.createElement(t.strong,null,"SimpleSequentialChain"),": each step has a singular input/output, and the output of one step is the input to the next."),"\n",l.createElement(t.li,null,l.createElement(t.strong,null,"TransformChain"),": includes a custom-written ",l.createElement(t.em,null,"transform()")," function in the chain invocation. Transformations are usually used for the input or output of LLMs."),"\n",l.createElement(t.li,null,l.createElement(t.strong,null,"ConversationBufferMemory"),": store the previous prompts and responses"),"\n"),"\n",l.createElement(t.p,null,"You can learn more about these chains in the ",l.createElement(t.em,null,"LangChain")," ",l.createElement(t.a,{href:"https://python.langchain.com/docs/modules/chains/"},"documentation"),"."),"\n",l.createElement(t.p,null,"We also recommend that you check the ",l.createElement(t.a,{href:"https://ibm.github.io/watson-machine-learning-sdk/install.html"},"WML documentation")," for the latest supported features."),"\n",l.createElement(t.p,null,"In this lab, we will review several Python code samples that use LangChain to show how these building blocks can be invoked from client applications."),"\n")),l.createElement(t.section,{className:"heading","data-heading-rank":"2","aria-labelledby":"review-notebooks-and-scripts-for-various-langchain-tasks"},l.createElement(t.h2,{id:"review-notebooks-and-scripts-for-various-langchain-tasks"},l.createElement(t.a,{href:"#review-notebooks-and-scripts-for-various-langchain-tasks"},"Review Notebooks and scripts for various LangChain tasks")),"\n",l.createElement(t.section,{className:"heading","data-heading-rank":"3","aria-labelledby":"review-sample-notebook"},l.createElement(t.h3,{id:"review-sample-notebook"},l.createElement(t.a,{href:"#review-sample-notebook"},"Review sample notebook")),"\n",l.createElement(t.ol,null,"\n",l.createElement(t.li,null,"Log in to ",l.createElement(t.strong,null,"watsonx.ai")," and navigate to your project."),"\n",l.createElement(t.li,null,"Create a new notebook from a URL:","\n",l.createElement(t.ul,null,"\n",l.createElement(t.li,null,"Select ",l.createElement(t.strong,null,"New Task -> Work with data and models in Python and R notebooks")),"\n",l.createElement(t.li,null,"From the left-hand nav select ",l.createElement(t.strong,null,"URL")," as the source for the notebook"),"\n",l.createElement(t.li,null,"Keep the default runtime environment ",l.createElement(t.em,null,"(Python 3.10 XS)")),"\n",l.createElement(t.li,null,"Given the notebook a unique name like ",l.createElement(t.code,null,"[your_name]_langchain_integration")),"\n",l.createElement(t.li,null,"Enter an optional description for your notebook"),"\n",l.createElement(t.li,null,"Use ",l.createElement(t.code,null,"https://raw.githubusercontent.com/ibm-build-lab/VAD-VAR-Workshop/main/content/Watsonx/WatsonxAI/files/203/LangChain_Integration.ipynb")," for the ",l.createElement(t.strong,null,"Notebook URL")),"\n"),"\n"),"\n"),"\n",l.createElement(t.img,{src:"https://raw.githubusercontent.com/ibm-build-lab/VAD-VAR-Workshop/main/content//Watsonx/WatsonxAI/images/203/2.png",alt:"import_notebook"}),"\n",l.createElement(t.p,null,"After clicking the create button you will then be redirected to the notebook editor within watsonx. Let's now review the code in the notebook."),"\n",l.createElement(t.p,null,"Scroll down to the ",l.createElement(t.strong,null,"Foundation Models in watsonx.ai")," section of the notebook."),"\n",l.createElement(t.img,{src:"https://raw.githubusercontent.com/ibm-build-lab/VAD-VAR-Workshop/main/content//Watsonx/WatsonxAI/images/203/3.png",alt:"foundation_model"}),"\n",l.createElement(t.p,null,"The first few cells instantiate the LLM model object and provide parameters. This code is similar to the WML code we used in other labs (at this time we're not using the LangChain API yet)."),"\n",l.createElement(t.p,null,"Scroll down to the ",l.createElement(t.strong,null,"WatsonxLLM interface")," section. Here we instantiate the ",l.createElement(t.em,null,"WatsonxLLM")," object, which is the object that we will use to invoke other ",l.createElement(t.em,null,"LangChain")," APIs. As you can see in the code, we simply pass the LLM model object we created earlier."),"\n",l.createElement(t.img,{src:"https://raw.githubusercontent.com/ibm-build-lab/VAD-VAR-Workshop/main/content//Watsonx/WatsonxAI/images/203/4.png",alt:"foundation_model"}),"\n",l.createElement(t.p,null,"Now that we have a model object that we can use with ",l.createElement(t.em,null,"LangChain"),", we can test the supported features."),"\n",l.createElement(t.p,null,"The capability demonstrated in this notebook is a ",l.createElement(t.em,null,"simple sequential chain"),'. A simple sequential chain allows us to create "steps" in the LLM execution process. While it may seem like a trivial task, the simple sequential chain has 2 important features:'),"\n",l.createElement(t.ul,null,"\n",l.createElement(t.li,null,"The steps can use different models."),"\n",l.createElement(t.li,null,"The output of the previous step is automatically passed into the next step."),"\n"),"\n",l.createElement(t.p,null,"These features make the ",l.createElement(t.em,null,"simple sequential chain")," a versatile API that can be used in myriad tasks for LLM applications. For example, we can use it to implement the following sequence of tasks:"),"\n",l.createElement(t.pre,null,l.createElement(t.code,{className:"hljs language-txt"},"Translate -> Summarize/Classifly -> Generate -> Format\n")),"\n",l.createElement(t.p,null,"These tasks are common for use cases such as automating a response to customer emails."),"\n",l.createElement(t.p,null,"The sample notebook implements a much simpler scenario. We will review more complex implementations later."),"\n",l.createElement(t.p,null,"In the notebook, scroll down to the section that instantiates the ",l.createElement(t.em,null,"PromptTemplate"),". The ",l.createElement(t.em,null,"PromptTemplate")," object does not add any new capabilities to prompts, but it helps us write better-structured code. Notice that when we create the ",l.createElement(t.em,null,"PromptTemplate")," object, we explicitly specify parameters (input variables) that will be used in the prompt."),"\n",l.createElement(t.pre,null,l.createElement(t.code,{className:"hljs language-python"},l.createElement(t.span,{className:"hljs-keyword"},"from")," langchain ",l.createElement(t.span,{className:"hljs-keyword"},"import")," PromptTemplate\n\nprompt_1 = PromptTemplate(\n  input_variables=[",l.createElement(t.span,{className:"hljs-string"},'"topic"'),"],\n  template=",l.createElement(t.span,{className:"hljs-string"},'"Generate a random question about {topic}: Quesiton: "'),"\n)\nprompt_2 = PromptTemplate(\n  input_variables=[",l.createElement(t.span,{className:"hljs-string"},'"question"'),"],\n  template=",l.createElement(t.span,{className:"hljs-string"},'"Answer the following question: {question}"'),"\n)\n")),"\n",l.createElement(t.p,null,"Next, we create two types of chains:"),"\n",l.createElement(t.ul,null,"\n",l.createElement(t.li,null,"The ",l.createElement(t.em,null,"LLMChain"),", which contains the model and the prompt"),"\n",l.createElement(t.li,null,"The ",l.createElement(t.em,null,"SimpleSequentialChain"),", which contains the two created LLMChains."),"\n"),"\n",l.createElement(t.p,null,"The ",l.createElement(t.em,null,"qa.run()")," function call in the last cell invokes the LLMs sequentially."),"\n",l.createElement(t.img,{src:"https://raw.githubusercontent.com/ibm-build-lab/VAD-VAR-Workshop/main/content//Watsonx/WatsonxAI/images/203/6.png",alt:"chain_creation"}),"\n",l.createElement(t.ol,{start:"3"},"\n",l.createElement(t.li,null,"Run the notebook. If you wish, change the parameters that are passed to the LLM to see different results."),"\n"),"\n",l.createElement(t.img,{src:"https://raw.githubusercontent.com/ibm-build-lab/VAD-VAR-Workshop/main/content//Watsonx/WatsonxAI/images/203/7.png",alt:"notebook_run"}),"\n",l.createElement(t.p,null,"Next, we will implement the chain using the provided sample prompts. You can either use your own prompts or our examples."),"\n"),l.createElement(t.section,{className:"heading","data-heading-rank":"3","aria-labelledby":"implement-your-own-sequential-chain"},l.createElement(t.h3,{id:"implement-your-own-sequential-chain"},l.createElement(t.a,{href:"#implement-your-own-sequential-chain"},"Implement your own sequential chain")),"\n",l.createElement(t.ol,null,"\n",l.createElement(t.li,null,"Using the sample code that we reviewed, create your own ",l.createElement(t.em,null,"SimpleSequentialChain")," and run it. For reference, it may look something like this:"),"\n"),"\n",l.createElement(t.pre,null,l.createElement(t.code,{className:"hljs language-python"},"prompt_1 = PromptTemplate(\n  input_variables=[",l.createElement(t.span,{className:"hljs-string"},'"customer_complaint"'),"], \n  template=",l.createElement(t.span,{className:"hljs-string"},'"From the following customer complaint, extract 3 factors that caused the customer to be unhappy. Put each factor on a new line. Customer complaint: {customer_complaint}. Numbered list of complaints: "'),"\n)\n \nprompt_2 = PromptTemplate(\n  input_variables=[",l.createElement(t.span,{className:"hljs-string"},'"list_of_complaints"'),"], \n  template=",l.createElement(t.span,{className:"hljs-string"},'"Does the following statements contain the concept of identify theft?: {list_of_complaints}"'),"\n)\n\n",l.createElement(t.span,{className:"hljs-comment"},"# Experiment with different values of customer complaints"),"\ncustomer_complaint = ",l.createElement(t.span,{className:"hljs-string"},'"I am writing you this statement to delete the following information on my credit report. The items I need deleted are listed in the report. I am a victim of identity thief, I demand that you remove these errors to correct my report immediately! I have reported this to the federal trade commission and have attached the federal trade commission affidavit. Now that I have given you the following information, please correct my credit report or I shall proceed with involving my attorney!"'),"\n")),"\n",l.createElement(t.blockquote,null,"\n",l.createElement(t.p,null,"You can find other complaint prompts ",l.createElement(t.a,{href:"https://raw.githubusercontent.com/CloudPak-Outcomes/Outcomes-Projects/main/L4assets/watsonx.ai-Assets/Prompts/Customer_complaints_prompts.txt"},"here")),"\n"),"\n",l.createElement(t.p,null,"As you can tell from the prompts, the first step in the sequence creates of list of items from the customer review and the second step checks if identity theft is mentioned."),"\n",l.createElement(t.p,null,"If you would like to review the completed code for this task, you can find it in the ",l.createElement(t.em,null,"LangChain_Integration_Completed")," notebook ",l.createElement(t.a,{href:"https://github.com/CloudPak-Outcomes/Outcomes-Projects/blob/main/L4assets/watsonx.ai-Assets/Notebooks/LangChain_Integration_Completed.ipynb"},"here")),"\n",l.createElement(t.p,null,"Next, we will look at another feature of the LangChain API, memory."),"\n"),l.createElement(t.section,{className:"heading","data-heading-rank":"3","aria-labelledby":"implement-memory-with-langchain"},l.createElement(t.h3,{id:"implement-memory-with-langchain"},l.createElement(t.a,{href:"#implement-memory-with-langchain"},"Implement memory with LangChain")),"\n",l.createElement(t.p,null,"As you have likely noticed in your experience with LLMs, they are stateless. This means that each request to an LLM is independent of the previous or the next one. In architecture, this is called a ",l.createElement(t.em,null,"stateless"),' implementation. For some cases, specifically for the ones that involve multiple interactions with an LLM (for example, a chatbot), we may need to maintain a "history" of the conversation, which in programming terms is described as ',l.createElement(t.em,null,"memory"),"."),"\n",l.createElement(t.p,null,"In ",l.createElement(t.em,null,"LangChain")," memory is implemented by appending to the prompt. Both input and output are appended."),"\n",l.createElement(t.p,null,"the benefit of this approach is that it's easy to understand and implement. However, there are two important considerations:"),"\n",l.createElement(t.ul,null,"\n",l.createElement(t.li,null,"The token limit of LLMs still applies. If you keep adding prompts and responses to memory, you can quickly run out of tokens."),"\n",l.createElement(t.li,null,"Cost of tokens if you're using a hosted instance of LLMs."),"\n"),"\n",l.createElement(t.p,null,l.createElement(t.em,null,"LangChain")," provides several types of memory to help mitigate these issues, such as:"),"\n",l.createElement(t.ul,null,"\n",l.createElement(t.li,null,l.createElement(t.em,null,"ConversationBufferWindowMemory"),": keeps a list of the interactions in the conversation over time. It only uses the last K interactions."),"\n",l.createElement(t.li,null,l.createElement(t.em,null,"ConversationSummaryBufferMemory"),": keeps a summary of interactions, using token length rather than an arbitrary number of interactions to determine when to flush interactions."),"\n",l.createElement(t.li,null,l.createElement(t.em,null,"ConversationTokenBufferMemory"),": keeps a buffer of recent interactions in memory, and uses token length rather than the number of interactions to determine when to flush interactions."),"\n"),"\n",l.createElement(t.p,null,"At the time of writing, the WML API supports integration with the most basic memory type, that being ",l.createElement(t.em,null,"ConversationBufferMemory"),", which keeps the entire conversation in memory until the memory fills or until it's explicitly cleared. According to ",l.createElement(t.em,null,"LangChain"),' documentation, it uses the "first in, first out" approach to remove information from the buffer.'),"\n",l.createElement(t.ol,null,"\n",l.createElement(t.li,null,"\n",l.createElement(t.p,null,"Log in to ",l.createElement(t.strong,null,"watsonx.ai")," and navigate to your project."),"\n"),"\n",l.createElement(t.li,null,"\n",l.createElement(t.p,null,"Create a notebook from a URL:"),"\n",l.createElement(t.ul,null,"\n",l.createElement(t.li,null,"Select ",l.createElement(t.strong,null,"New Task -> Work with data and models in Python and R notebooks")),"\n",l.createElement(t.li,null,"From the left-hand nav select ",l.createElement(t.strong,null,"URL")," as the source for the notebook"),"\n",l.createElement(t.li,null,"Keep the default runtime environment ",l.createElement(t.em,null,"(Python 3.10 XS)")),"\n",l.createElement(t.li,null,"Given the notebook a unique name like ",l.createElement(t.code,null,"[your_name]_langchain_memory")),"\n",l.createElement(t.li,null,"Enter an optional description for your notebook"),"\n",l.createElement(t.li,null,"Use ",l.createElement(t.code,null,"https://raw.githubusercontent.com/ibm-build-lab/VAD-VAR-Workshop/main/content/Watsonx/WatsonxAI/files/203/LangChain_Memory.ipynb")," for the ",l.createElement(t.strong,null,"Notebook URL")),"\n"),"\n"),"\n"),"\n",l.createElement(t.p,null,"Let's review the notebook code."),"\n",l.createElement(t.p,null,"After installing the required libraries, we create a model object similar to the way we created it in the previous example."),"\n",l.createElement(t.p,null,"We recommend that you try both the ",l.createElement(t.em,null,"flan")," and ",l.createElement(t.em,null,"llama")," models in this notebook (uncomment the model that you would like to run and re-run the cell)."),"\n",l.createElement(t.img,{src:"https://raw.githubusercontent.com/ibm-build-lab/VAD-VAR-Workshop/main/content//Watsonx/WatsonxAI/images/203/8.png",alt:"create_model_object"}),"\n",l.createElement(t.p,null,"We use the standard ",l.createElement(t.em,null,"LangChain")," API to create the memory buffer object."),"\n",l.createElement(t.img,{src:"https://raw.githubusercontent.com/ibm-build-lab/VAD-VAR-Workshop/main/content//Watsonx/WatsonxAI/images/203/9.png",alt:"create_memory_buffer"}),"\n",l.createElement(t.p,null,"After that, we construct our prompts, and in our code, we expect the 2nd cal to the LLM to analyze the output from the 1st prompt."),"\n",l.createElement(t.p,null,"Notice that we provide 2 examples of ",l.createElement(t.em,null,"user_input")," for the first prompt. If you would like to try the 2nd example, make sure to clear the buffer memory in the cell above (it is commented out by default)."),"\n",l.createElement(t.img,{src:"https://raw.githubusercontent.com/ibm-build-lab/VAD-VAR-Workshop/main/content//Watsonx/WatsonxAI/images/203/10.png",alt:"user_inputs"}),"\n",l.createElement(t.p,null,"When you invoke the LLM, the output generated by the LLM starts with ",l.createElement(t.em,null,"AI"),":"),"\n",l.createElement(t.img,{src:"https://raw.githubusercontent.com/ibm-build-lab/VAD-VAR-Workshop/main/content//Watsonx/WatsonxAI/images/203/11.png",alt:"generated_output"}),"\n"),l.createElement(t.section,{className:"heading","data-heading-rank":"3","aria-labelledby":"implement-a-simple-rag-use-case-with-langchain"},l.createElement(t.h3,{id:"implement-a-simple-rag-use-case-with-langchain"},l.createElement(t.a,{href:"#implement-a-simple-rag-use-case-with-langchain"},"Implement a simple RAG use case with LangChain")),"\n",l.createElement(t.p,null,l.createElement(t.em,null,"Retrieval Augmented Generation (RAG)"),' allows us to use LLMs to interact with "external data" i.e. data that was not used for model training. Many use cases require working with proprietary company data, and it\'s one of the reasons why RAG is frequently used in generative AI applications.'),"\n",l.createElement(t.p,null,"There is more than one way to implement the RAG pattern, which we will cover in a ",l.createElement(t.a,{href:"/watsonx/watsonxai/204"},"later lab"),". In this lab, we will use ",l.createElement(t.em,null,"LangChain's RetrievalQA")," API to demonstrate one implementation of a RAG pattern. In general, RAG can be used for more than just question-and-answer use cases, but as you can tell from the name of the API, ",l.createElement(t.em,null,"RetrievalQA")," was implemented specifically for question-and-answer."),"\n",l.createElement(t.p,null,"To get started:"),"\n",l.createElement(t.ol,null,"\n",l.createElement(t.li,null,"\n",l.createElement(t.p,null,"Log in to ",l.createElement(t.strong,null,"watsonx.ai")," and navigate to your project."),"\n"),"\n",l.createElement(t.li,null,"\n",l.createElement(t.p,null,"Create a notebook from a URL:"),"\n",l.createElement(t.ul,null,"\n",l.createElement(t.li,null,"Select ",l.createElement(t.strong,null,"New Task -> Work with data and models in Python and R notebooks")),"\n",l.createElement(t.li,null,"From the left-hand nav select ",l.createElement(t.strong,null,"URL")," as the source for the notebook"),"\n",l.createElement(t.li,null,"Keep the default runtime environment ",l.createElement(t.em,null,"(Python 3.10 XS)")),"\n",l.createElement(t.li,null,"Given the notebook a unique name like ",l.createElement(t.code,null,"[your_name]_langchain_simple_rag")),"\n",l.createElement(t.li,null,"Enter an optional description for your notebook"),"\n",l.createElement(t.li,null,"Use ",l.createElement(t.code,null,"https://raw.githubusercontent.com/ibm-build-lab/VAD-VAR-Workshop/main/content/Watsonx/WatsonxAI/files/203/LangChain_Simple_RAG.ipynb")," for the ",l.createElement(t.strong,null,"Notebook URL")),"\n"),"\n"),"\n"),"\n",l.createElement(t.p,null,"Let's review the code."),"\n",l.createElement(t.ul,null,"\n",l.createElement(t.li,null,"\n",l.createElement(t.p,null,"the ",l.createElement(t.em,null,l.createElement(t.strong,null,"get_model()"))," function creates a model object that will be used to invoke the LLM. Since the ",l.createElement(t.em,null,l.createElement(t.strong,null,"get_model()"))," function is parametrized, it's the same in all examples."),"\n"),"\n",l.createElement(t.li,null,"\n",l.createElement(t.p,null,"The ",l.createElement(t.em,null,l.createElement(t.strong,null,"get_lang_chain_model()"))," function creates a model wrapper that will be used with the ",l.createElement(t.em,null,"LangChain")," API."),"\n"),"\n",l.createElement(t.li,null,"\n",l.createElement(t.p,null,"Finally, the ",l.createElement(t.em,null,l.createElement(t.strong,null,"answer_question_from_doc()"))," function specifies model parameters, loads the PDF file, creates an index from the loaded document, the instantiates and invokes the chain."),"\n"),"\n"),"\n",l.createElement(t.blockquote,null,"\n",l.createElement(t.p,null,"Notice unlike other examples, we don't create a prompt. The ",l.createElement(t.em,null,"question")," and ",l.createElement(t.em,null,"file_path")," are specified in the last code cell that invokes ",l.createElement(t.em,null,"answer_questions_from_doc()")),"\n"),"\n",l.createElement(t.p,null,"You can now follow along in the notebook and run each cell."),"\n"),l.createElement(t.section,{className:"heading","data-heading-rank":"3","aria-labelledby":"conclusion"},l.createElement(t.h3,{id:"conclusion"},l.createElement(t.a,{href:"#conclusion"},"Conclusion")),"\n",l.createElement(t.p,null,"You have now finished the ",l.createElement(t.em,null,"LangChain")," lab. In this lab, you learned:"),"\n",l.createElement(t.ul,null,"\n",l.createElement(t.li,null,"How to use Langchain to invoke a sequence of calls to LLMs."),"\n",l.createElement(t.li,null,"How to implement memory with LangChain"),"\n",l.createElement(t.li,null,"How to implement a simple RAG use case with LangChain"),"\n"),"\n",l.createElement(t.p,null,l.createElement(t.em,null,"LangChain")," has many other useful APIs, and we will continue to use them in the ",l.createElement(t.a,{href:"/watsonx/watsonxai/204"},"lab")," that focuses specifically on the RAG pattern."))))}var r=function(e){void 0===e&&(e={});const{wrapper:t}=Object.assign({},(0,a.ah)(),e.components);return t?l.createElement(t,e,l.createElement(o,e)):o(e)},i=n(4184),s=n.n(i),m=n(4690),c=n(1140),u=n(8623),h=n(8531),p=n(3383),d=n(7315);const E=e=>{const{data:{mdx:{tableOfContents:{items:t},frontmatter:{toc:n=!0,title:a,timeToComplete:o,updated:r}}},children:i}=e,m=(0,l.useRef)(null),{0:E}=(0,l.useState)(""),g=(null===n||n)&&t;return l.createElement(l.Fragment,null,l.createElement(c.Z,{timeToComplete:o,updated:r},t[0].title||a||""),l.createElement(h.Z,{className:d.YS},l.createElement("article",{className:s()(d.Y2,!g&&d.ey),ref:m},l.createElement(u.Z,{components:{h1:()=>null}},i)),g&&l.createElement(p.Z,{itemsList:t,maxDepth:2,currSection:E})))},g=e=>{const{location:{pathname:t},data:{mdx:{frontmatter:{title:n},tableOfContents:{items:a}}}}=e;return l.createElement(m.Z,{pathname:t,title:n||a[0].title||void 0})};function f(e){return l.createElement(E,e,l.createElement(r,e))}}}]);
//# sourceMappingURL=component---src-pages-mdx-fields-slug-tsx-content-file-path-content-watsonx-watsonx-ai-level-4-203-md-6e4dcfed7c9bfd8f431a.js.map