
var allProducts = document.querySelectorAll("#name")
var content = document.querySelector("#content")
var showPrice = document.querySelector("#showPrice")
var del = document.querySelector("#del")
var totalPrice = 0


allProducts.forEach(function(item){
    item.onclick = function(){
        totalPrice += +(item.getAttribute("price"))
        content.innerHTML += item.textContent + "<br>"

        if(content.innerHTML != ""){
            showPrice.style.display = "block"
            showPrice.style.backgroundColor = "blue"
            showPrice.style.color = "#fff"
            showPrice.style.width = "140px"
            showPrice.style.height = "40px"
            del.style.display = "block"
            content.style.display = "block"
        }
    }
})

showPrice.onclick = function (){
    document.getElementById("Price").innerHTML = totalPrice
    Price.style.display = "block"

}

del.onclick = function(){
    content.innerHTML = ""
    del.style.display = "none"
    document.getElementById("Price").innerHTML = totalPrice = 0
    Price.style.display = "none"
    showPrice.style.display = "none"


}