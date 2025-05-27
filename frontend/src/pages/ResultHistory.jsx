
import React, {useEffect, useState} from "react";
import {useAppContext} from "../context/Context.jsx";
import Search from "../components/Search.jsx";
import Table from "../components/Table.jsx";
const resultHistory = () => {
    const {server} = useAppContext();
    const [results, setResults] = useState([]);
    const [searchValue, setSearchValue] = useState("");
    const semesterWiseHead = ["No.", "Trimester", "Credit(Probation)", "Term", "GPA(Probation)", "CGPA(Probation)", "Credit(Transcript)", "GPA(Transcript)", "CGPA(Transcript)"]
    const thead = ["No.", "Semester/Trimester", "Course Code","Course Title","Credit","Grade","Point","Remark"]
    const tdata = ["semester", "courseCode", "courseTitle", "credit", "grade", "point", "remarks"]
    useEffect(()=>{
        const getResults = async () => {
            const res = await fetch(`${server}/result/get-all`, {
                method: "POST",
                headers: {
                    "Content-Type": "application/json",
                    "Accept": "application/json",
                    "Authorization": `Bearer ${localStorage.getItem("token")}`
                },
                body: JSON.stringify({searchValue}),
            });
            const data = await res.json();
            data.sort((a, b) => {return a.year < b.year});
            setResults(data);
        }
        getResults();
    }, [searchValue]);

  return (
    <div className="">
        <div className="flex flex-col gap-2">
            <h1 className={`text-3xl font-semibold`}>Result History</h1><hr className={`opacity-35`}/>
            <h1 className={`text-2xl`}>Trimester wise GPA and CGPA</h1>
            <div id={"table"} className={`max-h-[30vh] overflow-scroll mb-10`}>
                <table className="w-[90%] border border-gray-300">
                    <thead><tr className={`bg-blue-600 h-8 border text-white`}>
                    {semesterWiseHead.map((item, index) => (<th  key={index} className={`border border-slate-400`}>{item}</th>))}
                    </tr>
                    </thead>
                    <tbody>
                    {results.slice(0, 8).map((result, index) => { return (
                        <tr key={index} className={`text-center text-sm border`}>
                            <td className={`bg-blue-600 text-white`}>{index + 1}</td>
                            <td className={`border border-slate-400`}>{`${result.semester} ${result.year}`}</td>
                            <td className={`border border-slate-400`}>{result.semester==="Summer"? ("15.0"):result.semester==="Fall"? ("12.0"):result.semester==="Spring"? "16.5":("9.0")}</td>
                            <td className={`border border-slate-400`}>{result.semester==="Summer"? ("3.15"):result.semester==="Fall"? ("3.5"):result.semester==="Spring"? "3.25":("3.0")}</td>
                            <td className={`border border-slate-400`}>{result.semester==="Summer"? ("3.15"):result.semester==="Fall"? ("3.5"):result.semester==="Spring"? "3.25":("3.0")}</td>
                            <td className={`border border-slate-400`}>{result.semester==="Summer"? ("3.89"):result.semester==="Fall"? ("3.28"):result.semester==="Spring"? "3.25":("3.08")}</td>
                            <td className={`border border-slate-400`}>{result.semester==="Summer"? ("3.30"):result.semester==="Fall"? ("3.25"):result.semester==="Spring"? "3.25":("3.16")}</td>
                            <td className={`border border-slate-400`}>{result.semester==="Summer"? ("3.45"):result.semester==="Fall"? ("3.30"):result.semester==="Spring"? "3.25":("3.2")}</td>
                            <td className={`border border-slate-400`}>{result.semester==="Summer"? ("3.65"):result.semester==="Fall"? ("3.5"):result.semester==="Spring"? "3.25":("3.5")}</td>
                        </tr>
                    )})}
                    </tbody>
                </table>
            </div>
            <div id={"table"} >
                <Search searchValue={searchValue} setSearchValue={setSearchValue} />
                <Table results={results} thead={thead} tdata={tdata} theadBG={'bg-green-700'}/>
            </div>
        </div>
    </div>
  );
};

export default resultHistory;

