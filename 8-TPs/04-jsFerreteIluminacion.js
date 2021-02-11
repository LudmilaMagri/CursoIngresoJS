/*4.	Para el departamento de iluminación:
Tomando en cuenta que todas las lámparas están en oferta al mismo precio de $35 pesos final.
A.	Si compra 6 o más  lamparitas bajo consumo tiene un descuento del 50%. 
B.	Si compra 5  lamparitas bajo consumo marca "ArgentinaLuz" se hace un descuento del 40 % y si es de otra marca el descuento es del 30%.
C.	Si compra 4  lamparitas bajo consumo marca "ArgentinaLuz" o “FelipeLamparas” se hace un descuento del 25 % y si es de otra marca el descuento es del 20%.
D.	Si compra 3  lamparitas bajo consumo marca "ArgentinaLuz"  el descuento es del 15%, si es  “FelipeLamparas” se hace un descuento del 10 % y si es de otra marca un 5%.
E.	Si el importe final con descuento suma más de $120  se debe sumar un 10% de ingresos brutos en informar del impuesto con el siguiente mensaje:
 ”Usted pago X de IIBB.”, siendo X el impuesto que se pagó. 

 */
function CalcularPrecio () 
{
 	var cantidadLamparitas;
    var descuento;
    var precioFinal;
    var precioUnitarioLampara = 35;
    var marcaLampara;
    var precioFinalIIBB;

    cantidadLamparitas = txtIdCantidad.value;
    cantidadLamparitas = parseInt(cantidadLamparitas);

    marcaLampara = Marca.value;

    if(cantidadLamparitas>5)
    {
        //Mayor 5
        //aplicar descuento del 50%.
        descuento= 50;
    }
    else
    {
        //Menor o = 5
        //Si compra 5  lamparitas bajo consumo marca "ArgentinaLuz" se hace un descuento del 40 % y si es de otra marca el descuento es del 30%.
        if(cantidadLamparitas == 5)
        {
            if(marcaLampara == "ArgentinaLuz")
            {
                //descuento del 40 %
                descuento= 40;
            }
            else
            {
                //el otro descuento
                descuento= 30;
            }
        }    

        else
        {
            //Si compra 4  lamparitas bajo consumo marca "ArgentinaLuz" o “FelipeLamparas” se hace un descuento del 25 % y si es de otra marca el descuento es del 20%.
            
             if (cantidadLamparitas== 4)
            {
                if (marcaLampara== "ArgentinaLuz" || marcaLampara=="FelipeLamparas")
                {
                 //descuento del 25%
                descuento= 25;
                }
                else
                {
                //descuento del 20%
                descuento= 20;
                }
            }
             
            
            else
            {
        
                if (cantidadLamparitas==3)
                {
                    if (marcaLampara== "ArgentinaLuz")
                    {
                        descuento=15;
                    }
                    else
                    {
                        descuento= 5;
                    }
                }
        
            
                else
                {
                        if (cantidadLamparitas==3)
                        {

                            if (marcaLampara== "ArgentinaLuz")
                            {
                                descuento=10;
                            }
                            
                        }
                }
            }
                
        }    
    }        
        precioFinal= (precioUnitarioLampara*cantidadLamparitas)*(descuento/100)-precioUnitarioLampara;


        if (precioFinal>120)
        {
            precioFinalIIBB= (precioFinal*10/100)+precioFinal;
        }

        txtIdprecioDescuento.value= precioFinalIIBB;

    
}