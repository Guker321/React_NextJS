import { HtagProps } from './Htag.props';
import styles from './Htag.module.css';

// tag & children это входящие параметры в наш компонент а сами свойста мы расписали в Htag.props.ts;
// Через switch можно рендерить то что нам нужно в зависимости от значения tag(h1 h2 h3);
export const Htag = ({ tag, children }: HtagProps): JSX.Element => {
  switch (tag) {
    case 'h1':
      return <h1 className={styles.h1}>{children}</h1>;
    case 'h2':
      return <h2 className={styles.h2}>{children}</h2>;
    case 'h3':
      return <h3 className={styles.h3}>{children}</h3>;
    default:
      return <></>;
  }
};

export default Htag;
