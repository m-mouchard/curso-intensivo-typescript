"use strict";
const userName = 'Bezael';
const edad = 33;
console.log(`hello world, my name is ${userName} I'm ${edad} years old`);
//Tipos básicos
let myTypeString = "Que pasa co";
let numero = 29;
let sioQueh = true;
//Arrays
let arrayNumber = [1, 2, 3];
let arrayNumber2 = [1, 2, 3]; //Misma manera de declarar un array
let arrayString = ["Pedro", "Maria", "Rodri"];
let arrayAny = []; //No es muy conveniente utilizar el valor ANY!! Ya que se pierde la robustes (y la gracia) de typescript. 
//Tipo Tuple (este también existe en python)
// Si sabemos que la variable está compuesta por varios tipos que van a ser fijos como valores de un jugador de baloncesto
let tipoTuple = ["Doncic", 18, true]; //Luca Doncic tiene el dorsal 18 y está en activo (jugando al basquet actualmente)
//Y también se puede hacer un array de tipo Tuple
let jugadoresBasquet;
jugadoresBasquet = [
    ["Lebron", 88, true],
    ["Pedro", 8, false],
    ["Lucía", 34, true],
    ["María", 10, true],
];
//Typescript también es capaz de haer inferencia de tipos. Asigna el tipo de dato en base al valor inicial que se le da a la variable
//Por eso se dice que no hace falta tipar las variables básicas como number o string.
let quePasa = "Que pasa"; //Infiere que el tipo es string
let numGrados = 32;
//UNIONS
//Composición de tipos, para trabajar con datos complejos UNIOS o GENERIC
//Con el UNIONS podemos declarar que una variable es de más de un tipo
let myVar1; //Por ejemplo para el retorno de una API esto sería útil. 
// ENUMs Los Enums son bastante valiosos para definir constantes y simplificar su uso y el código ya que luego nos sacar la posición del enum que queramos. 
var Roles;
(function (Roles) {
    Roles[Roles["Maria"] = 10] = "Maria";
    Roles[Roles["Lebron"] = 11] = "Lebron";
    Roles[Roles["Pedro"] = 12] = "Pedro";
    Roles[Roles["Perico"] = 13] = "Perico";
})(Roles || (Roles = {}));
//Constantes, es básicamente igual que el Enum
const Personas = {
    Maria: 10,
    Lebron: 11,
    Pedro: 12,
    Perico: 13,
};
console.log(Personas.Lebron);
