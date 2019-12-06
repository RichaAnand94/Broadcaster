import express from 'express';
import { authorizeAdmin } from '../middleware/authorize';
import {getRedFlags, getInterventions, updateRedFlagStatus, updateInterventionStatus } from '../controllers/admin.controller';

const router = express.Router();

router.get('/red-flags', authorizeAdmin, getRedFlags);
router.get('/interventions', authorizeAdmin, getInterventions);
router.put('/red-flags/:id/status', authorizeAdmin, updateRedFlagStatus);
router.put('/interventions/:id/status', authorizeAdmin, updateInterventionStatus);

export default router;