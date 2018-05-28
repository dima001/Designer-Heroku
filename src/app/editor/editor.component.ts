import { ElementsService } from './../elements-service.service';
import { Component, OnInit, Input, Output } from '@angular/core';
import { EventEmitter } from '@angular/core';
import { Server } from 'selenium-webdriver/safari';
import { HttpClient } from '@angular/common/http';

// import * as $ from 'jquery';
// import * as ScriptUpload from 'ScriptUpload';
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
  @Input() image: string =  "https://cdn4.iconfinder.com/data/icons/factory-element/64/Factory-Element_58-128.png";
  @Input() id: number;

  @Output() notify: EventEmitter<string> = new EventEmitter<string>();

  selectedFile: File = null;

  constructor(private elementsService: ElementsService, private http: HttpClient) {
   }

  ngOnInit() {}

  applyClick(height: number, width: number, position: number, top: number){
    if(this.id >= 0 ){
      this.elementsService.editById(this.id, height, width, position, top ,this.image);
    }
    else{
      this.elementsService.add(height, width, position, top, this.image);
    }
    this.notify.emit("apply button clicked");

  }

  onFileSelected(event){

    this.selectedFile = <File> event.target.files[0];
    // this.image = this.selectedFile;

    // let reader = new FileReader();

    // reader.onload = (e: any) => {
    //     this.selectedFile = e.target.result;
    // }

    // reader.readAsDataURL(event.target.files[0]);


  }

  onUpload(imageUrl: string){
    if(imageUrl)
    {
      this.image = imageUrl;// this.selectedFile.name;
    }
    // try {
    //   localStorage.setItem("elephant",this.selectedFile);
    // }
    // catch (e) {
    //   console.log("Storage failed: " + e);
    // }
    // console.log("selected:" + this.selectedFile.name);

    
    // const fd = new FormData();
    //     fd.append('image', this.selectedFile, this.selectedFile.name);
    //     // console.log("fd: " + fd.get('image').toString());
    //     this.http.post('http://www.sendrelax.com/WebService.asmx/UploadFiles', fd)
    //       .subscribe(res => {
    //         console.log(res);
    //       });
  //   var scriptUpload = new ScriptUpload();

  //   var fileSelect = document.getElementById('file-select');

  //   scriptUpload.UploadFiles('http://www.sendrelax.com/WebService.asmx/UploadFiles', fileSelect,
  //     function (res) {
  //       var FileURL = '';
  //       if (res != null)
  //       if (res.getElementsByTagName)
  //       if (res.getElementsByTagName('string').length >
  //     0)
  //       FileURL =
  //     res.getElementsByTagName('string')[0].innerHTML;
  //       console.log("FileURL: " + FileURL);
  //       this.image = FileURL;
  //       if (FileURL != '') {
  //     // You can put here the processing of the URL.
  //     // Make sure to add http://www.sendrelax.com
  //     // before the string that returns in FileURL
  //       }
  //     }, function(err) {
  //     alert('err');
  //     });
  }


}
