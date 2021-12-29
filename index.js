const inquirer = require('inquirer');
const Employee = require('./lib/Employee');

const team = [];

const questions = [
        {
            type: 'text',
            name: 'name',
            message: `What is the employee's name?`
        },
        {
            type: 'number',
            name: 'id',
            message: `What is the employee's ID number?`
        },
        {
            type: 'text',
            name: 'email',
            message: `What is the employee's email?`
        }
]

function init() {
    return inquirer.prompt(questions);
}

init()
    .then(({ name, id, email}) => {
        return new Employee (name, id, email);
    });