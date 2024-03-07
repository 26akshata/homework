import { useEffect, useState } from "react";
import { getemployeeAction } from "../actions/employeeActions";
import { Link } from "react-router-dom";

const DisplayEmployee = () => {
    const [allEmployee, setAllEmployee] = useState([])

    useEffect(() => {
        getemployeeAction().then(res => {
            console.log(res)
            setAllEmployee(res.response)
        }).catch(err => {
            console.log(err)
        })
    }, [])
    return (
        <div>
            {/* {JSON.stringify(allEmployee)} */}
            {allEmployee.length === 0 ? null : <div> {allEmployee?.map((t, i) => (
                <div className='p-2 card m-2' style={{ backgroundColor: '#FEECE2' }} key={i}>
                    <div className="d-flex">
                        <div className="d-flex flex-column bd-highlight mb-3" style={{ fontStyle: "italic" }}>
                            <div className="p-2">
                                Full Name : {t.fname}
                            </div>
                            <div className="p-2">
                                Designation :{t.desi}
                            </div>
                            <div className="p-2">
                                Salary :{t.sal}
                            </div>
                            <div className="p-2">
                                Age :{t.age}
                            </div>
                        </div>
                        <div className="d-flex flex-column" style={{ fontStyle: "italic" }}>
                            <div className=" ">
                                <Link to="update-employee" state={t}><button className="btn p-2 m-2" style={{ backgroundColor: 'pink' }}>Update</button></Link>
                            </div>
                            <div className=" ">
                                <Link to="display-employee"><button className=" btn p-2 m-2" style={{ backgroundColor: '#F7DED0', fontStyle: '' }}> Display Employee</button></Link>
                            </div>
                            <div className="">
                                <Link to="create-employee"><button className=" btn p-2 m-2" style={{ backgroundColor: '#E1AFD1' }}>Create Employee</button></Link>

                            </div>
                            <div className="">
                                <Link to="search-employee"><button className=" btn p-2 m-2" style={{ backgroundColor: '#E1AFD1' }}>Search Employee</button></Link>
                            </div>
                            <div className="">
                                <Link to="registration-employee"><button className=" btn p-2 m-2" style={{ backgroundColor: '#E1AFD1' }}>let us goo Registration</button></Link>
                            </div>
                        </div>
                    </div>

                </div>
                // </div>

            ))}</div>}


        </div>
    )
}

export default DisplayEmployee