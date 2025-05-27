
import React, {useEffect} from "react";
import Search from "../components/Search.jsx";
import {useAppContext} from "../context/Context.jsx";
import Table from "../components/Table.jsx";

const BillHistory = () => {
    const [searchValue, setSearchValue] = React.useState("");
    const [bills, setBills] = React.useState([]);
    const {server} = useAppContext()
    const thead1 = ["No.", "Fee Type","Course Code","Credit","Amount","Discount","Payment","Trimester Name","Date","Remark"]
    const tdata1 = ["feeType", "courseCode", "credit", "amount", "discount", "payment", 'trimester', "date", "remarks"]
    const thead2 = ["No.", "Installment Number","Deadline","Amount","Late fee"]
    const tdata2 = ["installment", "deadline","amount", "lateFee"]
    const installments = [{"installment":"1st Installment","deadline":"19-01-25", "amount":13700, "lateFee":500}, {"installment":"2nd Installment","deadline":"05-03-25", "amount":14135, "lateFee":500}, {"installment":"3rd Installment","deadline":"07-05-25", "amount":14135, "lateFee":500}]


    useEffect(() => {
        const getBills = async () => {
            const res = await fetch(`${server}/bill/get-all`, {
                method: "POST",
                headers: {
                    "Content-Type": "application/json",
                    "Accept": "application/json",
                    "Authorization": `Bearer ${localStorage.getItem("token")}`,
                },
                body: JSON.stringify({searchValue})
            })
            const data = await res.json();
            data.sort((a, b) => a.date<b.date)
            setBills(data);
        }
        getBills();
    }, [searchValue]);

  return (
    <div className="">
      <h1>BillHistory</h1>
        <div className="flex flex-row gap-5">
            <div className="w-full flex flex-col gap-3">
                <div className={`w-full bg-green-300 rounded-lg flex justify-between py-8 p-5 shadow-2xl`}>
                    <div className={"flex flex-col gap-2"}>
                        <h1><span className={`font-semibold`}>Total Fee :</span> 372200</h1>
                        <h1><span className={`font-semibold`}>Total Discount :</span> -144953 </h1>
                    </div>
                    <div className={"flex  flex-col gap-2"}>
                        <h1><span className={`font-semibold`}>Total Bill :</span> 227247  </h1>
                        <h1> <span className={`font-semibold`}>Total Paid :</span> 117750 </h1>
                    </div>
                    <div>
                        <h1>Balance (Due/Advance): 109497</h1>
                        <p>(Negative Balance means Advance Payment)</p>
                    </div>
                </div>
                <div className={`w-full items-center  h-30`}>
                    <Table results={installments} thead={thead2} tdata={tdata2} theadBG={"bg-purple-800"}/>
                </div>
            </div>
            <div className="p-5  bg-green-300 font-bold   rounded-lg gap-3 flex w-[25%] h-[50%]  flex-col">
                <h1>Amount to pay</h1>
                <input type={'text'} value={109497} disabled={true} className={`border border-red-400 py-2 text-center rounded-lg text-black`}/>
            </div>
        </div>
        <Search setSearchValue={setSearchValue} searchValue={searchValue}/>
        <Table results={bills} thead={thead1} tdata={tdata1} theadBG={"bg-green-700"}/>
    </div>
  );
};

export default BillHistory;

