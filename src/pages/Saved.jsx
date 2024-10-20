import React, { useState } from "react";
import { useLocation, useNavigate } from "react-router-dom";
import img1 from "../assets/image 1.png"; // Ensure the image path is correct
import { FaArrowLeft } from "react-icons/fa6"; // Importing the back arrow icon
import s2 from "../assets/s2.png";
import loginimg from "../assets/Log in.png";
import { CiCircleRemove } from "react-icons/ci";

export default function Saved() {
  const location = useLocation();
  const navigate = useNavigate(); // Hook to navigate between pages
  const { selectedServices } = location.state || { selectedServices: [] };

  // Mock service data for display. You can replace this with your actual data source.
  const services = [
    {
      id: 1,
      title: "Online maha ghrah pravesh pooja",
      description: "(ऑनलाइन महा गृह प्रवेश पूजा)",
      hours: "Add hours",
      amount: "Add amount",
    },
    {
      id: 2,
      title: "Punyaha Vachanam and Nama Karanam Pooja",
      description: "पुण्य: वाचनं एवं नाम करणं पूजा",
      hours: "2 Hours",
      amount: "INR 15,000/-",
    },
    {
      id: 3,
      title: "Baglamukhi pooja havan",
      description: "बगलामुखी पूजा हवन",
      hours: "2 Hours",
      amount: "INR 15,000/-",
    },
    {
      id: 4,
      title: "Baglamukhi pooja havan",
      description: "बगलामुखी पूजा हवन",
      hours: "2 Hours",
      amount: "INR 15,000/-",
    },
  ];

  const [savedServices, setSavedServices] = useState(selectedServices);

  // Function to toggle service selection
  const toggleService = (id) => {
    setSavedServices((prev) => {
      if (prev.includes(id)) {
        return prev.filter((serviceId) => serviceId !== id);
      } else {
        return [...prev, id];
      }
    });
  };

  const selectedServicesData = services.filter((service) =>
    savedServices.includes(service.id)
  );

  return (
    <div className="relative min-h-screen p-4 pb-20">
      {/* Back Button */}
      <button
        onClick={() => navigate("/services")}
        className="absolute top-14 left-4"
      >
        <FaArrowLeft />
      </button>

      <div className="mt-8 flex font-serif items-center justify-center flex-col font-bold space-y-2">
        <h1 className="text-2xl">Services</h1>
        <p className="text-[8px] text-center">Saved services</p>
      </div>

      <div className="absolute right-5 top-4">
        <img src={loginimg} alt="Login" className="w-[22px] h-[22px]" />
      </div>

      {/* Count of Saved Services */}
      <div className="absolute mt-6 text-nowrap flex items-center">
        <span className="text-[12px] font-bold">{savedServices.length} services saved</span>
        <div className="flex items-center ml-[200px] cursor-pointer" onClick={() => setSavedServices([])}>
          <CiCircleRemove style={{ color: "red", width: 16, height: 16 }} />
          <span className="text-[9px] ml-1">Remove</span>
        </div>
      </div>

      {/* Service Cards */}
      <div className="mt-16 space-y-4 mb-20">
        {selectedServicesData.length > 0 ? (
          selectedServicesData.map((service) => (
            <div
              key={service.id}
              className={`bg-white rounded-lg overflow-hidden shadow-md p-7 relative transition-all duration-300 ease-in-out border border-gray-200 cursor-pointer ${
                savedServices.includes(service.id) ? "border-red-500" : ""
              }`}
              onClick={() => toggleService(service.id)} // Toggle selection on click
            >
              <div className="flex">
                <img
                  src={img1}
                  alt={service.title}
                  className="w-[119px] h-[119px] object-cover rounded-md"
                />
                <div className="ml-4 flex-1 relative">
                  <h2 className="text-[10px] font-bold text-center">
                    {service.title}
                  </h2>
                  <p className="text-[9px] text-center mt-1 text-gray-600">
                    {service.description}
                  </p>
                  <div className="mt-7 flex flex-col space-y-3 items-center">
                    <span className="text-[8px] text-gray-500 border border-gray-300 rounded-sm px-[29px] py-[1px]">
                      {service.hours}
                    </span>
                    <span className="text-[8px] text-gray-500 border border-gray-300 rounded-sm px-[25px] py-[1px]">
                      {service.amount}
                    </span>
                  </div>
                </div>
              </div>
            </div>
          ))
        ) : (
          <p>No services selected.</p>
        )}
      </div>

      <div className="fixed bottom-1 left-4 right-4 flex justify-center items-center">
        <div
          className="relative bottom-20 bg-red-500 rounded-full px-4 py-1 w-full max-w-xs flex justify-center items-center"
          style={{ backgroundColor: "#ff0000" }} // Ensure the button background is not transparent
        >
          <button 
            className="text-white font-bold w-full py-1 rounded-full"
            onClick={() => navigate("/logout")} // Navigate to Logout page
          >
            Add to my services
          </button>
        </div>
      </div>

      <div className="fixed right-0 bottom-0 pointer-events-none">
        <img src={s2} alt="Background" className="object-cover" />
      </div>
    </div>
  );
}
