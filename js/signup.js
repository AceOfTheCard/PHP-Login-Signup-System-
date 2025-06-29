
document.addEventListener("DOMContentLoaded",function(){

    const form = document.querySelector("form");
    const name = document.getElementById("name");
    const surname = document.getElementById("surname");
    const age = document.getElementById("age")
    const email = document.getElementById("email")
    const password = document.getElementById("password")
    const confirmPassword = document.getElementById("repeatPassword")

    const nameRequirement = document.getElementById("nameRequirements");
    const surnameRequirement = document.getElementById("surnameRequirements");
    const ageRequirement = document.getElementById("ageRequirements");
    const emailRequirement = document.getElementById("emailRequirements");
    const passwordRequirement = document.getElementById("passwordRequirements");
    const confirmPasswordRequirement = document.getElementById("repeatPasswordRequirements");


    name.addEventListener("blur", function(){
        let pattern = /^[a-z ,.'-]+$/i;
        if(!pattern.test(name.value) && name.value != ""){
            nameRequirement.classList.remove("d-none");
            nameRequirement.style.color = "red";
            name.value = "";
            setTimeout(()=>{
                nameRequirement.classList.add("d-none")
            },5000)
        }

    })

    surname.addEventListener("blur", function(){
        let pattern = /^[a-z ,.'-]+$/i;
        if(!pattern.test(surname.value) && surname.value != ""){
            surnameRequirement.classList.remove("d-none");
            surnameRequirement.style.color = "red";
            surname.value = "";
            setTimeout(()=>{
                surnameRequirement.classList.add("d-none")
            },5000)
        }
    })
    
    age.addEventListener("blur", function(){
        if(age.value < 13){
            ageRequirement.classList.remove("d-none");
            ageRequirement.style.color = "red";
            age.value = "";
            setTimeout(()=>{
                ageRequirement.classList.add("d-none")
            },5000)
        }
    })
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
 
    form.addEventListener("submit", function(){
        if(password.value !== confirmPassword.value){
            alert("Please ensure that the password is the same.")
        }
    })


})