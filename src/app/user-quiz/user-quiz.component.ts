import { Component, OnInit } from '@angular/core';
import { Router, Params, ActivatedRoute } from '@angular/router';
import { QuizservicesService } from '../quizservices.service';
import { NgModule } from '@angular/core';
import {FormGroup, FormControl, Validators} from '@angular/forms';

@Component({
  selector: 'app-user-quiz',
  templateUrl: './user-quiz.component.html',
  styleUrls: ['./user-quiz.component.css']
})
export class UserQuizComponent implements OnInit {

  constructor(private _route:ActivatedRoute, private _router:Router, private _quizservices:QuizservicesService) { }

  ngOnInit() {
     this._route.params.subscribe(paramsId => {
        this.quizName = paramsId.quizName;
        console.log(this.quizName);
        this._quizservices.getQuiz(this.quizName).subscribe(data=>{
        console.log(quizdata);
    });
     
   }
  }
}
