import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Achievment } from './achievment';

describe('Achievment', () => {
  let component: Achievment;
  let fixture: ComponentFixture<Achievment>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [Achievment]
    })
    .compileComponents();

    fixture = TestBed.createComponent(Achievment);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
