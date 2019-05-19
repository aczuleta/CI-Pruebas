const CalculadoraModel = () => {
    function sumar(a, b){
        return a+ b;
    }

    function restar(a, b){
        return a - b;
    }

    function dividir(a, b){
        return a/b;
    }

    function multiplicar(a, b){
        return a*b;
    }
    
    return {
        sumar: sumar,
        restar: restar,
        dividir: dividir,
        multiplicar: multiplicar
    }
};

export { CalculadoraModel }