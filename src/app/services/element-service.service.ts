import { Injectable } from '@angular/core';

@Injectable()
export class ElementsService {
  data :any[] = []; //elments data array

  constructor() { }

  //add new elment to array
  add(height: number, width: number, position: number, top: number, image: string){
    //create JSON var
    let elmentJson = {"id":this.data.length ,"height": height, "width": width,
                       "position": position, "top": top, "image": image};
    //push JSON var to data array
    this.data.push(elmentJson);

  }

  //get all elements
  getAll(){
    return this.data;
  }

  //edit elment by ID
  editById(id: number, height: number, width: number, position: number, top: number, image: string){
    this.data[id].height = height;
    this.data[id].width = width;
    this.data[id].position = position;
    this.data[id].top = top;
    this.data[id].image = image;
  }


}
