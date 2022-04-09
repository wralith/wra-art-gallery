import React, { useState } from "react";
import { ImDeviantart, ImTwitter } from "react-icons/im";
import { FiInstagram } from "react-icons/fi";
import OpenSeaSVG from "../UI/SVG/OpenSeaSVG";

export default function HeaderSocials() {
  return (
    <div>
      <h4 className="mt-36 mb-4 -md:mt-12">Follow me on</h4>
      <ul className="flex gap-6 -sm:flex-row -sm:gap-2">
        <li className=" gap-2 font-bold">
          <a className="flex flex-row items-center gap-2" href="#">
            <span className="-md:hidden">DeviantArt</span>
            <span className="text-xl bg-green-400 rounded-full p-2">
              {<ImDeviantart />}
            </span>
          </a>
        </li>
        <li className=" gap-2 font-bold">
          <a className="flex flex-row items-center gap-2 group" href="#">
            <span className="-md:hidden">Instagram</span>
            <span className="text-xl bg-gradient-to-tr from-orange-400 via-red-500 to-purple-600 text-white group-hover:text-black rounded-full p-2 transition-colors">
              {<FiInstagram />}
            </span>
          </a>
        </li>
        <li className=" gap-2 font-bold">
          <a className="flex flex-row items-center gap-2 group" href="#">
            <span className="-md:hidden">Twitter</span>
            <span className="text-xl bg-blue-600 text-white group-hover:text-black rounded-full p-2 transition-colors">
              {<ImTwitter />}
            </span>
          </a>
        </li>
        <li className=" gap-2 font-bold">
          <a className="flex flex-row items-center gap-2 group" href="#">
            <span className="-md:hidden">Opensea</span>
            <span className="text-xl bg-blue-600 text-white group-hover:text-black rounded-full p-1 transition-colors">
              {<OpenSeaSVG />}
            </span>
          </a>
        </li>
      </ul>
    </div>
  );
}
