function mostrar()
{
	var destinoIngresado 
	destinoIngresado=txtIdDestino.value;

	switch (destinoIngresado) 
	{
		case "Bariloche":
			alert ("Sur-Oeste");
			break;
		case "Cataratas":
			alert ("Este");
			break;
		case "Ushuaia":
			alert ("Sur");
			break;
		case "Mar del Plata":
			alert ("Este");
			break;
	
		default:
			break;
	}

	

}//FIN DE LA FUNCIÓN