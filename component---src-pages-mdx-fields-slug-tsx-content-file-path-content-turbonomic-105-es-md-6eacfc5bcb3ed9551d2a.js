"use strict";(self.webpackChunkvad_var_site=self.webpackChunkvad_var_site||[]).push([[5702],{7173:function(e,n,a){a.r(n),a.d(n,{Head:function(){return h},default:function(){return b}});var t=a(1151),l=a(7294);function r(e){const n=Object.assign({section:"section",h1:"h1",h2:"h2",a:"a",p:"p",ul:"ul",li:"li",strong:"strong",h3:"h3",ol:"ol",img:"img",h4:"h4"},(0,t.ah)(),e.components);return l.createElement(n.section,{className:"heading","data-heading-rank":"1","aria-labelledby":"105-planificación-y-paneles-personalizados"},l.createElement(n.h1,{id:"105-planificación-y-paneles-personalizados"},"105: Planificación y paneles personalizados"),"\n",l.createElement(n.section,{className:"heading","data-heading-rank":"2","aria-labelledby":"planificación"},l.createElement(n.h2,{id:"planificación"},l.createElement(n.a,{href:"#planificación"},"Planificación")),"\n",l.createElement(n.p,null,"La página de planificación de Turbonomic se utiliza para ejecutar simulaciones de escenarios hipotéticos que le ayudarán a conocer los resultados de determinados cambios antes de realizarlos. Un plan no afecta a los ambientes en tiempo real."),"\n",l.createElement(n.p,null,"Al hacer clic en Run (Ejecutar) para iniciar un plan, ocurre lo siguiente:"),"\n",l.createElement(n.ul,null,"\n",l.createElement(n.li,null,"Las entidades realizan sus acciones actuales en el mercado planificado"),"\n",l.createElement(n.li,null,"Se recalcula la utilización de las entidades"),"\n",l.createElement(n.li,null,"Las entidades siguen actuando"),"\n",l.createElement(n.li,null,"La utilización se recalcula continuamente"),"\n",l.createElement(n.li,null,"Este proceso continúa hasta que ya no hay entidades que quieran actuar","\n",l.createElement(n.ul,null,"\n",l.createElement(n.li,null,"En este punto, el plan ha ",l.createElement(n.strong,null,"convergido"),"."),"\n",l.createElement(n.li,null,"¡Las entidades han alcanzado un ",l.createElement(n.strong,null,"Estado deseado"),"!"),"\n"),"\n"),"\n"),"\n",l.createElement(n.p,null,"Hay muchos escenarios en los que puede aprovechar la capacidad de planificación de Turbonomic, pero en este laboratorio nos centraremos en la migración a la Cloud."),"\n",l.createElement(n.section,{className:"heading","data-heading-rank":"3","aria-labelledby":"migrar-a-la-cloud"},l.createElement(n.h3,{id:"migrar-a-la-cloud"},l.createElement(n.a,{href:"#migrar-a-la-cloud"},"Migrar a la Cloud")),"\n",l.createElement(n.p,null,"Un plan Migrar a Cloud simula la migración de máquinas virtuales on-prem a Cloud, o la migración de máquinas virtuales de un proveedor de Cloud a otro."),"\n",l.createElement(n.p,null,"Este plan se centra en optimizar el rendimiento y los costes eligiendo los recursos Cloud más adecuados para sus máquinas virtuales y los volúmenes que utilizan."),"\n",l.createElement(n.p,null,"Para optimizar aún más sus costes, el plan puede recomendar el traslado de cargas de trabajo de precios bajo demanda a precios con descuento y la adquisición de más descuentos."),"\n",l.createElement(n.p,null,"El plan calcula los costes según la facturación y los ajustes de precios que hayas negociado con tu proveedor de Cloud. Los costes incluyen los de computación, servicios (como los servicios IP) y licencias."),"\n",l.createElement(n.p,null,"El plan también calcula las compras con descuento para las máquinas virtuales que pueden beneficiarse de precios con descuento."),"\n",l.createElement(n.p,null,"En este laboratorio, ejecutará un escenario en el que moverá VMs on-prem a AWS."),"\n",l.createElement(n.ol,null,"\n",l.createElement(n.li,null,"En el navegador, haga clic en el botón ",l.createElement(n.strong,null,"Plan")," con el icono de una bombilla. 2. Luego, en la página ",l.createElement(n.strong,null,"Plan Management (Gestión de Planes)"),", arriba a la derecha, haga clic en ",l.createElement(n.strong,null,"New Plan (Nuevo Plan)"),"."),"\n"),"\n",l.createElement(n.img,{src:"/1685709459011.509791598/plan1.png",alt:""}),"\n",l.createElement(n.ol,{start:"2"},"\n",l.createElement(n.li,null,"En la lista, seleccione ",l.createElement(n.strong,null,"Migrate to the cloud (Migrar a la Cloud)"),"."),"\n"),"\n",l.createElement(n.img,{src:"/1685709458999.5088791591/cloud1.png",alt:""}),"\n",l.createElement(n.ol,{start:"3"},"\n",l.createElement(n.li,null,"En la página recién abierta, haz clic en ",l.createElement(n.strong,null,"Clusters")," bajo ",l.createElement(n.strong,null,"On-prem")," (ya que queremos migrar máquinas virtuales on-prem a Cloud). Selecciona el cluster llamado ",l.createElement(n.strong,null,"vsphere-dc20-DC01/vsphere-dc20-Clus01")," Luego haz click en ",l.createElement(n.strong,null,"Next: Where to migrate (Dónde migrar)"),"."),"\n"),"\n",l.createElement(n.img,{src:"/1685709459003.509791592/cloud2.png",alt:""}),"\n",l.createElement(n.ol,{start:"4"},"\n",l.createElement(n.li,null,"Haga clic en ",l.createElement(n.strong,null,"AWS Accounts")," y seleccione el número de cuenta ",l.createElement(n.strong,null,"136039713045"),". Luego, haga clic en ",l.createElement(n.strong,null,"Next: Región"),"."),"\n"),"\n",l.createElement(n.img,{src:"/1685709459003.509791593/cloud3.png",alt:""}),"\n",l.createElement(n.ol,{start:"5"},"\n",l.createElement(n.li,null,"En esta parte puedes seleccionar una región dentro de tu cuenta de AWS a la que te gustaría mover tus VMs on-prem en el futuro y quieres ver si es una ubicación adecuada. Dado que vas a trasladar un clúster completo, te recomendamos que elijas una región con un número reducido de máquinas virtuales. Seleccione ",l.createElement(n.strong,null,"aws-US East (N. Virginia)"),". A continuación, haga clic en ",l.createElement(n.strong,null,"Next: Licensing (Siguiente: Licencias)"),"."),"\n"),"\n",l.createElement(n.img,{src:"/1685709459003.509791594/cloud4.png",alt:""}),"\n",l.createElement(n.ol,{start:"6"},"\n",l.createElement(n.li,null,"En esta sección puedes elegir si quieres que el plan incluya o no el coste del SO como parte del plan de migración. Para este laboratorio asumiremos que tus licencias de SO on-prem son intransferibles por lo que incluiremos el coste en el plan de migración. Una vez hecho esto, seleccione ",l.createElement(n.strong,null,"Next: RI Settings (Siguiente: Configuración RI)"),"."),"\n"),"\n",l.createElement(n.img,{src:"/1685709459007.509791595/cloud5.png",alt:""}),"\n",l.createElement(n.ol,{start:"7"},"\n",l.createElement(n.li,null,"En esta sección puedes elegir la configuración de tu instancia reservada (RI). Puedes elegir diferentes configuraciones de tu perfil de AWS que mejor se adapten a tus necesidades y si hay algún descuento disponible puedes elegirlo para este plan. Para este laboratorio, deja todas las configuraciones por defecto y haz click en ",l.createElement(n.strong,null,"Run Plan"),"."),"\n"),"\n",l.createElement(n.img,{src:"/1685709459007.509791596/cloud6.png",alt:""}),"\n",l.createElement(n.p,null,"El plan puede tardar unos minutos en ejecutarse. Una vez que el plan haya convergido, los resultados aparecerán en la pantalla de la derecha. El plan ofrecerá dos rutas para migrar sus máquinas virtuales on-prem a la Cloud."),"\n",l.createElement(n.ul,null,"\n",l.createElement(n.li,null,l.createElement(n.strong,null,"Lift and Shift"),": este plan intenta igualar tus capacidades on-prem con lo que existe en la región Cloud. Por tanto, aplica cambios mínimos a las máquinas virtuales migradas."),"\n",l.createElement(n.li,null,l.createElement(n.strong,null,"Optimizar"),": este plan no sólo simula la migración a la región Cloud de su elección, sino que también optimiza esta migración. Examina la utilización histórica de las máquinas virtuales y el almacenamiento para seleccionar el mejor tipo de instancia y nivel de almacenamiento para cada máquina virtual y disco."),"\n"),"\n",l.createElement(n.p,null,"El plan también le proporcionará una lista de acciones necesarias para realizar esta migración y su coste asociado."),"\n",l.createElement(n.p,null,"Explore más a fondo los resultados del plan. Observe cómo la migración optimizada hará que las máquinas virtuales funcionen de forma más eficiente y ahorrará alrededor de un 27% en el coste en comparación con si simplemente realiza un levantamiento y cambio."),"\n",l.createElement(n.img,{src:"/1685709459011.509791597/cloud7.png",alt:""}),"\n")),l.createElement(n.section,{className:"heading","data-heading-rank":"2","aria-labelledby":"paneles-personalizados"},l.createElement(n.h2,{id:"paneles-personalizados"},l.createElement(n.a,{href:"#paneles-personalizados"},"Paneles personalizados")),"\n",l.createElement(n.p,null,"Un panel personalizado es una vista que creas para centrarte en aspectos específicos de tu ambiente. Puede crear paneles que sean privados para su cuenta de usuario o paneles que sean visibles para cualquier usuario que inicie sesión en su implementación de Turbonomic."),"\n",l.createElement(n.section,{className:"heading","data-heading-rank":"3","aria-labelledby":"creación-de-un-panel-personalizado"},l.createElement(n.h3,{id:"creación-de-un-panel-personalizado"},l.createElement(n.a,{href:"#creación-de-un-panel-personalizado"},"Creación de un Panel personalizado")),"\n",l.createElement(n.ol,null,"\n",l.createElement(n.li,null,"Para crear un Panel personalizado, Haga clic en ",l.createElement(n.strong,null,"Dashboards (Paneles)")," como se muestra a continuación:"),"\n"),"\n",l.createElement(n.img,{src:"/1685709459011.509791599/turbo_custom_dashboard1.png",alt:""}),"\n",l.createElement(n.ol,{start:"2"},"\n",l.createElement(n.li,null,"Haga clic en ",l.createElement(n.strong,null,"NEW DASHBOARD")," para añadir un nuevo panel a su sesión de Turbonomic."),"\n"),"\n",l.createElement(n.img,{src:"/1685709459011.509791600/turbo_custom_dashboard2.png",alt:""}),"\n",l.createElement(n.ol,{start:"3"},"\n",l.createElement(n.li,null,"El panel aparece con un nombre predeterminado y sin widgets de gráficos. El intervalo de tiempo en el deslizador de tiempo se establece en 24 horas por defecto, como se muestra a continuación"),"\n"),"\n",l.createElement(n.img,{src:"/1685709459011.509791601/turbo_custom_dashboard3.gif",alt:""}),"\n",l.createElement(n.p,null,l.createElement(n.strong,null,"Haga clic en 1")," de la captura de pantalla anterior y asigne un nombre que describa el panel de control. Si va a compartir el panel con todos los usuarios de Turbonomic, el nombre les ayudará a decidir si quieren verlo."),"\n",l.createElement(n.p,null,"A continuación, haga clic en 2** Gear to change the setting (Engranaje para cambiar la configuración) en la captura de pantalla anterior para configurar el acceso al panel de control."),"\n",l.createElement(n.p,null,"El acceso al panel puede ser:"),"\n",l.createElement(n.ul,null,"\n",l.createElement(n.li,null,"\n",l.createElement(n.p,null,"Only Me (Solo yo): el panel solo está disponible para su cuenta de usuario de Turbonomic."),"\n"),"\n",l.createElement(n.li,null,"\n",l.createElement(n.p,null,"All Users (Todos los usuarios): todos los usuarios de Turbonomic pueden ver este panel."),"\n"),"\n"),"\n",l.createElement(n.img,{src:"/1685709459011.509791602/turbo_custom_dashboard4.png",alt:""}),"\n",l.createElement(n.ol,{start:"4"},"\n",l.createElement(n.li,null,"Añada widgets de gráficos al panel haciendo clic en ",l.createElement(n.strong,null,"ADD WIDGET"),"."),"\n"),"\n",l.createElement(n.p,null,"Personalizaremos este panel para mostrar ciertas métricas de la aplicación ",l.createElement(n.strong,null,"Quote Of The Day"),"."),"\n",l.createElement(n.section,{className:"heading","data-heading-rank":"4","aria-labelledby":"añadir-widget-de-salud"},l.createElement(n.h4,{id:"añadir-widget-de-salud"},l.createElement(n.a,{href:"#añadir-widget-de-salud"},"Añadir widget de salud")),"\n",l.createElement(n.ol,null,"\n",l.createElement(n.li,null,"Verá la pantalla por defecto con múltiples Galerías de Widgets como se muestra a continuación:"),"\n"),"\n",l.createElement(n.img,{src:"/1685709459015.509791612/turbo_custom_dashboard_main.png",alt:""}),"\n",l.createElement(n.ol,{start:"2"},"\n",l.createElement(n.li,null,"Escribe ",l.createElement(n.strong,null,"Health")," en la barra de búsqueda como se muestra a continuación y selecciona ese widget haciendo clic en cualquier lugar del espacio en blanco."),"\n"),"\n",l.createElement(n.img,{src:"/1685709459011.509791603/turbo_custom_dashboard_health.png",alt:""}),"\n",l.createElement(n.ol,{start:"3"},"\n",l.createElement(n.li,null,"En ",l.createElement(n.strong,null,"Scope (Ámbito)"),", ",l.createElement(n.strong,null,"Click to change scope (Haga clic para cambiar el ámbito)"),"."),"\n"),"\n",l.createElement(n.img,{src:"/1685709459011.509791604/turbo_custom_dashboard_health1.png",alt:""}),"\n",l.createElement(n.ol,{start:"4"},"\n",l.createElement(n.li,null,"A continuación, ",l.createElement(n.strong,null,"Select Scope (Seleccionar Ámbito)"),", asegúrese de que está en Entidades y seleccione ",l.createElement(n.strong,null,"Business Application (Aplicación Empresarial)")," como se muestra en la siguiente imagen. Siga el orden (1 a 3)"),"\n"),"\n",l.createElement(n.img,{src:"/1685709459011.509791605/turbo_custom_dashboard_health2.png",alt:""}),"\n",l.createElement(n.ol,{start:"5"},"\n",l.createElement(n.li,null,"A continuación, seleccione ",l.createElement(n.strong,null,"Quote of the Day")," en ",l.createElement(n.strong,null,"Business Application (Aplicación empresarial)"),"."),"\n"),"\n",l.createElement(n.img,{src:"/1685709459015.509791606/turbo_custom_dashboard_health3.png",alt:""}),"\n",l.createElement(n.ol,{start:"6"},"\n",l.createElement(n.li,null,"A continuación, seleccione ",l.createElement(n.strong,null,"Application Components")," de ",l.createElement(n.strong,null,"Entity Type"),"."),"\n"),"\n",l.createElement(n.img,{src:"/1685709459015.509791607/turbo_custom_dashboard_health4.png",alt:""}),"\n",l.createElement(n.ol,{start:"7"},"\n",l.createElement(n.li,null,"\n",l.createElement(n.ol,{start:"7"},"\n",l.createElement(n.li,null,"A continuación, seleccione ",l.createElement(n.strong,null,"Ring Chart (Gráfico circular)")," en ",l.createElement(n.strong,null,"Chart Type (Tipo de gráfico)"),"."),"\n"),"\n"),"\n"),"\n",l.createElement(n.img,{src:"/1685709459015.509791609/turbo_custom_dashboard_health5.png",alt:""}),"\n",l.createElement(n.ol,{start:"8"},"\n",l.createElement(n.li,null,"A continuación, haga clic en el botón ",l.createElement(n.strong,null,"Update Preview")," para ver el resultado y luego haga clic en ",l.createElement(n.strong,null,"Save")," en la parte inferior"),"\n"),"\n",l.createElement(n.img,{src:"/1685709459015.509791610/turbo_custom_dashboard_health7.png",alt:""}),"\n",l.createElement(n.ol,{start:"9"},"\n",l.createElement(n.li,null,"Por último, verá su widget publicado en su Panel personalizado"),"\n"),"\n",l.createElement(n.img,{src:"/1685709459015.509791611/turbo_custom_dashboard_health8.png",alt:""}),"\n",l.createElement(n.p,null,"Para obtener más información sobre los tipos de gráficos/widgets disponibles, consulte nuestra documentación haciendo ",l.createElement(n.a,{href:"https://www.ibm.com/docs/en/tarm/8.8.3?topic=views-chart-types"},"clic aquí"),".")))))}var c=function(e){void 0===e&&(e={});const{wrapper:n}=Object.assign({},(0,t.ah)(),e.components);return n?l.createElement(n,e,l.createElement(r,e)):r(e)},i=a(4184),o=a.n(i),s=a(4690),u=a(1140),m=a(2565),d=a(8531),p=a(3383),g=a(7315);const E=e=>{const{data:{mdx:{tableOfContents:{items:n},frontmatter:{toc:a=!0,title:t,timeToComplete:r,updated:c}}},children:i}=e,s=(0,l.useRef)(null),{0:E}=(0,l.useState)(""),h=(null===a||a)&&n;return l.createElement(l.Fragment,null,l.createElement(u.Z,{timeToComplete:r,updated:c},n[0].title||t||""),l.createElement(d.Z,{className:g.YS},l.createElement("article",{className:o()(g.Y2,!h&&g.ey),ref:s},l.createElement(m.Z,{components:{h1:()=>null}},i)),h&&l.createElement(p.Z,{itemsList:n,maxDepth:2,currSection:E})))},h=e=>{const{location:{pathname:n},data:{mdx:{frontmatter:{title:a},tableOfContents:{items:t}}}}=e;return l.createElement(s.Z,{pathname:n,title:a||t[0].title||void 0})};function b(e){return l.createElement(E,e,l.createElement(c,e))}},2565:function(e,n,a){a.d(n,{Z:function(){return i}});var t=a(7294),l=a(1151),r=a(987);const c={table:r.y6,a:r.IW,blockquote:r.R4,SubHeader:r.bU,img:r.fb,code:r.dn,QuizAlert:r.SA};var i=(0,t.memo)((function(e){let{children:n,components:a={}}=e;return t.createElement(l.Zo,{components:{...c,...a}},n)}))},4690:function(e,n,a){var t=a(7294),l=a(1072),r=a(2401);n.Z=e=>{const{title:n,description:a,pathname:c,children:i}=e,{description:o,title:s,origin:u}=(0,r.Z)(),{i18n:{language:m}}=(0,l.$G)(),d={title:n||s,description:a||o,url:""+u+(c||"")};return t.createElement(t.Fragment,null,t.createElement("html",{lang:m}),t.createElement("link",{rel:"icon",href:"data:image/svg+xml,<svg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 100 100'><text y='0.9em' font-size='90'>🦺</text></svg>"}),t.createElement("title",null,d.title),t.createElement("link",{rel:"canonical",href:d.url}),t.createElement("meta",{name:"description",content:d.description}),t.createElement("meta",{property:"og:title",content:d.title}),t.createElement("meta",{property:"og:url",content:d.url}),t.createElement("meta",{property:"og:type",content:"website"}),t.createElement("meta",{property:"og:description",content:d.description}),t.createElement("meta",{name:"twitter:card",content:"summary"}),t.createElement("meta",{name:"twitter:title",content:d.title}),t.createElement("meta",{name:"twitter:url",content:d.url}),t.createElement("meta",{name:"twitter:description",content:d.description}),t.createElement("meta",{name:"twitter:site",content:"https://www.ibm.com"}),t.createElement("meta",{name:"twitter:creator",content:"@IBM"}),i)}},3383:function(e,n,a){a.d(n,{Z:function(){return s}});var t=a(7294),l=a(7500),r=a(4184),c=a.n(r),i=a(6488);const o=function(e,n,a){return void 0===n&&(n=[]),void 0===a&&(a=0),e.forEach((e=>{const{title:t,url:l,items:r}=e;n.splice(n.length,0,{depth:a,title:t,url:l}),r&&r.length>0&&o(r,n,a+1)})),n};var s=e=>{const{itemsList:n}=e,a=(0,t.useMemo)((()=>o(n[0].items||[])),[n]),r=(0,i.Z)("h1[id],h2[id]",{threshold:[0,1],rootMargin:"-48px 0px -90% 0px"});return a.length<1?null:t.createElement("nav",{className:"TableOfContents-module--toc--54d35"},t.createElement("div",{className:"TableOfContents-module--tocStack--90609"},t.createElement("h6",{className:"TableOfContents-module--tocHeader--05956"},t.createElement(l.rU,{to:"#",replace:!0},"On this page")),a.map(((e,n)=>{let{title:a,url:l}=e;return t.createElement("a",{className:c()("TableOfContents-module--link--b292b",r===l.substring(1)&&"TableOfContents-module--activeItem--3869f"),key:n,href:l},a)}))))}},7315:function(e,n,a){a.d(n,{Y2:function(){return t},YS:function(){return r},ey:function(){return l}});var t="{mdx-fields__slug}-module--article--e3d5a",l="{mdx-fields__slug}-module--noToc--82387",r="{mdx-fields__slug}-module--wrapper--58e72"},1151:function(e,n,a){a.d(n,{Zo:function(){return i},ah:function(){return r}});var t=a(7294);const l=t.createContext({});function r(e){const n=t.useContext(l);return t.useMemo((()=>"function"==typeof e?e(n):{...n,...e}),[n,e])}const c={};function i({components:e,children:n,disableParentContext:a}){let i;return i=a?"function"==typeof e?e({}):e||c:r(e),t.createElement(l.Provider,{value:i},n)}}}]);
//# sourceMappingURL=component---src-pages-mdx-fields-slug-tsx-content-file-path-content-turbonomic-105-es-md-6eacfc5bcb3ed9551d2a.js.map