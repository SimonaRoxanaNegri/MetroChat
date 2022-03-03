import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TrenogialloComponent } from './trenogiallo.component';

describe('TrenogialloComponent', () => {
  let component: TrenogialloComponent;
  let fixture: ComponentFixture<TrenogialloComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ TrenogialloComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(TrenogialloComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
