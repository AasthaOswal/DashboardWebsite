const About = () => {
  return (
    <section className="w-full bg-white text-gray-800 py-16 px-4 sm:px-6 lg:px-8 shadow-inner">
      <div className="max-w-5xl mx-auto flex flex-col md:flex-row items-center justify-between">
        {/* Image */}
        <div className="md:w-1/2 flex justify-center md:justify-start mb-6 md:mb-0">
          <img
            src="/sample.jpg"
            alt="About us"
            className="w-full max-w-sm rounded shadow-md"
          />
        </div>

        {/* Text content */}
        <div className="md:w-1/2 md:pl-10 text-center md:text-left space-y-4">
          <h2 className="text-3xl font-bold">About MyApp</h2>
          <p className="text-gray-600">
            MyApp is a platform designed to simplify your workflow and help you manage your projects efficiently. 
            Explore dashboards, manage your account, and get real-time insights with ease.
          </p>
          <p className="text-gray-600">
            Our goal is to provide a seamless experience while keeping the interface clean and user-friendly.
          </p>
        </div>
      </div>
    </section>
  );
};

export default About;
