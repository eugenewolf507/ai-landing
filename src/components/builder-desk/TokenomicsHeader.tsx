'use client';

import React from 'react';

export const TokenomicsHeader: React.FC = () => {
  return (
    <header className="w-full max-md:max-w-full">
      <nav className="flex justify-center items-center px-16 py-5 w-full bg-gray-900 max-md:px-5 max-md:max-w-full">
        <div className="flex flex-wrap gap-10 justify-between items-center self-stretch px-10 my-auto max-w-[1400px] min-w-60 w-[1304px] max-md:px-5 max-md:max-w-full">
          <div className="flex flex-col justify-center self-stretch my-auto h-7 text-2xl font-medium leading-none text-emerald-300">
            <div className="flex flex-col justify-center">
              {/* eslint-disable-next-line @next/next/no-html-link-for-pages */}
              <a
                href="/"
                className="flex overflow-hidden gap-1 justify-center items-center"
              >
                {/* eslint-disable-next-line @next/next/no-img-element */}
                <img
                  src="https://cdn.builder.io/api/v1/image/assets/TEMP/8dee280e2ad9164903215109f336749dfec2fe86820ee95b2568aa4843bf25b5?placeholderIfAbsent=true&apiKey=cacdfa9040bd45b093e605898c64ea0c"
                  alt="UpTime AI Logo"
                  className="object-contain shrink-0 self-stretch my-auto w-9 aspect-square"
                />
                <h1 className="self-stretch my-auto h-4 w-[130px]">
                  UpTime AI
                </h1>
              </a>
            </div>
          </div>

          <div className="flex flex-wrap gap-10 justify-between items-center self-stretch my-auto min-w-60 w-[633px] max-md:max-w-full">
            <nav className="flex gap-8 justify-center items-center self-stretch px-1 pt-1 pb-1 my-auto text-lg leading-none whitespace-nowrap min-w-60 rounded-[64px] text-zinc-50">
              <a
                href="/tokenomics"
                className="self-stretch my-auto font-bold text-emerald-300 w-[120px]"
              >
                <div className="flex flex-col justify-center items-center p-2 max-w-full w-[120px]">
                  Tokenomics
                </div>
              </a>
              <a href="/roadmap" className="self-stretch my-auto w-[95px]">
                <div className="flex flex-col justify-center items-center p-2 w-[95px]">
                  Roadmap
                </div>
              </a>
              <a
                href="/whitepaper"
                className="flex justify-center items-center self-stretch p-2 my-auto w-[115px]"
              >
                <div className="self-stretch my-auto w-[99px]">Whitepaper</div>
              </a>
            </nav>

            <div className="self-stretch my-auto text-base font-medium leading-tight text-gray-900">
              <a
                href="/launch"
                className="flex overflow-hidden gap-1 justify-center items-center px-6 py-4 bg-emerald-300 border-2 border-solid border-gray-900 border-opacity-20 rounded-[64px] max-md:px-5"
              >
                <span className="self-stretch my-auto">Launch Agent</span>
                {/* eslint-disable-next-line @next/next/no-img-element */}
                <img
                  src="https://cdn.builder.io/api/v1/image/assets/TEMP/064ab9420f4ee31a31468441fef2036c3903b74b1e59f1df1a02c14689141ce1?placeholderIfAbsent=true&apiKey=cacdfa9040bd45b093e605898c64ea0c"
                  alt="Launch arrow"
                  className="object-contain shrink-0 self-stretch my-auto aspect-square w-[15px]"
                />
              </a>
            </div>
          </div>
        </div>
      </nav>
    </header>
  );
};
