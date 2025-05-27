
import React, {useEffect, useState} from "react";
import {useAppContext} from "../context/Context.jsx";
import Search from "../components/Search.jsx";
import SectionCard from "../components/SectionCard.jsx";


const PreRegistration = () => {
    const {server, user} = useAppContext();
    const [results, setResults] = useState([]);
    const [searchValue, setSearchValue] = useState("");
    const [creditTaken, setCreditTaken] = useState(0)
    useEffect(()=>{
        const getResults = async () => {
            let temp =0
            const res = await fetch(`${server}/section/pre-registration/${user.studentId}`, {
                method: "POST",
                headers: {
                    "Content-Type": "application/json",
                    "Accept": "application/json",
                    "Authorization": `Bearer ${localStorage.getItem("token")}`
                },
                body: JSON.stringify({year:"2024", semester:"Fall"}),
            });
            const data = await res.json();
            let filteredData = []
            data.data.map((item) => {if(item)filteredData.push(item);if(item.registeredStudents.includes(user.studentId)){temp+=item.courseCredit}});
            setCreditTaken(temp)
            filteredData.sort((a, b)=>{return b.registeredStudents.includes(user.studentId)})
            setResults(filteredData);
            // console.log(filteredData);
        }
        getResults();
    }, [searchValue, server]);
  return (
      <div className="" >
          <div className="flex flex-col gap-2">
              <h1 className={`text-3xl font-semibold`}>Pre Registration</h1><hr className={`opacity-35`}/>
              <div id={"table"} >
                  <Search searchValue={searchValue} setSearchValue={setSearchValue} />
                  <div className={`w-full grid grid-cols-2 gap-5 p-10 items-center `}>
                      {results.map((section, sl) => <SectionCard key={sl} creditTaken={creditTaken} setCreditTaken={setCreditTaken} section={section}/>)}
                  </div>
              </div>
          </div>
      </div>
  );
};

export default PreRegistration;

