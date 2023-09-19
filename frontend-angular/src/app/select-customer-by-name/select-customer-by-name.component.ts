import { Component, OnInit } from '@angular/core';
import { BkService } from '../bk.service';

@Component({
  selector: 'app-select-customer-by-name',
  templateUrl: './select-customer-by-name.component.html',
  styleUrls: ['./select-customer-by-name.component.css']
})
export class SelectCustomerByNameComponent implements OnInit
{

  readoneuser:any;
  selectedvalue:any = "";
  customerNames:any;

  constructor(private api:BkService){}

  ngOnInit(): void
  {
    this.getnames();
  }


//---------------------------------------------------------------------
//get customers names
getnames()
{
  this.api.getcustomernames().subscribe
  (
    (result:any) => 
    {
      // console.log(result);
      this.customerNames= result.data;
      // console.log(this.customerNames);
    }
  )

}
  //---------------------------------------------------------------------
  //get one customer
  getbyid(id:any)
  {
    this.api.getonecustomer(id).subscribe
    (
      (result:any) => 
      {
        // console.log(result);
        this.readoneuser= result.data;
      }
    )
   
  }
}
