import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TvlistComponent } from './tvlist.component';

describe('TvlistComponent', () => {
  let component: TvlistComponent;
  let fixture: ComponentFixture<TvlistComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ TvlistComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(TvlistComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
