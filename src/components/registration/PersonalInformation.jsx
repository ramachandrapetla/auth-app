import { useEffect, useState } from "react";
import FormField from "../storybook/FormField";
import { connect } from "react-redux";
import { setPersonalInfoByFieldName } from "../../app/features/registration/personalinfo.slice";

const PersonalInformation = ({personalInfo, dispatch}) => {

    const handleChange= (e) => {
        switch(e.target.name) {
            case "firstName": 
                dispatch(setPersonalInfoByFieldName({
                    name: "firstName",
                    value: e.target.value
                }))
                break;
            case "lastName": 
                dispatch(setPersonalInfoByFieldName({
                    name: "lastName",
                    value: e.target.value
                }))
                break;
            case "dob": 
                dispatch(setPersonalInfoByFieldName({
                    name: "dob",
                    value: e.target.value
                }))
                break;
        }
    }

    return (
        <div onChange={handleChange}> 
            <FormField placeholder="eg. John" label="Enter First Name" required={true} value={personalInfo.firstName} name="firstName"/>
            <FormField placeholder="eg. Smith" label="Enter Last Name" required={true} value={personalInfo.lastName} name="lastName"/>
            <FormField placeholder="eg. 01/01/1997" label="Enter Date of Birth" required={true} value={personalInfo.dob} name="dob" type="date"/>
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