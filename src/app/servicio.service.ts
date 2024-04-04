import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class ServicioService {

  constructor() { }

 
 data3?:any[];

 


 consumir_api(){

  fetch("https://fakestoreapi.com/products").then( e => e.json()).then( (e) =>  this.data3 = e )
    
 }




}
