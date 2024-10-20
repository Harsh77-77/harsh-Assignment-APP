import React from "react";
import Second from "../components/Second";
import circleimg from "../assets/circle.png";
import s2 from "../assets/s2.png";
const Screen2 = () => {
  return (
    <div>
      <div className="flex items-center justify-center mt-16">
        <div>
          <h1 className="text-[20px] font-semibold font-serif mb-14">
            Your Profile
          </h1>
          <div className="w-[111px] h-[111px] rounded-full overflow-hidden flex items-center justify-center mt-2">
            <img
              src={circleimg}
              alt="Inside Circle"
              className="w-full h-full object-cover"
            />
          </div>
        </div>
      </div>
      <div className="">
        <Second/>
      </div>
      
      <div className="absolute right-0 bottom-0">
        <img src={s2} alt="" className=" w-[621px] h-[869px] " />
      </div>
    </div>
  );
};

export default Screen2;
