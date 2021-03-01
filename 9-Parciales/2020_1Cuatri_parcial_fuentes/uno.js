/*Debemos realizar la carga de 5(cinco) productos de prevención de contagio,
de cada una debo obtener los siguientes datos:
el tipo (validar "barbijo" , "jabón" o "alcohol") ,
el precio (validar entre 100 y 300),
la cantidad de unidades (no puede ser 0 o negativo y no debe superar las 1000 unidades),
la Marca y el fabricante.
Se debe Informar al usuario lo siguiente:
a) Del más barato de los alcohol, la cantidad de unidades y el fabricante
b) Del tipo con mas unidades, el promedio por compra
c) Cuántas unidades de jabones hay en total
*/
function mostrar()
{
	var tipo;
	var precio;
	var cantidad;
	var marca;
	var fabricante;
	var respuesta;
	var flag=true;

	var precioMin;
	var fabricanteMasBaratoAlcohol;
	var cantidadMasBaratoAlcohol;

	var contadorJabon=0;
	var contadorBarbijo=0;
	var contadorAlcohol=0;

	var acumuladorJabon=0;
	var acumuladorBarbijo=0;
	var acumuladorAlcohol=0;

	var contadorProducto=0;

	for(var i=0 ; i<5; i++)//hacer con for o while <5
	{
		tipo =prompt("Ingrese el tipo del producto: (barbijo/ jabon/ alcohol");
		console.log(tipo);
		
		while(tipo != "barbijo" && tipo != "jabon" && tipo !="alcohol")
		{
			tipo=prompt("Ingrese nuevamente el tipo del producto: (barbijo/ jabon/ alcohol");
			console.log(tipo);
		}

		precio=parseInt(prompt("Ingrese el precio del producto"));
		console.log(precio);

		while(precio<100 || precio>300)
		{
			precio=parseInt(prompt("Ingrese nuevamente el precio del producto"));
			console.log(precio);	
			
		}
		cantidad=parseInt(prompt("Ingrese la cantidad del producto"));
		console.log(cantidad);

		while(cantidad<=0 || cantidad>1000)
		{
			cantidad=prompt("Ingrese nuevamente la cantidad del producto");
			console.log(cantidad);
		}
		marca=prompt("Ingrese la marca del producto");
		console.log(marca);

		fabricante=prompt("Ingrese el fabricante del producto");
		console.log(fabricante);


		contadorProducto++;
	

		switch (tipo)
		{
			case "alcohol":
				contadorAlcohol++;
				acumuladorAlcohol=acumuladorAlcohol+contadorAlcohol;

				if (flag==true)
				{
					precioMin=precio;
					cantidadMasBaratoAlcohol=cantidad;
					fabricanteMasBaratoAlcohol=fabricante;
					flag=false;
					
				}
				else if(precio<precioMin)
				{
					precioMin=precio;
					cantidadMasBaratoAlcohol=cantidad;
					fabricanteMasBaratoAlcohol=fabricante;
				}
				break;

			case "barbijo":
				contadorBarbijo++;
				acumuladorBarbijo=acumuladorBarbijo+contadorBarbijo;
				break;

			case "jabon":
				contadorJabon++;
				acumuladorJabon=acumuladorJabon+contadorJabon;

				break;
				

			}
		if (acumuladorJabon>acumuladorBarbijo && acumuladorJabon>acumuladorAlcohol)
			{
				console.log ("Hay mas jabones");
			}
			else
			{
				if(acumuladorBarbijo>acumuladorAlcohol)
				{
				console.log ("Hay mas barbijos");
				}
				else
				{
					console.log ("Hay mas alcohol");
				}

		}
		

	}

	//a) Del más barato de los alcohol, la cantidad de unidades y el fabricante
	console.log("La cantidad y el fabricante del alcohol mas barato: " + cantidadMasBaratoAlcohol+" "+ fabricanteMasBaratoAlcohol);
 	//b) Del tipo con mas unidades, el promedio por compra
 	console.log ("El tipo de producto con mas unidades: ");
	//c) Cuántas unidades de jabones hay en total
	console.log("Total de jabones:" +contadorJabon);
			
}


	