import { ElementsService } from './../elements-service.service';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'element-designer',
  templateUrl: './element-designer.component.html',
  styleUrls: ['./element-designer.component.css']
})
export class ElementDesignerComponent implements OnInit {
  data: any[] = [];
  edit: boolean = false;
  selectedItem: any = null;
  height: number;
  
  constructor(private elementsService: ElementsService) { }

  ngOnInit() {
    this.data = this.elementsService.getAll();
  }

  elementClick(id: number){
    this.selectedItem = this.data[id];
    this.edit = true;
  }

  getBorder(id: number){
    if(this.selectedItem != null && (id === this.selectedItem.id))
      return '5px solid';
    else
      return '0px';
  }

  addButtonClick(){
    if(this.edit)
      this.edit = false;
    else{
      this.edit = true;
    }
    this.selectedItem = null;
  }

  onEditOff(message:string):void{
    this.edit=false;
    this.selectedItem = null;
  }

  exportClick(){
    let data = this.elementsService.getAll();

    let something = window.open("data:text/json," + encodeURIComponent(JSON.stringify(data)),
                    "_blank");
    something.focus();
  }

}