import React, { useState } from "react";
import { FaLocationArrow, FaPaperPlane } from "react-icons/fa6";
import { TextGenerateEffect } from "./ui/TextGenerateEffect";
import { socialMedia } from "@/data";
import MagicButton from "./MagicButton";

const Footer: React.FC = () => {
  const [inputValue, setInputValue] = useState<string>("");
  const [responseMessage, setResponseMessage] = useState<string>("");

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setInputValue(e.target.value);
  };

  const handleSubmit = async () => {
    try {
      const response = await fetch('/api/submit-message', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({ message: inputValue }),
      });
      
      if (!response.ok) {
        const text = await response.text();
        console.error('Server responded with:', text);
        throw new Error(`HTTP error! status: ${response.status}`);
      }
      
      const data = await response.json();
      setResponseMessage(data.message);
      setInputValue(""); // Clear the input after submission
    } catch (error) {
      console.error('Error submitting message:', error);
      setResponseMessage('An error occurred. Please try again.');
    }
  };

  return (
    <footer className="w-full pt-20 pb-10 relative" id="contact">
      {/* background grid */}
      <div className="w-full absolute left-0 -bottom-72 min-h-96 pointer-events-none">
        <img
          src="/footer-grid.svg"
          alt="grid"
          className="w-full h-full opacity-50"
        />
      </div>

      <div className="flex flex-col items-center relative z-10">
        <h1 className="heading lg:max-w-[45vw]">
          Hier kann <span className="text-purple">AI</span> Ihnen
          weiterhelfen
        </h1>
        <p className="text-white-200 md:mt-10 my-5 text-center">
          Bitte fügen Sie den Link mit der Profil/Projektbeschreibung Ihres Gesuches und AI analysiert, ob ich für Sie der passende Kandidat bin.
        </p>
        <input
          type="text"
          value={inputValue}
          onChange={handleInputChange}
          className="w-full max-w-md px-4 py-2 mb-4 text-white bg-black-200 border border-black-300 rounded-lg focus:outline-none focus:border-purple relative z-20"
          placeholder="Fügen Sie hier Ihren Link ein"
        />
        <div className="flex flex-col sm:flex-row gap-4">
        <a  onClick={handleSubmit}>
          <MagicButton
            title="Prüfen"
            icon={<FaLocationArrow />}
            position="right"
           
   
          />
          </a>
          {/* <a href="mailto:oleggolo@google.com" className="relative z-20">
            <MagicButton
              title="Übersetzen"
              icon={<FaPaperPlane />}
              position="right"
       
            />
          </a> */}
        </div>
        {responseMessage && (

<TextGenerateEffect
words={responseMessage}
className="text-justify text-[15px] md:text-xl lg:text-2xl"
/>
          // <p className="text-white-200 mt-4 text-center relative z-20">{responseMessage}</p>
        )}
      </div>
      <div className="flex mt-16 md:flex-row flex-col justify-between items-center">
        <p className="md:text-base text-sm md:font-normal font-light">
          Copyright © 2024 Oleg Golovin
        </p>

        <div className="flex items-center md:gap-3 gap-6">
          {socialMedia.map((info) => (
            
            <div
              key={info.id}
              className="w-10 h-10 cursor-pointer flex justify-center items-center backdrop-filter backdrop-blur-lg saturate-180 bg-opacity-75 bg-black-200 rounded-lg border border-black-300"
            ><a href={info.link} target = "_blank">
              <img src={info.img} alt="icons" width={20} height={20} />
              </a>
            </div>
          ))}
        </div>
      </div>
    </footer>
  );
};

export default Footer;
