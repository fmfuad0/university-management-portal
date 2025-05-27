
import React from "react";
import {useAppContext} from "../context/Context.jsx";

const StudentAdmitCard = () => {
    const [selectedOption, setSelectedOption] = React.useState("");
    const {user} = useAppContext()
    return (
        <div className="p-4 flex flex-col gap-4">
            <h1 className={`text-3xl font-bold`}>Student Admit card</h1><hr/>
            <div className="flex flex-col gap-5">
                <div className={`p-5 bg-slate-50 w-full`}>
                    <div className="justify-around hover:shadow-2xl duration-400 text-sm gap-5 p-3 border border-gray-300  list-none grid grid-cols-3">
                        <li><strong>Name :</strong> {user.fullName}</li>
                        <li><strong>Student ID :</strong> <span className={`text-green-800 font-bold`}>{user.studentId}</span></li>
                        <li><strong>Program :</strong> {user.department} {user.program}</li>
                        <li><strong>Batch :</strong> {user.batch}</li>
                        <li><strong>Probation:</strong> No probation</li>
                    </div>
                </div>
            </div>
            <div className={`p-5 bg-slate-50  flex flex-col gap-3`}>
                <select className={`cursor-pointer  w-[20%] ${selectedOption!=='-'?"bg-green-300" : "bg-red-500"} rounded p-5 border-slate-400 py-2`}>
                    <option className={``}  value={`-`} onClick={(e)=>setSelectedOption(e.target.value)} selected={true}>Select Exam</option>
                    <option className={`bg-green-300`} onClick={(e)=>setSelectedOption(e.target.value)} value={`mid`} >Mid Term</option>
                    <option className={`bg-green-300`} onClick={(e)=>setSelectedOption(e.target.value)} value={`final`} >Final Term</option>
                </select>
                <div className="flex bg-green-200 flex-col h-[500px] border p-5 rounded gap-5 w-full items-start">
                    <div className={`flex gap-5`}>
                        <button className={`bg-blue-600 text-white cursor-pointer hover:bg-blue-500 duration-300 px-3 py-1 rounded `}>Download Routine</button>
                        <button className={`bg-blue-600 text-white cursor-pointer hover:bg-blue-500 duration-300 px-3 py-1 rounded `}>Print Routine</button>
                    </div>
                    <h1 className={`text-4xl text-center  w-full`}>Admit card will be shown here</h1>
                </div>
            </div>
        </div>
    );
};

export default StudentAdmitCard;

