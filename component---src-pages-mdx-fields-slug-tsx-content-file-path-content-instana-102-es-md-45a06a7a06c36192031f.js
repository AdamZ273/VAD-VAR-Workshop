"use strict";(self.webpackChunkvad_var_site=self.webpackChunkvad_var_site||[]).push([[9725],{5416:function(e,n,a){a.r(n),a.d(n,{Head:function(){return h},default:function(){return v}});var t=a(1151),l=a(7294);function r(e){const n=Object.assign({section:"section",h1:"h1",h2:"h2",a:"a",ol:"ol",li:"li",p:"p",strong:"strong",img:"img",br:"br",em:"em"},(0,t.ah)(),e.components),{QuizAlert:a}=n;return a||function(e,n){throw new Error("Expected "+(n?"component":"object")+" `"+e+"` to be defined: you likely forgot to import, pass, or provide it.")}("QuizAlert",!0),l.createElement(n.section,{className:"heading","data-heading-rank":"1","aria-labelledby":"102-monitorización-de-llamadas--rastreo-de-aplicaciones"},l.createElement(n.h1,{id:"102-monitorización-de-llamadas--rastreo-de-aplicaciones"},"102: Monitorización de llamadas + Rastreo de aplicaciones"),"\n",l.createElement(n.section,{className:"heading","data-heading-rank":"2","aria-labelledby":"navegue-hasta-las-dependencias-de-robotshop"},l.createElement(n.h2,{id:"navegue-hasta-las-dependencias-de-robotshop"},l.createElement(n.a,{href:"#navegue-hasta-las-dependencias-de-robotshop"},"Navegue hasta las dependencias de RobotShop")),"\n",l.createElement(n.ol,null,"\n",l.createElement(n.li,null,"\n",l.createElement(n.p,null,"Empezando por navegar al ",l.createElement(n.a,{href:"https://play-with.instana.io/"},"Instana playground")),"\n",l.createElement(n.p,null,"Vamos a utilizar Instana para ver todas las dependencias dentro de la aplicación RobotShop."),"\n",l.createElement(n.p,null,"Instana descubre automáticamente las relaciones entre los servicios y los correlaciona en un gráfico dinámico."),"\n"),"\n",l.createElement(n.li,null,"\n",l.createElement(n.p,null,"En el menú de la barra lateral, haga clic en el icono ",l.createElement(n.strong,null,"Applications")," (1) y seleccione ",l.createElement(n.strong,null,"robot-shop with frontend")," (2)."),"\n",l.createElement(n.img,{src:"/1685001736452.611328881/applications-robotshop.png",alt:""}),"\n"),"\n",l.createElement(n.li,null,"\n",l.createElement(n.p,null,"Haga clic en la pestaña ",l.createElement(n.strong,null,"Dependencies"),"."),"\n",l.createElement(n.img,{src:"/1685001736460.61041328884/dependencies.png",alt:""}),"\n",l.createElement(n.p,null,"Podemos ver que cada punto en movimiento representa una solicitud de llamada. Las solicitudes se mueven a través de la aplicación en tiempo real. Instana es capaz de hacer esto porque rastrea cada solicitud que fluye a través de la aplicación."),"\n",l.createElement(n.p,null,"Podemos decir que hay algunos problemas con la aplicación porque varios servicios están marcados en amarillo y rojo."),"\n"),"\n",l.createElement(n.li,null,"\n",l.createElement(n.p,null,"Pasa el cursor por encima de algunos de los iconos para ver información sobre la tecnología en la que están basados."),"\n",l.createElement(n.p,null,"Por ejemplo, podemos ver que la base de datos ",l.createElement(n.strong,null,"catalogue")," está construida sobre MongoDB."),"\n",l.createElement(n.img,{src:"/1685001736456.61041328883/dependencies-hover.png",alt:""}),"\n",l.createElement(a,{text:"Hay una pregunta de test relacionada con los gráficos de dependencia"}),"\n"),"\n"),"\n"),l.createElement(n.section,{className:"heading","data-heading-rank":"2","aria-labelledby":"evaluar-automáticamente-eventos-y-alertas"},l.createElement(n.h2,{id:"evaluar-automáticamente-eventos-y-alertas"},l.createElement(n.a,{href:"#evaluar-automáticamente-eventos-y-alertas"},"Evaluar automáticamente eventos y alertas")),"\n",l.createElement(n.p,null,"Como normalmente no estarías mirando el panel de control cuando ocurre algo así, veamos el punto de vista del operador de SRE/IT cuando se produce un incidente."),"\n",l.createElement(n.p,null,"Acabamos de recibir una alerta de Instana de que se ha producido un aumento repentino de llamadas erróneas en nuestro servicio de ",l.createElement(n.strong,null,"discount"),", que forma parte de la aplicación de tienda robotizada."),"\n",l.createElement(n.p,null,"Aunque ahora mismo no lo tengo conectado, la alerta aparecería a través de uno de los canales de alerta configurables, como PagerDuty, Microsoft Teams, Slack y muchos otros (",l.createElement(n.a,{href:"https://www.instana.com/docs/events_alerts/alert-channels"},"lista completa"),")."),"\n",l.createElement(n.ol,null,"\n",l.createElement(n.li,null,"\n",l.createElement(n.p,null,"Haz clic en el icono ",l.createElement(n.strong,null,"Events")," (triángulo) del menú de la barra lateral de la izquierda."),"\n",l.createElement(n.img,{src:"/1685001736476.61081328889/sidebar_menu.png",alt:""}),"\n",l.createElement(n.p,null,"Instana agrupa automáticamente los eventos y problemas relacionados en incidentes."),"\n",l.createElement(n.p,null,"Determina qué eventos y/o problemas están relacionados utilizando el gráfico de dependencia dinámico que acabamos de ver."),"\n"),"\n"),"\n",l.createElement(n.p,null,"Instana también evalúa continuamente los grupos de eventos y problemas para determinar cuáles afectan a los usuarios o suponen un riesgo inminente de afectar a los usuarios."),"\n",l.createElement(n.p,null,"Instana alertará sobre esos eventos, por lo que, como operador de SRE/IT, no se le interrumpirá constantemente por cosas que no son muy importantes."),"\n",l.createElement(n.p,null,"Entremos en los detalles de este incidente."),"\n"),l.createElement(n.section,{className:"heading","data-heading-rank":"2","aria-labelledby":"inspección-de-los-detalles-de-los-incidentes-auto-correlacionados"},l.createElement(n.h2,{id:"inspección-de-los-detalles-de-los-incidentes-auto-correlacionados"},l.createElement(n.a,{href:"#inspección-de-los-detalles-de-los-incidentes-auto-correlacionados"},"Inspección de los detalles de los incidentes auto-correlacionados")),"\n",l.createElement(n.p,null,"Instana reconoció que el aumento repentino de llamadas erróneas era algo importante para alertar, por lo que no tuvimos que hacer ninguna configuración ni establecer límites para obtener esta alerta.",l.createElement(n.br),"\n","Hagamos clic en la incidencia del servicio ",l.createElement(n.strong,null,"discount")," para obtener más detalles."),"\n",l.createElement(n.ol,null,"\n",l.createElement(n.li,null,"\n",l.createElement(n.p,null,"Haga clic en la incidencia llamada ",l.createElement(n.strong,null,"Sudden increase in the number of erroneous calls")," en el servicio ",l.createElement(n.strong,null,"discount"),"."),"\n",l.createElement(n.img,{src:"/1685001736468.61061328886/event_page.png",alt:""}),"\n"),"\n"),"\n",l.createElement(n.p,null,"Ahora podemos ver una cronología del incidente, el evento que provocó que Instana creara el incidente y todos los eventos relacionados."),"\n",l.createElement(n.ol,{start:"2"},"\n",l.createElement(n.li,null,"\n",l.createElement(n.p,null,"Pase el cursor por encima para mostrar ",l.createElement(n.strong,null,"Incident Timeline"),", ",l.createElement(n.strong,null,"Triggering Event")," y ",l.createElement(n.strong,null,"Related Events"),"."),"\n",l.createElement(n.img,{src:"/1685001736476.61081328888/incident_details_screen.png",alt:""}),"\n",l.createElement(a,{text:"Hay una pregunta relacionada con el widget 'Eventos relacionados'"}),"\n"),"\n"),"\n"),l.createElement(n.section,{className:"heading","data-heading-rank":"2","aria-labelledby":"depurando-el-incidente-inspeccionando-las-llamadas"},l.createElement(n.h2,{id:"depurando-el-incidente-inspeccionando-las-llamadas"},l.createElement(n.a,{href:"#depurando-el-incidente-inspeccionando-las-llamadas"},"Depurando el incidente inspeccionando las llamadas")),"\n",l.createElement(n.p,null,"Inspeccionando los eventos relacionados, parece que la terminación anormal de la base de datos MySQL causó el problema."),"\n",l.createElement(n.p,null,"Podemos entrar en más detalle sobre cada llamada que falló al conectarse a la base de datos."),"\n",l.createElement(n.ol,null,"\n",l.createElement(n.li,null,"\n",l.createElement(n.p,null,"En ",l.createElement(n.strong,null,"Related Events"),", haga clic en el evento que dice ",l.createElement(n.strong,null,"Sudden increase in the number of erroneous calls")," (1). A continuación, haga clic en ",l.createElement(n.strong,null,"Analyze Calls")," (2)."),"\n",l.createElement(n.img,{src:"/1685001736472.61081328887/events.png",alt:""}),"\n"),"\n",l.createElement(n.li,null,"\n",l.createElement(n.p,null,"Haga clic en la lista de grupos del primer punto final (1). A continuación, haga clic en la primera llamada (2) de la lista de llamadas."),"\n",l.createElement(n.p,null,"Todas las llamadas se agrupan por punto final. Sólo se muestra un endpoint, pero si hubiera más vería una lista aquí."),"\n"),"\n"),"\n",l.createElement(n.p,null,"Instana descubre y mapea automáticamente los puntos finales. Podemos entrar en los detalles de cada llamada errónea a MySQL a través de este endpoint (CONNECT)."),"\n",l.createElement(n.p,null,"Entrar en la traza real para una petición que resultó en un error nos ayudará a confirmar que ",l.createElement(n.strong,null,"MySQL")," es realmente la fuente del incidente."),"\n",l.createElement(n.img,{src:"/1685001736464.61061328885/endpoint_connect.png",alt:""}),"\n"),l.createElement(n.section,{className:"heading","data-heading-rank":"2","aria-labelledby":"profundizando-con-las-trazas-de-extremo-a-extremo"},l.createElement(n.h2,{id:"profundizando-con-las-trazas-de-extremo-a-extremo"},l.createElement(n.a,{href:"#profundizando-con-las-trazas-de-extremo-a-extremo"},"Profundizando con las trazas de extremo a extremo")),"\n",l.createElement(n.p,null,"Ahora que hemos hecho clic en una llamada individual, en este caso, la primera llamada de la lista, podemos ver la llamada en el contexto de la traza de extremo a extremo."),"\n",l.createElement(n.ol,null,"\n",l.createElement(n.li,null,"\n",l.createElement(n.p,null,"Seleccione el área central del panel de control que muestra los elementos de la primera llamada de la lista. Tendrá que bajar hasta la vista de línea de tiempo y, a continuación, cambiar el foco a la columna de la derecha."),"\n",l.createElement(n.img,{src:"/1685001736456.61041328882/call_timeline.png",alt:""}),"\n",l.createElement(a,{text:"Hay una pregunta relacionada con la página 'Unbounded Analytics'"}),"\n"),"\n"),"\n",l.createElement(n.p,null,"Podemos ver dónde comenzó la solicitud y cada llamada que se hizo en el proceso."),"\n",l.createElement(n.p,null,"La vista ",l.createElement(n.strong,null,"Timeline")," ofrece una visión rápida del tiempo empleado en cada tramo, así como indicadores clave de rendimiento, como el número de llamadas erróneas en esta traza, el número de registros de advertencia y la latencia total."),"\n",l.createElement(n.p,null,"Todo se presenta en un panel visual de fácil navegación, de modo que podemos profundizar en información cada vez más detallada para localizar el problema, sin necesidad de utilizar varias herramientas ni de navegar de un lado a otro por montones de paneles."),"\n",l.createElement(n.ol,{start:"2"},"\n",l.createElement(n.li,null,"\n",l.createElement(n.p,null,"En la pila de llamadas [desplazarse a la columna derecha], podemos hacer clic en cada tramo para ver más información, incluido el seguimiento completo de la pila."),"\n",l.createElement(n.p,null,"Podemos ver el origen, en este caso el servicio ",l.createElement(n.em,null,"discount"),", y [desplazar hacia abajo] el destino, que en este caso es ",l.createElement(n.em,null,"CONNECT")," de MySQL."),"\n",l.createElement(n.p,null,"Es útil tener este contexto porque podemos ver fácilmente cómo las llamadas van de un servicio a otro, simplemente haciendo clic en ellas. También podemos ver cómo el error (",l.createElement(n.strong,null,"triángulo rojo"),") se propaga por la pila de llamadas, en este caso empezando por la base de datos MySQL."),"\n"),"\n")))}var o=function(e){void 0===e&&(e={});const{wrapper:n}=Object.assign({},(0,t.ah)(),e.components);return n?l.createElement(n,e,l.createElement(r,e)):r(e)};var c=a(4184),i=a.n(c),s=a(4690),m=a(1140),d=a(2565),u=a(8531),p=a(3383),E=a(7315);const g=e=>{const{data:{mdx:{tableOfContents:{items:n},frontmatter:{toc:a=!0,title:t,timeToComplete:r,updated:o}}},children:c}=e,s=(0,l.useRef)(null),{0:g}=(0,l.useState)(""),h=(null===a||a)&&n;return l.createElement(l.Fragment,null,l.createElement(m.Z,{timeToComplete:r,updated:o},n[0].title||t||""),l.createElement(u.Z,{className:E.YS},l.createElement("article",{className:i()(E.Y2,!h&&E.ey),ref:s},l.createElement(d.Z,{components:{h1:()=>null}},c)),h&&l.createElement(p.Z,{itemsList:n,maxDepth:2,currSection:g})))},h=e=>{const{location:{pathname:n},data:{mdx:{frontmatter:{title:a},tableOfContents:{items:t}}}}=e;return l.createElement(s.Z,{pathname:n,title:a||t[0].title||void 0})};function v(e){return l.createElement(g,e,l.createElement(o,e))}},2565:function(e,n,a){a.d(n,{Z:function(){return c}});var t=a(7294),l=a(1151),r=a(987);const o={table:r.y6,a:r.IW,blockquote:r.R4,SubHeader:r.bU,img:r.fb,code:r.dn,QuizAlert:r.SA};var c=(0,t.memo)((function(e){let{children:n,components:a={}}=e;return t.createElement(l.Zo,{components:{...o,...a}},n)}))},4690:function(e,n,a){var t=a(7294),l=a(1072),r=a(2401);n.Z=e=>{const{title:n,description:a,pathname:o,children:c}=e,{description:i,title:s,origin:m}=(0,r.Z)(),{i18n:{language:d}}=(0,l.$G)(),u={title:n||s,description:a||i,url:""+m+(o||"")};return t.createElement(t.Fragment,null,t.createElement("html",{lang:d}),t.createElement("link",{rel:"icon",href:"data:image/svg+xml,<svg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 100 100'><text y='0.9em' font-size='90'>🦺</text></svg>"}),t.createElement("title",null,u.title),t.createElement("link",{rel:"canonical",href:u.url}),t.createElement("meta",{name:"description",content:u.description}),t.createElement("meta",{property:"og:title",content:u.title}),t.createElement("meta",{property:"og:url",content:u.url}),t.createElement("meta",{property:"og:type",content:"website"}),t.createElement("meta",{property:"og:description",content:u.description}),t.createElement("meta",{name:"twitter:card",content:"summary"}),t.createElement("meta",{name:"twitter:title",content:u.title}),t.createElement("meta",{name:"twitter:url",content:u.url}),t.createElement("meta",{name:"twitter:description",content:u.description}),t.createElement("meta",{name:"twitter:site",content:"https://www.ibm.com"}),t.createElement("meta",{name:"twitter:creator",content:"@IBM"}),c)}},3383:function(e,n,a){a.d(n,{Z:function(){return s}});var t=a(7294),l=a(7500),r=a(4184),o=a.n(r),c=a(6488);const i=function(e,n,a){return void 0===n&&(n=[]),void 0===a&&(a=0),e.forEach((e=>{const{title:t,url:l,items:r}=e;n.splice(n.length,0,{depth:a,title:t,url:l}),r&&r.length>0&&i(r,n,a+1)})),n};var s=e=>{const{itemsList:n}=e,a=(0,t.useMemo)((()=>i(n[0].items||[])),[n]),r=(0,c.Z)("h1[id],h2[id]",{threshold:[0,1],rootMargin:"-48px 0px -90% 0px"});return a.length<1?null:t.createElement("nav",{className:"TableOfContents-module--toc--54d35"},t.createElement("div",{className:"TableOfContents-module--tocStack--90609"},t.createElement("h6",{className:"TableOfContents-module--tocHeader--05956"},t.createElement(l.rU,{to:"#",replace:!0},"On this page")),a.map(((e,n)=>{let{title:a,url:l}=e;return t.createElement("a",{className:o()("TableOfContents-module--link--b292b",r===l.substring(1)&&"TableOfContents-module--activeItem--3869f"),key:n,href:l},a)}))))}},7315:function(e,n,a){a.d(n,{Y2:function(){return t},YS:function(){return r},ey:function(){return l}});var t="{mdx-fields__slug}-module--article--e3d5a",l="{mdx-fields__slug}-module--noToc--82387",r="{mdx-fields__slug}-module--wrapper--58e72"},1151:function(e,n,a){a.d(n,{Zo:function(){return c},ah:function(){return r}});var t=a(7294);const l=t.createContext({});function r(e){const n=t.useContext(l);return t.useMemo((()=>"function"==typeof e?e(n):{...n,...e}),[n,e])}const o={};function c({components:e,children:n,disableParentContext:a}){let c;return c=a?"function"==typeof e?e({}):e||o:r(e),t.createElement(l.Provider,{value:c},n)}}}]);
//# sourceMappingURL=component---src-pages-mdx-fields-slug-tsx-content-file-path-content-instana-102-es-md-45a06a7a06c36192031f.js.map