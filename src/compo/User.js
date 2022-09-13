import {useParams, Link} from 'react-router-dom'
import { useState, useEffect } from "react";
import axios from "axios";



function User(user) {
    const { id } = useParams()
    const [uzer, setUzer] = useState({})


    useEffect(()=> {
      axios(`https://jsonplaceholder.typicode.com/users/${id}`).then((res)=> {
        setUzer(res.data)
        //console.log(user);
      })
    }, [id])
    
  return (
    <div>
        <h1>User Address</h1>
        <h3>{`User ${id}`}</h3>
        {/* <p><span style={{color: "firebrick"}}></span> {JSON.stringify(user.user[id].company.name)} </p> */}
        <p><span style={{color: "firebrick"}}></span> {JSON.stringify(uzer.company, ["name"])} </p>
        {id > 1 ? <Link to={`/users/${parseInt(id)-1}`}>Prev User</Link> : null}
        {`...`}
        {id < 10 ? <Link to={`/users/${parseInt(id)+1}`}>Next User</Link> : null}
    </div>
  )
}

export default User