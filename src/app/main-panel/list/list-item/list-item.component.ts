import { Component, Input, OnInit } from '@angular/core'
import { animate, state, style, transition, trigger } from '@angular/animations'
import { IeventState } from '../../../store/state/events.state'
import { EventService } from '../../../services/EventService'

@Component({
  selector: 'app-list-item',
  templateUrl: './list-item.component.html',
  styleUrls: ['./list-item.component.scss'],
  animations: [
    trigger('fadeInOut', [
      state('void', style({
        opacity: '0'
      })),
      transition('void <=> *', animate(100))
    ])
  ]
})
export class ListItemComponent implements OnInit {

  @Input() item!: IeventState
  date!: string
  isContextModalShow: boolean = false

  constructor() {

  }

  contextModalHandler() {
    this.isContextModalShow = !this.isContextModalShow
  }

  ngOnInit(): void {
    this.date = EventService.toItemDateConcat(this.item)
  }

}
