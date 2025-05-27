import React from "react";

const Home = () => {
    return (
        <div
            className="relative flex flex-col items-center justify-start font-bold text-slate-900 overflow-hidden h-[60vh] lg:h-[80vh]"
            style={{
                fontFamily: "Montserrat",
                backgroundImage: "url('./assets/GUB-cover.jpg')",
                backgroundSize: "cover",
                backgroundPosition: "center",
            }}
        >
            {/* Overlay */}
            <div className="absolute inset-0 bg-black opacity-60 z-10" />

            {/* Content */}
            <div className="absolute top-20 z-20 text-slate-300 flex flex-col items-center">
                <img src="/assets/gumsbanner.png" className="w-[15%] mx-auto" alt="GUMS Banner" />
                <h1 className="lg:text-3xl sm:text-xl tracking-wide text-center px-4 mt-4">
                    WELCOME TO GREEN UNIVERSITY STUDENT PORTAL
                </h1>
            </div>
        </div>
    );
};

export default Home;
