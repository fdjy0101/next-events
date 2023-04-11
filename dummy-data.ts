const DUMMY_EVENTS = [
  {
    id: 'e1',
    title: '모두를 위한 프로그래밍',
    description:
      '누구든 코드를 배울 수 있어요 이 라이브 세션에서는 코드를 작성하는 기본 스킬과 입문자에게 프로그래밍을 시작하는 방법을 알려드립니다.',
    location: '고양시',
    date: '2023-03-12',
    image: 'images/coding-event.jpg',
    isFeatured: false,
  },
  {
    id: 'e2',
    title: '내향적인 사람을 위한 모임',
    description:
      '내성적인 사람에게 모임은 재미 없다는 것을 알고 있지만 그 것이 바로 이곳에 와야하는 이유입니다.',
    location: '용산구',
    date: '2023-04-30',
    image: 'images/introvert-event.jpg',
    isFeatured: true,
  },
  {
    id: 'e3',
    title: '외향적인 사람을 위한 모임',
    description:
      '일반적으로 사람을 대하기 위해서 도움을 받을 필요가 없을겁니다. 그 에너지를 올바른 관계에 집중하고 개선하는 방법에 대해서 알려드립니다.',
    location: '마포구',
    date: '2023-04-10',
    image: 'images/extrovert-event.jpg',
    isFeatured: true,
  },
];

export function getFeaturedEvents() {
  return DUMMY_EVENTS.filter((event) => event.isFeatured);
}

export function getAllEvents() {
  return DUMMY_EVENTS;
}

export function getFilteredEvents(dateFilter: { year: number; month: number }) {
  const { year, month } = dateFilter;

  return DUMMY_EVENTS.filter((event) => {
    const eventDate = new Date(event.date);
    return (
      eventDate.getFullYear() === year && eventDate.getMonth() === month - 1
    );
  });
}

export function getEventById(id: string) {
  return DUMMY_EVENTS.find((event) => event.id === id);
}
