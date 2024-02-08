"use strict";(self.webpackChunkvad_var_site=self.webpackChunkvad_var_site||[]).push([[9696],{6908:function(e,t,n){n.r(t),n.d(t,{Head:function(){return g},default:function(){return b}});var a=n(1151),l=n(7294);function o(e){const t=Object.assign({section:"section",h1:"h1",p:"p",em:"em",h2:"h2",a:"a",ul:"ul",li:"li",strong:"strong",blockquote:"blockquote",img:"img",h3:"h3",pre:"pre",code:"code",ol:"ol"},(0,a.ah)(),e.components),{QuizAlert:n}=t;return n||function(e,t){throw new Error("Expected "+(t?"component":"object")+" `"+e+"` to be defined: you likely forgot to import, pass, or provide it.")}("QuizAlert",!0),l.createElement(t.section,{className:"heading","data-heading-rank":"1","aria-labelledby":"204-implement-rag-use-cases"},l.createElement(t.h1,{id:"204-implement-rag-use-cases"},"204: Implement RAG Use Cases"),"\n",l.createElement(t.p,null,"In this lab, you will review and run examples of LLM applications that implement the ",l.createElement(t.em,null,"Retrieval Augmented Generation (RAG)")," pattern of working with LLMs. We will expand on the concepts that you learned in the previous labs."),"\n",l.createElement(n,{text:"Heads Up! Quiz material will be flagged like this!"}),"\n",l.createElement(t.section,{className:"heading","data-heading-rank":"2","aria-labelledby":"required-software-access-and-files"},l.createElement(t.h2,{id:"required-software-access-and-files"},l.createElement(t.a,{href:"#required-software-access-and-files"},"Required software, access, and files")),"\n",l.createElement(t.ul,null,"\n",l.createElement(t.li,null,"To complete this lab you will need access to ",l.createElement(t.strong,null,"watsonx.ai")),"\n",l.createElement(t.li,null,"Some knowledge of Python"),"\n"),"\n"),l.createElement(t.section,{className:"heading","data-heading-rank":"2","aria-labelledby":"rag-overview"},l.createElement(t.h2,{id:"rag-overview"},l.createElement(t.a,{href:"#rag-overview"},"RAG Overview")),"\n",l.createElement(t.p,null,l.createElement(t.em,null,"RAG (Retrieval-Augmented Generation)"),' is one of the most common use cases in generative AI because it allows us to work with data "external to the model", for example, data that was not used for model training. Many use cases require working with proprietary company data, and it\'s one of the reasons why RAG is frequently used in generative AI applications. RAG also allows us to add some guardrails to the generated output and reduce hallucination.'),"\n",l.createElement(t.p,null,"RAG can be implemented for various AI use cases, including:"),"\n",l.createElement(t.ul,null,"\n",l.createElement(t.li,null,"Question and answer"),"\n",l.createElement(t.li,null,"Summarization"),"\n",l.createElement(t.li,null,"Content generation"),"\n"),"\n",l.createElement(t.blockquote,null,"\n",l.createElement(t.p,null,'A "human interaction" analogy of RAG is providing a document to a person and asking them to answer a question based on the information contained within.'),"\n"),"\n",l.createElement(t.p,null,'RAG is "an application pattern" that can be implemented with multiple technologies. However, there are two key steps:'),"\n",l.createElement(t.ul,null,"\n",l.createElement(t.li,null,"During the ",l.createElement(t.strong,null,"retrieval")," step, we searched through a knowledge base (documents, websites, databases, etc.) to find information relevant to the instructions sent to the model. Retrieval can be based on keyword search or more advanced algorithms, like semantic similarity."),"\n",l.createElement(t.li,null,"The ",l.createElement(t.strong,null,"generation"),' step is similar to the generation in non-RAG use cases. The main difference is that information retrieved in the first step is provided as "context" (included in the prompt). Prompting the model to rely on "retrieved context" only, in contrast to the general knowledge which was used to train the LLM, is the key step for preventing hallucinations.'),"\n"),"\n",l.createElement(t.img,{src:"https://raw.githubusercontent.com/ibm-build-lab/VAD-VAR-Workshop/main/content//Watsonx/WatsonxAI/images/204/2.png",alt:"rag_diagram"}),"\n",l.createElement(t.section,{className:"heading","data-heading-rank":"3","aria-labelledby":"vector-databases"},l.createElement(t.h3,{id:"vector-databases"},l.createElement(t.a,{href:"#vector-databases"},"Vector databases")),"\n",l.createElement(t.p,null,'The "knowledge base" for the retrieval step is typically implemented as a ',l.createElement(t.strong,null,"vector database"),". Vector databases are not new, they have been used for several years for semantic search."),"\n",l.createElement(t.p,null,"Semantic search is a search technique that aims to understand the intent and context of a user's query. It's more advanced than traditional keyword-based search, which relies on matching specific keywords."),"\n",l.createElement(t.p,null,"Some popular vector databases are:"),"\n",l.createElement(t.ul,null,"\n",l.createElement(t.li,null,"Chroma (open-source)"),"\n",l.createElement(t.li,null,"Milvus"),"\n",l.createElement(t.li,null,"Elasticsearch"),"\n",l.createElement(t.li,null,"SingleStore"),"\n",l.createElement(t.li,null,"Pinecone"),"\n",l.createElement(t.li,null,"Redis"),"\n",l.createElement(t.li,null,"Postgres"),"\n"),"\n",l.createElement(t.p,null,"Some vector databases, like _Chroma, are in-memory databases, which makes it a good choice for experimenting and prototyping RAG use cases. In-memory databases do not need to be installed or configured. This is because all of their data is stored in volatile memory for the duration of the program's runtime. The downside of this though is that we will need to load the data each time we run the application."),"\n",l.createElement(t.p,null,"Vector databases store unstructured data in a numeric format. For AI use cases, we use a specific term to describe the converted unstructured data - ",l.createElement(t.strong,null,l.createElement(t.em,null,"embeddings")),". Embeddings are created by using an embedding model, for example, a popular open-source model ",l.createElement(t.em,null,"word2vec"),"_."),"\n",l.createElement(t.p,null,'One of the key features of embeddings is the ability to preserve relationships. With embeddings, words can be "added and subtracted" like vectors in math. One of the most famous examples that demonstrate this is the following:'),"\n",l.createElement(t.pre,null,l.createElement(t.code,{className:"hljs language-txt"},"king - man + woman = queen\n")),"\n",l.createElement(t.p,null,"In other words, adding the vectors associated with the words ",l.createElement(t.em,null,"king")," and ",l.createElement(t.em,null,"woman")," while subtracting ",l.createElement(t.em,null,"man")," is equal to the vector associated with the word ",l.createElement(t.em,null,"queen"),". This example describes a gender relationship."),"\n",l.createElement(t.p,null,"Another example might be:"),"\n",l.createElement(t.pre,null,l.createElement(t.code,{className:"hljs language-txt"},"Paris - France + Poland = Warsaw\n")),"\n",l.createElement(t.p,null,"The vector difference between ",l.createElement(t.em,null,"Paris")," and ",l.createElement(t.em,null,"France")," here captures the concept of a capital city."),"\n",l.createElement(t.p,null,'Here\'s an example of a semantic search for the word "education". Notice the "nearest point" words in the table. The measurement is in numbers because the search was performed using vector (numeric) data.'),"\n",l.createElement(t.p,null,"You can experiment further with this ",l.createElement(t.a,{href:"https://projector.tensorflow.org/"},"here"),"."),"\n",l.createElement(t.img,{src:"https://raw.githubusercontent.com/ibm-build-lab/VAD-VAR-Workshop/main/content//Watsonx/WatsonxAI/images/204/3.png",alt:"semantic_search_example"}),"\n",l.createElement(t.p,null,"Based on what we have discussed so far, we can make the following conclusions:"),"\n",l.createElement(t.ul,null,"\n",l.createElement(t.li,null,"We have a choice of ",l.createElement(t.em,null,"vector databases")," for implementations of RAG use cases"),"\n",l.createElement(t.li,null,"We have a choice of several ",l.createElement(t.em,null,"embedding models")," for converting unstructured data to vectors"),"\n",l.createElement(t.li,null,"Retrieval of relevant information is the first step in the RAG pattern, and the quality may be affected by the choice of a vector database and an embedding model."),"\n"),"\n",l.createElement(n),"\n",l.createElement(t.p,null,"In addition to the mentioned factors, loading data into the vector database requires ",l.createElement(t.strong,null,l.createElement(t.em,null,'"chunking'),'"'),", which is the process of dividing text into sections that are loaded into the database. There is no single guideline for defining chunks because the best size depends on the content we're working with."),"\n",l.createElement(t.p,null,'For generative AI use cases, we typically start with _fixed-size chunks, which should be "semantically meaninguful". For example, if in your document each paragraph has approximately 200 words, convert the number of words to several tokens (may vary per LLM), and use this number as the starting chunk size. In addition to the size of the chunk, we also need to specify overlapping (the same information in more than one chunk).'),"\n",l.createElement(t.p,null,'Model providers should publish information on recommended chunk size and overlap percentage for specific use cases. However, even if this information is published, developers will still need to experiment to find the optimal chunk size. If you can\'t find information on the recommended overlap, you can start with 10 percent (specified in the format of "number of tokens", for example, ',l.createElement(t.em,null,"100")," if your chunk size ",l.createElement(t.em,null,"1000"),")."),"\n",l.createElement(t.p,null,"To summarize, we should follow these steps when implementing the RAG use case:"),"\n",l.createElement(t.ol,null,"\n",l.createElement(t.li,null,"Select a vector database. When working with watsonx.ai, we should confirm that the selected vector database is supported. ",l.createElement(t.a,{href:"https://dataplatform.cloud.ibm.com/docs/content/wsj/analyze-data/fm-rag.html?context=wx&audience=wdp"},"Check IBM documentation for the latest updates"),"."),"\n",l.createElement(t.li,null,"Select the embedding model. Confirm that the embedding model works with the selected vector database."),"\n",l.createElement(t.li,null,"Experiment with chunk size."),"\n"),"\n",l.createElement(t.p,null,'As we discussed earlier, the second part of the RAG use case, sending instructions to LLM, is similar to non-RAG patterns. Developers should pay special attention to token limits because retrieved content will be added to the prompt. If the token limit is exceeded on input, then the model will not be able to generate output. This check will need to be implemented as "custom code" in your LLM applications.'),"\n",l.createElement(t.p,null,"WML API does return errors if token size is exceeded."),"\n",l.createElement(t.img,{src:"https://raw.githubusercontent.com/ibm-build-lab/VAD-VAR-Workshop/main/content//Watsonx/WatsonxAI/images/204/4.png",alt:"wml_error"}),"\n")),l.createElement(t.section,{className:"heading","data-heading-rank":"2","aria-labelledby":"rag-on-documents-with-langchain-and-chromadb"},l.createElement(t.h2,{id:"rag-on-documents-with-langchain-and-chromadb"},l.createElement(t.a,{href:"#rag-on-documents-with-langchain-and-chromadb"},"RAG on documents with LangChain and ChromaDB")),"\n",l.createElement(t.p,null,"To run the lab for this section we will start by logging into the watsonx platform; after navigating to the watsonx home page ",l.createElement(t.a,{href:"https://dataplatform.cloud.ibm.com/wx/home"},"here"),", we will want to open the Notebook editor that we can use to run the notebook associated with this lab."),"\n",l.createElement(t.blockquote,null,"\n",l.createElement(t.p,null,"If you don't know how to acccess watsonx.ai or are unsure how to open to the notebook editor, follow ",l.createElement(t.a,{href:"/watsonx/watsonxai/100#how-do-i-import-a-jupyter-notebook-in-watsonxai"},"this reference link")," which will walk you through the process for accessing watsonx.ai and opening the Jupyter notebook editor."),"\n"),"\n",l.createElement(t.p,null,"Use the following values for this lab:"),"\n",l.createElement(t.ul,null,"\n",l.createElement(t.li,null,l.createElement(t.strong,null,"Name:")," ",l.createElement(t.code,null,"{uniqueid}-rag-chromadb")),"\n",l.createElement(t.li,null,l.createElement(t.strong,null,"Notebook URL:")," ",l.createElement(t.code,null,"https://raw.githubusercontent.com/ibm-build-lab/VAD-VAR-Workshop/main/content/Watsonx/WatsonxAI/files/204/use_case_rag.ipynb")),"\n"),"\n",l.createElement(t.p,null,"After your notebook is launched and created, you can follow along and run through each cell of the notebook to complete the lab. The notebook contains comments explaining what code in each cell does as well as any necessary input that you might need to provide to successfully run a cell."),"\n",l.createElement(t.p,null,"Good luck!"),"\n"),l.createElement(t.section,{className:"heading","data-heading-rank":"2","aria-labelledby":"rag-using-a-website-optional"},l.createElement(t.h2,{id:"rag-using-a-website-optional"},l.createElement(t.a,{href:"#rag-using-a-website-optional"},"RAG using a website (optional)")),"\n",l.createElement(t.p,null,"This notebook is very similar to the last one. However, unlike the previous instead of sourcing the content from a given file you will instead implement a web scraper that allows a question to be answered about a given webpage."),"\n",l.createElement(t.p,null,"This notebook can be run within the watsonx platform; after navigating to the watsonx home page ",l.createElement(t.a,{href:"https://dataplatform.cloud.ibm.com/wx/home"},"here"),", we will want to open the Notebook editor that we can use to run the notebook associated with this lab."),"\n",l.createElement(t.blockquote,null,"\n",l.createElement(t.p,null,"If you don't know how to acccess watsonx.ai or are unsure how to open to the notebook editor, follow ",l.createElement(t.a,{href:"/watsonx/watsonxai/100#how-do-i-import-a-jupyter-notebook-in-watsonxai"},"this reference link")," which will walk you through the process for accessing watsonx.ai and opening the Jupyter notebook editor."),"\n"),"\n",l.createElement(t.p,null,"Use the following values for this lab:"),"\n",l.createElement(t.ul,null,"\n",l.createElement(t.li,null,l.createElement(t.strong,null,"Name:")," ",l.createElement(t.code,null,"uniqueid-rag-web-chromadb")),"\n",l.createElement(t.li,null,l.createElement(t.strong,null,"Notebook URL:")," ",l.createElement(t.code,null,"https://raw.githubusercontent.com/ibm-build-lab/VAD-VAR-Workshop/main/content/Watsonx/WatsonxAI/files/204/use_case_rag_web.ipynb")),"\n"),"\n",l.createElement(t.p,null,"After your notebook is launched and created, you can follow along and run through each cell of the notebook to complete the lab. The notebook contains comments explaining what code in each cell does as well as any necessary input that you might need to provide to successfully run a cell.")))}var r=function(e){void 0===e&&(e={});const{wrapper:t}=Object.assign({},(0,a.ah)(),e.components);return t?l.createElement(t,e,l.createElement(o,e)):o(e)};var i=n(4184),s=n.n(i),c=n(4690),m=n(1140),u=n(8623),h=n(8531),d=n(3383),p=n(7315);const w=e=>{const{data:{mdx:{tableOfContents:{items:t},frontmatter:{toc:n=!0,title:a,timeToComplete:o,updated:r}}},children:i}=e,c=(0,l.useRef)(null),{0:w}=(0,l.useState)(""),g=(null===n||n)&&t;return l.createElement(l.Fragment,null,l.createElement(m.Z,{timeToComplete:o,updated:r},t[0].title||a||""),l.createElement(h.Z,{className:p.YS},l.createElement("article",{className:s()(p.Y2,!g&&p.ey),ref:c},l.createElement(u.Z,{components:{h1:()=>null}},i)),g&&l.createElement(d.Z,{itemsList:t,maxDepth:2,currSection:w})))},g=e=>{const{location:{pathname:t},data:{mdx:{frontmatter:{title:n},tableOfContents:{items:a}}}}=e;return l.createElement(c.Z,{pathname:t,title:n||a[0].title||void 0})};function b(e){return l.createElement(w,e,l.createElement(r,e))}}}]);
//# sourceMappingURL=component---src-pages-mdx-fields-slug-tsx-content-file-path-content-watsonx-watsonx-ai-204-md-6502f955f5dd402f791d.js.map