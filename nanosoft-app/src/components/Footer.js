"use client";
import React, { useState } from "react";
import PopUp from "./PopUp";
import { AnimatePresence } from "framer-motion";
import popUpsData from "@/data/ItServicesData/ItServicesData";

function Footer() {
  const [isOpen, setIsOpen] = useState(null);

  return (
    <>
      <AnimatePresence mode="wait">
        {isOpen !== null && (
          <PopUp {...popUpsData[isOpen]} setIsOpen={setIsOpen} />
        )}
      </AnimatePresence>
      <footer className="">
        <div className="lg:flex lg:justify-between  lg:px-[14vh] lg:items-start lg:space-x-4">
          <div className="flex justify-center">
            <div className="flex-row  ">
              <a href="/" className="cursor-pointer outline-none border-none">
                <img src="form.png" width={300} />
              </a>
              <p className="pb-[30px] pt-[10px] text-[#060606] pl-[12px]">
                Trades with Algo is a leading algorithmic <br></br>software
                provider, revolutionizing the future of <br></br>automation with
                cutting-edge solutions.
                <br></br>
                <span className="font-bold cursor-pointer hover:font-black transition-all duration-300 ease-out">
                  ##
                </span>
                <br></br>
                <span className="font-bold cursor-pointer hover:font-black transition-all duration-300 ease-out">
                  ##
                </span>
              </p>
              <div className="flex justify-start gap-4 items-start pb-8 pl-[10px]">
                <a
                  href="##"
                  target="_blank"
                  title="Facebook"
                >
                  <img
                    src="https://img.icons8.com/?size=48&id=118497&format=png"
                    width={36}
                  />
                </a>
                <a
                  href="##"
                  target="_blank"
                  title="Instagram"
                >
                  <img
                    src="https://img.icons8.com/?size=48&id=Xy10Jcu1L2Su&format=png"
                    width={35}
                  />
                </a>
                <a
                  href="##"
                  target="_blank"
                  title="Telegram"
                >
                  <img
                    src="https://img.icons8.com/?size=96&id=25n4hOEoY7ss&format=png"
                    width={32}
                  />
                </a>
                <a
                  href="##"
                  target="_blank"
                  title="YouTube"
                >
                  <img
                    src="https://img.icons8.com/?size=96&id=19318&format=png"
                    width={33}
                  />
                </a>
              </div>
            </div>
          </div>
          <div className="flex justify-center gap-[4vh] ">
            <div className="pl-[5px]">
              <ul className="hover:cursor-pointer">
                <li className="font-semibold text-[17px] text-[#f30d17]">
                  ✧ IT services ✧
                </li>

                <div className="text-[#060606] pt-[15px] flex-col font-medium">
                  <a
                    href="/it-services/web-development"
                    className="hover:underline block"
                  >
                    ➠ Web Development
                  </a>
                  <a
                    href="/it-services/mobile-app-development"
                    className="hover:underline block"
                  >
                    ➠ Mobile App development
                  </a>
                  <a
                    href="/it-services/graphic-video-design"
                    className="hover:underline block"
                  >
                    ➠ Graphic & Video Design
                  </a>
                  <a
                    href="/it-services/software-development"
                    className="hover:underline block"
                  >
                    ➠ Software Development
                  </a>
                  <a
                    href="/it-services/game-development"
                    className="hover:underline block"
                  >
                    ➠ Game Development
                  </a>
                  <a
                    href="/it-services/digital-marketing"
                    className="hover:underline block"
                  >
                    ➠ Digital Marketing
                  </a>
                  <li className="hover:underline" onClick={() => setIsOpen(6)}>
                    ➠ Partners
                  </li>
                </div>
              </ul>
            </div>
            <div className="pl-[5px]">
              <ul className="hover:cursor-pointer">
                <li className="font-semibold text-[17px] text-[#f30d17]">
                  ✧ Algo Services ✧
                </li>

                <div className="text-[#060606] pt-[15px]  flex-col font-medium">
                  <li className="hover:underline">
                    <a href="/api-bridge">➠ Api Bridge</a>
                  </li>
                  <li className="hover:underline">
                    <a href="/algo">➠ Algo software</a>
                  </li>
                  <li className="hover:underline">
                    <a href="/auto">➠ Auto Buy & Sell signals</a>
                  </li>
                  <li className="hover:underline">
                    <a href="/strategy">➠ Stratergy Development</a>
                  </li>
                </div>
              </ul>
            </div>
          </div>
          <div className="flex justify-center pt-[25px] lg:pt-0 lg:m-[-12px] lg:px-0 md:px-[30%] sm:px-[20%] px-[10%]">
            <div className="">
              <div className="font-bold text-[35px] text-[#f30d17]">
                Contact Info:
              </div>
              <div className="font-semibold pt-[20px] text-[#060606]">
                📍 Scheme No. 136, Brilliant Convention Centre, <br />
                Indore, Madhya Pradesh, 452010
              </div>
              <div className="text-[#566a8d] pt-[20px]">
                📞 Phone:{" "}
                <a className="text-[#0e2b5c]" href="tel:9179042673">
                  +91 8827772751
                </a>{" "}
                <br></br> 📩 Email:{" "}
                <a
                  href="mailto:info@tradeswithalgo.com"
                  className="text-[#0e2b5c]"
                >
                  info@tradeswithalgo.com
                </a>
              </div>
            </div>
          </div>
        </div>

        <div className="pt-7 flex justify-center text-gray-400 pb-4 font-extralight hover:underline lg:text-[12px] text-[1.5vh]">
          Trades with Algo &#169;2024-25. All Rights Reserved
        </div>
      </footer>
    </>
  );
}

export default Footer;
