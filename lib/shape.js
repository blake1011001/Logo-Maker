class Shape {
    constructor(text, textColor, shapeColor) {
        this.text = text;
        this.textColor = textColor;
        this.shapeColor = shapeColor
    }
}
class Circle extends Shape {
    constructor(text, textColor, shapeColor) {
        super(text, textColor, shapeColor);
    }
    renderShapes() {
        return `<circle cx="150" cy="100" r="80" fill="${this.shapeColor}" />`;
    }
    renderText() {
        if (this.text.length > 3) {
            throw new Error("Please use no more than 3 characters");
        }
        return `<text x="150" y="123" font-size="60" text-anchor="middle" fill="${this.textColor}">${this.text}</text>`;
    }
    renderSVG() {
        return `<svg version="1.1" width="300" height="200" xmlns="http://www.w3.org/2000/svg">${this.renderShapes()}${this.renderText()}</svg>`;
    }
}
class Triangle extends Shape {
    constructor(text, textColor, shapeColor) {
        super(text, textColor, shapeColor);
    }
    renderShapes() {
        return `<polygon points="150, 18 250, 180 56, 182" fill="${this.shapeColor}" />`;
    }
    renderText() {
        if (this.text.length > 3) {
            throw new Error("No more than 3 characters");
        }
        return `<text x="150" y="150" font-size="40" text-anchor="middle" fill="${this.textColor}">${this.text}</text>`;
    }
    
    renderSVG() {
        return `<svg version="1.1" width="300" height="200" xmlns="http://www.w3.org/2000/svg">${this.renderShapes()}${this.renderText()}</svg>`;
    }
}

class Square extends Shape {
    constructor(text, textColor, shapeColor) {
        super(text, textColor, shapeColor);
    }
    renderShapes() {
        return `<rect x="90" y="40" width="120" height="120" fill="${this.shapeColor}" />`
    }
    renderText() {
        if (this.text.length > 3) {
            throw new Error("Please use no more than 3 characters");
        }
        return `<text x="150" y="123" font-size="60" text-anchor="middle" fill="${this.textColor}">${this.text}</text>`;
    }
    renderSVG() {
        return `<svg version="1.1" width="300" height="200" xmlns="http://www.w3.org/2000/svg">${this.renderShapes()}${this.renderText()}</svg>`;
    }
}
module.exports = { Shape, Circle, Triangle, Square };