import React from "react";
import { ImDeviantart } from "react-icons/im";
import HeaderSocials from "./HeaderSocials";

export default function Header() {
  return (
    <header className="flex flex-row pt-24 px-44 justify-around m-auto gap-12">
      <div className="flex flex-col justify-around flex-1">
        <div className="flex flex-col justify-evenly gap-12">
          <h1>Explore some awesome arts</h1>
          <h4>
          Lets look awesome art pieces from the history of humankind thanks to Metropolitan Museum of Art Collection API.
          </h4>
          <a href="#" className="btn-primary w-28 text-center">
            Join Now
          </a>
        </div>
        <HeaderSocials/>
      </div>
      <div className="flex flex-1">
        <img
          src="src/assets/images/wc.png"
          alt="header-img"
          height={600}
          className="scale-150 -z-10 rotate-180 absolute -sm:right-1"
        />
      </div>
    </header>
  );
}
