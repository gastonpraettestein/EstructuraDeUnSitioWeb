const express = require('express')//llamamos al modulo express para el desarrollo de la aplicacion
const app = express()//lo declaramos en una variable (app) para asi obtener el acceso a las propiedades y metodos de express
const path = require('path')//llamamos al modulo paa tabajar con rutas de archivos y rirecctoris (join, resolve, etc)


const publicPath = path.resolve(__dirname,'./public')

//express.static contiene los activos estáticos a la función de express.static para empezar directamente el servicio de los archivos (imagenes, hojas de estilo)
app.use(express.static(publicPath))

//app.get, el metodo que especifica una funcion del debolucion de llamada siempre habiendo un HTTP ('/')
//req metodo de peticion de llegada
//res metodo de respuesta para enviar
//res.senfile (al objeto res le pedimos el metodo senFile (metodo para enviar archivos en nuesto servidor))
//path.resolve metodo que resuelve el recorrido de la ruta (der a iz)
//__dirname nos hacer referencia al directorio del archivo que se esta ejecutando.
//archivo que queremos enviar.
app.get('/', (req,res)=>{res.sendFile(path.resolve(__dirname, './views/home.html'))})


//server.listen(PUERTO, (), CALLBACK)
//(interfaz incorporada que se utiliza para iniciar el servidor para escuchar la conexion cifrada)
app.listen(3000, ()=> console.log('Servidor Levantado'))