/*
Bienvenidos (IF).
Pedir dos números y mostrar el resultado:
Si son iguales los muestro concatenados.
Si el primero es mayor, los resto,
de lo contrario los sumo.
Si la suma es mayor a 10 ,además de mostrar el resultado, muestro el mensaje
"la suma es xxx y supero el 10".
*/ 
function mostrar()
{
    var dato1;
    var dato2;
    
    

    dato1= prompt("Ingrese un número");
    dato1= parseInt(dato1);

    dato2= prompt("Ingrese otro número");
    dato2=parseInt(dato2);

    if (dato1==dato2)
    {
        alert("dato1"+"dato2");
    }
    else
    {
        if (dato1>dato2)
        
            alert(dato1-dato2);
        
        else 
            alert(dato1+dato2);
    }

}
