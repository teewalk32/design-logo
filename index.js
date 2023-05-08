const inquirer = require('inquirer');
const fs = require('fs');
const {Circle, Square, Triangle} = require('./classes/shape');


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
      name: 'Color',
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
let shape ; 
switch (response.Shape) {
  case "Circle":
  shape = new Circle (response.Color)
  break;
  case "Triangle":
  shape = new Triangle (response.Color)
  break;
  case "Square":
  shape = new Square (response.Color)
  break;
  default: console.log ("please pick a shape!")

}
console.log(shape)
let template = `<svg width="300" height="200"> 
${shape.render()} 
</svg>`
  console.log(response);
  fs.writeFile('logo.svg', template, (err) =>
  err ? console.log(err): console.log ('success!'))
});