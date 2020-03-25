import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { TutorialListComponent } from './tutorial-list/tutorial-list.component';
import { TutorialDetailPageComponent } from './tutorial-detail-page/tutorial-detail-page.component';

const routes: Routes = [
  { path: '', pathMatch: 'full', component: TutorialListComponent},
  { path: 'tutorial/:tutorialId', component: TutorialDetailPageComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
