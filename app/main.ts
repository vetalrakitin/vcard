import { platformBrowserDynamic } from '@angular/platform-browser-dynamic';
import { NgModule }      from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppComponent }  from './components/app/component';
import {HomeComponent} from "./components/home/component";
import {AboutComponent} from "./components/about/component";
import {ContactsComponent} from "./components/contacts/component";
import {FeedbackComponent} from "./components/feedback/component";
import {LocationStrategy, PathLocationStrategy} from '@angular/common';
import {routing} from './components/app.routing';
import { FormsModule }   from '@angular/forms';
import {HTTP_PROVIDERS} from '@angular/http';
import {
  FEEDBACK_URL_BASE
} from './services/feedback.ts';

@NgModule({
    imports:      [ BrowserModule, routing, FormsModule ],
    declarations: [ AppComponent, HomeComponent, AboutComponent, ContactsComponent, FeedbackComponent],
    providers:[{provide: LocationStrategy, useClass: PathLocationStrategy}, HTTP_PROVIDERS, {provide: FEEDBACK_URL_BASE, useValue: '/json/feedback'},],
    bootstrap:    [ AppComponent ]
})
class AppModule { }

platformBrowserDynamic().bootstrapModule(AppModule);

