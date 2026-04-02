# 🏕️ YelpCamp - Full Stack Web App

¡Boeeeeee! Este es **YelpCamp**, mi proyecto integrador del Bootcamp de **Colt Steele**. Es una aplicación completa donde los usuarios pueden crear, revisar y gestionar campamentos en todo el mundo. 

Este proyecto fue mi "bautismo de fuego" en el desarrollo backend, donde aprendí a manejar la lógica de servidor, bases de datos no relacionales y seguridad.

## 🚀 Tecnologías Utilizadas

* **Frontend:** HTML5, CSS3 (Bootstrap 5), EJS (Embedded JavaScript templates).
* **Backend:** Node.js, Express.js.
* **Base de Datos:** MongoDB & Mongoose (ODM).
* **Autenticación:** Passport.js (Local Strategy).
* **Almacenamiento de Imágenes:** Cloudinary API.
* **Mapas:** Mapbox SDK.
* **Despliegue:** Render / Heroku.

## 🛠️ Estructura del Proyecto

El código sigue el patrón de diseño **MVC** para mantener la escalabilidad:

* `/models`: Esquemas de datos para Campamentos, Comentarios y Usuarios.
* `/controllers`: Lógica de negocio (el cerebro de las rutas).
* `/routes`: Endpoints limpios y organizados.
* `/seeds`: Script para poblar la base de datos con datos de prueba (clave para testing).
* `/views`: Plantillas dinámicas renderizadas con EJS.
* `/public`: Archivos estáticos (JS, CSS, Imágenes).

## 🔑 Características Principales

1.  **CRUD Completo:** Creación, lectura, edición y eliminación de campamentos.
2.  **Sistema de Usuarios:** Registro e inicio de sesión con encriptación de contraseñas.
3.  **Autorización:** Solo el dueño de un campamento o comentario puede editarlo o borrarlo (Middleware personalizado).
4.  **Geolocalización:** Visualización de la ubicación de los campamentos en mapas interactivos.
5.  **Subida de Imágenes:** Integración con Cloudinary para manejo de archivos multimedia.
6.  **Validación de Datos:** Uso de Joi para esquemas de validación del lado del servidor.

## 🏃‍♂️ Cómo correrlo en local

1. Clona el repositorio.
2. Ejecuta `npm install` para instalar las dependencias.
3. Crea un archivo `.env` con tus credenciales de Cloudinary, Mapbox y MongoDB.
4. Ejecuta `node seeds/index.js` si querés cargar datos de prueba.
5. Dale a `npm start` y ¡listo!

---
*Proyecto desarrollado con ganas y mucho café (y algún que otro mate en Funes).*
