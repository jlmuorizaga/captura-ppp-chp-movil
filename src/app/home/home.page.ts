import { Component } from '@angular/core';
import { IonHeader, IonToolbar, IonTitle, IonContent, IonButtons, IonButton } from '@ionic/angular/standalone';
import { Router } from '@angular/router';

@Component({
  selector: 'app-home',
  templateUrl: 'home.page.html',
  styleUrls: ['home.page.scss'],
  standalone: true,
  imports: [IonButton, IonButtons, IonHeader, IonToolbar, IonTitle, IonContent],
})
export class HomePage {
    //mensaje: string | undefined 
    mensaje: string; //No envía error porque la variable no está indefinida, en el constructor se le asigna un valor inicial
    constructor(private router: Router) {
      this.mensaje = 'Estoy en el constructor';
}
mandaMensajeRegiones() {
  console.log('Imprimiendo mensaje Regiones');
  this.mensaje = 'Presionaste botón Regiones';
}

mandaMensajeProductos() {
  console.log('Imprimiendo mensaje Productos');
  this.mensaje = 'Presionaste botón Productos';
}

saltaARegiones() {
  this.router.navigateByUrl('/regiones-ppal');
}
saltaAProductos() {
  this.router.navigateByUrl('/productos-ppal');

}

saltaAEspecialidades() {
  this.router.navigateByUrl('/especialidades-ppal');
}
saltaASucursales() {
  this.router.navigateByUrl('/sucursales-ppal');
}
}
