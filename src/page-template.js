const managerCard = function (manager) {
    return `
    <div class="card col-3 mx-3 mt-3 h-100 text-center rounded">
        <div class="bg-success">
            <h3 class="card-title text-dark">${manager.name}</h3>
            <h5 class="card-subtitle mb-1 text-dark">Manager</h5>
        </div>
            <div class="card-body container bg-dark">
                <p class="card-text text-light">ID: ${manager.id}</p>
                <p class="card-text text-light">Email: <a href="mailto:${manager.email}">${manager.email}</a></p>
                <p class="card-text text-light">Office Number: ${manager.officeNumber}</p>
            </div>
    </div> 
`};

const engineerCard = function (engineer) {
    return `
    <div class="card col-3 mx-3 mt-3 h-100 text-center rounded">
        <div class="bg-success">
            <h3 class="card-title text-dark">${engineer.name}</h3>
            <h5 class="card-subtitle mb-1 text-dark">Engineer</h5>
        </div>
            <div class="card-body container bg-dark">
                <p class="card-text text-light">ID: ${engineer.id}</p>
                <p class="card-text text-light">Email: <a href="mailto:${engineer.email}">${engineer.email}</a></p>
                <p class="card-text text-light">GitHub: <a href="github.com/${engineer.github}}">${engineer.github}</a></p>
            </div>
    </div> 
`};

const internCard = function (intern) {
    return `
    <div class="card col-3 mx-3 mt-3 h-100 text-center rounded">
        <div class="bg-success">
            <h3 class="card-title text-dark">${intern.name}</h3>
            <h5 class="card-subtitle mb-1 text-dark">Intern</h5>
        </div>
            <div class="card-body container bg-dark">
                <p class="card-text text-light">ID: ${intern.id}</p>
                <p class="card-text text-light">Email: <a href="mailto:${intern.email}">${intern.email}</a></p>
                <p class="card-text text-light">School: ${intern.school}</p>
            </div>
    </div> 
    `};


const pageData = function (teamCards) {
    return `
    <!DOCTYPE html>
    <html lang="en">
    <head>
        <meta charset="UTF-8">
        <meta http-equiv="X-UA-Compatible" content="IE=edge">
        <meta name="viewport" content="width=device-width, initial-scale=1, shrink-to-fit=no">
        <title>Team Page Generator</title>
        <link href="https://cdn.jsdelivr.net/npm/bootstrap@5.1.3/dist/css/bootstrap.min.css" rel="stylesheet" integrity="sha384-1BmE4kWBq78iYhFldvKuhfTAU6auU8tT94WrHftjDbrCEXSU1oBoqyl2QvZ6jIW3" crossorigin="anonymous">
    </head>

    <body>
        
        <header>
            <div class = "p-5 text-center bg-dark">
                <h1 class = "mb-3 mt-3 text-success">Your Team Page</h1>
            </div>
        </header>

        <main>

            <div class="container mx-300">
                <div class = "row d-flex justify-content-center mt-4">
                       ${teamCards}   
                </div>
            </div>

        </main>

    <script src="https://code.jquery.com/jquery-3.3.1.slim.min.js" integrity="sha384-q8i/X+965DzO0rT7abK41JStQIAqVgRVzpbzo5smXKp4YfRvH+8abtTE1Pi6jizo" crossorigin="anonymous"></script>
    <script src="https://cdn.jsdelivr.net/npm/bootstrap@5.1.3/dist/js/bootstrap.bundle.min.js" integrity="sha384-ka7Sk0Gln4gmtz2MlQnikT1wXgYsOg+OMhuP+IlRH9sENBO0LRn5q+8nbTov4+1p" crossorigin="anonymous"></script>

</body>
</html>
    `}


const generatePage = (team) => {
    let cards = [];

    for (var i = 0; i < team.length; i++) {
        const teamMember = team[i];
        const teamRole = teamMember.getRole();

        if (teamRole === "Manager") {
            const manager = managerCard(teamMember);
            cards.push(manager);
        }

            else if (teamRole === "Engineer") {
                const engineer = engineerCard(teamMember);
                cards.push(engineer);
            }

                else if (teamRole === "Intern") {
                    const intern = internCard(teamMember);
                    cards.push(intern);
                }
            
            
            }

   const cardGeneration = pageData(cards);
   return cardGeneration;


}


module.exports = generatePage;