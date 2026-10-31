let myH1 = document.getElementById("myH1")
let myInput = document.getElementById("myInput")
let myButton = document.getElementById("myButton")
let myCheck = document.getElementById("myCheck") 
let isChecked = false 

myButton.addEventListener("click", function(){
    if(myInput && myInput.value !== ""){
        if (myCheck.checked) {
            let name = myInput.value 
            myH1.textContent = `Welcome ${name}`
            myButton.textContent = "Submited"
            myInput.value = ""
            myButton.textContent = "Submit"
        } else {
            alert("Please enter that you are not robot")
        } 
    }
    else{
        alert("Please enter your name")
    }
}
)

myCheck.addEventListener("change", function(){
    if(isChecked == true){
        isChecked = false
    }else{
        isChecked = true
    }
    myCheck.checked = isChecked
})