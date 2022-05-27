//vamos a leer .env
require('dotenv').config();


const express = require("express");
//creamos a cors
var cors = require('cors')



const {dbConecction} = require('./database/config');
// Crear el servidor express
const app=express();

//configurar cors
app.use(cors())
//Base de datos
    dbConecction();
   // console.log(process.env);

//rutas
app.get('/',(req,res)=>{
    res.json({
        ok:true,
        msg: "Hola Mundo"
    })
});

app.listen(process.env.PORT,()=>{
    console.log("servidor corriendo en el puerto"+process.env.PORT);
});