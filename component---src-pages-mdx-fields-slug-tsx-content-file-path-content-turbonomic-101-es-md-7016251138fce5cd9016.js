"use strict";(self.webpackChunkvad_var_site=self.webpackChunkvad_var_site||[]).push([[2745],{2990:function(e,a,n){n.r(a),n.d(a,{Head:function(){return b},default:function(){return E}});var t=n(1151),r=n(7294);function i(e){const a=Object.assign({section:"section",h1:"h1",h2:"h2",a:"a",p:"p",strong:"strong",h3:"h3",ul:"ul",li:"li",h4:"h4",img:"img"},(0,t.ah)(),e.components);return r.createElement(r.Fragment,null,r.createElement(a.section,{className:"heading","data-heading-rank":"1","aria-labelledby":"101-visión-general-de-turbonomic-y-ambiente-de-laboratorio"},r.createElement(a.h1,{id:"101-visión-general-de-turbonomic-y-ambiente-de-laboratorio"},"101: Visión general de Turbonomic y ambiente de laboratorio"),"\n",r.createElement(a.section,{className:"heading","data-heading-rank":"2","aria-labelledby":"objetivo"},r.createElement(a.h2,{id:"objetivo"},r.createElement(a.a,{href:"#objetivo"},"Objetivo")),"\n",r.createElement(a.p,null,"En esta sesión de prueba de tecnología, realizará una serie de laboratorios para explorar Turbonomic y sus componentes y recorrer escenarios en los que esta herramienta de APM puede ofrecer ventajas."),"\n")),r.createElement(a.section,{className:"heading","data-heading-rank":"1","aria-labelledby":"introducción"},r.createElement(a.h1,{id:"introducción"},"Introducción"),"\n",r.createElement(a.p,null,"La administración de recursos de aplicaciones es un enfoque descendente e impulsado por las aplicaciones que analiza continuamente las necesidades de recursos de las aplicaciones y genera acciones totalmente automatizables para garantizar que las aplicaciones siempre obtengan lo que necesitan para funcionar. Funciona 24/7/365 y se adapta a los ambientes más grandes y complejos."),"\n",r.createElement(a.p,null,"Para llevar a cabo la administración de recursos de aplicaciones, Turbonomic representa su ambiente de forma holística como una cadena de suministro de compradores y vendedores de recursos, todos trabajando juntos para satisfacer la demanda de las aplicaciones. Al dotar a los compradores (máquinas virtuales, instancias, contenedores y servicios) de un presupuesto para buscar los recursos que las aplicaciones necesitan para funcionar, y a los vendedores para fijar el precio de sus recursos disponibles (CPU, memoria, almacenamiento, red) en función de la utilización en tiempo real, Turbonomic mantiene su ambiente dentro del estado deseado: condiciones de funcionamiento que logran los siguientes objetivos contradictorios al mismo tiempo:"),"\n",r.createElement(a.p,null,r.createElement(a.strong,null,"Rendimiento garantizado de las aplicaciones"),": evite los embotellamiento, aumente el tamaño de los contenedores/VM, priorice la carga de trabajo y reduzca la latencia del almacenamiento."),"\n",r.createElement(a.p,null,r.createElement(a.strong,null,"Uso eficiente de los recursos"),": consolide las cargas de trabajo para reducir el uso de la infraestructura al mínimo, reduzca el tamaño de los contenedores, evite la proliferación y utilice las ofertas de nube más económicas."),"\n",r.createElement(a.section,{className:"heading","data-heading-rank":"2","aria-labelledby":"descripción-general-de-las-acciones-de-turbonomic"},r.createElement(a.h2,{id:"descripción-general-de-las-acciones-de-turbonomic"},r.createElement(a.a,{href:"#descripción-general-de-las-acciones-de-turbonomic"},"Descripción general de las acciones de Turbonomic")),"\n",r.createElement(a.p,null,"Después de desplegar sus objetivos, Turbonomic empieza a realizar análisis de mercado como parte de su proceso de administración de recursos de aplicaciones. Este análisis holístico identifica problemas en su ambiente y las acciones que puede tomar para resolver y evitar estos problemas. A partir de ahí, Turbonomic genera un conjunto de acciones para ese análisis en particular y lo muestra en los gráficos de Acciones pendientes para que usted lo investigue."),"\n",r.createElement(a.section,{className:"heading","data-heading-rank":"3","aria-labelledby":"tipos-de-acciones-en-turbonomic"},r.createElement(a.h3,{id:"tipos-de-acciones-en-turbonomic"},r.createElement(a.a,{href:"#tipos-de-acciones-en-turbonomic"},"Tipos de acciones en Turbonomic")),"\n",r.createElement(a.ul,null,"\n",r.createElement(a.li,null,"\n",r.createElement(a.p,null,r.createElement(a.strong,null,"Colocación")," - Estas acciones determinan el mejor proveedor para una entidad. Incluyen la colocación inicial de una nueva entidad y las acciones de movimiento que la cambian para utilizar un proveedor diferente. Por ejemplo, mover una máquina virtual la asigna a un host diferente. Mover el almacenamiento de una VM significa que la VM utilizará un almacén de datos diferente."),"\n"),"\n",r.createElement(a.li,null,"\n",r.createElement(a.p,null,r.createElement(a.strong,null,"Escalado")," - Redimensiona la asignación de recursos, basándose en el consumo.\nAumentar el tamaño, se muestra como una inversión necesaria.\nRedimensionar hacia abajo, se muestra como ahorro.\nOptimización de Descuentos - Aumente la cobertura de los descuentos y reduzca los costes escalando las VMs a tipos de instancia a los que se aplican tarifas con descuento."),"\n"),"\n",r.createElement(a.li,null,"\n",r.createElement(a.p,null,r.createElement(a.strong,null,"Configuración")," - Se trata de acciones de reconfiguración y redimensionamiento. Las acciones de reconfiguración pueden añadir el acceso de red necesario o reconfigurar el almacenamiento. Las acciones de redimensionamiento asignan más o menos capacidad de recursos en una entidad, lo que puede incluir añadir o reducir VCPUs o VMem en una VM, añadir o reducir capacidad en un datastore, y añadir o reducir volúmenes en un array de discos."),"\n"),"\n",r.createElement(a.li,null,"\n",r.createElement(a.p,null,r.createElement(a.strong,null,"Iniciar/Comprar")," - Iniciar una nueva instancia para añadir capacidad al ambiente, mostrada como una inversión requerida. Para entornos de nube, comprar descuentos para reducir costes."),"\n"),"\n",r.createElement(a.li,null,"\n",r.createElement(a.p,null,r.createElement(a.strong,null,"Parar/Suspender")," - Suspender una instancia para incrementar el uso eficiente de los recursos, mostrado como ahorro."),"\n"),"\n",r.createElement(a.li,null,"\n",r.createElement(a.p,null,r.createElement(a.strong,null,"Eliminar"),": las acciones de eliminación afectan al almacenamiento. Por ejemplo, Turbonomic puede recomendarle que elimine los archivos desperdiciados para liberar espacio de almacenamiento o que elimine el almacenamiento no utilizado en su entorno de nube para reducir los costes de almacenamiento."),"\n"),"\n"),"\n"),r.createElement(a.section,{className:"heading","data-heading-rank":"3","aria-labelledby":"modos-de-acción"},r.createElement(a.h3,{id:"modos-de-acción"},r.createElement(a.a,{href:"#modos-de-acción"},"Modos de acción")),"\n",r.createElement(a.p,null,"Los modos de acción especifican el grado de automatización de las acciones generadas. Por ejemplo, en algunos ambientes, es posible que no desee automatizar la reducción del tamaño de las máquinas virtuales porque es una acción perjudicial. Utilizarías modos de acción en una política para establecer esa regla de negocio. Exploraremos esto más a fondo en el laboratorio de ",r.createElement(a.strong,null,"Políticas"),"."),"\n",r.createElement(a.p,null,"Turbonomic ofrece los siguientes modos de acción:"),"\n",r.createElement(a.p,null,"**Recomendar: recomienda la acción para que el usuario pueda ejecutarla a través del hipervisor o por otros medios."),"\n",r.createElement(a.p,null,r.createElement(a.strong,null,"Manual"),": recomienda la acción y ofrece la opción de ejecutarla a través de la interfaz de usuario de Turbonomic."),"\n",r.createElement(a.p,null,r.createElement(a.strong,null,"Automático"),": ejecuta la acción automáticamente. Esta automatización se define en las políticas. Exploraremos esto más a fondo en el laboratorio ",r.createElement(a.strong,null,"Políticas"),"."),"\n")),r.createElement(a.section,{className:"heading","data-heading-rank":"2","aria-labelledby":"qué-son-las-políticas-en-turbonomic"},r.createElement(a.h2,{id:"qué-son-las-políticas-en-turbonomic"},r.createElement(a.a,{href:"#qué-son-las-políticas-en-turbonomic"},"¿Qué son las políticas en Turbonomic?")),"\n",r.createElement(a.p,null,"Las políticas establecen reglas empresariales para controlar cómo Turbonomic analiza la asignación de recursos, cómo muestra el estado de los recursos y cómo recomienda o ejecuta acciones. Turbonomic incluye dos tipos fundamentales de políticas:"),"\n",r.createElement(a.section,{className:"heading","data-heading-rank":"4","aria-labelledby":"políticas-de-colocación"},r.createElement(a.h4,{id:"políticas-de-colocación"},r.createElement(a.a,{href:"#políticas-de-colocación"},"Políticas de colocación")),"\n",r.createElement(a.p,null,"Para optimizar su ambiente, Turbonomic recomienda acciones para colocar cargas de trabajo como aplicaciones, contenedores o máquinas virtuales en sus proveedores. Turbonomic puede recomendar estas acciones o ejecutarlas automáticamente."),"\n"),r.createElement(a.section,{className:"heading","data-heading-rank":"4","aria-labelledby":"políticas-de-automatización"},r.createElement(a.h4,{id:"políticas-de-automatización"},r.createElement(a.a,{href:"#políticas-de-automatización"},"Políticas de automatización")),"\n",r.createElement(a.p,null,"A medida que Turbonomic recopila métricas, compara los valores de las métricas con las restricciones y los ajustes de capacidad especificados para determinar si una métrica muestra un problema y qué acciones recomendar o ejecutar para evitar un problema. Turbonomic utiliza políticas de automatización para guiar su análisis y las acciones resultantes."),"\n")),r.createElement(a.section,{className:"heading","data-heading-rank":"2","aria-labelledby":"qué-es-un-target-en-instana"},r.createElement(a.h2,{id:"qué-es-un-target-en-instana"},r.createElement(a.a,{href:"#qué-es-un-target-en-instana"},"¿Qué es un target en Instana?")),"\n",r.createElement(a.p,null,"Un target es un servicio que realiza la administración en su ambiente virtual. Turbonomic utiliza targets para monitorizar la carga de trabajo y ejecutar acciones en su ambiente. Turbonomic se comunica con los targets a través del protocolo de administración que expone: la API REST, SMI-S, XML o algún otro transporte de administración. Turbonomic utiliza esta comunicación para descubrir las entidades administradas, supervisar la utilización de los recursos y ejecutar acciones."),"\n",r.createElement(a.p,null,"Turbonomic debe estar en una red que tenga acceso a los servicios específicos que desea configurar como targets."),"\n")),r.createElement(a.section,{className:"heading","data-heading-rank":"1","aria-labelledby":"ambiente-de-laboratorio"},r.createElement(a.h1,{id:"ambiente-de-laboratorio"},"Ambiente de laboratorio"),"\n",r.createElement(a.p,null,"Para realizar las sesiones de laboratorio, primero debe acceder a su ambiente. La mayoría de los laboratorios utilizarán la interfaz de usuario de Turbonomic. A continuación se muestra la lista de las instancias que utilizará durante esta sesión de prueba de tecnología."),"\n",r.createElement(a.p,null,r.createElement(a.strong,null,"Base VM")," - Este es su desktop principal. Ejecutará los laboratorios en esta máquina virtual. Se puede acceder utilizando el enlace proporcionado por su supervisor. El enlace debe iniciar automáticamente la sesión en el sistema (no se requiere usuario y contraseña)."),"\n",r.createElement(a.p,null,r.createElement(a.strong,null,"Turbonomic")," - Se podrá acceder a través del navegador web Firefox en su máquina virtual Bastion."),"\n",r.createElement(a.p,null,r.createElement(a.strong,null,"Instana")," - También será accesible a través de una máquina virtual Bastion."),"\n",r.createElement(a.p,null,r.createElement(a.strong,null,"Archivo de credenciales")," - El archivo que incluye todas las credenciales que necesitas para realizar este taller se llama ",r.createElement(a.strong,null,"Turbo-PoT-Credentials.html")," y está preconfigurado como una ventana del navegador en tu máquina virtual Bastion. Para acceder a él ve al desktop de tu Bastion VM y abre la ventana de Firefox desde las actividades en la parte superior izquierda de la pantalla. El archivo debería abrirse."),"\n",r.createElement(a.section,{className:"heading","data-heading-rank":"2","aria-labelledby":"acceder-a-bastion-vm"},r.createElement(a.h2,{id:"acceder-a-bastion-vm"},r.createElement(a.a,{href:"#acceder-a-bastion-vm"},"Acceder a Bastion VM")),"\n",r.createElement(a.p,null,"Utilice el enlace proporcionado por su supervisor. Una vez que haga clic en él, debería abrirse debajo de la página en su navegador. Haz click en el elemento ",r.createElement(a.strong,null,"Remote Desktop")," de la lista y se abrirá tu desktop de Bastion VM."),"\n",r.createElement(a.img,{src:"/1684433760769.37331089042/bastion.png",alt:""}),"\n",r.createElement(a.p,null,"Por defecto, todas las páginas que necesitarás para esta sesión estarán precargadas para ti, si no es así, navega a la esquina superior izquierda, haz clic en ",r.createElement(a.strong,null,"Activities")," y selecciona ",r.createElement(a.strong,null,"Firefox"),". Todas las páginas que necesites estarán en este navegador y se abrirán como nuevas pestañas."),"\n",r.createElement(a.img,{src:"/1684433760773.37331089043/bastion1.png",alt:""}),"\n"),r.createElement(a.section,{className:"heading","data-heading-rank":"2","aria-labelledby":"acceda-a-su-ambiente-de-turbonomic"},r.createElement(a.h2,{id:"acceda-a-su-ambiente-de-turbonomic"},r.createElement(a.a,{href:"#acceda-a-su-ambiente-de-turbonomic"},"Acceda a su ambiente de Turbonomic")),"\n",r.createElement(a.p,null,"La instancia de Turbonomic está preconfigurada en Firefox en su máquina virtual bastión. Si no la encuentra, consulte el archivo Turbo-PoT-Credentials para obtener la URL de Turbonomic y ábrala en el navegador de su máquina virtual Bastion."),"\n",r.createElement(a.img,{src:"/1684433760781.37331089044/desktop.png",alt:""}),"\n",r.createElement(a.section,{className:"heading","data-heading-rank":"3","aria-labelledby":"credenciales-de-turbonomic"},r.createElement(a.h3,{id:"credenciales-de-turbonomic"},r.createElement(a.a,{href:"#credenciales-de-turbonomic"},"Credenciales de Turbonomic")),"\n",r.createElement(a.p,null,"Nombre de usuario: administrator"),"\n",r.createElement(a.p,null,"Contraseña: Consulte ",r.createElement(a.strong,null,"Turbo-PoT-Credentials")," en su Bastion VM"),"\n",r.createElement(a.p,null,"Tenga en cuenta que su pestaña de Turbonomic en el navegador puede tener un mensaje de advertencia como se muestra a continuación. Haga clic en ",r.createElement(a.strong,null,"Advanced...")," y, a continuación, haga clic en ",r.createElement(a.strong,null,"Accept the Risk and Continue"),"."),"\n",r.createElement(a.img,{src:"/1684433760785.37351089045/desktop2.png",alt:""}),"\n"),r.createElement(a.section,{className:"heading","data-heading-rank":"3","aria-labelledby":"acceda-a-su-ambiente-instana"},r.createElement(a.h3,{id:"acceda-a-su-ambiente-instana"},r.createElement(a.a,{href:"#acceda-a-su-ambiente-instana"},"Acceda a su ambiente Instana")),"\n",r.createElement(a.p,null,"La interfaz de usuario de Instana también está preconfigurada en Firefox en su máquina virtual Bastion. No pasará mucho tiempo en la instancia de Instana, ya que está preconfigurada para usted. Sólo accederás a ella una vez para crear una clave API."),"\n",r.createElement(a.section,{className:"heading","data-heading-rank":"4","aria-labelledby":"credenciales-de-instana"},r.createElement(a.h4,{id:"credenciales-de-instana"},r.createElement(a.a,{href:"#credenciales-de-instana"},"Credenciales de Instana")),"\n",r.createElement(a.p,null,"Dirección IP del punto final: 10.0.0.2"),"\n",r.createElement(a.p,null,"Nombre de usuario: ",r.createElement(a.a,{href:"mailto:admin@instana.local"},"admin@instana.local")),"\n",r.createElement(a.p,null,"Contraseña: Consulte ",r.createElement(a.strong,null,"Turbo-PoT-Credentials")," en su Bastion VM"))))))}var o=function(e){void 0===e&&(e={});const{wrapper:a}=Object.assign({},(0,t.ah)(),e.components);return a?r.createElement(a,e,r.createElement(i,e)):i(e)},c=n(7315),l=n(3383),s=n(4690),d=n(8059),u=n(1140),m=n(8531);const p=e=>{const{data:{mdx:{tableOfContents:{items:a},frontmatter:{toc:n=!0,title:t,timeToComplete:i,updated:o}}},children:s}=e,p=(0,r.useRef)(null),{0:b,1:E}=(0,r.useState)("");(0,r.useEffect)((()=>{if(!p.current)return;const e=p.current.querySelectorAll("h2,h3,h4,h5"),a=new IntersectionObserver((e=>{e.forEach((e=>{e.isIntersecting&&E(e.target.id)}))}),{rootMargin:"0px 0px -95% 0px",threshold:0});return e.forEach((e=>{a.observe(e)})),()=>a.disconnect()}),[]);const g=(null===n||n)&&a;return r.createElement(r.Fragment,null,r.createElement(u.Z,{timeToComplete:i,updated:o},a[0].title||t||""),r.createElement(m.Z,{className:c.I},r.createElement("article",{className:c.Y,ref:p},r.createElement(d.Z,{components:{h1:()=>null}},s)),g&&r.createElement(l.Z,{itemsList:a,maxDepth:2,currSection:b})))},b=e=>{const{location:{pathname:a},data:{mdx:{frontmatter:{title:n},tableOfContents:{items:t}}}}=e;return r.createElement(s.Z,{pathname:a,title:n||t[0].title||void 0})};function E(e){return r.createElement(p,e,r.createElement(o,e))}}}]);
//# sourceMappingURL=component---src-pages-mdx-fields-slug-tsx-content-file-path-content-turbonomic-101-es-md-7016251138fce5cd9016.js.map