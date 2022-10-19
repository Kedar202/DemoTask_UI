import { Injectable } from '@angular/core';
import { HttpClient} from '@angular/common/http';
import { apiEndPoint } from '../utils/constant';

@Injectable({
  providedIn: 'root'
})
export class CustomerService {

  constructor(private http: HttpClient) { }

  saveData(payload: any) {
    try {
      return this.http.post(`${apiEndPoint}/customer`, payload);
    } catch(err) {
      alert("Something went wrong..!!!");
    }
  }

  getData() {
    try {
      return this.http.get(`${apiEndPoint}/customer`);
    } catch(err) {
      alert("Something went wrong..!!!");
    }
  }
}
