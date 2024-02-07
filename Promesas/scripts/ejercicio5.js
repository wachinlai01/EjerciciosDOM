const URL = 'https://swapi.dev/api/people/1/';
const POST = 'https://reqres.in/api/users';

document.addEventListener('DOMContentLoaded',async function(){
    let padre = document.querySelector('body');
    fetch(URL)
        .then(response=>{
            if(!response.ok){
                throw new Error('Error al conectar con la API: '+response.status);
            }
            return response.json();
        })
        .then(data=>{
            const envio ={ 
                name: data['name'],
                gender: data['gender']
            };
            fetch(POST, {
                    method: 'POST',
                    headers: {
                        'Content-Type': 'application/json' 
                    },
                    body: JSON.stringify(envio)
                })
                .then(respuesta=>respuesta.json())
                .then(info=>{
                    console.log('Respuesta', info);
                    verEnHtml(padre,info['name']);
                    verEnHtml(padre,info['gender']);
                    verEnHtml(padre,info['id']);
                    verEnHtml(padre, info['createdAt']);
                })
                .catch(error=>{
                    console.log('Error', error);
                })
        })
        .catch(error=>{
            console.error('Fallo en la solicitud: ', error);
        });
});

function verEnHtml(padre,texto){
    let p = document.createElement('p');
    p.appendChild(document.createTextNode(texto));
    padre.appendChild(p);
}