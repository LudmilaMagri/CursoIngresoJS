function mostrar()
{
var precio;
var descuento;
var resultado;

precio= prompt ("Ingrese el precio");
precio=parseInt(precio);
descuento= prompt ("Ingrese el porcentaje de descuento");
descuento=parseInt(descuento);

resultado=(precio*descuento)/100;

elPrecioFinal.value= resultado;
}
