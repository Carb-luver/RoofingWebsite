import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';

import { TopBarComponent } from './top-bar/top-bar.component';
import { AppComponent } from './app.component';
import { ContentComponent } from './content/content.component';

@NgModule({
  imports: [BrowserModule, FormsModule],
  declarations: [AppComponent, TopBarComponent, ContentComponent],
  bootstrap: [AppComponent],
})

export class AppModule {}
