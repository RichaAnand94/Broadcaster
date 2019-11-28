import IncidentModel from '../models/Incident';

const getRedFlags = (req, res) => {
    const incidents = IncidentModel.findAllByAdmin('red-flag');
    return res.status(200).send({ 'status': 200, data: incidents })
}

const getInterventions = (req, res) =>{
    const incidents = IncidentModel.findAllByAdmin('intervention');
    return res.status(200).send({ 'status': 200, data: incidents })
}

export {getRedFlags, getInterventions };