import { BrowserModule } from '@angular/platform-browser';
import { RouterModule, Routes } from '@angular/router';
import { NgModule } from '@angular/core';
import { HttpModule} from '@angular/http';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { AppComponent } from './app.component';
import { LoginComponent } from './login/login.component';
import { HomeComponent } from './home/home.component';
import { RegisterComponent } from './register/register.component';
import { UserQuizComponent } from './user-quiz/user-quiz.component';
import { AdminloginComponent } from './adminlogin/adminlogin.component';
import { CreatequestionComponent } from './createquestion/createquestion.component';
import { SelectQuizComponent } from './select-quiz/select-quiz.component';

import { UseraccountService } from './useraccount.service';


const routes: Routes = [
  { path: '', component: HomeComponent },
  { path: 'login', component: LoginComponent},
  { path: 'createquestion', component: CreatequestionComponent},
  { path: 'adminlogin', component: AdminloginComponent},
  { path: 'register', component: RegisterComponent},
  { path: 'userquiz', component: UserQuizComponent},
  { path: 'selectquiz', component: SelectQuizComponent}


];

@NgModule({
  declarations: [
    AppComponent,
    LoginComponent,
    HomeComponent,
    RegisterComponent,
    UserQuizComponent,
    AdminloginComponent,
    CreatequestionComponent,
    SelectQuizComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    ReactiveFormsModule,
    HttpModule,
    RouterModule.forRoot(routes)
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
