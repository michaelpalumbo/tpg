const Employee = require('./Employee.js');

class Manager extends Employee {
    constructor (name, id, email){

        super(name, id, email)
        this.name = name;
        this.id = id;
        this.email = email;
    }
    getRole(){
        return 'Manager'
    }
}

module.exports = Manager