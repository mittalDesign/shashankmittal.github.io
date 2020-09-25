import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';


import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { NavigationComponent } from './navigation/navigation.component';
import { TimelineComponent } from './timeline/timeline.component';
import { ContentComponent } from './content/content.component';
import { MainPageComponent } from './main-page/main-page.component';
import { RecommendationsComponent } from './recommendations/recommendations.component';


@NgModule({
  declarations: [
    AppComponent,
    NavigationComponent,
    TimelineComponent,
    ContentComponent,
    MainPageComponent,
    RecommendationsComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
