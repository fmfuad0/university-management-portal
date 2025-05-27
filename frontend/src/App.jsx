import React, {useEffect} from 'react';
import {BrowserRouter as Router, Route, Routes} from 'react-router-dom';
import {AppProvider, useAppContext} from './context/context.jsx';
import Header from './components/Header';
import Sidebar from './components/Sidebar';
import Login from './pages/Login.jsx';
import BillHistory from "./pages/BillHistory.jsx";
import ResultHistory from "./pages/ResultHistory.jsx";
import CourseEvaluation from "./pages/CourseEvaluation.jsx";
import PreRegistration from "./pages/PreRegistration.jsx";
import RegistrationConfirmation from "./pages/RegistrationConfirmation.jsx";
import ClassRoutine from "./pages/ClassRoutine.jsx";
import Profile from "./pages/Profile.jsx";
import PasswordChange from "./pages/PasswordChange.jsx";
import CourseDrop from "./pages/CourseDrop.jsx";
import TeamsUserIdAndPassword from "./pages/TeamsUserIdAndPassword.jsx";
import StudentSpecialExamApply from "./pages/StudentSpecialExamApply.jsx";
import StudentAdmitCard from "./pages/StudentAdmitCard.jsx";
import StudentProgramChange from "./pages/StudentProgramChange.jsx";
import SemesterDrop from "./pages/SemesterDrop.jsx";
import Home from "./pages/Home.jsx";
import {jwtDecode} from "jwt-decode";
import StudentExamRoutine from "./pages/StudentExamRoutine.jsx";

const App = () => {

    return (
        <AppProvider>
            <Router>
                <AppContent />
            </Router>
        </AppProvider>
    );
};

const AppContent = () => {
    const { isLoggedIn, setIsLoggedIn, setUser, server } = useAppContext();
    const token = localStorage.getItem("token");

    const getStudent = async () => {
        const decodedToken = jwtDecode(token);
        const studentId = decodedToken._id
        const data = await fetch(`${server}/student/${studentId}`, {
            method: "GET",
            headers: {
                Accept: "application/json",
                "Content-Type": "application/json",
                "Authorization": `Bearer ${token}`
            }
        })
        const student = await data.json();
        console.log(student);
        setIsLoggedIn(true);
        setUser(student);
    }
    useEffect(() => {
        getStudent();
    }, []);

    return (
        <div className="">
            <Header />
            <div className="h-[90%] p-5 gap-3 bg-green-100 flex lg:flex-row sm:flex-col items-start">
                <div className="sm:absolute lg:relative max-w-[25%] mx-auto">
                    <Sidebar />
                </div>
                <main className="lg:p-4 sm:pt-10  flex flex-col h-[85vh] overflow-scroll w-full border-t border-gray-400 rounded-lg">
                    {isLoggedIn ? (
                        <Routes>
                            <Route path="/" element={<Home/>} />
                            {/*<Route path="/home" element={<Home />} />*/}
                            <Route path="/profile" element={<Profile />} />
                            <Route path="/bill-history" element={<BillHistory />} />
                            <Route path="/result-history" element={<ResultHistory />} />
                            <Route path="/course-evaluation" element={<CourseEvaluation />} />
                            <Route path="/pre-registration" element={<PreRegistration />} />
                            <Route path="/registration-confirmation" element={<RegistrationConfirmation />} />
                            <Route path="/class-routine" element={<ClassRoutine />} />
                            <Route path="/password-change" element={<PasswordChange />} />
                            <Route path="/course-drop" element={<CourseDrop />} />
                            <Route path="/semester-drop" element={<SemesterDrop />} />
                            <Route path="/program-change" element={<StudentProgramChange />} />
                            <Route path="/admit-card" element={<StudentAdmitCard />} />
                            <Route path="/special-exam-apply" element={<StudentSpecialExamApply />} />
                            <Route path="/exam-routine" element={<StudentExamRoutine />} />
                            <Route path="/teams-credentials" element={<TeamsUserIdAndPassword />} />
                        </Routes>
                    ) : (
                        <Login />
                    )}
                </main>
            </div>
        </div>
    );
};

export default App;
