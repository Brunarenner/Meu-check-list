function DigiteAqui(){
    let input = document.querySelector("input").value
    console.log (input)
    let li = document.createElement("li")
    li.innerHTML = input + '<span onclick="deletartarefa(this)">❌</span>'
    console. log(li)
    document.querySelector("ul").appendChild(li)
    document.querySelector("input").value=''


}
function deletartarefa(li){
    li.parentElement.remove()


}