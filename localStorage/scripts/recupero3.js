document.addEventListener('DOMContentLoaded',function(){
    let padre = document.querySelector('h1');
    let botones = document.querySelectorAll('button');
    let mostrar = botones[0];
    let eliminar = botones[1];

    mostrar.addEventListener('click',function(){
        for (let clave in localStorage){
            //Para que no aparezcan propiedades heredadas de localStorage
            if(localStorage.hasOwnProperty(clave)){
                let contenedor = document.createElement('section');
                let p = document.createElement('p');
                let texto = document.createTextNode(`${clave}: ${localStorage.getItem(clave)}`);
                p.appendChild(texto);
                contenedor.appendChild(p);
                padre.appendChild(contenedor);
            }
        }
    })

    eliminar.addEventListener('click',function(){
        localStorage.clear();
    })
})