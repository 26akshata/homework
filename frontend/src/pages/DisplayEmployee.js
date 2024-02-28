import { useEffect, useState } from "react";
import { getemployeeAction } from "../actions/employeeActions";

const DisplayEmployee =() =>{
    const[allEmployee, setAllEmployee] = useState([])

    useEffect(() =>{
        getemployeeAction().then(res => {
            console.log(res)
            setAllEmployee(res.response)
        }).catch(err => {
            console.log(err)
        })
    },[])
    return(
        <div>
            {/* {JSON.stringify(allEmployee)} */}
            {allEmployee.length === 0 ? null : <div> {allEmployee?.map((t,i) =>(
                <div className='p-5' key ={i}>
                    <div className="fs-3">
                        FullName:{t.fname}
                    </div>
                    <div>
                        Designation:{t.desi}
                    </div>
                    <div>
                        Salary:{t.sal}
                    </div>
                    <div>
                        Age:{t.age}
                    </div>
        </div>

            ))}</div>}
        </div>
    )
}

export default DisplayEmployee