"use strict";(self.webpackChunkvad_var_site=self.webpackChunkvad_var_site||[]).push([[9299],{9928:function(e,a,n){n.r(a),n.d(a,{Head:function(){return h},default:function(){return f}});var l=n(1151),t=n(7294);function o(e){const a=Object.assign({section:"section",h1:"h1",p:"p",h2:"h2",a:"a",ol:"ol",li:"li",img:"img",strong:"strong",pre:"pre",code:"code",blockquote:"blockquote",ul:"ul"},(0,l.ah)(),e.components),{QuizAlert:n,Danger:o}=a;return o||c("Danger",!0),n||c("QuizAlert",!0),t.createElement(a.section,{className:"heading","data-heading-rank":"1","aria-labelledby":"102-aumentar-las-herramientas-de-código-abierto"},t.createElement(a.h1,{id:"102-aumentar-las-herramientas-de-código-abierto"},"102: Aumentar las herramientas de código abierto"),"\n",t.createElement(a.p,null,'Al vender las soluciones Watson Studio Data & AI a los clientes, una de las objeciones más frecuentes que escuchará es: "No necesitamos IBM, confiamos en las soluciones de código abierto." Es fundamental entender y ser capaz de comunicar al cliente que Watson Studio proporciona acceso a toda la gama de herramientas de código abierto, pero también aumenta esas herramientas con una mayor automatización, estandarización y oportunidades de colaboración.'),"\n",t.createElement(a.p,null,"En esta sección, desarrollarás dos modelos utilizando cuadernos Jupyter y bibliotecas de código abierto. Por el camino, verás cómo la funcionalidad añadida de Watson Studio puede simplificar, automatizar y mejorar el flujo de trabajo diario de los desarrolladores de modelos."),"\n",t.createElement(a.section,{className:"heading","data-heading-rank":"2","aria-labelledby":"1-cree-una-entrada-de-catálogo-para-factsheets"},t.createElement(a.h2,{id:"1-cree-una-entrada-de-catálogo-para-factsheets"},t.createElement(a.a,{href:"#1-cree-una-entrada-de-catálogo-para-factsheets"},"1. Cree una entrada de catálogo para FactSheets")),"\n",t.createElement(a.p,null,"Lanzado en 2022, IBM FactSheets proporciona una forma automatizada y estandarizada de rastrear y almacenar información sobre el desarrollo, las pruebas, la validación y el despliegue de modelos. Estos datos se almacenan y se pueden buscar en Watson Knowledge Catalog."),"\n",t.createElement(a.ol,null,"\n",t.createElement(a.li,null,"Vaya a la ",t.createElement(a.a,{href:"https://dataplatform.cloud.ibm.com/"},"pantalla de inicio de Cloud Pak for Data"),"."),"\n"),"\n",t.createElement(a.img,{src:"/1686084645647.14821105996/35-1.png",alt:"view_catalogs"}),"\n",t.createElement(a.ol,{start:"2"},"\n",t.createElement(a.li,null,"Haga clic en el botón azul ",t.createElement(a.strong,null,"Nuevo catálogo")," situado en la esquina superior derecha de la pantalla."),"\n"),"\n",t.createElement(a.img,{src:"/1686084645647.14821105997/35-2.png",alt:"new_catalog"}),"\n",t.createElement(a.ol,{start:"4"},"\n",t.createElement(a.li,null,"Cuando aparezca la pantalla ",t.createElement(a.strong,null,"Nuevo catálogo"),", asigne a su catálogo un nombre (Mi catálogo, por ejemplo) y, opcionalmente, una descripción. El menú desplegable de ",t.createElement(a.strong,null,"IBM Cloud Storage")," ya debería contener la instancia que creó anteriormente. Si no es así, utilice el menú desplegable para seleccionar la instancia correcta."),"\n",t.createElement(a.li,null,"Haga clic en el botón azul ",t.createElement(a.strong,null,"Crear")," de la esquina inferior derecha para crear su catálogo."),"\n"),"\n",t.createElement(a.img,{src:"/1686084645647.14821105998/35-3.png",alt:"create_catalog"}),"\n",t.createElement(a.p,null,"A continuación, crearemos un ",t.createElement(a.strong,null,"caso de uso de modelo")," en nuestro catálogo recién creado."),"\n",t.createElement(a.ol,null,"\n",t.createElement(a.li,null,"Vaya a la ",t.createElement(a.a,{href:"https://dataplatform.cloud.ibm.com/"},"pantalla de inicio de Cloud Pak for Data"),"."),"\n"),"\n",t.createElement(a.img,{src:"/1686084645651.14821105999/35.png",alt:"model_inventory"}),"\n",t.createElement(a.ol,{start:"2"},"\n",t.createElement(a.li,null,"Haga clic en el icono de navegación en forma de hamburguesa situado en la esquina superior izquierda y seleccione ",t.createElement(a.strong,null,"Inventario de")," modelos en la sección ",t.createElement(a.strong,null,"Catálogos"),". Es posible que Watson Studio le ofrezca una visita guiada por el gobierno de los modelos; haga clic en ",t.createElement(a.strong,null,"Tal vez más tarde")," para cerrar la ventana emergente y, si es necesario, en ",t.createElement(a.strong,null,"Hecho")," para cerrar la ventana ",t.createElement(a.strong,null,"del panel de visita relanzada"),"."),"\n",t.createElement(a.li,null,"Haga clic en el botón azul ",t.createElement(a.strong,null,"Nuevo")," modelo en la parte superior derecha de la pantalla para abrir el cuadro de diálogo ",t.createElement(a.strong,null,"Nuevo modelo"),"."),"\n"),"\n",t.createElement(a.img,{src:"/1686084645651.14821106000/36.png",alt:"new_model_entry_form"}),"\n",t.createElement(a.ol,{start:"4"},"\n",t.createElement(a.li,null,"Dé a su entrada modelo un nombre, como ",t.createElement(a.strong,null,"entrada de desgaste predictivo"),", y una descripción opcional. Si tiene varios catálogos disponibles en su cuenta, aparecerá el menú desplegable ",t.createElement(a.strong,null,"Catálogo"),". En el menú desplegable ",t.createElement(a.strong,null,"Catálogo"),", seleccione el catálogo que está utilizando para este laboratorio. Si sólo hay un catálogo disponible en su cuenta, el menú desplegable no aparecerá y podrá continuar. Haga clic en el botón azul ",t.createElement(a.strong,null,"Guardar")," para crear la entrada del modelo."),"\n"),"\n"),t.createElement(a.section,{className:"heading","data-heading-rank":"2","aria-labelledby":"2-crear-una-clave-api-y-un-token-de-proyecto"},t.createElement(a.h2,{id:"2-crear-una-clave-api-y-un-token-de-proyecto"},t.createElement(a.a,{href:"#2-crear-una-clave-api-y-un-token-de-proyecto"},"2. Crear una clave API y un token de proyecto")),"\n",t.createElement(a.p,null,"Las claves de API le permiten autenticarse con diferentes servicios de IBM, como Watson Machine Learning. Los tokens de proyecto permiten que el código del bloc de notas lea activos y escriba archivos en sus proyectos de Watson Studio. Deberá crear ambos para continuar. Si ya tiene una clave de API de IBM Cloud disponible para su uso, puede saltar al paso cuatro de esta sección para crear un token de proyecto."),"\n",t.createElement(a.ol,null,"\n",t.createElement(a.li,null,"Vaya a la página de ",t.createElement(a.a,{href:"https://cloud.ibm.com/iam/apikeys"},"claves API de IBM Cloud"),"."),"\n",t.createElement(a.li,null,"Haga clic en el botón azul ",t.createElement(a.strong,null,"Crear una clave API de IBM Cloud"),". Asigne a su clave un nombre descriptivo, como ",t.createElement(a.strong,null,"MLOps lab"),", y una descripción opcional. Haga clic en el botón azul ",t.createElement(a.strong,null,"Crear"),"."),"\n"),"\n",t.createElement(a.img,{src:"/1686084645651.14821106001/37.png",alt:"copy_api_key"}),"\n",t.createElement(a.ol,{start:"3"},"\n",t.createElement(a.li,null,"Una vez creada la clave, haz clic en el botón ",t.createElement(a.strong,null,"Copiar")," para copiar la clave en tu portapapeles. ",t.createElement(a.strong,null,"Pégala en un editor de texto para utilizarla más tarde, ya que NO podrás recuperarla de nuevo")," y tendrás que crear una nueva si la pierdes."),"\n",t.createElement(a.li,null,"Navega hasta ",t.createElement(a.a,{href:"https://dataplatform.cloud.ibm.com/projects"},"tu lista de proyectos de ciencia de datos"),"."),"\n",t.createElement(a.li,null,"Haz clic en el proyecto que creaste al principio del laboratorio."),"\n",t.createElement(a.li,null,"En la pantalla de inicio del proyecto, haz clic en la pestaña ",t.createElement(a.strong,null,"Gestionar"),"."),"\n"),"\n",t.createElement(a.img,{src:"/1686084645655.14841106002/38.png",alt:"access_control"}),"\n",t.createElement(a.ol,{start:"7"},"\n",t.createElement(a.li,null,"Haga clic en ",t.createElement(a.strong,null,"Control")," ",t.createElement(a.strong,null,"de")," acceso en la barra de navegación de la parte izquierda de la pantalla para abrir la ventana ",t.createElement(a.strong,null,"Control de acceso"),"."),"\n",t.createElement(a.li,null,"Haga clic en la pestaña ",t.createElement(a.strong,null,"Fichas de acceso"),"."),"\n"),"\n",t.createElement(a.img,{src:"/1686084645655.14841106003/39.png",alt:"new_access_token"}),"\n",t.createElement(a.ol,{start:"9"},"\n",t.createElement(a.li,null,"Haga clic en el botón azul ",t.createElement(a.strong,null,"Nuevo")," token de acceso. En el formulario que aparece, asigne a su token un nombre descriptivo como, por ejemplo, ",t.createElement(a.strong,null,"token de acceso a Cuaderno"),". Seleccione ",t.createElement(a.strong,null,"Editor")," en la lista desplegable ",t.createElement(a.strong,null,"Función de acceso")," y, a continuación, haga clic en el botón azul ",t.createElement(a.strong,null,"Crear"),". Se creará su código de acceso y aparecerá una entrada en la tabla."),"\n"),"\n"),t.createElement(a.section,{className:"heading","data-heading-rank":"2","aria-labelledby":"3-explorar-los-entornos-de-ejecución"},t.createElement(a.h2,{id:"3-explorar-los-entornos-de-ejecución"},t.createElement(a.a,{href:"#3-explorar-los-entornos-de-ejecución"},"3. Explorar los entornos de ejecución")),"\n",t.createElement(a.p,null,"Como administrador del proyecto, puedes controlar y personalizar completamente los diferentes entornos de ejecución disponibles para tus científicos de datos y desarrolladores. En lugar de que cada miembro del equipo trabaje en su propia máquina con su propio conjunto (a menudo conflictivo o incompatible) de bibliotecas y herramientas, pueden colaborar en Watson Studio con un entorno común, añadiendo las herramientas que necesiten."),"\n",t.createElement(a.ol,null,"\n",t.createElement(a.li,null,"Haga clic en ",t.createElement(a.strong,null,"Entornos")," en la barra de navegación de la parte izquierda de la pantalla. Los entornos en ejecución aparecerán en la lista de la pestaña ",t.createElement(a.strong,null,"Tiempos de ejecución de herramientas"),"."),"\n"),"\n",t.createElement(a.img,{src:"/1686084645659.14841106005/40.png",alt:"template_list"}),"\n",t.createElement(a.ol,{start:"2"},"\n",t.createElement(a.li,null,"Haz clic en la pestaña ",t.createElement(a.strong,null,"Plantillas")," para ver la lista de entornos disponibles. Observa la amplia variedad de entornos de ejecución disponibles, que incluyen desde Python y R estándar hasta Spark, Scala e incluso aceleración GPU. La capacidad de elegir cualquiera de estos tiempos de ejecución, e incluso de cambiarlos dinámicamente a medida que cambian las necesidades del entorno del cuaderno, es una de las principales ventajas de realizar trabajos de ciencia de datos con IBM Cloud Pak for Data frente a los entornos Jupyter instalados localmente."),"\n",t.createElement(a.li,null,"Haga clic en el botón azul ",t.createElement(a.strong,null,"Nueva plantilla")," situado a la derecha de la pantalla para abrir la ventana ",t.createElement(a.strong,null,"Nuevo entorno"),"."),"\n"),"\n",t.createElement(a.img,{src:"/1686084645659.14841106006/41.png",alt:"template_configurations"}),"\n",t.createElement(a.ol,{start:"4"},"\n",t.createElement(a.li,null,"Ten en cuenta que puedes definir configuraciones aquí, eligiendo si quieres incluir Spark, DataStage o aceleración GPU. Puede utilizar el menú desplegable ",t.createElement(a.strong,null,"Configuración de hardware")," para personalizar la cantidad de CPU y RAM disponible para el entorno. Por último, puedes elegir la versión de software, seleccionando entre diferentes versiones de Python o R."),"\n",t.createElement(a.li,null,"Ahora que ha visto las opciones disponibles para los entornos de ejecución, haga clic en ",t.createElement(a.strong,null,"Cancelar")," para cerrar la ventana."),"\n"),"\n"),t.createElement(a.section,{className:"heading","data-heading-rank":"2","aria-labelledby":"4-crear-un-cuaderno"},t.createElement(a.h2,{id:"4-crear-un-cuaderno"},t.createElement(a.a,{href:"#4-crear-un-cuaderno"},"4. Crear un cuaderno")),"\n",t.createElement(a.p,null,"A continuación, crearás un cuaderno Python que se utilizará para el desarrollo de modelos. Como has visto en la sección anterior, los entornos de cuaderno Jupyter de Watson Studio proporcionan una gran variedad de tiempos de ejecución y mejoras, como instalaciones Spark configuradas y aceleración GPU. Los recientes cambios en las licencias de JupyterLab han creado problemas potenciales para los desarrolladores de clientes que confían en él para los cuadernos Jupyter instalados localmente. El uso de cuadernos Jupyter en Watson Studio permite la misma flexibilidad, al tiempo que elimina los quebraderos de cabeza derivados de las licencias y ofrece mayores oportunidades de colaboración."),"\n",t.createElement(a.ol,null,"\n",t.createElement(a.li,null,"Haga clic en la pestaña ",t.createElement(a.strong,null,"Activos")," de su proyecto y, a continuación, en el botón azul ",t.createElement(a.strong,null,"Nuevo activo"),"."),"\n",t.createElement(a.li,null,"Utilice el filtro ",t.createElement(a.strong,null,"Tipo de herramienta")," situado a la izquierda de la pantalla para seleccionar ",t.createElement(a.strong,null,"Editores de código")," y haga clic en la ficha del ",t.createElement(a.strong,null,"editor de cuadernos Jupyter"),". Se abrirá la pantalla ",t.createElement(a.strong,null,"Nuevo")," cuaderno."),"\n",t.createElement(a.li,null,"Haga clic en la pestaña ",t.createElement(a.strong,null,"Desde URL"),". Asigne a su bloc de notas un nombre, como ",t.createElement(a.strong,null,"desarrollo del modelo de desgaste"),", y una descripción opcional. Haga clic en el menú desplegable situado debajo de ",t.createElement(a.strong,null,"Seleccionar")," tiempo de ejecución. Tenga en cuenta que los tiempos de ejecución que aparecen aquí son los entornos mostrados en el paso anterior. Si hubiera creado un nuevo modelo de entorno, estaría disponible en esta lista desplegable."),"\n",t.createElement(a.li,null,"Seleccione el entorno ",t.createElement(a.strong,null,"Spark & Python predeterminado"),". Tenga en cuenta que las versiones disponibles cambian con el tiempo, a medida que nuevas versiones del tiempo de ejecución son liberadas y posteriormente soportadas por Watson Studio. En el momento de escribir esto, el entorno es ",t.createElement(a.strong,null,"Spark 3.3 & Python 3.9 por defecto"),"."),"\n"),"\n",t.createElement(a.img,{src:"/1686084645659.14841106007/42.png",alt:"notebook_configuration"}),"\n",t.createElement(a.ol,{start:"5"},"\n",t.createElement(a.li,null,"Copie y pegue la siguiente URL en el campo ",t.createElement(a.strong,null,"URL del bloc")," de notas:"),"\n"),"\n",t.createElement(a.pre,null,t.createElement(a.code,{className:"hljs language-txt"},"https://raw.githubusercontent.com/ibm-build-lab/VAD-VAR-Workshop/main/content/MLOps/files/02-Open%20source%20lab.ipynb\n")),"\n",t.createElement(a.ol,{start:"6"},"\n",t.createElement(a.li,null,"Haga clic en ",t.createElement(a.strong,null,"Crear")," para crear su bloc de notas e iniciar el entorno de ejecución. Pueden transcurrir hasta 30 segundos antes de que pueda trabajar con el bloc de notas."),"\n"),"\n"),t.createElement(a.section,{className:"heading","data-heading-rank":"2","aria-labelledby":"5-editar-y-ejecutar-el-cuaderno"},t.createElement(a.h2,{id:"5-editar-y-ejecutar-el-cuaderno"},t.createElement(a.a,{href:"#5-editar-y-ejecutar-el-cuaderno"},"5. Editar y ejecutar el cuaderno")),"\n",t.createElement(n),"\n",t.createElement(a.p,null,"Los cuadernos Jupyter son una forma estándar en la industria de trabajar y visualizar datos, construir modelos y mucho más. En la sección ",t.createElement(a.a,{href:"/mlops/101#accessing-data"},"Acceso a los datos")," de este laboratorio, has visto cómo Watson Studio te permite añadir datos a los proyectos desde archivos locales, conexiones o bases de datos. También has visto cómo estos datos se pueden insertar como código directamente en el cuaderno con sólo unos clics. La posibilidad de trabajar fácil y rápidamente con datos de toda la empresa, respetando al mismo tiempo la normativa y los estándares de privacidad de datos, es otra de las grandes ventajas de utilizar Watson Studio frente al código abierto tradicional."),"\n",t.createElement(a.img,{src:"/1686084645659.14841106008/43.png",alt:"insert_project_token"}),"\n",t.createElement(a.ol,null,"\n",t.createElement(a.li,null,"El cuaderno ha sido muy comentado, y debería ser fácil de seguir a medida que ejecutas las celdas individuales. Asegúrate de empezar insertando el código de acceso al proyecto que creaste anteriormente en este laboratorio haciendo clic en el icono de los ",t.createElement(a.strong,null,"tres puntos verticales")," en la parte superior de la pantalla y seleccionando ",t.createElement(a.strong,null,"Insertar código de acceso al proyecto"),". Tenga en cuenta que el código token insertado en la parte superior del cuaderno contendrá el ID de su proyecto, que necesitará en la celda inmediatamente inferior. También necesitará la clave API de IBM Cloud que creó anteriormente en el laboratorio. Ejecute la celda antes de continuar con el resto del cuaderno."),"\n"),"\n",t.createElement(a.img,{src:"/1686084645663.14841106009/44.png",alt:"turn_off_spark"}),"\n",t.createElement(a.p,null,"Cuando ejecutas comandos Spark en tus blocs de notas, la funcionalidad de monitorización de Spark puede añadir una gran cantidad de desorden visual, ya que actualiza el estado de cada comando. Puedes desactivar la monitorización de Spark haciendo clic en el icono de la barra de herramientas."),"\n",t.createElement(a.ol,{start:"2"},"\n",t.createElement(a.li,null,"Siga los pasos del resto del cuaderno, insertando los datos en el código donde se especifique y ejecutando las celdas."),"\n"),"\n",t.createElement(o,{text:"El resto de esta sección asume la finalización con éxito de la ejecución del cuaderno."}),"\n",t.createElement(a.blockquote,null,"\n",t.createElement(a.p,null,"Nota: Después de completar los cuadernos y publicar los modelos en el proyecto, puede utilizar los mismos pasos al final del laboratorio ",t.createElement(a.strong,null,"Accessing Data")," para desactivar los tiempos de ejecución que todavía están activos."),"\n"),"\n"),t.createElement(a.section,{className:"heading","data-heading-rank":"2","aria-labelledby":"6-examinar-las-fichas-descriptivas-de-los-modelos"},t.createElement(a.h2,{id:"6-examinar-las-fichas-descriptivas-de-los-modelos"},t.createElement(a.a,{href:"#6-examinar-las-fichas-descriptivas-de-los-modelos"},"6. Examinar las fichas descriptivas de los modelos")),"\n",t.createElement(a.p,null,"Al principio de este laboratorio, creó una entrada en Watson Knowledge Catalog para IBM FactSheets con el fin de recopilar datos sobre sus modelos. Los cuadernos que ejecutó en el paso anterior utilizaron la API de FactSheets para activar la supervisión de los modelos, escribiendo metadatos relacionados con los datos de entrenamiento, las puntuaciones de precisión y mucho más. Ahora es el momento de ir a buscar esos datos."),"\n",t.createElement(a.ol,null,"\n",t.createElement(a.li,null,"Vuelve a la pantalla de inicio de tu proyecto, bien haciendo clic en el nombre del proyecto desde el rastro de migas de pan en la parte superior izquierda de la pantalla, o navegando a tu ",t.createElement(a.a,{href:"https://dataplatform.cloud.ibm.com/projects"},"lista de proyectos")," y haciendo clic allí."),"\n",t.createElement(a.li,null,"Haga clic en la pestaña ",t.createElement(a.strong,null,"Activos")," del proyecto. Haga clic en ",t.createElement(a.strong,null,"Modelos")," en la lista de ",t.createElement(a.strong,null,"tipos de")," Activos de la izquierda."),"\n",t.createElement(a.li,null,"Los modelos scikit-learn y spark que creaste al ejecutar el cuaderno deberían aparecer en la lista de modelos. Haga clic en el nombre de uno de los modelos para abrir la pantalla de detalles del modelo."),"\n",t.createElement(a.li,null,"Haga clic en el botón azul ",t.createElement(a.strong,null,"Rastrear este modelo"),". Ahora asociará el modelo con la entrada de modelo que creó en el catálogo."),"\n",t.createElement(a.li,null,"Haga clic en ",t.createElement(a.strong,null,"Seleccionar una entrada de modelo existente"),". En la lista de entradas de modelo, seleccione la que creó anteriormente en el laboratorio. Haga clic en ",t.createElement(a.strong,null,"Seguimiento"),". Volverá a la página de detalles del modelo y verá que el seguimiento del modelo está activo."),"\n",t.createElement(a.li,null,"Vuelva a la lista de activos del proyecto y repita los pasos del 3 al 5 con el otro modelo, de modo que ahora se realice el seguimiento de ambos."),"\n"),"\n",t.createElement(a.img,{src:"/1686084645663.14841106010/45.png",alt:"open_in_model_inventory"}),"\n",t.createElement(a.ol,{start:"7"},"\n",t.createElement(a.li,null,"Una vez que haya activado el seguimiento en ambos modelos, en la pantalla de información del modelo, haga clic en ",t.createElement(a.strong,null,"Abrir en el inventario de modelos"),". Se abre la entrada del catálogo. Haga clic en la pestaña ",t.createElement(a.strong,null,"Activo"),"."),"\n"),"\n",t.createElement(a.p,null,"El inventario de modelos se divide en cuatro categorías: ",t.createElement(a.strong,null,"Desarrollar"),", ",t.createElement(a.strong,null,"Desplegar"),", ",t.createElement(a.strong,null,"Validar")," y ",t.createElement(a.strong,null,"Operar"),". A medida que sus modelos avanzan en el ciclo de vida, se moverán automáticamente al bucket correspondiente. Actualmente, como acaban de crearse y no se han desplegado, se encuentran en la fase de ",t.createElement(a.strong,null,"Desarrollo"),"."),"\n",t.createElement(a.img,{src:"/1686084645663.14841106011/46.png",alt:"spark_model"}),"\n",t.createElement(a.ol,{start:"8"},"\n",t.createElement(a.li,null,"\n",t.createElement(a.p,null,"Haga clic en el nombre del modelo Spark en el bucket ",t.createElement(a.strong,null,"Desarrollo"),". Observe que la FactSheet del modelo contiene una gran cantidad de metadatos recopilados automáticamente."),"\n",t.createElement(a.ul,null,"\n",t.createElement(a.li,null,"La sección ",t.createElement(a.strong,null,"Información")," del modelo contiene las fechas de creación y última modificación, así como el tipo de modelo y la especificación del software."),"\n",t.createElement(a.li,null,"La sección ",t.createElement(a.strong,null,"Información")," de entrenamiento contiene el nombre del proyecto utilizado para crear el modelo e información sobre los datos de entrenamiento."),"\n",t.createElement(a.li,null,"La sección ",t.createElement(a.strong,null,"Parámetros de")," entrenamiento contiene gran cantidad de información específica del tipo de modelo creado (Clasificador Gradient Boost), así como el ensamblador vectorial incluido en el pipeline del modelo."),"\n",t.createElement(a.li,null,"Por último, la sección ",t.createElement(a.strong,null,"Etiquetas de")," entrenamiento contiene metadatos adicionales sobre el estimador utilizado y el entorno de ejecución."),"\n"),"\n"),"\n"),"\n",t.createElement(a.p,null,"En los próximos pasos de la demostración, consultará con frecuencia esta hoja de datos, por lo que le recomendamos que copie la URL y la pegue en un editor de texto."),"\n",t.createElement(a.p,null,"Este tipo de información tiene un valor incalculable para los validadores de modelos, ya que buscan comprender cuándo y cómo se ha construido un modelo. Watson Studio proporciona una forma de estandarizar y automatizar la recopilación de los metadatos, lo que significa que los científicos de datos pueden dedicar su tiempo a trabajar en problemas significativos e interesantes en lugar de recopilar, mantener y publicar estos datos.")))}var r=function(e){void 0===e&&(e={});const{wrapper:a}=Object.assign({},(0,l.ah)(),e.components);return a?t.createElement(a,e,t.createElement(o,e)):o(e)};function c(e,a){throw new Error("Expected "+(a?"component":"object")+" `"+e+"` to be defined: you likely forgot to import, pass, or provide it.")}var i=n(4184),s=n.n(i),d=n(4690),u=n(1140),m=n(2565),p=n(8531),g=n(3383),E=n(7315);const b=e=>{const{data:{mdx:{tableOfContents:{items:a},frontmatter:{toc:n=!0,title:l,timeToComplete:o,updated:r}}},children:c}=e,i=(0,t.useRef)(null),{0:d}=(0,t.useState)(""),b=(null===n||n)&&a;return t.createElement(t.Fragment,null,t.createElement(u.Z,{timeToComplete:o,updated:r},a[0].title||l||""),t.createElement(p.Z,{className:E.YS},t.createElement("article",{className:s()(E.Y2,!b&&E.ey),ref:i},t.createElement(m.Z,{components:{h1:()=>null}},c)),b&&t.createElement(g.Z,{itemsList:a,maxDepth:2,currSection:d})))},h=e=>{const{location:{pathname:a},data:{mdx:{frontmatter:{title:n},tableOfContents:{items:l}}}}=e;return t.createElement(d.Z,{pathname:a,title:n||l[0].title||void 0})};function f(e){return t.createElement(b,e,t.createElement(r,e))}},2565:function(e,a,n){n.d(a,{Z:function(){return c}});var l=n(7294),t=n(1151),o=n(7563);const r={table:o.y6,a:o.IW,blockquote:o.R4,SubHeader:o.bU,img:o.fb,code:o.dn,QuizAlert:o.SA,Danger:o.b0,Warning:o.v3,CopyText:o.O5};var c=(0,l.memo)((function(e){let{children:a,components:n={}}=e;return l.createElement(t.Zo,{components:{...r,...n}},a)}))},3383:function(e,a,n){n.d(a,{Z:function(){return s}});var l=n(7294),t=n(7500),o=n(4184),r=n.n(o),c=n(6488);const i=function(e,a,n){return void 0===a&&(a=[]),void 0===n&&(n=0),e.forEach((e=>{const{title:l,url:t,items:o}=e;a.splice(a.length,0,{depth:n,title:l,url:t}),o&&o.length>0&&i(o,a,n+1)})),a};var s=e=>{const{itemsList:a}=e,n=(0,l.useMemo)((()=>i(a[0].items||[])),[a]),o=(0,c.Z)("h1[id],h2[id]",{threshold:[0,1],rootMargin:"-48px 0px -90% 0px"});return n.length<1?null:l.createElement("nav",{className:"TableOfContents-module--toc--54d35"},l.createElement("div",{className:"TableOfContents-module--tocStack--90609"},l.createElement("h6",{className:"TableOfContents-module--tocHeader--05956"},l.createElement(t.rU,{to:"#",replace:!0},"On this page")),n.map(((e,a)=>{let{title:n,url:t}=e;return l.createElement("a",{className:r()("TableOfContents-module--link--b292b",o===t.substring(1)&&"TableOfContents-module--activeItem--3869f"),key:a,href:t},n)}))))}},7315:function(e,a,n){n.d(a,{Y2:function(){return l},YS:function(){return o},ey:function(){return t}});var l="{mdx-fields__slug}-module--article--e3d5a",t="{mdx-fields__slug}-module--noToc--82387",o="{mdx-fields__slug}-module--wrapper--58e72"},1151:function(e,a,n){n.d(a,{Zo:function(){return c},ah:function(){return o}});var l=n(7294);const t=l.createContext({});function o(e){const a=l.useContext(t);return l.useMemo((()=>"function"==typeof e?e(a):{...a,...e}),[a,e])}const r={};function c({components:e,children:a,disableParentContext:n}){let c;return c=n?"function"==typeof e?e({}):e||r:o(e),l.createElement(t.Provider,{value:c},a)}}}]);
//# sourceMappingURL=component---src-pages-mdx-fields-slug-tsx-content-file-path-content-ml-ops-102-es-md-3b65a0b5aed4e876cfa2.js.map