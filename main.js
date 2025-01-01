let box = document.querySelector("#light")

let button1 = document.querySelector("#btnon")
let button2 = document.querySelector("#btnoff")

// mesha ka dhacaayo actiona

button1.addEventListener("click",function(){
    box.style.backgroundColor = "transparent"

})
button2.addEventListener("click",function(){
    box.style.backgroundColor = "black"
})