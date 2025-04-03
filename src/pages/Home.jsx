import { Link, NavLink } from "react-router-dom";
import { Search } from "../components/Search";
import { useData } from "../context/data";
import { Carousel } from 'react-responsive-carousel';
import 'react-responsive-carousel/lib/styles/carousel.min.css';
import { FaFeatherPointed } from "react-icons/fa6";

export const Home = () => {
    const { courseData } = useData();

    const images = [
        "cover.svg",
        "cover.svg",
        "cover.svg",
        "cover.svg",
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
                    <div key={index} className="rounded-4xl">
                        <img src={image} alt={`Slide ${index + 1}`} className="rounded-4xl w-full sm:h-[640px] object-cover" />
                    </div>
                ))}
            </Carousel>
        </section>

        <section className="flex flex-col ~gap-8/12 ~p-8/20 bg-secondary">
            <h2 className="~text-lg/4xl text-nowrap text-primary font-bold">ANYONE CAN BE ANYTHING !!!</h2>
            <div className="flex flex-col sm:flex-row-reverse sm:justify-between items-center sm:items-start ~gap-8/12 ">
                <span>
                    <iframe src="https://lottie.host/embed/e1103c8d-cb6a-491a-8ee1-bb87636fb108/ZW8sPD1oh8.lottie" className="~w-56/96 ~h-56/72"></iframe>
                </span>
                <p className="~text-lg/2xl text-center sm:text-start text-primary sm:w-3/5 line-clamp-6 lg:line-clamp-none">In DronAcharya, the roles of teacher and student seamlessly interchange, fostering a community where everyone has the opportunity to both teach and learn. A teacher can be a student, and a student can become a teacher, breaking down traditional hierarchies. The platform celebrates passionate individuals who share their expertise and inspire others to grow. Whether it’s mastering a skill, exploring a new hobby, or diving into a professional field, learners benefit from the real-world knowledge of dedicated mentors.</p>
            </div>
        </section>

        <section className="flex flex-col ~gap-8/20 ~p-8/20 bg-gradient-to-b from-secondary to-special_blue ">
            <h1 className="~text-lg/4xl text-primary font-semibold">Latest Courses</h1>
            <div className="flex flex-col justify-center items-center sm:flex-row ~gap-8/20">
                {
                    courseData.length === 0 ?
                        null : (
                            <>
                                <Link to={`/courses/${courseData[courseData.length - 1]._id}/view`} className="flex flex-col gap-4">
                                    <div className="hover_effect ~w-48/80 ~h-36/52 border overflow-hidden rounded-xl">
                                        <iframe src={courseData[courseData.length - 1].url} frameBorder={0} allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" referrerPolicy="strict-origin-when-cross-origin" allowFullScreen className="w-full h-full"></iframe>
                                    </div>
                                    <div className="flex flex-col gap-2 ~w-48/80">
                                        <p className="line-clamp-1 text-primary ~text-sm/xl font-semibold">{courseData[courseData.length - 1].name}</p>
                                        <p className="text-sm text-gray-200 line-clamp-2">{courseData[courseData.length - 1].title}</p>
                                    </div>
                                </Link>

                                <Link to={`/courses/${courseData[courseData.length - 2]._id}/view`} className="flex flex-col gap-4">
                                    <div className="hover_effect ~w-48/80 ~h-36/52 border overflow-hidden rounded-xl">
                                        <iframe src={courseData[courseData.length - 2].url} frameBorder={0} allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" referrerPolicy="strict-origin-when-cross-origin" allowFullScreen className="w-full h-full"></iframe>
                                    </div>
                                    <div className="flex flex-col gap-2 ~w-48/80">
                                        <p className="line-clamp-1 text-primary ~text-sm/xl font-semibold">{courseData[courseData.length - 2].name}</p>
                                        <p className="text-sm text-gray-200 line-clamp-2">{courseData[courseData.length - 2].title}</p>
                                    </div>
                                </Link>

                                <Link to={`/courses/${courseData[courseData.length - 3]._id}/view`} className="flex flex-col gap-4">
                                    <div className="hover_effect ~w-48/80 ~h-36/52 border overflow-hidden rounded-xl">
                                        <iframe src={courseData[courseData.length - 3].url} frameBorder={0} allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" referrerPolicy="strict-origin-when-cross-origin" allowFullScreen className="w-full h-full"></iframe>
                                    </div>
                                    <div className="flex flex-col gap-2 ~w-48/80 ">
                                        <p className="line-clamp-1 text-primary ~text-sm/xl font-semibold">{courseData[courseData.length - 3].name}</p>
                                        <p className="text-sm text-gray-200 line-clamp-2">{courseData[courseData.length - 3].title}</p>
                                    </div>
                                </Link>
                            </>
                        )
                }
            </div>
        </section>

    </main>
}