import axios from 'axios'
import { useEffect, useState } from 'react'
import { Link } from 'react-router-dom'

const Users = () => {
    const [user,setUser] = useState([])
    useEffect(() => {
      axios.get("http://localhost:3001")
      .then(result => setUser(result.data))
      .catch(err => console.log(err))
    }, [])
    
    const handleDelete = (id)=>{
        axios.delete(`http://localhost:3001/deleteUser/${id}`)
        .then(result =>{ console.log(result)
            console.log(window.location.reload())
        })
        .catch(err => console.log(err))
    }
  return (
    <div className="d-flex vh-100 bg-info justify-content-center align-items-center">
        <div className="bg-white rounded p-3">
            <Link to="/create" className='btn btn-primary' target='_blank'>Add +</Link>
            <table className='table'>
                <thead>
                    <tr>
                        <th className='text-center'>Name</th>
                        <th className="text-center">Email</th>
                        <th className='text-center'>Age</th>
                        <th className='text-center'>Action</th>
                    </tr>
                </thead>
                <tbody>
                    { user.map((element,index)=>{
                        return(
                            <tr key={index}>
                            <td>{element.name}</td>
                            <td>{element.email}</td>
                            <td>{element.age}</td>
                            <td className='d-flex gap-4'>
                                <Link to={`/update/${element._id}`}><button className='btn btn-success w-100'>update</button></Link>
                                <button className='btn btn-danger w-100' onClick={() =>handleDelete(element._id)}>Delete</button></td>
                        </tr>
                        )
                    })}
                </tbody>
            </table>
        </div>
    </div>
  )
}

export default Users