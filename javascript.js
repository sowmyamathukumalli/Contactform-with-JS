let loginForm = document.querySelector(`.form`);
let loginName = document.querySelector(`#username`);
let loginUserid = document.querySelector(`#email`);
let loginPassword = document.querySelector(`#password`);
let conformPassword = document.querySelector(`#conformpassword`);
let submitBtn = document.querySelector(`#button`);
function validateForm() {
    if (loginName.value === null || loginUserid.value === ``) {
        alert(`Name and EmailId cannot be empty`);
        return false;
    } else if (loginPassword.value.length<4) {
       alert(`Password must contain atleast 6 letters`);
       return false;
    } else if (loginPassword.value === conformPassword.value){
        alert(`Registration was succesfully completed!`);
        return true;
    }else {
        alert(`Password doesn't match`);
        return false;
    }
}