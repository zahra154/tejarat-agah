import {Injectable} from '@angular/core';
import {HttpClient} from '@angular/common/http';

import {map} from 'rxjs/operators';
import { environment } from 'src/environments/environment';

@Injectable()
export class RestService {
  apiAddress;
  headers;
  options;

  constructor(private httpClient: HttpClient ) {

  }


	developOption(developType) {
		switch (developType) {
			case 'Release':
         //   this.apiAddress = 'http://localhost:3000/';
				break;
			case 'Test':
        this.apiAddress = environment.apiUrl;
				break;
      }
      console.log(developType + ' Mode is running on api :' + this.apiAddress + ' & ' + developType);
	}
	apiUrl(serviceName? ) {
	  const date = new Date();
		return this.apiAddress.concat(serviceName+'?date='+date.getMilliseconds());
	}

  getAllCompanies(){
    return this.httpClient.get(this.apiUrl('companies')).pipe(map(res => res));
  }

  addNewCompany(command) {
    return this.httpClient.post(this.apiUrl('companies') , command).pipe(map(res => res));
  }
  getProductsById(companyId){
    return this.httpClient.get(this.apiUrl(`companies/${companyId}/products`)).pipe(map(res => res));
  }

  addNewProduct(command) {
    return this.httpClient.post(this.apiUrl(`products`) , command).pipe(map(res => res));
  }

}
