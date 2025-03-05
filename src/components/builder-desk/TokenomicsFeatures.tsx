'use client';

import { TokenomicsButton } from './TokenomicsButton';

export const TokenomicsFeatures: React.FC = () => {
  return (
    <section className="flex flex-col justify-center items-center px-20 py-28 w-full font-bold text-center bg-gray-900 max-md:px-5 max-md:py-24 max-md:max-w-full">
      <div className="flex flex-col items-center mb-0 w-full max-w-[1088px] max-md:mb-2.5 max-md:max-w-full">
        <h2 className="self-stretch text-7xl leading-none text-white max-md:max-w-full max-md:text-4xl">
          Never hire junior DevOps again.
        </h2>

        <div className="flex flex-wrap gap-8 justify-center mt-20 text-lg leading-6 min-h-[315px] text-zinc-50 max-md:mt-10 max-md:max-w-full">
          <article className="flex overflow-hidden flex-col justify-center px-20 py-24 border border-emerald-300 border-solid bg-neutral-900 min-w-60 rounded-[30px] w-[445px] max-md:px-5 max-md:max-w-full">
            <div className="flex flex-col justify-center items-center">
              {/* eslint-disable-next-line @next/next/no-img-element */}
              <img
                src="https://cdn.builder.io/api/v1/image/assets/TEMP/405d51cb5466b904513e891e0331f9330214d575500fcee77764a3e8aa63c3a6?placeholderIfAbsent=true&apiKey=cacdfa9040bd45b093e605898c64ea0c"
                alt="Feature icon"
                className="object-contain w-12 aspect-square"
              />
              <div className="flex overflow-hidden flex-col justify-center mt-8 max-w-full w-[299px]">
                <p
                  style={{
                    fontFamily:
                      'DM Mono, -apple-system, Roboto, Helvetica, sans-serif',
                    fontWeight: 500,
                  }}
                >
                  Stake 10,000 $UPTIME for unlimited{' '}
                  <span style={{ color: 'rgba(108,255,164,1)' }}>UpTime</span>{' '}
                  access
                </p>
              </div>
            </div>
          </article>

          <article className="flex overflow-hidden flex-col justify-center px-20 py-24 border border-emerald-300 border-solid bg-neutral-900 min-w-60 rounded-[30px] w-[445px] max-md:px-5 max-md:max-w-full">
            <div className="flex flex-col justify-center items-center">
              <div className="flex overflow-hidden flex-col justify-center max-w-full w-[299px]">
                <p
                  style={{
                    fontFamily:
                      'DM Mono, -apple-system, Roboto, Helvetica, sans-serif',
                    fontWeight: 500,
                  }}
                >
                  100,000 $UPTIME to download and whitelabel{' '}
                  <span style={{ color: 'rgba(108,255,164,1)' }}>UpTime</span>
                </p>
              </div>
            </div>
          </article>
        </div>

        <div className="mt-20 text-5xl text-white leading-[84px] max-md:mt-10 max-md:max-w-full max-md:text-4xl max-md:leading-[78px]">
          Companies with Junior DevOps: 500,000+
          <br />
          Companies using{' '}
          <span
            style={{
              fontFamily:
                'DM Mono, -apple-system, Roboto, Helvetica, sans-serif',
              fontWeight: 500,
              color: 'rgba(108,255,164,1)',
            }}
          >
            UpTime
          </span>
          : 0 <br />
        </div>

        <div className="mt-20 max-md:mt-10">
          <TokenomicsButton
            variant="primary"
            icon="https://cdn.builder.io/api/v1/image/assets/TEMP/09b623d5906de5d115015ebbcd2f8771e828e91c7468d032eb2d025989f5bb4b?placeholderIfAbsent=true&apiKey=cacdfa9040bd45b093e605898c64ea0c"
          >
            Launch UpTime
          </TokenomicsButton>
          <p className="mt-3.5 text-sm font-medium text-stone-300">
            COMING SOON
          </p>
        </div>
      </div>
    </section>
  );
};
