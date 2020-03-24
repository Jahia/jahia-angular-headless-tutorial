import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { TutorialListComponent } from './tutorial-list/tutorial-list.component';

const routes: Routes = [
  { path: '', pathMatch: 'full', component: TutorialListComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
