'use client';
import * as React from 'react';

const TokenomicsHeader: React.FC = () => {
  return (
    <header className="flex overflow-hidden gap-10 px-5 py-6 w-full bg-gray-900">
      {/* eslint-disable-next-line @next/next/no-img-element */}
      <img
        src="https://cdn.builder.io/api/v1/image/assets/TEMP/8dee280e2ad9164903215109f336749dfec2fe86820ee95b2568aa4843bf25b5?placeholderIfAbsent=true&apiKey=cacdfa9040bd45b093e605898c64ea0c"
        alt="Menu"
        className="object-contain shrink-0 w-9 aspect-square"
      />
      <nav className="flex-1 my-auto">
        <div className="flex shrink-0 h-1 bg-white" />
        <div className="flex shrink-0 mt-2.5 h-1 bg-white" />
        <div className="flex shrink-0 mt-2.5 h-1 bg-white" />
      </nav>
    </header>
  );
};

export default TokenomicsHeader;
