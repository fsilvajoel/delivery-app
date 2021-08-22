import { FaBalanceScaleRight } from 'react-icons/fa';

import scss from './ProductWarning.module.scss';

const ProductWarning = () => {
  return (
    <div className={scss.productWarning}>
      <div className={scss.icon}>
        <FaBalanceScaleRight />
      </div>
      <div className={scss.textInfo}>
        Atenção: este item tem peso variável e seu valor total pode ser
        atualizado pela loja após a pesagem.
      </div>
    </div>
  );
};

export default ProductWarning;
