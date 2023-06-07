"use strict";(self.webpackChunkvad_var_site=self.webpackChunkvad_var_site||[]).push([[6066],{4557:function(e,a,n){n.r(a),n.d(a,{Head:function(){return b},default:function(){return g}});var t=n(1151),l=n(7294);function r(e){const a=Object.assign({section:"section",h1:"h1",h2:"h2",a:"a",p:"p",ol:"ol",li:"li",img:"img",strong:"strong",em:"em",code:"code"},(0,t.ah)(),e.components),{QuizAlert:n}=a;return n||function(e,a){throw new Error("Expected "+(a?"component":"object")+" `"+e+"` to be defined: you likely forgot to import, pass, or provide it.")}("QuizAlert",!0),l.createElement(a.section,{className:"heading","data-heading-rank":"1","aria-labelledby":"101-interfaz-de-usuario-iu-de-instana"},l.createElement(a.h1,{id:"101-interfaz-de-usuario-iu-de-instana"},"101: Interfaz de Usuario (IU) de Instana"),"\n",l.createElement(a.section,{className:"heading","data-heading-rank":"2","aria-labelledby":"objetivo"},l.createElement(a.h2,{id:"objetivo"},l.createElement(a.a,{href:"#objetivo"},"Objetivo")),"\n",l.createElement(a.p,null,"El objetivo de este laboratorio es ayudar a explorar / familiarizarse con algunas capacidades clave disponibles a través de la interfaz de usuario de Instana, específicamente el monitoreo de Kubernetes y servicios."),"\n"),l.createElement(a.section,{className:"heading","data-heading-rank":"2","aria-labelledby":"iniciar-sesión-en-la-interfaz-de-usuario"},l.createElement(a.h2,{id:"iniciar-sesión-en-la-interfaz-de-usuario"},l.createElement(a.a,{href:"#iniciar-sesión-en-la-interfaz-de-usuario"},"Iniciar sesión en la interfaz de usuario")),"\n",l.createElement(a.p,null,"Por coherencia del laboratorio, utilizaremos un ambiente compartido de sólo lectura ubicado en: ",l.createElement(a.a,{href:"https://play-with.instana.io"},"https://play-with.instana.io")),"\n",l.createElement(a.ol,null,"\n",l.createElement(a.li,null,"\n",l.createElement(a.p,null,"Se le pedirá que dé una dirección de correo electrónico para obtener acceso al espacio virtual. Escriba la dirección de su trabajo o cualquier otra dirección que le parezca bien compartir."),"\n",l.createElement(a.img,{src:"/1686172306715.24561106059/image-001-signup.png",alt:""}),"\n"),"\n",l.createElement(a.li,null,"\n",l.createElement(a.p,null,"Una vez completado, debería ver la vista predeterminada del panel de Play-With-Instana"),"\n",l.createElement(a.img,{src:"/1686172306719.24561106060/image-002-dashboard.png",alt:""}),"\n"),"\n"),"\n"),l.createElement(a.section,{className:"heading","data-heading-rank":"2","aria-labelledby":"exploración-de-la-vista-de-infraestructura"},l.createElement(a.h2,{id:"exploración-de-la-vista-de-infraestructura"},l.createElement(a.a,{href:"#exploración-de-la-vista-de-infraestructura"},"Exploración de la vista de infraestructura")),"\n",l.createElement(a.p,null,"Ahora que ha iniciado sesión en el sandbox, vamos a dedicar un poco de tiempo a examinar la vista ",l.createElement(a.strong,null,"Infrastructure")," siguiendo los siguientes pasos:"),"\n",l.createElement(a.ol,null,"\n",l.createElement(a.li,null,"\n",l.createElement(a.p,null,"Haga clic en el icono ",l.createElement(a.em,null,l.createElement(a.strong,null,"Infrastructure"))," situado a la izquierda del panel de navegación."),"\n",l.createElement(a.img,{src:"/1686172306719.24561106062/image-004-explore-infra.png",alt:""}),"\n",l.createElement(a.p,null,"Observe la visualización en 3D de los distintos componentes de su infraestructura."),"\n"),"\n"),"\n",l.createElement(a.p,null,"Esta vista ofrece una visión general de todos los sistemas monitorizados, agrupados en zonas de rectángulos 3D (tridimensionales)"),"\n",l.createElement(a.p,null,"Desde la vista de pájaro, cada zona consiste de pilares, y cada pilar representa un agente de Instana ejecutándose en un sistema respectivo.\nEn la imagen de ejemplo anterior y en su sandbox, los pilares representan nodos trabajadores para un cluster GKE Kubernetes."),"\n",l.createElement(a.p,null,"Instana es capaz de visualizar toda esta información gracias al gráfico dinámico y su compatibilidad con más de 250 tecnologías de sensores."),"\n",l.createElement(a.p,null,"Al hacer zoom en el pilar, se pueden ver las cajas más pequeñas ",l.createElement(a.em,null,"(cajas de pizza)")," que componen el pilar general más grande. Cada una de estas cajas más pequeñas representa una entidad o una tecnología de sensor que Instana ha descubierto y está monitorizando; Instana no sólo monitoriza cada entidad sino que también proporciona información asociada, representada como una pequeña pila, como la tecnología utilizada para una entidad dada."),"\n",l.createElement(a.img,{src:"/1686172306735.24541106066/image-008-stack.png",alt:""}),"\n"),l.createElement(a.section,{className:"heading","data-heading-rank":"2","aria-labelledby":"filtrado"},l.createElement(a.h2,{id:"filtrado"},l.createElement(a.a,{href:"#filtrado"},"Filtrado")),"\n",l.createElement(a.p,null,"En ambientes virtuales grandes, puede ser difícil encontrar el servidor o la zona que está buscando. Afortunadamente, hay varias formas de buscar dentro de la vista ",l.createElement(a.em,null,"Infrastructure"),"."),"\n",l.createElement(a.img,{src:"/1686172306719.24561106063/image-005-filter.jpg",alt:""}),"\n",l.createElement(a.p,null,"Imagine que está monitorizando cientos de servicios, servidores y puntos finales. Mientras que Instana, sería capaz de ofrecer fácilmente la observabilidad para todos ellos, sería demasiado si sólo estás buscando servicios o servidores con altos ciclos de CPU."),"\n",l.createElement(a.p,null,"La respuesta a este problema es cambiar la vista utilizando los iconos de Vista de etiquetas, Vista de métricas agregadas, Vista de métricas y 3D, y alternar entre tablas. En este caso, exploraremos la vista Métrica."),"\n"),l.createElement(a.section,{className:"heading","data-heading-rank":"2","aria-labelledby":"vista-de-métricas"},l.createElement(a.h2,{id:"vista-de-métricas"},l.createElement(a.a,{href:"#vista-de-métricas"},"Vista de métricas")),"\n",l.createElement(a.p,null,"Estas vistas de métricas permiten ver fácilmente las métricas útiles como parte de la vista más amplia de la infraestructura."),"\n",l.createElement(a.ol,null,"\n",l.createElement(a.li,null,"\n",l.createElement(a.p,null,"Estas vistas de métricas permiten ver fácilmente las métricas útiles como parte de la vista más amplia de la infraestructura."),"\n"),"\n",l.createElement(a.li,null,"\n",l.createElement(a.p,null,"Cicle a través de todas las diferentes métricas"),"\n",l.createElement(a.ol,null,"\n",l.createElement(a.li,null,"\n",l.createElement(a.p,null,"CPU Load"),"\n"),"\n",l.createElement(a.li,null,"\n",l.createElement(a.p,null,"CPU Usage"),"\n"),"\n",l.createElement(a.li,null,"\n",l.createElement(a.p,null,"Free Memory"),"\n"),"\n"),"\n"),"\n",l.createElement(a.li,null,"\n",l.createElement(a.p,null,"Para restablecer la vista de métricas y volver a la vista de componentes, haga clic en el icono de métricas y seleccione reset en la esquina inferior derecha."),"\n",l.createElement(a.img,{src:"/1686172306731.24541106064/image-006-metrics.gif",alt:""}),"\n",l.createElement(a.p,null,l.createElement(a.em,null,l.createElement(a.strong,null,"Observación"),": En la vista de métricas, el icono de métricas se resaltará mientras haya una métrica seleccionada para recordarle que está activada.")),"\n",l.createElement(a.p,null,"Además de las opciones proporcionadas en la leyenda de abajo a la derecha, Instana también hace uso del lenguaje de búsqueda ",l.createElement(a.em,null,"lucene")," en la barra de filtro/búsqueda en la parte de arriba de la página mientras estamos en la vista de Infraestructura. Podemos hacer uso de esta barra de búsqueda para filtrar entidades y profundizar en servicios o puntos finales específicos. Antes de iniciar la búsqueda, sitúe el cursor sobre una de las torres e identifique el nombre de host de uno de los servidores. Por ejemplo ",l.createElement(a.code,null,"geke.<nombre de host completo>"),"."),"\n"),"\n"),"\n"),l.createElement(a.section,{className:"heading","data-heading-rank":"2","aria-labelledby":"consulta--búsqueda"},l.createElement(a.h2,{id:"consulta--búsqueda"},l.createElement(a.a,{href:"#consulta--búsqueda"},"Consulta / Búsqueda")),"\n",l.createElement(a.p,null,"Probemos una consulta buscando un host específico"),"\n",l.createElement(a.ol,null,"\n",l.createElement(a.li,null,"\n",l.createElement(a.p,null,'Haga clic en la barra de filtros y seleccione "Entity".'),"\n"),"\n",l.createElement(a.li,null,"\n",l.createElement(a.p,null,"En la lista desplegable, escriba ",l.createElement(a.em,null,"host"),' y verá la lista filtrada a "host". Una vez que vea la única entrada, seleccione host.'),"\n"),"\n",l.createElement(a.li,null,"\n",l.createElement(a.p,null,"Debería ver ",l.createElement(a.em,null,"entity.host.name:"),'. Después del ":", puedes hacer una búsqueda con comodines. Por ejemplo, "entidad.nombre.host:',l.createElement(a.em,null,"abc"),'". Escriba una cadena de caracteres comodín que coincida con el principio del nombre de host que desea buscar. Especificaremos "entity.host.name:*gke*" para filtrar sólo los servidores GKE.'),"\n"),"\n",l.createElement(a.li,null,"\n",l.createElement(a.p,null,"Una vez que haya especificado el filtro, verá que la vista de la infraestructura se filtra a sólo un conjunto de servidores GKE que coincide con su búsqueda."),"\n"),"\n",l.createElement(a.li,null,"\n",l.createElement(a.p,null,'A continuación vamos a escribir otra consulta para filtrar las entidades dentro de una zona específica. Escriba "entity.zone:*',l.createElement(a.em,null,"eu"),'*" como la búsqueda de consulta y observe que ya no vemos los servidores GKE, sino sólo una única entidad AWS ubicada en la zona ',l.createElement(a.code,null,"eu"),"."),"\n",l.createElement(a.img,{src:"/1686172306731.24541106065/image-007-query.png",alt:""}),"\n"),"\n"),"\n",l.createElement(a.p,null,l.createElement(a.em,null,l.createElement(a.strong,null,"Observación"),": el filtro de búsqueda acepta muchas consultas diferentes, incluidas las condiciones AND, OR y NOT. Puede encontrar más información sobre el lenguaje de consulta lucene aquí (",l.createElement(a.a,{href:"https://www.ibm.com/docs/en/instana-observability/current?topic=instana-filtering-dynamic-focus"},"https://www.ibm.com/docs/en/instana-observability/current?topic=instana-filtering-dynamic-focus"),")")),"\n",l.createElement(a.ol,{start:"6"},"\n",l.createElement(a.li,null,"Borre el filtro de la parte superior de la página haciendo clic en la ",l.createElement(a.em,null,"x")," antes de pasar a la etapa siguiente."),"\n"),"\n"),l.createElement(a.section,{className:"heading","data-heading-rank":"2","aria-labelledby":"gráfico-de-dependencia"},l.createElement(a.h2,{id:"gráfico-de-dependencia"},l.createElement(a.a,{href:"#gráfico-de-dependencia"},"Gráfico de dependencia")),"\n",l.createElement(a.p,null,"Ahora echemos un vistazo a otra característica clave de Instana, el descubrimiento automatizado de dependencias gracias en parte a la característica Dynamic Graph que forma parte de Instana."),"\n",l.createElement(a.ol,null,"\n",l.createElement(a.li,null,"\n",l.createElement(a.p,null,"Para empezar, seleccione el icono Aplicaciones en el menú de navegación de la izquierda"),"\n",l.createElement(a.img,{src:"/1686172306735.24541106069/image-011-app-menu.png",alt:""}),"\n"),"\n",l.createElement(a.li,null,"\n",l.createElement(a.p,null,"A continuación seleccione ",l.createElement(a.code,null,"robot-shop with frontend")," de la lista de aplicaciones disponibles, una vez completado debería tener una vista de la aplicación por default como la que se muestra a continuación. A continuación, seleccione la pestaña ",l.createElement(a.code,null,"Dependencies")," tab"),"\n",l.createElement(a.img,{src:"/1686172306739.24541106070/image-012-dep-menu.png",alt:""}),"\n"),"\n",l.createElement(a.li,null,"\n",l.createElement(a.p,null,"Vea las dependencias de las aplicaciones de la tienda robótica descubiertas por Instana. Las llamadas entre servicios y puntos finales se representan mediante líneas, y el tráfico en directo se representa visualmente como puntos en movimiento a lo largo de la conexión."),"\n"),"\n"),"\n",l.createElement(a.p,null,l.createElement(n,{text:"Hay una pregunta del cuestionario relacionada con las dependencias."})," ",l.createElement(a.img,{src:"/1686172306739.24541106071/image-013-dep-tab.png",alt:"d"})),"\n",l.createElement(a.ol,{start:"4"},"\n",l.createElement(a.li,null,"Al visualizar un servicio específico para su aplicación, observe que las conexiones a otros servicios aparecen oscurecidas, lo que le permite centrarse en el servicio o las conexiones que le interesa investigar."),"\n"),"\n",l.createElement(a.p,null,l.createElement(n,{text:"Hay una pregunta del cuestionario relacionada con las dependencias."})," ",l.createElement(a.img,{src:"/1686172306743.24541106072/image-014-dep-highlight.png",alt:"d"}))))}var i=function(e){void 0===e&&(e={});const{wrapper:a}=Object.assign({},(0,t.ah)(),e.components);return a?l.createElement(a,e,l.createElement(r,e)):r(e)};var s=n(4184),c=n.n(s),o=n(4690),d=n(1140),u=n(2565),m=n(8531),p=n(3383),E=n(7315);const f=e=>{const{data:{mdx:{tableOfContents:{items:a},frontmatter:{toc:n=!0,title:t,timeToComplete:r,updated:i}}},children:s}=e,o=(0,l.useRef)(null),{0:f}=(0,l.useState)(""),b=(null===n||n)&&a;return l.createElement(l.Fragment,null,l.createElement(d.Z,{timeToComplete:r,updated:i},a[0].title||t||""),l.createElement(m.Z,{className:E.YS},l.createElement("article",{className:c()(E.Y2,!b&&E.ey),ref:o},l.createElement(u.Z,{components:{h1:()=>null}},s)),b&&l.createElement(p.Z,{itemsList:a,maxDepth:2,currSection:f})))},b=e=>{const{location:{pathname:a},data:{mdx:{frontmatter:{title:n},tableOfContents:{items:t}}}}=e;return l.createElement(o.Z,{pathname:a,title:n||t[0].title||void 0})};function g(e){return l.createElement(f,e,l.createElement(i,e))}},2565:function(e,a,n){n.d(a,{Z:function(){return s}});var t=n(7294),l=n(1151),r=n(7563);const i={table:r.y6,a:r.IW,blockquote:r.R4,SubHeader:r.bU,img:r.fb,code:r.dn,QuizAlert:r.SA,Danger:r.b0,Warning:r.v3,CopyText:r.O5};var s=(0,t.memo)((function(e){let{children:a,components:n={}}=e;return t.createElement(l.Zo,{components:{...i,...n}},a)}))},3383:function(e,a,n){n.d(a,{Z:function(){return o}});var t=n(7294),l=n(7500),r=n(4184),i=n.n(r),s=n(6488);const c=function(e,a,n){return void 0===a&&(a=[]),void 0===n&&(n=0),e.forEach((e=>{const{title:t,url:l,items:r}=e;a.splice(a.length,0,{depth:n,title:t,url:l}),r&&r.length>0&&c(r,a,n+1)})),a};var o=e=>{const{itemsList:a}=e,n=(0,t.useMemo)((()=>c(a[0].items||[])),[a]),r=(0,s.Z)("h1[id],h2[id]",{threshold:[0,1],rootMargin:"-48px 0px -90% 0px"});return n.length<1?null:t.createElement("nav",{className:"TableOfContents-module--toc--54d35"},t.createElement("div",{className:"TableOfContents-module--tocStack--90609"},t.createElement("h6",{className:"TableOfContents-module--tocHeader--05956"},t.createElement(l.rU,{to:"#",replace:!0},"On this page")),n.map(((e,a)=>{let{title:n,url:l}=e;return t.createElement("a",{className:i()("TableOfContents-module--link--b292b",r===l.substring(1)&&"TableOfContents-module--activeItem--3869f"),key:a,href:l},n)}))))}},7315:function(e,a,n){n.d(a,{Y2:function(){return t},YS:function(){return r},ey:function(){return l}});var t="{mdx-fields__slug}-module--article--e3d5a",l="{mdx-fields__slug}-module--noToc--82387",r="{mdx-fields__slug}-module--wrapper--58e72"},1151:function(e,a,n){n.d(a,{Zo:function(){return s},ah:function(){return r}});var t=n(7294);const l=t.createContext({});function r(e){const a=t.useContext(l);return t.useMemo((()=>"function"==typeof e?e(a):{...a,...e}),[a,e])}const i={};function s({components:e,children:a,disableParentContext:n}){let s;return s=n?"function"==typeof e?e({}):e||i:r(e),t.createElement(l.Provider,{value:s},a)}}}]);
//# sourceMappingURL=component---src-pages-mdx-fields-slug-tsx-content-file-path-content-instana-101-es-md-0066da0b0e6d957a87eb.js.map