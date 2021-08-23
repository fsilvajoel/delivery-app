import { useState } from 'react';

import { Button, IconButton, TextField } from '@material-ui/core';
import Modal from '@material-ui/core/Modal';
import AddShoppingCartIcon from '@material-ui/icons/AddShoppingCart';
import CloseIcon from '@material-ui/icons/Close';
import DoneIcon from '@material-ui/icons/Done';
import Alert from '@material-ui/lab/Alert';
import { IProductsInCart } from 'src/types/cart';
import { setProductsInCart } from '~hooks/store/UseCartStore';

import NoPhoto from '../alecrim.jpg';
import CounterItens from '../components/CounterItens/CounterItens';
import ProductWarning from '../components/ProductWarning/ProductWarning';
import scss from './Modal.module.scss';

function ModalProductInfo(props) {
  const { data } = props;
  // console.log({ dentroMODAL: data });
  const [open, setOpen] = useState<boolean>(false);

  const handleOpen = () => {
    setOpen(true);
  };

  const handleClose = () => {
    setOpen(false);
  };
  const handleSelectProduct = () => {
    // console.log('entrei');
    const item: IProductsInCart = [
      {
        productId: 1,
        name: data.name,
        unitaryValue: 2,
        quantity: 300,
        observation: 'observação',
        unity: 'quantasVem',
      },
    ];
    setProductsInCart(item);
  };

  const Body = () => {
    return (
      <div className={scss.productDetail}>
        <div className={scss.procuctDetailHeader}>
          <ul>
            <li>
              <a href="/#">Zeferino / Temperos Frescos/ {data.name}</a>
            </li>
          </ul>
          <IconButton aria-label="close" component="span" onClick={handleClose}>
            <CloseIcon className={scss.icon} />
          </IconButton>
        </div>
        <div className={scss.procuctDetailBody}>
          <div className={scss.image}>
            {data.image ? (
              <img src={data.image} alt={data.name} />
            ) : (
              <img src={NoPhoto} alt={data.name} />
            )}
          </div>
          <div className={scss.info}>
            <h2 className={scss.title}> {data.name}</h2>
            {data.obs && (
              <Alert severity="info" className={scss.alert}>
                {data.obs}
              </Alert>
            )}
            {data.prices.map((price: any) => (
              <>
                <p className={scss.price}>
                  {price.price.toLocaleString('pt-br', {
                    style: 'currency',
                    currency: 'BRL',
                  })}
                  <span className={scss.priceUnit}> por {price.unit}</span>
                </p>
                {price.unit === 'Kg' && <ProductWarning />}
              </>
            ))}

            <p className={scss.itemDescription}>
              Descrição do produto por Lorem ipsum dolor sit amet consectetur
              adipisicing elit. Delectus, a.{data.description}
            </p>
            <CounterItens />
            <div className={scss.wrapperObs}>
              <TextField
                className={scss.textfield}
                id="observation"
                placeholder="alguma observação para esse produto?"
              />
            </div>
            <div className={scss.productDetailActions}>
              <Button variant="contained" onClick={handleSelectProduct}>
                <AddShoppingCartIcon className={scss.icon} />
                Adicionar a lista
              </Button>

              <Button variant="contained" onClick={handleSelectProduct}>
                <DoneIcon className={scss.icon} />
                Adicionar e finalizar
              </Button>
            </div>
          </div>
        </div>
      </div>
    );
  };

  return (
    <div>
      <Button onClick={handleOpen}>Ver detalhes</Button>
      <Modal
        open={open}
        onClose={handleClose}
        aria-labelledby="simple-modal-title"
        aria-describedby="simple-modal-description"
      >
        <Body />
      </Modal>
    </div>
  );
}
export default ModalProductInfo;
