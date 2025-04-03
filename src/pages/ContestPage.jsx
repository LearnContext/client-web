export const ContestPage = () => {
    return (
        <main className="flex-grow container mx-auto p-6 ~px-6/96">
          <section className="bg-white rounded-lg shadow-lg p-6 text-center">
            <h2 className="text-2xl font-semibold text-gray-800 mb-4">
              Join the Ultimate Learning Challenge!
            </h2>
            <p className="text-gray-600 mb-6">
              Compete with learners worldwide, enhance your skills, and win exciting rewards. Learn from experts, solve challenges, and level up your knowledge in an interactive and engaging environment.
            </p>
            <button className="bg-blue-600 text-white px-6 py-3 rounded-full font-semibold hover:bg-blue-700">
              Wait For Registration 
            </button>
          </section>
  
          <section className="mt-10 grid grid-cols-1 md:grid-cols-3 gap-6">
            <div className="bg-white rounded-lg shadow-lg p-4 text-center">
              <h3 className="text-xl font-bold text-gray-700 mb-2">Step 1</h3>
              <p className="text-gray-600">
                Sign up and select your preferred learning topics.
              </p>
            </div>
            <div className="bg-white rounded-lg shadow-lg p-4 text-center">
              <h3 className="text-xl font-bold text-gray-700 mb-2">Step 2</h3>
              <p className="text-gray-600">
                Participate in live challenges and quizzes.
              </p>
            </div>
            <div className="bg-white rounded-lg shadow-lg p-4 text-center">
              <h3 className="text-xl font-bold text-gray-700 mb-2">Step 3</h3>
              <p className="text-gray-600">
                Win prizes and gain recognition for your skills.
              </p>
            </div>
          </section>
        </main>
  
    )
}