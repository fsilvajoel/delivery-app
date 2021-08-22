import Carousel from 'react-elastic-carousel';

import Loading from '~components/Loading/Loading';
import { useAllCategoryes } from '~hooks/query/useProducts';

import scss from './Carrousel.module.scss';
import Item from './Item';
import { ICarousel } from './type';

const breakPoints = [
  { width: 1, itemsToShow: 1 },
  { width: 250, itemsToShow: 3 },
  { width: 550, itemsToShow: 5 },
  { width: 768, itemsToShow: 7 },
  { width: 1200, itemsToShow: 10 },
];
const CarrrouselCategories = () => {
  const data = useAllCategoryes();
  return (
    <div className={scss.carrousel}>
      {/* //TODO: Usar lodash com verificação e componente de loading */}
      {data !== 'loading' ? (
        <Carousel
          isRTL={false}
          breakPoints={breakPoints}
          itemsToScroll={1}
          itemsToShow={2}
          className={scss.carrousel}
        >
          {data?.map((category: ICarousel) => {
            return (
              <Item
                key={category.slug}
                image={category.image}
                slug={category.slug}
                name={category.name}
                id={category.id}
              />
            );
          })}
        </Carousel>
      ) : (
        <>
          <Loading />
        </>
      )}
    </div>
  );
};
export default CarrrouselCategories;
