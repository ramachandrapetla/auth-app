import { useState } from "react";
import FormField from "../storybook/FormField";

const ContactDetails = () => {
    const [contactInfo, setContactInfo] = useState({
        email: "",
        phone: ""
    })

    return (
        <div> 
            <FormField placeholder="eg. youremail@domain.com" label="Enter email address" required={true}/>
            <FormField placeholder="eg. 456-343-9843" label="Enter phone number" required={true}/>
        </div>
    )
}

export default ContactDetails;