'use client';
import * as React from 'react';
import TokenomicsHeader from './TokenomicsHeader';
import TokenomicsHero from './TokenomicsHero';
import TokenomicsCTA from './TokenomicsCTA';

const TokenomicsMobile: React.FC = () => {
  return (
    <main className="overflow-hidden mx-auto w-full bg-gray-800 max-w-[480px]">
      <TokenomicsHeader />
      <TokenomicsHero />
      <TokenomicsCTA />
    </main>
  );
};

export default TokenomicsMobile;
