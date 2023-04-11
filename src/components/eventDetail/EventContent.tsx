import { ReactNode } from 'react';
import styles from './event-content.module.css';

interface IProps {
  children?: ReactNode;
}

function EventContent(props: IProps) {
  const { children } = props;
  return <section className={styles.content}>{children}</section>;
}

export default EventContent;
