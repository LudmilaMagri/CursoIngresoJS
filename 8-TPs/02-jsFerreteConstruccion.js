/*2.	Para el departamento de Construcción:
A.	 mostrar la cantidad de alambre a comprar  si se ingresara el largo y el ancho de un terreno rectangular y se debe alambra con tres hilos de alambre.
B.	mostrar la cantidad de alambre a comprar  si se ingresara el radio  de un terreno circular y se debe alambra con tres hilos de alambre.
C.	Para hacer un contrapiso de 1m x 1m se necesitan 2 bolsas de cemento y 3 de cal, debemos mostrar cuantas bolsas se necesitan de cada uno para las medidas que nos ingresen.
*/

function Rectangulo () 
{
    var largoString;
    var largoParseado;
    var anchoString;
    var anchoParseado;
    var perimetro;
    var alambre=3;

    largoString=(txtIdLargo.value);
    largoParseado= parseInt(largoString);
    anchoString=(txtIdAncho.value);
    anchoParseado=parseInt(anchoString);

    perimetro= (largoParseado+anchoParseado)*2;
    alambreTotal=perimetro*alambre;

    alert("Ustede debe comprar "+alambreTotal+ " m de alambre");

}
function Circulo () 
{
    var radioString;
    var radioParseado;
    var perimetro;
    var alambre=3;
    var alambreTotal;
    const PI= Math.PI;

    radioString= (txtIdRadio.value);
    radioParseado=parseInt(radioString);

    perimetro=2*PI*radioParseado;

    alambreTotal= perimetro*alambre;

    alert("Ustede debe comprar "+alambreTotal.toFixed(2)+ " m de alambre");
}
function Materiales () 
{
    var largoString;
    var largoParseado;
    var anchoString;
    var anchoParseado;
    var area;
    var bolsasCemento=2;
    var bolsasCementoTotal;
    var bolsasCal=3;
    var bolsasCalTotal;

    largoString=(txtIdLargo.value);
    largoParseado= parseInt(largoString);
    anchoString=(txtIdAncho.value);
    anchoParseado=parseInt(anchoString);

    area= largoParseado*anchoParseado;

    bolsasCementoTotal= area*bolsasCemento;

    bolsasCalTotal= area*bolsasCal;

    alert("Usted necesita "+bolsasCementoTotal+ " bolsas de cemento y "+ bolsasCalTotal+" bolsas de cal");
}