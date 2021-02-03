
function mostrar()
{
var anchoString;
var anchoParseado;
var largoString;
var largoParseado;
var resultado;

anchoString= prompt ("Ingrese ancho");
anchoParseado= parseInt (anchoString);

largoString= prompt ("Ingrese largo");
largoParseado= parseInt(largoString);

resultado= 2*(anchoParseado+largoParseado);

alert("El perímetro del rectángulo es "+ resultado);



}
