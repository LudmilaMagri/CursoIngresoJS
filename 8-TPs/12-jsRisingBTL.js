/*RISING BTL. Empresa dedicada a la toma de datos para realizar estadísticas y censos nos pide realizar una carga de datos validada 
e ingresada por ventanas emergentes solamente (para evitar hacking y cargas maliciosas) y luego asignarla a cuadros de textos. 
12.   Los datos requeridos son los siguientes:
A.	Edad, entre 18 y 90 años inclusive.
B.	Sexo, “M” para masculino y “F” para femenino
C.	Estado civil, 1-para soltero, 2-para casados, 3-para divorciados y 4-para viudos
D.	Sueldo bruto, no menor a 8000.
E.	Número de legajo, numérico de 4 cifras, sin ceros a la izquierda.
F.	Nacionalidad, “A” para argentinos, “E” para extranjeros, “N” para nacionalizados.
 */
function ComenzarIngreso () 
{
 	//definicion de variables
 	var edadIngresada;
 	var sexoIngresado;
 	var estadoCivilIngresado;
	var sueldoBruto;
	var numeroLegajo;
	var nacionalidad;
	var contador=0;
	var respuesta;
	

	do {
		edadIngresada=prompt("Ingrese su edad");
		edadIngresada=parseInt(edadIngresada);

		sexoIngresado= prompt("Ingrese su sexo: (f/m)");
	

		if (edadIngresada>=18 && edadIngresada<=90)
		{	
			txtIdEdad.value=edadIngresada;
		}
		else if (edadIngresada<=18 && edadIngresada>=90)
		{
			alert("Error, vuelva a ingresar su edad");
			edadIngresada=prompt("Ingrese su edad");
			edadIngresada=parseInt(edadIngresada);
			txtIdEdad.value=edadIngresada;
		}

			
		
		else if (sexoIngresado== "M" && sexoIngresado=="m" && sexoIngresado=="F" && sexoIngresado=="f")
		{	sexoIngresado= prompt("Ingrese su sexo: (f/m)");
			txtIdSexo.value=sexoIngresado;
		}
		else if (sexoIngresado!= "M" && sexoIngresado!="m" && sexoIngresado!="F" && sexoIngresado!="f")
		{
			alert ("Error, vuelva a ingresar su sexo");
			sexoIngresado= prompt("Ingrese su sexo: (f/m)");
			txtIdSexo.value=sexoIngresado;
		}
		/*else if (estadoCivilIngresado=="1" && estadoCivilIngresado=="2" && estadoCivilIngresado=="3" && estadoCivilIngresado=="4")
		{
			estadoCivilIngresado=
		}
*/
		respuesta= confirm("desea continuar?");
	} while (respuesta==true);

	
	
	txtIdEstadoCivil.value=estadoCivilIngresado;
	txtIdSueldo.value=sueldoBruto;
	txtIdLegajo.value=numeroLegajo;
	txtIdNacionalidad.value=nacionalidad;



}
