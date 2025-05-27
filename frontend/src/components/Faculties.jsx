// src/pages/facultiesPage.jsx
import React from 'react';

const FacultiesPage = () => {
    return (
        <div className="p-6 bg-white min-h-screen">
            <h1 className="text-2xl font-bold mb-4">Faculty Management</h1>
            <button className="bg-green-600 text-white px-4 py-2 rounded mb-4">Add Faculty</button>
            <div className="overflow-x-auto">
                <table className="w-full table-auto border">
                    <thead className="bg-gray-200">
                    <tr>
                        <th className="px-4 py-2">Faculty ID</th>
                        <th>Name</th>
                        <th>Department</th>
                        <th>Contact</th>
                    </tr>
                    </thead>
                    <tbody>
                    <tr>
                        <td className="border px-4 py-2">F001</td>
                        <td>Dr. Smith</td>
                        <td>Electrical Engineering</td>
                        <td>smith@univ.edu</td>
                    </tr>
                    </tbody>
                </table>
            </div>
        </div>
    );
};

export default FacultiesPage;
