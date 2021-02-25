/*al presionar el botón pedir un número. mostrar los numeros pares desde el 1 al número ingresado, 
y mostrar la cantidad de numeros pares encontrados.*/

function mostrar()
{
	var numero;
	var contadorPares=0;

	numero=prompt("Ingrese un numero");
	numero=parseInt(numero);

	for (var i=0; i<=numero; i++)
	{
		if (i%2==0)
		{
			contadorPares++;
			
		}
		console.log("pares encontrados"+ i);
	}



}//FIN DE LA FUNCIÓN