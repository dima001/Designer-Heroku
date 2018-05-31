import { ElementsService } from './../element-service.service';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'element-designer',
  templateUrl: './element-designer.component.html',
  styleUrls: ['./element-designer.component.css']
})

export class ElementDesignerComponent implements OnInit {
  data: any[] = []; //elments data array
  addMode: boolean = false; //flag to check if we in addMode
  selectedItem: any = null; //var to check if we select elment to edit 
  
  constructor(private elementsService: ElementsService) { } //c-tor that and conection to our service

  ngOnInit() {
    this.data = this.elementsService.getAll(); //get all elments from the service
  }

  //on elment click, we configure witch elment to send to editor component
  onElementClick(id: number){
    this.selectedItem = this.data[id];
    this.addMode = false;
  }

  //change the border of selected(for edit) elment if one was choose
  getBorder(id: number){
    if(this.selectedItem != null && (id === this.selectedItem.id))
      return '5px solid';
    else
      return '0px';
  }

  //opens a edit panel
  addButtonClick(){
    if(this.addMode)
      this.addMode = false;
    else{
      this.addMode = true;
    }
    this.selectedItem = null;
  }

  //when we finish to edit old elment or add new one, this function closes the edit panel
  onEditOff(message:string):void{
    this.addMode = false;
    this.selectedItem = null;
  }

  //export all elments to Json 
  exportClick(){
    let data = this.elementsService.getAll();

    let something = window.open("data:text/json," + encodeURIComponent(JSON.stringify(data)),
                    "_blank");
    something.focus();
  }

}
