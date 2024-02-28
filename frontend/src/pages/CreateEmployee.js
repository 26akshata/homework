import {useState} from "react";
import { createAction } from "../actions/employeeActions";
import {Link} from "react-router-dom";


const CreateEmployee =() => {
    const [formData ,setFromData] = useState({
        FullName: '',
       Designation:'',
       Salary:'',
       Age:'' 
    })

    const { fname, desi,sal,age} =formData

    const handleChange = o => event => {
        setFromData({ ...formData, [o]: event.target.value})
    }
    const handleButtonClick =()=>{
        createAction({fname,desi,sal,age}).then(response =>
            console.log(response)).catch(err=>
                console.log(err))
        
        
    }
    return(
        <div>
            <div>
                <label>Full Name</label>
                <input type="text" value={fname} onChange={handleChange('fname')}/>
        </div>
        <div>
            <label>Designation</label>
            <input type='text' value={desi} onChange={handleChange('desi')}/>
        </div>
        <div>
            <label>Salary</label>
            <input type='text' value={sal} onChange={handleChange('sal')}/>
        </div>
        <div>
            <label>Age</label>
            <input type='text' value={age} onChange={handleChange('age')}/>
        </div>
        <div>
            <button onClick={handleButtonClick}>Submit</button>
        </div><br/><br/><br/>
        <div>
            Full Name:{fname}
        </div>
        <div>
            Designation:{desi}
        </div>
        <div>
            Salary:{sal}
        </div>
        <div>
            Age:{age}
        </div>
        <div>
            <Link to ="/"><button>Display All Employee</button></Link>
        </div>
        </div>
    )
}
export default CreateEmployee