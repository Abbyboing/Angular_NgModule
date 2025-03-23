import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  standalone: false,
  styleUrl: './app.component.scss'
})
export class AppComponent {
  title = 'first-app-ngModule';

  constructor(){
    console.log('constructor');
  }

  ngOnInit(){
    console.log('ngoninit');
    // this.changeTitle();
  }

  changeTitle(){
    this.title='still a ngModule'
  }
}
