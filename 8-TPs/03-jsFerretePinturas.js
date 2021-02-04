/*3.	Para el departamento de Pinturas:
A.	Al ingresar una temperatura en Fahrenheit debemos mostrar la temperatura en Centígrados con un mensaje concatenado (ej.: " 32 Fahrenheit son 0 centígrados").
B.	Al ingresar una temperatura en Centígrados debemos mostrar la temperatura en Fahrenheit (ej.: "0  centígrados son 32 Fahrenheit ").
*/
function FahrenheitCentigrados () 
{
    var temperaturaString;
    var temperaturaParseado;
    var temperaturaC;

    temperaturaString=(txtIdTemperatura.value);
    temperaturaParseado= parseInt(temperaturaString);

    temperaturaC= (temperaturaParseado-32)/1.8;

    alert("La temperatura es "+temperaturaC+" grados Celcius");

}

function CentigradosFahrenheit () 
{
    var temperaturaString;
    var temperaturaParseado;
    var temperaturaF;

    temperaturaString=(txtIdTemperatura.value);
    temperaturaParseado= parseInt(temperaturaString);

    temperaturaF= (temperaturaParseado*1.8)+32;

    alert("La temperatura es "+ temperaturaF+" Fahrenheit");


}
