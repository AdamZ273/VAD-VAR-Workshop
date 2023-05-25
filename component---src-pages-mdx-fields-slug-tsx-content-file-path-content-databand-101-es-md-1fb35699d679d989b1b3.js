"use strict";(self.webpackChunkvad_var_site=self.webpackChunkvad_var_site||[]).push([[4976],{1821:function(e,a,n){n.r(a),n.d(a,{Head:function(){return b},default:function(){return f}});var t=n(1151),l=n(7294);function r(e){const a=Object.assign({section:"section",h1:"h1",h2:"h2",a:"a",h3:"h3",p:"p",strong:"strong",code:"code",img:"img",em:"em",ol:"ol",li:"li"},(0,t.ah)(),e.components);return l.createElement(a.section,{className:"heading","data-heading-rank":"1","aria-labelledby":"101-configuración-del-flujo-de-datastage-y-configuración-de-databand"},l.createElement(a.h1,{id:"101-configuración-del-flujo-de-datastage-y-configuración-de-databand"},"101: Configuración del flujo de DataStage y configuración de Databand"),"\n",l.createElement(a.section,{className:"heading","data-heading-rank":"2","aria-labelledby":"configuración-inicial"},l.createElement(a.h2,{id:"configuración-inicial"},l.createElement(a.a,{href:"#configuración-inicial"},"Configuración inicial")),"\n",l.createElement(a.section,{className:"heading","data-heading-rank":"3","aria-labelledby":"regístrese-en-el-entorno-de-demostración-de-business-partner-databand"},l.createElement(a.h3,{id:"regístrese-en-el-entorno-de-demostración-de-business-partner-databand"},l.createElement(a.a,{href:"#regístrese-en-el-entorno-de-demostración-de-business-partner-databand"},"Regístrese en el entorno de demostración de Business Partner Databand")),"\n",l.createElement(a.p,null,"Abra una sesión en su navegador web preferido en ",l.createElement(a.a,{href:"https://ibm-bp-demo.databand.ai/"},"https://ibm-bp-demo.databand.ai/")," y haga clic en ",l.createElement(a.strong,null,"Inscripción"),". Rellene el formulario y haga clic en ",l.createElement(a.strong,null,"Inscribirse"),". Facilite la dirección de correo electrónico que utilizó para inscribirse en el Slack del taller para que el equipo del taller pueda activar su inscripción."),"\n"),l.createElement(a.section,{className:"heading","data-heading-rank":"3","aria-labelledby":"cree-una-instancia-de-servicio-de-almacenamiento-de-objetos-en-su-cuenta-de-ibm-cloud"},l.createElement(a.h3,{id:"cree-una-instancia-de-servicio-de-almacenamiento-de-objetos-en-su-cuenta-de-ibm-cloud"},l.createElement(a.a,{href:"#cree-una-instancia-de-servicio-de-almacenamiento-de-objetos-en-su-cuenta-de-ibm-cloud"},"Cree una instancia de servicio de almacenamiento de objetos en su cuenta de IBM Cloud")),"\n",l.createElement(a.p,null,"Siga las ",l.createElement(a.a,{href:"https://cloud.ibm.com/docs/cloud-object-storage?topic=cloud-object-storage-provision#provision-instance"},"instrucciones de creación de servicios")," para configurar una instancia de plan ",l.createElement(a.code,null,"lite")," de IBM Cloud Object storage. Si recibe un mensaje que indica que la instancia de plan ",l.createElement(a.code,null,"lite")," ya existe en la cuenta, no es necesario que añada otra."),"\n"),l.createElement(a.section,{className:"heading","data-heading-rank":"3","aria-labelledby":"registre-el-acceso-a-cloud-pak-for-data-as-a-service-en-la-región-de-dallas"},l.createElement(a.h3,{id:"registre-el-acceso-a-cloud-pak-for-data-as-a-service-en-la-región-de-dallas"},l.createElement(a.a,{href:"#registre-el-acceso-a-cloud-pak-for-data-as-a-service-en-la-región-de-dallas"},"Registre el acceso a Cloud Pak for Data as-a-service en la región de Dallas")),"\n",l.createElement(a.p,null,"Si no se ha registrado previamente para obtener una cuenta de IBM Cloud Pak for Data as a Service en la región ",l.createElement(a.strong,null,"de Dallas"),", ",l.createElement(a.a,{href:"https://dataplatform.cloud.ibm.com/registration/stepone?context=cpdaas&apps=all"},"haga clic en este enlace")," para registrarse para obtener una en la región de ",l.createElement(a.strong,null,"Dallas"),"."),"\n",l.createElement(a.p,null,"Tras aceptar los términos, utilice el botón ",l.createElement(a.strong,null,"Iniciar sesión con su IBMid")," para completar el registro."),"\n"),l.createElement(a.section,{className:"heading","data-heading-rank":"3","aria-labelledby":"descargar-el-archivo-fuente-del-flujo-datastage"},l.createElement(a.h3,{id:"descargar-el-archivo-fuente-del-flujo-datastage"},l.createElement(a.a,{href:"#descargar-el-archivo-fuente-del-flujo-datastage"},"Descargar el archivo fuente del flujo DataStage")),"\n",l.createElement(a.p,null,"Descargue este ",l.createElement(a.a,{href:"https://ibm.seismic.com/Link/Content/DCPVPTFPjbR3B8THb9T8289XBM7j"},"archivo zip")," y guárdelo para utilizarlo en la Sección 1, donde creará un nuevo flujo DataStage."),"\n")),l.createElement(a.section,{className:"heading","data-heading-rank":"2","aria-labelledby":"configurar-el-flujotrabajo-de-integración-de-datos"},l.createElement(a.h2,{id:"configurar-el-flujotrabajo-de-integración-de-datos"},l.createElement(a.a,{href:"#configurar-el-flujotrabajo-de-integración-de-datos"},"Configurar el flujo/trabajo de integración de datos")),"\n",l.createElement(a.p,null,l.createElement(a.img,{src:"/1684977553375.02691089077/ds-flow.png",alt:"datastage flow"})," ",l.createElement(a.strong,null,"Figura A - Flujo de integración de datos de este laboratorio")),"\n",l.createElement(a.p,null,l.createElement(a.em,null,"Este flujo de Next-Gen DataStage integra datos de un almacén Db2 en la nube, una base de datos Postgres y una instancia MongoDB. Estos datos se transforman mediante la unión de tablas, el filtrado de los registros por Estado, el cálculo de un nivel de deuda y, en última instancia, la asignación a cada solicitante individual de una tasa hipotecaria adecuada.")),"\n",l.createElement(a.p,null,"Para empezar, realice los siguientes pasos:"),"\n",l.createElement(a.ol,null,"\n",l.createElement(a.li,null,"\n",l.createElement(a.p,null,"Si aún no lo ha hecho, inicie sesión ",l.createElement(a.a,{href:"https://dataplatform.cloud.ibm.com/"},"en IBM Cloud")," Pak for Data. Utilizará su cuenta personal de Cloud Pak for Data as a Service en la región de Dallas para realizar este laboratorio."),"\n",l.createElement(a.img,{src:"/1684977553331.02661089067/cpd-login.png",alt:"cpd login"}),"\n"),"\n",l.createElement(a.li,null,"\n",l.createElement(a.p,null,"En la pantalla de inicio de Cloud Pak for Data, haz clic en ",l.createElement(a.strong,null,"Trabajar con datos")," para crear un nuevo proyecto."),"\n",l.createElement(a.img,{src:"/1684977553427.0271089088/work-with-data.png",alt:"work with data"}),"\n"),"\n",l.createElement(a.li,null,"\n",l.createElement(a.p,null,"Haga clic en la ficha ",l.createElement(a.strong,null,"Crear y vaciar proyecto"),"."),"\n",l.createElement(a.img,{src:"/1684977553347.02661089071/create-project.png",alt:"create project"}),"\n"),"\n",l.createElement(a.li,null,"\n",l.createElement(a.p,null,"Nombra el proyecto ",l.createElement(a.strong,null,"Databand_<TU_INICIALES>_vest")," como en el ejemplo. Mantenga la configuración como está (opcionalmente puede añadir una descripción), y seleccione una instancia de almacenamiento de objetos a utilizar para el proyecto. A continuación, haga clic en ",l.createElement(a.strong,null,"Crear"),"."),"\n",l.createElement(a.p,null,l.createElement(a.img,{src:"/1684977553395.02691089083/project-settings.png",alt:"project settings"})," ",l.createElement(a.strong,null,"Importante:")," Si no aprovisionó una instancia de almacenamiento de objetos en la nube en los requisitos previos, habrá un enlace en esta página para añadir una que le llevará a la página del catálogo. Cree una instancia utilizando el plan ",l.createElement(a.code,null,"lite")," y, a continuación, actualice la página de configuración del proyecto."),"\n"),"\n",l.createElement(a.li,null,"\n",l.createElement(a.p,null,"Una vez creado este proyecto, seleccione la pestaña ",l.createElement(a.strong,null,"Activos")," en la pantalla de resumen del proyecto y haga clic en el icono azul ",l.createElement(a.strong,null,"Nuevo activo"),"."),"\n",l.createElement(a.img,{src:"/1684977553391.02691089081/new-asset.png",alt:"new asset"}),"\n"),"\n",l.createElement(a.li,null,"\n",l.createElement(a.p,null,"Desplácese hasta la sección ",l.createElement(a.strong,null,"Constructores gráficos")," y haga clic en el mosaico ",l.createElement(a.strong,null,"DataStage"),"."),"\n",l.createElement(a.img,{src:"/1684977553375.02691089076/datastage-tile.png",alt:"datastage tile"}),"\n"),"\n",l.createElement(a.li,null,"\n",l.createElement(a.p,null,"Seleccione la pestaña ",l.createElement(a.strong,null,"Archivo local")," en el menú de la izquierda. Arrastre y suelte o haga clic en ",l.createElement(a.strong,null,"Examinar")," y cargue el archivo ",l.createElement(a.strong,null,'"Multicloud Data Integration.zip"')," que descargó como requisito previo para este laboratorio."),"\n",l.createElement(a.img,{src:"/1684977553415.0271089086/upload-file.png",alt:"upload file"}),"\n"),"\n",l.createElement(a.li,null,"\n",l.createElement(a.p,null,"Deje todos los ajustes como están y pulse el botón azul ",l.createElement(a.strong,null,"Crear"),". Espera unos instantes a que se complete el proceso de importación."),"\n",l.createElement(a.img,{src:"/1684977553343.02661089070/create-flow.png",alt:"create flow"}),"\n",l.createElement(a.p,null,"Una vez finalizado este proceso de importación, verá tres conexiones de ",l.createElement(a.strong,null,"prueba de Data Fabric")," y un único trabajo paralelo de ",l.createElement(a.strong,null,"integración de datos multicloud"),"."),"\n",l.createElement(a.img,{src:"/1684977553379.02691089079/flow-imported.png",alt:"flow imported"}),"\n"),"\n"),"\n"),l.createElement(a.section,{className:"heading","data-heading-rank":"2","aria-labelledby":"sincronizar-datastage-con-databand"},l.createElement(a.h2,{id:"sincronizar-datastage-con-databand"},l.createElement(a.a,{href:"#sincronizar-datastage-con-databand"},"Sincronizar DataStage con Databand")),"\n",l.createElement(a.ol,null,"\n",l.createElement(a.li,null,"\n",l.createElement(a.p,null,"Cierre la pantalla de importación haciendo clic en la x de la esquina superior derecha. Abra el flujo DataStage titulado ",l.createElement(a.strong,null,"Integración de datos Multicloud")," haciendo clic en él."),"\n",l.createElement(a.p,null,l.createElement(a.img,{src:"/1684977553395.02691089082/open-flow.png",alt:"open flow"})," Su flujo DataStage debería parecerse al de la Figura A (que se muestra a continuación)."),"\n",l.createElement(a.p,null,l.createElement(a.img,{src:"/1684977553375.02691089077/ds-flow.png",alt:"open flow"})," En este punto, su entorno DataStage está listo para integrarse con Databand. Abra una nueva pestaña del navegador web y vaya a su ",l.createElement(a.a,{href:"https://cloud.ibm.com/"},"consola en la nube de IBM"),"."),"\n"),"\n",l.createElement(a.li,null,"\n",l.createElement(a.p,null,"Después de iniciar sesión en IBM Cloud, asegúrese de que está en su propia cuenta verificando que su cuenta está seleccionada en la parte superior."),"\n",l.createElement(a.img,{src:"/1684977553319.02661089064/check-account.png",alt:"check account"}),"\n"),"\n",l.createElement(a.li,null,"\n",l.createElement(a.p,null,"Cree una clave API para su cuenta en la nube haciendo clic en el menú desplegable ",l.createElement(a.strong,null,"Gestionar")," de la barra de menú superior y seleccionando ",l.createElement(a.strong,null,"Acceso (IAM)"),". Esta clave API se utilizará más tarde para sincronizar su trabajo DataStage con Databand."),"\n",l.createElement(a.img,{src:"/1684977553387.02691089080/ibmc-iam.png",alt:"ibmcloud iam"}),"\n"),"\n",l.createElement(a.li,null,"\n",l.createElement(a.p,null,"En la pantalla IAM, seleccione la pestaña ",l.createElement(a.strong,null,"Claves API")," en el menú de la izquierda."),"\n"),"\n",l.createElement(a.li,null,"\n",l.createElement(a.p,null,"Haga clic en el botón azul Crear."),"\n",l.createElement(a.img,{src:"/1684977553335.02661089068/create-apikey.png",alt:"create apikey"}),"\n"),"\n",l.createElement(a.li,null,"\n",l.createElement(a.p,null,"Nombre su clave API ",l.createElement(a.strong,null,"Databand_<YOUR_INITIALS>"),", añada opcionalmente una descripción y haga clic en el botón azul ",l.createElement(a.strong,null,"Crear"),"."),"\n",l.createElement(a.p,null,l.createElement(a.img,{src:"/1684977553339.02661089069/create-apikey2.png",alt:"create apikey"})," Se generará su clave API. Guarde esta clave en un lugar seguro, ya que la necesitará para crear su DataStage Syncer en Databand."),"\n",l.createElement(a.p,null,l.createElement(a.strong,null,"IMPORTANTE")," - No podrá volver a ver la clave API. Si saliste de la pantalla antes de guardar esta clave, o la olvidaste, simplemente borra la clave que creaste y haz una nueva repitiendo los Pasos 4-6 anteriores."),"\n",l.createElement(a.img,{src:"/1684977553323.02661089066/copy-apikey.png",alt:"copy apikey"}),"\n"),"\n"),"\n"),l.createElement(a.section,{className:"heading","data-heading-rank":"2","aria-labelledby":"primeros-pasos-con-databand"},l.createElement(a.h2,{id:"primeros-pasos-con-databand"},l.createElement(a.a,{href:"#primeros-pasos-con-databand"},"Primeros pasos con Databand")),"\n",l.createElement(a.ol,null,"\n",l.createElement(a.li,null,"\n",l.createElement(a.p,null,"Abra un nuevo navegador con el ",l.createElement(a.a,{href:"https://ibm-bp-demo.databand.ai/app/dashboard"},"entorno Databand"),". Inicie sesión con las credenciales que se le proporcionaron al registrarse."),"\n",l.createElement(a.img,{src:"/1684977553351.02691089072/databand-dashboard.png",alt:"databand dashboard"}),"\n",l.createElement(a.p,null,'Ahora crearemos nuestro DataStage Syncer dentro de Databand. Un sincronizador "sincronizará" o integrará su entorno DataStage con su entorno Databand.'),"\n"),"\n",l.createElement(a.li,null,"\n",l.createElement(a.p,null,"Seleccione la pestaña ",l.createElement(a.strong,null,"Integraciones")," en el menú de la izquierda."),"\n"),"\n",l.createElement(a.li,null,"\n",l.createElement(a.p,null,"Haga clic en el botón morado ",l.createElement(a.strong,null,"Añadir integración")," de la esquina superior derecha."),"\n",l.createElement(a.img,{src:"/1684977553311.02661088874/add-integration.png",alt:"add integration"}),"\n"),"\n",l.createElement(a.li,null,"\n",l.createElement(a.p,null,"Seleccione el mosaico ",l.createElement(a.strong,null,"DataStage")," en tipo de integración"),"\n",l.createElement(a.img,{src:"/1684977553355.02691089073/datastage-integration.png",alt:"datastage integration"}),"\n"),"\n",l.createElement(a.li,null,"\n",l.createElement(a.p,null,"Seleccione ",l.createElement(a.strong,null,"Usuario de la nube")," y haga clic en ",l.createElement(a.strong,null,"Confirmar"),"."),"\n",l.createElement(a.img,{src:"/1684977553323.02661089065/cloud-integration.png",alt:"cloud integration"}),"\n"),"\n",l.createElement(a.li,null,"\n",l.createElement(a.p,null,"Cree un nombre de sincronizador único (por ejemplo, ",l.createElement(a.strong,null,"<YOUR_INITIALS>_datastage_syncer"),") y pegue la clave API que guardó en el campo ",l.createElement(a.strong,null,"Clave API"),". A continuación, haz clic en ",l.createElement(a.strong,null,"Siguiente")),"\n",l.createElement(a.img,{src:"/1684977553371.02691089075/datastage-syncer.png",alt:"datastage syncer"}),"\n"),"\n",l.createElement(a.li,null,"\n",l.createElement(a.p,null,"Seleccione el proyecto ",l.createElement(a.strong,null,"<Databand_yourinitials>")," que creó al principio de este laboratorio. A continuación, haz clic en ",l.createElement(a.strong,null,"Guardar"),"."),"\n",l.createElement(a.img,{src:"/1684977553359.02691089074/datastage-project.png",alt:"datastage project"}),"\n"),"\n"),"\n",l.createElement(a.p,null,"Antes de continuar, es importante cambiar el nombre de la fuente del proyecto DataStage. Por defecto, el nombre de la fuente es el nombre de la cuenta que posee ese proyecto DataStage. Esto no es muy útil ya que la mayoría de la gente no conoce el ID de su cuenta de memoria."),"\n",l.createElement(a.ol,null,"\n",l.createElement(a.li,null,"\n",l.createElement(a.p,null,"Busque su sincronizador DataStage. Seleccione la pestaña ",l.createElement(a.strong,null,"Integraciones")," en el menú de la izquierda"),"\n"),"\n",l.createElement(a.li,null,"\n",l.createElement(a.p,null,"Empieza a escribir el principio de tu nombre único de sincronizador en la barra de ",l.createElement(a.strong,null,"búsqueda"),"."),"\n"),"\n",l.createElement(a.li,null,"\n",l.createElement(a.p,null,"Haga clic en ",l.createElement(a.strong,null,"Editar")," bajo la columna ",l.createElement(a.strong,null,"Acciones")," en la parte derecha de su sincronizador DataStage."),"\n",l.createElement(a.p,null,l.createElement(a.img,{src:"/1684977553379.02691089078/edit-syncer.png",alt:"edit-syncer"})," Esto abrirá el panel de edición para su integración DataStage."),"\n"),"\n",l.createElement(a.li,null,"\n",l.createElement(a.p,null,"Haga clic en ",l.createElement(a.strong,null,"Siguiente")," para ver los proyectos disponibles."),"\n",l.createElement(a.img,{src:"/1684977553419.0271089087/view-projects.png",alt:"view projects"}),"\n"),"\n",l.createElement(a.li,null,"\n",l.createElement(a.p,null,"Si su proyecto Databand aún no está seleccionado, seleccione la ",l.createElement(a.strong,null,"casilla")," situada a la izquierda de la fuente del proyecto Databand que desea editar."),"\n"),"\n",l.createElement(a.li,null,"\n",l.createElement(a.p,null,"Haga clic en el icono ",l.createElement(a.strong,null,"del lápiz")," situado a la derecha de su proyecto Databand para cambiarle el nombre."),"\n",l.createElement(a.img,{src:"/1684977553403.02691089084/rename-source.png",alt:"rename source"}),"\n"),"\n",l.createElement(a.li,null,"\n",l.createElement(a.p,null,"Cambia el nombre de ",l.createElement(a.strong,null,"la")," fuente por algo único que te ayude a identificarla más adelante (por ejemplo, Cuenta de Alyssa B)."),"\n"),"\n",l.createElement(a.li,null,"\n",l.createElement(a.p,null,"Haga clic en ",l.createElement(a.strong,null,"Guardar"),"."),"\n",l.createElement(a.img,{src:"/1684977553411.0271089085/save-name.png",alt:"save name"}),"\n"),"\n"),"\n",l.createElement(a.p,null,"Hemos sincronizado correctamente nuestro proyecto Cloud Pak for Data as a Service con el flujo Multicloud Data Integration, con Databand, y hemos cambiado el nombre de origen del proyecto por un identificador único."),"\n",l.createElement(a.p,null,"Continúe en el ",l.createElement(a.a,{href:"/databand/102"},"siguiente laboratorio")," para empezar a utilizar Databand para observar el flujo de DataStage.")))}var c=function(e){void 0===e&&(e={});const{wrapper:a}=Object.assign({},(0,t.ah)(),e.components);return a?l.createElement(a,e,l.createElement(r,e)):r(e)},i=n(4184),o=n.n(i),s=n(4690),u=n(1140),d=n(2565),m=n(8531),p=n(3383),g=n(7315);const E=e=>{const{data:{mdx:{tableOfContents:{items:a},frontmatter:{toc:n=!0,title:t,timeToComplete:r,updated:c}}},children:i}=e,s=(0,l.useRef)(null),{0:E}=(0,l.useState)(""),b=(null===n||n)&&a;return l.createElement(l.Fragment,null,l.createElement(u.Z,{timeToComplete:r,updated:c},a[0].title||t||""),l.createElement(m.Z,{className:g.YS},l.createElement("article",{className:o()(g.Y2,!b&&g.ey),ref:s},l.createElement(d.Z,{components:{h1:()=>null}},i)),b&&l.createElement(p.Z,{itemsList:a,maxDepth:2,currSection:E})))},b=e=>{const{location:{pathname:a},data:{mdx:{frontmatter:{title:n},tableOfContents:{items:t}}}}=e;return l.createElement(s.Z,{pathname:a,title:n||t[0].title||void 0})};function f(e){return l.createElement(E,e,l.createElement(c,e))}},2565:function(e,a,n){n.d(a,{Z:function(){return i}});var t=n(7294),l=n(1151),r=n(987);const c={table:r.y6,a:r.IW,blockquote:r.R4,SubHeader:r.bU,img:r.fb,code:r.dn,QuizAlert:r.SA};var i=(0,t.memo)((function(e){let{children:a,components:n={}}=e;return t.createElement(l.Zo,{components:{...c,...n}},a)}))},4690:function(e,a,n){var t=n(7294),l=n(1072),r=n(2401);a.Z=e=>{const{title:a,description:n,pathname:c,children:i}=e,{description:o,title:s,origin:u}=(0,r.Z)(),{i18n:{language:d}}=(0,l.$G)(),m={title:a||s,description:n||o,url:""+u+(c||"")};return t.createElement(t.Fragment,null,t.createElement("html",{lang:d}),t.createElement("link",{rel:"icon",href:"data:image/svg+xml,<svg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 100 100'><text y='0.9em' font-size='90'>🦺</text></svg>"}),t.createElement("title",null,m.title),t.createElement("link",{rel:"canonical",href:m.url}),t.createElement("meta",{name:"description",content:m.description}),t.createElement("meta",{property:"og:title",content:m.title}),t.createElement("meta",{property:"og:url",content:m.url}),t.createElement("meta",{property:"og:type",content:"website"}),t.createElement("meta",{property:"og:description",content:m.description}),t.createElement("meta",{name:"twitter:card",content:"summary"}),t.createElement("meta",{name:"twitter:title",content:m.title}),t.createElement("meta",{name:"twitter:url",content:m.url}),t.createElement("meta",{name:"twitter:description",content:m.description}),t.createElement("meta",{name:"twitter:site",content:"https://www.ibm.com"}),t.createElement("meta",{name:"twitter:creator",content:"@IBM"}),i)}},3383:function(e,a,n){n.d(a,{Z:function(){return s}});var t=n(7294),l=n(7500),r=n(4184),c=n.n(r),i=n(6488);const o=function(e,a,n){return void 0===a&&(a=[]),void 0===n&&(n=0),e.forEach((e=>{const{title:t,url:l,items:r}=e;a.splice(a.length,0,{depth:n,title:t,url:l}),r&&r.length>0&&o(r,a,n+1)})),a};var s=e=>{const{itemsList:a}=e,n=(0,t.useMemo)((()=>o(a[0].items||[])),[a]),r=(0,i.Z)("h1[id],h2[id]",{threshold:[0,1],rootMargin:"-48px 0px -90% 0px"});return n.length<1?null:t.createElement("nav",{className:"TableOfContents-module--toc--54d35"},t.createElement("div",{className:"TableOfContents-module--tocStack--90609"},t.createElement("h6",{className:"TableOfContents-module--tocHeader--05956"},t.createElement(l.rU,{to:"#",replace:!0},"On this page")),n.map(((e,a)=>{let{title:n,url:l}=e;return t.createElement("a",{className:c()("TableOfContents-module--link--b292b",r===l.substring(1)&&"TableOfContents-module--activeItem--3869f"),key:a,href:l},n)}))))}},7315:function(e,a,n){n.d(a,{Y2:function(){return t},YS:function(){return r},ey:function(){return l}});var t="{mdx-fields__slug}-module--article--e3d5a",l="{mdx-fields__slug}-module--noToc--82387",r="{mdx-fields__slug}-module--wrapper--58e72"},1151:function(e,a,n){n.d(a,{Zo:function(){return i},ah:function(){return r}});var t=n(7294);const l=t.createContext({});function r(e){const a=t.useContext(l);return t.useMemo((()=>"function"==typeof e?e(a):{...a,...e}),[a,e])}const c={};function i({components:e,children:a,disableParentContext:n}){let i;return i=n?"function"==typeof e?e({}):e||c:r(e),t.createElement(l.Provider,{value:i},a)}}}]);
//# sourceMappingURL=component---src-pages-mdx-fields-slug-tsx-content-file-path-content-databand-101-es-md-1fb35699d679d989b1b3.js.map