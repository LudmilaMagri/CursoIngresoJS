//al presionar el botón se mostrará 5 nombres que estaran contenidos en un vector.
function mostrar()
{

	var array= ["Juan","Luis","Maria","Nahuel","Yolanda"];


	document.write("El contenido del vector es: <br>"+ array +"<br>");

	for(var i=0; i<5; i++)
	{

		document.write(" Posicion "+i+"-->"+array[i]+"<br>");
	}





}//FIN DE LA FUNCIÓN