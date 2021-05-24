import SendSVG from '~assets/icons/IconSend.svg';
import Button from '~components/Button/Button';

import scss from './Banner.module.scss';
import AfyaVectorSVG from './images/AfyaVector.svg';
import AfyaVenturesSVG from './images/AfyaVentures.svg';
import image from './images/banner.jpg';

function Banner() {
  return (
    <div className={scss.container}>
      <img
        src={image}
        className={scss.img}
        alt="a man holding a lighted lamp"
      />
      <div className={scss.bgGradient} />
      <AfyaVectorSVG className={scss.afyaVector} />
      <AfyaVectorSVG className={scss.afyaVector} />
      <div className={scss.content}>
        <AfyaVenturesSVG className={scss.logo} />
        <span className={scss.release}>LANÇAMENTO</span>
        <div className={scss.dateWrapper}>
          <div className={scss.divider} />
          <span className={scss.date}>
            <strong>26.05</strong> | 19HRS
          </span>
          <div className={scss.divider} />
        </div>
        <span className={scss.schedule}>HORÁRIO DE BRASÍLIA</span>
        <Button className={scss.btn} to="https://forms.office.com/r/PAjrMN3NQt">
          INSCREVA-SE PARA ASSISTIR A LIVE <SendSVG className={scss.btnIcon} />
        </Button>
      </div>
    </div>
  );
}

export default Banner;
