function showMessage(text) {
    document.getElementById("result")
}
document.addEventListener("click", function(event){
    console.log("Մկնիկը սեղմվեց");    
})
document.addEventListener("keydown", function(event){
    document.getElementById("result").innerText = "Սեղմված ստեղնը՝ " + event.key
})
document.addEventListener("mousemove", function(evemt){
    console.log("X: " + event.clientX + "Y: " + event.clientY);
    
})