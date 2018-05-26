import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ElementDesignerComponent } from './element-designer.component';

describe('ElementDesignerComponent', () => {
  let component: ElementDesignerComponent;
  let fixture: ComponentFixture<ElementDesignerComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ElementDesignerComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ElementDesignerComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
