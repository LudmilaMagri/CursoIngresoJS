//al presionar el botón repetir hasta que utilizamos 'BREAK'.

function mostrar()
{

	var numero= parseInt(prompt ("ingrese un numero"));

	for (var i=1; i<numero; i++)
	{	
		console.log (i);

		if (i== 3)
		{
			break;
		}
	}
	alert("ok");



}//FIN DE LA FUNCIÓN