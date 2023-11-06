function cargar(btn){
    btn.disabled=true;
    let carga=document.getElementById("progress");
    let mensaje = document.getElementById("mensajeCarga");
    let avance=1;
    let monedero=document.querySelector("#monedero");
    let intervalo = setInterval(function() {
        if (avance<=100){
            carga.setAttribute("value", avance);
            avance++;
            mensaje.textContent=carga.value+"%";
        }else {
            clearInterval(intervalo);
            btn.disabled=false;
            mensaje.textContent="Moneda Generada";
            monedero.innerText++;
        }
    }, 40);
}
