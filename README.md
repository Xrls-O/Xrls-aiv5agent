# Xrls-aiv5agent
Ai agent con funcionalidades generales 


### Manual de Comandos del Bot

---

### Comandos Generales

#### `/embed`
- **Descripción**: Envía un mensaje embed.
- **Uso**: `/embed`
- **Ejemplo**: 
    ```/embed```
- **Notas**: Este comando envía un mensaje embebido con un formato específico.

#### `/test`
- **Descripción**: Comando de prueba para verificar el funcionamiento del bot.
- **Uso**: `/test`
- **Ejemplo**: 
    ```/test```
- **Notas**: Útil para asegurarse de que el bot está activo y funcionando correctamente.

---

### Comandos Administrativos

#### `/ban`
- **Descripción**: Banea a un usuario del servidor.
- **Uso**: `/ban <usuario>`
- **Ejemplo**:
    ```/ban @Usuario```
- **Notas**: Requiere permisos de administrador. Banea al usuario mencionado del servidor.

#### `/kick`
- **Descripción**: Expulsa a un usuario del servidor.
- **Uso**: `/kick <usuario>`
- **Ejemplo**:
    ```/kick @Usuario```
- **Notas**: Requiere permisos de administrador. Expulsa al usuario mencionado del servidor.

---

### Comandos de Diversión

#### `/meme`
- **Descripción**: Envía un meme aleatorio.
- **Uso**: `/meme`
- **Ejemplo**:
    ```/meme```
- **Notas**: Envía un meme aleatorio para el disfrute de los usuarios.

#### `/joke`
- **Descripción**: Cuenta un chiste.
- **Uso**: `/joke`
- **Ejemplo**:
    ```/joke```
- **Notas**: Envía un chiste aleatorio para entretener a los usuarios.

---

### Notas Adicionales
- **Autenticación**: Asegúrate de que el bot tiene los permisos necesarios para ejecutar comandos administrativos como `/ban` y `/kick`.
- **Uso de Prefijo**: Si se ha configurado un prefijo específico en el archivo de configuración (`botConfig.js`), los comandos pueden necesitar ser llamados con ese prefijo.
- **Eventos**: Además de los comandos, el bot maneja eventos como la adición o eliminación de miembros y la recepción o eliminación de mensajes.

### Ejecución del Bot
Para ejecutar el bot, sigue estos pasos:
1. **Instala las dependencias**:
    ```bash
    npm install
    ```

2. **Configura el archivo `bot.json`**:
   ```json
   {
       "token": "TU_DISCORD_BOT_TOKEN",
       "clientId": "TU_CLIENT_ID",
       "publicKey": "TU_CLAVE_PUBLICA"
   }
   ```

3. **Inicia el bot**:
    ```bash
    npm start
    ```

¡Espero que este manual te sea útil! Si necesitas más detalles o asistencia, estoy aquí para ayudarte. 😊🚀
