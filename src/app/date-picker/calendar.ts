export class Calendar {
  daysMap: string[] = ['Воскресенье', 'Понедельник', 'Вторник', 'Среда', 'Четверг', 'Пятница', 'Суббота']
  dayMapAlias: string[] = ['Пн', 'Вт', 'Ср', 'Чт', 'Пт', 'Сб', 'Вс']
  monthMap: string[] = ['Январь', 'Февраль', 'Март', 'Апрель', 'Май', 'Июнь', 'Июль', 'Август', 'Сентябрь', 'Октябрь', 'Ноябрь', 'Декабрь']
  declinationOfMonth: string[] = ['января', 'февраля', 'марта', 'апреля', 'мая', 'июня', 'июля', 'августа', 'сентября', 'октября', 'ноября', 'декабря']

  currentMonthIndex: number = new Date().getMonth()
  currentMonth: string = this.monthMap[this.currentMonthIndex]
  currentYear: number = new Date().getFullYear()
  startOfMonth: number = this.getStartOfMonth() + 1
  totalDaysOfCurrentMonth: number = this.getNumberOfDaysInMonth(this.currentYear, this.currentMonthIndex)
  totalDays: number[] = []


  constructor() {
    this.createMappedDate(this.totalDaysOfCurrentMonth)
  }


  scrollMonths(direction: 'right' | 'left'): void {
    if (direction === 'right') {
      ++this.currentMonthIndex
    } else {
      --this.currentMonthIndex
    }
    if (this.currentMonthIndex > 11) {
      this.currentMonthIndex = 0
      ++this.currentYear
    } else if (this.currentMonthIndex < 0) {
      this.currentMonthIndex = 11
      --this.currentYear
    }
    this.currentMonth = this.monthMap[this.currentMonthIndex]

    this.startOfMonth = this.getStartOfMonth() + 1
    this.createMappedDate(this.totalDaysOfCurrentMonth)
  }

  getStartOfMonth(): number {
    let day = new Date(this.currentYear, this.currentMonthIndex).getDay()
    if (day === 0) {
      day = 6
    } else {
      day = day - 1
    }
    return day
  }

  getNumberOfDaysInMonth(year: number, monthIndex: number): number {
    return 40 - new Date(year, monthIndex, 40).getDate()
  }

  daysOfPrevMonth(pos: number): number[] {
    let days: number[] = []
    let prevMoth = this.currentMonthIndex - 1
    let numberOfDaysOfPrevMonth = this.getNumberOfDaysInMonth(this.currentYear, prevMoth)
    for (let i = numberOfDaysOfPrevMonth; i > numberOfDaysOfPrevMonth - pos + 1; i--) {
      days.push(i)
    }
    return days.reverse()
  }

  daysOfNextMonth(pos: number): number[] {
    let days: number[] = []
    let length = 43 - (pos + this.totalDaysOfCurrentMonth)
    for (let i = 1; i <= length; i++) {
      days.push(i)
    }
    return days
  }

  createMappedDate(pos: number) {
    let days: number[]
    let prev: number[] = this.daysOfPrevMonth(this.startOfMonth)
    let next: number[] = this.daysOfNextMonth(this.startOfMonth)
    days = [...prev]
    for (let i = 1; i <= pos; i++) {
      days.push(i)
    }
    days = [...days, ...next]

    this.totalDays = days
  }

}
