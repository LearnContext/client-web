import { IoReload } from "react-icons/io5";
import { Link } from "react-router-dom";
import { BsSearch } from "react-icons/bs";
import { useAuth } from "../../context/auth";
import { useEffect, useState } from "react";
import { toast } from "react-toastify";
import axios from "axios";
import { DummyCourses } from "../../UI/DummyCourses";

export const AdminCourses = () => {
    const BASE_URL = import.meta.env.VITE_BASE_URL || "http://localhost:5000";

    const { authorizationToken } = useAuth();
    const [loading, setLoading] = useState(true);
    const [courses, setCourses] = useState([]);
    const [search, setSearch] = useState("");

    // filter the courses data by search input
    const searchData = courses.filter(
        (course) =>
            course.title.toLowerCase().includes(search.toLowerCase()) ||
            course.description.toLowerCase().includes(search.toLowerCase()) ||
            course.name.toLowerCase().includes(search.toLowerCase())
    );

    const existVideo = searchData || courses;

    const getAllCourseData = async () => {
        try {
            const URL = `${BASE_URL}/api/admin/courses`;
            const response = await axios(URL, {
                method: "GET",
                headers: {
                    Authorization: authorizationToken,
                }
            });

            // console.log("courses : ", response.data.msg);
            setCourses(response.data.msg);
            setLoading(false);
        } catch (error) {
            console.log(error);
        }
    }

    // delete the course on delete button
    const deleteCourse = async (id) => {
        setLoading(true);
        try {
            const URL = `${BASE_URL}/api/admin/courses/delete/${id}`;
            const response = await axios(URL, {
                method: "DELETE",
                headers: {
                    Authorization: authorizationToken,
                }
            });

            setLoading(false);

            if (response.status === 200) {
                toast.success("Deleted Successfully")
                getAllCourseData();
            } else {
                toast.warning("Not Deleted");
            }
        } catch (error) {
            console.log(error);
        }
    }

    useEffect(() => {
        getAllCourseData();
    }, [])

    return <>
        <section className="w-full max-h-screen ">
            <div className="w-full ~h-14/20 flex justify-between items-center gap-2 ~p-4/8 ">
                <p className="~text-lg/xl font-semibold pb-4">Admin Courses Data</p>

                <form className="border p-2 px-4 flex justify-between items-center gap-1 rounded w-full sm:w-2/5 ~text-xs/lg">
                    <input onChange={(e) => setSearch(e.target.value)} value={search} autoFocus type="search" name="search" id="search" placeholder="Search cources" className="outline-none text-secondary w-full bg-transparent" />
                    <button><BsSearch className="text-secondary" /></button>
                </form>
            </div>

            {
                loading ? <div className="~p-4/12">
                    <DummyCourses />
                </div> : (
                    <div className="overflow-y-scroll w-full h-lvh border-y ~p-4/12">
                        <div className="flex flex-wrap justify-start items-center sm:flex-row ~gap-4/12">
                            {
                                existVideo.map((course, index) => {

                                    const { _id, url, title, duration, lecturer } = course;

                                    return <div key={index} className="flex sm:flex-col gap-3 sm:p-2 border rounded-xl overflow-hidden">
                                        <div className="w-3/6 sm:~w-36/64 ~h-32/48 border  overflow-hidden rounded-xl">
                                            <iframe src={url} frameBorder={0} allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" referrerPolicy="strict-origin-when-cross-origin" allowFullScreen className="w-full h-full"></iframe>
                                        </div>
                                        <div className="flex flex-col justify-between gap-2 p-2 w-3/6 sm:~w-36/64">
                                            <Link to={`/admin/course/${_id}/view`} className="flex flex-col ~gap-2/4">
                                                <p className="line-clamp-2 text-sm font-semibold">{title}</p>
                                                <div className="flex justify-between items-center ~gap-1/4">
                                                    <p className="line-clamp-1 ~text-xs/sm">{lecturer}</p>
                                                    <p className="text-sm text-green-600 font-mono">{duration}</p>
                                                </div>
                                            </Link>

                                            <div className="flex gap-2">
                                                <Link to={`/admin/course/${_id}/edit`} className="w-full p-2 bg-special_blue hover:bg-blue-600 rounded text-center text-primary ~text-xs/sm">Edit</Link>

                                                <button onClick={() => deleteCourse(_id)} className="w-full p-2 bg-red-500 hover:bg-red-600 rounded text-primary ~text-xs/sm">Delete</button>
                                            </div>
                                        </div>
                                    </div>
                                })
                            }
                        </div>
                        <p className="w-full flex text-center justify-center items-center gap-2 ~pt-8/12 text-gray-400 ">More Not Available <IoReload /></p>
                    </div>
                )

            }
        </section>
    </>
}