import Image from "next/image";
import Link from "next/link";
import React from "react";

const About = () => {
  return (
    <section className=" p-4 sm:p-10 w-[100%]  text-[#ffffff] top-0 bg-gradient-to-tr from-red-500 to-[#ff0e2c] min-h-[95vh] flex flex-col gap-5 justify-center">
      <div className="items-center flex-col gap-5 sm:flex-row flex w-full justify-around">
        <div className="sm:w-[40%] flex flex-col justify-center gap-5">
          <h1 className="text-4xl font-semibold text-center sm:text-left">
            About Us
          </h1>
          <p className="text-justify sm:text-start">
          Hipowerbatteries is the leading manufacturer of Automotive and Inverter Batteries. After starting its operation since 1988, the firm has achieved many accomplishments and has established wide spread dealer network. The firm is supplying high quality batteries to Government Departments like:
            <br/>1. Defence
            <br/>2. Railways
            <br/>3. MPSEB
            <br/>4. State Transports
          </p>
          <Link
            href="/about"
            className="text-[#ff0e2c] bg-white font-semibold text-lg px-4 py-2  rounded-full mx-auto sm:ml-0 "
          >
            Learn More
          </Link>
        </div>
        <div className="sm:w-[50%] flex items-center ">
          <Image
            className="w-full max-h-[80%] animate-updown shadow-2xl rounded-lg overflow-hidden"
            src={"/images/about/about2.png"}
            height={400}
            width={800}
            alt=""
          />
        </div>
      </div>
    </section>
  );
};

export default About;