export const AboutPage = () => {
    return (
      <section className="bg-gray-100 py-16 px-6 md:px-16">
        <div className="max-w-6xl mx-auto text-center">
          <h2 className="text-4xl font-bold text-gray-900 mb-6">
            Welcome to <span className="text-blue-600">SkillSite</span>
          </h2>
          <p className="text-lg text-gray-700 max-w-3xl mx-auto mb-10">
            **SkillSite** is your one-stop destination for mastering the most **in-demand technical skills** in software development, AI/ML, full-stack engineering, and mobile app development. We provide **structured learning paths, real-world projects, and expert guidance** to help you advance in your tech career.
          </p>
  
          {/* Key Features Section */}
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 mt-8">
            <div className="bg-white shadow-lg p-6 rounded-xl">
              <h3 className="text-xl font-semibold text-gray-800 mb-3">💻 Full-Stack Development</h3>
              <p className="text-gray-600">
                Learn **React, Next.js, Node.js, Express, MongoDB, SQL, and more** to build high-performance web applications.
              </p>
            </div>
  
            <div className="bg-white shadow-lg p-6 rounded-xl">
              <h3 className="text-xl font-semibold text-gray-800 mb-3">📱 Mobile App Development</h3>
              <p className="text-gray-600">
                Master **Android (Kotlin, Jetpack Compose)** and **cross-platform (React Native, Flutter)** development.
              </p>
            </div>
  
            <div className="bg-white shadow-lg p-6 rounded-xl">
              <h3 className="text-xl font-semibold text-gray-800 mb-3">🤖 AI & Machine Learning</h3>
              <p className="text-gray-600">
                Dive into **Python, TensorFlow, deep learning, and neural networks** to build AI-driven applications.
              </p>
            </div>
  
            <div className="bg-white shadow-lg p-6 rounded-xl">
              <h3 className="text-xl font-semibold text-gray-800 mb-3">🌐 Frontend Development</h3>
              <p className="text-gray-600">
                Master **HTML, CSS, JavaScript, React, Tailwind CSS, and Next.js** for building dynamic user interfaces.
              </p>
            </div>
  
            <div className="bg-white shadow-lg p-6 rounded-xl">
              <h3 className="text-xl font-semibold text-gray-800 mb-3">🛠 Backend Development</h3>
              <p className="text-gray-600">
                Learn **Node.js, Django, Flask, Spring Boot, GraphQL, and microservices** to handle server-side logic.
              </p>
            </div>
  
            <div className="bg-white shadow-lg p-6 rounded-xl">
              <h3 className="text-xl font-semibold text-gray-800 mb-3">🚀 Programming Languages</h3>
              <p className="text-gray-600">
                Gain expertise in **Python, JavaScript, Kotlin, Go, C, C++, Java**, and more with hands-on coding exercises.
              </p>
            </div>
          </div>
  
          {/* Additional Learning Features */}
          <div className="mt-16">
            <h2 className="text-3xl font-bold text-gray-900 mb-6">Why Choose SkillSite?</h2>
            <ul className="text-lg text-gray-700 max-w-4xl mx-auto space-y-4 text-left">
              <li>✔️ **Industry-Aligned Courses** - Learn skills that match **real-world job requirements**.</li>
              <li>✔️ **Hands-On Projects** - Build **portfolio-ready projects** to showcase your expertise.</li>
              <li>✔️ **AI-Powered Course Recommendations** - Personalized learning paths based on your career goals.</li>
              <li>✔️ **24/7 Access & Self-Paced Learning** - Learn anytime, anywhere, at your own convenience.</li>
              <li>✔️ **Certification Programs** - Get **certificates** to boost your resume and job opportunities.</li>
              <li>✔️ **Expert Mentorship** - Connect with **experienced developers and industry professionals**.</li>
            </ul>
          </div>
  
          {/* Mission & Vision Section */}
          <div className="mt-16">
            <h2 className="text-3xl font-bold text-gray-900 mb-6">Our Mission & Vision</h2>
            <p className="text-lg text-gray-700 max-w-4xl mx-auto">
              **SkillSite** is committed to providing a **practical, skill-driven education** for aspiring developers, engineers, and tech professionals. Our mission is to **bridge the gap between traditional education and industry expectations**, ensuring that every learner is job-ready.
            </p>
          </div>
  
          {/* Testimonials Section */}
          <div className="mt-16">
            <h2 className="text-3xl font-bold text-gray-900 mb-6">What Our Learners Say</h2>
            <div className="grid md:grid-cols-2 gap-8">
              <div className="bg-white shadow-lg p-6 rounded-xl">
                <p className="text-gray-600 italic">
                  "The **full-stack course** on SkillSite gave me real-world project experience, which helped me land my first developer job!"
                </p>
                <p className="text-blue-600 font-semibold mt-3">— Aryan Sharma, Full-Stack Developer</p>
              </div>
  
              <div className="bg-white shadow-lg p-6 rounded-xl">
                <p className="text-gray-600 italic">
                  "I loved the **React Native** course! The hands-on projects made learning **mobile app development** easy and fun."
                </p>
                <p className="text-blue-600 font-semibold mt-3">— Priya Mehta, Mobile Developer</p>
              </div>
            </div>
          </div>
  
          {/* Call to Action */}
          <div className="mt-16">
            <h2 className="text-3xl font-bold text-gray-900 mb-6">Start Learning Today!</h2>
            <p className="text-lg text-gray-700 max-w-3xl mx-auto">
              Join **SkillSite** and gain expertise in **cutting-edge technologies**. Choose from **AI, web development, full-stack, mobile apps, and more!** Start your journey towards a successful tech career today.
            </p>
            <div className="mt-6">
              <a
                href="/explore"
                className="inline-block bg-blue-600 text-white px-6 py-3 rounded-lg text-lg font-semibold hover:bg-blue-700 transition-all"
              >
                Explore Courses
              </a>
            </div>
          </div>
        </div>
      </section>
    );
  };
  
