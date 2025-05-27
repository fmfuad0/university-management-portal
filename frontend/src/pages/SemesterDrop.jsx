
import React from "react";
import {useAppContext} from "../context/Context.jsx";

const SemesterDrop = () => {
    const {user} = useAppContext()
  return (
    <div className="p-4 flex flex-col gap-4">
        <h1 className={`text-3xl font-bold`}>Semester Drop</h1><hr/>
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
        <div className={`p-5 bg-slate-50 w-full flex flex-col gap-3`}>
             <h1 className={`font-bold`}>Attachment: (Upload Application) <span className={`text-red-600`}>*</span></h1>
            <h1 className={``}>File Type:  <strong className={`text-red-900`}> (PDF, DOCX, JPG, JPEG, PNG)</strong></h1>
            <h1 className={``}>Max Size:  <strong className={`text-red-900`}> 10MB </strong></h1>
            <form className={`flex flex-col gap-5`} onSubmit={(e) => e.preventDefault()}>
                <input type={"file"} className={`border px-5 bg-green-200  rounded w-full py-2 hover:bg-green-100 cursor-pointer`} placeholder={`Select application file`}/>
                 <h1 className={`font-bold`}>Semester drop reason <span className={`text-red-600`}>*</span></h1>
                <textarea placeholder={`Enter reason`} className={`border p-5 w-full`}/>
                <button className={`py-2 cursor-pointer hover:bg-blue-900 duration-300 rounded px-4 bg-blue-700 mt-5 text-white`} type="submit">Submit application</button>
            </form>
        </div>
    </div>
  );
};

export default SemesterDrop;

