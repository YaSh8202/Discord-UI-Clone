import React from "react";
import invite_only_landing from "../../assets/invite_only_landing.svg";
import fandom_landing from "../../assets/fandom_landing.svg";
import hanging_out_easy_landing from "../../assets/hanging_out_easy_landing.svg";
import just_chiling_landing from "../../assets/just_chiling_landing.svg";
import { DownloadIcon } from "@heroicons/react/outline";
import Container from "./Container";
import ScrollAnimation from "react-animate-on-scroll";

const LandingMiddle = () => {
  return (
    <div className="flex flex-col font-heading text-Gray-600 ">
      <Container
        image={invite_only_landing}
        heading={"Create an invite-only place where you belong"}
        content={`Discord servers are organized into topic-based channels where you
              can collaborate, share, and just talk about your day without
              clogging up a group chat.`}
      />
      <Container
        image={hanging_out_easy_landing}
        heading={`Where hanging out is easy`}
        content={`Grab a seat in a voice channel when you're free. Friends in your
              server can see you're around and instantly pop in to talk without
              having to call.`}
        reverse
        bg={"bg-lightGray"}
      />

      <Container
        image={fandom_landing}
        heading={`From few to fandom`}
        content={`Get any community running with moderation tools and custom member
              access. Give members special powers, set up private channels, and
              more.`}
      />

      <div className="w-full bg-lightGray ">
        <ScrollAnimation delay={350} animateIn="fadeIn" animateOnce>
          <div className="py-20  flex flex-col items-center w-[70%] justify-around mx-auto">
            <div className="text-center mt-4 ">
              <h2 className="text-2xl uppercase md:text-4xl lg:text-5xl font-bold mb-8 ">
                RELIABLE TECH FOR STAYING CLOSE
              </h2>
              <p className="text-base lg:text-lg  lg:px-12 ">
                Low-latency voice and video feels like you're in the same room.
                Wave hello over video, watch friends stream their games, or
                gather up and have a drawing session with screen share.
              </p>
            </div>
            <div className="mb-12 ">
              <img
                src={just_chiling_landing}
                className=" w-full md:w-[48rem] lg:w-[73rem] max-w-none  "
              />
            </div>
            <div className="flex flex-col items-center">
              <h3 className="text-xl md:text-3xl font-bold my-12 ">
                Ready to start your journey?
              </h3>
              <button className=" text-base lg:text-lg flex items-center justify-center w-[80%] h-14 rounded-full text-white bg-discordBlue-100 gap-2 hover:brightness-110 hover:shadow-lg ">
                <DownloadIcon className="h-6 w-6" />
                Download for Mac
              </button>
            </div>
          </div>
        </ScrollAnimation>
      </div>
    </div>
  );
};

export default LandingMiddle;
