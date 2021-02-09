function mostrar()
{
	//tomo la edad  
	var edadString;
	var edadParseado;

	edadString= (txtIdEdad.value);
	edadParseado= parseInt (edadString);

	if (edadParseado <13)
	{
		alert("Es un niño");
	}
	else 
	{

		if (edadParseado<18)

			alert ("Es adolescente");

		else 

			alert("Es mayor de edad");

	
	}
	

	
}//FIN DE LA FUNCIÓN