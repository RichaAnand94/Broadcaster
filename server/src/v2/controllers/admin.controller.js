import IncidentModel from '../models/Incident';

const getRedFlags = async (req, res) => {
    const incidents = await IncidentModel.findAllByAdmin('red-flag');
    return res.status(200).send({ 'status': 200, data: incidents })
}

const getInterventions = async (req, res) =>{
    const incidents = await IncidentModel.findAllByAdmin('intervention');
    return res.status(200).send({ 'status': 200, data: incidents })
}

const updateRedFlagStatus = async (req, res) => {
    if (!req.body.status) {
        return res.status(401).send({ 'status': 401, error: 'Missing mandatory fields' })
    } else {
        if (req.body.status === 'draft' || req.body.status === 'under investigation' || req.body.status === 'resolved' || req.body.status === 'rejected') {
            const incident = await IncidentModel.findOne('id', req.params.id);
            if (incident) {
                await IncidentModel.update(req.params.id, 'status', req.body.status);
                return res.status(200).send({ 'status': 200, data: { 'id': incident.id, 'message': 'Updated red-flag record’s status' } })
            } else {
                return res.status(404).send({ 'status': 404, error: 'No red-flag found for id: ' + req.params.id });
            }
        } else {
            return res.status(400).send({ 'status': 400, error: 'Invalid status' });
        }

    }
}

const updateInterventionStatus = async (req, res) => {
    if (!req.body.status) {
        return res.status(401).send({ 'status': 401, error: 'Missing mandatory fields' })
    } else {
        if (req.body.status === 'draft' || req.body.status === 'under investigation' || req.body.status === 'resolved' || req.body.status === 'rejected') {
            const incident = await IncidentModel.findOne('id', req.params.id);
            if (incident) {
                await IncidentModel.update(req.params.id, 'status', req.body.status);
                return res.status(200).send({ 'status': 200, data: { 'id': incident.id, 'message': 'Updated intervention record’s status' } })
            } else {
                return res.status(404).send({ 'status': 404, error: 'No intervention found for id: ' + req.params.id });
            }
        } else {
            return res.status(400).send({ 'status': 400, error: 'Invalid status' });
        }

    }
}

export {getRedFlags, getInterventions, updateRedFlagStatus, updateInterventionStatus };