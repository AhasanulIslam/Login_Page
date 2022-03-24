// import './App.css';

import { useEffect, useState } from "react";
import LoginFrom from "./components/LoginFrom";
import Logout from "./components/Logout";




function App() {
  const adminUser = {
    email: "ahsan@gmail.com",
    password: "12345",
  };
  
    const [user, setUser] = useState({ name: "", password: "" });
    const [error, setError] = useState("");
    const [loginshow,setLoginshow] = useState(true)

  useEffect(() => {
    if(user.name && user.email){
      setLoginshow(false)
    }
  }, [user]);

  const Login = (details) => {
    console.log(details);

    if(details.email === adminUser.email && details.password === adminUser.password){
      console.log("Logged in");
      setUser({
        name: details.name,
        email: details.email
      })
    }
    else{
      console.log("Details do not match!!!!!");
    }
  };

  const Logout = () => {
    console.log("logout");
  };

  return (
    <div className="App">
      {loginshow ? 
      (
        <LoginFrom Login={Login} error={error} />

      )
      :
      (
        <div className="welcome">
          <h2>
            Welcome, <span>{user.name}</span>
          </h2>
          <button>Logout</button>
        </div>
      )
      
  }
    </div>
  );
}

export default App;
