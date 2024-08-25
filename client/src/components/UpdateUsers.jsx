import axios from 'axios';
import { useEffect, useState } from 'react'
import { useNavigate, useParams } from 'react-router'

const UpdateUsers = () => {
    const {id} = useParams();
    const [name,setName] = useState();
    const [email,setEmail] = useState();
    const [age,setAge] = useState();
    const navigate = useNavigate();

    const data = {name,email,age}

    const handleSubmit = (e)=>{
          e.preventDefault();
          axios.put(`http://localhost:3001/updateUser/${id}`,data)
          .then(result => {console.log(result)
            navigate("/");
          }
        )
          .catch(err => console.log(err))
          
    }

    useEffect(() => {
     axios.get(`http://localhost:3001/getUser/${id}`)
     .then(result =>{
         setName(result.data.name)
         setEmail(result.data.email)
         setAge(result.data.age)
     })
     .catch(err => console.log(err))
    })

    return (
        <div className="container-fluid row vh-100 bg-info d-flex justify-content-center align-items-center">
            <div className="col-6 bg-white p-3 rounded">
                <h2 className='text-center'>Update User</h2>
                <form onSubmit={handleSubmit} >
                    <div className="from-group">
                        <label htmlFor="name">Name:</label>
                        <input type="text" className='form-control mt-2' id='name' onChange={(e)=>{setName(e.target.value)}} value={name} />
                    </div>
                    <div className="from-group">
                        <label htmlFor="email">Email:</label>
                        <input type="email" className='form-control mt-2' id='email' onChange={(e)=>{setEmail(e.target.value)}} value={email} />
                    </div>
                    <div className="from-group">
                        <label htmlFor="age">Age:</label>
                        <input type="text" className='form-control mt-2' id='age' onChange={(e)=>setAge(e.target.value)} value={age} />
                    </div>
                    <button type='submit' className='btn btn-primary mt-3 w-100'>Add User</button>
                </form>
            </div>
        </div>
  )
}

export default UpdateUsers