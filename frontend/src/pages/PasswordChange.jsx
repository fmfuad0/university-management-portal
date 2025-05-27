
import React, {useEffect, useState} from "react";

const PasswordChange = () => {
    const [newPassword, setNewPassword] = useState("")
    const [newPassword2, setNewPassword2] = useState("")
    const [oldPassword, setOldPassword] = useState("")
    const [isMatch, setIsMatch] = useState(false)
    const handleSubmit = async (e) => {
        e.preventDefault();
        try {
            // const res = await fetch("/api/student/change-password", {
            //     method: "POST",
            //     headers: {
            //         "Content-Type": "application/json",
            //         "Authorization": `Bearer ${localStorage.getItem("token")}`,
            //     },
            //     body: JSON.stringify({ oldPassword, newPassword })
            // });
            //
            // const result = await res.json();
            const res = {ok:true};
            if (res.ok) {
                alert("Password changed successfully!");
                setOldPassword("");
                setNewPassword("");
                setNewPassword2("");
            } else {
                alert(result.message || "Failed to change password");
            }
        } catch (err) {
            alert("Something went wrong.");
            console.error(err);
        }
    };
    useEffect(() => {
        setIsMatch(newPassword !== "" && newPassword === newPassword2);
    }, [newPassword, newPassword2]);


    return (
    <div className="p-4 pt-0">
        <h1 className={`text-2xl mb-3 font-semibold`}>Student Password Change</h1><hr className={`opacity-35`}/>
        <div className="flex items-start pt-10 justify-center h-[80vh] bg-green-100">
            <form onSubmit={handleSubmit} className="bg-white p-8 rounded shadow-md w-96">
                <h2 className="text-2xl font-bold mb-6 text-center">Change your password</h2>
                <input
                    type="password"
                    name="oldPassword"
                    placeholder="Old Password"
                    value={oldPassword}
                    onChange={(e)=>setOldPassword(e.target.value)}
                    className="w-full p-2 mb-4 border rounded"
                    required
                />
                <input
                    type="password"
                    name="newPassword"
                    placeholder="New Password"
                    value={newPassword}
                    onChange={(e)=> {setNewPassword(e.target.value)}}
                    className="w-full p-2 mb-6 border rounded"
                    required
                />
                <input
                    type="password"
                    name="newPassword2"
                    placeholder="New Password"
                    value={newPassword2}
                    onChange={(e)=> {setNewPassword2(e.target.value)}}
                    className="w-full p-2 mb-6 border rounded"
                    required
                />
                <div className={`flex justify-center cursor-pointer ${isMatch? "bg-green-700 hover:bg-green-800" :"bg-gray-400 hover:bg-red-800"}  gap-2 text-white p-2 rounded  items-end-safe`}>
                    {isMatch&&<img src={'/assets/icons8-tick.gif'} className={`h-5 rounded-full`} alt="Matched" />}
                    {!isMatch&&(newPassword!==''||newPassword2!=='') && <img src={'/assets/icons8-cross.gif'} className={`h-5 rounded-full`} alt="Not Matched" />}
                <button type="submit" className={`cursor-pointer`} disabled={!isMatch}>
                    Change Password
                </button>
                </div>
            </form>
        </div>
    </div>
  );
};

export default PasswordChange;

