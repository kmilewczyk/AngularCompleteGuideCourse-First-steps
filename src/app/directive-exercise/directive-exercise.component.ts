import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-directive-exercise',
  templateUrl: './directive-exercise.component.html',
  styleUrls: ['./directive-exercise.component.css']
})
export class DirectiveExerciseComponent implements OnInit {
  revealed = false;
  clicks: number[] = [];

  constructor() { }

  ngOnInit(): void {
  }

  clicked() {
    this.revealed = true;
    this.clicks.push(this.clicks.length + 1);
  }

}
