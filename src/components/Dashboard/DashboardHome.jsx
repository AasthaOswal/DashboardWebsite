const DashboardHome = () => {
  const cards = [
    { title: "Project A", description: "Manage tasks and view progress.", image: "/sample2.jpg" },
    { title: "Project B", description: "Team collaboration made easy.", image: "/sample2.jpg" },
    { title: "Analytics", description: "Track your metrics in real-time.", image: "/sample2.jpg" },
    { title: "Reports", description: "Generate detailed reports easily.", image: "/sample2.jpg" },
    { title: "Profile", description: "Update your account information.", image: "/sample2.jpg" },
    { title: "Settings", description: "Configure your preferences.", image: "/sample2.jpg" },
    { title: "Support", description: "Get help and support quickly.", image: "/sample2.jpg" },
    { title: "Notifications", description: "Stay updated with alerts.", image: "/sample2.jpg" },
  ];

  return (
    <div className="DashboardHome w-full min-h-screen bg-gray-50 p-6">
      <h1 className="text-3xl font-bold mb-6">Dashboard Home</h1>

      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
        {cards.map((card, index) => (
          <div
            key={index}
            className="bg-white rounded-xl shadow-md overflow-hidden hover:shadow-lg transition-shadow duration-200"
          >
            <img src={card.image} alt={card.title} className="w-full h-40 object-cover" />
            <div className="p-4">
              <h2 className="text-xl font-semibold mb-2">{card.title}</h2>
              <p className="text-gray-600 text-sm">{card.description}</p>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default DashboardHome;
