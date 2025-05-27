import React, {useEffect, useState} from 'react';
import {Link} from 'react-router-dom';

const Sidebar = () => {
    const [selected, setSelected] = useState("");

    useEffect(() => {
        setSelected(window.location.pathname.replace("/",'') || "Home");
    }, [window.location.pathname]);


    return (
        <aside className="bg-green-800 rounded-sm my-auto text-white w-64 p-4">
            <nav className="flex flex-col gap-1 px-2 ">
                <Link to="/" className={`${selected==="Home"? "bg-green-700" : "hover:bg-green-700"}   p-1 px-2 rounded`} onClick={()=>{setSelected("Home")}}>Home</Link>
                <Link to="/profile" className={`${selected==="profile"? "bg-green-700" : "hover:bg-green-700"}   p-1 px-2 rounded`} onClick={()=>{setSelected("profile")}}>Profile</Link>
                <Link to="/result-history" className={`${selected==="result-history"? "bg-green-700" : "hover:bg-green-700"}   p-1 px-2 rounded`} onClick={()=>{setSelected("result-history")}}>Result History</Link>
                <Link to="/bill-history" className={`${selected==="bill-history"? "bg-green-700" : "hover:bg-green-700"}   p-1 px-2 rounded`} onClick={()=>{setSelected("bill-history")}}>Bill History</Link>
                <Link to="/course-evaluation" className={`${selected==="course-evaluation"? "bg-green-700" : "hover:bg-green-700"}   p-1 px-2 rounded`} onClick={()=>{setSelected("course-evaluation")}}>Course Evaluation</Link>
                <Link to="/pre-registration" className={`${selected==="pre-registration"? "bg-green-700" : "hover:bg-green-700"}   p-1 px-2 rounded`} onClick={()=>{setSelected("pre-registration")}}>Pre-registration</Link>
                <Link to="/registration-confirmation" className={`${selected==="registration-confirmation"? "bg-green-700" : "hover:bg-green-700"}   p-1 px-2 rounded`} onClick={()=>{setSelected("registration-confirmation")}}>Registration Confirmation</Link>
                <Link to="/class-routine" className={`${selected==="class-routine"? "bg-green-700" : "hover:bg-green-700"}   p-1 px-2 rounded`} onClick={()=>{setSelected("class-routine")}}>Class Routine</Link>
                <Link to="/password-change" className={`${selected==="password-change"? "bg-green-700" : "hover:bg-green-700"}   p-1 px-2 rounded`} onClick={()=>{setSelected("password-change")}}>Password Change</Link>
                <Link to="/course-drop" className={`${selected==="course-drop"? "bg-green-700" : "hover:bg-green-700"}   p-1 px-2 rounded`} onClick={()=>{setSelected("course-drop")}}>Course Drop</Link>
                <Link to="/semester-drop" className={`${selected==="semester-drop"? "bg-green-700" : "hover:bg-green-700"}   p-1 px-2 rounded`} onClick={()=>{setSelected("semester-drop")}}>Semester Drop</Link>
                <Link to="/program-change" className={`${selected==="program-change"? "bg-green-700" : "hover:bg-green-700"}   p-1 px-2 rounded`} onClick={()=>{setSelected("program-change")}}>Student Program Change</Link>
                <Link to="/admit-card" className={`${selected==="admit-card"? "bg-green-700" : "hover:bg-green-700"}   p-1 px-2 rounded`} onClick={()=>{setSelected("admit-card")}}>Student Admit Card</Link>
                <Link to="/special-exam-apply" className={`${selected==="special-exam-apply"? "bg-green-700" : "hover:bg-green-700"}   p-1 px-2 rounded`} onClick={()=>{setSelected("special-exam-apply")}}>Student Special Exam
                    Apply</Link>
                <Link to="/exam-routine" className={`${selected==="exam-routine"? "bg-green-700" : "hover:bg-green-700"}   p-1 px-2 rounded`} onClick={()=>{setSelected("exam-routine")}}>Student Exam Routine</Link>
                <Link to="/teams-credentials" className={`${selected==="teams-credentials"? "bg-green-700" : "hover:bg-green-700"}   p-1 px-2 rounded`} onClick={()=>{setSelected("teams-credentials")}}>Teams Credentials</Link>
            </nav>
        </aside>
    )
};

export default Sidebar;
