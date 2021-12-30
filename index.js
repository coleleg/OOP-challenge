// inquirer
const inquirer = require('inquirer');

// classes
const Manager = require('./lib/Manager');
const Engineer = require('./lib/Engineer');
const Intern = require('./lib/Intern');

// generate page
const generatePage = require('./src/page-template');
const fs = require('fs');

const team = [];

 const promptManager = () => {
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
        team.push(manager);   
    })

};


function addNewEmployee () {

    return inquirer.prompt([{
        type: 'list',
        name: 'role',
        message: 'Is this employee an Engineer or Intern?',
        choices: ['Engineer', 'Intern']
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
                when: (choice) => choice.role === "Engineer"
            },
            {
                type: 'input',
                name: 'school',
                message: `What is the name of the Intern's school?`,
                when: (choice) => choice.role === "Intern"
            },
    {
        type: 'confirm',
        name: 'confirmNew',
        message: 'Would you like to add a new Employee?',
        default: true
    }])
        .then(({role, name, id, email, github, school, confirmNew}) => {
            let employee;

            if (role === "Engineer") {
                employee = new Engineer(name, id, email, github);
            } 
                else if (role === "Intern") {
                    employee = new Intern(name, id, email, school)
                }

            team.push(employee);

            if (confirmNew) {
                return addNewEmployee(team);
            }
            else {
                console.log(team);
                return team;
            }
          
        });


};

const writeFile = fileContent => {
    return new Promise((resolve, reject) => {
        fs.writeFile('./dist/index.htlm', fileContent, err => {
            if(err) {
                reject(err);
                return;
            }

            resolve({
                ok: true,
                message: 'Team Page Generated!'
            });
        });
    });
};

promptManager()
    .then(addNewEmployee)
    .then(team => {
        return generatePage(team);
    })
    .then(pageData => {
        return writeFile(pageData);
    })
    .catch(err => {
        console.log(err);
    });

    
   

    
