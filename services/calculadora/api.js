import {CalculadoraModel} from './model';

const calculadora = (app, prefix) => {
    const calculadora = CalculadoraModel();

    app.get(prefix + "/sumar", (req, res) => {
        res.send("Resultado: " + calculadora.sumar(parseInt(req.query.a), parseInt(req.query.b)));
    }) 

    app.get(prefix + "/restar", (req, res) => {
        res.send("Resultado: " + calculadora.restar(parseInt(req.query.a), parseInt(req.query.b)));
    }) 

    app.get(prefix + "/multiplicar", (req, res) => {
        res.send("Resultado: " + calculadora.multiplicar(parseInt(req.query.a), parseInt(req.query.b)));
    }) 
    app.get(prefix + "/dividir", (req, res) => {
        res.send("Resultado: " + calculadora.dividir(parseInt(req.query.a), parseInt(req.query.b)));
    }) 

};

export {calculadora};