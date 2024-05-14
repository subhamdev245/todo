import React, { useContext ,useState } from 'react'
import { UserProvider} from "../utils/UserContext"
import Profile from './Profile'
import SIgnin from './SIgnin'

const App = () => {
  const [Fname, setFname] = useState([])
  const addName = (Fname) =>{
    setFname((prev)=>[{id:Date.now(),Fname},...prev])
  }
  const clearName = ()=>{
    setFname([])
  }
  const clearSName =(id)=>{
    const newFname = Fname.filter(e => (
      e.id !== id
    ))
   setFname(newFname)
  }
  return (
    <UserProvider value={{Fname,addName,clearName,clearSName}}>
      <Profile />
      <SIgnin />
    </UserProvider>
  )
}

export default App