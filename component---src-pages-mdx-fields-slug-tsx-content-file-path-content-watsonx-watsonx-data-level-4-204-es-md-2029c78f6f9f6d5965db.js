"use strict";(self.webpackChunkvad_var_site=self.webpackChunkvad_var_site||[]).push([[6817],{6031:function(e,a,n){n.r(a),n.d(a,{Head:function(){return h},default:function(){return b}});var t=n(1151),l=n(7294);function s(e){const a=Object.assign({section:"section",h1:"h1",p:"p",strong:"strong",a:"a",ol:"ol",li:"li",pre:"pre",code:"code",span:"span",h3:"h3",ul:"ul",img:"img"},(0,t.ah)(),e.components),{QuizAlert:n}=a;return n||function(e,a){throw new Error("Expected "+(a?"component":"object")+" `"+e+"` to be defined: you likely forgot to import, pass, or provide it.")}("QuizAlert",!0),l.createElement(l.Fragment,null,l.createElement(n,{text:"¡Aviso! ¡El material del cuestionario se marcará así!"}),"\n",l.createElement(a.section,{className:"heading","data-heading-rank":"1","aria-labelledby":"204-ingestión-de-datos"},l.createElement(a.h1,{id:"204-ingestión-de-datos"},"204: Ingestión de datos"),"\n",l.createElement(a.p,null,"La ingestión de datos es el proceso de importar y cargar datos en IBM® watsonx.data. Un método consiste en utilizar la pestaña Trabajos de ingestión de la página Gestor de datos para cargar datos de forma segura y sencilla en la consola de watsonx.data (",l.createElement(a.strong,null,"NOTA"),": Esto sólo está disponible en Standard Edition). La ingesta de datos en la consola watsonx.data o en la utilidad de línea de comandos ibm-lh admite los formatos CSV y Parquet. Los archivos que se ingieren en un único comando de ingesta deben ser del mismo tipo de formato y esquema. watsonx.data descubre automáticamente el esquema en función del archivo de origen que se está ingiriendo."),"\n",l.createElement(a.p,null,"También puede cargar o ingestar archivos de datos locales o ingestar datos de fuentes externas utilizando la herramienta ibm-lh. La utilidad de línea de comandos ibm-lh es una interfaz de terminal diseñada para facilitar la interacción con los recursos de watsonx.data."),"\n",l.createElement(a.p,null,"Este laboratorio utiliza la herramienta de ingesta (ibm-lh) junto con IBM watsonx.data Developer Edition que se ejecuta en este laboratorio. La herramienta de ingesta se instala por separado y debe descargarse después de iniciar IBM watsonx.data. La imagen de laboratorio (Developer Edition) contiene una copia de este código, por lo que no necesitará descargarlo."),"\n",l.createElement(a.p,null,"En esta sección te conectarás a tu entorno watsonx.data. El servidor watsonx.data inicia automáticamente todos los servicios. Para comprobar el estado del servidor, ejecute los siguientes comandos siguiendo las instrucciones proporcionadas en ",l.createElement(a.strong,null,"Acceso a la línea de comandos")," de la sección ",l.createElement(a.a,{href:"/watsonx/watsonxdata/1#command-line-access"},"1: Configuración del")," entorno:"),"\n",l.createElement(a.ol,null,"\n",l.createElement(a.li,null,"Abra una ventana de terminal e introduzca el siguiente comando para conectarse al servidor watsonx.data."),"\n"),"\n",l.createElement(a.p,null,l.createElement(a.strong,null,"Nota:")," Sustituya el puerto, la región y el servidor techzone en el siguiente comando SSH por los valores proporcionados para su entorno en el correo electrónico de reserva de TechZone."),"\n",l.createElement(a.pre,null,l.createElement(a.code,{className:"hljs language-bash"},"ssh -p port watsonx@region.techzone-server.com\n")),"\n",l.createElement(a.ol,{start:"2"},"\n",l.createElement(a.li,null,"Introduzca una contraseña de: ",l.createElement(a.strong,null,"watsonx.data")),"\n",l.createElement(a.li,null,"Cambie al usuario root introduciendo el siguiente comando:"),"\n"),"\n",l.createElement(a.pre,null,l.createElement(a.code,{className:"hljs language-bash"},"sudo su -\n")),"\n",l.createElement(a.ol,{start:"4"},"\n",l.createElement(a.li,null,"Cambie al directorio bin del cliente introduciendo el siguiente comando:"),"\n"),"\n",l.createElement(a.pre,null,l.createElement(a.code,{className:"hljs language-bash"},l.createElement(a.span,{className:"hljs-built_in"},"cd")," /root/ibm-lh-client/bin\n")),"\n",l.createElement(a.section,{className:"heading","data-heading-rank":"3","aria-labelledby":"ingesta-de-datos-en-ibm-watsonxdata"},l.createElement(a.h3,{id:"ingesta-de-datos-en-ibm-watsonxdata"},l.createElement(a.a,{href:"#ingesta-de-datos-en-ibm-watsonxdata"},"Ingesta de datos en IBM watsonx.data")),"\n",l.createElement(a.p,null,"Antes de ejecutar la utilidad, es necesario recuperar varias credenciales para MinIO y la contraseña del almacén de claves."),"\n",l.createElement(a.ol,null,"\n",l.createElement(a.li,null,"Estando aún en el directorio /root/ibm-lh-dev/bin, introduzca los siguientes comandos para extraer las credenciales. Es necesario generar tres líneas de exportación y crear un directorio que se utilizará más adelante en otro script."),"\n"),"\n",l.createElement(a.pre,null,l.createElement(a.code,{className:"hljs language-bash"},l.createElement(a.span,{className:"hljs-built_in"},"export")," LH_S3_ACCESS_KEY=$(docker ",l.createElement(a.span,{className:"hljs-built_in"},"exec")," ibm-lh-presto \\\n",l.createElement(a.span,{className:"hljs-built_in"},"printenv")," | grep LH_S3_ACCESS_KEY | sed ",l.createElement(a.span,{className:"hljs-string"},"'s/.*=//'"),")\n")),"\n",l.createElement(a.pre,null,l.createElement(a.code,{className:"hljs language-bash"},l.createElement(a.span,{className:"hljs-built_in"},"export")," LH_S3_SECRET_KEY=$(docker ",l.createElement(a.span,{className:"hljs-built_in"},"exec")," ibm-lh-presto \\\n",l.createElement(a.span,{className:"hljs-built_in"},"printenv")," | grep LH_S3_SECRET_KEY | sed ",l.createElement(a.span,{className:"hljs-string"},"'s/.*=//'"),")\n")),"\n",l.createElement(a.pre,null,l.createElement(a.code,{className:"hljs language-bash"},l.createElement(a.span,{className:"hljs-built_in"},"export")," LH_KEYSTORE_PASSWORD=$(docker ",l.createElement(a.span,{className:"hljs-built_in"},"exec")," ibm-lh-presto \\\n",l.createElement(a.span,{className:"hljs-built_in"},"printenv")," | grep LH_KEYSTORE_PASSWORD | sed ",l.createElement(a.span,{className:"hljs-string"},"'s/.*=//'"),")\n")),"\n",l.createElement(a.ol,{start:"2"},"\n",l.createElement(a.li,null,"Ejecute los siguientes comandos para crear el directorio de montaje. El directorio de montaje se utiliza para mover archivos entre este sistema y el contenedor Docker donde se ejecuta la ",l.createElement(a.strong,null,"utilidad de línea de comandos ibm-lh"),"."),"\n"),"\n",l.createElement(a.pre,null,l.createElement(a.code,{className:"hljs language-bash"},l.createElement(a.span,{className:"hljs-built_in"},"export")," staging=/root/ibm-lh-client/localstorage/volumes/infra/staging\n")),"\n",l.createElement(a.pre,null,l.createElement(a.code,{className:"hljs language-bash"},l.createElement(a.span,{className:"hljs-built_in"},"mkdir")," -p ",l.createElement(a.span,{className:"hljs-variable"},"${staging}"),"\n",l.createElement(a.span,{className:"hljs-built_in"},"cat")," <<",l.createElement(a.span,{className:"hljs-string"},"EOF > ${staging}/keys.sh\n#!/bin/bash\nexport access_key=$LH_S3_ACCESS_KEY\nexport secret_key=$LH_S3_SECRET_KEY\nexport keystore_password=$LH_KEYSTORE_PASSWORD\nEOF"),"\n",l.createElement(a.span,{className:"hljs-built_in"},"chmod")," +x ",l.createElement(a.span,{className:"hljs-variable"},"${staging}"),"/keys.sh\n")),"\n",l.createElement(a.ol,{start:"3"},"\n",l.createElement(a.li,null,"Ejecute los siguientes comandos para copiar el certificado SSL MinIO desde el contenedor docker al directorio staging. El certificado MinIO SSL es necesario para que la operación de copia tenga lugar. Además, el archivo que desea cargar en watsonx.data se moverá al directorio de archivos staging."),"\n"),"\n",l.createElement(a.pre,null,l.createElement(a.code,{className:"hljs language-bash"},"docker ",l.createElement(a.span,{className:"hljs-built_in"},"cp")," ibm-lh-presto:/mnt/infra/tls/lh-ssl-ts.jks \\\n",l.createElement(a.span,{className:"hljs-variable"},"${staging}"),"/lh-ssl-ts.jks\n",l.createElement(a.span,{className:"hljs-built_in"},"cp")," -f /sampledata/yellow_tripdata_2022-01.parquet \\\n",l.createElement(a.span,{className:"hljs-variable"},"${staging}"),"/\n")),"\n"),l.createElement(a.section,{className:"heading","data-heading-rank":"3","aria-labelledby":"crear-un-esquema-de-colmena-para-la-puesta-en-escena-del-archivo-de-ingesta"},l.createElement(a.h3,{id:"crear-un-esquema-de-colmena-para-la-puesta-en-escena-del-archivo-de-ingesta"},l.createElement(a.a,{href:"#crear-un-esquema-de-colmena-para-la-puesta-en-escena-del-archivo-de-ingesta"},"Crear un esquema de colmena para la puesta en escena del archivo de ingesta")),"\n",l.createElement(a.p,null,"Antes de ingestar el archivo, debe crear un nuevo esquema para la tabla que está creando y cargando. Creará el esquema utilizando la interfaz de usuario watsonx.data. Su correo electrónico de reserva de TechZone incluirá la URL de su interfaz de usuario watsonx.data."),"\n",l.createElement(a.ol,null,"\n",l.createElement(a.li,null,"\n",l.createElement(a.p,null,"Inicie sesión en la consola IBM watsonx.data: La URL de la consola watsonx.data se encuentra en los detalles de su correo electrónico de reserva de TechZone (consulte la línea ",l.createElement(a.strong,null,"Watsonx UI")," en la sección Servicios publicados)."),"\n",l.createElement(a.ul,null,"\n",l.createElement(a.li,null,"\n",l.createElement(a.p,null,"Introduzca ",l.createElement(a.strong,null,"ibmlhadmin")," en el campo ",l.createElement(a.strong,null,"Nombre de usuario"),"."),"\n"),"\n",l.createElement(a.li,null,"\n",l.createElement(a.p,null,"Introduzca la ",l.createElement(a.strong,null,"contraseña")," en el campo ",l.createElement(a.strong,null,"Contraseña"),"."),"\n"),"\n",l.createElement(a.li,null,"\n",l.createElement(a.p,null,"Haz clic en el botón ",l.createElement(a.strong,null,"Iniciar sesión"),"."),"\n"),"\n"),"\n",l.createElement(a.img,{src:"https://raw.githubusercontent.com/ibm-build-lab/VAD-VAR-Workshop/main/content//Watsonx/WatsonxData/images/204/login-page.png",alt:""}),"\n"),"\n",l.createElement(a.li,null,"\n",l.createElement(a.p,null,"Haga clic en el icono ",l.createElement(a.strong,null,"Gestor de datos")," del menú de la izquierda. ",l.createElement(a.img,{src:"https://raw.githubusercontent.com/ibm-build-lab/VAD-VAR-Workshop/main/content//Watsonx/WatsonxData/images/204/data-manager.png",alt:""})),"\n"),"\n",l.createElement(a.li,null,"\n",l.createElement(a.p,null,"Haga clic en el menú desplegable ",l.createElement(a.strong,null,"Crear")," y seleccione ",l.createElement(a.strong,null,"Crear esquema"),". ",l.createElement(a.img,{src:"https://raw.githubusercontent.com/ibm-build-lab/VAD-VAR-Workshop/main/content//Watsonx/WatsonxData/images/204/create-schema.png",alt:""})),"\n"),"\n",l.createElement(a.li,null,"\n",l.createElement(a.p,null,"En el cuadro de diálogo Crear esquema, realice los siguientes pasos:"),"\n",l.createElement(a.ul,null,"\n",l.createElement(a.li,null,"\n",l.createElement(a.p,null,"Haga clic en el menú desplegable ",l.createElement(a.strong,null,"Catálogo")," y seleccione ",l.createElement(a.strong,null,"hive_data"),"."),"\n"),"\n",l.createElement(a.li,null,"\n",l.createElement(a.p,null,"Introduzca ",l.createElement(a.strong,null,"staging")," en el campo ",l.createElement(a.strong,null,"Nombre"),"."),"\n"),"\n",l.createElement(a.li,null,"\n",l.createElement(a.p,null,"Pulse el botón azul ",l.createElement(a.strong,null,"Crear"),". ",l.createElement(a.img,{src:"https://raw.githubusercontent.com/ibm-build-lab/VAD-VAR-Workshop/main/content//Watsonx/WatsonxData/images/204/hive-data.png",alt:""})),"\n"),"\n"),"\n"),"\n"),"\n",l.createElement(a.p,null,"Debería ver el nuevo esquema de ",l.createElement(a.strong,null,"preparación")," en el catálogo ",l.createElement(a.strong,null,"hive_data")," de la sección ",l.createElement(a.strong,null,"Catálogos asociados"),"."),"\n",l.createElement(a.ol,{start:"5"},"\n",l.createElement(a.li,null,"\n",l.createElement(a.p,null,"Repita el paso 3 para crear otro esquema. En el cuadro de diálogo ",l.createElement(a.strong,null,"Crear esquema"),", realice los siguientes pasos:"),"\n",l.createElement(a.ul,null,"\n",l.createElement(a.li,null,"\n",l.createElement(a.p,null,"Haga clic en el menú desplegable ",l.createElement(a.strong,null,"Catálogo")," y seleccione ",l.createElement(a.strong,null,"iceberg_data"),"."),"\n"),"\n",l.createElement(a.li,null,"\n",l.createElement(a.p,null,"Introduzca ",l.createElement(a.strong,null,"ingest")," en el campo ",l.createElement(a.strong,null,"Nombre"),"."),"\n"),"\n",l.createElement(a.li,null,"\n",l.createElement(a.p,null,"Pulse el botón azul ",l.createElement(a.strong,null,"Crear"),". ",l.createElement(a.img,{src:"https://raw.githubusercontent.com/ibm-build-lab/VAD-VAR-Workshop/main/content//Watsonx/WatsonxData/images/204/iceberg-data.png",alt:""})),"\n"),"\n"),"\n"),"\n"),"\n"),l.createElement(a.section,{className:"heading","data-heading-rank":"3","aria-labelledby":"ingesta-utilizando-la-utilidad-de-línea-de-comandos-ibm-lh"},l.createElement(a.h3,{id:"ingesta-utilizando-la-utilidad-de-línea-de-comandos-ibm-lh"},l.createElement(a.a,{href:"#ingesta-utilizando-la-utilidad-de-línea-de-comandos-ibm-lh"},"Ingesta utilizando la utilidad de línea de comandos ibm-lh")),"\n",l.createElement(a.p,null,"Utilizarás la utilidad de línea de comandos ibm-lh para ingestar datos. Por ahora, abandonará la interfaz de usuario de watsonx.data para realizar los siguientes pasos en la ventana de la línea de comandos."),"\n",l.createElement(a.ol,null,"\n",l.createElement(a.li,null,"Para acceder a la utilidad de línea de comandos ibm-lh, introduzca el siguiente comando:"),"\n"),"\n",l.createElement(a.pre,null,l.createElement(a.code,{className:"hljs language-bash"},"./ibm-lh data-copy\n")),"\n",l.createElement(a.ol,{start:"2"},"\n",l.createElement(a.li,null,"Una vez dentro de la utilidad, ejecute el siguiente comando para obtener más detalles sobre la opción de ",l.createElement(a.strong,null,"copia de datos"),"."),"\n"),"\n",l.createElement(a.pre,null,l.createElement(a.code,{className:"hljs language-bash"},"ibm-lh data-copy --",l.createElement(a.span,{className:"hljs-built_in"},"help"),"\n")),"\n",l.createElement(a.ol,{start:"3"},"\n",l.createElement(a.li,null,"Ejecute el siguiente comando para salir del contenedor de herramientas."),"\n"),"\n",l.createElement(a.pre,null,l.createElement(a.code,{className:"hljs language-bash"},l.createElement(a.span,{className:"hljs-built_in"},"exit"),"\n")),"\n",l.createElement(a.ol,{start:"4"},"\n",l.createElement(a.li,null,"Ejecute la siguiente secuencia de comandos para introducir los datos del taxi (yellow_tripdata_2022_01.parquet) en la tabla yellow_tripdata_2022_01_localfile de watsonx.data."),"\n"),"\n",l.createElement(a.pre,null,l.createElement(a.code,{className:"hljs language-bash"},l.createElement(a.span,{className:"hljs-built_in"},"cat")," <<",l.createElement(a.span,{className:"hljs-string"},'EOF > ${staging}/ingest-local.sh\n#!/bin/bash\ndir=/mnt/infra/staging\ncd \\${dir}\nsource ./keys.sh\ntable_name="iceberg_data.ingest.yellow_tripdata_2022_01_localfile"\nfile="yellow_tripdata_2022-01.parquet"\nexport STAGING_S3_CREDS="AWS_SECRET_ACCESS_KEY=\\${secret_key}\\\\\n,AWS_ACCESS_KEY_ID=\\${access_key}\\\\\n,AWS_REGION=us-east-1\\\\\n,BUCKET_NAME=iceberg-bucket\\\\\n,ENDPOINT_URL=http://ibm-lh-minio:9000"\nibm-lh data-copy \\\\\n --source-data-files \\${dir}/\\${file} \\\\\n --target-tables \\${table_name} \\\\\n --ingestion-engine-endpoint "hostname=ibm-lh-presto-svc,port=8443" \\\\\n --staging-location s3://iceberg-bucket/ingest/ \\\\\n --staging-hive-catalog hive_data \\\\\n --staging-hive-schema staging \\\\\n --create-if-not-exist \\\\\n --trust-store-path \\${dir}/lh-ssl-ts.jks \\\\\n --trust-store-password \\${keystore_password} \\\\\n --dbuser ibmlhadmin \\\\\n --dbpassword password\nEOF'),"\n")),"\n",l.createElement(a.pre,null,l.createElement(a.code,{className:"hljs language-bash"},"sed -i ",l.createElement(a.span,{className:"hljs-string"},"'/^$/d'")," ",l.createElement(a.span,{className:"hljs-variable"},"${staging}"),"/ingest-local.sh\n")),"\n",l.createElement(a.pre,null,l.createElement(a.code,{className:"hljs language-bash"},l.createElement(a.span,{className:"hljs-built_in"},"chmod")," +x ",l.createElement(a.span,{className:"hljs-variable"},"${staging}"),"/ingest-local.sh\n")),"\n",l.createElement(a.ol,{start:"5"},"\n",l.createElement(a.li,null,"Ejecute el siguiente comando para iniciar de nuevo la utilidad de línea de comandos ibm-lh:"),"\n"),"\n",l.createElement(a.pre,null,l.createElement(a.code,{className:"hljs language-bash"},"./ibm-lh data-copy\n")),"\n",l.createElement(a.ol,{start:"6"},"\n",l.createElement(a.li,null,"Ahora ejecute el trabajo de ingesta dentro del contenedor de herramientas ejecutando el siguiente comando:"),"\n"),"\n",l.createElement(a.pre,null,l.createElement(a.code,{className:"hljs language-bash"},"/mnt/infra/staging/ingest-local.sh\n")),"\n",l.createElement(a.ol,{start:"7"},"\n",l.createElement(a.li,null,"Una vez ingestados los datos, salga de la utilidad de línea de comandos."),"\n"),"\n",l.createElement(a.pre,null,l.createElement(a.code,{className:"hljs language-bash"},l.createElement(a.span,{className:"hljs-built_in"},"exit"),"\n")),"\n",l.createElement(a.ol,{start:"8"},"\n",l.createElement(a.li,null,"Vuelva a la interfaz de usuario de IBM watsonx.data. En la sección ",l.createElement(a.strong,null,"Gestor de datos"),", expanda el catálogo ",l.createElement(a.strong,null,"iceberg_data")," en el área ",l.createElement(a.strong,null,"Catálogos asociados")," y, a continuación, expanda el esquema de ",l.createElement(a.strong,null,"ingesta"),". ",l.createElement(a.img,{src:"https://raw.githubusercontent.com/ibm-build-lab/VAD-VAR-Workshop/main/content//Watsonx/WatsonxData/images/204/ingest.png",alt:""})),"\n",l.createElement(a.li,null,"Seleccione la tabla ",l.createElement(a.strong,null,"yellow_tripdata_2021_01_localfile")," para ver la definición de la tabla. Seleccione la pestaña ",l.createElement(a.strong,null,"Esquema de la tabla")," para ver el esquema de la tabla si no está ya seleccionado. ",l.createElement(a.img,{src:"https://raw.githubusercontent.com/ibm-build-lab/VAD-VAR-Workshop/main/content//Watsonx/WatsonxData/images/204/table-schema.png",alt:""})),"\n",l.createElement(a.li,null,"Seleccione la pestaña ",l.createElement(a.strong,null,"Muestra de datos")," para ver una muestra de los datos. ",l.createElement(a.img,{src:"https://raw.githubusercontent.com/ibm-build-lab/VAD-VAR-Workshop/main/content//Watsonx/WatsonxData/images/204/data-sample.png",alt:""})),"\n",l.createElement(a.li,null,"Ahora puede utilizar la interfaz de usuario para ejecutar una consulta con estos datos importados. Seleccione el icono ",l.createElement(a.strong,null,"Espacio de trabajo de consulta (SQL")," ) en el menú de la izquierda. ",l.createElement(a.img,{src:"https://raw.githubusercontent.com/ibm-build-lab/VAD-VAR-Workshop/main/content//Watsonx/WatsonxData/images/204/sql-workspace.png",alt:""})),"\n",l.createElement(a.li,null,"En la línea donde se encuentra la tabla ",l.createElement(a.strong,null,"yellow_tripdata_2022_01_localfile"),", haga clic en el icono ",l.createElement(a.strong,null,"Plantillas de consulta")," al final del nombre. Aparecerá una lista desplegable. Seleccione ",l.createElement(a.strong,null,"Generar SELECT")," ",l.createElement(a.img,{src:"https://raw.githubusercontent.com/ibm-build-lab/VAD-VAR-Workshop/main/content//Watsonx/WatsonxData/images/204/generate-select.png",alt:""})),"\n"),"\n",l.createElement(a.p,null,"Esto genera una sentencia SQL SELECT en la ventana a la derecha del nombre de la tabla. ",l.createElement(a.img,{src:"https://raw.githubusercontent.com/ibm-build-lab/VAD-VAR-Workshop/main/content//Watsonx/WatsonxData/images/204/select-statement.png",alt:""})),"\n",l.createElement(a.p,null,"13.Para revisar los resultados, ejecute la consulta pulsando el ",l.createElement(a.strong,null,"botón azul Ejecutar en presto-01"),". ",l.createElement(a.img,{src:"https://raw.githubusercontent.com/ibm-build-lab/VAD-VAR-Workshop/main/content//Watsonx/WatsonxData/images/204/run-on-presto.png",alt:""})),"\n"),l.createElement(a.section,{className:"heading","data-heading-rank":"3","aria-labelledby":"resumen"},l.createElement(a.h3,{id:"resumen"},l.createElement(a.a,{href:"#resumen"},"Resumen")),"\n",l.createElement(a.p,null,"En este laboratorio se han ingestado datos usando la utilidad de línea de comandos watsonx.data ibm-lh y se ha ejecutado una declaración de SQL para consultar los datos ingestados."),"\n"),l.createElement(a.section,{className:"heading","data-heading-rank":"3","aria-labelledby":"enhorabuena-has-llegado-al-final-del-laboratorio-204"},l.createElement(a.h3,{id:"enhorabuena-has-llegado-al-final-del-laboratorio-204"},l.createElement(a.a,{href:"#enhorabuena-has-llegado-al-final-del-laboratorio-204"},"Enhorabuena, has llegado al final del laboratorio 204.")),"\n",l.createElement(a.p,null,"Si desea realizar el cuestionario sobre los laboratorios prácticos L4, puede encontrarlo ",l.createElement(a.a,{href:"https://learn.ibm.com/course/view.php?id=16013"},"aquí")))))}var r=function(e){void 0===e&&(e={});const{wrapper:a}=Object.assign({},(0,t.ah)(),e.components);return a?l.createElement(a,e,l.createElement(s,e)):s(e)};var o=n(4184),c=n.n(o),i=n(4690),m=n(1140),d=n(8623),u=n(8531),g=n(3383),E=n(7315);const p=e=>{const{data:{mdx:{tableOfContents:{items:a},frontmatter:{toc:n=!0,title:t,timeToComplete:s,updated:r}}},children:o}=e,i=(0,l.useRef)(null),{0:p}=(0,l.useState)(""),h=(null===n||n)&&a;return l.createElement(l.Fragment,null,l.createElement(m.Z,{timeToComplete:s,updated:r},a[0].title||t||""),l.createElement(u.Z,{className:E.YS},l.createElement("article",{className:c()(E.Y2,!h&&E.ey),ref:i},l.createElement(d.Z,{components:{h1:()=>null}},o)),h&&l.createElement(g.Z,{itemsList:a,maxDepth:2,currSection:p})))},h=e=>{const{location:{pathname:a},data:{mdx:{frontmatter:{title:n},tableOfContents:{items:t}}}}=e;return l.createElement(i.Z,{pathname:a,title:n||t[0].title||void 0})};function b(e){return l.createElement(p,e,l.createElement(r,e))}}}]);
//# sourceMappingURL=component---src-pages-mdx-fields-slug-tsx-content-file-path-content-watsonx-watsonx-data-level-4-204-es-md-2029c78f6f9f6d5965db.js.map