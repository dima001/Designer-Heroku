import { ElementsService } from './../element-service.service';
import { Component, OnInit, Input, Output } from '@angular/core';
import { EventEmitter } from '@angular/core';
import { Server } from 'selenium-webdriver/safari';
import { HttpClient } from '@angular/common/http';

import * as $ from 'jquery';
import * as scriptUpload from './ScriptUpload.js'

@Component({
  selector: 'editor',
  templateUrl: './editor.component.html',
  styleUrls: ['./editor.component.css']
})

export class EditorComponent{

  @Input() height: number = 50;
  @Input() width: number = 50;
  @Input() position: number = 150;
  @Input() top: number = 150;
  @Input() image: string;
  @Input() id: number;

  @Output() notify: EventEmitter<string> = new EventEmitter<string>();

  fileSelected: any; //in this var we will have the file user choose for uploading

  constructor(private elementsService: ElementsService, private http: HttpClient) {}

  //when apply click, sents all data to service add or edit function, 
  //defindce if there a ID or not, if ID exist it will send it to edit function,
  //else it will send it to add function
  onApplyClick(height: number, width: number, position: number, top: number){
    //check if we uploaded a new image, if so it will take it's new url
    //if not it will check if it's a new elment or old one, 
    //if it's a new one it will define a defult image
    if($('body').data('img')){
      this.image = $('body').data('img');
      $('body').data('img', null);
    }
    else
      if(this.id == null)
        this.image = "https://cdn4.iconfinder.com/data/icons/factory-element/64/Factory-Element_58-128.png";

    //check if it's a new or a old elment
    if(this.id >= 0 ){
      this.elementsService.editById(this.id, height, width, position, top ,this.image);
    }
    else{
      this.elementsService.add(height, width, position, top, this.image);
    }
    this.notify.emit("apply button clicked");
  }

  //when we select file to upload
  onFileSelected(event){
    //configure selected user file for upload
    this.fileSelected = document.getElementById('file-select');
  }

  //upload function
  onUpload(imageSel: string){
    //calls for javascript upload function
    scriptUpload.UploadFiles('http://www.sendrelax.com/WebService.asmx/UploadFiles', this.fileSelected,
      function (res) {
        var FileURL = '';
        if (res != null)
        if (res.getElementsByTagName)
        if (res.getElementsByTagName('string').length >0)
          FileURL = res.getElementsByTagName('string')[0].innerHTML;
        if (FileURL != '') {
          //save the url of the image
          $('body').data('img', 'http://www.sendrelax.com' + FileURL.toString());
        }
      },
      function(err) {
        alert('err');
      }
    );
  }
    
}
