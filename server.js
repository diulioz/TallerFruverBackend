// const express=require('express');
import express from 'express';
// const routes = require('./Routes/routes');
import router from './Routes/routes.js';
import { sequelize } from './Database/database.js';
import { Producto } from './Models/productos.js';
import cors from 'cors';

//Crear Instancia
const app = express();

//Montando el enrutador en la app principal
app.use(cors());
app.use(express.json());
// app.use(routes);
app.use(router);
app.set('port',3000);

//Test a la Base de datos
const testDb = async() => {
    try {
        await sequelize.sync();
        console.log('Conexion realizada con éxito');
        // app.listen(3000);
        //Correr servicio por el puerto 3000
        app.listen(app.get('port'),()=>{
            console.log(`Servidor Escuchando por el puerto ${app.get('port')}`);
        });
    } catch (error) {
        console.error(`Error al realizar conexión ${error}`);
    }
}

testDb();






// console.log("Node");