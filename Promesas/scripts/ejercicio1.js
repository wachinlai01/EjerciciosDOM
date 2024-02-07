const URL = "https://randomuser.me/api/?results=10";

document.addEventListener('DOMContentLoaded', function(){
    let contenedor = document.getElementById('respuestaJSON');
    //Hacemos solicitud fecth
    fetch(URL)
        .then(response => {
            //Comprobamos si la solicitud es buena
            if(!response.ok){
                throw new Error('Error al conectar con la API: '+response.status);
            }
            //Convertimos la respuesta a jSON
            return response.json();
        })
        .then(data => {
            //Manejo los datos
            // console.log(data);
            contenedor.innerHTML=recorrerJson (data['results']);
        })
        .catch(error =>{
            //Muestro los errores
            console.error('Fallo en la solicitud: ', error);
        });
});

//Forma estándar para recorrerlo, pero podemos encontrarnos problemas clave Object
// function recorrerJson (miJson){
//     for (let obj of miJson){ 
//         for (let clave in obj){
//             let valor = obj[clave];
//             console.log(`${clave}: ${valor}`);
//         }
//     }
// }

//Mediante recursividad no los tendríamos
function recorrerJson(miJson) {
    let salida = "";
    for (let key in miJson) {
        if (typeof miJson[key] === 'object' && miJson[key] !== null) {
            // Si la propiedad es un objeto, llama recursivamente a la función
            salida += `<b>${key}:</b><br>${recorrerJson(miJson[key])}<br>`;
        } else {
            // Si la propiedad es un valor simple, imprime la clave y el valor
            salida += `<b>${key}:</b> ${miJson[key]}<br>`;
        }
    }
    return salida;
}
