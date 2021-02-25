/*
Al presionar el botón pedir  números  hasta que el usuario quiera,
sumar los que son positivos y multiplicar los negativos.*/
function mostrar()
{
	var contador;
	var respuesta;
	var sumaPositivos;
	var multiplicacionNegativos;
	var numero;
	contador=0;
	sumaPositivos=0;
	multiplicacionNegativos=1;
	respuesta;
	flag=0;

	
	do {
		
		numero= prompt("Ingrese un número");
		numero=parseInt(numero);

		if (numero>=0) 
		{
			sumaPositivos= sumaPositivos+numero;
			
		}
		else
		{
			flag=1;
			multiplicacionNegativos=multiplicacionNegativos*numero;
			
			
		}
	contador++;
		respuesta= prompt("Quiere escribir otro numero? (si/no");
	
	} while (respuesta=="si");

	if (flag==0);
	{
		multiplicacionNegativos=0;
	}
	
	txtIdSuma.value=sumaPositivos;
	txtIdProducto.value=multiplicacionNegativos;
	
	/*while (respuesta== "si") 
	{
		numero= prompt("Ingrese un número");
		numero= parseInt(numero);

		acumulador= acumulador+numero;
		contador= contador+1;

		respuesta= prompt("Desea continuar? Si/No");	

	
		if (numero>=0)
		{
			sumaPositivos=acumulador+numero;
		}
		else 
		{
			multiplicacionNegativos=acumulador*numero;
		}
		console.log(multiplicacionNegativos);
	}
		txtIdSuma.value=sumaPositivos;
		txtIdProducto.value=multiplicacionNegativos;
		*/

}//FIN DE LA FUNCIÓN