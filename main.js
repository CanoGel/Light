let box = document.querySelector("#ligth")

let button1 = document.querySelector("#btnon")
let button2 = document.querySelector("#btnoff")

// mesha ka dhacaayo actiona

button1.addEventListener("click",function(){
    box.style.backgroundColor = "black"

})
button2.addEventListener("click",function(){
    box.style.backgroundColor = "transparent"
})