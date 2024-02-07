document.addEventListener('DOMContentLoaded',function(){
    let botones = document.querySelectorAll('button');
    let add = botones[0];
    let del = botones[1];
    let vac = botones[2];
    let padre = document.querySelector('ul');

    recuperarLocalStorage(padre);
    
    add.addEventListener('click',function(){
        let texto = document.querySelector('input').value;
        if (texto.length!=0){ 
            let elemento = document.createElement('li');
            elemento.appendChild(document.createTextNode(texto));
            padre.appendChild(elemento);
            aniadirLocalStorage(texto);
        }
    })

    del.addEventListener('click',function(){
        let texto = document.querySelector('input').value;
        let lista = document.querySelectorAll('li');
        if (texto.length!=0 && lista.length!=0){ 
            for (let elemento of lista){
                if (elemento.textContent.trim().toLowerCase()==texto.trim().toLowerCase()){
                    padre.removeChild(elemento);
                }
            }
            eliminarLocalStorage(texto);
        }
    })

    vac.addEventListener('click',function(){
        while(padre.firstChild){
            padre.removeChild(padre.firstChild);
        }
        localStorage.removeItem('miLista');
    })
})

function aniadirLocalStorage(item){
    //Recupero el localStorage y lo parseo a array, en caso de no existir creamos un array vacio
    let arrayStorage = JSON.parse(localStorage.getItem('miLista')) || [];
    //Añado el elemento al array
    arrayStorage.push(item);
    //Guardo el array modificado en el local storage
    localStorage.setItem('miLista', JSON.stringify(arrayStorage));
}

function eliminarLocalStorage(item){
    //Recupero el localStorage y lo parseo a array, en caso de no existir creamos un array vacio
    let arrayStorage = JSON.parse(localStorage.getItem('miLista')) || [];
    //Añado el elemento al array
    arrayStorage = arrayStorage.filter(elemento => elemento.trim().toLowerCase() !== item.trim().toLowerCase());
    //Guardo el array modificado en el local storage
    localStorage.setItem('miLista', JSON.stringify(arrayStorage));
}

function recuperarLocalStorage(padre){
    //Recupero el localStorage y lo parseo a array, en caso de no existir creamos un array vacio
    let arrayStorage = JSON.parse(localStorage.getItem('miLista')) || [];
    for (let elemento of arrayStorage){
        let contenedor = document.createElement('li');
        contenedor.appendChild(document.createTextNode(elemento));
        padre.appendChild(contenedor);
    }
}