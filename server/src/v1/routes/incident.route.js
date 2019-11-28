import express from 'express';
import { authorizeUser } from '../middleware/authorize';
import {createRedFlag, getRedFlags, getIncidentsById, updateRedFlagLocation, updateRedFlagComment, deleteRedFlag} from '../controllers/incident.controller';

const router = express.Router();
import { Incident } from  '../controllers/incident.controller';
//const Incident = require('../controllers/incident.controller');

router.post('/red-flags', authorizeUser, createRedFlag);
router.get('/red-flags', authorizeUser, getRedFlags);
router.get('/red-flags/:id', authorizeUser, getIncidentsById);
router.patch('/red-flags/:id/location', authorizeUser, updateRedFlagLocation);
router.patch('/red-flags/:id/comment', authorizeUser, updateRedFlagComment);
router.delete('/red-flags/:id', authorizeUser, deleteRedFlag);

export default router;