import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-home-view',
  templateUrl: './home-view.component.html',
  styleUrls: ['./home-view.component.css']
})
export class HomeViewComponent implements OnInit {

  constructor() { }
  data = [
    {name: 'Lavdrim ', ages: 25, job: 'Progamer'},
    {name: 'Drito ', ages: 25, job: 'desing' },
    {name: 'Agolli ', ages: 25, job: 'Lopar' }
  ];

  ngOnInit(): void {
  }

}
