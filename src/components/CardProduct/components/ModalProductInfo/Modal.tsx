import { useRouter } from 'next/router';

import { useState, FocusEvent } from 'react';

import AddShoppingCartIcon from '@mui/icons-material/AddShoppingCart';
import CloseIcon from '@mui/icons-material/Close';
import DoneIcon from '@mui/icons-material/Done';
import { Button, IconButton, TextField, Modal } from '@mui/material';
import Alert from '@mui/material/Alert';
import { convertBrlPrice } from '~utils/convertBrlPrice';
import { IProductsInCart } from 'src/types/cart';

import {
  setProductsInCart,
  setQtdItens,
  useSelectItensStore,
} from '~hooks/store/UseCartStore';

import CounterItens from '../CounterItens/CounterItens';
import ProductWarning from '../ProductWarning/ProductWarning';
import scss from './Modal.module.scss';
import NoPhoto from '~public/images/nophoto.png';

function ModalProductInfo({ data }: any) {
  const router = useRouter();
  const [open, setOpen] = useState<boolean>(false);
  const qtdItens = useSelectItensStore((store) => store.selectedQtdItens);
  const [observation, setObservation] = useState('');
  const handleOpen = () => {
    setOpen(true);
  };

  const handleClose = () => {
    setQtdItens(0);
    setOpen(false);
  };
  const handleSelectProduct = () => {
    const item: IProductsInCart = {
      product: data.id,
      name: data.name,
      unitary_value: data.sold_as === 'fractioned' ? 0 : data.price,
      quantity: qtdItens,
      observation,
      unity: data.sold_as,
    };
    setProductsInCart(item);
  };
  const handleAddList = () => {
    handleSelectProduct();
    handleClose();
  };
  const handleFinish = () => {
    setQtdItens(0);
    handleSelectProduct();
    router.push('/checkout');
  };

  const handleObservation = (e: FocusEvent<HTMLInputElement>) => {
    setObservation(e.currentTarget.value);
  };

  const Body = () => {
    return (
      <div className={scss.productDetail}>
        <div className={scss.procuctDetailHeader}>
          <ul>
            {/* <li>
              <a href="/#">Zeferino / Temperos Frescos/ {data.name}</a>
            </li> */}
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

            <p className={scss.price}>
              {convertBrlPrice(data.price)}
              <span className={scss.priceUnit}> por {data.price_unit}</span>
            </p>
            {data.sold_as === 'fractioned' && <ProductWarning />}
            <CounterItens type={data.sold_as} />
            <div className={scss.wrapperObs}>
              <TextField
                onBlur={handleObservation}
                className={scss.textfield}
                id="observation"
                placeholder="alguma observação para esse produto?"
              />
            </div>
            {qtdItens > 0 && (
              <div className={scss.productDetailActions}>
                <Button variant="outlined" onClick={handleAddList}>
                  <AddShoppingCartIcon className={scss.icon} />
                  Adicionar a lista
                </Button>

                <Button variant="outlined" onClick={handleFinish}>
                  <DoneIcon className={scss.icon} />
                  Adicionar e finalizar
                </Button>
              </div>
            )}
          </div>
        </div>
      </div>
    );
  };

  return (
    <div>
      <Button variant="outlined" onClick={handleOpen}>
        Ver detalhes
      </Button>
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
