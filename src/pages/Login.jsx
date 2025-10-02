
import { useNavigate } from "react-router-dom";

const Login = () => {

    const navigate=useNavigate();


    const handleSubmit = (e)=>{
        e.preventDefault();

        navigate("/dashboard");
    };


  return (
    <div className="min-h-screen flex flex-col md:flex-row bg-gray-50">
      {/* Left side - Background image with overlay */}
      <div
        className="md:w-1/2 h-64 md:h-auto relative bg-cover bg-center"
        style={{ backgroundImage: `url('/sample.jpg')` }}
      >
        {/* Overlay */}
        <div className="absolute inset-0 bg-black bg-opacity-40 flex flex-col justify-center items-center text-center px-4">
          <h1 className="text-3xl md:text-4xl font-bold text-white mb-2">
            Welcome to MyApp
          </h1>
          <p className="text-gray-200 text-sm md:text-lg">
            Manage your projects, dashboards, and everything in one place.
          </p>
        </div>
      </div>

      {/* Right side - Login form */}
      <div className="md:w-1/2 flex items-center justify-center p-8">
        <div className="bg-white shadow-md rounded-xl w-full max-w-md p-8">
          <h2 className="text-3xl font-bold text-center mb-6">Login to Your Account</h2>

          <form className="space-y-4">
            {/* Email */}
            <div>
              <label className="block text-gray-700 font-medium mb-1" htmlFor="email">
                Email
              </label>
              <input
                type="email"
                id="email"
                placeholder="you@example.com"
                className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-400 focus:border-blue-400"
              />
            </div>

            {/* Password */}
            <div>
              <label className="block text-gray-700 font-medium mb-1" htmlFor="password">
                Password
              </label>
              <input
                type="password"
                id="password"
                placeholder="Enter your password"
                className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-400 focus:border-blue-400"
              />
            </div>

            {/* Submit Button */}
            <button
              type="submit"
              className="w-full bg-black text-white py-2 rounded-xl hover:bg-gray-800 transition-colors duration-200"
              onClick={handleSubmit}
            >
              Login
            </button>
          </form>

          {/* Extra Links */}
          <div className="mt-4 text-center text-gray-600 text-sm">
            Don't have an account?{" "}
            <a href="/signup" className="text-blue-500 hover:underline">
              Sign up
            </a>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Login;
