//al presionar el botón mostrará 10 números que estaran contenidos en un vector.
function mostrar()
{

	var arrayNumeros= [10,20,30,40,50,60,70,80,90,100];

	document.write("El contenido del vector es: <br>"+ arrayNumeros+ "<br>");

	for(var i=0; i<10; i++)
	{

		document.write("Posicion "+i+"-->"+miArray[i]+"<br>");
	}
}
	/*var miArray = new Array();

	miArray[0]=5;
	miArray[1]=74;
	miArray[2]=8;
	miArray[3]=94;
	miArray[4]=5;
	miArray[5]=0;
	miArray[6]=80;
	miArray[7]=789;
	miArray[8]=5;
	miArray[9]=7;

document.write("El contenido del vector es: <br>");

	for(var i=0; i<10; i++)
	{

		document.write("Posicion "+i+"-->"+miArray[i]+"<br>");
	}
*/




//FIN DE LA FUNCIÓN

/*	{
var arrayEdades= [20,30,40,50,60];
	arrayEdades.push (999); //agregar elemento en la 6 posicion
	alert(arrayEdades[0]); //muestra la primer posicion

	for(var i=0; i<5; i++)
	{
		alert(arrayEdades[i]); //en la primer vuelta muestra 20, en la segund 30 y asi

	}

	arrayEdades[0]=55; //ahora en la posicion 0 vale 55 

}*/