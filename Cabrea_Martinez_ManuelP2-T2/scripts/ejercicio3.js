const URL = "https://rickandmortyapi.com/api/character"; 
const POST = 'https://reqres.in/api/users';

document.addEventListener('DOMContentLoaded', function(){
    let mostrar = document.querySelector('#envio');
    let envio = document.querySelector('#coloco');
    let padre = document.querySelector('#salida');
    let form = document.forms[1];
    console.log(form);
    mostrar.addEventListener('click',function(e){
        e.preventDefault();
        padre.innerHTML = '';
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
                mostrarPersonaje(data['results'],padre);
                
            })
            .catch(error=>{
                console.error('Fallo en la solicitud: ', error);
            });
    })

    envio.addEventListener('click', function(e){
        e.preventDefault();
        padre.innerHTML = '';
        let nombre = form.nombre.value;
        let dni = form.dni.value;
        let edad = form.edad.value.toString();
        if (nombre.length!=0&&dni.length!=0&&edad.length!=0){
            let miPost = {
                nombre: nombre,
                dni: dni,
                edad: edad
            };
            fetch(POST, {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json' 
                },
                body: JSON.stringify(miPost)
                })
                .then(respuesta=>respuesta.json())
                .then(info=>{
                    console.log('Respuesta');
                    console.log(info);
                    mostrarPost(info, padre);
                })
                .catch(error=>{
                    console.log('Error', error);
                })
        }
        form.nombre.value = '';
        form.dni.value = '';
        form.edad.value = '';
    })
})

function mostrarPersonaje(data, padre){
    for (let elemento of data){
        let contenedor = document.createElement('section');
        contenedor.className = 'ficha';
        let name = elemento['name'];
        let specie = elemento['species'];
        let gender = elemento['gender'];
        let image = elemento['image'];
        let titulo = document.createElement('h2');
        let imagen = document.createElement('img');
        let datos = document.createElement('p');
        datos.innerHTML = `Género: ${gender} Especie: ${specie}`;
        imagen.src = image;
        titulo.innerHTML = name;
        contenedor.appendChild(titulo);
        contenedor.appendChild(imagen);
        contenedor.appendChild(datos);
        padre.appendChild(contenedor);
    }
}

function mostrarPost(info, padre){
    let contenedor = document.createElement('section');
    contenedor.className = 'ficha';
    for (let key in info){
        let p=document.createElement('p');
        let salida=(`${key}: ${info[key]}`);
        p.innerHTML=salida;
        contenedor.appendChild(p);
    }
    padre.appendChild(contenedor);
}