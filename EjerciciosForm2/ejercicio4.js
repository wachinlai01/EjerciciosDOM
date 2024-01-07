//Ejercicio 4

document.forms.conversor.querySelector('button[type="submit"]').addEventListener("click",function(){
    let formulario=document.forms.conversor;
    let cantidad = formulario.cantidad.value;
    let cambio = formulario.moneda.value;
    if (cambio==="euros"){
        cantidad=cantidad*0.83;
    }else{
        cantidad=cantidad/0.83;
    }
    formulario.resultado.value=cantidad;
})

//Ejercicio 5

function comprobar(){
    let formulario=document.forms.anagrama;
    let palabra1 = formulario.campo1.value.split("").sort().join("");
    let palabra2 = formulario.campo2.value.split("").sort().join("");
    if (palabra1!==""&&palabra2!==""){
        if (palabra1===palabra2){
            alert("Es anagrama");
        }else{
            alert("No es anagrama");
        }
    }else{
        alert("No es anagrama");
    }
}

//Ejercicio 6

let paises = document.forms.formularioPaises.elements["pais"];
let select = document.forms.formularioPaises.elements["listaPaises"];

for (let pais of paises){
    pais.addEventListener("change", function(){
        if (this.checked){
            let option = document.createElement("option");
            let texto = document.createTextNode(pais.value);
            option.appendChild(texto);
            select.appendChild(option);
        }else{
            //Obtenemos un array con todos los elemento del select
            let opciones = select.options;
            for (let opcion of opciones){
                if (this.value===opcion.value){
                    select.removeChild(opcion);
                }
            }
        }
    })
}
