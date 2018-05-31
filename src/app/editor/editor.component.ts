import { ElementsService } from './../element-service.service';
import { Component, OnInit, Input, Output } from '@angular/core';
import { EventEmitter } from '@angular/core';
import { Server } from 'selenium-webdriver/safari';
import { HttpClient } from '@angular/common/http';

import * as $ from 'jquery';
// import * as scriptUpload from 'ScriptUpload';
// import 'ScriptUpload';
import * as scriptUpload from './ScriptUpload.js'
// require ('./ScriptUpload.js')



@Component({
  selector: 'editor',
  templateUrl: './editor.component.html',
  styleUrls: ['./editor.component.css']
})
export class EditorComponent implements OnInit {
  @Input() height: number = 50;
  @Input() width: number = 50;
  @Input() position: number = 150;
  @Input() top: number = 150;
  @Input() image: string;
  @Input() id: number;

  @Output() notify: EventEmitter<string> = new EventEmitter<string>();

  // selectedFile: File = null;
  fileSelect: any;
  selectedImage: string = null;

  constructor(private elementsService: ElementsService, private http: HttpClient) {
   }

  ngOnInit() {}

  applyClick(height: number, width: number, position: number, top: number){

    if($('body').data('img')){
      this.image = $('body').data('img');
      $('body').data('img', null);
    }
    else
      if(this.id == null)
        this.image = "https://cdn4.iconfinder.com/data/icons/factory-element/64/Factory-Element_58-128.png";

    if(this.id >= 0 ){
      console.log("edit, image:" + this.image);

      this.elementsService.editById(this.id, height, width, position, top ,this.image);
    }
    else{
      console.log("add, image:" + this.image);
      this.elementsService.add(height, width, position, top, this.image);
    }
    this.notify.emit("apply button clicked");

  }

  onFileSelected(event){
    this.fileSelect = document.getElementById('file-select');
  }

  

  onUpload(imageSel: string){

    scriptUpload.UploadFiles('http://www.sendrelax.com/WebService.asmx/UploadFiles', this.fileSelect,
      function (res) {
        var FileURL = '';
        if (res != null)
        if (res.getElementsByTagName)
        if (res.getElementsByTagName('string').length >
      0)
        FileURL =
      res.getElementsByTagName('string')[0].innerHTML;
      if (FileURL != '') {
        $('body').data('img', 'http://www.sendrelax.com' + FileURL.toString());
        }
      }, function(err) {
      alert('err');
      });
  }
    
}
