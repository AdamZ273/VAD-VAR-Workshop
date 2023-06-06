"use strict";(self.webpackChunkvad_var_site=self.webpackChunkvad_var_site||[]).push([[5744],{969:function(e,n,a){a.r(n),a.d(n,{Head:function(){return b},default:function(){return h}});var t=a(1151),l=a(7294);function r(e){const n=Object.assign({section:"section",h1:"h1",h2:"h2",a:"a",p:"p",ul:"ul",li:"li",em:"em",strong:"strong",h3:"h3",ol:"ol",img:"img"},(0,t.ah)(),e.components);return l.createElement(n.section,{className:"heading","data-heading-rank":"1","aria-labelledby":"103-conectar-instana-a-turbonomic"},l.createElement(n.h1,{id:"103-conectar-instana-a-turbonomic"},"103: Conectar Instana a Turbonomic"),"\n",l.createElement(n.section,{className:"heading","data-heading-rank":"2","aria-labelledby":"objetivo"},l.createElement(n.h2,{id:"objetivo"},l.createElement(n.a,{href:"#objetivo"},"Objetivo")),"\n",l.createElement(n.p,null,"En este laboratorio, añadirá un objetivo a su ambiente de Turbonomic"),"\n",l.createElement(n.ul,null,"\n",l.createElement(n.li,null,"Un objetivo de supervisión del rendimiento de la aplicación: Instana"),"\n"),"\n",l.createElement(n.p,null,l.createElement(n.em,null,l.createElement(n.strong,null,"Nota:")," más adelante utilizaremos las aplicaciones ",l.createElement(n.strong,null,"Quote of the Day")," y ",l.createElement(n.strong,null,"RobotShop")," en Instana, en los laboratorios ",l.createElement(n.strong,null,"Policies")," y ",l.createElement(n.strong,null,"Custom Dashboard"),".")),"\n"),l.createElement(n.section,{className:"heading","data-heading-rank":"2","aria-labelledby":"añadir-el-objetivo-instana"},l.createElement(n.h2,{id:"añadir-el-objetivo-instana"},l.createElement(n.a,{href:"#añadir-el-objetivo-instana"},"Añadir el objetivo Instana")),"\n",l.createElement(n.p,null,"Turbonomic admite el descubrimiento de aplicaciones administradas por herramientas de APM, en este caso, la plataforma Instana. Turbonomic incluye la información descubierta sobre estas aplicaciones en sus cálculos de salud ambiental."),"\n",l.createElement(n.p,null,"Ya hemos preparado un servidor Instana para su ambiente. Este servidor supervisa dos aplicaciones: ",l.createElement(n.strong,null,"RobotShop")," y Cotización del día**. En esta sección, seguirá los pasos para añadir esta instancia de Instana a su ambiente virtual de Turbonomic."),"\n",l.createElement(n.section,{className:"heading","data-heading-rank":"3","aria-labelledby":"generar-el-token-de-api-de-instana"},l.createElement(n.h3,{id:"generar-el-token-de-api-de-instana"},l.createElement(n.a,{href:"#generar-el-token-de-api-de-instana"},"Generar el token de API de Instana")),"\n",l.createElement(n.ol,null,"\n",l.createElement(n.li,null,"\n",l.createElement(n.p,null,"Para conectar Instana a Turbonomic necesitará un token de API de su servidor Instana para que Turbonomic pueda autenticar la conexión. Para generar esta clave navegue a su Bastion VM y haga clic en la pestaña Instana."),"\n"),"\n",l.createElement(n.li,null,"\n",l.createElement(n.p,null,"Esto le llevará a la página de inicio de sesión de Instana. Inicie sesión con sus credenciales de Instana. Las credenciales de Instana se encuentran en la pestaña ",l.createElement(n.strong,null,"Turbo-PoT-Credentials"),"."),"\n"),"\n"),"\n",l.createElement(n.img,{src:"/1686080592545.511791602/instanatab.png",alt:""}),"\n",l.createElement(n.ol,{start:"3"},"\n",l.createElement(n.li,null,"Una vez que haya iniciado sesión, haga clic en el icono de engranaje en el menú de la izquierda para abrir la configuración."),"\n"),"\n",l.createElement(n.img,{src:"/1686080592529.511791598/instana2.png",alt:""}),"\n",l.createElement(n.ol,{start:"4"},"\n",l.createElement(n.li,null,"En la página de configuración, en ",l.createElement(n.strong,null,"Configuración del group (Team Settings)"),", haga clic en ",l.createElement(n.strong,null,"API Tokens"),". A continuación, haga clic en ",l.createElement(n.strong,null,"Añadir nuevo token (Add New Token)"),"."),"\n"),"\n",l.createElement(n.img,{src:"/1686080592533.511791599/instana3.png",alt:""}),"\n",l.createElement(n.ol,{start:"5"},"\n",l.createElement(n.li,null,"Dé a su token un nombre único como ",l.createElement(n.em,null,"api_SusInitiales"),". A continuación, desplácese hacia abajo y haga clic en ",l.createElement(n.strong,null,"Save (Guardar)"),". Puedes dejar el resto de configuraciones por defecto."),"\n"),"\n",l.createElement(n.img,{src:"/1686080592537.511791600/instana4.png",alt:""}),"\n",l.createElement(n.img,{src:"/1686080592541.511791601/instana5.png",alt:""}),"\n",l.createElement(n.ol,{start:"6"},"\n",l.createElement(n.li,null,"Ahora haz clic en el icono del ojo para revelar tu token API y anótalo. Necesitará esta clave en la siguiente sección."),"\n"),"\n"),l.createElement(n.section,{className:"heading","data-heading-rank":"3","aria-labelledby":"añadir-instana-como-objetivo"},l.createElement(n.h3,{id:"añadir-instana-como-objetivo"},l.createElement(n.a,{href:"#añadir-instana-como-objetivo"},"Añadir Instana como objetivo")),"\n",l.createElement(n.ol,null,"\n",l.createElement(n.li,null,"Navegue hasta su consola de Turbonomic en la máquina virtual Bastion y, a continuación, haga clic en ",l.createElement(n.strong,null,"Configuración (Settings)")," en el navegador de la izquierda."),"\n"),"\n",l.createElement(n.img,{src:"/1686080592557.511791606/turbo-main.png",alt:""}),"\n",l.createElement(n.p,null,l.createElement(n.em,null,l.createElement(n.strong,null,"Consejo:")," Si ",l.createElement(n.strong,null,"Configuración (Settings)")," no aparece en el navegador izquierdo, prueba a alejar la imagen pulsando las teclas Ctrl y menos (-)"),"."),"\n",l.createElement(n.ol,{start:"2"},"\n",l.createElement(n.li,null,"Seleccione la opción ",l.createElement(n.strong,null,"Target Configuration (Configuración de objetivo)"),". Se abrirá la página que contiene todos los objetivos configurados."),"\n"),"\n",l.createElement(n.img,{src:"/1686080592553.511791605/target-settings.png",alt:""}),"\n",l.createElement(n.ol,{start:"3"},"\n",l.createElement(n.li,null,"Haga clic en ",l.createElement(n.strong,null,"New Target (Nuevo objetivo)"),". Se abrirá una página con una lista de los tipos de objetivos disponibles para este ambiente."),"\n"),"\n",l.createElement(n.p,null,l.createElement(n.em,null,l.createElement(n.strong,null,"Consejo:")," Esta no es una lista exhaustiva de los tipos de destino disponibles. Para ver la lista completa y las versiones compatibles visite el ",l.createElement(n.a,{href:"https://www.ibm.com/docs/en/tarm/8.8.0?topic=overview-turbonomic-targets"},"sitio de documentación"),".")),"\n",l.createElement(n.img,{src:"/1686080592553.511791604/target-page.png",alt:""}),"\n",l.createElement(n.ol,{start:"4"},"\n",l.createElement(n.li,null,"En la lista, seleccione ",l.createElement(n.strong,null,"Applications and Databases (Aplicaciones y bases de datos)"),". A continuación, seleccione ",l.createElement(n.strong,null,"Instana"),"."),"\n"),"\n",l.createElement(n.img,{src:"/1686080592521.511791594/add-instana-1.png",alt:""}),"\n",l.createElement(n.img,{src:"/1686080592525.511791595/add-instana-2.png",alt:""}),"\n",l.createElement(n.ol,{start:"5"},"\n",l.createElement(n.li,null,"Para añadir Instana todo lo que necesitas es el nombre de host o la dirección IP de tu servidor Instana (10.0.0.2), y un token de API generado desde tu backend Instana. Una vez que hayas completado esta información, haz clic en ",l.createElement(n.strong,null,"Add (Añadir)")," en la parte inferior de la página. Como no tenemos un proxy podemos dejar esas partes vacías."),"\n"),"\n",l.createElement(n.p,null,l.createElement(n.em,null,l.createElement(n.strong,null,"Nota"),": Si usted ve el nombre de host y / o dirección IP se rellena como administrador y una contraseña en este paso, borrar los dos y escriba su información.")),"\n",l.createElement(n.p,null,l.createElement(n.em,null,l.createElement(n.strong,null,"Consejo:")," Tenga en cuenta que el nombre de host o la dirección IP deben ser visibles para Turbonomic. Si tiene sus instancias de Instana y Turbonomic instaladas en redes diferentes o la comunicación entre ellas está bloqueada por un firewall, la configuración de destino fallará.")),"\n",l.createElement(n.img,{src:"/1686080592525.511791596/add-instana-3.png",alt:""}),"\n",l.createElement(n.ol,{start:"6"},"\n",l.createElement(n.li,null,"El objetivo Instana recién añadido aparecerá en la lista de objetivos. Comprueba el ",l.createElement(n.strong,null,"Status (estado)")," y la ",l.createElement(n.strong,null,"severity (severidad)"),", debe aparecer como ",l.createElement(n.strong,null,"Validated (Validado)")," y ",l.createElement(n.strong,null,"Normal"),". Felicidades, ha conectado correctamente su ambiente Instana a Turbonomic."),"\n"),"\n",l.createElement(n.img,{src:"/1686080592557.511791607/validated.png",alt:""}),"\n",l.createElement(n.p,null,"Ahora que ha añadido un nuevo objetivo, espere 15 minutos para que Turbonomic ejecute la detección y añada los datos de Instana. Para comprobarlo, mire sus principales aplicaciones empresariales y busque dos aplicaciones que se añadirán desde Instana: ",l.createElement(n.strong,null,"Quote of the Day (Cotización del día)")," y ",l.createElement(n.strong,null,"RobotShop"),"."),"\n",l.createElement(n.img,{src:"/1686080592549.511791603/listapps.png",alt:""}),"\n",l.createElement(n.img,{src:"/1686080592529.511791597/apps.png",alt:""}))))}var o=function(e){void 0===e&&(e={});const{wrapper:n}=Object.assign({},(0,t.ah)(),e.components);return n?l.createElement(n,e,l.createElement(r,e)):r(e)},i=a(4184),s=a.n(i),c=a(4690),m=a(1140),u=a(2565),d=a(8531),p=a(3383),g=a(7315);const E=e=>{const{data:{mdx:{tableOfContents:{items:n},frontmatter:{toc:a=!0,title:t,timeToComplete:r,updated:o}}},children:i}=e,c=(0,l.useRef)(null),{0:E}=(0,l.useState)(""),b=(null===a||a)&&n;return l.createElement(l.Fragment,null,l.createElement(m.Z,{timeToComplete:r,updated:o},n[0].title||t||""),l.createElement(d.Z,{className:g.YS},l.createElement("article",{className:s()(g.Y2,!b&&g.ey),ref:c},l.createElement(u.Z,{components:{h1:()=>null}},i)),b&&l.createElement(p.Z,{itemsList:n,maxDepth:2,currSection:E})))},b=e=>{const{location:{pathname:n},data:{mdx:{frontmatter:{title:a},tableOfContents:{items:t}}}}=e;return l.createElement(c.Z,{pathname:n,title:a||t[0].title||void 0})};function h(e){return l.createElement(E,e,l.createElement(o,e))}},2565:function(e,n,a){a.d(n,{Z:function(){return i}});var t=a(7294),l=a(1151),r=a(7563);const o={table:r.y6,a:r.IW,blockquote:r.R4,SubHeader:r.bU,img:r.fb,code:r.dn,QuizAlert:r.SA,Danger:r.b0,Warning:r.v3,CopyText:r.O5};var i=(0,t.memo)((function(e){let{children:n,components:a={}}=e;return t.createElement(l.Zo,{components:{...o,...a}},n)}))},3383:function(e,n,a){a.d(n,{Z:function(){return c}});var t=a(7294),l=a(7500),r=a(4184),o=a.n(r),i=a(6488);const s=function(e,n,a){return void 0===n&&(n=[]),void 0===a&&(a=0),e.forEach((e=>{const{title:t,url:l,items:r}=e;n.splice(n.length,0,{depth:a,title:t,url:l}),r&&r.length>0&&s(r,n,a+1)})),n};var c=e=>{const{itemsList:n}=e,a=(0,t.useMemo)((()=>s(n[0].items||[])),[n]),r=(0,i.Z)("h1[id],h2[id]",{threshold:[0,1],rootMargin:"-48px 0px -90% 0px"});return a.length<1?null:t.createElement("nav",{className:"TableOfContents-module--toc--54d35"},t.createElement("div",{className:"TableOfContents-module--tocStack--90609"},t.createElement("h6",{className:"TableOfContents-module--tocHeader--05956"},t.createElement(l.rU,{to:"#",replace:!0},"On this page")),a.map(((e,n)=>{let{title:a,url:l}=e;return t.createElement("a",{className:o()("TableOfContents-module--link--b292b",r===l.substring(1)&&"TableOfContents-module--activeItem--3869f"),key:n,href:l},a)}))))}},7315:function(e,n,a){a.d(n,{Y2:function(){return t},YS:function(){return r},ey:function(){return l}});var t="{mdx-fields__slug}-module--article--e3d5a",l="{mdx-fields__slug}-module--noToc--82387",r="{mdx-fields__slug}-module--wrapper--58e72"},1151:function(e,n,a){a.d(n,{Zo:function(){return i},ah:function(){return r}});var t=a(7294);const l=t.createContext({});function r(e){const n=t.useContext(l);return t.useMemo((()=>"function"==typeof e?e(n):{...n,...e}),[n,e])}const o={};function i({components:e,children:n,disableParentContext:a}){let i;return i=a?"function"==typeof e?e({}):e||o:r(e),t.createElement(l.Provider,{value:i},n)}}}]);
//# sourceMappingURL=component---src-pages-mdx-fields-slug-tsx-content-file-path-content-turbonomic-103-es-md-32224926b0799f2ca85a.js.map