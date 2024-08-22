import { ComponentFixture, TestBed } from '@angular/core/testing';
import { BrollPage } from './broll.page';

describe('BrollPage', () => {
  let component: BrollPage;
  let fixture: ComponentFixture<BrollPage>;

  beforeEach(() => {
    fixture = TestBed.createComponent(BrollPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
