import chai, { expect } from 'chai';
import chaiHttp from 'chai-http';

import server from '../../server';

import users from './mock-data/users.json';

chai.use(chaiHttp);

describe('API endpoint /auth/signup ', () => {
    before(() => { });

    after(() => { });

    it('should not signup with existing email', (done) => {
        chai.request(server)
            .post('/api/v1/auth/signup')
            .send(users[0])
            .then((res) => {
                expect(res).to.have.status(401);
                expect(res.body).to.be.an('object');
                expect(res.body.error).to.equal('Email already exists');
                done();
            }).catch(done);
    });

    it('should not signup with existing phone number', (done) => {
        chai.request(server)
            .post('/api/v1/auth/signup')
            .send(users[1])
            .then((res) => {
                expect(res).to.have.status(401);
                expect(res.body).to.be.an('object');
                expect(res.body.error).to.equal('PhoneNumber already exists');
                done();
            }).catch(done);
    });

    it('need to give all mandatory fields in signup', (done) => {
        chai.request(server)
            .post('/api/v1/auth/signup')
            .send(users[2])
            .then((res) => {
                expect(res).to.have.status(401);
                expect(res.body).to.be.an('object');
                expect(res.body.error).to.equal('All fields are required');
                done();
            }).catch(done);
    });

});
