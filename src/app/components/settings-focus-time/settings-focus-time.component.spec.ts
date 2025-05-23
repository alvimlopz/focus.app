import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SettingsFocusTimeComponent } from './settings-focus-time.component';

describe('SettingsFocusTimeComponent', () => {
  let component: SettingsFocusTimeComponent;
  let fixture: ComponentFixture<SettingsFocusTimeComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [SettingsFocusTimeComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(SettingsFocusTimeComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
