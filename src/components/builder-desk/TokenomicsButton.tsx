'use client';

import React from 'react';

interface TokenomicsButtonProps {
  children: React.ReactNode;
  variant?: 'primary' | 'secondary';
  className?: string;
  icon?: string;
}

export const TokenomicsButton: React.FC<TokenomicsButtonProps> = ({
  children,
  variant = 'primary',
  className = '',
  icon,
}) => {
  const baseStyles =
    'flex gap-2.5 justify-center items-center px-10 py-5 w-60 max-w-full text-lg font-medium min-h-[60px] rounded-[100px]';

  const variantStyles = {
    primary: 'bg-emerald-300 text-zinc-900',
    secondary:
      'bg-gray-900 text-emerald-300 border-2 border-emerald-300 border-solid shadow-[0px_0px_20px_rgba(108,255,164,0.5)]',
  };

  return (
    <button className={`${baseStyles} ${variantStyles[variant]} ${className}`}>
      <span className="self-stretch my-auto">{children}</span>
      {icon && (
        // eslint-disable-next-line @next/next/no-img-element
        <img
          src={icon}
          className="object-contain shrink-0 self-stretch my-auto aspect-square w-[15px]"
          alt=""
        />
      )}
    </button>
  );
};
