import SendSVG from '~assets/icons/IconSend.svg';
import Button from '~components/Button/Button';
import Container, { listBackground } from '~components/Container/Container';

import scss from './ExAluno.module.scss';
import AfyaVectorSVG from './images/Vector.svg';

function ExAluno() {
  return (
    <Container
      id="inscricao"
      className={scss.container}
      backgroundColor={listBackground.bkgdDarkGray}
    >
      <AfyaVectorSVG className={scss.afyaVector} />
      <div className={scss.cardsContainer}>
        <div className={scss.card}>
          <p className={scss.cardText}>
            É aluno, ex-aluno ou <br /> colaborador e tem um projeto?
          </p>
          <Button
            className={scss.btn}
            to="https://forms.office.com/r/A6KG3s3WRx"
          >
            INSCREVA-SE PARA PARTICIPAR
            <SendSVG className={scss.icon} />
          </Button>
        </div>
        <div className={scss.card}>
          <p className={scss.cardText}>
            Tem uma startup de saúde <br /> ou educação?
          </p>
          <Button
            className={scss.btn}
            to="https://forms.office.com/r/PAjrMN3NQt"
          >
            INSCREVA-SE PARA PARTICIPAR
            <SendSVG className={scss.icon} />
          </Button>
        </div>
      </div>
    </Container>
  );
}

export default ExAluno;
