
// Loading the conent of the dom initially 
document.addEventListener("DOMContentLoaded",function(){

    const form = document.querySelector("form");
    const name = document.getElementById("name");
    const surname = document.getElementById("surname");
    const age = document.getElementById("age")
    const email = document.getElementById("email")
    const password = document.getElementById("password")
    const confirmPassword = document.getElementById("repeatPassword")

    // Requirements 
    const nameRequirement = document.getElementById("nameRequirements");
    const surnameRequirement = document.getElementById("surnameRequirements");
    const ageRequirement = document.getElementById("ageRequirements");
    const emailRequirement = document.getElementById("emailRequirements");
    const passwordRequirement = document.getElementById("passwordRequirements");
    const confirmPasswordRequirement = document.getElementById("repeatPasswordRequirements");


    // checking name
    name.addEventListener("blur", function(){
        let pattern = /^[a-z ,.'-]+$/i;
        if(!pattern.test(name.value) && name.value != ""){
            nameRequirement.classList.remove("d-none");
            nameRequirement.style.color = "red";
            name.value = "";
            // setting timeout
            setTimeout(()=>{
                nameRequirement.classList.add("d-none")
            },5000)
        }

    })

    // checking surname 
    surname.addEventListener("blur", function(){
        let pattern = /^[a-z ,.'-]+$/i;
        if(!pattern.test(surname.value) && surname.value != ""){
            surnameRequirement.classList.remove("d-none");
            surnameRequirement.style.color = "red";
            surname.value = "";
            // setting timeout
            setTimeout(()=>{
                surnameRequirement.classList.add("d-none")
            },5000)
        }
    })
    
    // checking age
    age.addEventListener("blur", function(){
        if(age.value < 13){
            ageRequirement.classList.remove("d-none");
            ageRequirement.style.color = "red";
            age.value = "";
            // setting timeout
            setTimeout(()=>{
                ageRequirement.classList.add("d-none")
            },5000)
        }
    })

    // checking email
    email.addEventListener("blur", function(){
        let pattern = /^[^\s@]+@[^\s@]+\.[^\s@]+$/
        if(!pattern.test(email.value) && email.value != ""){
            emailRequirement.classList.remove("d-none");
            emailRequirement.style.color = "red";
            setTimeout(()=>{
                emailRequirement.classList.add("d-none")
            },5000)
            
        }
    })


    // checking password 
    password.addEventListener("blur", function(){
        let pattern = /^(?=.*[A-Z])(?=.*\d)(?=.*[!@#$%^&*])[A-Za-z\d!@#$%^&*]{6,}$/;
        if(!pattern.test(password.value) && password.value != ""){
            passwordRequirement.classList.remove("d-none");
            passwordRequirement.style.color = "red"
            password.value = "";
            setTimeout(function(){
                passwordRequirement.classList.add("d-none")
            }, 5000)
        }
    })

    // confirm password 
    confirmPassword.addEventListener("blur", function(){
        let pattern = /^(?=.*[A-Z])(?=.*\d)(?=.*[!@#$%^&*])[A-Za-z\d!@#$%^&*]{6,}$/;
        if(!pattern.test(confirmPassword.value) && confirmPassword.value != ""){
            confirmPasswordRequirement.classList.remove("d-none");
            confirmPasswordRequirement.style.color = "red"
            password.value = "";
            setTimeout(function(){
                confirmPasswordRequirement.classList.add("d-none")
            }, 5000)
        }
    })
    

    // with the submition of the form 
    form.addEventListener("submit", function(){
        if(password.value !== confirmPassword.value){
            alert("Please ensure that the password is the same.")
        }
    })


})