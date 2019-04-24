import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';
import { ContentComponentsModule } from './contents/content.module';
import { AppComponent } from './app.component';
import { RenderengineService } from './renderengine.service';

@NgModule({
  imports:      [ BrowserModule, FormsModule, ContentComponentsModule ],
  declarations: [ AppComponent ],
  bootstrap:    [ AppComponent ],
  providers: [RenderengineService]
})
export class AppModule { }
