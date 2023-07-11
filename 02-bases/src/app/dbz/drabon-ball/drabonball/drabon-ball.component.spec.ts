import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DrabonBallComponent } from './drabon-ball.component';

describe('DrabonBallComponent', () => {
  let component: DrabonBallComponent;
  let fixture: ComponentFixture<DrabonBallComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [DrabonBallComponent]
    });
    fixture = TestBed.createComponent(DrabonBallComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
