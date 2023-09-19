import { Component, OnInit } from '@angular/core';
import { BkService } from '../bk.service';

@Component({
  selector: 'app-transfer-money',
  templateUrl: './transfer-money.component.html',
  styleUrls: ['./transfer-money.component.css']
})
export class TransferMoneyComponent implements OnInit
{

  //selected  id of get first customer
  selectedfirst:string="";
  //selected  id of get second customer
  selectedsecond:string="";
  //amount id
  texttamount:any="";

  readbalancefirst:any;
  readbalancesecond:any;



  customerNames:any ="";

  readallusers :any;



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


  //------------------------------------------------------------------------
  //get balance of first customer by name
  getbalancefirst(iddd:any)
  {
    this.api.getfirstcustomerbalance(iddd).subscribe
      (
        (result:any) => 
        {
          // console.log(result);
          this.readbalancefirst= result.data;
          // console.log(this.readbalancefirst);
        }
      )
  }



  //------------------------------------------------------------------------
  //get balance of first customer by name
  getbalancesecond(iddd:any)
  {
    this.api.getsecondcustomerbalance(iddd).subscribe
      (
        (result:any) => 
        {
          // console.log(result);
          this.readbalancesecond= result.data;
          // console.log(this.readbalancesecond);
        }
      )
  }


//--------------------------------------------------------------------
  //tranforamtion first
  transferfirst()
  {
    this.api.updatefirstbalance(this.texttamount).subscribe
    (
      (result:any) =>{}
    )
    
  }


  //--------------------------------------------------------------------
  //tranforamtion second
  transfersecond()
  {
    this.api.updatesecondbalance(this.texttamount).subscribe
    (
      (result:any) => {}
    )
  }

  //---------------------------------------------------------------------
  //get all customers
  getallcustomers(): void
  {
  this.api.getcustomers().subscribe
  (
    (result:any)=>
    {
        
        this.readallusers = result.data;
          
    }
  )
  }

  
  //--------------------------------------------------------------------
  //insert customers in transformation table
  insert()
  {
    this.api.insertTransTable(this.selectedfirst,this.selectedsecond,this.texttamount).subscribe
    (
      (result:any) =>{}
    )
  }

  //--------------------------------------------------------------------
  //update all customers' info 
  main()
  {
    this.transferfirst();
    this.transfersecond();
    this.insert();
   
  }

   
}


















