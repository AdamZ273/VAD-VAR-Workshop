"use strict";(self.webpackChunkvad_var_site=self.webpackChunkvad_var_site||[]).push([[2452],{5085:function(e,a,n){n.r(a),n.d(a,{Head:function(){return b},default:function(){return h}});var t=n(1151),l=n(7294);function r(e){const a=Object.assign({section:"section",h1:"h1",h2:"h2",a:"a",p:"p",ul:"ul",li:"li",strong:"strong",ol:"ol",img:"img",h3:"h3",em:"em",h4:"h4"},(0,t.ah)(),e.components);return l.createElement(a.section,{className:"heading","data-heading-rank":"1","aria-labelledby":"104-acciones-y-políticas-de-turbonomic"},l.createElement(a.h1,{id:"104-acciones-y-políticas-de-turbonomic"},"104: Acciones y políticas de Turbonomic"),"\n",l.createElement(a.section,{className:"heading","data-heading-rank":"2","aria-labelledby":"objetivo"},l.createElement(a.h2,{id:"objetivo"},l.createElement(a.a,{href:"#objetivo"},"Objetivo")),"\n",l.createElement(a.p,null,"En este laboratorio va:"),"\n",l.createElement(a.ul,null,"\n",l.createElement(a.li,null,"Explorar diferentes tipos de acciones"),"\n",l.createElement(a.li,null,"Explorar las políticas existentes"),"\n",l.createElement(a.li,null,"Crear una política de automatización"),"\n",l.createElement(a.li,null,"Programar una política de automatización"),"\n"),"\n",l.createElement(a.p,null,l.createElement(a.strong,null,"Tenga en cuenta que el número y los tipos de acciones pueden variar en función de su ambiente"),"."),"\n",l.createElement(a.ol,null,"\n",l.createElement(a.li,null,"Navegue al panel de control principal haciendo clic en el botón ",l.createElement(a.strong,null,"On")," del navegador. Luego seleccione ",l.createElement(a.strong,null,"Show All (Mostrar todo)")," en la sección ",l.createElement(a.strong,null,"Pending Actions (Acciones pendientes)"),"."),"\n"),"\n",l.createElement(a.img,{src:"/1684692564568.36551089088/pendingactions.png",alt:""}),"\n",l.createElement(a.ol,{start:"2"},"\n",l.createElement(a.li,null,"En esta página verá todas las acciones pendientes, incluidas las de la nube y las locales. Si mira a la lista de la izquierda, verá que las acciones están clasificadas por tipo. Dedique unos minutos a explorar las acciones yendo a las pestañas on-prem o Cloud."),"\n"),"\n",l.createElement(a.img,{src:"/1684692564540.36521089076/actionpage.png",alt:""}),"\n",l.createElement(a.ol,{start:"3"},"\n",l.createElement(a.li,null,"Mientras exploras las acciones, notarás que cada tipo de acción tiene múltiples entidades a las que afecta. Por ejemplo, el tipo ",l.createElement(a.strong,null,"Scale (Escala)")," - que es básicamente una acción de redimensionamiento para entidades Cloud - afecta a VMs, bases de datos, almacenamiento VM y volúmenes. Veremos más de cerca algunas de estas acciones."),"\n"),"\n",l.createElement(a.p,null,"Navega a ",l.createElement(a.strong,null,"Volumes (Volúmenes)")," bajo el tipo de acción ",l.createElement(a.strong,null,"Scale (Escala)"),"."),"\n",l.createElement(a.img,{src:"/1684692564580.36551089093/scalevolume.png",alt:""}),"\n",l.createElement(a.p,null,"Seleccione la pestaña ",l.createElement(a.strong,null,"Azure"),". Luego haga clic en ",l.createElement(a.strong,null,"Details (Detalles)")," para una acción que es el mercado ",l.createElement(a.strong,null,"Performance (Rendimiento)")," y reduce su coste. Es posible que tenga que desplazarse hacia la derecha para localizar el botón."),"\n",l.createElement(a.img,{src:"/1684692564592.36571089099/volumedetail.png",alt:""}),"\n",l.createElement(a.p,null,"Esta página muestra todos los detalles sobre esta acción, incluyendo por qué se generó, cuál es el impacto si se toma, los costes o ahorros de costes asociados con la toma de esta acción, e información importante sobre si causará tiempo de inactividad si se toma y si es reversible o no. Miremos más de cerca a la información especificada en el detalle de esta acción."),"\n",l.createElement(a.ol,null,"\n",l.createElement(a.li,null,"\n",l.createElement(a.p,null,"Esta sección le informa de la acción, la entidad a la que afecta, la ubicación en la que existe la entidad y el motivo. En esta imagen, tenemos una acción de escalado de volumen para la entidad denominada ",l.createElement(a.strong,null,"ptericdisks3_datadisk_2")," en el despliegue denominado ",l.createElement(a.strong,null,"EA - Development")," y el motivo es Congestión de IOPS."),"\n"),"\n",l.createElement(a.li,null,"\n",l.createElement(a.p,null,"La sección de elementos esenciales de la acción ofrece una visión rápida de lo que necesita saber para llevar a cabo esta acción."),"\n"),"\n"),"\n",l.createElement(a.ul,null,"\n",l.createElement(a.li,null,"La acción puede ser aceptada y ejecutada inmediatamente significa que actualmente no hay restricciones que te impidan tomarla ahora mismo. Exploraremos más a fondo lo que esto significa cuando hablemos de los modos de acción.","\n",l.createElement(a.ul,null,"\n",l.createElement(a.li,null,"Si hay o no tiempo de inactividad asociado con la toma de esta acción. En nuestro ejemplo, este cambio requiere un periodo de inactividad, por lo que cuando se considere realizarlo se debe planificar con antelación e informar a los usuarios de este volumen de inactividad previsto."),"\n",l.createElement(a.li,null,"Si esta acción es reversible o no."),"\n"),"\n"),"\n"),"\n",l.createElement(a.ol,{start:"3"},"\n",l.createElement(a.li,null,"\n",l.createElement(a.p,null,"En esta sección aprenderá por qué se genera esta acción. Normalmente, Turbonomic observa la entidad durante un periodo de tiempo y captura el percentil 95 de la misma. Considerando el ejemplo que se muestra en la siguiente imagen, Turbonomic nos dice que la utilización de IOPS es aproximadamente del 100% el 95% del tiempo durante un periodo de observación de 30 días. Esto significa que hay una congestión de IOPS en este volumen, por lo que se genera una acción de escalado para esta entidad para moverla a un volumen más adecuado."),"\n"),"\n",l.createElement(a.li,null,"\n",l.createElement(a.p,null,"El gráfico del percentil 95 de IOPS."),"\n"),"\n",l.createElement(a.li,null,"\n",l.createElement(a.p,null,"Gráfico del promedio diario de IOPS."),"\n"),"\n",l.createElement(a.li,null,"\n",l.createElement(a.p,null,"La línea punteada representa el percentil 95 proyectado después de tomar esta acción."),"\n"),"\n",l.createElement(a.li,null,"\n",l.createElement(a.p,null,"Comparación detallada entre el estado actual de los recursos y el resultado proyectado después de tomar la acción."),"\n"),"\n",l.createElement(a.li,null,"\n",l.createElement(a.p,null,"Comparación detallada del ahorro de costes si toma esta medida. Observe cómo el escalado a un volumen diferente dará como resultado una mayor IOPS, una menor utilización e incluso un ahorro de dinero. Entonces, ¿por qué no tomarla?"),"\n"),"\n"),"\n",l.createElement(a.img,{src:"/1684692564532.36521089074/actiondetail1.png",alt:""}),"\n",l.createElement(a.img,{src:"/1684692564536.36521089075/actiondetail2.png",alt:""}),"\n",l.createElement(a.section,{className:"heading","data-heading-rank":"3","aria-labelledby":"optimizar-los-recursos-locales"},l.createElement(a.h3,{id:"optimizar-los-recursos-locales"},l.createElement(a.a,{href:"#optimizar-los-recursos-locales"},"Optimizar los recursos locales")),"\n",l.createElement(a.p,null,"En esta sección, usted tomará acciones que optimizarán sus recursos on-prem asegurando el rendimiento. Tomar dichas acciones resultará en la liberación de recursos por parte de entidades o VMs que no estén utilizando lo que tienen durante el periodo de observación (por defecto 30 días) para que puedan ser asignados a cargas de trabajo que necesiten dichos recursos."),"\n",l.createElement(a.ol,null,"\n",l.createElement(a.li,null,"\n",l.createElement(a.p,null,"Navegue a la pestaña ",l.createElement(a.strong,null,"On-Prem")," desde su página de acciones. Luego, en ",l.createElement(a.strong,null,"resize (redimensionar)")," seleccione ",l.createElement(a.strong,null,"Virtual Machines (máquinas virtuales)"),"."),"\n"),"\n",l.createElement(a.li,null,"\n",l.createElement(a.p,null,"Desplácese por la lista y seleccione una acción para reducir el tamaño de la memoria virtual que tenga ",l.createElement(a.strong,null,"Efficiency (Eficiencia)")," como categoría de acción. Haga clic en ",l.createElement(a.strong,null,"Details (Detalles)"),"."),"\n"),"\n"),"\n",l.createElement(a.img,{src:"/1684692564564.36551089086/optimize1.png",alt:""}),"\n",l.createElement(a.ol,{start:"3"},"\n",l.createElement(a.li,null,"Compruebe los detalles, observará que la utilización de la memoria virtual de esta máquina virtual estuvo por debajo del 1% durante el 95% del tiempo a lo largo de 30 días. Esto significa que esta máquina virtual ha sobreasignado memoria que no consume. Por tanto, puede reducir con seguridad la capacidad de memoria sin dejar de ofrecer un rendimiento óptimo. Fíjese en los resultados previstos de la acción: la utilización aumentará del 1% al 2%, lo que es perfectamente aceptable."),"\n"),"\n",l.createElement(a.p,null,"Una vez que apruebe todos los detalles y se asegure de que esta acción es segura, haga clic en el botón ",l.createElement(a.strong,null,"Execute Action (Ejecutar Acción)")," en la parte inferior de la página de detalles. Una vez que ejecute esta acción, Turbonomic utilizará llamadas a la API para ajustar la memoria virtual de esta máquina virtual por usted. Por lo tanto, no necesitará iniciar sesión en su ambiente vCenter. Si la acción se ejecuta correctamente, verá una marca de verificación verde junto a esa acción."),"\n",l.createElement(a.img,{src:"/1684692564564.36551089087/optimize2.png",alt:""}),"\n")),l.createElement(a.section,{className:"heading","data-heading-rank":"2","aria-labelledby":"políticas-de-turbonomic"},l.createElement(a.h2,{id:"políticas-de-turbonomic"},l.createElement(a.a,{href:"#políticas-de-turbonomic"},"Políticas de Turbonomic")),"\n",l.createElement(a.p,null,"Ha aprendido a realizar acciones manualmente. Pero, ¿y si quisiéramos automatizar esto? Una vez que validamos que es seguro y bueno tomar una determinada acción y confiamos en ella, podemos permitir que las entidades actúen por decisión propia."),"\n",l.createElement(a.section,{className:"heading","data-heading-rank":"3","aria-labelledby":"explorar-las-políticas-existentes"},l.createElement(a.h3,{id:"explorar-las-políticas-existentes"},l.createElement(a.a,{href:"#explorar-las-políticas-existentes"},"Explorar las políticas existentes")),"\n",l.createElement(a.p,null,"Como recordatorio, por favor asegúrese de que está conectado con un usuario ",l.createElement(a.strong,null,"Administrador"),". Si no está conectado como usuario administrador, no tendrá los permisos necesarios para ejecutar los laboratorios."),"\n",l.createElement(a.ol,null,"\n",l.createElement(a.li,null,"Acceda a ",l.createElement(a.strong,null,"Settings (Configuración)")," y, a continuación, a ",l.createElement(a.strong,null,"Policies (Políticas)"),". En esta página, verá una lista de todas las políticas existentes."),"\n"),"\n",l.createElement(a.img,{src:"/1684692564568.36551089089/policy1.png",alt:""}),"\n",l.createElement(a.ol,{start:"2"},"\n",l.createElement(a.li,null,"En la lista de la izquierda, seleccione ",l.createElement(a.strong,null,"Defaults (Valores predeterminados)"),". Esto mostrará una lista de todas las políticas por valores predeterminados del sistema."),"\n"),"\n",l.createElement(a.p,null,l.createElement(a.em,null,l.createElement(a.strong,null,"Consejo:")," Estas políticas por valores predeterminados permanecen efectivas a menos que el usuario cree una política que afecte a los mismos recursos pero con criterios diferentes. La política definida por el usuario anula la política predeterminada.")),"\n",l.createElement(a.img,{src:"/1684692564552.36551089081/defaultpolicy.png",alt:""}),"\n",l.createElement(a.ol,{start:"3"},"\n",l.createElement(a.li,null,"Desplácese hacia abajo en la lista de políticas por valores predeterminados y haga clic en ",l.createElement(a.strong,null,"Storage Defaults"),". Ahora observe que esta política establece la aceptación de la acción ",l.createElement(a.strong,null,"Resize (Redimensionar)")," se establece en recomendar. Esto hará que todas las acciones de cambio de tamaño generadas para el almacenamiento se establezcan solo como recomendadas y no se puedan ejecutar en Turbonomic."),"\n"),"\n",l.createElement(a.img,{src:"/1684692564584.36571089096/storage1.png",alt:""}),"\n",l.createElement(a.ol,{start:"4"},"\n",l.createElement(a.li,null,"Respectivamente, para la acción que exploró para una máquina virtual Cloud en la que podría aceptarla manualmente y ejecutarla dentro de Turbonomic, hay un conjunto de políticas por valores predeterminados que lo define:"),"\n"),"\n",l.createElement(a.p,null,"Vaya a la política ",l.createElement(a.strong,null,"Virtual Machine Defaults")," de la lista de políticas por valores predeterminados. Puede ver que todas las acciones de escalado de Cloud están configuradas como ",l.createElement(a.strong,null,"Manual"),", lo que permite aceptarlas y ejecutarlas (suponiendo que no haya requisitos previos para ellas)."),"\n",l.createElement(a.img,{src:"/1684692564588.36571089098/vm1.png",alt:""}),"\n"),l.createElement(a.section,{className:"heading","data-heading-rank":"3","aria-labelledby":"crear-una-política-de-automatización"},l.createElement(a.h3,{id:"crear-una-política-de-automatización"},l.createElement(a.a,{href:"#crear-una-política-de-automatización"},"Crear una política de automatización")),"\n",l.createElement(a.p,null,"Creará una política de automatización para definir cómo desea que Turbonomic trate las acciones a medida que aparecen. Tenga en cuenta que las políticas definidas por el usuario anularán las políticas por valores predeterminados del sistema que afecten a la misma entidad."),"\n",l.createElement(a.section,{className:"heading","data-heading-rank":"4","aria-labelledby":"añadir-restricciones-de-objetivos-de-nivel-de-servicio-slo-de-tiempo-de-respuesta"},l.createElement(a.h4,{id:"añadir-restricciones-de-objetivos-de-nivel-de-servicio-slo-de-tiempo-de-respuesta"},l.createElement(a.a,{href:"#añadir-restricciones-de-objetivos-de-nivel-de-servicio-slo-de-tiempo-de-respuesta"},"Añadir restricciones de objetivos de nivel de servicio (SLO) de tiempo de respuesta")),"\n",l.createElement(a.ol,null,"\n",l.createElement(a.li,null,"Vaya a ",l.createElement(a.strong,null,"Policies (Políticas)")," desde ",l.createElement(a.strong,null,"Settings (Ajustes)"),". A continuación, haga clic en ",l.createElement(a.strong,null,"New Automation Policy (Nueva política de automatización)")," en la parte superior derecha de la ventana."),"\n"),"\n",l.createElement(a.img,{src:"/1684692564544.36521089078/auto1.png",alt:""}),"\n",l.createElement(a.ol,{start:"2"},"\n",l.createElement(a.li,null,"Haga clic en ",l.createElement(a.strong,null,"Business Application (Aplicación de negocio)"),". Una vez hecho aparecerá la ventana del Editor de Políticas."),"\n"),"\n",l.createElement(a.img,{src:"/1684692564548.36551089080/businessapplication.png",alt:""}),"\n",l.createElement(a.ol,{start:"3"},"\n",l.createElement(a.li,null,"En el editor de políticas, asigne a su política un nombre único como response_time_TusIniciales. A continuación, en ",l.createElement(a.strong,null,"Scope (Ámbito)"),", haga clic en ",l.createElement(a.strong,null,"Select group of business applications (Seleccionar grupo de aplicaciones empresariales)"),". Esto especificará qué grupo de aplicaciones de negocio se verá afectado por esta política."),"\n"),"\n",l.createElement(a.img,{src:"/1684692564572.36551089090/policyname.png",alt:""}),"\n",l.createElement(a.ol,{start:"4"},"\n",l.createElement(a.li,null,"Una vez que haya hecho clic en ",l.createElement(a.strong,null,"Select group of business applications (Seleccionar grupo de aplicaciones de negocio)"),", aparecerá la ventana del Editor ",l.createElement(a.strong,null,"Select Group of Business Apps (Seleccionar grupo de aplicaciones de negocio)"),"."),"\n"),"\n",l.createElement(a.img,{src:"/1684692564548.36551089079/businessappeditor.png",alt:""}),"\n",l.createElement(a.ol,{start:"5"},"\n",l.createElement(a.li,null,"Haga clic en el botón ",l.createElement(a.strong,null,"New Group (Nuevo grupo)"),". Aparecerá la ventana del editor ",l.createElement(a.strong,null,"Add members to a new group (Añadir miembros a un nuevo grupo)"),"."),"\n"),"\n",l.createElement(a.img,{src:"/1684692564556.36551089084/newgroupbtn.png",alt:""}),"\n",l.createElement(a.ol,{start:"6"},"\n",l.createElement(a.li,null,"(1) Nombra tu grupo ",l.createElement(a.strong,null,"Instana Services"),". Cambia el tipo a (2) ",l.createElement(a.strong,null,"Static (Estático)")," en el menú desplegable ",l.createElement(a.strong,null,"Type (Tipo)"),". (3) Selecciona ",l.createElement(a.strong,null,"RobotShop")," y (4) ",l.createElement(a.strong,null,"Quote of the Day (Cotización del día)"),". Luego (5) haga clic en el botón ",l.createElement(a.strong,null,"Save Group (Guardar grupo)"),"."),"\n"),"\n",l.createElement(a.img,{src:"/1684692564556.36551089083/groupeditor.png",alt:""}),"\n",l.createElement(a.ol,{start:"7"},"\n",l.createElement(a.li,null,"Seleccione el grupo ",l.createElement(a.strong,null,"Instana Services (Servicios de Instana)")," y haga clic en el botón ",l.createElement(a.strong,null,"Select (Seleccionar)"),"."),"\n"),"\n",l.createElement(a.img,{src:"/1684692564580.36551089094/selectgroup.png",alt:""}),"\n",l.createElement(a.ol,{start:"8"},"\n",l.createElement(a.li,null,"En el editor de políticas, añada las restricciones ",l.createElement(a.strong,null,"Enable Response Time SLO")," y ",l.createElement(a.strong,null,"Response Time SLO (ms)")," y haga clic en ",l.createElement(a.strong,null,"Save Policy"),". Puede que reciba un mensaje diciendo que la política puede tardar 10 minutos en hacerse efectiva, haga clic en ",l.createElement(a.strong,null,"Yes")," para continuar."),"\n"),"\n",l.createElement(a.img,{src:"/1684692564572.36551089091/savepolicy.png",alt:""}),"\n",l.createElement(a.ol,{start:"9"},"\n",l.createElement(a.li,null,"Para comprobar si su política se ha creado, intente buscar el nombre de su política en la lista. también puede realizar cambios y editarla según sea necesario desde aquí."),"\n"),"\n",l.createElement(a.img,{src:"/1684692564584.36571089097/verifypolicy.png",alt:""}),"\n")),l.createElement(a.section,{className:"heading","data-heading-rank":"3","aria-labelledby":"programar-una-política"},l.createElement(a.h3,{id:"programar-una-política"},l.createElement(a.a,{href:"#programar-una-política"},"Programar una política")),"\n",l.createElement(a.p,null,"Puede establecer una programación para una política de automatización, que establece una ventana de tiempo en la que la política entra en efecto. Además, una política programada puede incluir acciones programadas. Cuando la política está en efecto, Turbonomic recomienda o ejecuta automáticamente esas acciones a medida que se generan. Algunas de esas acciones podrían ser perjudiciales, por lo que es posible que desee aplazar su ejecución a una ventana de tiempo no crítica. En este caso, deberá establecer un calendario de ejecución de acciones dentro de la política programada."),"\n",l.createElement(a.ol,null,"\n",l.createElement(a.li,null,"\n",l.createElement(a.p,null,"Haga clic en la política de automatización, response_time_TusIniciales, que acabamos de crear."),"\n"),"\n",l.createElement(a.li,null,"\n",l.createElement(a.p,null,"Despliegue ",l.createElement(a.strong,null,"Policy Schedule")," y haga clic en ",l.createElement(a.strong,null,"Attach Schedule"),". Luego haga clic en ",l.createElement(a.strong,null,"New Schedule (Nuevo Horario)"),"."),"\n"),"\n"),"\n",l.createElement(a.img,{src:"/1684692564540.36521089077/attachschedule.png",alt:""}),"\n",l.createElement(a.img,{src:"/1684692564560.36551089085/newschedule.png",alt:""}),"\n",l.createElement(a.ol,{start:"3"},"\n",l.createElement(a.li,null,"\n",l.createElement(a.p,null,"Esta sección definirá cuándo está en efecto su póliza."),"\n",l.createElement(a.p,null,"A. Asigne a la programación de su política un nombre como policy_schedule_SusIniciales."),"\n",l.createElement(a.p,null,"B. Seleccione ",l.createElement(a.strong,null,"Weekly (Semanalmente)")," abajo de Recurrence (Recurrencia)."),"\n",l.createElement(a.p,null,"C. Establezca que se repita cada semana sólo los ",l.createElement(a.strong,null,"Saturdays (sábados)")," y ",l.createElement(a.strong,null,"Sundays (domingos)"),"."),"\n",l.createElement(a.p,null,"D. Seleccione la fecha de hoy como fecha de inicio y ",l.createElement(a.strong,null,"None (Ninguna)")," como fecha de finalización."),"\n",l.createElement(a.p,null,"E. Establezca 12:00 como hora de inicio y 12 para las horas de duración. Por favor, tenga en cuenta que si usted está completando este laboratorio por la tarde hora local, es posible que desee ajustar este tiempo de 12:00 a unas horas después de su hora actual. La razón es que el sistema no le permitirá crear una política en el pasado."),"\n",l.createElement(a.p,null,"F. Seleccione su zona horaria."),"\n",l.createElement(a.p,null,"G. Compruebe el Resumen y haga clic en ",l.createElement(a.strong,null,"Submit (Submitir)"),"."),"\n"),"\n"),"\n",l.createElement(a.img,{src:"/1684692564552.36551089082/editschedule.png",alt:""}),"\n",l.createElement(a.ol,{start:"4"},"\n",l.createElement(a.li,null,"Seleccione su horario recién creado y haga clic en ",l.createElement(a.strong,null,"Set (Ajustar)"),"."),"\n"),"\n",l.createElement(a.img,{src:"/1684692564584.36571089095/setschedule.png",alt:""}),"\n",l.createElement(a.ol,{start:"5"},"\n",l.createElement(a.li,null,"Ahora debería estar de vuelta en la página ",l.createElement(a.strong,null,"Configure Business Applications Policy (Configurar Política de Aplicaciones de Negocio)"),". Compruebe toda la información y asegúrese de que es correcta. Una vez hecho esto, haga clic en ",l.createElement(a.strong,null,"Save Policy (Guardar política)"),"."),"\n"),"\n",l.createElement(a.img,{src:"/1684692564576.36551089092/savepolicy2.png",alt:""}))))}var c=function(e){void 0===e&&(e={});const{wrapper:a}=Object.assign({},(0,t.ah)(),e.components);return a?l.createElement(a,e,l.createElement(r,e)):r(e)},o=n(4184),i=n.n(o),s=n(4690),u=n(1140),m=n(2565),d=n(8531),p=n(3383),E=n(7315);const g=e=>{const{data:{mdx:{tableOfContents:{items:a},frontmatter:{toc:n=!0,title:t,timeToComplete:r,updated:c}}},children:o}=e,s=(0,l.useRef)(null),{0:g}=(0,l.useState)(""),b=(null===n||n)&&a;return l.createElement(l.Fragment,null,l.createElement(u.Z,{timeToComplete:r,updated:c},a[0].title||t||""),l.createElement(d.Z,{className:E.YS},l.createElement("article",{className:i()(E.Y2,!b&&E.ey),ref:s},l.createElement(m.Z,{components:{h1:()=>null}},o)),b&&l.createElement(p.Z,{itemsList:a,maxDepth:2,currSection:g})))},b=e=>{const{location:{pathname:a},data:{mdx:{frontmatter:{title:n},tableOfContents:{items:t}}}}=e;return l.createElement(s.Z,{pathname:a,title:n||t[0].title||void 0})};function h(e){return l.createElement(g,e,l.createElement(c,e))}},2565:function(e,a,n){n.d(a,{Z:function(){return o}});var t=n(7294),l=n(1151),r=n(987);const c={table:r.y6,a:r.IW,blockquote:r.R4,SubHeader:r.bU,img:r.fb,code:r.dn,QuizAlert:r.SA};var o=(0,t.memo)((function(e){let{children:a,components:n={}}=e;return t.createElement(l.Zo,{components:{...c,...n}},a)}))},4690:function(e,a,n){var t=n(7294),l=n(1072),r=n(2401);a.Z=e=>{const{title:a,description:n,pathname:c,children:o}=e,{description:i,title:s,origin:u}=(0,r.Z)(),{i18n:{language:m}}=(0,l.$G)(),d={title:a||s,description:n||i,url:""+u+(c||"")};return t.createElement(t.Fragment,null,t.createElement("html",{lang:m}),t.createElement("link",{rel:"icon",href:"data:image/svg+xml,<svg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 100 100'><text y='0.9em' font-size='90'>🦺</text></svg>"}),t.createElement("title",null,d.title),t.createElement("link",{rel:"canonical",href:d.url}),t.createElement("meta",{name:"description",content:d.description}),t.createElement("meta",{property:"og:title",content:d.title}),t.createElement("meta",{property:"og:url",content:d.url}),t.createElement("meta",{property:"og:type",content:"website"}),t.createElement("meta",{property:"og:description",content:d.description}),t.createElement("meta",{name:"twitter:card",content:"summary"}),t.createElement("meta",{name:"twitter:title",content:d.title}),t.createElement("meta",{name:"twitter:url",content:d.url}),t.createElement("meta",{name:"twitter:description",content:d.description}),t.createElement("meta",{name:"twitter:site",content:"https://www.ibm.com"}),t.createElement("meta",{name:"twitter:creator",content:"@IBM"}),o)}},3383:function(e,a,n){n.d(a,{Z:function(){return s}});var t=n(7294),l=n(7500),r=n(4184),c=n.n(r),o=n(6488);const i=function(e,a,n){return void 0===a&&(a=[]),void 0===n&&(n=0),e.forEach((e=>{const{title:t,url:l,items:r}=e;a.splice(a.length,0,{depth:n,title:t,url:l}),r&&r.length>0&&i(r,a,n+1)})),a};var s=e=>{const{itemsList:a}=e,n=(0,t.useMemo)((()=>i(a[0].items||[])),[a]),r=(0,o.Z)("h1[id],h2[id]",{threshold:[0,1],rootMargin:"-48px 0px -90% 0px"});return n.length<1?null:t.createElement("nav",{className:"TableOfContents-module--toc--54d35"},t.createElement("div",{className:"TableOfContents-module--tocStack--90609"},t.createElement("h6",{className:"TableOfContents-module--tocHeader--05956"},t.createElement(l.rU,{to:"#",replace:!0},"On this page")),n.map(((e,a)=>{let{title:n,url:l}=e;return t.createElement("a",{className:c()("TableOfContents-module--link--b292b",r===l.substring(1)&&"TableOfContents-module--activeItem--3869f"),key:a,href:l},n)}))))}},7315:function(e,a,n){n.d(a,{Y2:function(){return t},YS:function(){return r},ey:function(){return l}});var t="{mdx-fields__slug}-module--article--e3d5a",l="{mdx-fields__slug}-module--noToc--82387",r="{mdx-fields__slug}-module--wrapper--58e72"},1151:function(e,a,n){n.d(a,{Zo:function(){return o},ah:function(){return r}});var t=n(7294);const l=t.createContext({});function r(e){const a=t.useContext(l);return t.useMemo((()=>"function"==typeof e?e(a):{...a,...e}),[a,e])}const c={};function o({components:e,children:a,disableParentContext:n}){let o;return o=n?"function"==typeof e?e({}):e||c:r(e),t.createElement(l.Provider,{value:o},a)}}}]);
//# sourceMappingURL=component---src-pages-mdx-fields-slug-tsx-content-file-path-content-turbonomic-104-es-md-63af1593e1c10fa069c4.js.map