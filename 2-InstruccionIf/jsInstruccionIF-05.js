function mostrar()
{
	//tomo la edad  
	var edadString;
	var edadParseado;

	edadString= (txtIdEdad.value);
	edadParseado= parseInt (edadString);

	//Condicion que es verdadera para los valores de edad que estan por debajo o por encima del rango

	if (edadParseado <13 || edadParseado>17)
	{

		alert("No es adolescente");
	}


}//FIN DE LA FUNCIÓN

/*
Para preguntar si NO estoy dentro del rango

if (!(edad >=13 && edad<17)) {  esto quiere decir que si esta dentro del rango es falso. NOT dentro del rango

	alert ("No es adolescente");


}
*/