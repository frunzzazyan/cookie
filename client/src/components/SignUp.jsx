import React from 'react'
import "./style/SignUp.css"
import {Link} from "react-router-dom"

let obj = {
    name : "",
    email : "",
    age : "",
    password : "",
    rpassword : " "
}

const SignUp = () => {
    function handleClick(){
        if(obj.password === obj.rpassword){
            delete obj.rpassword

            fetch("http://localhost:3000/", {
                method : "post",
                headers : {
                    "Content-Type" : "application/json"
                },
                body: JSON.stringify(obj)
            })
        }
    }
  return (
    <>
    <div className="signup">
        <form action="" method='dialog'>
            <h2>Sign Up</h2>
            <input onChange={(e)=>obj.name = e.target.value} type="text"  placeholder='Name' name='name' required/>
            <input onChange={(e)=>obj.email = e.target.value} type="text"  placeholder='Email' name='email' required/>
            <input onChange={(e)=>obj.age = e.target.value} type="number"  placeholder='Age' name='age' required/>
            <input onChange={(e)=>obj.password = e.target.value} type="text"  placeholder='Password' name='password' required/>
            <input onChange={(e)=>obj.rpassword = e.target.value} type="text"  placeholder='Rpassword' name='rpassword' required/>
            <Link to="/login"><button onClick={()=>handleClick()}>sign up</button></Link>
        </form>
    </div>
    </>
  )
}

export default SignUp