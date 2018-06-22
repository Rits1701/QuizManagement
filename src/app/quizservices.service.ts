import { Injectable } from '@angular/core';
import { Http, Response, Headers, RequestOptions} from '@angular/http';
import 'rxjs';
import 'rxjs/Rx';
import { Observable } from "rxjs";
import 'rxjs/add/operator/map';


@Injectable({
  providedIn: 'root'
})
export class QuizservicesService {
  constructor(private http:Http) { }

   getQuizName(quiztype:any){ 
     return this.http.get("http://localhost:8080/quizdetail.jsp?quiztype="+quiztype).map(res=>res.json());
  }

   getQuiz(quizName:any){ 
     return this.http.get("http://localhost:8080/quiz.jsp?quizName="+quizName).map(res=>res.json());
  }
  

}
