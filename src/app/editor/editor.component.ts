import { ElementsService } from './../elements-service.service';
import { Component, OnInit, Input, Output } from '@angular/core';
import { EventEmitter } from '@angular/core';
import { Server } from 'selenium-webdriver/safari';

@Component({
  selector: 'editor',
  templateUrl: './editor.component.html',
  styleUrls: ['./editor.component.css']
})
export class EditorComponent implements OnInit {
  @Input() height: number;
  @Input() width: number;
  @Input() position: number;
  @Input() top: number;
  @Input() id: number;

  @Output() notify: EventEmitter<string> = new EventEmitter<string>();


  constructor(private elementsService: ElementsService) {
   }

  ngOnInit() {
    console.log(this.id);

  }

  applyClick(height: number, width: number, position: number, top: number){
    if(this.id >= 0 ){
      console.log(this.id);
      this.elementsService.editById(this.id, height, width, position, top);
    }
    else{
      console.log("else, id:"+ this.id);
      this.elementsService.add(height, width, position, top);
    }
    this.notify.emit("apply button clicked");

  }


}
