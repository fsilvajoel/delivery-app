import { IconButton } from '@material-ui/core';
import ExposureNeg1Icon from '@material-ui/icons/ExposureNeg1';
import PlusOneIcon from '@material-ui/icons/PlusOne';

import { setQtdItens, useSelectItensStore } from '~hooks/store/UseCartStore';

import scss from './CounterItens.module.scss';

interface ICounterItensProps {
  type: 'kg' | 'Unidade';
}
const CounterItens = (props: ICounterItensProps) => {
  const count = useSelectItensStore((store) => store.selectedQtdItens);
  let qtd = 0;
  if (props.type === 'Unidade') {
    qtd = 1;
  } else {
    qtd = 100;
  }

  return (
    <>
      <p className={scss.title}>Selecione a quantidade:</p>
      <div className={scss.counertItens}>
        <div className={scss.button}>
          {count > 0 && (
            <IconButton
              aria-label="+"
              onClick={() => setQtdItens(count > 0 ? count - qtd : count)}
            >
              <ExposureNeg1Icon className={scss.icon} />
            </IconButton>
          )}
        </div>
        <div className={scss.counter}>
          {count} {props.type !== 'Unidade' && <span>g</span>}
        </div>
        <div className={scss.button}>
          <IconButton aria-label="-" onClick={() => setQtdItens(count + qtd)}>
            <PlusOneIcon className={scss.icon} />
          </IconButton>
        </div>
      </div>
    </>
  );
};

export default CounterItens;
