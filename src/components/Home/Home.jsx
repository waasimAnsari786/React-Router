import React from "react";

const Home = ({
  heading,
  slogan,
  textContent,
  firstImage,
  secondImage,
  ctnr2Class,
}) => {
  return (
    <div className="container mx-auto p-4">
      {/* First container with two columns */}
      <div className="flex flex-col md:flex-row justify-between items-center">
        {/* First column with image */}
        <div className="md:w-1/2 flex justify-center">
          <img
            src={firstImage}
            alt="First Section Image"
            className="w-full h-auto"
          />
        </div>
        {/* Second column with text */}
        <div className="md:w-1/2 p-4">
          <h1 className="text-2xl font-bold mb-4">{heading}</h1>
          <h2 className="text-xl text-gray-600 italic mb-4">{slogan}</h2>
          {textContent.map((text, index) => (
            <p key={index} className="text-gray-700 mb-2">
              {text}
            </p>
          ))}
        </div>
      </div>

      {/* Second container with centered image */}
      <div className={ctnr2Class}>
        <div className="w-1/2">
          <img
            src={secondImage}
            alt="Second Section Image"
            className="w-full h-auto"
          />
        </div>
      </div>
    </div>
  );
};

export default Home;
