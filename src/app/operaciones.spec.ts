import { Operaciones } from './operaciones';

describe('Test para operaciones', () => {
  describe('Test para sumar y restar', ()=>{
    it("Suma 2 números", ()=>{
      let operaciones = new Operaciones();
      expect(operaciones.sumar(3,5)).toEqual(8);
    });
    it('Resta 2 números', () => {
      let operaciones = new Operaciones();
      expect(operaciones.restar(9, 5)).toEqual(4);
    });
    it('Multiplica 2 números', () => {
      let operaciones = new Operaciones();
      expect(operaciones.multiplicar(5, 8)).toEqual(40);
    });
    it('Divide 2 números', () => {
      let operaciones = new Operaciones();
      expect(operaciones.dividir(12, 4)).toEqual(3);
    });
  });
});
