import { ComponentFixture, TestBed } from '@angular/core/testing';

import { OpenJdkComponent } from './open-jdk.component';

describe('OpenJdkComponent', () => {
  let component: OpenJdkComponent;
  let fixture: ComponentFixture<OpenJdkComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ OpenJdkComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(OpenJdkComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
