function mostrar()
{
	//tomo el mes
	var mesDelAño =txtIdMes.value;
	var mes =txtIdMes.value;
	
	switch (mes)
	{
		
		case "Febrero":
			alert ("Este mes no tiene mas de 29 días");
			break;

		case "Enero":		
		case "Marzo":
		case "Abril":
		case "Mayo":
		case "Junio":
		case "Julio":
		case "Agosto":
		case "Septiembre":
		case "Octubre":
		case "Noviembre":
		case "Diciembre":
			alert ("Este mes tiene 30 o mas dias");
			break;
	}

/* default: 
		alert ("este mes tiene 30 o mas dias")
		
	y el default lo uso sin todos esos cases. Es decir, si no es febrero, es default	*/
	
	


}//FIN DE LA FUNCIÓN