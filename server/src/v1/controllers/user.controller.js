var UserModel = require('../models/User');
var authorize = require('../middleware/authorize');

exports.signUp = function (req, res) {
    if (!req.body.firstname || !req.body.lastname || !req.body.email || !req.body.phoneNumber || !req.body.password) {
        return res.status(401).send({ 'status': 401, 'error': 'All fields are required' })
    } else if (!UserModel.checkForPropertyExistence('email', req.body.email)) {
        if (!UserModel.checkForPropertyExistence('phoneNumber', req.body.phoneNumber)) {
            const userData = Object.assign({}, UserModel.create(req.body));
            delete userData.password;
            const token = authorize.generateToken(userData)
            console.log('User created');
            return res.status(200).send({ 'status': 200, 'message': 'User created successfully', data: { 'token': token } })
        } else {
            return res.status(401).send({ 'status': 401, 'error': 'PhoneNumber already exists' })
        }
    } else {
        return res.status(401).send({ 'status': 401, 'error': 'Email already exists' })
    }
}