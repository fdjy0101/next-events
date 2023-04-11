import React from 'react';
import { useRouter } from 'next/router';
import { getEventById } from '../../../dummy-data';
import EventSummary from '@/components/eventDetail/EventSummary';
import EventLogistics from '@/components/eventDetail/EventLogistics';
import EventContent from '@/components/eventDetail/EventContent';

function EventDetailPage() {
  const router = useRouter();
  const { eventId } = router.query;
  const event = getEventById(eventId as string);

  if (!event) {
    return <p>이벤트가 없습니다.</p>;
  }

  return (
    <>
      <EventSummary title={event.title} />
      <EventLogistics
        address={event.location}
        date={event.date}
        image={event.image}
        imageAlt={event.title}
      />
      <EventContent>
        <p>{event.description}</p>
      </EventContent>
    </>
  );
}

export default EventDetailPage;
