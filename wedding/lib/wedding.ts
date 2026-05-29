export const wedding = {
  groomFirstName: 'Бобозариф',
  brideFirstName: 'Нигина',
  groomFamily: 'Алиризаевых',
  brideFamily: 'Фархадовых',
  date: new Date('2026-06-05T18:00:00+05:00'),
  dateDisplay: '5 июня 2026',
  dateShort: '05.06.2026',
  dayOfWeek: 'пятница',
  time: '18:00',
  venue: 'Гранд Султан',
  venueType: 'Ресторан',
  city: 'Самарканд',
  coords: { lat: 39.684395, lng: 66.985071 },
  dressCode: {
    label: 'Дресс-код',
    description: 'Праздничный · приглушённые тёплые тона',
    palette: ['#1F3A2E', '#B08D57', '#2A2520', '#F4EDE0'],
  },
  programme: [
    { time: '18:00', title: 'Сбор гостей', subtitle: 'Welcome-зона, фотозона' },
    { time: '19:00', title: 'Никох', subtitle: 'Бракосочетание' },
    { time: '20:00', title: 'Дастархан', subtitle: 'Ужин и поздравления' },
    { time: '22:00', title: 'Танцы', subtitle: 'Праздник до полуночи' },
  ],
} as const

export const yandexMapsUrl = `https://yandex.ru/maps/?pt=${wedding.coords.lng},${wedding.coords.lat}&z=17&l=map`
export const yandexNavigateUrl = `yandexnavi://build_route_on_map?lat_to=${wedding.coords.lat}&lon_to=${wedding.coords.lng}`

export function normalizeGuestName(raw: string | null | undefined): string {
  if (!raw) return ''
  const cleaned = raw
    .replace(/[<>{}"'`\\]/g, '')
    .replace(/\s+/g, ' ')
    .trim()
    .slice(0, 60)
  return cleaned
}
