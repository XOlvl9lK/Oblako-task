import { Component, Input, OnInit } from '@angular/core'
import { mockUsers } from '../../../store/state/users.state'
import { CdkDragDrop, moveItemInArray } from '@angular/cdk/drag-drop'

@Component({
  selector: 'app-current-participants',
  templateUrl: './current-participants.component.html',
  styleUrls: ['./current-participants.component.scss']
})
export class CurrentParticipantsComponent implements OnInit {

  @Input() currentUsers!: string[]
  @Input() drop!: (e: CdkDragDrop<string[]>) => void

  constructor() { }


  ngOnInit(): void {
  }

}
