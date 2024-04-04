import { Component,Input } from '@angular/core';
import { CarritoService } from '../carrito.service';

@Component({
  selector: 'app-item',
  standalone: true,
  imports: [],
  templateUrl: './item.component.html',
  styleUrl: './item.component.css'
})
export class ItemComponent {

  constructor (public servicecar:CarritoService){

  }


  @Input() imagen:string= 'Sin Data';
  @Input() id:string= 'id_test';
  @Input() title?:string= 'title_test';
  @Input() precio?:string
  @Input() description?:string='Sin Data';



  

  addcart(){
 this.servicecar.agregar({"id":this.id,"title":this.title,"price":this.precio})
 this.servicecar.acounttotal(Number(this.precio))

  }

}
