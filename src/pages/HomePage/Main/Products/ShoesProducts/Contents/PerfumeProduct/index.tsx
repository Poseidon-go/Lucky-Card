import PerfumeProductLeft from './components/PerfumeProductLeft';
import PerfumeProductRight from './components/PerfumeProductRight';

function PerfumeProduct() {
  return (
    <div id="perfumeproduct" className="grid grid-cols-2 mb-9">
      <PerfumeProductLeft />
      <PerfumeProductRight />
    </div>
  );
}

export default PerfumeProduct;
