import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { ServicioService } from './servicio.service';
import { ItemComponent } from './item/item.component';
import { CarritoComponent } from './carrito/carrito.component';


@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet,ItemComponent,CarritoComponent],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {
  title = 'my-login';
 
   data2?:any

  constructor(public servicio: ServicioService){

  }

  ngOnInit(){

    
    this.servicio.consumir_api()
    

  }

  






}



