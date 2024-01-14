import { ComponentFixture, TestBed } from '@angular/core/testing';

import { JdkComponent } from './jdk.component';

describe('JdkComponent', () => {
  let component: JdkComponent;
  let fixture: ComponentFixture<JdkComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ JdkComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(JdkComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
