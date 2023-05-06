const inquirer = require('inquirer');
const fs = require('fs');


inquirer
  .prompt([
    {
      type: 'input',
      name: 'Text',
      message: 'Enter up to three characters',
    },
    {
      type: 'list',
      name: 'Shape',
      message: 'Choose a shape',
      choices: [
        'Circle', 'Triangle', 'Square',
      ]
    },
    {
      type: 'list',
      name: 'Shape color',
      message: 'Pick a color for the shapes',
      choices: [
        'Blue', 'Red', 'Purple'
      ]
    },
])
// .then((answers) => {
//   // const htmlPageContent = generateHTML(answers);

//   fs.writeFile('index.html', htmlPageContent, (err) =>
//     err ? console.log(err) : console.log('Successfully created index.html!')
//   );
// });

.then ((response) => {
  console.log(response);
  fs.writeFile('response.txt', JSON.stringify(response,null, '\t'), (err) =>
  err ? console.log(err): console.log ('success!'))
});