import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { items } from '../../data/items';

@Component({
  selector: 'app-tutorial-detail-page',
  templateUrl: './tutorial-detail-page.component.html',
  styleUrls: ['./tutorial-detail-page.component.css']
})
export class TutorialDetailPageComponent implements OnInit {
  tutorial;

  constructor(
    private route: ActivatedRoute
  ) { }

  ngOnInit(): void {
    this.route.paramMap.subscribe(params => {
      const tutorialId = params.get('tutorialId');
      this.tutorial = items.find((tutorial => tutorial.id === tutorialId));
    })
  }

  getFormattedDate(): string {
    return (this.tutorial && this.tutorial.publishedDate ? new Date(this.tutorial.publishedDate).toLocaleDateString() : '');
  }

}
