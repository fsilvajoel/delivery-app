import { useRouter } from 'next/router';

import AddIcon from '@mui/icons-material/Add';
import { Divider, Button } from '@mui/material';
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
      <ListCart fixed={false} />
    </>
  );
}
