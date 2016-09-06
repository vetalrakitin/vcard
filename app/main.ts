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

@NgModule({
    imports:      [ BrowserModule, routing ],
    declarations: [ AppComponent, HomeComponent, AboutComponent, ContactsComponent, FeedbackComponent],
    providers:[{provide: LocationStrategy, useClass: PathLocationStrategy}],
    bootstrap:    [ AppComponent ]
})
class AppModule { }

platformBrowserDynamic().bootstrapModule(AppModule);

