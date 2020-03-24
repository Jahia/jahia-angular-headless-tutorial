import { Component, OnInit } from '@angular/core';
import { Input } from '@angular/core';

@Component({
  selector: 'app-tutorial-item',
  templateUrl: './tutorial-item.component.html',
  styleUrls: ['./tutorial-item.component.css']
})
export class TutorialItemComponent implements OnInit {
  @Input() tutorial;

  constructor() { }

  ngOnInit(): void {
  }

}
