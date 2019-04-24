import { Component, OnInit, ViewChild, ViewContainerRef, Input, Inject } from '@angular/core';
import { from } from 'rxjs';
import { concatMap } from 'rxjs/operators';
import { CONTENT_MAPPINGS } from './constants';
import { RenderengineService } from './renderengine.service';

export const content = {
  "data": {
    "areas": [{
      "sections": [{
        "htmltypes": [
          {
            "type": "heading-1",
            "text": "This is a sample heading"
          },
          {
            "type": "paragraph",
            "text": "This is a sample paragraph with styles",
            "inlineStyle": [{
              "style": "BOLD",
              "offset": 10,
              "length": 6
            }]
          },
          {
            "type": "paragraph",
            "text": "This is a sample paragraph without styles",
            "inlineTags": [],
            "inlineStyle": []
          }
        ]
      }]
    }]
  }
}

@Component({
  selector: 'my-app',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})


export class AppComponent implements OnInit {
  @ViewChild('oneColumn', { read: ViewContainerRef }) view: ViewContainerRef;

  constructor(private service: RenderengineService, @Inject(CONTENT_MAPPINGS) private contentMappings: any) { }


  ngOnInit() {
    this.service.setRootViewContainerRef(this.view);
    from(content.data.areas).pipe(
      concatMap(sectionBlock => sectionBlock.sections),
      concatMap(obj => obj.htmltypes)
    ).subscribe(response => {
      const type = this.contentMappings[response.type];
      this.service.createDynamicComponent(response,type);
    });

  }


}
