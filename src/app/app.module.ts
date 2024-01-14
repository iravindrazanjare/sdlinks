import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HomeComponent } from './pages/home/home.component';
import { EclipseIdeComponent } from './pages/ide/eclipse-ide/eclipse-ide.component';
import { SpringSuitComponent } from './pages/ide/spring-suit/spring-suit.component';
import { IntelliJComponent } from './pages/ide/intelli-j/intelli-j.component';
import { JdkComponent } from './pages/jdk/jdk/jdk.component';
import { OpenJdkComponent } from './pages/jdk/open-jdk/open-jdk.component';
import { HeaderComponent } from './component/header/header.component';
import { FooterComponent } from './component/footer/footer.component';
import { NavbarComponent } from './component/navbar/navbar.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { MatToolbarModule } from '@angular/material/toolbar';
import { MatButtonModule } from '@angular/material/button';
import { MatMenuModule } from '@angular/material/menu';

@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    EclipseIdeComponent,
    SpringSuitComponent,
    IntelliJComponent,
    JdkComponent,
    OpenJdkComponent,
    HeaderComponent,
    FooterComponent,
    NavbarComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    MatToolbarModule,
    MatButtonModule,
    MatMenuModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
