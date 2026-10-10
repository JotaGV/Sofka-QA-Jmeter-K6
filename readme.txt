SOFKA QA - EJERCICIO DE PERFORMANCE
PRUEBA DE CARGA DEL SERVICIO DE LOGIN

DESCRIPCIÓN
Este proyecto implementa una prueba de carga del servicio POST https://fakestoreapi.com/auth/login mediante Apache JMeter. Las credenciales se obtienen de un archivo CSV y se evalúan los criterios solicitados: alcanzar al menos 20 transacciones por segundo (TPS), utilizar un límite de tiempo de respuesta de 1.500 ms y mantener una tasa de errores inferior al 3 %.

TECNOLOGÍAS Y ENTORNO UTILIZADO
Apache JMeter 5.6.3; Java 27; Windows 11. Las pruebas se configuraron en la interfaz gráfica de JMeter y la ejecución utilizada como evidencia se realizó en modo no gráfico.

ARCHIVOS DE LA ENTREGA
Sofka - Prueba de carga Login.jmx: plan de pruebas de JMeter.
usuarios.csv: datos de entrada con las columnas user y passwd, según el enunciado.
resultados.jtl: resultados individuales de las 250 solicitudes de la ejecución documentada.
reporte-html/: dashboard HTML generado a partir de resultados.jtl (si se incluye en el repositorio).
readme.txt: instrucciones de ejecución.
conclusiones.txt: hallazgos y conclusiones de la ejecución documentada.

REQUISITOS PREVIOS
Disponer de Java y Apache JMeter instalados. Es necesario tener acceso a Internet y al servicio público https://fakestoreapi.com/auth/login. Descargar el plan .jmx y usuarios.csv en una misma carpeta, conservando sus nombres. El CSV debe incluir la cabecera user,passwd y las cinco filas suministradas en el enunciado.

CONFIGURACIÓN DEL PLAN
Thread Group: 25 usuarios virtuales, ramp-up de 5 segundos y 10 iteraciones por usuario, para un total de 250 peticiones programadas.
HTTP Request: método POST; protocolo https; servidor fakestoreapi.com; ruta /auth/login; Content-Type application/json.
Cuerpo JSON: {"username":"${user}","password":"${passwd}"}.
CSV Data Set Config: archivo usuarios.csv (ruta relativa), codificación UTF-8, variables user,passwd, primera línea ignorada, separador coma, reutilización de filas activada y modo compartido entre todos los hilos.
Duration Assertion: tiempo máximo de 1.500 milisegundos. Si una muestra supera ese tiempo, JMeter la marca como fallida, aunque reciba respuesta HTTP.

EJECUCIÓN PASO A PASO
1. Instalar y configurar Apache JMeter 5.6.3 y Java. Comprobar que JMeter inicia correctamente.
2. Descargar los archivos del repositorio. Situar Sofka - Prueba de carga Login.jmx y usuarios.csv en la misma carpeta.
3. Abrir una terminal en esa carpeta. Ejecutar el comando siguiente (el comando jmeter debe estar disponible en PATH; en caso contrario, utilizar la ruta completa a jmeter.bat):
   jmeter -n -t "Sofka - Prueba de carga Login.jmx" -l "resultados.jtl" -e -o "reporte-html"
4. Antes de repetir la ejecución, borrar o renombrar los resultados.jtl anteriores y utilizar una carpeta reporte-html inexistente o vacía. No mezclar resultados de distintas ejecuciones.
5. Esperar a que finalice JMeter y confirme la generación del dashboard.
6. Abrir reporte-html/index.html en un navegador. Revisar Statistics, Errors y los gráficos de throughput y tiempos de respuesta. El archivo resultados.jtl permite inspeccionar cada muestra y su motivo de fallo.
7. Comparar los resultados de la nueva ejecución con los criterios de aceptación. Los resultados pueden variar por las condiciones de red y la disponibilidad del servicio público.

RESULTADOS DE LA EJECUCIÓN DOCUMENTADA
Se ejecutaron 250 peticiones. 
El dashboard reportó 28,17 transacciones por segundo, un tiempo promedio de 445,41 ms, un máximo de 2.203 ms y 6 muestras fallidas (2,40 %). 
Las 250 solicitudes registraron HTTP 201 Created. 
Las seis muestras fallidas lo fueron por superar los 1.500 ms configurados en Duration Assertion; 244 solicitudes (97,60 %) estuvieron dentro del tiempo establecido. 
Consultar conclusiones.txt y resultados.jtl para el detalle y la interpretación del criterio de aceptación.

ALCANCE Y LIMITACIONES
La prueba utiliza un servicio público de demostración y una carga breve; no permite afirmar su rendimiento sostenido ni atribuir variaciones exclusivamente al servidor. 
Se documenta una ejecución concreta y no se incluyen pruebas adicionales ajenas al ejercicio solicitado. 
La segunda parte del documento de Sofka, relativa al análisis de resultados proporcionados por el evaluador, corresponde a otro entregable (InformeResultados.doc).
