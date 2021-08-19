import { Component, OnInit, Input } from '@angular/core';
import { animate, state, style, transition, trigger } from '@angular/animations'

export interface option {
  option: string,
  checked: boolean
}

@Component({
  selector: 'app-footer',
  templateUrl: './footer.component.html',
  styleUrls: ['./footer.component.scss'],
  animations: [
    trigger('fadeInOut',[
      state('void', style({
        opacity: '0'
      })),
      transition('void <=>*', animate(100))
    ])
  ]
})
export class FooterComponent implements OnInit {

  @Input() total!: number
  options: option[] = [
    { option: 'Все', checked: false },
    { option: 'Один', checked: false },
    { option: 'Несколько', checked: false },
  ]
  isEditFilterShow = false

  constructor() { }

  toggleEditFilter() {
    this.isEditFilterShow = !this.isEditFilterShow
  }

  reset() {
    for (let opt of this.options) {
      opt.checked = false
    }
  }

  checkedHandler(index: number): void {
    this.options[index].checked = !this.options[index].checked
  }

  ngOnInit(): void {
  }

}
