"use strict";(self.webpackChunkvad_var_site=self.webpackChunkvad_var_site||[]).push([[3156],{9626:function(e,n,a){a.r(n),a.d(n,{Head:function(){return b},default:function(){return h}});var t=a(1151),l=a(7294);function r(e){const n=Object.assign({section:"section",h1:"h1",h2:"h2",a:"a",p:"p",strong:"strong",img:"img",code:"code",ol:"ol",li:"li",blockquote:"blockquote",ul:"ul"},(0,t.ah)(),e.components),{QuizAlert:a}=n;return a||function(e,n){throw new Error("Expected "+(n?"component":"object")+" `"+e+"` to be defined: you likely forgot to import, pass, or provide it.")}("QuizAlert",!0),l.createElement(n.section,{className:"heading","data-heading-rank":"1","aria-labelledby":"102-acciones"},l.createElement(n.h1,{id:"102-acciones"},"102: Acciones"),"\n",l.createElement(n.section,{className:"heading","data-heading-rank":"2","aria-labelledby":"en-esta-sección"},l.createElement(n.h2,{id:"en-esta-sección"},l.createElement(n.a,{href:"#en-esta-sección"},"En esta sección")),"\n",l.createElement(a,{text:"Atención! Partes de esta sección estarán en el cuestionario."}),"\n",l.createElement(n.p,null,"Conozca los elementos fundamentales de un asistente virtual."),"\n"),l.createElement(n.section,{className:"heading","data-heading-rank":"2","aria-labelledby":"requisitos-previos"},l.createElement(n.h2,{id:"requisitos-previos"},l.createElement(n.a,{href:"#requisitos-previos"},"Requisitos previos")),"\n",l.createElement(n.p,null,"Completa esta sección con el asistente que utilizaste en la sección 101 ",l.createElement(n.strong,null,"o")," con tu propio asistente. Si desea utilizar su propio asistente, debe ",l.createElement(n.a,{href:"https://cloud.ibm.com/docs/watson-assistant?topic=watson-assistant-admin-backup-restore#backup-restore-import"},"cargar")," la siguiente ",l.createElement(n.a,{href:"https://raw.githubusercontent.com/CloudPak-Outcomes/Watson-Asst-Lab/main/action-skills/LendyrActions_v17_Live_lastchecked03Jan2023.json"},"habilidad Acción")," que refleja la habilidad después de completar la sección 101."),"\n"),l.createElement(n.section,{className:"heading","data-heading-rank":"2","aria-labelledby":"construir-su-primera-acción"},l.createElement(n.h2,{id:"construir-su-primera-acción"},l.createElement(n.a,{href:"#construir-su-primera-acción"},"Construir su primera acción")),"\n",l.createElement(n.p,null,"Empecemos creando una nueva acción. Para ello, haga clic en la opción ",l.createElement(n.strong,null,"Acciones")," de la barra de navegación de la izquierda para acceder a la página Acciones. Una vez allí debería ver una larga lista de acciones actuales si ha importado el archivo JSON de antes a su asistente."),"\n",l.createElement(n.img,{src:"/1686700857701.4827792725/image-009.png",alt:""}),"\n",l.createElement(n.p,null,"Haciendo clic en el ",l.createElement(n.strong,null,"icono Buscar")," podrá utilizar una entrada de texto para consultar la lista. Empiece escribiendo ",l.createElement(n.code,null,"Abrir una cuenta")," en el campo de búsqueda para encontrar la acción correspondiente."),"\n",l.createElement(n.p,null,'Ahora, imagina que trabajas en el equipo de asistentes virtuales de Lendyr, y que has recibido el mensaje de que esta automatización va a dejar de funcionar. Tienes que sustituir esta Acción por una nueva para que los clientes no se encuentren con un "callejón sin salida" cuando intenten abrir una cuenta nueva.'),"\n",l.createElement(n.p,null,"Para eliminar la acción:"),"\n",l.createElement(n.ol,null,"\n",l.createElement(n.li,null,"Haga clic en ",l.createElement(n.strong,null,"el icono de la elipsis")," para mostrar las opciones de la acción."),"\n",l.createElement(n.li,null,"Seleccione ",l.createElement(n.strong,null,"Borrar")," en el menú de desbordamiento."),"\n",l.createElement(n.li,null,"Confirme la eliminación de esta acción haciendo clic de nuevo en ",l.createElement(n.strong,null,"Eliminar")," en el modal."),"\n"),"\n",l.createElement(n.img,{src:"/1686700857701.4827792726/image-010.jpg",alt:""}),"\n",l.createElement(n.p,null,'Ahora vamos a construir un nuevo flujo de conversación que comience con la pregunta "Quiero abrir una nueva cuenta corriente por favor". Algo como:'),"\n",l.createElement(n.img,{src:"/1686700857705.483792727/image-011.png",alt:""}),"\n",l.createElement(n.p,null,"Para construirlo:"),"\n",l.createElement(n.ol,null,"\n",l.createElement(n.li,null,"Haga clic en el botón ",l.createElement(n.strong,null,"Nueva acción +"),"."),"\n",l.createElement(n.li,null,"En el menú resultante, seleccione ",l.createElement(n.strong,null,"Empezar de cero")),"\n",l.createElement(n.li,null,"Dale el nombre ",l.createElement(n.code,null,"Quiero abrir una nueva cuenta corriente por favor")," y pulsa ",l.createElement(n.strong,null,"Guardar")),"\n"),"\n",l.createElement(n.img,{src:"/1686700857705.483792728/image-012.png",alt:""}),"\n",l.createElement(n.img,{src:"/1686700857705.483792729/image-013.jpg",alt:""}),"\n",l.createElement(n.img,{src:"/1686700857705.483792730/image-014.png",alt:""}),"\n",l.createElement(n.p,null,"Hemos creado nuestra acción y debería ver un primer paso vacío a su disposición. Ahora a rellenar el Paso 1:"),"\n",l.createElement(n.ol,null,"\n",l.createElement(n.li,null,"Añada la pregunta aclaratoria en el cuadro de texto ",l.createElement(n.strong,null,"Los asistentes dicen"),', por ejemplo: "¿Qué tipo de cuenta desea abrir?".'),"\n",l.createElement(n.li,null,"A continuación, haga clic en ",l.createElement(n.strong,null,"Definir respuesta del cliente"),"."),"\n",l.createElement(n.li,null,"Pase el ratón sobre ",l.createElement(n.strong,null,"Opciones"),"."),"\n",l.createElement(n.li,null,"Haga clic en ",l.createElement(n.strong,null,"Como una lista")," para introducir las opciones de la cuenta."),"\n",l.createElement(n.li,null,"En la ventana emergente resultante, introduzca tres opciones: ",l.createElement(n.strong,null,"Cuenta corriente"),", ",l.createElement(n.strong,null,"Ahorro")," e ",l.createElement(n.strong,null,"Inversión"),"."),"\n",l.createElement(n.li,null,"Haga clic en ",l.createElement(n.strong,null,"Aplicar")," para guardar los cambios."),"\n"),"\n",l.createElement(n.img,{src:"/1686700857705.483792733/image-017.jpg",alt:""}),"\n",l.createElement(n.img,{src:"/1686700857705.483792734/image-018.png",alt:""}),"\n",l.createElement(n.p,null,"Ya ha terminado con el primer paso. Haga clic en el ",l.createElement(n.strong,null,"icono Guardar")," en la parte superior derecha para guardar los cambios en su nueva acción."),"\n",l.createElement(n.img,{src:"/1686700857705.483792735/image-019.jpg",alt:""}),"\n",l.createElement(n.blockquote,null,"\n",l.createElement(n.p,null,'Aparte del botón Guardar, el Asistente Watson guarda automáticamente los cambios cuando haces clic en un nuevo paso o abres la vista previa. No hay "deshacer", pero el guardado automático puede desactivarse. Para más detalles, consulta la documentación del producto ',l.createElement(n.a,{href:"https://cloud.ibm.com/docs/watson-assistant?topic=watson-assistant-save-actions"},"aquí"),"."),"\n"),"\n"),l.createElement(n.section,{className:"heading","data-heading-rank":"2","aria-labelledby":"previsualice-su-acción"},l.createElement(n.h2,{id:"previsualice-su-acción"},l.createElement(n.a,{href:"#previsualice-su-acción"},"Previsualice su acción")),"\n",l.createElement(n.p,null,"Fíjese en el botón ",l.createElement(n.strong,null,"Vista previa")," situado en la parte inferior derecha, que está presente en prácticamente todas las pantallas en las que construye sus Acciones. Este botón te da la posibilidad de previsualizar instantáneamente cómo funciona el asistente, en cualquier momento. Haga clic en Vista ",l.createElement(n.strong,null,"previa"),":"),"\n",l.createElement(n.img,{src:"/1686700857705.483792736/image-020.jpg",alt:""}),"\n",l.createElement(n.p,null,"Esto abrirá el panel de ",l.createElement(n.strong,null,"Vista Previa"),'. Pruebe la acción recién añadida introduciendo algo similar a "¿Cómo puedo abrir una nueva cuenta?".'),"\n",l.createElement(n.blockquote,null,"\n",l.createElement(n.p,null,"Tenga en cuenta que, aunque no haya entrenado al asistente en esa pregunta específica, éste ha sido capaz de dar la respuesta correcta a la acción que acabamos de crear."),"\n"),"\n",l.createElement(n.p,null,"Ahora seleccione uno de los tipos de cuenta, y observe que la acción se ha completado; no hay pasos adicionales que deba realizar el asistente."),"\n",l.createElement(n.img,{src:"/1686700857705.483792737/image-021.png",alt:""}),"\n",l.createElement(n.p,null,'Haga clic en el icono de actualización e intente formular la pregunta de otra manera, por ejemplo, "Necesito una cuenta nueva". Ten en cuenta que el asistente no reconoce esta entrada:'),"\n",l.createElement(n.img,{src:"/1686700857705.483792738/image-022.jpg",alt:""}),"\n",l.createElement(n.p,null,"Ampliemos la acción para poder entender esta fase:"),"\n",l.createElement(n.ol,null,"\n",l.createElement(n.li,null,"Haga clic en la sección ",l.createElement(n.strong,null,"El cliente empieza por:")," de la parte izquierda."),"\n",l.createElement(n.li,null,"Introduzca la frase ",l.createElement(n.code,null,"Necesito una cuenta nueva"),"."),"\n",l.createElement(n.li,null,"Ahora debería tener 2 frases disponibles para que el cliente comience."),"\n"),"\n",l.createElement(n.img,{src:"/1686700857705.483792739/image-023.jpg",alt:""}),"\n",l.createElement(n.p,null,"Inicie de nuevo la vista previa y utilice esta frase para asegurarse de que nuestro asistente es ahora capaz de entenderla."),"\n"),l.createElement(n.section,{className:"heading","data-heading-rank":"2","aria-labelledby":"crear-otro-paso-de-clarificación"},l.createElement(n.h2,{id:"crear-otro-paso-de-clarificación"},l.createElement(n.a,{href:"#crear-otro-paso-de-clarificación"},"Crear otro paso de clarificación")),"\n",l.createElement(n.p,null,"Con tu primer paso creado y probado, vamos a terminar esta Acción creando otro paso:"),"\n",l.createElement(n.ol,null,"\n",l.createElement(n.li,null,"Haga clic en el primer paso del menú lateral."),"\n",l.createElement(n.li,null,"Añada ",l.createElement(n.strong,null,"el Paso 2")," haciendo clic en ",l.createElement(n.strong,null,"Nuevo paso +"),"."),"\n",l.createElement(n.li,null,"Introduzca ",l.createElement(n.code,null,"¿Cuál es su número de inversor?")," en la casilla ",l.createElement(n.strong,null,"Asistente dice"),"."),"\n",l.createElement(n.li,null,"Haga clic en ",l.createElement(n.strong,null,"Definir respuesta del cliente")," y seleccione ",l.createElement(n.strong,null,"Número"),"."),"\n"),"\n",l.createElement(n.img,{src:"/1686700857705.483792741/image-025.jpg",alt:""}),"\n",l.createElement(n.p,null,"A continuación, hay que añadir algo de lógica al flujo. Dado el modo en que se pretende que funcione este flujo, un número de inversor sólo debe recogerse en el caso de que el cliente desee abrir una cuenta de inversión. Para ello"),"\n",l.createElement(n.ol,null,"\n",l.createElement(n.li,null,"Cambiar ",l.createElement(n.strong,null,"sin condiciones")," por ",l.createElement(n.strong,null,"con condiciones"),"."),"\n",l.createElement(n.li,null,"Asegúrese de que la primera pregunta era ",l.createElement(n.strong,null,"Inversión")," seleccionándola en el menú desplegable."),"\n",l.createElement(n.li,null,"Haga clic en el ",l.createElement(n.strong,null,"icono Guardar")," para asegurarse de que se guardan estos cambios."),"\n"),"\n",l.createElement(n.img,{src:"/1686700857705.483792742/image-026.jpg",alt:""}),"\n",l.createElement(n.img,{src:"/1686700857709.483792743/image-027.jpg",alt:""}),"\n",l.createElement(n.img,{src:"/1686700857709.483792747/image-033.jpg",alt:""}),"\n"),l.createElement(n.section,{className:"heading","data-heading-rank":"2","aria-labelledby":"crear-un-paso-de-traspaso-de-agente"},l.createElement(n.h2,{id:"crear-un-paso-de-traspaso-de-agente"},l.createElement(n.a,{href:"#crear-un-paso-de-traspaso-de-agente"},"Crear un paso de traspaso de agente")),"\n",l.createElement(n.p,null,"Ahora, añadirá los pasos 3 y 4, cada uno de los cuales proporciona un resultado final al usuario. Para crear el paso 3:"),"\n",l.createElement(n.ol,null,"\n",l.createElement(n.li,null,"\n",l.createElement(n.p,null,"Asegúrese de que está viendo el ",l.createElement(n.strong,null,"Paso 2"),"."),"\n"),"\n",l.createElement(n.li,null,"\n",l.createElement(n.p,null,"Añada el ",l.createElement(n.strong,null,"paso 3")," haciendo clic en ",l.createElement(n.strong,null,"Siguiente paso +"),"."),"\n"),"\n",l.createElement(n.li,null,"\n",l.createElement(n.p,null,"Seleccione ",l.createElement(n.strong,null,"con condiciones")," para que este paso sea condicional, e introduzca la misma condición utilizada anteriormente (Paso 1 = Inversión)."),"\n"),"\n",l.createElement(n.li,null,"\n",l.createElement(n.p,null,"Introduzca ",l.createElement(n.code,null,"Pongámonos en contacto con un agente que pueda abrirle una nueva cuenta de inversión")," en la casilla ",l.createElement(n.strong,null,"Asistente dice"),"."),"\n"),"\n",l.createElement(n.li,null,"\n",l.createElement(n.p,null,"Haga clic en las opciones de ",l.createElement(n.strong,null,"Y luego")," y seleccione ",l.createElement(n.strong,null,"Conectar con el agente")),"\n"),"\n",l.createElement(n.li,null,"\n",l.createElement(n.p,null,"En el modal resultante, en ",l.createElement(n.strong,null,"Mensaje al agente (Opcional)")," escriba ",l.createElement(n.code,null,"El cliente desea abrir una cuenta de inversión, y su número de inversor es")," $ para dar contexto al agente en directo."),"\n",l.createElement(n.ul,null,"\n",l.createElement(n.li,null,"Tenga en cuenta que el ",l.createElement(n.code,null,"$")," hará que aparezca un menú desplegable. Asegúrese de hacer clic en ",l.createElement(n.strong,null,"2. Cuál es su")," número de inversor para pasar estos datos al agente."),"\n"),"\n"),"\n",l.createElement(n.li,null,"\n",l.createElement(n.p,null,"Haga clic en ",l.createElement(n.strong,null,"Aplicar")),"\n"),"\n",l.createElement(n.li,null,"\n",l.createElement(n.p,null,"Por último, vuelva a hacer clic en el ",l.createElement(n.strong,null,"icono Guardar")," de la parte superior derecha."),"\n"),"\n"),"\n",l.createElement(n.img,{src:"/1686700857709.483792745/image-029.jpg",alt:""}),"\n",l.createElement(n.img,{src:"/1686700857709.483792746/image-030.jpg",alt:""}),"\n"),l.createElement(n.section,{className:"heading","data-heading-rank":"2","aria-labelledby":"crear-un-paso-de-respuesta-final"},l.createElement(n.h2,{id:"crear-un-paso-de-respuesta-final"},l.createElement(n.a,{href:"#crear-un-paso-de-respuesta-final"},"Crear un paso de respuesta final")),"\n",l.createElement(n.p,null,"Por último, vamos a crear el paso final de esta acción. Este debe devolver un enlace al usuario basado en el tipo de cuenta que desea abrir. Para crear este paso:"),"\n",l.createElement(n.ol,null,"\n",l.createElement(n.li,null,"\n",l.createElement(n.p,null,"Asegúrese de que está seleccionado el ",l.createElement(n.strong,null,"paso 3"),"."),"\n"),"\n",l.createElement(n.li,null,"\n",l.createElement(n.p,null,"Haga clic en ",l.createElement(n.strong,null,"Siguiente paso +")," para añadir el ",l.createElement(n.strong,null,"Paso 4"),"."),"\n"),"\n",l.createElement(n.li,null,"\n",l.createElement(n.p,null,"En ",l.createElement(n.strong,null,"Asistente dice")," escriba ",l.createElement(n.code,null,"Para abrir un"),"."),"\n"),"\n",l.createElement(n.li,null,"\n",l.createElement(n.p,null,"Ahora haga clic en el botón ",l.createElement(n.strong,null,"Variable"),"."),"\n"),"\n",l.createElement(n.li,null,"\n",l.createElement(n.p,null,"Introduzca la respuesta del paso 1 como variable de acción ",l.createElement(n.strong,null,"(1. ¿Qué tipo de cuenta desea abrir?)"),"."),"\n"),"\n",l.createElement(n.li,null,"\n",l.createElement(n.p,null,"Ahora completar la línea con la ",l.createElement(n.code,null,"cuenta, visite nuestro portal en línea"),"."),"\n"),"\n",l.createElement(n.li,null,"\n",l.createElement(n.p,null,"Convierta el texto del ",l.createElement(n.code,null,"portal")," en línea en un enlace seleccionándolo y haciendo clic en el icono de la barra de herramientas ",l.createElement(n.strong,null,"Enlace"),"."),"\n",l.createElement(n.ul,null,"\n",l.createElement(n.li,null,"En la sección ",l.createElement(n.strong,null,"URL")," introduzca ",l.createElement(n.code,null,"lendyr.com/open-a-new-account?account_type=$"),"."),"\n",l.createElement(n.li,null,"El ",l.createElement(n.code,null,"$")," invocará de nuevo nuestras variables de Acción, y podrá seleccionar el tipo ",l.createElement(n.strong,null,"de cuenta")," (Nota: esto no creará una URL que funcione; es sólo una ilustración de cómo se pasa un parámetro a través de un enlace)."),"\n"),"\n"),"\n",l.createElement(n.li,null,"\n",l.createElement(n.p,null,"Haga clic en ",l.createElement(n.strong,null,"Aplicar")," para crear el enlace."),"\n"),"\n"),"\n",l.createElement(n.img,{src:"/1686700857709.483792748/image-034.png",alt:""}),"\n",l.createElement(n.img,{src:"/1686700857709.483792749/image-035.jpg",alt:""}),"\n",l.createElement(n.img,{src:"/1686700857709.483792750/image-036.png",alt:""}),"\n",l.createElement(n.p,null,"Ahora vamos a aplicar algunas condiciones por:"),"\n",l.createElement(n.ol,null,"\n",l.createElement(n.li,null,"Cambio de ",l.createElement(n.strong,null,"sin condiciones")," a ",l.createElement(n.strong,null,"con condiciones"),"."),"\n",l.createElement(n.li,null,"Seleccione ",l.createElement(n.strong,null,"1. Qué tipo de cuenta....")),"\n",l.createElement(n.li,null,"Cambiar ",l.createElement(n.strong,null,"es")," a ",l.createElement(n.strong,null,"es cualquiera de"),"."),"\n",l.createElement(n.li,null,"Asegúrese de que tanto la ",l.createElement(n.strong,null,"cuenta corriente")," como la ",l.createElement(n.strong,null,"cuenta de ahorro")," están seleccionadas."),"\n"),"\n",l.createElement(n.img,{src:"/1686700857709.483792751/image-037.png",alt:""}),"\n",l.createElement(n.p,null,"Por último, asegúrese de que la opción ",l.createElement(n.strong,null,"Y entonces")," está establecida en ",l.createElement(n.strong,null,"Finalizar la acción")," para finalizar la acción después de este paso."),"\n",l.createElement(n.img,{src:"/1686700857709.483792752/image-038.jpg",alt:""}),"\n",l.createElement(n.p,null,"¡Boom! Tus pasos deberían estar completos. Abra la vista previa y pruebe algunos de los pasos de esta acción."),"\n",l.createElement(n.img,{src:"/1686700857709.483792753/image-039.jpg",alt:""}),"\n"),l.createElement(n.section,{className:"heading","data-heading-rank":"2","aria-labelledby":"vista-previa-de-su-asistente"},l.createElement(n.h2,{id:"vista-previa-de-su-asistente"},l.createElement(n.a,{href:"#vista-previa-de-su-asistente"},"Vista previa de su asistente")),"\n",l.createElement(a),"\n",l.createElement(n.p,null,"Vuelva a la página de inicio de su asistente. A continuación, compruebe cómo aparecerá su asistente ante los usuarios en la web. Para ello"),"\n",l.createElement(n.ol,null,"\n",l.createElement(n.li,null,"En la parte izquierda, haga clic en ",l.createElement(n.strong,null,"Vista previa"),"."),"\n",l.createElement(n.li,null,"Observe la vista previa en línea para que pueda probar el asistente."),"\n",l.createElement(n.li,null,"El botón ",l.createElement(n.strong,null,"Personalizar chat web")," le permitirá cambiar el aspecto de su asistente."),"\n",l.createElement(n.li,null,"Asegúrese de que se encuentra en la pestaña ",l.createElement(n.strong,null,"Estilo")," del menú resultante."),"\n",l.createElement(n.li,null,"Cambia el ",l.createElement(n.strong,null,"nombre")," del ",l.createElement(n.strong,null,"Asistente conocido por los clientes"),' a "Asistente Lendyr".'),"\n",l.createElement(n.li,null,"Haga clic en ",l.createElement(n.strong,null,"Añadir una imagen de avatar")," y señale ",l.createElement(n.a,{href:"https://web-chat.global.assistant.watson.appdomain.cloud/assets/Lendyr-Avatar.png"},"este enlace de imagen"),"."),"\n",l.createElement(n.li,null,"Cambie el ",l.createElement(n.strong,null,"color primario")," a ",l.createElement(n.code,null,"#004144"),". Este es el color de la cabecera del canto."),"\n",l.createElement(n.li,null,"Cambie el ",l.createElement(n.strong,null,"color secundario")," a ",l.createElement(n.code,null,"#3D3D3D"),". Esto colorea la burbuja de mensaje."),"\n",l.createElement(n.li,null,"Cambie el ",l.createElement(n.strong,null,"color de acento")," a ",l.createElement(n.code,null,"#004144"),". Esto acentúa ciertas respuestas e iconos."),"\n"),"\n",l.createElement(n.img,{src:"/1686700857713.483792758/image-044.jpg",alt:""}),"\n",l.createElement(n.img,{src:"/1686700857713.483792759/image-045.png",alt:""}),"\n",l.createElement(n.img,{src:"/1686700857713.483792760/image-046.jpg",alt:""}),"\n",l.createElement(n.p,null,"Ahora vas a personalizar la pestaña de la pantalla de inicio. Comience por:"),"\n",l.createElement(n.ol,null,"\n",l.createElement(n.li,null,"Haz clic en la pestaña ",l.createElement(n.strong,null,"de la pantalla de inicio"),"."),"\n",l.createElement(n.li,null,"Cambiar ",l.createElement(n.strong,null,"Saludo"),' a: "¡Hola, soy el asistente de Lendyr! ¿En qué puedo ayudarte?"'),"\n",l.createElement(n.li,null,"Cambia ",l.createElement(n.strong,null,"Starter 1"),' a: "Conoce a Lendyr"'),"\n",l.createElement(n.li,null,"Cambia ",l.createElement(n.strong,null,"Starter 2"),' a: "Pagar facturas"'),"\n",l.createElement(n.li,null,"Cambia ",l.createElement(n.strong,null,"Arranque 3"),' por: "Encontrar las sucursales más cercanas"'),"\n"),"\n",l.createElement(n.p,null,"Ahora has personalizado tu asistente para que sea similar a la demo de Lendyr."),"\n"),l.createElement(n.section,{className:"heading","data-heading-rank":"2","aria-labelledby":"previsualice-su-asistente-en-el-sitio-web-de-lendyr-bank"},l.createElement(n.h2,{id:"previsualice-su-asistente-en-el-sitio-web-de-lendyr-bank"},l.createElement(n.a,{href:"#previsualice-su-asistente-en-el-sitio-web-de-lendyr-bank"},"Previsualice su asistente en el sitio web de Lendyr Bank")),"\n",l.createElement(n.p,null,"Ahora, ¡incrustarás tu asistente en el sitio web del Banco Lendyr! Para ello:"),"\n",l.createElement(n.ol,null,"\n",l.createElement(n.li,null,"Haga clic en la pestaña ",l.createElement(n.strong,null,"Incrustar"),"."),"\n",l.createElement(n.li,null,"Copie el valor del ",l.createElement(n.strong,null,"ID de integración")," de su asistente y péguelo en un documento de texto. Utilizará el valor en breve"),"\n",l.createElement(n.li,null,"Copie el valor de la ",l.createElement(n.strong,null,"región")," de sus asistentes y péguelo en un documento de texto."),"\n",l.createElement(n.li,null,"Copie el valor del ",l.createElement(n.strong,null,"serviceInstanceId")," de sus asistentes y péguelo en un documento de texto."),"\n",l.createElement(n.li,null,"Por último, haga clic en ",l.createElement(n.strong,null,"Guardar y salir"),"."),"\n"),"\n",l.createElement(n.img,{src:"/1686700857713.483792761/image-047.jpg",alt:""}),"\n",l.createElement(n.p,null,"Ahora toma esos tres valores e introdúcelos en esta URL:"),"\n",l.createElement(n.p,null,l.createElement(n.code,null,"https://www.ibm.com/products/watson-assistant/demos/lendyr/demo.html?integrationID=ID_HERE&region=REGION_HERE&serviceInstanceID=ID_HERE")),"\n",l.createElement(n.p,null,'Abra esta URL y explore la Acción "Abrir una nueva cuenta" en su asistente. Ha creado y utilizado con éxito su primera acción en el sitio web de Lendyr Bank. Bien hecho.'),"\n"),l.createElement(n.section,{className:"heading","data-heading-rank":"2","aria-labelledby":"acción-simple-de-preguntas-y-respuestas"},l.createElement(n.h2,{id:"acción-simple-de-preguntas-y-respuestas"},l.createElement(n.a,{href:"#acción-simple-de-preguntas-y-respuestas"},"Acción simple de preguntas y respuestas")),"\n",l.createElement(a),"\n",l.createElement(n.p,null,"Construyamos una segunda Acción. Esta Acción responderá simplemente a la pregunta de un usuario final sobre cuánto tiempo se tarda en abrir una cuenta. En primer lugar, vuelva a la pantalla ",l.createElement(n.strong,null,"Acciones (")," 1) haciendo clic en la opción ",l.createElement(n.strong,null,"Acciones")," del menú de la izquierda. A continuación, haga clic en ",l.createElement(n.strong,null,"Nueva acción + (2)"),":"),"\n",l.createElement(n.img,{src:"/1686700857713.483792762/image-048.png",alt:""}),"\n",l.createElement(n.p,null,"Como antes, seleccione la opción ",l.createElement(n.strong,null,"Empezar desde cero"),' (veremos las plantillas más adelante en este laboratorio). Para el enunciado del cliente, introduzca "Hora de abrir una cuenta"',l.createElement(n.strong,null,"(1)")," y haga clic en ",l.createElement(n.strong,null,"Guardar (2)"),":"),"\n",l.createElement(n.img,{src:"/1686700857717.483792764/image-049.png",alt:""}),"\n",l.createElement(n.p,null,"En el primer paso, en ",l.createElement(n.strong,null,"Asistente dice (1)"),', introduzca: "Los nuevos clientes de Lendyr pueden abrir una nueva cuenta en uno o dos días laborables. Los clientes existentes de Lendyr pueden abrir una nueva cuenta en cuestión de minutos a través del portal web o hablando con un experto en cuentas de Lendyr." A continuación, haz clic en ',l.createElement(n.strong,null,"Nuevo paso +"),":"),"\n",l.createElement(n.img,{src:"/1686700857717.483792763/image-049-2.png",alt:""}),"\n",l.createElement(n.p,null,"En este segundo paso, haga clic en el icono de ",l.createElement(n.strong,null,"tipo de respuesta Imagen")," en ",l.createElement(n.strong,null,"Asistente dice"),":"),"\n",l.createElement(n.img,{src:"/1686700857717.483792765/image-050.png",alt:""}),"\n",l.createElement(n.p,null,"A continuación, añada una imagen con las siguientes propiedades:"),"\n",l.createElement(n.ul,null,"\n",l.createElement(n.li,null,l.createElement(n.strong,null,"URL de origen:")," ",l.createElement(n.a,{href:"https://img.money.com/2020/10/checking-vs-savings-revised-1.gif"},"https://img.money.com/2020/10/checking-vs-savings-revised-1.gif")),"\n",l.createElement(n.li,null,l.createElement(n.strong,null,"Texto alternativo:")," Cuenta corriente frente a cuenta de ahorro"),"\n",l.createElement(n.li,null,l.createElement(n.strong,null,"Título:")," Cuenta corriente frente a cuenta de ahorro"),"\n",l.createElement(n.li,null,l.createElement(n.strong,null,"Descripción:")," Obtenga más información sobre cuentas corrientes, de ahorro y otros tipos de cuentas en nuestro sitio web."),"\n"),"\n",l.createElement(n.p,null,"Compruebe que su pantalla tiene el aspecto de la imagen siguiente y haga clic en ",l.createElement(n.strong,null,"Aplicar"),":"),"\n",l.createElement(n.img,{src:"/1686700857717.483792766/image-051.png",alt:""}),"\n",l.createElement(n.p,null,"Este será el último paso de esta Acción, así que cambie ",l.createElement(n.strong,null,"Y entonces (1)")," por ",l.createElement(n.strong,null,"Finalizar la acción (2)"),":"),"\n",l.createElement(n.img,{src:"/1686700857717.483792767/image-052.png",alt:""}),"\n",l.createElement(n.p,null,'Haga una lluvia de ideas y añada algunas frases de ejemplo más a esta Acción: empiece con "¿Cuánto se tarda en abrir una cuenta nueva?". (Recuerda que puedes introducirlas haciendo clic en la ventana ',l.createElement(n.strong,null,"El cliente empieza por:")," ). Ahora, guarda y previsualiza tu nueva Acción utilizando tu URL personalizada de Lendyr.")))}var c=function(e){void 0===e&&(e={});const{wrapper:n}=Object.assign({},(0,t.ah)(),e.components);return n?l.createElement(n,e,l.createElement(r,e)):r(e)};var i=a(4184),s=a.n(i),o=a(4690),u=a(1140),m=a(2565),d=a(8531),p=a(3383),E=a(7315);const g=e=>{const{data:{mdx:{tableOfContents:{items:n},frontmatter:{toc:a=!0,title:t,timeToComplete:r,updated:c}}},children:i}=e,o=(0,l.useRef)(null),{0:g}=(0,l.useState)(""),b=(null===a||a)&&n;return l.createElement(l.Fragment,null,l.createElement(u.Z,{timeToComplete:r,updated:c},n[0].title||t||""),l.createElement(d.Z,{className:E.YS},l.createElement("article",{className:s()(E.Y2,!b&&E.ey),ref:o},l.createElement(m.Z,{components:{h1:()=>null}},i)),b&&l.createElement(p.Z,{itemsList:n,maxDepth:2,currSection:g})))},b=e=>{const{location:{pathname:n},data:{mdx:{frontmatter:{title:a},tableOfContents:{items:t}}}}=e;return l.createElement(o.Z,{pathname:n,title:a||t[0].title||void 0})};function h(e){return l.createElement(g,e,l.createElement(c,e))}},2565:function(e,n,a){a.d(n,{Z:function(){return i}});var t=a(7294),l=a(1151),r=a(7563);const c={table:r.y6,a:r.IW,blockquote:r.R4,SubHeader:r.bU,img:r.fb,code:r.dn,QuizAlert:r.SA,Danger:r.b0,Warning:r.v3,CopyText:r.O5};var i=(0,t.memo)((function(e){let{children:n,components:a={}}=e;return t.createElement(l.Zo,{components:{...c,...a}},n)}))},3383:function(e,n,a){a.d(n,{Z:function(){return o}});var t=a(7294),l=a(7500),r=a(4184),c=a.n(r),i=a(6488);const s=function(e,n,a){return void 0===n&&(n=[]),void 0===a&&(a=0),e.forEach((e=>{const{title:t,url:l,items:r}=e;n.splice(n.length,0,{depth:a,title:t,url:l}),r&&r.length>0&&s(r,n,a+1)})),n};var o=e=>{const{itemsList:n}=e,a=(0,t.useMemo)((()=>s(n[0].items||[])),[n]),r=(0,i.Z)("h1[id],h2[id]",{threshold:[0,1],rootMargin:"-48px 0px -90% 0px"});return a.length<1?null:t.createElement("nav",{className:"TableOfContents-module--toc--54d35"},t.createElement("div",{className:"TableOfContents-module--tocStack--90609"},t.createElement("h6",{className:"TableOfContents-module--tocHeader--05956"},t.createElement(l.rU,{to:"#",replace:!0},"On this page")),a.map(((e,n)=>{let{title:a,url:l}=e;return t.createElement("a",{className:c()("TableOfContents-module--link--b292b",r===l.substring(1)&&"TableOfContents-module--activeItem--3869f"),key:n,href:l},a)}))))}},7315:function(e,n,a){a.d(n,{Y2:function(){return t},YS:function(){return r},ey:function(){return l}});var t="{mdx-fields__slug}-module--article--e3d5a",l="{mdx-fields__slug}-module--noToc--82387",r="{mdx-fields__slug}-module--wrapper--58e72"},1151:function(e,n,a){a.d(n,{Zo:function(){return i},ah:function(){return r}});var t=a(7294);const l=t.createContext({});function r(e){const n=t.useContext(l);return t.useMemo((()=>"function"==typeof e?e(n):{...n,...e}),[n,e])}const c={};function i({components:e,children:n,disableParentContext:a}){let i;return i=a?"function"==typeof e?e({}):e||c:r(e),t.createElement(l.Provider,{value:i},n)}}}]);
//# sourceMappingURL=component---src-pages-mdx-fields-slug-tsx-content-file-path-content-watson-102-es-md-e159b06e64d028dcb10a.js.map