const inquirer = require('inquirer');
const fs = require('fs');
const { Shape, Circle, Triangle, Square } = require('./lib/shape');

const questions = [
    {
        type: 'input',
        name: 'text',
        message: 'Input required text (3 characters max)',
        validate: function(text) {
            if(text.length > 3){
                return "No more than 3 characters" 
            }
            return true
        }
    },
    {
        type: 'input',
        name: 'textColor',
        message: 'select a text color'
    }, {
        type: 'list',
        name: 'shape',
        message: 'Choose a shape from the following list',
        choices: [
            "Circle",
            "Triangle",
            "Square",
        ]
    },
    {
        type: 'input',
        name: 'shapeColor',
        message: 'Select a shape color'
    },

]

function init() {
    inquirer.prompt(questions)
        .then((response) => {
            return new Promise((resolve, reject) => {
                if (response.shape === 'Circle') {
                    let svglogo = new Circle(response.text, response.textColor, response.shapeColor).renderSVG()
                    resolve(svglogo);
                } else if (response.shape === 'Triangle') {
                    let svglogo = new Triangle(response.text, response.textColor, response.shapeColor).renderSVG();
                    resolve(svglogo);
                } else {
                    let svglogo = new Square(response.text, response.textColor, response.shapeColor).renderSVG()
                    resolve(svglogo)
                }
            })
        })
        .then((svglogo) => fs.writeFile('./examples/logo.svg', svglogo, (err) =>
            err ? console.log(err) : console.log('Generated logo.svg into examples folder'))
        )
}


init();