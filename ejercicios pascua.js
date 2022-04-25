// 1. bucles
// Haz un bucle que muestre por consola los números del 4 al 9 inclusive. Utilizad el bucle for.

// console.log ("ejercicio1")
for (let numero = 4; numero < 10; numero++) {
  // console.log (numero)
}

// Haz un bucle que muestre por consola los impares del 3 al 17 inclusive. Utilizad el bucle for.

// console.log ("ejercicio2")
for (let numero = 3; numero <= 17; numero++) {
  if (numero % 2 !== 0) {
    // console.log(numero)
  }
}

// array ejercicios
let gente = [
  {
    nombre: "Jamiro",
    edad: 45,
  },
  {
    nombre: "Juan",
    edad: 35,
  },
  {
    nombre: "Paco",
    edad: 34,
  },
  {
    nombre: "Pepe",
    edad: 14,
  },
  {
    nombre: "Pilar",
    edad: 24,
  },
  {
    nombre: "Laura",
    edad: 24,
  },
  {
    nombre: "Jenny",
    edad: 10,
  },
];

//   Crea un array con la gente mayor de 25 años y muéstralo por consola. Sin utilizar el método filter de los arrays. Utilizad el bucle for of.

let mayores = [];
for (let adults of gente) {
  if (adults.edad > 25) {
    mayores.push(adults);
  }
}
// console.log(mayores)

// Crea un array con la gente que empieza por J. Sin utilizar el método filter de los arrays. Utilizad el bucle for of y muéstralo por consola.

let genteJ = [];
for (let jota of gente) {
  if (jota.nombre.startsWith("J")) {
    genteJ.push(jota);
  }
}

// console.log (genteJ)

// Crea un array con la gente que su nombre tiene 4 letras. Sin utilizar el método filter de los arrays y muéstralo por consola.

let cuatroletras = [];
for (let letras of gente) {
  if (letras.nombre.length === 4) {
    cuatroletras.push(letras);
  }
}
// console.log (cuatroletras)

// Crea un array con la gente que su nombre empieza por J y sean menores de 40 años. Sin utilizar el método filter de los arrays y muéstralo por consola.

let jcuarenta = [];
for (let mix of gente) {
  if (mix.nombre.startsWith("J") && mix.edad < 40) {
    jcuarenta.push(mix);
  }
}
// console.log(jcuarenta);

//  2.Objetos
//  Crea un objeto en la variable ordenador de tal modo que el siguiente código no muestre por consola 'suspendes'

ordenador = {
  marca: "La pava",
  tipo: "portátil",
  perifericos: ["", "touchPad"],
  almacenamiento: {
    discos: [, "HDD"],
    maestro: 0,
  },
};

// TEST 1
if (typeof ordenador === "object") {
  console.log("apruebas");
} else {
  console.log("suspendes");
}
// TEST 2
if (ordenador.marca === "La pava") {
  console.log("apruebas");
} else {
  console.log("suspendes");
}
// TEST 3
if (ordenador.tipo === "portátil") {
  console.log("apruebas");
} else {
  console.log("suspendes");
}
// TEST 4
if (ordenador.perifericos[1] === "touchPad") {
  console.log("apruebas");
} else {
  console.log("suspendes");
}
// TEST 5
if (ordenador["almacenamiento"]["discos"][1] === "HDD") {
  console.log("apruebas");
} else {
  console.log("suspendes");
}
// TEST 6
if (ordenador.almacenamiento.maestro === 0) {
  console.log("apruebas");
} else {
  console.log("suspendes");
}

// Crea un objeto en la variable llamada obj de tal modo que el siguiente código no muestre por consola 'suspendes'

let obj = {
  a: {
    b: true,
    c: [0, 13],
  },
  d: 7,
  f: "mono",
};

// TEST 1
if (typeof obj === "object") {
  console.log("apruebas");
} else {
  console.log("suspendes");
}

// TEST 2
if (typeof obj.a.b === "boolean") {
  console.log("apruebas");
} else {
  console.log("suspendes");
}

