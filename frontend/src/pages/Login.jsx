import React, { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import { useAppContext } from '../context/Context.jsx';

const LoginPage = () => {
    const { setIsLoggedIn, server, setUser } = useAppContext();
    const navigate = useNavigate();
    const [studentId, setStudentId] = useState("");
    const [password, setPassword] = useState("");

    useEffect(()=>{
        async function dd(){
        const res = await fetch(`${server}/auth/login`, {
            method: "POST",
            headers: {
                "Content-Type": "application/json",
            },
            credentials :"include",
            body: JSON.stringify({studentId:"STU005", password:"pass"})
        });
        if(res.status === 200){
            window.alert("Login successfull");
            const data = await res.json();
            setIsLoggedIn(true);
            setUser(data.student)
            localStorage.setItem("token", data.token)
            navigate('/');
        }else{
            setIsLoggedIn(false);
            setUser(null);
            window.alert("Login failed");
        }
            console.log("executed");
    };
        dd()
    })

    const handleSubmit = async (e) => {
        e.preventDefault();
        // Implement authentication logic here
        const res = await fetch(`${server}/auth/login`, {
            method: "POST",
            headers: {
                "Content-Type": "application/json",
            },
            credentials :"include",
            body: JSON.stringify({studentId, password})
        })
        if(res.status === 200){
            window.alert("Login successfull");
            const data = await res.json();
            setIsLoggedIn(true);
            setUser(data.student)
            localStorage.setItem("token", data.token)
            navigate('/');
        }else{
            setIsLoggedIn(false);
            setUser(null);
            window.alert("Login failed");
        }
    };

    return (
        <div className="flex items-center justify-center h-[80vh] bg-green-100">
            <form onSubmit={handleSubmit} className="bg-white p-8 rounded shadow-md w-96">
                <h2 className="text-2xl font-bold mb-6 text-center">Login</h2>
                <input
                    type="text"
                    name="studentId"
                    placeholder="Username"
                    value={studentId}
                    onChange={(e)=>setStudentId(e.target.value)}
                    className="w-full p-2 mb-4 border rounded" 
                    disabled
                    required
                />
                <input
                    type="password"
                    name="password"
                    placeholder="Password"
                    value={password}
                    onChange={(e)=>setPassword(e.target.value)}
                    className="w-full p-2 mb-6 border rounded" 
                    disabled
                    required
                />
                <h1 className="font-bold text-red-900">Loging in now.......</h1>
                <h1>Please wait while visiting for the first time.First database call may take not more than 30 sec.</h1>
                <button type="submit" className="w-full bg-green-700 text-white p-2 rounded hover:bg-green-800" disabled>
                    Login
                </button>
            </form>
        </div>
    );
};

export default LoginPage;
