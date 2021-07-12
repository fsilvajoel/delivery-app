import Carousel from 'react-elastic-carousel';

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
const CarrrouselCategories = (props: { data: any }) => {
  const { data } = props;
  return (
    <div className={scss.carrousel}>
      {data ? (
        <Carousel
          isRTL={false}
          breakPoints={breakPoints}
          itemsToScroll={1}
          itemsToShow={2}
          className={scss.carrousel}
        >
          {data[0].products?.map((category: ICarousel) => {
            return (
              <Item
                key={category.slug}
                image={category.image}
                slug={category.slug}
                name={category.name}
              />
            );
          })}
        </Carousel>
      ) : (
        <>
          <h1>Ainda não há produtos disponíveis nesta categoria</h1>
        </>
      )}
    </div>
  );
};
export default CarrrouselCategories;
