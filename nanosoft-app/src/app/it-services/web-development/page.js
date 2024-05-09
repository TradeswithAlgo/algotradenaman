import Header1 from "@/components/Header1";
import React from "react";
import Footer from "@/components/Footer";
import LoadGoogleAdsScript from "@/components/LoadGoogleAdsScript";
import LoadGoogleAdsIframe from "@/components/LoadGoogleAdsIframe";
import ItServiceData from "@/data/ItServicesData/ItServicesData";
import RightPanelItService from "../compo/Itservicescompos/RightPanelItService";

const Page = () => {
  return (
    <>
      <LoadGoogleAdsScript />
      <LoadGoogleAdsIframe />
      <Header1 />
      <div className="pt-[80px] pb-20">
        <div className="w-full bg-[#aee9e7] flex justify-center items-center h-[35vh] text-[#102b5c] font-[999] text-[5vh] xl:text-[8vh] ">
          IT-services - {ItServiceData[0].title}
        </div>
        <div className="w-full">
          <RightPanelItService />
          <div className="flex flex-row justify-between flex-shrink-0 w-3/4">
            <div className="flex justify-center items-center w-1/2 px-6">
              <p className="font-medium text-center text-lg xl:leading-relaxed text-[#627792]">
                {ItServiceData[0].description
                  .toString()
                  .split("\n\n")
                  .map((ele) => (
                    <>
                      {ele}
                      <br />
                      <br />
                    </>
                  ))}
              </p>
            </div>
            <div className="w-1/2 flex-shrink-0 py-10">
              <img
                src={ItServiceData[0].imgSrc}
                className="h-auto w-3/4 mx-auto object-contain"
              />
            </div>
          </div>
        </div>
      </div>
      <hr className="pb-[20px]"></hr>
      <Footer />
    </>
  );
};

export default Page;
