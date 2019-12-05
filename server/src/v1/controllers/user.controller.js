import UserModel from '../models/User';
import { generateToken } from '../middleware/authorize';

const signUp = (req, res)=> {
    if (!req.body.firstname || !req.body.lastname || !req.body.email || !req.body.phone_number || !req.body.password) {
        return res.status(401).send({ 'status': 401, 'error': 'All fields are required' })
    } else if (!UserModel.checkForPropertyExistence('email', req.body.email)) {
        if (!UserModel.checkForPropertyExistence('phone_number', req.body.phone_number)) {
            const userData = Object.assign({}, UserModel.create(req.body));
            delete userData.password;
            const token = generateToken(userData)
            console.log('User created');
            return res.status(200).send({ 'status': 200, 'message': 'User created successfully', data: { 'token': token } })
        } else {
            return res.status(401).send({ 'status': 401, 'error': 'PhoneNumber already exists' })
        }
    } else {
        return res.status(401).send({ 'status': 401, 'error': 'Email already exists' })
    }
}
const signIn =  (req, res)=> {
    if (!req.body.email || !req.body.password) {
        return res.status(401).send({ 'status': 401, 'error': 'All fields are required' })
    } else {
        const userData = Object.assign({}, UserModel.findOne('email', req.body.email));
        if (!userData || userData.password !== req.body.password) {
            return res.status(401).send({ 'status': 401, 'error': 'Invalid credentials' })
        } else {
            delete userData.password;
            const token = generateToken(userData);
            return res.status(200).send({ 'status': 200, 'message': 'User logged in successfully', data: { 'token': token } })
        }
    }
}
export {signUp, signIn};