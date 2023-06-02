"use strict";(self.webpackChunkvad_var_site=self.webpackChunkvad_var_site||[]).push([[3189],{3533:function(e,t,a){a.r(t),a.d(t,{Head:function(){return g},default:function(){return b}});var n=a(1151),l=a(7294);function r(e){const t=Object.assign({section:"section",h1:"h1",h2:"h2",a:"a",p:"p",img:"img",ol:"ol",li:"li",code:"code",strong:"strong",em:"em"},(0,n.ah)(),e.components);return l.createElement(t.section,{className:"heading","data-heading-rank":"1","aria-labelledby":"104-pruebas-de-capacidad-y-caos"},l.createElement(t.h1,{id:"104-pruebas-de-capacidad-y-caos"},"104: Pruebas de capacidad y caos"),"\n",l.createElement(t.section,{className:"heading","data-heading-rank":"2","aria-labelledby":"analizando-una-prueba-de-capacidad-usando-instana"},l.createElement(t.h2,{id:"analizando-una-prueba-de-capacidad-usando-instana"},l.createElement(t.a,{href:"#analizando-una-prueba-de-capacidad-usando-instana"},"Analizando una prueba de capacidad usando Instana")),"\n",l.createElement(t.p,null,"La perspectiva de la aplicación le ofrece un panel general que le da una primera impresión útil del escenario de la prueba de capacidad."),"\n",l.createElement(t.img,{src:"/1685709457939.4917790816/application-perspective.png",alt:""}),"\n",l.createElement(t.p,null,"Instana le ofrecerá información en tiempo real sobre toda su plataforma, lo que le permitirá comprender al instante las consecuencias de su prueba de capacidad."),"\n",l.createElement(t.p,null,"Llevaremos a cabo una pequeña prueba en la plataforma de tienda robótica facilitada por (",l.createElement(t.a,{href:"https://github.com/instana/robot-shop/tree/master/load-gen"},"Instana"),")."),"\n",l.createElement(t.ol,null,"\n",l.createElement(t.li,null,"Ejecute el script de generación de capacidad ofrecido por Instana"),"\n"),"\n",l.createElement(t.p,null,"En un terminal ejecute este comando ",l.createElement(t.code,null,"./load-gen.sh")," bajo su versión de robot-shop en el directorio ",l.createElement(t.code,null,"load-gen"),"."),"\n",l.createElement(t.p,null,"La salida del script debe parecerse a la siguiente imagen:"),"\n",l.createElement(t.img,{src:"/1685709457951.4917790819/load-gen-script.png",alt:""}),"\n",l.createElement(t.ol,{start:"2"},"\n",l.createElement(t.li,null,"\n",l.createElement(t.p,null,"En la perspectiva de la aplicación para la tienda del robot, debería ver que el número de llamadas ha aumentado y que las llamadas erróneas también han aumentado."),"\n",l.createElement(t.img,{src:"/1685709457943.4917790818/erroneous-calls.png",alt:""}),"\n"),"\n",l.createElement(t.li,null,"\n",l.createElement(t.p,null,"Utilización de la CPU y cambios de contexto durante la prueba de capacidad"),"\n",l.createElement(t.img,{src:"/1685709457939.4917790817/cpu-usage.png",alt:""}),"\n"),"\n"),"\n",l.createElement(t.p,null,"Cuando la memoria se consume por completo, el sistema empieza a intentar solucionar la situación."),"\n",l.createElement(t.p,null,"El consumo de CPU aumenta y el ",l.createElement(t.strong,null,"cambio de contexto")," se convierte en un problema cada vez más grave, hasta que se descontrola por completo. En este punto está bastante claro cual es la causa raíz del funcionamiento de la Aplicación - no hay suficientes recursos de hardware para manejar la capacidad . Esto tiene sentido teniendo en cuenta que nuestra enorme pila tecnológica se está ejecutando en una máquina pequeña."),"\n",l.createElement(t.ol,{start:"4"},"\n",l.createElement(t.li,null,"Ver todas las trazas de API"),"\n"),"\n",l.createElement(t.p,null,"Exploremos una traza API seleccionándola de la lista ",l.createElement(t.em,null,"Top Traces")," para ver detalles sobre esas solicitudes.\nCon un solo clic en el enlace, cortamos a través de los datos de rastreo para obtener sólo las trazas relevantes. De la vista general podemos deducir qué servicio está involucrado y la latencia de cada una de las llamadas erróneas."),"\n",l.createElement(t.img,{src:"/1685709457951.4917790820/trace-calls.png",alt:""}),"\n",l.createElement(t.p,null,"Una prueba de capacidad, por muy realista que sea, sólo vale lo que se puede sacar de su análisis. Dado que Instana facilita aún más este proceso, es un complemento perfecto para las pruebas de capacidad.")))}var c=function(e){void 0===e&&(e={});const{wrapper:t}=Object.assign({},(0,n.ah)(),e.components);return t?l.createElement(t,e,l.createElement(r,e)):r(e)},o=a(4184),i=a.n(o),s=a(4690),m=a(1140),d=a(2565),u=a(8531),p=a(3383),E=a(7315);const f=e=>{const{data:{mdx:{tableOfContents:{items:t},frontmatter:{toc:a=!0,title:n,timeToComplete:r,updated:c}}},children:o}=e,s=(0,l.useRef)(null),{0:f}=(0,l.useState)(""),g=(null===a||a)&&t;return l.createElement(l.Fragment,null,l.createElement(m.Z,{timeToComplete:r,updated:c},t[0].title||n||""),l.createElement(u.Z,{className:E.YS},l.createElement("article",{className:i()(E.Y2,!g&&E.ey),ref:s},l.createElement(d.Z,{components:{h1:()=>null}},o)),g&&l.createElement(p.Z,{itemsList:t,maxDepth:2,currSection:f})))},g=e=>{const{location:{pathname:t},data:{mdx:{frontmatter:{title:a},tableOfContents:{items:n}}}}=e;return l.createElement(s.Z,{pathname:t,title:a||n[0].title||void 0})};function b(e){return l.createElement(f,e,l.createElement(c,e))}},2565:function(e,t,a){a.d(t,{Z:function(){return o}});var n=a(7294),l=a(1151),r=a(987);const c={table:r.y6,a:r.IW,blockquote:r.R4,SubHeader:r.bU,img:r.fb,code:r.dn,QuizAlert:r.SA};var o=(0,n.memo)((function(e){let{children:t,components:a={}}=e;return n.createElement(l.Zo,{components:{...c,...a}},t)}))},4690:function(e,t,a){var n=a(7294),l=a(1072),r=a(2401);t.Z=e=>{const{title:t,description:a,pathname:c,children:o}=e,{description:i,title:s,origin:m}=(0,r.Z)(),{i18n:{language:d}}=(0,l.$G)(),u={title:t||s,description:a||i,url:""+m+(c||"")};return n.createElement(n.Fragment,null,n.createElement("html",{lang:d}),n.createElement("link",{rel:"icon",href:"data:image/svg+xml,<svg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 100 100'><text y='0.9em' font-size='90'>🦺</text></svg>"}),n.createElement("title",null,u.title),n.createElement("link",{rel:"canonical",href:u.url}),n.createElement("meta",{name:"description",content:u.description}),n.createElement("meta",{property:"og:title",content:u.title}),n.createElement("meta",{property:"og:url",content:u.url}),n.createElement("meta",{property:"og:type",content:"website"}),n.createElement("meta",{property:"og:description",content:u.description}),n.createElement("meta",{name:"twitter:card",content:"summary"}),n.createElement("meta",{name:"twitter:title",content:u.title}),n.createElement("meta",{name:"twitter:url",content:u.url}),n.createElement("meta",{name:"twitter:description",content:u.description}),n.createElement("meta",{name:"twitter:site",content:"https://www.ibm.com"}),n.createElement("meta",{name:"twitter:creator",content:"@IBM"}),o)}},3383:function(e,t,a){a.d(t,{Z:function(){return s}});var n=a(7294),l=a(7500),r=a(4184),c=a.n(r),o=a(6488);const i=function(e,t,a){return void 0===t&&(t=[]),void 0===a&&(a=0),e.forEach((e=>{const{title:n,url:l,items:r}=e;t.splice(t.length,0,{depth:a,title:n,url:l}),r&&r.length>0&&i(r,t,a+1)})),t};var s=e=>{const{itemsList:t}=e,a=(0,n.useMemo)((()=>i(t[0].items||[])),[t]),r=(0,o.Z)("h1[id],h2[id]",{threshold:[0,1],rootMargin:"-48px 0px -90% 0px"});return a.length<1?null:n.createElement("nav",{className:"TableOfContents-module--toc--54d35"},n.createElement("div",{className:"TableOfContents-module--tocStack--90609"},n.createElement("h6",{className:"TableOfContents-module--tocHeader--05956"},n.createElement(l.rU,{to:"#",replace:!0},"On this page")),a.map(((e,t)=>{let{title:a,url:l}=e;return n.createElement("a",{className:c()("TableOfContents-module--link--b292b",r===l.substring(1)&&"TableOfContents-module--activeItem--3869f"),key:t,href:l},a)}))))}},7315:function(e,t,a){a.d(t,{Y2:function(){return n},YS:function(){return r},ey:function(){return l}});var n="{mdx-fields__slug}-module--article--e3d5a",l="{mdx-fields__slug}-module--noToc--82387",r="{mdx-fields__slug}-module--wrapper--58e72"},1151:function(e,t,a){a.d(t,{Zo:function(){return o},ah:function(){return r}});var n=a(7294);const l=n.createContext({});function r(e){const t=n.useContext(l);return n.useMemo((()=>"function"==typeof e?e(t):{...t,...e}),[t,e])}const c={};function o({components:e,children:t,disableParentContext:a}){let o;return o=a?"function"==typeof e?e({}):e||c:r(e),n.createElement(l.Provider,{value:o},t)}}}]);
//# sourceMappingURL=component---src-pages-mdx-fields-slug-tsx-content-file-path-content-instana-104-es-md-2e36057a1f2cb36583fe.js.map