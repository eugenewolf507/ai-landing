import { FC } from 'react';

interface IHeaderProps {
  text: string;
}

const HeaderMedium: FC<IHeaderProps> = ({ text }) => (
  <h2 className="pb-2 text-center text-2xl font-semibold tracking-tight text-gray-900 sm:text-5xl">
    {text}
  </h2>
);

export default HeaderMedium;
