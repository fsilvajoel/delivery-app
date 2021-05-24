/* eslint-disable react/destructuring-assignment */
import styles from './Container.module.scss';

export enum listBackground {
  bkgdDarkGray = 'bkgdDarkGray',
  bkgdGray = 'bkgdGray',
  bkgdLightGray = 'kgdLightGray',
  bkgdWhite = 'bkgdWhite',
}

interface ContainerProps {
  backgroundColor: keyof typeof listBackground;
  className?: string;
  children: React.ReactNode;
  id: string;
  noPadding?: boolean;
}

const Container: React.FC<ContainerProps> = (props) => {
  const ContainerClass = [styles.section, styles[props.backgroundColor]];
  if (props.className) ContainerClass.push(props.className);
  if (props.noPadding) ContainerClass.push(styles.noPadding);
  return (
    <section id={props.id} className={ContainerClass.join(' ')}>
      {props.children}
    </section>
  );
};
export default Container;
