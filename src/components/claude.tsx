import React from 'react';
import { ArrowUpRight, ChevronUp } from 'lucide-react';

const Claude = () => {
  return (
    <div className="bg-[#0A0A0A] min-h-screen text-white flex flex-col">
      {/* Top Navigation */}
      <nav className="flex justify-between items-center p-4">
        <div className="text-green-500">
          <ChevronUp className="inline-block mr-1" />
          UpTime
        </div>
        <div className="hamburger-menu">
          <div className="w-6 h-0.5 bg-white mb-1"></div>
          <div className="w-6 h-0.5 bg-white mb-1"></div>
          <div className="w-6 h-0.5 bg-white"></div>
        </div>
      </nav>

      {/* Main Content */}
      <div className="flex-grow container mx-auto px-4 flex flex-col items-center text-center">
        {/* Token Title */}
        <h1 className="text-4xl font-bold text-green-500 mb-4">$UPTIME</h1>

        {/* Subtitle */}
        <p className="text-lg mb-6">
          The native token you use to run UpTime and automate your devops -
          forever.
        </p>
        <p className="text-sm mb-6">
          One token for Accessing Unlimited $UPTIME
        </p>

        {/* Get Token Button */}
        <button className="bg-green-500 text-black px-6 py-3 rounded-full flex items-center mb-6">
          <ChevronUp className="mr-2" />
          Get $UPTIME
        </button>
        <div className="text-sm mb-6">COMING SOON</div>

        {/* Main Headline */}
        <h2 className="text-5xl font-bold mb-12">
          Never hire
          <br />
          junior DevOps
          <br />
          again.
        </h2>

        {/* Card Sections */}
        <div className="space-y-4 w-full max-w-md">
          {/* Stake Card */}
          <div className="border border-green-500 rounded-lg p-4 text-center">
            <div className="mb-2">
              <ChevronUp className="inline-block mr-2" />
              Stake 10,000 $UPTIME for unlimited UpTime access
            </div>
          </div>

          {/* Download Card */}
          <div className="border border-green-500 rounded-lg p-4 text-center">
            <div className="mb-2">
              <ChevronUp className="inline-block mr-2" />
              100,000 $UPTIME to download and whitelabel UpTime
            </div>
          </div>
        </div>

        {/* Statistics */}
        <div className="mt-8 text-center">
          <p>Companies with Junior DevOps: 500,000+</p>
          <p>Companies using UpTime: 0</p>
        </div>

        {/* Launch Button */}
        <button className="mt-6 bg-green-500 text-black px-6 py-3 rounded-full flex items-center">
          Launch UpTime
          <ArrowUpRight className="ml-2" />
        </button>
        <div className="text-sm mt-2">COMING SOON</div>
      </div>
    </div>
  );
};

export default Claude;
