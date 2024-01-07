//Ejercicio 9

const LETRAS = ["T","R","W","A","G","M","Y","F","P","D","X","B","N","J","Z","S","Q","V","H","L","C","K","E"];

document.forms.validacionDNI.dni.addEventListener("blur",function(){
    let patron = /^\d{8}[A-HJ-NP-TV-Z]$/;
    let dni = document.forms.validacionDNI.dni.value;
    if(!patron.test(dni)){
        alert("DNI invalido")
    }else{
        let letra=dni[dni.length-1];
        let numero=dni.substr(0,8);
        let indice=numero%23;
        if (letra===LETRAS[indice]){
            alert("DNI valido")
        }else{
            alert("DNI invalido");
        }
    }
})