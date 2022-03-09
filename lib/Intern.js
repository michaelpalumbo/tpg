const Employee = require('./Employee.js');

class Intern extends Employee {
    constructor (name, id, email, school){

        super(name, id, email)
        this.name = name;
        this.id = id;
        this.email = email;
        this.school = school
    }
    getRole(){
        return 'Intern'
    }
    getSchool(){
        return this.school;
    }
    getHTML(){
        return `<div class="col-4">${this.name}<br>${this.id}<br><a href="mailto:${this.email}">Email</a><br>${this.school}<br></div>`
    }
}

module.exports = Intern