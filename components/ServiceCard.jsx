import React from "react";
import { BsCodeSlash } from "react-icons/bs";
import "../styles/ServiceCard.css";

const ServiceCard = (props) => {
  return (
    <div className=" flex flex-col items-center gap-5 py-8 px-8 md:px-14 s_card ">
      <div className="flex justify-center items-center bg-[#262e45] text-white  w-16 h-16 rounded-2xl">
        <props.icon size={30} />
      </div>
      <h3 className="text-xl text-center font-semibold">{props.title}</h3>
      <p className="text-justify md:text-center text-lg">{props.description}</p>
      <button>Learn More</button>
    </div>
  );
};

export default ServiceCard;