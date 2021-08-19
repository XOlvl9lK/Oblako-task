import { Component, Input, OnInit } from '@angular/core'
import { IUser } from '../../../store/state/users.state'

@Component({
  selector: 'app-user',
  templateUrl: './user.component.html',
  styleUrls: ['./user.component.scss']
})
export class UserComponent implements OnInit {

  @Input() user!: string
  @Input() paddingLeft!: string

  constructor() { }

  ngOnInit(): void {
  }

}
