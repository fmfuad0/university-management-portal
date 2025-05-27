import React, { useEffect, useState } from 'react';
import { Link, useLocation } from 'react-router-dom';

const Sidebar = () => {
    const location = useLocation();
    const [selected, setSelected] = useState('');
    const [isMobileOpen, setIsMobileOpen] = useState(false);

    useEffect(() => {
        const path = location.pathname.replace('/', '') || 'Home';
        setSelected(path);
        setIsMobileOpen(false); // Close sidebar when navigating
    }, [location]);

    const links = [
        { path: '', label: 'Home' },
        { path: 'profile', label: 'Profile' },
        { path: 'result-history', label: 'Result History' },
        { path: 'bill-history', label: 'Bill History' },
        { path: 'course-evaluation', label: 'Course Evaluation' },
        { path: 'pre-registration', label: 'Pre-registration' },
        { path: 'registration-confirmation', label: 'Registration Confirmation' },
        { path: 'class-routine', label: 'Class Routine' },
        { path: 'password-change', label: 'Password Change' },
        { path: 'course-drop', label: 'Course Drop' },
        { path: 'semester-drop', label: 'Semester Drop' },
        { path: 'program-change', label: 'Student Program Change' },
        { path: 'admit-card', label: 'Student Admit Card' },
        { path: 'special-exam-apply', label: 'Student Special Exam Apply' },
        { path: 'exam-routine', label: 'Student Exam Routine' },
        { path: 'teams-credentials', label: 'Teams Credentials' },
    ];

    return (
        <>
            {/* Mobile Top Bar with Menu Button */}
            <div className="lg:hidden  flex items-center justify-between p-4 bg-green-300 text-white rounded-full shadow-[#363535FF] shadow-lg">
                <button onClick={() => setIsMobileOpen(!isMobileOpen)}>
                    <img src={"./assets/icons8-menu-30.png"} alt="Menu" className="w-6 h-6" />
                </button>
            </div>

            {/* Sidebar */}
            <aside
                className={`fixed pt-10 lg:top-0 sm:top-[50%] left-0 h-auto bg-green-800 text-white w-64 z-50 transform transition-transform duration-300 ease-in-out rounded 
                ${isMobileOpen ? 'translate-x-0 -translate-y-[50%]' : '-translate-x-full'} lg:translate-x-0 lg:static lg:h-auto overflow-y-auto`}
            >
                <div className="p-4 py-2">
                    <nav className="flex flex-col">
                        {links.map(({ path, label }) => (
                            <Link
                                key={path}
                                to={`/${path}`}
                                className={`p-2 py-1 rounded ${selected === path ? 'bg-green-700' : 'hover:bg-green-700'}`}
                                onClick={() => setSelected(path)}
                            >
                                {label}
                            </Link>
                        ))}
                    </nav>
                </div>
            </aside>

            {/* Mobile Overlay */}
            {isMobileOpen && (
                <div
                    className="fixed inset-0 bg-black bg-opacity-40 z-40 lg:hidden"
                    onClick={() => setIsMobileOpen(false)}
                />
            )}
        </>
    );
};

export default Sidebar;
