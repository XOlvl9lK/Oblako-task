import { Component, HostListener, Input, OnInit } from '@angular/core'
import { Calendar } from './calendar'
import { animate, state, style, transition, trigger } from '@angular/animations'
import { Store } from '@ngrx/store'
import { IeditableEventState } from '../store/state/editableEvents.state'
import { EventService } from '../services/EventService'

@Component({
  selector: 'app-date-picker',
  templateUrl: './date-picker.component.html',
  styleUrls: ['./date-picker.component.scss'],
  animations: [
    trigger('fadeInOut', [
      state('void', style({
        opacity: '0'
      })),
      transition('void <=> *', animate(200))
    ])
  ]
})
export class DatePickerComponent implements OnInit {

  @Input() active!: boolean
  editableEvent!: IeditableEventState
  isCalendarShow: boolean = false
  selectedDate: string = ''
  randomId: number = Math.random()
  calendar: Calendar = new Calendar()
  today = {
    date: new Date().getDate(),
    month: new Date().getMonth(),
    year: new Date().getFullYear()
  }


  constructor(private store: Store<{ editableEvent: IeditableEventState }>) {
    store.select('editableEvent').subscribe(data => this.editableEvent = data)
    this.selectedDate = EventService.editableToCalendarDateConcat(this.editableEvent)
  }

  toggleCalendarContainer() {
    this.isCalendarShow = !this.isCalendarShow
  }

  @HostListener('window:click')
  closeCalendar() {
    this.isCalendarShow = false
  }

  checkIsToday() {
    return this.today.month === this.calendar.currentMonthIndex && this.today.year === this.calendar.currentYear;
  }

  checkIsInactive(i: number, day: number) {
    return i + 1 < day || i > this.calendar.totalDaysOfCurrentMonth + this.calendar.daysOfPrevMonth(this.calendar.startOfMonth).length - 1
  }

  setSelectedDay(day: number) {
    this.selectedDate = day.toString() + ' ' + this.calendar.declinationOfMonth[this.calendar.currentMonthIndex].substr(0, 3) + ' ' + this.calendar.currentYear
    if (this.active) {
      EventService.changeEditableEventDate(this.store, day, this.calendar.declinationOfMonth[this.calendar.currentMonthIndex], this.calendar.currentYear)
    }
  }

  clearSelectedDay() {
    this.selectedDate = ''
    if (this.active) {
      EventService.changeEditableEventDate(this.store, 0, '', 0)
    }
  }


  ngOnInit(): void {
    if (!this.active) {
      this.clearSelectedDay()
    }
  }

}
