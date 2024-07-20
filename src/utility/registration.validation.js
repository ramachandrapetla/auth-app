//Contact details validation
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

export const validateContactDetails = (contactInfo, setError) => {
    let valid = true;
    if(!validatePhoneNumber(contactInfo.phone.formatted, setError, false).valid) valid=false
    if(!validateEmail(contactInfo.email, setError, false).valid) valid=false
    return valid
}

// Personal Details Validation
export const validateName = (field, value) => {
    const validationResult = {
        valid: false,
        errorMessage: ""
    }
    if(value === "") { 
        validationResult.errorMessage = field + "is required" }
    else {
        validationResult.valid = true
    }
    console.log("Name: ", field, value, validationResult.valid)
    return validationResult
}

export const validateDob = (dob) => {
    const validationResult = {
        valid: false,
        errorMessage: ""
    }

    if(dob === "") {
        validationResult.errorMessage = "date of birth is required"
    } else {
        const [year, month, day] = dob.split('-').map(Number);
        const currentDate = new Date();
        const inputDate = new Date(year, month - 1, day);

        const age = currentDate.getFullYear() - inputDate.getFullYear();
        if(age >= 16 && age < 100) {
            validationResult.valid = true
        } else {
            validationResult.errorMessage = "Age should be between 16 and 100"
        }
    }
    console.log("Validate DOB: ", validationResult.valid, validationResult.errorMessage)
    return validationResult
}

export const getTodayDate = () => {
    const today = new Date();

    // Get year, month, and day as strings with leading zeros if necessary
    const year = today.getFullYear();
    const month = String(today.getMonth() + 1).padStart(2, '0'); // Month is zero-indexed
    const day = String(today.getDate()).padStart(2, '0');

    // Format the date as yyyy-mm-dd
    const formattedDate = `${year}-${month}-${day}`;

    return formattedDate;
}

export const getMaxEligibleDob = () => {
    const today = new Date();

    // Get year, month, and day as strings with leading zeros if necessary
    const year = today.getFullYear() - 16;
    const month = String(today.getMonth() + 1).padStart(2, '0'); // Month is zero-indexed
    const day = String(today.getDate()).padStart(2, '0');

    // Format the date as yyyy-mm-dd
    const formattedDate = `${year}-${month}-${day}`;

    return formattedDate;
}

export const getMinEligibleDob = () => {
    const today = new Date();

    // Get year, month, and day as strings with leading zeros if necessary
    const year = today.getFullYear() - 100;
    const month = String(today.getMonth() + 1).padStart(2, '0'); // Month is zero-indexed
    const day = String(today.getDate()).padStart(2, '0');

    // Format the date as yyyy-mm-dd
    const formattedDate = `${year}-${month}-${day}`;

    return formattedDate;
}

export const validatePersonalInfo = (personalInfo) => {
    let isValid = true
    if(!validateName("first name", personalInfo.firstName).valid) isValid = false
    if(!validateName("last name", personalInfo.lastName).valid) isValid = false
    if(!validateDob(personalInfo.dob).valid) isValid = false
    return isValid
}

