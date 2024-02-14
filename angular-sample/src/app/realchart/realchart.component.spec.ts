import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { RealChartComponent } from './realchart.component';

describe('RealChartComponent', () => {
  let component: RealChartComponent;
  let fixture: ComponentFixture<RealChartComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ RealChartComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(RealChartComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
