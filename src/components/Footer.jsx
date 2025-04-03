import { FaFacebookF, FaLocationArrow } from "react-icons/fa";
import { FaInstagram } from "react-icons/fa";
import { FaLinkedinIn } from "react-icons/fa";
import { FaYoutube } from "react-icons/fa";
import { RiTwitterXLine } from "react-icons/ri";
import { IoLocationSharp } from "react-icons/io5";
import { AiOutlineMail } from "react-icons/ai";
import { MdOutlineContactSupport } from "react-icons/md";
import { Link, NavLink } from "react-router-dom";

export const Footer = () => {

    return (
        <footer>
            <div className="flex flex-col sm:flex-row sm:justify-between ~gap-6/16 bg-slate-50 ~py-6/12 ~px-6/36 ">
                <div className="flex flex-col gap-6 w-full sm:w-2/5">
                    <NavLink to="/" className="w-40 flex items-center gap-2 ">
                        <img src="skillsite_dark.svg" alt="skillsite" id="logo" className="~w-14/20 hover_effect" />
                        <p className="text-special text-2xl font-bold self-end">skillsite</p>
                    </NavLink>

                    <div>
                    A crowdsourced learning app is an innovative platform designed to revolutionize the way people learn by leveraging the collective knowledge and experiences of a large community.
                    </div>

                    <div className="flex flex-row gap-2 ">
                        <Link className="p-2 rounded-full hover:bg-gray-200">
                            <FaFacebookF title="Facebook" className="clickEffect text-xl text-blue-700" />
                        </Link>
                        <Link className="p-2 rounded-full hover:bg-gray-200">
                            <FaInstagram title="Instagram" className="clickEffect text-xl text-pink-600" />
                        </Link>
                        <Link className="p-2 rounded-full hover:bg-gray-200">
                            <FaLinkedinIn title="LinkedIn" className="clickEffect text-xl text-blue-800" />
                        </Link>
                        <Link className="p-2 rounded-full hover:bg-gray-200">
                            <FaYoutube title="YouTube" className="clickEffect text-xl text-red-600" />
                        </Link>
                        <Link className="p-2 rounded-full hover:bg-gray-200">
                            <RiTwitterXLine title="X" className="clickEffect text-xl text-secondary" />
                        </Link>
                    </div>
                </div>

                <div className="flex flex-col sm:flex-row ~gap-8/36">
                    <div className="flex flex-col gap-2">
                        <h1 className="text-xl text-secondary font-semibold sm:pt-8">Get In Touch</h1>
                        <div className="flex flex-col gap-4 text-lg ">
                            <p className="~text-sm/lg text-gray-600 hover:text-gray-700">It’s a space of knowledge.</p>
                            <div className="flex flex-col gap-2">
                                <p className="flex items-center gap-2 ~text-sm/lg text-nowrap text-gray-600 hover:text-gray-700"><IoLocationSharp className=" text-xl" />Bhilai, CG</p>
                                <p className="flex items-center gap-2 ~text-sm/lg text-nowrap text-gray-600 hover:text-gray-700"><AiOutlineMail className="text-special" /><Link>hello@skillsite.in</Link></p>
                                <p className="flex items-center gap-2 ~text-sm/lg text-nowrap text-gray-600 hover:text-gray-700"><MdOutlineContactSupport className="text-special" /><NavLink to="/contact" >Contact Us</NavLink></p>
                            </div>
                        </div>
                    </div>
                </div>
            </div>


            <div className="w-full p-4 bg-gray-100 flex flex-col justify-around items-center gap-2 sm:flex-row">
                <p className="text-sm text-gray-800">All rights reserved by skillsite.in 2024</p>

                <span className="flex gap-4 text-xs text-slate-600 sm:text-sm">
                    <p className="text-blue-800">Privacy Policy</p>
                    <p>Terms and Conditions</p>
                </span>
            </div>
        </footer >
    )
}