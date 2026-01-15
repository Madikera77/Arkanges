export interface Event {
  id: string;
  date: Date;
  image: string;
  ticketWidgetId?: string;
}

export const events: Event[] = [
  {
    id: 'comedy',
    date: new Date('2026-02-22'),
    image: '/images/rions.png',
    ticketWidgetId: '14644',
  },
  {
    id: 'concert',
    date: new Date('2026-05-30'),
    image: '/images/concert.png',
  },
  {
    id: 'gala',
    date: new Date('2099-12-31'), // Date future pour événements à venir sans date précise
    image: '/images/events.png',
  },
  {
    id: 'market',
    date: new Date('2099-12-31'), // Date future pour événements à venir sans date précise
    image: '/images/events.png',
  },
];

export const getUpcomingEvents = (): Event[] => {
  const now = new Date();
  return events.filter((event) => event.date > now);
};

export const getEventById = (id: string): Event | undefined => {
  return events.find((event) => event.id === id);
};
