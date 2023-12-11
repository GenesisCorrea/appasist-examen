import { Component, Input, OnInit, inject } from '@angular/core';
import { UtilsService } from 'src/app/services/utils.service';
import { Router } from '@angular/router';  


@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss'],
})
export class HeaderComponent  implements OnInit {
  constructor(private router: Router) {}

  @Input() title!: string;
  @Input() backButton!: string;
  @Input() isModal!: boolean;
  @Input() perfilButton!: string;
  @Input() perfilProfesorButton!: string;

  utilsSvc = inject(UtilsService);

  ngOnInit() {}

  dismissModal(){
    this.utilsSvc.disnissNodal();
  }

  perfil(){
    this.router.navigate(['profile'])
  }

  perfilProfesor(){
    this.router.navigate(['profile-profesor'])
  }

  
}
