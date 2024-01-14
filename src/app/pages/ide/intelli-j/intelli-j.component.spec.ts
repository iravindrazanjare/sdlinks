import { ComponentFixture, TestBed } from '@angular/core/testing';

import { IntelliJComponent } from './intelli-j.component';

describe('IntelliJComponent', () => {
  let component: IntelliJComponent;
  let fixture: ComponentFixture<IntelliJComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ IntelliJComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(IntelliJComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
