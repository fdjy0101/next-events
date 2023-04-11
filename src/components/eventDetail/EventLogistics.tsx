import LogisticsItem from './logistics-item';
import styles from './event-logistics.module.css';
import DateIcon from '../icons/DateIcon';
import AddressIcon from '../icons/AddressIcon';

interface IProps {
  date: string;
  address: string;
  image: string;
  imageAlt: string;
}

function EventLogistics(props: IProps) {
  const { date, address, image, imageAlt } = props;

  const formattedDate = new Date(date).toLocaleDateString();
  const addressText = address.replace(', ', '\n');

  return (
    <section className={styles.logistics}>
      <div className={styles.image}>
        <img src={`/${image}`} alt={imageAlt} />
      </div>
      <ul className={styles.list}>
        <LogisticsItem icon={DateIcon}>
          <time>{formattedDate}</time>
        </LogisticsItem>
        <LogisticsItem icon={AddressIcon}>
          <address>{addressText}</address>
        </LogisticsItem>
      </ul>
    </section>
  );
}

export default EventLogistics;
