import React from "react";
import ScrollAnimation from "react-animate-on-scroll";

const Container = ({ image, heading, content, reverse, bg }) => {
  return (
    <div className={`w-full ${bg ? bg : "bg-white"}`}>
      <ScrollAnimation delay={300} animateIn="fadeIn" animateOnce>
        <div
          className={`  lg:py-20 md:py-16 py-12  flex ${
            reverse ? "md:flex-row-reverse" : "md:flex-row"
          } flex-col items-center lg:w-[80%] md:w-[85%] xl:w-[75%] w-[90%] justify-between mx-auto `}
        >
          <div className="w-full md:w-auto">
            <img
              className="lg:w-[42rem] md:w-[30rem]  w-full  max-w-none"
              src={image}
            />
          </div>

          <div className="flex text-Gray-600 flex-col items-start w-[90% lg:w-[23rem] gap-3 ">
            <h2 className="text-2xl md:text-3xl lg:text-5xl lg:leading-[3.5rem] font-bold ">
              {heading}
            </h2>
            <p className="text-base md:text-lg font-[350] md:leading-8">
              {content}
            </p>
          </div>
        </div>
      </ScrollAnimation>
    </div>
  );
};

export default Container;
