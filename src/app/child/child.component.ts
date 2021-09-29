import { Component, OnInit, Output,EventEmitter, Input } from '@angular/core';

@Component({
  selector: 'app-child',
  templateUrl: './child.component.html',
  styleUrls: ['./child.component.scss']
})
export class ChildComponent implements OnInit {

  @Input()
  childReceiver : string ;
  @Output()
  childSender : EventEmitter<string> = new EventEmitter();
  childMessage : string = "Hello from child component:";
  constructor() { }

  ngOnInit(): void {
  }


  sendData()
  {
      this.childSender.emit(this.childMessage);
  }

  getData()
  {
      console.log(this.childReceiver);
  }
}
