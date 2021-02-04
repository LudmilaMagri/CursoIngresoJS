/*
Debemos lograr tomar el importe por ID.
Transformarlo a entero (parseInt), luego
mostrar el importe con un Descuento del 25 %
en el cuadro de texto "RESULTADO"*/
function mostrarAumento()
{
	var importeString;
	var importeParseado;
	var porcentajeDescuento=25;
	var descuento;
	var resultado;

	importeString= txtIdImporte.value;
	importeParseado= parseInt(importeString);

	descuento= importeParseado*porcentajeDescuento/100;

	resultado=importeParseado-descuento;

	txtIdResultado.value= resultado;

}
