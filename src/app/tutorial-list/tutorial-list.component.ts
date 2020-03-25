import { Component, OnInit } from '@angular/core';
import { JahiaContentService } from '../jahia-content.service';

@Component({
  selector: 'app-tutorial-list',
  templateUrl: './tutorial-list.component.html',
  styleUrls: ['./tutorial-list.component.css']
})
export class TutorialListComponent implements OnInit {
  tutorials;

  constructor(
    private contentService: JahiaContentService
  ) { }

  ngOnInit(): void {
    this.contentService.getTutorials().then(tutorials => {
      this.tutorials = tutorials;
    });
  }

}
