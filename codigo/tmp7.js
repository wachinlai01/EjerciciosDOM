document.querySelectorAll("td").forEach(function(fila){
    fila.addEventListener("click",function(){
        let colores=['white','black','red','blue'];
        let color=fila.style.backgroundColor;
        switch (color){
            case "blue":
                fila.style.setProperty("background-color",colores[0]);
                break;
            case "black":
                fila.style.setProperty("background-color",colores[2]);
                break;
            case "red":
                fila.style.setProperty("background-color",colores[3]);
                break;
            default:
                fila.style.setProperty("background-color",colores[1]);
                break;
        }
    })
})