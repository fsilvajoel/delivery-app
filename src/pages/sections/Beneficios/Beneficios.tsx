/* eslint-disable import-helpers/order-imports */
import { useLayoutEffect, useState } from 'react';
import { useWindowWidthChange } from '~hooks/useWindowChange';

import { benefits } from './data';

import Container, { listBackground } from '~components/Container/Container';
import Swiper from './components/Swiper/Swiper';
import Card from './components/Card/Card';

import scss from './Beneficios.module.scss';

import AfyaVector from '~assets/icons/AfyaVector.svg';

function Beneficios() {
  const [isMobile, setIsMobile] = useState(false);

  const renderCards = () =>
    benefits.map((benefit) => <Card key={benefit.id} {...benefit} />);

  const renderSwiper = () => (
    <Swiper totalItems={benefits.length}>{renderCards()}</Swiper>
  );

  useLayoutEffect(() => {
    setIsMobile(window.innerWidth <= 720);
  }, []);

  useWindowWidthChange(() => {
    setIsMobile(window.innerWidth <= 720);
  });

  return (
    <Container
      id="beneficios"
      className={scss.container}
      backgroundColor={listBackground.bkgdGray}
    >
      <div className={scss.bgGray} />
      <AfyaVector className={scss.afyaVector} />
      <h2 className={scss.title}>Benefícios</h2>
      <div className={scss.cardsWrapper}>
        {isMobile ? renderSwiper() : renderCards()}
      </div>
    </Container>
  );
}

export default Beneficios;
