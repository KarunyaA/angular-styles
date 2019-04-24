import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-heading',
  templateUrl: './heading.component.html',
  styleUrls: ['./heading.component.css']
})
export class HeadingComponent {

   public text: string;
  public type: string;

  contentOnCreate(values ): void {
    this.text = values.text;
    this.type = values.type;
  }

}