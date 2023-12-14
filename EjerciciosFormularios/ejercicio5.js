function validarEjercicio5(){
    comprobarDNI();
    comprobarNombre();
    comprobarApellido();
    comprobarEmail();
    comprobarWeb();
    comprobarContrasena();
    comprobarHijos();
    if(comprobarContrasena()&&comprobarApellido()&&comprobarDNI()&&comprobarEmail()&&comprobarNombre()&&comprobarWeb()&&comprobarHijos()){
        document.forms[0].querySelector("[type='submit']").disabled=false;
    }
}

function comprobarDNI(){
    let valor=document.forms[0].querySelector("[name='DNI']");
    let error=document.getElementById("errorDNI");
    let patron=/^[1-9]\d{7}-[A-Z]$/;
    //Comprobamos si el campo esta vacio
    if (valor.value.trim()===""){
        error.textContent= "Campo obligatorio";
        return false;
    }else{
        //Comprobamos que cumpla el patron
        if (!patron.test(valor.value)){
            error.textContent= "El formato del DNI debe ser 11111111-X ";
            return false;
        }
        else{
            error.textContent="";
            return true;
        }
    }
}

function comprobarNombre(){
    let valor=document.forms[0].querySelector("[name='nombre']");
    let error=document.getElementById("errorNombre");
    let patron=/^[A-Z][a-z]+([ ][A-Z][a-z]+)?$/;
    //Comprobamos si el campo esta vacio
    if (valor.value.trim().length<3){
        valor.value="";
        error.textContent= "Campo obligatorio de minimo 3 letras";
        return false;
    }else{
        //Comprobamos que cumpla el patron
        if (!patron.test(valor.value)){
            error.textContent= "Maximo de dos nombres separados por un unico espacio";
            return false;
        }
        else{
            error.textContent="";
            return true;
        }
    }
}

function comprobarApellido(){
    let valor=document.forms[0].querySelector("[name='apellido']");
    let error=document.getElementById("errorApellido");
    let patron=/^[A-Z][a-z]+([ ][A-Z][a-z]+)?$/;
    //Comprobamos si el campo esta vacio
    if (valor.value.trim().length<3){
        valor.value="";
        error.textContent= "Campo obligatorio de minimo 3 letras";
        return false;
    }else{
        //Comprobamos que cumpla el patron
        if (!patron.test(valor.value)){
            error.textContent= "Maximo de dos apellidos separados por un unico espacio";
            return false;
        }
        else{
            error.textContent="";
            return true;
        }
    }
}


function comprobarEmail(){
    let valor=document.forms[0].querySelector("[name='email']");
    let error=document.getElementById("errorEmail");
    let patron=/^[a-zA-Z\d_]+@([a-zA-Z\d_]+\.)?[a-z]{3,15}\.[a-z]{2,3}$/;
    ;
    //Comprobamos si el campo esta vacio
    if (valor.value.trim()===""){
        error.textContent= "Campo obligatorio";
        return false;
    }else{
        //Comprobamos que cumpla el patron
        if (!patron.test(valor.value)){
            error.textContent= "Validos correos con subdominio y sin el";
            return false;
        }
        else{
            error.textContent="";
            return true;
        }
    }
}

function comprobarWeb(){
    let valor=document.forms[0].querySelector("[name='web']");
    let error=document.getElementById("errorWeb");
    let patron=/^https:\/\/www\.[a-z]+\.[a-z]{2,3}$/;
    //Comprobamos si el campo esta vacio
    if (valor.value.trim()===""){
        error.textContent= "Campo obligatorio";
        return false;
    }else{
        //Comprobamos que cumpla el patron
        if (!patron.test(valor.value)){
            error.textContent= "Validas web https://www.xxxxx.zzz";
            return false;
        }
        else{
            error.textContent="";
            return true;
        }
    }
}

function comprobarContrasena(){
    let valor=document.forms[0].querySelector("[name='contrasena']");
    let error=document.getElementById("errorContrasena");
    let patron=/^[A-Za-z\d_\-@]{8,10}$/;
    //Comprobamos si el campo esta vacio
    if (valor.value.trim()===""){
        error.textContent= "Campo obligatorio";
        return false;
    }else{
        //Comprobamos que cumpla el patron
        if (!patron.test(valor.value)){
            error.textContent= "Contraseña de 8 a 10 caracteres validas letras numeros @ - _";
            return false;
        }
        else{
            error.textContent="";
            return true;
        }
    }
}

function comprobarHijos(){
    let valor=document.forms[0].querySelector("[name='hijos']");
    let error=document.getElementById("errorHijos");
    //Comprobamos si el campo esta vacio
    if (valor.value.trim()===""){
        error.textContent= "Campo obligatorio";
        return false;
    }else{
        //Comprobamos que cumpla el patron
        if (valor.value<0||valor.value>10){
            valor.value="";
            error.textContent= "Valores admitidos de 0 a 10";
            return false;
        }
        else{
            error.textContent="";
            return true;
        }
    }
}