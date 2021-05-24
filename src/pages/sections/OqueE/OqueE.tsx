import CircleTop from '~assets/icons/circle.svg';
import CircleBotton from '~assets/icons/circleBotton.svg';
import Container, { listBackground } from '~components/Container/Container';
import ImageAbout from '~public/images/banner_about.png';

import styles from './OqueE.module.scss';

const OqueE: React.FC = () => {
  return (
    <Container
      id="sobre"
      backgroundColor={listBackground.bkgdWhite}
      className={styles.container}
      noPadding
    >
      <CircleTop className={styles.circleTop} />
      <div className={styles.main}>
        <div className={styles.about}>
          <h1 className={styles.title}>O que é o Afya Ventures?</h1>
          <p>
            Afya Ventures é a materialização do investimento da Afya em seu
            maior ativo <strong>as pessoas do seu ecossistema!</strong>
          </p>
          <p>
            Trata-se de um <strong>centro de empreendedorismo unificado</strong>
            , onde alunos, ex-alunos, professores e colaboradores contarão com o
            suporte da companhia para desenvolver seus projetos.
          </p>
          <p>
            Além disso, buscamos iniciativas de mercado que tem sinergia com a
            visão e{' '}
            <strong>estratégia da Afya para acelerar e investir.</strong>
          </p>
          <p>
            <strong>Nosso objetivo é fomentar o empreendedorismo</strong> nas
            nossas Instituições de Ensino, o intraempreendedorismo corporativo e
            o ecossistema de inovação de saúde e educação brasileiro.
          </p>
        </div>
        <div className={styles.wrapperImage}>
          <CircleBotton className={styles.circleBotton} />
          <div className={styles.divImage}>
            <img src={ImageAbout} alt="people looking at a notebook" />
          </div>
        </div>
      </div>
    </Container>
  );
};

export default OqueE;
