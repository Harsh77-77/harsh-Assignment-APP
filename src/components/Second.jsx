// import React, { useState } from 'react';

// const Second = () => {
//   const [isContactSaved, setIsContactSaved] = useState(false); // Toggle between contact and email fields
//   const [contactNumber, setContactNumber] = useState('');
//   const [email, setEmail] = useState('');

//   const handleSave = (e) => {
//     e.preventDefault();
//     setIsContactSaved(true); // Switch to email input and show Edit/Next buttons
//   };

//   const handleEdit = () => {
//     setIsContactSaved(false); // Switch back to contact number input
//   };

//   const handleNext = () => {
//     alert(`Next button clicked! Email: ${email}`);
//     navigate('/categories');
//     // Add functionality for "Next" action
//   };

//   return (
//     <div className="absolute top-0 left-0 w-full h-full flex items-center justify-center z-50">
//       <div className="p-8  rounded-lg w-full max-w-md">
//         <form className="space-y-6">
//           <div>
//             <label htmlFor="firstName" className="block text-sm font-medium text-gray-700">
//               First name
//             </label>
//             <input
//               type="text"
//               id="firstName"
//               name="firstName"
//               placeholder="Value"
//               className="mt-1 block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm placeholder-gray-400 focus:outline-none focus:ring-indigo-500 focus:border-indigo-500"
//             />
//           </div>
//           <div>
//             <label htmlFor="lastName" className="block text-sm font-medium text-gray-700">
//               Last name
//             </label>
//             <input
//               type="text"
//               id="lastName"
//               name="lastName"
//               placeholder="Value"
//               className="mt-1 block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm placeholder-gray-400 focus:outline-none focus:ring-indigo-500 focus:border-indigo-500"
//             />
//           </div>
//           <div>
//             {!isContactSaved ? (
//               <>
//                 <label htmlFor="contactNumber" className="block text-sm font-medium text-gray-700">
//                   Contact Number
//                 </label>
//                 <input
//                   type="tel"
//                   id="contactNumber"
//                   name="contactNumber"
//                   value={contactNumber}
//                   onChange={(e) => setContactNumber(e.target.value)}
//                   placeholder="Enter contact number"
//                   className="mt-1 block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm placeholder-gray-400 focus:outline-none focus:ring-indigo-500 focus:border-indigo-500"
//                 />
//                 <div>
//                   <button
//                     type="submit"
//                     onClick={handleSave}
//                     className="w-full mt-4 px-4 py-2 bg-[#E31A1A] text-white rounded-md hover:bg-red-700"
//                   >
//                     Save
//                   </button>
//                 </div>
//               </>
//             ) : (
//               <>
//                 <label htmlFor="email" className="block text-sm font-medium text-gray-700">
//                   Email
//                 </label>
//                 <input
//                   type="email"
//                   id="email"
//                   name="email"
//                   value={email}
//                   onChange={(e) => setEmail(e.target.value)}
//                   placeholder="Enter your email"
//                   className="mt-1 block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm placeholder-gray-400 focus:outline-none focus:ring-indigo-500 focus:border-indigo-500"
//                 />
//                 <div className="flex justify-between mt-4">
//                   <button
//                     type="button"
//                     onClick={handleEdit}
//                     className="w-[140px] h-[40px] bg-[#3360C3] text-white rounded-md hover:bg-[#2a50a1]"
//                   >
//                     Edit
//                   </button>
//                   <button
//                     type="button"
//                     onClick={handleNext}
//                     className="w-[140px] h-[40px] bg-[#E31A1A] text-white rounded-md hover:bg-red-700"
//                   >
//                     Next
//                   </button>
//                 </div>
//               </>
//             )}
//           </div>
//         </form>
//       </div>
//     </div>
//   );
// };

// export default Second;









import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom'; // Import useNavigate

const Second = () => {
  const [isContactSaved, setIsContactSaved] = useState(false); // Toggle between contact and email fields
  const [contactNumber, setContactNumber] = useState('');
  const [email, setEmail] = useState('');
  const navigate = useNavigate(); // Initialize navigate

  const handleSave = (e) => {
    e.preventDefault();
    setIsContactSaved(true); // Switch to email input and show Edit/Next buttons
  };

  const handleEdit = () => {
    setIsContactSaved(false); // Switch back to contact number input
  };

  const handleNext = () => {
    // Add functionality for "Next" action
    alert(`Next button clicked! Email: ${email}`);
    navigate('/categories'); // Use navigate to go to the Categories page
  };

  return (
    <div className="absolute top-0 left-0 w-full h-full flex items-center justify-center z-50">
      <div className="p-8 rounded-lg w-full max-w-md">
        <form className="space-y-6">
          <div>
            <label htmlFor="firstName" className="block text-sm font-medium text-gray-700">
              First name
            </label>
            <input
              type="text"
              id="firstName"
              name="firstName"
              placeholder="Value"
              className="mt-1 block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm placeholder-gray-400 focus:outline-none focus:ring-indigo-500 focus:border-indigo-500"
            />
          </div>
          <div>
            <label htmlFor="lastName" className="block text-sm font-medium text-gray-700">
              Last name
            </label>
            <input
              type="text"
              id="lastName"
              name="lastName"
              placeholder="Value"
              className="mt-1 block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm placeholder-gray-400 focus:outline-none focus:ring-indigo-500 focus:border-indigo-500"
            />
          </div>
          <div>
            {!isContactSaved ? (
              <>
                <label htmlFor="contactNumber" className="block text-sm font-medium text-gray-700">
                  Contact Number
                </label>
                <input
                  type="tel"
                  id="contactNumber"
                  name="contactNumber"
                  value={contactNumber}
                  onChange={(e) => setContactNumber(e.target.value)}
                  placeholder="Enter contact number"
                  className="mt-1 block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm placeholder-gray-400 focus:outline-none focus:ring-indigo-500 focus:border-indigo-500"
                />
                <div>
                  <button
                    type="submit"
                    onClick={handleSave}
                    className="w-full mt-4 px-4 py-2 bg-[#E31A1A] text-white rounded-md hover:bg-red-700"
                  >
                    Save
                  </button>
                </div>
              </>
            ) : (
              <>
                <label htmlFor="email" className="block text-sm font-medium text-gray-700">
                  Email
                </label>
                <input
                  type="email"
                  id="email"
                  name="email"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  placeholder="Enter your email"
                  className="mt-1 block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm placeholder-gray-400 focus:outline-none focus:ring-indigo-500 focus:border-indigo-500"
                />
                <div className="flex justify-between mt-4">
                  <button
                    type="button"
                    onClick={handleEdit}
                    className="w-[140px] h-[40px] bg-[#3360C3] text-white rounded-md hover:bg-[#2a50a1]"
                  >
                    Edit
                  </button>
                  <button
                    type="button"
                    onClick={handleNext} // Navigate to Categories on click
                    className="w-[140px] h-[40px] bg-[#E31A1A] text-white rounded-md hover:bg-red-700"
                  >
                    Next
                  </button>
                </div>
              </>
            )}
          </div>
        </form>
      </div>
    </div>
  );
};

export default Second;
