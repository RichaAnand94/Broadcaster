import chai, { expect } from 'chai';
import chaiHttp from 'chai-http';

import server from '../../../server';

import users from '../mock-data/users.json';

chai.use(chaiHttp);

let userToken;

describe('API endpoint /v1/admin', () => {

    before((done) => {
        chai.request(server)
            .post('/api/v1/auth/signin')
            .send(users[0])
            .then((res) => {
                userToken = res.body.data.token;
                done();
            }).catch(done);
    });

    it('need to get array while retrieving red-flags by admin', (done) => {
        chai.request(server)
            .get('/api/v1/admin/red-flags')
            .set('token', `${userToken}`)
            .then((res) => {
                expect(res).to.have.status(200);
                expect(res.body).to.be.an('object');
                expect(res.body.data).to.be.an('array');
                done();
            }).catch(done);
    });

    it('need to get array while retrieving interventions by admin', (done) => {
        chai.request(server)
            .get('/api/v1/admin/interventions')
            .set('token', `${userToken}`)
            .then((res) => {
                expect(res).to.have.status(200);
                expect(res.body).to.be.an('object');
                expect(res.body.data).to.be.an('array');
                done();
            }).catch(done);
    });
});