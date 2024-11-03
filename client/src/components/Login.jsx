import React from 'react'
import "./style/Login.css"

let obj = {
    email : "",
    password : "",
}

const Login = () => {

    function handleClick(){
            fetch("http://localhost:3000/login", {
                method : "post",
                headers : {
                    "Content-Type" : "application/json"
                },
                body: JSON.stringify(obj)
            })
    }

  return (
    <>
    <div className="login">
        <form action="">
            <h2>Login</h2>
            <input onChange={(e)=>obj.email = e.target.value} type="text"  placeholder='Email' name='email' required/>
            <input onChange={(e)=>obj.password = e.target.value} type="text"  placeholder='Password' name='password' required/>
            <button onClick={()=>handleClick()}>Login</button>
        </form>
    </div>
    </>
  )
}

export default Login