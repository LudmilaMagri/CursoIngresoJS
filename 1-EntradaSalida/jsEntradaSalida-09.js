/*
Debemos lograr tomar el importe por ID ,
transformarlo a entero (parseInt), luego
mostrar el importe con un aumento del 10 %
en el cuadro de texto "RESULTADO".*/
function mostrarAumento()
{

	var sueldoString;
	var sueldoParseado;
	var porcentajeAumento= 10;
	var aumento;
	var resultadoConAumento;

	sueldoString=txtIdSueldo.value;
	sueldoParseado=parseInt(sueldoString);

	aumento=sueldoParseado*porcentajeAumento/100;

	resultadoConAumento= sueltoParseado+aumento;

	txtIdResultado.value= resultado;
}
