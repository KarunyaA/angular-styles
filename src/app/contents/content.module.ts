import { NgModule, Provider } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HeadingComponent } from './heading/heading.component';
import { ParagraphComponent } from './paragraph/paragraph.component';
import { CONTENT_MAPPINGS } from '../constants';

export const CONTENT_COMPONENTS = [HeadingComponent,ParagraphComponent];

export const CONTENT_MAPPINGS_PROVIDER: Provider = [
  {
    provide: CONTENT_MAPPINGS,
    useValue: {
      'heading-1': HeadingComponent,
      'paragraph': ParagraphComponent
    }
  }
];

@NgModule({
  imports: [CommonModule],
  declarations: [...CONTENT_COMPONENTS, HeadingComponent, ParagraphComponent],
  entryComponents: [...CONTENT_COMPONENTS],
  providers: [...CONTENT_MAPPINGS_PROVIDER]
})
export class ContentComponentsModule {}
