function isValidNumber(value){
    const re =/^((\\+[1-9]{1,4}[ \\-]*)|(\\([0-9]{2,3}\\)[ \\-]*)|([0-9]{2,4})[ \\-]*)*?[0-9]{3,4}?[ \\-]*[0-9]{3,4}?$/
return re.test(value)

}
function validateEmail(value, setEmailError) {
    if (value.length < 10 || value.length > 10 ) {
        setEmailError("Invalid Number")
    }
    else if (isValidNumber(value)) {
        setEmailError("")
    }
    else {
        setEmailError("Invalid Number")
    }
}

function validatePassword(value, setPasswordError) {
    if (value.length <= 7) {
        setPasswordError("Password must be 8 characters")
    } else {
        setPasswordError("")
    }
}
function validateBoth(value1,value2, setPasswordError) {
    if (value1 != value2) {
        setPasswordError("Password doesn't match")
    } else {
        setPasswordError("")
    }
}
const utils = {

    validateEmail,
    validatePassword,
    validateBoth
    
};

export default utils;