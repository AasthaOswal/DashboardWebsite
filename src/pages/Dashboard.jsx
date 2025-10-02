
// const Dashboard = ()=> {
//     return <div id="dashboard" className="min-h-screen">
//         Dashboard page
//     </div>
// };

// export default Dashboard;


import { Link, Outlet } from "react-router-dom";
import { useState } from "react";
import { RxDashboard, RxPerson, RxHamburgerMenu, RxCross1 } from "react-icons/rx";

const DashboardLayout = () => {
  const [mobileOpen, setMobileOpen] = useState(false);

  return (
    <div className="flex min-h-screen bg-gray-50">
      {/* Sidebar */}
      <aside className="hidden md:flex flex-col w-64 bg-white shadow-md h-screen p-6 fixed">
        {/* <h2 className="text-2xl font-bold mb-8">MyApp</h2> */}
        <nav className="flex flex-col space-y-2">
          <Link
            to="/dashboard"
            className="flex items-center px-3 py-2 rounded hover:bg-blue-100 transition-colors"
          >
            <RxDashboard className="mr-2 text-lg" />
            Dashboard Home
          </Link>
          <Link
            to="/dashboard/profile"
            className="flex items-center px-3 py-2 rounded hover:bg-blue-100 transition-colors"
          >
            <RxPerson className="mr-2 text-lg" />
            Profile
          </Link>
        </nav>
      </aside>

      {/* Mobile Sidebar Overlay */}
      {mobileOpen && (
        <div className="fixed inset-0 z-50 flex">
          <aside className="flex flex-col w-64 bg-white shadow-md h-full p-6">
            <div className="flex justify-between items-center mb-8">
              <h2 className="text-2xl font-bold">MyApp</h2>
              <button onClick={() => setMobileOpen(false)}>
                <RxCross1 className="text-2xl" />
              </button>
            </div>
            <nav className="flex flex-col space-y-2">
              <Link
                to="/dashboard"
                className="flex items-center px-3 py-2 rounded hover:bg-blue-100 transition-colors"
                onClick={() => setMobileOpen(false)}
              >
                <RxDashboard className="mr-2 text-lg" />
                Dashboard Home
              </Link>
              <Link
                to="/dashboard/profile"
                className="flex items-center px-3 py-2 rounded hover:bg-blue-100 transition-colors"
                onClick={() => setMobileOpen(false)}
              >
                <RxPerson className="mr-2 text-lg" />
                Profile
              </Link>
            </nav>
          </aside>
          {/* Background overlay */}
          <div
            className="flex-1 bg-black opacity-25"
            onClick={() => setMobileOpen(false)}
          ></div>
        </div>
      )}

      {/* Main content */}
      <div className="flex-1 md:ml-64 p-6">
        {/* Mobile menu button */}
        <button
          className="md:hidden mb-4 px-3 py-2 bg-blue-100 rounded text-blue-700 flex items-center"
          onClick={() => setMobileOpen(true)}
        >
          <RxHamburgerMenu className="mr-2 text-xl" /> Menu
        </button>

        <Outlet />
      </div>
    </div>
  );
};

export default DashboardLayout;
