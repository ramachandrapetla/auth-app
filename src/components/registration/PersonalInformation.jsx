import { useState } from "react";
import FormField from "../storybook/FormField";

const PersonalInformation = () => {
    const [personalInfo, setPersonalInfo] = useState({
        firstName: "",
        lastName: "",
        dob: ""
      })

    const handleChange= (e) => {
        switch(e.target.name) {
            case "firstName": 
                setPersonalInfo({
                    ...personalInfo,
                    firstName: e.target.value
                })
                break;
            case "lastName": 
                setPersonalInfo({
                    ...personalInfo,
                    lastName: e.target.value
                })
                break;
            case "dob": 
                setPersonalInfo({
                    ...personalInfo,
                    dob: e.target.value
                })
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

export default PersonalInformation;