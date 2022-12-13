import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AbhaNewComponent } from './abhaNew.component';

describe('AbhaNewComponent', () => {
  let component: AbhaNewComponent;
  let fixture: ComponentFixture<AbhaNewComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AbhaNewComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(AbhaNewComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
