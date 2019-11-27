var fs = require('fs');

var users = require('../../../public/users.json');

class User {

    constructor() {
        this.users = users;
    }

    create(data) {
        let id = Math.max.apply(Math, this.users.map(function (user) { return user.id; }));
        console.log(id)
        let newUser = {
            id: (id != -Infinity) ? (id + 1) : (1),
            role: 'user',
            createdOn: new Date()
        };
        newUser = Object.assign(newUser, data);
        this.users.push(newUser);
        this.updateUsersData();
        return newUser;
    }

    checkForPropertyExistence(key, value) {
        if (users.length > 0 && this.users.find(user => user[key] === value)) {
            return true;
        } else {
            return false;
        }
    }

    updateUsersData() {
        fs.writeFile("./server/public/users.json", JSON.stringify(this.users), function (err) {
            if (err) {
                return console.log(err);
            }
            console.log("Users.json updated");
        });
    }
}
module.exports = new User();