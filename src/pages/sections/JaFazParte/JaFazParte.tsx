import CliqueFarma from '~assets/logos/cliquefarma.svg';
import Iclinic from '~assets/logos/iclinic.svg';
import Medicalharbor from '~assets/logos/medicalharbor.svg';
import Medicinae from '~assets/logos/medicinae.svg';
import Medphone from '~assets/logos/medphone.svg';
import Pebmed from '~assets/logos/pebmed.svg';
import Container, { listBackground } from '~components/Container/Container';

import styles from './JaFazParte.module.scss';

const JaFazParte: React.FC = () => {
  return (
    <Container id="jafazparte" backgroundColor={listBackground.bkgdGray}>
      <div className={styles.companies}>
        <h4 className={styles.title}>
          Startups que já fazem parte de nosso ecossistema
        </h4>
        <div className={styles.logos}>
          <Pebmed />
          <Medicinae />
          <Medphone />
          <Iclinic />
          <Medicalharbor />
          <CliqueFarma />
        </div>
      </div>
    </Container>
  );
};

export default JaFazParte;
