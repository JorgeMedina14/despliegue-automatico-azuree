# Despliegue Automático en Azure App Service

## Información del estudiante

- Nombre: Jorge Medina
- Curso: Ingenieria de Software
- Carné: 0907-22-8688
- Universidad: UMG

## Descripción del proyecto

Este proyecto consiste en una aplicación web sencilla desarrollada con Node.js y Express.  
La aplicación muestra un mensaje de bienvenida y fue creada con el objetivo de demostrar un despliegue automático hacia Azure App Service.

## Tecnologías utilizadas

- Node.js
- Express
- GitHub
- Azure App Service
- GitHub Actions

## Funcionamiento

La aplicación se ejecuta mediante el archivo `server.js`.  
Cuando el usuario ingresa a la página principal, se muestra un mensaje de bienvenida.

## Despliegue automático

El proyecto está conectado a Azure App Service mediante GitHub Actions.  
Cada vez que se realiza un cambio en el código y se hace `push` al repositorio remoto de GitHub, se ejecuta automáticamente el flujo de despliegue y la aplicación se actualiza en Azure.

## Comando para ejecutar localmente

```bash
npm start