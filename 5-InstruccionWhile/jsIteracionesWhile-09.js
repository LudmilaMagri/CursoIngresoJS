/*
Al presionar el botón pedir  números  hasta que el usuario quiera,
mostrar el número máximo y el número mínimo ingresado.*/
function mostrar()
{	// declarar variables
	
	var numeroIngresado;
	var numeroMaximo;
	var numeroMinimo;
	var continuar;
	var flag=true;

	do
	{
		numeroIngresado = prompt("Ingrese un número");
		numeroIngresado = parseInt(numeroIngresado);
		console.log (numeroIngresado);

		if (flag==true)
		{
			numeroMaximo = numeroIngresado;
			numeroMinimo = numeroIngresado;
			flag=false;
		}
		else
		{
		
			if (numeroIngresado>numeroMaximo)
			{
				numeroMaximo = numeroIngresado;
			}
			else if	(numeroIngresado<numeroMinimo)
			{
				numeroMinimo = numeroIngresado;
			}
			
		}	

		console.log("Numero maximo"+ numeroMaximo);
		console.log("Numero minimo"+ numeroMinimo);
		continuar = confirm("Desea continuar?");
	} while(continuar==true);
	

	

	txtIdMaximo.value=numeroMaximo;
	txtIdMinimo.value=numeroMinimo;
}//FIN DE LA FUNCIÓN