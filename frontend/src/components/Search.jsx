import React from 'react';
import * as sea from "node:sea";

function Search({searchValue, setSearchValue}) {
    return (
            <div className="flex flex-row gap-2 border border-slate-800 mb-1">
                <h1 className={`bg-slate-300 py-2 px-7 font-semibold text-gray-800`}>Search...</h1>
                <input type={'text'} placeholder={'Search here...'} value={searchValue} onChange={(e)=> {setSearchValue(e.target.value);}} className={` w-full py-2 border-none focus:outline-none`} />
            </div>
    );
}

export default Search;
