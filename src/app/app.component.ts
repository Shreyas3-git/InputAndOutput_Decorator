import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'noutput';

  parentSender : string = "Hello from parent component";
  constructor() {

  }

  getData($event)
  {
      console.log($event);
  }
}

