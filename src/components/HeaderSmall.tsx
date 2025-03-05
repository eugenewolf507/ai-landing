import { FC } from 'react';

interface IHeaderProps {
  text: string;
}

const HeaderSmall: FC<IHeaderProps> = ({ text }) => (
  <h3 className="pb-6 pt-3 text-center text-2xl font-semibold tracking-tight text-gray-900 sm:text-3xl">
    {text}
  </h3>
);

export default HeaderSmall;
