import express from 'express';
import signUp from '../controllers/user.controller';

const router = express.Router();
// router.post('/',(req,res)=>{
//    res.send('hello');

// });

router.post('/signup',signUp);

export default router;