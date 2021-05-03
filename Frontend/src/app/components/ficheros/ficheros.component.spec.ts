import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { FicherosComponent } from './ficheros.component';

describe('FicherosComponent', () => {
  let component: FicherosComponent;
  let fixture: ComponentFixture<FicherosComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ FicherosComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(FicherosComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
