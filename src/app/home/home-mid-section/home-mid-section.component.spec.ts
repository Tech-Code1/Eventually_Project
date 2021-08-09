import { ComponentFixture, TestBed } from '@angular/core/testing';

import { HomeMidSectionComponent } from './home-mid-section.component';

describe('HomeMidSectionComponent', () => {
  let component: HomeMidSectionComponent;
  let fixture: ComponentFixture<HomeMidSectionComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ HomeMidSectionComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(HomeMidSectionComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
