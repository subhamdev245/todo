import React, { useContext, useState } from 'react';
import { UserContext, useUser } from '../utils/UserContext';


const Profile = () => {
    const [userName,SetUserName] = useState("")
    const{addName}=useUser()
  return (
    <div className="flex items-center justify-center bg-gray-100">
      <div className="max-w-md w-full bg-white p-8 rounded-md shadow-md">
        <h2 className="text-2xl font-semibold text-gray-800 mb-6">Enter Your task</h2>
        <form onSubmit={(e)=>{
            e.preventDefault()
            addName(userName)
            SetUserName("")
        }}>
          <div className="mb-4">
            <label htmlFor="username" className="block text-sm font-medium text-gray-600 mb-1">
              task
            </label>
            <input
              type="text"
              id="username"
              className="w-full px-4 py-2 border rounded-md focus:outline-none focus:border-blue-500"
              placeholder="Enter your task"
              value={userName}
              onChange={(e)=>{SetUserName(e.target.value)}}
            />
          </div>
          
          <button
            type="submit"
            className="w-full bg-blue-500 text-white py-2 rounded-md hover:bg-blue-600 focus:outline-none focus:bg-blue-600"
          >
            Sign Up
          </button>
        </form>
      </div>
    </div>
  );
};

export default Profile;
