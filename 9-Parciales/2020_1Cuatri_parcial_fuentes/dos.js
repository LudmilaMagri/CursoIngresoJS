/*Realizar el algoritmo que permita ingresar los datos de una compra productos de la construccion, 
hasta que el cliente quiera:
Tipo validad("arena";"cal";"cemento")
Cantidad de bolsas,
Precio por bolsa (más de cero ),

Si compro más de 10 bolsas en total tenes 15% de descuento sobre el total a pagar.
Si compro más de 30 bolsas en total tenes 25% de descuento sobre el total a pagar.
a) El importe total a pagar , bruto sin descuento y...
b) el importe total a pagar con descuento(solo si corresponde)
d) Informar el tipo con mas cantidad de bolsas.
f) El tipo mas caro */
function mostrar()
{

	var seguir;
	var tipo;
	var cantidadBolsa;
	var precioBolsa;

	var descuentoTotalBolsa;
	var descuentoPorDiezBolsas= 15;
	var descuentoPorTreintaBolsas= 25;

	var importeTotal;

	var acumuladorPrecioBolsa=0;

	var contadorArena=0;
	var contadorCal=0;
	var contadorCemento=0;

	var acumuladorCantidadArena=0;
	var acumuladorCantidadCemento=0;
	var acumuladorCantidadCal=0;

  do
  {	
  	tipo=prompt("Ingrese el tipo de bolsa: arena, cal, cemento");

  	while(tipo!="arena" && tipo!= "cal" && tipo!= "cemento")
  	{
  		tipo=prompt("Ingrese nuevamente el tipo de bolsa: arena, cal, cemento");
  	}
  	cantidadBolsa=prompt("Ingrese la cantidad de bolsas");

  	precioBolsa= prompt("Ingrese el precio de la bolsa");

  	while(precioBolsa<0)
  	{
  		precioBolsa= prompt("Ingrese nuevamente el precio de la bolsa");
  	}



 /* 	Si compro más de 10 bolsas en total tenes 15% de descuento sobre el total a pagar.
Si compro más de 30 bolsas en total tenes 25% de descuento sobre el total a pagar.
a) El importe total a pagar , bruto sin descuento y...
b) el importe total a pagar con descuento(solo si corresponde)
d) Informar el tipo con mas cantidad de bolsas.
f) El tipo mas caro */

	if(cantidadBolsa>30)
	{
		descuentoTotalBolsa= (precioBolsa*descuentoPorTreintaBolsas/100)-precioBolsa;
	}

	else 
	{
		if(cantidadBolsa>10 && cantidadBolsa<30)
		{
			descuentoTotalBolsa= (precioBolsa*descuentoPorDiezBolsas/100)-precioBolsa;
			console.log("Su total a pagar con descuento es: "+descuentoTotalBolsa);
		}
		

		else 
		{
			importeTotal= acumuladorPrecioBolsa;
			console.log ("Su total a pagar es: "+ importeTotal);
		}
		


	switch(tipo)
	{
		case ("arena"):
			contadorArena++;
			acumuladorCantidadArena=acumuladorCantidadArena+cantidadBolsa;
		break;

		case ("cal"):
			contadorCal++;
			acumuladorCantidadCal=acumuladorCantidadCal+cantidadBolsa
		break;

		case ("cemento"):
			contadorCemento++;
			acumuladorCantidadCemento=acumuladorCantidadCemento+cantidadBolsa;
		break;


	}
		if(acumuladorCantidadArena>acumuladorCantidadCemento && acumuladorCantidadArena> acumuladorCantidadCal)
		{
				console.log("Hay mas bolsas de arena");

		}
		else
		{
			if(acumuladorCantidadCemento>acumuladorCantidadCal)
			{
				console.log ("Hay mas bolsas de cemento");
			}

			else 
			{
				console.log ("Hay mas bolsas de Cal");
			}
		}


	acumuladorPrecioBolsa=acumuladorPrecioBolsa+precio;

  	seguir= confirm("Desea ingresar otro producto? (si/no)");

  } while(seguir);


 	

}
