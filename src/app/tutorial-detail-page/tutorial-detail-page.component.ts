import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { JahiaContentService } from '../jahia-content.service';

@Component({
  selector: 'app-tutorial-detail-page',
  templateUrl: './tutorial-detail-page.component.html',
  styleUrls: ['./tutorial-detail-page.component.css']
})
export class TutorialDetailPageComponent implements OnInit {
  tutorial;

  constructor(
    private route: ActivatedRoute,
    private contentService: JahiaContentService
  ) { }

  ngOnInit(): void {
    this.route.paramMap.subscribe(params => {
      const tutorialId = params.get('tutorialId');
      this.tutorial = this.contentService.getTutorial(tutorialId);
    })
  }

  getFormattedDate(): string {
    return this.tutorial && this.tutorial.publishedDate
      ? new Date(this.tutorial.publishedDate).toLocaleDateString()
      : '';
  }
}
