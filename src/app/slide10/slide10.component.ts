import { Component } from '@angular/core';
import {  Router } from '@angular/router';
@Component({
  selector: 'app-slide10',
  templateUrl: './slide10.component.html',
  styleUrls: ['./slide10.component.css']
})
export class Slide10Component {
  selectedAnswer: string | null = null;

  constructor(private router: Router) {}

  selectAnswer(answer: string) {
    this.selectedAnswer = answer;
  }

  submitAnswer() {
    if (this.selectedAnswer) {
      this.router.navigate(['/slide11']); // Navigate to Slide 11
    }
  }

}
