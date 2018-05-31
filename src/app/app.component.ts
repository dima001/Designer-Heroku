import { Component } from '@angular/core';
import { ElementsService } from './services/element-service.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'Designer';

  constructor() { }

}
