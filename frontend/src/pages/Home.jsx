
import React from "react";

const Home = () => {
  return (<>

    <div style={{fontFamily: "Montserrat"}}
         className="lg:tracking-widest sm:tracking-wide lg:text-3xl sm:text-xl pt-3 text-slate-900 lg:h-[80vh] bg-[url('./public/assets/GUB-cover.jpg')] lg:bg-[cover] sm:bg-[contain] sm:h-[60vh] justify-start font-bold items-center flex flex-col overflow-hidden">
        <div className={`w-full h-full bg-black scale-110 opacity-60`}></div>
        <div className={`absolute mt-20 z-39 text-slate-300 flex flex-col items-center justify-start`}>
            <img src={`./public/assets/gumsbanner.png`} className={`w-[15%] mx-auto`}/>
            <h1 className={`max-w-full`}>WELCOME TO GREEN UNIVERSITY STUDENT PORTAL</h1>
        </div>
    </div></>
  );
};

export default Home;

