import { AfterViewInit, Component, Input, OnInit } from '@angular/core'
import { animate, state, style, transition, trigger } from '@angular/animations'
import { Store } from '@ngrx/store'
import { IeditableEventState } from '../../../store/state/editableEvents.state'
import { changeTitle } from '../../../store/actions/editableEvent.actions'
import { EventService } from '../../../services/EventService'

@Component({
  selector: 'app-event',
  templateUrl: './event.component.html',
  styleUrls: ['./event.component.scss'],
  animations: [
    trigger('fadeInOut', [
      state('void', style({
        opacity: '0'
      })),
      transition('void <=> *', animate(100))
    ])
  ]
})
export class EventComponent implements OnInit {

  @Input() active!: boolean
  editableEvent!: IeditableEventState
  eventName: string = 'Введите название мероприятия'
  chosenTrainer: string = ''
  chosenTime: string = ''
  isTrainerListVisible: boolean = false

  randomId: number = Math.random()

  constructor(private store: Store<{ editableEvent: IeditableEventState }>) {
      store.select('editableEvent').subscribe((data: IeditableEventState) => this.editableEvent = data)
      this.chosenTime = this.editableEvent.time
      if (this.editableEvent.title !== '') {
        this.eventName = this.editableEvent.title
      }
  }

  toggleTrainerList(): void {
    this.isTrainerListVisible = !this.isTrainerListVisible
  }

  choseTrainer(name: string): void {
    if (name) {
      this.chosenTrainer = name
      this.toggleTrainerList()
    } else {
      this.toggleTrainerList()
    }
  }

  clearTime() : void {
    this.chosenTime = ''
    if (this.active) {
      EventService.changeEditableEventTime(this.store, '')
    }
  }

  onBlur() {
    if (!this.eventName) this.eventName = 'Введите название мероприятия'
  }

  onFocus() {
    if (this.eventName === 'Введите название мероприятия') this.eventName = ''
  }

  checkDescription(): boolean {
    return this.eventName !== 'Введите название мероприятия';
  }

  onTitleChange() {
    if (this.active) {
      this.store.dispatch(changeTitle({ title: this.eventName }))
    }
  }

  onTimeChange(time: string) {
    if (this.active) {
      EventService.changeEditableEventTime(this.store, time)
    }
  }

  ngOnInit(): void {
    if (!this.active) {
      this.chosenTime = ''
      this.eventName = 'Введите название мероприятия'
    }
  }
}
