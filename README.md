## Parcial
Nombre del estudiante: ruben david borre perez

API asignada: API de chistes

Endpoint utilizado: https://newsdata.io/api/1/latest?apikey=${API_KEY}&q=chistes%20OR%20humor&language=es

Descripción de la aplicación: Aplicacion que muestra diferentes chistes

Componentes desarrollados: Chistes.jsx y Header.jsx

Datos utilizados de la API: article_id (Identificador único para la propiedad key)

title (Título de la publicación)

description (Resumen o contenido del chiste/artículo)

link (Enlace a la fuente original)

pubDate (Fecha de publicación)

category / language (Categoría e idioma)

Funcionalidad de búsqueda o filtro: Búsqueda por palabras clave mediante parámetros de consulta (q=chistes OR humor) y filtrado por idioma (language=es) directamente en la petición HTTP.

Funcionalidad adicional implementada: Manejo de errores y retroalimentación: Captura de excepciones mediante bloque try/catch con despliegue de mensajes visuales en pantalla en caso de fallos en la red o en la respuesta de la API