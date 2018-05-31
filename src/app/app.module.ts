import { ElementsService } from './element-service.service';

import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { HttpClientModule } from '@angular/common/http';
import { AppComponent } from './app.component';
import { EditorComponent } from './editor/editor.component';
import { ElementDesignerComponent } from './element-designer/element-designer.component';

@NgModule({
  declarations: [
    AppComponent,
    EditorComponent,
    ElementDesignerComponent
  ],
  imports: [
    BrowserModule,
    HttpClientModule
  ],
  providers: [ElementsService],
  bootstrap: [AppComponent]
})
export class AppModule { }
