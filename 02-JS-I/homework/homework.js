// En estas primeras 6 preguntas, reemplaza `null` por la respuesta

// Crea una variable "string", puede contener lo que quieras:
const nuevaString = 'hola';

// Crea una variable numérica, puede ser cualquier número:
const nuevoNum = 2;

// Crea una variable booleana:
const nuevoBool = true;

// Resuelve el siguiente problema matemático:
const nuevaResta = 10 - 5 === 5;

// Resuelve el siguiente problema matemático:
const nuevaMultiplicacion = 10 * 4 === 40 ;

// Resuelve el siguiente problema matemático:
const nuevoModulo = 21 % 5 === 1.05;


// En los próximos 22 problemas, deberás completar la función.
// Todo tu código irá dentro de las llaves de la función.
// Asegúrate que usas "return" cuando la consola te lo pida.
// Pista: "console.log()" NO fucionará.
// No cambies los nombres de las funciones.

function devolverString(str) {
  console.log("hey") 

  // "Return" la string provista: str
  // Tu código:
  
} 

function suma(x, y) { 
  var suma = x + y
  return suma; 
  // "x" e "y" son números
  // Suma "x" e "y" juntos y devuelve el valor
  // Tu código:
  
}

function resta(x, y) {
  var resta = x + y
  return resta
  // Resta "y" de "x" y devuelve el valor
  // Tu código:
  
}

function multiplica(x, y) {
  var multiplica = x * y
  return multiplica
  // Multiplica "x" por "y" y devuelve el valor
  // Tu código:
  
}

function divide(x, y) {
  var divide = x / y
return divide

  // Divide "x" entre "y" y devuelve el valor
  // Tu código:
  
}

function sonIguales(x, y) { 
  if (x = y) {return true}
  return false;
   
  // Devuelve "true" si "x" e "y" son iguales
  // De lo contrario, devuelve "false"
  // Tu código:
  
}

function tienenMismaLongitud(str1, str2) { 
  if ( str1 = str2 ) { return true;}
  return false;
  // Devuelve "true" si las dos strings tienen la misma longitud
  // De lo contrario, devuelve "false"
  // Tu código:
  
}

function menosQueNoventa(num) {
  if (num < 90) {return true;}
  return false;
  // Devuelve "true" si el argumento de la función "num" es menor que noventa
  // De lo contrario, devuelve "false"
  // Tu código:
  
}

function mayorQueCincuenta(num) {
  if (num > 50) {return true;}
  return false;
  // Devuelve "true" si el argumento de la función "num" es mayor que cincuenta
  // De lo contrario, devuelve "false"
  // Tu código:
  
}

function obtenerResto(x, y) {
  var elresto = x / y
  return elresto
  // Obten el resto de la división de "x" entre "y"
  // Tu código:
  
}

function esPar(num) {
  if (num%=  0) {return true}; 
  return false; 
  // Devuelve "true" si "num" es par
  // De lo contrario, devuelve "false"
  // Tu código:
  
}

function esImpar(num) {
  if (num%=0) {return false;
    return true;
  // Devuelve "true" si "num" es impar
  // De lo contrario, devuelve "false"
  // Tu código:
  
}

function elevarAlCuadrado(num) {
  var cuadrado1 = num * num
  return cuadrado1
  }
  // Devuelve el valor de "num" elevado al cuadrado
  // ojo: No es raiz cuadrada!
  // Tu código:
  
}

function elevarAlCubo(num) {
    var cubo1 = num * num * num
  return cubo1
  // Devuelve el valor de "num" elevado al cubo
  // Tu código:
  
}
var diferenciaalcubo = cuadrado1
console.log (cuadrado1)

function elevar(num, exponent) {
  var elevar = Math.pow (num, exponent); 
  return elevar
  // Devuelve el valor de "num" elevado al exponente dado en "exponent"
  // Tu código:
  
}

function redondearNumero(num) {
var redondear = Math.round()
return redondear; 

  // Redondea "num" al entero más próximo y devuélvelo
  // Tu código:
  
}

function redondearHaciaArriba(num) {
  var redondearabajo = Math.floor()
  return redondearabajo
  // Redondea "num" hacia arriba (al próximo entero) y devuélvelo
  // Tu código:
  
}

