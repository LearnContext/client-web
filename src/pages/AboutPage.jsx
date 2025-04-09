import { NavLink } from "react-router-dom";
import { motion } from "framer-motion";
import { useAuth } from "../context/auth";

export const AboutPage = () => {
    const { isLoggedIn } = useAuth();

    return (
        <section className="bg-gray-100 py-16 px-6 md:px-16">
            <div className="max-w-6xl mx-auto text-center">
                <motion.h2
                    className="text-4xl font-bold text-gray-900 mb-6 flex flex-col gap-2 justify-center"
                    initial={{ opacity: 0, y: -20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.8 }}
                >
                    <motion.img
                        src="/logo/LearnContext_dark.svg"
                        alt="LearnContext"
                        id="logo"
                        className="~w-32/40 hover_effect m-auto"
                        whileHover={{ scale: 1.1 }}
                    />
                    Welcome to <span className="text-blue-600">Learn<span className="text-green-500">Context</span></span>
                </motion.h2>
                <motion.p
                    className="text-lg text-gray-700 max-w-3xl mx-auto mb-10"
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    transition={{ delay: 0.2, duration: 1 }}
                >
                    LearnContext is your one-stop destination for mastering the most in-demand technical skills in software development, AI/ML, full-stack engineering, and mobile app development. We provide structured learning paths, real-world projects, and expert guidance to help you advance in your tech career.
                </motion.p>

                {/* Key Features Section */}
                <motion.div
                    className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 mt-8"
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    transition={{ duration: 0.8 }}
                >
                    {[
                        { title: "💻 Full-Stack Development", desc: "Learn React, Next.js, Node.js, Express, MongoDB, SQL, and more to build high-performance web applications." },
                        { title: "📱 Mobile App Development", desc: "Master Android (Kotlin, Jetpack Compose) and cross-platform (React Native, Flutter) development." },
                        { title: "🤖 AI & Machine Learning", desc: "Dive into Python, TensorFlow, deep learning, and neural networks to build AI-driven applications." },
                        { title: "🌐 Frontend Development", desc: "Master HTML, CSS, JavaScript, React, Tailwind CSS, and Next.js for building dynamic user interfaces." },
                        { title: "🛠 Backend Development", desc: "Learn Node.js, Django, Flask, Spring Boot, GraphQL, and microservices to handle server-side logic." },
                        { title: "🚀 Programming Languages", desc: "Gain expertise in Python, JavaScript, Kotlin, Go, C, C++, Java, and more with hands-on coding exercises." }
                    ].map((feature, index) => (
                        <motion.div
                            key={index}
                            className="bg-white shadow-lg p-6 rounded-xl"
                            whileHover={{ scale: 1.05 }}
                        >
                            <h3 className="text-xl font-semibold text-gray-800 mb-3">{feature.title}</h3>
                            <p className="text-gray-600">{feature.desc}</p>
                        </motion.div>
                    ))}
                </motion.div>

                {/* Additional Learning Features */}
                <motion.div className="mt-16" initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ delay: 0.3, duration: 0.8 }}>
                    <h2 className="text-3xl font-bold text-gray-900 mb-6">Why Choose LearnContext?</h2>
                    <ul className="text-lg text-gray-700 max-w-4xl mx-auto space-y-4 text-left">
                        <li>✔️ Industry-Aligned Courses - Learn skills that match real-world job requirements.</li>
                        <li>✔️ Hands-On Projects - Build portfolio-ready projects to showcase your expertise.</li>
                        <li>✔️ AI-Powered Course Recommendations - Personalized learning paths based on your career goals.</li>
                        <li>✔️ 24/7 Access & Self-Paced Learning - Learn anytime, anywhere, at your own convenience.</li>
                        <li>✔️ Certification Programs - Get certificates to boost your resume and job opportunities.</li>
                        <li>✔️ Expert Mentorship - Connect with experienced developers and industry professionals.</li>
                    </ul>
                </motion.div>

                {/* Call to Action */}
                <motion.div
                    className="mt-16"
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ delay: 0.4, duration: 0.8 }}
                >
                    <h2 className="text-3xl font-bold text-gray-900 mb-6">Start Learning Today!</h2>
                    <p className="text-lg text-gray-700 max-w-3xl mx-auto">
                        Join LearnContext and gain expertise in cutting-edge technologies. Choose from AI, web development, full-stack, mobile apps, and more! Start your journey towards a successful tech career today.
                    </p>
                    
                    <motion.div
                        className="mt-6"
                        whileHover={{ scale: 1.1 }}
                    >
                        {
                            isLoggedIn ? <NavLink
                            to="/courses/playlist"
                            className="inline-block bg-blue-600 text-white px-6 py-3 rounded-lg text-lg font-semibold hover:bg-blue-700 transition-all"
                        >
                            Explore Courses
                        </NavLink> : <NavLink
                            to="/login"
                            className="inline-block bg-blue-600 text-white px-6 py-3 rounded-lg text-lg font-semibold hover:bg-blue-700 transition-all"
                        >
                            Explore Courses
                        </NavLink>
                        }
                    </motion.div>
                </motion.div>
            </div>
        </section>
    );
};
