import { TokenomicsHeader } from './TokenomicsHeader';
import { TokenomicsHero } from './TokenomicsHero';
import { TokenomicsFeatures } from './TokenomicsFeatures';
import { TokenomicsFooter } from './TokenomicsFooter';

const Builder: React.FC = () => {
  return (
    <main className="overflow-hidden bg-white">
      <TokenomicsHeader />
      <TokenomicsHero />
      <TokenomicsFeatures />
      <TokenomicsFooter />
    </main>
  );
};

export default Builder;
