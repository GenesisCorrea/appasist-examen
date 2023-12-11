import { ComponentFixture, TestBed } from '@angular/core/testing';
import { ProfileProfesorPage } from './profile-profesor.page';

describe('ProfileProfesorPage', () => {
  let component: ProfileProfesorPage;
  let fixture: ComponentFixture<ProfileProfesorPage>;

  beforeEach(async(() => {
    fixture = TestBed.createComponent(ProfileProfesorPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
