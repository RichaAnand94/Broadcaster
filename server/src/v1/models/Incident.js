import fs from 'fs';

import incidents from '../../../public/incidents.json';

class Incident {

    constructor() {
        this.incidents = incidents;
    }

    create(data) {
        let id = Math.max.apply(Math, this.incidents.map(function (incident) { return incident.id; }));

        let newIncident = {
            id: (id != -Infinity) ? (id + 1) : (1),
            status: 'pending',
            createdOn: new Date()
        };
        newIncident = Object.assign(newIncident, data);
        this.incidents.push(newIncident);
        this.updateIncidentsData();
        return newIncident;
    }

    findOne(key, value) {
        return this.incidents.find(incident => incident[key] == value);
    }

    findAll(type, createdBy) {
        const incidents = this.incidents.filter(function (incident, index, arr) {
            return incident.type == type && incident.createdBy == createdBy;
        });
        return incidents;
    }

    update(id, params) {
        this.incidents.filter(function (incident, index, arr) {
            if (incident.id == id) {
                incident = Object.assign(incident, params);
            }
        });
        this.updateIncidentsData();
        return this.incidents;
    }

    delete(id) {
        const incidents = this.incidents.filter(function (incident, index, arr) {
            return incident.id != id;
        });
        this.incidents = incidents;
        this.updateIncidentsData();
        return this.incidents;
    }

    updateIncidentsData() {
        fs.writeFile("./server/public/incidents.json", JSON.stringify(this.incidents), function (err) {
            if (err) {
                return console.log(err);
            }
            console.log("Incidents.json updated");
        });
    }
}
export default new Incident();