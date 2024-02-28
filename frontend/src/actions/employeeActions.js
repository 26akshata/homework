export const createAction = (data) => {
    console.log(data)
    return fetch(`http://localhost:8000/api/create-employee`,{
        method : 'POST',
        headers : {
            Accept: 'application/json',
            'Content-type': 'application/json'
        },
        body:JSON.stringify(data)
    }).then(response =>{
        return response.json()
    }).catch(err=>{
        return err.json()
    })
} 

export const getemployeeAction = (data) => {
    console.log(data)
    return fetch(`http://localhost:8000/api/display-employee`,{
        method :'GET',
        headers: {
            Accept: 'application/json',
            'Content-type': 'application/json'
        },
    }).then(response =>{
        return response.json()
    }).catch(err=>{
        return err.json()
    })
}
