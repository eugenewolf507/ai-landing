/* eslint-disable @next/next/no-img-element */
'use client';

import React from 'react';

export const TokenomicsFooter: React.FC = () => {
  return (
    <footer className="flex overflow-hidden flex-col justify-center items-center px-16 py-14 w-full bg-black max-md:px-5 max-md:max-w-full">
      <div className="flex gap-10 items-center w-full max-w-[1224px] max-md:max-w-full">
        <p className="grow shrink self-stretch my-auto text-lg font-medium text-white w-[124px]">
          © 2025 UpTime AI
        </p>

        <div className="flex gap-10 justify-center items-center self-stretch">
          <a href="/social1">
            <img
              src="https://cdn.builder.io/api/v1/image/assets/TEMP/990fbe7feca5bdc7808722f1c746a5458489c3959035978be6979a0a68d6537c?placeholderIfAbsent=true&apiKey=cacdfa9040bd45b093e605898c64ea0c"
              alt="Social media 1"
              className="object-contain shrink-0 self-stretch my-auto w-12 aspect-square"
            />
          </a>
          <a href="/social2">
            <img
              src="https://cdn.builder.io/api/v1/image/assets/TEMP/41c45703a07373a8fd837563923b465d82c6a112d4f1b48d40fc7d3598b789dc?placeholderIfAbsent=true&apiKey=cacdfa9040bd45b093e605898c64ea0c"
              alt="Social media 2"
              className="object-contain shrink-0 self-stretch my-auto w-12 aspect-square"
            />
          </a>
          <a href="/social3">
            <img
              src="https://cdn.builder.io/api/v1/image/assets/TEMP/4e67e0db3b7cb4ed550d964351039091d9aef28d7b6f00d8ba818bb0e23857ec?placeholderIfAbsent=true&apiKey=cacdfa9040bd45b093e605898c64ea0c"
              alt="Social media 3"
              className="object-contain shrink-0 self-stretch my-auto w-12 aspect-square"
            />
          </a>
        </div>

        <nav className="flex gap-10 self-stretch my-auto text-lg font-medium text-center text-white">
          <a href="/privacy" className="basis-auto">
            Privacy Policy
          </a>
          <a href="/terms" className="basis-auto">
            Terms of Service
          </a>
        </nav>
      </div>
    </footer>
  );
};
