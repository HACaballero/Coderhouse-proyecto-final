# Coderhouse Backend -Proyecto final
## Alexis Caballero


## Características

La aplicación es un sistema CRUD que permite alternar, por el momento, en 4 tipos de almacenamientos, el cuál se lee en el archivo config.ts los cuales son:
- MONGO_DB: En base de dato local de MongoDB usando Mongoose.
- FILE: Lee y guarda usando los archivos de texto de la carpeta data.
- FIREBASE: Almacena los datos en Firestore .
- MEMORY: Los datos se almacenan en memoria, al reiniciar el servidor los datos se perderán.


## Instalación


```sh
npm install
```

Una vez instalado los paquetes, correr:

```sh
npm run start
```
Ésto correrá la aplicación en el navegador por defecto en el puerto 3000 (http://localhost:3000/)
