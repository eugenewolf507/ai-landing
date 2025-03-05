'use client';
import * as React from 'react';
import StakingBox from './StakingBox';

const TokenomicsCTA: React.FC = () => {
  return (
    <section className="flex flex-col items-center px-7 pt-11 pb-20 w-full font-medium text-center bg-gray-900">
      <h2 className="text-5xl font-bold text-white w-[260px]">
        Never hire junior DevOps again.
      </h2>
      <div className="self-stretch mt-12 text-lg leading-6 text-zinc-50">
        <StakingBox icon="https://cdn.builder.io/api/v1/image/assets/TEMP/405d51cb5466b904513e891e0331f9330214d575500fcee77764a3e8aa63c3a6?placeholderIfAbsent=true&apiKey=cacdfa9040bd45b093e605898c64ea0c">
          Stake 10,000 $UPTIME for unlimited{' '}
          <span style={{ color: 'rgba(108,255,164,1)' }}>UpTime</span> access
        </StakingBox>
        <StakingBox>
          100,000 $UPTIME to download and whitelabel{' '}
          <span style={{ color: 'rgba(108,255,164,1)' }}>UpTime</span>
        </StakingBox>
      </div>
      <p className="mt-11 text-3xl font-bold text-white">
        Companies with Junior DevOps: 500,000+
        <br />
        Companies using{' '}
        <span
          style={{
            fontFamily: 'DM Mono, -apple-system, Roboto, Helvetica, sans-serif',
            fontWeight: 500,
            color: 'rgba(108,255,164,1)',
          }}
        >
          UpTime
        </span>
        : 0 <br />
      </p>
      <button className="flex gap-2.5 justify-center items-center px-10 py-5 mt-16 w-60 max-w-full text-lg bg-emerald-300 min-h-[60px] rounded-[100px] text-zinc-900">
        <span className="self-stretch my-auto">Launch UpTime</span>
        {/* eslint-disable-next-line @next/next/no-img-element */}
        <img
          src="https://cdn.builder.io/api/v1/image/assets/TEMP/ccb4544cb49cdb357d59abe7e803d77f881b3c804bcfbeddc30c17e8e68bd38e?placeholderIfAbsent=true&apiKey=cacdfa9040bd45b093e605898c64ea0c"
          alt=""
          className="object-contain shrink-0 self-stretch my-auto aspect-square w-[15px]"
        />
      </button>
      <p className="mt-6 text-sm text-stone-300">COMING SOON</p>
    </section>
  );
};

export default TokenomicsCTA;
