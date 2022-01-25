import AddIcon from '@mui/icons-material/Add';
import RemoveIcon from '@mui/icons-material/Remove';
import { Button, IconButton } from '@mui/material';

import { setQtdItens, useSelectItensStore } from '~hooks/store/UseCartStore';

import scss from './CounterItens.module.scss';

interface ICounterItensProps {
  type: 'fractioned' | 'integer';
}
const CounterItens = (props: ICounterItensProps) => {
  const count = useSelectItensStore((store) => store.selectedQtdItens);
  let qtd = 0;
  if (props.type === 'integer') {
    qtd = 1;
  } else {
    qtd = 100;
  }
  const shortcutButtonsKg = () => {
    return (
      <>
        <Button variant="outlined" onClick={() => setQtdItens(count + qtd * 5)}>
          +500g
        </Button>
        <Button
          variant="outlined"
          onClick={() => setQtdItens(count + qtd * 10)}
        >
          +1kg
        </Button>
      </>
    );
  };
  const shortcutButtonsUnit = () => {
    return (
      <>
        <Button variant="outlined" onClick={() => setQtdItens(count + qtd * 5)}>
          +5
        </Button>
        <Button
          variant="outlined"
          onClick={() => setQtdItens(count + qtd * 10)}
        >
          +10
        </Button>
        <Button
          variant="outlined"
          onClick={() => setQtdItens(count + qtd * 20)}
        >
          +20
        </Button>
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
          {count.toFixed()} {props.type !== 'integer' && <span>g</span>}
        </div>
        <div className={scss.button}>
          <IconButton aria-label="-" onClick={() => setQtdItens(count + qtd)}>
            <AddIcon className={scss.icon} />
          </IconButton>
        </div>
      </div>
      <div className={scss.shortcutButtons}>
        {props.type !== 'integer' ? shortcutButtonsKg() : shortcutButtonsUnit()}
      </div>
    </>
  );
};

export default CounterItens;
