import React, { useContext ,useState} from 'react'
import { useUser } from '../utils/UserContext'
const SIgnin = () => {
  const{Fname,clearName,clearSName}=useUser()
  console.log(Fname);
  return (
    <>
    {Fname.map((e,index)=>{
      return(
        <>
        <div className="flex items-center space-x-2 cursor-pointer" key={e.id} onClick={() => {
          clearSName(e.id)
        }}>
        {e.Fname}
        </div>
        </>
      )
    })}
    <button
            
            className="w-full bg-blue-500 text-white py-2 rounded-md hover:bg-blue-600 focus:outline-none focus:bg-blue-600"
            onClick={()=>{
              clearName()
            }} 
          >Clear</button>
    </>
    
  )
}

export default SIgnin