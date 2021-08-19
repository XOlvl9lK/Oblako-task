import { Component, Input, OnInit } from '@angular/core'
import { CdkDragDrop } from '@angular/cdk/drag-drop';
import { option } from '../../../main-panel/filters/footer/footer.component'
import { animate, state, style, transition, trigger } from '@angular/animations'


@Component({
  selector: 'app-available-participants',
  templateUrl: './available-participants.component.html',
  styleUrls: ['./available-participants.component.scss'],
  animations: [
    trigger('fadeInOut',[
      state('void', style({
        opacity: '0'
      })),
      transition('void <=>*', animate(100))
    ])
  ]
})
export class AvailableParticipantsComponent implements OnInit {

  isEditFilterShow = false
  groups: string[] = ['Администраторы', 'Пользователи', 'Операторы']
  positions: string[] = ['Менеджер', 'Продавец', 'Консультант']
  experience: string[] = ['1-3 года', '3-6 лет', '6-10 лет']
  options: option[] = [
    { option: 'Поиск', checked: false },
    { option: 'Группа', checked: false },
    { option: 'Должность', checked: false },
    { option: 'Стаж', checked: false },
  ]
  additionalOptions: option[] = [
    { option: 'Подазделение', checked: false },
    { option: 'Округ', checked: false },
    { option: 'Город', checked: false },
  ]

  @Input() availableUsers!: string[]
  @Input() drop!: (e: CdkDragDrop<string[]>) => void

  constructor() {}

  checkedHandler(index: number, type?: 'opt' | 'addOpt') {
    if (type === 'opt') {
      this.options[index].checked = !this.options[index].checked
    } else {
      this.additionalOptions[index].checked = !this.additionalOptions[index].checked
    }
  }

  toggleEditFilter() {
    this.isEditFilterShow = !this.isEditFilterShow
  }

  ngOnInit(): void {
  }

}
