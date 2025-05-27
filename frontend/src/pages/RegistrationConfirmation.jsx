
import React, {useEffect, useState} from "react";
import {useAppContext} from "../context/Context.jsx";

const RegistrationConfirmation = () => {
    const [advisor, setAdvisor] = useState("Advisor Name");
    const [dueAmount, setDueAmount] = useState(100);
    const {user, server, year, semester} = useAppContext()
    const [sections, setSections] = useState([])
    const [isRegistrationConfirmed, setIsRegistrationConfirmed] = useState(false)
    const [creditTaken, setCreditTaken] = useState(0)

    const section ={
            "name": "243D1",
            "courseTitle": "Differential and Integral Calculus",
            "courseCode": "MAT 101",
            "classTime": {
                "Monday": {
                    "start": "08:30",
                    "end": "10:00"
                },
                "Tuesday": {
                    "start": "08:30",
                    "end": "10:00"
                }
            }
        }
    useEffect(() => {
        const getSections = async () => {
            const res = await fetch(`${server}/course/get-registered-courses/${user.studentId}/${year}/${semester}`, {
                method: "GET",
                headers: {
                    "Content-Type": "application/json",
                    "Accept": "application/json",
                    "Authorization": `Bearer ${localStorage.getItem("token")}`
                }
            })
            const data = await res.json()
            let tmp=0;
            for(const section of data){
                tmp+=section.courseCredit
            }
            setCreditTaken(tmp)
            setSections(data)
            console.log(data)
        }
        getSections()
    }, []);



  return (
    <div className="p-4 flex flex-col gap-4">
        <h1 className={`text-3xl font-semibold`}>Registration Confirmation</h1><hr className={`opacity-35`}/>
        <div className={`p-5 shadow-2xl bg-slate-50 w-full`}>
            <h1 className={`text-2xl font-semibold`}>Student Information</h1>
            <div className={`p-5 shadow-2xl bg-slate-50 w-full`}>
                <div className="justify-around hover:shadow-2xl duration-400 text-sm gap-5 p-3 border border-gray-300  list-none grid grid-cols-3">
                    <li><strong>Name :</strong> {user.fullName}</li>
                    <li><strong>Student ID :</strong> <span className={`text-green-800 font-bold`}>{user.studentId}</span></li>
                    <li><strong>Program :</strong>  {user.department} ({user.program})</li>
                    <li><strong>Batch :</strong> {user.batch}</li>
                    <li><strong>Probation:</strong> No probation</li>
                </div>
            </div>
        </div>
        <div className={`p-5 shadow-2xl bg-slate-50 w-full`}>
            <h1 className={`text-2xl font-semibold`}>Advisor Information</h1>
            <div className=" duration-400 text-sm gap-5 p-3 border border-gray-300  list-none flex flex-col items-center">
                <li className={`text-green-800 font-bold text-2xl`}>Name : {advisor} (AAA)</li>
                { dueAmount>=500 && <li className={`text-red-800 font-bold text-2xl`}>Complete your payment to confirm your registration</li>}
                <div className="flex flex-col items-center w-full">
                        <li className={`font-bold text-start text-xl text-blue-600 w-full p-3`}>Due Amount : {500}</li>
                        <li className={`font-bold text-start text-xl text-red-600 w-full p-3`}>Total Credit Taken : {creditTaken}</li>
                    <div className="flex flex-col items-center border w-full">
                        <div className={`p-5 shadow-2xl bg-slate-50 w-full`}>
                            <div className={`flex gap-5 items-center justify-center py-3`}>
                                <h1 className={`text-2xl text-center font-semibold`}>Selected Courses</h1>
                                <button className={`flex flex-row items-center gap-2 px-4 py-2 rounded-lg  transition ${dueAmount<=500||isRegistrationConfirmed? "text-white fond-semibold bg-green-600 hover:bg-green-700" : "bg-red-500 text-black"} cursor-pointer `} onClick={()=>{
                                        console.log("clicked")}} disabled={dueAmount>500 || isRegistrationConfirmed}>{(dueAmount<500||isRegistrationConfirmed)&&<img src={'/assets/icons8-tick.gif'} className={`h-6 rounded-full`} />}{isRegistrationConfirmed?"Registration Confirmed":dueAmount<=500?"Confirm Registration" : "Registration Disabled"}</button>
                            </div>
                            <div className="hover:shadow-2xl duration-400 grid grid-cols-2 gap-10 text-sm p-3 border border-gray-300 list-none ">
                                {sections.map((section, index) => {
                                    console.log(section)
                                    return (
                                    <div key={index} className={`bg-green-300 font-bold shadow-xl rounded-2xl p-6 border border-gray-200 hover:shadow-2xl transition-all duration-300 w-full max-w-3xl`}>
                                        {/* Header: Section Name and Course Code */}
                                        <div className="flex justify-start gap-5 items-baseline mb-4">
                                            <h2 className="text-xl font-bold text-indigo-600">{section.name}</h2>
                                            {/* Course Info */}
                                            <div className="">
                                                <div className="flex items-center gap-3">
                                                    <h3 className="text-lg font-semibold text-gray-800">{section.courseTitle}</h3>
                                                    <span className="text-lg font-mono font-semibold text-green-900">{section.courseCode}</span>
                                                </div>
                                                <p className="text-sm text-gray-600">Credit: <span className="font-medium text-gray-9       00">{section.courseCredit}</span></p>
                                            </div>
                                        </div>

                                        <div className="mb-5 flex items-center gap-5">
                                            {/*<p className="text-sm font-semibold text-gray-800 mb-1">Class Time:</p>*/}
                                            <ul className="text-sm font-mono bg-gray-200 rounded-lg p-3 border border-dashed border-gray-300">
                                                {Object.entries(section.classTime).map(([day, time]) => (
                                                    <li key={day} className="flex  justify-start gap-2">
                                                        <span className="text-indigo-600">{day} :</span>
                                                        <span className={`font-medium `}>{time.start} - {time.end}</span>
                                                    </li>
                                                ))}
                                            </ul>
                                            <ul className={`${isRegistrationConfirmed?"text-green-900":"text-red-800"}`}>{isRegistrationConfirmed?"This Course has been registered":"Not yet registered"}</ul>
                                        </div>
                                    </div>
                                )})}
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </div>
  );
};

export default RegistrationConfirmation;

