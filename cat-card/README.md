## WORKSHOP ANGULAR 7

para ello utilizamos la api pública
https://api.thecatapi.com/

## Diapositivas

https://docs.google.com/presentation/d/1dHI3MGGMeQ4qdC-QEs4ae-jeg2qBOOvd8DMKl_YwHfA/edit?usp=sharing

## Curso en Moodle

    https://moodle.intraway.com/course/view.php?id=76#section-1
      o 
    como "Introducción a Angular 7"

## Requisitos: 

```
➜  ~ node -v
v10.15.3
➜  
Angular CLI: 8.0.6
Node: 10.15.3
OS: linux x64
Angular: 8.2.0
```

## Apis Públicas

https://http.cat/

https://alexwohlbruck.github.io/cat-facts/

https://docs.thecatapi.com/

https://api.thecatapi.com/v1/images/search?breed_id=beng

https://thecatapi.com/

https://docs.thecatapi.com/authentication


## ng generate ... 
  Collection "@schematics/angular" (default):
    appShell
    application
    class
    component
    directive
    enum
    guard
    interface
    library
    module
    pipe
    service
    serviceWorker
    universal
    webWorker



## Temas Moodle index 
 00 Angular y sus componentes.
 01 Directivas, properties binding and string interpolation.
 02 Eventos y Formularios.

 03 Routing, Services, Modelos e interfaces.
 04 Http vs OpenApi,librerías de terceros, y DevTools.
 05 Test

## Actividades del taller por temas de Moodle

 # 00 Angular y sus componentes.
     # Generar un componente cat y agregar este componente dentro del componente card.
 
     ng generate componente cat

     # Crear un modelo que represente al objeto cat

     ng generate class cat --type=model

     # Crear un servicio llamado catServices

     ng generate service cat

 # 01 Directivas, properties binding and string interpolation. 

     # usar la directiva ngClass y ngStyle

     # crear una directiva estructural unless 

     # contador de likes por gatito

 # 02 Eventos y Formularios.

     # Agregar en la vista principal la ruta para el componente Agregar gatito

     # Agregar nuevo componente, formulario para agregar y guardar un gatito

 # 03 Routing, Services, Modelos e interfaces. 

     # Agregar nuevo componente de inventario y agregar la ruta a este componente

     # Agregar boton en la vista principal y agregar filtro con http client de angular

 # 04 Cambiar todos los request realizados con http client a OpenApi 

 # 05 Pruebas 

     # Contador de like

     # karma testing formulario
