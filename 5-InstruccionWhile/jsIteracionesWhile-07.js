/*
Al presionar el botón pedir  números  hasta que el USUARIO QUIERA 
e informar la suma acumulada y el promedio.
*/
function mostrar()
{
	var contador;
	var acumulador;
	var respuesta;
	var numero;

	contador=0;
	acumulador=0;
	respuesta='true';

	
	while (respuesta)
	{
		numero= prompt("Ingrese un número");
		numero= parseInt(numero);

		acumulador= acumulador+numero;
		contador= contador+1;

		respuesta= confirm("Desea continuar? Si/No");
		
		
	}

	txtIdSuma.value=acumulador;
	txtIdPromedio.value=acumulador/contador;

}//FIN DE LA FUNCIÓN

//Otra forma de hacerlo
 
/* function mostrar()
{
	var contador;
	var acumulador;
	var respuesta;
	var numero;

	contador=0;
	acumulador=0;

	
	do
	{
		numero= prompt("Ingrese un número");
		numero= parseInt(numero);

		acumulador= acumulador+numero;
		contador= contador+1;

		respuesta= prompt("Desea continuar? Si/No");
		
		
	} while (respuesta=="si");

	txtIdSuma.value=acumulador;
	txtIdPromedio.value=acumulador/contador; */ 