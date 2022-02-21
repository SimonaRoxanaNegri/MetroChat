import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ListanewsComponent } from './listanews.component';

describe('ListanewsComponent', () => {
  let component: ListanewsComponent;
  let fixture: ComponentFixture<ListanewsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ListanewsComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ListanewsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
