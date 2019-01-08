import { HomePageAuthGuard } from './guards/home-page-auth.guard';

import { FormsModule } from '@angular/forms';

import { CommonModule } from '@angular/common';
import { NgModule, ModuleWithProviders } from '@angular/core';
import { HTTP_INTERCEPTORS } from '@angular/common/http';
import { RouterModule } from '@angular/router';

import { NavbarComponent } from './components/navbar/navbar.component';
import { HomeComponent } from './components/home/home.component';
import { SpinnerComponent } from './components/spinner/spinner.component';
import { LoginComponent } from './components/login/login.component';
import { SignupComponent } from './components/signup/signup.component';

import { SpinnerService } from './components/spinner/spinner.service';

import { SpinnerInterceptor } from './interceptors/spinner.interceptor';
import { AuthenticationService } from './services/authentication.service';
import { UserInfoService } from './services/user-info.service';


@NgModule({
  imports: [
    CommonModule,
    RouterModule,
    FormsModule
  ],
  declarations: [
    NavbarComponent,
    HomeComponent,
    SpinnerComponent,
    LoginComponent,
    SignupComponent
  ],
  providers: [
    HomePageAuthGuard
  ],
  exports: [
    NavbarComponent,
    HomeComponent,
    SpinnerComponent
  ],
  entryComponents: [
    LoginComponent,
    SignupComponent
  ]
})
export class CoreModule {
  public static forRoot(): ModuleWithProviders {
    return {
      ngModule: CoreModule,
      providers: [
        SpinnerService,
        AuthenticationService,
        UserInfoService,
        {
          provide: HTTP_INTERCEPTORS,
          useClass: SpinnerInterceptor,
          multi: true
        }
      ]
    };
  }
}
