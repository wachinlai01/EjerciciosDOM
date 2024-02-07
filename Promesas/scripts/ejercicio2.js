const URL = 'https://jsonplaceholder.typicode.com/posts';

document.addEventListener('DOMContentLoaded', function(){
    let padre = document.querySelector('body');
    peticionXMLHttpRequest(URL)
        .then(response => {
            // console.log('Éxito: ',response);
            mostrarInfo(response,padre);
        })
        .catch(error => {
            console.error('Error: ', error.message);
        })
})



function peticionXMLHttpRequest(direccion){
    //Creamos la promesa
    return new Promise ((resolve, reject)=>{
        //Creamos una instancia de XMLHttpRequest
        const miObj = new XMLHttpRequest();
        //Configuramos la peticion
        miObj.open('Get',direccion,true);

        //Configuramos el evento onload para cuando la solicitud va bien 
        miObj.onload=function(){
            //Comprobamos que la respuesta esta en el rango de 200 a 300
            console.log('Entrando al onload');
            if (miObj.status>=200 && miObj.status<300) {
                //Si toda va bien resolvemos
                resolve(JSON.parse(miObj.responseText));
            }else{
                //Si hay un error se rechaza
                reject(new Error(`Error en la peticion: ${miObj.status}`))
            }
        };

        //Configuramos evento onError por si hay fallo en lared
        miObj.onerror=function(){
            console.log('Entrando al onerror');
            //Se rechaza la promesa
            reject(new Error('Error de red'));
        };
        console.log('Envío solicitud');
        //Enviamos la peticion
        miObj.send();
    })
}

//Función para recorrer el JSON y mostrar en el HTML
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
