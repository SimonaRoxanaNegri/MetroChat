import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TrenorossoComponent } from './trenorosso.component';

describe('TrenorossoComponent', () => {
  let component: TrenorossoComponent;
  let fixture: ComponentFixture<TrenorossoComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ TrenorossoComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(TrenorossoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
