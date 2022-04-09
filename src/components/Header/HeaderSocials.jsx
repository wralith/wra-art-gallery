import React from "react";
import { ImDeviantart, ImTwitter } from "react-icons/im";
import { FiInstagram } from "react-icons/fi";
import OpenSeaSVG from '../UI/SVG/OpenSeaSVG'

export default function HeaderSocials() {
  return (
    <div >
      <h4 className="mt-36 mb-4">Follow me on</h4>
      <ul className="flex gap-6">
        <li className="flex flex-row items-center gap-2 font-bold">
          <a href="#">DeviantArt</a>
          <span className="text-xl bg-green-400 rounded-full p-2">
            {<ImDeviantart />}
          </span>
        </li>
        <li className="flex flex-row items-center gap-2 font-bold">
          <a href="#">Instagram</a>
          <span className="text-2xl bg-gradient-to-tr from-orange-400 via-red-500 to-purple-600 text-white rounded-full p-2">
            {<FiInstagram />}
          </span>
        </li>
        <li className="flex flex-row items-center gap-2 font-bold">
          <a href="#">Twitter</a>
          <span className="text-xl bg-blue-600 text-white rounded-full p-2">
            {<ImTwitter />}
          </span>
        </li>
        <li className="flex flex-row items-center gap-2 font-bold">
          <a href="#">Opensea</a>
          <span className="text-xl bg-blue-600 text-white rounded-full p-1">
            {<OpenSeaSVG/>}
          </span>
        </li>
      </ul>
    </div>
  );
}
