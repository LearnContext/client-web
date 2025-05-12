import { createContext, useContext, useEffect, useState } from "react";

export const AuthContext = createContext();
import axios from "axios";

export const AuthProvider = ({ children }) => {
    const BASE_URL = import.meta.env.VITE_BASE_URL || "http://localhost:5000";

    const [courseData, setCourseData] = useState([]);
    const [search, setSearch] = useState("");
    const [user, setUser] = useState("");
    const [token, setToken] = useState(localStorage.getItem('token'));
    const authorizationToken = `Bearer ${token}`;

    const storeTokenInLS = (serverToken) => {
        setToken(serverToken);
        return localStorage.setItem('token', serverToken);
    }

    let isLoggedIn = !!token;
    console.log('isLoggedIn : ', isLoggedIn);

    // taking the Logout functionality
    const LogoutUser = () => {
        setToken("");
        setUser("");
        return localStorage.removeItem('token');
    }

    // JWT Authentication - to get the currently loggedIn user data
    const userAuthentication = async () => {
        try {
            const URL = `${BASE_URL}/api/auth/user`;
            const response = await axios.get(URL, {
                headers: {
                    Authorization: authorizationToken,
                },
            });

            if (response.status === 200) {
                setUser(response.data.userData);
            }
        } catch (error) {
            console.log("Error fetching user data", error);
        }
    }


    // Fetch Course Data
    const getCourseData = async () => {
        try {
            const URL = `${BASE_URL}/api/data/courses`;
            const response = await axios.get(URL, {
                headers: {
                    Authorization: authorizationToken,
                },
            });
            if (response.data?.msg) {
                console.log(response.data.msg);
                
                setCourseData(response.data.msg);
            } else {
                console.warn("Courses Data not found");
            }
        } catch (error) {
            console.error("Error fetching course data:", error.message);
        }
    };

    // Filter Search Data
    const searchData = courseData.filter(
        (course) =>
            course.title.toLowerCase().includes(search.toLowerCase()) ||
            course.description.toLowerCase().includes(search.toLowerCase()) ||
            course.name.toLowerCase().includes(search.toLowerCase())
    );

    useEffect(() => {
        userAuthentication();

        if (isLoggedIn) {
            getCourseData()
        }
    }, [isLoggedIn]);


    const ProvideValue = {
        isLoggedIn,
        storeTokenInLS,
        LogoutUser,
        user,
        authorizationToken,
        courseData,
        search,
        setSearch,
        searchData,
    }
    return <AuthContext.Provider value={ProvideValue}>
        {children}
    </AuthContext.Provider>
};

export const useAuth = () => {
    const authContextValue = useContext(AuthContext);
    if (!authContextValue) {
        throw new Error("useAuth used outside of the Provider");
    }
    return authContextValue;
};