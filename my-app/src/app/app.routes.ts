import { Routes } from '@angular/router';
import { LoginComponent } from './login/login.component';
import { TestComponent } from './test/test.component';
import { SignupComponent } from './signup/signup.component';

export const routes: Routes = [
    {path:"login" , component:LoginComponent},
    {path:"test" , component:TestComponent},
    {path:"signup", component:SignupComponent}
];
