"use strict";(self.webpackChunkvad_var_site=self.webpackChunkvad_var_site||[]).push([[7878],{2877:function(e,a,n){n.r(a),n.d(a,{Head:function(){return v},default:function(){return h}});var l=n(1151),t=n(7294);function r(e){const a=Object.assign({section:"section",h1:"h1",h2:"h2",a:"a",p:"p",strong:"strong",ul:"ul",li:"li",h3:"h3",ol:"ol",img:"img",blockquote:"blockquote",code:"code",em:"em",pre:"pre",span:"span"},(0,l.ah)(),e.components);return t.createElement(a.section,{className:"heading","data-heading-rank":"1","aria-labelledby":"guía-de-preparación-de-la-demostración"},t.createElement(a.h1,{id:"guía-de-preparación-de-la-demostración"},"Guía de preparación de la demostración"),"\n",t.createElement(a.section,{className:"heading","data-heading-rank":"2","aria-labelledby":"introducción"},t.createElement(a.h2,{id:"introducción"},t.createElement(a.a,{href:"#introducción"},"Introducción")),"\n",t.createElement(a.p,null,"En este laboratorio, usted configurará una instancia de demostración del producto QRadar Security Information and Event Management con datos de muestra. Después, el ambiente puede ser usado para explorar las características clave del producto o para entregar una demostración a un cliente."),"\n",t.createElement(a.p,null,"Aquí están los enlaces complementarios para que usted pueda utilizar ",t.createElement(a.strong,null,"después")," de completar el taller en persona."),"\n",t.createElement(a.ul,null,"\n",t.createElement(a.li,null,"\n",t.createElement(a.p,null,"Vea el ",t.createElement(a.a,{href:"https://ibm.seismic.com/Link/Content/DCDJ8qCbhJPB28MTDjXBpB63WP7d"},"vídeo de ejemplo"),"que muestra cómo puede realizarse esta demostración."),"\n"),"\n",t.createElement(a.li,null,"\n",t.createElement(a.p,null,"Solicite una nueva demostración en vivo utilizando la ",t.createElement(a.a,{href:"https://ibm.biz/L300-SEIM-TZ"},"Instancia de QRadar reservada en la Zona Técnica"),"."),"\n"),"\n",t.createElement(a.li,null,"\n",t.createElement(a.p,null,"Prepare la demostración como se describe en esta ",t.createElement(a.a,{href:"/qradar-siem/102"},"guía de preparación de demostraciones"),"."),"\n"),"\n",t.createElement(a.li,null,"\n",t.createElement(a.p,null,"[OPCIONAL] Utilice la ",t.createElement(a.a,{href:"https://ibm.seismic.com/Link/Content/DCMh7JWdbXjQR89MR2TRjBJmPhJG"},"demo virtual, también conocida como demo click-through,"),"para este caso de uso."),"\n"),"\n"),"\n",t.createElement(a.section,{className:"heading","data-heading-rank":"3","aria-labelledby":"requisitos-previos"},t.createElement(a.h3,{id:"requisitos-previos"},t.createElement(a.a,{href:"#requisitos-previos"},"Requisitos previos")),"\n",t.createElement(a.p,null,"Aunque no es obligatorio, para obtener la mejor experiencia, se recomienda encarecidamente el uso de una VPN con ",t.createElement(a.a,{href:"https://www.wireguard.com/"},"WireGuard"),". Por favor, instale esta aplicación en su estación de trabajo antes de completar el intento de conectarse a QRadar utilizando la URL directa o SSH directo. Si está utilizando una plataforma Microsoft Windows 10 o posterior, incluye un cliente SSH. De lo contrario, puede instalar ",t.createElement(a.a,{href:"https://www.putty.org/"},"PuTTY")," o ",t.createElement(a.a,{href:"https://gitforwindows.org/"},"git bash")," para el acceso SSH directo."),"\n"),t.createElement(a.section,{className:"heading","data-heading-rank":"3","aria-labelledby":"opcional-solicitar-acceso-a-un-despliegue-en-directo"},t.createElement(a.h3,{id:"opcional-solicitar-acceso-a-un-despliegue-en-directo"},t.createElement(a.a,{href:"#opcional-solicitar-acceso-a-un-despliegue-en-directo"},"[OPCIONAL] Solicitar acceso a un despliegue en directo")),"\n",t.createElement(a.p,null,"Más adelante, si desea demostrar el caso de uso utilizando el sistema en vivo, puede solicitar acceso al sistema de demostración de QRadar SIEM en la Zona Tecnológica de IBM. Para el taller presencial, estos pasos ya se han realizado por usted, así que pase a la ",t.createElement(a.a,{href:"#learn-about-lab-architecture-and-get-access"},"siguiente sección")),"\n",t.createElement(a.p,null,"TODO - actualizar capturas de pantalla, TechZone ha cambiado"),"\n",t.createElement(a.ol,null,"\n",t.createElement(a.li,null,"\n",t.createElement(a.p,null,"Utilice el siguiente enlace para acceder a la instancia de QRadar en IBM TechZone."),"\n",t.createElement(a.p,null,t.createElement(a.a,{href:"https://ibm.biz/L300-SEIM-TZ"},"https://ibm.biz/L300-SIEM-TZ")),"\n",t.createElement(a.p,null,t.createElement(a.strong,null,"Sugerencia"),": La URL distingue entre mayúsculas y minúsculas."),"\n"),"\n",t.createElement(a.li,null,"\n",t.createElement(a.p,null,"Utiliza tu IBMid para autenticarte en el sitio."),"\n"),"\n",t.createElement(a.li,null,"\n",t.createElement(a.p,null,"En la barra de menú de la izquierda, seleccione ",t.createElement(a.strong,null,"Entornos"),"."),"\n",t.createElement(a.img,{src:"/1689963883619.8838291786/image1.png",alt:""}),"\n"),"\n",t.createElement(a.li,null,"\n",t.createElement(a.p,null,"Haga clic en ",t.createElement(a.strong,null,"Reservar"),"."),"\n",t.createElement(a.img,{src:"/1689963883635.8838291797/image2.png",alt:""}),"\n"),"\n",t.createElement(a.li,null,"\n",t.createElement(a.p,null,"Seleccione ",t.createElement(a.strong,null,"Reservar ahora"),"."),"\n",t.createElement(a.img,{src:"/1689963883643.8835291801/image3.png",alt:""}),"\n"),"\n",t.createElement(a.li,null,"\n",t.createElement(a.p,null,"En el formulario Rellene su reserva, rellene todos los campos y, en Geografía preferida, elija el centro de datos geográfico más cercano para reducir la latencia y mejorar la experiencia de demostración."),"\n",t.createElement(a.img,{src:"/1689963883647.8835291802/image4.png",alt:""}),"\n"),"\n",t.createElement(a.li,null,"\n",t.createElement(a.p,null,"Seleccione una hora de reserva adecuada y seleccione ",t.createElement(a.strong,null,"Habilitar")," para que VPN Access incluya un archivo de configuración para Wireguard."),"\n",t.createElement(a.blockquote,null,"\n",t.createElement(a.p,null,"La demo también ofrece dos extensiones."),"\n"),"\n",t.createElement(a.img,{src:"/1689963883647.8835291803/image5.png",alt:""}),"\n"),"\n",t.createElement(a.li,null,"\n",t.createElement(a.p,null,t.createElement(a.strong,null,"Envíe")," su reserva."),"\n"),"\n",t.createElement(a.li,null,"\n",t.createElement(a.p,null,"Para ver el estado de su nuevo entorno, vaya a ",t.createElement(a.strong,null,"Mis reservas"),"."),"\n",t.createElement(a.p,null,t.createElement(a.a,{href:"https://techzone.ibm.com/my/reservations"},"[https://techzone.ibm.com/my/reservations]")),"\n",t.createElement(a.img,{src:"/1689963883647.8835291804/image6.png",alt:""}),"\n",t.createElement(a.p,null,t.createElement(a.strong,null,"Sugerencia"),": La reserva tarda unos ",t.createElement(a.strong,null,"30 minutos")," en efectuarse. Después podrás acceder a la demo."),"\n"),"\n"),"\n")),t.createElement(a.section,{className:"heading","data-heading-rank":"2","aria-labelledby":"conozca-la-arquitectura-del-laboratorio-y-obtenga-acceso"},t.createElement(a.h2,{id:"conozca-la-arquitectura-del-laboratorio-y-obtenga-acceso"},t.createElement(a.a,{href:"#conozca-la-arquitectura-del-laboratorio-y-obtenga-acceso"},"Conozca la arquitectura del laboratorio y obtenga acceso")),"\n",t.createElement(a.p,null,"El laboratorio de QRadar SIEM utiliza dos máquinas virtuales."),"\n",t.createElement(a.ul,null,"\n",t.createElement(a.li,null,"CentOS 8"),"\n",t.createElement(a.li,null,"QRadar SIEM"),"\n"),"\n",t.createElement(a.p,null,"El sistema Linux CentOS se utiliza como sistema de salto para acceder a la máquina virtual QRadar SIEM a través de SSH (terminal) y HTTPS (navegador)."),"\n",t.createElement(a.ul,null,"\n",t.createElement(a.li,null,"Para el acceso SSH utilice la cuenta root y la contraseña ",t.createElement(a.code,null,"Q1d3m0")),"\n",t.createElement(a.li,null,"Para el acceso HTTPS, utilice la cuenta ",t.createElement(a.code,null,"admin")," y la contraseña ",t.createElement(a.code,null,"Q1d3m0.Demo")),"\n"),"\n",t.createElement(a.img,{src:"/1689963883647.8835291805/image7.png",alt:""}),"\n",t.createElement(a.p,null,"Para obtener la respuesta más rápida, recomendamos ",t.createElement(a.a,{href:"#using-wireguard-vpn-to-access-the-lab"},"utilizar VPN para acceder directamente al laboratorio"),", pero si no desea configurar el software adicional, que consiste en WireGuard y un cliente SSH, puede utilizar un navegador web para ",t.createElement(a.a,{href:"#using-the-jump-server-to-access-the-lab"},"acceder a un escritorio virtual en el servidor Jump"),"."),"\n",t.createElement(a.section,{className:"heading","data-heading-rank":"3","aria-labelledby":"usando-wireguard-vpn-para-acceder-al-laboratorio"},t.createElement(a.h3,{id:"usando-wireguard-vpn-para-acceder-al-laboratorio"},t.createElement(a.a,{href:"#usando-wireguard-vpn-para-acceder-al-laboratorio"},"Usando WireGuard VPN para acceder al laboratorio")),"\n",t.createElement(a.p,null,"Usted ya debe tener ",t.createElement(a.a,{href:"https://www.wireguard.com/"},"WireGuard")," instalado y funcionando en su estación de trabajo."),"\n",t.createElement(a.ol,null,"\n",t.createElement(a.li,null,"\n",t.createElement(a.p,null,"Una vez aprovisionada la demo, desde la página Mis reservas, haga clic en su demo reservada."),"\n",t.createElement(a.img,{src:"/1689963883647.8835291806/image8.png",alt:""}),"\n"),"\n",t.createElement(a.li,null,"\n",t.createElement(a.p,null,"Desplácese hasta la parte inferior de la página de reserva y haga clic en la descarga para la configuración de la VPN"),"\n",t.createElement(a.img,{src:"/1689963883651.8835291809/wg-config-dwnld.png",alt:"wg config dwnld"}),"\n"),"\n",t.createElement(a.li,null,"\n",t.createElement(a.p,null,"Una vez descargado el archivo ",t.createElement(a.code,null,"conf_wg_download.conf"),", desde la aplicación WireGuard, seleccione la opción ",t.createElement(a.strong,null,"Importar túnel(es) desde archivo")),"\n"),"\n",t.createElement(a.li,null,"\n",t.createElement(a.p,null,"Seleccione el archivo utilizando el explorador de archivos y haga clic en ",t.createElement(a.strong,null,"Importar"),". Inmediatamente después, si la aplicación o el sistema operativo le piden que añada el túnel, ",t.createElement(a.strong,null,"Permita")," la solicitud."),"\n",t.createElement(a.img,{src:"/1689963883655.8835291812/wireguard-import.png",alt:"wireguard import"}),"\n"),"\n",t.createElement(a.li,null,"\n",t.createElement(a.p,null,"Con la configuración seleccionada en el panel ",t.createElement(a.strong,null,"Manage WireGuard Tunnels"),", seleccione en ",t.createElement(a.strong,null,"Edit"),"."),"\n"),"\n",t.createElement(a.li,null,"\n",t.createElement(a.p,null,"Seleccione y elimine la entrada ",t.createElement(a.strong,null,"DNS"),", ya que este laboratorio no requerirá acceso para resolver nombres DNS a través de la VPN."),"\n",t.createElement(a.img,{src:"/1689963883651.8835291810/wg-delete-dns.png",alt:"wg delete dns"}),"\n"),"\n",t.createElement(a.li,null,"\n",t.createElement(a.p,null,t.createElement(a.strong,null,"Guardar")," la configuración actualizada"),"\n",t.createElement(a.img,{src:"/1689963883651.8835291811/wg-save-config.png",alt:"wg save config"}),"\n"),"\n",t.createElement(a.li,null,"\n",t.createElement(a.p,null,"Haga clic en el botón ",t.createElement(a.strong,null,"Activar")," para habilitar el túnel VPN y el estado cambiará a ",t.createElement(a.strong,null,"Activo"),"."),"\n"),"\n",t.createElement(a.li,null,"\n",t.createElement(a.p,null,"Acceda a la consola de QRadar. En una pestaña del navegador, abra ",t.createElement(a.a,{href:"https://172.16.60.10"},"https://172.16.60.10,")," acepte las advertencias de certificado que se presenten e inicie sesión con el usuario ",t.createElement(a.code,null,"admin")," y la contraseña ",t.createElement(a.code,null,"Q1d3m0.Demo"),", a continuación, haga clic en ",t.createElement(a.strong,null,"Iniciar sesión"),"."),"\n",t.createElement(a.img,{src:"/1689963883651.8835291808/qradar-direct.png",alt:"qradar-direct"}),"\n"),"\n"),"\n",t.createElement(a.p,null,"Si el inicio de sesión es exitoso, usted tiene acceso directo desde su estación de trabajo a la instancia en vivo de QRadar. Siga adelante para ",t.createElement(a.a,{href:"#verify-and-configure-the-live-demo-setup"},"verificar el entorno"),"."),"\n"),t.createElement(a.section,{className:"heading","data-heading-rank":"3","aria-labelledby":"utilizar-el-servidor-de-salto-para-acceder-al-laboratorio"},t.createElement(a.h3,{id:"utilizar-el-servidor-de-salto-para-acceder-al-laboratorio"},t.createElement(a.a,{href:"#utilizar-el-servidor-de-salto-para-acceder-al-laboratorio"},"Utilizar el servidor de salto para acceder al laboratorio")),"\n",t.createElement(a.ol,null,"\n",t.createElement(a.li,null,"\n",t.createElement(a.p,null,"Una vez aprovisionada la demo, desde la página Mis reservas, haga clic en su demo reservada."),"\n",t.createElement(a.img,{src:"/1689963883647.8835291806/image8.png",alt:""}),"\n"),"\n",t.createElement(a.li,null,"\n",t.createElement(a.p,null,"Desplácese hasta la parte inferior de la página de reserva y haga clic en el botón azul de la Consola Remota VM al sistema CentOS."),"\n",t.createElement(a.img,{src:"/1689963883651.8835291807/image9.png",alt:""}),"\n"),"\n",t.createElement(a.li,null,"\n",t.createElement(a.p,null,"En la nueva ventana emergente, haga clic en ",t.createElement(a.strong,null,"Abrir en una ventana nueva"),"."),"\n",t.createElement(a.img,{src:"/1689963883619.8838291787/image10.png",alt:""}),"\n"),"\n",t.createElement(a.li,null,"\n",t.createElement(a.p,null,"Para disfrutar de la mejor experiencia, en la nueva ventana, haz clic en ",t.createElement(a.strong,null,"Pantalla completa"),"."),"\n",t.createElement(a.img,{src:"/1689963883619.8838291788/image11.png",alt:""}),"\n",t.createElement(a.p,null,"Ahora tiene acceso a la demostración. Verifique el sistema e inyecte algunos datos de demostración antes de continuar con los pasos de la demostración."),"\n"),"\n",t.createElement(a.li,null,"\n",t.createElement(a.p,null,"Desde el escritorio de CentOS, abra ",t.createElement(a.strong,null,"Aplicaciones > Favoritos > Firefox"),"."),"\n",t.createElement(a.img,{src:"/1689963883623.8838291789/image12.png",alt:""}),"\n"),"\n",t.createElement(a.li,null,"\n",t.createElement(a.p,null,"En la página de inicio de sesión, si es necesario, proporcione la contraseña de administrador (Q1d3m0.Demo) y haga clic en ",t.createElement(a.strong,null,"Iniciar sesión"),"."),"\n",t.createElement(a.img,{src:"/1689963883627.8838291790/image13.png",alt:""}),"\n"),"\n"),"\n")),t.createElement(a.section,{className:"heading","data-heading-rank":"2","aria-labelledby":"verificación-y-configuración-de-la-demo-en-vivo"},t.createElement(a.h2,{id:"verificación-y-configuración-de-la-demo-en-vivo"},t.createElement(a.a,{href:"#verificación-y-configuración-de-la-demo-en-vivo"},"Verificación y configuración de la demo en vivo")),"\n",t.createElement(a.p,null,"Tanto si utiliza una conexión directa a través de WireGuard como una conexión a través del servidor de salto, ha llegado el momento de verificar el sistema. Para verificar que su sistema funciona, realice los siguientes pasos."),"\n",t.createElement(a.section,{className:"heading","data-heading-rank":"3","aria-labelledby":"acceda-a-la-consola-de-qradar-desde-el-sistema-centos"},t.createElement(a.h3,{id:"acceda-a-la-consola-de-qradar-desde-el-sistema-centos"},t.createElement(a.a,{href:"#acceda-a-la-consola-de-qradar-desde-el-sistema-centos"},"Acceda a la consola de QRadar desde el sistema CentOS")),"\n",t.createElement(a.p,null,"En la consola de QRadar, vaya a ",t.createElement(a.strong,null,"Delitos > Todos los delitos"),"."),"\n",t.createElement(a.img,{src:"/1689963883627.8838291791/image14.png",alt:""}),"\n",t.createElement(a.ol,null,"\n",t.createElement(a.li,null,"\n",t.createElement(a.p,null,"Confirme que no tiene ningún delito abierto."),"\n",t.createElement(a.blockquote,null,"\n",t.createElement(a.p,null,"Si tiene delitos abiertos, borre los delitos antes de ejecutar la demostración con estos pasos, de lo contrario continúe en la siguiente sección."),"\n"),"\n",t.createElement(a.ul,null,"\n",t.createElement(a.li,null,"Seleccione todas las infracciones y, a continuación, expanda ",t.createElement(a.strong,null,"Acciones")," y seleccione ",t.createElement(a.strong,null,"Cerrar"),"."),"\n",t.createElement(a.li,null,"\n",t.createElement(a.img,{src:"/1689963883627.8838291792/image15.png",alt:""}),"\n"),"\n",t.createElement(a.li,null,"En la ventana Cerrar infracción, para los ",t.createElement(a.em,null,"motivos de")," cierre seleccione Falso positivo y en la sección de notas escriba prueba."),"\n"),"\n"),"\n"),"\n"),t.createElement(a.section,{className:"heading","data-heading-rank":"3","aria-labelledby":"generar-los-sucesos-aleatorios"},t.createElement(a.h3,{id:"generar-los-sucesos-aleatorios"},t.createElement(a.a,{href:"#generar-los-sucesos-aleatorios"},"Generar los sucesos aleatorios")),"\n",t.createElement(a.p,null,"Antes de empezar con la demo, debe generar los datos de los eventos y las infracciones."),"\n",t.createElement(a.ol,null,"\n",t.createElement(a.li,null,"\n",t.createElement(a.p,null,t.createElement(a.em,null,"Si utiliza el escritorio remoto en el Servidor Jump"),", abra un terminal seleccionando ",t.createElement(a.strong,null,"Aplicaciones > Favoritos > Terminal"),"."),"\n",t.createElement(a.img,{src:"/1689963883627.8838291793/image16.png",alt:""}),"\n"),"\n",t.createElement(a.li,null,"\n",t.createElement(a.p,null,"Utilice este comando en un terminal local (vpn) o remoto (escritorio del servidor de salto) para ",t.createElement(a.code,null,"ssh")," al servidor QRadar."),"\n",t.createElement(a.pre,null,t.createElement(a.code,{className:"hljs language-bash"},"ssh root@172.16.60.10\n")),"\n"),"\n",t.createElement(a.li,null,"\n",t.createElement(a.p,null,"Escriba la contraseña de root: ",t.createElement(a.code,null,"Q1d3m0")),"\n"),"\n",t.createElement(a.li,null,"\n",t.createElement(a.p,null,"Para ejecutar el generador de eventos aleatorios, escriba los siguientes comandos"),"\n",t.createElement(a.pre,null,t.createElement(a.code,{className:"hljs language-bash"},t.createElement(a.span,{className:"hljs-built_in"},"cd")," /labfiles\n./noiseOn.sh\n")),"\n"),"\n",t.createElement(a.li,null,"\n",t.createElement(a.p,null,"Deje que el generador funcione durante ",t.createElement(a.strong,null,"15 minutos"),", para que los eventos resulten en infracciones aleatorias. Continúa con el resto de pasos del laboratorio mientras esperas."),"\n"),"\n"),"\n"),t.createElement(a.section,{className:"heading","data-heading-rank":"3","aria-labelledby":"verificar-la-nueva-interfaz-de-usuario"},t.createElement(a.h3,{id:"verificar-la-nueva-interfaz-de-usuario"},t.createElement(a.a,{href:"#verificar-la-nueva-interfaz-de-usuario"},"Verificar la nueva interfaz de usuario")),"\n",t.createElement(a.ol,null,"\n",t.createElement(a.li,null,"\n",t.createElement(a.p,null,"Vuelve al navegador."),"\n"),"\n",t.createElement(a.li,null,"\n",t.createElement(a.p,null,"En la consola de QRadar, vaya a la pestaña ",t.createElement(a.strong,null,"Actividad de registro"),"."),"\n"),"\n",t.createElement(a.li,null,"\n",t.createElement(a.p,null,"Confirme que ve nuevos eventos en tiempo real en la vista Actividad de registro."),"\n",t.createElement(a.img,{src:"/1689963883631.8838291794/image17.png",alt:""}),"\n"),"\n",t.createElement(a.li,null,"\n",t.createElement(a.p,null,"En el menú principal, haga clic en ",t.createElement(a.strong,null,"Probar la nueva interfaz de usuario"),"."),"\n"),"\n",t.createElement(a.li,null,"\n",t.createElement(a.p,null,"En la Nueva interfaz de usuario, confirme que ve las demás aplicaciones importantes para la demostración."),"\n",t.createElement(a.ul,null,"\n",t.createElement(a.li,null,"Pulso"),"\n",t.createElement(a.li,null,"Gestor de casos de uso"),"\n",t.createElement(a.li,null,"Gestión de datos de referencia"),"\n",t.createElement(a.li,null,"Análisis de usuarios"),"\n",t.createElement(a.li,null,"Asistente"),"\n"),"\n",t.createElement(a.img,{src:"/1689963883631.8838291795/image18.png",alt:""}),"\n"),"\n"),"\n")),t.createElement(a.section,{className:"heading","data-heading-rank":"2","aria-labelledby":"opcional----solucionar-los-problemas-de-las-aplicaciones-si-no-aparecen-en-la-nueva-interfaz-de-usuario"},t.createElement(a.h2,{id:"opcional----solucionar-los-problemas-de-las-aplicaciones-si-no-aparecen-en-la-nueva-interfaz-de-usuario"},t.createElement(a.a,{href:"#opcional----solucionar-los-problemas-de-las-aplicaciones-si-no-aparecen-en-la-nueva-interfaz-de-usuario"},"[Opcional] -- Solucionar los problemas de las aplicaciones si no aparecen en la nueva interfaz de usuario")),"\n",t.createElement(a.p,null,"TODO - eliminar si estamos recibiendo envs consistentemente OK de TechZone"),"\n",t.createElement(a.ol,null,"\n",t.createElement(a.li,null,"\n",t.createElement(a.p,null,"Vuelva a la ventana del terminal o, desde el servidor Jump Server, vaya a ",t.createElement(a.strong,null,"Aplicaciones > Favoritos > Terminal"),"."),"\n",t.createElement(a.img,{src:"/1689963883627.8838291793/image16.png",alt:""}),"\n"),"\n",t.createElement(a.li,null,"\n",t.createElement(a.p,null,"Si es necesario, vuelva a conectarse a la consola SSH de QRadar."),"\n",t.createElement(a.pre,null,t.createElement(a.code,{className:"hljs language-bash"},"ssh root@172.16.60.10\n")),"\n"),"\n",t.createElement(a.li,null,"\n",t.createElement(a.p,null,"En la línea de comandos, escriba la contraseña de root: ",t.createElement(a.code,null,"Q1d3m0")),"\n"),"\n",t.createElement(a.li,null,"\n",t.createElement(a.p,null,"Para verificar el estado de todas las aplicaciones, escriba el siguiente comando"),"\n",t.createElement(a.pre,null,t.createElement(a.code,null,"/opt/qradar/support/qappmanager\n")),"\n",t.createElement(a.img,{src:"/1689963883635.8838291796/image19.png",alt:""}),"\n"),"\n",t.createElement(a.li,null,"\n",t.createElement(a.p,null,"Inspecciona el estado de todas las apps. Si alguna app no está en estado RUNNING, teclea la opción 23."),"\n"),"\n",t.createElement(a.li,null,"\n",t.createElement(a.p,null,"A continuación, escriba el ID correspondiente al nombre del administrador. Lo más probable es que sea 2."),"\n"),"\n",t.createElement(a.li,null,"\n",t.createElement(a.p,null,"Escriba el ID de la instancia que no está en estado de ejecución. En este caso es 1054."),"\n",t.createElement(a.img,{src:"/1689963883639.8835291798/image20.png",alt:""}),"\n"),"\n",t.createElement(a.li,null,"\n",t.createElement(a.p,null,"Espere ",t.createElement(a.strong,null,"unos minutos")," y ejecute la opción 20 para confirmar que la aplicación pasa al estado RUNNING."),"\n",t.createElement(a.img,{src:"/1689963883639.8835291799/image21.png",alt:""}),"\n"),"\n",t.createElement(a.li,null,"\n",t.createElement(a.p,null,"Si la aplicación no está en estado de ejecución, espera unos minutos más y vuelve a escribir la opción 20."),"\n",t.createElement(a.p,null,"Puedes repetir estos pasos para todas las aplicaciones que no estén en estado RUNNING."),"\n"),"\n",t.createElement(a.li,null,"\n",t.createElement(a.p,null,"Al final, salga del gestor de aplicaciones utilizando la opción 0."),"\n"),"\n"),"\n"),t.createElement(a.section,{className:"heading","data-heading-rank":"2","aria-labelledby":"inyectar-los-datos-específicos-del-caso-de-uso"},t.createElement(a.h2,{id:"inyectar-los-datos-específicos-del-caso-de-uso"},t.createElement(a.a,{href:"#inyectar-los-datos-específicos-del-caso-de-uso"},"Inyectar los datos específicos del caso de uso")),"\n",t.createElement(a.p,null,"Para demostrar de forma consistente y fiable la solución SIEM, además de los eventos y delitos aleatorios, también debe inyectar los eventos que son específicos del caso de uso, utilizando el siguiente script de shell en la consola de terminal SSH de QRadar."),"\n",t.createElement(a.p,null,"Si ya tiene la terminal SSH con QRadar abierta, ejecute los siguientes comandos. (Si ha cerrado la sesión de terminal SSH de QRadar, utilice los pasos de la sección ",t.createElement(a.a,{href:"#generate-the-random-events"},"Generar los eventos aleatorios")," para volver a conectarse a QRadar):"),"\n",t.createElement(a.pre,null,t.createElement(a.code,{className:"hljs language-bash"},t.createElement(a.span,{className:"hljs-built_in"},"cd")," /labfiles\n./runUC.sh\n")),"\n",t.createElement(a.p,null,"Espere a que se complete la secuencia de comandos (unos ",t.createElement(a.strong,null,"5 minutos"),")."),"\n",t.createElement(a.img,{src:"/1689963883643.8835291800/image22.png",alt:""}),"\n",t.createElement(a.p,null,"En este momento, la configuración del entorno de demostración está lista. Ahora puede iniciar la demostración y seguir las instrucciones del ",t.createElement(a.a,{href:"/qradar-siem/102"},"guión de demostración"),".")))}var c=function(e){void 0===e&&(e={});const{wrapper:a}=Object.assign({},(0,l.ah)(),e.components);return a?t.createElement(a,e,t.createElement(r,e)):r(e)},i=n(4184),o=n.n(i),s=n(4690),m=n(1140),u=n(2565),d=n(8531),p=n(3383),E=n(7315);const g=e=>{const{data:{mdx:{tableOfContents:{items:a},frontmatter:{toc:n=!0,title:l,timeToComplete:r,updated:c}}},children:i}=e,s=(0,t.useRef)(null),{0:g}=(0,t.useState)(""),v=(null===n||n)&&a;return t.createElement(t.Fragment,null,t.createElement(m.Z,{timeToComplete:r,updated:c},a[0].title||l||""),t.createElement(d.Z,{className:E.YS},t.createElement("article",{className:o()(E.Y2,!v&&E.ey),ref:s},t.createElement(u.Z,{components:{h1:()=>null}},i)),v&&t.createElement(p.Z,{itemsList:a,maxDepth:2,currSection:g})))},v=e=>{const{location:{pathname:a},data:{mdx:{frontmatter:{title:n},tableOfContents:{items:l}}}}=e;return t.createElement(s.Z,{pathname:a,title:n||l[0].title||void 0})};function h(e){return t.createElement(g,e,t.createElement(c,e))}},2565:function(e,a,n){n.d(a,{Z:function(){return i}});var l=n(7294),t=n(1151),r=n(7563);const c={table:r.y6,a:r.IW,blockquote:r.R4,SubHeader:r.bU,img:r.fb,code:r.dn,QuizAlert:r.SA,Danger:r.b0,Warning:r.v3,CopyText:r.O5};var i=(0,l.memo)((function(e){let{children:a,components:n={}}=e;return l.createElement(t.Zo,{components:{...c,...n}},a)}))},3383:function(e,a,n){n.d(a,{Z:function(){return s}});var l=n(7294),t=n(7500),r=n(4184),c=n.n(r),i=n(6488);const o=function(e,a,n){return void 0===a&&(a=[]),void 0===n&&(n=0),e.forEach((e=>{const{title:l,url:t,items:r}=e;a.splice(a.length,0,{depth:n,title:l,url:t}),r&&r.length>0&&o(r,a,n+1)})),a};var s=e=>{const{itemsList:a}=e,n=(0,l.useMemo)((()=>o(a[0].items||[])),[a]),r=(0,i.Z)("h1[id],h2[id]",{threshold:[0,1],rootMargin:"-48px 0px -90% 0px"});return n.length<1?null:l.createElement("nav",{className:"TableOfContents-module--toc--54d35"},l.createElement("div",{className:"TableOfContents-module--tocStack--90609"},l.createElement("h6",{className:"TableOfContents-module--tocHeader--05956"},l.createElement(t.rU,{to:"#",replace:!0},"On this page")),n.map(((e,a)=>{let{title:n,url:t}=e;return l.createElement("a",{className:c()("TableOfContents-module--link--b292b",r===t.substring(1)&&"TableOfContents-module--activeItem--3869f"),key:a,href:t},n)}))))}},7315:function(e,a,n){n.d(a,{Y2:function(){return l},YS:function(){return r},ey:function(){return t}});var l="{mdx-fields__slug}-module--article--e3d5a",t="{mdx-fields__slug}-module--noToc--82387",r="{mdx-fields__slug}-module--wrapper--58e72"},1151:function(e,a,n){n.d(a,{Zo:function(){return i},ah:function(){return r}});var l=n(7294);const t=l.createContext({});function r(e){const a=l.useContext(t);return l.useMemo((()=>"function"==typeof e?e(a):{...a,...e}),[a,e])}const c={};function i({components:e,children:a,disableParentContext:n}){let i;return i=n?"function"==typeof e?e({}):e||c:r(e),l.createElement(t.Provider,{value:i},a)}}}]);
//# sourceMappingURL=component---src-pages-mdx-fields-slug-tsx-content-file-path-content-q-radar-siem-101-es-md-3ac035b60af581b7bd6e.js.map