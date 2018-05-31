import { Injectable } from '@angular/core';

@Injectable()
export class ElementsService {
  data :any[] = [];

  constructor() { }

  add(height: number, width: number, position: number, top: number, image: string){

    console.log("service image: " + image);
    
    let elmentJson = {"id":this.data.length ,"height": height, "width": width,
                       "position": position, "top": top, "image": image};
    
    this.data.push(elmentJson);

  }

  getAll(){
    return this.data;
  }

  editById(id: number, height: number, width: number, position: number, top: number, image: string){
    this.data[id].height = height;
    this.data[id].width = width;
    this.data[id].position = position;
    this.data[id].top = top;
    this.data[id].image = image;
  }


}
