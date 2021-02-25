/*
Al presionar el botón pedir  números  
hasta que el usuario quiera, mostrar:
1-Suma de los negativos.
2-Suma de los positivos.
3-Cantidad de positivos.
4-Cantidad de negativos.
5-Cantidad de ceros.
6-Cantidad de números pares.
7-Promedio de positivos.
8-Promedios de negativos.
9-Diferencia entre positivos y negativos, (positvos-negativos). */
function mostrar()
{
	//declarar contadores y variables 
	var respuesta;
	var numeroIngresado;
	var contadorPositivos=0;
	var contadorNegativos=0;
	var contadorCeros=0;
	var contadorPares=0;
	var acumuladorPositivo=0;
	var acumuladorNegativo=0;
	var promedioPositivo;
	var promedioNegativo;
	var diferencia;


	do {
		//pido numero
		numeroIngresado=prompt("Ingrese un numero");
		numeroIngresado=parseInt(numeroIngresado);

		//analizar el signo del numero y actuar en consecuencia
		if (numeroIngresado<0)
		{	
			acumuladorNegativo=acumuladorNegativo+numeroIngresado;
			contadorNegativos=contadorNegativos+1;

		}
		else if(numeroIngresado==0)
		{	
			contadorCeros=contadorCeros+1;
		}
		else
		{	
			acumuladorPositivo=acumuladorPositivo+numeroIngresado; //sumar
			contadorPositivos=contadorPositivos+1; //contar
		}
		if (numeroIngresado % 2 == 0) //paridad
		{
			contadorPares=contadorPares+1;
		}

			respuesta= prompt("Desea continuar?");
	} while (respuesta=="si");

	promedioPositivo=acumuladorPositivo/contadorPositivos;

	promedioNegativo=acumuladorNegativo/contadorNegativos;

	diferencia= contadorPositivos-contadorNegativos;

	console.log("Suma de los negativos: "+ acumuladorNegativo);
	console.log("Suma de los positivos: "+ acumuladorPositivo);
	console.log("Cantidad de positivos: "+ contadorPositivos);
	console.log("Cantidad de negativos: "+ contadorNegativos);
	console.log("Cantidad de ceros "+ contadorCeros);
	console.log("Cantidad de numeros pares: "+ contadorPares);
	console.log("Promedio de positivos: "+ promedioPositivo);
	console.log("Promedio de negativos: "+ promedioNegativo);
	console.log("Diferencia entre positivos y negativos: "+ diferencia);

}


