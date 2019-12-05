import chai, { expect } from 'chai';
import chaiHttp from 'chai-http';

import server from '../../../server';

import users from '../mock-data/users.json';

chai.use(chaiHttp);

describe('API endpoints /v2/auth/signup & /v2/auth/signin', () => {
    before(() => { });

    after(() => { });

    it('should not signup with existing email', (done) => {
        chai.request(server)
            .post('/api/v2/auth/signup')
            .send(users[0])
            .then((res) => {
                expect(res).to.have.status(401);
                expect(res.body).to.be.an('object');
                expect(res.body.error).to.equal('Email already exists');
                done();
            }).catch(done);
    });

    it('need to give all mandatory fields in signup', (done) => {
        chai.request(server)
            .post('/api/v2/auth/signup')
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
            .post('/api/v2/auth/signin')
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
            .post('/api/v2/auth/signin')
            .send(users[4])
            .then((res) => {
                expect(res).to.have.status(401);
                expect(res.body).to.be.an('object');
                expect(res.body.error).to.equal('Invalid credentials');
                done();
            }).catch(done);
    });

});
