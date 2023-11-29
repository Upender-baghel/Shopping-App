import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterOutlet } from '@angular/router';
import { HttpClientModule , HttpClient } from '@angular/common/http';
import { ReactiveFormsModule } from '@angular/forms';
import { provideToastr } from 'ngx-toastr';
import { provideAnimations } from '@angular/platform-browser/animations';

import { ToastrModule } from 'ngx-toastr';
import { ToastrService } from 'ngx-toastr';


import { error, log } from 'console';


import BootstrapVue from 'bootstrap-vue';


@Component({
  selector: 'app-root',
  standalone: true,
  imports: [CommonModule, RouterOutlet , HttpClientModule ,ReactiveFormsModule ,ToastrModule   ],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {
  title = 'five';
  url = 'https://dummyjson.com/products'
  post:any=''
  err:any = ''
  additem:string =''
  sum:number= 0
  price:any =''
  dtitle:any = ''
  description:any = ''
  // products = [
  //   {pic:this.additem},
  //   {price:this.price},
  //   {description:this.description},
  //   {title:this.dtitle}
  // ]
  
  
  constructor(private http:HttpClient){
    this.http.get(this.url).subscribe(
      (data)=>{
        console.log(data,'data');  
        this.post = data
      },
      (error)=>{
        console.log(this.err= '');
      }
    ) }
    
    
    addcart(item:any, index:any){
      this.additem = item.images[index];
      this.price = item.price
      this.sum += item.price ;  
      this.dtitle = item.title
      this.description = item.description
      
      
      console.log(this.price , 'price');
      console.log(this.additem , "pic");
      console.log(this.sum , "total");

      alert( `${this.dtitle} Added In Cart`)
      
    }


    buynow(item:any,index:any){
      this.additem = item.images[index];
      this.price = item.price
      this.sum += item.price ;  
      this.dtitle = item.title
      this.description = item.description

      console.log(this.sum , 'this is sum ');
    }

    remove(){
      
      


    }



}
