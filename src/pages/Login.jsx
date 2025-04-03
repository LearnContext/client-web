import { GoArrowRight } from "react-icons/go";
import { NavLink, useNavigate } from "react-router-dom";
import { useState } from "react";
import { useAuth } from "../context/auth";
import { toast } from "react-toastify";
import 'react-toastify/dist/ReactToastify.css';
import { BASE_URL } from "../services/helper";

export const Login = () => {
    const navigate = useNavigate();
    const { storeTokenInLS } = useAuth();

    const handleGoBack = () => {
        navigate(-1);
    };

    const defaultUserData = {
        email: "",
        password: "",
    };

    const [error, setError] = useState(null);
    const [user, setUser] = useState(defaultUserData);
    const [loading, setLoading] = useState(false);

    const handleInputChange = (e) => {
        const { name, value } = e.target;
        setUser({ ...user, [name]: value, });
    };

    const handleFormSubmit = async (e) => {
        e.preventDefault();
        setLoading(true);
        // console.log(user);
        
        try {
            const URL = `${BASE_URL}/api/auth/login`;
            const response = await fetch(URL, {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json'
                },
                body: JSON.stringify(user)
            });

            const data = await response.json();
            // console.log("response from server : ", data);
            setLoading(false);

            if (response.ok) {
                storeTokenInLS(data.token);

                setUser(defaultUserData);
                toast.success("Login Successful");
                navigate("/");
            } else {
                setError(data.extraDetail ? data.extraDetail : data.message);
            }
        } catch (error) {
            setLoading(false);
            console.log(error);
        }
    };

    // loading after fetching data
    if (loading) {
        return <div className="w-full h-lvh flex justify-center items-center">
        Logging...
    </div>
    }

    return <section className="flex flex-col gap-10 items-center ~p-4/12">
        <div className="flex justify-between w-full sm:w-96">
            <div>
                <h1 className="text-xl">Login</h1>
                <NavLink to="/signup" className="text-sm ">or <p className="text-special_blue">Create an account</p></NavLink>
                <hr className="w-10 h-0.5 mt-2 border-none bg-primtext-primary_special rounded-full" />
            </div>

            <div className="p-2 ">
                <GoArrowRight onClick={handleGoBack} className="text-red-500 text-xl cursor-pointer" />
            </div>
        </div>

        <form onSubmit={handleFormSubmit} className="sm:flex w-full sm:w-96">
            <ul>
                <li className="border border-b-0 p-2 flex flex-col justify-start">
                    <label htmlFor="email" className="text-gray-400">Email <span className="text-red-500">*</span></label>
                    <input value={user.email} onChange={handleInputChange} autoFocus autoComplete="off" required type="email" name="email" id="email" className="outline-none font-medium text-gray-600 sm:w-96" />
                </li>
                <li className="border p-2 flex flex-col justify-start">
                    <label htmlFor="password" className="text-gray-400 text-nowrap">Password <span className="text-red-500">*</span></label>
                    <div className="flex justify-between items-start">
                        <input value={user.password} onChange={handleInputChange} autoComplete="off" required type="password" name="password" id="password" className="w-full outline-none font-medium text-gray-600 " />
                    </div>
                </li>
                <p className="mt-4 text-red-500 text-center">{error}</p>
                <button type="submit" className="w-full mt-4 p-4 bg-blue-500 text-primary hover:bg-blue-600">Login</button>
            </ul>
        </form> 
    </section>
}