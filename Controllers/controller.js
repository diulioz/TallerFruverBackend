import { Producto } from "../Models/productos.js";

// import mysql from 'mysql';

// const pool = mysql.createPool({
//     connectionLimit: 10,
//     host: "localhost",
//     user: "root",
//     password: "",
//     database: "fruver",
//     port: "3306"
// })

//Cuando hago esto puedo modificar las rutas
const getProductos = async (req,res) =>{
    try {
        const productos=await Producto.findAll();
        res.status(200).json(productos);
    } catch (error) {
        res.status(400).json({mensaje: error});
    }
    // res.send("GET Pagina Productos desde Controller");
    // await pool.query("SELECT * FROM productos", (err,data) =>{
    //     if(err){
    //         console.error(err);
    //         res.status(400).json({mensaje: err});
    //     }
    //     else{
    //         console.log(data);
    //         res.status(200).json(data);
    //     }
    // })
}

const getProducto = async (req,res) => {
    const {idProducto} = req.params;
    try {

        const producto = await Producto.findByPk(idProducto);
    
        res.status(200).json([producto]);
    
    } catch (error) {

    res.status(400).json({ mensaje: error });

    }
}
const postProductos = async (req,res) =>{
    // res.send("POST Pagina Productos desde Controller");
    const {nombre,detalle}=req.body;
    try {
        
        const newProducto = await Producto.create({
            // nombre:nombre,
            // detalle:detalle
            nombre,
            detalle
        });
        res.status(200).json(newProducto);
    } catch (error) {
        res.status(400).json({mensaje: error});
        
    }
    // await pool.query(`INSERT INTO productos(nombre, detalle) VALUES('${nombre}','${detalle}')`, (err,data) =>{
    //     if(err){
    //         console.error(err);
    //         res.status(400).json({mensaje: err});
    //     }
    //     else{
    //         console.log(data);
    //         res.status(200).json({
    //             producto: {
    //                 nombre: nombre,
    //                 detalle: detalle
    //             }
    //         });
    //     }
    // });
}

const putProductos = async (req,res) =>{
    // res.send("PUT Pagina Productos desde Controller");
    // const { idProducto }=req.params;
    // const {nombre,detalle}=req.body;
    // await pool.query(`UPDATE productos set nombre='${nombre}', detalle='${detalle}' WHERE idProducto = '${idProducto}'`, (err,data) =>{
    //     if(err){
    //         console.error(err);
    //         res.status(400).json({mensaje: err});
    //     }
    //     else{
    //         console.log(data);
    //         res.status(200).json({
    //             body:{
    //                 producto: {
    //                     nombre: nombre,
    //                     detalle: detalle
    //                 }
    //             }
    
    //         });
    //     }
    // });
    const { idProducto }=req.params;
    const {nombre,detalle}=req.body;
    try {
        const oldProducto = await Producto.findByPk(idProducto);
        oldProducto.nombre = nombre;
        oldProducto.detalle = detalle;
        const modProducto= await oldProducto.save();
        res.status(200).json(modProducto);
        
    } catch (error) {
                res.status(400).json({mensaje: error});
                                
    }
}

const deleteProductos = async (req,res) =>{
    // res.send("DELETE Pagina Productos desde Controller");
    // const { idProducto }=req.params;
    // await pool.query(`DELETE FROM productos WHERE idProducto = '${idProducto}'`, (err,data) =>{
    //     if(err){
    //         console.error(err);
    //         res.status(400).json({mensaje: err});
    //     }
    //     else{
    //         console.log(data);
    //         res.status(200).json({
    //             body: {
    //                 mensaje: `Registro con id ${idProducto} Eliminado satisfactoriamente`
    //             }
    //         });
    //     }
// });
    try {
        const { idProducto }=req.params;
        const respuesta = await Producto.destroy({
            where:{
                // idProducto:idProducto,
                idProducto,
            }
        })
        res.status(200).json({mensaje: `Registro con id ${idProducto} Eliminado `})
    } catch (error) {
        res.status(400).json({ mensaje: `Registro No Eliminado ${error}`});
        
    }
}

// module.exports = {
//     getProductos, postProductos, putProductos, deleteProductos
// }
export {getProductos, getProducto, postProductos, putProductos, deleteProductos}