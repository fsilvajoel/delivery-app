import CheckCircleOutlineOutlinedIcon from '@material-ui/icons/CheckCircleOutlineOutlined';

import scss from './Checkout.module.scss';

function Finished() {
  return (
    <div className={scss.finished}>
      <h3 className={scss.finishedTitle}>
        Obrigado pelo seu pedido. Ele já encontra-se em preparação
      </h3>
      <div className={scss.icon}>
        <CheckCircleOutlineOutlinedIcon />
      </div>
      <div className={scss.finishedDetails}>
        <h5 className={scss.messageCode}>
          O código do seu pedido é <b>#2001539</b>. Em breve estará pronto!
        </h5>
      </div>
    </div>
  );
}

export default Finished;
