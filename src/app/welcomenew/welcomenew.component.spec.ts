import { ComponentFixture, TestBed } from '@angular/core/testing';

import { WelcomenewComponent } from './welcomenew.component';

describe('WelcomenewComponent', () => {
  let component: WelcomenewComponent;
  let fixture: ComponentFixture<WelcomenewComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ WelcomenewComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(WelcomenewComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
