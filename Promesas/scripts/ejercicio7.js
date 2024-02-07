/**
 * Ejercicio 7: Realizar un llamada FETCH a la siguiente API
https://swapi.dev/api/people/
a) Cargar el listado de Personajes.
b) Permitir elegir el personaje para el cual quiero visualizar todas las películas en las
que ha participado.
 */

const URL = "https://swapi.dev/api/people/";

document.addEventListener('DOMContentLoaded', async function(){
    let padre = document.querySelector('div');
    let data = await consultaApi(URL);
    mostrarNames(data['results'],padre);
    //Añadimos al select un evento para que se muestren las pelis
    let select = document.querySelector('select');
    select.addEventListener('change', function(e){
        let name = e.target.value;
        mostrarPelis(name,data['results']);
    })
})

async function consultaApi(direccion) {
    try {
        const response = await fetch(direccion);

        if (!response.ok) {
            throw new Error('Error al conectar con la API: ' + response.status);
        }
        const data = await response.json();
        // console.log(data);
        return data;
    } catch (error) {
        console.error('Fallo en la solicitud: ', error);
        throw error; // Rechazar la Promesa en caso de error
    }
}

function mostrarNames(data,padre) {
    let desplegable = document.createElement('select');
    for (let personaje of data){
        console.log(personaje['name']);
        let item = document.createElement('option');
        item.innerHTML=personaje['name'];
        desplegable.appendChild(item);
    }
    padre.appendChild(desplegable);
}

async function mostrarPelis(name, data) {
    let contenedor = document.querySelector('section');
    let salida ="";
    for (let personaje of data){
        if (personaje['name']==name){
            for (let pelicula of personaje['films']){
                let info = await consultaApi(pelicula);
                salida += info['title'] + '<br>';
            }
        }
    }
    contenedor.innerHTML=salida;
}
