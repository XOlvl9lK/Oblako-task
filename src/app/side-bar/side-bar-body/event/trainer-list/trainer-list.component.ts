import { Component, EventEmitter, HostListener, Input, OnInit, Output } from '@angular/core'
import { ItrainerState } from '../../../../store/state/trainers.state'
import { Observable } from 'rxjs'
import { Store } from '@ngrx/store'

@Component({
  selector: 'app-trainer-list',
  templateUrl: './trainer-list.component.html',
  styleUrls: ['./trainer-list.component.scss']
})
export class TrainerListComponent implements OnInit {
  trainers$: Observable<ItrainerState[]>

  constructor(private store: Store<{ trainers: ItrainerState[] }>) {
    this.trainers$ = store.select('trainers')
  }

  @HostListener('window:click')
  hideTrainerList(): void {
    this.chose.emit('')
  }

  @Output() chose = new EventEmitter()

  ngOnInit(): void {}

}
