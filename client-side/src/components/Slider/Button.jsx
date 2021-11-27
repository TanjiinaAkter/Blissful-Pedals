import { Link } from 'react-router-dom';
import styles from './style.module.css';

const Button = ({ children, isSecondary, path }) => (
  <Link to={path || '/'} className={isSecondary ? styles.btnSecondary : styles.btn}>
    {children}
  </Link>
);

export default Button;
