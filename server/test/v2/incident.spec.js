import chai, { expect } from 'chai';
import chaiHttp from 'chai-http';

import server from '../../../server';

import users from '../mock-data/users.json';
import incidents from '../mock-data/incidents.json';

chai.use(chaiHttp);

let userToken;

describe('API endpoints /v2/red-flags & /v2/interventions', () => {

    before((done) => {
        chai.request(server)
            .post('/api/v2/auth/signin')
            .send(users[0])
            .then((res) => {
                userToken = res.body.data.token;
                done();
            }).catch(done);
    });

    it('need to give all mandatory fields for posting red-flags', (done) => {
        chai.request(server)
            .post('/api/v2/red-flags')
            .set('token', `${userToken}`)
            .send(incidents[0])
            .then((res) => {
                expect(res).to.have.status(400);
                expect(res.body).to.be.an('object');
                expect(res.body.error).to.equal('Missing mandatory fields');
                done();
            }).catch(done);
    });

    it('need to get array while retrieving red-flags', (done) => {
        chai.request(server)
            .get('/api/v2/red-flags')
            .set('token', `${userToken}`)
            .then((res) => {
                expect(res).to.have.status(200);
                expect(res.body).to.be.an('object');
                expect(res.body.data).to.be.an('array');
                done();
            }).catch(done);
    });

    it('need to get error without token for red-flags', (done) => {
        chai.request(server)
            .get('/api/v2/red-flags')
            .set('token', '')
            .then((res) => {
                expect(res).to.have.status(401);
                expect(res.body).to.be.an('object');
                expect(res.body.error).to.equal('Authentication failed');
                done();
            }).catch(done);
    });

    it('need to get error while updating red-flags location with out passing location', (done) => {
        chai.request(server)
            .patch('/api/v2/red-flags/1/location')
            .set('token', `${userToken}`)
            .send({})
            .then((res) => {
                expect(res).to.have.status(400);
                expect(res.body).to.be.an('object');
                expect(res.body.error).to.equal('Missing mandatory fields');
                done();
            }).catch(done);
    });

    it('need to get error while updating red-flags comment with out passing comment', (done) => {
        chai.request(server)
            .patch('/api/v2/red-flags/1/comment')
            .set('token', `${userToken}`)
            .send({})
            .then((res) => {
                expect(res).to.have.status(400);
                expect(res.body).to.be.an('object');
                expect(res.body.error).to.equal('Missing mandatory fields');
                done();
            }).catch(done);
    });




    it('need to give all mandatory fields for posting interventions', (done) => {
        chai.request(server)
            .post('/api/v2/interventions')
            .set('token', `${userToken}`)
            .send(incidents[0])
            .then((res) => {
                expect(res).to.have.status(400);
                expect(res.body).to.be.an('object');
                expect(res.body.error).to.equal('Missing mandatory fields');
                done();
            }).catch(done);
    });

    it('need to get array while retrieving interventions', (done) => {
        chai.request(server)
            .get('/api/v2/interventions')
            .set('token', `${userToken}`)
            .then((res) => {
                expect(res).to.have.status(200);
                expect(res.body).to.be.an('object');
                expect(res.body.data).to.be.an('array');
                done();
            }).catch(done);
    });

    it('need to get error without token for interventions', (done) => {
        chai.request(server)
            .get('/api/v2/interventions')
            .set('token', '')
            .then((res) => {
                expect(res).to.have.status(401);
                expect(res.body).to.be.an('object');
                expect(res.body.error).to.equal('Authentication failed');
                done();
            }).catch(done);
    });

    it('need to get error while updating intervention location with out passing location', (done) => {
        chai.request(server)
            .patch('/api/v2/interventions/1/location')
            .set('token', `${userToken}`)
            .send({})
            .then((res) => {
                expect(res).to.have.status(400);
                expect(res.body).to.be.an('object');
                expect(res.body.error).to.equal('Missing mandatory fields');
                done();
            }).catch(done);
    });

    it('need to get error while updating intervention comment with out passing comment', (done) => {
        chai.request(server)
            .patch('/api/v2/interventions/1/comment')
            .set('token', `${userToken}`)
            .send({})
            .then((res) => {
                expect(res).to.have.status(400);
                expect(res.body).to.be.an('object');
                expect(res.body.error).to.equal('Missing mandatory fields');
                done();
            }).catch(done);
    });

});