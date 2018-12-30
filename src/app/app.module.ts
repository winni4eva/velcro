// Modules
import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { MatDialogModule } from '@angular/material';
import { HttpClientModule, HTTP_INTERCEPTORS } from '@angular/common/http';
import { AppRoutingModule } from './app-routing.component';

// Components
import { AppComponent } from './app.component';
import { NavBarComponent } from './nav-bar/nav-bar.component';
import { SideMenuComponent } from './side-menu/side-menu.component';
import { ContentComponent } from './content/content.component';
import { LandingComponent } from './landing/landing.component';
import { FooterComponent } from './footer/footer.component';

// Services
import { CustomHttpInterceptor } from './utils/interceptor/custom-http.interceptor';
import { AuthService } from './auth/auth.service';

@NgModule({
  declarations: [
    AppComponent, NavBarComponent, SideMenuComponent,
    ContentComponent, FooterComponent, LandingComponent
  ],
  imports: [
    BrowserModule, BrowserAnimationsModule, MatDialogModule,
    AppRoutingModule, HttpClientModule
  ],
  providers: [
    AuthService,
    { provide: HTTP_INTERCEPTORS, useClass: CustomHttpInterceptor, multi: true }
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
