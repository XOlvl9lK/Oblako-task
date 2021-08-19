import { Component, OnInit } from '@angular/core';
import { mockUsers } from '../../store/state/users.state'
import { CdkDragDrop, moveItemInArray, transferArrayItem } from '@angular/cdk/drag-drop'

@Component({
  selector: 'app-side-bar-participants',
  templateUrl: './side-bar-participants.component.html',
  styleUrls: ['./side-bar-participants.component.scss']
})
export class SideBarParticipantsComponent implements OnInit {
  availableUsers: string[] = mockUsers
  currentUsers: string[] = []

  constructor() {
  }

  drop(e: CdkDragDrop<string[]>) {
    if (e.previousContainer !== e.container) {
      transferArrayItem(e.previousContainer.data, e.container.data, e.previousIndex, e.currentIndex)
    } else {
      moveItemInArray(e.container.data, e.previousIndex, e.currentIndex)
    }
  }


  ngOnInit(): void {
  }

}
