/*2.	Para el departamento de Construcción:
A.	 mostrar la cantidad de alambre a comprar  si se ingresara el largo y el ancho de un terreno rectangular y se debe alambra con tres hilos de alambre.
B.	mostrar la cantidad de alambre a comprar  si se ingresara el radio  de un terreno circular y se debe alambra con tres hilos de alambre.
C.	Para hacer un contrapiso de 1m x 1m se necesitan 2 bolsas de cemento y 3 de cal, debemos mostrar cuantas bolsas se necesitan de cada uno para las medidas que nos ingresen.
*/

function Rectangulo () 
{
    var largo;
    var ancho;
    var perimetro;
    var alambre;

    largo=parseInt(txtIdLargo.value);
    ancho=parseInt(txtIdAncho.value);

    perimetro= (largo+ancho)*2;
    alambre=perimetro*3;

    alert("Ustede debe comprar "+alambre+ " m de alambre");

}
function Circulo () 
{
    var radio;
    var perimetro;
    var alambre;
    const PI= 3.14;

    radio= parseInt(txtIdRadio.value);

    perimetro=2*PI*radio;

    alambre= perimetro*3;

    alert("Ustede debe comprar "+alambre.toFixed(2)+ " m de alambre");
}
function Materiales () 
{
    var largo;
    var ancho;
    var area;
    var bolsascemento;
    var bolsascal;

    largo=parseInt(txtIdLargo.value);
    ancho=parseInt(txtIdAncho.value);

    area= largo*ancho;

    bolsascemento= area*2;

    bolsascal= area*3;

    alert("Usted necesita "+bolsascemento+ " bolsas de cemento y "+ bolsascal+" bolsas de cal");
}