import React from 'react';
import {useAppContext} from "../context/Context.jsx";
import {Link} from "react-router-dom";
const Header = () => {
    const {isLoggedIn, user, navigate } = useAppContext();
    return (
        <header className="bg-green-100 flex justify-between p-5 px-10 pr-20 ">
            {/*<h1 className="text-xl text-center font-bold">University Management Portal</h1>*/}
            <img src="../../public/assets/gumsbanner.png" className={`w-[15%] h-15` } alt="adfasd"/>
            {isLoggedIn &&
                <div className={`flex gap-2 flex-row items-center max-w-[60%]`}>
                    <div className={`flex flex-row `}>
                        <img src={'./public/assets/Sample_User_Icon.png'} className={`h-10 border rounded-full`}/>
                    </div>
                    <h1>{user.fullName}</h1>
                    <h1 className={`border-l-2 px-2`}>{user.studentId}</h1>
                    <button
                        className={`text-red-600 p-3 px-5 font-semibold ml-10 hover:bg-[red] hover:text-black cursor-pointer duration-300 rounded`}
                        onClick={()=> {
                        localStorage.removeItem("token"); window.alert("Successfully Logged Out ");window.location.reload();
                    }}>LOGOUT</button>
                </div>
            }
        </header>
    )
};

export default Header;
