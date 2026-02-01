export const ROUTES = {
  HOME: '/',
  ABOUT: '/a-propos',
  ACTIONS: '/nos-actions',
  EVENTS: '/evenements',
  EVENT_DETAIL: '/evenements/:eventId',
  PARTNERS: '/partenaires',
  SUPPORT: '/nous-soutenir',
  CONTACT: '/contact',
  COMING_SOON: '/coming-soon',
  BILLETTERIE: '/billetterie',
} as const

export function eventDetail(eventId: string): string {
  return `/evenements/${eventId}`
}
