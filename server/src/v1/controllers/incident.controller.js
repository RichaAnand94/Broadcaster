import IncidentModel from '../models/Incident';

const createRedFlag =  (req, res) => {
    if (!req.body.title || !req.body.comment || !req.body.location) {
        return res.status(401).send({ 'status': 401, error: 'Missing mandatory fields' })
    } else {
        req.body.createdBy = req.headers.userId;
        req.body.type = 'red-flag';
        const incidentData = Object.assign({}, IncidentModel.create(req.body));
        return res.status(200).send({ 'status': 200, 'message': 'Created red-flag record', data: { 'id': incidentData.id } })
    }
}

const getRedFlags = (req, res) => {
    const incidents = IncidentModel.findAll('red-flag', req.headers.userId);
    return res.status(200).send({ 'status': 200, data: incidents })
}

const getIncidentsById = (req, res) => {
    const incident = IncidentModel.findOne('id', req.params.id);
    if (incident) {
        return res.status(200).send({ 'status': 200, data: incident });
    } else {
        return res.status(401).send({ 'status': 401, error: 'No data found for id: ' + req.params.id });
    }
}

const updateRedFlagLocation = (req, res) => {
    if (!req.body.location) {
        return res.status(401).send({ 'status': 401, error: 'Missing mandatory fields' })
    } else {
        const incident = IncidentModel.findOne('id', req.params.id);
        if (incident) {
            if (incident.status === 'pending') {
                const params = {
                    location: req.body.location
                }
                IncidentModel.update(req.params.id, params);
                return res.status(200).send({ 'status': 200, data: { 'id': incident.id, 'message': 'Updated red-flag record’s location' } })
            } else {
                return res.status(401).send({ 'status': 401, error: 'This red-flag can not be updated' });
            }
        } else {
            return res.status(401).send({ 'status': 401, error: 'No red-flag found for id: ' + req.params.id });
        }
    }
}

const updateRedFlagComment = (req, res) => {
    if (!req.body.comment) {
        return res.status(401).send({ 'status': 401, error: 'Missing mandatory fields' })
    } else {
        const incident = IncidentModel.findOne('id', req.params.id);
        if (incident) {
            if (incident.status === 'pending') {
                const params = {
                    comment: req.body.comment
                }
                IncidentModel.update(req.params.id, params);
                return res.status(200).send({ 'status': 200, data: { 'id': incident.id, 'message': 'Updated red-flag record’s comment' } })
            } else {
                return res.status(401).send({ 'status': 401, error: 'This red-flag can not be updated' });
            }
        } else {
            return res.status(401).send({ 'status': 401, error: 'No red-flag found for id: ' + req.params.id });
        }
    }
}

const deleteRedFlag = (req, res) => {
    const incident = IncidentModel.findOne('id', req.params.id);
    if (incident) {
        if (incident.createdBy == req.headers.userId) {
            if (incident.status === 'pending') {
                IncidentModel.delete(req.params.id);
                return res.status(200).send({ 'status': 200, data: { 'id': incident.id, 'message': 'red-flag record has been deleted' } })
            } else {
                return res.status(401).send({ 'status': 401, error: 'This red-flag can not be deleted' });
            }
        } else {
            return res.status(401).send({ 'status': 401, error: 'You are not authorized to delete red-flag with id: ' + req.params.id });
        }
    } else {
        return res.status(401).send({ 'status': 401, error: 'No red-flag found for id: ' + req.params.id });
    }

}










const createIntervention =  (req, res) => {
    if (!req.body.title || !req.body.comment || !req.body.location) {
        return res.status(401).send({ 'status': 401, error: 'Missing mandatory fields' })
    } else {
        req.body.createdBy = req.headers.userId;
        req.body.type = 'intervention';
        const incidentData = Object.assign({}, IncidentModel.create(req.body));
        return res.status(200).send({ 'status': 200, 'message': 'Created intervention record', data: { 'id': incidentData.id } })
    }
}

const getInterventions = (req, res) => {
    const incidents = IncidentModel.findAll('intervention', req.headers.userId);
    return res.status(200).send({ 'status': 200, data: incidents });
}

const updateInterventionLocation = (req, res) => {
    if (!req.body.location) {
        return res.status(401).send({ 'status': 401, error: 'Missing mandatory fields' })
    } else {
        const incident = IncidentModel.findOne('id', req.params.id);
        if (incident) {
            if (incident.status === 'pending') {
                const params = {
                    location: req.body.location
                }
                IncidentModel.update(req.params.id, params);
                return res.status(200).send({ 'status': 200, data: { 'id': incident.id, 'message': 'Updated intervention record’s location' } })
            } else {
                return res.status(401).send({ 'status': 401, error: 'This intervention can not be updated' });
            }
        } else {
            return res.status(401).send({ 'status': 401, error: 'No intervention found for id: ' + req.params.id });
        }
    }
}

const updateInterventionComment = (req, res)=> {
    if (!req.body.comment) {
        return res.status(401).send({ 'status': 401, error: 'Missing mandatory fields' })
    } else {
        const incident = IncidentModel.findOne('id', req.params.id);
        if (incident) {
            if (incident.status === 'pending') {
                const params = {
                    comment: req.body.comment
                }
                IncidentModel.update(req.params.id, params);
                return res.status(200).send({ 'status': 200, data: { 'id': incident.id, 'message': 'Updated intervention record’s comment' } })
            } else {
                return res.status(401).send({ 'status': 401, error: 'This intervention can not be updated' });
            }
        } else {
            return res.status(401).send({ 'status': 401, error: 'No intervention found for id: ' + req.params.id });
        }
    }
}

const deleteIntervention = (req, res) => {
    const incident = IncidentModel.findOne('id', req.params.id);
    if (incident) {
        if (incident.createdBy == req.headers.userId) {
            if (incident.status === 'pending') {
                IncidentModel.delete(req.params.id);
                return res.status(200).send({ 'status': 200, data: { 'id': incident.id, 'message': 'intervention record has been deleted' } })
            } else {
                return res.status(401).send({ 'status': 401, error: 'This intervention can not be deleted' });
            }
        } else {
            return res.status(401).send({ 'status': 401, error: 'You are not authorized to delete intervention with id: ' + req.params.id });
        }
    } else {
        return res.status(401).send({ 'status': 401, error: 'No intervention found for id: ' + req.params.id });
    }

}

export {createRedFlag, getRedFlags, getIncidentsById, updateRedFlagLocation, updateRedFlagComment, deleteRedFlag, createIntervention, getInterventions, updateInterventionComment, updateInterventionLocation, deleteIntervention };