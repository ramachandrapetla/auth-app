import { useState } from "react";
import FormField from "../storybook/FormField";

const AccountSetup = () => {
    const [accountInfo, setAccountInfo] = useState({
        username: "",
        password: "",
        reenterPassword: ""
    })

    return (
        <div> 
            <FormField placeholder="eg. user9963, youremail@domain.com" label="Enter Username" required={true}/>
            <FormField placeholder="choose your password" label="Enter password" required={true} type="password"/>
            <FormField placeholder="Re-enter the password you choose" label="Re-enter Password" required={true} type="password"/>
        </div>
    )
}

export default AccountSetup;