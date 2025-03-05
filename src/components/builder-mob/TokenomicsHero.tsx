'use client';
import * as React from 'react';

const TokenomicsHero: React.FC = () => {
  return (
    <section className="flex overflow-hidden items-start py-12 pr-12 text-sm font-medium text-center bg-gray-800 text-stone-300">
      {/* eslint-disable-next-line @next/next/no-img-element */}
      <img
        src="https://cdn.builder.io/api/v1/image/assets/TEMP/9a106c16d4074dba330302ad88e93a80e1711646479d4430a809dd0501501b80?placeholderIfAbsent=true&apiKey=cacdfa9040bd45b093e605898c64ea0c"
        alt=""
        className="object-contain shrink-0 self-end mt-28 rounded-none aspect-[0.45] w-[90px]"
      />
      <div className="flex flex-col grow shrink-0 self-start basis-0 w-fit">
        <h1 className="text-7xl font-bold text-white">
          <span
            style={{
              fontSize: '48px',
              lineHeight: '56px',
              color: 'rgba(108,255,164,1)',
            }}
          >
            $UPTIME
          </span>
          <br />
          <br />
          <span style={{ fontSize: '18px', lineHeight: '21px' }}>
            The native token you use to run{' '}
          </span>
          <span
            style={{
              fontSize: '18px',
              lineHeight: '21px',
              color: 'rgba(108,255,164,1)',
            }}
          >
            UpTime
          </span>
          <span style={{ fontSize: '18px', lineHeight: '21px' }}>
            {' '}
            and automate your devops - forever.
          </span>
        </h1>
        <p className="mt-4">One token for Accessing Unlimited $UPTIME</p>
        <button className="gap-2.5 self-stretch py-5 pr-12 pl-16 mx-5 mt-14 text-lg text-emerald-300 bg-gray-900 border-2 border-emerald-300 border-solid min-h-[60px] rounded-[100px] shadow-[0px_0px_20px_rgba(108,255,164,0.5)]">
          Get $UPTIME
        </button>
        <p className="self-center mt-3">COMING SOON</p>
      </div>
    </section>
  );
};

export default TokenomicsHero;
