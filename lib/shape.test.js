// importing shape classes
const { Shape, Circle, Triangle, Square} = require('./shape');
// running circle test that expected SVG is going to be a circle with red text and white background
describe('Circle',()=>{
    describe('renderSVG()', ()=>{
        it('Should return a SVG string for the corresponding SVG file with the given shape color.', () => {
            const circle = new Circle('CAS', 'red','white')
            const expectedSVG = `<svg version="1.1" width="300" height="200" xmlns="http://www.w3.org/2000/svg"><circle cx="150" cy="100" r="80" fill="white" /><text x="150" y="123" font-size="60" text-anchor="middle" fill="red">CAS</text></svg>`;
            expect(circle.renderSVG()).toEqual(expectedSVG)
        });
    });
});

describe('Triangle',()=>{
    // running triangle test that expected SVG is going to be a circle with red text and white background
    describe('renderSVG()', ()=>{
        it('Should return a SVG string for the corresponding SVG file with the given shape color.', () => {
            const triangle = new Triangle('CAS', 'red','white')
            const expectedSVG = `<svg version="1.1" width="300" height="200" xmlns="http://www.w3.org/2000/svg"><polygon points="150, 18 250, 180 56, 182" fill="white" /><text x="150" y="150" font-size="40" text-anchor="middle" fill="red">CAS</text></svg>`;
            expect(triangle.renderSVG()).toEqual(expectedSVG)
        });
    });
});

describe('Square',()=>{
    // running square test that expected SVG is going to be a circle with red text and white background
    describe('renderSVG()', ()=>{
        it('Should return a SVG string for the corresponding SVG file with the given shape color.', () => {
            const square = new Square('CAS', 'red','white')
            const expectedSVG = `<svg version="1.1" width="300" height="200" xmlns="http://www.w3.org/2000/svg"><rect x="90" y="40" width="120" height="120" fill="white" /><text x="150" y="123" font-size="60" text-anchor="middle" fill="red">CAS</text></svg>`;
            expect(square.renderSVG()).toEqual(expectedSVG)
        });
    });
});