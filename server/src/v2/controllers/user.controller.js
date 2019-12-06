import UserModel from '../models/User';
import { generateToken } from '../middleware/authorize';

const signUp = async (req, res) => {
    if (!req.body.firstName || !req.body.lastName || !req.body.email || !req.body.phone_number || !req.body.password) {
        return res.status(401).send({ 'status': 401, 'error': 'All fields are required' })
    } else if (!await UserModel.checkForPropertyExistence('email', req.body.email)) {
        if (!await UserModel.checkForPropertyExistence('phone_number', req.body.phone_number)) {
            const userData = await UserModel.create(req.body);
            delete userData.password;
            const token = generateToken(userData);
            console.log('User created');
            return res.status(200).send({ 'status': 200, 'message': 'User created successfully', data: { 'token': token } })
        } else {
            return res.status(409).send({ 'status': 409, 'error': 'Phone number already exists' })
        }
    } else {
        return res.status(409).send({ 'status': 409, 'error': 'Email already exists' })
    }
}

const signIn = async (req, res) => {
    if (!req.body.email || !req.body.password) {
        return res.status(400).send({ 'status': 400, 'error': 'All fields are required' })
    } else {
        const userData = await UserModel.findOne('email', req.body.email);
        if (!userData || userData.password !== req.body.password) {
            return res.status(400).send({ 'status': 400, 'error': 'Invalid credentials' })
        } else {
            delete userData.password;
            const token = generateToken(userData);
            return res.status(200).send({ 'status': 200, 'message': 'User logged in successfully', data: { 'token': token } })
        }
    }
}
export {signUp, signIn};