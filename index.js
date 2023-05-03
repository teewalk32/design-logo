const shape = new Triangle();
shape.setColor("blue");
expect(shape.render()).toEqual('<polygon points="150, 18 244, 182 56, 182" fill="blue" />');


inquirer
  .prompt([
    {
      type: 'input',
      name: 'Text',
      message: 'Enter up to three characters',
    },
    {
      type: 'input',
      name: 'Text color',
      message: 'Pick a text color',
    },
    {
      type: 'input',
      name: 'Shape',
      message: 'Choose a shape',
      choices: 'Circle, Triangle, and Square',
    },
    {
      type: 'input',
      name: 'Shape color',
      message: 'Pick a color for the shapes',
      choices: 'Blue, Red, Purple'
    },
])
.then((answers) => {
  const htmlPageContent = generateHTML(answers);

  fs.writeFile('index.html', htmlPageContent, (err) =>
    err ? console.log(err) : console.log('Successfully created index.html!')
  );
});
