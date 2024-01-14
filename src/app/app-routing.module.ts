import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { EclipseIdeComponent } from './pages/ide/eclipse-ide/eclipse-ide.component';
import { SpringSuitComponent } from './pages/ide/spring-suit/spring-suit.component';
import { IntelliJComponent } from './pages/ide/intelli-j/intelli-j.component';
import { JdkComponent } from './pages/jdk/jdk/jdk.component';
import { OpenJdkComponent } from './pages/jdk/open-jdk/open-jdk.component';
import { AppComponent } from './app.component';

const routes: Routes = [
  { path : 'eclipse', component : EclipseIdeComponent},
  { path : 'springsuit', component : SpringSuitComponent},
  { path : 'intellij', component : IntelliJComponent},
  { path : 'oraclejdk', component : JdkComponent},
  { path : 'openjdkdownload', component : OpenJdkComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
