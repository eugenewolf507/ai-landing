'use client';

import React from 'react';
import { TokenomicsButton } from './TokenomicsButton';

export const TokenomicsHero: React.FC = () => {
  return (
    <section className="flex overflow-hidden flex-col items-center px-20 pt-32 pb-10 w-full text-center bg-gray-800 max-md:px-5 max-md:pt-24 max-md:max-w-full">
      <div className="flex flex-col items-center w-full max-w-[1088px] max-md:max-w-full">
        <div className="flex flex-col items-center self-stretch max-md:max-w-full">
          <h2 className="text-7xl font-bold text-white leading-[84px] max-md:max-w-full max-md:text-4xl max-md:leading-[52px]">
            <span
              style={{
                fontFamily:
                  'DM Mono, -apple-system, Roboto, Helvetica, sans-serif',
                fontWeight: 500,
                color: 'rgba(108,255,164,1)',
              }}
            >
              $UPTIME
            </span>
            <br />
            <span style={{ fontSize: '48px' }}>
              The native token you use to run{' '}
            </span>
            <span
              style={{
                fontFamily:
                  'DM Mono, -apple-system, Roboto, Helvetica, sans-serif',
                fontWeight: 500,
                fontSize: '48px',
                color: 'rgba(108,255,164,1)',
              }}
            >
              UpTime
            </span>
            <span style={{ fontSize: '48px' }}>
              {' '}
              and automate your devops - forever.{' '}
            </span>
          </h2>

          <p className="mt-4 text-2xl leading-loose text-stone-300 max-md:max-w-full">
            One token for Accessing Unlimited $UPTIME
          </p>
        </div>

        <div className="mt-14 max-md:mt-10">
          <TokenomicsButton variant="secondary">Get $UPTIME</TokenomicsButton>
          <p className="mt-4 text-sm font-medium text-stone-300">COMING SOON</p>
        </div>
      </div>
    </section>
  );
};
