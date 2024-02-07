const URL = 'https://jsonplaceholder.typicode.com/posts';

document.addEventListener('DOMContentLoaded',function(){
    let padre = document.querySelector('body');
    fetch(URL)
        .then(response=>{
            if(!response.ok){
                throw new Error('Error al conectar con la API: '+response.status);
            }
            //Convertimos la respuesta a jSON
            return response.json();
        })
        .then(data=>{
            mostrarInfo(data,padre);
        })
        .catch(error=>{
            console.error('Fallo en la solicitud: ', error);
        });
});

function mostrarInfo(miJson, padre) {
    console.log('entro en la funcion');
    for (let post of miJson) {
        // Verificar si el 'userId' del usuario que creó la publicación es 1
        if (post['userId'] === 1) {
            console.log('Entro al if');
            let contenedor = document.createElement('div');
            let titulo = document.createElement('h2');
            let info = document.createElement('p');
            let textoInfo = document.createTextNode(post['body']);
            info.appendChild(textoInfo);
            let textoTitulo = document.createTextNode(post['title']);
            titulo.appendChild(textoTitulo);
            titulo.appendChild(info);
            contenedor.appendChild(titulo);
            padre.appendChild(contenedor);
        }
    }
}