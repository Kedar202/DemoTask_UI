import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import * as moment from 'moment';
import { CustomerService } from 'src/app/service/customer.service';
@Component({
  selector: 'app-customer-form',
  templateUrl: './customer-form.component.html',
  styleUrls: ['./customer-form.component.css']
})
export class CustomerFormComponent implements OnInit {
  isLoading: boolean = false;
  customerForm: FormGroup;
  constructor(private customerService: CustomerService, private router: Router) { }

  ngOnInit(): void {
    this.customerForm = new FormGroup({
      isCustomer: new FormControl("NEW", [Validators.required]),
      reference: new FormControl({value: `CUS${moment().format('YYYYMMDD')}${Math.floor(Math.random()*(999-100+1)+100)}`, disabled: true}, [Validators.required, Validators.maxLength(15)]),
      customerNumber: new FormControl(null, [Validators.required, Validators.pattern('[0-9]*')]),
      customerName: new FormControl(null, [Validators.required, Validators.pattern('[a-zA-z]*')]),
      customerAddress: new FormControl(null, [Validators.required]),
      customerPhoneNumber: new FormControl(null, [Validators.required, Validators.pattern('[0-9]*'), Validators.maxLength(10), Validators.minLength(10)]),
      transferAmount: new FormControl(null, [Validators.required, Validators.pattern('[0-9]*')]),
      transferCurrency: new FormControl(null, [Validators.required]),
      benificiaryBank: new FormControl(null, [Validators.required, Validators.pattern('[a-zA-Z]*')]),
      benificiaryAccNumber: new FormControl(null, [Validators.required, Validators.pattern('[0-9]*')]),
      paymentDetail: new FormControl(null, [Validators.required]),
      cardNumber: new FormControl(null, [Validators.required, Validators.pattern('[0-9]*')]),
      expiryDate: new FormControl(null, [Validators.required, Validators.pattern('[0-9]*'), Validators.maxLength(2)]),
      expiryYear: new FormControl(null, [Validators.required, Validators.pattern('[0-9]*'), Validators.maxLength(2)]),
      cvv: new FormControl(null, [Validators.required, Validators.pattern('[0-9]*'), , Validators.maxLength(4), Validators.minLength(3)]),
      name: new FormControl(null, [Validators.required, Validators.pattern('[a-zA-Z]*')]),
      region: new FormControl(null, [Validators.required])
    })
  }

  onSubmit(form: FormGroup): void {
    this.isLoading = true;
    this.customerService.saveData(form.value).subscribe(res => {
      // console.log(res);
      this.isLoading = false;
      this.router.navigate(["transactionList"]);
    });
  }

}
