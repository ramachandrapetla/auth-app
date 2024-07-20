import { useState } from "react";
import FormField from "../storybook/FormField";
import { setAccountInfoByFieldName } from "../../app/features/registration/accountinfo.slice";
import { connect } from "react-redux";
import Loader from "../storybook/Loader";

const AccountSetup = ({accountInfo, handlePrev, dispatch}) => {

    const [isLoading, setIsLoading] = useState(false);
    
    const handleChange= (e) => {
        switch(e.target.name) {
            case "username": 
                dispatch(setAccountInfoByFieldName({
                    name: "username",
                    value: e.target.value
                }))
                break;
            case "password": 
                dispatch(setAccountInfoByFieldName({
                    name: "password",
                    value: e.target.value
                }))
                break;
            case "reenterpassword": 
                dispatch(setAccountInfoByFieldName({
                    name: "reenterpassword",
                    value: e.target.value
                }))
                break;
        }
    }

    return isLoading ? <Loader loadingText="Your application is being submitted"/>
        :<div>
            <div onChange={handleChange}> 
                <FormField placeholder="eg. user9963, youremail@domain.com" label="Enter Username" required={true} name="username" value={accountInfo.username}/>
                <FormField placeholder="choose your password" label="Enter password" required={true} type="password" name="password" value={accountInfo.password}/>
                <FormField placeholder="Re-enter the password you choose" label="Re-enter Password" required={true} type="password" name="reenterpassword" value={accountInfo.reenterPassword}/>
            </div>
            <div className="button-container">
                <button>Submit</button>
                <button onClick={handlePrev}>Prev</button>
            </div>
        </div>
}

function mapStateToProps(state) {
    
    const {accountInfo} = state;

    return {
        accountInfo
    }
}

export default connect(mapStateToProps)(AccountSetup)