var calle = "";
var altura = "";
var direccionNueva=[];
var carritoLleno = false;




$.ajax({url:"./direccion.json", success: function(direccion){

    

        if (localStorage.getItem("direccion")!=null){

            console.log("Hay una direccion en el localStorage");
            $(".direccionUsuarioIngresar").hide();

            let direccionTexto = localStorage.getItem("direccion");
            let direccionObjeto = JSON.parse(direccionTexto)
            
            let calle = direccionObjeto[0].calle;
            let altura = direccionObjeto[0].altura;

            $(".encabezado").append('<div class="direccionUsuario"><p>Dirección de entrega: '+calle+" "+altura+' </p><button type="button" class="botonDireccion" onclick="aparecerIngresarDireccion()">Editar dirección</button></div>');


        }
    
    }

});

const ingresarDireccion=() => {
    calle = $("#calleUsuario").val();
    altura = $("#alturaCalleUsuario").val();
    console.log("la calle es", calle ,altura);

    $.ajax({url:"./direccion.json", success: function(direccion){

            console.log("la dirección es:",direccion);

            direccionNueva = direccion;

            direccionNueva[0].calle = calle;
            direccionNueva[0].altura = altura;

            console.log("la dirección nueva es:",calle, altura);

            localStorage.setItem("direccion", JSON.stringify(direccionNueva)); 
            
            

            $(".direccionUsuarioIngresar").fadeOut();
            $(".encabezado").append('<div class="direccionUsuario"><p>Dirección de entrega: '+calle+" "+altura+' </p><button type="button" class="botonDireccion" onclick="aparecerIngresarDireccion()">Editar dirección</button></div>');
        }
    });

}


const aparecerIngresarDireccion= () =>{

                     $(".direccionUsuarioIngresar").fadeIn();
                     $(".direccionUsuario").remove();

} ;


var itemActual 
var opcionActual


const mostrarHamburguesa=() =>{
    document.getElementById("imagenItem").className = "seccionImagenes fondoHamburguesa";
    itemActual = "hamburguesa completa";
    opcionActual = "opcionHamburguesa" ;
}
const mostrarHamburguesa2=() =>{
    document.getElementById("imagenItem").className = "seccionImagenes fondoHamburguesa2";
    itemActual = "hamburguesa especial";
    opcionActual = "opcionHamburguesa2" ;
}
const mostrarGaseosa=() =>{
    document.getElementById("imagenItem").className = "seccionImagenes fondoGaseosa";
    itemActual = "gaseosa";
    opcionActual = "opcionGaseosa" ;
}
const mostrarNuggets=() =>{
    document.getElementById("imagenItem").className = "seccionImagenes fondoNuggets";
    itemActual = "nuggets de pollo";
    opcionActual = "opcionNuggets" ;
}
const mostrarPapas=() =>{
    document.getElementById("imagenItem").className = "seccionImagenes fondoPapas";
    itemActual = "papas fritas";
    opcionActual = "opcionPapas" ;
}




const agregarAlCarrito = ()=> {

    carritoLleno=true;

    let pedidoActual = listaMenu.find(
        (a) => a.nombre == itemActual
    );
    ordenEnCarrito.push(pedidoActual);

    nombreOrdenEnCarrito.push(itemActual);


    console.log ("la orden es",nombreOrdenEnCarrito)
    console.log ("la orden es",ordenEnCarrito)

    var listaOrdenes = "";
    var precioTotal = 0;

    ordenEnCarrito.forEach(item => precioTotal += item.precio);
    precioTotal *= 1.21 ;


    listaOrdenes += `<ul>`;
    nombreOrdenEnCarrito.forEach(item => listaOrdenes +=` <li> ${item} </li>` );
    listaOrdenes += ` <li> <p>Total: $${precioTotal} </p></li>`

        
    listaOrdenes += `</ul>`;

    console.log("El precio total es de $",precioTotal)

    $('#modalCarritoTexto').html(listaOrdenes)
    
    $('#carritoDeCompras').animate({
        width: "1px",
        right: "80px"
    },{
        duration: 200,
    }).delay(800).animate({
        width: "100px",
        right: "30px"
    },{
        duration: 200  
    })

    switch(opcionActual){
        case opcionHamburguesa:
            $('#opcionHamburguesa').animate({
                width: "1px",
                right: "80px"
            },{
                duration: 200,
            }).delay(800).animate({
                width: "100px",
                right: "30px"
            },{
                duration: 200  
            })
        case opcionHamburguesa2:
            $('#opcionHamburguesa2').animate({
                width: "1px",
                right: "80px"
            },{
                duration: 200,
            }).delay(800).animate({
                width: "100px",
                right: "30px"
            },{
                duration: 200  
            })
        case opcionGaseosa:
            $('#opcionGaseosa').animate({
                width: "1px",
                right: "80px"
            },{
                duration: 200,
            }).delay(800).animate({
                width: "100px",
                right: "30px"
            },{
                duration: 200  
            })
        case opcionNuggets:
            $('#opcionNuggets').animate({
                width: "1px",
                right: "80px"
            },{
                duration: 200,
            }).delay(800).animate({
                width: "100px",
                right: "30px"
            },{
                duration: 200  
            })
        case opcionPapas:
            $('#opcionPapas').animate({
                width: "1px",
                right: "80px"
            },{
                duration: 200,
            }).delay(800).animate({
                width: "100px",
                right: "30px"
            },{
                duration: 200  
            })
    }
    
}

const finalizarOrden= () =>{

    if (localStorage.getItem("direccion")==null){
        alert("Aún no ingresaste tu dirección");
        window.location.href = '#encabezado';
    }else{
        if (carritoLleno == false){
            alert("No hay items en el carrito");
        }else{
            $('#modalOrdenFinalizada').addClass("activo");
            $('#overlayModal').addClass("activo");
        }  
    }
};

const cerrarModalOrdenFinalizada= () =>{
    $('#modalOrdenFinalizada').removeClass("activo");
    $('#overlayModal').removeClass("activo");
    $('#modalCarritoTexto').html("Aún no añadiste nada a tu carrito.")

}


