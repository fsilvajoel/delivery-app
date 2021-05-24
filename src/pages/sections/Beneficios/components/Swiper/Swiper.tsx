import { useState } from 'react';
import SwipeableViews from 'react-swipeable-views';
import { autoPlay } from 'react-swipeable-views-utils';

import Pagination from '../Pagination/Pagination';
import scss from './Swiper.module.scss';
import { ISwiperProps } from './types';

const AutoPlaySwipeableViews = autoPlay(SwipeableViews);

function Swiper(props: ISwiperProps) {
  const [index, setIndex] = useState(0);
  const numberSteps = props.totalItems;

  const handleChangeIndex = (idx: number) => {
    setIndex(idx);
  };

  const renderPagination = () => (
    <div className={scss.paginationContainer}>
      <div className={scss.dotsList}>
        {Array(numberSteps)
          .fill(1)
          .map((key, idx) => (
            <Pagination
              key={`${idx + 1}`}
              value={idx}
              currentIndex={index}
              onChangeIndex={handleChangeIndex}
            />
          ))}
      </div>
    </div>
  );

  return (
    <div className={scss.container}>
      <AutoPlaySwipeableViews
        index={index}
        onChangeIndex={handleChangeIndex}
        enableMouseEvents
      >
        {props.children}
      </AutoPlaySwipeableViews>
      {renderPagination()}
    </div>
  );
}

export default Swiper;
