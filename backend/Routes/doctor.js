import express from 'express';
import {updateDoctor,deleteDoctor,getSingleDoctor,getAllDoctor} from '../Controllers/doctorController.js';
import reviewRouter from './review.js';

const router=express.Router();

router.use('/:doctorId/reviews',reviewRouter);


router.get('/:id',getSingleDoctor);
router.get('/',getAllDoctor);
router.put('/:id',updateDoctor);
router.delete('/:id',deleteDoctor);

export default router;
