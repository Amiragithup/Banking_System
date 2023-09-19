import { Component, OnInit } from '@angular/core';
import { BkService } from '../bk.service';

@Component({
  selector: 'app-insert-trans-table',
  templateUrl: './insert-trans-table.component.html',
  styleUrls: ['./insert-trans-table.component.css']
})
export class InsertTransTableComponent implements OnInit
{
  
  
  readallusersafter :any;
  

  constructor(private api:BkService){}
  
  ngOnInit(): void
  {
    this.getaftertransformation();
  }
    
    

//---------------------------------------------------------------------
//get all customers after transformation
  getaftertransformation(): void
  {
    this.api.getcustomersaftertrans().subscribe
    (
      (result:any)=>
      {
              
              console.log(result);
              this.readallusersafter = result.data;
              
      }
    )
  }
  

 

}







