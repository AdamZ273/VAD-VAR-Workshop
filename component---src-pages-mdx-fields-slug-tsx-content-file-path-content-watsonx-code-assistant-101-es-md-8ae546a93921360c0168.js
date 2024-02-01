"use strict";(self.webpackChunkvad_var_site=self.webpackChunkvad_var_site||[]).push([[3043],{6477:function(e,n,a){a.r(n),a.d(n,{Head:function(){return h},default:function(){return E}});var t=a(1151),l=a(7294);function o(e){const n=Object.assign({section:"section",h1:"h1",h3:"h3",a:"a",p:"p",h2:"h2",ol:"ol",li:"li",strong:"strong",img:"img",code:"code",blockquote:"blockquote"},(0,t.ah)(),e.components);return l.createElement(n.section,{className:"heading","data-heading-rank":"1","aria-labelledby":"101-ibm-watsonx-code-assistant-wca-para-la-configuración-del-entorno-red-hat-ansible-lightspeed"},l.createElement(n.h1,{id:"101-ibm-watsonx-code-assistant-wca-para-la-configuración-del-entorno-red-hat-ansible-lightspeed"},"101: IBM watsonx Code Assistant (WCA) para la configuración del entorno Red Hat Ansible Lightspeed"),"\n",l.createElement(n.section,{className:"heading","data-heading-rank":"3","aria-labelledby":"objetivo"},l.createElement(n.h3,{id:"objetivo"},l.createElement(n.a,{href:"#objetivo"},"Objetivo")),"\n",l.createElement(n.p,null,"El objetivo de este laboratorio es aprovisionar, acceder y configurar IBM watsonx Code Assistant (WCA) para Red Hat Ansible Lightspeed IBM Technology Zone Environment para su uso en el siguiente laboratorio."),"\n"),l.createElement(n.section,{className:"heading","data-heading-rank":"2","aria-labelledby":"provisión-de-entorno-de-zona-tecnológica-de-ibm"},l.createElement(n.h2,{id:"provisión-de-entorno-de-zona-tecnológica-de-ibm"},l.createElement(n.a,{href:"#provisión-de-entorno-de-zona-tecnológica-de-ibm"},"Provisión de entorno de zona tecnológica de IBM")),"\n",l.createElement(n.ol,null,"\n",l.createElement(n.li,null,"Navegue ",l.createElement(n.a,{href:"https://techzone.ibm.com/collection/ibm-watson-x-code-assistant-for-ansible-lightspeed/environments"},"aquí")," para reservar y aprovisionar una máquina virtual (VM) Linux con Visual Studio (VS) Code e IBM watsonx Code Assistant para Red Hat Ansible Lightspeed preinstalados."),"\n",l.createElement(n.li,null,"Seleccione el mosaico ",l.createElement(n.strong,null,"Main WCA for Ansible Demo: Visual Studio Desktop 1.2")," tile."),"\n"),"\n",l.createElement(n.img,{src:"https://raw.githubusercontent.com/ibm-build-lab/VAD-VAR-Workshop/main/content//Watsonx/CodeAssistant/images/techzone-tile.png",alt:""}),"\n",l.createElement(n.ol,{start:"3"},"\n",l.createElement(n.li,null,"Para el tipo de reserva, seleccione el botón de opción ",l.createElement(n.strong,null,"Reservar ahora"),"."),"\n"),"\n",l.createElement(n.img,{src:"https://raw.githubusercontent.com/ibm-build-lab/VAD-VAR-Workshop/main/content//Watsonx/CodeAssistant/images/techzone-reserve-now.png",alt:""}),"\n",l.createElement(n.ol,{start:"4"},"\n",l.createElement(n.li,null,"Acepte el ",l.createElement(n.strong,null,"nombre")," predeterminado para la reserva o introduzca un nombre de su elección. Para el Propósito de la reserva, seleccione ",l.createElement(n.strong,null,"Práctica / Autoformación"),"."),"\n"),"\n",l.createElement(n.img,{src:"https://raw.githubusercontent.com/ibm-build-lab/VAD-VAR-Workshop/main/content//Watsonx/CodeAssistant/images/techzone-name-purpose.png",alt:""}),"\n",l.createElement(n.ol,{start:"5"},"\n",l.createElement(n.li,null,"Rellene la casilla ",l.createElement(n.strong,null,"Descripción del propósito")," con el motivo por el que realiza la reserva (por ejemplo, ",l.createElement(n.code,null,"Workshop lab on watsonx Code Assistant for Red Hat Ansible Lightspeed Technical Sales Intermediate Badge organized by IBM Resell Lab"),"). A continuación, desplácese más abajo y seleccione su ",l.createElement(n.strong,null,"Geografía preferida")," en función de su ubicación (por ejemplo, AMÉRICA - región este de EE.UU. - centro de datos wdc04). Mantenga la ",l.createElement(n.strong,null,"fecha y hora de finalización de")," la reserva (por defecto son dos días (48 horas) a partir de ahora; inicialmente no puede superar los dos días, pero puede ampliar la reserva dos días más, hasta dos veces, antes de que caduque)."),"\n"),"\n",l.createElement(n.img,{src:"https://raw.githubusercontent.com/ibm-build-lab/VAD-VAR-Workshop/main/content//Watsonx/CodeAssistant/images/techzone-description-geography-datetime.png",alt:""}),"\n",l.createElement(n.ol,{start:"6"},"\n",l.createElement(n.li,null,"En el panel de la derecha, siga los enlaces para leer los documentos Términos y condiciones y Políticas de seguridad del usuario final. A continuación, marque la casilla para aceptar las condiciones. Por último, haga clic en Enviar."),"\n"),"\n",l.createElement(n.img,{src:"https://raw.githubusercontent.com/ibm-build-lab/VAD-VAR-Workshop/main/content//Watsonx/CodeAssistant/images/techzone-agree-submit.png",alt:""}),"\n",l.createElement(n.p,null,"Aparecerá brevemente un mensaje en la esquina superior derecha indicando que se ha creado la reserva. También se le ofrecerá la oportunidad de dar su opinión sobre el proceso. No dude en compartir sus comentarios."),"\n",l.createElement(n.p,null,"Poco después, recibirá un correo electrónico de IBM Technology Zone acusando recibo de la solicitud y recibirá otro correo electrónico cuando se haya completado el aprovisionamiento. El aprovisionamiento puede ser tan rápido como 15 minutos, o puede tardar una hora o más. Si el aprovisionamiento falla, puede deberse a la falta de recursos en el área geográfica especificada. Inténtelo de nuevo con la misma zona geográfica o especifique una diferente."),"\n",l.createElement(n.p,null,"Ahora debe esperar hasta que el entorno se haya aprovisionado antes de pasar a la siguiente sección. En concreto, podrá continuar con la siguiente sección una vez que haya recibido el correo electrónico Reserva lista en IBM Technology Zone de IBM Technology Zone."),"\n",l.createElement(n.p,null,"El estado de las reservas puede consultarse en ",l.createElement(n.a,{href:"https://techzone.ibm.com/my/reservations"},"https://techzone.ibm.com/my/reservations.")),"\n"),l.createElement(n.section,{className:"heading","data-heading-rank":"2","aria-labelledby":"acceder-y-configurar-el-entorno-de-la-zona-tecnológica-de-ibm"},l.createElement(n.h2,{id:"acceder-y-configurar-el-entorno-de-la-zona-tecnológica-de-ibm"},l.createElement(n.a,{href:"#acceder-y-configurar-el-entorno-de-la-zona-tecnológica-de-ibm"},"Acceder y configurar el entorno de la zona tecnológica de IBM")),"\n",l.createElement(n.ol,null,"\n",l.createElement(n.li,null,"Una vez que haya recibido el correo electrónico de Reserva lista en IBM Technology Zone de IBM Technology Zone, acceda a su entorno recién aprovisionado ",l.createElement(n.a,{href:"https://techzone.ibm.com/my/reservations"},"aquí")," y seleccione el mosaico ",l.createElement(n.strong,null,"Main WCA for Ansible Demo: Visual Studio Desktop 1.2"),"."),"\n"),"\n",l.createElement(n.img,{src:"https://raw.githubusercontent.com/ibm-build-lab/VAD-VAR-Workshop/main/content//Watsonx/CodeAssistant/images/techzone-reservation.png",alt:""}),"\n",l.createElement(n.ol,{start:"2"},"\n",l.createElement(n.li,null,"En la sección ",l.createElement(n.strong,null,"Servicios publicados"),", haga clic en el enlace ",l.createElement(n.strong,null,"noVNC"),". Se abrirá una nueva ventana."),"\n"),"\n",l.createElement(n.img,{src:"https://raw.githubusercontent.com/ibm-build-lab/VAD-VAR-Workshop/main/content//Watsonx/CodeAssistant/images/techzone-novnc.png",alt:""}),"\n",l.createElement(n.ol,{start:"3"},"\n",l.createElement(n.li,null,"En la ventana recién abierta, pulse ",l.createElement(n.strong,null,"Conectar")),"\n"),"\n",l.createElement(n.img,{src:"https://raw.githubusercontent.com/ibm-build-lab/VAD-VAR-Workshop/main/content//Watsonx/CodeAssistant/images/novnc-connect.png",alt:""}),"\n",l.createElement(n.ol,{start:"4"},"\n",l.createElement(n.li,null,"Para la contraseña, escriba ",l.createElement(n.code,null,"IBMDem0s!")," y pulse ",l.createElement(n.strong,null,"Enviar credenciales"),". Una vez iniciada la sesión, debería ver el escritorio de inicio de su máquina virtual Linux (VM)."),"\n",l.createElement(n.li,null,"En el docker, seleccione y abra ",l.createElement(n.strong,null,"Visual Studio Code")),"\n"),"\n",l.createElement(n.img,{src:"https://raw.githubusercontent.com/ibm-build-lab/VAD-VAR-Workshop/main/content//Watsonx/CodeAssistant/images/vm-vsc.png",alt:""}),"\n",l.createElement(n.ol,{start:"6"},"\n",l.createElement(n.li,null,"En la ventana emergente ",l.createElement(n.strong,null,"Autenticación requerida")," en Visual Studio Code, escriba ",l.createElement(n.code,null,"IBMDem0s!")," y pulse ",l.createElement(n.strong,null,"Desbloquear"),"."),"\n"),"\n",l.createElement(n.img,{src:"https://raw.githubusercontent.com/ibm-build-lab/VAD-VAR-Workshop/main/content//Watsonx/CodeAssistant/images/vsc-authentication.png",alt:""}),"\n",l.createElement(n.p,null,'Para empezar a experimentar con las capacidades de IA generativa de WCA, primero necesitarás acceso a algunos Playbooks de Ansible con los que generar Tareas. Los Playbooks ya han sido preparados con antelación, y los utilizarás aquí. Necesitas clonar (replicar) los Playbooks desde GitHub a una carpeta en tu máquina local. Una petición "clone" en GitHub es esencialmente una petición para replicar código desde el repositorio alojado en la nube al entorno local (VS Code y máquina local).'),"\n",l.createElement(n.ol,{start:"7"},"\n",l.createElement(n.li,null,"Para realizar una solicitud de clonación con VS Code, pulse ",l.createElement(n.code,null,"CTRL")," + ",l.createElement(n.code,null,"Shift")," + ",l.createElement(n.code,null,"P")," para abrir una consola ejecutable en la parte superior de VS Code."),"\n",l.createElement(n.li,null,"Introduce ",l.createElement(n.code,null,"git:clone")," en la consola y pulsa ",l.createElement(n.code,null,"Return")," para confirmar."),"\n"),"\n",l.createElement(n.img,{src:"https://raw.githubusercontent.com/ibm-build-lab/VAD-VAR-Workshop/main/content//Watsonx/CodeAssistant/images/vsc-gitclone.png",alt:""}),"\n",l.createElement(n.ol,{start:"9"},"\n",l.createElement(n.li,null,"Ahora debes especificar el repositorio público desde el que clonar los datos. Copia y pega ",l.createElement(n.code,null,"https://github.com/craig-br/lightspeed-demos.git")," en la consola y pulsa ",l.createElement(n.code,null,"Return")," para confirmar."),"\n"),"\n",l.createElement(n.blockquote,null,"\n",l.createElement(n.p,null,l.createElement(n.strong,null,"Nota:")," Puede copiar y pegar utilizando el portapapeles de arriba"),"\n"),"\n",l.createElement(n.ol,{start:"10"},"\n",l.createElement(n.li,null,"Se te pedirá que selecciones (utilizando el explorador de archivos de tu máquina local) el destino donde se guardarán localmente los datos clonados. Selecciona ",l.createElement(n.strong,null,"Documentos")," (o tu preferencia) y luego confirma haciendo clic en ",l.createElement(n.strong,null,"Seleccionar como destino del repositorio")," para iniciar la replicación desde GitHub a tu máquina local."),"\n"),"\n",l.createElement(n.img,{src:"https://raw.githubusercontent.com/ibm-build-lab/VAD-VAR-Workshop/main/content//Watsonx/CodeAssistant/images/cloned-data-location.png",alt:""}),"\n",l.createElement(n.ol,{start:"11"},"\n",l.createElement(n.li,null,"Aparecerá un mensaje preguntando ",l.createElement(n.strong,null,"¿Desea abrir el repositorio clonado o añadirlo al espacio de trabajo actual?")," - pulse ",l.createElement(n.strong,null,"Abrir"),"."),"\n"),"\n",l.createElement(n.img,{src:"https://raw.githubusercontent.com/ibm-build-lab/VAD-VAR-Workshop/main/content//Watsonx/CodeAssistant/images/open-clone-prompt.png",alt:""}),"\n",l.createElement(n.p,null,"A continuación, deberá activar su extensión Ansible Lightspeed Technical Preview para VS Code."),"\n",l.createElement(n.ol,{start:"12"},"\n",l.createElement(n.li,null,"En la barra lateral izquierda, haga clic en el icono ",l.createElement(n.strong,null,"Extensiones")," (como se muestra en la siguiente captura de pantalla) para abrir el mercado de servicios de Microsoft y tecnologías de código abierto que pueden integrarse con VS Code."),"\n"),"\n",l.createElement(n.img,{src:"https://raw.githubusercontent.com/ibm-build-lab/VAD-VAR-Workshop/main/content//Watsonx/CodeAssistant/images/vsc-sidebar-extensions.png",alt:""}),"\n",l.createElement(n.ol,{start:"13"},"\n",l.createElement(n.li,null,'Localice en la lista la extensión de Ansible instalada y haga clic en el icono mecánico de "engranaje" (como se muestra a continuación), situado en la parte derecha del mosaico de servicios de Ansible. En la lista desplegable de opciones, haga clic en ',l.createElement(n.strong,null,"Configuración de la extensión"),"."),"\n"),"\n",l.createElement(n.img,{src:"https://raw.githubusercontent.com/ibm-build-lab/VAD-VAR-Workshop/main/content//Watsonx/CodeAssistant/images/ansible-extension.png",alt:""}),"\n",l.createElement(n.ol,{start:"14"},"\n",l.createElement(n.li,null,"Un panel de configuración para Ansible llenará la pantalla. Seleccione la opción ",l.createElement(n.strong,null,"Espacio de trabajo"),"."),"\n"),"\n",l.createElement(n.img,{src:"https://raw.githubusercontent.com/ibm-build-lab/VAD-VAR-Workshop/main/content//Watsonx/CodeAssistant/images/ansible-workspace.png",alt:""}),"\n",l.createElement(n.ol,{start:"15"},"\n",l.createElement(n.li,null,"Desplácese por la lista de ajustes hasta localizar los campos ",l.createElement(n.strong,null,"Ansible > Lightspeed")," y ",l.createElement(n.strong,null,"Ansible > Lightspeed > Sugerencias"),". Por defecto, estarán desactivados. Haga clic en los iconos de marca de verificación a la izquierda de ",l.createElement(n.strong,null,"AMBAS")," entradas para ",l.createElement(n.strong,null,"HABILITAR")," las funciones de IBM watsonx Code Assistant para Red Hat Ansible Lightspeed Tech Preview dentro del entorno VS Code."),"\n"),"\n",l.createElement(n.p,null,'Los ajustes se aplicarán automáticamente sin necesidad de confirmarlos o "guardarlos" manualmente. Para continuar, cierre la pestaña Configuración con el icono X situado en la parte superior de la barra de tareas.'),"\n",l.createElement(n.img,{src:"https://raw.githubusercontent.com/ibm-build-lab/VAD-VAR-Workshop/main/content//Watsonx/CodeAssistant/images/ansible-settings.png",alt:""}),"\n",l.createElement(n.ol,{start:"16"},"\n",l.createElement(n.li,null,"Debido a un problema con el token de inicio de sesión desde la creación del entorno, tiene que volver a iniciar sesión en Ansible Lightspeed. Para ello, en la barra lateral izquierda del entorno VS Code, haga clic en el icono ",l.createElement(n.strong,null,"Cuentas")," (como se muestra en la siguiente captura de pantalla), localice el usuario de Ansible Lightspeed (por ejemplo, ",l.createElement(n.code,null,"ibm-wxca-demo-user-1"),") y pulse ",l.createElement(n.strong,null,"Cerrar")," sesión. En la ventana emergente, pulse ",l.createElement(n.strong,null,"Cerrar")," sesión de nuevo."),"\n"),"\n",l.createElement(n.img,{src:"https://raw.githubusercontent.com/ibm-build-lab/VAD-VAR-Workshop/main/content//Watsonx/CodeAssistant/images/ansible-logout.png",alt:""}),"\n",l.createElement(n.ol,{start:"17"},"\n",l.createElement(n.li,null,'Para volver a iniciar sesión, haga clic en el icono Ansible de la barra lateral del entorno VS Code (busque el icono "A" grande). Se abrirá un panel mostrando detalles sobre Ansible Lightspeed Login. Haga clic en el botón azul ',l.createElement(n.strong,null,"Connect")," para iniciar la herramienta de autorización. Aparecerá una ventana emergente indicando que ",l.createElement(n.strong,null,"The extension Ansible wants to sign in using Ansible Lightspeed")," - click ",l.createElement(n.strong,null,"Allow"),". A continuación, se le preguntará acerca de la apertura de un sitio web externo - haga clic en ",l.createElement(n.strong,null,"Abrir"),"."),"\n"),"\n",l.createElement(n.img,{src:"https://raw.githubusercontent.com/ibm-build-lab/VAD-VAR-Workshop/main/content//Watsonx/CodeAssistant/images/ansible-login.png",alt:""}),"\n",l.createElement(n.ol,{start:"18"},"\n",l.createElement(n.li,null,"A continuación, su navegador web cargará una página en la que se le pedirá que inicie sesión. Haga clic en la opción ",l.createElement(n.strong,null,"Iniciar sesión con Red")," Hat. Acepte los acuerdos de licencia que acompañan a la solicitud de inicio de sesión."),"\n"),"\n",l.createElement(n.img,{src:"https://raw.githubusercontent.com/ibm-build-lab/VAD-VAR-Workshop/main/content//Watsonx/CodeAssistant/images/browser-login.png",alt:""}),"\n",l.createElement(n.ol,{start:"19"},"\n",l.createElement(n.li,null,"Utilice el nombre de usuario de Red Hat rellenado previamente y pulse ",l.createElement(n.strong,null,"Siguiente"),". Para la contraseña, pulse en la línea de contraseña para que aparezca la contraseña de autorrelleno para el inicio de sesión rellenado previamente. Seleccione la contraseña de autorrelleno y pulse ",l.createElement(n.strong,null,"Iniciar sesión"),"."),"\n"),"\n",l.createElement(n.img,{src:"https://raw.githubusercontent.com/ibm-build-lab/VAD-VAR-Workshop/main/content//Watsonx/CodeAssistant/images/browser-password.png",alt:""}),"\n",l.createElement(n.ol,{start:"20"},"\n",l.createElement(n.li,null,"Se le pedirá que autorice Ansible Lightspeed para VS Code - haga clic en ",l.createElement(n.strong,null,"Autorizar"),". Volverá a VS Code y habrá iniciado sesión en Ansible Lightspeed."),"\n"),"\n",l.createElement(n.img,{src:"https://raw.githubusercontent.com/ibm-build-lab/VAD-VAR-Workshop/main/content//Watsonx/CodeAssistant/images/browser-authorize.png",alt:""}),"\n",l.createElement(n.section,{className:"heading","data-heading-rank":"3","aria-labelledby":"enhorabuena-ha-llegado-al-final-del-laboratorio-101"},l.createElement(n.h3,{id:"enhorabuena-ha-llegado-al-final-del-laboratorio-101"},l.createElement(n.a,{href:"#enhorabuena-ha-llegado-al-final-del-laboratorio-101"},"Enhorabuena, ha llegado al final del laboratorio 101.")),"\n",l.createElement(n.p,null,"Haga clic en, ",l.createElement(n.a,{href:"/watsonx/codeassistant/102"},"laboratorio 102")," para iniciar el siguiente laboratorio."))))}var r=function(e){void 0===e&&(e={});const{wrapper:n}=Object.assign({},(0,t.ah)(),e.components);return n?l.createElement(n,e,l.createElement(o,e)):o(e)},i=a(4184),s=a.n(i),c=a(4690),d=a(1140),m=a(8623),u=a(8531),p=a(3383),g=a(7315);const b=e=>{const{data:{mdx:{tableOfContents:{items:n},frontmatter:{toc:a=!0,title:t,timeToComplete:o,updated:r}}},children:i}=e,c=(0,l.useRef)(null),{0:b}=(0,l.useState)(""),h=(null===a||a)&&n;return l.createElement(l.Fragment,null,l.createElement(d.Z,{timeToComplete:o,updated:r},n[0].title||t||""),l.createElement(u.Z,{className:g.YS},l.createElement("article",{className:s()(g.Y2,!h&&g.ey),ref:c},l.createElement(m.Z,{components:{h1:()=>null}},i)),h&&l.createElement(p.Z,{itemsList:n,maxDepth:2,currSection:b})))},h=e=>{const{location:{pathname:n},data:{mdx:{frontmatter:{title:a},tableOfContents:{items:t}}}}=e;return l.createElement(c.Z,{pathname:n,title:a||t[0].title||void 0})};function E(e){return l.createElement(b,e,l.createElement(r,e))}}}]);
//# sourceMappingURL=component---src-pages-mdx-fields-slug-tsx-content-file-path-content-watsonx-code-assistant-101-es-md-8ae546a93921360c0168.js.map