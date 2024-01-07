//Ejercicio 8 a

// let coloresRadioForm = document.forms.coloresRadio;
// let listaColoresRadio = coloresRadioForm.color;

// for (let color of listaColoresRadio){
//     color.addEventListener("change",function(){
//         document.getElementsByClassName("div1")[0].style.backgroundColor=color.value;
//     })
// }

document.forms.coloresRadio.color.forEach(function(color){
    color.addEventListener("change", function(){
        document.getElementsByClassName("div1")[0].style.backgroundColor = color.value;
    });
});


//Ejercicio 8 b

document.forms.coloresSelect.color.addEventListener("change",function(){
    document.getElementsByClassName("div1")[1].style.backgroundColor=this.value;
})