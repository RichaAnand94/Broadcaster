import express from 'express';
import { authorizeUser } from '../middleware/authorize';
import {createRedFlag, getRedFlags, getIncidentsById, updateRedFlagLocation, updateRedFlagComment, deleteRedFlag, createIntervention, getInterventions, updateInterventionComment, updateInterventionLocation, deleteIntervention } from '../controllers/incident.controller';


const router = express.Router();


//const Incident = require('../controllers/incident.controller');

router.post('/red-flags', authorizeUser, createRedFlag);
router.get('/red-flags', authorizeUser, getRedFlags);
router.get('/red-flags/:id', authorizeUser, getIncidentsById);
router.patch('/red-flags/:id/location', authorizeUser, updateRedFlagLocation);
router.patch('/red-flags/:id/comment', authorizeUser, updateRedFlagComment);
router.delete('/red-flags/:id', authorizeUser, deleteRedFlag);

router.post('/interventions', authorizeUser, createIntervention);
router.get('/interventions', authorizeUser, getInterventions);
router.get('/interventions/:id', authorizeUser, getIncidentsById);
router.patch('/interventions/:id/location', authorizeUser, updateInterventionLocation);
router.patch('/interventions/:id/comment', authorizeUser, updateInterventionComment);
router.delete('/interventions/:id', authorizeUser, deleteIntervention);

export default router;