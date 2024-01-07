//Ejercicio 10

const INTEL = ["HD 3000","HD 4000", "IRIS 600"];
const AMD = ["RX Series 500","Vega Series", "RX Series 6000"];
const NVIDIA = ["GTX Serie 1000","GTX Serie 2000","GTX Serie 3000"];

document.forms.miFormulario.fabricante.addEventListener("click",function(){
    let formulario=document.forms.miFormulario;
    let valor=formulario.fabricante.value;
    switch (valor){
        case "Intel":
            eliminarOptions(formulario.modelo);
            for (let elemento of INTEL){
                let texto = document.createTextNode(elemento);
                let option = document.createElement("option");
                option.appendChild(texto);
                formulario.modelo.appendChild(option);
            }
            break;
        case "AMD":
            eliminarOptions(formulario.modelo);
            for (let elemento of AMD){
                let texto = document.createTextNode(elemento);
                let option = document.createElement("option");
                option.appendChild(texto);
                formulario.modelo.appendChild(option);
            }
            break;
        case "Nvidia":
            eliminarOptions(formulario.modelo);
            for (let elemento of NVIDIA){
                let texto = document.createTextNode(elemento);
                let option = document.createElement("option");
                option.appendChild(texto);
                formulario.modelo.appendChild(option);
            }
            break;
        default:
            eliminarOptions(formulario.modelo);
            break;
    }
})

document.forms.miFormulario.querySelector('input[type="submit"]').addEventListener("click",function(){
    let formulario=document.forms.miFormulario;
    let valor=formulario.fabricante.value;

    if(valor.length>0&&formulario.modelo.length>0){
        alert("Ambos campos rellenos");
    }else{
        alert("Faltan valores");
    }
})


//Funcion para eliminar las options de un select
function eliminarOptions(select){
    while (select.firstChild) {
        select.removeChild(select.firstChild);
    }
}