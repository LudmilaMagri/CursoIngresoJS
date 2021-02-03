/*
Debemos lograr tomar el importe por ID.
Transformarlo a entero (parseInt), luego
mostrar el importe con un Descuento del 25 %
en el cuadro de texto "RESULTADO"*/
function mostrarAumento()
{
	var importeString;
	var importeParseado;
	var resultado;

	importeString= txtIdImporte.value;
	importeParseado= parseInt(importeString);

	resultado=importeParseado-(importeParseado*0.25);

	txtIdResultado.value= resultado;

}
