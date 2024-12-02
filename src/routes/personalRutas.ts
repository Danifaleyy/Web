import express, {Request,Response} from 'express';
import * as personalServices from '../services/personalServices';
//Activamos las rutas
const router = express.Router();

//Rutas
//http://localhost:3001/api/personal/
router.get('/', async (_req: Request, res: Response)=>{
    let personal = await personalServices.obtienePersonal();
    res.send(personal)
})

export default router;