import IncidentModel from '../models/Incident';

const getRedFlags = async (req, res) => {
    const incidents = await IncidentModel.findAllByAdmin('red-flag');
    return res.status(200).send({ 'status': 200, data: incidents })
}

const getInterventions = async (req, res) =>{
    const incidents = await IncidentModel.findAllByAdmin('intervention');
    return res.status(200).send({ 'status': 200, data: incidents })
}

export {getRedFlags, getInterventions };