"use strict";(self.webpackChunkvad_var_site=self.webpackChunkvad_var_site||[]).push([[9299],{9928:function(e,a,n){n.r(a),n.d(a,{Head:function(){return b},default:function(){return h}});var t=n(1151),l=n(7294);function r(e){const a=Object.assign({section:"section",h1:"h1",p:"p",h2:"h2",a:"a",ol:"ol",li:"li",img:"img",strong:"strong",div:"div",pre:"pre",code:"code",span:"span",h3:"h3",ul:"ul"},(0,t.ah)(),e.components),{QuizAlert:n}=a;return n||function(e,a){throw new Error("Expected "+(a?"component":"object")+" `"+e+"` to be defined: you likely forgot to import, pass, or provide it.")}("QuizAlert",!0),l.createElement(a.section,{className:"heading","data-heading-rank":"1","aria-labelledby":"102-aumentar-las-herramientas-de-código-abierto"},l.createElement(a.h1,{id:"102-aumentar-las-herramientas-de-código-abierto"},"102: Aumentar las herramientas de código abierto"),"\n",l.createElement(a.p,null,'Al vender las soluciones Watson Studio Data & AI a los clientes, una de las objeciones más frecuentes que escuchará es: "No necesitamos IBM, confiamos en las soluciones de código abierto." Es fundamental entender y ser capaz de comunicar al cliente que Watson Studio proporciona acceso a toda la gama de herramientas de código abierto, pero también aumenta esas herramientas con una mayor automatización, estandarización y oportunidades de colaboración.'),"\n",l.createElement(a.p,null,"En esta sección, desarrollarás dos modelos utilizando cuadernos Jupyter y bibliotecas de código abierto. Por el camino, verás cómo la funcionalidad añadida de Watson Studio puede simplificar, automatizar y mejorar el flujo de trabajo diario de los desarrolladores de modelos."),"\n",l.createElement(a.section,{className:"heading","data-heading-rank":"2","aria-labelledby":"1-cree-una-entrada-de-catálogo-para-factsheets"},l.createElement(a.h2,{id:"1-cree-una-entrada-de-catálogo-para-factsheets"},l.createElement(a.a,{href:"#1-cree-una-entrada-de-catálogo-para-factsheets"},"1. Cree una entrada de catálogo para FactSheets")),"\n",l.createElement(a.p,null,"Lanzado en 2022, IBM FactSheets proporciona una forma automatizada y estandarizada de rastrear y almacenar información sobre el desarrollo, las pruebas, la validación y el despliegue de modelos. Estos datos se almacenan y se pueden buscar en Watson Knowledge Catalog."),"\n",l.createElement(a.ol,null,"\n",l.createElement(a.li,null,"Vaya a la ",l.createElement(a.a,{href:"https://dataplatform.cloud.ibm.com/"},"pantalla de inicio de Cloud Pak for Data"),"."),"\n"),"\n",l.createElement(a.img,{src:"/1685709458051.4934790912/35-1.png",alt:"view_catalogs"}),"\n",l.createElement(a.ol,{start:"2"},"\n",l.createElement(a.li,null,"Haga clic en el botón azul ",l.createElement(a.strong,null,"Nuevo catálogo")," situado en la esquina superior derecha de la pantalla."),"\n"),"\n",l.createElement(a.img,{src:"/1685709458051.4934790913/35-2.png",alt:"new_catalog"}),"\n",l.createElement(a.ol,{start:"4"},"\n",l.createElement(a.li,null,"Cuando aparezca la pantalla ",l.createElement(a.strong,null,"Nuevo catálogo"),", asigne a su catálogo un nombre (Mi catálogo, por ejemplo) y, opcionalmente, una descripción. El menú desplegable de ",l.createElement(a.strong,null,"IBM Cloud Storage")," ya debería contener la instancia que creó anteriormente. Si no es así, utilice el menú desplegable para seleccionar la instancia correcta."),"\n",l.createElement(a.li,null,"Haga clic en el botón azul ",l.createElement(a.strong,null,"Crear")," de la esquina inferior derecha para crear su catálogo."),"\n"),"\n",l.createElement(a.img,{src:"/1685709458055.4934790914/35-3.png",alt:"create_catalog"}),"\n",l.createElement(a.p,null,"A continuación, crearemos un ",l.createElement(a.strong,null,"caso de uso de modelo")," en nuestro catálogo recién creado."),"\n",l.createElement(a.ol,null,"\n",l.createElement(a.li,null,"Vaya a la ",l.createElement(a.a,{href:"https://dataplatform.cloud.ibm.com/"},"pantalla de inicio de Cloud Pak for Data"),"."),"\n"),"\n",l.createElement(a.img,{src:"/1685709458059.4937790915/35.png",alt:"model_inventory"}),"\n",l.createElement(a.ol,{start:"2"},"\n",l.createElement(a.li,null,"Haga clic en el icono de navegación en forma de hamburguesa situado en la esquina superior izquierda y seleccione ",l.createElement(a.strong,null,"Inventario de")," modelos en la sección ",l.createElement(a.strong,null,"Catálogos"),". Es posible que Watson Studio le ofrezca una visita guiada por el gobierno de los modelos; haga clic en ",l.createElement(a.strong,null,"Tal vez más tarde")," para cerrar la ventana emergente y, si es necesario, en ",l.createElement(a.strong,null,"Hecho")," para cerrar la ventana ",l.createElement(a.strong,null,"del panel de visita relanzada"),"."),"\n",l.createElement(a.li,null,"Haga clic en el botón azul ",l.createElement(a.strong,null,"Nuevo")," modelo en la parte superior derecha de la pantalla para abrir el cuadro de diálogo ",l.createElement(a.strong,null,"Nuevo modelo"),"."),"\n"),"\n",l.createElement(a.img,{src:"/1685709458059.4937790916/36.png",alt:"new_model_entry_form"}),"\n",l.createElement(a.ol,{start:"4"},"\n",l.createElement(a.li,null,"Dé a su entrada modelo un nombre, como ",l.createElement(a.strong,null,"entrada de desgaste predictivo"),", y una descripción opcional. Si tiene varios catálogos disponibles en su cuenta, aparecerá el menú desplegable ",l.createElement(a.strong,null,"Catálogo"),". En el menú desplegable ",l.createElement(a.strong,null,"Catálogo"),", seleccione el catálogo que está utilizando para este laboratorio. Si sólo hay un catálogo disponible en su cuenta, el menú desplegable no aparecerá y podrá continuar. Haga clic en el botón azul ",l.createElement(a.strong,null,"Guardar")," para crear la entrada del modelo."),"\n"),"\n"),l.createElement(a.section,{className:"heading","data-heading-rank":"2","aria-labelledby":"2-crear-una-clave-api-y-un-token-de-proyecto"},l.createElement(a.h2,{id:"2-crear-una-clave-api-y-un-token-de-proyecto"},l.createElement(a.a,{href:"#2-crear-una-clave-api-y-un-token-de-proyecto"},"2. Crear una clave API y un token de proyecto")),"\n",l.createElement(a.p,null,"Las claves de API le permiten autenticarse con diferentes servicios de IBM, como Watson Machine Learning. Los tokens de proyecto permiten que el código del bloc de notas lea activos y escriba archivos en sus proyectos de Watson Studio. Deberá crear ambos para continuar. Si ya tiene una clave de API de IBM Cloud disponible para su uso, puede saltar al paso cuatro de esta sección para crear un token de proyecto."),"\n",l.createElement(a.ol,null,"\n",l.createElement(a.li,null,"Vaya a la página de ",l.createElement(a.a,{href:"https://cloud.ibm.com/iam/apikeys"},"claves API de IBM Cloud"),"."),"\n",l.createElement(a.li,null,"Haga clic en el botón azul ",l.createElement(a.strong,null,"Crear una clave API de IBM Cloud"),". Asigne a su clave un nombre descriptivo, como ",l.createElement(a.strong,null,"MLOps lab"),", y una descripción opcional. Haga clic en el botón azul ",l.createElement(a.strong,null,"Crear"),"."),"\n"),"\n",l.createElement(a.img,{src:"/1685709458059.4937790917/37.png",alt:"copy_api_key"}),"\n",l.createElement(a.ol,{start:"3"},"\n",l.createElement(a.li,null,"Una vez creada la clave, haz clic en el botón ",l.createElement(a.strong,null,"Copiar")," para copiar la clave en tu portapapeles. ",l.createElement(a.strong,null,"Pégala en un editor de texto para utilizarla más tarde, ya que NO podrás recuperarla de nuevo")," y tendrás que crear una nueva si la pierdes."),"\n",l.createElement(a.li,null,"Navega hasta ",l.createElement(a.a,{href:"https://dataplatform.cloud.ibm.com/projects"},"tu lista de proyectos de ciencia de datos"),"."),"\n",l.createElement(a.li,null,"Haz clic en el proyecto que creaste al principio del laboratorio."),"\n",l.createElement(a.li,null,"En la pantalla de inicio del proyecto, haz clic en la pestaña ",l.createElement(a.strong,null,"Gestionar"),"."),"\n"),"\n",l.createElement(a.img,{src:"/1685709458059.4937790918/38.png",alt:"access_control"}),"\n",l.createElement(a.ol,{start:"7"},"\n",l.createElement(a.li,null,"Haga clic en ",l.createElement(a.strong,null,"Control")," ",l.createElement(a.strong,null,"de")," acceso en la barra de navegación de la parte izquierda de la pantalla para abrir la ventana ",l.createElement(a.strong,null,"Control de acceso"),"."),"\n",l.createElement(a.li,null,"Haga clic en la pestaña ",l.createElement(a.strong,null,"Fichas de acceso"),"."),"\n"),"\n",l.createElement(a.img,{src:"/1685709458063.4937790919/39.png",alt:"new_access_token"}),"\n",l.createElement(a.ol,{start:"9"},"\n",l.createElement(a.li,null,"Haga clic en el botón azul ",l.createElement(a.strong,null,"Nuevo")," token de acceso. En el formulario que aparece, asigne a su token un nombre descriptivo como, por ejemplo, ",l.createElement(a.strong,null,"token de acceso a Cuaderno"),". Seleccione ",l.createElement(a.strong,null,"Editor")," en la lista desplegable ",l.createElement(a.strong,null,"Función de acceso")," y, a continuación, haga clic en el botón azul ",l.createElement(a.strong,null,"Crear"),". Se creará su código de acceso y aparecerá una entrada en la tabla."),"\n"),"\n"),l.createElement(a.section,{className:"heading","data-heading-rank":"2","aria-labelledby":"3-explorar-los-entornos-de-ejecución"},l.createElement(a.h2,{id:"3-explorar-los-entornos-de-ejecución"},l.createElement(a.a,{href:"#3-explorar-los-entornos-de-ejecución"},"3. Explorar los entornos de ejecución")),"\n",l.createElement(a.p,null,"Como administrador del proyecto, puedes controlar y personalizar completamente los diferentes entornos de ejecución disponibles para tus científicos de datos y desarrolladores. En lugar de que cada miembro del equipo trabaje en su propia máquina con su propio conjunto (a menudo conflictivo o incompatible) de bibliotecas y herramientas, pueden colaborar en Watson Studio con un entorno común, añadiendo las herramientas que necesiten."),"\n",l.createElement(a.ol,null,"\n",l.createElement(a.li,null,"Haga clic en ",l.createElement(a.strong,null,"Entornos")," en la barra de navegación de la parte izquierda de la pantalla. Los entornos en ejecución aparecerán en la lista de la pestaña ",l.createElement(a.strong,null,"Tiempos de ejecución de herramientas"),"."),"\n"),"\n",l.createElement(a.img,{src:"/1685709458067.4937790921/40.png",alt:"template_list"}),"\n",l.createElement(a.ol,{start:"2"},"\n",l.createElement(a.li,null,"Haz clic en la pestaña ",l.createElement(a.strong,null,"Plantillas")," para ver la lista de entornos disponibles. Observa la amplia variedad de entornos de ejecución disponibles, que incluyen desde Python y R estándar hasta Spark, Scala e incluso aceleración GPU. La capacidad de elegir cualquiera de estos tiempos de ejecución, e incluso de cambiarlos dinámicamente a medida que cambian las necesidades del entorno del cuaderno, es una de las principales ventajas de realizar trabajos de ciencia de datos con IBM Cloud Pak for Data frente a los entornos Jupyter instalados localmente."),"\n",l.createElement(a.li,null,"Haga clic en el botón azul ",l.createElement(a.strong,null,"Nueva plantilla")," situado a la derecha de la pantalla para abrir la ventana ",l.createElement(a.strong,null,"Nuevo entorno"),"."),"\n"),"\n",l.createElement(a.img,{src:"/1685709458067.4937790922/41.png",alt:"template_configurations"}),"\n",l.createElement(a.ol,{start:"4"},"\n",l.createElement(a.li,null,"Ten en cuenta que puedes definir configuraciones aquí, eligiendo si quieres incluir Spark, DataStage o aceleración GPU. Puede utilizar el menú desplegable ",l.createElement(a.strong,null,"Configuración de hardware")," para personalizar la cantidad de CPU y RAM disponible para el entorno. Por último, puedes elegir la versión de software, seleccionando entre diferentes versiones de Python o R."),"\n",l.createElement(a.li,null,"Ahora que ha visto las opciones disponibles para los entornos de ejecución, haga clic en ",l.createElement(a.strong,null,"Cancelar")," para cerrar la ventana."),"\n"),"\n"),l.createElement(a.section,{className:"heading","data-heading-rank":"2","aria-labelledby":"4-crear-un-cuaderno"},l.createElement(a.h2,{id:"4-crear-un-cuaderno"},l.createElement(a.a,{href:"#4-crear-un-cuaderno"},"4. Crear un cuaderno")),"\n",l.createElement(a.p,null,"A continuación, crearás un cuaderno Python que se utilizará para el desarrollo de modelos. Como has visto en la sección anterior, los entornos de cuaderno Jupyter de Watson Studio proporcionan una gran variedad de tiempos de ejecución y mejoras, como instalaciones Spark configuradas y aceleración GPU. Los recientes cambios en las licencias de JupyterLab han creado problemas potenciales para los desarrolladores de clientes que confían en él para los cuadernos Jupyter instalados localmente. El uso de cuadernos Jupyter en Watson Studio permite la misma flexibilidad, al tiempo que elimina los quebraderos de cabeza derivados de las licencias y ofrece mayores oportunidades de colaboración."),"\n",l.createElement(a.ol,null,"\n",l.createElement(a.li,null,"Haga clic en la pestaña ",l.createElement(a.strong,null,"Activos")," de su proyecto y, a continuación, en el botón azul ",l.createElement(a.strong,null,"Nuevo activo"),"."),"\n",l.createElement(a.li,null,"Utilice el filtro ",l.createElement(a.strong,null,"Tipo de herramienta")," situado a la izquierda de la pantalla para seleccionar ",l.createElement(a.strong,null,"Editores de código")," y haga clic en la ficha del ",l.createElement(a.strong,null,"editor de cuadernos Jupyter"),". Se abrirá la pantalla ",l.createElement(a.strong,null,"Nuevo")," cuaderno."),"\n",l.createElement(a.li,null,"Haga clic en la pestaña ",l.createElement(a.strong,null,"Desde URL"),". Asigne a su bloc de notas un nombre, como ",l.createElement(a.strong,null,"desarrollo del modelo de desgaste"),", y una descripción opcional. Haga clic en el menú desplegable situado debajo de ",l.createElement(a.strong,null,"Seleccionar")," tiempo de ejecución. Tenga en cuenta que los tiempos de ejecución que aparecen aquí son los entornos mostrados en el paso anterior. Si hubiera creado un nuevo modelo de entorno, estaría disponible en esta lista desplegable."),"\n",l.createElement(a.li,null,"Seleccione el entorno ",l.createElement(a.strong,null,"Spark & Python predeterminado"),". Tenga en cuenta que las versiones disponibles cambian con el tiempo, a medida que nuevas versiones del tiempo de ejecución son liberadas y posteriormente soportadas por Watson Studio. En el momento de escribir esto, el entorno es ",l.createElement(a.strong,null,"Spark 3.2 y Python 3.9 por defecto"),"."),"\n"),"\n",l.createElement(a.img,{src:"/1685709458067.4937790923/42.png",alt:"notebook_configuration"}),"\n",l.createElement(a.ol,{start:"5"},"\n",l.createElement(a.li,null,"Copie y pegue la siguiente URL en el campo ",l.createElement(a.strong,null,"URL del bloc")," de notas:"),"\n"),"\n",l.createElement(a.div,{"data-rehype-pretty-code-fragment":""},l.createElement(a.pre,{"data-language":"txt","data-theme":"default"},l.createElement(a.code,{"data-language":"txt","data-theme":"default"},l.createElement(a.span,{className:"line"},l.createElement(a.span,{style:{color:"#8d8d8d"}},"https://raw.githubusercontent.com/CloudPak-Outcomes/Outcomes-Projects/main/TrustedAI-L3-Tech-Lab/02-Open%20source%20lab.ipynb"))))),"\n",l.createElement(a.ol,{start:"6"},"\n",l.createElement(a.li,null,"Haga clic en ",l.createElement(a.strong,null,"Crear")," para crear su bloc de notas e iniciar el entorno de ejecución. Pueden transcurrir hasta 30 segundos antes de que pueda trabajar con el bloc de notas."),"\n"),"\n"),l.createElement(a.section,{className:"heading","data-heading-rank":"2","aria-labelledby":"5-editar-y-ejecutar-el-cuaderno"},l.createElement(a.h2,{id:"5-editar-y-ejecutar-el-cuaderno"},l.createElement(a.a,{href:"#5-editar-y-ejecutar-el-cuaderno"},"5. Editar y ejecutar el cuaderno")),"\n",l.createElement(n),"\n",l.createElement(a.p,null,"Los cuadernos Jupyter son una forma estándar en la industria de trabajar y visualizar datos, construir modelos y mucho más. En la sección ",l.createElement(a.a,{href:"/mlops/101#accessing-data"},"Acceso a los datos")," de este laboratorio, has visto cómo Watson Studio te permite añadir datos a los proyectos desde archivos locales, conexiones o bases de datos. También has visto cómo estos datos se pueden insertar como código directamente en el cuaderno con sólo unos clics. La posibilidad de trabajar fácil y rápidamente con datos de toda la empresa, respetando al mismo tiempo la normativa y los estándares de privacidad de datos, es otra de las grandes ventajas de utilizar Watson Studio frente al código abierto tradicional."),"\n",l.createElement(a.img,{src:"/1685709458067.4937790924/43.png",alt:"insert_project_token"}),"\n",l.createElement(a.ol,null,"\n",l.createElement(a.li,null,"El cuaderno ha sido muy comentado, y debería ser fácil de seguir a medida que ejecutas las celdas individuales. Asegúrate de empezar insertando el código de acceso al proyecto que creaste anteriormente en este laboratorio haciendo clic en el icono de los ",l.createElement(a.strong,null,"tres puntos verticales")," en la parte superior de la pantalla y seleccionando ",l.createElement(a.strong,null,"Insertar código de acceso al proyecto"),". Tenga en cuenta que el código token insertado en la parte superior del cuaderno contendrá el ID de su proyecto, que necesitará en la celda inmediatamente inferior. También necesitará la clave API de IBM Cloud que creó anteriormente en el laboratorio. Ejecute la celda antes de continuar con el resto del cuaderno."),"\n"),"\n",l.createElement(a.img,{src:"/1685709458071.4937790925/44.png",alt:"turn_off_spark"}),"\n",l.createElement(a.p,null,"Cuando ejecutas comandos Spark en tus blocs de notas, la funcionalidad de monitorización de Spark puede añadir una gran cantidad de desorden visual, ya que actualiza el estado de cada comando. Puedes desactivar la monitorización de Spark haciendo clic en el icono de la barra de herramientas."),"\n",l.createElement(a.section,{className:"heading","data-heading-rank":"3","aria-labelledby":"editar-el-cuaderno-para-subir"},l.createElement(a.h3,{id:"editar-el-cuaderno-para-subir"},l.createElement(a.a,{href:"#editar-el-cuaderno-para-subir"},"Editar el cuaderno para subir")),"\n",l.createElement(a.p,null,"Como nota, el entorno de ejecución por defecto de ",l.createElement(a.code,null,"Spark 3.3 Python 3.9")," ha quedado obsoleto. Esto requerirá que edites parte del código en el cuaderno para permitirte cargar con éxito el modelo que crees."),"\n",l.createElement(a.p,null,"El código clave que debe editar debe ser:"),"\n",l.createElement(a.ul,null,"\n",l.createElement(a.li,null,"El texto de la primera línea debería pasar de ",l.createElement(a.strong,null,"runtime-22.1-py3.9")," a ",l.createElement(a.strong,null,"runtime-22.2-py3.10")),"\n",l.createElement(a.li,null,"En lugar de ",l.createElement(a.strong,null,"scikit-learn_1.0")," debería ser ",l.createElement(a.strong,null,"scikit-learn_1.1")),"\n"),"\n",l.createElement(a.p,null,"Después de editarlo, el cuaderno debería tener el siguiente aspecto:"),"\n",l.createElement(a.img,{src:"/1685709458131.4946790986/updated_notebook.png",alt:"edit_notebook"}),"\n",l.createElement(a.ol,{start:"2"},"\n",l.createElement(a.li,null,"Siga los pasos del resto del cuaderno, insertando los datos en el código donde se especifique y ejecutando las celdas."),"\n"),"\n")),l.createElement(a.section,{className:"heading","data-heading-rank":"2","aria-labelledby":"6-examinar-las-fichas-descriptivas-de-los-modelos"},l.createElement(a.h2,{id:"6-examinar-las-fichas-descriptivas-de-los-modelos"},l.createElement(a.a,{href:"#6-examinar-las-fichas-descriptivas-de-los-modelos"},"6. Examinar las fichas descriptivas de los modelos")),"\n",l.createElement(a.p,null,"Al principio de este laboratorio, creó una entrada en Watson Knowledge Catalog para IBM FactSheets con el fin de recopilar datos sobre sus modelos. Los cuadernos que ejecutó en el paso anterior utilizaron la API de FactSheets para activar la supervisión de los modelos, escribiendo metadatos relacionados con los datos de entrenamiento, las puntuaciones de precisión y mucho más. Ahora es el momento de ir a buscar esos datos."),"\n",l.createElement(a.ol,null,"\n",l.createElement(a.li,null,"Vuelve a la pantalla de inicio de tu proyecto, bien haciendo clic en el nombre del proyecto desde el rastro de migas de pan en la parte superior izquierda de la pantalla, o navegando a tu ",l.createElement(a.a,{href:"https://dataplatform.cloud.ibm.com/projects"},"lista de proyectos")," y haciendo clic allí."),"\n",l.createElement(a.li,null,"Haga clic en la pestaña ",l.createElement(a.strong,null,"Activos")," del proyecto. Haga clic en ",l.createElement(a.strong,null,"Modelos")," en la lista de ",l.createElement(a.strong,null,"tipos de")," Activos de la izquierda."),"\n",l.createElement(a.li,null,"Los modelos scikit-learn y spark que creaste al ejecutar el cuaderno deberían aparecer en la lista de modelos. Haga clic en el nombre de uno de los modelos para abrir la pantalla de detalles del modelo."),"\n",l.createElement(a.li,null,"Haga clic en el botón azul ",l.createElement(a.strong,null,"Rastrear este modelo"),". Ahora asociará el modelo con la entrada de modelo que creó en el catálogo."),"\n",l.createElement(a.li,null,"Haga clic en ",l.createElement(a.strong,null,"Seleccionar una entrada de modelo existente"),". En la lista de entradas de modelo, seleccione la que creó anteriormente en el laboratorio. Haga clic en ",l.createElement(a.strong,null,"Seguimiento"),". Volverá a la página de detalles del modelo y verá que el seguimiento del modelo está activo."),"\n",l.createElement(a.li,null,"Vuelva a la lista de activos del proyecto y repita los pasos del 3 al 5 con el otro modelo, de modo que ahora se realice el seguimiento de ambos."),"\n"),"\n",l.createElement(a.img,{src:"/1685709458071.4937790926/45.png",alt:"open_in_model_inventory"}),"\n",l.createElement(a.ol,{start:"7"},"\n",l.createElement(a.li,null,"Una vez que haya activado el seguimiento en ambos modelos, en la pantalla de información del modelo, haga clic en ",l.createElement(a.strong,null,"Abrir en el inventario de modelos"),". Se abre la entrada del catálogo. Haga clic en la pestaña ",l.createElement(a.strong,null,"Activo"),"."),"\n"),"\n",l.createElement(a.p,null,"El inventario de modelos se divide en cuatro categorías: ",l.createElement(a.strong,null,"Desarrollar"),", ",l.createElement(a.strong,null,"Desplegar"),", ",l.createElement(a.strong,null,"Validar")," y ",l.createElement(a.strong,null,"Operar"),". A medida que sus modelos avanzan en el ciclo de vida, se moverán automáticamente al bucket correspondiente. Actualmente, como acaban de crearse y no se han desplegado, se encuentran en la fase de ",l.createElement(a.strong,null,"Desarrollo"),"."),"\n",l.createElement(a.img,{src:"/1685709458071.4937790927/46.png",alt:"spark_model"}),"\n",l.createElement(a.ol,{start:"8"},"\n",l.createElement(a.li,null,"\n",l.createElement(a.p,null,"Haga clic en el nombre del modelo Spark en el bucket ",l.createElement(a.strong,null,"Desarrollo"),". Observe que la FactSheet del modelo contiene una gran cantidad de metadatos recopilados automáticamente."),"\n",l.createElement(a.ul,null,"\n",l.createElement(a.li,null,"La sección ",l.createElement(a.strong,null,"Información")," del modelo contiene las fechas de creación y última modificación, así como el tipo de modelo y la especificación del software."),"\n",l.createElement(a.li,null,"La sección ",l.createElement(a.strong,null,"Información")," de entrenamiento contiene el nombre del proyecto utilizado para crear el modelo e información sobre los datos de entrenamiento."),"\n",l.createElement(a.li,null,"La sección ",l.createElement(a.strong,null,"Parámetros de")," entrenamiento contiene gran cantidad de información específica del tipo de modelo creado (Clasificador Gradient Boost), así como el ensamblador vectorial incluido en el pipeline del modelo."),"\n",l.createElement(a.li,null,"Por último, la sección ",l.createElement(a.strong,null,"Etiquetas de")," entrenamiento contiene metadatos adicionales sobre el estimador utilizado y el entorno de ejecución."),"\n"),"\n"),"\n"),"\n",l.createElement(a.p,null,"En los próximos pasos de la demostración, consultará con frecuencia esta hoja de datos, por lo que le recomendamos que copie la URL y la pegue en un editor de texto."),"\n",l.createElement(a.p,null,"Este tipo de información tiene un valor incalculable para los validadores de modelos, ya que buscan comprender cuándo y cómo se ha construido un modelo. Watson Studio proporciona una forma de estandarizar y automatizar la recopilación de los metadatos, lo que significa que los científicos de datos pueden dedicar su tiempo a trabajar en problemas significativos e interesantes en lugar de recopilar, mantener y publicar estos datos.")))}var o=function(e){void 0===e&&(e={});const{wrapper:a}=Object.assign({},(0,t.ah)(),e.components);return a?l.createElement(a,e,l.createElement(r,e)):r(e)};var c=n(4184),i=n.n(c),s=n(4690),d=n(1140),u=n(2565),m=n(8531),p=n(3383),g=n(7315);const E=e=>{const{data:{mdx:{tableOfContents:{items:a},frontmatter:{toc:n=!0,title:t,timeToComplete:r,updated:o}}},children:c}=e,s=(0,l.useRef)(null),{0:E}=(0,l.useState)(""),b=(null===n||n)&&a;return l.createElement(l.Fragment,null,l.createElement(d.Z,{timeToComplete:r,updated:o},a[0].title||t||""),l.createElement(m.Z,{className:g.YS},l.createElement("article",{className:i()(g.Y2,!b&&g.ey),ref:s},l.createElement(u.Z,{components:{h1:()=>null}},c)),b&&l.createElement(p.Z,{itemsList:a,maxDepth:2,currSection:E})))},b=e=>{const{location:{pathname:a},data:{mdx:{frontmatter:{title:n},tableOfContents:{items:t}}}}=e;return l.createElement(s.Z,{pathname:a,title:n||t[0].title||void 0})};function h(e){return l.createElement(E,e,l.createElement(o,e))}},2565:function(e,a,n){n.d(a,{Z:function(){return c}});var t=n(7294),l=n(1151),r=n(987);const o={table:r.y6,a:r.IW,blockquote:r.R4,SubHeader:r.bU,img:r.fb,code:r.dn,QuizAlert:r.SA};var c=(0,t.memo)((function(e){let{children:a,components:n={}}=e;return t.createElement(l.Zo,{components:{...o,...n}},a)}))},4690:function(e,a,n){var t=n(7294),l=n(1072),r=n(2401);a.Z=e=>{const{title:a,description:n,pathname:o,children:c}=e,{description:i,title:s,origin:d}=(0,r.Z)(),{i18n:{language:u}}=(0,l.$G)(),m={title:a||s,description:n||i,url:""+d+(o||"")};return t.createElement(t.Fragment,null,t.createElement("html",{lang:u}),t.createElement("link",{rel:"icon",href:"data:image/svg+xml,<svg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 100 100'><text y='0.9em' font-size='90'>🦺</text></svg>"}),t.createElement("title",null,m.title),t.createElement("link",{rel:"canonical",href:m.url}),t.createElement("meta",{name:"description",content:m.description}),t.createElement("meta",{property:"og:title",content:m.title}),t.createElement("meta",{property:"og:url",content:m.url}),t.createElement("meta",{property:"og:type",content:"website"}),t.createElement("meta",{property:"og:description",content:m.description}),t.createElement("meta",{name:"twitter:card",content:"summary"}),t.createElement("meta",{name:"twitter:title",content:m.title}),t.createElement("meta",{name:"twitter:url",content:m.url}),t.createElement("meta",{name:"twitter:description",content:m.description}),t.createElement("meta",{name:"twitter:site",content:"https://www.ibm.com"}),t.createElement("meta",{name:"twitter:creator",content:"@IBM"}),c)}},3383:function(e,a,n){n.d(a,{Z:function(){return s}});var t=n(7294),l=n(7500),r=n(4184),o=n.n(r),c=n(6488);const i=function(e,a,n){return void 0===a&&(a=[]),void 0===n&&(n=0),e.forEach((e=>{const{title:t,url:l,items:r}=e;a.splice(a.length,0,{depth:n,title:t,url:l}),r&&r.length>0&&i(r,a,n+1)})),a};var s=e=>{const{itemsList:a}=e,n=(0,t.useMemo)((()=>i(a[0].items||[])),[a]),r=(0,c.Z)("h1[id],h2[id]",{threshold:[0,1],rootMargin:"-48px 0px -90% 0px"});return n.length<1?null:t.createElement("nav",{className:"TableOfContents-module--toc--54d35"},t.createElement("div",{className:"TableOfContents-module--tocStack--90609"},t.createElement("h6",{className:"TableOfContents-module--tocHeader--05956"},t.createElement(l.rU,{to:"#",replace:!0},"On this page")),n.map(((e,a)=>{let{title:n,url:l}=e;return t.createElement("a",{className:o()("TableOfContents-module--link--b292b",r===l.substring(1)&&"TableOfContents-module--activeItem--3869f"),key:a,href:l},n)}))))}},7315:function(e,a,n){n.d(a,{Y2:function(){return t},YS:function(){return r},ey:function(){return l}});var t="{mdx-fields__slug}-module--article--e3d5a",l="{mdx-fields__slug}-module--noToc--82387",r="{mdx-fields__slug}-module--wrapper--58e72"},1151:function(e,a,n){n.d(a,{Zo:function(){return c},ah:function(){return r}});var t=n(7294);const l=t.createContext({});function r(e){const a=t.useContext(l);return t.useMemo((()=>"function"==typeof e?e(a):{...a,...e}),[a,e])}const o={};function c({components:e,children:a,disableParentContext:n}){let c;return c=n?"function"==typeof e?e({}):e||o:r(e),t.createElement(l.Provider,{value:c},a)}}}]);
//# sourceMappingURL=component---src-pages-mdx-fields-slug-tsx-content-file-path-content-ml-ops-102-es-md-ccdf1d0c1647e9b290bf.js.map