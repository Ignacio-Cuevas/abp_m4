import Calculadora from '/abp_m4/utilities/Calculadora.js';

// ========== EJEMPLO PARA PROVOCAR Y CONTROLAR EL ERROR ==========
try {
    // Operación incorrecta: segundo valor no numérico
    const resultado = Calculadora.resta(10, "5");
    console.log("Resultado resta: ", resultado);
} catch (error) {
    // Aquí controlamos la excepción
    console.error("Error al restar:", error.message);
}

// ========== NOTAS ==========
let notas = [5.6, 7.0, 8.2, 4.5, 5.6];

// try-catch para manejar errores

try {
    console.log("Suma: ", Calculadora.sumar(...notas));
    console.log("Resta: ", Calculadora.resta(15, 6));
    console.log("Promedio: ", Calculadora.promedio(...notas));
} catch (error) {
    console.error("Error en cálculos de notas:", error.message);
}


// ========== LISTA DE EMPLEADOS ==========
let empleados = [
    { id: 1, nombre: "Empleado 1", sueldo: 850_000 },
    { id: 2, nombre: "Empleado 2", sueldo: 650_000 },
    { id: 3, nombre: "Empleado 3", sueldo: 1_000_000 },
    { id: 4, nombre: "Empleado 4", sueldo: 350_000 },
    { id: 5, nombre: "Empleado 5", sueldo: 450_000 }
];

// Array de sueldos como números
let sueldosNumeros = empleados.map(empleado => empleado.sueldo);

// Array de sueldos formateados como moneda
let sueldosFormateados = empleados.map(empleado => {
    return {
        nombre: empleado.nombre,
        sueldo: empleado.sueldo.toLocaleString("es-CL", {
            style: "currency",
            currency: "CLP"
        })
    };
});

console.log("Sueldos (números): ", sueldosNumeros);
console.log("Sueldos (formato): ", sueldosFormateados);

// try-catch para manejar errores
try {
    // Total de sueldos usando la Calculadora
    let totalSueldos = Calculadora.sumar(...sueldosNumeros);
    console.log(
        "Total sueldos: ",
        totalSueldos.toLocaleString("es-CL", {
            style: "currency",
            currency: "CLP"
        })
    );

    // Promedio de sueldos usando la Calculadora
    let promedioSueldos = Calculadora.promedio(...sueldosNumeros);
    console.log(
        "Promedio sueldos: ",
        promedioSueldos.toLocaleString("es-CL", {
            style: "currency",
            currency: "CLP"
        })
    );
} catch (error) {
    console.error("Error en cálculos de sueldos:", error.message);
}

// Sueldo mayor (reduce normal)
let sueldoMayor = sueldosNumeros.reduce((a, b) => a > b ? a : b);
console.log(
    "Sueldo mayor: ",
    sueldoMayor.toLocaleString("es-CL", {
        style: "currency",
        currency: "CLP"
    })
);

// Sueldo menor
let sueldoMenor = sueldosNumeros.reduce((a, b) => a < b ? a : b);
console.log(
    "Sueldo menor: ",
    sueldoMenor.toLocaleString("es-CL", {
        style: "currency",
        currency: "CLP"
    })
);

