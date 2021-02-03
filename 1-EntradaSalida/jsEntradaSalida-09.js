/*
Debemos lograr tomar el importe por ID ,
transformarlo a entero (parseInt), luego
mostrar el importe con un aumento del 10 %
en el cuadro de texto "RESULTADO".*/
function mostrarAumento()
{

	var sueldoString;
	var sueldoParseado;
	var resultado;

	sueldoString=txtIdSueldo.value;
	sueldoParseado=parseInt(sueldoString);

	resultado=(sueldoParseado*0.1)+ sueldoParseado;

	txtIdResultado.value= resultado;
}
