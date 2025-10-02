

const Hero = () => {
  return (
    <section className="w-full bg-white text-gray-800 py-16 px-4 sm:px-6 lg:px-8 shadow-inner">
      <div className="w-full mx-auto flex flex-col-reverse md:flex-row items-center justify-between">
        {/* Text content */}
        <div className="md:w-1/2 text-center md:text-left space-y-4">
          <h1 className="text-4xl font-bold">Welcome to MyApp</h1>
          <p className="text-gray-600">
            Build amazing projects, explore dashboards, and manage your account easily.
          </p>
          <a
            href="/dashboard"
            className="inline-block px-6 py-3 bg-black text-white rounded-xl  transition-colors duration-200"
          >
            Get Started
          </a>
        </div>

        {/* Image */}
        <div className="md:w-1/2 mt-6 md:mt-0 flex justify-center md:justify-end">
          <img
            src="/sample.jpg"
            alt="Hero"
            className="w-full  rounded shadow-md"
          />
        </div>
      </div>
    </section>
  );
};

export default Hero;
