import { Component, EventEmitter, HostListener, Input, OnInit, Output } from '@angular/core'

@Component({
  selector: 'app-drop-down',
  templateUrl: './drop-down.component.html',
  styleUrls: ['./drop-down.component.scss']
})
export class DropDownComponent implements OnInit {

  @Input() variants!: string[]
  @Output() select = new EventEmitter()

  constructor() { }

  @HostListener('window:click')
  hideDrop(): void {
    this.select.emit('close')
  }

  ngOnInit(): void {}

}
