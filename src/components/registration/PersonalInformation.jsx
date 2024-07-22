import { useEffect, useState } from "react";
import FormField from "../storybook/FormField";
import { connect } from "react-redux";
import { setPersonalInfoByFieldName } from "../../app/features/registration/personalinfo.slice";
import { getMaxEligibleDob, getMinEligibleDob, getTodayDate, validatePersonalInfo } from "../../utility/registration.validation";

const PersonalInformation = ({personalInfo, handleNext, dispatch}) => {

    const [nextDisabled, setNextDisabled] = useState(!validatePersonalInfo(personalInfo))
    const updatedInfo = {...personalInfo}
    const handleChange= (e) => {
        switch(e.target.name) {
            case "firstName": 
                updatedInfo.firstName = e.target.value
                dispatch(setPersonalInfoByFieldName({
                    name: "firstName",
                    value: e.target.value
                }))
                break;
            case "lastName": 
                updatedInfo.lastName = e.target.value
                dispatch(setPersonalInfoByFieldName({
                    name: "lastName",
                    value: e.target.value
                }))
                break;
            case "dob":
                updatedInfo.dob = e.target.value 
                dispatch(setPersonalInfoByFieldName({
                    name: "dob",
                    value: e.target.value
                }))
                break;
        }
        const isValid = validatePersonalInfo(updatedInfo)
        setNextDisabled(!isValid)
    }

    return (
        <div>
            <div onChange={handleChange}> 
                <FormField placeholder="John" label="Enter First Name" required={true} value={personalInfo.firstName} name="firstName"/>
                <FormField placeholder="Smith" label="Enter Last Name" required={true} value={personalInfo.lastName} name="lastName"/>
                <FormField label="Enter Date of Birth" required={true} value={personalInfo.dob} name="dob" type="date" min={getMinEligibleDob()} max={getMaxEligibleDob()}/>
            </div>
            <div className="button-container">
                <button onClick={handleNext} disabled={nextDisabled}>Next</button>
            </div>
        </div>
    )
}


function mapStateToProps(state) {

    const {personalInfo} = state;

    return {
        personalInfo
    }
}

export default connect(mapStateToProps)(PersonalInformation)