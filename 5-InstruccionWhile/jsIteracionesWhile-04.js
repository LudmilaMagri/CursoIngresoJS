/*
al presionar el botón 
pedir un número entre 0 y 9 inclusive.*/
function mostrar()
{
	var numeroIngresado;
	numeroIngresado = prompt("ingrese un número entre 0 y 10.");

	while (numeroIngresado>10)
	{
		alert ("Error, ingrese otro número");
		numeroIngresado = prompt("ingrese un número entre 0 y 10.");

	}

	alert ("Número correcto");
	
}//FIN DE LA FUNCIÓN