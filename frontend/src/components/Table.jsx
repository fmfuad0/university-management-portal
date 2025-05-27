import React from 'react';

function Table({results, thead, tdata, theadBG, paddingY}) {
    return (
        <div className="flex flex-col rounded-xl overflow-hidden" >

        <table className="w-full bg-slate-100 border border-gray-300 ">
            <thead className={`font-semibold`}>
            <tr className={`${theadBG} h-8 border text-white `}>
                {thead.map((row, index) => (
                    <th className={`border border-slate-400 ${paddingY}`}>{row}</th>
                ))}
            </tr>
            </thead>
            <tbody>
            {results.map((result, sl) => {return (
                <tr className={`text-center text-[14px] border`}>
                        <td className={`border ${theadBG} text-white border-slate-400`}>{sl+1}</td>
                    {tdata.map((row, index) => {
                    return (
                            <td  className={`border border-slate-400 ${paddingY} font-semibold`}>{`${result[tdata[index]] || (tdata[index]!=='payment'?"N/A":"")} ${(tdata[index] ==="semester" || tdata[index] ==="trimester")? result.year : ""}`}</td>
                    )
                    })}
                </tr>
            )})}
            </tbody>

        </table>
        </div>
    );
}

export default Table;
