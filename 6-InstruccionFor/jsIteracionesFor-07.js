//al presionar el botón pedir un número. mostrar los numeros divisores desde el 1 al número ingresado, 
//y mostrar la cantidad de numeros divisores encontrados.
function mostrar()
{

	var numero;
	var contadorDivisores=0;

	numero = prompt("Ingrese un numero");
	numero = parseInt(numero);

	for (var i=1; i<=numero; i++)
	{

		if (numero%i==0)
		{
			contadorDivisores++;
			console.log (i);
		}

	}
	console.log ("Numero de divisores: "+ contadorDivisores);

}//FIN DE LA FUNCIÓN