// TEST 3
if (typeof obj.a.c[1] === "number") {
  console.log("apruebas");
} else {
  console.log("suspendes");
}
// TEST 4
if (typeof obj.d === "number") {
  console.log("apruebas");
} else {
  console.log("suspendes");
}
// TEST 5
if (obj.d > 4 && obj.d < 8) {
  console.log("apruebas");
} else {
  console.log("suspendes");
}
// TEST 6
if (typeof obj.f === "string") {
  console.log("apruebas");
} else {
  console.log("suspendes");
}
// TEST 7
if (obj.f.length === 4) {
  console.log("apruebas");
} else {
  console.log("suspendes");
}

// Crea un array en la variable llamada arr de tal modo que el siguiente código no muestre por consola 'suspendes'

console.log("ejercicio array apruebas");

arr = [
  { name: "pepito", age: 25 },
  { name: "pepito", age: 22 },
  { name: "Jamon", age: 12 },
];

// TEST 1
if (typeof arr === "object" && arr.length >= 0) {
  console.log("apruebas");
} else {
  console.log("suspendes");
}
// TEST 2
if (typeof arr[0] === "object") {
  console.log("apruebas");
} else {
  console.log("suspendes");
}
// TEST 3
if (typeof arr[1] === "object") {
  console.log("apruebas");
} else {
  console.log("suspendes");
}
// TEST 4
if (typeof arr[2] === "object") {
  console.log("apruebas");
} else {
  console.log("suspendes");
}
// TEST 5
if (arr.length === 3) {
  console.log("apruebas");
} else {
  console.log("suspendes");
}
// TEST 6
if (arr[0].name === arr[1].name) {
  console.log("apruebas");
} else {
  console.log("suspendes");
}

// TEST 6
if (arr[1].name === "pepito") {
  console.log("apruebas");
} else {
  console.log("suspendes");
}

// TEST 7
if (arr[1].age > arr[2].age) {
  console.log("apruebas");
} else {
  console.log("suspendes");
}
// TEST 8
if (arr[0].age === 25) {
  console.log("apruebas");
} else {
  console.log("suspendes");
}
// TEST 9
if (typeof arr[2].name === "string") {
  console.log("apruebas");
} else {
  console.log("suspendes");
}

// TEST 10
if (arr[2].name[0] === "J") {
  console.log("apruebas");
} else {
  console.log("suspendes");
}

// 3.Funciones

// Crea la función convierteString debe recibir un tipo number y devolver el número como string .
// Si la función no recibe un dato tipo number debe devolver el string 'Debo ser ejecutada con un número'

function convierteString(number) {
  if (typeof number !== "number") {
    return "Debo ser ejecutado como un numero";
  } else {
    return number.toString();
  }
}
console.log(typeof convierteString(22));

//       Crea la función caracterInicial  debe recibir un tipo string y devolver un string con el primer carácter.
// Si la función no recibe un dato tipo string debe devolver el string 'Debo ser ejecutada con un string'.
// Si recibe un string vacío debe devolver 'Debo ser ejecutada con un string no vacío'

function caracterinicial(recibir) {
  if (typeof recibir !== "string") {
    return "Debo ser ejecutada con un string";
  } else if (recibir.length === 0) {
    return "Debo ser ejecutada con un string no vacio";
  } else {
    return recibir[0];
  }
}
console.log(caracterinicial("Gato"));

// Crea la función ultimoCaracter debe recibir un tipo string y devolver un string con el último carácter.
// Si la función no recibe un dato tipo string debe devolver el string 'Debo ser ejecutada con un string'.
// Si recibe un string vacío debe devolver 'Debo ser ejecutada con un string no vacío'

function ultimoCaracter(recibir) {
  if (typeof recibir !== "string") {
    return "Debo ser ejecutada con un string";
  } else if (recibir.length === 0) {
    return "Debo ser ejecutada con un string no vacio";
  } else {
    return recibir[recibir.length - 1];
  }
}
console.log(ultimoCaracter("Caballo"));

