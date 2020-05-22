import {Component, ElementRef, OnInit, ViewChild} from '@angular/core';
import {CompanyEnum} from '../../../Enums/company.enum';
import {FormBuilder, FormGroup, Validators} from '@angular/forms';
import {ICompany} from '../../../interfaces/company.interface';
import {RestService} from '../../../../Services/rest.service';
import { Guid } from 'guid-typescript';

@Component({
  selector: 'app-company-list',
  templateUrl: './company-list.component.html',
  styleUrls: ['./company-list.component.scss']
})
export class CompanyListComponent implements OnInit {

@ViewChild('collapsible') collapsible: ElementRef;
  companyEnum = CompanyEnum;
  Form: FormGroup;
  companies: any = [];
  constructor( private fb: FormBuilder, private service: RestService) { }

  ngOnInit() {
    this.createForm();
    this.getAllCompanies();
  }

  createForm() {
    this.Form = this.fb.group({
      companyName: [null, Validators.required],
      phoneNumber: [null, Validators.required],
      product: [null, Validators.required],
    });
  }

  getAllCompanies() {
    this.service.getAllCompanies().subscribe( (res: any) => {
      console.log('all companies => ' , res);
      this.companies = res;
    });

  }

  OnFormSubmit(form: ICompany , event) {
    if(this.Form.valid) {
      const command = {
        id: Guid.create().toJSON().value,
        name : form.companyName,
        phoneNumber : form.phoneNumber,
        productType : form.product,
      };


      // const body = JSON.stringify(command);
      this.service.addNewCompany(command).subscribe(res => {
      this.getAllCompanies();
      });


    } else {

      event.preventDefault();
    }

  }

}
