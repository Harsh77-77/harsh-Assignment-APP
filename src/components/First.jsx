import React, { useState } from 'react';
import axios from 'axios';
import { useNavigate } from 'react-router-dom'; // Import useNavigate


const First = () => {
  const [contactNumber, setContactNumber] = useState(''); // State for contact number input
  const [otp, setOtp] = useState(''); // State for OTP input
  const [message, setMessage] = useState(''); // State for feedback messages
  const [step, setStep] = useState('enterDetails'); // State to manage form step
  const navigate = useNavigate(); // Initialize navigate function

  // Function to handle sending the OTP
  const handleSendOtp = async () => {
    try {
      const response = await axios.post(
        'https://test.backend.urbanoinfotech.com/api/v1/send-otp',
        {
          contact_number: contactNumber,
        },
        {
          headers: {
            accept: 'application/json',
            'Content-Type': 'application/json',
            'X-CSRFToken': '4wGs6XwfGRU2KHQ6V9qswzP9OhnQ0fDSkbRN1nSj62IVLSnHG1QyR7odKOkHbwz6',
          },
        }
      );

      setMessage('OTP sent successfully!'); // Set success message
      setContactNumber(''); // Clear the contact number input
      setStep('enterOtp'); // Switch to OTP input mode
    } catch (error) {
      console.error(error);
      if (error.response) {
        setMessage(`Error: ${error.response.data.message}`); // Set error message from response
      } else {
        setMessage('An error occurred while sending the OTP.'); // Generic error message
      }
    }
  };

  // Function to handle OTP submission
  const handleSubmit = async () => {
    try {
      const response = await axios.post(
        'https://test.backend.urbanoinfotech.com/api/v1/pandit-login',
        {
          contact_number: contactNumber, // Use the cleared contact number
          otp: otp,
        },
        {
          headers: {
            accept: 'application/json',
            'Content-Type': 'application/json',
            'X-CSRFToken': '0hOvQy9qgbqOt0Rba0soKhnSjtyjs0KZgWZQLYvuGmeHuboMVSSu5PWWf0vaDhGd',
          },
        }
      );

      if (response.data.success) {
        console.log('OTP verified successfully');
        // Handle successful verification (e.g., redirect to another page)
      } else {
        console.error('OTP verification failed:', response.data.message);
      }
    } catch (error) {
      console.error('Error verifying OTP:', error);
    }

    navigate('/screen2');

    



  };

  return (
    <div className="flex items-center justify-center relative z-10">
      <div className=''>
        <div className="mb-10">
          <label htmlFor="email-mobile" className="block text-gray-700 text-sm font-semibold mb-2">
            {step === 'enterDetails' ? 'Email/Mobile no.' : 'Enter OTP'}
          </label>
          <input
            id="email-mobile"
            type="text"
            placeholder={step === 'enterDetails' ? 'Value' : 'Enter OTP'}
            value={step === 'enterDetails' ? contactNumber : otp}
            onChange={(e) => (step === 'enterDetails' ? setContactNumber(e.target.value) : setOtp(e.target.value))}
            className="appearance-none relative z-10  border-gray-500 rounded-xl min-w-[272px] h-[40px] px-3 text-gray-700"
          />
        </div>
        <div className="mb-4">
          <button
            className="bg-red-500 hover:bg-red-700 text-white font-bold h-[40px] w-[272px] rounded-xl focus:outline-none focus:shadow-outline"
            type="button"
            onClick={step === 'enterDetails' ? handleSendOtp : handleSubmit}
          >
            {step === 'enterDetails' ? 'Send OTP' : 'Submit'}
          </button>
        </div>
        {message && <div className="text-center text-red-500">{message}</div>} {/* Show message */}
        <div className="text-center">
          <a
            href="#"
            className="text-gray-500 text-sm"
            onClick={() => navigate('/screen2')} // Navigate to Screen2 on click
          >
            Don't have an account?
          </a>
        </div>
      </div>
    </div>
  );
};

export default First;