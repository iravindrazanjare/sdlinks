import { ComponentFixture, TestBed } from '@angular/core/testing';

import { EclipseIdeComponent } from './eclipse-ide.component';

describe('EclipseIdeComponent', () => {
  let component: EclipseIdeComponent;
  let fixture: ComponentFixture<EclipseIdeComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ EclipseIdeComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(EclipseIdeComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
