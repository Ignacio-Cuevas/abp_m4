# ABP - Módulo 4: Calculadora con Manejo de Errores

🔗 **[Ver proyecto desplegado en GitHub Pages](https://ignacio-cuevas.github.io/abp_m4/)**

## Descripción General

Proyecto de aprendizaje basado en problemas (ABP) del **Módulo 4**, centrado en el uso de **clases**, **métodos estáticos**, **módulos ES6** y **manejo de excepciones** (`try-catch`) en JavaScript. La aplicación implementa una clase `Calculadora` reutilizable que se utiliza para realizar operaciones aritméticas sobre notas académicas y sueldos de empleados.

---

## Estructura del Proyecto

```
abp-m4/
├── index.html              # Página HTML que carga el script principal
├── index.js                # Archivo principal con la lógica de la aplicación
├── utilities/
│   └── Calculadora.js      # Clase utilitaria con métodos de cálculo
└── README.md               # Documentación del proyecto
```

---

## Archivos y Funcionamiento

### 1. `index.html`

Archivo HTML mínimo que actúa como punto de entrada. Su única función es cargar el script `index.js` como **módulo ES6** (`type="module"`), lo que permite el uso de `import`/`export` entre archivos.

```html
<script type="module" src="./index.js"></script>
```

> **Nota:** Toda la salida del programa se visualiza en la **consola del navegador** (DevTools → Console).

---

### 2. `utilities/Calculadora.js`

Contiene la clase `Calculadora`, exportada por defecto. Todos sus métodos son **estáticos**, por lo que se invocan directamente desde la clase sin necesidad de crear una instancia.

#### Métodos

| Método | Parámetros | Retorno | Descripción |
|---|---|---|---|
| `sumar(...valores)` | Números (rest params) | `number` | Suma todos los valores recibidos. Redondea a 2 decimales. |
| `resta(valor1, valor2)` | Dos números | `number` | Resta `valor2` de `valor1`. |
| `promedio(...valores)` | Números (rest params) | `number` | Calcula el promedio aritmético de los valores. Internamente usa `sumar()`. |

#### Validaciones

Cada método incorpora validaciones que **lanzan excepciones** si los datos no son válidos:

- **`sumar()`**: Lanza `Error` si no recibe valores y `TypeError` si algún valor no es de tipo `number` o es `NaN`.
- **`resta()`**: Lanza `TypeError` si alguno de los dos parámetros no es de tipo `number`.
- **`promedio()`**: Lanza `Error` si no recibe valores. La validación de tipos se delega al método `sumar()`.

```javascript
// Ejemplo de validación
Calculadora.sumar("a", 2); // → TypeError: todos los valores deben ser números.
Calculadora.resta(10, "5"); // → TypeError: ambos valores deben ser números.
```

---

### 3. `index.js`

Archivo principal que importa la clase `Calculadora` y demuestra su uso en tres escenarios:

#### Escenario A — Manejo de errores intencional

Se provoca un error a propósito pasando un `string` al método `resta()`. El bloque `try-catch` captura la excepción y la muestra por consola con `console.error()`.

```javascript
try {
    const resultado = Calculadora.resta(10, "5"); // ← Error intencional
} catch (error) {
    console.error("Error al restar:", error.message);
}
```

#### Escenario B — Cálculos con notas académicas

Se define un arreglo de notas (`[5.6, 7.0, 8.2, 4.5, 5.6]`) y se calculan:

- **Suma** de todas las notas → `Calculadora.sumar(...notas)`
- **Resta** entre dos valores → `Calculadora.resta(15, 6)`
- **Promedio** de las notas → `Calculadora.promedio(...notas)`

Todas las operaciones están envueltas en un `try-catch`.

#### Escenario C — Cálculos con sueldos de empleados

Se define un arreglo de objetos `empleados`, cada uno con `id`, `nombre` y `sueldo`. A partir de ellos se realizan las siguientes operaciones:

1. **Extracción de sueldos**: Se usa `map()` para obtener un arreglo solo con los valores numéricos de los sueldos.
2. **Formateo de moneda**: Se usa `map()` con `toLocaleString("es-CL", { style: "currency", currency: "CLP" })` para mostrar los sueldos en formato de pesos chilenos.
3. **Total de sueldos**: Se calcula con `Calculadora.sumar()` y se formatea como moneda.
4. **Promedio de sueldos**: Se calcula con `Calculadora.promedio()` y se formatea como moneda.
5. **Sueldo mayor**: Se obtiene con `reduce()` comparando valores.
6. **Sueldo menor**: Se obtiene con `reduce()` comparando valores.

---

## Conceptos y Técnicas Utilizadas

| Concepto | Uso en el proyecto |
|---|---|
| **Clases ES6** | Clase `Calculadora` con métodos estáticos |
| **Módulos ES6** | `import` / `export default` entre archivos |
| **Rest Parameters (`...`)** | `sumar(...valores)` y `promedio(...valores)` |
| **Spread Operator (`...`)** | `Calculadora.sumar(...notas)` para expandir arreglos |
| **`try-catch`** | Manejo de excepciones en cada bloque de operaciones |
| **`throw new Error / TypeError`** | Lanzamiento de excepciones personalizadas en validaciones |
| **`Array.map()`** | Transformación de arreglos (sueldos numéricos y formateados) |
| **`Array.reduce()`** | Obtención del sueldo mayor y menor |
| **`Array.every()`** | Validación de que todos los elementos son numéricos |
| **`toLocaleString()`** | Formateo de números como moneda chilena (CLP) |
| **`Math.fround()` + `toFixed()`** | Control de precisión en operaciones con decimales |
| **Numeric Separators (`_`)** | Mejora de legibilidad en valores numéricos grandes (`850_000`) |

---

## Cómo Ejecutar

1. Abrir `index.html` en un navegador (se recomienda usar una extensión como **Live Server** en VS Code).
2. Abrir la **consola del navegador** (`F12` → pestaña **Console**).
3. Observar los resultados de las operaciones y los mensajes de error controlados.

---

## Ejemplo de Salida en Consola

```
Error al restar: Calculadora.resta: ambos valores deben ser números.
Suma:  30.9
Resta:  9
Promedio:  6.18
Sueldos (números):  [850000, 650000, 1000000, 350000, 450000]
Sueldos (formato):  [{nombre: "Empleado 1", sueldo: "$850.000"}, ...]
Total sueldos:  $3.300.000
Promedio sueldos:  $660.000
Sueldo mayor:  $1.000.000
Sueldo menor:  $350.000
```
