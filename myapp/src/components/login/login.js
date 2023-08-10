import React, { useState } from "react"
import "./login.css"
import axios from "axios"
import { useNavigate } from "react-router-dom"

const Login = ({ setLoginUser }) => {


    const history = useNavigate();
    const goToRegister = () => {
        history("/MRegister");
    };

    const goToManufacturer = () => {
        history("/Manufacturer");
    };
    const goToSupplier = () => {
        history("/Supplier");
    };
    const goToConsumer = () => {
        history("/Consumer");
    };

    const [user, setUser] = useState({
        role: "",
        email: "",
        password: ""
    })

    const handleChange = e => {
        const { name, value } = e.target
        setUser({
            ...user,
            [name]: value
        })
    }

    const login = () => {
        axios.post("http://localhost:9002/MLogin", user)
            .then(res => {
                alert(res.data.message)
                if (res.data.user) {
                    if (res.data.user.role === 'Manufacturer') {
                        goToManufacturer()
                    }
                    else if (res.data.user.role === 'Supplier') {
                        goToSupplier()
                    }
                    else if (res.data.user.role === 'Consumer') {
                        goToConsumer()
                    }
                    else {
                        alert("user role not defined")
                    }
                }



            })
    }

    return (
        <div className="style">
            <div className="login">
                <h1>Login</h1>
                <input type="text" name="email" value={user.email} onChange={handleChange} placeholder="Enter your Email"></input>
                <input type="password" name="password" value={user.password} onChange={handleChange} placeholder="Enter your Password" ></input>
                <div className="button" onClick={login}>Login</div>
                <div>or</div>
                <div className="button" onClick={() => goToRegister()}>Register</div>
            </div>
        </div>

    )
}
export default Login