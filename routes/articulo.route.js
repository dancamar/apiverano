import routerx from 'express-promise-router';
//import personaController from '../controller/persona.controller';

import ArticuloController from '../controller/articulo.controller';


const router=routerx();

router.post('/crearArticulo', ArticuloController.agregar);
router.get('/buscarArticulos/:persona', ArticuloController.listarArticulos);


export default router;