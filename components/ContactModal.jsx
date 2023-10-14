"use client";
import React, { useState } from "react";
import { AiOutlineClose } from "react-icons/ai";

const ContactModal = (props) => {
  const [formData, setFormData] = useState({
    name: "",
    phone: "",
    message: "",
    email:""
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prevData) => ({
      ...prevData,
      [name]: value,
    }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    const mailtoLink = `mailto:hipowerbatteries@gmail.com?subject=Message from ${
      formData.name
    }&body=${encodeURIComponent(
      formData.message +
        "\nName: " +
        formData.name +
        "\nContact no: " +
        formData.phone +
        "\nEmail address: " +
        formData.email +
        "\nMessage: " +
        formData.message
    )}`;

    window.location.href = mailtoLink;
  };

  return (
    <div
      className={
        "z-50 fixed h-full w-full flex items-center justify-center " +
        props.className
      }
    >
      <div
        className="h-[110vh] w-full bg-[#000000aa] backdrop-blur-md absolute cursor-pointer"
        onClick={() => {
          props.showHandler(false);
        }}
      ></div>
      <div className=" w-[90%] sm:w-[60%] md:w-[35%] bg-white absolute rounded-3xl overflow-hidden animate-swipeIn">
      <form
          onSubmit={handleSubmit}
          className="w-full bg-white flex flex-col p-5 sm:p-10"
        >
          <div className="flex justify-between items-center">
            <h1 className="text-gray-900 text-3xl font-medium title-font">
              Contact Us
            </h1>
            <AiOutlineClose size={25} onClick={() => {
              props.showHandler(false);
            }}/>
          </div>
          <p className="leading-relaxed mb-2 text-gray-600 max-sm:hidden">
          Connect with Us - Your Feedback Matters!
          </p>
          <div className="relative mb-2">
            <label htmlFor="name" className="leading-7 text-sm text-gray-600">
              Name
            </label>
            <input
              type="text"
              id="name"
              value={formData.name}
              onChange={handleChange}
              required
              name="name"
              className="w-full bg-white rounded border border-gray-300 focus:border-indigo-500 focus:ring-2 focus:ring-indigo-200 text-base outline-none text-gray-700 py-1 px-3 leading-8 transition-colors duration-200 ease-in-out"
            />
          </div>
          <div className="relative mb-2 ">
            <label htmlFor="phone" className="leading-7 text-sm text-gray-600">
              Mobile No
            </label>
            <input
              type="tel"
              id="phone"
              name="phone"
              value={formData.phone}
              onChange={handleChange}
              required
              className="w-full bg-white rounded border border-gray-300 focus:border-indigo-500 focus:ring-2 focus:ring-indigo-200 text-base outline-none text-gray-700 py-1 px-3 leading-8 transition-colors duration-200 ease-in-out"
            />
          </div>
          <div className="relative mb-2 ">
            <label htmlFor="email" className="leading-7 text-sm text-gray-600">
              Email address
            </label>
            <input
              type="email"
              id="email"
              name="email"
              value={formData.email}
              onChange={handleChange}
              required
              className="w-full bg-white rounded border border-gray-300 focus:border-indigo-500 focus:ring-2 focus:ring-indigo-200 text-base outline-none text-gray-700 py-1 px-3 leading-8 transition-colors duration-200 ease-in-out"
            />
          </div>
          <div className="relative mb-2">
            <label
              htmlFor="message"
              className="leading-7 text-sm text-gray-600"
            >
              Message
            </label>
            <textarea
              id="message"
              name="message"
              value={formData.message}
              onChange={handleChange}
              required
              className="w-full bg-white rounded border border-gray-300 focus:border-indigo-500 focus:ring-2 focus:ring-indigo-200 h-16 text-base outline-none text-gray-700 py-1 px-3 resize-none leading-6 transition-colors duration-200 ease-in-out"
            ></textarea>
          </div>
          <button
            type="Submit"
            className="text-white bg-red-500 border-0 py-2 px-6 focus:outline-none hover:bg-red-600 rounded text-lg"
          >
            Submit
          </button>
        </form>
      </div>
    </div>
  );
};

export default ContactModal;