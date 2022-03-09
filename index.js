const inquirer = require('inquirer')
const fs = require('fs')
const Manager = require('./lib/Manager.js')
const Engineer = require('./lib/Engineer.js')
const Intern = require('./lib/Intern.js')
let employees = {
    managers: [],
    engineers: [],
    interns: []
}
let addEmployee = (type) => {
    switch(type){
        case 'Manager':
            return inquirer.prompt([
                {
                    type: 'input',
                    name: 'name',
                    message: 'What is the name of this manager?',
                    validate: input => {
                        if (input) {
                          return true;
                        } else {
                          console.log('Error: no name given');
                          return false;
                        }
                    }
                },
                {
                    type: 'input',
                    name: 'id',
                    message: 'What is this manager\'s id?',
                    validate: input => {
                        if (input) {
                          return true;
                        } else {
                          console.log('Error: no name given');
                          return false;
                        }
                    }
                },
                {
                    type: 'input',
                    name: 'email',
                    message: 'What is this manager\'s email address?',
                    validate: input => {
                        if (input) {
                          return true;
                        } else {
                          console.log('Error: no name given');
                          return false;
                        }
                    }
                },
                {
                    type: 'input',
                    name: 'officeNumber',
                    message: 'What is this manager\'s office phone number?',
                    validate: input => {
                        if (input) {
                          return true;
                        } else {
                          console.log('Error: no name given');
                          return false;
                        }
                    }
                },
            
            ])
        break;

        case 'Engineer':
            return inquirer.prompt([
                {
                    type: 'input',
                    name: 'name',
                    message: 'name of this engineer?',
                    validate: input => {
                        if (input) {
                          return true;
                        } else {
                          console.log('Error: no name given');
                          return false;
                        }
                    }
                },
                {
                    type: 'input',
                    name: 'id',
                    message: 'What is this engineer\'s id?',
                    validate: input => {
                        if (input) {
                          return true;
                        } else {
                          console.log('Error: no name given');
                          return false;
                        }
                    }
                },
                {
                    type: 'input',
                    name: 'email',
                    message: 'What is this engineer\'s email address?',
                    validate: input => {
                        if (input) {
                          return true;
                        } else {
                          console.log('Error: no name given');
                          return false;
                        }
                    }
                },
                {
                    type: 'input',
                    name: 'github',
                    message: 'What is this engineer\'s GitHub username?',
                    validate: input => {
                        if (input) {
                          return true;
                        } else {
                          console.log('Error: no username given');
                          return false;
                        }
                    }
                },
            
            ])
        case 'Intern':
            return inquirer.prompt([
                {
                    type: 'input',
                    name: 'name',
                    message: 'name of this intern?',
                    validate: input => {
                        if (input) {
                          return true;
                        } else {
                          console.log('Error: no name given');
                          return false;
                        }
                    }
                },
                {
                    type: 'input',
                    name: 'id',
                    message: 'What is this intern\'s id?',
                    validate: input => {
                        if (input) {
                          return true;
                        } else {
                          console.log('Error: no name given');
                          return false;
                        }
                    }
                },
                {
                    type: 'input',
                    name: 'email',
                    message: 'What is this intern\'s email address?',
                    validate: input => {
                        if (input) {
                          return true;
                        } else {
                          console.log('Error: no name given');
                          return false;
                        }
                    }
                },
                {
                    type: 'input',
                    name: 'officeNumber',
                    message: 'What is school does this intern attend?',
                    validate: input => {
                        if (input) {
                          return true;
                        } else {
                          console.log('Error: no username given');
                          return false;
                        }
                    }
                },
            
            ])
        


    }
    

}
// this displays at the start of script, and after each employee has been successfully added
let promptAdd = () => {
    return inquirer.prompt([
        {
            type: 'list',
            name: 'continue',
            message: 'Create an entry for an employee. Select the job title',
            choices: [
                'Manager',
                'Engineer',
                'Intern',
                new inquirer.Separator(),
                'I am finished',
                
            ],
        }
    ]
)}
let role;
promptAdd()
    .then(answers => {  
        role = answers.continue 
        role === 'I am finished' ? finish() : addEmployee(role)
        .then(answers => {
            switch(role){
                case 'Manager':
                    const manager = new Manager(answers.name, answers.id, answers.email, answers.officeNumber)
                    employees.managers.push(manager.getHTML())
                    promptAdd()
                break;

                case 'Engineer':
                    const engineer = new Engineer(answers.name, answers.id, answers.email, answers.github)
                    employees.engineers.push(engineer.getHTML())
                    promptAdd()
                break

                case 'Intern':
                    const intern = new Intern(answers.name, answers.id, answers.email, answers.school)
                    employees.interns.push(intern.getHTML())
                    promptAdd()
                break
            }
            console.log(employees)
            
        })
        .then(() => {
            promptAdd()
        })
    })

const finish = () => {
    console.log('finished')
}