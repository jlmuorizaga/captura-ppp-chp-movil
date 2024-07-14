import { ChangeDetectorRef, Component, OnDestroy, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { IonContent, IonHeader, IonTitle, IonToolbar, IonButtons,
   IonButton, IonIcon, IonBackButton, IonList, 
  IonLabel, IonItem, 
  AlertController} from '@ionic/angular/standalone';
import { SharedModule } from 'src/app/shared/shared/shared.module';
import {Region} from 'src/app/model/dto/region';
import { RegionService } from 'src/app/services/region.service';
import { NavigationEnd, Router } from '@angular/router';
import { Subscription } from 'rxjs';
import {filter} from 'rxjs/operators';
@Component({
  selector: 'app-regiones-ppal',
  templateUrl: './regiones-ppal.page.html',
  styleUrls: ['./regiones-ppal.page.scss'],
  standalone: true,
  imports: [IonBackButton, IonButtons, IonContent, IonHeader, IonTitle, IonToolbar, CommonModule, FormsModule]
})
export class RegionesPpalPage implements OnInit,OnDestroy {
  navigationSubscription: Subscription;
  regiones!:Region[];
  mensaje: string;

  constructor(private regionesSvc:RegionService,
    private alertController:AlertController,
    private router: Router,private cdr: ChangeDetectorRef) { }

  ngOnInit() {
    console.log('Entré a regiones en OnInit');
  }

  saltaAInsertarRegion() {
    this.router.navigateByUrl('/insertar-region');
  }  

}
