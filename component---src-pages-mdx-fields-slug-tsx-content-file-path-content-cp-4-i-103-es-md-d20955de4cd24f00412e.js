"use strict";(self.webpackChunkvad_var_site=self.webpackChunkvad_var_site||[]).push([[4627],{3397:function(e,a,n){n.r(a),n.d(a,{Head:function(){return h},default:function(){return f}});var t=n(1151),l=n(7294);function r(e){const a=Object.assign({section:"section",h1:"h1",h2:"h2",a:"a",p:"p",em:"em",img:"img",ul:"ul",li:"li",strong:"strong",ol:"ol",blockquote:"blockquote",code:"code",pre:"pre"},(0,t.ah)(),e.components);return l.createElement(a.section,{className:"heading","data-heading-rank":"1","aria-labelledby":"103-crear-implantar-y-probar-una-nueva-api-con-el-kit-de-herramientas-para-desarrolladores-de-api-connect"},l.createElement(a.h1,{id:"103-crear-implantar-y-probar-una-nueva-api-con-el-kit-de-herramientas-para-desarrolladores-de-api-connect"},"103: Crear, implantar y probar una nueva API con el kit de herramientas para desarrolladores de API Connect"),"\n",l.createElement(a.section,{className:"heading","data-heading-rank":"2","aria-labelledby":"introducción"},l.createElement(a.h2,{id:"introducción"},l.createElement(a.a,{href:"#introducción"},"Introducción")),"\n",l.createElement(a.p,null,"En este laboratorio creará una nueva API utilizando la definición OpenAPI de un servicio web RESTful existente que obtiene cotizaciones bursátiles en tiempo real. A continuación, probará la API desplegada desplegando la aplicación ",l.createElement(a.em,null,"IBM Trader Lite"),", que es una muestra sencilla de negociación de acciones, escrita como un conjunto de microservicios. La aplicación utiliza la definición de API que creará para obtener cotizaciones bursátiles en tiempo real."),"\n",l.createElement(a.p,null,"A continuación se muestra la arquitectura de la aplicación:"),"\n",l.createElement(a.a,{href:"images/architecture.png"},l.createElement(a.img,{src:"https://ibm.github.io/cloudpakforintegration-workshop/exercise-api-connect/images/architecture.png",alt:""})),"\n",l.createElement(a.ul,null,"\n",l.createElement(a.li,null,"\n",l.createElement(a.p,null,l.createElement(a.strong,null,"Tradr")," es una interfaz de usuario Node.js para el servicio de cartera."),"\n"),"\n",l.createElement(a.li,null,"\n",l.createElement(a.p,null,"El microservicio ",l.createElement(a.strong,null,"de cartera")," se sitúa en el centro de la aplicación. Este microservicio"),"\n",l.createElement(a.ul,null,"\n",l.createElement(a.li,null,"persiste datos de comercio usando JDBC a una base de datos MariaDB"),"\n",l.createElement(a.li,null,"invoca el servicio ",l.createElement(a.strong,null,"de cotización de")," acciones que invoca una API definida en API Connect en CP4I para obtener cotizaciones de acciones"),"\n",l.createElement(a.li,null,"llama al servicio ",l.createElement(a.strong,null,"de historial de")," operaciones para almacenar los datos de las operaciones en una base de datos PostgreSQL que puede ser consultada para la elaboración de informes."),"\n",l.createElement(a.li,null,"llama al servicio de historial ",l.createElement(a.strong,null,"comercial")," para obtener datos comerciales históricos agregados."),"\n"),"\n"),"\n"),"\n",l.createElement(a.p,null,"Este laboratorio se divide en los siguientes pasos:"),"\n",l.createElement(a.ol,null,"\n",l.createElement(a.li,null,"Requisitos previos"),"\n",l.createElement(a.li,null,"Descargar el archivo de definición OpenAPI para el servicio externo Stock Quote"),"\n",l.createElement(a.li,null,"Importar el archivo de definición de OpenAPI en API Manager"),"\n",l.createElement(a.li,null,"Configurar la API"),"\n",l.createElement(a.li,null,"Probar la API"),"\n",l.createElement(a.li,null,"Instalar la aplicación TraderLite"),"\n",l.createElement(a.li,null,"Compruebe que la aplicación Trader Lite llama a su API correctamente"),"\n",l.createElement(a.li,null,"Resumen"),"\n"),"\n"),l.createElement(a.section,{className:"heading","data-heading-rank":"2","aria-labelledby":"requisitos-previos"},l.createElement(a.h2,{id:"requisitos-previos"},l.createElement(a.a,{href:"#requisitos-previos"},l.createElement(a.a,{href:"https://ibm.github.io/cloudpakforintegration-workshop/exercise-api-connect/#prerequisites",title:"Permanent link"},"Requisitos")," previos¶")),"\n",l.createElement(a.p,null,"API Connect requiere el navegador ",l.createElement(a.a,{href:"https://www.mozilla.org/en-US/firefox/new/"},"Firefox")," (versión > 78.9.0) para poder utilizar las funciones de prueba durante el desarrollo de la API (Paso nº 4 de este laboratorio), por lo que se recomienda completar todo este laboratorio utilizando Firefox."),"\n"),l.createElement(a.section,{className:"heading","data-heading-rank":"2","aria-labelledby":"paso-1-descargue-el-archivo-de-definición-openapi-para-el-servicio-externo-stock-quote"},l.createElement(a.h2,{id:"paso-1-descargue-el-archivo-de-definición-openapi-para-el-servicio-externo-stock-quote"},l.createElement(a.a,{href:"#paso-1-descargue-el-archivo-de-definición-openapi-para-el-servicio-externo-stock-quote"},"Paso 1: Descargue el archivo de definición OpenAPI para el servicio externo Stock ",l.createElement(a.a,{href:"https://ibm.github.io/cloudpakforintegration-workshop/exercise-api-connect/#step-1-download-the-openapi-definition-file-for-the-external-stock-quote-service",title:"Permanent link"},"Quote¶"),".")),"\n",l.createElement(a.blockquote,null,"\n",l.createElement(a.p,null,l.createElement(a.strong,null,"Nota:")," Puede hacer clic en cualquier imagen de las siguientes instrucciones para ampliarla y ver más detalles. Cuando lo hagas, haz clic en el botón Atrás de tu navegador para volver al estado anterior."),"\n"),"\n",l.createElement(a.p,null,"1.1 En su navegador, haga clic con el botón derecho del ratón en el siguiente enlace, haga clic con el botón derecho y seleccione ",l.createElement(a.strong,null,"Guardar enlace como."),".. en el menú contextual. Guarde el archivo ",l.createElement(a.em,null,"stock-quote-api.yaml")," en su sistema local."),"\n",l.createElement(a.p,null,l.createElement(a.a,{href:"https://raw.githubusercontent.com/IBMStockTraderLite/traderlite-cp4i/master/apic/stock-quote-api.yaml"},"stock-quote-api.yaml")),"\n"),l.createElement(a.section,{className:"heading","data-heading-rank":"2","aria-labelledby":"paso-2-importar-el-archivo-de-definición-de-openapi-en-api-manager"},l.createElement(a.h2,{id:"paso-2-importar-el-archivo-de-definición-de-openapi-en-api-manager"},l.createElement(a.a,{href:"#paso-2-importar-el-archivo-de-definición-de-openapi-en-api-manager"},"Paso 2: Importar el archivo de definición de OpenAPI en API ",l.createElement(a.a,{href:"https://ibm.github.io/cloudpakforintegration-workshop/exercise-api-connect/#step-2-import-the-openapi-definition-file-into-api-manager",title:"Permanent link"},"Manager¶"))),"\n",l.createElement(a.p,null,"2.1 Vaya a la página de información del taller utilizando su navegador Firefox"),"\n",l.createElement(a.blockquote,null,"\n",l.createElement(a.p,null,l.createElement(a.strong,null,"Nota"),": Acceda a su grupo de talleres y a la página de información del taller siguiendo las instrucciones de las ",l.createElement(a.a,{href:"https://ibm.github.io/cloudpakforintegration-workshop/faq/"},"FAQ"),"."),"\n"),"\n",l.createElement(a.p,null,"2.2 Vaya a la página de Información del taller y haga clic en el enlace del componente API Connect."),"\n",l.createElement(a.a,{href:"images/nav-to-apic.png"},l.createElement(a.img,{src:"https://ibm.github.io/cloudpakforintegration-workshop/exercise-api-connect/images/nav-to-apic.png",alt:""})),"\n",l.createElement(a.blockquote,null,"\n",l.createElement(a.p,null,l.createElement(a.strong,null,"Nota:")," Esta instalación de Cloud Pak for Integration utiliza certificados autofirmados, por lo que tendrá que hacer clic en las advertencias del navegador y continuar con la URL."),"\n"),"\n",l.createElement(a.p,null,"2.3 Seleccione las ",l.createElement(a.strong,null,"credenciales proporcionadas por IBM (sólo administrador)")," en el menú desplegable ",l.createElement(a.strong,null,"Iniciar sesión con")," y, a continuación, introduzca las credenciales de la página Información del centro de ensayo."),"\n",l.createElement(a.a,{href:"images/nav-to-cs.png"},l.createElement(a.img,{src:"https://ibm.github.io/cloudpakforintegration-workshop/exercise-api-connect/images/nav-to-cs.png",alt:""})),"\n",l.createElement(a.p,null,"2.4 Seleccionar el ",l.createElement(a.strong,null,"Registro de Usuarios de Servicios Comunes")),"\n",l.createElement(a.a,{href:"images/nav-to-csur.png"},l.createElement(a.img,{src:"https://ibm.github.io/cloudpakforintegration-workshop/exercise-api-connect/images/nav-to-csur.png",alt:""})),"\n",l.createElement(a.p,null,"2.5 Haga clic en la ",l.createElement(a.strong,null,"ficha Desarrollar API y productos")),"\n",l.createElement(a.a,{href:"images/api-manager.png"},l.createElement(a.img,{src:"https://ibm.github.io/cloudpakforintegration-workshop/exercise-api-connect/images/api-manager.png",alt:""})),"\n",l.createElement(a.p,null,"2.6 Haga clic en ",l.createElement(a.strong,null,"Añadir")," y seleccione ",l.createElement(a.strong,null,"API (REST, GraphQL o SOAP)")," en el menú contextual."),"\n",l.createElement(a.a,{href:"images/add-api.png"},l.createElement(a.img,{src:"https://ibm.github.io/cloudpakforintegration-workshop/exercise-api-connect/images/add-api.png",alt:""})),"\n",l.createElement(a.p,null,"2.7 En la siguiente pantalla, seleccione ",l.createElement(a.strong,null,"OpenAPI existente")," en ",l.createElement(a.strong,null,"Importar")," y, a continuación, haga clic en ",l.createElement(a.strong,null,"Siguiente"),"."),"\n",l.createElement(a.a,{href:"images/existing-api.png"},l.createElement(a.img,{src:"https://ibm.github.io/cloudpakforintegration-workshop/exercise-api-connect/images/existing-api.png",alt:""})),"\n",l.createElement(a.p,null,"2.8 Ahora elija ",l.createElement(a.strong,null,"stock-quote-api.yaml")," de su sistema de archivos local y haga clic en ",l.createElement(a.strong,null,"Siguiente"),"."),"\n",l.createElement(a.a,{href:"images/choose-file.png"},l.createElement(a.img,{src:"https://ibm.github.io/cloudpakforintegration-workshop/exercise-api-connect/images/choose-file.png",alt:""})),"\n",l.createElement(a.p,null,"2.9 ",l.createElement(a.strong,null,"No")," seleccione ",l.createElement(a.strong,null,"Activar API"),". Haga clic en ",l.createElement(a.strong,null,"Siguiente")),"\n",l.createElement(a.p,null,"2.10 La API debería importarse correctamente como se muestra a continuación. Haga clic en ",l.createElement(a.strong,null,"Editar API"),"."),"\n",l.createElement(a.a,{href:"images/edit-api.png"},l.createElement(a.img,{src:"https://ibm.github.io/cloudpakforintegration-workshop/exercise-api-connect/images/edit-api.png",alt:""})),"\n"),l.createElement(a.section,{className:"heading","data-heading-rank":"2","aria-labelledby":"paso-3-configurar-la-api"},l.createElement(a.h2,{id:"paso-3-configurar-la-api"},l.createElement(a.a,{href:"#paso-3-configurar-la-api"},"Paso 3: Configurar la ",l.createElement(a.a,{href:"https://ibm.github.io/cloudpakforintegration-workshop/exercise-api-connect/#step-3-configure-the-api",title:"Permanent link"},"API¶"))),"\n",l.createElement(a.p,null,"Tras importar la API existente, el primer paso es configurar la seguridad básica antes de exponerla a otros desarrolladores. La creación de una clave de cliente permite identificar la aplicación que utiliza los servicios. A continuación, definiremos los puntos finales de backend en los que se ejecuta realmente la API. API Connect permite apuntar a varios puntos finales de backend para adaptarse a los distintos entornos de compilación."),"\n",l.createElement(a.p,null,"3.1 En la barra de navegación de la izquierda, seleccione ",l.createElement(a.strong,null,"Host")," y sustituya la dirección del punto final codificada por ",l.createElement(a.code,null,"$(catalog.host)")," para indicar que desea que las llamadas a la API externa se realicen a través de API Connect."),"\n",l.createElement(a.a,{href:"images/catalog-host.png"},l.createElement(a.img,{src:"https://ibm.github.io/cloudpakforintegration-workshop/exercise-api-connect/images/catalog-host.png",alt:""})),"\n",l.createElement(a.p,null,"3.2 Haga clic en ",l.createElement(a.strong,null,"Guardar")),"\n",l.createElement(a.p,null,"3.3 En la pantalla Editar API, haga clic en ",l.createElement(a.strong,null,"Esquemas de seguridad(0)")," en el menú de navegación de la izquierda."),"\n",l.createElement(a.p,null,"3.4 En la sección ",l.createElement(a.strong,null,"Seguridad"),", haga clic en el botón ",l.createElement(a.strong,null,"Añadir")," situado a la derecha y, a continuación, en ",l.createElement(a.strong,null,"Crear un esquema de")," seguridad ."),"\n",l.createElement(a.a,{href:"images/security-scheme.png"},l.createElement(a.img,{src:"https://ibm.github.io/cloudpakforintegration-workshop/exercise-api-connect/images/security-scheme.png",alt:""})),"\n",l.createElement(a.p,null,"3.5 En el campo ",l.createElement(a.strong,null,"Security Scheme Name(Key)"),", escriba ",l.createElement(a.code,null,"client-id"),"."),"\n",l.createElement(a.p,null,"3.6 En ",l.createElement(a.strong,null,"Security Definition Type"),", elija ",l.createElement(a.strong,null,"apiKey"),"."),"\n",l.createElement(a.p,null,"3.6 En ",l.createElement(a.strong,null,"Tipo de clave"),", elija ",l.createElement(a.strong,null,"client_id"),"."),"\n",l.createElement(a.p,null,"3.7 Para ",l.createElement(a.strong,null,"Situado en")," elegir ",l.createElement(a.strong,null,"cabecera"),"."),"\n",l.createElement(a.p,null,"3.8 Introduzca ",l.createElement(a.code,null,"X-IBM-Client-Id")," como ",l.createElement(a.strong,null,"nombre de la variable"),". Su pantalla debería parecerse a la imagen siguiente."),"\n",l.createElement(a.a,{href:"images/edit-api-complete.png"},l.createElement(a.img,{src:"https://ibm.github.io/cloudpakforintegration-workshop/exercise-api-connect/images/edit-api-complete.png",alt:""})),"\n",l.createElement(a.p,null,"3.9 Haga clic en el botón ",l.createElement(a.strong,null,"Crear")," y, a continuación, en ",l.createElement(a.strong,null,"Guardar"),"."),"\n",l.createElement(a.p,null,"3.10 A continuación requerirá el uso del Id de Cliente para acceder a su API. En la barra de navegación de la izquierda, seleccione ",l.createElement(a.strong,null,"Seguridad(0)")," y haga clic en ",l.createElement(a.strong,null,"Crear un requisito de seguridad"),"."),"\n",l.createElement(a.a,{href:"images/create-security-req.png"},l.createElement(a.img,{src:"https://ibm.github.io/cloudpakforintegration-workshop/exercise-api-connect/images/create-security-req.png",alt:""})),"\n",l.createElement(a.p,null,"3.11 Seleccione el esquema de seguridad que acaba de crear y haga clic en ",l.createElement(a.strong,null,"Crear"),"."),"\n",l.createElement(a.a,{href:"images/security-req.png"},l.createElement(a.img,{src:"https://ibm.github.io/cloudpakforintegration-workshop/exercise-api-connect/images/security-req.png",alt:""})),"\n",l.createElement(a.p,null,"3.12 Haga clic en ",l.createElement(a.strong,null,"Guardar")),"\n",l.createElement(a.p,null,"3.13 A continuación definiremos el endpoint para la API externa. Seleccione la pestaña ",l.createElement(a.strong,null,"Gateway"),", expanda ",l.createElement(a.strong,null,"Propiedades")," en la navegación de la izquierda."),"\n",l.createElement(a.p,null,"3.14 Haga clic en la propiedad ",l.createElement(a.strong,null,"target-url"),"."),"\n",l.createElement(a.p,null,"3.15 Copie y pegue la siguiente URL en el campo ",l.createElement(a.strong,null,"Valor de la propiedad"),":"),"\n",l.createElement(a.pre,null,l.createElement(a.code,null,"https://stock-trader-quote.us-south.cf.appdomain.cloud\n")),"\n",l.createElement(a.a,{href:"images/target-url.png"},l.createElement(a.img,{src:"https://ibm.github.io/cloudpakforintegration-workshop/exercise-api-connect/images/target-url.png",alt:""})),"\n",l.createElement(a.p,null,"3.16 Haga clic en ",l.createElement(a.strong,null,"Guardar")," para completar la configuración."),"\n"),l.createElement(a.section,{className:"heading","data-heading-rank":"2","aria-labelledby":"paso-4-pruebe-la-api"},l.createElement(a.h2,{id:"paso-4-pruebe-la-api"},l.createElement(a.a,{href:"#paso-4-pruebe-la-api"},"Paso 4: Pruebe la ",l.createElement(a.a,{href:"https://ibm.github.io/cloudpakforintegration-workshop/exercise-api-connect/#step-4-test-the-api",title:"Permanent link"},"API¶"))),"\n",l.createElement(a.p,null,"En el diseñador de API, tiene la posibilidad de probar la API inmediatamente después de su creación."),"\n",l.createElement(a.p,null,"4.1 En la Navegación izquierda, haga clic en ",l.createElement(a.strong,null,"Políticas"),"."),"\n",l.createElement(a.p,null,"4.2 Haga clic en ",l.createElement(a.strong,null,"invocar")," en el diseñador de flujos. Observe la ventana de la derecha con la configuración. El nodo de ",l.createElement(a.strong,null,"invocación")," llama a la ",l.createElement(a.strong,null,"URL de destino")," (es decir, al servicio externo)."),"\n",l.createElement(a.a,{href:"images/invoke.png"},l.createElement(a.img,{src:"https://ibm.github.io/cloudpakforintegration-workshop/exercise-api-connect/images/invoke.png",alt:""})),"\n",l.createElement(a.p,null,"4.3 Modifique el campo ",l.createElement(a.strong,null,"URL")," para que incluya también la ruta de la solicitud pasada por el autor de la llamada añadiendo ",l.createElement(a.code,null,"$(request.path)")," a la ",l.createElement(a.strong,null,"URL"),". Cuando haya terminado, el campo debe tener el siguiente valor:"),"\n",l.createElement(a.pre,null,l.createElement(a.code,null,"$(URL-objetivo)$(ruta.solicitud)\n")),"\n",l.createElement(a.a,{href:"images/invoke-edited.png"},l.createElement(a.img,{src:"https://ibm.github.io/cloudpakforintegration-workshop/exercise-api-connect/images/invoke-edited.png",alt:""})),"\n",l.createElement(a.p,null,"4.4 Haga clic en ",l.createElement(a.strong,null,"Guardar")),"\n",l.createElement(a.p,null,"4.5 Activa el interruptor ",l.createElement(a.strong,null,"Offline")," y haz clic en la pestaña ",l.createElement(a.strong,null,"Test"),"."),"\n",l.createElement(a.a,{href:"images/test-tab.png"},l.createElement(a.img,{src:"https://ibm.github.io/cloudpakforintegration-workshop/exercise-api-connect/images/test-tab.png",alt:""})),"\n",l.createElement(a.p,null,"4.6 La ",l.createElement(a.strong,null,"solicitud")," debe rellenarse previamente con la solicitud GET a ",l.createElement(a.strong,null,"/stock-quote/djia"),"."),"\n",l.createElement(a.p,null,"4.7 Tenga en cuenta que su ",l.createElement(a.strong,null,"identificador de cliente")," se rellena previamente."),"\n",l.createElement(a.p,null,"4.8 Haga clic en ",l.createElement(a.strong,null,"Enviar"),"."),"\n",l.createElement(a.a,{href:"images/invoke-api.png"},l.createElement(a.img,{src:"https://ibm.github.io/cloudpakforintegration-workshop/exercise-api-connect/images/invoke-api.png",alt:""})),"\n",l.createElement(a.p,null,"4.9 Si se trata de la primera prueba de la API, es posible que aparezca una excepción de certificado. Simplemente haga clic en el enlace proporcionado. Esto abrirá una nueva pestaña y le permitirá hacer clic para aceptar el certificado autofirmado. ",l.createElement(a.strong,null,"Nota"),": Deténgase cuando obtenga un código de error ",l.createElement(a.code,null,"401")," en la nueva pestaña."),"\n",l.createElement(a.a,{href:"images/cert-exception.png"},l.createElement(a.img,{src:"https://ibm.github.io/cloudpakforintegration-workshop/exercise-api-connect/images/cert-exception.png",alt:""})),"\n",l.createElement(a.p,null,"4.10 Vuelva a la pestaña anterior y pulse ",l.createElement(a.strong,null,"Enviar")," de nuevo."),"\n",l.createElement(a.p,null,"4.11 Ahora debería ver una sección de ",l.createElement(a.strong,null,"Respuesta")," con el código de Estado ",l.createElement(a.code,null,"200 OK")," y el ",l.createElement(a.strong,null,"Cuerpo")," mostrando los detalles del ",l.createElement(a.em,null,"Dow Jones Industrial Average")," simulado ."),"\n",l.createElement(a.a,{href:"images/response.png"},l.createElement(a.img,{src:"https://ibm.github.io/cloudpakforintegration-workshop/exercise-api-connect/images/response.png",alt:""})),"\n",l.createElement(a.p,null,"4.12 A continuación, obtendrá el ",l.createElement(a.em,null,"Id de cliente")," y el punto final de ",l.createElement(a.em,null,"la puerta de")," enlace para que pueda probar su API desde la aplicación TraderLite. Haga clic en la pestaña ",l.createElement(a.strong,null,"Endpoint"),"."),"\n",l.createElement(a.p,null,"4.13 Copie el valor de la URL ",l.createElement(a.strong,null,"api-gateway-service")," y el ",l.createElement(a.strong,null,"Client-Id")," en un archivo de texto local para poder utilizarlo posteriormente en la aplicación Stock Trader**(Nota:** se trata de un acceso directo al proceso habitual de publicación de la API y posterior suscripción a la misma como consumidor)."),"\n",l.createElement(a.a,{href:"images/endpoint-client-id.png"},l.createElement(a.img,{src:"https://ibm.github.io/cloudpakforintegration-workshop/exercise-api-connect/images/endpoint-client-id.png",alt:""})),"\n"),l.createElement(a.section,{className:"heading","data-heading-rank":"2","aria-labelledby":"paso-5-instalar-la-aplicación-traderlite"},l.createElement(a.h2,{id:"paso-5-instalar-la-aplicación-traderlite"},l.createElement(a.a,{href:"#paso-5-instalar-la-aplicación-traderlite"},"Paso 5: Instalar la aplicación ",l.createElement(a.a,{href:"https://ibm.github.io/cloudpakforintegration-workshop/exercise-api-connect/#step-5-install-the-traderlite-app",title:"Permanent link"},"TraderLite¶"))),"\n",l.createElement(a.p,null,"5.1 En otra pestaña del navegador, vaya a la URL de la consola OpenShift del clúster que se le ha asignado para el taller."),"\n",l.createElement(a.blockquote,null,"\n",l.createElement(a.p,null,l.createElement(a.strong,null,"Nota"),": Hay un enlace a la consola de su cluster asignado en su página de Información del Taller. Si la has cerrado, puedes acceder a ella siguiendo las instrucciones de las ",l.createElement(a.a,{href:"https://ibm.github.io/cloudpakforintegration-workshop/faq/"},"FAQ"),"."),"\n"),"\n",l.createElement(a.p,null,"5.2 Haga clic en ",l.createElement(a.strong,null,"Proyectos")," en el menú de navegación de la izquierda y, a continuación, haga clic en su proyecto ",l.createElement(a.em,null,l.createElement(a.strong,null,"student001"))," de la lista."),"\n",l.createElement(a.a,{href:"images/select-traderlite-project.png"},l.createElement(a.img,{src:"https://ibm.github.io/cloudpakforintegration-workshop/exercise-api-connect/images/select-traderlite-project.png",alt:""})),"\n",l.createElement(a.p,null,"5.3 Haga clic en ",l.createElement(a.strong,null,"Operadores instalados")," (en la sección ",l.createElement(a.strong,null,"Operadores")," ) en el menú de navegación de la izquierda y, a continuación, haga clic en el ",l.createElement(a.strong,null,"Operador TraderLite")," de la lista."),"\n",l.createElement(a.a,{href:"images/select-traderlite-operator.png"},l.createElement(a.img,{src:"https://ibm.github.io/cloudpakforintegration-workshop/exercise-api-connect/images/select-traderlite-operator.png",alt:""})),"\n",l.createElement(a.p,null,"5.4 Haga clic en ",l.createElement(a.strong,null,"Crear Instancia")," para iniciar la instalación de la aplicación TraderLite."),"\n",l.createElement(a.a,{href:"images/traderlite-create-instance.png"},l.createElement(a.img,{src:"https://ibm.github.io/cloudpakforintegration-workshop/exercise-api-connect/images/traderlite-create-instance.png",alt:""})),"\n",l.createElement(a.p,null,"5.5 Nombre de la instancia ",l.createElement(a.em,null,"traderlite")),"\n",l.createElement(a.p,null,"5.6 Desplácese por la página hasta el ",l.createElement(a.strong,null,"Microservicio de cotización de acciones")," y sustituya la URL de ",l.createElement(a.strong,null,"API Connect")," y ",l.createElement(a.strong,null,"el ClientId de API Connect")," por la URL de ",l.createElement(a.strong,null,"api-gateway-service")," y el ",l.createElement(a.strong,null,"Client-Id")," que guardó en la sección anterior. Haga clic en ",l.createElement(a.strong,null,"Crear")),"\n",l.createElement(a.a,{href:"images/traderlite-create-values.png"},l.createElement(a.img,{src:"https://ibm.github.io/cloudpakforintegration-workshop/exercise-api-connect/images/traderlite-create-values.png",alt:""})),"\n",l.createElement(a.p,null,"5.7 En la barra de navegación de la izquierda, seleccione ",l.createElement(a.strong,null,"Pods")," (en la sección ",l.createElement(a.strong,null,"Workloads")," ) y espere a que todos los pods TraderLite tengan el estado ",l.createElement(a.strong,null,"Running")," y estén en estado ",l.createElement(a.strong,null,"Ready"),"."),"\n",l.createElement(a.blockquote,null,"\n",l.createElement(a.p,null,l.createElement(a.em,null,"Nota: sabrá que los pods traderlite-xxxxx están listos cuando la columna ",l.createElement(a.code,null,"Listo")," muestre ",l.createElement(a.code,null,"1/1"),".")),"\n"),"\n",l.createElement(a.a,{href:"images/traderlite-pods-ready.png"},l.createElement(a.img,{src:"https://ibm.github.io/cloudpakforintegration-workshop/exercise-api-connect/images/traderlite-pods-ready.png",alt:""})),"\n"),l.createElement(a.section,{className:"heading","data-heading-rank":"2","aria-labelledby":"paso-6-verifique-que-la-aplicación-trader-lite-llama-a-su-api-correctamente"},l.createElement(a.h2,{id:"paso-6-verifique-que-la-aplicación-trader-lite-llama-a-su-api-correctamente"},l.createElement(a.a,{href:"#paso-6-verifique-que-la-aplicación-trader-lite-llama-a-su-api-correctamente"},"Paso 6: Verifique que la aplicación Trader Lite llama a su API ",l.createElement(a.a,{href:"https://ibm.github.io/cloudpakforintegration-workshop/exercise-api-connect/#step-6-verify-that-the-trader-lite-app-is-calling-your-api-successfully",title:"Permanent link"},"correctamente¶"))),"\n",l.createElement(a.p,null,"6.1 En la consola de OpenShift, haga clic en ",l.createElement(a.strong,null,"Rutas")," (en la sección ",l.createElement(a.strong,null,"Redes")," ) en el menú de navegación de la izquierda y, a continuación, haga clic en el icono situado junto a la URL de la aplicación ",l.createElement(a.strong,null,"Tradr")," (la interfaz de usuario de TraderLite)."),"\n",l.createElement(a.a,{href:"images/traderlite-run-tradr.png"},l.createElement(a.img,{src:"https://ibm.github.io/cloudpakforintegration-workshop/exercise-api-connect/images/traderlite-run-tradr.png",alt:""})),"\n",l.createElement(a.p,null,"6.2 Inicie sesión con el nombre de usuario ",l.createElement(a.code,null,"stock")," y la contraseña ",l.createElement(a.code,null,"trader")),"\n",l.createElement(a.a,{href:"images/stock-trader-login.png"},l.createElement(a.img,{src:"https://ibm.github.io/cloudpakforintegration-workshop/exercise-api-connect/images/stock-trader-login.png",alt:""})),"\n",l.createElement(a.p,null,"6.3 Si el resumen DJIA simulado contiene datos, ¡enhorabuena! Significa que la API que ha creado en API Connect funciona."),"\n",l.createElement(a.a,{href:"images/djia-success.png"},l.createElement(a.img,{src:"https://ibm.github.io/cloudpakforintegration-workshop/exercise-api-connect/images/djia-success.png",alt:""})),"\n"),l.createElement(a.section,{className:"heading","data-heading-rank":"2","aria-labelledby":"resumen"},l.createElement(a.h2,{id:"resumen"},l.createElement(a.a,{href:"#resumen"},l.createElement(a.a,{href:"https://ibm.github.io/cloudpakforintegration-workshop/exercise-api-connect/#summary",title:"Permanent link"},"Resumen"))),"\n",l.createElement(a.p,null,"Enhorabuena. Ha completado con éxito los siguientes pasos clave en este laboratorio:"),"\n",l.createElement(a.ul,null,"\n",l.createElement(a.li,null,"Crear una API importando una definición OpenAPI para un servicio REST existente."),"\n",l.createElement(a.li,null,"Configurado un ClientID/API Key para la seguridad configurar un proxy a la API existente."),"\n",l.createElement(a.li,null,"Probada la API en el kit de herramientas para desarrolladores API Connect."),"\n",l.createElement(a.li,null,"Despliega la aplicación Trader Lite y configúrala para que utilice la API que has creado."),"\n",l.createElement(a.li,null,"He probado la aplicación Trader Lite para asegurarme de que utiliza correctamente su API."),"\n")))}var i=function(e){void 0===e&&(e={});const{wrapper:a}=Object.assign({},(0,t.ah)(),e.components);return a?l.createElement(a,e,l.createElement(r,e)):r(e)},c=n(4184),o=n.n(c),s=n(4690),m=n(1140),u=n(2565),p=n(8531),d=n(3383),g=n(7315);const E=e=>{const{data:{mdx:{tableOfContents:{items:a},frontmatter:{toc:n=!0,title:t,timeToComplete:r,updated:i}}},children:c}=e,s=(0,l.useRef)(null),{0:E}=(0,l.useState)(""),h=(null===n||n)&&a;return l.createElement(l.Fragment,null,l.createElement(m.Z,{timeToComplete:r,updated:i},a[0].title||t||""),l.createElement(p.Z,{className:g.YS},l.createElement("article",{className:o()(g.Y2,!h&&g.ey),ref:s},l.createElement(u.Z,{components:{h1:()=>null}},c)),h&&l.createElement(d.Z,{itemsList:a,maxDepth:2,currSection:E})))},h=e=>{const{location:{pathname:a},data:{mdx:{frontmatter:{title:n},tableOfContents:{items:t}}}}=e;return l.createElement(s.Z,{pathname:a,title:n||t[0].title||void 0})};function f(e){return l.createElement(E,e,l.createElement(i,e))}},2565:function(e,a,n){n.d(a,{Z:function(){return c}});var t=n(7294),l=n(1151),r=n(987);const i={table:r.y6,a:r.IW,blockquote:r.R4,SubHeader:r.bU,img:r.fb,code:r.dn,QuizAlert:r.SA};var c=(0,t.memo)((function(e){let{children:a,components:n={}}=e;return t.createElement(l.Zo,{components:{...i,...n}},a)}))},4690:function(e,a,n){var t=n(7294),l=n(1072),r=n(2401);a.Z=e=>{const{title:a,description:n,pathname:i,children:c}=e,{description:o,title:s,origin:m}=(0,r.Z)(),{i18n:{language:u}}=(0,l.$G)(),p={title:a||s,description:n||o,url:""+m+(i||"")};return t.createElement(t.Fragment,null,t.createElement("html",{lang:u}),t.createElement("link",{rel:"icon",href:"data:image/svg+xml,<svg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 100 100'><text y='0.9em' font-size='90'>🦺</text></svg>"}),t.createElement("title",null,p.title),t.createElement("link",{rel:"canonical",href:p.url}),t.createElement("meta",{name:"description",content:p.description}),t.createElement("meta",{property:"og:title",content:p.title}),t.createElement("meta",{property:"og:url",content:p.url}),t.createElement("meta",{property:"og:type",content:"website"}),t.createElement("meta",{property:"og:description",content:p.description}),t.createElement("meta",{name:"twitter:card",content:"summary"}),t.createElement("meta",{name:"twitter:title",content:p.title}),t.createElement("meta",{name:"twitter:url",content:p.url}),t.createElement("meta",{name:"twitter:description",content:p.description}),t.createElement("meta",{name:"twitter:site",content:"https://www.ibm.com"}),t.createElement("meta",{name:"twitter:creator",content:"@IBM"}),c)}},3383:function(e,a,n){n.d(a,{Z:function(){return s}});var t=n(7294),l=n(7500),r=n(4184),i=n.n(r),c=n(6488);const o=function(e,a,n){return void 0===a&&(a=[]),void 0===n&&(n=0),e.forEach((e=>{const{title:t,url:l,items:r}=e;a.splice(a.length,0,{depth:n,title:t,url:l}),r&&r.length>0&&o(r,a,n+1)})),a};var s=e=>{const{itemsList:a}=e,n=(0,t.useMemo)((()=>o(a[0].items||[])),[a]),r=(0,c.Z)("h1[id],h2[id]",{threshold:[0,1],rootMargin:"-48px 0px -90% 0px"});return n.length<1?null:t.createElement("nav",{className:"TableOfContents-module--toc--54d35"},t.createElement("div",{className:"TableOfContents-module--tocStack--90609"},t.createElement("h6",{className:"TableOfContents-module--tocHeader--05956"},t.createElement(l.rU,{to:"#",replace:!0},"On this page")),n.map(((e,a)=>{let{title:n,url:l}=e;return t.createElement("a",{className:i()("TableOfContents-module--link--b292b",r===l.substring(1)&&"TableOfContents-module--activeItem--3869f"),key:a,href:l},n)}))))}},7315:function(e,a,n){n.d(a,{Y2:function(){return t},YS:function(){return r},ey:function(){return l}});var t="{mdx-fields__slug}-module--article--e3d5a",l="{mdx-fields__slug}-module--noToc--82387",r="{mdx-fields__slug}-module--wrapper--58e72"},1151:function(e,a,n){n.d(a,{Zo:function(){return c},ah:function(){return r}});var t=n(7294);const l=t.createContext({});function r(e){const a=t.useContext(l);return t.useMemo((()=>"function"==typeof e?e(a):{...a,...e}),[a,e])}const i={};function c({components:e,children:a,disableParentContext:n}){let c;return c=n?"function"==typeof e?e({}):e||i:r(e),t.createElement(l.Provider,{value:c},a)}}}]);
//# sourceMappingURL=component---src-pages-mdx-fields-slug-tsx-content-file-path-content-cp-4-i-103-es-md-d20955de4cd24f00412e.js.map