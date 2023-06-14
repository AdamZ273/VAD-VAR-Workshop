"use strict";(self.webpackChunkvad_var_site=self.webpackChunkvad_var_site||[]).push([[7646],{7837:function(e,a,n){n.r(a),n.d(a,{Head:function(){return b},default:function(){return h}});var t=n(1151),l=n(7294);function r(e){const a=Object.assign({section:"section",h1:"h1",h2:"h2",a:"a",p:"p",img:"img",em:"em",strong:"strong",ol:"ol",li:"li",ul:"ul",code:"code"},(0,t.ah)(),e.components);return l.createElement(a.section,{className:"heading","data-heading-rank":"1","aria-labelledby":"103-alerta-y-sintéticos"},l.createElement(a.h1,{id:"103-alerta-y-sintéticos"},"103: Alerta y sintéticos"),"\n",l.createElement(a.section,{className:"heading","data-heading-rank":"2","aria-labelledby":"alertas"},l.createElement(a.h2,{id:"alertas"},l.createElement(a.a,{href:"#alertas"},"Alertas")),"\n",l.createElement(a.p,null,"Instana es compatible con 13 tecnologías para ",l.createElement(a.a,{href:"https://www.ibm.com/docs/en/instana-observability/current?topic=apis-alerting#alerting-integrations"},"canales de alerta"),". A continuación se muestra la lista completa de tecnologías disponibles:"),"\n",l.createElement(a.img,{src:"/1686749397814.66651103660/supported-channels.png",alt:"Canales de alerta compatibles con Instana"}),"\n"),l.createElement(a.section,{className:"heading","data-heading-rank":"2","aria-labelledby":"añadir-slack-como-canal-de-alerta"},l.createElement(a.h2,{id:"añadir-slack-como-canal-de-alerta"},l.createElement(a.a,{href:"#añadir-slack-como-canal-de-alerta"},"Añadir ",l.createElement(a.em,null,"Slack")," como canal de alerta")),"\n",l.createElement(a.p,null,"Para crear alertas, primero necesitamos crear un canal de alertas. Este es un proceso sencillo que consiste en añadir un webhook entrante a ",l.createElement(a.em,null,"Slack")," para un canal ",l.createElement(a.em,null,"Slack")," específico. Para evitar que cada persona cree un nuevo canal, utilizaremos uno existente para este laboratorio."),"\n",l.createElement(a.p,null,"En su espacio de trabajo de Slack proporcionado, únase al canal ",l.createElement(a.strong,null,"#instana-alerts")," en ",l.createElement(a.em,null,"Slack"),"."),"\n",l.createElement(a.p,null,"Para la URL del Webhook, busque el mensaje fijado en el canal ",l.createElement(a.strong,null,"#instana-alerts")," que contendrá la URL."),"\n"),l.createElement(a.section,{className:"heading","data-heading-rank":"2","aria-labelledby":"crear-un-canal-de-alerta"},l.createElement(a.h2,{id:"crear-un-canal-de-alerta"},l.createElement(a.a,{href:"#crear-un-canal-de-alerta"},"Crear un canal de alerta")),"\n",l.createElement(a.ol,null,"\n",l.createElement(a.li,null,"\n",l.createElement(a.p,null,"En la barra lateral izquierda de navegación, haz clic en la sección ",l.createElement(a.strong,null,"Configuración"),"."),"\n"),"\n",l.createElement(a.li,null,"\n",l.createElement(a.p,null,"En la página ",l.createElement(a.strong,null,"Configuración"),", en la barra lateral izquierda de navegación, haga clic en la sección ",l.createElement(a.em,null,"Canales de Alerta"),". A continuación, haga clic en el campo ",l.createElement(a.strong,null,"Añadir canal de alerta")," y seleccione ",l.createElement(a.strong,null,"Slack"),"."),"\n",l.createElement(a.img,{src:"/1686749397806.66631103655/create-alert-channel.png",alt:"Crear canal de alerta"}),"\n"),"\n",l.createElement(a.li,null,"\n",l.createElement(a.p,null,"En la página recién abierta ",l.createElement(a.strong,null,"Crear canal de alertas de Slack"),", rellene la información solicitada con los siguientes datos;"),"\n",l.createElement(a.ul,null,"\n",l.createElement(a.li,null,"\n",l.createElement(a.p,null,"Nombre**: ",l.createElement(a.code,null,"<su_nombre>-slack-channel"),"."),"\n"),"\n",l.createElement(a.li,null,"\n",l.createElement(a.p,null,"URL del Webhook**: ",l.createElement(a.em,null,"Referencia al mensaje anclado en el canal ",l.createElement(a.strong,null,"#instana-alerts")," de su espacio de trabajo Slack"),"."),"\n"),"\n",l.createElement(a.li,null,"\n",l.createElement(a.p,null,"URL del icono** (opcional): ",l.createElement(a.em,null,"Puede dejarse en blanco o proporcionar una URL de imagen de icono PNG para diferenciar las alertas de su canal de Slack")),"\n"),"\n",l.createElement(a.li,null,"\n",l.createElement(a.p,null,"Nombre del canal**: ",l.createElement(a.code,null,"instana-alerts")),"\n"),"\n"),"\n",l.createElement(a.p,null,"Una vez completado, pulse ",l.createElement(a.strong,null,"Probar canal"),' para asegurarse de que todo está configurado correctamente, debería ver un cuadro verde que indica una prueba de canal con éxito. Pulse "Crear" para crear su nuevo canal de alertas.'),"\n",l.createElement(a.img,{src:"/1686749397802.66631103653/alert-channels-test-successful.png",alt:"Prueba de canal de alerta"}),"\n"),"\n"),"\n"),l.createElement(a.section,{className:"heading","data-heading-rank":"2","aria-labelledby":"enviando-eventos-específicos-al-canal"},l.createElement(a.h2,{id:"enviando-eventos-específicos-al-canal"},l.createElement(a.a,{href:"#enviando-eventos-específicos-al-canal"},"Enviando eventos específicos al canal")),"\n",l.createElement(a.p,null,"Con los canales ya creados, podemos decidir qué alertas queremos enviar a ",l.createElement(a.em,null,"Slack"),". Para esta demostración, enviaremos todas las incidencias de ",l.createElement(a.code,null,"robot-shop")," al canal ",l.createElement(a.em,null,"Slack"),"."),"\n",l.createElement(a.ol,null,"\n",l.createElement(a.li,null,"\n",l.createElement(a.p,null,"En la barra lateral de navegación de la izquierda, haga clic en la sección ",l.createElement(a.strong,null,"Settings"),"."),"\n"),"\n",l.createElement(a.li,null,"\n",l.createElement(a.p,null,"En la página ",l.createElement(a.strong,null,"Settings"),", en la barra lateral de navegación de la izquierda, haga clic en la sección ",l.createElement(a.em,null,"Alerts")," que se encuentra justo encima de los Canales de alerta. A continuación, haga clic en el botón ",l.createElement(a.strong,null,"New Alert"),"."),"\n"),"\n",l.createElement(a.li,null,"\n",l.createElement(a.p,null,"Para el nombre utiliza este pattern, ",l.createElement(a.code,null,"<tu-nombre>-alert"),"."),"\n"),"\n",l.createElement(a.li,null,"\n",l.createElement(a.p,null,"En ",l.createElement(a.strong,null,"Eventos"),", elija la opción ",l.createElement(a.strong,null,"Alertar sobre tipo(s) de evento(s)")," y, a continuación, active todas las opciones. Esto nos permitirá mostrar cómo se muestran los diferentes eventos en ",l.createElement(a.em,null,"Slack"),"."),"\n",l.createElement(a.img,{src:"/1686749397814.66651103658/event-types.png",alt:"Establecer tipos de eventos"}),"\n"),"\n",l.createElement(a.li,null,"\n",l.createElement(a.p,null,"En ",l.createElement(a.strong,null,"Scope"),", elija la opción ",l.createElement(a.strong,null,"Application Perspective")," y, a continuación, seleccione la opción ",l.createElement(a.strong,null,"Add Application Perspectives"),". A continuación, ",l.createElement(a.strong,null,"Select All")," las opciones."),"\n"),"\n"),"\n",l.createElement(a.p,null,l.createElement(a.em,null,"Observación: Si utiliza Instana para observar varias aplicaciones, puede añadir alertas de varias aplicaciones diferentes a la vez, o puede crear varias alertas, una para cada perspectiva.")),"\n",l.createElement(a.img,{src:"/1686749397806.66631103654/app-perspective.png",alt:"Perspectiva de la aplicación"}),"\n",l.createElement(a.ol,{start:"6"},"\n",l.createElement(a.li,null,"\n",l.createElement(a.p,null,"En Canales de Alerta, seleccione el canal que creó en los pasos anteriores ",l.createElement(a.strong,null,"<su-nombre>-slack-channel"),"."),"\n"),"\n",l.createElement(a.li,null,"\n",l.createElement(a.p,null,"En la sección ",l.createElement(a.code,null,"Custom Payloads"),", haz clic en ",l.createElement(a.strong,null,"Add Row")," e introduce ",l.createElement(a.code,null,"workshop-user")," para la ",l.createElement(a.em,null,"key")," personalizada; para el ",l.createElement(a.em,null,"value")," introduce tu nombre o algo que te identifique de forma única como tus iniciales. Dado que todos vamos a utilizar el mismo canal de Slack para este laboratorio, estas cargas útiles personalizadas podrán ayudarnos a identificar qué eventos pertenecen a qué instancia de Instana."),"\n",l.createElement(a.img,{src:"/1686749397810.66631103656/custom-payload.png",alt:"Carga útil personalizada"}),"\n"),"\n",l.createElement(a.li,null,"\n",l.createElement(a.p,null,"Una vez completado, haga clic en ",l.createElement(a.strong,null,"Crear"),". Este canal permitirá a Instana publicar en el canal ",l.createElement(a.strong,null,"#instana-alerts")," ",l.createElement(a.em,null,"Slack"),". Espere unos minutos y busque eventos en el canal ",l.createElement(a.strong,null,"#instana-alerts")," de Slack, asegúrese de buscar eventos que contengan su carga útil personalizada para identificar de forma exclusiva los eventos de su instancia de Instana."),"\n"),"\n"),"\n",l.createElement(a.p,null,"Ya está. Ahora, a medida que se generen eventos desde Instana, serán enviados al canal ",l.createElement(a.em,null,"Slack"),". Este potente y flexible método de alerta permite alertas específicas, tales como el uso de diferentes canales ",l.createElement(a.em,null,"Slack")," para alertas de diferente gravedad, o incluso enviar a los desarrolladores de PagerDuty los problemas críticos a medida que surgen."),"\n"),l.createElement(a.section,{className:"heading","data-heading-rank":"2","aria-labelledby":"sintéticos"},l.createElement(a.h2,{id:"sintéticos"},l.createElement(a.a,{href:"#sintéticos"},"Sintéticos")),"\n",l.createElement(a.p,null,"Los sintéticos son una novedad en Instana. Permiten simular experiencias de usuario en su aplicación y monitorizar varias características de rendimiento."),"\n",l.createElement(a.p,null,"Aviso: Synthetics sólo está disponible en una instancia SaaS, no on-prem."),"\n",l.createElement(a.p,null,"Aunque está fuera del alcance de este laboratorio, dado que estamos utilizando instancias de Instana on-prem, aquí se proporcionan instrucciones para ayudarle en el futuro, en caso de que decida probar esta función en la versión SaaS de Instana."),"\n",l.createElement(a.p,null,"En esta sección crearemos pruebas sintéticas para monitorizar nuestra aplicación. Para crear una prueba sintética, primero debe tener un Punto de Presencia (PoP) instalado y en funcionamiento. Múltiples PoPs pueden ser desplegados en clusters en varias regiones geográficas para simular la experiencia del usuario en esas regiones. Las instrucciones para instalar PoPs se pueden encontrar ",l.createElement(a.a,{href:"https://www.ibm.com/docs/en/instana-observability/current?topic=beta-pop-deployment"},"aquí.")," Esto está fuera del alcance de este laboratorio, y utilizaremos un PoP existente ya registrado en el panel de Instana."),"\n",l.createElement(a.ol,null,"\n",l.createElement(a.li,null,"En la instancia de Instana SaaS (",l.createElement(a.a,{href:"https://sandbox-partner.instana.io/#/home"},"https://sandbox-partner.instana.io/#/home"),"), vaya a ",l.createElement(a.strong,null,"Synthetic Monitoring")," en el menú de navegación de la izquierda y haga clic en ",l.createElement(a.strong,null,"Create New Test"),"."),"\n"),"\n",l.createElement(a.img,{src:"/1686749397818.66651103662/synthetic-create.png",alt:"Crear sintético"}),"\n",l.createElement(a.ol,{start:"2"},"\n",l.createElement(a.li,null,"\n",l.createElement(a.p,null,"Para familiarizarnos con la funcionalidad, crearemos un sintético de ping."),"\n",l.createElement(a.p,null,"En ",l.createElement(a.strong,null,"Paso 2: Solicitar detalles")," añada la URL para la región específica de su solicitud y elija ",l.createElement(a.strong,null,"synthetic-dc")," como Punto de Presencia. Haga clic en Siguiente."),"\n",l.createElement(a.img,{src:"/1686749397810.66631103657/dc-pop.png",alt:"Añadir PoP DC"}),"\n"),"\n",l.createElement(a.li,null,"\n",l.createElement(a.p,null,"Para la Frecuencia elija 1 Minuto, y haga clic en Siguiente."),"\n",l.createElement(a.img,{src:"/1686749397818.66651103661/syn-timing.png",alt:"Temporización sintética"}),"\n"),"\n",l.createElement(a.li,null,"\n",l.createElement(a.p,null,"Nombre su sintético utilizando este modelo ",l.createElement(a.code,null,"<su nombre>-synthetic"),", y escriba una descripción opcional. Marque ",l.createElement(a.strong,null,"All Services")," y haga clic en el botón ",l.createElement(a.strong,null,"Create"),"."),"\n",l.createElement(a.img,{src:"/1686749397814.66651103659/karsten-synthetic.png",alt:"crear prueba sintética de ping"}),"\n"),"\n"),"\n",l.createElement(a.p,null,"Ahora puede ver los análisis y métricas de su prueba sintética en la lista ",l.createElement(a.strong,null,"Tests"),".")))}var c=function(e){void 0===e&&(e={});const{wrapper:a}=Object.assign({},(0,t.ah)(),e.components);return a?l.createElement(a,e,l.createElement(r,e)):r(e)},s=n(4184),i=n.n(s),o=n(4690),u=n(1140),m=n(2565),d=n(8531),p=n(3383),E=n(7315);const g=e=>{const{data:{mdx:{tableOfContents:{items:a},frontmatter:{toc:n=!0,title:t,timeToComplete:r,updated:c}}},children:s}=e,o=(0,l.useRef)(null),{0:g}=(0,l.useState)(""),b=(null===n||n)&&a;return l.createElement(l.Fragment,null,l.createElement(u.Z,{timeToComplete:r,updated:c},a[0].title||t||""),l.createElement(d.Z,{className:E.YS},l.createElement("article",{className:i()(E.Y2,!b&&E.ey),ref:o},l.createElement(m.Z,{components:{h1:()=>null}},s)),b&&l.createElement(p.Z,{itemsList:a,maxDepth:2,currSection:g})))},b=e=>{const{location:{pathname:a},data:{mdx:{frontmatter:{title:n},tableOfContents:{items:t}}}}=e;return l.createElement(o.Z,{pathname:a,title:n||t[0].title||void 0})};function h(e){return l.createElement(g,e,l.createElement(c,e))}},2565:function(e,a,n){n.d(a,{Z:function(){return s}});var t=n(7294),l=n(1151),r=n(7563);const c={table:r.y6,a:r.IW,blockquote:r.R4,SubHeader:r.bU,img:r.fb,code:r.dn,QuizAlert:r.SA,Danger:r.b0,Warning:r.v3,CopyText:r.O5};var s=(0,t.memo)((function(e){let{children:a,components:n={}}=e;return t.createElement(l.Zo,{components:{...c,...n}},a)}))},3383:function(e,a,n){n.d(a,{Z:function(){return o}});var t=n(7294),l=n(7500),r=n(4184),c=n.n(r),s=n(6488);const i=function(e,a,n){return void 0===a&&(a=[]),void 0===n&&(n=0),e.forEach((e=>{const{title:t,url:l,items:r}=e;a.splice(a.length,0,{depth:n,title:t,url:l}),r&&r.length>0&&i(r,a,n+1)})),a};var o=e=>{const{itemsList:a}=e,n=(0,t.useMemo)((()=>i(a[0].items||[])),[a]),r=(0,s.Z)("h1[id],h2[id]",{threshold:[0,1],rootMargin:"-48px 0px -90% 0px"});return n.length<1?null:t.createElement("nav",{className:"TableOfContents-module--toc--54d35"},t.createElement("div",{className:"TableOfContents-module--tocStack--90609"},t.createElement("h6",{className:"TableOfContents-module--tocHeader--05956"},t.createElement(l.rU,{to:"#",replace:!0},"On this page")),n.map(((e,a)=>{let{title:n,url:l}=e;return t.createElement("a",{className:c()("TableOfContents-module--link--b292b",r===l.substring(1)&&"TableOfContents-module--activeItem--3869f"),key:a,href:l},n)}))))}},7315:function(e,a,n){n.d(a,{Y2:function(){return t},YS:function(){return r},ey:function(){return l}});var t="{mdx-fields__slug}-module--article--e3d5a",l="{mdx-fields__slug}-module--noToc--82387",r="{mdx-fields__slug}-module--wrapper--58e72"},1151:function(e,a,n){n.d(a,{Zo:function(){return s},ah:function(){return r}});var t=n(7294);const l=t.createContext({});function r(e){const a=t.useContext(l);return t.useMemo((()=>"function"==typeof e?e(a):{...a,...e}),[a,e])}const c={};function s({components:e,children:a,disableParentContext:n}){let s;return s=n?"function"==typeof e?e({}):e||c:r(e),t.createElement(l.Provider,{value:s},a)}}}]);
//# sourceMappingURL=component---src-pages-mdx-fields-slug-tsx-content-file-path-content-instana-103-es-md-1abe962169241a600914.js.map