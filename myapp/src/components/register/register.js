import React, { useState } from "react"
import "./register.css"
import axios from "axios"
import { useNavigate } from "react-router-dom"


const Register = () => {

    const history = useNavigate();
    const goToLogin = () => {
        history("/MLogin");
    };
    const [user, setUser] = useState({
        role: "",
        name: "",
        email: "",
        password: "",
        reEnterPassword: ""
    })

    const handleChange = e => {
        const { name, value } = e.target
        setUser({
            ...user,
            [name]: value
        })
    }

    const register = () => {
        const { role, name, email, password, reEnterPassword } = user
        if (name && role && email && password && (password === reEnterPassword)) {
            axios.post("http://localhost:9002/MRegister", user)
                .then(res => {
                    //  alert(res.data.message)
                    goToLogin()
                })
        } else {
            alert("invlid input")
        }

    }

    return (
        <div className="style">
            <div className="register">
                {console.log("User", user)}
                <h1>Register</h1>
                <input list="browsers" name="role" value={user.role} placeholder="Your role" onChange={handleChange} />
                <datalist id="browsers" >
                    <option value="Manufacturer" />
                    <option value="Supplier" />
                    <option value="Consumer" />
                </datalist>
                <input type="text" name="name" value={user.name} placeholder="Your Name" onChange={handleChange}></input>
                <input type="text" name="email" value={user.email} placeholder="Your Email" onChange={handleChange}></input>
                <input type="password" name="password" value={user.password} placeholder="Your Password" onChange={handleChange}></input>
                <input type="password" name="reEnterPassword" value={user.reEnterPassword} placeholder="Re-enter Password" onChange={handleChange}></input>
                <div className="button" onClick={register} >Register</div>
                <div>or</div>
                <div className="button" onClick={() => goToLogin()}>Login</div>
            </div>
        </div>

    )
}

export default Register