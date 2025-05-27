
import React from "react";
import {useAppContext} from "../context/Context.jsx";
const Profile = () => {
    const {user} = useAppContext();
  return (
    <div className="flex flex-col gap-5 p-4 pt-1">
        <div className="flex flex-col gap-5">
          <h1 className={`text-3xl font-bold`}>Student Profile</h1><hr/>
            <div className={`p-5 shadow-2xl bg-slate-50 w-full`}>
                <div className="justify-around hover:shadow-2xl duration-400 text-sm gap-5 p-3 border border-gray-300  list-none grid grid-cols-3">
                    <li><strong>Name :</strong> {user.fullName}</li>
                    <li><strong>Student ID :</strong> <span className={`text-green-800 font-bold`}>{user.studentId}</span></li>
                    <li><strong>Program :</strong> {user.department} {user.program}</li>
                    <li><strong>Batch :</strong> {user.batch}</li>
                    <li><strong>Probation:</strong> No probation</li>
                </div>
            </div>
        </div>
        <div className={`gap-5`}>
          <h1 className={`text-3xl font-bold `}>Status</h1><hr/>
            <div className={`p-5 bg-slate-50 shadow-2xl w-full`}>
                <div className="justify-around hover:shadow-2xl duration-400 text-sm gap-5 p-3 border border-gray-300 list-none grid grid-cols-3">
                    <li><strong>Evaluation Pending :</strong> 0 courses</li>
                    <li><strong>Active Status :</strong> {user.admissionStatus}</li>
                    <li><strong>Disciplinary Block :</strong> None</li>
                    <li><strong>Admission Cancel :</strong> Not Applicable</li>
                </div>

            </div>
        </div>
        <div className={`flex flex-col gap-5`}>
          <h1 className={`text-3xl font-bold`}>Basic Information</h1><hr/>
            <div className={`shadow-2xl w-full`}>
                <div className="justify-around bg-slate-50 p-5  ">
                    <div className={`text-sm gap-3 hover:shadow-2xl duration-400 border border-gray-300  list-none grid grid-cols-2 p-5`}>
                        <li><strong>Email :</strong> {user.email}</li>
                        <li><strong>DOB :</strong> {user.dateOfBirth} </li>
                        <li><strong>Religion :</strong> {user.religion}</li>
                        <li><strong>BATCH :</strong> {user.batch} </li>
                        <li><strong>Blood Group :</strong> O+ </li>
                        <li><strong>Contact No. :</strong> {user.phoneNumber}</li>
                        <li><strong>Gender :</strong> {user.gender}</li>
                        <li><strong>Father's Name :</strong> {user.fatherName}</li>
                        <li><strong>Mother's Name  :</strong> {user.motherName} </li>
                        <li><strong>Marital Status  :</strong> {user.maritalStatus} </li>
                        <li><strong>Nationality  :</strong> {user.nationality} </li>
                        <li><strong>Permanent Address  :</strong> {user.permanentAddress} </li>
                        <li><strong>Present Address  :</strong> {user.presentAddress} </li>
                        <li><strong>Guardian Name  :</strong> {user.fatherName} </li>
                        <li><strong>Guardian Phone Number  :</strong> {user.guardianContact} </li>
                    </div>
                </div>

            </div>
        </div>

    </div>
  );
};

export default Profile;

