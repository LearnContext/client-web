import { motion } from "framer-motion";

export const ContestPage = () => {
  return (
    <main className="flex-grow container mx-auto px-6 py-10">
      {/* Hero Section */}
      <motion.section
        className="bg-gradient-to-r from-blue-500 to-blue-700 text-white rounded-lg shadow-lg p-8 text-center"
        initial={{ opacity: 0, y: -50 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8 }}
      >
        <h2 className="text-4xl font-bold mb-4">
          Join the Ultimate Learning Challenge! 🚀
        </h2>
        <p className="text-lg mb-6">
          Test your skills, compete with learners worldwide, and win amazing rewards.  
          Solve challenges, learn from experts, and level up your knowledge.
        </p>
        <motion.button
          className="bg-white text-blue-700 px-6 py-3 rounded-full font-semibold hover:bg-gray-100 transition"
          whileHover={{ scale: 1.05 }}
        >
          Wait for Registration
        </motion.button>
      </motion.section>

      {/* How It Works Section */}
      <motion.section
        className="mt-10"
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        transition={{ duration: 0.8 }}
      >
        <h3 className="text-2xl font-bold text-gray-800 text-center mb-6">
          How It Works
        </h3>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {["Step 1", "Step 2", "Step 3"].map((step, index) => (
            <motion.div
              key={index}
              className="bg-white rounded-lg shadow-md p-6 text-center hover:shadow-lg transition"
              whileHover={{ scale: 1.05 }}
            >
              <h3 className="text-xl font-bold text-blue-600 mb-2">{step}</h3>
              <p className="text-gray-700">
                {index === 0 && "Sign up, create your profile, and select your favorite topics."}
                {index === 1 && "Participate in live challenges, quizzes, and coding contests."}
                {index === 2 && "Score points, climb the leaderboard, and win amazing prizes! 🎉"}
              </p>
            </motion.div>
          ))}
        </div>
      </motion.section>

      {/* Who Can Join Section */}
      <motion.section
        className="mt-12 bg-gray-100 p-8 rounded-lg shadow-md text-center"
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        transition={{ duration: 0.8 }}
      >
        <h3 className="text-2xl font-bold text-gray-800 mb-4">Who Can Join? 🤔</h3>
        <p className="text-lg text-gray-700 mb-6">
          Our contests are open to learners of all levels. Whether you're a beginner, intermediate, or an expert, there’s something for you!
        </p>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {[
            { title: "🆕 Beginners", desc: "Start with easy challenges and build your confidence." },
            { title: "📈 Intermediate", desc: "Test your skills with real-world problems." },
            { title: "🏆 Experts", desc: "Compete with the best and win top rewards!" },
          ].map((level, index) => (
            <motion.div
              key={index}
              className="bg-white rounded-lg shadow-lg p-6 hover:shadow-xl transition"
              whileHover={{ scale: 1.05 }}
            >
              <h4 className="text-xl font-semibold text-blue-600 mb-2">{level.title}</h4>
              <p className="text-gray-700">{level.desc}</p>
            </motion.div>
          ))}
        </div>
      </motion.section>

      {/* Past Winners */}
      <motion.section
        className="mt-12"
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        transition={{ duration: 0.8 }}
      >
        <h3 className="text-2xl font-bold text-gray-800 text-center mb-6">🏅 Past Winners & Achievements</h3>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {[
            {
              name: "🥇 John Doe",
              desc: 'Won the "Ultimate Full Stack Developer Challenge" with 98% score.',
            },
            {
              name: "🥈 Emily Watson",
              desc: 'Top scorer in "AI/ML Hackathon" with advanced deep learning models.',
            },
            {
              name: "🥉 Alex Smith",
              desc: 'Secured 3rd place in "React Native App Development" contest.',
            },
          ].map((winner, index) => (
            <motion.div
              key={index}
              className="bg-white rounded-lg shadow-lg p-6 text-center hover:shadow-xl transition"
              whileHover={{ scale: 1.05 }}
            >
              <h4 className="text-xl font-semibold text-blue-600 mb-2">{winner.name}</h4>
              <p className="text-gray-700">{winner.desc}</p>
            </motion.div>
          ))}
        </div>
      </motion.section>

      {/* Upcoming Challenges */}
      <motion.section
        className="mt-12 bg-gray-100 p-8 rounded-lg shadow-md text-center"
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        transition={{ duration: 0.8 }}
      >
        <h3 className="text-2xl font-bold text-gray-800 mb-4">🚀 Upcoming Challenges</h3>
        <p className="text-lg text-gray-700 mb-6">
          Prepare for the next big competition! Here are some upcoming contests:
        </p>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {[
            { title: "💻 Frontend Mastery Challenge", desc: "Starts: April 15, 2025 | Prize: $500" },
            { title: "⚙️ AI/ML Innovation Contest", desc: "Starts: May 1, 2025 | Prize: AI Internship" },
            { title: "📱 React Native App Sprint", desc: "Starts: June 10, 2025 | Prize: Developer Kit" },
          ].map((contest, index) => (
            <motion.div
              key={index}
              className="bg-white rounded-lg shadow-lg p-6 text-center hover:shadow-xl transition"
              whileHover={{ scale: 1.05 }}
            >
              <h4 className="text-xl font-semibold text-blue-600 mb-2">{contest.title}</h4>
              <p className="text-gray-700">{contest.desc}</p>
            </motion.div>
          ))}
        </div>
        <motion.button
          className="mt-6 bg-blue-600 text-white px-6 py-3 rounded-full font-semibold hover:bg-blue-700 transition"
          whileHover={{ scale: 1.05 }}
        >
          View All Contests 🚀
        </motion.button>
      </motion.section>
    </main>
  );
};
