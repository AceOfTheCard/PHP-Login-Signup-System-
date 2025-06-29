document.addEventListener("DOMContentLoaded", function(){

    const email = document.getElementById("email");
    const password = document.getElementById("password");

    const emailRequirement = document.getElementById("emailRequirement");
    const passwordRequirement = document.getElementById("passwordRequirements");

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


})