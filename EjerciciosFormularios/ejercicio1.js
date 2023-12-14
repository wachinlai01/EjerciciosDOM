//Ejercicio 1
function validarEjercicio1(){
    let valor=document.forms[0].querySelector("[name='coordenada']");
    let error=document.getElementById("errorCoordenada");
    let patron=/^\d{1,3},\d{1,3}$/;
    console.log(valor);
    //Comprobamos si el campo esta vacio
    if (valor.value.trim()===""){
        error.textContent= "Campo obligatorio";
    }else{
        //Comprobamos que cumpla el patron
        if (!patron.test(valor.value)){
            error.textContent= "El formato de la coordenada debe ser 000,000";
        }
        else{
            error.textContent="";
            document.forms[0].querySelector("[type='submit']").disabled=false;
        }
    }
}

//Ejercicio 2

function validarEjercicio2(){
    let hora=document.forms[1].querySelector("[name='hora']");
    let error=document.getElementById("errorHora");
    let patron1= /([0-2][0-4]):([0-5][\d]):([0-5][\d])/;
    let patron2= /([0-2][0-4]):([0-5][\d])/;
    //Comprobamos si el campo esta vacio
    if (hora.value.trim()===""){
        error.textContent= "Campo obligatorio";
    }else{
        //Comprobamos que cumpla el patron
        if (patron1.test(hora.value)||patron2.test(hora.value)){
            error.textContent="";
            document.forms[1].querySelector("[type='submit']").disabled=false;
        }
        else{
            error.textContent= "El formato de la hora debe ser hh:mm:ss o hh:mm";
        }
    }

}

//Ejercicio 3 
function validarEjercicio3(){
    let matricula=document.forms[2].querySelector("[name='matricula']");
    let error=document.getElementById("errorMatricula");
    let patron=/\d{4} [A-Z]{3}/;
    //Comprobamos si el campo esta vacio
    if (matricula.value.trim()===""){
        error.textContent= "Campo obligatorio";
    }else{
        //Comprobamos que cumpla el patron
        if (!patron.test(matricula.value)){
            error.textContent= "El formato de la matricula debe ser 0000 XXX";
        }
        else{
            error.textContent="";
            document.forms[2].querySelector("[type='submit']").disabled=false;
        }
    }
}

function validarEjercicio4(){
    let dia=document.forms[3].querySelector("[name='dia']");
    let error=document.getElementById("errorDia");
    let patron=/^(Lunes|Martes|Miércoles|Jueves|Viernes|Sábado|Domingo|[0-6]) \d{1,2}$/

    //Comprobamos si el campo esta vacio
    if (dia.value.trim()===""){
        error.textContent= "Campo obligatorio";
    }else{
        //Comprobamos que cumpla el patron
        if (!patron.test(dia.value)){
            error.textContent= "El formato de los dias debe ser nombre o numero(0 al 6) seguido de un espacio y un numero(maximo 2 cifras)";
        }
        else{
            error.textContent="";
            document.forms[3].querySelector("[type='submit']").disabled=false;
        }
    }
}


