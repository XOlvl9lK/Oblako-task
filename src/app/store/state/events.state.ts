export interface IeventState {
  id: number,
  day: number,
  month: string,
  time: string,
  year: number,
  title: string,
  totalMembers: number,
  trainer: string,
  progress: number,
  ended: boolean
}

export interface InewEvent {
  date: string,
  title: string
}

export const initialEventsState: IeventState[] = [
  {
    id: 1,
    day: 23,
    month: 'декабря',
    time: '9:00',
    year: 2020,
    title: 'Страхование с заботой о клиенте',
    totalMembers: 12,
    trainer: '',
    progress: 95,
    ended: false
  },
  {
    id: 2,
    day: 14,
    month: 'ноября',
    time: '9:30',
    year: 2020,
    title: 'Главные правила продаж',
    totalMembers: 10,
    trainer: '',
    progress: 91,
    ended: false
  },
  {
    id: 3,
    day: 19,
    month: 'октября',
    time: '14:30',
    year: 2020,
    title: 'Первичное обучение КС',
    totalMembers: 8,
    trainer: '',
    progress: 86,
    ended: false
  },
  {
    id: 4,
    day: 10,
    month: 'октября',
    time: '16:00',
    year: 2020,
    title: 'Вторичное обучение КС',
    totalMembers: 18,
    trainer: '',
    progress: 82,
    ended: false
  },
  {
    id: 5,
    day: 5,
    month: 'октября',
    time: '15:00',
    year: 2020,
    title: 'Вклады: теория и практика',
    totalMembers: 6,
    trainer: '',
    progress: 79,
    ended: true
  },
  {
    id: 6,
    day: 27,
    month: 'сентября',
    time: '11:00',
    year: 2020,
    title: 'Очное обучение менеджеров',
    totalMembers: 20,
    trainer: '',
    progress: 73,
    ended: true
  },
]
