"use client";
import React from "react";

function AlgoServiceRightPanel() {
  return (
    <div className="bg-white shadow-xl h-auto p-4">
      <h2 className="text-2xl font-semibold text-center pb-4">All Services</h2>
      <div className="flex flex-col justify-between items-center space-y-3">
        <a
          href="/api-bridge"
          className="border-2 border-slate-500 rounded-lg flex flex-row justify-between w-full lg:w-96  p-3 hover:bg-slate-100 duration-300 transition-colors cursor-pointer"
        >
          <span className="font-medium text-lg text-nowrap">Api Bridge</span>
          <span className="font-bold text-red-500">&#8599;</span>
        </a>

        <a
          href="/algo"
          className="border-2 border-slate-500 rounded-lg flex flex-row justify-between w-full lg:w-96  p-3 hover:bg-slate-100 duration-300 transition-colors cursor-pointer"
        >
          <span className="font-medium text-lg text-nowrap">Algo Trading</span>
          <span className="font-bold text-red-500">&#8599;</span>
        </a>

        <a
          href="/auto"
          className="border-2 border-slate-500 rounded-lg flex flex-row justify-between w-full lg:w-96 p-3 hover:bg-slate-100 duration-300 transition-colors cursor-pointer"
        >
          <span className="font-medium text-lg text-nowrap">
            Auto Buy & Sell Signal
          </span>
          <span className="font-bold text-red-500">&#8599;</span>
        </a>

        <a
          href="/strategy"
          className="border-2 border-slate-500 rounded-lg flex flex-row justify-between w-full lg:w-96  p-3 hover:bg-slate-100 duration-300 transition-colors cursor-pointer"
        >
          <span className="font-medium text-lg text-nowrap">
            Strategy Development
          </span>
          <span className="font-bold text-red-500">&#8599;</span>
        </a>
      </div>
    </div>
  );
}

export default AlgoServiceRightPanel;
