import React, { useState } from "react";
import { FaArrowLeft } from "react-icons/fa6";
import { FiEdit3 } from "react-icons/fi";
import { IoSearchCircleSharp } from "react-icons/io5";
import { CiFilter } from "react-icons/ci";
import s2 from "../assets/s2.png";
import loginimg from "../assets/Log in.png";
import img1 from "../assets/image 1.png";
import { useNavigate } from "react-router-dom";

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

export default function Services() {
  const [selectedServices, setSelectedServices] = useState([]);
  const [searchQuery, setSearchQuery] = useState("");
  const navigate = useNavigate();

  const toggleService = (id) => {
    setSelectedServices((prev) =>
      prev.includes(id)
        ? prev.filter((serviceId) => serviceId !== id)
        : [...prev, id]
    );
  };

  // const handleNext = () => {
  //   console.log('Selected services:', selectedServices);
  //   navigate('/Saved');
  //   // Handle navigation or form submission logic
  // };

  const filteredServices = services.filter((service) =>
    service.title.toLowerCase().includes(searchQuery.toLowerCase())
  );

  const handleNext = () => {
    console.log("Selected services:", selectedServices);
    navigate("/saved", { state: { selectedServices } }); // Pass the selected services to Saved
  };

  return (
    <div className="relative min-h-screen p-4 pb-20">
      <button className="top-14 absolute">
        <FaArrowLeft />
      </button>
      <div className="absolute right-5 top-4">
        <img src={loginimg} alt="Login" className="w-[22px] h-[22px]" />
      </div>

      {/* Title Section */}
      <div className="mt-8 flex items-center font-serif justify-center flex-col font-bold space-y-2">
        <h1 className="text-2xl">Services</h1>
        <p className="text-[8px] text-center">Category: All</p>
      </div>

      {/* Search Bar */}
      <div className="mt-6 flex justify-center items-center relative max-w-md mx-auto">
        <IoSearchCircleSharp className="absolute left-3 top-2 text-red-500 text-xl" />
        <input
          type="text"
          placeholder="Search service"
          className="w-full text-sm border border-gray-300 rounded-full pl-10 py-2 text-gray-600"
          value={searchQuery}
          onChange={(e) => setSearchQuery(e.target.value)}
        />
        <div className="ml-2 text-xs whitespace-nowrap flex items-center">
          Add filter <CiFilter className="ml-1" />
        </div>
      </div>

      {/* Service Cards */}
      <div className="mt-8 space-y-4 mb-20">
        {filteredServices.map((service) => (
          <div
            key={service.id}
            className={`bg-white rounded-lg overflow-hidden shadow-md p-7 relative transition-all duration-300 ease-in-out 
              ${
                selectedServices.includes(service.id)
                  ? "border-2 border-red-500"
                  : "border border-gray-200"
              }`}
            onClick={() => toggleService(service.id)}
            style={{ backgroundColor: "#ffffff" }} // Ensure background color is white
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
                {/* Edit Icon */}
                <FiEdit3 className="absolute -top-[20px] -right-[20px] text-red-500 text-sm cursor-pointer" />
              </div>
            </div>
          </div>
        ))}
      </div>

      {/* Add to My Services Button */}

      <div className="fixed bottom-1 left-4 right-4 flex justify-center items-center">
        <div
          className="relative bottom-20 bg-red-500 rounded-full px-4 py-1 w-full max-w-xs flex justify-center items-center"
          style={{ backgroundColor: "#ff0000" }} // Ensure the button background is not transparent
        >
          {selectedServices.length > 0 && (
            <div className="absolute z-10 top-[-45px] right-4 bg-gray-800 text-white px-4 py-2 rounded-l-full rounded-tr-full w-[146px] h-[40px] font-bold text-nowrap">
              {selectedServices.length} Services saved
            </div>
          )}
          <button
            onClick={handleNext}
            className="text-white font-bold w-full py-1 rounded-full"
          >
            Add to my services
          </button>
        </div>
      </div>

      {/* Background Image */}
      <div className="fixed right-0 bottom-0 pointer-events-none ">
        <img src={s2} alt="Background" className=" object-cover " />
      </div>
    </div>
  );
}
