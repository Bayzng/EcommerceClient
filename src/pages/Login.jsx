import React from 'react'

const Login = () => {

  return (
    <div className="formContainer">
        <div className="formWrapper">
            <span className="logo">Bayz_Store</span>
            <span className="title">Register</span>
            <form>
                <input type="text"placeholder="YOUR NAME"/>
                <input type="email" placeholder="EMAIL"/>
                <input  type="password" placeholder="PASSWORD"/>
                <input style={{display: "none"}} type="file" id="file"/>
                <button>SIGN-IN</button>
            </form>
            <p>Do not have an account? Register</p>
        </div>
    </div>
  )
}

export default Login