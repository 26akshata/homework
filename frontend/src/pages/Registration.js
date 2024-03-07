import { useState } from "react";
import { registrationAction } from "../actions/employeeActions";
import { Link } from "react-router-dom";

const Registration = () => {
    const [formData, setFromData] =useState ({
        email : '',
        pass : ''
    })

    const { email, pass} = formData

    const handleChange = o => event => {
        setFromData({...formData, [o]: event.target.value})
    }

    const handleButtonClick =() => {
        registrationAction({email, pass}).then(response => 
            console.log(response)).catch(err=>
                console.log(err))
    }
    return(
        <div className="d-flex flex-column bd-highlight mb-3">
            <div className="p-2 bd-highlight">
                <label>Email : </label>
                <input type="text" value={email} onChange={handleChange('email')}/>
            </div>
            <div className="p-2 bd-highlight">
                <label>password : </label>
                <input type="text" value={pass} onChange={handleChange('pass')}/>
            </div>
            <div className="p-2 bd-highlight">
                <button onClick={handleButtonClick} >Registration</button>
            </div><br/>
            <div>
                Email : {email}
            </div>
            <div>
                password : {pass}
            </div>
        </div>
    )
}
export default Registration