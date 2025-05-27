// src/pages/studentsPage.jsx
import React from 'react';

const StudentsPage = () => {
    return (
        <div className="p-6 bg-white min-h-screen text-gray-900">
            <h1 className="text-2xl font-bold mb-6">Student Management</h1>
            <button className="bg-blue-600 text-white px-4 py-2 rounded mb-4">Add Student</button>
            <table className="w-full table-auto border">
                <thead className="bg-gray-200">
                <tr>
                    <th className="px-4 py-2">ID</th>
                    <th>Name</th>
                    <th>Email</th>
                    <th>Department</th>
                    <th>Actions</th>
                </tr>
                </thead>
                <tbody>
                {/* Sample row */}
                <tr>
                    <td className="border px-4 py-2">S001</td>
                    <td>John Doe</td>
                    <td>john@example.com</td>
                    <td>Computer Science</td>
                    <td><button className="text-blue-600">Edit</button></td>
                </tr>
                </tbody>
            </table>
        </div>
    );
};

export default StudentsPage;
