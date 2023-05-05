const Arithmetic = require('../arithmetic.js');



describe('Arithmetic', () => {
   
    describe('modulus', () => {
      it('should calculate 2 % 2 and return 0 as the remainder', () => {
        const total = 0;
        const arithmetic = new Arithmetic();
        expect(arithmetic.modulus(2, 2)).toEqual(total);
      });
    });
  });
  
  
  describe('Arithmetic', () => {
   
    describe('modulus', () => {
      it('should calculate 3 % 2 and return 1 as the remainder', () => {
        const total = 1;
        const arithmetic = new Arithmetic();
        expect(arithmetic.modulus(3, 2)).toEqual(total);
      });
    });
  });
  
  
  describe('Arithmetic', () => {
    
    describe('modulus', () => {
      it('should calculate 10 % 6 and return 4 as the remainder', () => {
        const total = 4;
        const arithmetic = new Arithmetic();
        expect(arithmetic.modulus(10, 6)).toEqual(total);
      });
    });
  });
  