import { data } from "autoprefixer";
import React, { useState } from "react";

export default function RandomArts() {
  const [art, setArt] = useState("");
  const [isLoading, setIsLoading] = useState(false);

  function handleFetchArt() {
    const randomNumber = Math.floor(Math.random() * 1000)
    console.log("Fetching");
    setIsLoading(true);
    fetch(
      "https://collectionapi.metmuseum.org/public/collection/v1/objects/" + randomNumber
    )
      .then((response) => {
        return response.json();
      })
      .then((data) => {
        setArt(data);
      });
    setIsLoading(false);
  }

  return (
    <section className="flex flex-col pt-2 px-44 m-auto gap-12 transition-all">
      <a
        className="btn-primary cursor-pointer mt-3 mx-auto"
        onClick={handleFetchArt}
      >
        {art === "" ? "Get an Image" : "Get Another Image"}
      </a>
      <div className="flex flex-col m-auto">
          {!isLoading && art !== "" && (
        <div className="flex flex-col items-center text-center p-3 bg-gray-200 rounded-lg shadow-xl">
              <img
                width={300}
                src={art.primaryImageSmall}
                alt="art-image"
                className="mb-8"
              />
              <h3 className=" text-black font-semibold p-3 rounded-md">{art.title}</h3>
              <p className="p-8">Medium: {art.medium}</p>
        </div>
          )}
          {isLoading && <h2>Loading...</h2>}
      </div>
    </section>
  );
}
