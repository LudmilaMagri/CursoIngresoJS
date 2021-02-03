/*
Debemos lograr tomar Los numeros por ID ,
transformarlos a enteros (parseInt),realizar la operación correcta y 
mostrar el resto entre el dividendo y el divisor.
ej.: "El resto es 0 ."*/
function SacarResto()
{
	var numeroUnoString;
	var numeroDosString;
	var numeroUnoParseado;
	var numeroDosParseado;
	var resultado;
	
	numeroUnoString=txtIdNumeroDividendo.value;

	numeroDosString=(txtIdNumeroDivisor.value);
	
	numeroUnoParseado= parseInt(numeroUnoString);
	numeroDosParseado=parseInt(numeroDosString);

	resultado= numeroUnoParseado%numeroDosParseado;

	alert("El resto es "+ resultado);



}
