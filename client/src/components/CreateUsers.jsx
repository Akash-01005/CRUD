import axios from 'axios';
import { useState } from 'react'
import { useNavigate } from 'react-router';

const CreateUsers = () => {
    const [name,setName] = useState();
    const [email,setEmail] = useState();
    const [age,setAge] = useState();


    const data = {name,email,age}
    const navigate = useNavigate()
    
    const handleSubmit = (e)=>{
      e.preventDefault();
      axios.post("http://localhost:3001/createUser",data)
      .then(result =>{ console.log(result)
             navigate("/")
      }
    )
      .catch(err => console.log(err))
    }

  return (
        <div className="container-fluid row vh-100 bg-info d-flex justify-content-center align-items-center">
            <div className="col-6 bg-white p-3 rounded">
                <h2 className='text-center'>Add User</h2>
                <form method="post" onSubmit={handleSubmit} >
                    <div className="from-group">
                        <label htmlFor="name">Name:</label>
                        <input type="text" className='form-control mt-2' id='name' onChange={(e)=>{setName(e.target.value)}} />
                    </div>
                    <div className="from-group">
                        <label htmlFor="email">Email:</label>
                        <input type="email" className='form-control mt-2' id='email' onChange={(e)=>{setEmail(e.target.value)}} />
                    </div>
                    <div className="from-group">
                        <label htmlFor="age">Age:</label>
                        <input type="text" className='form-control mt-2' id='age' onChange={(e)=>setAge(e.target.value)} />
                    </div>
                    <button type='submit' className='btn btn-primary mt-3 w-100'>Add User</button>
                </form>
            </div>
        </div>
  )
}

export default CreateUsers