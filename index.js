const inquirer = require('inquirer');
const Employee = require('./lib/Employee');
const Manager = require('./lib/Manager');
const Engineer = require('./lib/Engineer');
const Intern = require('./lib/Intern');

const team = [];

 function promptManager () {
    return inquirer.prompt([{
        type: 'input',
        name: 'name',
        message: `What is the Team Manager's name?`
    },
    {
        type: 'number',
        name: 'id',
        message: `What is the Team Manager's employee ID number?`
    },
    {
        type: 'input',
        name: 'email',
        message: `What is the Team Manager's email?`
    },
    {
        type: 'number',
        name: 'officeNumber',
        message: `What is the Team Manager's office number?`
    }
])
    .then(({name, id, email, officeNumber}) => {
        const manager = new Manager(name, id, email, officeNumber);
        console.log(manager);

        team.push(manager);
        
    })
    .then(confirmNewEmployee);
};

function confirmNewEmployee () {
    return inquirer.prompt([{
        type: 'confirm',
        name: 'confirmNew',
        message: 'Would you like to add a new Employee?',
        default: true
    }])
};

function addNewEmployee () {
    return inquirer.prompt([{
        type: 'list',
        name: 'role',
        message: 'Is this employee an Engineer or Intern?',
        choices: ['Enginner', 'Intern']
    },
    {
        type: 'input',
        name: 'name',
        message: `What is the employee's name?`
    },
    {
        type: 'number',
        name: 'id',
        message: `What is the employee's ID number?`
    },
    {
        type: 'input',
        name: 'email',
        message: `What is the emplyoee's email?`
    },
            {
                type: 'input',
                name: 'github',
                message: `What is the Engineer's github username?`,
                when: function(answers) { answers.role === 'Engineer'}
            },
            {
                type: 'input',
                name: 'school',
                message: `What is the name of the Intern's school?`,
                when: function(answers) { answers.role === 'Intern'}
            }])
}

addNewEmployee();

 