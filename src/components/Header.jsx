import { NavLink } from "react-router-dom"
import { Navbar } from "./Navbar";
import DropdownMenu from "./Dropdown";

export const Header = () => {
    
    return (
        <header className=" w-full ~h-16/24 ~p-2/8 flex justify-between items-center bg-slate-50 border-b">
            <NavLink to="/" className="flex items-center ~gap-1/2">
                <img src="/logo/logo.svg" alt="LearnContext" id="logo" className="~w-8/12 hover_effect" />
                <p className="font-semibold ~text-lg/2xl text-blue-500 self-end">LearnContext</p>
            </NavLink>
            <nav className="flex flex-row justify-between items-center ~gap-4/8">
            
                <div className="hidden ~gap-4/8 sm:flex ~text-sm/lg">
                    <Navbar />
                </div>
                <DropdownMenu />
            </nav>
        </header>
    );
}