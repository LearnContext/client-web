import { createContext, useContext, useEffect, useState } from "react";
import axios from "axios";
import { Loader } from "../UI/Loader";
import { BASE_URL } from "../services/helper";

// Create Data Context
export const DataContext = createContext();

// Data Provider Component
export const DataProvider = ({ children }) => {
    // const [loading, setLoading] = useState(false);
    const [appData, setAppData] = useState(null);
    const [courseData, setCourseData] = useState([]);
    const [search, setSearch] = useState("");
    const [saveCourseData, setSaveCourseData] = useState(localStorage.getItem("saveCourses"));

    // Fetch Application Data
    const getAppData = async () => {
        try {
            const URL = `${BASE_URL}/api/data/app`;
            const response = await axios.get(URL);
            if (response.data?.msg?.length) {
                // console.log("App Data:", response.data.msg[0]);
                setAppData(response.data.msg[0]);
            } else {
                console.warn("App Data not found");
            }
        } catch (error) {
            console.error("Error fetching app data:", error.message);
        }
    };

    // Fetch Course Data
    const getCourseData = async () => {
        try {
            const URL = `${BASE_URL}/api/data/courses`;
            const response = await axios.get(URL);
            if (response.data?.msg) {
                console.log("Courses Data:", response.data.msg);
                setCourseData(response.data.msg);
            } else {
                console.warn("Courses Data not found");
            }
        } catch (error) {
            console.error("Error fetching course data:", error.message);
        }
    };

    // Fetch Data on Component Mount
    useEffect(() => {
         getCourseData()
    }, []);

    // Filter Search Data
    const searchData = courseData.filter(
        (course) =>
            course.title.toLowerCase().includes(search.toLowerCase()) ||
            course.description.toLowerCase().includes(search.toLowerCase()) ||
            course.name.toLowerCase().includes(search.toLowerCase())
    );

    // Show Loader if Data is Loading
    // if (loading) {
    //     return <Loader />;
    // }

    // Context Value
    const ProvideValue = {
        appData,
        courseData,
        search,
        setSearch,
        searchData,
        saveCourseData,
        setSaveCourseData
    };

    return (
        <DataContext.Provider value={ProvideValue}>
            {children}
        </DataContext.Provider>
    );
};

// Custom Hook to Use DataContext
export const useData = () => {
    const dataContextValue = useContext(DataContext);
    if (!dataContextValue) {
        throw new Error("useData must be used within a DataProvider");
    }
    return dataContextValue;
};
