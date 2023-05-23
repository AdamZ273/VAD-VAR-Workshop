"use strict";(self.webpackChunkvad_var_site=self.webpackChunkvad_var_site||[]).push([[3857],{7645:function(e,a,n){n.r(a),n.d(a,{Head:function(){return b},default:function(){return f}});var t=n(1151),l=n(7294);function r(e){const a=Object.assign({section:"section",h1:"h1",h2:"h2",a:"a",ol:"ol",li:"li",p:"p",strong:"strong",img:"img",ul:"ul"},(0,t.ah)(),e.components);return l.createElement(a.section,{className:"heading","data-heading-rank":"1","aria-labelledby":"102-observación-de-trabajos-configuración-de-alertas-y-notificaciones-externas"},l.createElement(a.h1,{id:"102-observación-de-trabajos-configuración-de-alertas-y-notificaciones-externas"},"102: Observación de trabajos, configuración de alertas y notificaciones externas"),"\n",l.createElement(a.section,{className:"heading","data-heading-rank":"2","aria-labelledby":"observar-un-trabajo-en-databand"},l.createElement(a.h2,{id:"observar-un-trabajo-en-databand"},l.createElement(a.a,{href:"#observar-un-trabajo-en-databand"},"Observar un trabajo en Databand")),"\n",l.createElement(a.ol,null,"\n",l.createElement(a.li,null,"\n",l.createElement(a.p,null,"Vuelva a la pestaña del navegador con CP4DaaS. Abra el flujo de Integración de Datos Multicloud (si no está allí), y haga clic en el botón ",l.createElement(a.strong,null,"Ejecutar")," en la parte superior."),"\n",l.createElement(a.p,null,l.createElement(a.img,{src:"/1684878573413.5188862125/run-job.png",alt:"run job"})," La tarea puede tardar unos minutos en ejecutarse. Una vez completado, verá un banner verde ",l.createElement(a.strong,null,"Ejecutar correctamente con advertencias")," en la parte superior. Cuando lo vea, vuelva a la pestaña Databand."),"\n"),"\n",l.createElement(a.li,null,"\n",l.createElement(a.p,null,"En el menú de la izquierda, seleccione la pestaña ",l.createElement(a.strong,null,"Pipelines"),". Usted puede identificar su trabajo específico de DataStage / ETL (extraer, transformar, cargar) pipeline mirando la columna ",l.createElement(a.strong,null,"Proyecto")," en esta página, que muestra el nombre del proyecto de su entorno DataStage."),"\n"),"\n",l.createElement(a.li,null,"\n",l.createElement(a.p,null,"Haga clic en la columna ",l.createElement(a.strong,null,"Nombre")," de su proyecto específico (por ejemplo, ",l.createElement(a.strong,null,"Databand_mk"),")"),"\n",l.createElement(a.p,null,l.createElement(a.img,{src:"/1684878573433.519862132/select-job.png",alt:"select job"})," ",l.createElement(a.strong,null,"CONSEJO RÁPIDO:")," Puede buscar rápidamente su trabajo DataStage específico haciendo clic en el menú desplegable ",l.createElement(a.strong,null,"Proyecto")," y escribiendo el nombre de su proyecto CP4DaaS en la barra de búsqueda. Vea la siguiente captura de pantalla para un ejemplo de esta función de búsqueda."),"\n",l.createElement(a.img,{src:"/1684878573401.5188862122/project-search.png",alt:"project search"}),"\n"),"\n",l.createElement(a.li,null,"\n",l.createElement(a.p,null,"La nueva pantalla que aparecerá será la Lista de ejecuciones de cada una de las ejecuciones del pipeline ETL (trabajo DataStage). Esta página muestra la lista secuencial de ejecuciones del trabajo de DataStage, el estado de esas ejecuciones, la hora de inicio y fin, las alertas, los errores, el número de tareas correctas/incorrectas y la duración de esas tareas."),"\n",l.createElement(a.p,null,"Sólo ha ejecutado este trabajo de DataStage una vez, por lo que sólo se mostrará una ejecución. Sin embargo, a medida que continúe ejecutando trabajos a lo largo de este laboratorio, verá que esta página se llena con cada ejecución secuencial."),"\n"),"\n",l.createElement(a.li,null,"\n",l.createElement(a.p,null,"En esta misma pantalla, haga clic en el ",l.createElement(a.strong,null,"nombre de ejecución")," para esta ejecución de trabajo específica."),"\n",l.createElement(a.img,{src:"/1684878573365.5183862113/click-run-name.png",alt:"click run name"}),"\n"),"\n",l.createElement(a.li,null,"\n",l.createElement(a.p,null,"Cambie el tamaño del panel de la ventana que muestra la tubería para que pueda ver todo el flujo arrastrando la flecha que apunta hacia la izquierda a la parte izquierda de la pantalla."),"\n",l.createElement(a.p,null,l.createElement(a.img,{src:"/1684878573409.5188862124/resize-dag.png",alt:"resize dag"})," La pantalla se parecerá a la captura de pantalla siguiente. Puede que tenga que arrastrar y ampliar la pantalla para centrar el trabajo."),"\n",l.createElement(a.p,null,l.createElement(a.img,{src:"/1684878573393.5186862120/job-flow.png",alt:"job flow"})," ",l.createElement(a.strong,null,"NOTA:")," Para trabajos grandes y complejos puede utilizar una ventana de navegación en la parte inferior derecha para desplazarse por el trabajo. Se trata del icono ",l.createElement(a.strong,null,"Alternar minimapa")," de la derecha."),"\n",l.createElement(a.img,{src:"/1684878573453.5193862139/toggle-minimap.png",alt:"toggle-minimap"}),"\n",l.createElement(a.p,null,"Databand muestra una representación gráfica del trabajo DataStage. Observe que cada etapa es de color verde, lo que significa que se ha ejecutado correctamente. Cada etapa individual contiene el nombre de esa etapa, y una marca de tiempo de cuánto tiempo tardó cada etapa en ejecutarse. Además, la parte superior de esta vista muestra el tiempo total que tardó en ejecutarse este trabajo."),"\n",l.createElement(a.p,null,l.createElement(a.strong,null,"NOTA:")," Estas etapas pueden ejecutarse en paralelo y, por lo tanto, la suma total del tiempo de cada etapa individual mostrada es probablemente mucho mayor que el tiempo total de ejecución del trabajo."),"\n"),"\n",l.createElement(a.li,null,"\n",l.createElement(a.p,null,"A continuación, haga clic en la etapa ",l.createElement(a.strong,null,"MORTGAGE_APPLICANTS"),"."),"\n"),"\n",l.createElement(a.li,null,"\n",l.createElement(a.p,null,"Seleccione la pestaña ",l.createElement(a.strong,null,"Registros")," en el menú superior. Cambia el tamaño de la vista como hiciste antes para ver más del registro de la etapa seleccionada."),"\n",l.createElement(a.img,{src:"/1684878573449.5193862138/stage-logs.png",alt:"stage logs"}),"\n",l.createElement(a.p,null,"Esta vista nos mostrará los registros asociados a esa etapa específica. No dude en hacer clic en otras etapas para ver esos registros también."),"\n",l.createElement(a.p,null,'En este punto, usted ha visto algunas de las funcionalidades "paso a paso" que Databand aporta a la observación de nuestros trabajos DataStage. Vuelva a la pestaña del navegador que aloja su entorno DataStage y ejecute el trabajo ',l.createElement(a.strong,null,"4 veces más")," para generar más métricas y establecer algunas líneas de base para nuestro entorno Databand. Esto tendrá sentido a medida que continuemos nuestro laboratorio y simulemos cómo sería un entorno de cliente donde un trabajo se ejecutaría muchas veces."),"\n"),"\n"),"\n"),l.createElement(a.section,{className:"heading","data-heading-rank":"2","aria-labelledby":"alertas-de-empleo-de-pruebas-en-databand"},l.createElement(a.h2,{id:"alertas-de-empleo-de-pruebas-en-databand"},l.createElement(a.a,{href:"#alertas-de-empleo-de-pruebas-en-databand"},"Alertas de empleo de Pruebas en Databand")),"\n",l.createElement(a.ol,null,"\n",l.createElement(a.li,null,"\n",l.createElement(a.p,null,"Después de ejecutar el trabajo de Integración de Datos Multicloud cuatro veces más (ahora ha ejecutado este trabajo un total de cinco veces), vuelva a su entorno Databand. Selecciona la pestaña ",l.createElement(a.strong,null,"Pipelines")," del menú de la izquierda, busca tu pipeline, profundiza en él y fíjate en la pestaña ",l.createElement(a.strong,null,"Run list")," del menú superior."),"\n",l.createElement(a.img,{src:"/1684878573413.5188862126/run-list.png",alt:"run list"}),"\n"),"\n",l.createElement(a.li,null,"\n",l.createElement(a.p,null,"Seleccione la pestaña ",l.createElement(a.strong,null,"Métricas")," en el menú superior. La métrica mostrada por defecto es la ",l.createElement(a.strong,null,"Duración")," de cada ejecución."),"\n",l.createElement(a.p,null,l.createElement(a.img,{src:"/1684878573417.5188862127/run-metrics.png",alt:"run metrics"})," ",l.createElement(a.strong,null,"NOTA:")," También puede observar otras métricas del trabajo DataStage; por ejemplo, las filas que se escriben y se leen en cada etapa. Esto está fuera del alcance de este laboratorio."),"\n"),"\n",l.createElement(a.li,null,"\n",l.createElement(a.p,null,"Ahora es el momento de crear tu primera alerta. Haz clic en el botón morado ",l.createElement(a.strong,null,"Añadir alerta")," en la esquina superior derecha de la pantalla."),"\n",l.createElement(a.p,null,l.createElement(a.img,{src:"/1684878573353.518862110/add-alert.png",alt:"add alert"}),' El primer paso para crear una alerta Databand es crear la "Definición de la alerta". Esta es la lógica detrás de su alerta. Observe todas las posibilidades de alerta que puede crear en Databand. Puede crear una alerta basada en las métricas de ejecución de su trabajo de DataStage, tales como éxito o fracaso, duración de la ejecución, duración de tareas específicas, operaciones de datos faltantes y cambios de esquema.'),"\n"),"\n",l.createElement(a.li,null,"\n",l.createElement(a.p,null,"Dado que estos trabajos tardan unos 2 ó 3 minutos en ejecutarse, se creará una alerta si el trabajo tarda más de 4 minutos. Para crear esta alerta, haga clic en el botón ",l.createElement(a.strong,null,"Configurar")," del mosaico ",l.createElement(a.strong,null,"Duración de la canalización"),"."),"\n",l.createElement(a.img,{src:"/1684878573401.5188862121/pipeline-duration.png",alt:"pipeline duration"}),"\n"),"\n",l.createElement(a.li,null,"\n",l.createElement(a.p,null,"Haga clic en el desplegable ",l.createElement(a.strong,null,"Operador")," y seleccione la opción ",l.createElement(a.strong,null,"mayor que"),". Fíjese en los demás operadores que aparecen aquí, como ",l.createElement(a.strong,null,"Desviación porcentual")," y ",l.createElement(a.strong,null,"Anomalía"),"."),"\n"),"\n",l.createElement(a.li,null,"\n",l.createElement(a.p,null,"Introduzca ",l.createElement(a.strong,null,"240")," en la casilla ",l.createElement(a.strong,null,"Duración"),", que acepta segundos como entrada, para designar el tiempo de 4 minutos."),"\n",l.createElement(a.img,{src:"/1684878573389.5186862119/gt-4mins.png",alt:"gt 4mins"}),"\n"),"\n",l.createElement(a.li,null,"\n",l.createElement(a.p,null,"Desplácese hacia abajo hasta la sección ",l.createElement(a.strong,null,"Configuración adicional")," y haga clic en la casilla ",l.createElement(a.strong,null,"Baja")," que aparece bajo la sección ",l.createElement(a.strong,null,"Gravedad de la")," alerta. Esto alertará al grupo individual asignado sobre la importancia de esta alerta específica. Dado que esta alerta se activará si un trabajo se ejecuta ligeramente más lento de lo normal, márquela como gravedad baja."),"\n"),"\n",l.createElement(a.li,null,"\n",l.createElement(a.p,null,"Asigne a esta alerta un nombre titulado Trabajo de ejecución lenta ",l.createElement(a.strong,null,"<SUS_INICIALES>")," (por ejemplo, Trabajo de ejecución lenta AB)."),"\n"),"\n",l.createElement(a.li,null,"\n",l.createElement(a.p,null,"Asegúrese de que la lógica de su definición de alerta coincide con las capturas de pantalla anteriores y, a continuación, haga clic en ",l.createElement(a.strong,null,"Guardar alerta"),"."),"\n",l.createElement(a.img,{src:"/1684878573421.519862128/save-duration-alert.png",alt:"save duration alert"}),"\n"),"\n",l.createElement(a.li,null,"\n",l.createElement(a.p,null,"La siguiente pantalla le permite asignar esta alerta a un receptor, que es un usuario o grupo de usuarios que serán notificados de esta alerta a través de Slack, correo electrónico o PagerDuty (esta parte se cubre en la siguiente parte del laboratorio.) Por ahora, mantenga la alerta dentro de Databand. Haga clic en el botón ",l.createElement(a.strong,null,"Hecho"),"."),"\n",l.createElement(a.img,{src:"/1684878573377.5183862115/confirm-duration-alert.png",alt:"confirm duration alert"}),"\n"),"\n"),"\n",l.createElement(a.p,null,"Tenga en cuenta lo útiles que pueden ser estas alertas para controlar el éxito, el fracaso y el rendimiento general de nuestros trabajos de DataStage."),"\n"),l.createElement(a.section,{className:"heading","data-heading-rank":"2","aria-labelledby":"alertas-basadas-en-interacciones-de-datos"},l.createElement(a.h2,{id:"alertas-basadas-en-interacciones-de-datos"},l.createElement(a.a,{href:"#alertas-basadas-en-interacciones-de-datos"},"Alertas basadas en interacciones de datos")),"\n",l.createElement(a.p,null,"Para la parte final de este laboratorio, verá las interacciones de datos de su trabajo y creará una alerta basada en dichas interacciones. Este es uno de los principales valores añadidos de la integración de Databand con su entorno DataStage, ya que ahora puede alertar a los usuarios casi en tiempo real sobre muchos fallos personalizados, cambios de trabajo, retrasos y mucho más."),"\n",l.createElement(a.ol,null,"\n",l.createElement(a.li,null,"\n",l.createElement(a.p,null,"Si aún no se encuentra en la página Lista de ejecuciones, vuelva a la pestaña Lista de ejecuciones seleccionando Lista de ejecuciones en la barra de menú superior."),"\n"),"\n",l.createElement(a.li,null,"\n",l.createElement(a.p,null,"Haga clic en el primer nombre de ejecución."),"\n",l.createElement(a.img,{src:"/1684878573437.519862133/select-run.png",alt:"select run"}),"\n"),"\n",l.createElement(a.li,null,"\n",l.createElement(a.p,null,"Seleccione la pestaña ",l.createElement(a.strong,null,"Interacciones de datos")," en el menú superior. Utilice el reescalador para centrarse en la parte izquierda de la pantalla."),"\n",l.createElement(a.p,null,l.createElement(a.img,{src:"/1684878573381.5186862116/data-interactions.png",alt:"data interactions"})," Puede ver las entradas y salidas (lecturas/escrituras) de los registros y columnas en cada etapa respectiva. Puede ver el tipo de fuente, los conjuntos de datos asociados, cualquier problema que haya podido surgir, información sobre el esquema y los registros, y la etapa asociada. El total de estos registros se representa en el gráfico de la parte superior de la pantalla. El gráfico de la parte superior titulado ",l.createElement(a.strong,null,"Historial de registros de ejecución (todas las tareas)"),", así como la columna titulada ",l.createElement(a.strong,null,"Tendencia del historial"),", ofrecen al usuario una visión del rendimiento histórico de la tarea."),"\n",l.createElement(a.p,null,l.createElement(a.img,{src:"/1684878573405.5188862123/record-history.png",alt:"record history"})," ",l.createElement(a.strong,null,"NOTA:")," También puede utilizar la pestaña ",l.createElement(a.strong,null,"Interacciones de datos")," para cada etapa individual, como en la captura de pantalla siguiente. Al hacer clic en la transformación específica, puede ver información como el esquema, el recuento de filas y la tendencia histórica de ese recuento de filas."),"\n",l.createElement(a.img,{src:"/1684878573385.5186862118/filterstate-task.png",alt:"filterstate task"}),"\n"),"\n",l.createElement(a.li,null,"\n",l.createElement(a.p,null,"Ahora creará una alerta en torno a un cambio de esquema. Seleccione la pestaña ",l.createElement(a.strong,null,"Alertas")," en el menú de la izquierda. Aquí es donde se muestran todas las alertas de Databand. Tómese un momento para echar un vistazo a esta página y entender qué información se muestra al usuario."),"\n"),"\n",l.createElement(a.li,null,"\n",l.createElement(a.p,null,"Haga clic en el botón púrpura ",l.createElement(a.strong,null,"Añadir alerta")," en la esquina superior derecha. Aquí puedes ver (de nuevo) que puedes crear una alerta en un pipeline (trabajo de DataStage), múltiples pipelines, calidad de datos y más."),"\n",l.createElement(a.img,{src:"/1684878573361.5183862111/add-alert2.png",alt:"add alert2"}),"\n"),"\n",l.createElement(a.li,null,"\n",l.createElement(a.p,null,"Va a crear una alerta para monitorizar un cambio de esquema y establecer que el receptor sea Slack. Haga clic en ",l.createElement(a.strong,null,"Configurar")," en el mosaico ",l.createElement(a.strong,null,"Cambio de")," esquema."),"\n",l.createElement(a.img,{src:"/1684878573429.519862131/schema-change.png",alt:"schema change"}),"\n"),"\n",l.createElement(a.li,null,"\n",l.createElement(a.p,null,"En primer lugar, debe especificar su canalización desde el proyecto y crear su definición de alerta. Seleccione el tipo de activo ",l.createElement(a.strong,null,"Proyecto"),". Haga clic en el desplegable ",l.createElement(a.strong,null,"Proyecto"),", escriba el nombre del proyecto que ha creado o parte del nombre y seleccione el nombre de su proyecto con el flujo DataStage."),"\n",l.createElement(a.img,{src:"/1684878573441.5193862137/source-project.png",alt:"source project"}),"\n"),"\n",l.createElement(a.li,null,"\n",l.createElement(a.p,null,"Después de seleccionar su proyecto, seleccione ",l.createElement(a.strong,null,"Alta")," como gravedad en la sección ",l.createElement(a.strong,null,"Gravedad de la alerta"),"."),"\n"),"\n",l.createElement(a.li,null,"\n",l.createElement(a.p,null,"Haga clic en ",l.createElement(a.strong,null,"Guardar alerta"),"."),"\n",l.createElement(a.img,{src:"/1684878573421.519862129/save-schema-alert.png",alt:"save schema alert"}),"\n",l.createElement(a.p,null,"Para esta alerta, establecerá que el receptor de la alerta sea Slack."),"\n"),"\n",l.createElement(a.li,null,"\n",l.createElement(a.p,null,"En la página siguiente, amplíe la lista de ",l.createElement(a.strong,null,"Recibidores")," pulsando en ",l.createElement(a.strong,null,"Mostrar")),"\n"),"\n",l.createElement(a.li,null,"\n",l.createElement(a.p,null,"En la lista de búsqueda escriba ",l.createElement(a.strong,null,"vest")," para filtrar los receptores Slack preconfigurados del taller. Seleccione el receptor cuyo nombre coincida con el día y el mes del taller"),"\n"),"\n",l.createElement(a.li,null,"\n",l.createElement(a.p,null,"Haga clic en ",l.createElement(a.strong,null,"Hecho"),"."),"\n",l.createElement(a.img,{src:"/1684878573441.5193862135/slack-receiver.png",alt:"slack receiver"}),"\n"),"\n"),"\n"),l.createElement(a.section,{className:"heading","data-heading-rank":"2","aria-labelledby":"detección-de-cambios-en-el-esquema-de-datastage"},l.createElement(a.h2,{id:"detección-de-cambios-en-el-esquema-de-datastage"},l.createElement(a.a,{href:"#detección-de-cambios-en-el-esquema-de-datastage"},"Detección de cambios en el esquema de DataStage")),"\n",l.createElement(a.p,null,"Ahora, vuelva a su entorno Cloud Pak for Data DataStage donde introducirá a propósito un cambio de esquema. Este cambio de esquema activará la alerta de esquema que acabamos de crear en Databand."),"\n",l.createElement(a.ol,null,"\n",l.createElement(a.li,null,"\n",l.createElement(a.p,null,"Haga doble clic en la etapa Transformer para abrir su configuración."),"\n",l.createElement(a.img,{src:"/1684878573369.5183862114/click-transformer.png",alt:"click transformer"}),"\n"),"\n",l.createElement(a.li,null,"\n",l.createElement(a.p,null,"Seleccione la pestaña ",l.createElement(a.strong,null,"Salida"),"."),"\n"),"\n",l.createElement(a.li,null,"\n",l.createElement(a.p,null,"Haga clic en el botón ",l.createElement(a.strong,null,"Añadir columna")," de la derecha."),"\n"),"\n",l.createElement(a.li,null,"\n",l.createElement(a.p,null,"Nombre su nueva columna ",l.createElement(a.strong,null,"RELIABILITY_SCORE"),". Añadirá la nueva columna al final del campo ",l.createElement(a.strong,null,"Nombre de columna"),"."),"\n"),"\n",l.createElement(a.li,null,"\n",l.createElement(a.p,null,"A continuación, haga clic en el icono del ",l.createElement(a.strong,null,"lápiz")," de la columna ",l.createElement(a.strong,null,"Derivación")," y, a continuación, haga clic en el icono ",l.createElement(a.strong,null,"Calculadora")," para editar la expresión. En este campo, utilice la suma de la columna ",l.createElement(a.strong,null,"YRS_AT_CURRENT_ADDRESS")," y la columna ",l.createElement(a.strong,null,"YRS_WITH_CURRENT_EMPLOYER"),"."),"\n",l.createElement(a.img,{src:"/1684878573381.5186862117/edit-derivation.png",alt:"edit derivation"}),"\n"),"\n",l.createElement(a.li,null,"\n",l.createElement(a.p,null,"Para crear esta expresión, localice las dos columnas bajo el twistee ",l.createElement(a.strong,null,"Columnas de entrada"),". Haga doble clic en ",l.createElement(a.strong,null,"YRS_AT_CURRENT_ADDRESS"),", inserte un símbolo más (+) y luego haga doble clic en ",l.createElement(a.strong,null,"YRS_WITH_CURRENT_EMPLOYER"),". Observe como la expresión se rellena en la ventana ",l.createElement(a.strong,null,"del Constructor de Expresiones")," a la derecha. Su expresión debería parecerse a la captura de pantalla."),"\n"),"\n",l.createElement(a.li,null,"\n",l.createElement(a.p,null,"Haga clic en ",l.createElement(a.strong,null,"Aplicar y volver")," y, a continuación, en ",l.createElement(a.strong,null,"Guardar y volver")," para guardar los cambios que acaba de realizar."),"\n",l.createElement(a.img,{src:"/1684878573365.5183862112/apply-derivation.png",alt:"apply derivation"}),"\n",l.createElement(a.p,null,"Ejecute el trabajo (haga clic en el icono de ejecución de la parte superior) y espere unos minutos hasta que el trabajo se complete y se active la alerta. Cuando se active la alerta, verá un mensaje en el canal de Slack ",l.createElement(a.strong,null,"#databand-alerts")," en el espacio de nombres del taller similar a la captura de pantalla siguiente."),"\n"),"\n",l.createElement(a.li,null,"\n",l.createElement(a.p,null,"Haga clic en el enlace ",l.createElement(a.strong,null,"Schema changes in pipeline 'Multicloud Data Integration.DataStage.job'")," en el mensaje de Slack. Esta descripción de alerta sigue al icono de ",l.createElement(a.strong,null,"círculo naranja")," de gravedad alta. Se abrirá la siguiente pantalla:"),"\n",l.createElement(a.img,{src:"/1684878573437.519862134/slack-alert.png",alt:"slack alert"}),"\n"),"\n"),"\n",l.createElement(a.p,null,"Al hacer clic en el enlace, accederá a Databand, donde podrá ver el análisis del impacto de esta alerta. En concreto, puede ver qué cambios de esquema se produjeron en el trabajo de Datastage, qué conjuntos de datos se vieron afectados y los pipelines (trabajos de DataStage) que se vieron afectados. También puede ver toda esta información gráficamente en la pestaña ",l.createElement(a.strong,null,"Lineage"),"."),"\n",l.createElement(a.img,{src:"/1684878573421.519862130/schema-alert.png",alt:"schema alert"}),"\n",l.createElement(a.p,null,"Esta alerta se generó casi en tiempo real mientras se ejecutaba el oleoducto. Esta es otra ventaja importante de utilizar Databand para la observabilidad. Ser capaz de identificar problemas a medida que se ejecuta el pipeline ayuda a mejorar la calidad de los datos más rápidamente, en lugar de inspecciones retroactivas y problemas potencialmente perdidos durante días, semanas e incluso meses."),"\n"),l.createElement(a.section,{className:"heading","data-heading-rank":"2","aria-labelledby":"resumen"},l.createElement(a.h2,{id:"resumen"},l.createElement(a.a,{href:"#resumen"},"Resumen")),"\n",l.createElement(a.p,null,"Enhorabuena por haber completado este laboratorio. Ha adquirido experiencia práctica en las siguientes áreas de integración:"),"\n",l.createElement(a.ul,null,"\n",l.createElement(a.li,null,"Sincronización de DataStage/CP4DaaS con Databand"),"\n",l.createElement(a.li,null,"Observación de la representación gráfica del trabajo DataStage dentro de Databand y la información relevante en torno a este"),"\n",l.createElement(a.li,null,"Visualización de métricas de conjuntos de datos y tendencias históricas"),"\n",l.createElement(a.li,null,"Edición de entradas y salidas de trabajos DataStage"),"\n",l.createElement(a.li,null,"Creación y configuración de alertas para trabajos de DataStage en Databand"),"\n"),"\n",l.createElement(a.p,null,"Con esto concluye el laboratorio práctico de DataStage y Databand. Por favor, póngase en contacto con el equipo de VEST o con su Partner de IBM para cualquier pregunta, comentario, duda o situación con la que se encuentre.")))}var c=function(e){void 0===e&&(e={});const{wrapper:a}=Object.assign({},(0,t.ah)(),e.components);return a?l.createElement(a,e,l.createElement(r,e)):r(e)},o=n(4184),s=n.n(o),i=n(4690),u=n(1140),d=n(2565),m=n(8531),p=n(3383),g=n(7315);const E=e=>{const{data:{mdx:{tableOfContents:{items:a},frontmatter:{toc:n=!0,title:t,timeToComplete:r,updated:c}}},children:o}=e,i=(0,l.useRef)(null),{0:E}=(0,l.useState)(""),b=(null===n||n)&&a;return l.createElement(l.Fragment,null,l.createElement(u.Z,{timeToComplete:r,updated:c},a[0].title||t||""),l.createElement(m.Z,{className:g.YS},l.createElement("article",{className:s()(g.Y2,!b&&g.ey),ref:i},l.createElement(d.Z,{components:{h1:()=>null}},o)),b&&l.createElement(p.Z,{itemsList:a,maxDepth:2,currSection:E})))},b=e=>{const{location:{pathname:a},data:{mdx:{frontmatter:{title:n},tableOfContents:{items:t}}}}=e;return l.createElement(i.Z,{pathname:a,title:n||t[0].title||void 0})};function f(e){return l.createElement(E,e,l.createElement(c,e))}},2565:function(e,a,n){n.d(a,{Z:function(){return o}});var t=n(7294),l=n(1151),r=n(987);const c={table:r.y6,a:r.IW,blockquote:r.R4,SubHeader:r.bU,img:r.fb,code:r.dn,QuizAlert:r.SA};var o=(0,t.memo)((function(e){let{children:a,components:n={}}=e;return t.createElement(l.Zo,{components:{...c,...n}},a)}))},4690:function(e,a,n){var t=n(7294),l=n(1072),r=n(2401);a.Z=e=>{const{title:a,description:n,pathname:c,children:o}=e,{description:s,title:i,origin:u}=(0,r.Z)(),{i18n:{language:d}}=(0,l.$G)(),m={title:a||i,description:n||s,url:""+u+(c||"")};return t.createElement(t.Fragment,null,t.createElement("html",{lang:d}),t.createElement("link",{rel:"icon",href:"data:image/svg+xml,<svg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 100 100'><text y='0.9em' font-size='90'>🦺</text></svg>"}),t.createElement("title",null,m.title),t.createElement("link",{rel:"canonical",href:m.url}),t.createElement("meta",{name:"description",content:m.description}),t.createElement("meta",{property:"og:title",content:m.title}),t.createElement("meta",{property:"og:url",content:m.url}),t.createElement("meta",{property:"og:type",content:"website"}),t.createElement("meta",{property:"og:description",content:m.description}),t.createElement("meta",{name:"twitter:card",content:"summary"}),t.createElement("meta",{name:"twitter:title",content:m.title}),t.createElement("meta",{name:"twitter:url",content:m.url}),t.createElement("meta",{name:"twitter:description",content:m.description}),t.createElement("meta",{name:"twitter:site",content:"https://www.ibm.com"}),t.createElement("meta",{name:"twitter:creator",content:"@IBM"}),o)}},3383:function(e,a,n){n.d(a,{Z:function(){return i}});var t=n(7294),l=n(7500),r=n(4184),c=n.n(r),o=n(6488);const s=function(e,a,n){return void 0===a&&(a=[]),void 0===n&&(n=0),e.forEach((e=>{const{title:t,url:l,items:r}=e;a.splice(a.length,0,{depth:n,title:t,url:l}),r&&r.length>0&&s(r,a,n+1)})),a};var i=e=>{const{itemsList:a}=e,n=(0,t.useMemo)((()=>s(a[0].items||[])),[a]),r=(0,o.Z)("h1[id],h2[id]",{threshold:[0,1],rootMargin:"-48px 0px -90% 0px"});return n.length<1?null:t.createElement("nav",{className:"TableOfContents-module--toc--54d35"},t.createElement("div",{className:"TableOfContents-module--tocStack--90609"},t.createElement("h6",{className:"TableOfContents-module--tocHeader--05956"},t.createElement(l.rU,{to:"#",replace:!0},"On this page")),n.map(((e,a)=>{let{title:n,url:l}=e;return t.createElement("a",{className:c()("TableOfContents-module--link--b292b",r===l.substring(1)&&"TableOfContents-module--activeItem--3869f"),key:a,href:l},n)}))))}},7315:function(e,a,n){n.d(a,{Y2:function(){return t},YS:function(){return r},ey:function(){return l}});var t="{mdx-fields__slug}-module--article--e3d5a",l="{mdx-fields__slug}-module--noToc--82387",r="{mdx-fields__slug}-module--wrapper--58e72"},1151:function(e,a,n){n.d(a,{Zo:function(){return o},ah:function(){return r}});var t=n(7294);const l=t.createContext({});function r(e){const a=t.useContext(l);return t.useMemo((()=>"function"==typeof e?e(a):{...a,...e}),[a,e])}const c={};function o({components:e,children:a,disableParentContext:n}){let o;return o=n?"function"==typeof e?e({}):e||c:r(e),t.createElement(l.Provider,{value:o},a)}}}]);
//# sourceMappingURL=component---src-pages-mdx-fields-slug-tsx-content-file-path-content-databand-102-es-md-d6782e2f0447c499fa44.js.map