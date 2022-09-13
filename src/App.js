import './App.css';
import { useEffect, useState } from "react";
import Users from "./compo/Users";
import { Routes, Route, Link } from "react-router-dom";
import About from "./compo/About.js";
import Home from "./compo/Home.js";
import User from "./compo/User";
import axios from "axios";

function App() {

  const [user, setUser] = useState({})

  useEffect(()=> {
    axios(`https://jsonplaceholder.typicode.com/users/`).then((res)=> {
      setUser(res.data)
    })
  }, [])
  
  return (
    <div className="App">
      <h1>Welcome to React Router!</h1>
      <div>
      <h1>nav</h1>
      <ul>
        <li>
          <Link to="/">Home</Link>
        </li>
        <li>
          <Link to="/about">About</Link>
        </li>
        <li>
          <Link to="/users">Users</Link>
        </li>
      </ul>
    </div>

      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="about" element={<About />} />
        <Route path="users" element={<Users />}>
          <Route path=":id" element={<User user={user}/>} />
        </Route>
      </Routes>
    </div>
  );
}

export default App;
