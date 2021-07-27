import Typography from '@material-ui/core/Typography';

// import styled from 'styled-components';
import CircleCheck from '~public/images/check.gif';

import scss from './Checkout.module.scss';

function Finished() {
  return (
    <>
      <Typography gutterBottom variant="h5">
        Obrigado pelo seu pedido. Ele já encontra-se em preparação
      </Typography>
      <div className={scss.icon}>
        <img src={CircleCheck} alt="concluído" />
      </div>
      <Typography variant="subtitle1">
        O código do seu pedido é <b>#2001539</b>. Em breve estará pronto!
      </Typography>
    </>
  );
}

export default Finished;