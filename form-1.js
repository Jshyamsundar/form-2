const form = document.getElementById("simpleform");
const stuname = document.getElementById("stuname");
const date = document.getElementById("date");
const gender = document.getElementsByName("val");
const qualification = document.getElementById("qualification");
const mobile = document.getElementById("mobile");
const father = document.getElementById("father");
const mother = document.getElementById("mother");
const pmobile = document.getElementById("pmobile");
const country = document.getElementById("country");
const address = document.getElementById("address");
const email = document.getElementById("email");
const pass = document.getElementById("pass");
const cpass = document.getElementById("cpass");
var a = 0;
var b;
var result = []
var cbox = document.getElementsByName("check")

form.addEventListener('submit', e => {
    e.preventDefault();
    checkInputs();

    if (a == 9) {
        display()
    }
    else {
        a = 0
    }
});

let inputValue = document.querySelectorAll("input")
inputValue.forEach(input => {
    input.addEventListener('input',checkInputs)
});

function checkInputs() {
    const stunameVal = stuname.value.trim();
    // const dateVal = date.value.trim();
    // const genderVal = gender.value.trim();
    // const qualificationVal = qualification.value.trim();
    const mobileVal = mobile.value.trim();
    const fatherVal = father.value.trim();
    const motherVal = mother.value.trim();
    const pmobileVal = pmobile.value.trim();
    const emailVal = email.value.trim();
    const addressVal = address.value.trim();
    const passVal = pass.value.trim();
    const cpassVal = cpass.value.trim();

    // names
    if (stunameVal === '') {
        setError(stuname, "please enter your name");
    }
    else {
        setSuccess(stuname);
    }

    // mobile
    if (mobileVal === '') {
        setError(mobile, "enter mobile number");
    }
    else if (mobileVal.length !== 10) {
        setError(mobile, "plaese give 10 digit numbers");
    }
    else {
        setSuccess(mobile);
    }
    for (i = 0; i <= gender.length; i++) {
        if (gender[i].checked) {
            b = gender[i].value;
        }
        else {
            break;
            alert("gender was empty")

        }
    }


    // parents name
    if (fatherVal === '') {
        setError(father, "please enter your father name");
    }
    else {
        setSuccess(father);
    }
    if (motherVal === '') {
        setError(mother, "please enter your mother name");
    }
    else {
        setSuccess(mother);
    }
    // mobile
    if (pmobileVal === '') {
        setError(pmobile, "enter parent mobile number");
    }
    else if (pmobileVal.length !== 10) {
        setError(pmobile, "plaese give 10 digit numbers");
    }
    else {
        setSuccess(pmobile);
    }
    // email
    if (emailVal === '') {
        setError(email, 'email is required');
    }
    else if (!isEmail(emailVal)) {
        setError(email, "please enter a valid email");
    }
    else {
        setSuccess(email);
    }
    // password
    if (passVal === '') {
        setError(pass, "password is required");
    }
    else if (passVal.length < 8) {
        setError(pass, "password must be atleast 8 characters");
    }
    else {
        setSuccess(pass);
    }
    // confirm password
    if (cpassVal === '') {
        setError(cpass, "confirm password is required");
    }
    else if (cpassVal !== passVal) {
        setError(cpass, "password does not match");

    }
    else {
        setSuccess(cpass);
    }

    if (addressVal === '') {
        setError(address, "please enter your address");
    }
    else {
        setSuccess(address);
    }

    for (i = 0; i < cbox.length; i++) {
        if (cbox[i].checked) {
            result.push(cbox[i].value)
        }
    }

    console.log(result.value);

}
function setError(element, message) {
    const inputValue = element.parentElement;
    const errorElement = inputValue.querySelector('.error')
    errorElement.innerText = message;
    inputValue.classList.add('error');
    inputValue.classList.remove('success');

}

function setSuccess(element) {
    a += 1
    const inputValue = element.parentElement;
    const errorElement = inputValue.querySelector('.error')
    errorElement.innerText = '';
    inputValue.classList.add('success');
    inputValue.classList.remove('error');

}
function isEmail(email) {
    return /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/.test(email);
}
display = () => {
    document.write(stuname.value, "<br>")
    document.write(date.value, "<br>")
    document.write(b, "<br>")
    document.write(qualification.value, "<br>")
    document.write(result.join(','), "<br>")
    document.write(country.value, ",<br>")
    document.write(mobile.value, "<br>")
    document.write(father.value, "<br>")
    document.write(mother.value, "<br>")
    document.write(pmobile.value, "<br>")
    document.write(address.value, "<br>")
    document.write(email.value, "<br>")
    document.write(pass.value, "<br>")
    document.write(cpass.value, "<br>")


}

function clear() {
    document.getElementById("stuname") = '';
    document.getElementById("date") = '';
    document.getElementById("gender") = '';
    document.getElementById("qualification") = '';
    document.getElementById("mobile") = '';
    document.getElementById("email") = '';
    document.getElementById("pass") = '';
    document.getElementById("cpass") = '';
    document.getElementById("father") = '';
    document.getElementById("mother") = '';
    document.getElementById("pmobile") = '';
    document.getElementById("address") = '';

}
