
import { Menu, X } from "lucide-react";
import { useRef, useState, useEffect } from "react";
import { Navbar } from "./Navbar";
import { LuMenu } from "react-icons/lu";

const DropdownMenu = () => {

    const [isOpen, setIsOpen] = useState(false);

    const dropdownRef = useRef(null);

    const handleClickOutside = (event) => {
        if (dropdownRef.current && !dropdownRef.current.contains(event.target)) {
            setIsOpen(false);
        }
    };

    useEffect(() => {
        document.addEventListener("mousedown", handleClickOutside);
        return () => document.removeEventListener("mousedown", handleClickOutside);
    }, []);

    return (
        <div className="relative inline-block text-left sm:hidden">
            <button className="md:hidden" onClick={() => setIsOpen(!isOpen)}>
                {isOpen ? <X size={24} className="text-primary cursor-pointer" /> : <LuMenu size={24} className="text-primary cursor-pointer" />}
            </button>

            {isOpen && (
                <div ref={dropdownRef} className="absolute z-50 -right-1 mt-4 w-48 rounded-md shadow-lg bg-special_blue ring-1 ring-black ring-opacity-5">
                    <div className="gap-4 bg-slate flex flex-col p-4 px-4 ~text-sm/lg" role="menu">
                        {/* <button onClick={toggleMenu} className="w-4 self-end"><IoClose className="text-gray-100"/></button> */}
                        <Navbar />
                    </div>
                </div>
            )}
        </div>
    );
};

export default DropdownMenu;