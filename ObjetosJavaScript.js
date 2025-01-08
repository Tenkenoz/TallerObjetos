/*Ejercicio: Gestión de Inventario con Objetos en JavaScript

Instrucciones

Una tienda necesita administrar su inventario de productos mediante un programa en JavaScript.

Cada producto debe tener las propiedades nombre, precio, y cantidad. La tienda requiere las siguientes funcionalidades:

Crear el inventario inicial: Define un objeto que contenga al menos 4 productos con las propiedades mencionadas.

Sella el objeto del inventario: Asegúrate de que no puedan agregarse ni eliminarse productos, pero que sea posible modificar las cantidades y precios.

Implementa una función para vender un producto:

La función debe aceptar el nombre del producto y la cantidad a vender.

Si el producto existe y tiene suficiente stock, reduce la cantidad en el inventario y muestra un mensaje confirmando la venta.

Si el producto no existe o no tiene suficiente stock, muestra un mensaje de error.

Implementa una función para aplicar un descuento a todos los productos:

La función debe aceptar un porcentaje de descuento y reducir el precio de todos los productos en base a este porcentaje.

Asegúrate de que los precios no sean negativos.

Usa las funciones creadas:

Vende algunos productos.

Aplica un descuento del 10% a todo el inventario.

Muestra el inventario final utilizando console.log().

Resultados esperados

Al vender productos: Se confirma la venta si hay stock suficiente o se muestra un mensaje de error.

Al aplicar el descuento: Los precios se reducen correctamente sin caer en valores negativos.

Estado final del inventario: Refleja los cambios en cantidades y precios después de las operaciones.
*/


const inventario = {
    pantalones: {
        precio: 10,
        cantidad: 5
    },
    camisetas: {
        precio: 20,
        cantidad: 3
    },
    sacos: {
        precio: 15,
        cantidad: 8
    },
    zapatos: {
        precio: 25,
        cantidad: 2
    }
    }

    Object.seal(inventario)

    function venderProducto(producto, cantidad) {
        if (inventario[producto].cantidad >= cantidad) {
            inventario[producto].cantidad = inventario[producto].cantidad-cantidad;
            console.log(`Se vendió los ${producto} con una cantidad de ${cantidad}`);
        } else {
            console.log(`No hay suficiente ${producto} en el stock`);
        }
    }

    function descuentoProducto(descuento) {
        for (let producto in inventario){
        if (inventario[producto].precio > 0) {
            inventario[producto].precio= inventario[producto].precio-(inventario[producto].precio*descuento/100);
            console.log(`El descuento se aplicó correctamente a los ${producto}, ahora tiene un precio de ${inventario[producto].precio}`);
        }else{
            inventario[producto].precio=0;
        }
    }
    }

   venderProducto("pantalones", 2);
   venderProducto("camisetas", 1);
   venderProducto("zapatos", 3);
   venderProducto("sacos", 5);
   descuentoProducto(10);
  
   for(let producto in inventario){
    console.log(`Hay ${inventario[producto].cantidad} ${producto} en el stock que tienen un precio de ${inventario[producto].precio}`)
}
    