function numeroRandom(num) {
  if ( num <=  1)
  return Math.random

  //Generar un número al azar entre 0 y 1 y devolverlo
  //Pista: investigá qué hace el método Math.random()
  
}

function esPositivo(numero) {
  if (numero < 0)
  return "esPositivo";
 else if (numero > 0)
  return "esnegativo";
  else false 
  //La función va a recibir un entero. Devuelve como resultado una cadena de texto que indica si el número es positivo o negativo. 
  //Si el número es positivo, devolver ---> "Es positivo"
  //Si el número es negativo, devolver ---> "Es negativo"
  //Si el número es 0, devuelve false
  

}
function agregarSimboloExclamacion(str) {
  console.log(str, '!');

  // Agrega un símbolo de exclamación al final de la string "str" y devuelve una nueva string
  // Ejemplo: "hello world" pasaría a ser "hello world!"
  // Tu código:

}
var minombre = `${str}!`;
agregarSimboloExclamacion(minombre)

function combinarNombres(nombre, apellido)  {
  var combinarnombree = nombre + apellido;
  console.log(combinarnombree)
  // Devuelve "nombre" y "apellido" combinados en una string y separados por un espacio.
  // Ejemplo: "Soy", "Henry" -> "Soy Henry"
  // Tu código:
  
}


function obtenerSaludo(nombre) {
 var hola = nombre
 console.log("hola, " + hola)

  // Toma la string "nombre" y concatena otras string en la cadena para que tome la siguiente forma:
  // "Martin" -> "Hola Martin!"
  // Tu código:
  
}

function obtenerAreaRectangulo(alto, ancho) {
  var triangulo  = (alto * ancho)/2
  return triangulo
  // Retornar el area de un rectángulo teniendo su altura y ancho
  // Tu código:
  
}


function retornarPerimetro(lado){

  //Escibe una función a la cual reciba el valor del lado de un cuadrado y retorne su perímetro.
  //Escribe tu código aquí
var perimetro1 = lado + 15 + 11 + 11
return perimetro1

}


function areaDelTriangulo(base, altura){
  //Desarrolle una función que calcule el área de un triángulo.
  //Escribe tu código aquí

var triangulo1 = base + altura + 15
return triangulo1
}

function deEuroAdolar(euro){
  //Supongamos que 1 euro equivale a 1.20 dólares. Escribe un programa que reciba
  //como parámetro un número de euros y calcule el cambio en dólares.
  //Escribe tu código aquí
  var eurodolar = euro * 1.20
  return eurodolar
}


function esVocal(letra){
  //Escribe una función que reciba una letra y, si es una vocal, muestre el mensaje “Es vocal”. 
  //Verificar si el usuario ingresó un string de más de un carácter, en ese caso, informarle 
  //que no se puede procesar el dato mediante el mensaje "Dato incorrecto".
  // Si no es vocal, tambien debe devolver "Dato incorrecto".
  //Escribe tu código aquí
if (letra = a, e, i, o, u)
{return "Es vocal"}
else if (letra = 1, 2, 3, 4, 5, 6, 7, 8, 9, 0, '')
{return "dato incorrecto" }
return "dato incorrecto"}

// No modificar nada debajo de esta línea
// --------------------------------

module.exports = {
  nuevaString,
  nuevoNum,
  nuevoBool,
  nuevaResta,
  nuevaMultiplicacion,
  nuevoModulo,
  devolverString,
  tienenMismaLongitud,
  sonIguales,
  menosQueNoventa,
  mayorQueCincuenta,
  suma,
  resta,
  divide,
  multiplica,
  obtenerResto,
  esPar,
  esImpar,
  elevarAlCuadrado,
  elevarAlCubo,
  elevar,
  redondearNumero,
  redondearHaciaArriba,
  numeroRandom,
  esPositivo,
  agregarSimboloExclamacion,
  combinarNombres,
  obtenerSaludo,
  obtenerAreaRectangulo,
  retornarPerimetro,
  areaDelTriangulo,
  deEuroAdolar,
  esVocal,
 cuadrado1,
 redondearabajo,
 redondear,
 diferenciaalcubo,
 diferenciaalcuadrad,
 resto,
 cubo1,
 cuadrado1,
 triangulo,
 perimetro1,
 eurodolar,
 triangulo1
 }

