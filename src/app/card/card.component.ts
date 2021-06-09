import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-card',
  templateUrl: './card.component.html',
  styleUrls: ['./card.component.css']
})
export class CardComponent implements OnInit {
  @Input('heading') heading="";
  @Input('price') price="";
  @Input('single') single="";
  @Input('storage') storage="";
  @Input('public') public="";
  @Input('community') community="";
  @Input('unlimited') unlimited="";
  @Input('dedicated') dedicated="";
  @Input('free') free="";
  @Input('monthly') monthly="";
  @Input('mute') mute="";
  @Input('muted') muted="";
  @Input('what') what="";
@Input('visible') visible="";
@Input('visiblity') visiblity="";
  constructor() { }

  ngOnInit(): void {
  }

}
