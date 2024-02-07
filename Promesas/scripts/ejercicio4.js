const URL = 'https://swapi.dev/api/people/1/';

document.addEventListener('DOMContentLoaded',async function(){
    let padre = document.querySelector('body');
    let data = await consultaApi(URL);
    recuperarNombre(data,padre);
    recuperarGenero(data,padre);
    recuperarPelis(data,padre);
});

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

function recuperarNombre(valor,padre){
    let titulo = document.createElement('h2');
    titulo.appendChild(document.createTextNode('Nombre: ' + valor['name']));
    padre.appendChild(titulo);
}

function recuperarGenero(valor,padre){
    let genero = document.createElement('h3');
    genero.appendChild(document.createTextNode('Género: ' + valor['gender']));
    padre.appendChild(genero);
}

async function recuperarPelis(valor,padre){
    let texto="Peliculas: <br>";
    let peliculas = valor['films'];
    for (let pelicula of peliculas){
        let info = await consultaApi(pelicula);
        texto += info['title'] + ' episodio ' + info['episode_id'] + '<br>';
    }
    let bloque = document.createElement('h3');
    bloque.innerHTML=texto;
    padre.appendChild(bloque);
}

