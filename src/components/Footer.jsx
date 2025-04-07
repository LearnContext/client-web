import { FaFacebookF, FaGithub, FaLocationArrow } from "react-icons/fa";
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
        <footer className="bg-slate-100 text-gray-700 py-10">
            <div className="container mx-auto px-6 lg:px-20">
                <div className="grid grid-cols-1 md:grid-cols-3 ~gap-8/40">
                    {/* Brand Info */}
                    <div>
                        <h2 className="text-3xl font-bold flex items-center text-special_blue">
                            <div className="mr-2 my-4">
                                <img src="/logo/logo.svg" alt="LearnContext" className="w-10 hover_effect" />
                            </div> 
                            Learn<span className="text-green-500">Context</span>
                        </h2>
                        <p className="text-sm mt-3 leading-relaxed">
                            LearnContext is a crowdsourced learning platform designed to revolutionize
                            education by leveraging the collective knowledge of a large and diverse community.
                            We aim to create an engaging, interactive, and accessible learning environment for everyone.
                        </p>
                        <p className="text-sm mt-2">
                            Join thousands of learners and experts contributing towards a smarter and more
                            connected learning experience. Together, we build knowledge!
                        </p>
                        <div className="flex flex-row gap-2 mt-10">
                            <Link to="https://github.com/Synoize" className="p-2 rounded-full hover:bg-gray-200">
                                <FaGithub title="github" className="clickEffect text-xl text-gray-700" />
                            </Link>
                            <Link to="https://instagram.com/Synoize" className="p-2 rounded-full hover:bg-gray-200">
                                <FaInstagram title="Instagram" className="clickEffect text-xl text-pink-600" />
                            </Link>
                            <Link to="https://www.linkedin.com/in/synoize/" className="p-2 rounded-full hover:bg-gray-200">
                                <FaLinkedinIn title="LinkedIn" className="clickEffect text-xl text-blue-800" />
                            </Link>
                            <Link to="https://www.youtube.com/@Synoize" className="p-2 rounded-full hover:bg-gray-200">
                                <FaYoutube title="YouTube" className="clickEffect text-xl text-red-600" />
                            </Link>
                            <Link to="https://x.com/Synoize" className="p-2 rounded-full hover:bg-gray-200">
                                <RiTwitterXLine title="X" className="clickEffect text-xl text-secondary" />
                            </Link>
                        </div>
                    </div>


                    {/* Resources */}
                    <div>
                        <h3 className="text-lg font-semibold">Resources</h3>
                        <ul className="mt-3 space-y-3 text-sm">
                            <li>
                                <p className="hover:text-blue-600">
                                    Learning Paths - Structured courses to help you achieve your learning goals.
                                </p>
                            </li>
                            <li>
                                <p className="hover:text-blue-600">
                                    Webinars - Attend live sessions with industry experts and educators.
                                </p>
                            </li>
                            <li>
                                <p className="hover:text-blue-600">
                                    Certifications - Get certified and showcase your skills with recognized credentials.
                                </p>
                            </li>
                            <li>
                                <p className="hover:text-blue-600">
                                    Support Center - Need help? Visit our support center for assistance.
                                </p>
                            </li>
                        </ul>
                    </div>

                    {/* Contact Info */}
                    <div>
                        <h3 className="text-lg font-semibold">Get In Touch</h3>
                        <p className="text-sm mt-3">
                            Have questions or feedback? Reach out to us anytime. We’re here to help!
                        </p>
                        <p className="mt-3 flex items-center">
                            <IoLocationSharp size={20} color="green" /> <span className="ml-2">Bhilai, Chhattisgarh, India</span>
                        </p>
                        <p className="mt-2 flex items-center">
                            ✉️ <a href="mailto:hello@LearnContext.in" className="ml-2 text-blue-600">
                                hello@LearnContext.in
                            </a>
                        </p>
                        <p className="mt-2 flex items-center">
                            ☎️ <a href="tel:+91XXXXXXXXXX" className="ml-2 text-blue-600">
                                +91 XXXXX XXXXX
                            </a>
                        </p>
                        <p className="mt-2 flex items-center">
                            ❓ <NavLink to="/contact" className="ml-2 hover:text-blue-600">
                                Contact Us - Fill out our support form for inquiries.
                            </NavLink>
                        </p>
                    </div>
                </div>

                <div className="border-t border-gray-300 mt-8 pt-4 text-center text-sm">
                    <p>© 2025 learncontext.in All rights reserved.</p>
                    <div className="flex  justify-center space-x-4 mt-2">
                        <a href="#" className="text-blue-600 hover:text-blue-800">
                            Privacy Policy
                        </a>
                        <a href="#" className="text-blue-600 hover:text-blue-800">
                            Terms and Conditions
                        </a>
                    </div>
                </div>
            </div>
        </footer>
    )

}