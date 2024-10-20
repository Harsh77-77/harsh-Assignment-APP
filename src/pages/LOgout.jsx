// import React from 'react'
// import s2 from "../assets/s2.png";


// const LOgout = () => {
//   return (
//     <div>

//         <div className='absolute z-10 flex flex-col items-center justify-center space-y-5'>
//             <h1 className='text-[#313642] text-[20px] font-semi bold text-nowrap '>Are you sure you want to log out?</h1>
//             <div className='text-white space-x-10'>
//                 <button className='w-[122px] h-[40px] bg-[#E31A1A]  rounded-lg ' >Yes</button>
//                 <button className='w-[122px] h-[40px] bg-[#313642]  rounded-lg ' >Cancel</button>
//             </div>
//         </div>
        
//         <div className="fixed right-0 bottom-0 pointer-events-none">
//         <img src={s2} alt="Background" className="object-cover" />
//       </div>
//     </div>
//   )
// }

// export default LOgout






import React from 'react';
import s2 from "../assets/s2.png";
import { useLocation, useNavigate } from "react-router-dom";

const Logout = () => {
    const navigate = useNavigate();
  return (
    <div className="relative min-h-screen flex items-center justify-center bg-white">
      <div className='absolute z-10 flex flex-col items-center justify-center space-y-5'>
        <h1 className='text-[#313642] text-[20px] font-semibold text-center'>Are you sure you want to log out?</h1>
        <div className='text-white space-x-10'>
          <button   className='w-[122px] h-[40px] bg-[#E31A1A] rounded-lg'>Yes</button>
          <button  onClick={() => navigate("/saved")} className='w-[122px] h-[40px] bg-[#313642] rounded-lg'>Cancel</button>
        </div>
      </div>

      <div className="fixed right-0 bottom-0 pointer-events-none">
        <img src={s2} alt="Background" className="object-cover" />
      </div>
    </div>
  );
}

export default Logout;
// onClick={() => navigate("/screen2")}