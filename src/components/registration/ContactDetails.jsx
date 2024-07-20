import FormField from "../storybook/FormField";
import { connect } from "react-redux";
import { setContactInfoByFieldName } from "../../app/features/registration/contactinfo.slice";
import { useState } from "react";
import { formatPhoneNumber, validateContactDetails, validateEmail, validatePhoneNumber } from "../../utility/registration.validation";

const ContactDetails = ({contactInfo, handleNext, handlePrev, dispatch}) => {
    const [error, setError] = useState({
        emailError: null,
        phoneError: null,
    })
    const [canMoveForward, setCanMoveForward] = useState(validateContactDetails(contactInfo, null))

    const handleChange = (e) => {
        let updatedContactInfo = {};
        switch(e.target.name) {
            case "email":
                if(e.target.value.length > 40) return
                dispatch(setContactInfoByFieldName({
                    name: "email",
                    value: e.target.value
                }))
                updatedContactInfo = {
                    ...contactInfo,
                    email: e.target.value
                }
                break;
            case "phone": 
                const actualPhone = e.target.value.replace(/\D/g, '')
                if(actualPhone.length > 10) return
                dispatch(setContactInfoByFieldName({
                    name: "phone",
                    value: {
                        formatted: e.target.value,
                        actual: e.target.value.replace(/\D/g, '')
                    }
                }))
                updatedContactInfo = {
                    ...contactInfo,
                    phone: {
                        formatted: e.target.value,
                        actual: e.target.value.replace(/\D/g, '')
                    }
                }
                break;
        }
        const isValid = validateContactDetails(updatedContactInfo, setError)
        console.log("Valid", isValid)
        setCanMoveForward(isValid)
  
    }

    return (
        <div>
            <div onChange={handleChange}> 
                <FormField placeholder="youremail@domain.com" label="Enter email address" type="text" value={contactInfo.email} required={true} name="email" onBlur={() => validateEmail(contactInfo.email, setError)} error={error.emailError}/>
                <FormField placeholder="456-343-9843" label="Enter phone number" type="tel"  value={formatPhoneNumber(contactInfo.phone.formatted)} required={true} name="phone" onBlur={() => validatePhoneNumber(contactInfo.phone.formatted, setError)} error={error.phoneError}/>
            </div>
            <div className="button-container">
                <button onClick={handleNext} disabled={!canMoveForward} >Next</button>
                <button onClick={handlePrev}>Prev</button>
            </div>
        </div>
    )
}

function mapStateToProps(state) {
    
    const {contactInfo} = state;

    return {
        contactInfo
    }
}

export default connect(mapStateToProps)(ContactDetails)