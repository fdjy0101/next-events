import styles from './event-item.module.css';
import Button from '../ui/Button';
import DateIcon from '../icons/DateIcon';
import AddressIcon from '../icons/AddressIcon';
import ArrowRightIcon from '../icons/ArrowRightIcon';

interface IProps {
  id: string;
  title: string;
  image: string;
  date: string;
  location: string;
}

function EventItem(props: IProps) {
  const { id, title, image, date, location } = props;
  const formattedDate = new Date(date).toLocaleDateString();
  const exploreLink = `/events/${id}`;

  return (
    <li className={styles.item}>
      <img src={`/${image}`} alt={title} />
      <div className={styles.content}>
        <div className={styles.summary}>
          <h2>{title}</h2>
        </div>
        <div className={styles.date}>
          <DateIcon />
          <time>{formattedDate}</time>
        </div>
        <div className={styles.address}>
          <AddressIcon />
          <address>{location}</address>
        </div>
        <div className={styles.actions}>
          <Button link={exploreLink}>
            <span>이벤트 보기</span>
            <span className={styles.icon}>
              <ArrowRightIcon />
            </span>
          </Button>
        </div>
      </div>
    </li>
  );
}

export default EventItem;
