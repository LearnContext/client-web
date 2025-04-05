import { Link, NavLink } from "react-router-dom";
import { Search } from "../components/Search";
import { useData } from "../context/data";
import { Carousel } from 'react-responsive-carousel';
import 'react-responsive-carousel/lib/styles/carousel.min.css';
import { FaFeatherPointed } from "react-icons/fa6";
import { FaArrowRight, FaLaptopCode, FaMobileAlt, FaServer, FaRobot, FaGlobe, FaDatabase } from "react-icons/fa";
import { motion } from "framer-motion";
import { useMemo } from "react";
import { DummyCourses } from "../UI/DummyCourses";

export const Home = () => {
    const { courseData } = useData();

    const courses = useMemo(() => [
        { title: "Frontend Development", icon: <FaLaptopCode />, desc: "Learn HTML, CSS, JavaScript, React, and more to create stunning user interfaces." },
        { title: "Backend Development", icon: <FaServer />, desc: "Master Node.js, Express, PHP, and databases to build powerful applications." },
        { title: "Mobile App Development", icon: <FaMobileAlt />, desc: "Develop apps for Android & iOS using React Native and Kotlin." },
        { title: "AI/ML", icon: <FaRobot />, desc: "Explore artificial intelligence, machine learning, and deep learning with Python." },
        { title: "Full Stack Development", icon: <FaGlobe />, desc: "Combine frontend and backend skills to become a full-stack developer." },
        { title: "Database Management", icon: <FaDatabase />, desc: "Master SQL, NoSQL, and cloud databases to store and manage data efficiently." },
    ], []);

    const faqs = useMemo(() => [
        { question: "Who can enroll in LearnContext courses?", answer: "Anyone interested in technology, from beginners to experienced developers, can enroll." },
        { question: "Do I get a certificate?", answer: "Yes! You receive a certificate upon completing each course." },
        { question: "Are the courses free?", answer: "We offer both free and paid courses to cater to all learners." },
        { question: "How do I access course materials?", answer: "Once enrolled, you can access the materials anytime through your dashboard." },
    ], []);

    const images = [
        "carousel/picture1.png",
        "carousel/picture2.svg",
        "carousel/picture3.png",
        "carousel/picture4.png",
    ];


    return <main>
        <section>
            <NavLink to="/courses/dashboard" className="absolute w-full z-20"><Search /></NavLink>

            <Carousel
                showThumbs={false}
                infiniteLoop
                showArrows={true}
                showIndicators={true}
                showStatus={false}
                autoPlay={true}
                interval={4000}
                stopOnHover={false}
                swipeable={false}
                transitionTime={800}
                emulateTouch={false}
                className="rounded-4xl overflow-hidden w-full mx-auto"
            >
                {images.map((image, index) => (
                    <div key={index} className="overflow-hidden w-full h-[240px] md:h-[640px] flex items-center justify-center">
                        <img src={image} alt={`Slide ${index + 1}`} className="rounded-4xl w-full h-full object-cover" />
                    </div>
                ))}
            </Carousel>
        </section>

        <section className="flex flex-col items-center justify-center text-center ~p-8/20">
            {/* Featured Courses */}
            <div className="w-full max-w-5xl grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6 mb-12">
                {courses.map((course, index) => (
                    <motion.div
                        key={index}
                        className="p-6 bg-white shadow-lg rounded-lg text-center"
                        whileHover={{ scale: 1.05 }}
                    >
                        <div className="text-4xl text-blue-600 mb-4">{course.icon}</div>
                        <h3 className="text-xl font-semibold text-gray-800">{course.title}</h3>
                        <p className="text-gray-600 mt-2">{course.desc}</p>
                    </motion.div>
                ))}
            </div>
        </section>

        <section className="flex flex-col ~gap-8/20 ~p-8/20 bg-blue-400 ">
            <h1 className="~text-lg/4xl text-primary font-semibold">Latest Courses</h1>
            <div className="flex flex-col justify-center items-center sm:flex-row ~gap-8/20">
                {
                    courseData.length === 0 ?
                        <DummyCourses/> : (
                            <>
                                <Link to={`/courses/${courseData[courseData.length - 1]._id}/view`} className="flex flex-col gap-4">
                                    <div className="hover_effect ~w-48/80 ~h-36/52 border overflow-hidden rounded-xl">
                                        <iframe src={courseData[courseData.length - 1].url} frameBorder={0} allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" referrerPolicy="strict-origin-when-cross-origin" allowFullScreen className="w-full h-full"></iframe>
                                    </div>
                                    <div className="flex flex-col gap-2 ~w-48/80">
                                        <p className="line-clamp-1 text-primary ~text-sm/xl font-semibold">{courseData[courseData.length - 1].title}</p>
                                        <p className="text-sm text-gray-200 line-clamp-2">{courseData[courseData.length - 1].description}</p>
                                    </div>
                                </Link>

                                <Link to={`/courses/${courseData[courseData.length - 2]._id}/view`} className="flex flex-col gap-4">
                                    <div className="hover_effect ~w-48/80 ~h-36/52 border overflow-hidden rounded-xl">
                                        <iframe src={courseData[courseData.length - 2].url} frameBorder={0} allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" referrerPolicy="strict-origin-when-cross-origin" allowFullScreen className="w-full h-full"></iframe>
                                    </div>
                                    <div className="flex flex-col gap-2 ~w-48/80">
                                        <p className="line-clamp-1 text-primary ~text-sm/xl font-semibold">{courseData[courseData.length - 2].title}</p>
                                        <p className="text-sm text-gray-200 line-clamp-2">{courseData[courseData.length - 2].description}</p>
                                    </div>
                                </Link>

                                <Link to={`/courses/${courseData[courseData.length - 3]._id}/view`} className="flex flex-col gap-4">
                                    <div className="hover_effect ~w-48/80 ~h-36/52 border overflow-hidden rounded-xl">
                                        <iframe src={courseData[courseData.length - 3].url} frameBorder={0} allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" referrerPolicy="strict-origin-when-cross-origin" allowFullScreen className="w-full h-full"></iframe>
                                    </div>
                                    <div className="flex flex-col gap-2 ~w-48/80 ">
                                        <p className="line-clamp-1 text-primary ~text-sm/xl font-semibold">{courseData[courseData.length - 3].title}</p>
                                        <p className="text-sm text-gray-200 line-clamp-2">{courseData[courseData.length - 3].description}</p>
                                    </div>
                                </Link>
                            </>
                        )
                }
            </div>

        </section>
        <div className="flex justify-center p-6 pb-20">
            <NavLink to="/courses/dashboard" className="mt-6 inline-block px-6 py-3 bg-blue-500 text-white rounded-lg hover:bg-blue-600 hover_effect">
                Explore Courses <FaArrowRight className="inline ml-2" />
            </NavLink>
        </div>

        <section className="flex flex-col items-center justify-center text-center p-6">
            {/* FAQs */}
            <section className="w-full max-w-4xl text-center mb-12">
                <h2 className="text-2xl font-semibold text-gray-900 mb-6">Frequently Asked Questions</h2>
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-6 text-left">
                    {faqs.map((faq, index) => (
                        <motion.div
                            key={index}
                            className="p-4 bg-white rounded-lg shadow"
                            initial={{ opacity: 0, scale: 0.9 }}
                            whileInView={{ opacity: 1, scale: 1 }}
                            transition={{ duration: 0.5 }}
                        >
                            <h3 className="text-lg font-semibold text-gray-800">{faq.question}</h3>
                            <p className="text-gray-600 mt-2">{faq.answer}</p>
                        </motion.div>
                    ))}
                </div>
            </section>

            {/* Call to Action */}
            <motion.section
                className="w-full max-w-4xl text-center mb-12"
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ delay: 0.2, duration: 0.6 }}
            >
                <h2 className="text-2xl font-semibold text-gray-900">Ready to Start Your Journey?</h2>
                <p className="text-gray-600 mt-2">Join thousands of learners upgrading their skills on LearnContext.</p>
                <NavLink to="/signup" className="mt-6 inline-block px-6 py-3 bg-green-600 text-white rounded-lg hover:bg-green-700 hover_effect">
                    Get Started Now <FaArrowRight className="inline ml-2" />
                </NavLink>
            </motion.section>
        </section>

        {/* Trusted by Learners */}
        <section className="~py-12/24 bg-white text-center">
            <h2 className="text-2xl font-semibold text-gray-900 mb-6">Trusted by Learners from Top Institutions</h2>
            <div className="flex flex-wrap justify-center gap-8 items-center">
                {["rungta_college", "infosys", "tcs", "microsoft", "google"].map((partner, index) => (
                    <img
                        key={index}
                        src={`/partners/${partner}.png`}
                        alt={`${partner} logo`}
                        className="h-28 object-cover grayscale hover:grayscale-0 transition"
                    />
                ))}
            </div>
        </section>


        {/* Why Learn */}
        <section className="bg-gradient-to-br from-green-100 to-blue-50 py-12">
            <h2 className="text-2xl font-semibold text-center mb-8 text-gray-900">Why Learn with LearnContext?</h2>
            <div className="max-w-6xl mx-auto grid grid-cols-1 md:grid-cols-3 gap-8 px-4">
                {[
                    { icon: <FaFeatherPointed />, title: "Beginner Friendly", desc: "Start learning with no experience needed. We guide you from scratch." },
                    { icon: <FaArrowRight />, title: "Career-Focused", desc: "Industry-relevant skills to help you get jobs and internships." },
                    { icon: <FaDatabase />, title: "Hands-on Projects", desc: "Build real-world projects as you learn. No boring theory!" },
                ].map((feature, index) => (
                    <motion.div
                        key={index}
                        className="bg-white p-6 rounded-xl text-center shadow-md"
                        whileHover={{ y: -5 }}
                    >
                        <div className="text-3xl text-green-600 mb-4">{feature.icon}</div>
                        <h3 className="font-semibold text-gray-900">{feature.title}</h3>
                        <p className="text-sm text-gray-600 mt-2">{feature.desc}</p>
                    </motion.div>
                ))}
            </div>
        </section>
        <section className="bg-gradient-to-tr from-green-100 to-blue-50 ~py-12/24 text-center">
            <h2 className="text-2xl font-semibold text-gray-900 mb-8">Our Growing Community</h2>
            <div className="max-w-5xl mx-auto grid grid-cols-2 md:grid-cols-4 gap-6 text-blue-800 font-semibold">
                <div>
                    <p className="text-3xl">40+</p>
                    <p className="text-sm">Active Learners</p>
                </div>
                <div>
                    <p className="text-3xl">5+</p>
                    <p className="text-sm">Courses Offered</p>
                </div>
                <div>
                    <p className="text-3xl">10+</p>
                    <p className="text-sm">Projects Built</p>
                </div>
                <div>
                    <p className="text-3xl">4.2/5</p>
                    <p className="text-sm">Average Rating</p>
                </div>
            </div>
        </section>


        <section className="py-12 bg-white text-center">
            <h2 className="text-2xl font-semibold text-gray-900 mb-6">Career Roadmaps</h2>
            <p className="text-gray-600 mb-8">Follow our structured learning paths to achieve your dream job.</p>
            <div className="max-w-6xl mx-auto grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8 px-4">
                {[
                    { title: "Frontend Development", image: "/courses/basic_web.png" },
                    { title: "Backend Development", image: "/courses/backend_node.png" },
                    { title: "React Native", image: "/courses/react_native_dev.png" },
                ].map((path, i) => (
                    <Link key={i} to={`/courses/${path.title.toLowerCase().replace(" ", "-")}`} className="group rounded-xl overflow-hidden shadow hover:shadow-lg transition">
                        <img src={path.image} alt={path.title} className="w-full h-48 object-cover group-hover:scale-105 transition-transform duration-300" />
                        <div className="p-4 bg-white">
                            <h3 className="font-semibold text-lg text-gray-800">{path.title}</h3>
                        </div>
                    </Link>
                ))}
            </div>
        </section>

    </main>
}
