import FormField from "../storybook/FormField";
import { connect } from "react-redux";
import { setContactInfoByFieldName } from "../../app/features/registration/contactinfo.slice";

const ContactDetails = ({contactInfo, dispatch}) => {
    
    const handleChange= (e) => {
        switch(e.target.name) {
            case "email": 
                dispatch(setContactInfoByFieldName({
                    name: "email",
                    value: e.target.value
                }))
                break;
            case "phone": 
                dispatch(setContactInfoByFieldName({
                    name: "phone",
                    value: e.target.value
                }))
                break;
        }
    }

    return (
        <div onChange={handleChange}> 
            <FormField placeholder="youremail@domain.com" label="Enter email address" type="text" value={contactInfo.email}required={true} name="email"/>
            <FormField placeholder="456-343-9843" label="Enter phone number" type="tel" value={contactInfo.phone} required={true} name="phone"/>
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