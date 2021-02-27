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
	
	var contadorProducto=0;

	while(contadorProducto<5)//hacer con for o while <5
	{
		tipo=prompt("Ingrese el tipo del producto: (barbijo/ jabon/ alcohol");
		
		while(tipo!= "barbijo" && tipo!="jabon" && tipo!="alcohol")
		{
			tipo=prompt("Ingrese nuevamente el tipo del producto: (barbijo/ jabon/ alcohol");
			console.log(tipo);
		}

		precio=prompt("Ingrese el precio del producto");
		while(precio<100 || precio>300)
		{
			precio=prompt("Ingrese nuevamente el precio del producto");
			console.log(precio);	
			
		}
		cantidad=prompt("Ingrese la cantidad del producto");
		
		while(cantidad<=0 || cantidad>1000)
		{
			cantidad=prompt("Ingrese nuevamente la cantidad del producto");
			console.log(cantidad);
		}
		marca=prompt("Ingrese la marca del producto");
		console.log(marca);

		fabricante=prompt("Ingrese el fabricante del producto");
		console.log(fabricante);
	}
			


}