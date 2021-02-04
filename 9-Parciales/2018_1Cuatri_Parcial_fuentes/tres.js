function mostrar()
{
var precioString;
var precioParseado;
var descuentoString;
var descuentoParseado;
var descuento;
var precioFinal;

precioString= prompt ("Ingrese el precio");
precioParseado=parseInt(precioString);
descuentoString= prompt ("Ingrese el porcentaje de descuento");
descuentoParseado=parseInt(descuentoString);

descuento=precioParseado*descuentoParseado/100;

precioFinal=precioParseado-descuento;

elPrecioFinal.value= precioFinal;
}
