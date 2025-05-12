import { NavLink } from "react-router-dom";
import { HiOutlineUser } from "react-icons/hi2";
import { IoIosContacts } from "react-icons/io";
import { FaLaptopCode } from "react-icons/fa";
import { RiVideoAddLine } from "react-icons/ri";

export const AdminMenu = () => {

    const getActivePage = ({ isActive }) => {
        return {
            color: isActive ? "var(--special_green)" : "var(--special_blue)",
        }
    }
    
    return (
        <>
            <NavLink to="/admin/users" style={getActivePage} title="Users" className="flex flex-col sm:flex-row justify-center items-center sm:justify-start sm:gap-2 p-2 rounded hover:bg-slate-100 "><HiOutlineUser className="text-lg"/><p className="~text-xs/lg hidden sm:block ">Users</p></NavLink>

            <NavLink to="/admin/contacts" style={getActivePage} title="Contacts" className="flex flex-col sm:flex-row justify-center items-center sm:justify-start sm:gap-2 p-2 rounded hover:bg-slate-100 "><IoIosContacts className="text-lg"/><p className="~text-xs/lg hidden sm:block ">Contacts</p></NavLink>

            <NavLink to="/admin/courses" style={getActivePage} title="Courses" className="flex flex-col sm:flex-row justify-center items-center sm:justify-start sm:gap-2 p-2 rounded hover:bg-slate-100 "><FaLaptopCode className="text-lg"/><p className="~text-xs/lg hidden sm:block">Courses</p></NavLink>

            <NavLink to="/admin/course/upload" style={getActivePage} title="Upload" className="flex flex-col sm:flex-row justify-center items-center sm:justify-start sm:gap-2 p-2 rounded hover:bg-slate-100 "><RiVideoAddLine className="text-lg"/><p className="~text-xs/lg hidden sm:block">Upload</p></NavLink>
        </>
    );
} 