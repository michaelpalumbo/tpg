const Employee = require('./Employee.js');

class Manager extends Employee {
    constructor (name, id, email, officeNumber){

        super(name, id, email)
        this.name = name;
        this.id = id;
        this.email = email;
        this.officeNumber;
    }
    getRole(){
        return 'Manager'
    }
    getHTML(){
        return `<div class="col-4">${this.name}<br>${this.id}<br><a href="mailto:${this.email}">Email</a><br>${this.officeNumber}<br></div>`
    }
}

module.exports = Manager    