import { Component, OnInit } from '@angular/core';
import {ActivatedRoute} from '@angular/router';
import {RestService} from '../../../../Services/rest.service';
import {FormBuilder, FormGroup, Validators} from '@angular/forms';
import moment from 'moment';
import {environment} from '../../../../environments/environment';
import {Guid} from "guid-typescript";

@Component({
  selector: 'app-product-list',
  templateUrl: './product-list.component.html',
  styleUrls: ['./product-list.component.scss']
})
export class ProductListComponent implements OnInit {
  companyId;
  products: any = [];
  companies: any = [];
  Form: FormGroup;
  constructor(private route: ActivatedRoute,
              private fb: FormBuilder,
              private service: RestService) {
    this.route.params.subscribe( param => {
      this.companyId = param.id;
    });
  }

  ngOnInit(){
 //   this.Form.get('company').setValue(this.companyId);
  this.createForm();
  this.getAllProducts();
  this.getAllCompanies();

  }
  getAllProducts() {
    this.service.getProductsById(this.companyId).subscribe( (res: any) => {
      this.products = res;
    });
  }
  getAllCompanies() {
    this.service.getAllCompanies().subscribe( (res: any) => {
      console.log('all companies => ' , res);
      this.companies = res;
    });

  }

  createForm() {
    this.Form = this.fb.group({
      company: [this.companyId, Validators.required],
      title: [null, Validators.required],
      dateOfManufacture: [null, Validators.required],
      status: [null, Validators.required],
    });
  }
  OnFormSubmit(form , event){
    if(this.Form.valid){
      const command = {
        companyId: this.companyId,
        id: Guid.create().toJSON().value,
        title: form.title,
        isActive: form.status,
        dateOfManufacture : moment(form.dateOfManufacture).format(environment.dateFormat)
      };
      this.service.addNewProduct(command).subscribe(res => {
        console.log(res);
        this.getAllProducts();
      });
    } else {
      event.preventDefault();
    }

  }

}

