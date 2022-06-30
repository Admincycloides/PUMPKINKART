import { ComponentFixture, TestBed } from '@angular/core/testing';

import { InvestnowComponent } from './investnow.component';

describe('InvestnowComponent', () => {
  let component: InvestnowComponent;
  let fixture: ComponentFixture<InvestnowComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ InvestnowComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(InvestnowComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
