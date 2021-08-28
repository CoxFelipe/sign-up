# sign-up
Proyecto

Instalar command-line-tools y dependencias.

Se debe clonar el repositorio del proyecto de manera local.

Navegar hasta la raíz donde se encuentran los archivos package.json, app.json, App.js, etc.
 

Instalar expo-cli Para poder correr la aplicacion y generar build.

npm install --global expo-cli

Dependencias del proyecto.

Se debe correr el siguiente comando a nivel de raíz.

npm install


Para ejecutar la aplicación.

Se debe iniciar el servidor de desarrollo de Expo al nivel de raíz ejecutar el siguiente comamdo:

expo start o npm start

Abrirá automáticamente el navegador de lo contrario en el navegador ir a http://127.0.0.1:19002


Para ejecutar la aplicación en el telefono descargar la app de Expo Go:

App Store = Expo Go

Google Play = Expo Go

Para correr la app en las aplicaciones de Expo Go se debe escanear el QR Code en el dispositivo físico o mediante un cable de datos del dispositivo.


Generar archivo IPA o APK:

Es importante tener una cuenta en Expo Go para poder generar los archivos.

Android: 
expo build:android

iOS: 
expo build:ios
