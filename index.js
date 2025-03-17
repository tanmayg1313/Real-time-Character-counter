const textareaE1 = document.getElementById("textarea")
const totalCounterE1 = document.getElementById("total-counter")
const remainingCounterE1 = document.getElementById("remaining-counter")


// The onkeyup event occurs when the user releases a key on the keyboard.
textareaE1.addEventListener("keyup",()=>{
    // console.log("key is pressed")  //testing in consoule
    updateCounter()
})

updateCounter()

function updateCounter(){   
    totalCounterE1.innerText = textareaE1.value.length  

    remainingCounterE1.innerText =  textareaE1.getAttribute("maxLength") - textareaE1.value.length
    //here maxLenght = 50 ... for eg
} 