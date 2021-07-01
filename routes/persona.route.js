import routerx from 'express-promise-router';

//const routerx = require('express-promise-router');

import PersonaController from '../controller/persona.controller';
//const PersonaController=require('../controller/persona.controller');

const router=routerx();

router.post('/crearPersona', PersonaController.agregar);
router.get('/listarPersonas', PersonaController.consultar);


export default router;