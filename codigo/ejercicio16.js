function cargar(btn){
    btn.disabled=true;
    let carga=document.getElementById("progress");
    let mensaje = document.getElementById("mensajeCarga");
    let avance=1;
    let intervalo = setInterval(function() {
        if (avance<=100){
            carga.setAttribute("value", avance);
            avance++;
            mensaje.textContent=carga.value+"%";
        }else {
            clearInterval(intervalo);
            btn.disabled=false;
            mensaje.textContent="DESCARGA COMPLETADA";
        }
    }, 40);
}

function actualizar(btn){
    btn.disabled=true;
    let carga=document.getElementById("fileProgress");
    let mensaje = document.getElementById("mensajeActulizacion");
    let avance=1;
    let intervalo = setInterval(function() {
        if (avance<=100){
            carga.setAttribute("value", avance);
            avance++;
            mensaje.textContent=carga.value+"%";
        }else {
            clearInterval(intervalo);
            btn.disabled=false;
            mensaje.textContent="ACTUALIZACIÓN COMPLETADA";
        }
    }, 20);
}