import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-filters',
  templateUrl: './filters.component.html',
  styleUrls: ['./filters.component.scss']
})
export class FiltersComponent implements OnInit {

  programs: string[] = ['Все', 'Страховые', 'Маркетинговые']
  period: string[] = ['Все', '2019', '2020', '2021']
  status: string[] = ['Все', 'Прошедшие', 'Активные']

  constructor() { }

  ngOnInit(): void {
  }

}
