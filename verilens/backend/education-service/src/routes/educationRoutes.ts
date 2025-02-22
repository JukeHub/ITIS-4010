import { Router } from 'express';
import { EducationController } from '../controllers/educationController';

const router = Router();
const educationController = new EducationController();

router.get('/modules', educationController.getAllModules);
router.get('/modules/:id', educationController.getModuleById);
router.post('/modules', educationController.createModule);
router.put('/modules/:id', educationController.updateModule);
router.delete('/modules/:id', educationController.deleteModule);

export const educationRoutes = router;