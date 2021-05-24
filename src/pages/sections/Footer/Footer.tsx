import { useState } from 'react';
import Button from '~components/Button/Button';
import Container, { listBackground } from '~components/Container/Container';

import scss from './Footer.module.scss';
import AfyaLogoSVG from './images/AV.svg';
import FacebookSVG from './images/facebook.svg';
import InstagramSVG from './images/instagram.svg';
import LinkedinSVG from './images/linkedin.svg';
import TwitterSVG from './images/twitter.svg';
import YoutubeSVG from './images/youtube.svg';

function Footer() {
  const [isEmailVisible, setIsEmailVisible] = useState(false);
  const btnClass = [scss.btn];
  const emailClass = [scss.email];

  if (isEmailVisible) {
    btnClass.push(scss.hidden);
    emailClass.push(scss.visible);
  }

  return (
    <Container
      noPadding
      id="footer"
      className={scss.container}
      backgroundColor={listBackground.bkgdDarkGray}
    >
      <div className={scss.contact}>
        <AfyaLogoSVG className={scss.icon} />
        <p className={scss.text}>Entre em contato conosco por email</p>
        <p className={emailClass.join(' ')}>ventures@afya.com.br</p>
        <Button
          className={btnClass.join(' ')}
          onClick={() => setIsEmailVisible(true)}
        >
          Ver email
        </Button>
      </div>
      <footer className={scss.footer}>
        <div className={scss.socialWrapper}>
          <a
            href="https://br.linkedin.com/company/afyaeducacional"
            target="_blank"
            rel="noreferrer"
            className={scss.social}
          >
            <LinkedinSVG />
          </a>
          <a
            href="https://www.youtube.com/channel/UCdSm08ileKtHLbyWRm82tHQ"
            target="_blank"
            rel="noreferrer"
            className={scss.social}
          >
            <YoutubeSVG />
          </a>
          <a
            href="https://www.instagram.com/afyaeducacional/"
            target="_blank"
            rel="noreferrer"
            className={scss.social}
          >
            <InstagramSVG />
          </a>
          <a
            href="https://www.facebook.com/afyaeducacional/"
            target="_blank"
            rel="noreferrer"
            className={scss.social}
          >
            <FacebookSVG />
          </a>
          <a
            href="https://twitter.com/afyaeducacao?lang=pt-br"
            target="_blank"
            rel="noreferrer"
            className={scss.social}
          >
            <TwitterSVG />
          </a>
        </div>
        <div className={scss.addressWrapper}>
          <span className={scss.info}>
            All rights reserved. Copyright © 2021 Afya Educacional.
          </span>
          <span className={[scss.info, scss.address].join(' ')}>
            Alameda Oscar Niemeyer, 119 - 5th floor - Vale do Sereno Nova Lima /
            MG - CEP: 34000-000
          </span>
        </div>
      </footer>
    </Container>
  );
}

export default Footer;
