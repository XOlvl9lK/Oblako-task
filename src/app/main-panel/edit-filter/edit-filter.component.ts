import { Component, EventEmitter, HostListener, Input, OnInit, Output } from '@angular/core'
import { option } from '../filters/footer/footer.component'

@Component({
  selector: 'app-edit-filter',
  templateUrl: './edit-filter.component.html',
  styleUrls: ['./edit-filter.component.scss']
})
export class EditFilterComponent implements OnInit {

  @Input() type!: 'users' | 'events'
  @Input() options!: option[]
  @Input() additionalOptions?: option[]
  @Input() checkedHandler!: (index: number, type?: 'opt' | 'addOpt') => void
  @Input() top!: string
  @Output() emitter = new EventEmitter

  constructor() { }

  @HostListener('window:click')
  hideFilter(): void {
    this.emitter.emit()
  }

  ngOnInit(): void {}

}
