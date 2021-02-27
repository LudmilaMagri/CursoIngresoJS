//al presionar el botón repetir el pedido de número hasta que ingresemos el 9.
function mostrar()
{
	
	var numero;
	numero=parseInt (prompt("Ingrese un numero"));

	for (var i=0; i!=9; i++)
	{
		numero=parseInt (prompt("Ingrese de nuevo un numero"));
		
		if (numero==9)
		{
			break;
		}
	}



}//FIN DE LA FUNCIÓN
