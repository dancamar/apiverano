import routerx from 'express-promise-router';
import personaController from '../controller/persona.controller';

//const routerx = require('express-promise-router');

import PersonaController from '../controller/persona.controller';
//const PersonaController=require('../controller/persona.controller');

const router=routerx();

router.post('/crearPersona', PersonaController.agregar);
router.get('/listarPersonas', PersonaController.consultar);
router.get('/listarPersona/:id', PersonaController.consultarUno );
router.delete('/eliminarPersona/:id', personaController.eliminar);
router.put('/actualizarPersona/:id', PersonaController.Actualizar);


export default router;