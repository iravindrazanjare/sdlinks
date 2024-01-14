import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SpringSuitComponent } from './spring-suit.component';

describe('SpringSuitComponent', () => {
  let component: SpringSuitComponent;
  let fixture: ComponentFixture<SpringSuitComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ SpringSuitComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(SpringSuitComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
