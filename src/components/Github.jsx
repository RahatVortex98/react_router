import React, { useState } from 'react'
import { useEffect } from 'react'

function Github() {
  
    const[data,setData]=useState([])
  
   useEffect(()=>{

        fetch('https://api.github.com/users/vortex')

        .then((res)=>res.json())
      
        .then((data)=> setData(data))
        console.log(data)
      
    },[])
  
    return (

   
    <div>

        {/* Github: Followers {data.followers} */}
         <div>
      <h2>Github User Data:</h2>
      {data ? (
        <div>
          <p><strong>Username:</strong> {data.login}</p>
          <p><strong>Followers:</strong> {data.followers}</p>
          <p><strong>Following:</strong> {data.following}</p>
          <p><strong>Public Repos:</strong> {data.public_repos}</p>
          <img src={data.avatar_url} alt="Avatar" width="100" />
        </div>
      ) : (
        <p>Loading...</p>
      )}
    </div>
      
    </div>
  )
}

export default Github
