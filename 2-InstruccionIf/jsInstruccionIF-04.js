function mostrar()
{
	//tomo la edad  
	var edadString;
	var edadParseado;

	edadString= (txtIdEdad.value);
	edadParseado= parseInt (edadString);

	if (edadParseado>=13 && edadParseado<=17) 
	{

		alert ("Es adolescente");
	}



}//FIN DE LA FUNCIÓN