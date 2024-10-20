import React from "react";
import First from "../components/First";
import logo from "../assets/logo.svg";
import up from "../assets/loginbgup.png";
import down from "../assets/loginbgdown.png";
import panditji from "../assets/panditji.png";
import leftimg from "../assets/lg_1.png";

const Screen1 = () => {
  let login = ["Log in"];
  return (
    <div>
      <div className="absolute top-0 left-0 ">
        <img src={up} alt="img" />
      </div>

      <div className="flex items-center justify-center h-[200px] ">
        <div className="flex flex-col items-center justify-center">
          <div className="flex justify-center items-center">
            <img
              src={logo}
              alt="logo"
              className="mx-auto h-20 z-10 opacity-100"
            />
          </div>
        </div>
      </div>
      <div>
        <h1 className="text-[40px] text-center font-serif font-semibold -mt-[35px]">
          {login}
        </h1>
      </div>
      <br />
      <First />

      <div className="font-bold fixed bottom-[180px] right-[150px] text-[20px] text-center z-[1]">
        <h1 className=" text-nowrap items-end">
          पूजा पाठ हो या अनुष्ठान,
          <br />
          <span className="text-red-500">पंडित</span> मिलना हुआ आसान।
        </h1>
      </div>

      <div className=" ">
        <div className="right-0 bottom-0 fixed z-[1]">
          <img
            src={panditji}
            alt="New Image"
            className="h-auto w-auto "
          />
        </div>
        <div className="right-0 bottom-0 absolute">
          <img src={down} alt="Down Image" />
        </div>
      </div>
    </div>
  );
};

export default Screen1;