import { useState } from 'react';

import { IconButton } from '@material-ui/core';
import ExposureNeg1Icon from '@material-ui/icons/ExposureNeg1';
import PlusOneIcon from '@material-ui/icons/PlusOne';

import scss from './CounterItens.module.scss';

const CounterItens = () => {
  const [count, setCount] = useState<number>(0);
  return (
    <>
      <p className={scss.title}>Selecione a quantidade:</p>
      <div className={scss.counertItens}>
        <div className={scss.button}>
          {count > 0 && (
            <IconButton
              aria-label="+"
              onClick={() => setCount(count > 0 ? count - 1 : count)}
            >
              <ExposureNeg1Icon className={scss.icon} />
            </IconButton>
          )}
        </div>
        <div className={scss.counter}>{count}</div>
        <div className={scss.button}>
          <IconButton aria-label="-" onClick={() => setCount(count + 1)}>
            <PlusOneIcon className={scss.icon} />
          </IconButton>
        </div>
      </div>
    </>
  );
};

export default CounterItens;