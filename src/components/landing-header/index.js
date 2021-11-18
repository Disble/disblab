import React from "react";
import { ChevronDoubleDownIcon } from '@heroicons/react/solid';
import { StaticImage } from "gatsby-plugin-image";
import "./styles.css";

const textShadowWhite = {
  textShadow: "0 0 0.1rem #fff",
};

export default function LandingHeader() {

  return (
    <div>
      <div className="absolute z-10" style={{ left: "18%" }}>
        <div className="typewriter with-end name" >
          <h1 style={textShadowWhite}>Alejandro</h1>
        </div>
      </div>
      <div className="flex justify-center">
        <StaticImage className="block mb-6 bottom-6 md:bottom-6 h-40 w-40 rounded-full md:h-64 md:w-64 border-4 border-gray-200	" src="https://www.datocms-assets.com/58484/1637121616-foto-square.png" alt="Photo Profile" />
      </div>
      <div className="absolute bottom-1/3 z-10" style={{ right: "20%" }}>
        <div className="typewriter lastname" >
          <h1 style={textShadowWhite}>Arias. C.</h1>
        </div>
      </div>
      <div className="absolute inset-x-0 bottom-0 h-28 w-full md:h-32 text-center py-4 transition duration-500 ease-in-out hover:bg-gray-200 focus:bg-gray-300 active:bg-gray-400 cursor-pointer">
        <div className="text-3xl md:text-5xl font-bold tracking-tighter mb-3 md:mb-5">Conoce más sobre mí</div>
        <ChevronDoubleDownIcon className="h-10 w-10 md:h-14 md:w-14 text-center mx-auto floating" />
      </div>
    </div>
  );
}