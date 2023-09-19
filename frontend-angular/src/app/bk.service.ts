import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class BkService {

  allcustomersUrl = "http://localhost:4000/api/customersinfo";
  onecustomerUrl = "http://localhost:4000/api";
  customersNamesUrl ="http://localhost:4000/api/customersnames";
  getfirstbalanceUrl = "http://localhost:4000/api/balance/first";
  getsecondbalanceUrl = "http://localhost:4000/api/balance/second";
  ubdatefirstbalanceUrl = "http://localhost:4000/api/balance/first/update";
  ubdatesecondbalanceUrl = "http://localhost:4000/api/balance/second/update";
  inserttransformationtableUrl ="http://localhost:4000/api/transformationtable";
  allcustomersaftertransUrl="http://localhost:4000/api/transformationtable/customersinfoaftertrans";

  constructor(private http:HttpClient) {}
     
  getcustomers():Observable<any>
  {
    return this.http.get(`${this.allcustomersUrl}`);
  }

  getonecustomer(id:any):Observable<any>
  {
    return this.http.get(`${this.onecustomerUrl}/${id}`);
  }

  getcustomernames():Observable<any>
  {
    return this.http.get(`${this.customersNamesUrl}`);
  }

  
  getfirstcustomerbalance(idd:any):Observable<any>
  {
    return this.http.get(`${this.getfirstbalanceUrl}/${idd}`);
  }

  getsecondcustomerbalance(idd:any):Observable<any>
  {
    return this.http.get(`${this.getsecondbalanceUrl}/${idd}`);
  }

  updatefirstbalance(texttamount:any):Observable<any>
  {
    return this.http.put(`${this.ubdatefirstbalanceUrl}`,{texttamount});
    
  }

  updatesecondbalance(texttamount:any):Observable<any>
  {
    return this.http.put(`${this.ubdatesecondbalanceUrl}`,{texttamount});
    
  }
 
  insertTransTable(selectedfirst:any,selectedsecond:any,texttamount:any):Observable<any>
  {
    return this.http.post(`${this.inserttransformationtableUrl}`,{selectedfirst,selectedsecond,texttamount});
  }

  getcustomersaftertrans():Observable<any>
  {
    return this.http.get(`${this.allcustomersaftertransUrl}`);
  }

}
