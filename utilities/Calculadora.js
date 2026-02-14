// ========== CLASE CALCULADORA ==========
class Calculadora {

    static sumar(...valores) {
        // Validaciones básicas
        if (valores.length === 0) {
            throw new Error("Calculadora.sumar: no se recibieron valores.");
        } else if (!valores.every(v => typeof v === "number" && !Number.isNaN(v))) {
            throw new TypeError("Calculadora.sumar: todos los valores deben ser números.");
        } else {
            let suma = valores.reduce((a, b) => a + b, 0);
            return Number(Math.fround(suma).toFixed(2));
        }
    }

    static resta(valor1, valor2) {
        if (typeof valor1 !== "number" || typeof valor2 !== "number") {
            throw new TypeError("Calculadora.resta: ambos valores deben ser números.");
        } else {
            return valor1 - valor2;
        }
    }

    static promedio(...valores) {
        if (valores.length === 0) {
            throw new Error("Calculadora.promedio: no se recibieron valores.");
        } else {
            let suma = this.sumar(...valores); // ya valida tipos
            return Number(Math.fround(suma / valores.length).toFixed(2));
        }
    }
}

export default Calculadora;

