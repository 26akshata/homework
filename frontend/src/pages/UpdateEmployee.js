import { useState } from "react";
import { updateAction } from "../actions/employeeActions";
import { Link, useLocation, useNavigate } from "react-router-dom";



const UpdateEmployee = () => {

    const employee = useLocation().state
    const navigate = useNavigate()

    const [formData, setFormData] = useState({
        fname: employee.fname,
        desi: employee.desi,
        sal: employee.sal,
        age: employee.age
    })
    const { fname, desi, sal, age } = formData

    const handleChange = o => event => {
        setFormData({ ...formData, [o]: event.target.value })
    }
    const handleButtonClick = () => {
        updateAction({ fname, desi, sal, age }).then(response => {
            if (response.success) {
                navigate('/')
            }
        }).catch(err =>
            console.log(err))
    }
    return (
        <div className="p-3 m-3" style={{ backgroundColor: "#B7C9F2" }}>
            <div className="" style={{ fontStyle: 'italic', fontSize: 30 }}>
                <div>
                    <label>Full Name :</label>
                    <input type="text"  value={fname} onChange={handleChange('fname')} />
                </div>
                <div>
                    <label>Designation : </label>
                    <input type='text' value={desi} onChange={handleChange('desi')} />
                </div>
                <div>
                    <label>Salary :</label>
                    <input type='text' value={sal} onChange={handleChange('sal')} />
                </div>
                <div>
                    <label>Age :</label>
                    <input type='text' value={age} onChange={handleChange('age')} />
                </div>
            </div>
            <div>
                <button className='btn btn-secondary' onClick={handleButtonClick}>Submit</button>
            </div><br /><br /><br />
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
                <Link to="/"><button className="btn " style={{ backgroundColor: 'yellowgreen' }}>Let us gooo</button></Link>
            </div>
        </div>
    )
}
export default UpdateEmployee