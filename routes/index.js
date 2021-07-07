import routerx from 'express-promise-router';

import PersonaRoute from './persona.route';
import ArticuloRoute from './articulo.route';

const router=routerx();

router.use('/persona', PersonaRoute);
router.use('/articulo', ArticuloRoute );

export default router;