const {Circle, Square, Triangle} = require('./shape.js');



   
    describe('circle', () => {
      test('it should be round ', () => {
        const expectedCircle = '<circle cx="150" cy="100" r="80" fill="red" />';
        const circle = new Circle();
        circle.setColor("red")
        expect(circle.render()).toEqual(expectedCircle);
      });
    });
  
  
  
   
    describe('square', () => {
      test('it should have four equal sides', () => {
        const expectedSquare = `<rect x="90" y="40" width="300" hieght="300" fill="blue" />`;
        const square = new Square();
        square.setColor("blue")
        expect(square.render()).toEqual(expectedSquare);
      });
    });
 
  
  
 
    
    describe('triangle', () => {
      test('it should have 3 points', () => {
        const expectedTriangle = `<polygon points="150, 18 244, 182 56, 182" fill="purple" />`;
        const triangle = new Triangle();
        triangle.setColor("purple")
        expect(triangle.render()).toEqual(expectedTriangle);
      });
    });
  