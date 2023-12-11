import { ComponentFixture, TestBed } from '@angular/core/testing';
import { AsistenciaProfesorPage } from './asistencia-profesor.page';

describe('AsistenciaProfesorPage', () => {
  let component: AsistenciaProfesorPage;
  let fixture: ComponentFixture<AsistenciaProfesorPage>;

  beforeEach(async(() => {
    fixture = TestBed.createComponent(AsistenciaProfesorPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
