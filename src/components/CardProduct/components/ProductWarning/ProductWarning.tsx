// import { FaBalanceScale } from 'react-icons/fa';
import scss from './ProductWarning.module.scss';

import BalanceIcon from '~public/images/balanceador.png';

const ProductWarning = () => {
  return (
    <div className={scss.productWarning}>
      <div className={scss.icon}>
        <BalanceIcon />
      </div>
      <div className={scss.textInfo}>
        Atenção: este item tem peso variável e seu valor total pode ser
        atualizado pela loja após a pesagem.
      </div>
      <div style={{ display: `none` }}>
        Ícones feitos por{' '}
        <a
          href="https://www.flaticon.com/br/autores/photo3idea-studio"
          title="photo3idea_studio"
        >
          photo3idea_studio
        </a>{' '}
        from{' '}
        <a href="https://www.flaticon.com/br/" title="Flaticon">
          www.flaticon.com
        </a>
      </div>
    </div>
  );
};

export default ProductWarning;
