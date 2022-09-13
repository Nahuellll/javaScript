function bienvenida(){
    alert('hola bienvenido por favor registrarse');
    let nombre = prompt('Ingrese su nombre');
    while(nombre === ''){
        nombre = prompt('Ingrese su nombre');
    }
}

function elegirProductos(){
    let productosId;

    do{
        productosId=prompt(`Que producto quiere comprar?
        1)mouse
        2)teclado
        3)monitor`);
    }while(productosId != 1 && productosId !=2 && productosId!=3)

    switch(productosId){
        case '1':
            return 'mouse';
        case '2':
            return 'teclado';
        case '3':
            return 'monitor';
    }
}

function validarPrecio(productosId) {
    if(productoElegido === 'mouse'){
        return 800;
    }else if(productoElegido === 'teclado'){
        return 1000;
    }else if(productoElegido === 'monitor'){
        return 2000;
    }
}

function cobrar (producto,precio){
alert(`Producto: ${productoElegido.toUpperCase()}
Precio Total:$ ${precioFinal}`);
let pago = prompt('Con cuanto desea abonar?');
let vuelto=pago- precio;
    if(precio < pago ){
        alert(`Su vuelto es $ ${vuelto} muchas gracias`)
    }else if (pago===precio){
        alert(`gracias su compra fue realizada`)
    }else if(pago<precio){
        alert(`el saldo ingresado no alcanza`);
        pago = prompt('Con cuanto desea abonar?');
    }
}

bienvenida();
let productoElegido=elegirProductos();
let precioFinal = validarPrecio(productoElegido);
cobrar(productoElegido,precioFinal);

