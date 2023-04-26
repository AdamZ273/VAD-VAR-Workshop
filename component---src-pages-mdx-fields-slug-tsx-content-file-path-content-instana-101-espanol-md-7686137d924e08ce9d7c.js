"use strict";(self.webpackChunkvad_var_site=self.webpackChunkvad_var_site||[]).push([[863],{250:function(e,a,n){n.r(a),n.d(a,{Head:function(){return b},default:function(){return v}});var t=n(1151),l=n(7294);function r(e){const a=Object.assign({h1:"h1",h2:"h2",a:"a",p:"p",ol:"ol",li:"li",img:"img",strong:"strong",em:"em",code:"code"},(0,t.ah)(),e.components),{SubHeader:n}=a;return n||function(e,a){throw new Error("Expected "+(a?"component":"object")+" `"+e+"` to be defined: you likely forgot to import, pass, or provide it.")}("SubHeader",!0),l.createElement(l.Fragment,null,l.createElement(a.h1,{id:"101-interfaz-de-usuario-iu-de-instana"},"101: Interfaz de Usuario (IU) de Instana"),"\n",l.createElement(n,{timeToComplete:e.pageContext.frontmatter.timeToComplete,updated:e.pageContext.frontmatter.updated}),"\n",l.createElement(a.h2,{id:"objetivo"},l.createElement(a.a,{href:"#objetivo"},"Objetivo")),"\n",l.createElement(a.p,null,"El objetivo de este laboratorio es ayudar a explorar / familiarizarse con algunas capacidades clave disponibles a través de la interfaz de usuario de Instana, específicamente el monitoreo de Kubernetes y servicios."),"\n",l.createElement(a.h2,{id:"iniciar-sesión-en-la-interfaz-de-usuario"},l.createElement(a.a,{href:"#iniciar-sesión-en-la-interfaz-de-usuario"},"Iniciar sesión en la interfaz de usuario")),"\n",l.createElement(a.p,null,"Por coherencia del laboratorio, utilizaremos un ambiente compartido de sólo lectura ubicado en: ",l.createElement(a.a,{href:"https://play-with.instana.io"},"https://play-with.instana.io")),"\n",l.createElement(a.ol,null,"\n",l.createElement(a.li,null,"\n",l.createElement(a.p,null,"Se le pedirá que dé una dirección de correo electrónico para obtener acceso al espacio virtual. Escriba la dirección de su trabajo o cualquier otra dirección que le parezca bien compartir."),"\n",l.createElement(a.img,{src:"/1682534053714.91021362561/image-001-signup.png",alt:""}),"\n"),"\n",l.createElement(a.li,null,"\n",l.createElement(a.p,null,"Una vez completado, debería ver la vista predeterminada del panel de Play-With-Instana"),"\n",l.createElement(a.img,{src:"/1682534053718.91021362562/image-002-dashboard.png",alt:""}),"\n"),"\n"),"\n",l.createElement(a.h2,{id:"exploración-de-la-vista-de-infraestructura"},l.createElement(a.a,{href:"#exploración-de-la-vista-de-infraestructura"},"Exploración de la vista de infraestructura")),"\n",l.createElement(a.p,null,"Ahora que ha iniciado sesión en el sandbox, vamos a dedicar un poco de tiempo a examinar la vista ",l.createElement(a.strong,null,"Infrastructure")," siguiendo los siguientes pasos:"),"\n",l.createElement(a.ol,null,"\n",l.createElement(a.li,null,"\n",l.createElement(a.p,null,"Haga clic en el icono ",l.createElement(a.em,null,l.createElement(a.strong,null,"Infrastructure"))," situado a la izquierda del panel de navegación."),"\n",l.createElement(a.img,{src:"/1682534053718.91021362564/image-004-explore-infra.png",alt:""}),"\n",l.createElement(a.p,null,"Observe la visualización en 3D de los distintos componentes de su infraestructura."),"\n"),"\n"),"\n",l.createElement(a.p,null,"Esta vista ofrece una visión general de todos los sistemas monitorizados, agrupados en zonas de rectángulos 3D (tridimensionales)"),"\n",l.createElement(a.p,null,"Desde la vista de pájaro, cada zona consiste de pilares, y cada pilar representa un agente de Instana ejecutándose en un sistema respectivo.\nEn la imagen de ejemplo anterior y en su sandbox, los pilares representan nodos trabajadores para un cluster GKE Kubernetes."),"\n",l.createElement(a.p,null,"Instana es capaz de visualizar toda esta información gracias al gráfico dinámico y su compatibilidad con más de 250 tecnologías de sensores."),"\n",l.createElement(a.p,null,"Al hacer zoom en el pilar, se pueden ver las cajas más pequeñas ",l.createElement(a.em,null,"(cajas de pizza)")," que componen el pilar general más grande. Cada una de estas cajas más pequeñas representa una entidad o una tecnología de sensor que Instana ha descubierto y está monitorizando; Instana no sólo monitoriza cada entidad sino que también proporciona información asociada, representada como una pequeña pila, como la tecnología utilizada para una entidad dada."),"\n",l.createElement(a.img,{src:"/1682534053734.91021362568/image-008-stack.png",alt:""}),"\n",l.createElement(a.h2,{id:"filtrado"},l.createElement(a.a,{href:"#filtrado"},"Filtrado")),"\n",l.createElement(a.p,null,"En ambientes virtuales grandes, puede ser difícil encontrar el servidor o la zona que está buscando. Afortunadamente, hay varias formas de buscar dentro de la vista ",l.createElement(a.em,null,"Infrastructure"),"."),"\n",l.createElement(a.img,{src:"/1682534053718.91021362565/image-005-filter.jpg",alt:""}),"\n",l.createElement(a.p,null,"Imagine que está monitorizando cientos de servicios, servidores y puntos finales. Mientras que Instana, sería capaz de ofrecer fácilmente la observabilidad para todos ellos, sería demasiado si sólo estás buscando servicios o servidores con altos ciclos de CPU."),"\n",l.createElement(a.p,null,"La respuesta a este problema es cambiar la vista utilizando los iconos de Vista de etiquetas, Vista de métricas agregadas, Vista de métricas y 3D, y alternar entre tablas. En este caso, exploraremos la vista Métrica."),"\n",l.createElement(a.h2,{id:"vista-de-métricas"},l.createElement(a.a,{href:"#vista-de-métricas"},"Vista de métricas")),"\n",l.createElement(a.p,null,"Estas vistas de métricas permiten ver fácilmente las métricas útiles como parte de la vista más amplia de la infraestructura."),"\n",l.createElement(a.ol,null,"\n",l.createElement(a.li,null,"\n",l.createElement(a.p,null,"Estas vistas de métricas permiten ver fácilmente las métricas útiles como parte de la vista más amplia de la infraestructura."),"\n"),"\n",l.createElement(a.li,null,"\n",l.createElement(a.p,null,"Cicle a través de todas las diferentes métricas"),"\n",l.createElement(a.ol,null,"\n",l.createElement(a.li,null,"\n",l.createElement(a.p,null,"CPU Load"),"\n"),"\n",l.createElement(a.li,null,"\n",l.createElement(a.p,null,"CPU Usage"),"\n"),"\n",l.createElement(a.li,null,"\n",l.createElement(a.p,null,"Free Memory"),"\n"),"\n"),"\n"),"\n",l.createElement(a.li,null,"\n",l.createElement(a.p,null,"Para restablecer la vista de métricas y volver a la vista de componentes, haga clic en el icono de métricas y seleccione reset en la esquina inferior derecha."),"\n",l.createElement(a.img,{src:"/1682534053730.91021362566/image-006-metrics.gif",alt:""}),"\n",l.createElement(a.p,null,l.createElement(a.em,null,l.createElement(a.strong,null,"Observación"),": En la vista de métricas, el icono de métricas se resaltará mientras haya una métrica seleccionada para recordarle que está activada.")),"\n",l.createElement(a.p,null,"Además de las opciones proporcionadas en la leyenda de abajo a la derecha, Instana también hace uso del lenguaje de búsqueda ",l.createElement(a.em,null,"lucene")," en la barra de filtro/búsqueda en la parte de arriba de la página mientras estamos en la vista de Infraestructura. Podemos hacer uso de esta barra de búsqueda para filtrar entidades y profundizar en servicios o puntos finales específicos. Antes de iniciar la búsqueda, sitúe el cursor sobre una de las torres e identifique el nombre de host de uno de los servidores. Por ejemplo ",l.createElement(a.code,null,"geke.<nombre de host completo>"),"."),"\n"),"\n"),"\n",l.createElement(a.h2,{id:"consulta--búsqueda"},l.createElement(a.a,{href:"#consulta--búsqueda"},"Consulta / Búsqueda")),"\n",l.createElement(a.p,null,"Probemos una consulta buscando un host específico"),"\n",l.createElement(a.ol,null,"\n",l.createElement(a.li,null,"\n",l.createElement(a.p,null,'Haga clic en la barra de filtros y seleccione "Entity".'),"\n"),"\n",l.createElement(a.li,null,"\n",l.createElement(a.p,null,"En la lista desplegable, escriba ",l.createElement(a.em,null,"host"),' y verá la lista filtrada a "host". Una vez que vea la única entrada, seleccione host.'),"\n"),"\n",l.createElement(a.li,null,"\n",l.createElement(a.p,null,"Debería ver ",l.createElement(a.em,null,"entity.host.name:"),'. Después del ":", puedes hacer una búsqueda con comodines. Por ejemplo, "entidad.nombre.host:',l.createElement(a.em,null,"abc"),'". Escriba una cadena de caracteres comodín que coincida con el principio del nombre de host que desea buscar. Especificaremos "entity.host.name:*gke*" para filtrar sólo los servidores GKE.'),"\n"),"\n",l.createElement(a.li,null,"\n",l.createElement(a.p,null,"Una vez que haya especificado el filtro, verá que la vista de la infraestructura se filtra a sólo un conjunto de servidores GKE que coincide con su búsqueda."),"\n"),"\n",l.createElement(a.li,null,"\n",l.createElement(a.p,null,'A continuación vamos a escribir otra consulta para filtrar las entidades dentro de una zona específica. Escriba "entity.zone:*',l.createElement(a.em,null,"eu"),'*" como la búsqueda de consulta y observe que ya no vemos los servidores GKE, sino sólo una única entidad AWS ubicada en la zona ',l.createElement(a.code,null,"eu"),"."),"\n",l.createElement(a.img,{src:"/1682534053734.91021362567/image-007-query.png",alt:""}),"\n"),"\n"),"\n",l.createElement(a.p,null,l.createElement(a.em,null,l.createElement(a.strong,null,"Observación"),": el filtro de búsqueda acepta muchas consultas diferentes, incluidas las condiciones AND, OR y NOT. Puede encontrar más información sobre el lenguaje de consulta lucene aquí (",l.createElement(a.a,{href:"https://www.ibm.com/docs/en/instana-observability/current?topic=instana-filtering-dynamic-focus"},"https://www.ibm.com/docs/en/instana-observability/current?topic=instana-filtering-dynamic-focus"),")")),"\n",l.createElement(a.ol,{start:"6"},"\n",l.createElement(a.li,null,"Borre el filtro de la parte superior de la página haciendo clic en la ",l.createElement(a.em,null,"x")," antes de pasar a la etapa siguiente."),"\n"),"\n",l.createElement(a.h2,{id:"gráfico-de-dependencia"},l.createElement(a.a,{href:"#gráfico-de-dependencia"},"Gráfico de dependencia")),"\n",l.createElement(a.p,null,"Ahora echemos un vistazo a otra característica clave de Instana, el descubrimiento automatizado de dependencias gracias en parte a la característica Dynamic Graph que forma parte de Instana."),"\n",l.createElement(a.ol,null,"\n",l.createElement(a.li,null,"\n",l.createElement(a.p,null,"Para empezar, seleccione el icono Aplicaciones en el menú de navegación de la izquierda"),"\n",l.createElement(a.img,{src:"/1682534053734.91021362571/image-011-app-menu.png",alt:""}),"\n"),"\n",l.createElement(a.li,null,"\n",l.createElement(a.p,null,"A continuación seleccione ",l.createElement(a.code,null,"robot-shop with frontend")," de la lista de aplicaciones disponibles, una vez completado debería tener una vista de la aplicación por default como la que se muestra a continuación. A continuación, seleccione la pestaña ",l.createElement(a.code,null,"Dependencies")," tab"),"\n",l.createElement(a.img,{src:"/1682534053738.91021362572/image-012-dep-menu.png",alt:""}),"\n"),"\n",l.createElement(a.li,null,"\n",l.createElement(a.p,null,"Vea las dependencias de las aplicaciones de la tienda robótica descubiertas por Instana. Las llamadas entre servicios y puntos finales se representan mediante líneas, y el tráfico en directo se representa visualmente como puntos en movimiento a lo largo de la conexión."),"\n"),"\n"),"\n",l.createElement(a.p,null,"🟢 ",l.createElement(a.img,{src:"/1682534053738.91021362573/image-013-dep-tab.png",alt:"d"})),"\n",l.createElement(a.ol,{start:"4"},"\n",l.createElement(a.li,null,"Al visualizar un servicio específico para su aplicación, observe que las conexiones a otros servicios aparecen oscurecidas, lo que le permite centrarse en el servicio o las conexiones que le interesa investigar."),"\n"),"\n",l.createElement(a.p,null,"🟢 ",l.createElement(a.img,{src:"/1682534053742.91021362574/image-014-dep-highlight.png",alt:"d"})))}var i=function(e){void 0===e&&(e={});const{wrapper:a}=Object.assign({},(0,t.ah)(),e.components);return a?l.createElement(a,e,l.createElement(r,e)):r(e)};var s=n(7315),c=n(2125),o=n(403),d=n(4690),u=n(4184),m=n.n(u);const p={table:o.y6,a:o.IW,blockquote:o.R4,SubHeader:o.bU,img:o.fb,code:o.dn,QuizAlert:o.SA},E=l.memo((function(e){let{children:a}=e;return l.createElement(t.Zo,{components:{...p}},a)})),f=e=>{const{data:{mdx:{tableOfContents:{items:a},frontmatter:{toc:n=!0}}},children:t}=e,r=(0,l.useRef)(null),{0:i,1:o}=(0,l.useState)("");(0,l.useEffect)((()=>{if(!r.current)return;const e=r.current.querySelectorAll("h2,h3,h4,h5"),a=new IntersectionObserver((e=>{e.forEach((e=>{e.isIntersecting&&o(e.target.id)}))}),{rootMargin:"0px 0px -95% 0px",threshold:0});return e.forEach((e=>{a.observe(e)})),()=>a.disconnect()}),[]);const d=(null===n||n)&&a;return l.createElement(l.Fragment,null,l.createElement("article",{className:m()(s.Y,!d&&s.e),ref:r},l.createElement(E,null,t)),d&&l.createElement(c.Z,{itemsList:a,maxDepth:1,currSection:i}))},b=e=>{const{location:{pathname:a},data:{mdx:{frontmatter:{title:n},tableOfContents:{items:t}}}}=e;return l.createElement(d.Z,{pathname:a,title:n||t[0].title||void 0})};function v(e){return l.createElement(f,e,l.createElement(i,e))}}}]);
//# sourceMappingURL=component---src-pages-mdx-fields-slug-tsx-content-file-path-content-instana-101-espanol-md-7686137d924e08ce9d7c.js.map