//Email Check
const isValidEmail = (email) => {
    const regEx = /\S+@\S+\.\S+/;
    return regEx.test(email);
};

//Password Validation
const validatePassword = (password) => {
    if (password.length <= 5 || password === '') {
        return false;
    } return true;
};


//Mobile Number Check
const isValidMobile = (mobile) => {
    if (mobile.length >= 8 || mobile === '') {
        return false;
    }
    return true;
}

//Empty Check
const empty = (input) => {
    if (input === undefined || input === '') {
        return true;
    }
    return false;
};

module.exports = {
    isValidEmail,
    validatePassword,
    isValidMobile,
    empty
}