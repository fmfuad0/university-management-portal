
import React, {useEffect} from "react";
import {useAppContext} from "../context/Context.jsx";

const CourseDrop = () => {
    const {user, semester, year, server} = useAppContext();
    const [courses, setCourses] = React.useState([]);
    const dropRequest={}

    const getCourses = async () => {
        const data = await fetch(`${server}/course/get-enrolled-courses`, {
            method: "POST",
            headers: {
                "Content-Type": "application/json",
                "Accept": "application/json",
                "Authorization": `Bearer ${localStorage.getItem("token")}`,
            },
            body: JSON.stringify({year, semester})
        })
        const courses = await data.json();
        console.log(courses);
        setCourses(courses);
    }
    useEffect(() => {
        getCourses();
    }, []);

  return (
    <div className="p-4 flex flex-col gap-5">
        <h1 className={`text-3xl font-bold`}>Course Drop</h1><hr/>
        <div className="flex flex-col gap-5">
            <div className={`p-5 shadow-2xl bg-slate-50 w-full`}>
                <div className="justify-around hover:shadow-2xl duration-400 text-sm gap-5 p-3 border border-gray-300  list-none grid grid-cols-3">
                    <li><strong>Name :</strong> {user.fullName}</li>
                    <li><strong>Student ID :</strong> <span className={`text-green-800 font-bold`}>{user.studentId}</span></li>
                    <li><strong>Program :</strong> {user.department} {user.program}</li>
                    <li><strong>Batch :</strong> {user.batch}</li>
                    <li><strong>Probation:</strong> No probation</li>
                </div>
            </div>
        </div>
        <div className="flex flex-col gap-5">
                <h1 className={`font-semibold`}>Current Semester : {semester} {year}</h1>
            <div className={`p-5 shadow-2xl bg-slate-50 w-full`}>
                <table className="w-full">
                    <thead className={`text-white w-full bg-green-600 `}>
                    <tr className={`h-8 border`}>
                        <th className={`border border-slate-400 `}>SL.</th>
                        <th className={`border border-slate-400 `}>Course Code</th>
                        <th className={`border border-slate-400 `}>Course Title</th>
                        <th className={`border border-slate-400 `}>Request</th>
                        <th className={`border border-slate-400 `}>Remarks</th>
                        <th className={`border border-slate-400 `}>Request Status</th>
                    </tr>
                    </thead>
                    <tbody>
                    {courses.map((course, sl) => {return (
                        <tr className={`text-center text-sm border border-slate-400 `}>
                            <td className={`border border-slate-400 py-3`}>{sl+1}</td>
                            <td  className={`border border-slate-400 `}>{course.courseCode}</td>
                            <td  className={`border border-slate-400 `}>{course.title}</td>
                            <td  className={`border border-slate-400 `}><button className={`py-1 cursor-pointer text-white px-5 bg-red-600 hover:bg-blue-700 rounded`}>Apply</button></td>
                            <td  className={`border border-slate-400 `}>{}</td>
                            {/*<td  className={`border border-slate-400 `}>{dropRequest?.status||"Pending"}</td>*/}
                            <td  className={`border border-slate-400 text-white font-semibold `}><span className={`bg-green-600 rounded px-1 py-1 `}>Accepted</span> or<span className={`mx-2 text bg-red-600 rounded px-1 py-1`}> Rejected</span></td>
                        </tr>
                    )})}
                    </tbody>
                </table>
            </div>
        </div>
    </div>
  );
};

export default CourseDrop;

