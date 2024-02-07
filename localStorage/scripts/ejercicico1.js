
document.addEventListener('DOMContentLoaded',function(){
  let form = document.forms[0];
  let boton = form.envio;
  boton.addEventListener('click', function(){
    let nombre = form.nombre.value;
    let clave = form.clave.value;
    localStorage.setItem('nombre',nombre);
    localStorage.setItem('clave',clave);
  })
})