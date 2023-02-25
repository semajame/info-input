
const email = document.getElementById("email");
const pass = document.getElementById("password");
const error = document.getElementById("error");
const errorimg = document.getElementById("error-img");

//FIRSTNAME//

const fname = document.getElementById ("firstname");

const lname = document.getElementById("lastname");


fname.addEventListener('input', () => {
    if (fname.value.length < 1){
        error.style.display = "inline-block";
        fname.style.border = "2px solid";
        fname.style.borderColor = "var(--cr)";
        errorimg.style.display = "block";

    } else {
        error.style.display = "none";
        fname.style.border = "1px solid";
        fname.style.borderColor = "black";
        errorimg.style.display = "none";
    
    }
})

// LASTNAME//

const errorlname = document.getElementById("error-lname");
const errorlnameimg = document.getElementById("error-lname-img");


lname.addEventListener('input', () => {
    if(lname.value.length < 1){
        errorlname.style.display = "inline-block";
        lname.style.border = "2px solid";
        lname.style.borderColor = "var(--cr)";
        errorlnameimg.style.display = "block";

    } else {
        errorlname.style.display = "none";
        lname.style.border = "1px solid";
        lname.style.borderColor = "black";
        errorlnameimg.style.display = "none";
    }
})


// EMAIL//

const erroremail = document.getElementById("error-email");
const erroremailimg = document.getElementById("error-email-img");

// const emailvalue = email.value.length;


email.addEventListener('input', () => {
    if(email.value.length < 1){
        erroremail.style.display = "inline-block";
        // emailvalue.style.color = "var(--cr)";
        email.style.border = "2px solid";
        email.style.borderColor = "var(--cr)";
        erroremailimg.style.display = "block";

    } else {
        erroremail.style.display = "none";
        email.style.border = "1px solid";
        email.style.borderColor = "black";
        erroremailimg.style.display = "none";
    }
})


//PASSOWRD//
const errorpass = document.getElementById("error-pass");

const errorpassimg = document.getElementById("error-pass-img");


pass.addEventListener('input', () => {
    if(pass.value.length < 1){
        errorpass.style.display = "inline-block";
        pass.style.border = "2px solid";
        pass.style.borderColor = "var(--cr)";
        errorpassimg.style.display = "block";

    } else {
        errorpass.style.display = "none";
        pass.style.border = "1px solid";
        pass.style.borderColor = "black";
        errorpassimg.style.display = "none";
    }
})

