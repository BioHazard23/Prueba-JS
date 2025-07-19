# modulo-# Proyecto SPA: Gestión de Eventos

Esta es una Single Page Application (SPA) para gestionar eventos, desarrollada como parte de una prueba técnica.

## Información del Coder

- **Nombre:** [Juan Manuel Arango Arana]
- **Clan:** [VanRossum]
- **Correo:** [jumarana1007@gmail.com]
- **Documento de Identidad:** [1040571792]

## Descripción del Proyecto

La aplicación permite a los usuarios registrarse con roles de 'administrador' o 'visitante'.
- **Administradores:** Pueden crear, leer, actualizar y eliminar (CRUD) eventos.
- **Visitantes:** Pueden ver todos los eventos e inscribirse en ellos si hay capacidad disponible.

La aplicación utiliza `localStorage` para la persistencia de la sesión y `json-server` para simular un backend.

## Tecnologías Utilizadas

- HTML5
- CSS3
- JavaScript (ES6+)
- Node.js
- json-server

## Cómo Levantar y Usar la Solución

Sigue estos pasos para ejecutar el proyecto localmente.

### Prerrequisitos

- Tener [Node.js](https://nodejs.org/) instalado.
- Tener `json-server` instalado globalmente. Si no lo tienes, ejecuta:
  ```bash
  npm install -g json-server
  ```

### Pasos para la Instalación y Ejecución

1.  **Clonar el Repositorio**
    ```bash
    git clone [https://github.com/BioHazard23/Prueba-JS.git]
    cd [Prueba-JS]
    ```

2.  **Iniciar el Servidor de Base de Datos**
    En una terminal, dentro de la carpeta del proyecto, ejecuta el siguiente comando. Esto iniciará el servidor en `http://localhost:3000`.
    ```bash
    npm run db
    ```
    Deja esta terminal abierta mientras usas la aplicación.

3.  **Abrir la Aplicación**
    No necesitas un servidor web complejo para el frontend. Simplemente abre el archivo `index.html` en tu navegador web preferido (se recomienda usar una extensión como "Live Server" en VS Code para evitar problemas con CORS, aunque con `fetch` a `localhost` no debería haber inconveniente).

### Uso de la Aplicación

- **Usuario Administrador por defecto:**
  - **Email:** `admin@example.com`
  - **Password:** `admin123`
- **Registro:** Puedes crear nuevos usuarios (con rol 'visitante') a través del formulario de registro.
- **Navegación:** La aplicación maneja el enrutamiento sin recargar la página.

## Commits
El repositorio está organizado con commits descriptivos que reflejan el progreso y la implementación de cada funcionalidad clave.

