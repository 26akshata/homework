import { useState } from "react";
import { Link, useLocation, useNavigate } from "react-router-dom";
import { getEmployeeByLetter, searchEmployee } from "../actions/employeeActions";


const SearchEmployee = () => {
    const [formData, setFormData] = useState({
        search: '',
        fname: '',
        desi: '',
        sal: '',
        age: ''
    })

    const { search, fname, desi, sal, age } = formData

    const [allEmployee, setAllEmployee] = useState([])


    const handleChange = o => event => {
        setFormData({ ...formData, [o]: event.target.value })
        getEmployeeByLetter(event.target.value).then(response => {
            setAllEmployee(response.items)
            // setFormData({...formData, fname: response.response.fname, desi: response.response.desi, sal: response.response.sal, age: response.response.age})
        }).catch(err =>
            console.log(err))
    }

    // const handleButtonClick = () => {
    //     searchEmployee(search).then(response => {
    //         console.log(response.response)
    //         // setFormData({...formData, fname: response.response.fname, desi: response.response.desi, sal: response.response.sal, age: response.response.age})
    //     }).catch(err =>
    //         console.log(err))

    // }


    const handleLetterSearch = () => {
        getEmployeeByLetter(search).then(response => {
            console.log(response.items)
            // setFormData({...formData, fname: response.response.fname, desi: response.response.desi, sal: response.response.sal, age: response.response.age})
        }).catch(err =>
            console.log(err))
    }
    return (
        <div>
            <div>
                <label>Search</label>
                <input type="text" value={search} onChange={handleChange('search')}></input>
            </div>
            <div>
                <button onClick={handleLetterSearch}>Search</button>
            </div>
            <div>
                {allEmployee.length === 0 ? null : <div> {allEmployee?.map((t, i) => (
                    <div className='p-2 card m-2' style={{ backgroundColor: '#FEECE2' }} key={i}>
                        <div className="d-flex flex-column bd-highlight mb-3" style={{ fontStyle: "italic" }}>
                            <div className="p-2">
                                Full Name : {t.fname}
                            </div>
                            <div className="p-2">
                                Designation :{t.desi}
                            </div>

                            {/* <div className="d-flex justify-content-evenly"> */}
                            {/* <div> */}
                            <div className="p-2">
                                Salary :{t.sal}
                            </div>
                            <div className="p-2">
                                Age :{t.age}
                            </div>
                        </div>
                        {/* </div> */}
                        

                    </div>
                    // </div>

                ))}</div>}
            </div>
        </div>
    )

}

export default SearchEmployee

