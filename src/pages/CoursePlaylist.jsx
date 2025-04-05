import { IoReload } from "react-icons/io5"
import { Link, NavLink } from "react-router-dom"

export const CoursePlaylist = () => {
    return (
        <section className="py-12 px-4 bg-white">
            <h2 className="text-2xl font-semibold text-gray-900 mb-6">All Courses</h2>
            <div className="max-w-6xl mx-auto grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8 text-center">
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
    )
}