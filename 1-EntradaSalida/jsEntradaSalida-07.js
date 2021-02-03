/*
Debemos lograr tomar Los numeros por ID ,
transformarlos a enteros (parseInt),realizar la operación correcta y 
mostrar el resulto por medio de "ALERT"
ej.: "la Resta es 750"*/ 
function sumar()
{	
	var numeroUnoString;
	var numeroDosString;
	var numeroUnoParseado;
	var numeroDosParseado;
	var resultado;
	
	numeroUnoString= txtIdNumeroUno.value;
	numeroUnoParseado= parseInt(numeroUnoString);

	numeroDosString=txtIdNumeroDos.value;
	numeroDosParseado=parseInt(numeroDosString);

	resultado=numeroUnoParseado+numeroDosParseado;
	alert("La suma es "+resultado);

}

function restar()
{
	var numeroUnoString;
	var numeroDosString;
	var numeroUnoParseado;
	var numeroDosParseado;
	var resultado;
	
	numeroUnoString= txtIdNumeroUno.value;
	numeroUnoParseado= parseInt(numeroUnoString);

	numeroDosString=txtIdNumeroDos.value;
	numeroDosParseado=parseInt(numeroDosString);

	resultado=numeroUnoParseado-numeroDosParseado;
	alert("La resta es "+resultado);
}

function multiplicar()
{ 
	var numeroUnoString;
	var numeroDosString;
	var numeroUnoParseado;
	var numeroDosParseado;
	var resultado;
	
	numeroUnoString= txtIdNumeroUno.value;
	numeroUnoParseado= parseInt(numeroUnoString);

	numeroDosString=txtIdNumeroDos.value;
	numeroDosParseado=parseInt(numeroDosString);

	resultado= numeroUnoParseado*numeroDosParseado;
	alert("La multiplicacion es "+resultado);
}

function dividir()
{
	var numeroUnoString;
	var numeroDosString;
	var numeroUnoParseado;
	var numeroDosParseado;
	var resultado;
	
	numeroUnoString= txtIdNumeroUno.value;
	numeroUnoParseado= parseInt(numeroUnoString);

	numeroDosString=txtIdNumeroDos.value;
	numeroDosParseado=parseInt(numeroDosString);
	
	resultado=numeroUnoParseado/numeroDosParseado;
	alert ("La division es "+resultado);
}

