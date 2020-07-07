import {Router} from 'express';
import {urlencoded,json} from 'body-parser'
import CourseController from '../Controller/CourseController';
import MilestoneController from '../Controller/MilestoneController';
import StudentsController from '../Controller/StudentsController';

const router = Router();
router.use(urlencoded({ extended: false }));
router.use(json());
router.get('/course',CourseController.index)
router.post('/course/create',CourseController.create)
router.get('/milestones',MilestoneController.index)
router.post('/milestone/create',MilestoneController.create)
router.post('/student/register',StudentsController.register)
router.post('/student/login',StudentsController.login)



export default router;