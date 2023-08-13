alert('Hola Bienvenido');

const servicioDG = "Diseño Grafico";
const servicioEdit = "Edicion AudioVisual";
const servicioPC = "Mantenimiento de PC";

// variable para elegir otro servicio se coloca antes del bucle para que no genere confucion 
let elegirOtroServicio = "SI";

while (elegirOtroServicio === "SI") {
    // Se le pide al usuario que eliga un servicio ingresado las iniciales del mismo.
    const elegirServicios = prompt('Elija un servicio escribiendo sus iniciales usando: (DG, ED, PC)');
    // Dependiendo que servicio quiere elegir salta estos mensajes
    if (elegirServicios === "DG") {
        alert('Has elegido el servicio de: ' + servicioDG);
    } else if (elegirServicios === "ED") {
        alert('Has elegido el servicio de: ' + servicioEdit);
    } else if (elegirServicios === "PC") {
        alert('Has elegido el servicio de: ' + servicioPC);
    } else {
        alert('No has elegido ningun Servicio');
    }
     //  Entrada de datos
    //  Se le pide al usuario que ingrese los precios solicitados 
    const servicioElegido = parseFloat(prompt('Coloca el precio del servicio'));
    const costoServ = parseFloat(prompt('Coloque el precio del producto'));
    const costoServ2 = parseFloat(prompt('Coloque el precio del producto 2 (OPCIONAL)'));

    // Prosesamiento de datos (la funcion consienste en sumar el producto elegido + el costo del servicio)
    // La funcion tiene  parametros y argumentos que le faltan implemetar porque NOSE como se hace ( para que retorne el producto elegido y su precio)
    const precioServ = function (prod1, prud2, prod3) {
        const precioServicio = servicioElegido + costoServ + costoServ2;
        const  precioFinalDG = precioServicio;
        return `El precio final de ${prod1} es de $${precioFinalDG}`;
    };  
    // Salida de datos 
    const resultado = precioServ('Marca');
    alert(resultado);

    elegirOtroServicio = prompt('Si desea elegir otro servicio, escriba SI o NO');
}

alert('Gracias por apoyarnos. Saludos');
