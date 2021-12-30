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
        message: `What is the Team Manager's name?`,
        validate: nameInput => {
            if (nameInput) {
                return true;
            } else {
                console.log('Please enter a name.');
                return false;
            }
        }
    },
    {
        type: 'number',
        name: 'id',
        message: `What is the Team Manager's employee ID number?`,
        validate: idInput => {
            if(isNaN(idInput)) {
                return true;
            } else {
                console.log('Please enter a valid employee ID as a number.')
                return false;
            }
        }
    },
    {
        type: 'input',
        name: 'email',
        message: `What is the Team Manager's email?`,
        validate: emailInput => {
  
            valid = /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/.test(emailInput)

            if (valid) {
                return true;
            } else {
                console.log('Please enter a valid email')
                return false;
            }
        }
    },
    {
        type: 'number',
        name: 'officeNumber',
        message: `What is the Team Manager's office number?`,
        validate: idInput => {
            if(isNaN(idInput)) {
                return true;
            } else {
                console.log('Please enter a valid office number as a number.')
                return false;
            }
        }
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
        message: `What is the employee's name?`,
        validate: nameInput => {
            if (nameInput) {
                return true;
            } else {
                console.log('Please enter a name.');
                return false;
            }
        }
    },
    {
        type: 'number',
        name: 'id',
        message: `What is the employee's ID number?`,
        validate: idInput => {
            if(isNaN(idInput)) {
                return true;
            } else {
                console.log('Please enter a valid employee ID as a number.')
                return false;
            }
        }
    },
    {
        type: 'input',
        name: 'email',
        message: `What is the emplyoee's email?`,
        validate: emailInput => {
  
            valid = /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/.test(emailInput)

            if (valid) {
                return true;
            } else {
                console.log('Please enter a valid email')
                return false;
            }
        }
    },
            {
                type: 'input',
                name: 'github',
                message: `What is the Engineer's github username?`,
                when: (choice) => choice.role === "Engineer",
                validate: gitInput => {
                    if (gitInput) {
                        return true;
                    } else {
                        console.log('Please enter a github username.');
                        return false;
                    }
                }
            },
            {
                type: 'input',
                name: 'school',
                message: `What is the name of the Intern's school?`,
                when: (choice) => choice.role === "Intern",
                validate: schoolInput => {
                    if (schoolInput) {
                        return true;
                    } else {
                        console.log(`Please enter the intern's school.`);
                        return false;
                    }
                }
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
                return team;
            }
          
        });


};

const writeFile = fileContent => {
    return new Promise((resolve, reject) => {
        fs.writeFile('./dist/index.html', fileContent, err => {
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

    
   

    
