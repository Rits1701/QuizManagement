import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { QuizservicesService } from '../quizservices.service';
import { NgModule } from '@angular/core';

@Component({
  selector: 'app-select-quiz',
  templateUrl: './select-quiz.component.html',
  styleUrls: ['./select-quiz.component.css']
})
export class SelectQuizComponent implements OnInit {

  constructor(private _router:Router, private _quizservices:QuizservicesService) { }

  ngOnInit() {
  }

selectedValue = 1;
selectQuiz()
{
  this._quizservices.getQuizName(this.selectedValue).subscribe(data=>{
  console.log(data)
  })
}  

userQuiz(quizName)
 {
 this._quizservices.getQuestion(this.quizName).subscribe(data=>{
   console.log(data)
  this._router.navigate(['/userquiz'])
  })
 } 
}
