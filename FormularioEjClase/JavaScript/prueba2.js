
function mostrar(elemento){
    if (elemento.value=="curso"){
        document.getElementById("cursoLabel").style.display="block";
        document.getElementById("cursoInput").style.display="block";
    }
    else{
        document.getElementById("cursoLabel").style.display="none";
        document.getElementById("cursoInput").style.display="none";
    }
}


function validarNombre(){
    let content=document.getElementById("nombre").value;
    let expresion=/^[a-zA-Z0-9ñÑ\W_]{8,20}$/;
    if (expresion.test(content)){
        alert("Nombre valido");
    }else{
        alert("Nombre no valido");
    }
}

function validarCorreo(){
    let content=document.getElementById("email").value;
    let expresion=/\b[A-Za-z0-9._]+@[A-Za-z0-9.-]+\.[A-Z|a-z]{2,}\b/;
    if (expresion.test(content)){
        alert("Correo valido");
    }else{
        alert("Correo no valido");
    }
}