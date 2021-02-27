/*al presionar el botón pedir un número. Informar si el numero es PRIMO o no.*/
function mostrar()
{

	var numero;
	

	numero = prompt("Ingrese un numero");
	numero = parseInt(numero);

	for (var i=1; i<=numero; i++)
	{

		if (numero%i==0 && numero%1==0)
		{
			numero++;
			console.log (i);
		}

	}
		alert ("El numero es primo "+ numero);

}//FIN DE LA FUNCIÓN
