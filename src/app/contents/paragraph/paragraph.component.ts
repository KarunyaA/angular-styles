import { Component, ViewChild, ViewContainerRef, Inject, HostBinding, Input } from '@angular/core';
import { RenderengineService } from '../../renderengine.service';
import { CONTENT_MAPPINGS } from '../../constants';

@Component({
  selector: 'bw-information-paragraph',
  templateUrl: './paragraph.component.html',
  styleUrls: ['./paragraph.component.css']
})
export class ParagraphComponent {
  @ViewChild('embeddedView', { read: ViewContainerRef }) embeddedView: ViewContainerRef;

  public text: string;

  @HostBinding('class.font-italic') isItalic: boolean;
  @HostBinding('class.font-bold') isBold: boolean;

  constructor(
    private renderEngineService: RenderengineService,
    @Inject(CONTENT_MAPPINGS) private contentMappings: any
  ) { }

  getText(offset, length, text: string) {
    return text.substr(offset, length);
  }

  contentOnCreate(values): void {
    if (values.inlineStyle.length > 0) {
      values.inlineStyle.forEach(obj => {
        console.log(obj);
       const offsetText =  this.getText(obj.offset,obj.length,values.text);
       console.log(offsetText);
       // Im getting the offsetText here how do i apply style for this text alone
        if (obj.style === "BOLD") {
          // Here i have to apply style for the text based on the offset i.e offset will gives the starting point and length will be the end point. 
          this.isBold = true;
          this.isItalic = true;
          this.text = values.text;
        }
      })
    } else {
      this.isBold = false;
      this.text = values.text;
    }
  }
}
