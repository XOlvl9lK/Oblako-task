import { Component, OnInit, Input, HostListener } from '@angular/core'
import { animate, state, style, transition, trigger } from '@angular/animations'

@Component({
  selector: 'app-select',
  templateUrl: './select.component.html',
  styleUrls: ['./select.component.scss'],
  animations: [
    trigger('fadeInOut', [
      state('void', style({
        opacity: '0'
      })),
      transition('void <=> *', animate(200))
    ])
  ]
})
export class SelectComponent implements OnInit {
  @Input() title!: string
  @Input() variants!: string[]
  @Input() marginLeft!: string
  @Input() width!: string
  currentState: string = 'Все'
  isDropShow: boolean = false

  constructor() { }

  dropHandler(): void {
    this.isDropShow = !this.isDropShow
  }

  setCurrentState(variant: string): void {
    if (variant !== 'close') {
      this.currentState = variant
      this.isDropShow = false
    } else {
      this.isDropShow = false
    }
  }

  ngOnInit(): void {
  }

}
