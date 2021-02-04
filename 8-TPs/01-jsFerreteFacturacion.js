/*1.	Para el departamento de facturación:
A.	Ingresar tres precios de productos y mostrar la suma de los mismos.
B.	Ingresar tres precios de productos y mostrar el promedio de los mismos.
C.	ingresar tres precios de productos  y mostrar precio final (más IVA 21%).
*/
function Sumar () 
{	
    var precioUnoString;
    var precioUnoParseado;
    var precioDosString;
    var precioDosParseado;
    var precioTresString;
    var precioTresParseado;
    var resultado;

    precioUnoString=(txtIdPrecioUno.value);
    precioUnoParseado= parseInt(precioUnoString);

    precioDosString= (txtIdPrecioDos.value);
    precioDosParseado= parseInt(precioDosString);

    precioTresString= (txtIdPrecioTres.value);
    precioTresParseado= parseInt (precioTresString);

    resultado=precioUnoParseado+precioDosParseado+precioTresParseado;

    alert("Su precio es $"+resultado);


}
function Promedio () 
{
	var precioUnoString;
    var precioUnoParseado;
    var precioDosString;
    var precioDosParseado;
    var precioTresString;
    var precioTresParseado;
    var resultado;

    precioUnoString=(txtIdPrecioUno.value);
    precioUnoParseado= parseInt(precioUnoString);

    precioDosString= (txtIdPrecioDos.value);
    precioDosParseado= parseInt(precioDosString);

    precioTresString= (txtIdPrecioTres.value);
    precioTresParseado= parseInt (precioTresString);

    resultado= (precioUnoParseado+precioDosParseado+precioTresParseado)/3;

    alert("Su precio es $"+resultado.toFixed(2));
}
function PrecioFinal () 
{
    var precioUnoString;
    var precioUnoParseado;
    var precioDosString;
    var precioDosParseado;
    var precioTresString;
    var precioTresParseado;
    var suma;
    var iva;
    var importefinal;

    precioUnoString=(txtIdPrecioUno.value);
    precioUnoParseado= parseInt(precioUnoString);

    precioDosString= (txtIdPrecioDos.value);
    precioDosParseado= parseInt(precioDosString);

    precioTresString= (txtIdPrecioTres.value);
    precioTresParseado= parseInt (precioTresString);

    suma=(precioUnoParseado+precioDosParseado+precioTresParseado);
    iva= suma*0.21;
    importefinal=suma+iva;

    alert("Su precio es $"+importefinal.toFixed(2));
}