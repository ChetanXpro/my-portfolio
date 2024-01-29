"use client";

import { Button } from "@/components/ui/button";
import Image from "next/image";
import React from "react";

const Hero = () => {
  return (
    <div className=" items-center justify-center w-full flex flex-col h-[90vh] ">
      <div className=" min-h-screen w-[100%] flex gap-4 justify-center flex-col items-center ">
        <Image
          className="mb-10"
          src={"/assets/logo.png"}
          alt="Logo"
          width={100}
          height={100}
        />
        <h1 className="text-4xl">
          Hey There! I&apos;m{" "}
          <span className="text-[#F47C01]">Chetan Baliyan.</span>
        </h1>
        <h3 className="text-[28px]">I love building stuff</h3>

        <div className="  gap-3 flex flex-col items-center p-3  w-[60%]">
          {/* <h1 className="text-base">Abo</h1> */}
          <div className="gap-10 flex flex-col">
            <p className="text-base font-extralight text-[#616161] text-center">
              I am based in Muzaffarnagar, India. I have experience developing
              and maintaining both frontend and backend production software. I
              love to work on different stuff that excite me. Outside of work, I
              am a solo travel enthusiast and am passionate about sports.
            </p>
          </div>
        </div>
        <div className="flex text-base font-thin items-center mb-3 text-[#616161] justify-center">
          <a
            href="https://github.com/chetanXpro"
            target="_blank"
            className="text-icon-link text-link mx-2"
          >
            <div className=" flex gap-1 items-center">
              <svg
                aria-hidden="true"
                focusable="false"
                data-prefix="fab"
                data-icon="github"
                role="img"
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 496 512"
                className="h-4"
              >
                <path
                  fill="currentColor"
                  d="M165.9 397.4c0 2-2.3 3.6-5.2 3.6-3.3.3-5.6-1.3-5.6-3.6 0-2 2.3-3.6 5.2-3.6 3-.3 5.6 1.3 5.6 3.6zm-31.1-4.5c-.7 2 1.3 4.3 4.3 4.9 2.6 1 5.6 0 6.2-2s-1.3-4.3-4.3-5.2c-2.6-.7-5.5.3-6.2 2.3zm44.2-1.7c-2.9.7-4.9 2.6-4.6 4.9.3 2 2.9 3.3 5.9 2.6 2.9-.7 4.9-2.6 4.6-4.6-.3-1.9-3-3.2-5.9-2.9zM244.8 8C106.1 8 0 113.3 0 252c0 110.9 69.8 205.8 169.5 239.2 12.8 2.3 17.3-5.6 17.3-12.1 0-6.2-.3-40.4-.3-61.4 0 0-70 15-84.7-29.8 0 0-11.4-29.1-27.8-36.6 0 0-22.9-15.7 1.6-15.4 0 0 24.9 2 38.6 25.8 21.9 38.6 58.6 27.5 72.9 20.9 2.3-16 8.8-27.1 16-33.7-55.9-6.2-112.3-14.3-112.3-110.5 0-27.5 7.6-41.3 23.6-58.9-2.6-6.5-11.1-33.3 2.6-67.9 20.9-6.5 69 27 69 27 20-5.6 41.5-8.5 62.8-8.5s42.8 2.9 62.8 8.5c0 0 48.1-33.6 69-27 13.7 34.7 5.2 61.4 2.6 67.9 16 17.7 25.8 31.5 25.8 58.9 0 96.5-58.9 104.2-114.8 110.5 9.2 7.9 17 22.9 17 46.4 0 33.7-.3 75.4-.3 83.6 0 6.5 4.6 14.4 17.3 12.1C428.2 457.8 496 362.9 496 252 496 113.3 383.5 8 244.8 8zM97.2 352.9c-1.3 1-1 3.3.7 5.2 1.6 1.6 3.9 2.3 5.2 1 1.3-1 1-3.3-.7-5.2-1.6-1.6-3.9-2.3-5.2-1zm-10.8-8.1c-.7 1.3.3 2.9 2.3 3.9 1.6 1 3.6.7 4.3-.7.7-1.3-.3-2.9-2.3-3.9-2-.6-3.6-.3-4.3.7zm32.4 35.6c-1.6 1.3-1 4.3 1.3 6.2 2.3 2.3 5.2 2.6 6.5 1 1.3-1.3.7-4.3-1.3-6.2-2.2-2.3-5.2-2.6-6.5-1zm-11.4-14.7c-1.6 1-1.6 3.6 0 5.9 1.6 2.3 4.3 3.3 5.6 2.3 1.6-1.3 1.6-3.9 0-6.2-1.4-2.3-4-3.3-5.6-2z"
                  className=""
                ></path>
              </svg>
              <p data-v-41a1427e="" className="text-icon-link-name">
                chetanxpro
              </p>
            </div>
          </a>
          <a
            data-v-41a1427e=""
            data-v-26e26f8f=""
            href="https://www.linkedin.com/in/chetan-baliyan/"
            target="_blank"
            className="flex gap-1 items-center mx-2"
          >
            <div data-v-41a1427e="" className="flex gap-1 items-center mx-2">
              <svg
                data-v-41a1427e=""
                aria-hidden="true"
                focusable="false"
                data-prefix="fab"
                data-icon="linkedin"
                role="img"
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 448 512"
                className="h-4"
              >
                <path
                  fill="currentColor"
                  d="M416 32H31.9C14.3 32 0 46.5 0 64.3v383.4C0 465.5 14.3 480 31.9 480H416c17.6 0 32-14.5 32-32.3V64.3c0-17.8-14.4-32.3-32-32.3zM135.4 416H69V202.2h66.5V416zm-33.2-243c-21.3 0-38.5-17.3-38.5-38.5S80.9 96 102.2 96c21.2 0 38.5 17.3 38.5 38.5 0 21.3-17.2 38.5-38.5 38.5zm282.1 243h-66.4V312c0-24.8-.5-56.7-34.5-56.7-34.6 0-39.9 27-39.9 54.9V416h-66.4V202.2h63.7v29.2h.9c8.9-16.8 30.6-34.5 62.9-34.5 67.2 0 79.7 44.3 79.7 101.9V416z"
                  className=""
                ></path>
              </svg>
              <p data-v-41a1427e="" className="text-icon-link-name">
                chetan-baliyan
              </p>
            </div>
          </a>
          <a
            data-v-41a1427e=""
            data-v-26e26f8f=""
            href="https://twitter.com/Chetanbaliyan16"
            target="_blank"
            className="flex gap-1 items-center mx-2"
          >
            <div data-v-41a1427e="" className="flex gap-1 items-center mx-2">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                enable-background="new 0 0 72 72"
                viewBox="0 0 72 72"
                id="twitter-x"
                className="h-4"
              >
                <switch>
                  <g>
                    <path
                      d="M42.5,31.2L66,6h-6L39.8,27.6L24,6H4l24.6,33.6L4,66
			h6l21.3-22.8L48,66h20L42.5,31.2z M12.9,10h8l38.1,52h-8L12.9,10z"
                    ></path>
                  </g>
                </switch>
              </svg>
              <p data-v-41a1427e="" className="text-icon-link-name">
                Chetanbaliyan16
              </p>
            </div>
          </a>

          <a
            href="mailto:chetanbaliyan10@gmail.com"
            target="_blank"
            className="text-icon-link text-link mx-2"
          >
            <div data-v-41a1427e="" className="flex gap-1 items-center mx-2">
              <svg
                data-v-41a1427e=""
                aria-hidden="true"
                focusable="false"
                data-prefix="fas"
                data-icon="envelope"
                role="img"
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 512 512"
                className="h-4"
              >
                <path
                  fill="currentColor"
                  d="M502.3 190.8c3.9-3.1 9.7-.2 9.7 4.7V400c0 26.5-21.5 48-48 48H48c-26.5 0-48-21.5-48-48V195.6c0-5 5.7-7.8 9.7-4.7 22.4 17.4 52.1 39.5 154.1 113.6 21.1 15.4 56.7 47.8 92.2 47.6 35.7.3 72-32.8 92.3-47.6 102-74.1 131.6-96.3 154-113.7zM256 320c23.2.4 56.6-29.2 73.4-41.4 132.7-96.3 142.8-104.7 173.4-128.7 5.8-4.5 9.2-11.5 9.2-18.9v-19c0-26.5-21.5-48-48-48H48C21.5 64 0 85.5 0 112v19c0 7.4 3.4 14.3 9.2 18.9 30.6 23.9 40.7 32.4 173.4 128.7 16.8 12.2 50.2 41.8 73.4 41.4z"
                  className=""
                ></path>
              </svg>
              <p data-v-41a1427e="" className="text-icon-link-name">
                chetanbaliyan10@gmail.com
              </p>
            </div>
          </a>
        </div>
        <div className="flex items-center  w-full justify-center gap-4">
          <a href="mailto:chetanbaliyan10@gmail.com">
            <Button className="w-24 py-6 border border-blue-500 hover:bg-blue-500 hover:text-white font-medium text-base bg-white text-black">
              Contact
            </Button>
          </a>
          <a
            target="_blank"
            href={`${process.env.BASE_DOMAIN}/assets/Chetan_Resume.pdf`}
          >
            <Button className="w-24 py-6 border border-blue-500 hover:bg-blue-500 hover:text-white font-medium text-base bg-white text-black">
              Resume
            </Button>
          </a>
        </div>
      </div>
    </div>
  );
};

export default Hero;
