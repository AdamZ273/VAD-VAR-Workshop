"use strict";(self.webpackChunkvad_var_site=self.webpackChunkvad_var_site||[]).push([[9725],{5416:function(e,a,n){n.r(a),n.d(a,{Head:function(){return h},default:function(){return v}});var t=n(1151),l=n(7294);function r(e){const a=Object.assign({section:"section",h1:"h1",h2:"h2",a:"a",ol:"ol",li:"li",p:"p",strong:"strong",img:"img",br:"br",em:"em"},(0,t.ah)(),e.components),{QuizAlert:n}=a;return n||function(e,a){throw new Error("Expected "+(a?"component":"object")+" `"+e+"` to be defined: you likely forgot to import, pass, or provide it.")}("QuizAlert",!0),l.createElement(a.section,{className:"heading","data-heading-rank":"1","aria-labelledby":"102-monitorización-de-llamadas--rastreo-de-aplicaciones"},l.createElement(a.h1,{id:"102-monitorización-de-llamadas--rastreo-de-aplicaciones"},"102: Monitorización de llamadas + Rastreo de aplicaciones"),"\n",l.createElement(a.section,{className:"heading","data-heading-rank":"2","aria-labelledby":"navegue-hasta-las-dependencias-de-robotshop"},l.createElement(a.h2,{id:"navegue-hasta-las-dependencias-de-robotshop"},l.createElement(a.a,{href:"#navegue-hasta-las-dependencias-de-robotshop"},"Navegue hasta las dependencias de RobotShop")),"\n",l.createElement(a.ol,null,"\n",l.createElement(a.li,null,"\n",l.createElement(a.p,null,"Empezando por navegar al ",l.createElement(a.a,{href:"https://play-with.instana.io/"},"Instana playground")),"\n",l.createElement(a.p,null,"Vamos a utilizar Instana para ver todas las dependencias dentro de la aplicación RobotShop."),"\n",l.createElement(a.p,null,"Instana descubre automáticamente las relaciones entre los servicios y los correlaciona en un gráfico dinámico."),"\n"),"\n",l.createElement(a.li,null,"\n",l.createElement(a.p,null,"En el menú de la barra lateral, haga clic en el icono ",l.createElement(a.strong,null,"Applications")," (1) y seleccione ",l.createElement(a.strong,null,"robot-shop with frontend")," (2)."),"\n",l.createElement(a.img,{src:"/1686471370413.52171108091/applications-robotshop.png",alt:""}),"\n"),"\n",l.createElement(a.li,null,"\n",l.createElement(a.p,null,"Haga clic en la pestaña ",l.createElement(a.strong,null,"Dependencies"),"."),"\n",l.createElement(a.img,{src:"/1686471370421.52171108094/dependencies.png",alt:""}),"\n",l.createElement(a.p,null,"Podemos ver que cada punto en movimiento representa una solicitud de llamada. Las solicitudes se mueven a través de la aplicación en tiempo real. Instana es capaz de hacer esto porque rastrea cada solicitud que fluye a través de la aplicación."),"\n",l.createElement(a.p,null,"Podemos decir que hay algunos problemas con la aplicación porque varios servicios están marcados en amarillo y rojo."),"\n"),"\n",l.createElement(a.li,null,"\n",l.createElement(a.p,null,"Pasa el cursor por encima de algunos de los iconos para ver información sobre la tecnología en la que están basados."),"\n",l.createElement(a.p,null,"Por ejemplo, podemos ver que la base de datos ",l.createElement(a.strong,null,"catalogue")," está construida sobre MongoDB."),"\n",l.createElement(a.img,{src:"/1686471370421.52171108093/dependencies-hover.png",alt:""}),"\n",l.createElement(n,{text:"Hay una pregunta de test relacionada con los gráficos de dependencia"}),"\n"),"\n"),"\n"),l.createElement(a.section,{className:"heading","data-heading-rank":"2","aria-labelledby":"evaluar-automáticamente-eventos-y-alertas"},l.createElement(a.h2,{id:"evaluar-automáticamente-eventos-y-alertas"},l.createElement(a.a,{href:"#evaluar-automáticamente-eventos-y-alertas"},"Evaluar automáticamente eventos y alertas")),"\n",l.createElement(a.p,null,"Como normalmente no estarías mirando el panel de control cuando ocurre algo así, veamos el punto de vista del operador de SRE/IT cuando se produce un incidente."),"\n",l.createElement(a.p,null,"Acabamos de recibir una alerta de Instana de que se ha producido un aumento repentino de llamadas erróneas en nuestro servicio de ",l.createElement(a.strong,null,"discount"),", que forma parte de la aplicación de tienda robotizada."),"\n",l.createElement(a.p,null,"Aunque ahora mismo no lo tengo conectado, la alerta aparecería a través de uno de los canales de alerta configurables, como PagerDuty, Microsoft Teams, Slack y muchos otros (",l.createElement(a.a,{href:"https://www.instana.com/docs/events_alerts/alert-channels"},"lista completa"),")."),"\n",l.createElement(a.ol,null,"\n",l.createElement(a.li,null,"\n",l.createElement(a.p,null,"Haz clic en el icono ",l.createElement(a.strong,null,"Events")," (triángulo) del menú de la barra lateral de la izquierda."),"\n",l.createElement(a.img,{src:"/1686471370441.5221108099/sidebar_menu.png",alt:""}),"\n",l.createElement(a.p,null,"Instana agrupa automáticamente los eventos y problemas relacionados en incidentes."),"\n",l.createElement(a.p,null,"Determina qué eventos y/o problemas están relacionados utilizando el gráfico de dependencia dinámico que acabamos de ver."),"\n"),"\n"),"\n",l.createElement(a.p,null,"Instana también evalúa continuamente los grupos de eventos y problemas para determinar cuáles afectan a los usuarios o suponen un riesgo inminente de afectar a los usuarios."),"\n",l.createElement(a.p,null,"Instana alertará sobre esos eventos, por lo que, como operador de SRE/IT, no se le interrumpirá constantemente por cosas que no son muy importantes."),"\n",l.createElement(a.p,null,"Entremos en los detalles de este incidente."),"\n"),l.createElement(a.section,{className:"heading","data-heading-rank":"2","aria-labelledby":"inspección-de-los-detalles-de-los-incidentes-auto-correlacionados"},l.createElement(a.h2,{id:"inspección-de-los-detalles-de-los-incidentes-auto-correlacionados"},l.createElement(a.a,{href:"#inspección-de-los-detalles-de-los-incidentes-auto-correlacionados"},"Inspección de los detalles de los incidentes auto-correlacionados")),"\n",l.createElement(a.p,null,"Instana reconoció que el aumento repentino de llamadas erróneas era algo importante para alertar, por lo que no tuvimos que hacer ninguna configuración ni establecer límites para obtener esta alerta.",l.createElement(a.br),"\n","Hagamos clic en la incidencia del servicio ",l.createElement(a.strong,null,"discount")," para obtener más detalles."),"\n",l.createElement(a.ol,null,"\n",l.createElement(a.li,null,"\n",l.createElement(a.p,null,"Haga clic en la incidencia llamada ",l.createElement(a.strong,null,"Sudden increase in the number of erroneous calls")," en el servicio ",l.createElement(a.strong,null,"discount"),"."),"\n",l.createElement(a.img,{src:"/1686471370429.5221108096/event_page.png",alt:""}),"\n"),"\n"),"\n",l.createElement(a.p,null,"Ahora podemos ver una cronología del incidente, el evento que provocó que Instana creara el incidente y todos los eventos relacionados."),"\n",l.createElement(a.ol,{start:"2"},"\n",l.createElement(a.li,null,"\n",l.createElement(a.p,null,"Pase el cursor por encima para mostrar ",l.createElement(a.strong,null,"Incident Timeline"),", ",l.createElement(a.strong,null,"Triggering Event")," y ",l.createElement(a.strong,null,"Related Events"),"."),"\n",l.createElement(a.img,{src:"/1686471370437.5221108098/incident_details_screen.png",alt:""}),"\n",l.createElement(n,{text:"Hay una pregunta relacionada con el widget 'Eventos relacionados'"}),"\n"),"\n"),"\n"),l.createElement(a.section,{className:"heading","data-heading-rank":"2","aria-labelledby":"depurando-el-incidente-inspeccionando-las-llamadas"},l.createElement(a.h2,{id:"depurando-el-incidente-inspeccionando-las-llamadas"},l.createElement(a.a,{href:"#depurando-el-incidente-inspeccionando-las-llamadas"},"Depurando el incidente inspeccionando las llamadas")),"\n",l.createElement(a.p,null,"Inspeccionando los eventos relacionados, parece que la terminación anormal de la base de datos MySQL causó el problema."),"\n",l.createElement(a.p,null,"Podemos entrar en más detalle sobre cada llamada que falló al conectarse a la base de datos."),"\n",l.createElement(a.ol,null,"\n",l.createElement(a.li,null,"\n",l.createElement(a.p,null,"En ",l.createElement(a.strong,null,"Related Events"),", haga clic en el evento que dice ",l.createElement(a.strong,null,"Sudden increase in the number of erroneous calls")," (1). A continuación, haga clic en ",l.createElement(a.strong,null,"Analyze Calls")," (2)."),"\n",l.createElement(a.img,{src:"/1686471370433.5221108097/events.png",alt:""}),"\n"),"\n",l.createElement(a.li,null,"\n",l.createElement(a.p,null,"Haga clic en la lista de grupos del primer punto final (1). A continuación, haga clic en la primera llamada (2) de la lista de llamadas."),"\n",l.createElement(a.p,null,"Todas las llamadas se agrupan por punto final. Sólo se muestra un endpoint, pero si hubiera más vería una lista aquí."),"\n"),"\n"),"\n",l.createElement(a.p,null,"Instana descubre y mapea automáticamente los puntos finales. Podemos entrar en los detalles de cada llamada errónea a MySQL a través de este endpoint (CONNECT)."),"\n",l.createElement(a.p,null,"Entrar en la traza real para una petición que resultó en un error nos ayudará a confirmar que ",l.createElement(a.strong,null,"MySQL")," es realmente la fuente del incidente."),"\n",l.createElement(a.img,{src:"/1686471370425.5221108095/endpoint_connect.png",alt:""}),"\n"),l.createElement(a.section,{className:"heading","data-heading-rank":"2","aria-labelledby":"profundizando-con-las-trazas-de-extremo-a-extremo"},l.createElement(a.h2,{id:"profundizando-con-las-trazas-de-extremo-a-extremo"},l.createElement(a.a,{href:"#profundizando-con-las-trazas-de-extremo-a-extremo"},"Profundizando con las trazas de extremo a extremo")),"\n",l.createElement(a.p,null,"Ahora que hemos hecho clic en una llamada individual, en este caso, la primera llamada de la lista, podemos ver la llamada en el contexto de la traza de extremo a extremo."),"\n",l.createElement(a.ol,null,"\n",l.createElement(a.li,null,"\n",l.createElement(a.p,null,"Seleccione el área central del panel de control que muestra los elementos de la primera llamada de la lista. Tendrá que bajar hasta la vista de línea de tiempo y, a continuación, cambiar el foco a la columna de la derecha."),"\n",l.createElement(a.img,{src:"/1686471370417.52171108092/call_timeline.png",alt:""}),"\n",l.createElement(n,{text:"Hay una pregunta relacionada con la página 'Unbounded Analytics'"}),"\n"),"\n"),"\n",l.createElement(a.p,null,"Podemos ver dónde comenzó la solicitud y cada llamada que se hizo en el proceso."),"\n",l.createElement(a.p,null,"La vista ",l.createElement(a.strong,null,"Timeline")," ofrece una visión rápida del tiempo empleado en cada tramo, así como indicadores clave de rendimiento, como el número de llamadas erróneas en esta traza, el número de registros de advertencia y la latencia total."),"\n",l.createElement(a.p,null,"Todo se presenta en un panel visual de fácil navegación, de modo que podemos profundizar en información cada vez más detallada para localizar el problema, sin necesidad de utilizar varias herramientas ni de navegar de un lado a otro por montones de paneles."),"\n",l.createElement(a.ol,{start:"2"},"\n",l.createElement(a.li,null,"\n",l.createElement(a.p,null,"En la pila de llamadas [desplazarse a la columna derecha], podemos hacer clic en cada tramo para ver más información, incluido el seguimiento completo de la pila."),"\n",l.createElement(a.p,null,"Podemos ver el origen, en este caso el servicio ",l.createElement(a.em,null,"discount"),", y [desplazar hacia abajo] el destino, que en este caso es ",l.createElement(a.em,null,"CONNECT")," de MySQL."),"\n",l.createElement(a.p,null,"Es útil tener este contexto porque podemos ver fácilmente cómo las llamadas van de un servicio a otro, simplemente haciendo clic en ellas. También podemos ver cómo el error (",l.createElement(a.strong,null,"triángulo rojo"),") se propaga por la pila de llamadas, en este caso empezando por la base de datos MySQL."),"\n"),"\n")))}var o=function(e){void 0===e&&(e={});const{wrapper:a}=Object.assign({},(0,t.ah)(),e.components);return a?l.createElement(a,e,l.createElement(r,e)):r(e)};var c=n(4184),s=n.n(c),i=n(4690),d=n(1140),m=n(2565),u=n(8531),p=n(3383),E=n(7315);const g=e=>{const{data:{mdx:{tableOfContents:{items:a},frontmatter:{toc:n=!0,title:t,timeToComplete:r,updated:o}}},children:c}=e,i=(0,l.useRef)(null),{0:g}=(0,l.useState)(""),h=(null===n||n)&&a;return l.createElement(l.Fragment,null,l.createElement(d.Z,{timeToComplete:r,updated:o},a[0].title||t||""),l.createElement(u.Z,{className:E.YS},l.createElement("article",{className:s()(E.Y2,!h&&E.ey),ref:i},l.createElement(m.Z,{components:{h1:()=>null}},c)),h&&l.createElement(p.Z,{itemsList:a,maxDepth:2,currSection:g})))},h=e=>{const{location:{pathname:a},data:{mdx:{frontmatter:{title:n},tableOfContents:{items:t}}}}=e;return l.createElement(i.Z,{pathname:a,title:n||t[0].title||void 0})};function v(e){return l.createElement(g,e,l.createElement(o,e))}},2565:function(e,a,n){n.d(a,{Z:function(){return c}});var t=n(7294),l=n(1151),r=n(7563);const o={table:r.y6,a:r.IW,blockquote:r.R4,SubHeader:r.bU,img:r.fb,code:r.dn,QuizAlert:r.SA,Danger:r.b0,Warning:r.v3,CopyText:r.O5};var c=(0,t.memo)((function(e){let{children:a,components:n={}}=e;return t.createElement(l.Zo,{components:{...o,...n}},a)}))},3383:function(e,a,n){n.d(a,{Z:function(){return i}});var t=n(7294),l=n(7500),r=n(4184),o=n.n(r),c=n(6488);const s=function(e,a,n){return void 0===a&&(a=[]),void 0===n&&(n=0),e.forEach((e=>{const{title:t,url:l,items:r}=e;a.splice(a.length,0,{depth:n,title:t,url:l}),r&&r.length>0&&s(r,a,n+1)})),a};var i=e=>{const{itemsList:a}=e,n=(0,t.useMemo)((()=>s(a[0].items||[])),[a]),r=(0,c.Z)("h1[id],h2[id]",{threshold:[0,1],rootMargin:"-48px 0px -90% 0px"});return n.length<1?null:t.createElement("nav",{className:"TableOfContents-module--toc--54d35"},t.createElement("div",{className:"TableOfContents-module--tocStack--90609"},t.createElement("h6",{className:"TableOfContents-module--tocHeader--05956"},t.createElement(l.rU,{to:"#",replace:!0},"On this page")),n.map(((e,a)=>{let{title:n,url:l}=e;return t.createElement("a",{className:o()("TableOfContents-module--link--b292b",r===l.substring(1)&&"TableOfContents-module--activeItem--3869f"),key:a,href:l},n)}))))}},7315:function(e,a,n){n.d(a,{Y2:function(){return t},YS:function(){return r},ey:function(){return l}});var t="{mdx-fields__slug}-module--article--e3d5a",l="{mdx-fields__slug}-module--noToc--82387",r="{mdx-fields__slug}-module--wrapper--58e72"},1151:function(e,a,n){n.d(a,{Zo:function(){return c},ah:function(){return r}});var t=n(7294);const l=t.createContext({});function r(e){const a=t.useContext(l);return t.useMemo((()=>"function"==typeof e?e(a):{...a,...e}),[a,e])}const o={};function c({components:e,children:a,disableParentContext:n}){let c;return c=n?"function"==typeof e?e({}):e||o:r(e),t.createElement(l.Provider,{value:c},a)}}}]);
//# sourceMappingURL=component---src-pages-mdx-fields-slug-tsx-content-file-path-content-instana-102-es-md-8ab079b8e55934364cbd.js.map