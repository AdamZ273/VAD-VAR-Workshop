"use strict";(self.webpackChunkvad_var_site=self.webpackChunkvad_var_site||[]).push([[8185],{2832:function(e,a,n){n.r(a),n.d(a,{Head:function(){return b},default:function(){return v}});var l=n(1151),t=n(7294);function r(e){const a=Object.assign({section:"section",h1:"h1",h2:"h2",a:"a",p:"p",strong:"strong",em:"em",blockquote:"blockquote",h3:"h3",ol:"ol",li:"li",pre:"pre",code:"code",span:"span",img:"img",ul:"ul"},(0,l.ah)(),e.components);return t.createElement(a.section,{className:"heading","data-heading-rank":"1","aria-labelledby":"desarrollo-de-reglas-de-detección-de-anomalías"},t.createElement(a.h1,{id:"desarrollo-de-reglas-de-detección-de-anomalías"},"Desarrollo de reglas de detección de anomalías"),"\n",t.createElement(a.section,{className:"heading","data-heading-rank":"2","aria-labelledby":"introducción"},t.createElement(a.h2,{id:"introducción"},t.createElement(a.a,{href:"#introducción"},"Introducción")),"\n",t.createElement(a.p,null,"La detección de anomalías permite alertar a los operadores de amenazas no documentadas y que, por tanto, no pueden detectarse con métodos de vigilancia de indicadores bien definidos. Estas amenazas pueden detectarse mediante la supervisión de un volumen inusual de actividades. IBM QRadar SIEM le permite crear reglas de detección de anomalías para supervisar las desviaciones de la ",t.createElement(a.strong,null,"línea de base")," de las actividades esperadas."),"\n",t.createElement(a.p,null,"En estos ejercicios, desarrollará una regla de detección de anomalías de tipo ",t.createElement(a.em,null,"Anomalía"),". Comprueba la desviación del número de eventos que coinciden con una búsqueda agrupada respecto a la media móvil ponderada. La regla se dispara en el ejercicio cuando los datos de la muestra superan el porcentaje de desviación configurado en la regla de anomalía."),"\n"),t.createElement(a.section,{className:"heading","data-heading-rank":"2","aria-labelledby":"prepararse-para-la-norma-sobre-anomalías"},t.createElement(a.h2,{id:"prepararse-para-la-norma-sobre-anomalías"},t.createElement(a.a,{href:"#prepararse-para-la-norma-sobre-anomalías"},"Prepararse para la norma sobre anomalías")),"\n",t.createElement(a.p,null,"Para cada regla de detección de anomalías, una búsqueda agrupada proporciona los datos de la serie temporal que el Motor de Detección de Anomalías (ADE) utilizará para detectar cualquier desviación estadística. En este ejercicio, usted crea una búsqueda agrupada. Para confirmar que su búsqueda funciona según lo previsto, alimentará datos de muestra a QRadar SIEM. Después de que QRadar SIEM haya descubierto el tipo de fuente de registro de los datos de muestra, creará automáticamente una fuente de registro."),"\n",t.createElement(a.blockquote,null,"\n",t.createElement(a.p,null,"Si está utilizando la VPN Wireguard configurada en ",t.createElement(a.strong,null,"101: Configuración de demostración de QRadar")," para acceder al entorno de demostración, podrá realizar las siguientes actividades desde su estación de trabajo. Si no ha configurado el acceso VPN puede realizar las actividades desde el servidor de salto."),"\n"),"\n",t.createElement(a.section,{className:"heading","data-heading-rank":"3","aria-labelledby":"alimentación-de-datos-de-muestra-a-qradar-siem"},t.createElement(a.h3,{id:"alimentación-de-datos-de-muestra-a-qradar-siem"},t.createElement(a.a,{href:"#alimentación-de-datos-de-muestra-a-qradar-siem"},"Alimentación de datos de muestra a QRadar SIEM")),"\n",t.createElement(a.p,null,"QRadar SIEM necesita procesar datos de muestra para crear el ejemplo utilizado en esta guía de laboratorio. Realice los siguientes pasos para iniciar el script aplicable:"),"\n",t.createElement(a.ol,null,"\n",t.createElement(a.li,null,"Inicie sesión en el servidor QRadar:"),"\n"),"\n",t.createElement(a.pre,null,t.createElement(a.code,{className:"hljs language-bash"},"ssh root@172.16.60.10\n")),"\n",t.createElement(a.p,null,"La contraseña es: ",t.createElement(a.code,null,"Q1d3m0")),"\n",t.createElement(a.ol,{start:"2"},"\n",t.createElement(a.li,null,"Envía el mensaje syslog preparado a QRadar:"),"\n"),"\n",t.createElement(a.pre,null,t.createElement(a.code,{className:"hljs language-bash"},t.createElement(a.span,{className:"hljs-built_in"},"cd")," /labfiles/extended/labfiles\n")),"\n",t.createElement(a.pre,null,t.createElement(a.code,{className:"hljs language-bash"},t.createElement(a.span,{className:"hljs-built_in"},"chmod")," +x ./sendSpike.sh\n\n")),"\n",t.createElement(a.pre,null,t.createElement(a.code,{className:"hljs language-bash"},"./sendSpike.sh\n")),"\n",t.createElement(a.blockquote,null,"\n",t.createElement(a.p,null,"El directorio /labfiles/extended/labfiles fue subido al servidor QRadar en los ejercicios ",t.createElement(a.strong,null,"103: Configuración Avanzada de Laboratorio"),"."),"\n"),"\n",t.createElement(a.img,{src:"/1686802950477.053783089/image6.jpg",alt:""}),"\n",t.createElement(a.p,null,"Después de unos 25 mensajes syslog, QRadar descubre que se originan en un sistema que ejecuta Linux. QRadar crea automáticamente una fuente de registro del tipo de fuente de registro ",t.createElement(a.em,null,"del SO")," Linux mientras usted realiza la siguiente tarea."),"\n"),t.createElement(a.section,{className:"heading","data-heading-rank":"3","aria-labelledby":"crear-una-búsqueda-agrupada"},t.createElement(a.h3,{id:"crear-una-búsqueda-agrupada"},t.createElement(a.a,{href:"#crear-una-búsqueda-agrupada"},"Crear una búsqueda agrupada")),"\n",t.createElement(a.p,null,"Las reglas de detección de anomalías comprueban los resultados de una búsqueda agrupada de eventos o flujos."),"\n",t.createElement(a.ol,null,"\n",t.createElement(a.li,null,"Vuelva a la consola de QRadar:"),"\n"),"\n",t.createElement(a.ul,null,"\n",t.createElement(a.li,null,"Abra su navegador en: ",t.createElement(a.a,{href:"https://172.16.60.10"},"https://172.16.60.10"),"."),"\n",t.createElement(a.li,null,"Inicia sesión como admin con la contraseña Q1d3m0.Demo."),"\n"),"\n",t.createElement(a.img,{src:"/1686802950477.053783091/image8.jpg",alt:""}),"\n",t.createElement(a.ol,null,"\n",t.createElement(a.li,null,"Vaya a la pestaña ",t.createElement(a.strong,null,"Actividad de registro"),"."),"\n",t.createElement(a.li,null,"Localice la lista desplegable ",t.createElement(a.strong,null,"Buscar")," a la izquierda en la barra de herramientas."),"\n",t.createElement(a.li,null,"En la lista desplegable ",t.createElement(a.strong,null,"Buscar"),", seleccione ",t.createElement(a.strong,null,"Nueva búsqueda"),"."),"\n"),"\n",t.createElement(a.img,{src:"/1686802950477.053783092/image9.jpg",alt:""}),"\n",t.createElement(a.p,null,"Como resultado, la pestaña Actividad de registro muestra el formulario para crear una nueva búsqueda."),"\n",t.createElement(a.ol,null,"\n",t.createElement(a.li,null,"Desplázate hacia abajo."),"\n",t.createElement(a.li,null,"En la sección ",t.createElement(a.strong,null,"Intervalo de tiempo"),", seleccione ",t.createElement(a.strong,null,"Reciente")," y ",t.createElement(a.strong,null,"Última hora"),"."),"\n"),"\n",t.createElement(a.img,{src:"/1686802950461.053783063/image10.jpg",alt:""}),"\n",t.createElement(a.p,null,"Este intervalo de tiempo no es relevante para la regla de anomalía. Sin embargo, si selecciona un intervalo de tiempo muy corto para ",t.createElement(a.strong,null,"Reciente")," o selecciona ",t.createElement(a.strong,null,"Último intervalo (actualización automática)"),", podría perderse la confirmación visual de que su búsqueda funciona según lo previsto porque el resultado de la búsqueda está vacío si el script que alimenta los datos de muestra ya ha finalizado hace un tiempo."),"\n",t.createElement(a.p,null,"No seleccione ",t.createElement(a.strong,null,"Tiempo Real (streaming)")," porque no permite la agrupación."),"\n",t.createElement(a.ol,null,"\n",t.createElement(a.li,null,"\n",t.createElement(a.p,null,"Desplácese hasta la sección ",t.createElement(a.strong,null,"Definición de columnas")," y realice los siguientes pasos:"),"\n",t.createElement(a.p,null,"a. En la lista ",t.createElement(a.strong,null,"Columnas"),", elimine las dos propiedades siguientes:"),"\n",t.createElement(a.ul,null,"\n",t.createElement(a.li,null,"Fuente IP"),"\n",t.createElement(a.li,null,"Nombre de usuario"),"\n"),"\n",t.createElement(a.p,null,"b. En la lista ",t.createElement(a.strong,null,"Columnas disponibles"),", añada las mismas propiedades a la lista ",t.createElement(a.strong,null,"Agrupar por"),"."),"\n",t.createElement(a.img,{src:"/1686802950461.053783064/image11.jpg",alt:""}),"\n"),"\n",t.createElement(a.li,null,"\n",t.createElement(a.p,null,"Desplácese hasta la sección ",t.createElement(a.strong,null,"Parámetros de búsqueda")," y realice los siguientes pasos:"),"\n"),"\n"),"\n",t.createElement(a.p,null,"a. Para ",t.createElement(a.strong,null,"Parámetro"),", seleccione ",t.createElement(a.strong,null,"Categoría [Indexado]"),". b. Para ",t.createElement(a.strong,null,"Tipo de parámetro"),", seleccione ",t.createElement(a.strong,null,"Es"),". c. Para ",t.createElement(a.strong,null,"Operador"),", seleccione ",t.createElement(a.strong,null,"Igual a"),". d. Para Categoría de ",t.createElement(a.strong,null,"alto")," nivel, seleccione ",t.createElement(a.strong,null,"Autenticación"),". e. Para ",t.createElement(a.strong,null,"Categoría de bajo nivel"),", seleccione ",t.createElement(a.strong,null,"Escalada de privilegios superada"),".Haga clic en ",t.createElement(a.strong,null,"Añadir filtro"),"."),"\n",t.createElement(a.img,{src:"/1686802950461.053783065/image12.png",alt:""}),"\n",t.createElement(a.ol,null,"\n",t.createElement(a.li,null,"Para ejecutar la nueva búsqueda, pulse el botón ",t.createElement(a.strong,null,"Buscar"),"."),"\n"),"\n",t.createElement(a.p,null,"Como resultado, la pestaña Actividad del registro muestra el resultado de la búsqueda."),"\n",t.createElement(a.img,{src:"/1686802950461.053783066/image13.jpg",alt:""}),"\n",t.createElement(a.ol,null,"\n",t.createElement(a.li,null,"Para guardar la nueva búsqueda, haga clic en ",t.createElement(a.strong,null,"Guardar criterios")," en la barra de herramientas."),"\n"),"\n",t.createElement(a.img,{src:"/1686802950461.053783067/image14.jpg",alt:""}),"\n",t.createElement(a.p,null,"Como resultado, se abre la ventana Guardar criterios."),"\n",t.createElement(a.ol,null,"\n",t.createElement(a.li,null,"En la ventana Guardar criterios, realice los siguientes pasos:"),"\n"),"\n",t.createElement(a.p,null,"a. Para ",t.createElement(a.strong,null,"Search Name"),", introduzca ",t.createElement(a.strong,null,"Exercise: PrivEsc por IP de Origen y Nombre de Usuario")),"\n",t.createElement(a.p,null,"La mejor práctica es introducir nombres que describan lo que hace una búsqueda. Sin embargo, para este laboratorio, puede introducir un nombre de búsqueda más corto porque el nombre no se utiliza en ninguna parte."),"\n",t.createElement(a.p,null,"b. No es necesario para este ejercicio pero es útil en caso de que necesite localizar su búsqueda fácilmente, seleccione ",t.createElement(a.strong,null,"Incluir en mis búsquedas rápidas"),"."),"\n",t.createElement(a.img,{src:"/1686802950465.053783068/image15.jpg",alt:""}),"\n",t.createElement(a.p,null,"c. Para guardar los criterios de búsqueda, pulse ",t.createElement(a.strong,null,"OK"),"."),"\n",t.createElement(a.p,null,"Como resultado, se cierra la ventana Guardar criterios y se abre la ventana Búsqueda guardada."),"\n",t.createElement(a.p,null,"d. Haga clic en ",t.createElement(a.strong,null,"Aceptar"),"."),"\n",t.createElement(a.p,null,"Como resultado, se cierra la ventana Búsqueda guardada."),"\n")),t.createElement(a.section,{className:"heading","data-heading-rank":"2","aria-labelledby":"creación-de-una-regla-de-anomalía"},t.createElement(a.h2,{id:"creación-de-una-regla-de-anomalía"},t.createElement(a.a,{href:"#creación-de-una-regla-de-anomalía"},"Creación de una regla de anomalía")),"\n",t.createElement(a.p,null,"En este ejercicio, se crea la regla de anomalía y se configuran sus pruebas y la respuesta de la regla."),"\n",t.createElement(a.section,{className:"heading","data-heading-rank":"3","aria-labelledby":"parada-para-alimentar-datos-de-muestra"},t.createElement(a.h3,{id:"parada-para-alimentar-datos-de-muestra"},t.createElement(a.a,{href:"#parada-para-alimentar-datos-de-muestra"},"Parada para alimentar datos de muestra")),"\n",t.createElement(a.p,null,"Después de crear una regla de anomalía en este ejercicio, la verificará en el siguiente. La verificación necesita empezar desde cero. Por lo tanto, deje de alimentar datos de muestra a QRadar SIEM porque las pruebas de la nueva regla de anomalía coinciden inmediatamente con los datos de muestra una vez que se crea la regla. Para terminar el script, que alimenta datos de muestra, realice los siguientes pasos:"),"\n",t.createElement(a.ol,null,"\n",t.createElement(a.li,null,"\n",t.createElement(a.p,null,"Trae la ventana del terminal al frente."),"\n",t.createElement(a.p,null,"La ventana de terminal muestra la salida del script que alimenta datos de muestra a QRadar SIEM."),"\n"),"\n",t.createElement(a.li,null,"\n",t.createElement(a.p,null,"Confirme que el script ha finalizado. Si no lo ha hecho, escriba ",t.createElement(a.strong,null,"control-c")," (o ",t.createElement(a.strong,null,"Ctrl-c")," dependiendo de su teclado)"),"\n"),"\n",t.createElement(a.li,null,"\n",t.createElement(a.p,null,"No cierre la ventana del terminal."),"\n"),"\n"),"\n"),t.createElement(a.section,{className:"heading","data-heading-rank":"3","aria-labelledby":"iniciar-el-asistente-de-reglas"},t.createElement(a.h3,{id:"iniciar-el-asistente-de-reglas"},t.createElement(a.a,{href:"#iniciar-el-asistente-de-reglas"},"Iniciar el asistente de reglas")),"\n",t.createElement(a.p,null,"Para empezar a crear una regla de anomalía, que utilice la búsqueda agrupada del ejercicio anterior, realice los siguientes pasos:"),"\n",t.createElement(a.ol,null,"\n",t.createElement(a.li,null,"Trae el navegador al frente."),"\n",t.createElement(a.li,null,"En la pestaña Actividad de registro, en la lista desplegable ",t.createElement(a.strong,null,"Reglas de")," la barra de herramientas, seleccione ",t.createElement(a.strong,null,"Añadir regla de anomalía"),"..."),"\n"),"\n",t.createElement(a.img,{src:"/1686802950465.053783069/image16.jpg",alt:""}),"\n",t.createElement(a.p,null,"Como resultado, QRadar abre el Asistente de Reglas mientras permanece en la pestaña Actividad de Registro."),"\n",t.createElement(a.blockquote,null,"\n",t.createElement(a.p,null,"Si ",t.createElement(a.strong,null,"Añadir regla de anomalía")," aparece en gris es porque no ha seleccionado ninguna consulta."),"\n"),"\n",t.createElement(a.ol,{start:"3"},"\n",t.createElement(a.li,null,"En la página de bienvenida del Asistente para ",t.createElement(a.strong,null,"reglas"),", lea el texto introductorio y seleccione ",t.createElement(a.strong,null,"Omitir esta página al ejecutar este asistente para reglas"),"."),"\n",t.createElement(a.li,null,"Para navegar al Editor de Pila de Prueba de Reglas, haga clic en ",t.createElement(a.strong,null,"Siguiente")," dos veces."),"\n"),"\n",t.createElement(a.img,{src:"/1686802950465.053783070/image17.jpg",alt:""}),"\n",t.createElement(a.blockquote,null,"\n",t.createElement(a.p,null,"Si no puede hacer clic en el enlace ",t.createElement(a.strong,null,"Siguiente")," para avanzar a la página siguiente en el asistente, pruebe a utilizar el navegador Firefox. Es posible que no funcione en Chrome."),"\n"),"\n"),t.createElement(a.section,{className:"heading","data-heading-rank":"3","aria-labelledby":"tarea-3-configurar-los-parámetros-de-la-prueba"},t.createElement(a.h3,{id:"tarea-3-configurar-los-parámetros-de-la-prueba"},t.createElement(a.a,{href:"#tarea-3-configurar-los-parámetros-de-la-prueba"},"Tarea 3 Configurar los parámetros de la prueba")),"\n",t.createElement(a.p,null,"El Editor de Pila de Pruebas de Regla ya ha añadido automáticamente la prueba esencial para una regla de anomalía. Para configurar los parámetros de la prueba, siga estos pasos:"),"\n",t.createElement(a.ol,null,"\n",t.createElement(a.li,null,"Para abrir una ventana de selección de la propiedad para la que desea calcular los promedios de intervalo, haga clic en el parámetro [esta propiedad acumulada]."),"\n",t.createElement(a.li,null,"En la ventana, seleccione la propiedad acumulada ",t.createElement(a.strong,null,"Recuento de Eventos (Suma)"),"."),"\n"),"\n",t.createElement(a.img,{src:"/1686802950465.053783071/image18.jpg",alt:""}),"\n",t.createElement(a.ol,{start:"3"},"\n",t.createElement(a.li,null,"Para añadir la propiedad acumulada a la prueba, haga clic en ",t.createElement(a.strong,null,"Enviar"),"."),"\n"),"\n",t.createElement(a.p,null,"La ventana se cierra."),"\n",t.createElement(a.ol,{start:"4"},"\n",t.createElement(a.li,null,"El segundo parámetro es [1 min]. Configura la duración del intervalo. No modifique este parámetro."),"\n",t.createElement(a.li,null,"El tercer parámetro es [40]%. Configura por encima de qué desviación del intervalo actual de la media móvil ponderada de los intervalos anteriores la prueba se evalúa como verdadera. Deje el parámetro sin modificar."),"\n",t.createElement(a.li,null,"El último parámetro de la prueba configura para qué intervalo de tiempo el motor de detección de anomalías calcula la media móvil ponderada en intervalos."),"\n"),"\n",t.createElement(a.p,null,"El Editor de pila de prueba de reglas ha seleccionado automáticamente [24 horas] para el último parámetro. Para abrir una ventana para seleccionar otro intervalo de tiempo, haga clic en el parámetro."),"\n",t.createElement(a.ol,{start:"7"},"\n",t.createElement(a.li,null,"En la ventana, seleccione el intervalo de ",t.createElement(a.strong,null,"5 minutos"),"."),"\n"),"\n",t.createElement(a.img,{src:"/1686802950465.053783072/image19.jpg",alt:""}),"\n",t.createElement(a.ol,{start:"8"},"\n",t.createElement(a.li,null,"Para actualizar el parámetro, haga clic en ",t.createElement(a.strong,null,"Enviar"),"."),"\n"),"\n",t.createElement(a.p,null,"La ventana se cierra."),"\n",t.createElement(a.ol,{start:"9"},"\n",t.createElement(a.li,null,"Verifique que su Editor de Pila de Prueba de Reglas se parece a la siguiente captura de pantalla."),"\n"),"\n",t.createElement(a.img,{src:"/1686802950465.053783074/image20.jpg",alt:""}),"\n",t.createElement(a.a,{href:"/1686802950465.053783075/image21.jpg"}),"\n",t.createElement(a.p,null,t.createElement(a.strong,null,"Sugerencia:")," En los entornos de TI del mundo real, es probable que se produzca un número inusual de escaladas de privilegios en determinados momentos de forma legítima, por ejemplo, cuando se ejecutan procesos operativos automatizados. Por lo tanto, añada pruebas de tiempo para ejecutar una regla de detección de anomalías únicamente en los momentos en los que una desviación de una media móvil ponderada indique un problema."),"\n"),t.createElement(a.section,{className:"heading","data-heading-rank":"3","aria-labelledby":"proporcionar-un-valor-mínimo-para-cada-intervalo"},t.createElement(a.h3,{id:"proporcionar-un-valor-mínimo-para-cada-intervalo"},t.createElement(a.a,{href:"#proporcionar-un-valor-mínimo-para-cada-intervalo"},"Proporcionar un valor mínimo para cada intervalo")),"\n",t.createElement(a.p,null,"Normalmente, las pruebas estadísticas sólo conducen a resultados útiles cuando llega un mínimo de eventos o flujos relevantes por intervalo. Para las reglas de detección de anomalías en su entorno, los mínimos están probablemente en los cientos o miles. Este ejemplo necesita trabajar con un número relativamente pequeño de eventos de muestra. Por lo tanto, realice los siguientes pasos para requerir un mínimo de 8 eventos por intervalo:"),"\n",t.createElement(a.ol,null,"\n",t.createElement(a.li,null,"Haga clic en el icono verde de ",t.createElement(a.strong,null,"signo más (+)")," situado junto a la siguiente prueba:"),"\n"),"\n",t.createElement(a.p,null,t.createElement(a.em,null,"cuando el valor del intervalo comprobado es mayor o igual que 0")),"\n",t.createElement(a.ol,{start:"2"},"\n",t.createElement(a.li,null,"Para abrir una ventana para introducir un número como mínimo, haga clic en el parámetro [0]."),"\n",t.createElement(a.li,null,"En la ventana, para ",t.createElement(a.strong,null,"Proporcionar un valor mínimo para cada intervalo"),", sustituya el ",t.createElement(a.strong,null,"0")," por ",t.createElement(a.strong,null,"8")),"\n"),"\n",t.createElement(a.img,{src:"/1686802950465.053783076/image22.jpg",alt:""}),"\n",t.createElement(a.ol,{start:"4"},"\n",t.createElement(a.li,null,"Para configurar la prueba mínima, haga clic en ",t.createElement(a.strong,null,"Enviar"),"."),"\n"),"\n",t.createElement(a.p,null,"La ventana se cierra."),"\n"),t.createElement(a.section,{className:"heading","data-heading-rank":"3","aria-labelledby":"configuración-de-la-regla-de-anomalías"},t.createElement(a.h3,{id:"configuración-de-la-regla-de-anomalías"},t.createElement(a.a,{href:"#configuración-de-la-regla-de-anomalías"},"Configuración de la regla de anomalías")),"\n",t.createElement(a.p,null,"Normalmente, las pruebas estadísticas sólo conducen a resultados útiles cuando llega un mínimo de eventos o flujos relevantes por intervalo. Para las reglas de detección de anomalías en su entorno, los mínimos están probablemente en los cientos o miles. Este ejemplo necesita trabajar con un número relativamente pequeño de eventos de muestra. Por lo tanto, realice los siguientes pasos para requerir un mínimo de 8 eventos por intervalo:"),"\n",t.createElement(a.ol,null,"\n",t.createElement(a.li,null,"Desplácese hacia abajo para ver más claramente todos los campos relacionados con esta tarea."),"\n",t.createElement(a.li,null,"Para el nombre de la regla en el campo ",t.createElement(a.strong,null,"Aplicar"),", introduzca el siguiente nombre:"),"\n"),"\n",t.createElement(a.pre,null,t.createElement(a.code,{className:"hljs language-bash"},"Exercise-Authentication: Unusual Privilege Escalations\n")),"\n",t.createElement(a.blockquote,null,"\n",t.createElement(a.p,null,t.createElement(a.strong,null,"Nota:")," Este ejercicio utiliza el prefijo Ejercicio- para distinguir las reglas predefinidas de su propio desarrollo."),"\n"),"\n",t.createElement(a.ol,{start:"3"},"\n",t.createElement(a.li,null,"Para asignar la regla personalizada al grupo ",t.createElement(a.strong,null,"Ejercicio"),", desplácese hacia abajo en la lista de grupos y seleccione ",t.createElement(a.strong,null,"Ejercicio"),"."),"\n",t.createElement(a.li,null,"Para documentar la regla personalizada en el campo ",t.createElement(a.strong,null,"Notas"),", introduzca el siguiente texto:"),"\n"),"\n",t.createElement(a.pre,null,t.createElement(a.code,{className:"hljs language-bash"},"This rule triggers when privilege escalations deviate considerably from their weighted moving average.\n")),"\n",t.createElement(a.ol,{start:"5"},"\n",t.createElement(a.li,null,"Para confirmar la entrada, pulse ",t.createElement(a.strong,null,"Intro"),"."),"\n",t.createElement(a.li,null,"Verifique que su Asistente de Reglas se parece a la siguiente captura de pantalla."),"\n"),"\n",t.createElement(a.img,{src:"/1686802950469.053783078/image24.jpg",alt:""}),"\n",t.createElement(a.a,{href:"/1686802950469.053783079/image25.png"}),"\n",t.createElement(a.blockquote,null,"\n",t.createElement(a.p,null,t.createElement(a.strong,null,"Nota:")," Cuando necesite localizar todas las reglas de detección de anomalías y reglas personalizadas que haya desarrollado, vaya a ",t.createElement(a.strong,null,"Reglas")," en la pestaña ",t.createElement(a.strong,null,"Delitos"),", seleccione ",t.createElement(a.strong,null,"Reglas")," en la lista desplegable ",t.createElement(a.strong,null,"Mostrar")," y, a continuación, seleccione ",t.createElement(a.strong,null,"Ejercicio")," en la lista desplegable ",t.createElement(a.strong,null,"Grupo"),"."),"\n"),"\n"),t.createElement(a.section,{className:"heading","data-heading-rank":"3","aria-labelledby":"observar-las-respuestas-de-las-normas"},t.createElement(a.h3,{id:"observar-las-respuestas-de-las-normas"},t.createElement(a.a,{href:"#observar-las-respuestas-de-las-normas"},"Observar las respuestas de las normas")),"\n",t.createElement(a.p,null,"Para que se cree un delito para las escaladas de privilegios inusuales que comprueba la regla de detección de anomalías, realice los siguientes pasos:"),"\n",t.createElement(a.ol,null,"\n",t.createElement(a.li,null,"Para navegar a la respuesta de la regla, haga clic en ",t.createElement(a.strong,null,"Siguiente"),"."),"\n",t.createElement(a.li,null,"El Asistente de Reglas ya ha preparado la Respuesta a la Regla. Para este ejemplo, no realice ningún cambio."),"\n",t.createElement(a.li,null,"Para observar que la infracción sólo se puede indexar por Nombre del suceso, abra la lista desplegable ",t.createElement(a.strong,null,"Indexar infracción en función de"),"."),"\n"),"\n",t.createElement(a.img,{src:"/1686802950469.053783080/image26.jpg",alt:""}),"\n",t.createElement(a.ol,{start:"4"},"\n",t.createElement(a.li,null,"Desplácese hasta la sección ",t.createElement(a.strong,null,"Habilitar regla"),". No cambie nada. Lea la pista importante junto a la casilla de verificación."),"\n"),"\n",t.createElement(a.img,{src:"/1686802950469.053783081/image27.jpg",alt:""}),"\n",t.createElement(a.ol,{start:"5"},"\n",t.createElement(a.li,null,"Para ir al Resumen de reglas, haga clic en ",t.createElement(a.strong,null,"Siguiente"),"."),"\n",t.createElement(a.li,null,"Para crear la regla, haga clic en ",t.createElement(a.strong,null,"Finalizar"),"."),"\n"),"\n",t.createElement(a.p,null,"Se cierra el Asistente para reglas."),"\n")),t.createElement(a.section,{className:"heading","data-heading-rank":"2","aria-labelledby":"verificación-de-la-regla-de-anomalías"},t.createElement(a.h2,{id:"verificación-de-la-regla-de-anomalías"},t.createElement(a.a,{href:"#verificación-de-la-regla-de-anomalías"},"Verificación de la regla de anomalías")),"\n",t.createElement(a.p,null,"En este ejercicio, usted verifica si su desarrollo crea una ofensa."),"\n",t.createElement(a.section,{className:"heading","data-heading-rank":"3","aria-labelledby":"alimentación-de-datos-de-muestra-a-qradar-siem-1"},t.createElement(a.h3,{id:"alimentación-de-datos-de-muestra-a-qradar-siem-1"},t.createElement(a.a,{href:"#alimentación-de-datos-de-muestra-a-qradar-siem-1"},"Alimentación de datos de muestra a QRadar SIEM")),"\n",t.createElement(a.p,null,"Para ejecutar el script, que alimenta datos de muestra, realice los siguientes pasos:"),"\n",t.createElement(a.ol,null,"\n",t.createElement(a.li,null,"Trae la ventana del terminal al frente."),"\n"),"\n",t.createElement(a.p,null,"La ventana del terminal sigue mostrando la salida de la ejecución del script anterior."),"\n",t.createElement(a.ol,{start:"2"},"\n",t.createElement(a.li,null,"Para alimentar repetidamente el mensaje syslog preparado a QRadar, ejecute el siguiente comando:"),"\n"),"\n",t.createElement(a.pre,null,t.createElement(a.code,{className:"hljs language-bash"},"./sendSpike.sh\n")),"\n",t.createElement(a.img,{src:"/1686802950469.053783082/image28.jpg",alt:""}),"\n",t.createElement(a.ol,{start:"3"},"\n",t.createElement(a.li,null,"Deje que se ejecute el script y vuelva al navegador. No cierre la ventana del terminal."),"\n"),"\n"),t.createElement(a.section,{className:"heading","data-heading-rank":"3","aria-labelledby":"observar-el-delito"},t.createElement(a.h3,{id:"observar-el-delito"},t.createElement(a.a,{href:"#observar-el-delito"},"Observar el delito")),"\n",t.createElement(a.p,null,"El script alimenta eventos a QRadar SIEM, que coinciden con su regla de anomalía. Durante los primeros cinco minutos, la tasa de eventos aumenta hasta alcanzar un pico. Después del pico, la tasa disminuye reflejando la tasa de aumento de los primeros cinco minutos."),"\n",t.createElement(a.p,null,"La media del intervalo con el pico se desvía en un porcentaje superior al configurado en la regla de anomalía de la media móvil ponderada. Por lo tanto, QRadar SIEM crea una ofensa después de que el script se haya ejecutado durante unos seis minutos. Para observar la ofensa, realice los siguientes pasos:"),"\n",t.createElement(a.ol,null,"\n",t.createElement(a.li,null,"Vaya a la pestaña ",t.createElement(a.strong,null,"Infracciones"),"."),"\n",t.createElement(a.li,null,"Para actualizar la lista de infracciones, haga doble clic en la pestaña ",t.createElement(a.strong,null,"Infracciones"),". El doble clic actualiza y restablece la configuración predeterminada de la ficha."),"\n"),"\n",t.createElement(a.blockquote,null,"\n",t.createElement(a.p,null,t.createElement(a.strong,null,"Nota:")," En este caso, puede lograr el mismo objetivo, si hace clic en el icono de ",t.createElement(a.strong,null,"doble flecha")," en la esquina superior derecha de la interfaz de usuario de QRadar SIEM. Sin embargo, está desactivado para esta simulación."),"\n"),"\n",t.createElement(a.ol,{start:"3"},"\n",t.createElement(a.li,null,"Cuando aparezca la nueva ofensa, haz doble clic en ella."),"\n"),"\n",t.createElement(a.img,{src:"/1686802950469.053783083/image29.png",alt:""}),"\n",t.createElement(a.p,null,"Se abre el Resumen de Ofensas."),"\n",t.createElement(a.img,{src:"/1686802950473.053783085/image30.jpg",alt:""}),"\n",t.createElement(a.ol,{start:"4"},"\n",t.createElement(a.li,null,"\n",t.createElement(a.p,null,"Opcionalmente, haga clic en ",t.createElement(a.strong,null,"Anomalía")," en la barra de herramientas."),"\n",t.createElement(a.p,null,"Se abre una ventana aparte con los resultados de la búsqueda que utiliza su regla de anomalías."),"\n"),"\n",t.createElement(a.li,null,"\n",t.createElement(a.p,null,"Revise el resultado de la búsqueda y cierre la ventana del navegador para volver a la ventana principal de la consola de QRadar."),"\n"),"\n",t.createElement(a.li,null,"\n",t.createElement(a.p,null,"En el campo ",t.createElement(a.strong,null,"Recuento de eventos/flujos"),", haga clic en ",t.createElement(a.strong,null,"5 eventos"),". El número de eventos puede variar."),"\n",t.createElement(a.p,null,"Se abre una ventana aparte con los eventos que la regla de anomalía despachó como Respuesta de regla."),"\n"),"\n",t.createElement(a.li,null,"\n",t.createElement(a.p,null,"Para abrir los detalles del evento, desplácese hacia abajo y haga doble clic en el evento."),"\n"),"\n",t.createElement(a.li,null,"\n",t.createElement(a.p,null,"Observe la sección ",t.createElement(a.strong,null,"Información")," sobre detección de anomalías. Solo aparece para los eventos que las reglas de detección de anomalías envían como Respuesta de regla."),"\n"),"\n"),"\n",t.createElement(a.img,{src:"/1686802950473.053783086/image31.jpg",alt:""}),"\n")),t.createElement(a.section,{className:"heading","data-heading-rank":"2","aria-labelledby":"resumen"},t.createElement(a.h2,{id:"resumen"},t.createElement(a.a,{href:"#resumen"},"Resumen")),"\n",t.createElement(a.p,null,"Ha completado con éxito este laboratorio creando y verificando una regla de anomalía en QRadar.")))}var s=function(e){void 0===e&&(e={});const{wrapper:a}=Object.assign({},(0,l.ah)(),e.components);return a?t.createElement(a,e,t.createElement(r,e)):r(e)},i=n(4184),o=n.n(i),c=n(4690),m=n(1140),d=n(2565),u=n(8531),p=n(3383),g=n(7315);const E=e=>{const{data:{mdx:{tableOfContents:{items:a},frontmatter:{toc:n=!0,title:l,timeToComplete:r,updated:s}}},children:i}=e,c=(0,t.useRef)(null),{0:E}=(0,t.useState)(""),b=(null===n||n)&&a;return t.createElement(t.Fragment,null,t.createElement(m.Z,{timeToComplete:r,updated:s},a[0].title||l||""),t.createElement(u.Z,{className:g.YS},t.createElement("article",{className:o()(g.Y2,!b&&g.ey),ref:c},t.createElement(d.Z,{components:{h1:()=>null}},i)),b&&t.createElement(p.Z,{itemsList:a,maxDepth:2,currSection:E})))},b=e=>{const{location:{pathname:a},data:{mdx:{frontmatter:{title:n},tableOfContents:{items:l}}}}=e;return t.createElement(c.Z,{pathname:a,title:n||l[0].title||void 0})};function v(e){return t.createElement(E,e,t.createElement(s,e))}},2565:function(e,a,n){n.d(a,{Z:function(){return i}});var l=n(7294),t=n(1151),r=n(7563);const s={table:r.y6,a:r.IW,blockquote:r.R4,SubHeader:r.bU,img:r.fb,code:r.dn,QuizAlert:r.SA,Danger:r.b0,Warning:r.v3,CopyText:r.O5};var i=(0,l.memo)((function(e){let{children:a,components:n={}}=e;return l.createElement(t.Zo,{components:{...s,...n}},a)}))},3383:function(e,a,n){n.d(a,{Z:function(){return c}});var l=n(7294),t=n(7500),r=n(4184),s=n.n(r),i=n(6488);const o=function(e,a,n){return void 0===a&&(a=[]),void 0===n&&(n=0),e.forEach((e=>{const{title:l,url:t,items:r}=e;a.splice(a.length,0,{depth:n,title:l,url:t}),r&&r.length>0&&o(r,a,n+1)})),a};var c=e=>{const{itemsList:a}=e,n=(0,l.useMemo)((()=>o(a[0].items||[])),[a]),r=(0,i.Z)("h1[id],h2[id]",{threshold:[0,1],rootMargin:"-48px 0px -90% 0px"});return n.length<1?null:l.createElement("nav",{className:"TableOfContents-module--toc--54d35"},l.createElement("div",{className:"TableOfContents-module--tocStack--90609"},l.createElement("h6",{className:"TableOfContents-module--tocHeader--05956"},l.createElement(t.rU,{to:"#",replace:!0},"On this page")),n.map(((e,a)=>{let{title:n,url:t}=e;return l.createElement("a",{className:s()("TableOfContents-module--link--b292b",r===t.substring(1)&&"TableOfContents-module--activeItem--3869f"),key:a,href:t},n)}))))}},7315:function(e,a,n){n.d(a,{Y2:function(){return l},YS:function(){return r},ey:function(){return t}});var l="{mdx-fields__slug}-module--article--e3d5a",t="{mdx-fields__slug}-module--noToc--82387",r="{mdx-fields__slug}-module--wrapper--58e72"},1151:function(e,a,n){n.d(a,{Zo:function(){return i},ah:function(){return r}});var l=n(7294);const t=l.createContext({});function r(e){const a=l.useContext(t);return l.useMemo((()=>"function"==typeof e?e(a):{...a,...e}),[a,e])}const s={};function i({components:e,children:a,disableParentContext:n}){let i;return i=n?"function"==typeof e?e({}):e||s:r(e),l.createElement(t.Provider,{value:i},a)}}}]);
//# sourceMappingURL=component---src-pages-mdx-fields-slug-tsx-content-file-path-content-q-radar-siem-106-es-md-ae3d2d37aaec4d8ad1af.js.map