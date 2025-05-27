
import React from "react";
import {useAppContext} from "../context/Context.jsx";

const StudentProgramChange = () => {
    const [selectedOption, setSelectedOption] = React.useState("");
    const {user} = useAppContext()
  return (
    <div className="p-4 flex flex-col gap-5">
        <h1 className={`text-3xl font-bold`}>Student Program Change</h1><hr/>
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
        <h1 className={`text-xl font-semibold`}>Program Change Application</h1><hr/>
        <div className={`bg-slate-50 flex-col flex items-center p-5`}>
            <div className={` w-full items-baseline flex gap-3`}>
                <div className={`flex flex-col gap-5 w-[20%]`}>
                    <h1 className={`font-bold`}>Current Program: </h1>
                    <h1 className={`font-bold`}>Select New Program <span className={`text-red-600`}>*</span></h1>
                    <h1 className={`font-bold`}>Reason <span className={`text-red-600`}>*</span></h1>
                </div>
                <div className={`w-full p-5 bg-slate-50 flex flex-col gap-3`}>
                    <h1>{user.department} ({user.program})</h1>
                    <select className={`border rounded p-5 border-slate-400 py-2`}>
                        <option className={``}  value={``} >Select</option>
                        <option className={``} onClick={()=>setSelectedOption("english")} value={`english`} >English</option>
                        <option className={``} onClick={()=>setSelectedOption("eee")} value={`eee`} >EEE</option>
                        <option className={``} onClick={()=>setSelectedOption("llb")} value={`llb`} >LLB</option>
                        <option className={``} onClick={()=>setSelectedOption("mba")} value={`mba`} >MBA</option>
                        <option className={``} onClick={()=>setSelectedOption("bba")} value={`bba`} >BBA</option>
                        <option className={``} onClick={()=>setSelectedOption("ba")} value={`ba`} >BA</option>
                        <option className={``} onClick={()=>setSelectedOption("bss")} value={`bss`} >BSS</option>
                    </select>
                    <textarea placeholder={`Enter reason`} className={`border rounded border-slate-400 p-5 w-full`}/>
                </div>
            </div>
                <button className={`py-2 cursor-pointer hover:bg-blue-900 duration-300 rounded px-4 bg-blue-700 mt-5 text-white`} type="submit">Submit application</button>

        </div>
        {/*<h1 className={``}>Max Size:  <strong className={`text-red-900`}> 10MB </strong></h1>*/}
        {/*<form className={`flex flex-col gap-5`} onSubmit={(e) => e.preventDefault()}>*/}
        {/*    <input type={"file"} className={`border px-5 bg-green-200  rounded w-full py-2 hover:bg-green-100 cursor-pointer`} placeholder={`Select application file`}/>*/}
        {/*    <h1 className={`font-bold`}>Semester drop reason <span className={`text-red-600`}>*</span></h1>*/}
        {/*    <textarea placeholder={`Enter reason`} className={`border p-5 w-full`}/>*/}
        {/*    <button className={`py-2 cursor-pointer hover:bg-blue-900 duration-300 rounded px-4 bg-blue-700 mt-5 text-white`} type="submit">Submit application</button>*/}
        {/*</form>*/}
    </div>
  );
};

export default StudentProgramChange;

