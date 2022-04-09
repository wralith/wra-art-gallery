import React from "react";

export default function BgWrapper(props) {
  return (
    <div className="fixed top-0 left-0 h-[100vh] w-full">
    <img src="src/assets/images/bg.jpg" alt="bg-img" className='-top-10 -left-10 fixed scale-110 w-full opacity-40' />
      <div className="relative w-[90%] m-auto top-12 rounded-lg bg-gray-100 p-5 shadow-md">{props.children}</div>
    </div>
  );
}
