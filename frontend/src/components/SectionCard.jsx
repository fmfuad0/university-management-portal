import React, {useEffect, useState} from 'react';
import {useAppContext} from "../context/Context.jsx";
import {ToastContainer, toast, Bounce, Slide, Flip, Zoom} from "react-toastify";


function SectionCard({section, setCreditTaken, creditTaken, sl}) {
    // console.log(section);
    const {server, user, maxCredit} = useAppContext()
    const [noOfRegisteredStudents, setNoOfRegisteredStudents] = useState(section.registeredStudents.length)
    const [isRegistered ,setIsRegistered] = useState(section.registeredStudents.includes(user.studentId))
    const [isCapacityFull, setIsCapacityFull] = useState(false)
    const [isRequested, setIsRequested] = useState(section.waitList.includes(user.studentId))
    // console.log(user)

    const handleClick = async (operation) => {
        if (operation !== 'rq' && operation !== 'rm' && maxCredit < (creditTaken + section.courseCredit)) {
            toast.error("Maximum credit limit exceeded.");
            return;
        }
        const response = (await fetch(`${server}/student/${user.studentId}`,{
            method: "GET",
            headers: {
                Accept: "application/json",
                "Content-Type": "application/json",
                "Authorization" : `Bearer ${localStorage.getItem("token")}`
            }
        }));
        console.log(response)
        const userCurrentState = await response.json();
        console.log("userCurrentState", userCurrentState)
        if(userCurrentState.coursesEnrolled.includes(section.courseCode) && operation==='add'){toast.error("Course already taken");return}
        if((!userCurrentState.coursesEnrolled.includes(section.courseCode)) && operation==='rm'){toast.error("Course not registered");return}
        const res = await fetch(`${server}/section/toggle-register/${user.studentId}/${section._id}/${operation}`,{
           method: "GET",
           headers: {
               "Content-Type": "application/json",
               "Accept": "application/json",
               "Authorization": `Bearer ${localStorage.getItem("token")}`
           }
        });
        if(operation!=='rq' && res.ok) {
            setIsRegistered(!isRegistered);
            if(operation==='rm') {
                setNoOfRegisteredStudents(noOfRegisteredStudents - 1);
                setCreditTaken(creditTaken-section.courseCredit)
            }
            else {
                setNoOfRegisteredStudents(noOfRegisteredStudents + 1);
                setCreditTaken(creditTaken+section.courseCredit)
            }
        }else if(res.ok){
            console.log("Requested")
            setIsRequested(!isRequested);
        }
        console.log(await res.json())
    }

    useEffect(()=>{
        if(section.capacity===noOfRegisteredStudents)setIsCapacityFull(true)
    }, [noOfRegisteredStudents])

    return (
        <div key={sl} className={`${isRegistered? "bg-green-400" : "bg-white" } font-bold shadow-xl rounded-2xl p-6 border border-gray-200 hover:shadow-2xl transition-all duration-300 w-full max-w-3xl`}>
            <ToastContainer position="top-right"
                            autoClose={3000}
                            hideProgressBar={false}
                            newestOnTop={false}
                            closeOnClick={true}
                            rtl={false}
                            pauseOnFocusLoss
                            draggable={true}
                            pauseOnHover
                            theme="light"
                            transition={Bounce}
            />
            {/* Header: Section Name and Course Code */}
            <div className="flex justify-start gap-5 items-baseline mb-4">
                <h2 className="text-xl font-bold text-indigo-600">{section.name}</h2>
                {/* Course Info */}
                <div className="">
                    <div className="flex items-center gap-3">
                        <h3 className="text-lg font-semibold text-gray-800">{section.courseTitle}</h3>
                        <span className="text-lg font-mono font-semibold text-green-900">{section.courseCode}</span>
                    </div>
                    <p className="text-sm text-gray-600">Credit: <span className="font-medium">{section.courseCredit}</span></p>
                </div>
            </div>
            
            <div className="mb-5 inline-block">
                {/*<p className="text-sm font-semibold text-gray-800 mb-1">Class Time:</p>*/}
                <ul className="text-sm font-mono bg-gray-200 rounded-lg p-3 border border-dashed border-gray-300">
                    {Object.entries(section.classTime).map(([day, time]) => (
                        <li key={day} className="flex  justify-start gap-2">
                            <span className="text-indigo-600">{day} :</span>
                            <span className={`font-medium `}>{time.start} - {time.end}</span>
                        </li>
                    ))}
                </ul>
            </div>

            {/* Capacity & Faculty Info */}
            <div className="grid lg:grid-cols-3 sm:grid-cols-2 gap-4 font-bold text-gray-700 mb-4">
                <div className={`flex flex-col text-center`}>
                    <p className={`${isRegistered? "text-white" : "text-gray-500"}`}>Capacity</p>
                    <p className="text-lg text-green-700 ">{section.capacity}</p>
                </div>
                <div className={`flex flex-col text-center`}>
                    <p className={`${isRegistered? "text-white" : "text-gray-500"}`}>Registered</p>
                    <p className="text-lg text-red-700">{noOfRegisteredStudents}</p>
                </div>
                <div className={`flex flex-col text-center`}>
                    <p className={`${isRegistered? "text-white" : "text-gray-500"}`}>Faculty</p>
                    <p className="font-semibold text-purple-950">{section.assignedFaculty}</p>
                </div>
            </div>

            {/* Class Time */}

            {/* Buttons */}
            <div className="flex flex-wrap justify-center gap-2">
                <button className={`flex flex-row items-center gap-2 px-4 py-2 rounded-lg  transition ${isRegistered || isCapacityFull?`bg-gray-500 text-slate-100`:"cursor-pointer text-white bg-green-500 hover:bg-green-600"}`} disabled={isRegistered || isCapacityFull} onClick={()=>handleClick("add")}>{isRegistered && <img src={'./assets/icons8-tick.gif'} className={`h-6 rounded-full`}/>}{isRegistered? "Registered": "Choose Section"}</button>
                <button className={`${isCapacityFull && !isRegistered? `${isRequested? "hover:bg-red-800 bg-red-600" : "hover:bg-yellow-600 bg-yellow-500"} text-white px-4 py-2 rounded-lg transition cursor-pointer` : "hidden"} `} onClick={()=>{handleClick("rq")}} >{isRequested? "Cancel Seat Request" : "Request Seat"}</button>
                <button className={` px-4 py-2 rounded-lg  transition ${!isRegistered?`bg-gray-400 line-through text-red-100`:"cursor-pointer text-white bg-red-500 hover:bg-red-600"}`} onClick={()=>handleClick("rm")} disabled={!isRegistered || isCapacityFull}>Leave Section</button>
            </div>
        </div>

    );
}

export default SectionCard;
