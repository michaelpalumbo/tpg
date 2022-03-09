const Employee = require('./Employee.js');

class Engineer extends Employee {
    constructor (name, id, email, github){

        super(name, id, email)
        this.name = name;
        this.id = id;
        this.email = email;
        this.github = github
    }
    getRole(){
        return 'Engineer'
    }
    getGithub(){
        return this.github;
    }
    getHTML(){
        return `<div class="col-4">${this.name}<br>${this.id}<br><a href="mailto:${this.email}">Email</a><br><a href="https://github.com/${this.github}">Github</a></div>`
    }
}

module.exports = Engineer