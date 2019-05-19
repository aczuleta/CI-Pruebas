import { CalculadoraModel } from '../../services/calculadora/model';



describe("Add functionality", () => {
    const calculadora = CalculadoraModel();

    it("calculates that x + y = z", () => {
        expect(calculadora.sumar(4, 5)).toEqual(9);
        expect(calculadora.sumar(14, -5)).toEqual(9);
    });

    it("calculates that x + y != z", () => {
        expect(calculadora.sumar(14, -5)).not.toEqual(10);
    });

    it("calculates that x - y = z", () => {
        expect(calculadora.restar(4, 4)).toEqual(0);
    });

    it("calculates that x * y = z", () => {
        expect(calculadora.multiplicar(4, 4)).toEqual(16);
    });

    it("calculates that x / y = z", () => {
        expect(calculadora.dividir(4, 4)).toEqual(1);
    });


});