//  Crea la función cuentaCaracteres debe recibir un tipo string y devolver un number con el número de carácteres
// Si la función no recibe un dato tipo string debe devolver el string 'Debo ser ejecutada con un string'

function cuentaCaracter(recibir) {
  if (typeof recibir !== "string") {
    return "Debo ser ejecutada con un string";
  } else if (recibir.length === 0) {
    return "Debo ser ejecutada con un string no vacio";
  } else {
    return recibir.length;
  }
}
console.log(cuentaCaracter("Caballo"));

// Crea la función getCiudadesOrdenada. La función recibirá una cadena de texto de ciudades separadas por comas y devolverá un array de ciudades ordenadas alfabéticamente si la función no recibe una cadena de texto o recibe una cadena de texto sin comas debe devolver 'no es un formato correcto'
console.log("---------ciudades-----------");

const ciudades = "Valencia, Barcelona, Cuenca, Oviedo";

function getCiudadesOrdenada(ordenciudades) {
  return ordenciudades.split(",").sort();
}
console.log(getCiudadesOrdenada(ciudades));

// Un palíndromo es una palabra que se escribe igual del derecho que del revés por ejemplo orejero, rallar o somos.  Crea la función esPalindromo que recibirá una cadena de texto y deberá devolver si es un palíndromo o no.
// Si la función no recibe una cadena de texto o está vacía 'no es un formato correcto'

console.log("-----------Palindromo-----------");

function esPalindromo(cadena) {
  if (typeof cadena !== "string") {
    return "Formato incorrecto";
  } else if (cadena.length === 0) {
    return "Formato incorrecto";
  } else {
    girar = cadena.split("").reverse("").join("");
    return cadena === girar ? "es palindromo" : "no es palindromo";

    // operador condicional ternario---- Si condition es true, el operador tiene el valor de val1. De lo contrario, tiene el valor de val2. Puedes utilizar el operador condicional en cualquier lugar donde normalmente utilizas un operador estándar.
  }
}
console.log(esPalindromo("oso"));

// Crea la función getPrecioMostrar para que devuelva una cadena de texto con formato precio con dos decimales. Para 2 debería devolver 2.00 €.
// Si la función no recibe un número debería devolver devolver 'no es un formato correcto'

console.log("-----------precio 2.00-------------");

function getPrecioMostrar(money) {
  if (typeof money === "number") {
    return money.toFixed(2);
  } else {
    return "tienes que poner un numero";
  }
}

console.log(getPrecioMostrar(82.5884568));

// Crea la función division que acepte como argumento dos números y devuelva el resultado de su división

console.log("---division---");

function division(num1, num2) {
  return num1 / num2;
}

console.log(division(70, 7));

// Crea la función esPar que acepte como argumento un número y devuelva true si es par y false si es impar

console.log("-------par-impar------");

function esPar(num) {
  if (num % 2 === 0) {
    return "es par";
  } else {
    return "es impar";
  }
}

console.log(esPar(87));

// % Operador binario. Devuelve el resto entero de dividir los dos operandos.

// Crear la función ordenarArray2 que acepta como argumento un array de números y devuelva un array ordenado de mayor a menor

console.log("-------array ordenado-------");

const array = [20, 1, 8, 16, 6, 32, 25];

function ordenarArray(elArray) {
  elArray.sort(function (a, b) {
    return a - b;
  });
  {
    return elArray;
  }
}

console.log(ordenarArray(array));

// El método sort() puede ordenar valores negativos, cero y positivos en el orden correcto. Cuando compara dos valores, los envía a nuestra función de comparación y luego ordena los valores de acuerdo al resultado devuelto.

// Si el resultado es negativo, a se ordena antes que b.
// Si el resultado es positivo, b se ordena antes de a.
// Si el resultado es 0, nada cambia.
/* Todo lo que necesitamos es usar la función de comparación dentro del método sort*/

// Crear la función obtenerImpares que acepta como argumento un array de números y devuelva un array con los elementos impares

console.log("----------------sacar impares---------------");

let numericos = [];

function obtenerImpares(arrimpar) {
  for (let n = 0; n < array.length; n++) {
    if (arrimpar[n] % 2 !== 0) {
      numericos.push(arrimpar[n]);
    }
  }
  return numericos;
}

