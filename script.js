console.log("hello welcome to the coding world")
const DOB = document.querySelector("#DOB");

const LuckyNumber = document.querySelector("#lucky-number");

const button = document.querySelector(".btn");

const output_container = document.querySelector(".center");

const success = document.querySelector(".success")
const error = document.querySelector(".error")



function check_birthday(sum , num){
   if (sum%num===0){
    output_container.classList.add("green")
    output_container.innerText = "your birthday is lucky 🚀 "; 
    setTimeout(() => {
        output_container.innerText = ""
    }, 5000);
}
else {
    output_container.classList.add("red")
    output_container.innerText = "your birthday is not lucky 😔";
    setTimeout(() => {
        output_container.innerText = ""
    }, 5000);
}
   DOB.value  = ""
   LuckyNumber.value = ""
}

function sum_of_DOB(DOB) {
    let num =Number.parseInt(LuckyNumber.value)
    DOB = DOB.value.replaceAll("-","");
    console.log(DOB)
    let sum = 0;
    for (let i = 0; i< DOB.length; i++) {
        console.log(Number(DOB[i]))
        sum = sum + Number.parseInt(DOB[i])
    }
    console.log(sum)
    check_birthday(sum , num)
}


// my js 
button.addEventListener("click" , () =>{
    if (DOB.value === ""){
        console.log("error")
        success.innerText = "Fill date of birth"
        DOB.addEventListener("click" , (e) =>{
            e.target.nextElementSibling.innerText = ""
        })
    }
    else if (LuckyNumber.value === ""){
        error.innerText = "Fill the lucky number"
        LuckyNumber.addEventListener("click" , (e) =>{
            e.target.nextElementSibling.innerText = ""
        })
    }
    else{
        sum_of_DOB(DOB)
    }
})


