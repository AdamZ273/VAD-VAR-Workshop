"use strict";(self.webpackChunkvad_var_site=self.webpackChunkvad_var_site||[]).push([[2973],{8166:function(e,a,n){n.r(a),n.d(a,{Head:function(){return g},default:function(){return h}});var t=n(1151),l=n(7294);function r(e){const a=Object.assign({section:"section",h1:"h1",p:"p",h2:"h2",a:"a",img:"img",ul:"ul",li:"li",h3:"h3",strong:"strong",h4:"h4"},(0,t.ah)(),e.components);return l.createElement(a.section,{className:"heading","data-heading-rank":"1","aria-labelledby":"gestión-e-integración-de-datos-de-envizi"},l.createElement(a.h1,{id:"gestión-e-integración-de-datos-de-envizi"},"Gestión e integración de datos de Envizi"),"\n",l.createElement(a.p,null,"La demostración de la insignia Envizi Technical Sales Intermediate muestra el poder de Envizi para identificar oportunidades de mejoras ESG, realizar un seguimiento del progreso ESG año tras año y realizar informes ESG de acuerdo con los marcos ESG numéricos."),"\n",l.createElement(a.p,null,"La racionalización de los informes y la aceleración de la descarbonización dependen de un conjunto completo de datos ESG relevantes.  El primer paso en la elaboración de una solución Envizi es construir esa base de datos.  Este laboratorio analiza la arquitectura de gestión de datos dentro de Envizi, y las opciones actuales y futuras para cargar datos de forma automatizada."),"\n",l.createElement(a.section,{className:"heading","data-heading-rank":"2","aria-labelledby":"modelo-de-datos-envizi"},l.createElement(a.h2,{id:"modelo-de-datos-envizi"},l.createElement(a.a,{href:"#modelo-de-datos-envizi"},"Modelo de datos Envizi")),"\n",l.createElement(a.p,null,"A continuación se ofrece una explicación rápida de los cuatro componentes clave del sistema de gestión de datos de Envizi."),"\n",l.createElement(a.img,{src:"/1685726877217.17461103442/data-model-summary.png",alt:""}),"\n",l.createElement(a.p,null,"Flexible\nJerárquico por naturaleza\nConfigurado para satisfacer las necesidades del cliente"),"\n",l.createElement(a.p,null,"El modelo de datos de cada cliente se traza durante el proceso de incorporación a través de consultas con el cliente para determinar los tipos de datos que sería necesario capturar y los estilos de cuenta necesarios para capturar campos específicos que podrían ser cualquiera de ellos:"),"\n",l.createElement(a.ul,null,"\n",l.createElement(a.li,null,"Estilos de cuenta mapeados a partir de archivos de proveedores que se utilizarían en la recopilación automatizada de datos."),"\n",l.createElement(a.li,null,"campos necesarios para satisfacer los requisitos de elaboración de informes."),"\n"),"\n",l.createElement(a.section,{className:"heading","data-heading-rank":"3","aria-labelledby":"tipos-de-datos"},l.createElement(a.h3,{id:"tipos-de-datos"},l.createElement(a.a,{href:"#tipos-de-datos"},"Tipos de datos")),"\n",l.createElement(a.p,null,"Los tipos de datos son los cimientos del modelo de datos de Envizi."),"\n",l.createElement(a.p,null,"Configurables, pero gestionados por el equipo de producto de Envizi."),"\n",l.createElement(a.p,null,"Definir:"),"\n",l.createElement(a.ul,null,"\n",l.createElement(a.li,null,"Categoría de datos a gestionar (por ejemplo, Agua, Gas Natural, Electricidad)"),"\n",l.createElement(a.li,null,"Unidad de medida primaria (coste y consumo) que se registrará en el tipo de datos"),"\n",l.createElement(a.li,null,"Alcance de las emisiones (1, 2 o 3) y proceso de asignación del factor de emisiones para el tipo de datos, si procede."),"\n"),"\n",l.createElement(a.p,null,'Las métricas sociales o los tipos de datos de información sobre edificios pueden tener "Sin alcance".'),"\n",l.createElement(a.p,null,"El alcance y la categoría de los datos influyen en el modo en que se aplica el factor de emisiones a esos datos en la plataforma."),"\n",l.createElement(a.p,null,"Envizi cuenta con una biblioteca de más de 4.000 tipos de datos. La biblioteca se amplía constantemente cuando es necesario para satisfacer las necesidades de recopilación de datos de los clientes."),"\n",l.createElement(a.img,{src:"/1685726877221.17481103444/data-types-example.png",alt:""}),"\n"),l.createElement(a.section,{className:"heading","data-heading-rank":"3","aria-labelledby":"estilos-de-cuenta"},l.createElement(a.h3,{id:"estilos-de-cuenta"},l.createElement(a.a,{href:"#estilos-de-cuenta"},"Estilos de cuenta")),"\n",l.createElement(a.p,null,"Esquema de datos configurado sobre un Tipo de datos\nConfigurado ",l.createElement(a.strong,null,"por cliente")," para proporcionar flexibilidad para satisfacer diferentes requisitos de captura de datos"),"\n",l.createElement(a.ul,null,"\n",l.createElement(a.li,null,"Define los campos de datos específicos que deben capturarse, divididos en campos primarios y secundarios."),"\n",l.createElement(a.li,null,"Puede permitir que se añadan desplegables para soportar cosas como la captura de datos multi-unidad, listas de selección de divisas, etc."),"\n",l.createElement(a.li,null,"Admite reglas para:","\n",l.createElement(a.ul,null,"\n",l.createElement(a.li,null,"Hacer obligatorios determinados campos"),"\n",l.createElement(a.li,null,"Proporcionar valores por defecto"),"\n",l.createElement(a.li,null,"Realizar operaciones matemáticas sencillas en la entrada para derivar un valor de campo basado en otros datos capturados."),"\n"),"\n"),"\n"),"\n",l.createElement(a.img,{src:"/1685726877205.1741103439/account-styles.png",alt:""}),"\n"),l.createElement(a.section,{className:"heading","data-heading-rank":"3","aria-labelledby":"cuentas"},l.createElement(a.h3,{id:"cuentas"},l.createElement(a.a,{href:"#cuentas"},"Cuentas")),"\n",l.createElement(a.p,null,"Las cuentas son el punto final para el almacenamiento de datos dentro de Envizi.  Los datos capturados a través de la interfaz de usuario o los conectores se asocian a una cuenta."),"\n",l.createElement(a.ul,null,"\n",l.createElement(a.li,null,"Únicas por nombre e ID"),"\n",l.createElement(a.li,null,"Configuradas a nivel de ubicación"),"\n",l.createElement(a.li,null,"Configuradas con un tipo de datos y un estilo de cuenta específicos."),"\n",l.createElement(a.li,null,"Al crear una nueva cuenta, elija primero el tipo de datos y, a continuación, el estilo de cuenta."),"\n",l.createElement(a.li,null,"Sirve como punto final para el almacenamiento de datos cuando los datos se inyectan ya sea por captura manual o automatización a través de Conectores."),"\n",l.createElement(a.li,null,"Se utiliza como entidad de información que se despliega a través de la jerarquía de agrupación."),"\n"),"\n",l.createElement(a.img,{src:"/1685726877205.1741103438/account-example.png",alt:""}),"\n")),l.createElement(a.section,{className:"heading","data-heading-rank":"2","aria-labelledby":"conectores"},l.createElement(a.h2,{id:"conectores"},l.createElement(a.a,{href:"#conectores"},"Conectores")),"\n",l.createElement(a.p,null,"Hay varias formas de capturar datos en Envizi."),"\n",l.createElement(a.ul,null,"\n",l.createElement(a.li,null,"UI: es una opción para introducir pequeñas cantidades de datos de forma puntual."),"\n",l.createElement(a.li,null,"Carga masiva desde una plantilla"),"\n"),"\n",l.createElement(a.section,{className:"heading","data-heading-rank":"3","aria-labelledby":"proceso-actual"},l.createElement(a.h3,{id:"proceso-actual"},l.createElement(a.a,{href:"#proceso-actual"},"Proceso actual")),"\n",l.createElement(a.ul,null,"\n",l.createElement(a.li,null,"Personalizado, por sistema fuente, por cliente"),"\n",l.createElement(a.li,null,"Altamente específico"),"\n",l.createElement(a.li,null,"Hace coincidir el archivo de datos entrante en función del nombre, el formato, los encabezados, etc."),"\n",l.createElement(a.li,null,"Utiliza un cubo de almacenamiento en la nube S3 como zona de aterrizaje para los archivos que debe consumir el conector"),"\n",l.createElement(a.li,null,"Este enfoque carece de escalabilidad"),"\n"),"\n",l.createElement(a.img,{src:"/1685726877209.1741103440/connector-current-final.png",alt:""}),"\n"),l.createElement(a.section,{className:"heading","data-heading-rank":"3","aria-labelledby":"próximamente---fin-del-segundo-trimestre"},l.createElement(a.h3,{id:"próximamente---fin-del-segundo-trimestre"},l.createElement(a.a,{href:"#próximamente---fin-del-segundo-trimestre"},"Próximamente - Fin del segundo trimestre")),"\n",l.createElement(a.p,null,"Conector de cuenta universal - requerirá una plantilla estándar que varía según el estilo de cuenta."),"\n",l.createElement(a.p,null,"Una plantilla de carga de datos (el informe de extracción de estilos de cuenta puede descargarse desde la interfaz de usuario para cualquier estilo de cuenta). Esto permitirá a los socios mucha más flexibilidad en la forma en que quieren obtener los datos en Envizi."),"\n",l.createElement(a.img,{src:"/1685726877213.17431103441/connector-future.png",alt:""}),"\n",l.createElement(a.section,{className:"heading","data-heading-rank":"4","aria-labelledby":"opción-a"},l.createElement(a.h4,{id:"opción-a"},l.createElement(a.a,{href:"#opción-a"},"Opción A")),"\n",l.createElement(a.p,null,"Los archivos de origen son transformados por sistemas o procesos externos para que coincidan con el formato de archivo universal de Envizi (varía según el Estilo de Cuenta) y se cargan directamente a través del Conector de Cuenta Universal."),"\n"),l.createElement(a.section,{className:"heading","data-heading-rank":"4","aria-labelledby":"opción-b"},l.createElement(a.h4,{id:"opción-b"},l.createElement(a.a,{href:"#opción-b"},"Opción B")),"\n",l.createElement(a.p,null,"Los archivos de origen son transformados por un servicio gestionado que utiliza instancias de App Connect para que coincidan con el formato de archivo universal de Envizi (varía según el estilo de cuenta) y se cargan a través del Universal Account Connector."),"\n",l.createElement(a.ul,null,"\n",l.createElement(a.li,null,"Flujos de transformación de App Connect y servicios de supervisión proporcionados por IBM Integration Services"),"\n",l.createElement(a.li,null,"Fijación de precios basada en el número de tipos de datos del archivo de origen"),"\n",l.createElement(a.li,null,"Precio de las integraciones personalizadas previa solicitud, por ejemplo, interfaces API"),"\n"),"\n")),l.createElement(a.section,{className:"heading","data-heading-rank":"3","aria-labelledby":"próximos-eventos"},l.createElement(a.h3,{id:"próximos-eventos"},l.createElement(a.a,{href:"#próximos-eventos"},"Próximos eventos")),"\n",l.createElement(a.ul,null,"\n",l.createElement(a.li,null,"24 de mayo: Gestión de etiquetas"),"\n",l.createElement(a.li,null,"30 de mayo: PowerReport (presentación, precios, alcance)"),"\n"),"\n"),l.createElement(a.section,{className:"heading","data-heading-rank":"3","aria-labelledby":"mejor-juntos-turbonomic-y-envizi"},l.createElement(a.h3,{id:"mejor-juntos-turbonomic-y-envizi"},l.createElement(a.a,{href:"#mejor-juntos-turbonomic-y-envizi"},"Mejor juntos: Turbonomic y Envizi")),"\n",l.createElement(a.img,{src:"/1685726877221.17481103445/turbo-envizi-arch.png",alt:""}),"\n",l.createElement(a.p,null,"Continuar en ",l.createElement(a.a,{href:"/envizi/105"},"lab 105")))))}var i=function(e){void 0===e&&(e={});const{wrapper:a}=Object.assign({},(0,t.ah)(),e.components);return a?l.createElement(a,e,l.createElement(r,e)):r(e)},o=n(4184),c=n.n(o),s=n(4690),d=n(1140),m=n(2565),u=n(8531),p=n(3383),E=n(7315);const f=e=>{const{data:{mdx:{tableOfContents:{items:a},frontmatter:{toc:n=!0,title:t,timeToComplete:r,updated:i}}},children:o}=e,s=(0,l.useRef)(null),{0:f}=(0,l.useState)(""),g=(null===n||n)&&a;return l.createElement(l.Fragment,null,l.createElement(d.Z,{timeToComplete:r,updated:i},a[0].title||t||""),l.createElement(u.Z,{className:E.YS},l.createElement("article",{className:c()(E.Y2,!g&&E.ey),ref:s},l.createElement(m.Z,{components:{h1:()=>null}},o)),g&&l.createElement(p.Z,{itemsList:a,maxDepth:2,currSection:f})))},g=e=>{const{location:{pathname:a},data:{mdx:{frontmatter:{title:n},tableOfContents:{items:t}}}}=e;return l.createElement(s.Z,{pathname:a,title:n||t[0].title||void 0})};function h(e){return l.createElement(f,e,l.createElement(i,e))}},2565:function(e,a,n){n.d(a,{Z:function(){return o}});var t=n(7294),l=n(1151),r=n(5045);const i={table:r.y6,a:r.IW,blockquote:r.R4,SubHeader:r.bU,img:r.fb,code:r.dn,QuizAlert:r.SA,CopyText:r.O5};var o=(0,t.memo)((function(e){let{children:a,components:n={}}=e;return t.createElement(l.Zo,{components:{...i,...n}},a)}))},4690:function(e,a,n){var t=n(7294),l=n(1072),r=n(2401);a.Z=e=>{const{title:a,description:n,pathname:i,children:o}=e,{description:c,title:s,origin:d}=(0,r.Z)(),{i18n:{language:m}}=(0,l.$G)(),u={title:a||s,description:n||c,url:""+d+(i||"")};return t.createElement(t.Fragment,null,t.createElement("html",{lang:m}),t.createElement("link",{rel:"icon",href:"data:image/svg+xml,<svg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 100 100'><text y='0.9em' font-size='90'>🦺</text></svg>"}),t.createElement("title",null,u.title),t.createElement("link",{rel:"canonical",href:u.url}),t.createElement("meta",{name:"description",content:u.description}),t.createElement("meta",{property:"og:title",content:u.title}),t.createElement("meta",{property:"og:url",content:u.url}),t.createElement("meta",{property:"og:type",content:"website"}),t.createElement("meta",{property:"og:description",content:u.description}),t.createElement("meta",{name:"twitter:card",content:"summary"}),t.createElement("meta",{name:"twitter:title",content:u.title}),t.createElement("meta",{name:"twitter:url",content:u.url}),t.createElement("meta",{name:"twitter:description",content:u.description}),t.createElement("meta",{name:"twitter:site",content:"https://www.ibm.com"}),t.createElement("meta",{name:"twitter:creator",content:"@IBM"}),o)}},3383:function(e,a,n){n.d(a,{Z:function(){return s}});var t=n(7294),l=n(7500),r=n(4184),i=n.n(r),o=n(6488);const c=function(e,a,n){return void 0===a&&(a=[]),void 0===n&&(n=0),e.forEach((e=>{const{title:t,url:l,items:r}=e;a.splice(a.length,0,{depth:n,title:t,url:l}),r&&r.length>0&&c(r,a,n+1)})),a};var s=e=>{const{itemsList:a}=e,n=(0,t.useMemo)((()=>c(a[0].items||[])),[a]),r=(0,o.Z)("h1[id],h2[id]",{threshold:[0,1],rootMargin:"-48px 0px -90% 0px"});return n.length<1?null:t.createElement("nav",{className:"TableOfContents-module--toc--54d35"},t.createElement("div",{className:"TableOfContents-module--tocStack--90609"},t.createElement("h6",{className:"TableOfContents-module--tocHeader--05956"},t.createElement(l.rU,{to:"#",replace:!0},"On this page")),n.map(((e,a)=>{let{title:n,url:l}=e;return t.createElement("a",{className:i()("TableOfContents-module--link--b292b",r===l.substring(1)&&"TableOfContents-module--activeItem--3869f"),key:a,href:l},n)}))))}},7315:function(e,a,n){n.d(a,{Y2:function(){return t},YS:function(){return r},ey:function(){return l}});var t="{mdx-fields__slug}-module--article--e3d5a",l="{mdx-fields__slug}-module--noToc--82387",r="{mdx-fields__slug}-module--wrapper--58e72"},1151:function(e,a,n){n.d(a,{Zo:function(){return o},ah:function(){return r}});var t=n(7294);const l=t.createContext({});function r(e){const a=t.useContext(l);return t.useMemo((()=>"function"==typeof e?e(a):{...a,...e}),[a,e])}const i={};function o({components:e,children:a,disableParentContext:n}){let o;return o=n?"function"==typeof e?e({}):e||i:r(e),t.createElement(l.Provider,{value:o},a)}}}]);
//# sourceMappingURL=component---src-pages-mdx-fields-slug-tsx-content-file-path-content-envizi-104-es-md-fb5c7cd1c4c27203dc26.js.map