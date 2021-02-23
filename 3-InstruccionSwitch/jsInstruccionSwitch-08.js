/* Al seleccionar un destino informar si hace FRIO o CALOR en ese destino */
function mostrar()
{
	var destinoIngresado;

	destinoIngresado=txtIdDestino.value;
	
	switch (destinoIngresado)
	{
		case "Bariloche":
		case "Ushuaia":
			alert ("Hace frío");
			break;

		case "Mar del plata":
		case "Cataratas":
			alert ("Hace calor");
			break;
	}


}//FIN DE LA FUNCIÓN