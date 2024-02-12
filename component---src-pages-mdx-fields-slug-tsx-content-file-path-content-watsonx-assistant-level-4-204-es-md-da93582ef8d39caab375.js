"use strict";(self.webpackChunkvad_var_site=self.webpackChunkvad_var_site||[]).push([[275],{1524:function(e,n,a){a.r(n),a.d(n,{Head:function(){return b},default:function(){return h}});var t=a(1151),l=a(7294);function r(e){const n=Object.assign({section:"section",h1:"h1",p:"p",ul:"ul",li:"li",h2:"h2",a:"a",em:"em",ol:"ol",strong:"strong",code:"code",img:"img"},(0,t.ah)(),e.components);return l.createElement(n.section,{className:"heading","data-heading-rank":"1","aria-labelledby":"204-desplegar-neuralseek-con-watsonx-assistant-y-watson-discovery"},l.createElement(n.h1,{id:"204-desplegar-neuralseek-con-watsonx-assistant-y-watson-discovery"},"204: Desplegar NeuralSeek con watsonx Assistant y Watson Discovery"),"\n",l.createElement(n.p,null,"En esta guía de aprendizaje, utilizará los servicios Watson Discovery, watsonx Assistant y NeuralSeek que están disponibles en el catálogo de IBM Cloud para crear un asistente virtual que pueda responder a las preguntas sobre Watson Discovery. El asistente generará respuestas utilizando la documentación del producto Watson Discovery existente como su base de conocimientos."),"\n",l.createElement(n.p,null,"Cuando termine la guía de aprendizaje, comprenderá cómo:"),"\n",l.createElement(n.ul,null,"\n",l.createElement(n.li,null,"Crear un proyecto de recuperación de documentos en Descubrimiento."),"\n",l.createElement(n.li,null,"Cargue documentos PDF en su proyecto y aplique un modelo de comprensión de documentos inteligentes con formación de usuario a sus PDFs."),"\n",l.createElement(n.li,null,"Conecte el proyecto de descubrimiento a una instancia de servicio de NeuralSeek. NeuralSeek es un motor de generación de respuesta impulsado por IA."),"\n",l.createElement(n.li,null,"Cree un asistente en watsonx Assistant y aplique una integración de NeuralSeek al mismo."),"\n",l.createElement(n.li,null,"Añada una acción a su asistente de watsonx que se conecta a NeuralSeek para obtener respuestas."),"\n",l.createElement(n.li,null,"Utilice su asistente para responder preguntas sobre el descubrimiento."),"\n"),"\n",l.createElement(n.section,{className:"heading","data-heading-rank":"2","aria-labelledby":"requisitos-previos"},l.createElement(n.h2,{id:"requisitos-previos"},l.createElement(n.a,{href:"#requisitos-previos"},"Requisitos previos")),"\n",l.createElement(n.p,null,"Los pasos siguientes presuponen que ya tiene un ID de IBM. Si este no es el caso, cree primero un ID de IBM."),"\n",l.createElement(n.p,null,"Continuación ",l.createElement(n.a,{href:"https://techzone.ibm.com/my/reservations/create/64e6866b41bf2a0017d986ad"},"este enlace "),"para reservar un ",l.createElement(n.em,null,"Atención al cliente-GenAI")," Entorno de TechZone. Este entorno proporciona los servicios de watsonx Assistant, Watson Discovery y NeuralSeek que son necesarios para este laboratorio."),"\n",l.createElement(n.ol,null,"\n",l.createElement(n.li,null,"Seleccione ",l.createElement(n.strong,null,"Reserva ahora")," y ",l.createElement(n.strong,null,"Práctica/Autoeducación"),"."),"\n",l.createElement(n.li,null,"Introduzca ",l.createElement(n.code,null,"watsonx Assistant L4"),"en el ",l.createElement(n.strong,null,"Descripción del propósito"),"."),"\n",l.createElement(n.li,null,"Seleccione ",l.createElement(n.em,null,"us-sur")," como su ",l.createElement(n.strong,null,"Geografía preferida"),"."),"\n",l.createElement(n.li,null,"Marque el recuadro para aceptar los términos y condiciones y pulse ",l.createElement(n.strong,null,"Presentar"),"."),"\n"),"\n",l.createElement(n.p,null,"Debe obtener un correo electrónico informándole de que su entorno se está suministrando. Poco después, debe recibir un segundo correo electrónico informándole de que su entorno está listo:"),"\n",l.createElement(n.img,{src:"https://raw.githubusercontent.com/ibm-build-lab/VAD-VAR-Workshop/main/content//Watsonx/Assistant/images/204/001.png",alt:""}),"\n",l.createElement(n.ol,{start:"5"},"\n",l.createElement(n.li,null,"Pulse en ",l.createElement(n.strong,null,"Ver mis reservas")," y luego haga clic en su ambiente reservado."),"\n"),"\n",l.createElement(n.p,null,"En la parte inferior de esta página, encontrará enlaces a la ",l.createElement(n.em,null,"Página de instancia de servicio de Watson Discovery")," y el ",l.createElement(n.em,null,"página de instancia de servicio de watsonx Assistant"),". Cuando estas páginas se mencionan en el laboratorio a continuación, usted puede navegar a ellos a través de estos enlaces (que serán diferentes para su entorno):"),"\n",l.createElement(n.img,{src:"https://raw.githubusercontent.com/ibm-build-lab/VAD-VAR-Workshop/main/content//Watsonx/Assistant/images/204/002.png",alt:""}),"\n",l.createElement(n.p,null,"De forma alternativa, puede abrir el menú Navegación en IBM Cloud, pulse ",l.createElement(n.strong,null,"Lista de recursos")," , abra el ",l.createElement(n.strong,null,"AI/Machine Learning")," , haga clic en un servicio allí y haga clic en ",l.createElement(n.strong,null,"Ver todos los detalles"),". Esto también es cómo usted puede navegar a la ",l.createElement(n.em,null,"Página de instancia de servicio NeuralSeek Lite")," ( ",l.createElement(n.code,null,"...neuralseek-lite"),")."),"\n",l.createElement(n.ol,{start:"6"},"\n",l.createElement(n.li,null,"Ir a ",l.createElement(n.strong,null,"Notificaciones")," en IBM Cloud (el icono de campana en la parte superior derecha) y acepte la invitación al entorno TechZone pulsando ",l.createElement(n.strong,null,"Únase ahora"),"."),"\n"),"\n"),l.createElement(n.section,{className:"heading","data-heading-rank":"2","aria-labelledby":"paso-1-obtener-la-documentación-del-producto"},l.createElement(n.h2,{id:"paso-1-obtener-la-documentación-del-producto"},l.createElement(n.a,{href:"#paso-1-obtener-la-documentación-del-producto"},"Paso 1: Obtener la documentación del producto")),"\n",l.createElement(n.p,null,"Para utilizar la documentación del producto de descubrimiento como nuestra base de conocimientos, descargaremos la documentación del producto como dos archivos PDF. La documentación se ha dividido en dos archivos para que se pueda enriquecer más rápidamente en el descubrimiento."),"\n",l.createElement(n.p,null,"Ve ",l.createElement(n.a,{href:"https://github.com/ibm-build-lab/VAD-VAR-Workshop/blob/main/static/watsonx-assistant/discovery-data-1.pdf"},"aquí")," y pulse ",l.createElement(n.strong,null,"Descargar archivo sin formato")," para descargar ",l.createElement(n.em,null,"discovery-data-1.pdf"),"."),"\n",l.createElement(n.p,null,"Ve ",l.createElement(n.a,{href:"https://github.com/ibm-build-lab/VAD-VAR-Workshop/blob/main/static/watsonx-assistant/discovery-data-2.pdf"},"aquí")," y pulse ",l.createElement(n.strong,null,"Descargar archivo sin formato")," para descargar ",l.createElement(n.em,null,"discovery-data-2.pdf"),"."),"\n"),l.createElement(n.section,{className:"heading","data-heading-rank":"2","aria-labelledby":"paso-2-crear-un-proyecto-de-recuperación-de-documentos"},l.createElement(n.h2,{id:"paso-2-crear-un-proyecto-de-recuperación-de-documentos"},l.createElement(n.a,{href:"#paso-2-crear-un-proyecto-de-recuperación-de-documentos"},"Paso 2: Crear un proyecto de recuperación de documentos")),"\n",l.createElement(n.p,null,"Ahora que tiene la copia más reciente de la documentación del producto, añádala a un proyecto de descubrimiento como origen de datos."),"\n",l.createElement(n.p,null,"En Descubrimiento, creará un ",l.createElement(n.em,null,"Recuperación de documentos")," tipo de proyecto. Los documentos que añada a un proyecto de este tipo se enriquecen automáticamente de las siguientes maneras:"),"\n",l.createElement(n.ul,null,"\n",l.createElement(n.li,null,"Las entidades, como los nombres propios, se identifican y etiquetan."),"\n",l.createElement(n.li,null,"Las partes del habla se identifican y se etiquetan."),"\n"),"\n",l.createElement(n.p,null,"Esta información etiquetada se utiliza más tarde cuando se envía una frase de lenguaje natural como una consulta de búsqueda para devolver una respuesta precisa."),"\n",l.createElement(n.ol,null,"\n",l.createElement(n.li,null,"Abra una nueva pestaña de navegador web y vaya a IBM Cloud."),"\n",l.createElement(n.li,null,"De la ",l.createElement(n.em,null,"Página de instancia de servicio de Watson Discovery")," en IBM Cloud, pulse ",l.createElement(n.strong,null,"Iniciar el descubrimiento de Watson"),"."),"\n",l.createElement(n.li,null,"De la ",l.createElement(n.em,null,"Mis proyectos")," página, pulse ",l.createElement(n.strong,null,"Nuevo proyecto"),"."),"\n",l.createElement(n.li,null,"Nombre del proyecto ",l.createElement(n.code,null,"Discovery documentation"),"y, a continuación, haga clic en ",l.createElement(n.strong,null,"Recuperación de documentos")," azulejo."),"\n"),"\n",l.createElement(n.img,{src:"https://raw.githubusercontent.com/ibm-build-lab/VAD-VAR-Workshop/main/content//Watsonx/Assistant/images/204/003.png",alt:""}),"\n",l.createElement(n.ol,{start:"5"},"\n",l.createElement(n.li,null,"Pulse en ",l.createElement(n.strong,null,"Siguiente"),"."),"\n"),"\n",l.createElement(n.p,null,"Configurará el origen de datos para el proyecto en el paso siguiente."),"\n"),l.createElement(n.section,{className:"heading","data-heading-rank":"2","aria-labelledby":"paso-3-cargar-datos-en-el-proyecto"},l.createElement(n.h2,{id:"paso-3-cargar-datos-en-el-proyecto"},l.createElement(n.a,{href:"#paso-3-cargar-datos-en-el-proyecto"},"Paso 3: Cargar datos en el proyecto")),"\n",l.createElement(n.p,null,"Añada los PDF de documentación al proyecto de descubrimiento."),"\n",l.createElement(n.img,{src:"https://raw.githubusercontent.com/ibm-build-lab/VAD-VAR-Workshop/main/content//Watsonx/Assistant/images/204/004.png",alt:""}),"\n",l.createElement(n.ol,null,"\n",l.createElement(n.li,null,"\n",l.createElement(n.p,null,"Nombre de la colección ",l.createElement(n.em,null,"Descubrimiento docs parte 1"),"."),"\n"),"\n",l.createElement(n.li,null,"\n",l.createElement(n.p,null,"Pulse en ",l.createElement(n.strong,null,"Arrastrar y soltar archivos aquí o subir")," , y a continuación, examine para añadir el primer archivo PDF que ha creado anteriormente."),"\n"),"\n",l.createElement(n.li,null,"\n",l.createElement(n.p,null,"Pulse en ",l.createElement(n.strong,null,"Acabado"),"."),"\n",l.createElement(n.p,null,"El archivo se procesa tal como se añade a la colección."),"\n"),"\n",l.createElement(n.li,null,"\n",l.createElement(n.p,null,"En el panel de navegación, pulse ",l.createElement(n.strong,null,"Gestionar colecciones")," y, a continuación, pulse ",l.createElement(n.strong,null,"Nueva colección"),"."),"\n"),"\n"),"\n",l.createElement(n.img,{src:"https://raw.githubusercontent.com/ibm-build-lab/VAD-VAR-Workshop/main/content//Watsonx/Assistant/images/204/005.png",alt:""}),"\n",l.createElement(n.ol,{start:"5"},"\n",l.createElement(n.li,null,"Repita los pasos anteriores para añadir el segundo archivo PDF como una colección denominada ",l.createElement(n.em,null,"Descubrimiento docs parte 2"),"."),"\n"),"\n",l.createElement(n.p,null,"Después de subir los datos, el descubrimiento procesa e indexa. Mientras se procesan los datos, vamos a crear nuestro asistente virtual."),"\n"),l.createElement(n.section,{className:"heading","data-heading-rank":"2","aria-labelledby":"paso-4-crear-un-asistente"},l.createElement(n.h2,{id:"paso-4-crear-un-asistente"},l.createElement(n.a,{href:"#paso-4-crear-un-asistente"},"Paso 4: Crear un asistente")),"\n",l.createElement(n.p,null,"Para esta guía de aprendizaje, creará un asistente con una única acción."),"\n",l.createElement(n.ol,null,"\n",l.createElement(n.li,null,"\n",l.createElement(n.p,null,"Abra una nueva pestaña de navegador web y vaya a IBM Cloud."),"\n"),"\n",l.createElement(n.li,null,"\n",l.createElement(n.p,null,"De la ",l.createElement(n.em,null,"página de instancia de servicio de watsonx Assistant")," en IBM Cloud, pulse ",l.createElement(n.strong,null,"Iniciar asistente de watsonx"),"."),"\n",l.createElement(n.p,null,"Se visualiza la interfaz de usuario del producto watsonx Assistant donde puede crear su primer asistente."),"\n"),"\n",l.createElement(n.li,null,"\n",l.createElement(n.p,null,"Añadir ",l.createElement(n.code,null,"Discovery expert"),"como nombre de asistente y, a continuación, pulse ",l.createElement(n.strong,null,"Siguiente"),"."),"\n"),"\n",l.createElement(n.li,null,"\n",l.createElement(n.p,null,"Si se le pide que comparta información sobre usted y su asistente, complete los campos necesarios y, a continuación, pulse ",l.createElement(n.strong,null,"Siguiente"),"."),"\n",l.createElement(n.p,null,"Al crear un asistente, se crea automáticamente una aplicación de conversación web."),"\n"),"\n",l.createElement(n.li,null,"\n",l.createElement(n.p,null,"Pulse en ",l.createElement(n.strong,null,"Crear")," para crear el asistente y la aplicación de chat web correspondiente."),"\n"),"\n"),"\n",l.createElement(n.p,null,"Después de un mensaje de felicitación, se muestra la página de inicio de su nuevo asistente."),"\n",l.createElement(n.img,{src:"https://raw.githubusercontent.com/ibm-build-lab/VAD-VAR-Workshop/main/content//Watsonx/Assistant/images/204/006.png",alt:""}),"\n",l.createElement(n.p,null,"Antes de añadir algo a nuestro nuevo asistente, vamos a comprobar el estado de nuestros datos."),"\n"),l.createElement(n.section,{className:"heading","data-heading-rank":"2","aria-labelledby":"paso-5-preparar-los-datos-para-la-recuperación"},l.createElement(n.h2,{id:"paso-5-preparar-los-datos-para-la-recuperación"},l.createElement(n.a,{href:"#paso-5-preparar-los-datos-para-la-recuperación"},"Paso 5: Preparar los datos para la recuperación")),"\n",l.createElement(n.p,null,"Para mejorar la capacidad de recuperación de la información en sus archivos PDF, dividirá los archivos PDF en muchos documentos más pequeños. Para ello, primero enseñará a Discovery sobre la estructura de sus archivos PDF, por lo que comprende cómo se formatean las subsecciones y puede dividir el documento por subsección."),"\n",l.createElement(n.ol,null,"\n",l.createElement(n.li,null,"\n",l.createElement(n.p,null,"Vuelva a la pestaña del navegador web donde se visualiza el proyecto de descubrimiento."),"\n",l.createElement(n.p,null,"El ",l.createElement(n.em,null,"Mejorar y personalizar")," para el último archivo PDF que ha subido se visualiza."),"\n"),"\n",l.createElement(n.li,null,"\n",l.createElement(n.p,null,"De la ",l.createElement(n.em,null,"Herramientas de mejora")," panel, expandir ",l.createElement(n.em,null,"Definir estructura")," y, a continuación, pulse ",l.createElement(n.strong,null,"Nuevos campos"),"."),"\n"),"\n"),"\n",l.createElement(n.img,{src:"https://raw.githubusercontent.com/ibm-build-lab/VAD-VAR-Workshop/main/content//Watsonx/Assistant/images/204/007.png",alt:""}),"\n",l.createElement(n.ol,{start:"3"},"\n",l.createElement(n.li,null,"\n",l.createElement(n.p,null,"Elija la opción ",l.createElement(n.em,null,"Descubrimiento docs parte 1")," recogida."),"\n",l.createElement(n.p,null,"Se visualiza la pestaña Identificar campos, donde puede elegir el tipo de modelo de comprensión de documento inteligente que desea utilizar."),"\n"),"\n",l.createElement(n.li,null,"\n",l.createElement(n.p,null,"Pulse en ",l.createElement(n.strong,null,"Modelos formados por el usuario")," y, a continuación, pulse ",l.createElement(n.strong,null,"Presentar"),"."),"\n"),"\n"),"\n",l.createElement(n.img,{src:"https://raw.githubusercontent.com/ibm-build-lab/VAD-VAR-Workshop/main/content//Watsonx/Assistant/images/204/008.png",alt:""}),"\n",l.createElement(n.ol,{start:"5"},"\n",l.createElement(n.li,null,"\n",l.createElement(n.p,null,"Pulse en ",l.createElement(n.strong,null,"Aplicar cambios y reprocesar"),"."),"\n",l.createElement(n.p,null,"Después de que se produzca algún proceso, se visualiza una representación del documento en la herramienta de comprensión de documentos inteligentes. La herramienta muestra una vista del documento original junto con una representación del documento, donde el texto se sustituye por bloques. Los bloques representan tipos de campo."),"\n",l.createElement(n.p,null,"Inicialmente, los bloques están etiquetados como ",l.createElement(n.code,null,"text"),"porque todo el contenido del documento se considera texto estándar de forma predeterminada y se indexa en el ",l.createElement(n.code,null,"text"),"."),"\n",l.createElement(n.p,null,"Queremos etiquetar todas las cabeceras de primer y segundo nivel como subtítulos en lugar de texto."),"\n"),"\n",l.createElement(n.li,null,"\n",l.createElement(n.p,null,"En la vista miniaturas, pulse la miniatura de la primera página de texto completo del documento para abrir la primera página con contenido real."),"\n"),"\n"),"\n",l.createElement(n.img,{src:"https://raw.githubusercontent.com/ibm-build-lab/VAD-VAR-Workshop/main/content//Watsonx/Assistant/images/204/009.png",alt:""}),"\n",l.createElement(n.ol,{start:"7"},"\n",l.createElement(n.li,null,"Para anotar el documento, haga clic en ",l.createElement(n.code,null,"subtitle"),"etiqueta de la ",l.createElement(n.em,null,"Campo")," lista de etiquetas. A continuación, pulse cada bloque en la representación de la página PDF que representa una cabecera para cambiar su etiqueta de ",l.createElement(n.code,null,"text"),"a ",l.createElement(n.code,null,"subtitle"),"."),"\n"),"\n",l.createElement(n.img,{src:"https://raw.githubusercontent.com/ibm-build-lab/VAD-VAR-Workshop/main/content//Watsonx/Assistant/images/204/010.png",alt:""}),"\n",l.createElement(n.ol,{start:"8"},"\n",l.createElement(n.li,null,"\n",l.createElement(n.p,null,"Después de que cada subtítulo de la página actual esté etiquetado, pulse ",l.createElement(n.strong,null,"Página Enviar"),"."),"\n",l.createElement(n.p,null,"Se visualiza la página siguiente del archivo PDF."),"\n"),"\n"),"\n",l.createElement(n.img,{src:"https://raw.githubusercontent.com/ibm-build-lab/VAD-VAR-Workshop/main/content//Watsonx/Assistant/images/204/011.png",alt:""}),"\n",l.createElement(n.ol,{start:"9"},"\n",l.createElement(n.li,null,"\n",l.createElement(n.p,null,"Repita este proceso hasta que la herramienta sea capaz de etiquetar las cabeceras correctamente para usted de forma coherente cuando las nuevas páginas se carguen en la herramienta. En ese punto, haga clic en ",l.createElement(n.strong,null,"Aplicar cambios y reprocesar"),"."),"\n",l.createElement(n.p,null,"¡Felicidades Ha capacitado con éxito un modelo de Smart Document Understanding (SDU) que puede reconocer subtítulos en sus documentos. Vamos a aplicar el mismo modelo al otro archivo PDF que ha añadido al proyecto."),"\n"),"\n",l.createElement(n.li,null,"\n",l.createElement(n.p,null,"En la barra de herramientas del editor de SDU, haga clic en ",l.createElement(n.em,null,"Modelo de exportación")," icono (flecha abajo) y, a continuación, pulse ",l.createElement(n.strong,null,"Exportación"),"."),"\n"),"\n",l.createElement(n.li,null,"\n",l.createElement(n.p,null,"Guardar el ",l.createElement(n.code,null,".sdumodel"),"a su sistema en una ubicación en la que puede acceder a él de nuevo en breve."),"\n"),"\n",l.createElement(n.li,null,"\n",l.createElement(n.p,null,"En el panel de navegación, pulse ",l.createElement(n.strong,null,"Gestionar colecciones")," y, a continuación, abrir el ",l.createElement(n.em,null,"Descubrimiento docs parte 2")," recogida."),"\n"),"\n",l.createElement(n.li,null,"\n",l.createElement(n.p,null,"Abra el ",l.createElement(n.em,null,"Identificar campos"),"."),"\n"),"\n",l.createElement(n.li,null,"\n",l.createElement(n.p,null,"Pulse en ",l.createElement(n.strong,null,"Modelos formados por el usuario")," y, a continuación, pulse ",l.createElement(n.strong,null,"Presentar"),"."),"\n"),"\n",l.createElement(n.li,null,"\n",l.createElement(n.p,null,"Pulse en ",l.createElement(n.strong,null,"Aplicar cambios y reprocesar"),"."),"\n"),"\n",l.createElement(n.li,null,"\n",l.createElement(n.p,null,"En la barra de herramientas del editor de SDU, haga clic en ",l.createElement(n.em,null,"Modelo de importación")," icono (flecha arriba) y, a continuación, pulse ",l.createElement(n.strong,null,"Carga"),"."),"\n"),"\n",l.createElement(n.li,null,"\n",l.createElement(n.p,null,"Seleccione la opción ",l.createElement(n.code,null,".sdumodel"),"que ha descargado anteriormente y, a continuación, pulse ",l.createElement(n.strong,null,"Seleccionar modelo"),"."),"\n"),"\n",l.createElement(n.li,null,"\n",l.createElement(n.p,null,"Pulse en ",l.createElement(n.strong,null,"Aplicar cambios y reprocesar")," para aplicar el mismo modelo de SDU a la primera colección."),"\n"),"\n"),"\n",l.createElement(n.p,null,"El descubrimiento vuelve a procesar los datos de su índice para identificar los subtítulos en los documentos. Mientras los datos están siendo reprocesados, vamos a crear nuestro generador de respuestas."),"\n"),l.createElement(n.section,{className:"heading","data-heading-rank":"2","aria-labelledby":"paso-6-crear-una-instancia-de-servicio-neuralseek"},l.createElement(n.h2,{id:"paso-6-crear-una-instancia-de-servicio-neuralseek"},l.createElement(n.a,{href:"#paso-6-crear-una-instancia-de-servicio-neuralseek"},"Paso 6: Crear una instancia de servicio NeuralSeek")),"\n",l.createElement(n.p,null,"Puede utilizar una extensión de búsqueda en watsonx Assistant para conectar su asistente directamente a Discovery y devolver pasajes directamente del origen de datos. Sin embargo, añadiremos el servicio NeuralSeek entre watsonx Assistant y Discovery en esta guía de aprendizaje. NeuralSeek recupera los pasajes del Discovery y luego los convierte en respuestas que suenan más conversacionales."),"\n",l.createElement(n.ol,null,"\n",l.createElement(n.li,null,"\n",l.createElement(n.p,null,"Abra una nueva pestaña de navegador web y vaya a IBM Cloud."),"\n"),"\n",l.createElement(n.li,null,"\n",l.createElement(n.p,null,"De la ",l.createElement(n.em,null,"Página de instancia de servicio NeuralSeek Lite")," en IBM Cloud, pulse ",l.createElement(n.strong,null,"Lanzar NeuralSeek"),"."),"\n"),"\n",l.createElement(n.li,null,"\n",l.createElement(n.p,null,"Haga clic en ",l.createElement(n.strong,null,"Configurar")," y haga clic en ",l.createElement(n.strong,null,"Mostrar opciones avanzadas"),"."),"\n"),"\n",l.createElement(n.li,null,"\n",l.createElement(n.p,null,"En ",l.createElement(n.strong,null,"Conexión Base de Conocimientos")," :"),"\n",l.createElement(n.ul,null,"\n",l.createElement(n.li,null,"Conjunto ",l.createElement(n.strong,null,"Lenguaje de conocimiento base")," al inglés."),"\n",l.createElement(n.li,null,"Especifique la ",l.createElement(n.strong,null,"URL del servicio de descubrimiento")," y ",l.createElement(n.strong,null,"Clave de API de descubrimiento")," (ambos encontrados en el ",l.createElement(n.strong,null,"Página de instancia de servicio de Watson Discovery")," )."),"\n",l.createElement(n.li,null,"Especifique la ",l.createElement(n.strong,null,"ID de proyecto de descubrimiento")," (en Watson Discovery, pulse ",l.createElement(n.strong,null,"Integrar y desplegar")," desde el panel de navegación, abra el ",l.createElement(n.em,null,"Información de API")," y copiar el ",l.createElement(n.em,null,"ID del proyecto")," )."),"\n"),"\n"),"\n",l.createElement(n.li,null,"\n",l.createElement(n.p,null,"En ",l.createElement(n.strong,null,"Ajuste de la base de conocimientos")," :"),"\n",l.createElement(n.ul,null,"\n",l.createElement(n.li,null,"Conjunto ",l.createElement(n.strong,null,"Rango de puntuación de documento")," a 50%."),"\n",l.createElement(n.li,null,"Conjunto ",l.createElement(n.strong,null,"Tamaño de fragmento")," a 400 caracteres."),"\n"),"\n"),"\n",l.createElement(n.li,null,"\n",l.createElement(n.p,null,"En ",l.createElement(n.strong,null,"Preferencias de empresa/organización")," , proporcione el nombre de su empresa."),"\n"),"\n",l.createElement(n.li,null,"\n",l.createElement(n.p,null,"En ",l.createElement(n.strong,null,"Governance & Guardrails")," , set ",l.createElement(n.strong,null,"Porcentaje mínimo de confianza")," a 30%."),"\n"),"\n",l.createElement(n.li,null,"\n",l.createElement(n.p,null,"Pulse en ",l.createElement(n.strong,null,"Guardar"),"."),"\n"),"\n"),"\n"),l.createElement(n.section,{className:"heading","data-heading-rank":"2","aria-labelledby":"paso-7-dividir-sus-documentos-pdf"},l.createElement(n.h2,{id:"paso-7-dividir-sus-documentos-pdf"},l.createElement(n.a,{href:"#paso-7-dividir-sus-documentos-pdf"},"Paso 7: Dividir sus documentos PDF")),"\n",l.createElement(n.p,null,"Ahora que los subtítulos se indexan correctamente en Discovery, utilícelas como base para dividir los archivos PDF en muchos documentos más pequeños."),"\n",l.createElement(n.ol,null,"\n",l.createElement(n.li,null,"Vuelva a la pestaña del navegador web donde se visualiza el proyecto de descubrimiento."),"\n",l.createElement(n.li,null,"Abra el ",l.createElement(n.strong,null,"Gestionar campos")," para la colección actual."),"\n",l.createElement(n.li,null,"En ",l.createElement(n.em,null,"Mejorar los resultados de la consulta dividiendo los documentos")," , pulse ",l.createElement(n.strong,null,"Dividir el documento +"),"."),"\n",l.createElement(n.li,null,"En el ",l.createElement(n.em,null,"Dividir el documento en cada aparición de")," , seleccione ",l.createElement(n.strong,null,"subtítulo")," y, a continuación, pulse ",l.createElement(n.strong,null,"Aplicar cambios y reprocesar"),"."),"\n"),"\n",l.createElement(n.img,{src:"https://raw.githubusercontent.com/ibm-build-lab/VAD-VAR-Workshop/main/content//Watsonx/Assistant/images/204/012.png",alt:""}),"\n",l.createElement(n.ol,{start:"4"},"\n",l.createElement(n.li,null,"En el panel de navegación, pulse ",l.createElement(n.strong,null,"Gestionar colecciones")," , y luego abrir la otra colección."),"\n",l.createElement(n.li,null,"Ir a la ",l.createElement(n.em,null,"Gestionar campos")," y, a continuación, elegir ",l.createElement(n.strong,null,"subtítulo")," en el ",l.createElement(n.em,null,"Dividir el documento en cada aparición de"),"."),"\n",l.createElement(n.li,null,"Pulse en ",l.createElement(n.strong,null,"Aplicar cambios y reprocesar"),"."),"\n"),"\n",l.createElement(n.p,null,"Las colecciones empiezan a reprocesarse. Una vez finalizada la reindexación, en lugar de contener un documento cada uno, las colecciones contendrán varios cientos de documentos cada uno."),"\n",l.createElement(n.img,{src:"https://raw.githubusercontent.com/ibm-build-lab/VAD-VAR-Workshop/main/content//Watsonx/Assistant/images/204/013.png",alt:""}),"\n",l.createElement(n.p,null,"Mientras el índice se está reconstruyendo, vamos a tener a nuestro asistente listo."),"\n"),l.createElement(n.section,{className:"heading","data-heading-rank":"2","aria-labelledby":"paso-8-añadir-una-extensión-a-su-asistente"},l.createElement(n.h2,{id:"paso-8-añadir-una-extensión-a-su-asistente"},l.createElement(n.a,{href:"#paso-8-añadir-una-extensión-a-su-asistente"},"Paso 8: Añadir una extensión a su asistente")),"\n",l.createElement(n.p,null,"Conecte el asistente a la instancia de servicio NeuralSeek."),"\n",l.createElement(n.ol,null,"\n",l.createElement(n.li,null,"En la pestaña NeuralSeek, pulse el botón ",l.createElement(n.em,null,"Integrar")," y siga las instrucciones para configurar la extensión personalizada NeuralSeek para su asistente. Cuando termine el paso 6 del procedimiento en NeuralSeek, continúe con el siguiente paso del procedimiento aquí."),"\n"),"\n",l.createElement(n.img,{src:"https://raw.githubusercontent.com/ibm-build-lab/VAD-VAR-Workshop/main/content//Watsonx/Assistant/images/204/014.png",alt:""}),"\n",l.createElement(n.ol,{start:"2"},"\n",l.createElement(n.li,null,"En el panel de navegación de watsonx Assistant, pulse ",l.createElement(n.strong,null,"Acciones")," y, a continuación, pulse ",l.createElement(n.strong,null,"Crear acción +"),"."),"\n",l.createElement(n.li,null,"Elija ",l.createElement(n.strong,null,"Inicio rápido de plantillas")," y, a continuación, desplácese a buscar y haga clic en ",l.createElement(n.strong,null,"Kit de inicio de NeuralSeek"),"."),"\n"),"\n",l.createElement(n.img,{src:"https://raw.githubusercontent.com/ibm-build-lab/VAD-VAR-Workshop/main/content//Watsonx/Assistant/images/204/015.png",alt:""}),"\n",l.createElement(n.ol,{start:"4"},"\n",l.createElement(n.li,null,"\n",l.createElement(n.p,null,"Pulse en ",l.createElement(n.strong,null,"Seleccione este kit de inicio")," y, a continuación, pulse ",l.createElement(n.strong,null,"Añadir plantillas"),"."),"\n"),"\n",l.createElement(n.li,null,"\n",l.createElement(n.p,null,"Pulse para abrir el ",l.createElement(n.em,null,"Búsqueda de neuralSeek")," que usted acaba de añadir al asistente."),"\n"),"\n",l.createElement(n.li,null,"\n",l.createElement(n.p,null,"Añada las siguientes consultas de ejemplo de usuario:"),"\n",l.createElement(n.p,null,l.createElement(n.code,null,"What Watson Discovery project types are available and what do they do?")),"\n",l.createElement(n.p,null,l.createElement(n.code,null,"What external data sources are supported by Watson Discovery?")),"\n",l.createElement(n.p,null,l.createElement(n.code,null,"Can I add a custom dictionary to Watson Discovery?")),"\n",l.createElement(n.p,null,l.createElement(n.code,null,"How do I use the Content Mining application?")),"\n",l.createElement(n.p,null,l.createElement(n.code,null,"When should I add query expansions to my project?")),"\n",l.createElement(n.p,null,l.createElement(n.code,null,"Which file types support Smart Document Understanding models?")),"\n",l.createElement(n.p,null,l.createElement(n.code,null,"Can I enable optical character recognition for all file types?")),"\n",l.createElement(n.p,null,l.createElement(n.code,null,"Does my data have to be written in English?")),"\n"),"\n"),"\n",l.createElement(n.p,null,"watsonx Assistant utiliza las preguntas de ejemplo para reconocer los tipos de preguntas de usuario que debe direccionar a esta acción."),"\n",l.createElement(n.ol,{start:"7"},"\n",l.createElement(n.li,null,"\n",l.createElement(n.p,null,"Pulse en ",l.createElement(n.em,null,"Paso 3")," para abrirlo para su edición."),"\n",l.createElement(n.p,null,"En el ",l.createElement(n.em,null,"Y luego")," , pulse ",l.createElement(n.strong,null,"Editar extensión"),"."),"\n",l.createElement(n.p,null,"Establezca las variables como se muestra a continuación ( ",l.createElement(n.code,null,"query_text"),"está bajo ",l.createElement(n.em,null,"Variables de sesión")," ):"),"\n",l.createElement(n.img,{src:"https://raw.githubusercontent.com/ibm-build-lab/VAD-VAR-Workshop/main/content//Watsonx/Assistant/images/204/016.png",alt:""}),"\n",l.createElement(n.p,null,"Pulse en ",l.createElement(n.strong,null,"Aplicar"),"."),"\n"),"\n",l.createElement(n.li,null,"\n",l.createElement(n.p,null,"Pulse en ",l.createElement(n.em,null,"Paso 6")," para abrirlo para su edición."),"\n",l.createElement(n.p,null,"Este paso muestra un enlace que los usuarios pueden pulsar para obtener más información. Queremos que este enlace vaya directamente a la documentación del producto en el sitio de IBM Cloud Docs."),"\n",l.createElement(n.p,null,"Cambie la referencia de hipertexto en el elemento HTML de ancla para que contenga el URL siguiente:"),"\n",l.createElement(n.p,null,l.createElement(n.code,null,'<a href="https://cloud.ibm.com/docs/discovery-data?topic=discovery-data-about" target="_blank">')),"\n"),"\n"),"\n",l.createElement(n.img,{src:"https://raw.githubusercontent.com/ibm-build-lab/VAD-VAR-Workshop/main/content//Watsonx/Assistant/images/204/017.png",alt:""}),"\n",l.createElement(n.ol,{start:"9"},"\n",l.createElement(n.li,null,"Guarde los cambios y, a continuación, pulse la X para cerrar el paso."),"\n"),"\n",l.createElement(n.p,null,"¡Felicidades Ha creado correctamente una acción que reconoce las preguntas sobre el descubrimiento y obtiene sus respuestas de la extensión NeuralSeek conectada."),"\n"),l.createElement(n.section,{className:"heading","data-heading-rank":"2","aria-labelledby":"paso-9-configurar-el-chat-web-para-su-asistente"},l.createElement(n.h2,{id:"paso-9-configurar-el-chat-web-para-su-asistente"},l.createElement(n.a,{href:"#paso-9-configurar-el-chat-web-para-su-asistente"},"Paso 9: Configurar el chat web para su asistente")),"\n",l.createElement(n.p,null,"Para obtener una vista previa de su asistente, utilizará el chat web incorporado como interfaz de usuario de conversación para interactuar con el asistente."),"\n",l.createElement(n.ol,null,"\n",l.createElement(n.li,null,"\n",l.createElement(n.p,null,"En el panel de navegación de watsonx Assistant, pulse ",l.createElement(n.strong,null,"Entornos"),"."),"\n",l.createElement(n.p,null,"Se visualiza el entorno de borrador. Muestra que un chat web está conectado a su asistente. También puede ver que el chat web está conectado a la extensión NeuralSeek."),"\n"),"\n"),"\n",l.createElement(n.img,{src:"https://raw.githubusercontent.com/ibm-build-lab/VAD-VAR-Workshop/main/content//Watsonx/Assistant/images/204/018.png",alt:""}),"\n",l.createElement(n.ol,{start:"2"},"\n",l.createElement(n.li,null,"\n",l.createElement(n.p,null,"Haga clic en ",l.createElement(n.em,null,"Chat web")," azulejo para editar el chat web."),"\n",l.createElement(n.p,null,"No queremos añadir múltiples preguntas de inicio, así que vamos a desactivar la pantalla de inicio para el chat web. Haga clic en ",l.createElement(n.strong,null,"Pantalla de inicio"),". Establezca el conmutador en ",l.createElement(n.strong,null,"Apagado")," y, a continuación, pulse ",l.createElement(n.strong,null,"Guardar y salir"),"."),"\n"),"\n"),"\n",l.createElement(n.img,{src:"https://raw.githubusercontent.com/ibm-build-lab/VAD-VAR-Workshop/main/content//Watsonx/Assistant/images/204/019.png",alt:""}),"\n",l.createElement(n.p,null,"¡Estás listo para previsualizar a tu asistente!"),"\n"),l.createElement(n.section,{className:"heading","data-heading-rank":"2","aria-labelledby":"paso-10-vista-previa-del-asistente"},l.createElement(n.h2,{id:"paso-10-vista-previa-del-asistente"},l.createElement(n.a,{href:"#paso-10-vista-previa-del-asistente"},"Paso 10: Vista previa del asistente")),"\n",l.createElement(n.p,null,"Para obtener una vista previa de un asistente que se conecta a datos almacenados en Descubrimiento, debe obtener una vista previa del asistente de ",l.createElement(n.em,null,"Entornos"),". Cuando se previsualiza el chat web de forma independiente, el asistente no puede recuperar datos del descubrimiento; necesita los recursos de entorno para poder conectarse al descubrimiento."),"\n",l.createElement(n.ol,null,"\n",l.createElement(n.li,null,"\n",l.createElement(n.p,null,"De la ",l.createElement(n.em,null,"Entornos")," página, pulse ",l.createElement(n.strong,null,"Vista previa de este entorno"),"."),"\n",l.createElement(n.p,null,"Se visualiza una página web de ejemplo que incluye un icono de conversación."),"\n"),"\n",l.createElement(n.li,null,"\n",l.createElement(n.p,null,"Pulse el icono de conversación para abrir la ventana de conversación web."),"\n"),"\n"),"\n",l.createElement(n.img,{src:"https://raw.githubusercontent.com/ibm-build-lab/VAD-VAR-Workshop/main/content//Watsonx/Assistant/images/204/020.png",alt:""}),"\n",l.createElement(n.ol,{start:"3"},"\n",l.createElement(n.li,null,"\n",l.createElement(n.p,null,"Especifique la siguiente pregunta de texto:"),"\n",l.createElement(n.p,null,l.createElement(n.code,null,"What project types are available?")),"\n",l.createElement(n.p,null,"Se devuelve la respuesta correcta e incluye un enlace a la documentación del producto."),"\n"),"\n"),"\n",l.createElement(n.img,{src:"https://raw.githubusercontent.com/ibm-build-lab/VAD-VAR-Workshop/main/content//Watsonx/Assistant/images/204/021.png",alt:""}),"\n",l.createElement(n.ol,{start:"4"},"\n",l.createElement(n.li,null,"\n",l.createElement(n.p,null,"Envíe una pregunta que no se haya utilizado como ejemplo de consulta al crear la acción."),"\n",l.createElement(n.p,null,l.createElement(n.code,null,"How do you define synonyms in Watson Discovery?")),"\n",l.createElement(n.p,null,"Se devuelve una respuesta detallada."),"\n"),"\n"),"\n",l.createElement(n.img,{src:"https://raw.githubusercontent.com/ibm-build-lab/VAD-VAR-Workshop/main/content//Watsonx/Assistant/images/204/022.png",alt:""}),"\n",l.createElement(n.ol,{start:"5"},"\n",l.createElement(n.li,null,"\n",l.createElement(n.p,null,"Opcionalmente, pregunte al asistente otras preguntas."),"\n",l.createElement(n.p,null,'Si el asistente no conoce la respuesta, redenomine la pregunta para incluir "en Watson Discovery" para que sea más claro que usted está preguntando acerca de cómo algo funciona específicamente en el Discovery.'),"\n"),"\n"),"\n",l.createElement(n.p,null,"¡Felicidades Ha creado correctamente un asistente que puede responder a preguntas sobre el descubrimiento mediante la recuperación de información de la documentación del producto mediante el servicio NeuralSeek."),"\n"),l.createElement(n.section,{className:"heading","data-heading-rank":"2","aria-labelledby":"resumen"},l.createElement(n.h2,{id:"resumen"},l.createElement(n.a,{href:"#resumen"},"Resumen")),"\n",l.createElement(n.p,null,"En esta guía de aprendizaje, ha creado un proyecto de recuperación de documentos de Watson Discovery con archivos PDF cargados que contienen la documentación del producto de descubrimiento. Por separado, ha creado un asistente virtual de watsonx Assistant con una única acción que puede reconocer las preguntas de usuario sobre el descubrimiento. Ha añadido una extensión personalizada a su asistente que se conecta a un servicio de terceros llamado NeuralSeek que obtiene la respuesta correcta de Discovery y redice la respuesta. Por último, probó a su asistente virtual haciendo una pregunta y obteniendo una respuesta precisa y bien escrita.")))}var s=function(e){void 0===e&&(e={});const{wrapper:n}=Object.assign({},(0,t.ah)(),e.components);return n?l.createElement(n,e,l.createElement(r,e)):r(e)},c=a(4184),o=a.n(c),i=a(4690),u=a(1140),m=a(8623),d=a(8531),p=a(3383),E=a(7315);const g=e=>{const{data:{mdx:{tableOfContents:{items:n},frontmatter:{toc:a=!0,title:t,timeToComplete:r,updated:s}}},children:c}=e,i=(0,l.useRef)(null),{0:g}=(0,l.useState)(""),b=(null===a||a)&&n;return l.createElement(l.Fragment,null,l.createElement(u.Z,{timeToComplete:r,updated:s},n[0].title||t||""),l.createElement(d.Z,{className:E.YS},l.createElement("article",{className:o()(E.Y2,!b&&E.ey),ref:i},l.createElement(m.Z,{components:{h1:()=>null}},c)),b&&l.createElement(p.Z,{itemsList:n,maxDepth:2,currSection:g})))},b=e=>{const{location:{pathname:n},data:{mdx:{frontmatter:{title:a},tableOfContents:{items:t}}}}=e;return l.createElement(i.Z,{pathname:n,title:a||t[0].title||void 0})};function h(e){return l.createElement(g,e,l.createElement(s,e))}}}]);
//# sourceMappingURL=component---src-pages-mdx-fields-slug-tsx-content-file-path-content-watsonx-assistant-level-4-204-es-md-da93582ef8d39caab375.js.map