'use client';
import * as React from 'react';

interface StakingBoxProps {
  icon?: string;
  children: React.ReactNode;
}

const StakingBox: React.FC<StakingBoxProps> = ({ icon, children }) => {
  return (
    <article className="flex overflow-hidden flex-col justify-center px-2.5 py-16 max-w-full border border-emerald-300 border-solid bg-neutral-900 rounded-[30px] w-[317px] mt-8 first:mt-0">
      <div className="flex flex-col justify-center items-center">
        {icon && (
          // eslint-disable-next-line @next/next/no-img-element
          <img
            src={icon}
            alt=""
            className="object-contain w-12 aspect-square"
          />
        )}
        <div className="flex overflow-hidden flex-col justify-center mt-8 w-full">
          <h3 className="w-full text-lg leading-6 text-zinc-50">{children}</h3>
        </div>
      </div>
    </article>
  );
};

export default StakingBox;
