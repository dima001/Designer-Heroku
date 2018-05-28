import { ElementsService } from './elements-service.service';
import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { HttpClientModule} from '@angular/common/http';
import { AppComponent } from './app.component';
import { ElementDesignerComponent } from './element-designer/element-designer.component';
import { EditorComponent } from './editor/editor.component';


@NgModule({
  declarations: [
    AppComponent,
    ElementDesignerComponent,
    EditorComponent
  ],
  imports: [
    BrowserModule,
    HttpClientModule
  ],
  providers: [ElementsService],
  bootstrap: [AppComponent]
})
export class AppModule { }
