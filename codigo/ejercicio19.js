function add(){
    let usuario=prompt("Escribe algo: ");
    let nuevo=document.createElement("li");
    let texto=document.createTextNode(usuario);
    nuevo.appendChild(texto);
    let contenedor=document.querySelector("ul");
    contenedor.appendChild(nuevo);
}