export default function Home() {
  return (
    <div className="bg-gray-100 min-h-screen">
      {/* Header */}
      <header className="bg-white shadow-sm">
        <nav className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-4 flex justify-between items-center">
          <h1 className="text-2xl font-bold text-blue-600">
            STEM Tutor Network
          </h1>
          <div className="hidden md:flex space-x-4">
            <a href="/tutor" className="text-blue-500 hover:underline">
              Find Tutors
            </a>
            <a href="/login" className="text-gray-600 hover:underline">
              Login
            </a>
            <a href="/signup" className="text-gray-600 hover:underline">
              Sign Up
            </a>
          </div>
          {/* Mobile Menu */}
          <div className="md:hidden">
            <button className="text-gray-500">
              {/* Hamburger Icon */}
              <svg
                className="h-6 w-6"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  d="M4 6h16M4 12h16M4 18h16"
                ></path>
              </svg>
            </button>
          </div>
        </nav>
      </header>

      {/* Hero Section */}
      <main className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12 text-center">
        <section className="mb-12">
          <h2 className="text-4xl font-bold text-blue-600 mb-4">
            Learn from the Best STEM Tutors
          </h2>
          <p className="text-lg text-gray-600 mb-6">
            Book personalized sessions and excel in science, technology,
            engineering, and math.
          </p>
          <a
            href="/tutor"
            className="px-6 py-3 bg-blue-500 text-white rounded-md hover:bg-blue-600 transition"
          >
            Find a Tutor
          </a>
        </section>

        {/* Features Section */}
        <section className="py-12 bg-white rounded-lg shadow-md mb-12">
          <h3 className="text-3xl font-bold text-gray-800 mb-8">
            Why Choose Us?
          </h3>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
            <div className="text-center p-3">
              <h4 className="text-xl font-semibold text-blue-500">
                Expert Tutors
              </h4>
              <p className="text-gray-600">
                Learn from industry experts with verified credentials.
              </p>
            </div>
            <div className="text-center p-3">
              <h4 className="text-xl font-semibold text-blue-500">
                Personalized Learning
              </h4>
              <p className="text-gray-600">
                Sessions tailored to your unique learning style.
              </p>
            </div>
            <div className="text-center p-3">
              <h4 className="text-xl font-semibold text-blue-500">
                Affordable Prices
              </h4>
              <p className="text-gray-600">
                High-quality tutoring at rates you can afford.
              </p>
            </div>
          </div>
        </section>

        {/* Testimonials Section */}
        <section className="py-12">
          <h3 className="text-3xl font-bold text-gray-800 mb-8">
            What Our Users Say
          </h3>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
            <div className="p-4 bg-white rounded-lg shadow-md">
              <p className="text-gray-600">
                "I improved my physics grades drastically after just a few
                sessions!"
              </p>
              <p className="text-blue-500 font-semibold mt-4">
                - Sarah, Student
              </p>
            </div>
            <div className="p-4 bg-white rounded-lg shadow-md">
              <p className="text-gray-600">
                "The tutors are professional and very knowledgeable."
              </p>
              <p className="text-blue-500 font-semibold mt-4">
                - Michael, Parent
              </p>
            </div>
            <div className="p-4 bg-white rounded-lg shadow-md">
              <p className="text-gray-600">
                "I love how easy it is to find and book a tutor on this
                platform."
              </p>
              <p className="text-blue-500 font-semibold mt-4">
                - Emily, Student
              </p>
            </div>
          </div>
        </section>

        {/* Call-to-Action Section */}
        <section className="py-12 bg-blue-600 text-white rounded-lg shadow-md text-center">
          <h3 className="text-3xl font-bold mb-6">Ready to Get Started?</h3>
          <p className="text-lg mb-6">
            Join thousands of students and tutors on STEM Tutor Network today.
          </p>
          <a
            href="/signup"
            className="px-6 py-3 bg-white text-blue-600 rounded-md hover:bg-gray-100 transition"
          >
            Sign Up Now
          </a>
        </section>
      </main>

      {/* Footer */}
      <footer className="bg-gray-200 py-4 text-center">
        <p className="text-gray-600">
          © 2024 STEM Tutor Network. All rights reserved.
        </p>
      </footer>
    </div>
  );
}
