import { useRouter } from 'next/router';

import { useState } from 'react';

import { Button, IconButton, TextField, Modal } from '@material-ui/core';
import AddShoppingCartIcon from '@material-ui/icons/AddShoppingCart';
import CloseIcon from '@material-ui/icons/Close';
import DoneIcon from '@material-ui/icons/Done';
import Alert from '@material-ui/lab/Alert';
import { IProductsInCart } from 'src/types/cart';

import { setProductsInCart } from '~hooks/store/UseCartStore';

import CounterItens from '../CounterItens/CounterItens';
import ProductWarning from '../ProductWarning/ProductWarning';
import scss from './Modal.module.scss';

import NoPhoto from '~public/images/nophoto.png';

function ModalProductInfo(props) {
  const { data } = props;
  const router = useRouter();
  // console.log({ dentroMODAL: data });
  const [open, setOpen] = useState<boolean>(false);

  const handleOpen = () => {
    setOpen(true);
  };

  const handleClose = () => {
    setOpen(false);
  };
  const handleSelectProduct = () => {
    const item: IProductsInCart = {
      productId: data.id,
      name: data.name,
      unitaryValue: data.prices[0].price,
      // TODO: adicionar quantidade com base no contador de quantidades
      quantity: 1,
      observation: 'observação',
      unity: 'quantasVem',
    };
    setProductsInCart(item);
  };
  const handleAddList = () => {
    handleSelectProduct();
    handleClose();
  };
  const handleFinish = () => {
    router.push('/checkout');
    handleSelectProduct();
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
            {data.image_url ? (
              <img src={data.image_url} alt={data.name} />
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
              <Button variant="contained" onClick={handleAddList}>
                <AddShoppingCartIcon className={scss.icon} />
                Adicionar a lista
              </Button>

              <Button variant="contained" onClick={handleFinish}>
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
