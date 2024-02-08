const URL = 'https://www.thecocktaildb.com/api/json/v1/1/random.php';

document.addEventListener('DOMContentLoaded', function(){
    let boton = document.querySelector('button');
    let padre = document.querySelector('#coctel-info');
    boton.addEventListener('click', function(){
        fetch(URL)
            .then(response=>{
                if(!response.ok){
                    throw new Error('Error al conectar con la API: '+response.status);
                }
                //Convertimos la respuesta a jSON
                return response.json();
            })
            .then(data=>{
                console.log(data);
                mostrarCoctel(data['drinks'],padre);
                
            })
            .catch(error=>{
                console.error('Fallo en la solicitud: ', error);
            });
    })
})

function mostrarCoctel(datos,padre) {
    for (let elemento of datos){
        let nombre = elemento['strDrink'];
        let instrucciones = elemento['strInstructions'];
        let imagen = elemento['strDrinkThumb'];
        let contenedor = document.createElement('article');
        contenedor.className = 'coctel';
        let titulo = document.createElement('h2');
        let foto = document.createElement('img');
        let descripcion = document.createElement('p');
        titulo.innerHTML = nombre;
        foto.src=imagen;
        descripcion.innerHTML = instrucciones;
        contenedor.appendChild(titulo);
        contenedor.appendChild(foto);
        contenedor.appendChild(descripcion);
        padre.appendChild(contenedor);
    }
}

