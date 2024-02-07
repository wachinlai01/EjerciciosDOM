
//Expresiones regulares
let regexUser = /^[A-Za-zñÑ0-9_]{4,16}$/;
let regexNombre = /^[A-ZÑ][áéíóúüña-z]+([ ][A-ZÑ][áéíóúüña-z]+)?$/;
// let regexPassw = /^(?=.*\W_)(?=.*\d)(?=.*[a-z])(?=.*[A-Z]){8,15}$/;
let regexPassw = /^[A-Za-z]{8,15}/
let regexMail = /^[a-zA-Z\d_]+@([a-zA-Z\d_]+\.)?[a-z]{3,15}\.[a-z]{2,3}$/;
let regexTel = /^\d{3,14}$/;

//Accedo al formulario
let formulario = document.forms[0];

formulario.querySelector("button[type='submit']").addEventListener("click", function(){
    let msg="";
    if(!regexUser.test(formulario.usuario.value)){
        msg+="Usuario no valido\n";
    }
    if(!regexNombre.test(formulario.nombre.value)){
        msg+="Nombre no valido\n";
    }
    if(!regexPassw.test(formulario.password.value)){
        msg+="Contraseña no valida\n";
    }else{
        if (formulario.password.value!==formulario.password2.value){
            msg+="Las contraseñas deben coincidir\n";
        }
    }
    if(!regexMail.test(formulario.email.value)){
        msg+="Email no valido\n";
    }
    if(!regexTel.test(formulario.phone.value)){
        msg+="Telefono no valido\n";
    }
    if(!formulario.checkTerms.checked){
        msg+="Términos de servicio obligatorios";
    }
    alert(msg);
})

//Para que aparezcan las opciones seleccionadas en el text area

let gustos = formulario.elements["aficiones"];

for (let gusto of gustos){
    gusto.addEventListener("change",function(){
        let salida = formulario.salida.value;
        if (gusto.checked){
            salida+=gusto.value+"\n";
        }
        else{
            let eliminar=gusto.value+"\n";
            salida = salida.replace(new RegExp(eliminar, 'g'), ''); //Para eliminar la palabra si se deselecciona
        }
        formulario.salida.value=salida;
    })
}