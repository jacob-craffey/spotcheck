import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { SpotDialogComponent } from './spot-dialog.component';

describe('SpotDialogComponent', () => {
  let component: SpotDialogComponent;
  let fixture: ComponentFixture<SpotDialogComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ SpotDialogComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(SpotDialogComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
