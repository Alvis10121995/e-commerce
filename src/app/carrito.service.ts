import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class CarritoService {

  constructor() { }

   carro: any[]=[]
   total: number = 0
   indice: number=0

   agregar( producto:any){

   this.carro.push(producto)
   console.log(this.carro)
  }

  eliminar (id:any){
    
    console.log("eliminar "+id+" tipo "+ typeof Number(id) )

     
    
    console.log(this.carro)
     
     this.carro.map( e => {
             
       if(e.id == id){
        Math.abs(this.total = this.total-e.price)  

       }

     }  )
    
    this.carro = this.carro.filter( e =>  e.id !== id   )
     
   
    
    
     // this.total= this.total-Number() 
   
     
    
      
 
   
  }

  acounttotal(addprice:number){
    this.total= this.total+addprice
  
  }




}
