import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { IonContent, IonHeader, IonTitle, IonToolbar, IonButtons, IonBackButton } from '@ionic/angular/standalone';

@Component({
  selector: 'app-especialidades-ppal',
  templateUrl: './especialidades-ppal.page.html',
  styleUrls: ['./especialidades-ppal.page.scss'],
  standalone: true,
  imports: [IonBackButton, IonButtons, IonContent, IonHeader, IonTitle, IonToolbar, CommonModule, FormsModule]
})
export class EspecialidadesPpalPage implements OnInit {

  constructor() { }

  ngOnInit() {
  }

}
