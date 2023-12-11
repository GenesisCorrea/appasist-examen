import { Component, OnInit, inject } from '@angular/core';
import { UtilsService } from 'src/app/services/utils.service';

@Component({
  selector: 'app-profesor',
  templateUrl: './profesor.page.html',
  styleUrls: ['./profesor.page.scss'],
})
export class ProfesorPage implements OnInit {

  utilsSvs = inject(UtilsService);

  profesor = 'Dr. Alejandro Torres';
  carreras = [
    { nombre: 'Ingeniería en Desarrollo de Software', estudiantes: 30, asistencia: 50 },
    { nombre: 'Programacion web', estudiantes: 40, asistencia: 50 },
    { nombre: 'Estadistica descriptiva', estudiantes: 30, asistencia: 60 },
  ];

  constructor() { }

  ngOnInit() {
  }

 

}
