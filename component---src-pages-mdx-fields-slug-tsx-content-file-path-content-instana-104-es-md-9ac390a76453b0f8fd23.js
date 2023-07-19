"use strict";(self.webpackChunkvad_var_site=self.webpackChunkvad_var_site||[]).push([[3189],{3533:function(e,a,n){n.r(a),n.d(a,{Head:function(){return b},default:function(){return g}});var t=n(1151),l=n(7294);function r(e){const a=Object.assign({section:"section",h1:"h1",h2:"h2",a:"a",p:"p",img:"img",ol:"ol",li:"li",code:"code",strong:"strong",em:"em"},(0,t.ah)(),e.components);return l.createElement(a.section,{className:"heading","data-heading-rank":"1","aria-labelledby":"104-pruebas-de-capacidad-y-caos"},l.createElement(a.h1,{id:"104-pruebas-de-capacidad-y-caos"},"104: Pruebas de capacidad y caos"),"\n",l.createElement(a.section,{className:"heading","data-heading-rank":"2","aria-labelledby":"analizando-una-prueba-de-capacidad-usando-instana"},l.createElement(a.h2,{id:"analizando-una-prueba-de-capacidad-usando-instana"},l.createElement(a.a,{href:"#analizando-una-prueba-de-capacidad-usando-instana"},"Analizando una prueba de capacidad usando Instana")),"\n",l.createElement(a.p,null,"La perspectiva de la aplicación le ofrece un panel general que le da una primera impresión útil del escenario de la prueba de capacidad."),"\n",l.createElement(a.img,{src:"/1689803284761.1887291342/application-perspective.png",alt:""}),"\n",l.createElement(a.p,null,"Instana le ofrecerá información en tiempo real sobre toda su plataforma, lo que le permitirá comprender al instante las consecuencias de su prueba de capacidad."),"\n",l.createElement(a.p,null,"Llevaremos a cabo una pequeña prueba en la plataforma de tienda robótica facilitada por (",l.createElement(a.a,{href:"https://github.com/instana/robot-shop/tree/master/load-gen"},"Instana"),")."),"\n",l.createElement(a.ol,null,"\n",l.createElement(a.li,null,"Ejecute el script de generación de capacidad ofrecido por Instana"),"\n"),"\n",l.createElement(a.p,null,"En un terminal ejecute este comando ",l.createElement(a.code,null,"./load-gen.sh")," bajo su versión de robot-shop en el directorio ",l.createElement(a.code,null,"load-gen"),"."),"\n",l.createElement(a.p,null,"La salida del script debe parecerse a la siguiente imagen:"),"\n",l.createElement(a.img,{src:"/1689803284773.1892291345/load-gen-script.png",alt:""}),"\n",l.createElement(a.ol,{start:"2"},"\n",l.createElement(a.li,null,"\n",l.createElement(a.p,null,"En la perspectiva de la aplicación para la tienda del robot, debería ver que el número de llamadas ha aumentado y que las llamadas erróneas también han aumentado."),"\n",l.createElement(a.img,{src:"/1689803284765.189291344/erroneous-calls.png",alt:""}),"\n"),"\n",l.createElement(a.li,null,"\n",l.createElement(a.p,null,"Utilización de la CPU y cambios de contexto durante la prueba de capacidad"),"\n",l.createElement(a.img,{src:"/1689803284761.1887291343/cpu-usage.png",alt:""}),"\n"),"\n"),"\n",l.createElement(a.p,null,"Cuando la memoria se consume por completo, el sistema empieza a intentar solucionar la situación."),"\n",l.createElement(a.p,null,"El consumo de CPU aumenta y el ",l.createElement(a.strong,null,"cambio de contexto")," se convierte en un problema cada vez más grave, hasta que se descontrola por completo. En este punto está bastante claro cual es la causa raíz del funcionamiento de la Aplicación - no hay suficientes recursos de hardware para manejar la capacidad . Esto tiene sentido teniendo en cuenta que nuestra enorme pila tecnológica se está ejecutando en una máquina pequeña."),"\n",l.createElement(a.ol,{start:"4"},"\n",l.createElement(a.li,null,"Ver todas las trazas de API"),"\n"),"\n",l.createElement(a.p,null,"Exploremos una traza API seleccionándola de la lista ",l.createElement(a.em,null,"Top Traces")," para ver detalles sobre esas solicitudes.\nCon un solo clic en el enlace, cortamos a través de los datos de rastreo para obtener sólo las trazas relevantes. De la vista general podemos deducir qué servicio está involucrado y la latencia de cada una de las llamadas erróneas."),"\n",l.createElement(a.img,{src:"/1689803284773.1892291346/trace-calls.png",alt:""}),"\n",l.createElement(a.p,null,"Una prueba de capacidad, por muy realista que sea, sólo vale lo que se puede sacar de su análisis. Dado que Instana facilita aún más este proceso, es un complemento perfecto para las pruebas de capacidad.")))}var c=function(e){void 0===e&&(e={});const{wrapper:a}=Object.assign({},(0,t.ah)(),e.components);return a?l.createElement(a,e,l.createElement(r,e)):r(e)},o=n(4184),s=n.n(o),i=n(4690),d=n(1140),u=n(2565),m=n(8531),p=n(3383),f=n(7315);const E=e=>{const{data:{mdx:{tableOfContents:{items:a},frontmatter:{toc:n=!0,title:t,timeToComplete:r,updated:c}}},children:o}=e,i=(0,l.useRef)(null),{0:E}=(0,l.useState)(""),b=(null===n||n)&&a;return l.createElement(l.Fragment,null,l.createElement(d.Z,{timeToComplete:r,updated:c},a[0].title||t||""),l.createElement(m.Z,{className:f.YS},l.createElement("article",{className:s()(f.Y2,!b&&f.ey),ref:i},l.createElement(u.Z,{components:{h1:()=>null}},o)),b&&l.createElement(p.Z,{itemsList:a,maxDepth:2,currSection:E})))},b=e=>{const{location:{pathname:a},data:{mdx:{frontmatter:{title:n},tableOfContents:{items:t}}}}=e;return l.createElement(i.Z,{pathname:a,title:n||t[0].title||void 0})};function g(e){return l.createElement(E,e,l.createElement(c,e))}},2565:function(e,a,n){n.d(a,{Z:function(){return o}});var t=n(7294),l=n(1151),r=n(7563);const c={table:r.y6,a:r.IW,blockquote:r.R4,SubHeader:r.bU,img:r.fb,code:r.dn,QuizAlert:r.SA,Danger:r.b0,Warning:r.v3,CopyText:r.O5};var o=(0,t.memo)((function(e){let{children:a,components:n={}}=e;return t.createElement(l.Zo,{components:{...c,...n}},a)}))},3383:function(e,a,n){n.d(a,{Z:function(){return i}});var t=n(7294),l=n(7500),r=n(4184),c=n.n(r),o=n(6488);const s=function(e,a,n){return void 0===a&&(a=[]),void 0===n&&(n=0),e.forEach((e=>{const{title:t,url:l,items:r}=e;a.splice(a.length,0,{depth:n,title:t,url:l}),r&&r.length>0&&s(r,a,n+1)})),a};var i=e=>{const{itemsList:a}=e,n=(0,t.useMemo)((()=>s(a[0].items||[])),[a]),r=(0,o.Z)("h1[id],h2[id]",{threshold:[0,1],rootMargin:"-48px 0px -90% 0px"});return n.length<1?null:t.createElement("nav",{className:"TableOfContents-module--toc--54d35"},t.createElement("div",{className:"TableOfContents-module--tocStack--90609"},t.createElement("h6",{className:"TableOfContents-module--tocHeader--05956"},t.createElement(l.rU,{to:"#",replace:!0},"On this page")),n.map(((e,a)=>{let{title:n,url:l}=e;return t.createElement("a",{className:c()("TableOfContents-module--link--b292b",r===l.substring(1)&&"TableOfContents-module--activeItem--3869f"),key:a,href:l},n)}))))}},7315:function(e,a,n){n.d(a,{Y2:function(){return t},YS:function(){return r},ey:function(){return l}});var t="{mdx-fields__slug}-module--article--e3d5a",l="{mdx-fields__slug}-module--noToc--82387",r="{mdx-fields__slug}-module--wrapper--58e72"},1151:function(e,a,n){n.d(a,{Zo:function(){return o},ah:function(){return r}});var t=n(7294);const l=t.createContext({});function r(e){const a=t.useContext(l);return t.useMemo((()=>"function"==typeof e?e(a):{...a,...e}),[a,e])}const c={};function o({components:e,children:a,disableParentContext:n}){let o;return o=n?"function"==typeof e?e({}):e||c:r(e),t.createElement(l.Provider,{value:o},a)}}}]);
//# sourceMappingURL=component---src-pages-mdx-fields-slug-tsx-content-file-path-content-instana-104-es-md-9ac390a76453b0f8fd23.js.map