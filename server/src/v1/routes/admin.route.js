import express from 'express';
import { authorizeAdmin } from '../middleware/authorize';
import {getRedFlags, getInterventions} from '../controllers/admin.controller';

const router = express.Router();

router.get('/red-flags', authorizeAdmin, getRedFlags);
router.get('/interventions', authorizeAdmin, getInterventions);

export default router;