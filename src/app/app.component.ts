import {Component, OnDestroy, OnInit} from '@angular/core';
import {HttpClient} from '@angular/common/http';
import {TranslateService} from '@ngx-translate/core';
import {Config} from './app.config';
import {RestService} from '../Services/rest.service';
import {NavigationEnd, Router} from '@angular/router';
import {Subscription} from 'rxjs';
import {SwUpdate} from '@angular/service-worker';


export const LSSharedLanguage = {
  language:'chosenLanguage'
};

@Component({
  selector: 'app-root',
  templateUrl:'./app.component.html',
  styleUrls: ['./app.component.scss']
})

export class AppComponent implements  OnInit , OnDestroy{
  isRtl: boolean;
  chosenLanguage;
  headerFooterDisable = false;
  subscription: Subscription;

  constructor(private _service: RestService ,
              private  http: HttpClient ,
              translate: TranslateService ,
              private update: SwUpdate,
              private router: Router){
    update.available.subscribe(event => {
      console.warn(event);
      update.activateUpdate().then( () => {
        document.location.reload();
      });
    });
    this.isRtl = Config.langs.defaultLang.rtl;
    if (window.location.href.includes('http://invoice.radoffice.net')) {
      _service.developOption('Release');
    } else {
       _service.developOption('Test');
      //_service.developOption('Release');

    }

    translate.addLangs([Config.langs.en.name , Config.langs.fa.name]);
    this.chosenLanguage = Config.langs.defaultLang.name;
    translate.setDefaultLang(Config.langs.defaultLang.name);
    localStorage.setItem(LSSharedLanguage.language ,JSON.stringify( Config.langs.defaultLang.name) );

  }
   ngOnInit(): void {

  }

  ngOnDestroy(){
    this.subscription.unsubscribe();
  }



}
