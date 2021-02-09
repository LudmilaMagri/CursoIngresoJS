function mostrar()
{
	//tomo la edad  
	var edadString;
	var edadParseado;

	edadString=(txtIdEdad.value);
	edadParseado= parseInt(edadString);

	if (edadParseado>=18)
	{
		alert("Usted es mayor de edad");
	}

	else 
	{
		alert("Usted es menor de edad");
	}	

}//FIN DE LA FUNCIÓN