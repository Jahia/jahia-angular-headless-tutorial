import { Component, OnInit } from '@angular/core';
import { items } from '../../data/items';

@Component({
  selector: 'app-tutorial-list',
  templateUrl: './tutorial-list.component.html',
  styleUrls: ['./tutorial-list.component.css']
})
export class TutorialListComponent implements OnInit {
  tutorials = items;

  constructor() { }

  ngOnInit(): void {
  }

}
