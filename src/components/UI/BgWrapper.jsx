import React from "react";

export default function BgWrapper(props) {
  return (
    <div className="absolute top-0 left-0 min-h-[100vh] w-full z-20 bg-gray-400">
      {/* <img
        src="src/assets/images/bg.jpg"
        alt="bg-img"
        className="-top-10 -left-10 fixed scale-125 w-full opacity-40  z-20"
      /> */}
      <div className="mb-20 relative md:w-[85%] w-[95%] mx-auto top-12 rounded-lg bg-gray-100/80 p-5 pb-20 shadow-md  z-20 overflow-hidden">
        {props.children}
      </div>
    </div>
  );
}
