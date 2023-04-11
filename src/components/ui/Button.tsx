import { ReactNode } from 'react';
import Link from 'next/link';
import styles from './button.module.css';

interface IProps {
  link: string;
  children?: ReactNode;
}

function Button(props: IProps) {
  const { link, children } = props;
  return (
    <Link href={link} className={styles.btn}>
      {children}
    </Link>
  );
}

export default Button;
