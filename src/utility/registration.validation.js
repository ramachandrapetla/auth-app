export const validateEmail = (email, setError, displayError=true) => {
    if(displayError) setError((state) => ({...state, emailError: null}))
    const emailRegexPattern = /^[\w-\.]+@([\w-]+\.)+[\w-]{2,4}$/
    const validationResult = {
        valid: false,
        errorMessage: "",
        email: email
    }

    if(email.trim() !== "") {
        if(email.match(emailRegexPattern)) {
            console.log("Valid Email")
            validationResult.valid = true
        } else {
            validationResult.errorMessage ="please enter a valid email address"
        }
    } else {
        validationResult.errorMessage = "email address is required"
    }
    
    if(!validationResult.valid && displayError) {
        setError((state) => ({
            ...state,
            emailError: validationResult.errorMessage
        }))
    }
    console.log(validationResult)
    if(validationResult.valid && setError) setError((state) => ({...state, emailError: null}))
    return validationResult
}

export const validatePhoneNumber = (phone, setError, displayError=true) => {
    //Clear error before validating
    if(displayError) setError((state) => ({...state, phoneError: null}))
    const validationResult = {
        valid: false,
        errorMessage: ""
    }
    // Regex for North American phone number format: (123) 456-7890 or 123-456-7890
    const regex = /^\(?(\d{3})\)?[- ]?(\d{3})[- ]?(\d{4})$/;
    if(phone.length === 0) {
        validationResult.errorMessage = "phone number is required"
    } else if(regex.test(phone)) {
        validationResult.valid = true
    } else validationResult.errorMessage = "Enter valid phone number"

    //return validationResult

    if(!validationResult.valid && displayError) {
        setError((state) => ({
            ...state,
            phoneError: validationResult.errorMessage
        }))
    }

    if(validationResult.valid && setError) {
        setError((state) => ({...state, phoneError: null}))
    }

    return validationResult
}

export const validateContactDetails = (contactInfo, setError) => {
    let valid = true;
    if(!validatePhoneNumber(contactInfo.phone.formatted, setError, false).valid) valid=false
    if(!validateEmail(contactInfo.email, setError, false).valid) valid=false
    return valid
}

export const formatPhoneNumber = (number) => {
    number = number.replace("-", "");
    number = number.replace(/\D/g, '');

    if (number.length <= 3) {
        return number;
    } else if (number.length <= 6) {
        return `(${number.slice(0, 3)}) ${number.slice(3)}`;
    } else {
        return `(${number.slice(0, 3)}) ${number.slice(3, 6)}-${number.slice(6, 10)}`;
    }
}