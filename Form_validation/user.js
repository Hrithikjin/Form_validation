const form = document.querySelector('#form')
const username = document.querySelector('#username')
const email = document.querySelector('#email')
const password = document.querySelector('#password')
const cpassword = document.querySelector('#cpassword')

//submit button
form.addEventListener('submit',(e) => {

    if(!ValidateInput()){
        e.preventDefault();
    }
})

function ValidateInput(){
    const userval = username.value.trim();
    const emailval = email.value.trim();
    const passwordval = password.value.trim();
    const cpasswordval = cpassword.value.trim();
    let success = true
//username
    if(userval === ''){
        success = false;
        setError(username,'Username is requied')
    }
    else{
        setSuccess(username)
    }

//Email    
    if(emailval === ''){
        success = false;
        setError(email,'Email is required')
    }
    else if(!validateEmail(emailval)){
        setError(email,'please enter a valid Email')
    }
    else{
        setSuccess(email)
    }

//Password    
    if(passwordval === ''){
        success = false;
        setError(password,'password is requierd')
    }
    else if(passwordval.length< 8){
        setError(password,"password must has atleast 8 character that include atleat 1 lowercase character,1 uppercase character, 1 number and 1 special character in (!@#$%^&*)")
    }
    else{
        setSuccess(password)
    }

//Confirm password    
    if (cpasswordval === ''){
        success = false;
        setError(cpassword,'confirm password is required')
    }
    else if(cpasswordval!== passwordval){
        setError(cpassword,'password does not match')
    }
    else{
        setSuccess(cpassword)
    }

}

//element - password, msg - password is requierd
function setError(element,message){
    const inputGroup = element.parentElement;
    const errorElement = inputGroup.querySelector('.error')

    errorElement.innerText = message;
    inputGroup.classList.add('error')
    inputGroup.classList.remove('success')

}

function setSuccess(element){
    const inputGroup = element.parentElement;
    const errorElement = inputGroup.querySelector('.error')

    errorElement.innerText = '';
    inputGroup.classList.add('success')
    inputGroup.classList.remove('error')

}

const validateEmail = (email) => {
    return String(email)
    .toLowerCase()
    .match(/^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/
    );
}