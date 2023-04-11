import styles from './event-summary.module.css';

interface IProps {
  title: string;
}

function EventSummary(props: IProps) {
  const { title } = props;

  return (
    <section className={styles.summary}>
      <h1>{title}</h1>
    </section>
  );
}

export default EventSummary;
