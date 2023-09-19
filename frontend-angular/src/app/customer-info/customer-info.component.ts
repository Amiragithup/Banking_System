import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { BkService } from '../bk.service';


@Component({
  selector: 'app-customer-info',
  templateUrl: './customer-info.component.html',
  styleUrls: ['./customer-info.component.css']
})
export class CustomerInfoComponent implements OnInit
{
  
  
  readallusers :any;
  

  constructor(private api:BkService){}
  
  ngOnInit(): void
  {
    this.getallcustomers();
  }
    
    

//---------------------------------------------------------------------
//get all customers
  getallcustomers(): void
  {
    this.api.getcustomers().subscribe
    (
      (result:any)=>
      {
              
         //console.log(result);
         this.readallusers = result.data;
              
      }
    )
  }
  

 

}







