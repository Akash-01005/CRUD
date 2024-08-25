import { Route, Routes } from 'react-router'
import { CreateUsers, UpdateUsers, Users } from './components'

const App = () => {
  return (
    <>
       <Routes>
          <Route path='/' element={<Users />}></Route>
          <Route path='/create' element={<CreateUsers />}></Route>
          <Route path='/update/:id' element={<UpdateUsers />}></Route>
       </Routes>
    </>
  )
}

export default App