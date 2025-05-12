import { NavLink } from "react-router-dom";
import { MdOutlineSubscriptions } from "react-icons/md";
import { LuLayoutDashboard } from "react-icons/lu";

export const CourseMenu = () => {

    const getActivePage = ({ isActive }) => {
        return {
            color: isActive ? "var(--special_green)" : "var(--special_blue)",
        }
    }

    return (
        <>
            <NavLink to="/courses/dashboard" style={getActivePage} className="flex flex-col sm:flex-row p-4justify-center items-center sm:justify-start sm:gap-2 p-2 rounded hover:bg-slate-100 "><LuLayoutDashboard className="text-lg"/><p className="~text-xs/lg hidden sm:block">Dashboard</p></NavLink>
            
            <NavLink to="/courses/playlist" style={getActivePage} className="flex flex-col sm:flex-row p-4justify-center items-center sm:justify-start sm:gap-2 p-2 rounded hover:bg-slate-100 "><MdOutlineSubscriptions className="text-lg"/><p className="~text-xs/lg hidden sm:block ">Courses</p></NavLink>
        </>
    );
}