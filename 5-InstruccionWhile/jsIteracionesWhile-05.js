/*
Al presionar el botón pedir un sexo
'f' para femenino, 'm' para masculino.*/
function mostrar()
{
	var sexoIngresado;
	
	sexoIngresado = prompt("ingrese f ó m .");

	while(sexoIngresado!= "f" && sexoIngresado!="m")
	{
		alert ("Dato incorrecto, ingrese nuevamente");
		sexoIngresado = prompt("ingrese f ó m .");
	}
	alert ("Dato correcto");


	txtIdSexo.value=sexoIngresado;
}//FIN DE LA FUNCIÓN