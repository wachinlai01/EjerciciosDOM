
document.addEventListener('DOMContentLoaded',function(){
    let padre = document.querySelector('h1');
    let nombre = localStorage.getItem('nombre');
    let clave = localStorage.getItem('clave');
    let contenedor = document.createElement('div');
    let texto = `Nombre: ${nombre} <br> Clave: ${clave}`;
    contenedor.innerHTML=texto;
    padre.appendChild(contenedor);

    let boton = document.querySelector('button');
    boton.addEventListener('click', function(){
        localStorage.clear();
    })
})