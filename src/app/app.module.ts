import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AngularFontAwesomeModule } from 'angular-font-awesome';

import { AppComponent } from './app.component';
import { NavbarComponent } from './navbar-component/my-new-component.component';
import { SliderComponent } from './slider/slider.component';
import { CarouselModule } from 'ngx-bootstrap/carousel';
import { AboutusComponent } from './aboutus/aboutus.component';
import { ContactComponent } from './contact/contact.component';
import { AgmCoreModule } from '@agm/core';
import { StaffComponent } from './staff/staff.component';
import { FooterComponent } from './footer/footer.component';


const AppRoutes: Routes = [
  { path: 'about', component: AboutusComponent },
  { path: 'contact', component: ContactComponent }
]
@NgModule({
  declarations: [
    AppComponent,
    NavbarComponent,
    SliderComponent,
    AboutusComponent,
    ContactComponent,
    StaffComponent,
    FooterComponent
  ],
  imports: [
    CarouselModule.forRoot(),
    BrowserModule,AngularFontAwesomeModule,
    AgmCoreModule.forRoot({
      apiKey: 'AIzaSyDQEZcy3H_qv2CpWwmKheHb55j04zK8-0A'
    }),
    RouterModule.forRoot([
		 {
			path: 'about',
			component: AboutusComponent
      },
     
		  {
			path: 'contact',
			component: ContactComponent
		  }
		 
		])
    
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
