import { useState, useEffect } from 'react'
import { Link, Outlet } from 'react-router-dom'

// function Users() {
//     const [users, setUsers] = useState([])
//     const [loading, setLoading] = useState(true)
//     useEffect(()=> {
//         fetch("https://jsonplaceholder.typicode.com/users").then((res)=> res.json())
//         .then((data)=> {
//         setUsers(data)
//         setLoading(false)
//     })}, []);

//   return (
//     <div>
//         <h1>Users</h1>
//         {loading && <div>Loading...</div>}
//         {users.map((user)=> 
//         <div key={user.id}>{user.name}</div>
//         )}
//     </div>
//   )
// }

function Users() {
  const [users, setUsers] = useState([])

  useEffect(()=> {
             fetch("https://jsonplaceholder.typicode.com/users").then((res)=> res.json())
             .then((data)=> {
             setUsers(data)
     })}, []);
  
  return (
    <div>
      <h1>Users</h1>
      <ul>
       {
        users.map((user)=> (
          <li key={user.id} >
            <Link to={`/users/${user.id}`}>{user.name}</Link>
          </li>
        ))
       }
      </ul>
      <Outlet/>
    </div>
  )
}

export default Users