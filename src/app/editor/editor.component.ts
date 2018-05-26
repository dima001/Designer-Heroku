import { ElementsService } from './../elements-service.service';
import { Component, OnInit, Input, Output } from '@angular/core';
import { EventEmitter } from '@angular/core';

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
  @Output() notify: EventEmitter<string> = new EventEmitter<string>();


  constructor(private elementsService: ElementsService) {
   }

  ngOnInit() {
    console.log(this.height);

  }

  applyClick(height: Number, width: Number, position: Number, top: Number){
    this.elementsService.add(height, width, position, top);
    this.notify.emit("end edit mode");

  }


}
