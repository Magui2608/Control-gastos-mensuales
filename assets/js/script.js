let listaNombresGastos = [];
let listaValoresGastos = [];
let listaDescripcionesGastos = [];
let gastoActual = -1;

//Esta función se invoca al momento en que el usuario hace click en el botón
function clickBoton() {
    let nombreGasto = document.getElementById("nombreGasto").value;
    let valorGasto = document.getElementById("valorGasto").value;
    let descripcionGasto = document.getElementById("descripcionGasto").value;

    //Verifica que se ingrese el nombre del gaso, su descripción y valor.
    if (nombreGasto === '' || descripcionGasto === '' ||isNaN(valorGasto)) {
        alert('Por favor, ingrese nombre del gasto, descripción y valor');
        return;
    }

     // Verifica si el gasto es mayor a 150
     if(valorGasto > 150){
        alert("Cuidado! Has ingresado un gasto mayor a USD 150!");

    }

    if (gastoActual === -1) {

        listaNombresGastos.push(nombreGasto);
        listaValoresGastos.push(valorGasto);
        listaDescripcionesGastos.push(descripcionGasto);

    } else {

        listaNombresGastos[gastoActual] = nombreGasto;
        listaValoresGastos[gastoActual] = valorGasto;
        listaDescripcionesGastos[gastoActual] = descripcionGasto;
        gastoActual = -1; 
        document.getElementById('botonActualizar').style.display = 'none';
        document.getElementById('botonFormulario').style.display = 'block';

    }

    actualizarListaGastos();
}

//Genera una lista con los gastos ingresados, su detalle y valor y calcula el total de los mismos
function actualizarListaGastos() {
    const listaElementos = document.getElementById("listaDeGastos");
    const totalElementos = document.getElementById("totalGastos");
    let htmlLista = "";
    let totalGastos = 0;
    listaNombresGastos.forEach((elemento, posicion) => {
        const valorGasto = Number(listaValoresGastos[posicion]); // Obtiene el valor del gasto numérico
        const descripcionGasto = listaDescripcionesGastos[posicion]; // Obtiene la descripción del gasto
        htmlLista += `<li>${elemento} - USD ${valorGasto.toFixed(2)} - Descripción: ${descripcionGasto}
        <button onclick="modificarGasto(${posicion});">Modificar</button>
        <button onclick="eliminarGasto(${posicion});">Eliminar</button>
        </li>`;
        //Calculamos el total de los gastos
        totalGastos += Number(valorGasto);

    });

    listaElementos.innerHTML = htmlLista;
    totalElementos.innerHTML = totalGastos.toFixed(2);
    limpiar();
}

//Limpia los campos una vez han sido ingresados a la lista
function limpiar() {
    document.getElementById("nombreGasto").value = "";
    document.getElementById("valorGasto").value = "";
    document.getElementById("descripcionGasto").value = "";
}

//Elimina los gastos no desados
function eliminarGasto(posicion) {
    listaNombresGastos.splice(posicion, 1);
    listaValoresGastos.splice(posicion, 1);
    listaDescripcionesGastos.splice(posicion, 1);
    actualizarListaGastos();
}

//Modifica los gastos ingresados
function modificarGasto(posicion) {
    document.getElementById('nombreGasto').value = listaNombresGastos[posicion];
    document.getElementById('valorGasto').value = listaValoresGastos[posicion];
    document.getElementById('descripcionGasto').value = listaDescripcionesGastos[posicion];
    gastoActual = posicion;
    document.getElementById('botonActualizar').style.display = 'block';
    document.getElementById('botonFormulario').style.display = 'none';

}

function actualizarDatos(){
        
    clickBoton();

}