const minas = document.getElementById("minas");
const plas = document.getElementById("plas");
const inpute = document.getElementById("inValu");

plas.addEventListener("click", function(){
    inpute.value = parseInt(inpute.value) + 1
})

minas.addEventListener("click", function(){
    if(inpute.value <= 0){
        inpute.value = 0;
    }else(
        inpute.value = parseInt(inpute.value) - 1
    )
})

 // inpute.value = parseInt(inpute.value) - 1