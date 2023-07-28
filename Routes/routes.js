import Router from 'express';
// import { getProductos, postProductos, putProductos, deleteProductos } from '../Controllers/controller.js';
import { getProductos, getProductosId , postProductos, putProductos, deleteProductos,
    getUsuarios, getUsuariosId , postUsuarios, putUsuarios, deleteUsuarios,
    getPedidos, getPedidosId , postPedidos, putPedidos, deletePedidos,
    getDetallesP, getDetallesId, postDetallesP, putDetallesP, deleteDetallesP,
} from '../Controllers/controller.js';

const router = Router();


router.get('/', (req,res)=>{
    res.send("GET Pagina Principal Express");
});

// router.get('/productos', (req,res)=>{
//     res.send("GET Pagina Productos");
// });

// nueva ruta
router.get('/productos', getProductos);
router.get('/productos/:idProducto', getProductosId);

// router.post('/productos', (req,res)=>{
//     res.send("POST Pagina Productos");
// });

// router.put('/productos', (req,res)=>{
//     res.send("PUT Pagina Productos");
// });

// router.delete('/productos', (req,res)=>{
//     res.send("Delete Pagina Productos");

router.post('/productos', postProductos);
router.put('/productos/:idProducto',putProductos);
router.delete('/productos/:idProducto',deleteProductos);

// module.exports = router;

// nueva ruta
router.get('/usuarios', getUsuarios);
router.get('/usuarios/:idUsuario', getUsuariosId);
router.post('/usuarios', postUsuarios);
router.put('/usuarios/:idUsuario',putUsuarios);
router.delete('/usuarios/:idUsuario',deleteUsuarios);
// nueva ruta
router.get('/pedidos', getPedidos);
router.get('/pedidos/:idPedido', getPedidosId);
router.post('/pedidos', postPedidos);
router.put('/pedidos/:idPedido',putPedidos);
router.delete('/pedidos/:idPedido',deletePedidos);
// nueva ruta
router.get('/detallesP', getDetallesP);
router.get('/detallesP/:idDetallesP', getDetallesId);
router.post('/detallesP', postDetallesP);
router.put('/detallesP/:idDetallesP',putDetallesP);
router.delete('/detallesP/:idDetallesP',deleteDetallesP);
// nueva ruta
router.get('/productos', getProductos);
router.post('/productos', postProductos);
router.put('/productos/:idProducto',putProductos);
router.delete('/productos/:idProducto',deleteProductos);


export default router;