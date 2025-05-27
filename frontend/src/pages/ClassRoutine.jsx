
import React, {useEffect, useState} from "react";
import {useAppContext} from "../context/Context.jsx";
import Table from "../components/Table.jsx";

const ClassRoutine = () => {
    const {user, server, year, semester} = useAppContext()
    const [sections, setSections] = useState([])
    const thead = ["SL","Course Code", "Course Title", "Section", "Room No.", "Day", "Class Time"]
    const tdata = ["courseCode", "courseTitle", "name", "room", "day", "time"]
    useEffect(() => {
        const getEnrolledSections = async () => {
            const res = await fetch(`${server}/section/get-enrolled-sections`,{
                method: "POST",
                headers: {
                    "Content-Type": "application/json",
                    "Accept": "application/json",
                    "Authorization": `Bearer ${localStorage.getItem("token")}`
                },
                body: JSON.stringify({year, semester})
            })
            const data = await res.json()
            console.log(data)
            let filteredData = []
            for(const section of data){
                let tmp = section
                let day = ""
                let time = ""
                console.log(section)
                for(const [key, val] of Object.entries(section["classTime"])){
                    console.log(key, val)
                    day=day+(day===""? "":", ")+key;time=val.start+"-"+val.end
                }
                console.log(day, time)
                tmp.day = day
                tmp.time = time
                filteredData.push(tmp)
            }
            setSections(filteredData)
        }
        getEnrolledSections()
    }, []);
  return (
    <div className="flex flex-col p-4 pt-0 gap-3">
        <h1 className={`text-2xl font-semibold`}>Student Class Routine</h1><hr className={`opacity-35`}/>
        <div className={`p-5 bg-slate-50 w-full`}>
            <h1 className={`text-xl font-semibold`}>Student Information</h1>
            <div className={`p-5 bg-slate-50 duration-400 hover:shadow-2xl w-full`}>
                <div className="justify-around text-sm gap-5 p-3 border border-gray-300  list-none grid grid-cols-3">
                    <li><strong>Name :</strong> {user.fullName}</li>
                    <li><strong>Student ID :</strong> <span className={`text-green-800 font-bold`}>{user.studentId}</span></li>
                    <li><strong>Program :</strong>  {user.department} ({user.program})</li>
                    <li><strong>Batch :</strong> {user.batch}</li>
                    <li><strong>Probation:</strong> No probation</li>
                </div>
            </div>
        </div>
        <div className={``}>
            <div className={`flex items-center justify-between py-3 pr-20 `}>
                <h1 className={`text-xl font-semibold`}>Class Routine</h1>
                <button className={`bg-blue-500 cursor-pointer hover:bg-blue-700 duration-300 py-2 px-5 rounded-lg text-white`}>Print Routine</button>
            </div>
            <Table results={sections} thead={thead} tdata={tdata} theadBG={' bg-blue-500 '} paddingY={' py-2 '}/>
        </div>
    </div>
  );
};

export default ClassRoutine;

