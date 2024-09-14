// 1. Arreglo de números
let numeros = [2, 4, 6, 8];

//  REDUCE()
let sumaNumeros = numeros.reduce((suma, valor) => {
    return suma + valor;
});
console.log("Suma de números:", sumaNumeros); // Resultado: Suma de números: 20

// FOREACH()
let acumuladoNumeros = 0;
numeros.forEach((numero) => {
    acumuladoNumeros += numero;
});
console.log("Acumulado con forEach:", acumuladoNumeros); // Resultado: Acumulado con forEach: 20

// FILTER()
let filtradoNumeros = numeros.filter(numero => numero > 5);
console.log("Números mayores a 5:", filtradoNumeros); // Resultado: Números mayores a 5: [6, 8]

// MAP()
let mapeoNumeros = numeros.map(numero => "Número: " + numero);
console.log("Mapeo de números:", mapeoNumeros); // Resultado: Mapeo de números: ["Número: 2", "Número: 4", "Número: 6", "Número: 8"]

//---------------------------------------------------------------------------
// 2. Arreglo de nombres
let nombres = ["Carlos", "María", "Andrés", "Lucía"];

//REDUCE()
let nombresConcatenados = nombres.reduce((cadena, nombre) => {
    return cadena + nombre + " ";
}, "");
console.log("Nombres concatenados:", nombresConcatenados); // Resultado: Nombres concatenados: "Carlos María Andrés Lucía "

// FOREACH()
nombres.forEach((nombre) => {
    console.log("Nombre:", nombre); // Resultado: Nombre: Carlos, Nombre: María, Nombre: Andrés, Nombre: Lucía
});

//FILTER()
let nombresFiltrados = nombres.filter(nombre => nombre.length > 5);
console.log("Nombres con más de 5 letras:", nombresFiltrados); // Resultado: Nombres con más de 5 letras: ["Carlos", "Andrés"]

// MAP()
let nombresEnMayusculas = nombres.map(nombre => nombre.toUpperCase());
console.log("Nombres en mayúsculas:", nombresEnMayusculas); // Resultado: Nombres en mayúsculas: ["CARLOS", "MARÍA", "ANDRÉS", "LUCÍA"]

//---------------------------------------------------------------------------

// 3. Arreglo de edades
let edades = [18, 25, 30, 42, 15];

// REDUCE()
let sumaEdades = edades.reduce((total, edad) => total + edad, 0);
console.log("Suma de edades:", sumaEdades); // Resultado: Suma de edades: 130

//  FOREACH()
edades.forEach((edad) => {
    console.log("Edad:", edad); // Resultado: Edad: 18, Edad: 25, Edad: 30, Edad: 42, Edad: 15
});

// FILTER()
let mayoresDeEdad = edades.filter(edad => edad >= 18);
console.log("Mayores de edad:", mayoresDeEdad); // Resultado: Mayores de edad: [18, 25, 30, 42]

//  MAP()
let edadesEnAniosFuturos = edades.map(edad => edad + 5);
console.log("Edades en 5 años:", edadesEnAniosFuturos); // Resultado: Edades en 5 años: [23, 30, 35, 47, 20]

//---------------------------------------------------------------------------

// 4. Arreglo de precios
let precios = [10.5, 20.99, 15.3, 40.0];

// REDUCE()
let sumaPrecios = precios.reduce((total, precio) => total + precio, 0);
console.log("Suma de precios:", sumaPrecios); // Resultado: Suma de precios: 86.79

// FOREACH()
precios.forEach((precio) => {
    console.log("Precio:", precio); // Resultado: Precio: 10.5, Precio: 20.99, Precio: 15.3, Precio: 40.0
});

// FILTER()
let preciosFiltrados = precios.filter(precio => precio > 20);
console.log("Precios mayores a 20:", preciosFiltrados); // Resultado: Precios mayores a 20: [20.99, 40.0]

// MAP()
let preciosConIVA = precios.map(precio => precio * 1.19);
console.log("Precios con IVA:", preciosConIVA); // Resultado: Precios con IVA: [12.495, 24.9781, 18.207, 47.6]

//---------------------------------------------------------------------------

// 5. Arreglo de booleanos
let estados = [true, false, true, true, false];

// REDUCE()
let totalVerdaderos = estados.reduce((total, estado) => total + (estado ? 1 : 0), 0);
console.log("Total de valores verdaderos:", totalVerdaderos); // Resultado: Total de valores verdaderos: 3

// FOREACH()
estados.forEach((estado) => {
    console.log("Estado:", estado); // Resultado: Estado: true, Estado: false, Estado: true, Estado: true, Estado: false
});

// FILTER()
let estadosVerdaderos = estados.filter(estado => estado === true);
console.log("Estados verdaderos:", estadosVerdaderos); // Resultado: Estados verdaderos: [true, true, true]

// MAP()
let estadosTexto = estados.map(estado => estado ? "Verdadero" : "Falso");
console.log("Estados en texto:", estadosTexto); // Resultado: Estados en texto: ["Verdadero", "Falso", "Verdadero", "Verdadero", "Falso"]
