import { Injectable } from '@angular/core';

@Injectable()
export class ElementsService {
  data :any[] = [];

  constructor() { }

  add(height: Number, width: Number, position: Number, top: Number){
    // let itemJson = JSON.parse(item);
    // this.data.push(itemJson);
    // console.log(this.data.length);
    let elmentJson = {"id":this.data.length ,"height": height, "width": width,
                       "position": position, "top": top, "image": "https://cdn4.iconfinder.com/data/icons/factory-element/64/Factory-Element_58-128.png"};
    
    this.data.push(elmentJson);

  }

  getAll(){
    return this.data;
  }

}
