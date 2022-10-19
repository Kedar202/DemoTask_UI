import { Component, OnInit } from '@angular/core';
import { FormArray, FormBuilder, FormControl, FormGroup, Validators } from '@angular/forms';
import { randomReferenceNumber } from 'src/app/utils/utils';

@Component({
  selector: 'app-multi-value-form',
  templateUrl: './multi-value-form.component.html',
  styleUrls: ['./multi-value-form.component.css']
})
export class MultiValueFormComponent implements OnInit {

  multiValueForm = this.fb.group({
    forms: this.fb.array([])
  })

  constructor(private fb: FormBuilder) { }

  ngOnInit(): void {
    this.forms.push(this.newForm());
    this.initializeForm();
  }

  newForm(): FormGroup {
    return this.fb.group({
      isCustomer: ["NEW", [Validators.required]],
      reference: [{value: randomReferenceNumber(), disabled: true}, [Validators.required, Validators.maxLength(15)]],
      customerNumber: [null, [Validators.required, Validators.pattern('[0-9]*')]],
      customerName: [null, [Validators.required, Validators.pattern('[a-zA-z]*')]],
      customerAddress: [null, [Validators.required]],
      customerPhoneNumber: [null, [Validators.required, Validators.pattern('[0-9]*'), Validators.maxLength(10), Validators.minLength(10)]],
      transferAmount: [null, [Validators.required, Validators.pattern('[0-9]*')]],
      transferCurrency: [null, [Validators.required]],
      benificiaryBank: [null, [Validators.required, Validators.pattern('[a-zA-Z]*')]],
      benificiaryAccNumber: [null, [Validators.required, Validators.pattern('[0-9]*')]],
      paymentDetail: [null, [Validators.required]],
      cardNumber: [null, [Validators.required, Validators.pattern('[0-9]*')]],
      expiryDate: [null, [Validators.required, Validators.pattern('[0-9]*'), Validators.maxLength(2)]],
      expiryYear: [null, [Validators.required, Validators.pattern('[0-9]*'), Validators.maxLength(2)]],
      cvv: [null, [Validators.required, Validators.pattern('[0-9]*'), , Validators.maxLength(4), Validators.minLength(3)]],
      name: [null, [Validators.required, Validators.pattern('[a-zA-Z]*')]],
      region: [null, [Validators.required]]
    })
  }

  initializeForm() {
    this.forms.controls.map((control, index) => {
      control.valueChanges.subscribe(res => {
        console.log(res);
        if(res['region'] === "PORT_MATHURIN") {
          this.forms.controls[index].get("customerAddress").disable();
          this.forms.controls[index].get("customerAddress").setValidators([]);
        } else {
          this.forms.controls[index].get("customerAddress").enable();
          this.forms.controls[index].get("customerAddress").setValidators([Validators.required]);
        }
      });
    });
  }

  get forms() {
    return this.multiValueForm.controls["forms"] as FormArray;
  }

  radioClick(value: string, index: number) {
    console.log(this.forms.controls[index]);
  }

  addForm(): void {
    this.forms.push(this.newForm());
  }

  removeForm(id: number): void {
    this.forms.removeAt(id);
    this.initializeForm();
  }

  resetForm() {
    let length = this.forms.length;
    for(let i = length;i > 0; i--) {
      this.forms.removeAt(i);
    }
    this.forms.controls[0].reset();
    this.forms.controls[0].patchValue({
      isCustomer: "NEW",
      reference: randomReferenceNumber()
    })
  }

  onSubmit(): void {
    console.log(this.forms);
  }

}
function distinctUntilChanged(): import("rxjs").OperatorFunction<any, unknown> {
  throw new Error('Function not implemented.');
}

