import Footer from "@/components/Footer";
import Header1 from "@/components/Header1";
import LoadGoogleAdsIframe from "@/components/LoadGoogleAdsIframe";
import LoadGoogleAdsScript from "@/components/LoadGoogleAdsScript";
import React from "react";

const Page = () => {
  return (
    <>
      <LoadGoogleAdsScript />
      <section>
        <LoadGoogleAdsIframe />
        <Header1 />
        <div className="pt-[80px] pb-[30px]">
          <h1 className="w-full bg-[#aee9e7] flex justify-center items-center h-[35vh] text-[#060606] font-[999] text-[5vh] xl:text-[8vh]">
            Payment
          </h1>
          <p className="text-center xl:text-[4vh] text-[1.5vh] text-[#000000] tracking-[1px] text-pretty font-semibold">
          Please note: Only make payments to the official bank details provided below. 
          Any other accounts are fraudulent and should be reported immediately. 
          Stay safe from scams!
            </p>
          <div className="md:flex justify-center gap-[5vh] pt-[30px] pb-[30px] px-[5%] xl:px-0">
            <div>
              <div className="shadow-xl w-fit p-[40px] text-[2vh] rounded-xl text-[#6a6a6a] hover:-translate-y-3 transition-transform duration-300 ease-out">
                <div className="flex justify-center pb-[10px] ">
                  <img src="" width={250} className="" />
                </div>
                <p className="p-[12px] font-medium">
                  <span className=" font-bold">Bank Name:-</span> HDFC Bank
                </p>
                <p className="p-[12px] font-medium">
                  <span className=" font-bold">Account Name :-</span>{" "}
                  Trades With Algo
                </p>
                <p className="p-[12px] font-medium">
                  <span className=" font-bold">Account Number :- </span>
                  50200105354995
                </p>
                <p className="p-[12px] font-medium">
                  <span className=" font-bold">IFSC Code :-</span> HDFC0000281
                </p>
              </div>
              <div className="shadow-xl w-full p-[30px] rounded-xl mt-[50px] hover:-translate-y-3 transition-transform duration-300 ease-out">
                <img src="/image/razor-pay.jpeg" />
              </div>
            </div>
            <div className="shadow-2xl p-[20px] w-fit h-fit rounded-2xl mt-[50px] xl:mt-0 hover:-translate-y-3 transition-transform duration-300 ease-out">
              <img src="https://i.pinimg.com/736x/1e/b4/93/1eb49385575175ab7f541d7000273a1b.jpg" width={450} />
            </div>
          </div>
        </div>
        <hr className="pb-[30px]"></hr>
        <Footer />
      </section>
    </>
  );
};

export default Page;
