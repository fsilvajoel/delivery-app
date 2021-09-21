import { useRouter } from 'next/router';

import { Divider } from '@material-ui/core';
import Button from '@material-ui/core/Button';
import AddIcon from '@material-ui/icons/Add';
import ListCart from '~components/ShoppingCart/List';

import scss from './CheckoutCards.module.scss';

export default function CheckoutList() {
  const router = useRouter();

  const handleAddProduct = () => {
    router.push('/');
  };

  return (
    <>
      <div className={scss.header}>
        <h2 className={scss.title}>Seus produtos:</h2>
        <Button variant="outlined" onClick={handleAddProduct}>
          <AddIcon className={scss.icon} />
          <span className={scss.textButton}>Adicionar mais produtos?</span>
        </Button>
      </div>
      <ListCart />
    </>
  );
}
