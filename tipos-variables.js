// 1. Tipos primitivos vs referencia
console.log("=== TIPOS PRIMITIVOS VS REFERENCIA ===");

let numero = 12;
let copiaNumero = numero;

copiaNumero = 100;
console.log("copia número:", copiaNumero); //100
console.log("Numero original: ", numero); //12

console.log("---------REFERENCIA----------");

let array = [24, 45];
let arrayReferenciado = array;

array.push(56);

console.log("Array referenciado: ", arrayReferenciado); // [24,45,56];
console.log("Array original: ", array); // [24,45,56];

// 2. Scope y hoisting
console.log("\n=== SCOPE Y HOISTING ===");

function demostracionDeScope() {
  if (true) {
    var variableVar = "visible en la función";
    let variableLet = "Visible solo dentro del bloque";
    const variableConst =
      "Constante en este bloque, su valor no se puede reasignar";
  }

  console.log(variableVar); //imprime su valor sin problema
  // console.log(variableLet); // referenceError al encontrarse fuera del scope
  // console.log(variableConst); // referenceError al encontrase fuera del scope
}

demostracionDeScope();

// 3. Type coercion

console.log("\n=== TYPE COERCION ===");


console.log("5" + 2); //imprime "52" (concatena como si duera string)
console.log("5" - 2); // imprime 3 (convierte el string en número)
console.log("5" * 2); // imprime 10 (convierte l string en número)
console.log(true +1); // imprime true (convierte el 1 en boolean true)
console.log(false + 1); // imprime false (convierte el 1 en boolean true)

// 4/ Comparaciones
console.log("\n=== COMPARACIONES ===");

console.log(5 == "5"); // true, cohercion, permite igualdad de valor
console.log(5 === "5"); // false, no existe cohercion, comparacion estricta

console.log(0 == false); //true, cohercion, igualdad de valor
console.log(0 === false); //false, estricto, igualdad de valor pero no de tipo de dato

console.log(null == undefined); //true
console.log(null === undefined); // false


// 5. Truthy/Falsy
console.log("\n=== TRUTHY/FALSY ===");

let arrayValores = [true, false, 0, 1, "", "hola", undefined, null,{},[]]

arrayValores.forEach((valor, index) => {
  if(valor){
    console.log(`El valor en indice ${index} (${valor}) es thruty`);
}

else{
console.log(`El valor en indice ${index} (${valor}) es falsy`);
}
});


// 6. Buenas prácticas

console.log("Recomendación : Siempre usar === para evitar bugs por conversión implícita");

// Evitar var en código moderno 🚫
// Usar let para variables que pueden cambiar ✅
let contador = 1;
contador +=1;

// Usar const para valores que necesitamos no se modifiquen, ej. configuraciones

const config ={
  PORT: 3000
}

