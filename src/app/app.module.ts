import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FlexLayoutModule } from '@angular/flex-layout';
import { MatCardModule } from '@angular/material/card';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { TutorialItemComponent } from './tutorial-item/tutorial-item.component';
import { TutorialListComponent } from './tutorial-list/tutorial-list.component';
import { TutorialDetailPageComponent } from './tutorial-detail-page/tutorial-detail-page.component';

@NgModule({
  declarations: [
    AppComponent,
    TutorialItemComponent,
    TutorialListComponent,
    TutorialDetailPageComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    FlexLayoutModule,
    MatCardModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
