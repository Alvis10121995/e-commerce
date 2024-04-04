import { Component } from '@angular/core';
import { CarritoService } from '../carrito.service';

@Component({
  selector: 'app-carrito',
  standalone: true,
  imports: [],
  templateUrl: './carrito.component.html',
  styleUrl: './carrito.component.css'
})
export class CarritoComponent {


  

  constructor(public serviciocar:CarritoService){
  }


  eliminar(id:any){
    

    this.serviciocar.eliminar(id)
  }


}
