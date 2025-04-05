import { IoReload } from "react-icons/io5"
import { NavLink } from "react-router-dom"

export const CoursePlaylist = () => {
    return (
        <section className="w-full max-h-screen overflow-auto ~p-4/12">
            <p className=" ~text-lg/xl ~pb-4/8">All Courses</p>
            <div className="overflow-y-scroll w-full h-lvh">
                <div className="flex flex-wrap justify-start items-center sm:flex-row ~gap-4/12">
                    <NavLink to="/courses/frontend-development" className="w-full sm:w-auto flex flex-col gap-3 sm:p-2 border rounded-xl overflow-hidden">
                        <div className="w-full sm:~w-36/64 ~h-40/48 border overflow-hidden rounded-xl">
                            <img src="/basic_web.png" alt="react native dev" className="w-full h-full object-cover" />
                        </div>

                        <div className="flex flex-col justify-between gap-2 p-2 w-full sm:~w-36/64">
                            <p className="line-clamp-1 ~text-sm/xl font-semibold">Frontend Development</p>
                            <p className="text-sm text-gray-600 font-mono line-clamp-1 " title="HTML + CSS + JavaScript + Projects">Learn: HTML + CSS + JavaScript + Projects</p>
                        </div>
                    </NavLink>

                    <div className="w-full sm:w-auto flex flex-col gap-3 sm:p-2 border rounded-xl overflow-hidden">
                        <div className="w-full sm:~w-36/64 ~h-40/48 border overflow-hidden rounded-xl">
                            <img src="/backend_node.png" alt="react native dev" className="w-full h-full object-cover" />
                        </div>

                        <div className="flex flex-col justify-between gap-2 p-2 w-full sm:~w-36/64">
                            <p className="line-clamp-1 ~text-sm/xl font-semibold">Backend Development</p>
                            <p className="text-sm text-gray-600 font-mono line-clamp-1 " title="Express.js + Node.js + MongoDB + Projects">Learn: Express.js + Node.js + MongoDB + Projects</p>
                        </div>
                    </div>

                    <div className="w-full sm:w-auto flex flex-col gap-3 sm:p-2 border rounded-xl overflow-hidden">
                        <div className="w-full sm:~w-36/64 ~h-40/48 border overflow-hidden rounded-xl">
                            <img src="/react_native_dev.png" alt="react native dev" className="w-full h-full object-cover" />
                        </div>

                        <div className="flex flex-col justify-between gap-2 p-2 w-full sm:~w-36/64">
                            <p className="line-clamp-1 ~text-sm/xl font-semibold">Native App Development</p>
                            <p className="text-sm text-gray-600 font-mono line-clamp-1 " title="React Native + Node.js + MongoDB + Expo Projects">Learn: React Native + Node.js + MongoDB + Expo Projects</p>
                        </div>
                    </div>

                    <div className="w-full sm:w-auto flex flex-col gap-3 sm:p-2 border rounded-xl overflow-hidden">
                        <div className="w-full sm:~w-36/64 ~h-40/48 border overflow-hidden rounded-xl">
                            <img src="/mern.png" alt="react native dev" className="w-full h-full object-cover" />
                        </div>

                        <div className="flex flex-col justify-between gap-2 p-2 w-full sm:~w-36/64">
                            <p className="line-clamp-1 ~text-sm/xl font-semibold">Full Stack Development</p>
                            <p className="text-sm text-gray-600 font-mono line-clamp-1 " title="MERN Application">Learn: MERN Application</p>
                        </div>
                    </div>


                </div>

                <p className="w-full flex text-center justify-center items-center gap-2 ~pt-8/12 text-gray-400 ">More Not Found<IoReload /></p>
            </div>

        </section>
    )
}