import chai, { expect } from 'chai';
import chaiHttp from 'chai-http';

import server from '../../../server';

import users from '../mock-data/users.json';

chai.use(chaiHttp);

describe('API endpoints /v1/auth/signup & /v1/auth/signin', () => {
    
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

    it('need to give all mandatory fields in signin', (done) => {
        chai.request(server)
            .post('/api/v1/auth/signin')
            .send(users[3])
            .then((res) => {
                expect(res).to.have.status(401);
                expect(res.body).to.be.an('object');
                expect(res.body.error).to.equal('All fields are required');
                done();
            }).catch(done);
    });

    it('invalid credentials in signin', (done) => {
        chai.request(server)
            .post('/api/v1/auth/signin')
            .send(users[4])
            .then((res) => {
                expect(res).to.have.status(401);
                expect(res.body).to.be.an('object');
                expect(res.body.error).to.equal('Invalid credentials');
                done();
            }).catch(done);
    });

});
