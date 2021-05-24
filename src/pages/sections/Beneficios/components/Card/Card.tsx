import { IBenefit } from '../../type';
import scss from './Card.module.scss';

function Card(props: IBenefit) {
  const titleClass = [scss.text, scss.title];
  return (
    <div className={scss.container}>
      <props.icon className={scss.icon} />
      <span className={titleClass.join(' ')}>{props.title}</span>
      <span className={scss.text}>{props.description}</span>
    </div>
  );
}

export default Card;