console.log(obtenerImpares(array));

// Crear la función sumarArray que acepte como argumento un array numérico y devuelva la suma de los números en el array Array: [1, 2, 3] resultado: 6

console.log("----------------sumar array---------------");

let lasuma = 0;
function sumarArray(arrsumado) {
  for (let n = 0; n < array.length; n++) {
    lasuma += array[n];
  }
  return lasuma;
}
console.log(sumarArray(lasuma));

// Crear la función multiplicarArray que acepte como argumento un array numérico y devuelva la multiplicación de los números en el array Array: [2, 3, 4] resultado: 24

console.log("----------------multiplica array---------------");

const newArray = [2, 3, 4];

let arrayMultiplicado = 1;
function multiplicarArray(arrMulti) {
  for (let n = 0; n < newArray.length; n++) {
    arrayMultiplicado *= newArray[n];
  }
  return arrayMultiplicado;
}
console.log(multiplicarArray(arrayMultiplicado));

//Crea una función que dada una array de números, devuelve una nueva array que tenga solo los números que son 5 o más. Ejemplo entrada [3, 6, 8, 2] salida [6, 8]

console.log("----------------mayor de 5---------------");

const sup5 = [1, 2, 3, 5, 8, 11, 21];

let mayorDe5 = [];

function cincoSuperior(masD5) {
  for (let n = 0; n < sup5.length; n++) {
    if (masD5[n] >= 5) {
      mayorDe5.push(masD5[n]);
    }
  }
  return mayorDe5;
}

console.log(cincoSuperior(sup5));

// Crea una aplicación que nos pida un número por prompt y con un método se lo pasamos por parámetro para que nos indique si es o no un número primo, debe devolver true si es primo sino false.

console.log("--------dame un numero-----------");

// const unPrompt = prompt("Dame un número")

function numPrimo(valorNum) {
  for (let n = 2; n < valorNum; n++) {
    if (valorNum % n == 0) {
      return false;
    }
  }
  return true;
}

// console.log(numPrimo(unPrompt));

// Crea una función checkPasswordcon una variable tipo String que contenga una contraseña cualquiera. Después se te pedirá que introduzcas la contraseña (usando prompt), con 3 intentos. Cuando aciertes ya no pedirá más la contraseña y mostrará un mensaje diciendo “Enhorabuena”(ej.un alert). Piensa bien en la condición de salida (3 intentos y si acierta sale, aunque le queden intentos).

console.log("-----------contraseña------------")

function checkPassword() {
  let intentos = 0;
  const password = "adolfo";
  let passwordCorrecto = false;
  while (intentos < 3 && passwordCorrecto === false) {
    const passwordIn = prompt("introduce contraseña correcta");
    if (passwordIn === password) {
      alert("contraseña correcta");
      passwordCorrecto = true;
    } else {
      intentos++;
      alert(`has fallado te quedan ${3 - intentos} intentos`);
       
    }
  }
}    
//  checkPassword()


// Crea una función llamada CalculadoraInversa, nos pedirá 2 operandos (int) y un signo aritmético (String), según este último se realizará la operación correspondiente. Al final mostrará el resultado en un cuadro de diálogo. Los signos aritméticos disponibles son:
// +: suma los dos operadores.
// -: resta los operandos.
// *: multiplica los operandos.
// /: divide los operandos, este debe dar un resultado con decimales (double)
// ^: 1o operando como base y 2o como exponente.
// %: módulo, resto de la división entre operando1 y operando2.

function calculadoraInversa(int1, int2, string) {
  switch (string) {
    case "+":
      console.log(int1 + int2);
      break;
    case "-":
      console.log(int1 - int2);
      break;
    case "*":
      console.log(int1 * int2);
      break;
    case "/":
      console.log(int1 / int2);
      break;
    case "^":
      console.log(int1 ** int2);
      break;
    case "%":
      console.log(int1 % int2);
      break;
  }
}
calculadoraInversa(5, 7, "*");
