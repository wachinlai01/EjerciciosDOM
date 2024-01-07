//Ejercicio 1

function copiarTexto(){
    let formulario=document.forms.formulario1;
    let contenido=formulario.campo1.value;
    formulario.campo2.value=contenido;
}

//Ejercicio 2

document.forms.formulario2.campo1.addEventListener("keydown",function(event){
    let tecla = event.key;
    document.forms.formulario2.campo2.value+=tecla;
})

function limpiar(){
    let formulario=document.forms.formulario2;
    formulario.campo1.value="";
    formulario.campo2.value="";
}

//Ejercicio 3 a

function mostrarSeleccion(){
    let formulario = document.forms.formularioAficiones;
    // let aficiones = formulario.querySelectorAll('input[type="checkbox"]');
    let aficiones = formulario.elements["aficiones"];
    let salida = "";

    for (let aficion of aficiones){
        if (aficion.checked){
            salida+=aficion.value+"\n";
        }
    }

    formulario.salida.value=salida;
}

//Ejercicio 3 b

let gustos = document.forms.formularioAficiones2.elements["aficiones"];

for (let gusto of gustos){
    gusto.addEventListener("change",function(){
        let salida = document.forms.formularioAficiones2.salida.value;
        if (gusto.checked){
            salida+=gusto.value+"\n";
        }
        else{
            let eliminar=gusto.value+"\n";
            salida = salida.replace(new RegExp(eliminar, 'g'), ''); //Para eliminar la palabra si se deselecciona
        }
        document.forms.formularioAficiones2.salida.value=salida;
    })
}
