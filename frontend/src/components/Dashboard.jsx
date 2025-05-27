import React from 'react';

const DashboardPage = () => {
    return (
        <div className="p-6 bg-gray-100 min-h-screen text-gray-800">
            <h1 className="text-2xl font-bold mb-4">Admin Dashboard</h1>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4">
                {['Students', 'Faculties', 'Courses', 'Departments'].map((title) => (
                    <div key={title} className="bg-white p-5 rounded shadow hover:shadow-lg transition">
                        <h2 className="text-xl font-semibold">{title}</h2>
                        <p className="text-gray-500 text-sm">Total {title.toLowerCase()}</p>
                        <span className="text-2xl font-bold mt-2 block text-blue-600">...</span>
                    </div>
                ))}
            </div>
        </div>
    );
};

export default DashboardPage;
