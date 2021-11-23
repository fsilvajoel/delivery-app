import { Button, IconButton } from '@material-ui/core';
import AddIcon from '@material-ui/icons/Add';
import RemoveIcon from '@material-ui/icons/Remove';

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
  const shortcutButtonsKg = () => {
    return (
      <>
        <Button variant="outlined">+500g</Button>
        <Button variant="outlined">+1kg</Button>
      </>
    );
  };
  const shortcutButtonsUnit = () => {
    return (
      <>
        <Button variant="outlined">+5</Button>
        <Button variant="outlined">+10</Button>
        <Button variant="outlined">+20</Button>
      </>
    );
  };

  return (
    <>
      <p className={scss.title}>Selecione a quantidade:</p>
      <div className={scss.counertItens}>
        <div className={scss.button}>
          {count > 0 && (
            <IconButton
              aria-label="+"
              onClick={() => setQtdItens(count > 0.01 ? count - qtd : 0)}
            >
              <RemoveIcon className={scss.icon} />
            </IconButton>
          )}
        </div>
        <div className={scss.counter}>
          {count.toFixed()} {props.type !== 'Unidade' && <span>g</span>}
        </div>
        <div className={scss.button}>
          <IconButton aria-label="-" onClick={() => setQtdItens(count + qtd)}>
            <AddIcon className={scss.icon} />
          </IconButton>
        </div>
      </div>
      <div className={scss.shortcutButtons}>
        {props.type !== 'Unidade' ? shortcutButtonsKg() : shortcutButtonsUnit()}
      </div>
    </>
  );
};

export default CounterItens;
